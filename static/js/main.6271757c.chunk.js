(this["webpackJsonpcode-pen-clone"]=this["webpackJsonpcode-pen-clone"]||[]).push([[0],{17:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(7),s=n.n(a),o=(n(17),n(3)),l=(n(18),n(19),n(20),n(21),n(22),n(8)),i=n(42),r=n(43),j=n(1),u=function(e){var t=e.language,n=e.title,a=e.value,s=e.onChange,u=Object(c.useState)(!0),b=Object(o.a)(u,2),d=b[0],O=b[1];return Object(j.jsxs)("div",{className:"editor-container ".concat(d?"":"collapsed"),children:[Object(j.jsxs)("div",{className:"editor-title",children:[n,Object(j.jsx)("button",{onClick:function(){return O((function(e){return!e}))},className:"expand-collapse-button",children:d?Object(j.jsx)(i.a,{}):Object(j.jsx)(r.a,{})})]}),Object(j.jsx)(l.Controlled,{onBeforeChange:function(e,t,n){s(n)},className:"code-mirror-wrapper",value:a,options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})]})},b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(o.a)(s,2),i=l[0],r=l[1],b=Object(c.useState)(""),d=Object(o.a)(b,2),O=d[0],p=d[1],h=Object(c.useState)(""),m=Object(o.a)(h,2),g=m[0],x=m[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){x("\n    <html>\n    <body>".concat(n,"</body>\n    <style>").concat(i,"</style>\n    <script>").concat(O,"<\/script>\n    </html>\n    "))}),250);return function(){clearTimeout(e)}}),[n,i,O]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"panel top-panel",children:[Object(j.jsx)(u,{title:"HTML",language:"xml",value:n,onChange:a}),Object(j.jsx)(u,{title:"CSS",language:"css",value:i,onChange:r}),Object(j.jsx)(u,{title:"JS",language:"javascript",value:O,onChange:p})]}),Object(j.jsx)("div",{className:"panel",children:Object(j.jsx)("iframe",{srcDoc:g,title:"output",sandbox:"allow-scripts",width:"100%",height:"100%"})})]})};s.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6271757c.chunk.js.map