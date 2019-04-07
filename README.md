A minimal example of a ClojureScript application which uses [Metaprob](https://github.com/probcomp/metaprob).

    clj --main cljs.main --watch src --compile book.core --repl

You may need to do this, in your js console:

    book.core._main()

Try to precompile macor namespaces. First build a node program which write write the compiled namespaces to the web root,

    clj --main cljs.main --verbose  --target node --output-to precompile.js --compile book.compile

Then run that program. This creates `resources/js/metaprob.generative_functions.js` and `resources/js/metaprob.autotrace.js`.

    node precompile.js
