(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[42],{1545:function(e,r,s){},675:function(e,r,s){"use strict";s(1),s(676);var t=s(667),a=s(19);r.a=function(e){return Object(a.jsx)("div",{className:"loadingContainer",children:Object(a.jsx)(t.Hb,{color:"primary",style:{width:"4rem",height:"4rem"}})})}},676:function(e,r,s){},697:function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},934:function(e,r,s){"use strict";s.r(r);var t=s(4),a=s.n(t),n=s(12),c=s(1),i=(s(1545),s(694)),o=s(25),l=s(169),d=s(695),u=s(679),b=s(166),h=s(182),j=s(667),m=s(675),p=s(19);r.default=function(e){var r=Object(o.g)(),s=Object(b.b)(),t=Object(b.c)((function(e){return e.auth}));Object(c.useEffect)((function(){return function(){s(Object(h.d)())}}),[s]),Object(c.useEffect)(Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==t.isCreated||!t.user){e.next=7;break}return e.next=3,u.b.success("Register account successfully!");case 3:return e.next=5,r.push("/login");case 5:e.next=8;break;case 7:t.error&&u.b.error(t.error.message);case 8:case"end":return e.stop()}}),e)}))),[t,r,s]);var f=i.f({email:i.h("Please enter your email.").email("Invalid email format.").required("Email is required"),password:i.h("Please enter your password").min(6,"Minimum 6 characters").required("Password is required"),rePassword:i.h("Please enter confirm password").required("Confirm password is required").oneOf([i.g("password")],"Password is not match")}),O=Object(d.b)({initialValues:{email:"",password:"",rePassword:""},validationSchema:f,onSubmit:function(e){console.log("values: ",e),s(Object(h.c)(e))}});return Object(p.jsx)("div",{className:"loginPage",children:t.loading?Object(p.jsx)(m.a,{}):Object(p.jsx)(j.w,{children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(j.J,{onSubmit:O.handleSubmit,method:"post",children:[Object(p.jsx)("h1",{children:"Sign Up"}),Object(p.jsxs)("h4",{children:["Already a member? ",Object(p.jsx)(l.b,{to:"/login",children:"Log In"})]}),Object(p.jsxs)(j.K,{children:[Object(p.jsx)(j.cb,{htmlFor:"nf-email",children:"Email"}),Object(p.jsx)(j.S,{type:"email",name:"email",autoComplete:"email",onChange:O.handleChange,value:O.values.email}),O.errors.email&&O.touched.email&&Object(p.jsx)(j.L,{className:"help-block textError",children:O.errors.email})]}),Object(p.jsxs)(j.K,{children:[Object(p.jsx)(j.cb,{htmlFor:"nf-email",children:"Password"}),Object(p.jsx)(j.S,{type:"password",name:"password",onChange:O.handleChange,value:O.values.password}),O.errors.password&&O.touched.password&&Object(p.jsx)(j.L,{className:"help-block textError",children:O.errors.password})]}),Object(p.jsxs)(j.K,{children:[Object(p.jsx)(j.cb,{htmlFor:"nf-email",children:"Confirm Password"}),Object(p.jsx)(j.S,{type:"password",name:"rePassword",onChange:O.handleChange,value:O.values.rePassword}),O.errors.rePassword&&O.touched.rePassword&&Object(p.jsx)(j.L,{className:"help-block textError",children:O.errors.rePassword})]}),Object(p.jsx)("div",{className:"actions",style:{marginTop:30},children:Object(p.jsx)(j.f,{type:"submit",color:"primary",classID:"btnLogin",children:"Sign Up"})})]})})})})}}}]);
//# sourceMappingURL=42.71038ba2.chunk.js.map