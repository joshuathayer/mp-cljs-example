clean:
	rm -Rf out

node-repl:
	clj --main cljs.main --target nodejs -co node-cljs-options.edn \
		--compile book.service -re node --repl
.PHONY: node-repl

build-image:
	gcloud builds submit --tag gcr.io/run-example/mp-eval
.PHONY: build-image

deploy:
	gcloud beta run deploy --image gcr.io/run-example/mp-eval
.PHONY: deploy
