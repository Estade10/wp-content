import{o as Y,e as P,a2 as Z,h as D,u as ee,c2 as ue,a as te,j as t,q as c,l as m,r as H,au as f,_ as T,M as be,ai as pe,am as xe,aM as g,cO as ge,ce as he,cM as C,cP as fe,cN as E}from"./main-281.js";/* empty css          */import{B as O}from"./bf-370-118.js";import{D as $}from"./bf-690-144.js";import{S as V,h as q,i as U,j as G}from"./bf-869-79.js";import{F as y,A as J}from"./bf-784-142.js";import{D as Q}from"./bf-751-65.js";import{a as z}from"./bf-675-103.js";import{F as je,A as ve,b as ye}from"./bf-997-88.js";import{F as w,a as j,I as Ie}from"./bf-558-170.js";import{S as Se}from"./bf-977-119.js";import"./bf-646-73.js";import"./bf-23-74.js";import"./bf-811-102.js";import"./bf-900-104.js";import"./bf-231-105.js";import"./bf-406-106.js";import"./bf-112-111.js";import"./bf-724-110.js";import"./bf-521-107.js";import"./bf-890-67.js";import"./bf-192-171.js";import"./bf-226-108.js";import"./bf-99-141.js";function W({fieldName:i}){const{fieldKey:l}=Y(),[u,h]=P(Z),e=D(u[l]),d=ee(ue),{css:b}=te(),p=x=>{e[i]+=`\${${x}}`,h(I=>m(I,v=>{v[l]=e}))};return d.filter(x=>!x.type.match(/^(file-up|recaptcha|title)$/)),t.jsx("div",{className:b(F.main),children:t.jsxs("ul",{className:b(F.ul,c.mb0),children:[t.jsx("h4",{style:{margin:0},children:"Smart Tags"}),Se.map((x,I)=>t.jsx("li",{className:b(F.li),children:t.jsx("button",{type:"button",className:`${b(F.button)} btnHover`,title:x.label,onClick:()=>p(x.name),children:x.label})},`smart-tag-${I*2}`))]})})}const F={main:{h:300,ow:"scroll"},ul:{mt:10,pb:0},li:{mb:0,mt:5,ml:5},button:{fw:"normal",dy:"block",w:"100%",ta:"left",b:0,bd:"none",p:3,curp:1,"&:hover":{bd:"var(--white-0-95)",cr:"var(--black-0)",brs:8},fs:11}};function we(){var R,k;const{css:i}=te(),{fieldKey:l}=Y(),[u,h]=P(Z),e=D(u[l]),[d,b]=P(pe),p=ee(xe),x=(R=d==null?void 0:d.fields)==null?void 0:R[l],{classes:I}=x,v=`.${l}-fld-wrp`,[L,A]=H.useState(!1),[_,se]=H.useState(""),{"align-items":le,"flex-direction":ie}=I[v]||"",ne=((k=d.fields[l].classes[`.${l}-sub-titl`])==null?void 0:k["justify-content"])||"start",M=({target:{value:s,name:n}})=>{e[n]=s;const o=m(u,r=>{r[l]=e});h(o),g({event:`${n} Modified to ${s}`,type:`${n}_changes`,state:{fldKey:l,fields:o}})},S=s=>{ge(d,l,he[s])||C(p,s),fe(s,l),se(s),A(!0),f(l)},N=s=>{if(e[s]){delete e[s];const n=m(u,r=>{r[l]=e});h(n);const o=m(d,r=>{s==="prefixIcn"&&delete r.fields[p].classes[`.${p}-fld`]["padding-left"],s==="suffixIcn"&&delete r.fields[p].classes[`.${p}-fld`]["padding-right"]});b(o),g({event:`${E[s]} Icon Deleted`,type:`delete_${s}`,state:{fldKey:l,fields:n,styles:o}})}},oe=s=>{if(e[s]){delete e[s];const n=m(u,o=>{o[l]=e});h(n),f(l),g({event:`${E[s]} Icon Deleted`,type:`delete_${s}`,state:{fldKey:l,fields:n}})}},ce=({target:{checked:s}})=>{s?(e.title="Title",e.titleHide=!1,C(p,"title")):(delete e.title,e.titleHide=!0);const n=s?"on":"off",o=m(u,r=>{r[l]=e});h(o),f(l),g({event:`Title ${n}:  ${e.lbl||l}`,type:"title_toggle",state:{fields:o,fldKey:l}})},ae=({target:{checked:s}})=>{s?(e.subtitle="Subtitle",e.subtitleHide=!1,C(p,"subTitl")):(delete e.subtitle,e.subtitleHide=!0);const n=s?"on":"off",o=m(u,r=>{r[l]=e});h(o),f(l),g({event:`Subtitle ${n}:  ${e.lbl||l}`,type:"subtitle_toggle",state:{fields:o,fldKey:l}})},K=(s,n)=>{s?e[n]=s:delete e[n];const o=m(u,r=>{r[l]=e});h(o),f(l),g({event:`Subtitle ${s}:  ${e.lbl||l}`,type:"subtitle_change",state:{fields:o,fldKey:l}})},re=(s,n)=>{const o=m(d,r=>{r.fields[l].classes[v][n]=s});b(o),f(l),g({event:`Direction Change to ${s}:  ${e.lbl||l}`,type:"direction_changes",state:{styles:o,fldKey:l}})},de=(s,n)=>{let o="left";s==="center"?o="center":s==="flex-end"&&(o="right");const r=m(d,B=>{B.fields[l].classes[v][n]=s,B.fields[l].classes[v]["justify-content"]=o});b(r),g({event:`Title Alignment Change to ${s}:  ${e.lbl||l}`,type:"position_changes",state:{styles:r,fldKey:l}})},me=s=>{const n=m(d,o=>{s==="start"?delete o.fields[l].classes[`.${l}-sub-titl`]["justify-content"]:o.fields[l].classes[`.${l}-sub-titl`]["justify-content"]=s});b(n),g({event:`Subtitle Alignment Change to ${s}:  ${e.lbl||l}`,type:"position_changes",state:{styles:n,fldKey:l}})};return H.useEffect(()=>{(e!=null&&e.logo||e!=null&&e.titlePreIcn||e!=null&&e.titleSufIcn||e!=null&&e.subTitlPreIcn||e!=null&&e.subTitlSufIcn)&&f(l)},[L]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"",children:[t.jsx(je,{title:"Field Settings",subtitle:e.typ,fieldKey:l}),t.jsxs(V,{id:"titl-stng",title:T("Title"),className:i(y.fieldSection,y.hover_tip),switching:!0,tip:"By disabling this option, the field title will be hidden",tipProps:{width:250,icnSize:17},toggleAction:ce,toggleChecked:!(e!=null&&e.titleHide),open:!(e!=null&&e.titleHide),disable:e==null?void 0:e.titleHide,children:[t.jsxs("div",{className:i(y.placeholder,c.mt1,c.ml1),children:[t.jsxs("div",{className:i(a.title),children:[t.jsx("label",{className:i(c.fw500),children:"Text"}),t.jsxs(Q,{children:[t.jsx("button",{"data-testid":"titl-mor-opt-btn","data-close":!0,type:"button",className:i(a.btn),unselectable:"on",draggable:"false",style:{cursor:"pointer"},title:T("More Options"),children:t.jsx(O,{size:"16"})}),t.jsx(W,{fieldName:"title"})]})]}),t.jsx(J,{id:"titl",placeholder:"Type title text here...",name:"title",value:e==null?void 0:e.title,changeAction:M})]}),t.jsxs("div",{className:i(c.flxcb,c.mt1),children:[t.jsx("span",{className:i(c.fw500,c.ml2),children:"HTML Tag"}),t.jsx("div",{className:i(c.flxcb,c.mr2,c.w3),children:t.jsx("select",{"data-testid":"titl-tag-slct",className:i(a.select),value:e==null?void 0:e.titleTag,onChange:s=>K(s.target.value,"titleTag"),children:X.map((s,n)=>t.jsx("option",{value:s.value,children:s.title},`opt-title-${n*4}`))})})]}),t.jsx(w,{label:"Leading Icon",iconSrc:e==null?void 0:e.titlePreIcn,styleRoute:"title-pre-i",setIcon:()=>S("titlePreIcn"),removeIcon:()=>N("titlePreIcn")}),t.jsx(w,{label:"Trailing Icon",iconSrc:e==null?void 0:e.titleSufIcn,styleRoute:"title-suf-i",setIcon:()=>S("titleSufIcn"),removeIcon:()=>N("titleSufIcn")})]}),t.jsx(j,{}),t.jsxs(V,{id:"sub-titl-stng",title:T("Subtitle"),className:i(y.fieldSection,y.hover_tip),switching:!0,tip:"By disabling this option, the field subtitle will be hidden",tipProps:{width:250,icnSize:17},toggleAction:ae,toggleChecked:!(e!=null&&e.subtitleHide),open:e==null?void 0:e.subtitleHide,disable:e==null?void 0:e.subtitleHide,children:[t.jsxs("div",{className:i(y.placeholder,c.mt1,c.ml1),children:[t.jsxs("div",{className:i(a.title),children:[t.jsx("label",{className:i(c.fw500),children:"Text"}),t.jsxs(Q,{children:[t.jsx("button",{"data-testid":"sub-titl-mor-opt-btn","data-close":!0,type:"button",className:i(a.btn),unselectable:"on",draggable:"false",style:{cursor:"pointer"},title:T("Fields"),children:t.jsx(O,{size:"16"})}),t.jsx(W,{fieldName:"subtitle"})]})]}),t.jsx(J,{id:"sub-titl-stng",placeholder:"Type subtitle here...",name:"subtitle",value:e==null?void 0:e.subtitle,changeAction:M})]}),t.jsxs("div",{className:i(c.flxcb,c.mt1),children:[t.jsx("span",{className:i(c.fw500,c.ml2),children:"HTML Tag"}),t.jsx("div",{className:i(c.flxcb,c.mr2,c.w3),children:t.jsx("select",{"data-testid":"sub-titl-tag",className:i(a.select),value:e==null?void 0:e.subTitleTag,onChange:s=>K(s.target.value,"subTitleTag"),children:X.map((s,n)=>t.jsx("option",{value:s.value,children:s.title},`title-opt-${n*4}`))})})]}),t.jsx(w,{label:"Leading Icon",iconSrc:e==null?void 0:e.subTitlPreIcn,styleRoute:"sub-titl-pre-i",setIcon:()=>S("subTitlPreIcn"),removeIcon:()=>N("subTitlPreIcn")}),t.jsx(w,{label:"Trailing Icon",iconSrc:e==null?void 0:e.subTitlSufIcn,styleRoute:"sub-titl-suf-i",setIcon:()=>S("subTitlSufIcn"),removeIcon:()=>N("subTitlSufIcn")}),t.jsxs("div",{className:i(a.main,c.ml2),children:[t.jsx("span",{className:i(c.fw500),children:"Alignment"}),t.jsx(z,{show:["icn"],tipPlace:"bottom",className:i(a.segment),options:[{icn:t.jsx(q,{size:"17"}),label:"start",tip:"Left"},{icn:t.jsx(U,{size:"17"}),label:"center",tip:"Center"},{icn:t.jsx(G,{size:"17"}),label:"end",tip:"Right"}],onChange:me,defaultActive:ne})]})]}),t.jsx(j,{}),t.jsx(ve,{}),t.jsx(j,{}),t.jsx(ye,{}),t.jsx(j,{}),t.jsx(w,{classNames:i(a.section),labelClass:i(a.logoLabel),label:"Logo/Icon",iconSrc:e==null?void 0:e.logo,styleRoute:"logo",setIcon:()=>S("logo"),removeIcon:()=>oe("logo")}),t.jsx(j,{}),t.jsxs("div",{className:i(a.section,a.main),children:[t.jsx("span",{className:i(a.label),children:"Label Alignment"}),t.jsx(z,{show:["icn"],tipPlace:"bottom",className:i(a.segment),options:[{icn:t.jsx(q,{size:"17"}),label:"flex-start",tip:"Left"},{icn:t.jsx(U,{size:"17"}),label:"center",tip:"Center"},{icn:t.jsx(G,{size:"17"}),label:"flex-end",tip:"Right"}],onChange:s=>de(s,"align-items"),defaultActive:le})]}),t.jsx(j,{}),t.jsxs("div",{className:i(a.section,a.main),children:[t.jsx("span",{className:i(a.label),children:"Layout Direction"}),t.jsx(z,{show:["icn"],tipPlace:"bottom",className:i(a.segment),options:[{icn:t.jsx($,{size:"17",dir:"down"}),label:"column",tip:"Vertical"},{icn:t.jsx($,{size:"17",dir:"up"}),label:"column-reverse",tip:"Vertical  Reverse"},{icn:t.jsx($,{size:"17",dir:"right"}),label:"row",tip:"Horizontal"},{icn:t.jsx($,{size:"17",dir:"left"}),label:"row-reverse",tip:"Horizontal Reverse"}],onChange:s=>re(s,"flex-direction"),defaultActive:ie})]}),t.jsx(j,{})]}),t.jsxs(be,{md:!0,autoHeight:!0,show:L,setModal:A,className:"o-v",title:"Image",children:[t.jsx("div",{className:"pos-rel"}),t.jsx(Ie,{iconType:_,selected:_==="logo"?"Upload Image":"Icons",uploadLbl:"Upload Image",setModal:A,addPaddingOnSelect:!1})]})]})}const X=[{value:"h1",title:"H1"},{value:"h2",title:"H2"},{value:"h3",title:"H3"},{value:"h4",title:"H4"},{value:"h5",title:"H5"},{value:"h6",title:"H6"},{value:"div",title:"Div"},{value:"span",title:"Span"},{value:"p",title:"p"}],a={section:{my:5,mx:15},logoLabel:{flx:"center-between",ml:"0px !important",my:5,brs:8,fw:"600 !important"},main:{flx:"center-between"},label:{fw:600},segment:{mr:7,mt:4},title:{dy:"flex",jc:"space-between",mx:5,mt:5},formfield:{brs:8,w:150,dy:"block"},btn:{b:0,brs:5,curp:1,flx:"center-between"},spaceControl:{m:"9px 10px 0px 7px"},select:{fs:14,fw:500,w:"96%",bd:"var(--b-79-96) !important",oe:"none !important",ae:"auto !important",mx:"auto",dy:"block",lh:"2 !important",px:8,p:"0 !important",mb:3,bs:"none !important",b:"none !important",brs:"8px !important","::placeholder":{cr:"hsl(215deg 16% 57%)",fs:12},":focus":{bs:"0 0 0 2px var(--b-50) !important"}}};var We=H.memo(we);export{We as default};
