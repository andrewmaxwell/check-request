(this["webpackJsonpcheck-request"]=this["webpackJsonpcheck-request"]||[]).push([[0],{89:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),o=n.n(c),u=(n(89),n(16)),i=n(153),l=n(148),s=n(152),b=n(147),j=n(6),h=n(24),d=n(15),v=n(141),f=n(142),p=n(138),O=n(140),m=n(151),x=n(145),g=n(146),y=n(70),k=function(e,t,n){var r=Object(h.a)(n);return r[e]=t(r[e]),r},C=function(e,t){var n=Object(h.a)(t);return n.splice(e,1),n},w=function e(t,n,r){var a=Object(y.a)(t),c=a[0],o=a.slice(1),u=Array.isArray(r)?Object(h.a)(r):Object(d.a)({},r);return u[c]=o.length?e(o,n,r[c]):n,u},R=n(2),A={select:function(e){var t=e.label,n=e.value,r=void 0===n?"":n,a=e.error,c=e.options,o=e.onChange;return Object(R.jsxs)(v.a,{fullWidth:!0,error:!!a,children:[Object(R.jsx)(f.a,{children:t}),Object(R.jsx)(p.a,{label:t,onChange:o,value:r,children:c.map((function(e){return Object(R.jsx)(O.a,{value:e,children:e},e)}))}),a&&Object(R.jsx)(m.a,{children:a})]})},text:function(e){var t=e.label,n=e.type,r=e.error,a=e.value,c=void 0===a?"":a,o=e.onChange,u=e.props;return Object(R.jsx)(x.a,Object(d.a)({fullWidth:!0,error:!!r,helperText:r},Object(d.a)({label:t,type:n,value:c,onChange:o},u)))},rows:function(e){var t=e.blankRow,n=e.value,r=e.onChange;return Object(R.jsxs)(R.Fragment,{children:[n.map((function(e,t){return Object(R.jsx)(g.a,{container:!0,item:!0,spacing:1,children:Object(R.jsx)(S,{fields:e,setState:function(e){r({target:{value:k(t,e,n)}})},children:Object(R.jsx)(g.a,{item:!0,sm:1,children:Object(R.jsx)(b.a,{sx:{width:"100%",height:"100%"},onClick:function(){return r({target:{value:C(t,n)}})},children:"Delete"})})})},t)})),Object(R.jsx)(b.a,{onClick:function(){return r({target:{value:[].concat(Object(h.a)(n),[t])}})},children:"Add Row"})]})},calculated:function(e){var t=e.label,n=e.value,r=e.formatter,a=void 0===r?function(e){return e}:r;return Object(R.jsx)(s.a,{children:Object(R.jsxs)("strong",{children:[t,": ",a(n)]})})}},P=function(e){if(e.hide)return null;var t=A[e.type]||A.text;return Object(R.jsx)(t,Object(d.a)({},e))},S=function(e){var t=e.fields,n=e.setState,r=e.children;return Object(R.jsxs)(g.a,{container:!0,children:[Object.entries(t).map((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];return Object(R.jsx)(g.a,{item:!0,p:1,xs:12,sm:a.columns,children:Object(R.jsx)(P,Object(d.a)(Object(d.a)({},a),{},{onChange:function(e){n((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(j.a)({},r,Object(d.a)(Object(d.a)({},a),{},{value:e.target.value,error:void 0})))}))}}))},r)})),r]})},q=function(e){return!e.hide},F=function e(t){return q(t)&&(function(){return!String(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().length}(t.value)||Array.isArray(t.value)&&t.value.some((function(t){return Object.values(t).some(e)})))},D=function e(t){return function(e,t){var n={};for(var r in t)n[r]=e(t[r],r);return n}((function(t){return Array.isArray(t.value)?Object(d.a)(Object(d.a)({},t),{},{value:t.value.map(e)}):Object(d.a)(Object(d.a)({},t),{},{error:F(t)&&"Required"})}),t)},T=function e(t){return Object.values(t).filter(q).map((function(t){var n=t.label,r=t.value,a=t.formatter,c=void 0===a?function(e){return e}:a;return Array.isArray(r)?"\r\n".concat(r.map((function(t){return e(t)})).join("\r\n\r\n"),"\r\n"):"".concat(n,": ").concat(c(r))})).join("\r\n")},I=function(e,t){if(Object.values(e).some(F))t(D);else{var n=(new Date).toLocaleString(),r=T(e),a=encodeURIComponent("Date: ".concat(n,"\r\n").concat(r,"\r\n\r\nREMINDER: Attach relevant files."));window.open("mailto:chatham.ap@gmail.com?cc=chathamit@chathambiblechurch.org&subject=Check Request&body=".concat(a))}},E=n(45),M=n.n(E),L=n(64),N=function(e){return"$"+Number(e).toLocaleString()},Q=function(e){var t;return function(){return void 0===t?t=e():t}}(Object(L.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQBAv7s2hKsbFKPuv8qZ8z0rAgsE_5ZPwP8rGY527yIfMLjOs9Foy-Z4Tj54SFYti7I4QvTYnmQQIQa/pub?output=tsv");case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.abrupt("return",null===n||void 0===n?void 0:n.split("\n").map((function(e){return e.trim()})));case 7:case"end":return e.stop()}}),e)})))),B={requestorName:{label:"Requestor Name",type:"text",columns:6},makeCheckPayableTo:{label:"Make Check Payable To",type:"text",columns:6},list:{label:"list",type:"rows",blankRow:{account:{label:"Account",type:"select",columns:4,options:[]},explanation:{label:"Explanation",type:"text",columns:5,props:{multiline:!0}},amount:{label:"Dollar Amount",type:"number",columns:2,formatter:N}},update:function(e,t){var n;return!(null===(n=t.value)||void 0===n?void 0:n.length)&&{value:[t.blankRow]}}},total:{label:"Total",type:"calculated",formatter:N,update:function(e,t){var n,r,a=null===(r=null===(n=e.list.value)||void 0===n?void 0:n.map((function(e){return e.amount.value})))||void 0===r?void 0:r.reduce((function(e,t){return e+(Number(t)||0)}),0);return a!==t.value&&{value:a}}},checkDelivery:{label:"Check Delivery",type:"select",options:["Mail Check","Give Check to Requestor","Place Check in Requestor's Folder"]},address:{label:"Address",type:"text",update:function(e,t){var n="Mail Check"!==e.checkDelivery.value;return t.hide!==n&&{hide:n}}}},W=function(){var e=Object(L.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=w,e.t1=["list","blankRow","account","options"],e.next=4,Q();case 4:return e.t2=e.sent,e.t3=B,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Y(){var e=Object(r.useState)(),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){W().then(a)}),[]),n?(function(e,t){var n=function(n){var r,a=e[n],c=null===(r=a.update)||void 0===r?void 0:r.call(a,e,a);c&&t((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},n,Object(d.a)(Object(d.a)({},e[n]),c)))}))};for(var r in e)n(r)}(n,a),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(s.a,{p:1,variant:"h4",children:"Check Request Form"}),Object(R.jsx)(S,{fields:n,setState:a}),Object(R.jsx)(s.a,{p:1,children:'Pressing "Submit" will create an email ready to be sent.'}),Object(R.jsx)(s.a,{p:1,children:Object(R.jsx)("strong",{children:"Please attach any necessary documents or receipts to the email before sending."})}),Object(R.jsx)(i.a,{p:1,children:Object(R.jsx)(b.a,{variant:"contained",onClick:function(){return I(n,a)},children:"Submit"})}),Object(R.jsx)(s.a,{p:1,children:"When you have sent the email, you may close this page."}),Object(R.jsx)("a",{style:{position:"fixed",right:2,bottom:2,font:"12px sans-serif"},href:"mailto:chathamit@chathambiblechurch.org?subject=Check Request Bug Report",children:"Report a Problem"})]})):Object(R.jsx)(i.a,{sx:{display:"flex",justifyContent:"center",padding:20},children:Object(R.jsx)(l.a,{size:100})})}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[97,1,2]]]);
//# sourceMappingURL=main.e4ecf361.chunk.js.map