var E=Object.defineProperty;var v=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(s,t,r)=>t in s?E(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,d=(s,t)=>{for(var r in t||(t={}))S.call(t,r)&&N(s,r,t[r]);if(v)for(var r of v(t))L.call(t,r)&&N(s,r,t[r]);return s};import{u as I,r as y,j as e,_ as l,C as z,$}from"./main-281.js";import{t as A}from"./bf-185-296.js";import{T as P}from"./bf-874-123.js";import{A as U}from"./bf-80-373.js";import{N as _}from"./bf-988-374.js";import{b as B,r as D}from"./bf-13-311.js";/* empty css          */import"./bf-310-72.js";import"./bf-814-70.js";import"./bf-646-73.js";import"./bf-751-65.js";function X({formID:s,campaignsConf:t,setCampaignsConf:r,step:c,setstep:g,isLoading:w,setisLoading:m,setSnackbar:h,redirectLocation:k,isInfo:a}){const x=I($),{siteURL:C}=x,[u,R]=y.useState(!1),[i,p]=y.useState({dataCenter:"",clientId:"",clientSecret:""}),T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),g(2),D(s,t,r,m,h)},n=o=>{const j=d({},t),b=d({},i);b[o.target.name]="",j[o.target.name]=o.target.value,p(b),r(j)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:A.zohoCampaigns.title,youTubeLink:A.zohoCampaigns.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:c===1&&900,height:c===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"name",value:t.name,type:"text",placeholder:l("Integration Name..."),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Data Center:")})}),e.jsxs("select",{onChange:n,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:a,children:[e.jsx("option",{value:"",children:l("--Select a data center--")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:i.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Homepage URL:")})}),e.jsx(z,{value:C,className:"field-key-cpy w-6 ml-0",readOnly:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Authorized Redirect URIs:")})}),e.jsx(z,{value:k||`${x.zohoRedirectURL}`,className:"field-key-cpy w-6 ml-0",readOnly:a}),e.jsxs("small",{className:"d-blk mt-5",children:[l("To get Client ID and SECRET , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:l("Zoho API Console")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client id:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientId",value:t.clientId,type:"text",placeholder:l("Client id..."),disabled:a}),e.jsx("div",{style:{color:"red"},children:i.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:l("Client secret:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:l("Client secret..."),disabled:a}),e.jsx("div",{style:{color:"red"},children:i.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsx(U,{isAuthorized:u,isLoading:w,handleAuthorize:()=>B(t,r,p,R,m,h)}),e.jsx("br",{}),e.jsx(_,{nextPageHandler:()=>T(),disabled:!u})]})]})]})}export{X as default};