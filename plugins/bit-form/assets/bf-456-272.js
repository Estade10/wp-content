var O=Object.defineProperty;var P=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var w=(o,d,c)=>d in o?O(o,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[d]=c,f=(o,d)=>{for(var c in d||(d={}))W.call(d,c)&&w(o,c,d[c]);if(P)for(var c of P(d))B.call(d,c)&&w(o,c,d[c]);return o};import{r as p,p as G,c as A,j as e,S as H,_ as i}from"./main-281.js";import{p as q,S as J}from"./bf-240-344.js";import{t as I}from"./bf-185-296.js";import{C as b}from"./bf-231-105.js";import{T as K}from"./bf-874-123.js";import{b as Q}from"./bf-814-70.js";import{d as X,F as v,a as g,r as M,c as Y,b as Z}from"./bf-236-345.js";import"./bf-646-73.js";/* empty css          */import"./bf-310-72.js";import"./bf-977-119.js";import"./bf-44-116.js";function he({formFields:o,setIntegration:d,integrations:c,allIntegURL:$}){const[F,_]=p.useState([]),[D,R]=p.useState([]),[L,h]=p.useState({show:!1}),T=G(),[U,x]=p.useState([]),[V,j]=p.useState([]),[l,m]=p.useState({name:"CPT/Post Creation With ACF",type:"ACF",post_map:[{post_author:"logged_in_user"}],acf_map:[{}],acf_file_map:[{}]}),u=(t,s,n)=>{const a=f({},l);n?a[t]=Number(s):a[t]=s,m(a)},z=(t,s)=>{const n=f({},l);n[t]=s,A({post_type:s},"bitforms_get_custom_field").then(a=>{var N,y,C,S,k;a!=null&&a.success&&a!==void 0&&(x((N=a==null?void 0:a.data)==null?void 0:N.acfFields),j((y=a==null?void 0:a.data)==null?void 0:y.acfFile),(C=a==null?void 0:a.data)!=null&&C.acfFields&&(n.acf_map=a.data.acfFields.filter(r=>r.required).map(r=>({formField:"",acfField:r.key,required:r.required})),n.acf_map.length<1&&(n.acf_map=[{}])),(S=a==null?void 0:a.data)!=null&&S.acfFile&&(n.acf_file_map=a.data.acfFile.filter(r=>r.required).map(r=>({formField:"",acfFileUpload:r.key,required:r.required})),((k=n==null?void 0:n.acf_file_map)==null?void 0:k.length)<1&&(n.acf_file_map=[{}])),m(n))})};p.useEffect(()=>{A({},"bitforms_get_post_type").then(s=>{var n,a;s!=null&&s.success&&(_(Object.values((n=s==null?void 0:s.data)==null?void 0:n.post_types)),R((a=s==null?void 0:s.data)==null?void 0:a.users))});const t=f({},l);t.post_map=q.filter(s=>s.required).map(s=>({formField:"",postField:s.key,required:s.required})),m(t)},[]);const E=()=>{if(!l.post_type){h({show:!0,msg:i("Post Type cann't be empty")});return}if(!l.post_status){h({show:!0,msg:i("Post Status cann't be empty")});return}if(!Y(l)){h({show:!0,msg:i("Please map mandatory fields")});return}if(!Z(l)){h({show:!0,msg:i("Please map mandatory fields")});return}Q(c,d,$,l,T)};return e.jsxs("div",{style:{width:900},children:[e.jsx(H,{snack:L,setSnackbar:h}),e.jsx(K,{title:I.acf.title,youTubeLink:I.acf.link}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name ")})}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>u(t.target.name,t.target.value),name:"name",value:l.name,type:"text",placeholder:i("Integration Name...")}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:i("Post Type")}),e.jsx(b,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["Select one of the defined WordPress post types Or custom post types for the post.",e.jsx("br",{})]})})]}),e.jsxs("div",{children:[e.jsxs("select",{name:"post_type",defaultValue:"0",onChange:t=>z(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,value:"0",children:"Select Post Type"}),F.map((t,s)=>e.jsx("option",{value:t==null?void 0:t.name,children:t==null?void 0:t.label},`acf-${s*2}`))]}),e.jsx("button",{onClick:()=>X(F,_),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Post Types")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("b",{children:i("Post Status")}),e.jsx(b,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["Select the status for the post. If published status is selected and the post date is in the future, it will automatically be changed to scheduled",e.jsx("br",{})]})})]}),e.jsxs("select",{name:"post_status",defaultValue:"0",onChange:t=>u(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,value:"0",children:i("Select Status")}),e.jsx("option",{value:"publish",children:"Publish"}),e.jsx("option",{value:"draft",children:"Draft"}),e.jsx("option",{value:"auto-draft",children:"Auto-Draft"}),e.jsx("option",{value:"private",children:"Private"}),e.jsx("option",{value:"pending",children:"Pending"})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:i("Author")}),e.jsx(b,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["Select the user to be assigned to the post.",e.jsx("br",{})]})})]}),e.jsx("div",{children:e.jsxs("select",{name:"post_author",defaultValue:"0",onChange:t=>u(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,value:"0",children:i("Select Author")}),e.jsx("option",{value:"logged_in_user",children:"Logged In User"}),D.map((t,s)=>e.jsx("option",{value:t.ID,children:t.display_name},`acf-${s*2}`))]})}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Comment Status")})}),e.jsxs("select",{name:"comment_status",defaultValue:"0",onChange:t=>u(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,value:"0",children:i("Select Status")}),e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"closed",children:"Closed"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:i("Field Mapping")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Post Fields")})})]})]}),l.post_map.map((t,s)=>e.jsx(v,{i:s,type:"post",field:t,formFields:o,dataConf:l,setDataConf:m,customFields:q},`analytics-m-${s+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>g("post_map",l.post_map.length,l,m),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("div",{children:e.jsxs("p",{className:"p-1 f-m",children:[e.jsx("strong",{children:"Note"})," ",": All your taxonomies will be mapped automatically from your form fields."]})}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mt-3 mb-1",children:[e.jsx("b",{children:i("ACF fields Mapping")}),e.jsx("button",{onClick:()=>M(l,x,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh ACF fields")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("ACF Fields")})})]})]}),l.acf_map.map((t,s)=>e.jsx(v,{i:s,type:"acf",field:t,formFields:o,dataConf:l,setDataConf:m,customFields:U,fieldType:"field"},`analytics-m-${s+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>g("acf_map",l.acf_map.length,l,m),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mt-3 mb-1",children:[e.jsx("b",{children:i("ACF File Upload Fields Map")}),e.jsx("button",{onClick:()=>M(l,x,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh ACF fields")}'`},type:"button",children:"↻"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-1",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("ACF Fields")})})]})]}),l.acf_file_map.map((t,s)=>e.jsx(v,{i:s,type:"acfFile",field:t,formFields:o,dataConf:l,setDataConf:m,customFields:V,fieldType:"file"},`analytics-m-${s+9}`)),e.jsx("div",{className:"txt-center  mt-2",style:{marginRight:85},children:e.jsx("button",{onClick:()=>g("acf_file_map",l.acf_file_map.length,l,m),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx(J,{onClick:()=>E()})]})}export{he as default};
