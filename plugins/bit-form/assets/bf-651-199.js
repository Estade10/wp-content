var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var d=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,p=(s,e)=>{for(var t in e||(e={}))v.call(e,t)&&d(s,t,e[t]);if(m)for(var t of m(e))N.call(e,t)&&d(s,t,e[t]);return s};import{p as y,o as C,r as l,j as a,_ as c,d as _}from"./main-281.js";import{b as G}from"./bf-814-70.js";import{I as w}from"./bf-683-305.js";import{h as f,G as E,c as L}from"./bf-674-341.js";import"./bf-607-113.js";/* empty css          */import"./bf-977-119.js";import"./bf-44-116.js";function z({formFields:s,setIntegration:e,integrations:t,allIntegURL:g}){const u=y(),{id:o,formID:x}=C(),[i,n]=l.useState(p({},t[o])),[h,j]=l.useState(!1),I=()=>{if(!L(i)){_.error("Please map mandatory fields");return}G(t,e,g,i,u,o,1)};return a.jsxs("div",{style:{width:900},children:[a.jsxs("div",{className:"flx mt-3",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:c("Integration Name:")}),a.jsx("input",{className:"btcd-paper-inp w-5",onChange:r=>f(r,i,n),name:"name",value:i.name,type:"text",placeholder:c("Integration Name...")})]}),a.jsx("br",{}),a.jsx(E,{formID:x,formFields:s,handleInput:r=>f(r,i,n),getgistConf:i,setGetgistConf:n,isLoading:h,setIsLoading:j}),a.jsx(w,{edit:!0,saveConfig:I,disabled:i.field_map.length<1}),a.jsx("br",{})]})}export{z as default};
