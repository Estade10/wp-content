import{p as j,o as I,r as o,j as t,S as v}from"./main-281.js";/* empty css          */import{S as w}from"./bf-874-123.js";import{b as Z}from"./bf-814-70.js";import{I as N}from"./bf-683-305.js";import{N as b}from"./bf-988-374.js";import k from"./bf-272-243.js";import{s as y,r as P}from"./bf-721-329.js";import{Z as E}from"./bf-848-330.js";import"./bf-310-72.js";import"./bf-185-296.js";import"./bf-646-73.js";import"./bf-751-65.js";import"./bf-80-373.js";import"./bf-607-113.js";import"./bf-850-76.js";import"./bf-226-108.js";import"./bf-977-119.js";function U({formFields:g,setIntegration:d,integrations:h,allIntegURL:S}){const l=j(),{formID:a}=I(),[m,r]=o.useState(!1),[s,p]=o.useState(1),[x,i]=o.useState({show:!1}),[e,n]=o.useState({name:"Zoho Sign API",type:"Zoho Sign",clientId:"",clientSecret:""});o.useEffect(()=>{window.opener&&y("zohoSign")},[]);const u=c=>{var f;c===2&&((f=e==null?void 0:e.default)!=null&&f.templates||P(a,e,n,r,i)),p(c)};return t.jsxs("div",{children:[t.jsx(v,{snack:x,setSnackbar:i}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(w,{step:3,active:s})}),t.jsx(k,{formID:a,signConf:e,setSignConf:n,step:s,setstep:p,isLoading:m,setisLoading:r,setSnackbar:i}),t.jsxs("div",{className:"btcd-stp-page",style:{width:s===2&&900,height:s===2&&"100%"},children:[t.jsx(E,{formID:a,formFields:g,signConf:e,setSignConf:n,isLoading:m,setisLoading:r,setSnackbar:i}),t.jsx(b,{nextPageHandler:()=>u(3),disabled:e.template===""})]}),t.jsx(N,{step:s,saveConfig:()=>Z(h,d,S,e,l)})]})}export{U as default};