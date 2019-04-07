(ns book.test
  (:refer-clojure :exclude [eval])
  (:require [cljs.js :as cljs]
            [metaprob.prelude :refer [infer-and-score]]
            [metaprob.distributions :refer [flip]]
            [metaprob.generative-functions :refer [at]])
  (:require-macros [book.code :as code]
                   [metaprob.generative-functions :refer [gen]]))

(defn load
  [_ cb]
  (cb {:lang :clj, :source ""}))

(defn eval
  [form cb]
  (binding [cljs/*eval-fn* cljs/js-eval
            cljs/*load-fn* load]
    (let [opts {:verbose true, :context :expr}]
      (cljs/eval (cljs/empty-state) form opts cb))))

(eval '(require-macros '[metaprob.generative-functions]) prn)
