(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(15),i=c.n(s),d=(c(20),c(3)),r=c(4),l=c.n(r),o=(c(14),c(39),c(0));function j(e){var t,c,s=Object(a.useState)([]),i=Object(d.a)(s,2),r=i[0],j=i[1],b=Object(a.useState)(!1),u=Object(d.a)(b,2),h=(u[0],u[1],n.a.useMemo((function(){return[{Header:"Date",accessor:"date"},{Header:"Latitude",accessor:"latitude"},{Header:"Longitude",accessor:"longitude"},{Header:"Voltage",accessor:"voltage"}]}),[]),"");return 0==(null===(t=e.name)||void 0===t?void 0:t.length)?Object(o.jsx)("div",{}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsxs)("select",{className:"form-control",onChange:function(e){h=e.target.value},defaultValue:"default",children:[Object(o.jsx)("option",{value:"default",disabled:!0,children:"--Select Device--"}),null===(c=e.name)||void 0===c?void 0:c.map((function(e,t){return Object(o.jsxs)("option",{value:e,children:["Device#",e]},t)}))]})}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){""!=h?l.a.post("https://gps.trak-4.com/api/v2/",{commandstring:"get_reports_single_device",token:"d1b95a4c22f546faa851a8961e0d20f9",identifier:h,datetime_start:"01/01/2020 00:00:00",datetime_end:"12/31/2020 00:00:00",coredataonly:!0}).then((function(e){var t=[];console.log(e.data),e.data.isError||e.data.data.forEach((function(e){t.push({Date:e.receivedDate,Latitude:e.latitude,Longitude:e.longitude,Voltage:e.voltage1})})),j(t)})):(alert("Please Select Device....!"),j([]))},children:"Load 2020 GPS Reports for"})})]}),Object(o.jsx)("hr",{}),0!=r.length?Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("table",{className:"table  table-striped",children:[Object(o.jsx)("thead",{className:"thead-dark",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Date"}),Object(o.jsx)("th",{children:"Latitude"}),Object(o.jsx)("th",{children:"Longitude"}),Object(o.jsx)("th",{children:"Voltage"})]})}),Object(o.jsx)("tbody",{children:null===r||void 0===r?void 0:r.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.Date}),Object(o.jsx)("td",{children:e.Latitude}),Object(o.jsx)("td",{children:e.Longitude}),Object(o.jsx)("td",{children:e.Voltage/1e3})]},t)}))})]})}):Object(o.jsx)("div",{})]})}var b=c.p+"static/media/loading.09569290.gif";var u=function(){var e=[],t=Object(a.useState)([]),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),u=r[0],h=r[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-sm-2",children:Object(o.jsx)("button",{className:"btn btn-primary ",onClick:function(){h(!0),l.a.post("https://gps.trak-4.com/api/v2/",{commandstring:"get_devices",token:"d1b95a4c22f546faa851a8961e0d20f9"}).then((function(t){t.data.data.forEach((function(t){e.push(t.deviceId)})),s(e),h(!1)}))},children:"Load Devices"})}),Object(o.jsx)("div",{className:"col-sm-10",children:u?Object(o.jsx)("img",{src:b,style:{marginLeft:"15%"},width:"100",height:"100"}):Object(o.jsx)(j,{name:n})})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()}},[[41,1,2]]]);
//# sourceMappingURL=main.22cb76a2.chunk.js.map