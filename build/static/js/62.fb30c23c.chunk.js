(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[62],{668:function(e,t,r){"use strict";function s(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return s}))},671:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return j}));var s=r(50),n=r(668),i=r(1),a=r.n(i),c=r(667),d=r(19),o=function(e){var t=e.name,r=e.text,i=Object(n.a)(e,["name","text"]),a=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(d.jsx)("div",{className:"card-header-actions",children:Object(d.jsx)(c.db,Object(s.a)(Object(s.a)({},i),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(d.jsx)("small",{className:"text-muted",children:r||"docs"})}))})},l=a.a.memo(o),u=function(e){var t=Object(s.a)({},e),r=t.children,i=Object(n.a)(t,["children"]);return Object(d.jsx)(c.b,Object(s.a)(Object(s.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},i),{},{children:r||"CoreUI Pro Component"}))},j=a.a.memo(u)},853:function(e,t,r){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},900:function(e,t,r){"use strict";r.r(t);r(1);var s=r(667),n=r(671),i=r(853),a=r(19),c=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},d=["name","registered","role","status"];t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{xs:"12",lg:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsxs)(s.n,{children:["Simple Table",Object(a.jsx)(n.a,{name:"CModal"})]}),Object(a.jsx)(s.k,{children:Object(a.jsx)(s.y,{items:i.a,fields:d,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{color:c(e.status),children:e.status})})}}})})]})}),Object(a.jsx)(s.u,{xs:"12",lg:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsx)(s.n,{children:"Striped Table"}),Object(a.jsx)(s.k,{children:Object(a.jsx)(s.y,{items:i.a,fields:d,striped:!0,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{color:c(e.status),children:e.status})})}}})})]})})]}),Object(a.jsxs)(s.wb,{children:[Object(a.jsx)(s.u,{xs:"12",lg:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsx)(s.n,{children:"Condensed Table"}),Object(a.jsx)(s.k,{children:Object(a.jsx)(s.y,{items:i.a,fields:d,size:"sm",itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{color:c(e.status),children:e.status})})}}})})]})}),Object(a.jsx)(s.u,{xs:"12",lg:"6",children:Object(a.jsxs)(s.j,{children:[Object(a.jsx)(s.n,{children:"Bordered Table"}),Object(a.jsx)(s.k,{children:Object(a.jsx)(s.y,{items:i.a,fields:d,bordered:!0,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{color:c(e.status),children:e.status})})}}})})]})})]}),Object(a.jsx)(s.wb,{children:Object(a.jsx)(s.u,{children:Object(a.jsxs)(s.j,{children:[Object(a.jsx)(s.n,{children:"Combined All Table"}),Object(a.jsx)(s.k,{children:Object(a.jsx)(s.y,{items:i.a,fields:d,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{color:c(e.status),children:e.status})})}}})})]})})}),Object(a.jsx)(s.wb,{children:Object(a.jsx)(s.u,{children:Object(a.jsxs)(s.j,{children:[Object(a.jsx)(s.n,{children:"Combined All dark Table"}),Object(a.jsx)(s.k,{children:Object(a.jsx)(s.y,{items:i.a,fields:d,dark:!0,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return Object(a.jsx)("td",{children:Object(a.jsx)(s.b,{color:c(e.status),children:e.status})})}}})})]})})})]})}}}]);
//# sourceMappingURL=62.fb30c23c.chunk.js.map