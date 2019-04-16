clean:
	rm -Rf out

node-repl:
	clj --main cljs.main --target nodejs -co node-cljs-options.edn \
		--compile book.service -re node --repl
.PHONY: node-repl
