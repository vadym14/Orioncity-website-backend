(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[27],{1581:function(e,t,c){},1582:function(e,t,c){},1583:function(e,t,c){},1584:function(e,t,c){},1585:function(e,t,c){},675:function(e,t,c){"use strict";c(1),c(676);var s=c(667),j=c(19);t.a=function(e){return Object(j.jsx)("div",{className:"loadingContainer",children:Object(j.jsx)(s.Hb,{color:"primary",style:{width:"4rem",height:"4rem"}})})}},676:function(e,t,c){},940:function(e,t,c){"use strict";c.d(t,"b",(function(){return s})),c.d(t,"a",(function(){return j}));var s=function(e){e=e.toString();for(var t=/(-?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e},j=["#f17522","#9c9c9c","#f7c028","#15a5e7","#F67280","#6C5B7B","#355C7D","#FECEAB","#E84A5F","#A8E6CE","#FF8C94","#CC527A","#363636","#A7226E","#EC2049","#2F9599","#F7DB4F"]},948:function(e,t,c){"use strict";c.r(t);var s=c(1),j=(c(1581),c(1582),c(25)),d=c(168),r=c(174),l=c(667),b=(c(1583),c(940)),a=c(19),n=function(e){var t=e.data;return Object(a.jsx)("div",{className:"basicInfo",children:Object(a.jsx)("table",{children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"Area"}),Object(a.jsx)("td",{className:"textBold bgGrey",children:t&&t.area||""}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"Street"}),Object(a.jsx)("td",{className:"textBold bgGrey",children:t&&t.street||""}),Object(a.jsx)("td",{})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Cash Req For Lot Purchase"}),Object(a.jsxs)("td",{className:"bgGrey",children:["$",t&&Object(b.b)(t.cashReqForLotPurchase)||0]}),Object(a.jsx)("td",{className:"bgGrey"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Loan For Lot Purchase"}),Object(a.jsxs)("td",{className:"bgGrey",children:["$",t&&Object(b.b)(t.loanForLotPurchase)||0]}),Object(a.jsx)("td",{className:"bgGrey"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Total Lot/s Purchase Price"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&Object(b.b)(t.loanForLotPurchase+t.cashReqForLotPurchase)||0]})]}),Object(a.jsxs)("tr",{className:"m-10",children:[Object(a.jsx)("td",{children:"Total Building cost"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&Object(b.b)(t.totalBildingCost)||0]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Lot Purchase Loan Fin Cost"}),Object(a.jsxs)("td",{className:"bgGrey",children:["$",t&&Object(b.b)(t.lotPurchaseLoanFinCost)||0]}),Object(a.jsx)("td",{className:"bgGrey"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Construction Fin Cost"}),Object(a.jsxs)("td",{className:"bgGrey",children:["$",t&&Object(b.b)(t.constructionFinCost)||0]}),Object(a.jsx)("td",{className:"bgGrey"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Total Fin cost"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&Object(b.b)(t.constructionFinCost+t.lotPurchaseLoanFinCost)||0]})]}),Object(a.jsxs)("tr",{className:"m-10",children:[Object(a.jsx)("td",{children:"Soft cost"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&Object(b.b)(t.softCost)||0]})]}),Object(a.jsxs)("tr",{className:"m-10",children:[Object(a.jsx)("td",{className:"textBold",children:"Total cost"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&Object(b.b)(t.loanForLotPurchase+t.cashReqForLotPurchase+t.totalBildingCost+t.constructionFinCost+t.lotPurchaseLoanFinCost+t.softCost)||0]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"Additional required Equity"}),Object(a.jsxs)("td",{className:"bgGrey",children:["$",t&&Object(b.b)(t.additionalRequiredEquity)||0]}),Object(a.jsx)("td",{className:"bgGrey textRed"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"Total Cash Req For Project"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&Object(b.b)(t.totalCashReqForProject)||0]}),Object(a.jsx)("td",{className:"bgGrey"})]}),Object(a.jsxs)("tr",{className:"m-10",children:[Object(a.jsx)("td",{className:"textBold",children:"Avg sale Price per sqf"}),Object(a.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&Object(b.b)(t.avgSalePricePerSqf)||0]}),Object(a.jsx)("td",{className:"bgGrey"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"",children:"Total expected Income"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&Object(b.b)(t.totalExpectedIncome)||0]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{className:"",children:["Sales Commission (",t&&Object(b.b)(t.salesCommissionPercent)||0,"%)"]}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey ",children:["$",t&&t.salesCommissionPercent?Object(b.b)((t.totalExpectedIncome*t.salesCommissionPercent/100).toFixed(0)):0]})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"",children:"Net Revenue"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&Object(b.b)((t.totalExpectedIncome-t.totalExpectedIncome*t.salesCommissionPercent/100).toFixed(0))]})]}),Object(a.jsxs)("tr",{className:"mt-10",children:[Object(a.jsx)("td",{className:"",children:"Profit per Project"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&Object(b.b)(t.profitPerProject)||0]})]}),Object(a.jsxs)("tr",{className:"mb-10",children:[Object(a.jsx)("td",{className:"",children:"Profit per Project %"}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey",children:[t&&t.profitPerProjectPercent||0,"%"]})]}),Object(a.jsxs)("tr",{className:"mt-10",children:[Object(a.jsxs)("td",{className:"",children:["Constructor Share"," ",Object(a.jsxs)("span",{className:"percent",children:[t&&t.constructorSharePercent||0,"%"]})]}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&Object(b.b)((t.profitPerProject*t.constructorSharePercent).toFixed(0))||0]})]}),Object(a.jsxs)("tr",{className:"mb-10",children:[Object(a.jsxs)("td",{className:"",children:["Developer Share"," ",Object(a.jsxs)("span",{className:"percent",children:[t&&t.developerSharePercent||0,"%"]})]}),Object(a.jsx)("td",{className:"bgGrey"}),Object(a.jsxs)("td",{className:"bgGrey textRed",children:[t&&Object(b.b)((t.profitPerProject*t.developerSharePercent).toFixed(0))||0,"%"]})]}),Object(a.jsxs)("tr",{className:"mt-10",children:[Object(a.jsx)("td",{className:"",children:"Total Cash on Cash"}),Object(a.jsxs)("td",{className:"bgGrey",children:[t&&t.totalCashOnCash,"%"]}),Object(a.jsx)("td",{className:"bgGrey textRed"})]}),Object(a.jsxs)("tr",{className:"",children:[Object(a.jsx)("td",{className:"",children:"Net Cash on Cash (Investors Share)"}),Object(a.jsxs)("td",{className:"bgGrey tdBadget",children:[t&&t.netCashOnCash,"%"]}),Object(a.jsx)("td",{className:"bgGrey textRed"})]}),Object(a.jsxs)("tr",{className:"",children:[Object(a.jsx)("td",{className:"",children:"Project Period (Month)"}),Object(a.jsxs)("td",{className:"bgGrey",children:[t&&t.projectPeriodMonth||0,"%"]}),Object(a.jsx)("td",{className:"bgGrey textRed"})]}),Object(a.jsxs)("tr",{className:"",children:[Object(a.jsx)("td",{className:"",children:"Anual Return"}),Object(a.jsxs)("td",{className:"bgGrey tdBadget",children:[t&&t.annualReturn||0,"%"]}),Object(a.jsx)("td",{className:"bgGrey textRed"})]})]})})})},i=(c(1584),function(e){var t=e.units;return Object(a.jsx)("div",{className:"units",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#Units"}),Object(a.jsx)("th",{children:"Size (sqf)"}),Object(a.jsx)("th",{children:"Cost $"}),Object(a.jsx)("th",{children:"Sales $"}),Object(a.jsx)("th",{children:"Sale Price"})]})}),Object(a.jsx)("tbody",{children:function(){for(var e=[],c=0,s=0,j=0,d=0,r=0;r<t.length;r++){var l=t[r];c+=l.size,s+=l.cost,j+=l.sale,d+=l.salePrice,e.push(Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(b.b)(l.unit)||""}),Object(a.jsx)("td",{children:Object(b.b)(l.size)||0}),Object(a.jsx)("td",{children:Object(b.b)(l.cost)||0}),Object(a.jsx)("td",{children:Object(b.b)(l.sale)||0}),Object(a.jsx)("td",{children:Object(b.b)(l.salePrice)||0})]},r))}return e.push(Object(a.jsxs)("tr",{className:"trTotal",children:[Object(a.jsx)("td",{children:"Total"}),Object(a.jsx)("td",{children:Object(b.b)(c)}),Object(a.jsx)("td",{children:Object(b.b)(s)}),Object(a.jsx)("td",{children:Object(b.b)(j)}),Object(a.jsx)("td",{children:Object(b.b)(d)})]},t.length)),e}()})]})})}),x=c(675),O=(c(1585),function(e){return Object(a.jsx)("div",{className:"profitInfo",children:Object(a.jsxs)("table",{children:[Object(a.jsxs)("thead",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{colSpan:2}),Object(a.jsx)("th",{colSpan:8,className:"textCenter bgWhiteBlue",children:"Profit in $m. Sensitivity"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{colSpan:3}),Object(a.jsx)("th",{colSpan:7,className:"textCenter",children:"Con. Cost Per Sqf"})]})]}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",width:40,rowSpan:9,children:"Avg. Sale Price Per Sqf"}),Object(a.jsx)("td",{rowSpan:2,colSpan:2}),Object(a.jsx)("td",{className:"textBold",children:"85%"}),Object(a.jsx)("td",{className:"textBold",children:"90%"}),Object(a.jsx)("td",{className:"textBold",children:"95%"}),Object(a.jsx)("td",{className:"textBold",children:"100%"}),Object(a.jsx)("td",{className:"textBold",children:"105%"}),Object(a.jsx)("td",{className:"textBold",children:"110%"}),Object(a.jsx)("td",{className:"textBold",children:"115%"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold bgDark",children:"$230"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$243"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$257"}),Object(a.jsx)("td",{className:"textBold bgDark textRed",children:"$270"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$284"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$297"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$311"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"85%"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$680"}),Object(a.jsx)("td",{children:"$2.49"}),Object(a.jsx)("td",{children:"$2.36"}),Object(a.jsx)("td",{children:"$2.24"}),Object(a.jsx)("td",{children:"$2.11"}),Object(a.jsx)("td",{children:"$1.99"}),Object(a.jsx)("td",{children:"$1.86"}),Object(a.jsx)("td",{children:"$1.74"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"90%"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$720"}),Object(a.jsx)("td",{children:"$2.82"}),Object(a.jsx)("td",{children:"$2.70"}),Object(a.jsx)("td",{children:"$2.58"}),Object(a.jsx)("td",{children:"$2.45"}),Object(a.jsx)("td",{children:"$2.33"}),Object(a.jsx)("td",{children:"$2.20"}),Object(a.jsx)("td",{children:"$2.08"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"95%"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(a.jsx)("td",{children:"$2.82"}),Object(a.jsx)("td",{children:"$2.70"}),Object(a.jsx)("td",{children:"$2.58"}),Object(a.jsx)("td",{children:"$2.45"}),Object(a.jsx)("td",{children:"$2.33"}),Object(a.jsx)("td",{children:"$2.20"}),Object(a.jsx)("td",{children:"$2.08"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"100%"}),Object(a.jsx)("td",{className:"textBold bgDark textRed",children:"$760"}),Object(a.jsx)("td",{children:"$2.82"}),Object(a.jsx)("td",{children:"$2.70"}),Object(a.jsx)("td",{children:"$2.58"}),Object(a.jsx)("td",{children:"$2.45"}),Object(a.jsx)("td",{children:"$2.33"}),Object(a.jsx)("td",{children:"$2.20"}),Object(a.jsx)("td",{children:"$2.08"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"105%"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(a.jsx)("td",{children:"$2.82"}),Object(a.jsx)("td",{children:"$2.70"}),Object(a.jsx)("td",{children:"$2.58"}),Object(a.jsx)("td",{children:"$2.45"}),Object(a.jsx)("td",{children:"$2.33"}),Object(a.jsx)("td",{children:"$2.20"}),Object(a.jsx)("td",{children:"$2.08"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"110%"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(a.jsx)("td",{children:"$2.82"}),Object(a.jsx)("td",{children:"$2.70"}),Object(a.jsx)("td",{children:"$2.58"}),Object(a.jsx)("td",{children:"$2.45"}),Object(a.jsx)("td",{children:"$2.33"}),Object(a.jsx)("td",{children:"$2.20"}),Object(a.jsx)("td",{children:"$2.08"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"textBold",children:"115%"}),Object(a.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(a.jsx)("td",{children:"$2.82"}),Object(a.jsx)("td",{children:"$2.70"}),Object(a.jsx)("td",{children:"$2.58"}),Object(a.jsx)("td",{children:"$2.45"}),Object(a.jsx)("td",{children:"$2.33"}),Object(a.jsx)("td",{children:"$2.20"}),Object(a.jsx)("td",{children:"$2.08"})]})]})]})})}),h=function(e){var t=Object(j.i)().id,c=Object(d.b)(),b=Object(d.c)((function(e){return e.projects})),h=b.myProjectDetail,o=b.loading;return Object(s.useEffect)((function(){h||c(Object(r.f)(t))}),[c,t]),Object(a.jsx)("div",{className:"myProjectContent",children:o?Object(a.jsx)(x.a,{}):Object(a.jsx)(l.w,{children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)(l.wb,{children:[Object(a.jsx)(l.u,{lg:6,md:5,children:Object(a.jsx)("div",{className:"contentLeft",children:Object(a.jsx)("h1",{className:"title",children:h&&h.name||""})})}),Object(a.jsx)(l.u,{lg:6,md:7,children:Object(a.jsx)(i,{units:h&&h.units||[]})})]}),Object(a.jsxs)(l.wb,{className:"mt-40",children:[Object(a.jsx)(l.u,{lg:6,md:12,children:Object(a.jsx)(n,{data:h})}),Object(a.jsxs)(l.u,{lg:6,md:12,children:[Object(a.jsx)(O,{}),Object(a.jsx)(O,{}),Object(a.jsx)(O,{})]})]})]})})})};t.default=function(e){return Object(a.jsx)(h,{})}}}]);
//# sourceMappingURL=27.ee3cd3b4.chunk.js.map