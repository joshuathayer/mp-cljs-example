goog.provide('metaprob.generative_functions');
goog.require('cljs.core');
goog.require('cljs.analyzer');
goog.require('metaprob.code_handlers');
goog.require('metaprob.trace');
(function (){
metaprob.generative_functions.at = (function metaprob$generative_functions$at(var_args){
var args__6514__auto__ = [];
var len__6511__auto___72 = arguments.length;
var i__6512__auto___73 = (0);
while(true){
if((i__6512__auto___73 < len__6511__auto___72)){
args__6514__auto__.push((arguments[i__6512__auto___73]));

var G__74 = (i__6512__auto___73 + (1));
i__6512__auto___73 = G__74;
continue;
} else {
}
break;
}

var argseq__6515__auto__ = ((((0) < args__6514__auto__.length))?(new cljs.core.IndexedSeq(args__6514__auto__.slice((0)),(0),null)):null);
return metaprob.generative_functions.at.cljs$core$IFn$_invoke$arity$variadic(argseq__6515__auto__);
});

metaprob.generative_functions.at.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(["Assert failed: ","Cannot invoke at outside of a (gen ...) form.","\n","false"].join('')));

});

metaprob.generative_functions.at.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
metaprob.generative_functions.at.cljs$lang$applyTo = (function (seq71){
var self__6503__auto__ = this;
return self__6503__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71));
});

return null;
})()
(function (){
metaprob.generative_functions.apply_at = (function metaprob$generative_functions$apply_at(var_args){
var args__6514__auto__ = [];
var len__6511__auto___76 = arguments.length;
var i__6512__auto___77 = (0);
while(true){
if((i__6512__auto___77 < len__6511__auto___76)){
args__6514__auto__.push((arguments[i__6512__auto___77]));

var G__78 = (i__6512__auto___77 + (1));
i__6512__auto___77 = G__78;
continue;
} else {
}
break;
}

var argseq__6515__auto__ = ((((0) < args__6514__auto__.length))?(new cljs.core.IndexedSeq(args__6514__auto__.slice((0)),(0),null)):null);
return metaprob.generative_functions.apply_at.cljs$core$IFn$_invoke$arity$variadic(argseq__6515__auto__);
});

metaprob.generative_functions.apply_at.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(["Assert failed: ","Cannot invoke apply-at outside of a (gen ...) form.","\n","false"].join('')));

});

metaprob.generative_functions.apply_at.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
metaprob.generative_functions.apply_at.cljs$lang$applyTo = (function (seq75){
var self__6503__auto__ = this;
return self__6503__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75));
});

return null;
})()
(function (){
metaprob.generative_functions.make_generative_function = (function metaprob$generative_functions$make_generative_function(var_args){
var G__80 = arguments.length;
switch (G__80) {
case (2):
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$2 = (function (run_in_clojure,make_constrained_generator){
return metaprob.generative_functions.make_generative_function.call(null,run_in_clojure,make_constrained_generator,cljs.core.PersistentArrayMap.EMPTY);
});

metaprob.generative_functions.make_generative_function.cljs$core$IFn$_invoke$arity$3 = (function (run_in_clojure,make_constrained_generator,others){
return cljs.core.with_meta.call(null,run_in_clojure,cljs.core.assoc.call(null,others,new cljs.core.Keyword(null,"make-constrained-generator","make-constrained-generator",(602026631)),make_constrained_generator));
});

metaprob.generative_functions.make_generative_function.cljs$lang$maxFixedArity = (3);

return null;
})()
metaprob.generative_functions.make_constrained_generator = (function metaprob$generative_functions$make_constrained_generator(procedure,observations){
return (function (){var or__5414__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,procedure),new cljs.core.Keyword(null,"make-constrained-generator","make-constrained-generator",(602026631)));
if(cljs.core.truth_(or__5414__auto__)){
return or__5414__auto__;
} else {
return ((function (or__5414__auto__){
return (function (observations__$1){
return ((function (or__5414__auto__){
return (function() {
var G__82__delegate = function (args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,procedure,args),cljs.core.PersistentArrayMap.EMPTY,(0)], null);
};
var G__82 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83__i = 0, G__83__a = new Array(arguments.length -  0);
while (G__83__i < G__83__a.length) {G__83__a[G__83__i] = arguments[G__83__i + 0]; ++G__83__i;}
  args = new cljs.core.IndexedSeq(G__83__a,0,null);
}
return G__82__delegate.call(this,args);};
G__82.cljs$lang$maxFixedArity = 0;
G__82.cljs$lang$applyTo = (function (arglist__84){
var args = cljs.core.seq(arglist__84);
return G__82__delegate(args);
});
G__82.cljs$core$IFn$_invoke$arity$variadic = G__82__delegate;
return G__82;
})()
;
;})(or__5414__auto__))
});
;})(or__5414__auto__))
}
})().call(null,observations);
})

metaprob.generative_functions.generative_function_from_traced_code = (function metaprob$generative_functions$generative_function_from_traced_code(fn_accepting_tracers,metadata){
return metaprob.generative_functions.make_generative_function.call(null,fn_accepting_tracers.call(null,(function() {
var G__88__delegate = function (addr,proc,args){
return cljs.core.apply.call(null,proc,args);
};
var G__88 = function (addr,proc,var_args){
var args = null;
if (arguments.length > 2) {
var G__89__i = 0, G__89__a = new Array(arguments.length -  2);
while (G__89__i < G__89__a.length) {G__89__a[G__89__i] = arguments[G__89__i + 2]; ++G__89__i;}
  args = new cljs.core.IndexedSeq(G__89__a,0,null);
}
return G__88__delegate.call(this,addr,proc,args);};
G__88.cljs$lang$maxFixedArity = 2;
G__88.cljs$lang$applyTo = (function (arglist__90){
var addr = cljs.core.first(arglist__90);
arglist__90 = cljs.core.next(arglist__90);
var proc = cljs.core.first(arglist__90);
var args = cljs.core.rest(arglist__90);
return G__88__delegate(addr,proc,args);
});
G__88.cljs$core$IFn$_invoke$arity$variadic = G__88__delegate;
return G__88;
})()
,(function (addr,proc,args){
return cljs.core.apply.call(null,proc,args);
})),(function (observations){
return metaprob.generative_functions.generative_function_from_traced_code.call(null,(function (at,apply_at){
return (function() {
var G__91__delegate = function (args){
var score = cljs.core.atom.call(null,(0));
var trace = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var apply_at_impl = ((function (score,trace){
return (function (addr,gf,args__$1){
var vec__85 = apply_at.call(null,addr,metaprob.generative_functions.make_constrained_generator.call(null,gf,metaprob.trace.maybe_subtrace.call(null,observations,addr)),args__$1);
var v = cljs.core.nth.call(null,vec__85,(0),null);
var tr = cljs.core.nth.call(null,vec__85,(1),null);
var s = cljs.core.nth.call(null,vec__85,(2),null);
cljs.core.swap_BANG_.call(null,score,cljs.core._PLUS_,s);

cljs.core.swap_BANG_.call(null,trace,metaprob.trace.merge_subtrace,addr,tr);

return v;
});})(score,trace))
;
var at_impl = ((function (score,trace,apply_at_impl){
return (function() {
var G__92__delegate = function (addr,gf,args__$1){
return apply_at_impl.call(null,addr,gf,args__$1);
};
var G__92 = function (addr,gf,var_args){
var args__$1 = null;
if (arguments.length > 2) {
var G__93__i = 0, G__93__a = new Array(arguments.length -  2);
while (G__93__i < G__93__a.length) {G__93__a[G__93__i] = arguments[G__93__i + 2]; ++G__93__i;}
  args__$1 = new cljs.core.IndexedSeq(G__93__a,0,null);
}
return G__92__delegate.call(this,addr,gf,args__$1);};
G__92.cljs$lang$maxFixedArity = 2;
G__92.cljs$lang$applyTo = (function (arglist__94){
var addr = cljs.core.first(arglist__94);
arglist__94 = cljs.core.next(arglist__94);
var gf = cljs.core.first(arglist__94);
var args__$1 = cljs.core.rest(arglist__94);
return G__92__delegate(addr,gf,args__$1);
});
G__92.cljs$core$IFn$_invoke$arity$variadic = G__92__delegate;
return G__92;
})()
;})(score,trace,apply_at_impl))
;
var result = cljs.core.apply.call(null,fn_accepting_tracers.call(null,at_impl,apply_at_impl),args);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,cljs.core.deref.call(null,trace),cljs.core.deref.call(null,score)], null);
};
var G__91 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95__i = 0, G__95__a = new Array(arguments.length -  0);
while (G__95__i < G__95__a.length) {G__95__a[G__95__i] = arguments[G__95__i + 0]; ++G__95__i;}
  args = new cljs.core.IndexedSeq(G__95__a,0,null);
}
return G__91__delegate.call(this,args);};
G__91.cljs$lang$maxFixedArity = 0;
G__91.cljs$lang$applyTo = (function (arglist__96){
var args = cljs.core.seq(arglist__96);
return G__91__delegate(args);
});
G__91.cljs$core$IFn$_invoke$arity$variadic = G__91__delegate;
return G__91;
})()
;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Symbol(null,"make-constrained-generator-impl","make-constrained-generator-impl",(923554373),null)], null));
}),metadata);
})(function (){var ret__6544__auto__ = (function (){
metaprob.generative_functions.gen = (function metaprob$generative_functions$gen(var_args){
var args__6514__auto__ = [];
var len__6511__auto___100 = arguments.length;
var i__6512__auto___101 = (0);
while(true){
if((i__6512__auto___101 < len__6511__auto___100)){
args__6514__auto__.push((arguments[i__6512__auto___101]));

var G__102 = (i__6512__auto___101 + (1));
i__6512__auto___101 = G__102;
continue;
} else {
}
break;
}

var argseq__6515__auto__ = ((((2) < args__6514__auto__.length))?(new cljs.core.IndexedSeq(args__6514__auto__.slice((2)),(0),null)):null);
return metaprob.generative_functions.gen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6515__auto__);
});

metaprob.generative_functions.gen.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,_){
var expr = _AMPERSAND_form;
var body = metaprob.code_handlers.gen_body.call(null,expr);
var name = metaprob.code_handlers.gen_name.call(null,expr);
var tracer_name = new cljs.core.Symbol(null,"at","at",(-1177484420),null);
var apply_tracer_name = new cljs.core.Symbol(null,"apply-at","apply-at",(1320572267),null);
var params = metaprob.code_handlers.gen_pattern.call(null,expr);
var thunk_name = (cljs.core.truth_(name)?cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"thunk"].join('')):null);
var named_fn_body = (cljs.core.truth_(name)?cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,thunk_name,null,(1),null)))),null,(1),null))))),null,(1),null)),body)),null,(1),null)))):body);
var innermost_fn_expr = cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,params,null,(1),null)),named_fn_body));
var generative_function_expression = cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("metaprob.generative-functions","generative-function-from-traced-code","metaprob.generative-functions/generative-function-from-traced-code",(-412033167),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,tracer_name,null,(1),null)),(new cljs.core.List(null,apply_tracer_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,innermost_fn_expr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",(1843675177)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"generative-source","generative-source",(-1373253399)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))),null,(1),null))))),null,(1),null))));
if(cljs.core.truth_(name)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,thunk_name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,generative_function_expression,null,(1),null)))),null,(1),null))));
} else {
return generative_function_expression;
}
});

metaprob.generative_functions.gen.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
metaprob.generative_functions.gen.cljs$lang$applyTo = (function (seq97){
var G__98 = cljs.core.first.call(null,seq97);
var seq97__$1 = cljs.core.next.call(null,seq97);
var G__99 = cljs.core.first.call(null,seq97__$1);
var seq97__$2 = cljs.core.next.call(null,seq97__$1);
var self__6502__auto__ = this;
return self__6502__auto__.cljs$core$IFn$_invoke$arity$variadic(G__98,G__99,seq97__$2);
});

return null;
})()
;
metaprob.generative_functions.gen.cljs$lang$macro = true;

return ret__6544__auto__;
})()(function (){var ret__6544__auto__ = (function (){
metaprob.generative_functions.let_traced = (function metaprob$generative_functions$let_traced(var_args){
var args__6514__auto__ = [];
var len__6511__auto___111 = arguments.length;
var i__6512__auto___112 = (0);
while(true){
if((i__6512__auto___112 < len__6511__auto___111)){
args__6514__auto__.push((arguments[i__6512__auto___112]));

var G__113 = (i__6512__auto___112 + (1));
i__6512__auto___112 = G__113;
continue;
} else {
}
break;
}

var argseq__6515__auto__ = ((((3) < args__6514__auto__.length))?(new cljs.core.IndexedSeq(args__6514__auto__.slice((3)),(0),null)):null);
return metaprob.generative_functions.let_traced.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6515__auto__);
});

metaprob.generative_functions.let_traced.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var binding_pairs = cljs.core.partition.call(null,(2),bindings);
var trace_with_name = ((function (binding_pairs){
return (function metaprob$generative_functions$trace_with_name(expr,name){
while(true){
if(cljs.core.truth_(metaprob.code_handlers.if_expr_QMARK_.call(null,expr))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,metaprob$generative_functions$trace_with_name.call(null,metaprob.code_handlers.if_predicate.call(null,expr),name),null,(1),null)),(new cljs.core.List(null,metaprob$generative_functions$trace_with_name.call(null,metaprob.code_handlers.if_then_clause.call(null,expr),name),null,(1),null)),(new cljs.core.List(null,metaprob$generative_functions$trace_with_name.call(null,metaprob.code_handlers.if_else_clause.call(null,expr),name),null,(1),null))));
} else {
if(cljs.core.truth_(metaprob.code_handlers.do_expr_QMARK_.call(null,expr))){
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),cljs.core.map.call(null,((function (expr,name,binding_pairs){
return (function (p1__2_SHARP_){
return metaprob$generative_functions$trace_with_name.call(null,p1__2_SHARP_,name);
});})(expr,name,binding_pairs))
,cljs.core.rest.call(null,expr)));
} else {
if(cljs.core.truth_((function (){var or__5414__auto__ = (!(cljs.core.seq_QMARK_.call(null,expr)));
if(or__5414__auto__){
return or__5414__auto__;
} else {
var or__5414__auto____$1 = cljs.core.special_symbol_QMARK_.call(null,cljs.core.first.call(null,expr));
if(or__5414__auto____$1){
return or__5414__auto____$1;
} else {
var or__5414__auto____$2 = metaprob.code_handlers.let_expr_QMARK_.call(null,expr);
if(cljs.core.truth_(or__5414__auto____$2)){
return or__5414__auto____$2;
} else {
var or__5414__auto____$3 = metaprob.code_handlers.let_traced_expr_QMARK_.call(null,expr);
if(cljs.core.truth_(or__5414__auto____$3)){
return or__5414__auto____$3;
} else {
var or__5414__auto____$4 = metaprob.code_handlers.fn_expr_QMARK_.call(null,expr);
if(cljs.core.truth_(or__5414__auto____$4)){
return or__5414__auto____$4;
} else {
return metaprob.code_handlers.gen_expr_QMARK_.call(null,expr);
}
}
}
}
}
})())){
return expr;
} else {
if(cljs.core.not_EQ_.call(null,cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,expr),expr)){
var G__114 = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,expr);
var G__115 = name;
expr = G__114;
name = G__115;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"at","at",(-1177484420),null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),expr));

}
}
}
}
break;
}
});})(binding_pairs))
;
var convert_binding = ((function (binding_pairs,trace_with_name){
return (function (p__107){
var vec__108 = p__107;
var lhs = cljs.core.nth.call(null,vec__108,(0),null);
var rhs = cljs.core.nth.call(null,vec__108,(1),null);
if((lhs instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs,trace_with_name.call(null,rhs,cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhs,rhs], null);
}
});})(binding_pairs,trace_with_name))
;
var new_bindings = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,convert_binding,binding_pairs)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,new_bindings,null,(1),null)),body));
});

metaprob.generative_functions.let_traced.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
metaprob.generative_functions.let_traced.cljs$lang$applyTo = (function (seq103){
var G__104 = cljs.core.first.call(null,seq103);
var seq103__$1 = cljs.core.next.call(null,seq103);
var G__105 = cljs.core.first.call(null,seq103__$1);
var seq103__$2 = cljs.core.next.call(null,seq103__$1);
var G__106 = cljs.core.first.call(null,seq103__$2);
var seq103__$3 = cljs.core.next.call(null,seq103__$2);
var self__6502__auto__ = this;
return self__6502__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104,G__105,G__106,seq103__$3);
});

return null;
})()
;
metaprob.generative_functions.let_traced.cljs$lang$macro = true;

return ret__6544__auto__;
})()
