var z=Object.defineProperty;var w=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var v=(a,s,e)=>s in a?z(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,S=(a,s)=>{for(var e in s||(s={}))C.call(s,e)&&v(a,e,s[e]);if(w)for(var e of w(s))F.call(s,e)&&v(a,e,s[e]);return a};import{r as n,j as t,_ as x,aD as L,c as P,p as _,o as B,a as E,S as M,B as T,q as $}from"./main-281.js";/* empty css          */import{B as q}from"./bf-751-65.js";import{T as D,S as H}from"./bf-874-123.js";import{b as R}from"./bf-814-70.js";import{I as G}from"./bf-683-305.js";import{t as k}from"./bf-185-296.js";import{A as J}from"./bf-80-373.js";import{N as K}from"./bf-988-374.js";import{A as O,g as Q,c as U}from"./bf-985-359.js";import"./bf-646-73.js";import"./bf-310-72.js";import"./bf-607-113.js";import"./bf-977-119.js";import"./bf-44-116.js";function V({autonamiConf:a,setAutonamiConf:s,step:e,nextPage:j,setSnackbar:A,isInfo:p}){const[l,b]=n.useState(!1),[u,o]=n.useState(!1),[d,f]=n.useState(!1),[r,i]=n.useState(!0),[h,g]=n.useState({integrationName:""});n.useEffect(()=>()=>{i(!1)},[]);const c=()=>{f("auth"),P({},"bitforms_autonami_authorize").then(m=>{r&&(m!=null&&m.success&&(b(!0),A({show:!0,msg:x("Connect Successfully")})),o(!0),f(!1))})},y=m=>{const I=S({},a),N=S({},h);N[m.target.name]="",I[m.target.name]=m.target.value,g(N),s(I)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"100%"},children:[t.jsx(D,{title:k.autonami.title,youTubeLink:k.autonami.link}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:x("Integration Name:")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:y,name:"name",value:a.name,type:"text",placeholder:x("Integration Name..."),disabled:p}),u&&!l&&!d&&t.jsxs("div",{className:"flx mt-4",style:{color:"red"},children:[t.jsx(L,{size:"30"}),"Please! First Install or Active Autonami Pro Plugin"]}),t.jsx("br",{}),t.jsx(J,{isAuthorized:l,isLoading:d,handleAuthorize:()=>c()}),t.jsx("br",{}),t.jsx(K,{nextPageHandler:()=>j(2),disabled:!l})]})})}function dt({formFields:a,setIntegration:s,integrations:e,allIntegURL:j}){const A=_(),{formID:p}=B(),{css:l}=E(),[b,u]=n.useState(!1),[o,d]=n.useState(1),[f,r]=n.useState({show:!1}),[i,h]=n.useState({name:"Autonami API",type:"Autonami",field_map:[{formField:"",autonamiField:""}],actions:{}}),g=c=>{if(c===2&&i.name!=="")Q(i,h,u,r),d(c);else if(c===3){if(!U(i)){r({show:!0,msg:"Please map all required fields to continue."});return}i.field_map.length>0&&d(c)}document.getElementById("btcd-settings-wrp").scrollTop=0};return t.jsxs("div",{children:[t.jsx(M,{snack:f,setSnackbar:r}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(H,{step:3,active:o})}),t.jsx(V,{formID:p,autonamiConf:i,setAutonamiConf:h,step:o,nextPage:g,isLoading:b,setIsLoading:u,setSnackbar:r}),t.jsxs("div",{className:"btcd-stp-page",style:{width:o===2&&900,height:o===2&&"100%",minHeight:o===2&&"200px"},children:[t.jsx(O,{formID:p,formFields:a,autonamiConf:i,setAutonamiConf:h,setIsLoading:u,setSnackbar:r}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs(T,{onClick:()=>g(3),disabled:i.field_map.length<1,className:l($.ftRight),children:[x("Next"),t.jsx(q,{className:"ml-1 rev-icn"})]})]}),t.jsx(G,{step:o,saveConfig:()=>R(e,s,j,i,A)})]})}export{dt as default};
