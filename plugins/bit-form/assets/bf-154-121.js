var L=Object.defineProperty;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(n,o,l)=>o in n?L(n,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[o]=l,m=(n,o)=>{for(var l in o||(o={}))k.call(o,l)&&j(n,l,o[l]);if(b)for(var l of b(o))z.call(o,l)&&j(n,l,o[l]);return n};import{e as F,r as R,a as O,t as S,_ as a,j as e,N as T,O as M,E as V,w as B,i as H,v as q,b as G,c0 as J,q as _,ad as K,l as Q,c as U,h as y,d as W,u as X,R as Y,x as f,ay as w,az as E,aE as Z}from"./main-281.js";import{F as N}from"./bf-433-81.js";import{L as ee}from"./bf-565-176.js";import{S as te}from"./bf-348-177.js";import{B as C}from"./bf-687-112.js";import"./bf-751-65.js";import"./bf-646-73.js";import"./bf-850-76.js";import"./bf-560-129.js";import"./bf-521-107.js";function se({formID:n}){const[o,l]=F(K),[t,p]=R.useState({show:!1}),{css:h}=O(),{pathname:u}=S(),$=s=>{const c=Q(o,i=>{const{title:r,body:d,setting:A}=i[s],I=`${r} - Copy`;i.splice(s+1,0,{title:I,body:d,setting:A}),i.push({updateTem:1})});l(c)},v=(s,c)=>{if(c.original.id){const i=U({formID:n,id:c.original.id},"bitforms_delete_pdf_template").then(r=>{if(r!==void 0&&r.success){const d=y(o);d.splice(s,1),l(d)}});W.promise(i,{loading:"Deleting",success:"Successfully Deleted",error:"Error Occurred"})}else{const i=y(o);i.splice(s,1),l(i)}},x=()=>{t.show=!1,p(m({},t))},D=(s,c)=>{t.btnTxt=a("Delete"),t.body=a("Are you sure to delete this template"),t.btnClass="",t.action=()=>{v(s,c),x()},t.show=!0,p(m({},t))},P=s=>{t.btnTxt=a("Duplicate"),t.body=a("Are you sure to duplicate this template?"),t.btnClass="blue",t.action=()=>{$(s),x()},t.show=!0,p(m({},t))},g=[{Header:a("Template Name"),accessor:"title",Cell:s=>e.jsx(T,{to:`${u}/${s.row.index}`,children:e.jsx("b",{children:s.cell.value})})},{Header:a("Action"),accessor:"action",Cell:s=>e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>P(s.row.index),className:"icn-btn mr-2 tooltip pos-rel",style:{"--tooltip-txt":`'${a("Duplicate")}'`},children:e.jsx(M,{size:"22"})}),e.jsx(T,{to:`${u}/${s.row.index}`,className:"icn-btn mr-2 flx flx-center tooltip pos-rel",style:{"--tooltip-txt":`'${a("Edit")}'`},children:e.jsx(V,{size:"22"})}),e.jsx(C,{onClick:()=>D(s.row.index,s.row),className:"icn-btn tooltip pos-rel",style:{"--tooltip-txt":`'${a("Delete")}'`},children:e.jsx(B,{size:"21"})})]})}];return e.jsxs("div",{className:"w-7",children:[e.jsx(H,{show:t.show,close:x,btnTxt:t.btnTxt,btnClass:t.btnClass,body:t.body,action:t.action}),e.jsx("h2",{children:a("PDF Templates")}),e.jsxs("div",{className:"",children:[e.jsxs(q,{to:`${u}/new`,className:`${h(G.btn)} blue`,children:[e.jsx(ee,{size:"20"})," ",a("Add New Template")]}),o.length>0?e.jsx(J,{height:"60vh",className:"btcd-neu-table mr-1",columns:g,data:o}):e.jsxs("div",{className:h(_.btcdEmpty,_.txCenter),children:[e.jsx(te,{size:"50"}),a("Empty")]})]})]})}const oe=w(()=>E(()=>import("./bf-637-178.js"),["./bf-637-178.js","./main-281.js","./main-281.css","./bf-751-65.js","./bf-646-73.js","./bf-885-388.css","./bf-252-387.css","./bf-139-78.js","./bf-845-71.js","./bf-226-108.js","./bf-977-119.js","./bf-210-392.css"],import.meta.url),{fallback:e.jsx(N,{})}),le=w(()=>E(()=>import("./bf-239-179.js"),["./bf-239-179.js","./main-281.js","./main-281.css","./bf-751-65.js","./bf-646-73.js","./bf-885-388.css","./bf-252-387.css","./bf-139-78.js","./bf-845-71.js","./bf-226-108.js","./bf-977-119.js","./bf-210-392.css"],import.meta.url),{fallback:e.jsx(N,{})});function he(){const n=X(Z);return e.jsxs(Y,{children:[e.jsx(f,{index:!0,element:e.jsx(se,{formID:n})}),e.jsx(f,{path:"/new",element:e.jsx(oe,{})}),e.jsx(f,{path:"/:id",element:e.jsx(le,{})})]})}export{he as default};