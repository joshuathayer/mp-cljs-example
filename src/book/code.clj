(ns book.code
  (:require
   [cljs.env :as env]
   [cljfmt.core :as cljfmt :refer [reformat-string]]
   [clojure.pprint :refer [pprint]]
   [zprint.core :as zp]
   [clojure.string :as string]))

(defmacro analyzer-state [[_ ns-sym]]
  `'~(get-in @env/*compiler* [:cljs.analyzer/namespaces ns-sym]))

(defmacro analyzer-all []
  `'~(get @env/*compiler* :cljs.analyzer/namespaces))

(defmacro mpcode [& forms]
  (let [strs (map (fn [f] (zp/zprint-str f {:style :community})) forms)]
    (string/join "\n\n" (vec strs))))
