var C=Object.defineProperty;var v=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(l,t,a)=>t in l?C(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,o=(l,t)=>{for(var a in t||(t={}))E.call(t,a)&&g(l,a,t[a]);if(v)for(var a of v(t))I.call(t,a)&&g(l,a,t[a]);return l};import{u as L,r as N,j as e,_ as r,C as y,$}from"./main-281.js";import{t as z}from"./bf-185-296.js";import{T as P}from"./bf-874-123.js";import{A as U}from"./bf-80-373.js";import{N as _}from"./bf-988-374.js";import{c as B,r as D}from"./bf-97-327.js";/* empty css          */import"./bf-310-72.js";import"./bf-814-70.js";import"./bf-646-73.js";import"./bf-751-65.js";function X({formID:l,sheetConf:t,setSheetConf:a,step:d,setstep:k,isLoading:A,setisLoading:m,setSnackbar:h,redirectLocation:w,isInfo:i}){const p=L($),{siteURL:R}=p,[x,S]=N.useState(!1),[s,u]=N.useState({dataCenter:"",clientId:"",clientSecret:""}),T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2),D(l,t,a,m,h)},n=c=>{const j=o({},t),b=o({},s);b[c.target.name]="",j[c.target.name]=c.target.value,u(b),a(j)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{title:z.zohoSheet.title,youTubeLink:z.zohoSheet.link}),e.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"100%"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Integration Name:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"name",value:t.name,type:"text",placeholder:r("Integration Name..."),disabled:i}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Data Center:")})}),e.jsxs("select",{onChange:n,name:"dataCenter",value:t.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:i,children:[e.jsx("option",{value:"",children:r("--Select a data center--")}),e.jsx("option",{value:"com",children:"zoho.com"}),e.jsx("option",{value:"eu",children:"zoho.eu"}),e.jsx("option",{value:"com.cn",children:"zoho.com.cn"}),e.jsx("option",{value:"in",children:"zoho.in"}),e.jsx("option",{value:"com.au",children:"zoho.com.au"})]}),e.jsx("div",{style:{color:"red"},children:s.dataCenter}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Homepage URL:")})}),e.jsx(y,{value:R,className:"field-key-cpy w-6 ml-0",readOnly:i}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Authorized Redirect URIs:")})}),e.jsx(y,{value:w||`${p.zohoRedirectURL}`,className:"field-key-cpy w-6 ml-0",readOnly:i}),e.jsxs("small",{className:"d-blk mt-5",children:[r("To get Client ID and SECRET , Please Visit")," ",e.jsx("a",{className:"btcd-link",href:`https://api-console.zoho.${(t==null?void 0:t.dataCenter)||"com"}/`,target:"_blank",rel:"noreferrer",children:r("Zoho API Console")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Client id:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientId",value:t.clientId,type:"text",placeholder:r("Client id..."),disabled:i}),e.jsx("div",{style:{color:"red"},children:s.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Client secret:")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:r("Client secret..."),disabled:i}),e.jsx("div",{style:{color:"red"},children:s.clientSecret}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(U,{isAuthorized:x,isloading:A,handleAuthorize:()=>B(t,a,u,S,m,h)}),e.jsx("br",{}),e.jsx(_,{nextPageHandler:()=>T(),disabled:!x})]})]})]})}export{X as default};
