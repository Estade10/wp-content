var V=Object.defineProperty,tt=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var U=Math.pow,W=(e,s,n)=>s in e?V(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,S=(e,s)=>{for(var n in s||(s={}))O.call(s,n)&&W(e,n,s[n]);if(I)for(var n of I(s))P.call(s,n)&&W(e,n,s[n]);return e},q=(e,s)=>tt(e,et(s));var G=(e,s)=>{var n={};for(var o in e)O.call(e,o)&&s.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&I)for(var o of I(e))s.indexOf(o)<0&&P.call(e,o)&&(n[o]=e[o]);return n};import{r as f,j as t,bk as nt,a as M,q as D,P as rt,I as X,_ as Y,bh as st,bi as ot,c_ as at,u as A,d7 as H,ai as it,aU as lt,aT as ct}from"./main-281.js";import{C as _,P as pt}from"./bf-900-104.js";import{a as ut,u as bt,T as J}from"./bf-646-73.js";import{C as dt}from"./bf-231-105.js";function Ft({children:e,open:s,overflw:n="auto"}){const[o,a]=f.useState(s?"auto":0),[l,b]=f.useState(s||!1),p=f.useRef(null);f.useEffect(()=>{b(s)},[s]);const u=m=>{const y=window.getComputedStyle(m),F=parseFloat(y.marginTop)+parseFloat(y.marginBottom);return Math.ceil(m.offsetHeight+F)},d=()=>a(u(p.current));return t.jsx("div",{style:{height:o,transition:"height 300ms",overflow:o==="auto"?n:"hidden"},children:t.jsx(nt,{nodeRef:p,in:l,timeout:300,onEntering:d,onEntered:()=>a("auto"),onExit:()=>a(p.current.offsetHeight),onExiting:()=>a(0),unmountOnExit:!0,style:{overflow:l?n:"hidden"},children:t.jsx("div",{ref:p,className:"body",children:e})})})}const ht={container:{brs:10,flx:"align-center",h:30,p:3,bc:"var(--white-0-95)",cr:"var(--white-0-50)",b:"1px solid transparent",":focus-within":{focusShadow:1},":hover":{bs:"0 0 0 1px var(--white-0-83)"}},input:{jc:"space-between !important",":hover":{b:"1px solid transparent !important","& > div > input:first-child":{bc:"transparent !important"},"& button":{dy:"none"}},":focus":{bc:"transparent !important"},"& > span:first-child":{w:"40%",p:0,flx:"center"},"& > div:nth-child(2)":{w:"60%"},"& > div:nth-child(2) > input:first-child":{pr:"0px !important"}},selectt:{bi:"none !important",all:"unset","border-top-left-radius":"0 !important","border-bottom-left-radius":"0 !important",bl:"1px solid var(--white-0-75)",p:"0px !important",pr:"3px !important",pl:"3px !important",bc:"transparent !important",lh:"1.5 !important",mnh:"18px !important","&:focus":{bs:"none !important"}},listContainer:{pn:"relative",w:20,cur:"pointer","&:hover .value-list":{dy:"block"},"&:hover .down-icon":{transform:"rotate(180deg) !important"}},valueList:{dy:"none",pn:"absolute",m:0,mxh:200,owy:"auto",mnw:100,bc:"white",cr:"black",brs:5,p:5,bs:"rgb(191 191 191) 0px 0px 5px 2px",br:".5px solid rgb(218 218 218)"},listItem:{m:0,p:2,brs:3,cur:"pointer",":hover":{bc:" hsl(0deg 0% 76%)"}}};var E=ht;const mt={container:{flx:"center",w:"100%",brs:8,ow:"hidden",h:30,fw:500,b:"1px solid transparent",":hover":{b:"1px solid var(--white-0-50)","& input":{bc:"var(--white-0-89) !important"},"& button":{dy:"initial"}},"& div[data-tippy-root]":{w:"80%"}},visible:{bs:"0 0 0 2px var(--b-50) outset"},label:{p:"8px 12px",w:"50%"},resizer:{cur:"e-resize",us:"none"},inputcontainer:{dy:"inline-block",h:"100%",pn:"relative",width:"100%"},input:{"-moz-appearance":"textfield",b:"none !important",oe:"none",brs:"0px !important",m:0,p:"0 0 0 3px !important",h:"100%",w:"100%",mnh:"auto !important",bc:"transparent !important",":focus":{bs:"none !important",dy:"initial"},"&::-webkit-inner-spin-button":{"-webkit-appearance":"none"},"&::-webkit-outer-spin-button":{"-webkit-appearance":"none"}},button:{m:0,p:2,oe:"none",b:0,pn:"absolute",rt:0,fs:15,curp:1,cr:"var(--white-2-47)",lh:0,dy:"none",bc:"transparent !important",tn:"all .2s",":hover":{cr:"var(--black-0)",bs:"none"},"&:focus-visible":{bs:"0 0 0 2px var(--b-50) inset"}},inc:{tp:3,tm:"rotate(180deg)",":hover":{tp:1}},dec:{bm:3,":hover":{bm:1}},range:{m:"auto",oe:"none",p:0,h:6,w:"80%",bc:"#dedede",bi:"linear-gradient(90deg, #4099FF 0%, #4099FF 100%)","background-size":"50% 100%","background-repeat":"no-repeat",brs:10,curp:1,"-webkit-appearance":"none","::-webkit-slider-runnable-track":{bs:"none",b:"none",bd:"transparent","-webkit-appearance":"none"},"::-moz-range-track":{bs:"none",b:"none",bd:"transparent"},"::-webkit-slider-thumb":{se:14,bc:"#4099FF",b:"3px solid #FFFFFF",brs:"100%","-webkit-appearance":"none",bs:"0 1px 3px 0px rgba(0,0,0,0.3)",tn:"transform 0.2s cubic-bezier(0.42, 0, 0.68, 3.27) 0s"},"::-webkit-slider-thumb:active":{tm:"scale(0.85)",tn:"transform .2s ease"},"::-moz-range-thumb:active":{tm:"scale(0.85)",tn:"transform .2s ease"},"::-moz-range-thumb":{se:14,bc:"#4099FF",b:"3px solid #FFFFFF",brs:"100%",bs:"0 1px 3px 0px rgba(0,0,0,0.3)",tn:"transform 0.2s cubic-bezier(0.42, 0, 0.68, 3.27) 0s"},"::-ms-thumb:active":{tm:"scale(0.85)",tn:"transform .2s ease"},"::-ms-thumb":{se:14,bc:"#4099FF",b:"3px solid #FFFFFF",brs:"100%",bs:"0 1px 3px 0px rgba(0,0,0,0.3)",tn:"transform 0.2s cubic-bezier(0.42, 0, 0.68, 3.27) 0s"}}};var k=mt;const xt=({min:e,max:s,step:n,val:o,onChangeHandler:a,dataTestId:l})=>{const{css:b}=M(),p=f.useRef(null);return f.useEffect(()=>{const u=(o-e)*100/(s-e);p.current.style.backgroundSize=`${u<0?0:u.toFixed(2)}% 100%`},[s,e,o]),t.jsxs("div",{className:b(D.flxc,{cg:3,h:25}),children:[t.jsx("span",{children:e}),t.jsx("input",{type:"range",ref:p,className:b(k.range),"data-testid":`${l}-range`,min:e,max:s,step:n,onInput:a,value:o}),t.jsx("span",{children:s})]})};function ft({width:e,label:s,className:n,value:o,min:a,max:l,step:b=1,onChange:p,showRangeTip:u=!0,resizeValueByLabel:d=!0,changeValueOnScroll:m=!0,showArrow:y=!0,placeholder:F,hasTextMode:N,dataTestId:C,sliderWidth:z}){const{css:x}=M(),[v,$]=f.useState(!1),w=r=>{const i=r.clientX;let j=parseFloat(o);Number.isNaN(j)&&(j=a),document.onmousemove=Q=>{const L=Math.floor(Q.clientX-i),Z=Math.round(Math.sign(L)*U(Math.abs(L)/10,1.2));let K=j+Z;K<a&&(K=a),K>l&&(K=l),p&&p(K)},document.onmouseup=()=>{document.onmousemove=null}},g=r=>{let i=0;return r.altKey&&!r.shiftKey&&!r.ctrlKey&&(i=.1),!r.altKey&&r.shiftKey&&!r.ctrlKey&&(i=10),!r.altKey&&!r.shiftKey&&r.ctrlKey&&(i=100),i},h=r=>{p&&p(r.target.value)},T=r=>{if(r.code==="ArrowDown"||r.code==="ArrowUp"){if(r.preventDefault(),r.code==="ArrowDown"){p(r.target.valueAsNumber-Number(g(r)||b));return}p(r.target.valueAsNumber+Number(g(r)||b))}},B=r=>{let i=Number(o)+Number(g(r)||b);Number.isInteger(i)||(i=parseFloat(i.toFixed(2))),i<a&&(i=a),i>l&&(i=l),p&&p(i)},c=r=>{let i=Number(o)-(g(r)||b);Number.isInteger(i)||(i=parseFloat(i.toFixed(3))),i<a&&(i=a),i>l&&(i=l),p&&p(i)};return t.jsxs("div",{className:`${x(k.container,{"& div[data-tippy-root]":{w:z}},v?k.visible:"")} ${n}`,style:{width:e||"100%"},children:[s&&t.jsx("span",{className:x(k.label,d?k.resizer:""),onMouseDown:d?w:void 0,children:s}),t.jsx(ut,{className:x(k.tip),inertia:!0,placement:"bottom",duration:350,interactiveBorder:20,theme:"light-border",animation:"shift-away-extreme",interactive:!0,maxWidth:"100%",arrow:!0,content:t.jsx(xt,{dataTestId:C,min:a,max:l,step:b,val:o,onChangeHandler:h}),visible:v,onClickOutside:()=>$(!1),children:t.jsxs("div",{className:x(k.inputcontainer),children:[t.jsx("input",{className:`${x(k.input)} ${y&&"pr-4"}`,type:"number",min:a,max:l,placeholder:F||"value",step:b,onChange:h,onKeyDown:T,onFocusCapture:u?()=>$(!0):void 0,onWheelCapture:m?void 0:r=>r.target.blur(),value:o,"data-testid":`${C}-input`}),y&&!N&&t.jsxs("div",{children:[t.jsx("button",{type:"button",className:x(k.button,k.inc),onClick:B,children:t.jsx(_,{size:9,viewBox:"6 9 12 6"})}),t.jsx("button",{type:"button",className:x(k.button,k.dec),onClick:c,children:t.jsx(_,{size:9,viewBox:"6 9 12 6"})})]})]})})]})}function Nt({label:e,className:s,width:n,customStyle:o,options:a=[],sizeHandler:l,unit:b,inputHandler:p,actualValue:u,preDefinedValues:d,definedValueHandler:m,value:y,name:F,min:N=1,max:C=100,id:z,step:x=1,dataTestId:v,sliderWidth:$}){const{css:w}=M(),g=d==null?void 0:d.includes(u);return t.jsxs("div",{className:`${w(E.container)} ${s}`,style:S({width:n},o),children:[d&&t.jsxs("div",{className:w(E.listContainer),children:[t.jsx(_,{className:"down-icon",size:"18",rotate:!1}),t.jsx("ul",{className:`${w(E.valueList)} value-list`,children:d==null?void 0:d.map(h=>t.jsx("li",{role:"option","aria-selected":h,onClick:()=>m(h),onKeyUp:()=>m(h),className:w(E.listItem),children:h},h))})]}),t.jsx(ft,{className:w(E.input),label:e,value:g?"":y,min:N,max:C,step:x,width:`${n-20}px`,onChange:h=>p({value:h,unit:b,id:z}),placeholder:u,hasTextMode:g,dataTestId:v,sliderWidth:$}),!g&&t.jsxs("select",{value:b,className:w(E.selectt,D.fontBody,{fs:"12px !important"}),name:F,onChange:({target:{value:h}})=>l({unitKey:h,unitValue:y,id:z}),"data-testid":`${v}-unit-select`,children:[a.length===0&&t.jsxs(t.Fragment,{children:[t.jsx("option",{value:"px",children:"px"}),t.jsx("option",{value:"%",children:"%"}),t.jsx("option",{value:"em",children:"em"}),t.jsx("option",{value:"rem",children:"rem"})]}),a&&(a==null?void 0:a.map((h,T)=>t.jsx("option",{value:h,children:h},`scopt-${T*2}`)))]})]})}function $t({id:e,className:s,tip:n,title:o,isChecked:a,name:l,action:b=()=>{},disabled:p,isPro:u,proProperty:d}){const{css:m}=M(),y=rt(ot),F=!u||X;return t.jsxs("div",{className:`flx flx-between ${s}`,children:[t.jsxs("span",{className:`font-w-m ${m(R.titleWrp)}`,children:[o,u&&!X&&t.jsx(pt,{width:"18",proProperty:d}),n&&t.jsx(dt,{width:"200",icnSize:"17",className:"hover-tip",children:t.jsx("div",{className:"txt-body",children:Y(n)})})]}),t.jsxs("label",{"data-testid":`${e}-sngl-tgl`,className:m(R.toggle_control),htmlFor:`s-ck-${e||o||l}-${a}`,children:[t.jsx("input",q(S(S({id:`s-ck-${e||o||l}-${a}`},F&&{onChange:b||(()=>{})}),!F&&{onChange:()=>{y(S({show:!0},st[d]))}}),{className:m(R.input),type:"checkbox",name:l||"check",value:"check",checked:a,disabled:p})),t.jsx("span",{className:`${m(R.control)} control`})]})]})}const R={toggle_control:{dy:"block",pn:"relative",cu:"pointer",us:"none",w:32,h:22},titleWrp:{flx:"align-center",fw:600,"& .hover-tip":{oy:0}},input:{pn:"absolute",oy:0,cur:"pointer",h:0,w:0,":focus":{"& ~ .control::after":{bs:"0 0 0 5px #8cbaff59"}},":focus-visible ~ .control":{bs:"0 0 0 2px white, 0 0 0 4px blue"},":checked~.control":{bd:"var(--b-50)"},":checked~.control:after":{lt:12}},control:{pn:"absolute",tp:"0",lt:"0",h:22,w:32,brs:25,bd:"var(--white-0-86)",tn:"background-color 0.15s ease-in, box-shadow .2s",":after":{bd:"white",pn:"absolute",tp:"50%",lt:3,bs:"0 1px 3px 0 #353535",tm:"translateY(-50%)",ct:'""',w:18,h:18,brs:25,tn:"left 0.25s cubic-bezier(0.79, 0.63, 0.72, 1.76) 0s, box-shadow 0.3s ease 0s"}}};function vt(o){var a=o,{children:e,delay:s=300}=a,n=G(a,["children","delay"]);const l=f.useId(),[b,p]=bt();return t.jsxs(t.Fragment,{children:[t.jsx(J,{singleton:b,delay:s,interactive:n.interactive}),e.map((u,d)=>{var m;return((m=u==null?void 0:u.type)==null?void 0:m.name)==="Tip"?f.cloneElement(u,S({key:`tip-grp-${l+d*2}`,singleton:p},n)):u})]})}function St({defaultActive:e,className:s,options:n,size:o=100,onChange:a,show:l,width:b,tipPlace:p="top",borderRadius:u=10,activeShow:d,noShadow:m,defaultItmWidth:y,wideTab:F}){const{css:N}=M(),C=Number(o),z=c=>Math.floor(C/c),x={wrapper:S({ta:"center"},b&&{w:b}),tabs:{fs:13,bd:"var(--white-0-95)",py:1.5,flx:"center",px:3,ls:"none",brs:u,pn:"relative","& .active":{cr:"var(--b-50) !important"},"& button":{bd:"none",oe:"none",b:"none"}},selector:{w:0,h:"80%",dy:"inline-block",pn:"absolute",lt:5,tp:"50%",tm:"translatey(-50%)",zx:1,brs:u-2,tdn:"0.3s",ttf:"cubic-bezier(0.42, 0.44, 0.57, 1.35)",willChange:"transform",bs:"0 2px 3px -1px #84848485",bd:"linear-gradient(0deg, #efefef 0%, white 20%)"},tab_link:{curp:1,td:"none",fw:500,pn:"relative",p:0,zx:1,mnh:24,w:F?"100%":24,h:F?30:24,brs:u,flx:"center",tdy:"0.3s",tdn:"0.6s","transition-property":"color",cr:"var(--white-0-0-29)",":hover:not(.active)":{cr:"var(--white-0-31)",tdy:"0s",tdn:"300ms"},":focus-visible":{oe:"2px solid var(--b-50)"},"& .icn":{mr:l!=null&&l.includes("label")?z(20):0,lh:"75%",flx:"center"}}},v=f.useRef(null),$=f.useRef(null),w=f.useRef(null),[g,h]=f.useState(e||n[0].label);f.useEffect(()=>{g!==e&&h(e)},[e]),f.useLayoutEffect(()=>{var r;const c=(r=w==null?void 0:w.current)==null?void 0:r.querySelector(`[data-label="${g}"]`);if(c){const{width:i}=c.getBoundingClientRect()||{width:0};if(!v.current)return;v.current.style.width===""?($.transition=v.current.style.transition,v.current.style.transition="all 0s"):v.current.style.transition=$.transition,v.current.style.width=`${i}px`,v.current.style.transform=`translate(${c.offsetLeft-5}px, -50%)`}});const T=(c,r)=>{if(c.preventDefault(),c.type==="keypress"&&c.code!=="Space"||c.type==="keypress"&&c.code!=="Enter")return;const i=c.currentTarget;if(!c.type==="keypress"||!c.type==="click")return;const j=w.current.querySelector(".tabs button.active");i!==j&&(j==null||j.classList.remove("active"),h(n[r].label)),a&&a(n[r].label)},B=(c,r)=>!!(c[r]&&(d&&g===c.label&&d.includes(r)||l&&l.includes(r)||!l&&!d));return t.jsx("div",{className:`${N(x.wrapper)} ${s}`,children:t.jsxs("div",{ref:w,className:`${N(x.tabs)} tabs`,children:[t.jsx("div",{ref:v,className:`selector ${N(x.selector)}`,style:{width:y}}),t.jsx(vt,{children:n==null?void 0:n.map((c,r)=>{const i=t.jsxs("button",{type:"button",className:`${N(x.tab_link)} ${g===c.label?" active":""}`,onClick:j=>T(j,r),onKeyDown:j=>T(j,r),"data-label":c.label,"data-testid":`${at(c.label)}-tab`,children:[B(c,"icn")&&t.jsx("span",{className:`icn ${N(x.icn)} ${g===c.label?N(x.segment_img):""}`,children:c.icn}),B(c,"label")&&Y(c.label)]},`segment-option-${r*10}`);return c.tip?t.jsx(J,{className:N({w:"100%",dy:"inline-block"}),msg:c.tip,place:p,whiteSpaceNowrap:!0,theme:"light-border",delay:300,children:i},`segment-option-${r*100}`):i})})]})})}function Ct({size:e,stroke:s=2}){return t.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",strokeWidth:s,children:t.jsx("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"3",stroke:"currentColor"})})}function zt({size:e,stroke:s=2,variant:n="all",className:o}){return t.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",strokeWidth:s,className:o,children:[t.jsx("path",{d:"M4 1H12",stroke:n.match(/all|top/)?"currentColor":"#b0b0b0"}),t.jsx("path",{d:"M4 15H12",stroke:n.match(/all|bottom/)?"currentColor":"#b0b0b0"}),t.jsx("path",{d:"M1 4L1 12",stroke:n.match(/all|left/)?"currentColor":"#b0b0b0"}),t.jsx("path",{d:"M15 4L15 12",stroke:n.match(/all|right/)?"currentColor":"#b0b0b0"})]})}function Tt(){var o;const e=A(it),s=A(lt),n=A(ct);return t.jsxs(t.Fragment,{children:[t.jsx("link",{rel:"stylesheet",href:(o=e==null?void 0:e.font)==null?void 0:o.fontURL}),t.jsx("style",{children:H(".layout-wrapper",s)}),t.jsx("style",{children:H(".layout-wrapper",n)}),Object.entries((e==null?void 0:e.form)||{}).map(([a,l])=>t.jsx("style",{children:H(a,l)},a))]})}export{Ct as B,ft as C,Ft as G,Tt as R,Nt as S,vt as T,St as a,$t as b,zt as c,E as s};
