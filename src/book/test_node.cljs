(ns book.test-node
  (:require [metaprob.autodiff :as auto]
            [metaprob.distributions :as d :refer [flip]]
            [metaprob.generative-functions :as gf :refer [at]]
            [metaprob.prelude :as p :refer [infer-and-score]]
            [cljsjs.vega]
            [cljsjs.vega-lite])
  (:require-macros [crate.def-macros :refer [defpartial]]
                   [metaprob.generative-functions :refer [gen]]))

;; this namespace seems to need _something_ defined within it or, or
;; during evaluation later we can't defined any symbols

(defn grid-view
  ([elems] (grid-view elems 3))
  ([elems cols]
   (let [rows (partition-all cols cols elems)]
     [:div {:class "grid-view"}
      (map-indexed (fn [row-ix row]
                     [:div {:class "grid-row"}
                      (map-indexed (fn [col-ix elem]
                                     elem)
                                   row)])
                   rows)])))
