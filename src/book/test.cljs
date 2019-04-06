(ns book.test
  (:refer-clojure :exclude [map replicate apply])
  (:require [metaprob.prelude :refer [infer-and-score]]
            [metaprob.distributions :refer [flip]])
  (:require-macros [book.code]))
