(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[44],{664:function(e,r,c){"use strict";function t(e,r){if(null==e)return{};var c,t,n=function(e,r){if(null==e)return{};var c,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)c=s[t],r.indexOf(c)>=0||(n[c]=e[c]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)c=s[t],r.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}c.d(r,"a",(function(){return t}))},666:function(e,r,c){"use strict";c.d(r,"a",(function(){return b})),c.d(r,"b",(function(){return d}));var t=c(50),n=c(664),s=c(1),j=c.n(s),i=c(663),a=c(16),l=function(e){var r=e.name,c=e.text,s=Object(n.a)(e,["name","text"]),j=r?"https://coreui.io/react/docs/components/".concat(r):e.href;return Object(a.jsx)("div",{className:"card-header-actions",children:Object(a.jsx)(i.db,Object(t.a)(Object(t.a)({},s),{},{href:j,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(a.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},b=j.a.memo(l),o=function(e){var r=Object(t.a)({},e),c=r.children,s=Object(n.a)(r,["children"]);return Object(a.jsx)(i.b,Object(t.a)(Object(t.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},s),{},{children:c||"CoreUI Pro Component"}))},d=j.a.memo(o)},667:function(e,r,c){"use strict";c.d(r,"a",(function(){return n}));var t=c(669);function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],t=!0,n=!1,s=void 0;try{for(var j,i=e[Symbol.iterator]();!(t=(j=i.next()).done)&&(c.push(j.value),!r||c.length!==r);t=!0);}catch(a){n=!0,s=a}finally{try{t||null==i.return||i.return()}finally{if(n)throw s}}return c}}(e,r)||Object(t.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},669:function(e,r,c){"use strict";c.d(r,"a",(function(){return n}));var t=c(670);function n(e,r){if(e){if("string"===typeof e)return Object(t.a)(e,r);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(t.a)(e,r):void 0}}},670:function(e,r,c){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var c=0,t=new Array(r);c<r;c++)t[c]=e[c];return t}c.d(r,"a",(function(){return t}))},861:function(e,r,c){"use strict";c.r(r);var t=c(667),n=c(1),s=c(663),j=c(666),i=c(16);r.default=function(){var e=Object(n.useState)(!1),r=Object(t.a)(e,2),c=r[0],a=r[1],l=Object(n.useState)(!1),b=Object(t.a)(l,2),o=b[0],d=b[1],h=Object(n.useState)(!1),O=Object(t.a)(h,2),u=O[0],x=O[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(s.j,{children:[Object(i.jsxs)(s.n,{children:["CNavbar",Object(i.jsx)(j.a,{name:"CNavbar"})]}),Object(i.jsx)(s.k,{children:Object(i.jsxs)(s.ob,{expandable:"sm",color:"info",children:[Object(i.jsx)(s.Sb,{inNavbar:!0,onClick:function(){return a(!c)}}),Object(i.jsx)(s.pb,{children:"NavbarBrand"}),Object(i.jsxs)(s.v,{show:c,navbar:!0,children:[Object(i.jsxs)(s.qb,{children:[Object(i.jsx)(s.nb,{children:"Home"}),Object(i.jsx)(s.nb,{children:"Link"})]}),Object(i.jsxs)(s.qb,{className:"ml-auto",children:[Object(i.jsxs)(s.J,{inline:!0,children:[Object(i.jsx)(s.S,{className:"mr-sm-2",placeholder:"Search",size:"sm"}),Object(i.jsx)(s.f,{color:"light",className:"my-2 my-sm-0",type:"submit",children:"Search"})]}),Object(i.jsxs)(s.z,{inNav:!0,children:[Object(i.jsx)(s.E,{color:"primary",children:"Lang"}),Object(i.jsxs)(s.D,{children:[Object(i.jsx)(s.C,{children:"EN"}),Object(i.jsx)(s.C,{children:"ES"}),Object(i.jsx)(s.C,{children:"RU"}),Object(i.jsx)(s.C,{children:"FA"})]})]}),Object(i.jsxs)(s.z,{inNav:!0,children:[Object(i.jsx)(s.E,{color:"primary",children:"User"}),Object(i.jsxs)(s.D,{children:[Object(i.jsx)(s.C,{children:"Account"}),Object(i.jsx)(s.C,{children:"Settings"})]})]})]})]})]})})]}),Object(i.jsxs)(s.j,{children:[Object(i.jsx)(s.n,{children:"CNavbar brand"}),Object(i.jsx)(s.k,{children:Object(i.jsx)(s.ob,{color:"faded",light:!0,children:Object(i.jsxs)(s.pb,{children:[Object(i.jsx)(s.R,{src:"https://placekitten.com/g/30/30",className:"d-inline-block align-top",alt:"CoreuiVue"}),"CoreUI React"]})})})]}),Object(i.jsxs)(s.j,{children:[Object(i.jsx)(s.n,{children:"CNavbar text"}),Object(i.jsx)(s.k,{children:Object(i.jsxs)(s.ob,{toggleable:"sm",light:!0,color:"light",children:[Object(i.jsx)(s.Sb,{inNavbar:!0,onClick:function(){x(!u)}}),Object(i.jsx)(s.pb,{children:"NavbarBrand"}),Object(i.jsx)(s.v,{show:u,children:Object(i.jsx)(s.qb,{children:Object(i.jsx)(s.rb,{children:"Navbar text"})})})]})})]}),Object(i.jsxs)(s.j,{children:[Object(i.jsx)(s.n,{children:"CNavbar dropdown"}),Object(i.jsx)(s.k,{children:Object(i.jsxs)(s.ob,{expandable:"false",color:"primary",children:[Object(i.jsx)(s.Sb,{inNavbar:!0,onClick:function(){d(!o)}}),Object(i.jsx)(s.v,{show:o,navbar:!0,children:Object(i.jsxs)(s.qb,{children:[Object(i.jsx)(s.nb,{children:"Home"}),Object(i.jsx)(s.nb,{children:"Link"}),Object(i.jsxs)(s.z,{inNav:!0,children:[Object(i.jsx)(s.E,{color:"primary",children:"Lang"}),Object(i.jsxs)(s.D,{children:[Object(i.jsx)(s.C,{children:"EN"}),Object(i.jsx)(s.C,{children:"ES"}),Object(i.jsx)(s.C,{children:"RU"}),Object(i.jsx)(s.C,{children:"FA"})]})]}),Object(i.jsxs)(s.z,{inNav:!0,children:[Object(i.jsx)(s.E,{color:"primary",children:"User"}),Object(i.jsxs)(s.D,{children:[Object(i.jsx)(s.C,{children:"Account"}),Object(i.jsx)(s.C,{children:"Settings"})]})]})]})})]})})]}),Object(i.jsxs)(s.j,{children:[Object(i.jsx)(s.n,{children:"CNavbar form"}),Object(i.jsx)(s.k,{children:Object(i.jsx)(s.ob,{light:!0,color:"light",children:Object(i.jsxs)(s.J,{inline:!0,children:[Object(i.jsx)(s.S,{className:"mr-sm-2",placeholder:"Search",size:"sm"}),Object(i.jsx)(s.f,{color:"outline-success",className:"my-2 my-sm-0",type:"submit",children:"Search"})]})})})]}),Object(i.jsxs)(s.j,{children:[Object(i.jsx)(s.n,{children:"CNavbar input group"}),Object(i.jsx)(s.k,{children:Object(i.jsx)(s.ob,{light:!0,color:"light",children:Object(i.jsx)(s.J,{inline:!0,children:Object(i.jsx)(s.S,{className:"mr-sm-2",placeholder:"Username"})})})})]})]})}}}]);
//# sourceMappingURL=44.2d8eb895.chunk.js.map