(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[34],{1496:function(e,t,n){},670:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(172);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(a){c=!0,s=a}finally{try{r||null==o.return||o.return()}finally{if(c)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},678:function(e,t,n){"use strict";n(1),n(679);var r=n(666),c=n(17);t.a=function(e){return Object(c.jsx)("div",{className:"loadingContainer",children:Object(c.jsx)(r.Hb,{color:"primary",style:{width:"4rem",height:"4rem"}})})}},679:function(e,t,n){},924:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),s=n(19),i=n(670),o=n(1),a=(n(1496),n(673)),u=n.n(a),l=n(25),d=n(692),j=n(170),b=n(175),f=n(742),h=n(666),O=n(678),p=n(17);t.default=function(e){var t=Object(j.b)(),n=Object(l.g)(),r=Object(j.c)((function(e){return e.projects})),a=r.adminProjects,m=r.loading,x=r.error,y=r.isDeletedProject,g=Object(o.useState)(!1),v=Object(i.a)(g,2),w=v[0],k=v[1],A=Object(o.useState)(null),S=Object(i.a)(A,2),C=S[0],D=S[1];Object(o.useEffect)((function(){return t(Object(b.n)()),t(Object(b.e)()),function(){t(Object(b.n)())}}),[t]),Object(o.useEffect)((function(){return y&&(d.b.success("Deleted project successfully!"),D(null),k(!1),t(Object(b.e)())),function(){t(Object(b.n)())}}),[y,t]),Object(o.useEffect)((function(){return x&&(console.log("error: ",x),d.b.error(x.message)),function(){t(Object(b.n)())}}),[x,t]);var P=function(e){switch(e){case"active":return"success";case"inactive":return"secondary";case"blocked":case"deleted":return"danger";default:return"primary"}},N=function(){var e=Object(s.a)(c.a.mark((function e(r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(b.g)(r));case 2:return e.next=4,n.push("/admin/projects/".concat(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(b.d)(C));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"adminUserPage",children:[Object(p.jsxs)(h.gb,{show:w,onClose:function(){k(!w)},centered:!0,children:[Object(p.jsx)(h.jb,{closeButton:!0,children:"Are you sure delete project?"}),Object(p.jsxs)(h.ib,{children:[Object(p.jsx)(h.f,{color:"default",onClick:function(){k(!1),D(null)},children:"Cancel"}),Object(p.jsx)(h.f,{color:"danger",onClick:_,children:"Delete"})]})]}),Object(p.jsxs)(h.j,{children:[Object(p.jsx)(h.n,{children:"All Projects"}),Object(p.jsx)(h.k,{children:m?Object(p.jsx)(O.a,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{textAlign:"right",marginBottom:15},children:Object(p.jsx)(h.f,{color:"success",onClick:function(){n.push("/admin/projects/add")},children:"Create Project"})}),Object(p.jsx)(h.y,{items:a,fields:[{key:"name",_classes:"font-weight-bold"},"userAssigned",{key:"flagDashboard",label:"Show Dashboard"},{key:"flagIndex",label:"Dashboard Index"},{key:"isShowHollywood",label:"Show Hollywood"},{key:"isSilverLake",label:"Show Silver"},"status",{key:"_id",label:"Actions"}],hover:!0,pagination:!0,striped:!0,itemsPerPage:5,activePage:1,clickableRows:!0,scopedSlots:{userAssigned:function(e){return Object(p.jsxs)("td",{children:[e.userAssigned&&e.userAssigned.firstName||""," ",e.userAssigned&&e.userAssigned.lastName||""]})},lastName:function(e){return Object(p.jsx)("td",{children:e.lastName||""})},phone:function(e){return Object(p.jsx)("td",{children:e.phone||""})},status:function(e){return Object(p.jsx)("td",{children:Object(p.jsx)(h.b,{color:P(e.status),children:e.status})})},updatedAt:function(e){return Object(p.jsx)("td",{children:u()(e.updatedAt).format("MM/DD/YYYY H:mm")})},_id:function(e){return Object(p.jsxs)("td",{className:"tdActions",children:[Object(p.jsx)("a",{onClick:function(){return N(e._id)},children:Object(p.jsx)(f.b,{})}),Object(p.jsx)("a",{onClick:function(){return t=e._id,D(t),void k(!0);var t},children:Object(p.jsx)(f.c,{})})]})}}})]})})]})]})}}}]);
//# sourceMappingURL=34.cfee4324.chunk.js.map