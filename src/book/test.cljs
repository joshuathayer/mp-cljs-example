(ns book.test
  (:require [metaprob.autodiff :as auto]
            [metaprob.distributions :as d :refer [flip]]
            [metaprob.generative-functions :as gf :refer [at]]
            [metaprob.prelude :as p :refer [infer-and-score]]
            [crate.core :as crate :refer [html]]
            [cljsjs.vega]
            [cljsjs.vega-lite])
  (:require-macros [book.code :as code]
                   [crate.def-macros :refer [defpartial]]
                   [metaprob.generative-functions :refer [gen]]))

;; this namespace seems to need _something_ defined within it or, or
;; during evaluation later we can't defined any symbols

(defonce next-id (atom 0))

(defn id
  []
  (str "viz-" (swap! next-id inc)))

(defn vega-lite
  [spec]
  (crate/html
   (let [id (id)]
     [:div
      [:div {:id id}]
      [:script {:type "text/javascript"}
       (str "vegaEmbed('#" (str id) "', " (js/JSON.stringify (clj->js spec)) ")")]])))

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
