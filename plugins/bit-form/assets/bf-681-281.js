import{p as d,o as x,r as s,j as o,S as f}from"./main-281.js";/* empty css          */import{t as i}from"./bf-185-296.js";import{S as k,T as j,W as b}from"./bf-874-123.js";import{b as S}from"./bf-814-70.js";import g from"./bf-844-181.js";import"./bf-310-72.js";import"./bf-646-73.js";import"./bf-607-113.js";import"./bf-751-65.js";import"./bf-687-112.js";function E({formFields:r,setIntegration:l,integrations:p,allIntegURL:m}){const n=d(),{formID:c}=x(),[t,h]=s.useState(1),[u,e]=s.useState({show:!1}),[a,w]=s.useState({name:"Zoho Flow Web Hooks",type:"Zoho Flow",method:"POST",url:"",apiConsole:"https://flow.zoho.com/#/workspace/default/flows/create"});return o.jsxs("div",{children:[o.jsx(f,{snack:u,setSnackbar:e}),o.jsx("div",{className:"txt-center w-9 mt-2 cal-width",children:o.jsx(k,{step:2,active:t})}),o.jsx(j,{title:i.zohoFlow.title,youTubeLink:i.zohoFlow.link}),o.jsx("div",{className:"btcd-stp-page",style:{width:t===1&&900,height:t===1&&"100%"},children:o.jsx(g,{formID:c,formFields:r,webHooks:a,setWebHooks:w,step:t,setstep:h,setSnackbar:e,create:!0})}),o.jsx("div",{className:"btcd-stp-page",style:{width:t===2&&900,minHeight:t===2&&"900px"},children:o.jsx(b,{step:t,saveConfig:()=>S(p,l,m,a,n)})})]})}export{E as default};