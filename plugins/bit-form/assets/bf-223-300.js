import{o as c,e as p,h,a as g,j as i,_ as f,l as u,aM as x,a2 as y}from"./main-281.js";import{F as n}from"./bf-784-142.js";import{S as H}from"./bf-869-79.js";function F({cls:O}){const{fieldKey:s}=c(),[l,r]=p(y),e=h(l[s]),{css:a}=g(),m=t=>{e.config.maxHeight=t,t||delete e.config.maxHeight;const o=u(l,d=>{d[s]=e});r(o),x({event:`Options List Height '${String(t||"Off").replace("true","On")}': ${e.lbl||s}`,type:"height_changed",state:{fields:o,fldKey:s}})};return i.jsx(H,{id:"nmbr-stng",title:"Options List Height:",className:a(n.fieldSection),isPro:!0,proProperty:"listHeight",children:i.jsx("div",{className:a({mx:5}),children:i.jsxs("div",{className:a(n.fieldNumber,{py:"0px !important"}),children:[i.jsx("span",{children:f("Maximum:")}),i.jsx("input",{"data-testid":"nmbr-stng-min-inp",title:"Maximum height of Option List(Ex: 400)","aria-label":"Maximum height of Option List",placeholder:"Type Maximum Height...",className:a(n.input,n.w140),type:"number",value:e.config.maxHeight||"",onChange:t=>m(t.target.value)})]})})})}export{F as O};
