import{a as T,o as V,e as O,b4 as z,b5 as B,j as t,q as e,b2 as u,b3 as c,bn as I,aM as F,b7 as P,b8 as K,bo as M,bp as k,aT as q,ai as A}from"./main-281.js";import{p as D,e as E}from"./bf-869-79.js";import{S as x}from"./bf-675-103.js";import"./bf-751-65.js";import"./bf-646-73.js";import"./bf-23-74.js";import"./bf-811-102.js";import"./bf-900-104.js";import"./bf-231-105.js";import"./bf-406-106.js";import"./bf-112-111.js";import"./bf-724-110.js";import"./bf-521-107.js";import"./bf-890-67.js";function rs({objectPaths:b,id:o}){const{css:r}=T(),{fieldKey:h,element:j}=V(),[w,S]=O(q),[H,g]=O(A),{object:d,paths:y}=b,C=z(d,{themeColors:w,styles:H}),$=B(C,y.shadow),n=L($),N=(s,a,i)=>s==="color"?a||"hsla(0, 0%, 0%, 100)":s==="inset"?a||"":`${a||"0"}${i===void 0?"px":i}`,l=(s,{value:a,unit:i})=>{const p=Object.entries(n).map(([f,v])=>f===s?N(s,a,i):N(f,v,"")).join(" ");I(d,y.shadow,p,{setThemeColors:S,setStyles:g}),F(P(j,h,y.shadow,p,{[d]:K(d)}))},m=(s,a,i,p)=>{if(i){const f=c(p),v=M(a,i,f);l(s,{value:v,unit:a})}};return t.jsxs("div",{children:[t.jsxs("div",{className:r(e.flxcb,e.mb2,e.pt1),children:[t.jsx("span",{className:r(e.fs12,e.fw500),children:"X"}),t.jsx(x,{width:"128px",value:Number(u(n.xOffset)||0),unit:c(n.xOffset)||"px",inputHandler:s=>l("xOffset",s),sizeHandler:({unitKey:s,unitValue:a})=>m("xOffset",s,a,n.xOffset),options:["px","em","rem"],min:"-10",max:"20",dataTestId:`${o}-x-offset`})]}),t.jsxs("div",{className:r(e.flxcb,e.mb2),children:[t.jsx("span",{className:r(e.fs12,e.fw500),children:"Y"}),t.jsx(x,{width:"128px",value:Number(u(n.yOffset)||0),unit:c(n.yOffset)||"px",inputHandler:s=>l("yOffset",s),sizeHandler:({unitKey:s,unitValue:a})=>m("yOffset",s,a,n.yOffset),options:["px","em","rem"],min:"-10",max:"20",dataTestId:`${o}-y-offset`})]}),t.jsxs("div",{className:r(e.flxcb,e.mb2),children:[t.jsx("span",{className:r(e.fs12,e.fw500),children:"Blur"}),t.jsx(x,{width:"128px",value:Number(u(n.blur)||0),unit:c(n.blur)||"px",inputHandler:s=>l("blur",s),sizeHandler:({unitKey:s,unitValue:a})=>m("blur",s,a,n.blur),options:["px","em","rem"],min:"0",max:"10",dataTestId:`${o}-blur`})]}),t.jsxs("div",{className:r(e.flxcb,e.mb2),children:[t.jsx("span",{className:r(e.fs12,e.fw500),children:"Spread"}),t.jsx(x,{width:"128px",value:Number(u(n.spread)||0),unit:c(n.spread)||"px",inputHandler:s=>l("spread",s),sizeHandler:({unitKey:s,unitValue:a})=>m("spread",s,a,n.spread),options:["px","em","rem"],min:"-5",max:"20",dataTestId:`${o}-spread`})]}),t.jsxs("div",{className:r(e.flxcb,e.mb2),children:[t.jsx("span",{className:r(e.fs12,e.fw500),children:"Color"}),t.jsx(D,{action:{onChange:s=>l("color",{value:s})},value:n.color})]}),t.jsxs("div",{className:r(e.flxcb,e.mb2),children:[t.jsx("span",{className:r(e.fs12,e.fw500),children:"Inset"}),t.jsxs("select",{className:r(E.select),value:n.inset||"",onChange:s=>l("inset",{value:s.target.value}),"data-testid":`${o}-inset`,children:[t.jsx("option",{value:"",children:"outset"}),t.jsx("option",{value:"inset",children:"inset"})]})]})]})}const L=b=>{const[o,r,h,j,w,S]=k(b);return{xOffset:o,yOffset:r,blur:h,spread:j,color:w,inset:S}};export{rs as default};
