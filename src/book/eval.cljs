(ns book.eval
  (:require-macros [book.code :as code])
  (:require [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.js :as cljs]
            [metaprob.distributions]
            [book.test]))

(def eval-namespace 'book.test)
(def preloaded-namespaces
  '#{book.test
     metaprob.distributions
     metaprob.prelude})

(defn init-state
  [state]
  (update state ::ana/namespaces
          merge (select-keys (code/analyzer-all) preloaded-namespaces)))

(defonce state (cljs/empty-state init-state))

(defn load
  "https://cljs.github.io/api/cljs.js/STARload-fnSTAR"
  [{:keys [name macros path] :as opts} cb]
  (if (= name 'metaprob.generative-functions)
    (cb {:lang :clj, :source "" #_(code/gensrc)})
    (cb {:lang :clj, :source ""})))

(defn eval-str
  [s ns cb]
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:ns eval-namespace, :context :expr}]
      (cljs/eval-str state s nil opts cb))))
