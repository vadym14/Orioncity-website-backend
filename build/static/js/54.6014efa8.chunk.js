(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[54],{1490:function(e,t,c){},669:function(e,t,c){"use strict";c.d(t,"a",(function(){return j})),c.d(t,"b",(function(){return b}));var r=c(50),a=c(667),i=c(1),s=c.n(i),n=c(666),o=c(17),l=function(e){var t=e.name,c=e.text,i=Object(a.a)(e,["name","text"]),s=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(o.jsx)("div",{className:"card-header-actions",children:Object(o.jsx)(n.db,Object(r.a)(Object(r.a)({},i),{},{href:s,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(o.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},j=s.a.memo(l),d=function(e){var t=Object(r.a)({},e),c=t.children,i=Object(a.a)(t,["children"]);return Object(o.jsx)(n.b,Object(r.a)(Object(r.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},i),{},{children:c||"CoreUI Pro Component"}))},b=s.a.memo(d)},942:function(e,t,c){"use strict";c.r(t);var r=c(670),a=c(1),i=c(666),s=c(669),n=c(672),o=c(1477),l=c(741),j=(c(1488),c(1489),c(1490),[{i:"a",x:0,y:0,w:1,h:2,static:!0},{i:"b",x:1,y:0,w:1,h:2},{i:"c",x:0,y:1,w:1,h:2},{i:"d",x:1,y:1,w:1,h:2},{i:"e",x:0,y:2,w:1,h:2},{i:"f",x:1,y:2,w:1,h:2}]),d={xl:[{i:"a",x:0,y:0,w:1,h:2,static:!0},{i:"b",x:1,y:0,w:1,h:2},{i:"c",x:2,y:0,w:1,h:2},{i:"d",x:0,y:1,w:1,h:2},{i:"e",x:1,y:1,w:1,h:2},{i:"f",x:2,y:1,w:1,h:2}],lg:[{i:"a",x:0,y:0,w:1,h:2,static:!0},{i:"b",x:1,y:0,w:1,h:2},{i:"c",x:2,y:0,w:1,h:2},{i:"d",x:0,y:1,w:1,h:2},{i:"e",x:1,y:1,w:1,h:2},{i:"f",x:2,y:1,w:1,h:2}],md:j,sm:j,xs:[{i:"a",x:0,y:0,w:1,h:2,static:!0},{i:"b",x:0,y:1,w:1,h:2},{i:"c",x:0,y:2,w:1,h:2},{i:"d",x:0,y:3,w:1,h:2},{i:"e",x:0,y:4,w:1,h:2},{i:"f",x:0,y:5,w:1,h:2}]},b=c(17),h={};h.xl=parseInt(Object(l.getStyle)("--breakpoint-xl"),10),h.lg=parseInt(Object(l.getStyle)("--breakpoint-lg"),10),h.md=parseInt(Object(l.getStyle)("--breakpoint-md"),10),h.sm=parseInt(Object(l.getStyle)("--breakpoint-sm"),10),h.xs=parseInt(Object(l.getStyle)("--breakpoint-xs"),10);var x=Object(o.WidthProvider)(o.Responsive);t.default=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("CoreUI-React-Draggable-Layouts")||JSON.stringify(d))),t=Object(r.a)(e,2),c=t[0],o=t[1],l="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";return Object(b.jsxs)(x,{className:"layout",layouts:c,onLayoutChange:function(e,t){return function(e,t){localStorage.setItem("CoreUI-React-Draggable-Layouts",JSON.stringify(t)),o(t)}(0,t)},breakpoints:h,cols:{xl:3,lg:3,md:3,sm:2,xs:1},isResizable:!1,measureBeforeMount:!1,draggableHandle:".card-header",children:[Object(b.jsxs)(i.j,{accentColor:"primary",children:[Object(b.jsxs)(i.n,{children:["Static Card",Object(b.jsx)("div",{className:"card-header-actions",children:Object(b.jsx)(i.f,{color:"link",size:"sm",className:"card-header-action",onClick:function(){o(JSON.parse(JSON.stringify(d)))},children:"Reset Layout"})})]}),Object(b.jsx)(i.k,{children:l})]},"a"),Object(b.jsxs)(i.j,{accentColor:"secondary",children:[Object(b.jsxs)(i.n,{children:[Object(b.jsx)(n.a,{name:"cil-cursor-move"}),"Drag & Drop Card\xa0",Object(b.jsx)(s.b,{}),Object(b.jsx)(s.a,{href:"https://github.com/STRML/react-grid-layout"})]}),Object(b.jsx)(i.k,{children:l})]},"b"),Object(b.jsxs)(i.j,{accentColor:"success",children:[Object(b.jsxs)(i.n,{children:[Object(b.jsx)(n.a,{name:"cil-cursor-move"}),"Drag & Drop Card"]}),Object(b.jsx)(i.k,{children:l})]},"c"),Object(b.jsxs)(i.j,{accentColor:"info",children:[Object(b.jsxs)(i.n,{children:[Object(b.jsx)(n.a,{name:"cil-cursor-move"}),"Drag & Drop Card"]}),Object(b.jsx)(i.k,{children:l})]},"d"),Object(b.jsxs)(i.j,{accentColor:"warning",children:[Object(b.jsxs)(i.n,{children:[Object(b.jsx)(n.a,{name:"cil-cursor-move"}),"Drag & Drop Card"]}),Object(b.jsx)(i.k,{children:l})]},"e"),Object(b.jsxs)(i.j,{accentColor:"danger",children:[Object(b.jsxs)(i.n,{children:[Object(b.jsx)(n.a,{name:"cil-cursor-move"}),"Drag & Drop Card"]}),Object(b.jsx)(i.k,{children:l})]},"f")]})}}}]);
//# sourceMappingURL=54.6014efa8.chunk.js.map