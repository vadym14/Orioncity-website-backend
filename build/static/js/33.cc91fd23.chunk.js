(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[33],{1527:function(t,e,c){"use strict";c.r(e);var n=c(670),r=c(1),o=(c(1528),c(25)),i=c(170),a=c(692),s=c(175),u=c(666),l=c(678),j=c(17);e.default=function(t){var e=Object(i.b)(),c=Object(o.i)().id,b=Object(i.c)((function(t){return t.projects})),d=b.loading,f=b.homeProjectDetail,h=b.error,m=Object(r.useState)(!1),y=Object(n.a)(m,2),O=y[0],p=y[1],v=Object(r.useState)(null),x=Object(n.a)(v,2),g=x[0],w=x[1];Object(r.useEffect)((function(){return f||e(Object(s.h)(c)),function(){e(Object(s.n)())}}),[e,c]),Object(r.useEffect)((function(){return h&&a.b.error(h.message),function(){e(Object(s.n)())}}),[e,h]);var k=function(t){w(t),p(!O)};return Object(j.jsx)("div",{className:"productDetail",children:d?Object(j.jsx)(l.a,{}):Object(j.jsxs)(u.w,{children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{children:f&&f.name||""}),Object(j.jsx)("div",{className:"viewImage",onClick:function(){return k("".concat("http://d1y2j0ls5peyst.cloudfront.net/").concat(f&&f.picture&&f.picture.key||""))},children:Object(j.jsx)("img",{src:"".concat("http://d1y2j0ls5peyst.cloudfront.net/").concat(f&&f.picture&&f.picture.key||""),alt:""})}),f&&f.gallery&&f.gallery.length>0&&f.gallery.map((function(t,e){return Object(j.jsx)("div",{className:"viewImage",onClick:function(){return k("".concat("http://d1y2j0ls5peyst.cloudfront.net/").concat(t&&t.key||""))},children:Object(j.jsx)("img",{src:"".concat("http://d1y2j0ls5peyst.cloudfront.net/").concat(t&&t.key||""),alt:""})},e)}))]}),Object(j.jsx)(u.gb,{centered:!0,className:"modalCustom",show:O,onClose:k,children:Object(j.jsx)(u.hb,{children:Object(j.jsx)("div",{className:"contentCustom",children:Object(j.jsx)("img",{src:g,alt:""})})})})]})})}},1528:function(t,e,c){},670:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c(172);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(c.push(i.value),!e||c.length!==e);n=!0);}catch(s){r=!0,o=s}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return c}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},678:function(t,e,c){"use strict";c(1),c(679);var n=c(666),r=c(17);e.a=function(t){return Object(r.jsx)("div",{className:"loadingContainer",children:Object(r.jsx)(n.Hb,{color:"primary",style:{width:"4rem",height:"4rem"}})})}},679:function(t,e,c){}}]);
//# sourceMappingURL=33.cc91fd23.chunk.js.map