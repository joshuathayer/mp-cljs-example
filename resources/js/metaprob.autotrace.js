goog.provide('metaprob.autotrace');
goog.require('cljs.core');
goog.require('metaprob.code_handlers');
goog.require('metaprob.expander');
goog.require('metaprob.generative_functions');
metaprob.autotrace.autotrace_expressions = (function metaprob$autotrace$autotrace_expressions(expressions,stack){
return cljs.core.map_indexed.call(null,(function (p1__5_SHARP_,p2__4_SHARP_){
return metaprob.autotrace.autotrace_expression.call(null,p2__4_SHARP_,cljs.core.cons.call(null,p1__5_SHARP_,stack));
}),expressions);
})(function (){var ret__6544__auto__ = metaprob.autotrace.autotrace = (function metaprob$autotrace$autotrace(_AMPERSAND_form,_AMPERSAND_env,gen_expr){
var expr = metaprob.expander.mp_expand(_AMPERSAND_env,gen_expr);
var result = cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("metaprob.generative-functions","gen","metaprob.generative-functions/gen",(-1427736393),null),null,(1),null)),(cljs.core.truth_(metaprob.code_handlers.gen_has_annotations_QMARK_.call(null,expr))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metaprob.code_handlers.gen_annotations.call(null,expr)], null):cljs.core.PersistentVector.EMPTY),(new cljs.core.List(null,metaprob.code_handlers.gen_pattern.call(null,expr),null,(1),null)),metaprob.autotrace.autotrace_expressions.call(null,metaprob.code_handlers.gen_body.call(null,expr),cljs.core.List.EMPTY)));
return result;
});
metaprob.autotrace.autotrace.cljs$lang$macro = true;

return ret__6544__auto__;
              })()
metaprob.autotrace.autotrace_expression = (function metaprob$autotrace$autotrace_expression(expr,stack){
if(cljs.core.truth_((function (){var or__5414__auto__ = metaprob.code_handlers.fn_expr_QMARK_.call(null,expr);
if(cljs.core.truth_(or__5414__auto__)){
return or__5414__auto__;
} else {
return metaprob.code_handlers.gen_expr_QMARK_.call(null,expr);
}
})())){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,expr),null,(1),null)),(cljs.core.truth_(metaprob.code_handlers.gen_has_annotations_QMARK_.call(null,expr))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metaprob.code_handlers.gen_annotations.call(null,expr)], null):cljs.core.PersistentVector.EMPTY),(new cljs.core.List(null,metaprob.code_handlers.gen_pattern.call(null,expr),null,(1),null)),metaprob.autotrace.autotrace_expressions.call(null,metaprob.code_handlers.gen_body.call(null,expr),stack)));
} else {
if(cljs.core.truth_(metaprob.code_handlers.quote_expr_QMARK_.call(null,expr))){
return expr;
} else {
if(cljs.core.truth_(metaprob.code_handlers.if_expr_QMARK_.call(null,expr))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,metaprob.autotrace.autotrace_expression.call(null,metaprob.code_handlers.if_predicate.call(null,expr),cljs.core.cons.call(null,"predicate",stack)),null,(1),null)),(new cljs.core.List(null,metaprob.autotrace.autotrace_expression.call(null,metaprob.code_handlers.if_then_clause.call(null,expr),cljs.core.cons.call(null,"then",stack)),null,(1),null)),(new cljs.core.List(null,metaprob.autotrace.autotrace_expression.call(null,metaprob.code_handlers.if_else_clause.call(null,expr),cljs.core.cons.call(null,"else",stack)),null,(1),null))));
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
if(cljs.core.truth_((function (){var or__5414__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,expr),new cljs.core.Symbol(null,"apply-at","apply-at",(1320572267),null));
if(or__5414__auto__){
return or__5414__auto__;
} else {
var or__5414__auto____$1 = cljs.core._EQ_.call(null,cljs.core.first.call(null,expr),new cljs.core.Symbol(null,"at","at",(-1177484420),null));
if(or__5414__auto____$1){
return or__5414__auto____$1;
} else {
return metaprob.code_handlers.fn_expr_QMARK_.call(null,cljs.core.first.call(null,expr));
}
}
})())){
return metaprob.autotrace.autotrace_expressions.call(null,expr,stack);
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"at","at",(-1177484420),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.core.reverse.call(null,cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,expr)),stack)),null,(1),null)))),null,(1),null)),metaprob.autotrace.autotrace_expressions.call(null,expr,stack)));
}
} else {
return expr;

}
}
}
}
})
