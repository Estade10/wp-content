var O=Object.defineProperty;var S=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var $=(l,c,a)=>c in l?O(l,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[c]=a,d=(l,c)=>{for(var a in c||(c={}))U.call(c,a)&&$(l,a,c[a]);if(S)for(var a of S(c))B.call(c,a)&&$(l,a,c[a]);return l};import{r as y,j as e,T as z,_ as n,i as o,k as E,u as I,w as D,$ as H}from"./main-281.js";import{u as A}from"./bf-607-113.js";import{S as _}from"./bf-977-119.js";import{d as J}from"./bf-814-70.js";/* empty css          */import{f as P,g as G}from"./bf-426-365.js";import{T as K}from"./bf-976-308.js";import{M as k}from"./bf-44-116.js";function Q({groundhoggConf:l,setGroundhoggConf:c,formFields:a}){var N,w,i,x;const[s,m]=y.useState(!1),[p,u]=y.useState({show:!1,action:()=>{}}),F=(r,h)=>{var V;const T=d({},l);h==="tag"&&((V=r.target)!=null&&V.checked?T.actions.tags=!0:delete T.actions.tags),c(d({},T))},j=()=>{u({show:!1})},v=r=>{const h=d({},l);r?h.actions.tags=r:delete h.actions.tags,c(d({},h))},t=()=>{u({show:"tag"})},M=[{type:"group",title:"Groundhogg Tags",childs:(((N=l==null?void 0:l.default)==null?void 0:N.tags)||[]).map(({tag_name:r})=>({label:r,value:`ground-${r}`}))},{type:"group",title:"Form Fields",childs:a.map(r=>({label:r.lbl,value:r.key}))},{type:"group",title:"Special Tags",childs:(w=_)==null?void 0:w.map(r=>({label:r.label,value:r.name}))}];return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(K,{action:t,children:e.jsx(z,{checked:((i=l==null?void 0:l.actions)==null?void 0:i.tags)||!1,onChange:r=>F(r,"tag"),className:"wdt-200 mt-4 mr-2",value:"tags",title:n("Add Tags"),subTitle:n("Add Contact Tag")})}),e.jsxs(o,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:n("Ok"),show:p.show==="tag",close:j,action:j,title:n("Tags"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:n("Select tag")}),s?e.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(A,{options:M,className:"msl-wrp-options",defaultValue:(x=l.actions)==null?void 0:x.tags,onChange:r=>v(r),customValue:!0}),e.jsx("button",{onClick:()=>P(null,l,c,m),className:"icn-btn sh-sm ml-2 mr-4 tooltip",style:{"--tooltip-txt":`'${n("Refresh Groundhogg Tags")}'`},type:"button",disabled:s,children:"↻"})]})]})]})}const W=(l,c,a)=>{const s=d({},c);s.field_map.splice(l,0,{}),a(d({},s))},X=(l,c,a)=>{const s=d({},c);s.field_map.length>1&&s.field_map.splice(l,1),a(d({},s))},L=(l,c,a)=>{const s=d({},c);s.field_map_meta.splice(l,0,{}),a(d({},s))},Y=(l,c,a)=>{const s=d({},c);s.field_map_meta.length>1&&s.field_map_meta.splice(l,1),a(d({},s))},R=(l,c,a,s)=>{const m=d({},a);m.field_map[c][l.target.name]=l.target.value,s(d({},m))},q=(l,c,a,s)=>{const m=d({},a);m.field_map_meta[c][l.target.name]=l.target.value,s(d({},m))},Z=(l,c,a,s)=>{const m=d({},a);m.field_map[c].customValue=l.target.value,s(d({},m))},f=(l,c,a,s)=>{const m=d({},a);m.field_map_meta[c].customMetaFormValue=l.target.value,s(d({},m))},C=(l,c,a,s)=>{const m=d({},a);m.field_map_meta[c].customMetaGroundValue=l.target.value,s(d({},m))};function g({i:l,formFields:c,field:a,groundhoggConf:s,setGroundhoggConf:m}){var v;y.useEffect(()=>{var t;if(((t=s==null?void 0:s.field_map)==null?void 0:t.length)===1&&a.GroundhoggMapField===""){const b=d({},s),M=G(b);b.field_map=M,m(b)}},[]);const p=(s==null?void 0:s.contactsFields.filter(t=>t.required===!0))||[],u=(s==null?void 0:s.contactsFields.filter(t=>t.required===!1))||[],F=I(H),{isPro:j}=F;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:t=>R(t,l,s,m),children:[e.jsx("option",{value:"",children:n("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:c.map(t=>t.type!=="file-up"&&e.jsx("option",{value:t.key,children:t.name},`ff-zhcrm-${t.key}`))}),e.jsx("option",{value:"custom",children:n("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${j?"":"(PRO)"}`,children:j&&((v=_)==null?void 0:v.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-gh-${t.name}`)))})]}),a.formField==="custom"&&e.jsx(k,{onChange:t=>Z(t,l,s,m),label:n("Custom Value"),className:"mr-2",type:"text",value:a.customValue,placeholder:n("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<p.length,name:"GroundhoggMapField",value:l<p.length?p[l].key||"":a.GroundhoggMapField||"",onChange:t=>R(t,l,s,m),children:[e.jsx("option",{value:"",children:n("Select Field")}),l<p.length?e.jsx("option",{value:p[l].key,children:p[l].label},p[l].key+l):u.map(({key:t,label:b})=>e.jsx("option",{value:t,children:b},t))]})]}),l>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>W(l,s,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>X(l,s,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"button",children:e.jsx(D,{size:"15"})})]})]})})}function ee({i:l,formFields:c,field:a,groundhoggConf:s,setGroundhoggConf:m}){var v;y.useEffect(()=>{var t;if(((t=s==null?void 0:s.field_map_meta)==null?void 0:t.length)===1&&a.GroundhoggMetaMapField===""){const b=d({},s),M=G(b);b.field_map_meta=M,m(b)}},[]);const p=(s==null?void 0:s.contactMetaFields.filter(t=>t.required===!0))||[],u=(s==null?void 0:s.contactMetaFields.filter(t=>t.required===!1))||[],F=I(H),{isPro:j}=F;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:t=>q(t,l,s,m),children:[e.jsx("option",{value:"",children:n("Select Field")}),e.jsx("optgroup",{label:"Form Fields",children:c.map(t=>t.type!=="file-up"&&e.jsx("option",{value:t.key,children:t.name},`ff-zhcrm-${t.key}`))}),e.jsx("option",{value:"custom",children:n("Custom...")}),e.jsx("optgroup",{label:`General Smart Codes ${j?"":"(PRO)"}`,children:j&&((v=_)==null?void 0:v.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-gh-${t.name}`)))})]}),a.formField==="custom"&&e.jsx(k,{onChange:t=>f(t,l,s,m),label:n("Custom Value"),className:"mr-2",type:"text",value:a.customMetaFormValue,placeholder:n("Custom Value")}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<p.length,name:"GroundhoggMetaMapField",value:l<p.length?p[l].key||"":a.GroundhoggMetaMapField||"",onChange:t=>q(t,l,s,m),children:[e.jsx("option",{value:"",children:n("Select Field")}),l<p.length?e.jsx("option",{value:p[l].key,children:p[l].label},p[l].key):u.map(({key:t,label:b})=>e.jsx("option",{value:t,children:b},t)),e.jsx("option",{value:"custom",children:n("Custom...")})]}),a.GroundhoggMetaMapField==="custom"&&e.jsx(k,{onChange:t=>C(t,l,s,m),label:n("Custom Groundhogg Value"),className:"mr-2",type:"text",value:a.customMetaGroundValue,placeholder:n("Custom Groundhogg Value")})]}),l>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>L(l,s,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Y(l,s,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function pe({formFields:l,handleInput:c,groundhoggConf:a,setGroundhoggConf:s,isLoading:m,setIsLoading:p,setSnackbar:u}){var N,w;const F=(i,x)=>{var h;const r=d({},a);x==="showMeta"&&((h=i.target)!=null&&h.checked?r.showMeta=!0:delete r.showMeta),s(d({},r))},j=i=>{const x=d({},a);i?x.addTagToUser=i:x.addTagToUser="",s(d({},x))},v=i=>{const x=d({},a);i?x.emailAddress=i:x.emailAddress="",s(d({},x))},b=[{type:"group",title:"Groundhogg Tags",childs:(((N=a==null?void 0:a.default)==null?void 0:N.tags)||[]).map(({tag_name:i})=>({label:i,value:`ground-${i}`}))},{type:"group",title:"Form Fields",childs:l.map(i=>({label:i.lbl,value:i.key}))},{type:"group",title:"Special Tags",childs:(w=_)==null?void 0:w.map(i=>({label:i.label,value:i.name}))}],M=l.filter(i=>i.typ==="email").map(i=>({label:i.lbl,value:i.key}));return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:")}),e.jsxs("select",{onChange:c,name:"mainAction",value:a.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:n("Select Actions")}),a.allActions&&a.allActions.map(({key:i,label:x})=>e.jsx("option",{value:i,children:x},i))]}),e.jsx("br",{}),e.jsx("br",{}),a.mainAction==="2"&&e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:n("Email:")}),e.jsx(A,{options:M.map(i=>({label:i.label,value:i.value})),className:"btcd-paper-drpdwn w-5",defaultValue:a.emailAddress,onChange:i=>v(i)})]}),m&&e.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),a.mainAction==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:n("Field Map")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Groundhogg Fields")})})]}),a==null?void 0:a.field_map.map((i,x)=>e.jsx(g,{i:x,field:i,groundhoggConf:a,formFields:l,setGroundhoggConf:s,setSnackbar:u},`rp-m-${x+9}`)),e.jsx("div",{className:"txt-center mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>J(a.field_map.length,a,s,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx(z,{checked:(a==null?void 0:a.showMeta)||!1,onChange:i=>F(i,"showMeta"),className:"wdt-200 mt-4 mr-2",value:"showMeta",title:n("Add Meta field")})]}),e.jsx("br",{}),a.mainAction==="1"&&a.showMeta&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:n("Groundhogg Meta Fields")})})]}),a==null?void 0:a.field_map_meta.map((i,x)=>e.jsx(ee,{i:x,field:i,groundhoggConf:a,formFields:l,setGroundhoggConf:s,setSnackbar:u},`rp-m-${x+9}`))]}),a.mainAction==="1"&&a.showMeta&&e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>L(a.field_map_meta.length,a,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.mainAction==="2"&&e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:n("All Tags:")}),e.jsx(A,{options:b,className:"btcd-paper-drpdwn w-5",defaultValue:a.addTagToUser,onChange:i=>j(i),customValue:!0}),e.jsx("button",{onClick:()=>P(null,a,s,p),className:"icn-btn sh-sm ml-2 mr-2 mt-1 tooltip",style:{"--tooltip-txt":`'${n("Refresh Groundhogg Tags")}'`,height:"35px"},type:"button",disabled:m,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),a.mainAction==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:n("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Q,{groundhoggConf:a,setGroundhoggConf:s,formFields:l})]})]})}export{pe as G};
