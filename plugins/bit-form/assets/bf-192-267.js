import{p as I,o as S,r as a,a as j,j as t,S as C}from"./main-281.js";/* empty css          */import{S as w}from"./bf-874-123.js";import{I as M}from"./bf-683-305.js";import{s as v}from"./bf-432-335.js";import{N as k}from"./bf-988-374.js";import N from"./bf-943-227.js";import{s as P,h as y,c as F,d as b}from"./bf-997-336.js";import{M as E}from"./bf-143-337.js";import"./bf-310-72.js";import"./bf-814-70.js";import"./bf-185-296.js";import"./bf-646-73.js";import"./bf-751-65.js";import"./bf-80-373.js";import"./bf-607-113.js";import"./bf-977-119.js";import"./bf-44-116.js";function W({formFields:l,setIntegration:c,integrations:f,allIntegURL:h}){const u=I(),{formID:r}=S(),[p,n]=a.useState(!1),[i,d]=a.useState(1),[g,s]=a.useState({show:!1});j();const[e,m]=a.useState({name:"Mail Chimp API",type:"Mail Chimp",clientId:"",clientSecret:"",listId:"",listName:"",tags:"",field_map:[{formField:"",mailChimpField:""}],address_field:[],actions:{}});a.useEffect(()=>{window.opener&&P("mailChimp")},[]);const x=()=>{var o;if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),(o=e.actions)!=null&&o.address&&!F(e)){s({show:!0,msg:"Please map address required fields to continue."});return}if(!b(e)){s({show:!0,msg:"Please map fields to continue."});return}e.listId!==""&&d(3)};return t.jsxs("div",{children:[t.jsx(C,{snack:g,setSnackbar:s}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(w,{step:3,active:i})}),t.jsx(N,{formID:r,sheetConf:e,setSheetConf:m,step:i,setstep:d,isLoading:p,setisLoading:n,setSnackbar:s}),t.jsxs("div",{className:"btcd-stp-page",style:{width:i===2&&900,height:i===2&&"100%"},children:[t.jsx(E,{formID:r,formFields:l,handleInput:o=>y(o,e,m,r,n,s),sheetConf:e,setSheetConf:m,isLoading:p,setisLoading:n,setSnackbar:s}),t.jsx(k,{nextPageHandler:()=>x(),disabled:!e.listId||e.field_map.length<1})]}),t.jsx(M,{step:i,saveConfig:()=>v(f,c,h,e,u)})]})}export{W as default};
