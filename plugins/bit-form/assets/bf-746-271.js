var y=Object.defineProperty;var d=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(a,s,t)=>s in a?y(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,u=(a,s)=>{for(var t in s||(s={}))N.call(s,t)&&f(a,t,s[t]);if(d)for(var t of d(s))b.call(s,t)&&f(a,t,s[t]);return a};import{p as I,r as o,a as F,j as e,S as _,B as w,q as C,_ as q,d as L}from"./main-281.js";/* empty css          */import{B}from"./bf-751-65.js";import{S as M}from"./bf-874-123.js";import{b as P}from"./bf-814-70.js";import{I as R}from"./bf-683-305.js";import T from"./bf-398-229.js";import{h as z,c as A}from"./bf-894-342.js";import{E as D}from"./bf-920-343.js";import"./bf-646-73.js";import"./bf-310-72.js";import"./bf-185-296.js";import"./bf-80-373.js";import"./bf-988-374.js";import"./bf-607-113.js";import"./bf-44-116.js";import"./bf-977-119.js";function rs({formFields:a,setIntegration:s,integrations:t,allIntegURL:E}){const h=I(),[c,n]=o.useState(!1),[r,p]=o.useState(1),[x,g]=o.useState({show:!1}),{css:j}=F(),v=[{key:"Email",label:"Email",required:!0},{key:"FirstName",label:"FirstName",required:!1},{key:"LastName",label:"LastName",required:!1}],[i,l]=o.useState({name:"ElasticEmail",type:"ElasticEmail",api_key:"",field_map:[{formField:"",elasticEmailField:""}],actions:{},elasticEmailFields:v}),S=()=>{P(t,s,E,i,h)},k=m=>{if(!A(i)){L.error("Please map mandatory fields");return}i.field_map.length>0&&p(m)};return document.querySelector(".btcd-s-wrp").scrollTop=0,e.jsxs("div",{children:[e.jsx(_,{snack:x,setSnackbar:g}),e.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:e.jsx(M,{step:3,active:r})}),e.jsx(T,{elasticEmailConf:i,setElasticEmailConf:l,step:r,setstep:p,isLoading:c,setIsLoading:n}),e.jsxs("div",{className:"btcd-stp-page",style:u({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[e.jsx(D,{formFields:a,handleInput:m=>z(m,i,l),elasticEmailConf:i,setElasticEmailConf:l,isLoading:c,setIsLoading:n}),e.jsxs(w,{variant:"success",onClick:()=>k(3),className:j(C.ftRight),children:[q("Next"),e.jsx(B,{className:"ml-1 rev-icn"})]})]}),e.jsx(R,{step:r,saveConfig:()=>S()})]})}export{rs as default};
