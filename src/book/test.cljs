(ns book.test
  (:require [metaprob.prelude :refer [exp infer-and-score]]
            [metaprob.distributions :refer [flip]]
            [metaprob.generative-functions :refer [at]]
            [crate.core :as crate]
            [oz.core])
  (:require-macros [book.code :as code]
                   [crate.def-macros :refer [defpartial]]
                   [metaprob.generative-functions :refer [gen]]))

;; this namespace seems to need _something_ defined within it or, or
;; during evaluation later we can't defined any symbols
(def foo 10)
