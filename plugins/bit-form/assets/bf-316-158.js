import{a as C,o as M,e as T,h as H,r as L,P as B,j as e,_ as c,q as n,M as P,a2 as z,ai as K,l as p,aM as x,au as U,y as $}from"./main-281.js";import{F as g,A as y}from"./bf-784-142.js";import{T as k}from"./bf-646-73.js";import{F as D,A as E,b as R}from"./bf-997-88.js";import{a as h,I as W}from"./bf-558-170.js";import{S as N}from"./bf-869-79.js";/* empty css          */import"./bf-675-103.js";import"./bf-900-104.js";import"./bf-231-105.js";import"./bf-192-171.js";import"./bf-226-108.js";import"./bf-977-119.js";import"./bf-99-141.js";import"./bf-751-65.js";import"./bf-23-74.js";import"./bf-811-102.js";import"./bf-406-106.js";import"./bf-112-111.js";import"./bf-724-110.js";import"./bf-521-107.js";import"./bf-890-67.js";function he(){var j;const{css:a}=C(),{fieldKey:s}=M(),[m,u]=T(z),t=H(m[s]),[F,b]=L.useState(!1),I=t.alt||"",S=B(K),w=r=>{const{value:l}=r.target;l===""?delete t.alt:t.alt=l.replace(/\\\\/g,"$_bf_$");const i=p(m,o=>{o[s]=t});u(i),x({event:`Field alt Change ${t.alt||s}`,type:"field_alt_change",state:{fields:i,fldKey:s}})},A=r=>{const{value:l}=r.target;l===""?delete t.bg_img:t.bg_img=l.replace(/\\\\/g,"$_bf_$");const i=p(m,o=>{o[s]=t});u(i),x({event:`Field Image Change ${t.bg_img||s}`,type:"field_img_change",state:{fields:i,fldKey:s}})},f=r=>{const{name:l,value:i}=r.target;t[l]=Number(i);const o=p(m,d=>{d[s]=t});u(o);const v=d=>`fields->${s}->classes->.${s}-fld-wrp->${d}`;x({event:`Field ${l} Change ${t.lbl||s}`,type:`field_${l}_change`,state:{fields:o,fldKey:s}}),U(),S(d=>p(d,_=>{$(_,v(l),`${Number(i)}px`),l==="height"&&$(_,v("max-height"),`${Number(i)}px`)}))};return e.jsxs("div",{children:[e.jsx(D,{title:"Field Settings",subtitle:t.typ,fieldKey:s}),e.jsx(E,{}),e.jsx(h,{}),e.jsx(R,{}),e.jsx(h,{}),e.jsxs(N,{id:"nam-stng",title:c("Background Image"),className:a(g.fieldSection),children:[e.jsx("div",{className:a(n.flxc,{jc:"end"}),children:e.jsx(k,{msg:"Change",children:e.jsx("button",{"data-testid":"img-edt-btn",type:"button",onClick:()=>b(!0),className:a(q.browseBtn),children:"Browse"})})}),e.jsx("div",{className:a({w:"97%",mx:5}),children:e.jsx(y,{id:"fld-lbl-stng",ariaLabel:"Label input",changeAction:A,value:(j=t.bg_img)==null?void 0:j.replace(/\$_bf_\$/g,"\\"),placeholder:"e.g: https://ps.w.org/bit-form/assets/icon-256x256.png?rev=2376144"})}),e.jsxs("div",{className:a(n.flxcb,n.ml1),children:[e.jsx("label",{htmlFor:"alt",className:a(n.mr1),children:c("Width")}),e.jsx("input",{type:"number",name:"width","data-testid":"img-width","aria-label":"Image Width",placeholder:"auto",className:a(g.input,n.w4),value:t.width,onChange:f})]}),e.jsxs("div",{className:a(n.flxcb,n.ml1),children:[e.jsx("label",{htmlFor:"alt",className:a(n.mr1),children:c("Height")}),e.jsx("input",{type:"number",name:"height","data-testid":"img-height","aria-label":"Image Height",placeholder:"auto",className:a(g.input,n.w4),value:t.height,onChange:f})]})]}),e.jsx(h,{}),e.jsx(N,{id:"nam-stng",title:c("Image Alt Text"),className:a(g.fieldSection),children:e.jsx("div",{children:e.jsx("div",{className:a({w:"97%",mx:5}),children:e.jsx(y,{id:"fld-lbl-stng",ariaLabel:"Label input",changeAction:w,value:I.replace(/\$_bf_\$/g,"\\"),placeholder:"Alternative Text"})})})}),e.jsx(h,{}),e.jsxs(P,{md:!0,autoHeight:!0,show:F,setModal:b,className:"o-v",title:"Image",children:[e.jsx("div",{className:"pos-rel"}),e.jsx(W,{iconType:"bg_img",selected:"Upload Image",uploadLbl:"Upload Image",setModal:b,unsplash:!0})]})]})}const q={browseBtn:{b:"none",bd:"none",p:"5px 10px",tn:"all ease-in-out 0.2s","&:hover":{bd:"var(--b-79-96)",cr:"var(--b-50)",brs:"8px"}}};export{he as default};