(ns book.eval
  (:require
   [cljs.analyzer :as ana]
   [cljs.env :as env]
   [cljs.js :as cljs]
   [metaprob.distributions]
   [book.test])
  (:require-macros [book.code :as code]))

(defonce state (cljs/empty-state))

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
  (cb nil))

(defn eval-str
  [s ns cb]
  #_(cljs.js/load-analysis-cache! state 'book.test (code/analyzer-state 'book.test))
  (swap! state assoc :cljs.analyzer/namespaces (code/analyzer-all))
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:verbose true
                :ns 'book.test
                :context :expr
                :static-fns true}]
      (print "Compiled to:")
      (cljs/compile-str state s nil opts prn)
      (cljs/eval-str state s nil opts cb))))
