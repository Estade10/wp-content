"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[3216],{79694:(e,a,t)=>{t.d(a,{Mm:()=>s,FP:()=>i,T5:()=>d,wX:()=>r,mG:()=>n,D2:()=>u,LX:()=>f,Ye:()=>p});var l=t(665),s=function(e,a,t,s,i,d,r){var n=[].concat(e);if(r)n[d]=(0,l.Z)({},e[d],s),n.push({editItegration:!0}),a([].concat(n)),i.push(t);else{var u=[].concat(n);u.push(s),u.push({newItegration:!0}),a(u),i.push(t)}},i=function(e,a,t,s,i){var d=(0,l.Z)({},a);i?s?d.relatedlists[i-1].upload_field_map.splice(e,0,{}):d.relatedlists[i-1].field_map.splice(e,0,{}):s?d.upload_field_map.splice(e,0,{}):d.field_map.splice(e,0,{}),t((0,l.Z)({},d))},d=function(e,a,t,s,i){var d=(0,l.Z)({},a);i?s?d.relatedlists[i-1].upload_field_map.length>1&&d.relatedlists[i-1].upload_field_map.splice(e,1):d.relatedlists[i-1].field_map.length>1&&d.relatedlists[i-1].field_map.splice(e,1):s?d.upload_field_map.length>1&&d.upload_field_map.splice(e,1):d.field_map.length>1&&d.field_map.splice(e,1),t((0,l.Z)({},d))},r=function(e,a,t,s,i,d){var r=(0,l.Z)({},t);d?i?r.relatedlists[d-1].upload_field_map[a][e.target.name]=e.target.value:r.relatedlists[d-1].field_map[a][e.target.name]=e.target.value:i?r.upload_field_map[a][e.target.name]=e.target.value:r.field_map[a][e.target.name]=e.target.value,"custom"===e.target.value&&(d?r.relatedlists[d-1].field_map[a].customValue="":r.field_map[a].customValue=""),s((0,l.Z)({},r))},n=function(e,a,t,s,i){var d=(0,l.Z)({},t);i?d.relatedlists[i-1].field_map[a].customValue=e.target.value:d.field_map[a].customValue=e.target.value,s((0,l.Z)({},d))},u=function(e,a,t,s,i,d){var r=(0,l.Z)({},t);r.address_field[a][e.target.name]=e.target.value,s((0,l.Z)({},r))},f=function(e,a,t){var s=(0,l.Z)({},a);s.address_field||(s.address_field=[]),s.address_field.push({}),t((0,l.Z)({},s))},p=function(e,a,t){var s=(0,l.Z)({},a);s.address_field&&s.address_field.length>1&&s.address_field.splice(e,1),t((0,l.Z)({},s))}},53216:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var l=t(665),s=t(59496),i=t(87230),d=t(73305),r=t(65194),n=t(8940),u=t(79694),f=t(1544),p=t(66392),o=t(4637);const m=function(e){var a=e.formFields,t=e.setIntegration,m=e.integrations,c=e.allIntegURL,_=(0,i.k6)(),g=(0,i.UO)(),v=g.id,h=g.formID,Z=(0,s.useState)((0,l.Z)({},m[v])),b=Z[0],x=Z[1],j=(0,s.useState)(!1),I=j[0],k=j[1],w=(0,s.useState)({show:!1}),S=w[0],C=w[1],N=(0,s.useState)({templateId:"",RedirectionUrl:""}),L=N[0],V=N[1];return(0,o.jsxs)("div",{style:{width:900},children:[(0,o.jsx)(r.Z,{snack:S,setSnackbar:C}),(0,o.jsxs)("div",{className:"flx mt-3",children:[(0,o.jsx)("b",{className:"wdt-200 d-in-b",children:(0,d.__)("Integration Name:","bitform")}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6",onChange:function(e){return(0,f.Rx)(e,b,x)},name:"name",value:b.name,type:"text",placeholder:(0,d.__)("Integration Name...","bitform")})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(p.Z,{formID:h,formFields:a,sendinBlueConf:b,setSendinBlueConf:x,isLoading:I,setisLoading:k,setSnackbar:C,error:L,setError:V}),(0,o.jsx)(n.Z,{edit:!0,saveConfig:function(){return(0,u.Mm)(m,t,c,b,_,v,1)},disabled:""===b.listId||b.field_map.length<1}),(0,o.jsx)("br",{})]})}}}]);