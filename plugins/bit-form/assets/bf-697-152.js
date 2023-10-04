var K=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(t,l,s)=>l in t?K(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,C=(t,l)=>{for(var s in l||(l={}))A.call(l,s)&&S(t,s,l[s]);if(y)for(var s of y(l))T.call(l,s)&&S(t,s,l[s]);return t};import{o as $,a as E,e as M,h as w,r as k,j as e,M as V,_ as u,b as N,l as f,aM as b,b8 as F,a2 as L,E as I,q as _}from"./main-281.js";import{F as z,d as H,A as R,b as U,R as q,c as P}from"./bf-997-88.js";import{F as d}from"./bf-784-142.js";import{C as G}from"./bf-231-105.js";import{b as J}from"./bf-675-103.js";import{T as O}from"./bf-226-108.js";import{F as Q}from"./bf-388-298.js";import{a as r}from"./bf-558-170.js";import{S as D}from"./bf-869-79.js";/* empty css          */import"./bf-192-171.js";import"./bf-99-141.js";import"./bf-751-65.js";import"./bf-646-73.js";import"./bf-900-104.js";import"./bf-977-119.js";import"./bf-23-74.js";import"./bf-811-102.js";import"./bf-406-106.js";import"./bf-112-111.js";import"./bf-724-110.js";import"./bf-521-107.js";import"./bf-890-67.js";function W({labelModal:t,setLabelModal:l}){var c;const{fieldKey:s}=$(),{css:a}=E(),[j,m]=M(L),i=w(j[s]),x=i.lbl||((c=i==null?void 0:i.info)==null?void 0:c.lbl),[h,n]=k.useState(x);k.useEffect(()=>{t&&n(x)},[t]);const o=v=>{m(g=>f(g,B=>{B[s].lbl=v})),b({event:"Modify Decision Box Label",type:"change_decision_label",state:{fields:F("fields"),fldKey:s}})},p=()=>{i.lbl=h,m(v=>f(v,g=>{g[s]=i})),b({event:"Cancel Decision Box Label Editing",type:"cancel_decision_label_edit",state:{fields:F("fields"),fldKey:s}}),l(!1)};return e.jsxs(V,{md:!0,show:t,setModal:p,title:u("Edit Decision Box Label"),children:[e.jsx(O,{id:s,value:x,onChangeHandler:o}),e.jsxs("div",{className:"mt-2 f-right",children:[e.jsx("button",{type:"button",className:`${a(N.btn)} mr-2`,onClick:p,children:"Cancel"}),e.jsx("button",{type:"button",className:`${a(N.btn)} blue`,onClick:()=>l(!1),children:"Save"})]})]})}function ke(){const{fieldKey:t}=$(),[l,s]=M(L),a=w(l[t]),[j,m]=k.useState(!1),{css:i}=E();function x(n){const{checked:o}=n.target;if(o){const c=C({},a.valid);c.checked=!0,a.valid=c}else delete a.valid.checked;const p=f(l,c=>{c[t]=a});s(p),b({event:`Check by default ${o?"on":"off"} : ${a.adminLbl||t}`,type:"set_check_by_default",state:{fields:p,fldKey:t}})}const h=(n,o)=>{a.msg[o]=n;const p=f(l,c=>{c[t]=a});s(p),b({event:`${o[0].toUpperCase()+o.slice(1)} Value Modified to "${n}"`,type:`${o}_value_modify`,state:{fields:p,fldKey:t}})};return window.selectedFieldData=a,e.jsxs("div",{children:[e.jsx(z,{title:"Field Settings",subtitle:a.typ,fieldKey:t}),e.jsxs("div",{className:i(d.fieldSection),children:[e.jsxs("div",{className:`flx flx-between ${d.hover_tip}`,children:[e.jsxs("div",{className:"flx",children:[e.jsx("b",{children:"Label "}),e.jsx(G,{width:250,icnSize:17,className:"hover-tip",children:e.jsx("div",{className:"txt-body",children:u("Edit your decision box label by clicking on edit icon")})})]}),e.jsx("span",{"data-testid":"lbl-edt-btn",role:"button",tabIndex:"-1",className:"mr-2 cp",onClick:()=>m(!0),onKeyDown:()=>m(!0),children:e.jsx(I,{size:19})})]}),e.jsx("div",{className:`${i(H.errMsgBox)} ${i(_.mt2)}`,tabIndex:"0",role:"button",onClick:()=>m(!0),onKeyDown:()=>m(!0),children:e.jsx("p",{className:i(_.m0),children:"Click to edit decision box label"})})]}),e.jsx(r,{}),e.jsx(W,{labelModal:j,setLabelModal:m}),e.jsx(R,{}),e.jsx(r,{}),e.jsx(U,{}),e.jsx(r,{}),e.jsx(q,{asteriskIsAllow:!1}),e.jsx(r,{}),e.jsx(Q,{}),e.jsx(r,{}),e.jsx(P,{}),e.jsx(r,{}),e.jsx(D,{id:"chek-val-stng",title:u("Checked Value"),className:i(d.fieldSection),open:!0,children:e.jsx("div",{className:i(d.placeholder),children:e.jsx("input",{"data-testid":"chek-val-inp","aria-label":"Checked value",className:i(d.input),type:"text",value:a.msg.checked||"",onChange:n=>h(n.target.value,"checked")})})}),e.jsx(r,{}),e.jsx(D,{id:"unchek-val-stng",title:u("Unchecked Value"),className:i(d.fieldSection),open:!0,children:e.jsx("div",{className:i(d.placeholder),children:e.jsx("input",{"data-testid":"unchek-val-inp","aria-label":"Uncheked value",className:i(d.input),type:"text",value:a.msg.unchecked||"",onChange:n=>h(n.target.value,"unchecked")})})}),e.jsx(r,{}),e.jsx("div",{className:i(d.fieldSection,d.hover_tip,{pr:"36px !important"}),children:e.jsx(J,{id:"chek-by-dflt",tip:"By disabling this option, the field checked by default will be hidden",title:u("Checked by Default"),action:x,isChecked:a.valid.checked})}),e.jsx(r,{})]})}export{ke as default};