(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[85],{670:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(50),c=n(668),r=n(1),o=n.n(r),l=n(667),i=n(19),s=function(e){var t=e.name,n=e.text,r=Object(c.a)(e,["name","text"]),o=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(l.db,Object(a.a)(Object(a.a)({},r),{},{href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:n||"docs"})}))})},b=o.a.memo(s),j=function(e){var t=Object(a.a)({},e),n=t.children,r=Object(c.a)(t,["children"]);return Object(i.jsx)(l.b,Object(a.a)(Object(a.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},r),{},{children:n||"CoreUI Pro Component"}))},h=o.a.memo(j)},883:function(e,t,n){"use strict";n.r(t);var a=n(671),c=n(1),r=n.n(c),o=n(667),l=n(1407),i=n(670),s=n(19),b={lat:37.431489,lng:-122.163719},j=[{lat:37.431489,lng:-122.163719,label:"S",draggable:!1,title:"Stanford",www:"https://www.stanford.edu/"},{lat:37.394694,lng:-122.150333,label:"T",draggable:!1,title:"Tesla",www:"https://www.tesla.com/"},{lat:37.331681,lng:-122.0301,label:"A",draggable:!1,title:"Apple",www:"https://www.apple.com/"},{lat:37.484722,lng:-122.148333,label:"F",draggable:!1,title:"Facebook",www:"https://www.facebook.com/"}],h=function(){return j.map((function(e,t){return Object(s.jsx)(d,{location:e},t.toString())}))},d=function(e){var t=e.location,n=r.a.useState(!1),c=Object(a.a)(n,2),i=c[0],b=c[1];return Object(s.jsx)(l.Marker,{onClick:function(){return b(!i)},position:t,title:t.title,label:t.label,children:i&&Object(s.jsx)(l.InfoWindow,{onCloseClick:function(){return b(!1)},children:Object(s.jsx)(o.nb,{href:t.www,target:"_blank",children:t.title})})})},p=Object(l.withScriptjs)(Object(l.withGoogleMap)((function(){return Object(s.jsx)(l.GoogleMap,{defaultZoom:11,defaultCenter:b,children:Object(s.jsx)(h,{locations:j})})})));t.default=function(){return Object(s.jsxs)(o.j,{children:[Object(s.jsxs)(o.n,{children:["React Google Maps"," ",Object(s.jsx)(i.b,{}),Object(s.jsx)(i.a,{href:"https://github.com/tomchentw/react-google-maps"})]}),Object(s.jsx)(o.k,{children:Object(s.jsx)(p,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA"),loadingElement:Object(s.jsx)("div",{style:{height:"100%"}}),containerElement:Object(s.jsx)("div",{style:{height:"400px"}}),mapElement:Object(s.jsx)("div",{style:{height:"100%"}})},"map")})]})}}}]);
//# sourceMappingURL=85.bd8b806e.chunk.js.map