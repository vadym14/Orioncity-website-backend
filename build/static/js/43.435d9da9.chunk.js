(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[43],{664:function(e,i,t){"use strict";function c(e,i){if(null==e)return{};var t,c,r=function(e,i){if(null==e)return{};var t,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)t=s[c],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)t=s[c],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(i,"a",(function(){return c}))},666:function(e,i,t){"use strict";t.d(i,"a",(function(){return j})),t.d(i,"b",(function(){return d}));var c=t(50),r=t(664),s=t(1),n=t.n(s),a=t(663),l=t(16),o=function(e){var i=e.name,t=e.text,s=Object(r.a)(e,["name","text"]),n=i?"https://coreui.io/react/docs/components/".concat(i):e.href;return Object(l.jsx)("div",{className:"card-header-actions",children:Object(l.jsx)(a.db,Object(c.a)(Object(c.a)({},s),{},{href:n,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(l.jsx)("small",{className:"text-muted",children:t||"docs"})}))})},j=n.a.memo(o),u=function(e){var i=Object(c.a)({},e),t=i.children,s=Object(r.a)(i,["children"]);return Object(l.jsx)(a.b,Object(c.a)(Object(c.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},s),{},{children:t||"CoreUI Pro Component"}))},d=n.a.memo(u)},667:function(e,i,t){"use strict";t.d(i,"a",(function(){return r}));var c=t(669);function r(e,i){return function(e){if(Array.isArray(e))return e}(e)||function(e,i){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],c=!0,r=!1,s=void 0;try{for(var n,a=e[Symbol.iterator]();!(c=(n=a.next()).done)&&(t.push(n.value),!i||t.length!==i);c=!0);}catch(l){r=!0,s=l}finally{try{c||null==a.return||a.return()}finally{if(r)throw s}}return t}}(e,i)||Object(c.a)(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},669:function(e,i,t){"use strict";t.d(i,"a",(function(){return r}));var c=t(670);function r(e,i){if(e){if("string"===typeof e)return Object(c.a)(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(c.a)(e,i):void 0}}},670:function(e,i,t){"use strict";function c(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,c=new Array(i);t<i;t++)c[t]=e[t];return c}t.d(i,"a",(function(){return c}))},860:function(e,i,t){"use strict";t.r(i);var c=t(667),r=t(1),s=t(663),n=t(666),a=t(16);i.default=function(){var e=Object(r.useState)(1),i=Object(c.a)(e,2),t=i[0],l=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)(n.a,{name:"CListGroup"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{children:[Object(a.jsx)(s.fb,{children:"Cras justo odio"}),Object(a.jsx)(s.fb,{children:"Dapibus ac facilisis in"}),Object(a.jsx)(s.fb,{children:"Morbi leo risus"}),Object(a.jsx)(s.fb,{children:"Porta ac consectetur ac"}),Object(a.jsx)(s.fb,{children:"Vestibulum at eros"})]})})]})}),Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group links",Object(a.jsx)("small",{children:" with first item active and last item disabled"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{children:[Object(a.jsx)(s.fb,{href:"#",active:!0,children:"Cras justo odio"}),Object(a.jsx)(s.fb,{href:"#",children:"Dapibus ac facilisis in"}),Object(a.jsx)(s.fb,{href:"#",children:"Morbi leo risus"}),Object(a.jsx)(s.fb,{href:"#",children:"Porta ac consectetur ac"}),Object(a.jsx)(s.fb,{href:"#",disabled:!0,children:"Vestibulum at eros"})]})})]})})]}),Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" contextual classes"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{children:[Object(a.jsx)(s.fb,{children:"Dapibus ac facilisis in"}),Object(a.jsx)(s.fb,{color:"primary",children:"This is a primary list group item"}),Object(a.jsx)(s.fb,{color:"secondary",children:"This is a secondary list group item"}),Object(a.jsx)(s.fb,{color:"success",children:"This is a success list group item"}),Object(a.jsx)(s.fb,{color:"danger",children:"This is a danger list group item"}),Object(a.jsx)(s.fb,{color:"warning",children:"This is a warning list group item"}),Object(a.jsx)(s.fb,{color:"info",children:"This is a info list group item"}),Object(a.jsx)(s.fb,{color:"light",children:"This is a light list group item"}),Object(a.jsx)(s.fb,{color:"dark",children:"This is a dark list group item"})]})})]})}),Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" contextual classes with .action"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{children:[Object(a.jsx)(s.fb,{action:!0,children:"Dapibus ac facilisis in"}),Object(a.jsx)(s.fb,{action:!0,color:"primary",children:"This is a primary list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"secondary",children:"This is a secondary list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"success",children:"This is a success list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"danger",children:"This is a danger list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"warning",children:"This is a warning list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"info",children:"This is a info list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"light",children:"This is a light list group item"}),Object(a.jsx)(s.fb,{action:!0,color:"dark",children:"This is a dark list group item"})]})})]})})]}),Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" accent"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{accent:!0,children:[Object(a.jsx)(s.fb,{accent:"primary",children:"This is a primary list group item"}),Object(a.jsx)(s.fb,{accent:"secondary",children:"This is a secondary list group item"}),Object(a.jsx)(s.fb,{accent:"success",children:"This is a success list group item"}),Object(a.jsx)(s.fb,{accent:"danger",children:"This is a danger list group item"}),Object(a.jsx)(s.fb,{accent:"warning",children:"This is a warning list group item"}),Object(a.jsx)(s.fb,{accent:"info",children:"This is a info list group item"}),Object(a.jsx)(s.fb,{accent:"light",children:"This is a light list group item"}),Object(a.jsx)(s.fb,{accent:"dark",children:"This is a dark list group item"})]})})]})}),Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" accent with color"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{accent:!0,children:[Object(a.jsx)(s.fb,{accent:"primary",color:"primary",children:"This is a primary list group item"}),Object(a.jsx)(s.fb,{accent:"secondary",color:"secondary",children:"This is a secondary list group item"}),Object(a.jsx)(s.fb,{accent:"success",color:"success",children:"This is a success list group item"}),Object(a.jsx)(s.fb,{accent:"danger",color:"danger",children:"This is a danger list group item"}),Object(a.jsx)(s.fb,{accent:"warning",color:"warning",children:"This is a warning list group item"}),Object(a.jsx)(s.fb,{accent:"info",color:"info",children:"This is a info list group item"}),Object(a.jsx)(s.fb,{accent:"light",color:"light",children:"This is a light list group item"}),Object(a.jsx)(s.fb,{accent:"dark",color:"dark",children:"This is a dark list group item"})]})})]})})]}),Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" with badges"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{children:[Object(a.jsxs)(s.fb,{className:"justify-content-between",children:["Cras justo odio",Object(a.jsx)(s.b,{className:"float-right",shape:"pill",color:"primary",children:"14"})]}),Object(a.jsxs)(s.fb,{className:"justify-content-between",children:["Dapibus ac facilisis in",Object(a.jsx)(s.b,{className:"float-right",shape:"pill",color:"primary",children:"2"})]}),Object(a.jsxs)(s.fb,{className:"justify-content-between",children:["Morbi leo risus",Object(a.jsx)(s.b,{className:"float-right",shape:"pill",color:"primary",children:"1"})]})]})})]})}),Object(a.jsx)(s.u,{sm:"12",xl:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" custom content"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.eb,{children:[Object(a.jsxs)(s.fb,{action:!0,active:!0,children:[Object(a.jsxs)("h5",{className:"d-flex w-100 justify-content-between",children:["List group item heading",Object(a.jsx)("small",{children:"3 days ago"})]}),Object(a.jsxs)("div",{className:"mb-1",children:["Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",Object(a.jsx)("small",{children:"Donec id elit non mi porta."})]})]}),Object(a.jsxs)(s.fb,{action:!0,children:[Object(a.jsx)("h5",{children:"List group item heading"}),Object(a.jsx)("div",{children:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}),Object(a.jsx)("small",{children:"Small."})]}),Object(a.jsxs)(s.fb,{action:!0,children:[Object(a.jsx)("h5",{children:"List group item heading"}),Object(a.jsx)("div",{children:"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."}),Object(a.jsx)("small",{children:"Small."})]})]})})]})})]}),Object(a.jsx)(s.wb,{children:Object(a.jsx)(s.u,{children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["List group",Object(a.jsx)("small",{children:" tab Javascript plugin"})]}),Object(a.jsx)(s.k,{children:Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{xs:"4",children:Object(a.jsxs)(s.eb,{id:"list-tab",role:"tablist",children:[Object(a.jsx)(s.fb,{onClick:function(){return l(0)},action:!0,active:0===t,children:"Home"}),Object(a.jsx)(s.fb,{onClick:function(){return l(1)},action:!0,active:1===t,children:"Profile"}),Object(a.jsx)(s.fb,{onClick:function(){return l(2)},action:!0,active:2===t,children:"Messages"}),Object(a.jsx)(s.fb,{onClick:function(){return l(3)},action:!0,active:3===t,children:"Settings"})]})}),Object(a.jsx)(s.u,{xs:"8",children:Object(a.jsxs)(s.Kb,{children:[Object(a.jsx)(s.Lb,{active:0===t,children:Object(a.jsx)("p",{children:"Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim."})}),Object(a.jsx)(s.Lb,{active:1===t,children:Object(a.jsx)("p",{children:"Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad."})}),Object(a.jsx)(s.Lb,{active:2===t,children:Object(a.jsx)("p",{children:"Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum."})}),Object(a.jsx)(s.Lb,{active:3===t,children:Object(a.jsx)("p",{children:"Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure."})})]})})]})})]})})})]})}}}]);
//# sourceMappingURL=43.435d9da9.chunk.js.map