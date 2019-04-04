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


(defn contents
  []
  [:div
   [chapter-header "This is a chapter"]
   [part-header "And some code"]
   [:p {} "Eval result: " @(rf/subscribe [:eval-res])]
   [:div
    [editor-component
     (code/mpcode

      (ns foo.bar
        (:require [metaprob.prelude :as prelude]
                  [metaprob.distributions :as dist]))

      (defn coin-model-1
        "Flip a fair coin"
        [n]
        (let [p 0.5] (prelude/replicate n (fn [] (dist/flip p)))))

      (coin-model-1 5))]

    [:button {:on-click #(rf/dispatch [:eval-editor])} "eval"]]])
