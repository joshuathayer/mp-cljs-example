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

(defn read-whitespace
  "Reads up until, but not including, the first non-whitespace character."
  [reader]
  (let [ch (rt/read-char reader)]
    (when-not (nil? ch)
      (if (string/blank? (str ch))
        (recur reader)
        (rt/unread reader ch)))))

(defn eval-strs
  [s ns cb]
  (let [result (volatile! nil)]
    (loop [reader (rt/source-logging-push-back-reader s)]
      (read-whitespace reader)
      (let [line (rt/get-line-number reader)
            col (rt/get-column-number reader)
            [form form-str] (r/read+string reader false ::eof)]
        (if (= ::eof form)
          (cb @result)
          (do (eval-str form-str
                        ns
                        (fn [{:keys [value error ns] :as next-result}]
                          (when error
                            (throw (ex-info "Error evaluating"
                                            {:string form-str
                                             :line line
                                             :col col}
                                            error)))
                          (vreset! result next-result)))
              (recur reader)))))))

#_
(eval-strs "1 2 3 (inc 0)" 'cljs.user prn)

#_
(try
  (eval-strs "1\n2\n      (throw \"unf\")" 'cljs.user prn)
  (catch js/Error e
    e))
