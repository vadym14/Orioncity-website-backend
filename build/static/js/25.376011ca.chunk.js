(this["webpackJsonpcoreui-pro-custom"]=this["webpackJsonpcoreui-pro-custom"]||[]).push([[25],{1515:function(e,t,c){},1516:function(e,t,c){},1517:function(e,t,c){},1518:function(e,t,c){},1519:function(e,t,c){},677:function(e,t,c){"use strict";c(1),c(678);var s=c(663),j=c(16);t.a=function(e){return Object(j.jsx)("div",{className:"loadingContainer",children:Object(j.jsx)(s.Hb,{color:"primary",style:{width:"4rem",height:"4rem"}})})}},678:function(e,t,c){},892:function(e,t,c){"use strict";c.r(t);var s=c(1),j=(c(1515),c(1516),c(23)),d=c(169),r=c(176),l=c(663),a=(c(1517),function(e){e=e.toString();for(var t=/(-?\d+)(\d{3})/;t.test(e);)e=e.replace(t,"$1,$2");return e}),n=c(16),b=function(e){var t=e.data;return Object(n.jsx)("div",{className:"basicInfo",children:Object(n.jsx)("table",{children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"Area"}),Object(n.jsx)("td",{className:"textBold bgGrey",children:t&&t.area||""}),Object(n.jsx)("td",{})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"Street"}),Object(n.jsx)("td",{className:"textBold bgGrey",children:t&&t.street||""}),Object(n.jsx)("td",{})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Cash Req For Lot Purchase"}),Object(n.jsxs)("td",{className:"bgGrey",children:["$",t&&a(t.cashReqForLotPurchase)||0]}),Object(n.jsx)("td",{className:"bgGrey"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Loan For Lot Purchase"}),Object(n.jsxs)("td",{className:"bgGrey",children:["$",t&&a(t.loanForLotPurchase)||0]}),Object(n.jsx)("td",{className:"bgGrey"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total Lot/s Purchase Price"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&a(t.loanForLotPurchase+t.cashReqForLotPurchase)||0]})]}),Object(n.jsxs)("tr",{className:"m-10",children:[Object(n.jsx)("td",{children:"Total Building cost"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&a(t.totalBildingCost)||0]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Lot Purchase Loan Fin Cost"}),Object(n.jsxs)("td",{className:"bgGrey",children:["$",t&&a(t.lotPurchaseLoanFinCost)||0]}),Object(n.jsx)("td",{className:"bgGrey"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Construction Fin Cost"}),Object(n.jsxs)("td",{className:"bgGrey",children:["$",t&&a(t.constructionFinCost)||0]}),Object(n.jsx)("td",{className:"bgGrey"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Total Fin cost"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&a(t.constructionFinCost+t.lotPurchaseLoanFinCost)||0]})]}),Object(n.jsxs)("tr",{className:"m-10",children:[Object(n.jsx)("td",{children:"Soft cost"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&a(t.softCost)||0]})]}),Object(n.jsxs)("tr",{className:"m-10",children:[Object(n.jsx)("td",{className:"textBold",children:"Total cost"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&a(t.loanForLotPurchase+t.cashReqForLotPurchase+t.totalBildingCost+t.constructionFinCost+t.lotPurchaseLoanFinCost+t.softCost)||0]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"Additional required Equity"}),Object(n.jsxs)("td",{className:"bgGrey",children:["$",t&&a(t.additionalRequiredEquity)||0]}),Object(n.jsx)("td",{className:"bgGrey textRed"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"Total Cash Req For Project"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&a(t.totalCashReqForProject)||0]}),Object(n.jsx)("td",{className:"bgGrey"})]}),Object(n.jsxs)("tr",{className:"m-10",children:[Object(n.jsx)("td",{className:"textBold",children:"Avg sale Price per sqf"}),Object(n.jsxs)("td",{className:"bgGrey textBold",children:["$",t&&a(t.avgSalePricePerSqf)||0]}),Object(n.jsx)("td",{className:"bgGrey"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"",children:"Total expected Income"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&a(t.totalExpectedIncome)||0]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{className:"",children:["Sales Commission (",t&&a(t.salesCommissionPercent)||0,"%)"]}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey ",children:["$",t&&t.salesCommissionPercent?a((t.totalExpectedIncome*t.salesCommissionPercent/100).toFixed(0)):0]})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"",children:"Net Revenue"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&a((t.totalExpectedIncome-t.totalExpectedIncome*t.salesCommissionPercent/100).toFixed(0))]})]}),Object(n.jsxs)("tr",{className:"mt-10",children:[Object(n.jsx)("td",{className:"",children:"Profit per Project"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&a(t.profitPerProject)||0]})]}),Object(n.jsxs)("tr",{className:"mb-10",children:[Object(n.jsx)("td",{className:"",children:"Profit per Project %"}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey",children:[t&&t.profitPerProjectPercent||0,"%"]})]}),Object(n.jsxs)("tr",{className:"mt-10",children:[Object(n.jsxs)("td",{className:"",children:["Constructor Share"," ",Object(n.jsxs)("span",{className:"percent",children:[t&&t.constructorSharePercent||0,"%"]})]}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:["$",t&&a((t.profitPerProject*t.constructorSharePercent).toFixed(0))||0]})]}),Object(n.jsxs)("tr",{className:"mb-10",children:[Object(n.jsxs)("td",{className:"",children:["Developer Share"," ",Object(n.jsxs)("span",{className:"percent",children:[t&&t.developerSharePercent||0,"%"]})]}),Object(n.jsx)("td",{className:"bgGrey"}),Object(n.jsxs)("td",{className:"bgGrey textRed",children:[t&&a((t.profitPerProject*t.developerSharePercent).toFixed(0))||0,"%"]})]}),Object(n.jsxs)("tr",{className:"mt-10",children:[Object(n.jsx)("td",{className:"",children:"Total Cash on Cash"}),Object(n.jsxs)("td",{className:"bgGrey",children:[t&&t.totalCashOnCash,"%"]}),Object(n.jsx)("td",{className:"bgGrey textRed"})]}),Object(n.jsxs)("tr",{className:"",children:[Object(n.jsx)("td",{className:"",children:"Net Cash on Cash (Investors Share)"}),Object(n.jsxs)("td",{className:"bgGrey tdBadget",children:[t&&t.netCashOnCash,"%"]}),Object(n.jsx)("td",{className:"bgGrey textRed"})]}),Object(n.jsxs)("tr",{className:"",children:[Object(n.jsx)("td",{className:"",children:"Project Period (Month)"}),Object(n.jsxs)("td",{className:"bgGrey",children:[t&&t.projectPeriodMonth||0,"%"]}),Object(n.jsx)("td",{className:"bgGrey textRed"})]}),Object(n.jsxs)("tr",{className:"",children:[Object(n.jsx)("td",{className:"",children:"Anual Return"}),Object(n.jsxs)("td",{className:"bgGrey tdBadget",children:[t&&t.annualReturn||0,"%"]}),Object(n.jsx)("td",{className:"bgGrey textRed"})]})]})})})},i=(c(1518),function(e){var t=e.units;return Object(n.jsx)("div",{className:"units",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"#Units"}),Object(n.jsx)("th",{children:"Size (sqf)"}),Object(n.jsx)("th",{children:"Cost $"}),Object(n.jsx)("th",{children:"Sales $"}),Object(n.jsx)("th",{children:"Sale Price"})]})}),Object(n.jsx)("tbody",{children:function(){for(var e=[],c=0,s=0,j=0,d=0,r=0;r<t.length;r++){var l=t[r];c+=l.size,s+=l.cost,j+=l.sale,d+=l.salePrice,e.push(Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:a(l.unit)||""}),Object(n.jsx)("td",{children:a(l.size)||0}),Object(n.jsx)("td",{children:a(l.cost)||0}),Object(n.jsx)("td",{children:a(l.sale)||0}),Object(n.jsx)("td",{children:a(l.salePrice)||0})]},r))}return e.push(Object(n.jsxs)("tr",{className:"trTotal",children:[Object(n.jsx)("td",{children:"Total"}),Object(n.jsx)("td",{children:a(c)}),Object(n.jsx)("td",{children:a(s)}),Object(n.jsx)("td",{children:a(j)}),Object(n.jsx)("td",{children:a(d)})]},t.length)),e}()})]})})}),x=c(677),h=(c(1519),function(e){return Object(n.jsx)("div",{className:"profitInfo",children:Object(n.jsxs)("table",{children:[Object(n.jsxs)("thead",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{colSpan:2}),Object(n.jsx)("th",{colSpan:8,className:"textCenter bgWhiteBlue",children:"Profit in $m. Sensitivity"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{colSpan:3}),Object(n.jsx)("th",{colSpan:7,className:"textCenter",children:"Con. Cost Per Sqf"})]})]}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",width:40,rowSpan:9,children:"Avg. Sale Price Per Sqf"}),Object(n.jsx)("td",{rowSpan:2,colSpan:2}),Object(n.jsx)("td",{className:"textBold",children:"85%"}),Object(n.jsx)("td",{className:"textBold",children:"90%"}),Object(n.jsx)("td",{className:"textBold",children:"95%"}),Object(n.jsx)("td",{className:"textBold",children:"100%"}),Object(n.jsx)("td",{className:"textBold",children:"105%"}),Object(n.jsx)("td",{className:"textBold",children:"110%"}),Object(n.jsx)("td",{className:"textBold",children:"115%"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold bgDark",children:"$230"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$243"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$257"}),Object(n.jsx)("td",{className:"textBold bgDark textRed",children:"$270"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$284"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$297"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$311"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"85%"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$680"}),Object(n.jsx)("td",{children:"$2.49"}),Object(n.jsx)("td",{children:"$2.36"}),Object(n.jsx)("td",{children:"$2.24"}),Object(n.jsx)("td",{children:"$2.11"}),Object(n.jsx)("td",{children:"$1.99"}),Object(n.jsx)("td",{children:"$1.86"}),Object(n.jsx)("td",{children:"$1.74"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"90%"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$720"}),Object(n.jsx)("td",{children:"$2.82"}),Object(n.jsx)("td",{children:"$2.70"}),Object(n.jsx)("td",{children:"$2.58"}),Object(n.jsx)("td",{children:"$2.45"}),Object(n.jsx)("td",{children:"$2.33"}),Object(n.jsx)("td",{children:"$2.20"}),Object(n.jsx)("td",{children:"$2.08"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"95%"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(n.jsx)("td",{children:"$2.82"}),Object(n.jsx)("td",{children:"$2.70"}),Object(n.jsx)("td",{children:"$2.58"}),Object(n.jsx)("td",{children:"$2.45"}),Object(n.jsx)("td",{children:"$2.33"}),Object(n.jsx)("td",{children:"$2.20"}),Object(n.jsx)("td",{children:"$2.08"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"100%"}),Object(n.jsx)("td",{className:"textBold bgDark textRed",children:"$760"}),Object(n.jsx)("td",{children:"$2.82"}),Object(n.jsx)("td",{children:"$2.70"}),Object(n.jsx)("td",{children:"$2.58"}),Object(n.jsx)("td",{children:"$2.45"}),Object(n.jsx)("td",{children:"$2.33"}),Object(n.jsx)("td",{children:"$2.20"}),Object(n.jsx)("td",{children:"$2.08"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"105%"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(n.jsx)("td",{children:"$2.82"}),Object(n.jsx)("td",{children:"$2.70"}),Object(n.jsx)("td",{children:"$2.58"}),Object(n.jsx)("td",{children:"$2.45"}),Object(n.jsx)("td",{children:"$2.33"}),Object(n.jsx)("td",{children:"$2.20"}),Object(n.jsx)("td",{children:"$2.08"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"110%"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(n.jsx)("td",{children:"$2.82"}),Object(n.jsx)("td",{children:"$2.70"}),Object(n.jsx)("td",{children:"$2.58"}),Object(n.jsx)("td",{children:"$2.45"}),Object(n.jsx)("td",{children:"$2.33"}),Object(n.jsx)("td",{children:"$2.20"}),Object(n.jsx)("td",{children:"$2.08"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"textBold",children:"115%"}),Object(n.jsx)("td",{className:"textBold bgDark",children:"$760"}),Object(n.jsx)("td",{children:"$2.82"}),Object(n.jsx)("td",{children:"$2.70"}),Object(n.jsx)("td",{children:"$2.58"}),Object(n.jsx)("td",{children:"$2.45"}),Object(n.jsx)("td",{children:"$2.33"}),Object(n.jsx)("td",{children:"$2.20"}),Object(n.jsx)("td",{children:"$2.08"})]})]})]})})}),O=function(e){var t=Object(j.i)().id,c=Object(d.b)(),a=Object(d.c)((function(e){return e.projects})),O=a.myProjectDetail,o=a.loading;return Object(s.useEffect)((function(){O||c(Object(r.b)(t))}),[c,t]),Object(n.jsx)("div",{className:"myProjectContent",children:o?Object(n.jsx)(x.a,{}):Object(n.jsx)(l.w,{children:Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)(l.wb,{children:[Object(n.jsx)(l.u,{lg:6,md:5,children:Object(n.jsx)("div",{className:"contentLeft",children:Object(n.jsx)("h1",{className:"title",children:O&&O.name||""})})}),Object(n.jsx)(l.u,{lg:6,md:7,children:Object(n.jsx)(i,{units:O&&O.units||[]})})]}),Object(n.jsxs)(l.wb,{className:"mt-40",children:[Object(n.jsx)(l.u,{lg:6,md:12,children:Object(n.jsx)(b,{data:O})}),Object(n.jsxs)(l.u,{lg:6,md:12,children:[Object(n.jsx)(h,{}),Object(n.jsx)(h,{}),Object(n.jsx)(h,{})]})]})]})})})};t.default=function(e){return Object(n.jsx)(O,{})}}}]);
//# sourceMappingURL=25.376011ca.chunk.js.map