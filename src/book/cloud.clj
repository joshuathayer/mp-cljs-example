(ns book.cloud)

(defmacro cloud [form]
  `(cljs.core.async.macros/go (let [response (cljs.core.async/<! (http/post "https://mp-eval-wsjmir2jra-uc.a.run.app/eval"
                                     {:src (zp/zprint-str ~form)}))
             _ (println "Response!" response)]
         (-> response :body :result :value))))
