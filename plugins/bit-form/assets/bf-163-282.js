import{r as s,az as x,p as h,o as y,j as t,S as k}from"./main-281.js";/* empty css          */import{t as i}from"./bf-185-296.js";import{S as j,T as b,W as f}from"./bf-874-123.js";import{b as v}from"./bf-814-70.js";import"./bf-310-72.js";import"./bf-646-73.js";const S=s.lazy(()=>x(()=>import("./bf-844-181.js"),["./bf-844-181.js","./main-281.js","./main-281.css","./bf-607-113.js","./bf-751-65.js","./bf-646-73.js","./bf-885-388.css","./bf-252-387.css","./bf-687-112.js","./bf-495-393.css"],import.meta.url));function L({formFields:r,setIntegration:n,integrations:l,allIntegURL:p}){const c=h(),{formID:m}=y(),[e,g]=s.useState(1),[d,a]=s.useState({show:!1}),[o,u]=s.useState({name:"Integrately WebHooks",type:"Integrately",method:"POST",url:"",apiConsole:"https://app.integrately.com/"});return t.jsxs("div",{children:[t.jsx(k,{snack:d,setSnackbar:a}),t.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:t.jsx(j,{step:2,active:e})}),t.jsx(b,{title:i.integrately.title,youTubeLink:i.integrately.link}),t.jsx("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"100%"},children:t.jsx(S,{formID:m,formFields:r,webHooks:o,setWebHooks:u,step:e,setstep:g,setSnackbar:a,create:!0})}),t.jsx("div",{className:"btcd-stp-page",style:{width:e===2&&900,minHeight:e===2&&"900px"},children:t.jsx(f,{step:e,saveConfig:()=>v(l,n,p,o,c)})})]})}export{L as default};