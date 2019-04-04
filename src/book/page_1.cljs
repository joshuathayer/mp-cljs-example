(ns book.page-1
  (:require-macros [book.code :as code])
  (:require [re-frame.core :as rf]
            [reagent.core :as reagent]
            [cljsjs.codemirror]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.comment.comment]))

(defn chapter-header
  [txt]
  [:h1 txt])

(defn part-header
  [txt]
  [:h3 txt])


(defn editor-component [theme content]
  (reagent/create-class
   {:component-did-mount
    (fn [ta]
      (println "I mounted")
      (println "theme" @(rf/subscribe [:theme]))
      (println (reagent/dom-node ta))
      (let [cm (js/CodeMirror.
                (reagent/dom-node ta)
                #js {:mode "clojure"
                     :theme @(rf/subscribe [:theme])
                     :value content
                     :lineNumbers true
                     :lineWrapping true
                     :matchBrackets true})]
        (.on cm "change" (fn [instance] (rf/dispatch [:cm-changed instance])))
        (rf/dispatch-sync [:assoc-cm-editor cm])))

    :component-did-update
    (fn [this old-argv]
      (println "component did update")
      (println "theme" @(rf/subscribe [:theme]))
      (println this)
      (println old-argv)
      (let [cm @(rf/subscribe [:cm-editor])]
        (.setOption cm "theme" @(rf/subscribe [:theme]))))
    ;; name your component for inclusion in error messages
    :display-name "complex-component"

    :component-will-unmount
    (fn []
      (println "component will unmount"))

    ;; note the keyword for this method
    :reagent-render
    (fn []
      (println "reagent-render")
      [:div])}))


(defn contents
  []
  [:div
   [chapter-header "This is a chapter"]
   [part-header "And some code"]

   [:div
    [editor-component
     "default"
     (code/mpcode

      (defn coin-model-1
        "Flip a fair coin"
        [n]
        (let [p 0.5]
          (replicate n (fn [] (flip p)))))

      (defn coin-model-2
        "Flip a painted coin n times: p = 0 or p = 1"
        [n]
        (let [p (uniform-discrete [0 1])]
          (replicate n (fn [] (flip p)))))

      (defn coin-model-3
        "Flip a biased coin n times: p ~ Uniform(0, 1)"
        [n]
        (let [p (uniform 0 1)]
          (replicate n (fn [] (flip p)))))

      (defn coin-model
        "Our simulator first selects an underlying model, then flips the coin n times."
        [n]
        (let [which-model (uniform-discrete [1 2 3])
              flip-coins (nth [coin-model-1 coin-model-2 coin-model-3] (- which-model 1))]
          (flip-coins n))))

     ]
    [:select {:on-change #(rf/dispatch [:assoc-theme (-> % .-target .-value)])}
     [:option "default"]
     [:option "night"]
     [:option "material"]]
    [:button {:on-click #(rf/dispatch [:close-editor])} "close"]]
   [:button {:on-click #(rf/dispatch [:open-editor])} "open"]

   ])
