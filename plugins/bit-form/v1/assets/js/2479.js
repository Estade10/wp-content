"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[2479],{8940:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(73305),s=l(4637);function n(e){var t=e.step,l=e.saveConfig,n=e.edit,i=e.disabled;return n?(0,s.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,s.jsx)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:i,children:(0,a.__)("Update","bitform")})}):(0,s.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,s.jsx)("h2",{className:"ml-3",children:(0,a.__)("Successfully Integrated","bitform")}),(0,s.jsxs)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,a.__)("Finish & Save ","bitform")," ✔"]})]})}},5245:(e,t,l)=>{l.d(t,{Rx:()=>i,Ck:()=>r,vF:()=>o,G7:()=>c,$8:()=>u,Pd:()=>h});var a=l(665),s=l(73305),n=l(77111),i=function(e,t,l,s,n,i,r,o,c,u){var m=(0,a.Z)({},l);if(0===t){if(o){var f=(0,a.Z)({},c);f[e.target.name]="",u((0,a.Z)({},f))}m[e.target.name]=e.target.value}else m.relatedlists[t-1][e.target.name]=e.target.value;if("module"===e.target.name)m=d(t,m,n,s,i,r);s((0,a.Z)({},m))},r=function(e,t,l,a,s,n,i){var r,d;e&&((null==l||null==(r=l.default)||null==(d=r.relatedlists)||!d[l.module])&&u(s,l,a,n,i));t(e)},d=function(e,t,l,s,n,i){var r,d,o=(0,a.Z)({},t),c=0===e?o.module:o.relatedlists[e-1].module;return 0===e?(o.actions={},o.field_map=[{formField:"",zohoFormField:""}],o.upload_field_map=[{formField:"",zohoFormField:""}],e&&(o.relatedlists[e-1]={})):(o.relatedlists[e-1].field_map=[{formField:"",zohoFormField:""}],o.relatedlists[e-1].upload_field_map=[{formField:"",zohoFormField:""}],o.relatedlists[e-1].actions={}),null!=(r=o.default)&&null!=(d=r.moduleData)&&d[c]?0===e?(o.field_map=f(e,o),Object.keys(o.default.moduleData[c].fileUploadFields).length>0&&(o.upload_field_map=f(e,o,!0))):(o.relatedlists[e-1].field_map=f(e,o),Object.keys(o.default.moduleData[c].fileUploadFields).length>0&&(o.relatedlists[e-1].upload_field_map=f(e,o,!0))):m(e,l,o,s,n,i),o},o=function(e,t,l,i,r){i(!0);var d={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(d,"bitforms_zrecruit_refresh_modules").then((function(e){if(e&&e.success){var n=(0,a.Z)({},t);n.default||(n.default={}),e.data.modules&&(n.default.modules=e.data.modules),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},n)),r({show:!0,msg:(0,s.__)("Modules refreshed","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:(0,s.g)((0,s.__)("Modules refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):r({show:!0,msg:(0,s.__)("Modules refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},c=function(e,t,l,i,r){i(!0);var d={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(d,"bitforms_zrecruit_refresh_notetypes").then((function(e){if(e&&e.success){var n=(0,a.Z)({},t);n.default||(n.default={}),e.data.noteTypes&&(n.default.noteTypes=e.data.noteTypes),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},n)),r({show:!0,msg:(0,s.__)("Note Types refreshed","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:(0,s.g)((0,s.__)("Note Types refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):r({show:!0,msg:(0,s.__)("Note Types refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))},u=function(e,t,l,i,r){if(t.module){i(!0);var d={formID:e,module:t.module,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(d,"bitforms_zrecruit_refresh_related_lists").then((function(e){var n;if(e&&e.success){var d=(0,a.Z)({},t);e.data.related_modules&&(d.default.relatedlists||(d.default.relatedlists={}),d.default.relatedlists[d.module]=e.data.related_modules),e.data.tokenDetails&&(d.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},d)),r({show:!0,msg:(0,s.__)("RelatedLists refreshed","bitform")})}else null!=e&&null!=(n=e.data)&&n.data||!e.success&&"string"===typeof e.data?r({show:!0,msg:(0,s.g)((0,s.__)("RelatedLists refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):r({show:!0,msg:(0,s.__)("RelatedLists refresh failed. please try again","bitform")});i(!1)})).catch((function(){return i(!1)}))}},m=function(e,t,l,i,r,d){var o=0===e?l.module:l.relatedlists[e-1].module;if(o){r(!0);var c={formID:t,module:o,dataCenter:l.dataCenter,clientId:l.clientId,clientSecret:l.clientSecret,tokenDetails:l.tokenDetails};(0,n.Z)(c,"bitforms_zrecruit_get_fields").then((function(t){if(t&&t.success){var n=(0,a.Z)({},l);t.data.fieldDetails&&(n.default.moduleData||(n.default.moduleData={}),n.default.moduleData[o]=t.data.fieldDetails,0===e?(n.field_map=f(e,n),Object.keys(n.default.moduleData[o].fileUploadFields).length>0&&(n.upload_field_map=f(e,n,!0))):(n.relatedlists[e-1].field_map=f(e,n),Object.keys(n.default.moduleData[o].fileUploadFields).length>0&&(n.relatedlists[e-1].upload_field_map=f(e,n,!0)))),t.data.tokenDetails&&(n.tokenDetails=t.data.tokenDetails),i((0,a.Z)({},n))}else d({show:!0,msg:(0,s.__)("Fields refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))}},f=function(e,t,l){var a,s,n=0===e?t.module:t.relatedlists[e-1].module;return l?t.default.moduleData[n].requiredFileUploadFields.length>0?null==(s=t.default.moduleData[n].requiredFileUploadFields)?void 0:s.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]:t.default.moduleData[n].required.length>0?null==(a=t.default.moduleData[n].required)?void 0:a.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]},h=function(e){var t=null!=e&&e.field_map?e.field_map.filter((function(t){var l,a,s;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(l=e.default)||null==(a=l.moduleData)||null==(s=a[e.module])?void 0:s.required.indexOf(t.zohoFormField))})):[],l=null!=e&&e.upload_field_map?e.upload_field_map.filter((function(t){var l,a,s;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(l=e.default)||null==(a=l.moduleData)||null==(s=a[e.module])?void 0:s.requiredFileUploadFields.indexOf(t.zohoFormField))})):[],a=e.relatedlists.map((function(e){return e.field_map.filter((function(e){return!e.formField&&e.zohoFormField}))})),s=e.relatedlists.map((function(e){return e.upload_field_map.filter((function(e){return!e.formField&&e.zohoFormField}))}));return!(t.length>0||l.length>0||a.some((function(e){return e.length}))||s.some((function(e){return e.length})))}},83055:(e,t,l)=>{l.d(t,{Z:()=>N});var a=l(665),s=l(44738),n=l(73305),i=l(59496),r=l(67860),d=l(53132),o=l(83524),c=l(2598),u=l(5245),m=l(4637);function f(e){var t,l,s,d,f,h,p,b,x,_,j,v,F,g,N,k,y,C,w=e.tab,D=e.formID,Z=e.formFields,R=e.recruitConf,O=e.setRecruitConf,z=e.setSnackbar,I=(0,i.useState)(!1),S=I[0],T=I[1],U=(0,i.useState)(!1),M=U[0],L=U[1],q=(0,i.useState)(!1),A=q[0],P=q[1],G=function(e,t){var l=(0,a.Z)({},R);0===w?("approval"===t&&(e.target.checked?l.actions.approval=!0:delete l.actions.approval),"workflow"===t&&(e.target.checked?l.actions.workflow=!0:delete l.actions.workflow),"upsert"===t&&(e.target.checked?l.actions.upsert=!0:delete l.actions.upsert),"recordOwner"===t&&(""!==e?l.actions.recordOwner=e:delete l.actions.recordOwner)):("approval"===t&&(e.target.checked?l.relatedlists[w-1].actions.approval=!0:delete l.relatedlists[w-1].actions.approval),"workflow"===t&&(e.target.checked?l.relatedlists[w-1].actions.workflow=!0:delete l.relatedlists[w-1].actions.workflow),"recordOwner"===t&&(""!==e?l.relatedlists[w-1].actions.recordOwner=e:delete l.relatedlists[w-1].actions.recordOwner)),O((0,a.Z)({},l))},E=function(e,t){var l=(0,a.Z)({},R);l.actions.note||(l.actions.note={}),"field"===e?(l.actions.note.content||(l.actions.note.content=""),l.actions.note.content+=t):t?l.actions.note[e]=t:delete l.actions.note[e],O((0,a.Z)({},l))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"d-flx flx-wrp",children:["Notes"!==(null==R||null==(t=R.relatedlists)||null==(l=t[w-1])?void 0:l.module)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Z,{onChange:function(e){return G(e,"workflow")},checked:0===w?"workflow"in R.actions:"workflow"in(null==(s=R.relatedlists)||null==(d=s[w-1])?void 0:d.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:(0,n.__)("Workflow","bitform"),subTitle:(0,n.__)("Trigger workflows in Zoho Recruit.","bitform")}),(0,m.jsx)(c.Z,{onChange:function(e){return G(e,"approval")},checked:0===w?"approval"in R.actions:"approval"in(null==(f=R.relatedlists)||null==(h=f[w-1])?void 0:h.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:(0,n.__)("Approval","bitform"),subTitle:(0,n.__)("Send entries to approval list in Zoho Recruit","bitform")}),0===w&&!["Calls","Events","Tasks"].includes(R.module)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Z,{onChange:function(e){return G(e,"upsert")},checked:"upsert"in R.actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:(0,n.__)("Upsert Record","bitform"),subTitle:(0,n.__)("A record gets updated if the email already exists, else a new record will be created.","bitform")}),(0,m.jsx)(c.Z,{onChange:function(){R.default.noteTypes||(0,u.G7)(D,R,O,P,z),L(!0)},checked:"note"in R.actions&&"type"in(null==(p=R.actions)?void 0:p.note),className:"wdt-200 mt-4 mr-2",value:"notes",title:(0,n.__)("Add a Note","bitform"),subTitle:(0,n.__)("Add a note from bitform to pushed to Zoho Recruit.","bitform")})]})]}),(0,m.jsx)(c.Z,{onChange:function(){return T(!0)},checked:0===w?"recordOwner"in R.actions:"recordOwner"in(null==(b=R.relatedlists)||null==(x=b[w-1])?void 0:x.actions),className:"wdt-200 mt-4 mr-2",value:"recordOwner",title:(0,n.__)("Record Owner","bitform"),subTitle:(0,n.__)("Set owner of current record","bitform")})]}),(0,m.jsxs)(o.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:S,close:function(){return T(!1)},action:function(){return T(!1)},title:(0,n.__)("Record Owner","bitform"),children:[(0,m.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),(0,m.jsx)("div",{className:"mt-2",children:(0,n.__)("Owner ID","bitform")}),(0,m.jsx)("div",{className:"flx flx-between",children:(0,m.jsx)("input",{onChange:function(e){return G(e.target.value,"recordOwner")},className:"btcd-paper-inp mt-2",type:"number",min:"0",value:0===w?(null==R||null==(_=R.actions)?void 0:_.recordOwner)||"":(null==(j=R.relatedlists)||null==(v=j[w-1])||null==(F=v.actions)?void 0:F.recordOwner)||"",placeholder:(0,n.__)("Enter Owner ID","bitform")})})]}),0===w&&(0,m.jsxs)(o.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:M,close:function(){return L(!1)},action:function(){return L(!1)},title:(0,n.__)("Notes","bitform"),children:[(0,m.jsx)("div",{className:"btcd-hr mt-2 mb-2"}),A?(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flx",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp",onChange:function(e){return E("type",e.target.value)},value:(null==(g=R.actions)||null==(N=g.note)?void 0:N.type)||"",children:[(0,m.jsx)("option",{value:"",children:(0,n.__)("Select Note Type","bitform")}),(null==R||null==(k=R.default)?void 0:k.noteTypes)&&Object.values(R.default.noteTypes).map((function(e){return(0,m.jsx)("option",{value:e.noteTypeId+"__"+e.noteTypeName,children:e.noteTypeName},e.noteTypeId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,u.G7)(D,R,O,P,z)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Note Types"'},type:"button",disabled:A,children:"↻"})]}),(0,m.jsx)("div",{className:"mt-2 mb-1",children:(0,n.__)("Note Content","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp w-5",onChange:function(e){return E("field",e.target.value)},children:[(0,m.jsx)("option",{value:"",children:(0,n.__)("Field","bitform")}),Z.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:"${"+e.key+"}",children:e.name},"ff-zhcrm-"+e.key)}))]}),(0,m.jsx)("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:function(e){return E("content",e.target.value)},value:(null==(y=R.actions)||null==(C=y.note)?void 0:C.content)||""})]})]})]})}var h=l(44084),p=l(84448),b=l(94557),x=l(2699),_=l(37029);function j(e){var t,l,a,s,i,r,o,c,u,f,j,v,F,g=e.i,N=e.uploadFields,k=e.formFields,y=e.field,C=e.recruitConf,w=e.setRecruitConf,D=e.tab,Z=0===D?C.module:null==(t=C.relatedlists)||null==(l=t[D-1])?void 0:l.module;N?o=""===y.zohoFormField||-1===(null==(c=C.default.moduleData)||null==(u=c[Z])||null==(f=u.requiredFileUploadFields)?void 0:f.indexOf(y.zohoFormField)):o=""===y.zohoFormField||-1===(null==(j=C.default.moduleData)||null==(v=j[Z])||null==(F=v.required)?void 0:F.indexOf(y.zohoFormField));var R=(0,h.sJ)(p.hi).isPro;return(0,m.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,m.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:y.formField||"",onChange:function(e){return(0,d.wX)(e,g,C,w,N,D)},children:[(0,m.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),(0,m.jsx)("optgroup",{label:"Form Fields",children:N?k.map((function(e){return"file-up"===e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)})):k.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),!N&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("option",{value:"custom",children:(0,n.__)("Custom...","bitform")}),(0,m.jsx)("optgroup",{label:"General Smart Codes "+(R?"":"(PRO)"),children:R&&(null==x.C?void 0:x.C.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]})]}),"custom"===y.formField&&(0,m.jsx)(_.Z,{onChange:function(e){return(0,d.mG)(e,g,C,w,D)},label:(0,n.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:y.customValue,placeholder:(0,n.__)("Custom Value","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp",disabled:!o,name:"zohoFormField",value:y.zohoFormField||"",onChange:function(e){return(0,d.wX)(e,g,C,w,N,D)},children:[(0,m.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),N?(null==(a=C.default.moduleData)||null==(s=a[Z])?void 0:s.fileUploadFields)&&Object.keys(C.default.moduleData[Z].fileUploadFields).map((function(e){return o?"false"===C.default.moduleData[Z].fileUploadFields[e].required&&(0,m.jsx)("option",{value:e,children:C.default.moduleData[Z].fileUploadFields[e].display_label},e):(0,m.jsx)("option",{value:e,children:C.default.moduleData[Z].fileUploadFields[e].display_label},e)})):(null==(i=C.default.moduleData)||null==(r=i[Z])?void 0:r.fields)&&Object.keys(C.default.moduleData[Z].fields).map((function(e){return o?"false"===C.default.moduleData[Z].fields[e].required&&(0,m.jsx)("option",{value:e,children:C.default.moduleData[Z].fields[e].display_label},e):(0,m.jsx)("option",{value:e,children:C.default.moduleData[Z].fields[e].display_label},e)}))]})]}),(0,m.jsx)("button",{onClick:function(){return(0,d.FP)(g,C,w,N,D)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),o&&(0,m.jsx)("button",{onClick:function(){return(0,d.T5)(g,C,w,N,D)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,m.jsx)(b.Z,{})})]})}function v(e){var t,l,a,s,o,c,h=e.tab,p=e.settab,b=e.formID,x=e.formFields,_=e.recruitConf,v=e.setRecruitConf,F=e.isLoading,g=e.setSnackbar;return(0,i.useEffect)((function(){(0,u.Ck)(0,p)}),[]),(0,m.jsxs)(m.Fragment,{children:[F&&(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(t=_.default)||null==(l=t.moduleData)||null==(a=l[_.module])?void 0:a.fields)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Fields","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Zoho Fields","bitform")})})]}),_.field_map.map((function(e,t){return(0,m.jsx)(j,{i:t,field:e,recruitConf:_,formFields:x,setRecruitConf:v,tab:h,setSnackbar:g},"recruit-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,d.FP)(_.field_map.length,_,v,!1,h)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),0!==Object.keys(null==(s=_.default)||null==(o=s.moduleData)||null==(c=o[_.module])?void 0:c.fileUploadFields).length&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Attachments","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Zoho Fields","bitform")})})]}),_.upload_field_map.map((function(e,t){return(0,m.jsx)(j,{uploadFields:1,i:t,field:e,recruitConf:_,formFields:x,setRecruitConf:v,tab:h,setSnackbar:g},"crm-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,d.FP)(_.upload_field_map.length,_,v,!0,h)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,n.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{tab:h,formID:b,formFields:x,recruitConf:_,setRecruitConf:v,setSnackbar:g})]})]})}function F(e){var t,l,a,s,o,c,h,p,b,x,_,v=e.indx,F=e.tab,g=e.settab,N=e.formID,k=e.formFields,y=e.recruitConf,C=e.setRecruitConf,w=e.handleInput,D=e.isLoading,Z=e.setisLoading,R=e.setSnackbar;return(0,i.useEffect)((function(){(0,u.Ck)(v+1,g,y,C,N,Z,R)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:"Related List:"}),(0,m.jsxs)("select",{onChange:w,name:"module",value:null==y||null==(t=y.relatedlists)||null==(l=t[F-1])?void 0:l.module,className:"btcd-paper-inp w-7",disabled:!y.module,children:[(0,m.jsx)("option",{value:"",children:(0,n.__)("Select Related Module","bitform")}),(null==y||null==(a=y.default.relatedlists)?void 0:a[y.module])&&Object.values(y.default.relatedlists[y.module]).map((function(e){return(0,m.jsx)("option",{value:e.aMod,children:e.pl},e.aMod)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,u.$8)(N,y,C,Z,R)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Related Lists"'},type:"button",disabled:D,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),D&&(0,m.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==(s=y.default)||null==(o=s.moduleData)||null==(c=o[null==(h=y.relatedlists)||null==(p=h[F-1])?void 0:p.module])?void 0:c.fields)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Fields","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Zoho Fields","bitform")})})]}),y.relatedlists[F-1].field_map.map((function(e,t){return(0,m.jsx)(j,{i:t,field:e,recruitConf:y,formFields:k,setRecruitConf:C,tab:F},"crm-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,d.FP)(y.relatedlists[F-1].field_map.length,y,C,!1,F)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),0!==Object.keys(null==(b=y.default)||null==(x=b.moduleData)||null==(_=x[y.relatedlists[F-1].module])?void 0:_.fileUploadFields).length&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Attachments","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,n.__)("Zoho Fields","bitform")})})]}),y.relatedlists[F-1].upload_field_map.map((function(e,t){return(0,m.jsx)(j,{uploadFields:1,i:t,field:e,recruitConf:y,formFields:k,setRecruitConf:C,tab:F},"crm-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,d.FP)(y.relatedlists[F-1].upload_field_map.length,y,C,!0,F)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,n.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{recruitConf:y,setRecruitConf:C,tab:F})]})]})}var g=l(47359);function N(e){var t=e.tab,l=e.settab,i=e.formID,r=e.formFields,d=e.handleInput,o=e.recruitConf,c=e.setRecruitConf,f=e.isLoading,h=e.setisLoading,p=e.setSnackbar;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:"Module:"}),(0,m.jsxs)("select",{onChange:d,name:"module",value:o.module,className:"btcd-paper-inp w-7",disabled:1===t,children:[(0,m.jsx)("option",{value:"",children:(0,n.__)("Select Module","bitform")}),o.default&&o.default.modules&&Object.keys(o.default.modules).map((function(e){return(0,m.jsx)("option",{value:e,children:o.default.modules[e].pl},e)}))]}),0===t&&(0,m.jsx)("button",{onClick:function(){return(0,u.vF)(i,o,c,h,p)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Modules"'},type:"button",disabled:f,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsxs)(s.mQ,{selectedTabClassName:"s-t-l-active",children:[(0,m.jsxs)(s.td,{className:"flx mt-2 mb-0",children:[(0,m.jsx)(s.OK,{className:"btcd-s-tab-link",children:(0,n.__)("New Record","bitform")}),(null==o?void 0:o.relatedlists)&&o.relatedlists.map((function(e,t){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(s.OK,{className:"btcd-s-tab-link",children:[(0,n.__)("Related List #","bitform"),t+1]},"rel-"+(t+64)),(0,m.jsx)("button",{onClick:function(){return function(e){var t=(0,a.Z)({},o);t.relatedlists.splice(e,1),t.relatedlists.length||l(0),c((0,a.Z)({},t))}(t)},className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:(0,m.jsx)(g.Z,{size:"14"})})]})})),o.relatedlists.length<3&&(0,m.jsx)("button",{onClick:function(){var e=(0,a.Z)({},o);e.relatedlists.length<3&&e.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),c((0,a.Z)({},e))},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Add More Related List"'},type:"button",children:"+"})]}),(0,m.jsx)("div",{className:"btcd-hr"}),(0,m.jsx)(s.x4,{children:(0,m.jsx)(v,{tab:t,settab:l,formID:i,formFields:r,recruitConf:o,setRecruitConf:c,isLoading:f,setSnackbar:p})}),(null==o?void 0:o.relatedlists)&&o.relatedlists.map((function(e,a){return(0,m.jsx)(s.x4,{children:(0,m.jsx)(F,{indx:a,tab:t,settab:l,formID:i,formFields:r,recruitConf:o,setRecruitConf:c,handleInput:d,isLoading:f,setisLoading:h,setSnackbar:p})},"rlt-"+(a+89))}))]})]})}}}]);