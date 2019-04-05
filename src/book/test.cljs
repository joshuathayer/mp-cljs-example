(ns book.test
  (:require [metaprob.distributions :as dist :refer [flip]]))

(def x 42)
(def alias dist/flip)
(def referred flip)
(def wrapped #(metaprob.distributions/flip))
