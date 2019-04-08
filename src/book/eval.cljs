(ns book.eval
  (:refer-clojure :exclude [eval])
  (:require-macros [book.code :as code])
  (:require [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.js :as cljs]
            [cljs.tools.reader.reader-types :as rt]
            [cljs.reader :as reader]
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

(defonce state (cljs/empty-state #(preload-namespaces % preloaded-namespaces)))

(defn load
  "https://cljs.github.io/api/cljs.js/STARload-fnSTAR"
  [{:keys [name macros path] :as opts} cb]
  (if (= name 'metaprob.generative-functions)
    (cb {:lang :clj, :source "" #_(code/gensrc)})
    (cb {:lang :clj, :source ""})))

;; TODO: Evaluate forms separately. Currently only works if `s` contains only
;; one form.
(defn eval-str
  [s ns cb]
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:ns eval-namespace, :context :expr}
          stream (rt/string-push-back-reader s)]
      (doall (map #(do
                     (println "going to eval" %)
                     (cljs/eval-str state (print-str %) nil opts cb))
                  (reader/read stream))))))

(defn preload-macro-namespace
  [state ns]
  (let [eval (fn eval [state form cb]
               (binding [cljs/*eval-fn* cljs/js-eval
                         cljs/*load-fn* load]
                 (let [opts {:context :expr}]
                   (cljs/eval (cljs/empty-state) form opts cb))))]
    ;; TODO: This should break the build if the eval fails.
    (eval state
          `(require-macros (quote [~ns]))
          prn)))

(preload-macro-namespace state 'metaprob.generative-functions)
