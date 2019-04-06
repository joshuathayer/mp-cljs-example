(ns book.eval
  (:require-macros [metaprob.generative-functions]
                   [book.code :as code])
  (:require [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.js :as cljs]
            [metaprob.distributions]
            [book.test]))

(defn init-state
  [state]
  (-> state
      (assoc-in [::ana/namespaces 'book.test] (code/analyzer-state 'book.test))))

(defonce state (cljs/empty-state #_init-state))

;; (defn eval-str [form ns cb]
;;   (replumb/read-eval-call {:verbose true
;;                            :src-paths ["src"]
;;                            :read-file-fn! read-file

;;                            ;; this is uneffective, after reading replumb source
;;                            :ns ns}
;;                           cb
;;                           form))

(defn load
  "https://cljs.github.io/api/cljs.js/STARload-fnSTAR"
  [{:keys [name macros path] :as opts} cb]
  (if (= name 'metaprob.generative-functions)
    (cb {:lang :clj, :source (code/gensrc)})
    (cb {:lang :clj, :source ""})))

(defn eval-str
  [s ns cb]
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:verbose true
                :ns 'book.test
                :context :expr}]
      #_(cljs/compile-str state s nil opts prn)
      (cljs/eval-str state s nil opts cb))))
