(ns book.eval
  (:refer-clojure :exclude [eval])
  (:require-macros [book.code :as code])
  (:require [clojure.string :as string]
            [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.js :as cljs]
            [cljs.tools.reader :as r]
            [cljs.tools.reader.reader-types :as rt]
            [metaprob.distributions]
            [book.test]))

(def eval-namespace 'book.test)

;; TODO: Can this all be simplified with cljs.analyzer.api/analyze-file?

;; TODO: These can be inferred from the ns form in test.cljs.
(def preloaded-namespaces
  '#{book.test
     metaprob.distributions
     metaprob.prelude})

(defn preload-namespaces
  [state namespaces]
  (update state ::ana/namespaces
          merge (select-keys (code/analyzer-all) namespaces)))

;; TODO: Evaluate forms separately. Currently only works if `s` contains only
;; one form.
(defn- load
  "https://cljs.github.io/api/cljs.js/STARload-fnSTAR"
  [{:keys [name macros path] :as opts} cb]
  (if (= name 'metaprob.generative-functions)
    (cb {:lang :clj, :source "" #_(code/gensrc)})
    (cb {:lang :clj, :source ""})))

(defn- preload-macro-namespace!
  [state ns]
  (let [eval (fn eval [state form cb]
               (binding [cljs/*eval-fn* cljs/js-eval
                         cljs/*load-fn* load]
                 (let [opts {:context :expr}]
                   (cljs/eval (cljs/empty-state) form opts cb))))]
    ;; TODO: This should break the build if the eval fails.
    (eval state
          `(require-macros (quote [~ns]))
          identity)
    state))

(defonce state
  (cljs/empty-state #(preload-namespaces % preloaded-namespaces)))

;; FIXME: This uses eval, which is async. Race condition here.
(preload-macro-namespace! state 'metaprob.generative-functions)

(defn- eval-str
  [s ns cb]
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:ns eval-namespace, :context :expr}]
      (cljs/eval-str state s nil opts cb))))

(defn- read-chars
  [reader]
  (lazy-seq
   (when-let [ch (rt/read-char reader)]
     (cons ch (read-chars reader)))))

(defn- eof-while-reading?
  [e]
  (string/includes? (ex-message e) "EOF"))

(defn- repl-read-string
  "Returns a vector of the first read form, and any balance text."
  [s ns]
  (try
    (binding [ana/*cljs-ns*    ns
              env/*compiler*   (cljs/empty-state)
              r/resolve-symbol ana/resolve-symbol]
      (let [reader (rt/string-push-back-reader s)]
        [(r/read {:read-cond :allow :features #{:cljs}} reader)
         (apply str (read-chars reader))]))
    (catch :default e
      (throw (ex-info nil {:clojure.error/phase :read-source} e)))))

(defn- is-readable?
  "Returns a string representing any text after the first readable form, nor
  nil if nothing readable."
  [source ns]
  (try
    (second (repl-read-string source ns))
    (catch :default e
      (cond
        (eof-while-reading? (ex-cause e)) nil
        :else ""))))

(defn- load-string
  [s ns cb]
  (let [result (volatile! nil)]
    (loop [source s]
      (if-let [balance-text (and (seq source)
                                 (is-readable? source ns))]
        (do
          (eval-str (subs source 0 (- (count source) (count balance-text)))
                    ns
                    (fn [{:keys [value error ns] :as res}]
                      (when error
                        (throw error))
                      (vreset! result res)))
          (recur balance-text))
        (cb @result)))))

#_
(let [reader (rt/indexing-push-back-reader ":hello\n:world")]
  (prn (r/read reader))
  (prn (rt/get-line-number reader))
  (prn (rt/get-column-number reader)))

#_(load-string "(def x 0) (inc x)" 'cljs.user prn)
#_(load-string "(inc 0) (inc 2)" 'cljs.user prn)
#_(eval-str "(inc 0) (inc 2)" 'cljs.user prn)
#_(load-string "(inc 0) (" prn)
#_(load-string "(inc 0) y" prn)
#_(load-string "((fn f [] (f)))" prn)
