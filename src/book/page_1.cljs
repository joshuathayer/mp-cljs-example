(ns book.page-1
  (:require-macros [book.code :as code]))

(defn chapter-header
  [txt]
  [:h1 txt])

(defn part-header
  [txt]
  [:h3 txt])


(defn contents
  []
  [:div
   [chapter-header "This is a chapter"]
   [part-header "And some code"]


   [:div {}
    (code/mpcode

     (defn coin-model-1 [n]
       (let [p 0.5]
         (replicate n (fn [] (flip p)))))

     (defn coin-model-2
       "Flip a painted coin n times: p = 0 or p = 1"
       [n]
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
         (flip-coins n))))]

   ])
