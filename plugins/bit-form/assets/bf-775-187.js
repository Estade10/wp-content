var w=Object.defineProperty;var u=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var f=(a,s,e)=>s in a?w(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,h=(a,s)=>{for(var e in s||(s={}))S.call(s,e)&&f(a,e,s[e]);if(u)for(var e of u(s))v.call(s,e)&&f(a,e,s[e]);return a};import{o as N,p as y,r as c,j as n,S as C,_ as i}from"./main-281.js";import{b as _}from"./bf-814-70.js";import{I as D}from"./bf-683-305.js";import{h as x,c as E}from"./bf-560-317.js";import{Z as L}from"./bf-857-318.js";import"./bf-607-113.js";import"./bf-977-119.js";import"./bf-44-116.js";function B({formFields:a,setIntegration:s,integrations:e,allIntegURL:g}){const{id:d,formID:p}=N(),j=y(),[t,m]=c.useState(h({},e[d])),[b,l]=c.useState(!1),[k,r]=c.useState({show:!1}),I=()=>{var o;if(!E(t)){r({show:!0,msg:i("Please map mandatory fields")});return}if(!((o=t.actions)!=null&&o.ticket_owner)){r({show:!0,msg:i("Please select a ticket owner")});return}_(e,s,g,t,j,d,1)};return n.jsxs("div",{style:{width:900},children:[n.jsx(C,{snack:k,setSnackbar:r}),n.jsxs("div",{className:"flx mt-3",children:[n.jsx("b",{className:"wdt-100 d-in-b",children:i("Integration Name:")}),n.jsx("input",{className:"btcd-paper-inp w-7",onChange:o=>x(o,t,m),name:"name",value:t.name,type:"text",placeholder:i("Integration Name...")})]}),n.jsx("br",{}),n.jsx("br",{}),n.jsx(L,{formID:p,formFields:a,handleInput:o=>x(o,t,m,p,l,r),deskConf:t,setDeskConf:m,isLoading:b,setisLoading:l,setSnackbar:r}),n.jsx(D,{edit:!0,saveConfig:I,disabled:t.department===""||t.table===""||t.field_map.length<1})]})}export{B as default};
