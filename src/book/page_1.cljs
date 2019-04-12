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

      (def plot {:$schema
                 "https://vega.github.io/schema/vega-lite/v3.json",
                 :description
                 "A simple bar chart with embedded data.",
                 :data
                 {:values
                  [{:a "A", :b 28}
                   {:a "B", :b 55}
                   {:a "C", :b 43}
                   {:a "D", :b 91}
                   {:a "E", :b 81}
                   {:a "F", :b 53}
                   {:a "G", :b 19}
                   {:a "H", :b 87}
                   {:a "I", :b 52}]},
                 :mark "bar",
                 :encoding
                 {:x {:field "a", :type "ordinal"},
                  :y {:field "b", :type "quantitative"}}})

      #_(html [:h1 "Hello, world!"])
      (vega-lite plot))]

    [:button {:on-click #(rf/dispatch [:eval-editor])} "eval"]]])
