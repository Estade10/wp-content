"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[6208],{8940:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(73305),s=a(4637);function r(e){var t=e.step,a=e.saveConfig,r=e.edit,l=e.disabled;return r?(0,s.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,s.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l,children:(0,n.__)("Update","bitform")})}):(0,s.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,s.jsx)("h2",{className:"ml-3",children:(0,n.__)("Successfully Integrated","bitform")}),(0,s.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,n.__)("Finish & Save ","bitform")," ✔"]})]})}},27944:(e,t,a)=>{a.d(t,{Rx:()=>l,Y6:()=>d,$1:()=>c,GX:()=>m,oQ:()=>u,Xr:()=>f,Pd:()=>p});var n=a(665),s=a(73305),r=a(77111),l=function(e,t,a,s,r,l,d,c,m){var u=(0,n.Z)({},t);if(d){var f=(0,n.Z)({},c);f[e.target.name]="",m((0,n.Z)({},f))}switch(u[e.target.name]=e.target.value,e.target.name){case"orgId":u=i(u,s,a,r,l);break;case"department":u=o(u,s,a,r,l)}a((0,n.Z)({},u))},i=function(e,t,a,s,r){var l,i,o,d,m=(0,n.Z)({},e);return m.department="",m.field_map=[{formField:"",zohoFormField:""}],m.actions={},null!=m&&null!=(l=m.default)&&null!=(i=l.departments)&&i[m.orgId]?1===(null==m||null==(o=m.default)||null==(d=o.departments)?void 0:d[m.orgId].length)&&(m.field_map=h(m)):c(t,m,a,s,r),m},o=function(e,t,a,s,r){var l,i,o=(0,n.Z)({},e);return o.field_map=[{formField:"",zohoFormField:""}],o.actions={},null!=o&&null!=(l=o.default)&&null!=(i=l.fields)&&i[o.orgId]?o.field_map=h(o):m(t,o,a,s,r),o},d=function(e,t,a,l,i){l(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,r.Z)(o,"bitforms_zdesk_refresh_organizations").then((function(e){if(e&&e.success){var r=(0,n.Z)({},t);e.data.organizations&&(r.default=(0,n.Z)({},r.default,{organizations:e.data.organizations})),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,s.__)("Portals refreshed","bitform")}),a((0,n.Z)({},r))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:""+(0,s.__)("Portals refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,s.__)("please try again","bitform")}):i({show:!0,msg:(0,s.__)("Portals refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},c=function(e,t,a,l,i){l(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,orgId:t.orgId};(0,r.Z)(o,"bitforms_zdesk_refresh_departments").then((function(r){if(r&&r.success){var o,d,c=(0,n.Z)({},t);if(c.default.departments||(c.default.departments={}),r.data.departments&&(c.default.departments[c.orgId]=r.data.departments),1===r.data.departments.length)c.department=r.data.departments[c.orgId][0].departmentName,(null==(o=c.default)||null==(d=o.fields)||!d[c.orgId])&&m(e,c,a,l,i);r.data.tokenDetails&&(c.tokenDetails=r.data.tokenDetails),i({show:!0,msg:(0,s.__)("Departments refreshed","bitform")}),a((0,n.Z)({},c))}else r&&r.data&&r.data.data||!r.success&&"string"===typeof r.data?i({show:!0,msg:(0,s.g)((0,s.__)("Departments refresh failed Cause: %s. please try again","bitform"),r.data.data||r.data)}):i({show:!0,msg:(0,s.__)("Departments refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},m=function(e,t,a,l,i){l(!0);var o={formID:e,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,orgId:t.orgId};(0,r.Z)(o,"bitforms_zdesk_refresh_fields").then((function(e){if(e&&e.success){var r=(0,n.Z)({},t);e.data.fields?(r.default.fields||(r.default.fields={}),r.default.fields[r.orgId]=(0,n.Z)({},e.data),r.field_map=h(r),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,s.__)("Fields refreshed","bitform")})):i({show:!0,msg:""+(0,s.__)("Fields refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,s.__)("please try again","bitform")}),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),a((0,n.Z)({},r))}else i({show:!0,msg:(0,s.__)("Fields refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},u=function(e,t,a,l,i){l(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,orgId:t.orgId};(0,r.Z)(o,"bitforms_zdesk_refresh_owners").then((function(e){if(e&&e.success){var r=(0,n.Z)({},t);r.default.owners||(r.default.owners={}),e.data.owners&&(r.default.owners[r.orgId]=e.data.owners),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,s.__)("Owners refreshed","bitform")}),a((0,n.Z)({},r))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:""+(0,s.__)("Owners refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,s.__)("please try again","bitform")}):i({show:!0,msg:(0,s.__)("Owners refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},f=function(e,t,a,l,i){l(!0);var o={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails,orgId:t.orgId,departmentId:t.department};(0,r.Z)(o,"bitforms_zdesk_refresh_products").then((function(e){if(e&&e.success){var r=(0,n.Z)({},t);r.default.products||(r.default.products={}),e.data.products&&(r.default.products[r.department]=e.data.products),e.data.tokenDetails&&(r.tokenDetails=e.data.tokenDetails),i({show:!0,msg:(0,s.__)("Products refreshed","bitform")}),a((0,n.Z)({},r))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?i({show:!0,msg:""+(0,s.__)("Products refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,s.__)("please try again","bitform")}):i({show:!0,msg:(0,s.__)("Products refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},h=function(e){var t;return e.default.fields[e.orgId].required.length>0?null==(t=e.default.fields[e.orgId].required)?void 0:t.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]},p=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(t){var a,n,s;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(a=e.default)||null==(n=a.fields)||null==(s=n[e.orgId])?void 0:s.required.indexOf(t.zohoFormField))})):[]).length>0)}},5461:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(73305),s=a(67860),r=a(53132),l=a(665),i=a(59496),o=a(19753),d=a(83524),c=a(2598),m=a(27944),u=a(4637);function f(e){var t,a,r,f,h,p,b=e.deskConf,_=e.setDeskConf,x=e.formID,g=e.formFields,v=e.setSnackbar,k=(0,i.useState)(!1),j=k[0],w=k[1],C=(0,i.useState)({show:!1}),I=C[0],N=C[1],y=function(e,t){var a=(0,l.Z)({},b);"ticket_owner"===t?""!==e?a.actions.ticket_owner=e:delete a.actions.ticket_owner:"product"===t?""!==e?a.actions.product=e:delete a.actions.product:"attachments"===t&&(""!==e?a.actions.attachments=e:delete a.actions.attachments),_((0,l.Z)({},a))},D=function(){N({show:!1})};return(0,u.jsxs)("div",{className:"pos-rel",children:[(0,u.jsxs)("div",{className:"d-flx flx-wrp",children:[(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)(c.Z,{onChange:function(){var e,t;null!=(e=b.default)&&null!=(t=e.owners)&&t[b.orgId]||(0,m.oQ)(x,b,_,w,v),N({show:"ticket_owner"})},checked:"ticket_owner"in b.actions,className:"wdt-200 mt-4 mr-2",value:"Ticket_Owner",title:(0,n.__)("Ticket Owner","bitform"),subTitle:(0,n.__)("Add a owner to ticket pushed to Zoho Desk.","bitform")}),!b.actions.ticket_owner&&(0,u.jsx)("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:(0,n.__)("ticket owner is required","bitform")})]}),(0,u.jsx)(c.Z,{onChange:function(){var e,t;null!=(e=b.default)&&null!=(t=e.products)&&t[b.department]||(0,m.Xr)(x,b,_,w,v),N({show:"product"})},checked:"product"in b.actions,className:"wdt-200 mt-4 mr-2",value:"Product_Name",title:(0,n.__)("Product Name","bitform"),subTitle:(0,n.__)("Add a product to ticket pushed to Zoho Desk.","bitform")}),(0,u.jsx)(c.Z,{onChange:function(){return N({show:"attachments"})},checked:"attachments"in b.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:(0,n.__)("Attachments","bitform"),subTitle:(0,n.__)("Add attachments from BitForm to ticket pushed to Zoho Desk.","bitform")})]}),(0,u.jsxs)(d.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:(0,n.__)("Ok","bitform"),show:"ticket_owner"===I.show,close:D,action:D,title:(0,n.__)("Ticket Owner","bitform"),children:[(0,u.jsx)("div",{className:"btcd-hr mt-2"}),j?(0,u.jsx)(s.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,u.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,u.jsxs)("select",{value:b.actions.ticket_owner,className:"btcd-paper-inp",onChange:function(e){return y(e.target.value,"ticket_owner")},children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Owner","bitform")}),null==(t=b.default)||null==(a=t.owners)||null==(r=a[b.orgId])?void 0:r.map((function(e){return(0,u.jsx)("option",{value:e.ownerId,children:e.ownerName},e.ownerId)}))]}),(0,u.jsx)("button",{onClick:function(){return(0,m.oQ)(x,b,_,w,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Ticket Owners"'},type:"button",disabled:j,children:"↻"})]})]}),(0,u.jsxs)(d.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:(0,n.__)("Ok","bitform"),show:"product"===I.show,close:D,action:D,title:(0,n.__)("Product Name","bitform"),children:[(0,u.jsx)("div",{className:"btcd-hr mt-2"}),j?(0,u.jsx)(s.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):(0,u.jsxs)("div",{className:"flx flx-between mt-2",children:[(0,u.jsxs)("select",{value:b.actions.product,className:"btcd-paper-inp",onChange:function(e){return y(e.target.value,"product")},children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Product","bitform")}),null==(f=b.default)||null==(h=f.products)||null==(p=h[b.department])?void 0:p.map((function(e){return(0,u.jsx)("option",{value:e.productId,children:e.productName},e.productId)}))]}),(0,u.jsx)("button",{onClick:function(){return(0,m.Xr)(x,b,_,w,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Products"'},type:"button",disabled:j,children:"↻"})]})]}),(0,u.jsxs)(d.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:(0,n.__)("Ok","bitform"),show:"attachments"===I.show,close:D,action:D,title:(0,n.__)("Select Attachment","bitform"),children:[(0,u.jsx)("div",{className:"btcd-hr mt-2"}),(0,u.jsx)("div",{className:"mt-2",children:(0,n.__)("Select file upload fields","bitform")}),(0,u.jsx)(o.Z,{defaultValue:b.actions.attachments,className:"mt-2 w-9",onChange:function(e){return y(e,"attachments")},options:g.filter((function(e){return"file-up"===e.type})).map((function(e){return{label:e.name,value:e.key}}))})]})]})}var h=a(44084),p=a(84448),b=a(94557),_=a(2699),x=a(37029);function g(e){var t,a,s,l,i=e.i,o=e.formFields,d=e.field,c=e.deskConf,m=e.setDeskConf,f=c.orgId,g=""===d.zohoFormField||-1===(null==(t=c.default.fields[f].required)?void 0:t.indexOf(d.zohoFormField)),v=(0,h.sJ)(p.hi).isPro;return(0,u.jsxs)("div",{className:"flx mt-2 mr-1",children:[(0,u.jsxs)("div",{className:"flx integ-fld-wrp",children:[(0,u.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:function(e){return(0,r.wX)(e,i,c,m)},children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),(0,u.jsx)("optgroup",{label:"Form Fields",children:o.map((function(e){return"file-up"!==e.type&&(0,u.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,u.jsx)("option",{value:"custom",children:(0,n.__)("Custom...","bitform")}),(0,u.jsx)("optgroup",{label:"General Smart Codes "+(v?"":"(PRO)"),children:v&&(null==_.C?void 0:_.C.map((function(e){return(0,u.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===d.formField&&(0,u.jsx)(x.Z,{onChange:function(e){return(0,r.mG)(e,i,c,m)},label:(0,n.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:d.customValue,placeholder:(0,n.__)("Custom Value","bitform")}),(0,u.jsxs)("select",{className:"btcd-paper-inp",name:"zohoFormField",value:d.zohoFormField||"",disabled:!g,onChange:function(e){return(0,r.wX)(e,i,c,m)},children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),(null==(a=c.default)||null==(s=a.fields)||null==(l=s[f])?void 0:l.fields)&&Object.values(c.default.fields[f].fields).map((function(e){return g?!1===e.required&&(0,u.jsx)("option",{value:e.apiName,children:e.displayLabel},e.displayLabel):(0,u.jsx)("option",{value:e.apiName,children:e.displayLabel},e.displayLabel)}))]})]}),g&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{onClick:function(){return(0,r.FP)(i,c,m)},className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),(0,u.jsx)("button",{onClick:function(){return(0,r.T5)(i,c,m)},className:"icn-btn sh-sm",type:"button","aria-label":"btn",children:(0,u.jsx)(b.Z,{})})]})]})}function v(e){var t,a,l,i,o,d=e.formID,c=e.formFields,h=e.handleInput,p=e.deskConf,b=e.setDeskConf,_=e.isLoading,x=e.setisLoading,v=e.setSnackbar;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsx)("b",{className:"wdt-100 d-in-b",children:(0,n.__)("Portal:","bitform")}),(0,u.jsxs)("select",{onChange:h,name:"orgId",value:p.orgId,className:"btcd-paper-inp w-7",children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Portal","bitform")}),(null==p||null==(t=p.default)?void 0:t.organizations)&&Object.values(p.default.organizations).map((function(e){return(0,u.jsx)("option",{value:e.orgId,children:e.portalName},e.orgId)}))]}),(0,u.jsx)("button",{onClick:function(){return(0,m.Y6)(d,p,b,x,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh Desk Portals","bitform")+"'"},type:"button",disabled:_,children:"↻"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("b",{className:"wdt-100 d-in-b",children:(0,n.__)("Department:","bitform")}),(0,u.jsxs)("select",{onChange:h,name:"department",value:p.department,className:"btcd-paper-inp w-7",children:[(0,u.jsx)("option",{value:"",children:(0,n.__)("Select Department","bitform")}),(null==p||null==(a=p.default)||null==(l=a.departments)?void 0:l[p.orgId])&&Object.values(p.default.departments[p.orgId]).map((function(e){return(0,u.jsx)("option",{value:e.departmentId,children:e.departmentName},e.departmentId)}))]}),(0,u.jsx)("button",{onClick:function(){return(0,m.$1)(d,p,b,x,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh Desk Departments","bitform")+"'"},type:"button",disabled:_,children:"↻"}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),_&&(0,u.jsx)(s.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),p.department&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Fields","bitform")}),(0,u.jsx)("button",{onClick:function(){return(0,m.GX)(d,p,b,x,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh Desk Fields","bitform")+"'"},type:"button",disabled:_,children:"↻"})]}),(0,u.jsx)("div",{className:"btcd-hr mt-1"}),(null==(i=p.default)||null==(o=i.fields)?void 0:o[null==p?void 0:p.orgId])&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,u.jsx)("div",{className:"txt-dp",children:(0,u.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,u.jsx)("div",{className:"txt-dp",children:(0,u.jsx)("b",{children:(0,n.__)("Zoho Fields","bitform")})})]}),p.field_map.map((function(e,t){return(0,u.jsx)(g,{i:t,field:e,deskConf:p,formFields:c,setDeskConf:b},"desk-m-"+(t+9))})),(0,u.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,u.jsx)("button",{onClick:function(){return(0,r.FP)(p.field_map.length,p,b)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)("b",{className:"wdt-100",children:(0,n.__)("Actions","bitform")})}),(0,u.jsx)("div",{className:"btcd-hr mt-1"}),(0,u.jsx)(f,{deskConf:p,setDeskConf:b,formID:d,formFields:c,setSnackbar:v})]})]})]})}}}]);