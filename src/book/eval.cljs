(ns book.eval
  (:require
   [cljs.analyzer :as ana]
   [cljs.env :as env]
   [cljs.js :as cljs]
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
  (enable-console-print!)
  (print "Loading dependency: ")
  (prn opts)
  (cb {:lang :clj, :source ""}))

(defn load-library-analysis-cache! [ns]
  (cljs.js/load-analysis-cache! state 'library.core (code/analyzer-state 'book.test))
  nil)

(defn eval-str
  [s ns cb]
  (load-library-analysis-cache! 'book.test)
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (println "Evaluating ")
    (prn s)
    (println "in ns")
    (prn ns)
    (cljs/compile-str state s nil {:verbose true, :ns 'book.test, :context :expr} cb)))
