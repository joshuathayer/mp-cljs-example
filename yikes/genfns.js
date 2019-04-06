goog.provide("metaprob.generative_functions$macros");
metaprob.generative_functions$macros.at = function metaprob$generative_functions$macros$at(
  var_args
) {
  var args__14982__auto__ = [];
  var len__14979__auto___23 = arguments.length;
  var i__14980__auto___24 = 0;
  while (true) {
    if (i__14980__auto___24 < len__14979__auto___23) {
      args__14982__auto__.push(arguments[i__14980__auto___24]);

      var G__25 = i__14980__auto___24 + 1;
      i__14980__auto___24 = G__25;
      continue;
    } else {
    }
    break;
  }

  var argseq__14983__auto__ =
    0 < args__14982__auto__.length
      ? new cljs.core.IndexedSeq(args__14982__auto__.slice(0), 0, null)
      : null;
  return metaprob.generative_functions$macros.at.cljs$core$IFn$_invoke$arity$variadic(
    argseq__14983__auto__
  );
};

metaprob.generative_functions$macros.at.cljs$core$IFn$_invoke$arity$variadic = function(
  args
) {
  throw new Error(
    [
      "Assert failed: ",
      "Cannot invoke at outside of a (gen ...) form.",
      "\n",
      "false"
    ].join("")
  );
};

metaprob.generative_functions$macros.at.cljs$lang$maxFixedArity = 0;

/** @this {Function} */
metaprob.generative_functions$macros.at.cljs$lang$applyTo = function(seq22) {
  var self__14971__auto__ = this;
  return self__14971__auto__.cljs$core$IFn$_invoke$arity$variadic(
    cljs.core.seq.call(null, seq22)
  );
};

metaprob.generative_functions$macros.apply_at = function metaprob$generative_functions$macros$apply_at(
  var_args
) {
  var args__14982__auto__ = [];
  var len__14979__auto___27 = arguments.length;
  var i__14980__auto___28 = 0;
  while (true) {
    if (i__14980__auto___28 < len__14979__auto___27) {
      args__14982__auto__.push(arguments[i__14980__auto___28]);

      var G__29 = i__14980__auto___28 + 1;
      i__14980__auto___28 = G__29;
      continue;
    } else {
    }
    break;
  }

  var argseq__14983__auto__ =
    0 < args__14982__auto__.length
      ? new cljs.core.IndexedSeq(args__14982__auto__.slice(0), 0, null)
      : null;
  return metaprob.generative_functions$macros.apply_at.cljs$core$IFn$_invoke$arity$variadic(
    argseq__14983__auto__
  );
};

metaprob.generative_functions$macros.apply_at.cljs$core$IFn$_invoke$arity$variadic = function(
  args
) {
  throw new Error(
    [
      "Assert failed: ",
      "Cannot invoke apply-at outside of a (gen ...) form.",
      "\n",
      "false"
    ].join("")
  );
};

metaprob.generative_functions$macros.apply_at.cljs$lang$maxFixedArity = 0;

/** @this {Function} */
metaprob.generative_functions$macros.apply_at.cljs$lang$applyTo = function(
  seq26
) {
  var self__14971__auto__ = this;
  return self__14971__auto__.cljs$core$IFn$_invoke$arity$variadic(
    cljs.core.seq.call(null, seq26)
  );
};

metaprob.generative_functions$macros.make_generative_function = function metaprob$generative_functions$macros$make_generative_function(
  var_args
) {
  var G__31 = arguments.length;
  switch (G__31) {
    case 2:
      return metaprob.generative_functions$macros.make_generative_function.cljs$core$IFn$_invoke$arity$2(
        arguments[0],
        arguments[1]
      );

      break;
    case 3:
      return metaprob.generative_functions$macros.make_generative_function.cljs$core$IFn$_invoke$arity$3(
        arguments[0],
        arguments[1],
        arguments[2]
      );

      break;
    default:
      throw new Error(
        [
          "Invalid arity: ",
          cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)
        ].join("")
      );
  }
};

metaprob.generative_functions$macros.make_generative_function.cljs$core$IFn$_invoke$arity$2 = function(
  run_in_clojure,
  make_constrained_generator
) {
  return metaprob.generative_functions$macros.make_generative_function.call(
    null,
    run_in_clojure,
    make_constrained_generator,
    cljs.core.PersistentArrayMap.EMPTY
  );
};

metaprob.generative_functions$macros.make_generative_function.cljs$core$IFn$_invoke$arity$3 = function(
  run_in_clojure,
  make_constrained_generator,
  others
) {
  return cljs.core.with_meta.call(
    null,
    run_in_clojure,
    cljs.core.assoc.call(
      null,
      others,
      new cljs.core.Keyword(
        null,
        "make-constrained-generator",
        "make-constrained-generator",
        602026631
      ),
      make_constrained_generator
    )
  );
};

metaprob.generative_functions$macros.make_generative_function.cljs$lang$maxFixedArity = 3;

metaprob.generative_functions$macros.make_constrained_generator = function metaprob$generative_functions$macros$make_constrained_generator(
  procedure,
  observations
) {
  return (function() {
    var or__13882__auto__ = cljs.core.get.call(
      null,
      cljs.core.meta.call(null, procedure),
      new cljs.core.Keyword(
        null,
        "make-constrained-generator",
        "make-constrained-generator",
        602026631
      )
    );
    if (cljs.core.truth_(or__13882__auto__)) {
      return or__13882__auto__;
    } else {
      return (function(or__13882__auto__) {
        return function(observations__$1) {
          return (function(or__13882__auto__) {
            return (function() {
              var G__33__delegate = function(args) {
                return new cljs.core.PersistentVector(
                  null,
                  3,
                  5,
                  cljs.core.PersistentVector.EMPTY_NODE,
                  [
                    cljs.core.apply.call(null, procedure, args),
                    cljs.core.PersistentArrayMap.EMPTY,
                    0
                  ],
                  null
                );
              };
              var G__33 = function(var_args) {
                var args = null;
                if (arguments.length > 0) {
                  var G__34__i = 0,
                    G__34__a = new Array(arguments.length - 0);
                  while (G__34__i < G__34__a.length) {
                    G__34__a[G__34__i] = arguments[G__34__i + 0];
                    ++G__34__i;
                  }
                  args = new cljs.core.IndexedSeq(G__34__a, 0, null);
                }
                return G__33__delegate.call(this, args);
              };
              G__33.cljs$lang$maxFixedArity = 0;
              G__33.cljs$lang$applyTo = function(arglist__35) {
                var args = cljs.core.seq(arglist__35);
                return G__33__delegate(args);
              };
              G__33.cljs$core$IFn$_invoke$arity$variadic = G__33__delegate;
              return G__33;
            })();
          })(or__13882__auto__);
        };
      })(or__13882__auto__);
    }
  })().call(null, observations);
};
metaprob.generative_functions$macros.generative_function_from_traced_code = function metaprob$generative_functions$macros$generative_function_from_traced_code(
  fn_accepting_tracers,
  metadata
) {
  return metaprob.generative_functions$macros.make_generative_function.call(
    null,
    fn_accepting_tracers.call(
      null,
      (function() {
        var G__39__delegate = function(addr, proc, args) {
          return cljs.core.apply.call(null, proc, args);
        };
        var G__39 = function(addr, proc, var_args) {
          var args = null;
          if (arguments.length > 2) {
            var G__40__i = 0,
              G__40__a = new Array(arguments.length - 2);
            while (G__40__i < G__40__a.length) {
              G__40__a[G__40__i] = arguments[G__40__i + 2];
              ++G__40__i;
            }
            args = new cljs.core.IndexedSeq(G__40__a, 0, null);
          }
          return G__39__delegate.call(this, addr, proc, args);
        };
        G__39.cljs$lang$maxFixedArity = 2;
        G__39.cljs$lang$applyTo = function(arglist__41) {
          var addr = cljs.core.first(arglist__41);
          arglist__41 = cljs.core.next(arglist__41);
          var proc = cljs.core.first(arglist__41);
          var args = cljs.core.rest(arglist__41);
          return G__39__delegate(addr, proc, args);
        };
        G__39.cljs$core$IFn$_invoke$arity$variadic = G__39__delegate;
        return G__39;
      })(),
      function(addr, proc, args) {
        return cljs.core.apply.call(null, proc, args);
      }
    ),
    function(observations) {
      return metaprob.generative_functions$macros.generative_function_from_traced_code.call(
        null,
        function(at, apply_at) {
          return (function() {
            var G__42__delegate = function(args) {
              var score = cljs.core.atom.call(null, 0);
              var trace = cljs.core.atom.call(
                null,
                cljs.core.PersistentArrayMap.EMPTY
              );
              var apply_at_impl = (function(score, trace) {
                return function(addr, gf, args__$1) {
                  var vec__36 = apply_at.call(
                    null,
                    addr,
                    metaprob.generative_functions$macros.make_constrained_generator.call(
                      null,
                      gf,
                      metaprob.trace.maybe_subtrace.call(
                        null,
                        observations,
                        addr
                      )
                    ),
                    args__$1
                  );
                  var v = cljs.core.nth.call(null, vec__36, 0, null);
                  var tr = cljs.core.nth.call(null, vec__36, 1, null);
                  var s = cljs.core.nth.call(null, vec__36, 2, null);
                  cljs.core.swap_BANG_.call(null, score, cljs.core._PLUS_, s);

                  cljs.core.swap_BANG_.call(
                    null,
                    trace,
                    metaprob.trace.merge_subtrace,
                    addr,
                    tr
                  );

                  return v;
                };
              })(score, trace);
              var at_impl = (function(score, trace, apply_at_impl) {
                return (function() {
                  var G__43__delegate = function(addr, gf, args__$1) {
                    return apply_at_impl.call(null, addr, gf, args__$1);
                  };
                  var G__43 = function(addr, gf, var_args) {
                    var args__$1 = null;
                    if (arguments.length > 2) {
                      var G__44__i = 0,
                        G__44__a = new Array(arguments.length - 2);
                      while (G__44__i < G__44__a.length) {
                        G__44__a[G__44__i] = arguments[G__44__i + 2];
                        ++G__44__i;
                      }
                      args__$1 = new cljs.core.IndexedSeq(G__44__a, 0, null);
                    }
                    return G__43__delegate.call(this, addr, gf, args__$1);
                  };
                  G__43.cljs$lang$maxFixedArity = 2;
                  G__43.cljs$lang$applyTo = function(arglist__45) {
                    var addr = cljs.core.first(arglist__45);
                    arglist__45 = cljs.core.next(arglist__45);
                    var gf = cljs.core.first(arglist__45);
                    var args__$1 = cljs.core.rest(arglist__45);
                    return G__43__delegate(addr, gf, args__$1);
                  };
                  G__43.cljs$core$IFn$_invoke$arity$variadic = G__43__delegate;
                  return G__43;
                })();
              })(score, trace, apply_at_impl);
              var result = cljs.core.apply.call(
                null,
                fn_accepting_tracers.call(null, at_impl, apply_at_impl),
                args
              );
              return new cljs.core.PersistentVector(
                null,
                3,
                5,
                cljs.core.PersistentVector.EMPTY_NODE,
                [
                  result,
                  cljs.core.deref.call(null, trace),
                  cljs.core.deref.call(null, score)
                ],
                null
              );
            };
            var G__42 = function(var_args) {
              var args = null;
              if (arguments.length > 0) {
                var G__46__i = 0,
                  G__46__a = new Array(arguments.length - 0);
                while (G__46__i < G__46__a.length) {
                  G__46__a[G__46__i] = arguments[G__46__i + 0];
                  ++G__46__i;
                }
                args = new cljs.core.IndexedSeq(G__46__a, 0, null);
              }
              return G__42__delegate.call(this, args);
            };
            G__42.cljs$lang$maxFixedArity = 0;
            G__42.cljs$lang$applyTo = function(arglist__47) {
              var args = cljs.core.seq(arglist__47);
              return G__42__delegate(args);
            };
            G__42.cljs$core$IFn$_invoke$arity$variadic = G__42__delegate;
            return G__42;
          })();
        },
        new cljs.core.PersistentArrayMap(
          null,
          1,
          [
            new cljs.core.Keyword(null, "name", "name", 1843675177),
            new cljs.core.Symbol(
              null,
              "make-constrained-generator-impl",
              "make-constrained-generator-impl",
              923554373,
              null
            )
          ],
          null
        )
      );
    },
    metadata
  );
};
var ret__15012__auto___51 = (function() {
  metaprob.generative_functions$macros.gen = function metaprob$generative_functions$macros$gen(
    var_args
  ) {
    var args__14982__auto__ = [];
    var len__14979__auto___52 = arguments.length;
    var i__14980__auto___53 = 0;
    while (true) {
      if (i__14980__auto___53 < len__14979__auto___52) {
        args__14982__auto__.push(arguments[i__14980__auto___53]);

        var G__54 = i__14980__auto___53 + 1;
        i__14980__auto___53 = G__54;
        continue;
      } else {
      }
      break;
    }

    var argseq__14983__auto__ =
      2 < args__14982__auto__.length
        ? new cljs.core.IndexedSeq(args__14982__auto__.slice(2), 0, null)
        : null;
    return metaprob.generative_functions$macros.gen.cljs$core$IFn$_invoke$arity$variadic(
      arguments[0],
      arguments[1],
      argseq__14983__auto__
    );
  };

  metaprob.generative_functions$macros.gen.cljs$core$IFn$_invoke$arity$variadic = function(
    _AMPERSAND_form,
    _AMPERSAND_env,
    _
  ) {
    var expr = _AMPERSAND_form;
    var body = metaprob.code_handlers.gen_body.call(null, expr);
    var name = metaprob.code_handlers.gen_name.call(null, expr);
    var tracer_name = new cljs.core.Symbol(null, "at", "at", -1177484420, null);
    var apply_tracer_name = new cljs.core.Symbol(
      null,
      "apply-at",
      "apply-at",
      1320572267,
      null
    );
    var params = metaprob.code_handlers.gen_pattern.call(null, expr);
    var thunk_name = cljs.core.truth_(name)
      ? cljs.core.gensym.call(
          null,
          [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name), "thunk"].join("")
        )
      : null;
    var named_fn_body = cljs.core.truth_(name)
      ? cljs.core.sequence.call(
          null,
          cljs.core.concat.call(
            null,
            new cljs.core.List(
              null,
              cljs.core.sequence.call(
                null,
                cljs.core.concat.call(
                  null,
                  new cljs.core.List(
                    null,
                    new cljs.core.Symbol(
                      "cljs.core",
                      "let",
                      "cljs.core/let",
                      -308701135,
                      null
                    ),
                    null,
                    1,
                    null
                  ),
                  new cljs.core.List(
                    null,
                    cljs.core.vec.call(
                      null,
                      cljs.core.sequence.call(
                        null,
                        cljs.core.concat.call(
                          null,
                          new cljs.core.List(null, name, null, 1, null),
                          new cljs.core.List(
                            null,
                            cljs.core.sequence.call(
                              null,
                              cljs.core.concat.call(
                                null,
                                new cljs.core.List(
                                  null,
                                  thunk_name,
                                  null,
                                  1,
                                  null
                                )
                              )
                            ),
                            null,
                            1,
                            null
                          )
                        )
                      )
                    ),
                    null,
                    1,
                    null
                  ),
                  body
                )
              ),
              null,
              1,
              null
            )
          )
        )
      : body;
    var innermost_fn_expr = cljs.core.sequence.call(
      null,
      cljs.core.concat.call(
        null,
        new cljs.core.List(
          null,
          new cljs.core.Symbol(
            "cljs.core",
            "fn",
            "cljs.core/fn",
            -1065745098,
            null
          ),
          null,
          1,
          null
        ),
        new cljs.core.List(null, params, null, 1, null),
        named_fn_body
      )
    );
    var generative_function_expression = cljs.core.sequence.call(
      null,
      cljs.core.concat.call(
        null,
        new cljs.core.List(
          null,
          new cljs.core.Symbol(
            "metaprob.generative-functions",
            "generative-function-from-traced-code",
            "metaprob.generative-functions/generative-function-from-traced-code",
            -412033167,
            null
          ),
          null,
          1,
          null
        ),
        new cljs.core.List(
          null,
          cljs.core.sequence.call(
            null,
            cljs.core.concat.call(
              null,
              new cljs.core.List(
                null,
                new cljs.core.Symbol(
                  "cljs.core",
                  "fn",
                  "cljs.core/fn",
                  -1065745098,
                  null
                ),
                null,
                1,
                null
              ),
              new cljs.core.List(
                null,
                cljs.core.vec.call(
                  null,
                  cljs.core.sequence.call(
                    null,
                    cljs.core.concat.call(
                      null,
                      new cljs.core.List(null, tracer_name, null, 1, null),
                      new cljs.core.List(null, apply_tracer_name, null, 1, null)
                    )
                  )
                ),
                null,
                1,
                null
              ),
              new cljs.core.List(null, innermost_fn_expr, null, 1, null)
            )
          ),
          null,
          1,
          null
        ),
        new cljs.core.List(
          null,
          cljs.core.apply.call(
            null,
            cljs.core.array_map,
            cljs.core.sequence.call(
              null,
              cljs.core.concat.call(
                null,
                new cljs.core.List(
                  null,
                  new cljs.core.Keyword(null, "name", "name", 1843675177),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  cljs.core.sequence.call(
                    null,
                    cljs.core.concat.call(
                      null,
                      new cljs.core.List(
                        null,
                        new cljs.core.Symbol(
                          null,
                          "quote",
                          "quote",
                          1377916282,
                          null
                        ),
                        null,
                        1,
                        null
                      ),
                      new cljs.core.List(null, name, null, 1, null)
                    )
                  ),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  new cljs.core.Keyword(
                    null,
                    "generative-source",
                    "generative-source",
                    -1373253399
                  ),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  cljs.core.sequence.call(
                    null,
                    cljs.core.concat.call(
                      null,
                      new cljs.core.List(
                        null,
                        new cljs.core.Symbol(
                          null,
                          "quote",
                          "quote",
                          1377916282,
                          null
                        ),
                        null,
                        1,
                        null
                      ),
                      new cljs.core.List(null, expr, null, 1, null)
                    )
                  ),
                  null,
                  1,
                  null
                )
              )
            )
          ),
          null,
          1,
          null
        )
      )
    );
    if (cljs.core.truth_(name)) {
      return cljs.core.sequence.call(
        null,
        cljs.core.concat.call(
          null,
          new cljs.core.List(
            null,
            cljs.core.sequence.call(
              null,
              cljs.core.concat.call(
                null,
                new cljs.core.List(
                  null,
                  new cljs.core.Symbol(
                    "cljs.core",
                    "fn",
                    "cljs.core/fn",
                    -1065745098,
                    null
                  ),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(null, thunk_name, null, 1, null),
                new cljs.core.List(
                  null,
                  cljs.core.vec.call(
                    null,
                    cljs.core.sequence.call(null, cljs.core.concat.call(null))
                  ),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  generative_function_expression,
                  null,
                  1,
                  null
                )
              )
            ),
            null,
            1,
            null
          )
        )
      );
    } else {
      return generative_function_expression;
    }
  };

  metaprob.generative_functions$macros.gen.cljs$lang$maxFixedArity = 2;

  /** @this {Function} */
  metaprob.generative_functions$macros.gen.cljs$lang$applyTo = function(seq48) {
    var G__49 = cljs.core.first.call(null, seq48);
    var seq48__$1 = cljs.core.next.call(null, seq48);
    var G__50 = cljs.core.first.call(null, seq48__$1);
    var seq48__$2 = cljs.core.next.call(null, seq48__$1);
    var self__14970__auto__ = this;
    return self__14970__auto__.cljs$core$IFn$_invoke$arity$variadic(
      G__49,
      G__50,
      seq48__$2
    );
  };

  return null;
})();
metaprob.generative_functions$macros.gen.cljs$lang$macro = true;

var ret__15012__auto___63 = (function() {
  metaprob.generative_functions$macros.let_traced = function metaprob$generative_functions$macros$let_traced(
    var_args
  ) {
    var args__14982__auto__ = [];
    var len__14979__auto___64 = arguments.length;
    var i__14980__auto___65 = 0;
    while (true) {
      if (i__14980__auto___65 < len__14979__auto___64) {
        args__14982__auto__.push(arguments[i__14980__auto___65]);

        var G__66 = i__14980__auto___65 + 1;
        i__14980__auto___65 = G__66;
        continue;
      } else {
      }
      break;
    }

    var argseq__14983__auto__ =
      3 < args__14982__auto__.length
        ? new cljs.core.IndexedSeq(args__14982__auto__.slice(3), 0, null)
        : null;
    return metaprob.generative_functions$macros.let_traced.cljs$core$IFn$_invoke$arity$variadic(
      arguments[0],
      arguments[1],
      arguments[2],
      argseq__14983__auto__
    );
  };

  metaprob.generative_functions$macros.let_traced.cljs$core$IFn$_invoke$arity$variadic = function(
    _AMPERSAND_form,
    _AMPERSAND_env,
    bindings,
    body
  ) {
    var binding_pairs = cljs.core.partition.call(null, 2, bindings);
    var trace_with_name = (function(binding_pairs) {
      return function metaprob$generative_functions$macros$trace_with_name(
        expr,
        name
      ) {
        while (true) {
          if (
            cljs.core.truth_(
              metaprob.code_handlers.if_expr_QMARK_.call(null, expr)
            )
          ) {
            return cljs.core.sequence.call(
              null,
              cljs.core.concat.call(
                null,
                new cljs.core.List(
                  null,
                  new cljs.core.Symbol(null, "if", "if", 1181717262, null),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  metaprob$generative_functions$macros$trace_with_name.call(
                    null,
                    metaprob.code_handlers.if_predicate.call(null, expr),
                    name
                  ),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  metaprob$generative_functions$macros$trace_with_name.call(
                    null,
                    metaprob.code_handlers.if_then_clause.call(null, expr),
                    name
                  ),
                  null,
                  1,
                  null
                ),
                new cljs.core.List(
                  null,
                  metaprob$generative_functions$macros$trace_with_name.call(
                    null,
                    metaprob.code_handlers.if_else_clause.call(null, expr),
                    name
                  ),
                  null,
                  1,
                  null
                )
              )
            );
          } else {
            if (
              cljs.core.truth_(
                metaprob.code_handlers.do_expr_QMARK_.call(null, expr)
              )
            ) {
              return cljs.core.cons.call(
                null,
                new cljs.core.Symbol(null, "do", "do", 1686842252, null),
                cljs.core.map.call(
                  null,
                  (function(expr, name, binding_pairs) {
                    return function(p1__1_SHARP_) {
                      return metaprob$generative_functions$macros$trace_with_name.call(
                        null,
                        p1__1_SHARP_,
                        name
                      );
                    };
                  })(expr, name, binding_pairs),
                  cljs.core.rest.call(null, expr)
                )
              );
            } else {
              if (
                cljs.core.truth_(
                  (function() {
                    var or__13882__auto__ = !cljs.core.seq_QMARK_.call(
                      null,
                      expr
                    );
                    if (or__13882__auto__) {
                      return or__13882__auto__;
                    } else {
                      var or__13882__auto____$1 = cljs.core.special_symbol_QMARK_.call(
                        null,
                        cljs.core.first.call(null, expr)
                      );
                      if (or__13882__auto____$1) {
                        return or__13882__auto____$1;
                      } else {
                        var or__13882__auto____$2 = metaprob.code_handlers.let_expr_QMARK_.call(
                          null,
                          expr
                        );
                        if (cljs.core.truth_(or__13882__auto____$2)) {
                          return or__13882__auto____$2;
                        } else {
                          var or__13882__auto____$3 = metaprob.code_handlers.let_traced_expr_QMARK_.call(
                            null,
                            expr
                          );
                          if (cljs.core.truth_(or__13882__auto____$3)) {
                            return or__13882__auto____$3;
                          } else {
                            var or__13882__auto____$4 = metaprob.code_handlers.fn_expr_QMARK_.call(
                              null,
                              expr
                            );
                            if (cljs.core.truth_(or__13882__auto____$4)) {
                              return or__13882__auto____$4;
                            } else {
                              return metaprob.code_handlers.gen_expr_QMARK_.call(
                                null,
                                expr
                              );
                            }
                          }
                        }
                      }
                    }
                  })()
                )
              ) {
                return expr;
              } else {
                if (
                  cljs.core.not_EQ_.call(
                    null,
                    cljs.analyzer.macroexpand_1.call(
                      null,
                      _AMPERSAND_env,
                      expr
                    ),
                    expr
                  )
                ) {
                  var G__67 = cljs.analyzer.macroexpand_1.call(
                    null,
                    _AMPERSAND_env,
                    expr
                  );
                  var G__68 = name;
                  expr = G__67;
                  name = G__68;
                  continue;
                } else {
                  return cljs.core.sequence.call(
                    null,
                    cljs.core.concat.call(
                      null,
                      new cljs.core.List(
                        null,
                        new cljs.core.Symbol(
                          null,
                          "at",
                          "at",
                          -1177484420,
                          null
                        ),
                        null,
                        1,
                        null
                      ),
                      new cljs.core.List(null, name, null, 1, null),
                      expr
                    )
                  );
                }
              }
            }
          }
          break;
        }
      };
    })(binding_pairs);
    var convert_binding = (function(binding_pairs, trace_with_name) {
      return function(p__59) {
        var vec__60 = p__59;
        var lhs = cljs.core.nth.call(null, vec__60, 0, null);
        var rhs = cljs.core.nth.call(null, vec__60, 1, null);
        if (lhs instanceof cljs.core.Symbol) {
          return new cljs.core.PersistentVector(
            null,
            2,
            5,
            cljs.core.PersistentVector.EMPTY_NODE,
            [
              lhs,
              trace_with_name.call(
                null,
                rhs,
                cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs)
              )
            ],
            null
          );
        } else {
          return new cljs.core.PersistentVector(
            null,
            2,
            5,
            cljs.core.PersistentVector.EMPTY_NODE,
            [lhs, rhs],
            null
          );
        }
      };
    })(binding_pairs, trace_with_name);
    var new_bindings = cljs.core.vec.call(
      null,
      cljs.core.apply.call(
        null,
        cljs.core.concat,
        cljs.core.map.call(null, convert_binding, binding_pairs)
      )
    );
    return cljs.core.sequence.call(
      null,
      cljs.core.concat.call(
        null,
        new cljs.core.List(
          null,
          new cljs.core.Symbol(
            "cljs.core",
            "let",
            "cljs.core/let",
            -308701135,
            null
          ),
          null,
          1,
          null
        ),
        new cljs.core.List(null, new_bindings, null, 1, null),
        body
      )
    );
  };

  metaprob.generative_functions$macros.let_traced.cljs$lang$maxFixedArity = 3;

  /** @this {Function} */
  metaprob.generative_functions$macros.let_traced.cljs$lang$applyTo = function(
    seq55
  ) {
    var G__56 = cljs.core.first.call(null, seq55);
    var seq55__$1 = cljs.core.next.call(null, seq55);
    var G__57 = cljs.core.first.call(null, seq55__$1);
    var seq55__$2 = cljs.core.next.call(null, seq55__$1);
    var G__58 = cljs.core.first.call(null, seq55__$2);
    var seq55__$3 = cljs.core.next.call(null, seq55__$2);
    var self__14970__auto__ = this;
    return self__14970__auto__.cljs$core$IFn$_invoke$arity$variadic(
      G__56,
      G__57,
      G__58,
      seq55__$3
    );
  };

  return null;
})();
metaprob.generative_functions$macros.let_traced.cljs$lang$macro = true;
