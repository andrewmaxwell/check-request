(this["webpackJsonpcheck-request"]=this["webpackJsonpcheck-request"]||[]).push([[0],{97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),o=n.n(c),i=n(13),u=n(16),l=n(153),s=n(148),j=n(154),b=n(152),f=n(147),d=n(5),O=n(23),h=n(141),v=n(142),p=n(138),m=n(140),x=n(151),g=n(145),y=n(146),C=function(e,t,n){var r=Object(O.a)(n);return r[e]=t(r[e]),r},A=function(e,t){var n=Object(O.a)(t);return n.splice(e,1),n},k=function(e,t){var n=Array.isArray(t)?[]:{};for(var r in t)n[r]=e(t[r],r);return n},S=n(2),w={select:function(e){var t=e.label,n=e.value,r=void 0===n?"":n,a=e.error,c=e.options,o=e.onChange;return Object(S.jsxs)(h.a,{fullWidth:!0,error:!!a,children:[Object(S.jsx)(v.a,{children:t}),Object(S.jsx)(p.a,{label:t,onChange:o,value:r,children:c.map((function(e){return Object(S.jsx)(m.a,{value:e,children:e},e)}))}),a&&Object(S.jsx)(x.a,{children:a})]})},text:function(e){var t=e.label,n=e.type,r=e.error,a=e.value,c=void 0===a?"":a,o=e.onChange,u=e.props;return Object(S.jsx)(g.a,Object(i.a)({fullWidth:!0,error:!!r,helperText:r},Object(i.a)({label:t,type:n,value:c,onChange:o},u)))},repeatingSection:function(e){var t=e.fields,n=e.value,r=e.onChange;return Object(S.jsxs)(S.Fragment,{children:[n.map((function(e,t){return Object(S.jsx)(y.a,{container:!0,item:!0,spacing:1,children:Object(S.jsx)(L,{fields:e,onChange:function(e){r({target:{value:C(t,e,n)}})},children:Object(S.jsx)(y.a,{item:!0,sm:1,children:Object(S.jsx)(f.a,{sx:{width:"100%",height:"100%"},onClick:function(){return r({target:{value:A(t,n)}})},children:"Delete"})})})},t)})),Object(S.jsx)(f.a,{onClick:function(){return r({target:{value:[].concat(Object(O.a)(n),[t])}})},children:"Add Row"})]})},calculated:function(e){var t=e.label,n=e.value,r=e.formatter;return Object(S.jsx)(b.a,{children:Object(S.jsxs)("strong",{children:[t,": ",r(n)]})})}},R=function(e){if(e.hide)return null;var t=w[e.type]||w.text;return Object(S.jsx)(t,Object(i.a)({},e))},L=function(e){var t=e.fields,n=e.onChange,r=e.children;return Object(S.jsxs)(y.a,{container:!0,children:[Object.entries(t).map((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(S.jsx)(y.a,{item:!0,p:1,xs:12,sm:a.columns,children:Object(S.jsx)(R,Object(i.a)(Object(i.a)({},a),{},{onChange:function(e){n((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(d.a)({},r,Object(i.a)(Object(i.a)({},t[r]),{},{value:e.target.value,error:void 0})))}))}}))},r)})),r]})},q=function(e){return!e.hide},T=function e(t){return q(t)&&(function(){return!String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().length}(t.value)||Array.isArray(t.value)&&t.value.some((function(t){return Object.values(t).some(e)})))},_=function e(t){return k((function(t){return Array.isArray(t.value)?Object(i.a)(Object(i.a)({},t),{},{value:t.value.map(e)}):Object(i.a)(Object(i.a)({},t),{},{error:T(t)&&"Required"})}),t)},E=function e(t){return Object.values(t).filter(q).map((function(t){var n=t.label,r=t.value,a=t.formatter;return Array.isArray(r)?"\r\n".concat(r.map((function(t){return e(t)})).join("\r\n\r\n"),"\r\n"):"".concat(n,": ").concat(a(r))})).join("\r\n")},H=function(e,t){var n=e.fields,r=e.emailReminder,a=e.emailTo,c=e.emailSubject;if(Object.values(n).some(T))t(_);else{var o=(new Date).toLocaleString(),i=E(n),u=encodeURIComponent("Date: ".concat(o,"\r\n").concat(i,"\r\n\r\n").concat(r));window.open("mailto:".concat(a,"&subject=").concat(c,"&body=").concat(u))}},D=n(60),M=n.n(D),P=n(71),B=n(72),F=n(74),N=window.XLSX,W={dollars:function(e){return"$"+Number(e).toLocaleString()}},X=function(e,t){return Object(F.a)(Function,Object(O.a)(e).concat(["try{".concat(t,"}catch(e){console.error(`Error in ").concat(t,")`, e.message)}")]))},I=function(){var e=Object(B.a)(M.a.mark((function e(){var t,n,r,a,c,o,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(location.hash.slice(1)||"https://docs.google.com/spreadsheets/d/e/2PACX-1vRqtLRKclmmHXDiJjAslERNMniAlL0VKDvvWrj7njfiEOLAyM_HAKP-pzPrErqA0T9N2-PvkrUTG9Zy/pub?output=xlsx");case 2:return t=e.sent,e.t0=k,e.t1=N.utils.sheet_to_json,e.t2=N,e.next=8,t.arrayBuffer();case 8:e.t3=e.sent,e.t4=e.t2.read.call(e.t2,e.t3).Sheets,n=(0,e.t0)(e.t1,e.t4),console.log("unprocessed config",n),r={},a=Object(P.a)(n.fields);try{for(a.s();!(c=a.n()).done;)o=c.value,u=Object(i.a)({label:o.label,type:o.type,columns:Number(o.columns)||0,update:o.update&&X(["fields"],o.update),formatter:W[o.format]||function(e){return e},fields:{}},o.options?X(["data"],o.options)(n):{}),o.parentField?r[o.parentField].fields[o.key]=u:r[o.key]=u}catch(l){a.e(l)}finally{a.f()}return e.abrupt("return",Object(i.a)(Object(i.a)({},Object.fromEntries(n.config.map((function(e){return[e.key,e.value]})))),{},{fields:r}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function e(t,n){var r=function(r){for(var a,c=t[r],o=function(t){e(c.value[t],(function(e){return n((function(n){return Object(i.a)(Object(i.a)({},n),{},Object(d.a)({},r,Object(i.a)(Object(i.a)({},n[r]),{},{value:C(t,e,n[r].value)})))}))}))},u=0;u<(null===(l=c.value)||void 0===l?void 0:l.length);u++){var l;o(u)}var s=null===(a=c.update)||void 0===a?void 0:a.call(c,t);s&&"object"===typeof s&&n((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(d.a)({},r,Object(i.a)(Object(i.a)({},e[r]),s)))}))};for(var a in t)r(a)};function K(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){I().then(a)}),[]);var c=Object(r.useCallback)((function(e){return a((function(t){return Object(i.a)(Object(i.a)({},t),{},{fields:e(t.fields)})}))}),[]);return n?(J(n.fields,c),Object(S.jsxs)(j.a,{maxWidth:"md",children:[Object(S.jsx)(b.a,{p:1,variant:"h4",children:n.formTitle}),Object(S.jsx)(L,{fields:n.fields,onChange:c}),Object(S.jsx)(b.a,{p:1,dangerouslySetInnerHTML:{__html:n.beforeButtonHtml}}),Object(S.jsx)(l.a,{p:1,children:Object(S.jsx)(f.a,{variant:"contained",onClick:function(){return H(n,c)},children:n.submitLabel})}),Object(S.jsx)(b.a,{p:1,dangerouslySetInnerHTML:{__html:n.afterButtonHtml}}),Object(S.jsx)("a",{style:{position:"fixed",right:2,bottom:2,font:"12px sans-serif"},href:"mailto:chathamit@chathambiblechurch.org?subject=Check Request Bug Report",children:"Report a Problem"})]})):Object(S.jsx)(l.a,{sx:{display:"flex",justifyContent:"center",padding:20},children:Object(S.jsx)(s.a,{size:100})})}o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(K,{})}),document.querySelector("#root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.c9e83d97.chunk.js.map