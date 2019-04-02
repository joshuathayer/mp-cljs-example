(ns book.core
  (:refer-clojure :exclude [apply map replicate])
  (:require [cljs.test :as test :include-macros true]

            [metaprob.prelude :as prelude :refer [apply map replicate]]
            [metaprob.distributions :as dist :refer [flip uniform uniform-discrete]]

            [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]))

(enable-console-print!)
(println "hello")

(defn coin-model-1 [n]
  (let [p 0.5]
    (replicate n (fn [] (flip p)))))

;; Flip a painted coin n times: p = 0 or p = 1
(defn coin-model-2 [n]
  (let [p (uniform-discrete [0 1])]
    (replicate n (fn [] (flip p)))))

;; Flip a biased coin n times: p ~ Uniform(0, 1)
(defn coin-model-3 [n]
  (let [p (uniform 0 1)]
    (replicate n (fn [] (flip p)))))

;; Our simulator first selects an underlying model, then flips the coin n times.
(defn coin-model [n]
  (let [which-model (uniform-discrete [1 2 3])
        flip-coins (nth [coin-model-1 coin-model-2 coin-model-3] (- which-model 1))]
    (flip-coins n)))


;; re-frame stuff

(rf/reg-event-db
  :initialize
  (fn [_ _] {:coins (coin-model 3)}))

(rf/reg-event-db
 :flip
 (fn [db [_ _]]
   (assoc db :coins (coin-model 3))))


(rf/reg-sub
 :coins
 (fn [db _]
   (:coins db)))


(defn flips
  []
  (let [coins @(rf/subscribe [:coins])]
    [:div.flips
     {}
     [:p (str/join ", " (map #(if % "heads" "tails")
                             coins))]
     [:button
      {:on-click #(rf/dispatch [:flip])}
      "flip coins"]]))


(defn ui
  []
  [:div
   [:h1 "Flipping three coins"]
   [flips]])


(rf/dispatch-sync [:initialize])

(reagent/render [ui]
                (js/document.getElementById "app"))
