(ns book.reader
  (:require [cljfmt.core :as cljfmt :refer [reformat-string]]
            [clojure.string :as str]))

;; (defmacro code [forms]
;;   (let [strs (map (fn [f] (reformat-string (str f))) forms)]
;;     `[:code ~strs]))

(defn safe-form [form]
  (str (quote ~form)))

(defn code [forms]
  (let [fs (map safe-form forms)]
    (str/join "\n" fs)))
