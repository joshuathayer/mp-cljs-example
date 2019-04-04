(ns book.eval
  (:require
   [replumb.core :as replumb]

   ))

;; (defn handle-result!
;;   [console result]
;;   (let [write-fn (if (replumb/success? result)
;;                    console/write-return!
;;                    console/write-exception!)]
;;     (write-fn console (replumb/unwrap-result result))))

;; (defn cljs-read-eval-print!
;;   [console repl-opts user-input]
;;   (replumb/read-eval-call repl-opts
;;                           (partial handle-result! console)
;;                           user-input))


(defn read-file
  [f cb]
  (println "---- Asked to read file" f)
  (cb ""))

(defn eval-str [form ns cb]
  (replumb/read-eval-call {:verbose true
                           :src-paths ["src"]
                           :read-file-fn! read-file

                           ;; this is uneffective, after reading replumb source
                           :ns ns}
                          cb
                          form))
