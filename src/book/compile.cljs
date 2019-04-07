(ns book.compile
  (:require-macros [book.code :as code]
                   [metaprob.generative-functions]
                   [metaprob.autotrace])
  (:require [cljs.analyzer :as ana]
            [cljs.env :as env]
            [cljs.js :as cljs]))

(enable-console-print!)
(def fs (js/require "fs"))

(defonce state (cljs/empty-state #_init-state))

(defn load
  "https://cljs.github.io/api/cljs.js/STARload-fnSTAR"
  [{:keys [name macros path] :as opts} cb]
  (println "want to load" name macros)

  (if (= name 'metaprob.generative-functions)
    (cb {:lang :clj, :source (code/gensrc (symbol metaprob.generative-functions))})
    (cb {:lang :clj, :source ""})))


(defn compile-str [s opts cb]
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:verbose true
                :context :expr}]
      (cljs/compile-str state s nil opts cb))))

(compile-str
 (code/gensrc (symbol metaprob.generative-functions))
 {}
 (fn [s]
   (.writeFile fs
               "resources/js/metaprob.generative_functions.js"
               (:value s)
               #(println "Wrote generative-functions.js"))))

(compile-str
 (code/gensrc (symbol metaprob.autotrace))
 {}
 (fn [s]
   (.writeFile fs "resources/js/metaprob.autotrace.js"
               (:value s) #(println "Wrote autotrace.js"))))
