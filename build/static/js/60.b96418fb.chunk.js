(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[60],{668:function(t,e,c){"use strict";function n(t,e){if(null==t)return{};var c,n,o=function(t,e){if(null==t)return{};var c,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)c=r[n],e.indexOf(c)>=0||(o[c]=t[c]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)c=r[n],e.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(t,c)&&(o[c]=t[c])}return o}c.d(e,"a",(function(){return n}))},670:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c(170);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(c.push(a.value),!e||c.length!==e);n=!0);}catch(i){o=!0,r=i}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},671:function(t,e,c){"use strict";c.d(e,"a",(function(){return l})),c.d(e,"b",(function(){return j}));var n=c(50),o=c(668),r=c(1),a=c.n(r),s=c(667),i=c(19),u=function(t){var e=t.name,c=t.text,r=Object(o.a)(t,["name","text"]),a=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(s.db,Object(n.a)(Object(n.a)({},r),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},l=a.a.memo(u),b=function(t){var e=Object(n.a)({},t),c=e.children,r=Object(o.a)(e,["children"]);return Object(i.jsx)(s.b,Object(n.a)(Object(n.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},r),{},{children:c||"CoreUI Pro Component"}))},j=a.a.memo(b)},896:function(t,e,c){"use strict";c.r(e);var n=c(173),o=c(670),r=c(1),a=c(667),s=c(671),i=c(19);e.default=function(){var t=Object(r.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(o.a)(t,2),c=e[0],u=e[1],l=Object(r.useState)("top-right"),b=Object(o.a)(l,2),j=b[0],h=b[1],d=Object(r.useState)(!0),m=Object(o.a)(d,2),O=m[0],f=m[1],p=Object(r.useState)(5e3),x=Object(o.a)(p,2),y=x[0],v=x[1],g=Object(r.useState)(!0),k=Object(o.a)(g,2),w=k[0],S=k[1],N=Object(r.useState)(!0),T=Object(o.a)(N,2),C=T[0],A=T[1],F=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(i.jsxs)(a.j,{children:[Object(i.jsxs)(a.n,{children:["Toasts.",Object(i.jsx)(s.a,{name:"-Toast"})]}),Object(i.jsx)(a.k,{children:Object(i.jsx)(a.w,{children:Object(i.jsxs)(a.wb,{children:[Object(i.jsx)(a.u,{sm:"12",lg:"6",children:Object(i.jsxs)(a.J,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(a.T,{id:"autohide",checked:O,onChange:function(t){f(t.target.checked)},custom:!0}),Object(i.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),O&&Object(i.jsxs)(a.K,{className:"my-2",children:[Object(i.jsx)(a.cb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(a.S,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(i.jsxs)(a.K,{className:"my-2",children:[Object(i.jsx)(a.cb,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:j,onChange:function(t){h(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(i.jsx)("option",{children:t},e)}))})]}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(a.T,{id:"fade",checked:C,onChange:function(t){A(t.target.checked)},custom:!0}),Object(i.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(a.T,{id:"close",custom:!0,checked:w,onChange:function(t){S(t.target.checked)}}),Object(i.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(a.f,{className:"mr-1 w-25",color:"success",onClick:function(){u([].concat(Object(n.a)(c),[{position:j,autohide:O&&y,closeButton:w,fade:C}]))},children:"Add toast"})]})}),Object(i.jsx)(a.u,{sm:"12",lg:"6",children:Object.keys(F).map((function(t){return Object(i.jsx)(a.Rb,{position:t,children:F[t].map((function(e,c){return Object(i.jsxs)(a.Ob,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(i.jsx)(a.Qb,{closeButton:e.closeButton,children:"Toast title"}),Object(i.jsx)(a.Pb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}}}]);
//# sourceMappingURL=60.b96418fb.chunk.js.map