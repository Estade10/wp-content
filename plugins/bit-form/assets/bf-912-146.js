import{a as j,u as f,e as x,P as R,j as d,l as V,ai as $,aU as b}from"./main-281.js";import{b as S,a as A}from"./bf-751-65.js";import{o as E,m as F}from"./bf-869-79.js";import{T as g}from"./bf-646-73.js";function N({id:c,fk:s}){var n,r;const{css:a}=j(),e=f(S)||{},[i,m]=x($),u=R(b),z=f(A),h=Object.keys((e==null?void 0:e.fields)||{});let o=!1;i&&"fields"in i||e&&"fields"in e||console.error("ResetStyle: styles or saveStyles does not have fields"),s?o=("fields"in i&&((n=i.fields[s])==null?void 0:n.fieldSize))!==("fields"in e&&((r=e==null?void 0:e.fields[s])==null?void 0:r.fieldSize)):o=("fields"in i&&(i==null?void 0:i.fieldsSize))!==("fields"in e&&(e==null?void 0:e.fieldsSize));const p=()=>{m(T=>V(T,l=>{s?(l.fields[s].fieldSize=e==null?void 0:e.fields[s].fieldSize,l.fields[s].classes=e==null?void 0:e.fields[s].classes):(l.fieldsSize=e==null?void 0:e.fieldsSize,h.forEach(t=>{l.fields[t].fieldSize=e==null?void 0:e.fields[t].fieldSize,l.fields[t].classes=e==null?void 0:e.fields[t].classes}))})),s||u(z)};return o?d.jsx(g,{msg:"Reset style",children:d.jsx("button",{onClick:p,className:a(E.resetBtn),type:"button","data-testid":`${c}-reset-style`,children:d.jsx(F,{size:"20"})})}):null}export{N as T};