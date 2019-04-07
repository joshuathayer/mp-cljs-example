(ns book.eval
  (:require-macros [book.code :as code])
  (:require [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.js :as cljs]
            [metaprob.distributions]
            [book.test]))

(defn init-state
  [state]
  (-> state
      (assoc-in [::ana/namespaces 'book.test] (code/analyzer-state 'book.test))
      (assoc-in [::ana/namespaces 'metaprob.distributions] (code/analyzer-state 'metaprob.distributions))))

(defn init-state-all
  [state]
  (-> state
      ;; Maybe trim this down such that it only requires the namespaces used in
      ;; book.test?
      (update [::ana/namespaces] merge (code/analyzer-all))))

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
    (let [opts {:ns 'book.test, :context :expr}]
      (cljs/eval-str state s nil opts cb))))
