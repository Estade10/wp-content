"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[8452],{81625:(t,e,a)=>{a.d(e,{I:()=>n});var n=[{key:"post_title",name:"Post Title",required:!0},{key:"post_name",name:"Post Name"},{key:"post_content",name:"Post Content"},{key:"post_excerpt",name:"Post Excerpt"},{key:"_thumbnail_id",name:"Featured Image"}]},96377:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(665),r=a(44084),o=a(84448),i=a(73305),l=a(2699),s=a(37029),p=a(8527),d=a(4637);function c(t){var e=t.i,a=t.type,c=t.formFields,m=t.field,u=t.dataConf,f=t.setDataConf,b=t.customFields,y=t.fieldType,h=(0,r.sJ)(o.hi).isPro,x={metabox:{propName:"metabox_map",fldName:"metaboxField"},post:{propName:"post_map",fldName:"postField"},metaboxFile:{propName:"metabox_file_map",fldName:"metaboxFileUpload"}}[a],v=x.propName,k=x.fldName,g=!!b.find((function(t){return t.key===m[k]&&t.required}));return(0,d.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,d.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,d.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:m.formField||"",onChange:function(t){return(0,p.wX)(v,t,e,u,f)},children:[(0,d.jsx)("option",{value:"",children:(0,i.__)("Select Field","bitform")}),(0,d.jsx)("optgroup",{label:"Form Fields",children:"post"===a?(0,d.jsxs)(d.Fragment,{children:[c.map((function(t){return"file-up"!==t.type&&(0,d.jsx)("option",{value:t.key,children:t.name},"ff-zhcrm-"+t.key)})),(0,d.jsx)("option",{value:"custom",children:(0,i.__)("Custom...","bitform")})]}):(0,d.jsxs)(d.Fragment,{children:["file"===y?c.map((function(t){return"file-up"===t.type&&(0,d.jsx)("option",{value:t.key,children:t.name},"ff-zhcrm-"+t.key)})):c.map((function(t){return"file-up"!==t.type&&(0,d.jsx)("option",{value:t.key,children:t.name},"ff-zhcrm-"+t.key)})),"file"!==y&&(0,d.jsx)("option",{value:"custom",children:(0,i.__)("Custom...","bitform")})]})}),"file"!==y&&(0,d.jsx)("optgroup",{label:"General Smart Codes "+(h?"":"(PRO)"),children:h&&(null==l.C?void 0:l.C.map((function(t){return(0,d.jsx)("option",{value:t.name,children:t.label},"ff-rm-"+t.name)})))})]}),"custom"===m.formField&&(0,d.jsx)(s.Z,{onChange:function(t){return function(t,e){var a=(0,n.Z)({},u);a[v][e].customValue=t.target.value,f(a)}(t,e)},label:(0,i.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:m.customValue,placeholder:(0,i.__)("Custom Value","bitform")}),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("select",{className:"btcd-paper-inp",name:k,value:m[k]||"",onChange:function(t){return(0,p.wX)(v,t,e,u,f)},disabled:g,children:[(0,d.jsx)("option",{value:"",children:(0,i.__)("Select Field","bitform")}),null==b?void 0:b.map((function(t){return(0,d.jsx)("option",{value:t.key,children:""+t.name},Math.random()+"-1")}))]})})]}),!g&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:function(){return(0,p.FP)(v,e,u,f)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,d.jsx)("button",{onClick:function(){return(0,p.T5)(v,e,u,f)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,d.jsx)("span",{className:"btcd-icn icn-trash-2"})})]})]})}},8527:(t,e,a)=>{a.d(e,{FP:()=>l,Ud:()=>s,T5:()=>p,wX:()=>d,aJ:()=>c,gm:()=>m,ok:()=>u});var n=a(665),r=a(17607),o=a(73305),i=a(77111),l=function(t,e,a,r){var o=(0,n.Z)({},a);o[t].splice(e,0,{}),r((0,n.Z)({},o))},s=function(t,e,a){var n=(0,i.Z)({post_type:null==t?void 0:t.post_type},"bitforms_get_metabox_fields").then((function(t){var n,r,o,i;void 0!==t&&t.success&&(null!=t&&null!=(o=t.data)&&o.metaboxFields&&e(t.data.metaboxFields),null!=t&&null!=(i=t.data)&&i.metaboxFile&&a(t.data.metaboxFile));return 0!==(null==t||null==(n=t.data)?void 0:n.metaboxFields.length)||0!==(null==t||null==(r=t.data)?void 0:r.metaboxFile.length)?"Successfully refresh MetaBox Fields.":"MetaBox Fields not found"}));r.ZP.promise(n,{success:function(t){return t},error:(0,o.__)("Error Occured","bitform"),loading:(0,o.__)("Loading MetaBox Fields...")})},p=function(t,e,a,r){var o=(0,n.Z)({},a);o[t].length>1&&o[t].splice(e,1),r((0,n.Z)({},o))},d=function(t,e,a,r,o){var i=(0,n.Z)({},r);i[t][a][e.target.name]=e.target.value,o((0,n.Z)({},i))},c=function(t){return!((null!=t&&t.post_map?t.post_map.filter((function(t){return!t.formField&&t.postField&&t.required})):[]).length>0)},m=function(t){return!((null!=t&&t.metabox_map?t.metabox_map.filter((function(t){return!t.formField&&t.acfField&&t.required})):[]).length>0)},u=function(t,e){var a=(0,i.Z)({},"bitforms_get_post_type").then((function(a){if(a&&a.success){var r,o,i,l=(0,n.Z)({},t);if(null!=a&&null!=(r=a.data)&&r.post_types)l=Object.values(null==a||null==(i=a.data)?void 0:i.post_types),e(l);return 0!==(null==a||null==(o=a.data)?void 0:o.post_types.length)?"Successfully refresh Post Types.":" Post Types not found"}}));r.ZP.promise(a,{success:function(t){return t},error:(0,o.__)("Error Occured","bitform"),loading:(0,o.__)("Loading Post Types...")})}},63838:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(5797),r=a(11946),o=a(4637);function i(t){var e=t.size,a=t.stroke,n=void 0===a?2:a;return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 30 30",children:[(0,o.jsx)("ellipse",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:n,cx:"15",cy:"15",rx:"12.75",ry:"12.85"}),(0,o.jsx)("path",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:n,strokeLinecap:"round",d:"M11.3,10.73v0a3.58,3.58,0,0,1,1-2.53l.25-.25a3.56,3.56,0,0,1,5,0h0a3.56,3.56,0,0,1,0,5.05l-1.43,1.43a3.85,3.85,0,0,0-1.13,2.75v2.4"}),(0,o.jsx)("line",{fill:"none",stroke:"currentColor",strokeMiterlimit:"10",strokeWidth:n,strokeLinecap:"round",x1:"15",y1:"23.12",x2:"15",y2:"23.12"})]})}a(3940),a(79307),a(22003),a(50107);function l(t){var e=t.className,a=t.children,l=t.width,s=void 0===l?"auto":l,p=t.icnSize,d=void 0===p?20:p;return(0,o.jsx)(n.ZP,{animateFill:!0,plugins:[r.C8],duration:150,theme:"material",animation:"shift-away",interactive:!0,maxWidth:s,content:a,children:(0,o.jsx)("div",{role:"button",tabIndex:"0",className:"popper-icn cp d-in-b ig-c cooltip-icn "+e,children:(0,o.jsx)(i,{size:d})})})}},73901:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(52676),r=a.n(n)()((function(t){return t[1]}));r.push([t.id,".tippy-box[data-animation=shift-away][data-state=hidden]{opacity:0}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=top]{transform:translateY(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=bottom]{transform:translateY(-10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=left]{transform:translateX(10px)}.tippy-box[data-animation=shift-away][data-state=hidden][data-placement^=right]{transform:translateX(-10px)}",""]);const o=r},10929:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(52676),r=a.n(n)()((function(t){return t[1]}));r.push([t.id,'.tippy-box[data-placement^=top]>.tippy-backdrop{transform-origin:0 25%;border-radius:40% 40% 0 0}.tippy-box[data-placement^=top]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-55%)}.tippy-box[data-placement^=top]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-50%,-45%)}.tippy-box[data-placement^=bottom]>.tippy-backdrop{transform-origin:0 -50%;border-radius:0 0 30% 30%}.tippy-box[data-placement^=bottom]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-45%)}.tippy-box[data-placement^=bottom]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-50%)}.tippy-box[data-placement^=left]>.tippy-backdrop{transform-origin:50% 0;border-radius:50% 0 0 50%}.tippy-box[data-placement^=left]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-50%)}.tippy-box[data-placement^=left]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-75%,-50%)}.tippy-box[data-placement^=right]>.tippy-backdrop{transform-origin:-50% 0;border-radius:0 50% 50% 0}.tippy-box[data-placement^=right]>.tippy-backdrop[data-state=visible]{transform:scale(1) translate(-50%,-50%)}.tippy-box[data-placement^=right]>.tippy-backdrop[data-state=hidden]{transform:scale(.2) translate(-25%,-50%)}.tippy-box[data-animatefill]{background-color:transparent!important}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 32px);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop[data-state=hidden]{opacity:0}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}',""]);const o=r},67726:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(52676),r=a.n(n)()((function(t){return t[1]}));r.push([t.id,".tippy-box[data-theme~=material]{background-color:#505355;font-weight:600}.tippy-box[data-theme~=material][data-placement^=top]>.tippy-arrow:before{border-top-color:#505355}.tippy-box[data-theme~=material][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#505355}.tippy-box[data-theme~=material][data-placement^=left]>.tippy-arrow:before{border-left-color:#505355}.tippy-box[data-theme~=material][data-placement^=right]>.tippy-arrow:before{border-right-color:#505355}.tippy-box[data-theme~=material]>.tippy-backdrop{background-color:#505355}.tippy-box[data-theme~=material]>.tippy-svg-arrow{fill:#505355}",""]);const o=r},50107:(t,e,a)=>{var n=a(25309),r=a.n(n),o=a(4403),i=a.n(o),l=a(37687),s=a.n(l),p=a(35864),d=a.n(p),c=a(1531),m=a.n(c),u=a(26225),f=a.n(u),b=a(73901),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=m();r()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals},22003:(t,e,a)=>{var n=a(25309),r=a.n(n),o=a(4403),i=a.n(o),l=a(37687),s=a.n(l),p=a(35864),d=a.n(p),c=a(1531),m=a.n(c),u=a(26225),f=a.n(u),b=a(10929),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=m();r()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals},79307:(t,e,a)=>{var n=a(25309),r=a.n(n),o=a(4403),i=a.n(o),l=a(37687),s=a.n(l),p=a(35864),d=a.n(p),c=a(1531),m=a.n(c),u=a(26225),f=a.n(u),b=a(67726),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=m();r()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals}}]);