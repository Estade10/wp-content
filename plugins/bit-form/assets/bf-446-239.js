var S=Object.defineProperty;var N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(l,t,s)=>t in l?S(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,o=(l,t)=>{for(var s in t||(t={}))L.call(t,s)&&y(l,s,t[s]);if(N)for(var s of N(t))I.call(t,s)&&y(l,s,t[s]);return l};import{u as $,r as z,j as e,_ as a,C as b,$ as P}from"./main-281.js";import{t as A}from"./bf-185-296.js";import{T as U}from"./bf-874-123.js";import{A as _}from"./bf-80-373.js";import{N as B}from"./bf-988-374.js";import{b as D,r as F}from"./bf-63-321.js";/* empty css          */import"./bf-310-72.js";import"./bf-814-70.js";import"./bf-646-73.js";import"./bf-751-65.js";function k({formID:l,marketingHubConf:t,setMarketingHubConf:s,step:d,setstep:g,isLoading:w,setisLoading:h,setSnackbar:m,redirectLocation:R,isInfo:r}){const p=$(P),{siteURL:T}=p,[x,C]=z.useState(!1),[i,j]=z.useState({dataCenter:"",clientId:"",clientSecret:""}),E=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g(2),F(l,t,s,h,m)},c=n=>{const u=o({},t),v=o({},i);v[n.target.name]="",u[n.target.name]=n.target.value,j(v),s(u)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{title:A.zohoMarketingHub.title,youTubeLink:A.zohoMarketingHub.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:t.name,type:"text",placeholder:a("Integration Name..."),disabled:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Data Center:")})}),e.jsxs("select",{onChange:c,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:r,children:[e.jsx("option",{value:"",children:a("--Select a data center--")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:i.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Homepage URL:")})}),e.jsx(b,{value:T,className:"field-key-cpy w-6 ml-0",readOnly:r}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Authorized Redirect URIs:")})}),e.jsx(b,{value:R||`${p.zohoRedirectURL}`,className:"field-key-cpy w-6 ml-0",readOnly:r}),e.jsxs("small",{className:"d-blk mt-5",children:[a("To get Client ID and SECRET , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:a("Zoho API Console")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Client id:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientId",value:t.clientId,type:"text",placeholder:a("Client id..."),disabled:r}),e.jsx("div",{style:{color:"red"},children:i.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Client secret:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:a("Client secret..."),disabled:r}),e.jsx("div",{style:{color:"red"},children:i.clientSecret}),!r&&e.jsxs(e.Fragment,{children:[e.jsx(_,{isAuthorized:x,isLoading:w,handleAuthorize:()=>D(t,s,j,C,h,m)}),e.jsx("br",{}),e.jsx(B,{nextPageHandler:()=>E(),dixabled:!x})]})]})]})}export{k as default};
