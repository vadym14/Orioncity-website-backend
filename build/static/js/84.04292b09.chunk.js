(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[84],{1426:function(e,a){},671:function(e,a,l){"use strict";l.d(a,"a",(function(){return i})),l.d(a,"b",(function(){return j}));var t=l(50),c=l(669),n=l(1),r=l.n(n),s=l(667),b=l(19),d=function(e){var a=e.name,l=e.text,n=Object(c.a)(e,["name","text"]),r=a?"https://coreui.io/react/docs/components/".concat(a):e.href;return Object(b.jsx)("div",{className:"card-header-actions",children:Object(b.jsx)(s.db,Object(t.a)(Object(t.a)({},n),{},{href:r,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(b.jsx)("small",{className:"text-muted",children:l||"docs"})}))})},i=r.a.memo(d),o=function(e){var a=Object(t.a)({},e),l=a.children,n=Object(c.a)(a,["children"]);return Object(b.jsx)(s.b,Object(t.a)(Object(t.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},n),{},{children:l||"CoreUI Pro Component"}))},j=r.a.memo(o)},971:function(e,a,l){"use strict";l.r(a);var t=l(50),c=l(670),n=l(1),r=l.n(n),s=l(667),b=l(673),d=l(1649),i=l(1359),o=(l(1418),l(1468),l(671)),j=[{value:"AL",label:"Alabama",disabled:!0},{value:"AK",label:"Alaska"},{value:"AS",label:"American Samoa"},{value:"AZ",label:"Arizona"},{value:"AR",label:"Arkansas"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"DC",label:"District Of Columbia"},{value:"FM",label:"Federated States Of Micronesia"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"GU",label:"Guam"},{value:"HI",label:"Hawaii"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"IA",label:"Iowa"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"ME",label:"Maine"},{value:"MH",label:"Marshall Islands"},{value:"MD",label:"Maryland"},{value:"MA",label:"Massachusetts"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MS",label:"Mississippi"},{value:"MO",label:"Missouri"},{value:"MT",label:"Montana"},{value:"NE",label:"Nebraska"},{value:"NV",label:"Nevada"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NY",label:"New York"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"MP",label:"Northern Mariana Islands"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PW",label:"Palau"},{value:"PA",label:"Pennsylvania"},{value:"PR",label:"Puerto Rico"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"VT",label:"Vermont"},{value:"VI",label:"Virgin Islands"},{value:"VA",label:"Virginia"},{value:"WA",label:"Washington"},{value:"WV",label:"West Virginia"},{value:"WI",label:"Wisconsin"},{value:"WY",label:"Wyoming"}],u=l(1648),h=l(166),O=l(19);a.default=function(){var e=Object(h.c)((function(e){return e.darkMode})),a=r.a.useState([{value:"TX",label:"Texas"},{value:"UT",label:"Utah"}]),l=Object(c.a)(a,2),n=l[0],x=l[1],m=r.a.useState({startDate:null,endDate:null}),v=Object(c.a)(m,2),p=v[0],f=v[1],N=r.a.useState(),k=Object(c.a)(N,2),C=k[0],M=k[1];return Object(O.jsxs)(s.wb,{children:[Object(O.jsx)(s.u,{sm:12,md:6,style:{flexBasis:"auto"},children:Object(O.jsxs)(s.j,{children:[Object(O.jsxs)(s.n,{children:["Masked Input",Object(O.jsx)("small",{children:" React Text Mask"})," ",Object(O.jsx)(o.b,{children:"CoreU Pro integration"})]}),Object(O.jsxs)(s.k,{children:[Object(O.jsxs)(s.K,{children:[Object(O.jsx)(s.cb,{children:"Date input"}),Object(O.jsxs)(s.V,{children:[Object(O.jsx)(s.X,{children:Object(O.jsx)(s.Y,{children:Object(O.jsx)(b.b,{name:"cil-calendar"})})}),Object(O.jsx)(d.b,{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],Component:d.a,className:"form-control"})]}),Object(O.jsx)(s.L,{color:"muted",children:"ex. 99/99/9999"})]}),Object(O.jsxs)(s.K,{children:[Object(O.jsx)(s.cb,{children:"Phone input"}),Object(O.jsxs)(s.V,{children:[Object(O.jsx)(s.X,{children:Object(O.jsx)(s.Y,{children:Object(O.jsx)(b.b,{name:"cil-phone"})})}),Object(O.jsx)(d.b,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],Component:d.a,className:"form-control"})]}),Object(O.jsx)(s.L,{color:"muted",children:"ex. (999) 999-9999"})]}),Object(O.jsxs)(s.K,{children:[Object(O.jsx)(s.cb,{children:"Taxpayer Identification Numbers"}),Object(O.jsxs)(s.V,{children:[Object(O.jsx)(s.X,{children:Object(O.jsx)(s.Y,{children:Object(O.jsx)(b.b,{name:"cil-dollar"})})}),Object(O.jsx)(d.b,{mask:[/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],Component:d.a,className:"form-control"})]}),Object(O.jsx)(s.L,{color:"muted",children:"ex. 99-9999999"})]}),Object(O.jsxs)(s.K,{children:[Object(O.jsx)(s.cb,{children:"Social Security Number"}),Object(O.jsxs)(s.V,{children:[Object(O.jsx)(s.X,{children:Object(O.jsx)(s.Y,{children:Object(O.jsx)(b.b,{name:"cil-user"})})}),Object(O.jsx)(d.b,{mask:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],Component:d.a,className:"form-control"})]}),Object(O.jsx)(s.L,{color:"muted",children:"ex. 999-99-9999"})]}),Object(O.jsxs)(s.K,{children:[Object(O.jsx)(s.cb,{children:"Eye Script"}),Object(O.jsxs)(s.V,{children:[Object(O.jsx)(s.X,{children:Object(O.jsx)(s.Y,{children:Object(O.jsx)(b.b,{name:"cil-asterisk"})})}),Object(O.jsx)(d.b,{mask:["~",/\d/,".",/\d/,/\d/," ","~",/\d/,".",/\d/,/\d/," ",/\d/,/\d/,/\d/],Component:d.a,className:"form-control"})]}),Object(O.jsx)(s.L,{color:"muted",children:"ex. ~9.99 ~9.99 999"})]}),Object(O.jsxs)(s.K,{children:[Object(O.jsx)(s.cb,{children:"Credit Card Number"}),Object(O.jsxs)(s.V,{children:[Object(O.jsx)(s.X,{children:Object(O.jsx)(s.Y,{children:Object(O.jsx)(b.b,{name:"cil-credit-card"})})}),Object(O.jsx)(d.b,{mask:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/],Component:d.a,className:"form-control"})]}),Object(O.jsx)(s.L,{color:"muted",children:"ex. 9999 9999 9999 9999"})]})]})]})}),Object(O.jsxs)(s.u,{sm:12,md:6,children:[Object(O.jsxs)(s.j,{children:[Object(O.jsxs)(s.n,{children:["React-Select"," ",Object(O.jsx)(o.b,{children:"CoreU Pro integration"}),Object(O.jsx)(o.a,{href:"https://github.com/JedWatson/react-select"})]}),Object(O.jsx)(s.k,{children:Object(O.jsx)(u.a,{name:"form-field-name2",value:n,options:j,onChange:x,isMulti:!0,theme:function(a){return Object(t.a)(Object(t.a)({},a),{},{colors:Object(t.a)(Object(t.a)({},a.colors),{},{primary:e?"black":a.colors.primary,primary25:e?"black":a.colors.primary25,dangerLight:e?"black":a.colors.dangerLight,neutral0:e?"#2a2b36":a.colors.neutral0})})}})})]}),Object(O.jsxs)(s.j,{children:[Object(O.jsxs)(s.n,{children:["React-Dates"," ",Object(O.jsx)(o.b,{children:"CoreU Pro integration"}),Object(O.jsx)(o.a,{href:"https://github.com/airbnb/react-dates"})]}),Object(O.jsx)(s.k,{children:Object(O.jsx)(i.DateRangePicker,{startDate:p.startDate,startDateId:"startDate",endDate:p.endDate,endDateId:"endDate",onDatesChange:function(e){return f(e)},focusedInput:C,onFocusChange:function(e){return M(e)},orientation:"horizontal",openDirection:"down"})})]})]})]})}}}]);
//# sourceMappingURL=84.04292b09.chunk.js.map