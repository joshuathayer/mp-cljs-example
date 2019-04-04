(ns book.core
  (:refer-clojure :exclude [apply map replicate])
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]

            [book.page-1]
            [book.eval]))

(enable-console-print!)

;; re-frame stuff
;; events
(rf/reg-event-db
  :initialize
  (fn [_ _] {}))

(rf/reg-event-db
 :eval-complete
 (fn [db [_ eval-value]]
   (-> db
       (assoc :evaluating false)
       (assoc :eval-res eval-value))))

(rf/reg-event-db
 :assoc-cm-editor
 (fn [db [_ ed]]
   (assoc db :cm-editor ed)))

;; editor content changes
(rf/reg-event-db
 :cm-changed
 (fn [db [_ cm]]
   (let [content (.getValue (.getDoc cm))]
     (println "cm changed!" content)
     (assoc db :editor-content content))))

;; user clicks eval
(rf/reg-event-fx
 :eval-editor
 (fn [{:keys [db]} [_ _]]
   {:db   (assoc db :evaluating true)
    :eval (:editor-content db)}))

;; do the eval, send an event when done
(rf/reg-fx
 :eval
 (fn [form]
   (book.eval/eval-str
    form
    'book/page-1
    (fn [r] (rf/dispatch [:eval-complete r])))))


;; subs
(rf/reg-sub
 :eval-res
 (fn [db _]
   (:eval-res db)))

;; ---  editor subs
(rf/reg-sub
 :name
 (fn [db _]
   (:name db)))

(rf/reg-sub
 :editor
 (fn [db _]
   (:editor db)))

(rf/reg-sub
 :cm-editor
 (fn [db _]
   (:cm-editor db)))

(rf/reg-sub
 :content
 (fn [db _]
   (:content db)))
;; --- end editor subs

(defn ui
  []
  [:div
   [book.page-1/contents]])

(rf/dispatch-sync [:initialize])

(reagent/render [ui]
                (js/document.getElementById "app"))
