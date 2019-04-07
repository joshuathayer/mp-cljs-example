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

(defmacro gensrc [the-ns]
  ;; I have no idea why `the-ns` is not just a symbol here, but it's not.
  (some->> (second the-ns)
           ns-publics
           vals
           first
           meta
           :file
           (.getResourceAsStream (clojure.lang.RT/baseLoader))
           org.apache.commons.io.IOUtils/toString))
