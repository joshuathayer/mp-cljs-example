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
      (println "reagent-render")
      [:div])}))


;; mpcode is a macro which takes the clojure forms (after the reader),
;; and turns them in to pretty-printed strings.

(defn contents
  []
  [:div
   [part-header "Example code evaluation."]
   [:p "Issues:"]
   [:ul
    [:li [:code "(in-ns ...)"] " works, but must be eval'd on its own (using it at the top of the code to be evaulated does not work- only `in-ns` is eval'd)"]]
   [:p {} "Eval result: " @(rf/subscribe [:eval-res])]
   [:div
    [editor-component
     (code/mpcode
      ((gen [] :ok)))]

    [:button {:on-click #(rf/dispatch [:eval-editor])} "eval"]]])
