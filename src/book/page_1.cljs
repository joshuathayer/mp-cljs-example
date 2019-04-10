(ns book.page-1
  (:require-macros [book.code :as code])
  (:require [metaprob.prelude :as prelude :refer [apply map replicate]]
            [metaprob.distributions :as dist :refer [flip uniform uniform-discrete]]

            [re-frame.core :as rf]
            [reagent.core :as reagent]
            [cljsjs.codemirror]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.comment.comment]
            [book.eval :as eval]))

(defn chapter-header
  [txt]
  [:h1 txt])

(defn my-flip [v]
  (flip v))

(defn part-header
  [txt]
  [:h3 txt])

(defn editor-component [content]
  (reagent/create-class
   {:component-did-mount
    (fn [ta]
      (let [cm (js/CodeMirror.
                (reagent/dom-node ta)
                #js {:mode "clojure"
                     :theme "default"
                     :value content
                     :lineNumbers true
                     :lineWrapping true
                     :matchBrackets true})]
        (.on cm "change" (fn [instance] (rf/dispatch [:cm-changed instance])))
        (rf/dispatch-sync [:assoc-cm-editor cm])
        (rf/dispatch [:cm-changed cm])))

    ;; :component-did-update
    ;; (fn [this old-argv]
    ;;   (let [cm @(rf/subscribe [:cm-editor])]
    ;;     (.setOption cm "theme" @(rf/subscribe [:theme]))))

    ;; name your component for inclusion in error messages
    :display-name "editor-component"

    :component-will-unmount
    (fn []
      (println "component will unmount"))

    ;; note the keyword for this method
    :reagent-render
    (fn []
      [:div])}))


;; Our result may be a "real" DOM element, as returned by crate.
;; In that case, we can't just return it from a normal component,
;; re-frame expects components to return hiccup. So, we our result
;; component is specially-handled: if it's a DOM component, we use
;; component-did-update to side-effect the DOM with the our result. If
;; the result is not a DOM component, we stringify it and return it as
;; a hiccup value from reagent-render
(defn element-result-component [res]
  (reagent/create-class
   {
    :display-name "result-container"

    :reagent-render
    (fn [res]
      [:div#result-container {}])

    :component-did-mount
    (fn [comp]
      (let [container (.getElementById js/document "result-container")]
        (.appendChild container res)))

    :component-did-update
    (fn [this old-argv]
      (let [container (.getElementById js/document "result-container")
            new-argv (reagent/argv this)]
        (-> container .-firstChild .remove)
        (.appendChild container (second new-argv))))}))

(defn result []
  (let [res @(rf/subscribe [:eval-res])
        _ (println "res" res)]
    (if (instance? js/Element (:value res))
      [element-result-component (:value res)]
      [:div {} (str res)])))

(defn contents
  []
  [:div.container {}
   [:div
    [part-header "Example code evaluation."]
    [:p "Issues:"]
    [:ul
     [:li [:code "(in-ns ...)"] " works, but must be eval'd on its own (using it at the top of the code to be evaulated does not work- only `in-ns` is eval'd)"]]
    [result]]
   [:div
    [editor-component
     (code/mpcode

      ;; (crate/html [:h1 "hello"])
      ;; (time
      ;;  (infer-and-score :procedure
      ;;                   (gen [] (at :flip flip 0.5))
      ;;                   :inputs []
      ;;                   :observation-trace {:flip {:value true}}))

      (defn play-data [& names]
        (for [n names
              i (range 20)]
          {:time i :item n :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))


      (def line-plot
        {:data {:values (play-data "monkey" "slipper" "broom")}
         :encoding {:x {:field "time"}
                    :y {:field "quantity"}
                    :color {:field "item" :type "nominal"}}
         :mark "line"})

      (comment (crate/html [:h1 "this is an h1"]))
      (crate/html [:div [oz.core/vega-lite line-plot]]))]

    [:button {:on-click #(rf/dispatch [:eval-editor])} "eval"]]])
