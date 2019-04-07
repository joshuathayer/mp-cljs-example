(ns book.test
  (:require [metaprob.prelude :refer [exp infer-and-score]]
            [metaprob.distributions :refer [flip]]
            [metaprob.generative-functions :refer [at]])
  (:require-macros [book.code :as code]
                   [metaprob.generative-functions :refer [gen]]))
