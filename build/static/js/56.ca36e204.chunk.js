(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[56],{668:function(e,t,i){"use strict";function n(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}i.d(t,"a",(function(){return n}))},670:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return m}));var n=i(50),o=i(668),r=i(1),c=i.n(r),a=i(667),l=i(19),u=function(e){var t=e.name,i=e.text,r=Object(o.a)(e,["name","text"]),c=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(l.jsx)("div",{className:"card-header-actions",children:Object(l.jsx)(a.db,Object(n.a)(Object(n.a)({},r),{},{href:c,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(l.jsx)("small",{className:"text-muted",children:i||"docs"})}))})},s=c.a.memo(u),d=function(e){var t=Object(n.a)({},e),i=t.children,r=Object(o.a)(t,["children"]);return Object(l.jsx)(a.b,Object(n.a)(Object(n.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},r),{},{children:i||"CoreUI Pro Component"}))},m=c.a.memo(d)},671:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i(170);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var i=[],n=!0,o=!1,r=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(i.push(c.value),!t||i.length!==t);n=!0);}catch(l){o=!0,r=l}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},919:function(e,t,i){"use strict";i.r(t);var n=i(671),o=i(1),r=i(667),c=i(670),a=i(19);t.default=function(){var e=Object(o.useState)(!0),t=Object(n.a)(e,2),i=t[0],l=t[1],u=Object(o.useState)(!1),s=Object(n.a)(u,2),d=s[0],m=s[1],j=Object(o.useState)(!1),b=Object(n.a)(j,2),h=b[0],f=b[1],p=Object(o.useState)(!1),O=Object(n.a)(p,2),x=O[0],g=O[1],C=Object(o.useState)(!1),q=Object(n.a)(C,2),v=q[0],k=q[1],y=Object(o.useState)(!1),S=Object(n.a)(y,2),w=S[0],D=S[1],L=Object(o.useState)(!1),N=Object(n.a)(L,2),E=N[0],M=N[1],B=Object(o.useState)(!1),U=Object(n.a)(B,2),I=U[0],P=U[1];return Object(a.jsx)(r.wb,{children:Object(a.jsx)(r.u,{children:Object(a.jsxs)(r.j,{children:[Object(a.jsxs)(r.n,{children:["Bootstrap Modals",Object(a.jsx)(c.a,{name:"CModal"})]}),Object(a.jsxs)(r.k,{children:[Object(a.jsx)(r.f,{onClick:function(){return l(!i)},className:"mr-1",children:"Launch demo modal"}),Object(a.jsx)(r.f,{onClick:function(){return m(!d)},className:"mr-1",children:"Launch large modal"}),Object(a.jsx)(r.f,{onClick:function(){return f(!d)},className:"mr-1",children:"Launch small modal"}),Object(a.jsxs)(r.gb,{show:i,onClose:l,children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"primary",children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return l(!1)},children:"Cancel"})]})]}),Object(a.jsxs)(r.gb,{show:d,onClose:function(){return m(!d)},size:"lg",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"primary",onClick:function(){return m(!d)},children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return m(!d)},children:"Cancel"})]})]}),Object(a.jsxs)(r.gb,{show:h,onClose:function(){return f(!h)},size:"sm",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"primary",onClick:function(){return f(!h)},children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return f(!h)},children:"Cancel"})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(r.f,{color:"primary",onClick:function(){return g(!x)},className:"mr-1",children:"Primary modal"}),Object(a.jsx)(r.f,{color:"success",onClick:function(){return k(!v)},className:"mr-1",children:"Success modal"}),Object(a.jsx)(r.f,{color:"warning",onClick:function(){return D(!w)},className:"mr-1",children:"Warning modal"}),Object(a.jsx)(r.f,{color:"danger",onClick:function(){return M(!E)},className:"mr-1",children:"Danger modal"}),Object(a.jsx)(r.f,{color:"info",onClick:function(){return P(!I)},className:"mr-1",children:"Info modal"}),Object(a.jsxs)(r.gb,{show:x,onClose:function(){return g(!x)},color:"primary",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"primary",onClick:function(){return g(!x)},children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return g(!x)},children:"Cancel"})]})]}),Object(a.jsxs)(r.gb,{show:v,onClose:function(){return k(!v)},color:"success",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"success",onClick:function(){return k(!v)},children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return k(!v)},children:"Cancel"})]})]}),Object(a.jsxs)(r.gb,{show:w,onClose:function(){return D(!w)},color:"warning",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"warning",onClick:function(){return D(!w)},children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return D(!w)},children:"Cancel"})]})]}),Object(a.jsxs)(r.gb,{show:E,onClose:function(){return M(!E)},color:"danger",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"danger",onClick:function(){return M(!E)},children:"Do Something"})," ",Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return M(!E)},children:"Cancel"})]})]}),Object(a.jsxs)(r.gb,{show:I,onClose:function(){return P(!I)},color:"info",children:[Object(a.jsx)(r.jb,{closeButton:!0,children:Object(a.jsx)(r.kb,{children:"Modal title"})}),Object(a.jsx)(r.hb,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(a.jsxs)(r.ib,{children:[Object(a.jsx)(r.f,{color:"secondary",onClick:function(){return P(!I)},children:"Cancel"}),Object(a.jsx)(r.f,{color:"info",onClick:function(){return P(!I)},children:"Do Something"})," "]})]})]})]})})})}}}]);
//# sourceMappingURL=56.ca36e204.chunk.js.map