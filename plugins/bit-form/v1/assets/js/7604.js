"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7604],{8940:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(73305),i=l(4637);function n(e){var t=e.step,l=e.saveConfig,n=e.edit,r=e.disabled;return n?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r,children:(0,a.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,a.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,a.__)("Finish & Save ","bitform")," ✔"]})]})}},18338:(e,t,l)=>{l.d(t,{Rx:()=>r,$P:()=>d,GY:()=>c,GX:()=>u,Pd:()=>f});var a=l(665),i=l(73305),n=l(77111),r=function(e,t,l,i,n,r,d,c,u){var m=(0,a.Z)({},t);if(d){var f=(0,a.Z)({},c);f[e.target.name]="",u((0,a.Z)({},f))}switch(m[e.target.name]=e.target.value,e.target.name){case"applicationId":m=s(m,i,l,n,r);break;case"formId":m=o(m,i,l,n,r)}l((0,a.Z)({},m))},s=function(e,t,l,i,n){var r,s,o=(0,a.Z)({},e);return o.department="",o.field_map=[{formField:"",zohoFormField:""}],o.actions={},null!=o&&null!=(r=o.default)&&null!=(s=r.forms)&&s[o.applicationId]||c(t,o,l,i,n),o},o=function(e,t,l,i,n){var r,s,o=(0,a.Z)({},e);return o.field_map=[{formField:"",zohoFormField:""}],o.upload_field_map=[{formField:"",zohoFormField:""}],o.actions={},null!=o&&null!=(r=o.default)&&null!=(s=r.fields)&&s[o.orgId]?(o.field_map=m(o),Object.keys(o.default.fields[o.applicationId][o.formId].fileUploadFields).length>0&&(o.upload_field_map=m(o,!0))):u(t,o,l,i,n),o},d=function(e,t,l,r,s){r(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,n.Z)(o,"bitforms_zcreator_refresh_applications").then((function(e){if(e&&e.success){var n=(0,a.Z)({},t);e.data.applications&&(n.default=(0,a.Z)({},n.default,{applications:e.data.applications})),s({show:!0,msg:(0,i.__)("Applications refreshed","bitform")}),l((0,a.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?s({show:!0,msg:""+(0,i.__)("Applications refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):s({show:!0,msg:(0,i.__)("Applications refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))},c=function(e,t,l,r,s){var o=t.accountOwner,d=t.applicationId;r(!0);var c={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,accountOwner:o,applicationId:d};(0,n.Z)(c,"bitforms_zcreator_refresh_forms").then((function(e){if(e&&e.success){var n=(0,a.Z)({},t);n.default.forms||(n.default.forms={}),e.data.forms&&(n.default.forms[d]=e.data.forms),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),s({show:!0,msg:(0,i.__)("Forms refreshed","bitform")}),l((0,a.Z)({},n))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?s({show:!0,msg:""+(0,i.__)("Forms refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):s({show:!0,msg:(0,i.__)("Forms refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))},u=function(e,t,l,r,s){var o=t.accountOwner,d=t.applicationId,c=t.formId;r(!0);var u={formID:e,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,accountOwner:o,applicationId:d,formId:c};(0,n.Z)(u,"bitforms_zcreator_refresh_fields").then((function(e){if(e&&e.success){var n=(0,a.Z)({},t);e.data.fields?(n.default.fields||(n.default.fields={}),n.default.fields[d]||(n.default.fields[d]={}),n.default.fields[d][c]=(0,a.Z)({},e.data),n.field_map=m(n),Object.keys(e.data.fileUploadFields).length>0&&(n.upload_field_map=m(n,!0)),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),s({show:!0,msg:(0,i.__)("Fields refreshed","bitform")})):s({show:!0,msg:""+(0,i.__)("Fields refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}),e.data.tokenDetails&&(n.tokenDetails=e.data.tokenDetails),l((0,a.Z)({},n))}else s({show:!0,msg:(0,i.__)("Fields refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))},m=function(e,t){var l=e.applicationId,a=e.formId;return t?e.default.fields[l][a].requiredFileUploadFields.length>0?e.default.fields[l][a].requiredFileUploadFields.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]:e.default.fields[l][a].required.length>0?e.default.fields[l][a].required.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]},f=function(e){var t=null!=e&&e.field_map?e.field_map.filter((function(t){var l,a,i,n;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(l=e.default)||null==(a=l.fields)||null==(i=a[e.applicationId])||null==(n=i[e.formId])?void 0:n.required.indexOf(t.zohoFormField))})):[],l=null!=e&&e.upload_field_map?e.upload_field_map.filter((function(t){var l,a,i,n;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(l=e.default)||null==(a=l.fields)||null==(i=a[e.applicationId])||null==(n=i[e.formId])?void 0:n.requiredFileUploadFields.indexOf(t.zohoFormField))})):[];return!(t.length>0||l.length>0)}},45893:(e,t,l)=>{l.d(t,{Z:()=>F});var a=l(73305),i=l(67860),n=l(53132),r=l(665),s=l(59496),o=l(44246),d=l(2598),c=l(12859),u=l(31702),m=l(4637);function f(e){var t,l,i,n,f,p=e.creatorConf,h=e.setCreatorConf,b=(0,s.useState)(!1),x=b[0],_=b[1],v=function(e,t){var l=(0,r.Z)({},p);"criteria"===t&&(l.actions.update.criteria=e),"insert"===t&&(l.actions.update.insert=e),h((0,r.Z)({},l))};return(0,s.useEffect)((function(){var e,t;if(!x&&(null==(e=p.actions)||null==(t=e.update)||!t.criteria)){var l=(0,r.Z)({},p);delete l.actions.update,h((0,r.Z)({},l))}}),[x]),(0,m.jsxs)("div",{className:"pos-rel",children:[(0,m.jsx)("div",{className:"d-flx flx-wrp",children:(0,m.jsx)(u.Z,{action:function(){var e;if(null==(e=p.actions)||!e.update){var t=(0,r.Z)({},p);t.actions.update={insert:!0,criteria:""},h((0,r.Z)({},t))}_(!0)},children:(0,m.jsx)(d.Z,{onChange:function(e){return function(e,t){var l,a=(0,r.Z)({},p);"update"===t&&(!e.target.checked||null!=a&&null!=(l=a.actions)&&l.update?delete a.actions.update:(a.actions.update={insert:!0,criteria:""},_(!0))),h((0,r.Z)({},a))}(e,"update")},checked:"update"in(null==p?void 0:p.actions),className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:(0,a.__)("Update Record","bitform"),subTitle:(0,a.__)("Control how the record gets updated.","bitform")})})}),(0,m.jsx)(c.Z,{md:!0,show:x,setModal:_,title:(0,a.__)("Update Row","bitform"),children:(0,m.jsx)("div",{className:"o-a",children:(null==p||null==(t=p.actions)?void 0:t.update)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("small",{children:(0,a.__)("Enter the criteria to update records. Please use the below format.","bitform")}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsxs)("small",{children:[(0,a.__)("Example:","bitform")," ",'(Email==\\"test@mail.com\\")']}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsxs)("small",{children:[(0,a.__)("Here Email is Zoho Creator Field link name. info:","bitform")," ",(0,m.jsx)("a",{href:"https://www.zoho.com/creator/help/api/v2/update-records.html",target:"_blank",rel:"noreferrer",children:(0,a.__)("Zoho Creator Criteria Guide","bitform")})]}),(0,m.jsx)("textarea",{name:"",rows:"5",className:"btcd-paper-inp mt-1",onChange:function(e){return v(e.target.value,"criteria")},value:null==(l=p.actions)||null==(i=l.update)?void 0:i.criteria})]}),(0,m.jsx)("div",{className:"font-w-m mt-3",children:(0,a.__)("Update Preferance","bitform")}),(0,m.jsx)("small",{children:(0,a.__)("insert new record if the above criteria doesn&apos;t met?","bitfomr")}),(0,m.jsxs)("div",{children:[(0,m.jsx)(o.Z,{onChange:function(){return v(!0,"insert")},radio:!0,checked:null==(n=p.actions.update)?void 0:n.insert,name:"up-row",title:(0,a.__)("Yes","bitform")}),(0,m.jsx)(o.Z,{onChange:function(){return v(!1,"insert")},radio:!0,checked:!(null!=(f=p.actions.update)&&f.insert),name:"up-row",title:(0,a.__)("No","bitform")})]})]})})})]})}var p=l(18338),h=l(44084),b=l(84448),x=l(94557),_=l(2699),v=l(37029);function j(e){var t,l,i,r,s,o,d,c,u,f,p,j,F,g,C,N,k,y,I,w=e.i,Z=e.formFields,z=e.uploadFields,D=e.field,O=e.creatorConf,S=e.setCreatorConf,U=O.applicationId,P=O.formId;I=z?""===D.zohoFormField||-1===(null==(t=O.default)||null==(l=t.fields)||null==(i=l[U])||null==(r=i[P])||null==(s=r.requiredFileUploadFields)?void 0:s.indexOf(D.zohoFormField)):""===D.zohoFormField||-1===(null==(o=O.default)||null==(d=o.fields)||null==(c=d[U])||null==(u=c[P])||null==(f=u.required)?void 0:f.indexOf(D.zohoFormField));var q=(0,h.sJ)(b.hi).isPro;return(0,m.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,m.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,m.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:D.formField||"",onChange:function(e){return(0,n.wX)(e,w,O,S,z)},children:[(0,m.jsx)("option",{value:"",children:(0,a.__)("Select Field","bitform")}),(0,m.jsx)("optgroup",{label:"Form Fields",children:z?Z.map((function(e){return"file-up"===e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)})):Z.map((function(e){return"file-up"!==e.type&&(0,m.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,m.jsx)("option",{value:"custom",children:(0,a.__)("Custom...","bitform")}),(0,m.jsx)("optgroup",{label:"General Smart Codes "+(q?"":"(PRO)"),children:q&&(null==_.C?void 0:_.C.map((function(e){return(0,m.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===D.formField&&(0,m.jsx)(v.Z,{onChange:function(e){return(0,n.mG)(e,w,O,S)},label:(0,a.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:D.customValue,placeholder:(0,a.__)("Custom Value","bitform")}),(0,m.jsxs)("select",{className:"btcd-paper-inp",name:"zohoFormField",value:D.zohoFormField||"",disabled:!I,onChange:function(e){return(0,n.wX)(e,w,O,S,z)},children:[(0,m.jsx)("option",{value:"",children:(0,a.__)("Select Field","bitform")}),z?(null==(p=O.default)||null==(j=p.fields)||null==(F=j[U])||null==(g=F[P])?void 0:g.fileUploadFields)&&Object.values(O.default.fields[U][P].fileUploadFields).map((function(e){return I?!1===e.required&&(0,m.jsx)("option",{value:e.apiName,children:e.displayLabel},e.displayLabel):(0,m.jsx)("option",{value:e.apiName,children:e.displayLabel},e.displayLabel)})):(null==(C=O.default)||null==(N=C.fields)||null==(k=N[U])||null==(y=k[P])?void 0:y.fields)&&Object.values(O.default.fields[U][P].fields).map((function(e){return I?!1===e.required&&(0,m.jsx)("option",{value:e.apiName,children:e.displayLabel},e.displayLabel):(0,m.jsx)("option",{value:e.apiName,children:e.displayLabel},e.displayLabel)}))]})]}),I&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{onClick:function(){return(0,n.FP)(w,O,S,z)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,m.jsx)("button",{onClick:function(){return(0,n.T5)(w,O,S,z)},className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:(0,m.jsx)(x.Z,{})})]})]})}function F(e){var t,l,r,s,o,d,c,u,h=e.formID,b=e.formFields,x=e.handleInput,_=e.creatorConf,v=e.setCreatorConf,F=e.isLoading,g=e.setisLoading,C=e.setSnackbar;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:(0,a.__)("Application:","bitform")}),(0,m.jsxs)("select",{onChange:x,name:"applicationId",value:_.applicationId,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,a.__)("Select Application","bitform")}),(null==_||null==(t=_.default)?void 0:t.applications)&&Object.values(_.default.applications).map((function(e){return(0,m.jsx)("option",{value:e.applicationId,children:e.applicationName},e.applicationId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,p.$P)(h,_,v,g,C)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Creator Portals"'},type:"button",disabled:F,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("b",{className:"wdt-100 d-in-b",children:(0,a.__)("Form:","bitform")}),(0,m.jsxs)("select",{onChange:x,name:"formId",value:_.formId,className:"btcd-paper-inp w-7",children:[(0,m.jsx)("option",{value:"",children:(0,a.__)("Select Form","bitform")}),(null==_||null==(l=_.default)||null==(r=l.forms)?void 0:r[_.applicationId])&&Object.values(_.default.forms[_.applicationId]).map((function(e){return(0,m.jsx)("option",{value:e.formId,children:e.formName},e.formId)}))]}),(0,m.jsx)("button",{onClick:function(){return(0,p.GY)(h,_,v,g,C)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Creator Departments"'},type:"button",disabled:F,children:"↻"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),F&&(0,m.jsx)(i.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),_.formId&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"mt-4",children:[(0,m.jsx)("b",{className:"wdt-100",children:(0,a.__)("Map Fields","bitform")}),(0,m.jsx)("button",{onClick:function(){return(0,p.GX)(h,_,v,g,C)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,a.__)("Refresh Creator Fields","bitform")+"'"},type:"button",disabled:F,children:"↻"})]}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(null==(s=_.default)||null==(o=s.fields)||null==(d=o[null==_?void 0:_.applicationId])?void 0:d[null==_?void 0:_.formId])&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,a.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,a.__)("Zoho Fields","bitform")})})]}),_.field_map.map((function(e,t){return(0,m.jsx)(j,{i:t,field:e,creatorConf:_,formFields:b,setCreatorConf:v},"creator-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){return(0,n.FP)(_.field_map.length,_,v)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),0!==Object.keys(null==(c=_.default.fields[_.applicationId][_.formId])?void 0:c.fileUploadFields).length&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,a.__)("Map File Upload Fields","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,a.__)("Form Fields","bitform")})}),(0,m.jsx)("div",{className:"txt-dp",children:(0,m.jsx)("b",{children:(0,a.__)("Zoho Fields","bitform")})})]}),null==_||null==(u=_.upload_field_map)?void 0:u.map((function(e,t){return(0,m.jsx)(j,{i:t,field:e,creatorConf:_,formFields:b,setCreatorConf:v,uploadFields:!0},"creator-m-"+(t+9))})),(0,m.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,m.jsx)("button",{onClick:function(){var e;return(0,n.FP)(null==_||null==(e=_.upload_field_map)?void 0:e.length,_,v,!0)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]}),(0,m.jsx)("div",{className:"mt-4",children:(0,m.jsx)("b",{className:"wdt-100",children:(0,a.__)("Actions","bitform")})}),(0,m.jsx)("div",{className:"btcd-hr mt-1"}),(0,m.jsx)(f,{creatorConf:_,setCreatorConf:v})]})]})]})}},44246:(e,t,l)=>{l.d(t,{Z:()=>i});var a=l(4637);const i=function(e){var t=e.className,l=e.disabled,i=e.checked,n=e.onChange,r=e.radio,s=e.name,o=e.title,d=e.value,c=e.sqr;return(0,a.jsxs)("label",{className:"btcd-ck-wrp "+t,children:[o,(0,a.jsx)("input",{type:r?"radio":"checkbox",checked:i,onChange:n,name:s,value:d,disabled:l}),(0,a.jsx)("span",{className:"btcd-mrk "+(!c&&"br-50")+" "+(r?"rdo":"ck")})]})}},31702:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(61473),i=l(4637);function n(e){var t=e.action,l=e.children;return(0,i.jsxs)("div",{className:"action-btn-wrapper",children:[(0,i.jsx)("div",{className:"action-btn",tabIndex:"0",role:"button",onClick:t,onKeyPress:t,children:(0,i.jsx)(a.Z,{})}),l]})}}}]);