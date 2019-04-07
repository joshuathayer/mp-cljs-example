(ns book.test
  (:refer-clojure :exclude [map replicate apply])
  (:require [metaprob.prelude :refer [infer-and-score]]
            [metaprob.distributions :refer [flip]])
  (:require-macros [book.code]))

;; (def x (book.code/analyzer-all))
;; (def g (pr-str (gen [] 1)))
;; (def fg
;;   (gen [x]
;;     (inc x)))

;; (def s (book.code/gensrc))
