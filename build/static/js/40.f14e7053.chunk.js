(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[40],{1541:function(e,r,t){},675:function(e,r,t){"use strict";t(1),t(676);var s=t(667),n=t(19);r.a=function(e){return Object(n.jsx)("div",{className:"loadingContainer",children:Object(n.jsx)(s.Hb,{color:"primary",style:{width:"4rem",height:"4rem"}})})}},676:function(e,r,t){},697:function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},932:function(e,r,t){"use strict";t.r(r);var s=t(4),n=t.n(s),a=t(12),c=t(1),i=(t(1541),t(25)),o=t(169),l=t(694),u=t(166),d=t(695),b=t(679),j=t(182),h=t(667),m=t(675),p=t(19);r.default=function(e){var r=Object(i.g)(),t=Object(u.b)(),s=Object(u.c)((function(e){return e.auth}));Object(c.useEffect)((function(){return function(){t(Object(j.d)())}}),[t]),Object(c.useEffect)(Object(a.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==s.isLogined||!s.user){e.next=12;break}return e.next=3,b.b.success("Login successfully!");case 3:if("admin"!==s.user.role){e.next=8;break}return e.next=6,r.push("/admin");case 6:e.next=10;break;case 8:return e.next=10,r.push("/dashboard");case 10:e.next=13;break;case 12:s.error&&b.b.error(s.error.message);case 13:case"end":return e.stop()}}),e)}))),[s,r,t]);var f=l.f({email:l.h("Please enter your email.").email("Invalid email format.").required("Email is required"),password:l.h("Please enter your password").min(6,"Minimum 6 characters").required("Password is required")}),x=Object(d.b)({initialValues:{email:"",password:""},validationSchema:f,onSubmit:function(e){console.log("values: ",e),t(Object(j.b)(e))}});return Object(p.jsx)("div",{className:"loginPage",children:s.loading?Object(p.jsx)(m.a,{}):Object(p.jsx)(h.w,{children:Object(p.jsx)("div",{className:"content",children:Object(p.jsxs)(h.J,{onSubmit:x.handleSubmit,method:"post",children:[Object(p.jsx)("h1",{children:"Log In"}),Object(p.jsxs)("h4",{children:["New to this site?",Object(p.jsx)(o.b,{to:"/register",children:"Sign Up"})]}),Object(p.jsxs)(h.K,{children:[Object(p.jsx)(h.cb,{htmlFor:"nf-email",children:"Email"}),Object(p.jsx)(h.S,{type:"email",name:"email",autoComplete:"email",onChange:x.handleChange,value:x.values.email}),x.errors.email&&x.touched.email&&Object(p.jsx)(h.L,{className:"help-block textError",children:x.errors.email})]}),Object(p.jsxs)(h.K,{children:[Object(p.jsx)(h.cb,{htmlFor:"nf-email",children:"Password"}),Object(p.jsx)(h.S,{type:"password",name:"password",onChange:x.handleChange,value:x.values.password}),x.errors.password&&x.touched.password&&Object(p.jsx)(h.L,{className:"help-block textError",children:x.errors.password})]}),Object(p.jsx)(o.b,{className:"forgotPassword",to:"/forgot-password",children:"Forgot password?"}),Object(p.jsx)("div",{className:"actions",children:Object(p.jsx)(h.f,{type:"submit",color:"primary",classID:"btnLogin",children:"Log In"})})]})})})})}}}]);
//# sourceMappingURL=40.f14e7053.chunk.js.map