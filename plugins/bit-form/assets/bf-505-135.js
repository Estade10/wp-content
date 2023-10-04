import{r as f,a as M,o as P,c_ as j,j as e,q as r,c$ as U,cc as $,cd as B,bk as q}from"./main-281.js";import{F as O}from"./bf-117-136.js";import{C as _}from"./bf-231-105.js";function V({className:E,route:N,title:m,children:A,childrenAccodin:F=!1,fldData:s,open:l=!1,actionComponent:g,offset:y=0,tag:i,highlightSelector:p,onClick:I,styleOverride:k}){const[a,d]=f.useState(l),[w,h]=f.useState(l?"auto":0),b=f.useRef(null),{css:t}=M(),{"*":H}=P(),[L,S]=H.split("/"),T=`${i?`${i}-`:""}${j(m)}-acc`,C=`${i?`${i}-`:""}${j(m)}-acc-focus`;f.useEffect(()=>{d(l)},[l]);let v;L==="theme-customize"&&S===N&&(v=!0);const u=o=>{if(o.type==="keypress"&&(o.code==="Space"||o.code==="Enter")){d(c=>!c);return}if(o.type==="keyup"&&o.code==="Escape"){d(!1);return}o.type==="click"&&d(c=>!c)},x=o=>o.stopPropagation(),K=o=>{const c=window.getComputedStyle(o),z=parseFloat(c.marginTop)+parseFloat(c.marginBottom);return Math.ceil(o.offsetHeight+z)},R=()=>h(K(b.current));return e.jsxs("div",{role:"button",tabIndex:0,onKeyUp:u,onKeyDown:u,className:`${E} ${a&&t(n.active)} ${t(n.accordionLbl)}`,onClick:I,"data-testid":T,children:[e.jsx("div",{className:`btgl ${t({w:"100%"},v&&n.navBtnActive)}`,tabIndex:"-1",role:"button",onClick:u,onKeyDown:u,children:e.jsxs("div",{className:`${t(r.flxc,n.titlebar)} ${t(v&&{bd:"hsl(233deg 36% 95%)"})}`,style:{paddingLeft:y*2},children:[e.jsx("div",{children:e.jsx(U,{className:`toggle-icn ${t(n.icn)} `,size:"9",style:{transform:`rotate(${a?180:90}deg)`}})}),e.jsxs("div",{className:t(n.flxbwn),children:[e.jsxs("div",{className:t(r.flxc,r.mr2),children:[e.jsx("span",{className:`title ${t(n.dflx,!F&&r.fw500)}`,children:m}),i&&e.jsx("span",{title:`Field key: ${i}`,className:t(n.titleTag),children:i}),k&&e.jsx("span",{className:t(n.overrideIndicator),title:"Theme styles override"}),s&&e.jsx(_,{width:150,icnSize:15,className:`${t(r.mr2)} hovertip`,children:e.jsx("div",{className:t(n.tipBody),children:((s==null?void 0:s.lbl)||(s==null?void 0:s.txt)||(s==null?void 0:s.adminLbl))&&(s.lbl||s.txt||s.adminLbl)})}),e.jsx("div",{className:t(n.navActionBtn),"data-action-btn-lbl":!0,children:p&&e.jsx("div",{onMouseEnter:()=>$(p),onFocus:()=>$(p),onMouseLeave:()=>B(),onBlur:()=>B(),role:"button",tabIndex:"0",className:t(n.highlightBtn),title:"Highlight Element in Builder","data-testid":C,children:e.jsx(O,{size:15,stroke:"2.5"})})})]}),e.jsx("div",{onClick:x,onKeyDown:x,role:"button",tabIndex:"-1",children:g&&g})]})]})}),e.jsx("div",{style:{height:w,transition:"height 300ms",overflow:w==="auto"?"auto":"hidden"},children:e.jsx(q,{nodeRef:b,in:a,timeout:300,onEntering:R,onEntered:()=>h("auto"),onExit:()=>h(b.current.offsetHeight),onExiting:()=>h(0),unmountOnExit:!0,style:{overflow:a?"auto":"hidden"},children:e.jsx("div",{ref:b,className:`body ${t(n.body)}`,onClick:x,onKeyDown:x,style:{paddingLeft:y*4},children:A})})})]})}const n={flxbwn:{flx:"between"},titlebar:{ws:"nowrap",fw:500,ow:"hidden",":hover":{bd:"#eeeff7"},"& .hovertip":{oy:0}},dflx:{flx:"align-center",fw:400,fs:13,lh:2,curp:1,"& .hover-tip":{oy:0}},":hover":{bd:"var(--b-50-95)"},icn:{cr:"#c6c6c6",mr:4,ml:4,mt:-1,tn:"transform 250ms"},body:{fs:12},titleTag:{p:"1px 5px",bd:"#EDF2F7",brs:5,cr:"gray",fs:11,fw:400,b:"1px solid #d8dde2",ml:"7px",curp:1},tipBody:{lh:"1.1",fs:"12.5px",fw:100,ff:'"Roboto", sans-serif'},accordionLbl:{":focus-within":{"& div[data-action-btn-lbl]":{dy:"flex"}},":focus-visible":{focusShadow:1,"& div[data-action-btn-lbl]":{dy:"flex"}},":hover":{bd:"#f8f8f8","& div[data-action-btn-lbl]":{dy:"flex"}}},highlightBtn:{flx:"center",brs:5,h:20,w:20,curp:1,":focus-visible":{focusShadow:1},":hover":{bd:"#d3d3d3"}},navActionBtn:{b:"none",pn:"absolute",rt:10,jc:"center",ai:"center",dy:"none",pl:15},overrideIndicator:{w:"5px",h:"5px",brs:"50%",bc:"#ffd64f",ml:"3px",px:2},active:{bd:"hsl(0deg 13% 97%)"},navBtnActive:{bd:"#eeeff7"}};export{V as L};
