(ns book.test
  (:require [metaprob.prelude :refer [exp infer-and-score]]
            [metaprob.distributions :refer [flip]]
            [metaprob.generative-functions :refer [at]]
            [crate.core :as crate])
  (:require-macros [book.code :as code]
                   [crate.def-macros :refer [defpartial]]
                   [metaprob.generative-functions :refer [gen]]))
