var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var h=(a,t,e)=>t in a?b(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,u=(a,t)=>{for(var e in t||(t={}))v.call(t,e)&&h(a,e,t[e]);if(f)for(var e of f(t))N.call(t,e)&&h(a,e,t[e]);return a};import{o as w,p as y,r as m,j as o,S as k,_ as p}from"./main-281.js";import{b as _}from"./bf-814-70.js";import{I as E}from"./bf-683-305.js";import{h as g,c as L}from"./bf-194-313.js";import{Z}from"./bf-453-314.js";import"./bf-845-71.js";import"./bf-976-308.js";import"./bf-977-119.js";import"./bf-44-116.js";function G({formFields:a,setIntegration:t,integrations:e,allIntegURL:x}){const{id:d,formID:c}=w(),I=y(),[s,n]=m.useState(u({},e[d])),[j,l]=m.useState(!1),[C,r]=m.useState({show:!1}),S=()=>{if(!L(s)){r({show:!0,msg:p("Please map mandatory fields")});return}_(e,t,x,s,I,d,1)};return o.jsxs("div",{style:{width:900},children:[o.jsx(k,{snack:C,setSnackbar:r}),o.jsxs("div",{className:"flx mt-3",children:[o.jsx("b",{className:"wdt-100 d-in-b",children:p("Integration Name:")}),o.jsx("input",{className:"btcd-paper-inp w-7",onChange:i=>g(i,s,n),name:"name",value:s.name,type:"text",placeholder:p("Integration Name...")})]}),o.jsx(Z,{formID:c,formFields:a,handleInput:i=>g(i,s,n,c,l,r),creatorConf:s,setCreatorConf:n,isLoading:j,setisLoading:l,setSnackbar:r}),o.jsx(E,{edit:!0,saveConfig:S,disabled:!s.applicationId||!s.formId||s.field_map.length<1})]})}export{G as default};