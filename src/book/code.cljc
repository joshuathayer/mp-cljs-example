(ns book.code
  (:require
   [cljfmt.core :as cljfmt :refer [reformat-string]]
   [clojure.pprint :refer [pprint]]
   [zprint.core :as zp]
   [clojure.string :as string]))

(defmacro mpcode [& forms]
  (let [strs (map (fn [f] (zp/zprint-str f {:style :community})) forms)]
    (string/join "\n\n" (vec strs))))
