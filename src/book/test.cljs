(ns book.test
  (:require [metaprob.prelude :refer [exp infer-and-score]]
            [metaprob.distributions :refer [flip]]
            [metaprob.generative-functions :refer [at]]
            [crate.core :as crate :refer [html]]
            [cljsjs.vega]
            [cljsjs.vega-lite])
  (:require-macros [book.code :as code]
                   [crate.def-macros :refer [defpartial]]
                   [metaprob.generative-functions :refer [gen]]))

;; this namespace seems to need _something_ defined within it or, or
;; during evaluation later we can't defined any symbols

(defn vega-lite-hiccup
  [spec id]
  [:div
   [:div {:id id}]
   [:script {:type "text/javascript"}
    (str "vegaEmbed('#" (str id) "', " (js/JSON.stringify (clj->js spec)) ")")]])

(defn vega-lite
  ([spec] (vega-lite spec "vis"))
  ([spec id] (crate/html (vega-lite-hiccup spec id))))

(defn grid-view
  [rows]
  [:div {:class "grid-view"}
   (map-indexed (fn [row-ix r]
                  [:div {:class "grid-row"}
                   (map-indexed (fn [col-ix spec]
                                  (vega-lite spec (str "vis-" row-ix "-" col-ix)))
                                r)])
                rows)])
