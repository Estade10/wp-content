"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[10],{22788:(e,t,l)=>{l.d(t,{FP:()=>c,Mm:()=>s,P_:()=>d,T5:()=>u,WK:()=>r,mG:()=>m,wX:()=>f});var a=l(60795),i=l(88226),n=l(97719),s=function(e,t,l,i,n,s,r){var d=[].concat(e);if(r)d[s]=(0,a.Z)({},e[s],i),d.push({editItegration:!0}),t([].concat(d)),n.push(l);else{var o=[].concat(d);o.push(i),o.push({newItegration:!0}),t(o),n.push(l)}},r=function(e){var t={},l=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");l&&l.forEach((function(e){var l=e.split("=");l[1]&&(t[l[0]]=l[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},d=function(e,t,l,n,s,r,d,c,u){if(n.dataCenter&&n.clientId&&n.clientSecret){c(!0);var f="https://accounts.zoho."+n.dataCenter+"/oauth/v2/auth?scope="+l+"&response_type=code&client_id="+n.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),m=window.open(f,e,"width=400,height=609,toolbar=off"),p=setInterval((function(){if(m.closed){clearInterval(p);var l={},r=!1,f=localStorage.getItem("__bitforms_"+e);if(f&&(r=!0,l=JSON.parse(f),localStorage.removeItem("__bitforms_"+e)),l.code&&!l.error&&l&&r){var _=(0,a.Z)({},n);_.accountServer=l["accounts-server"],o(t,l,_,s,d,c,u)}else{var b=l.error?"Cause: "+l.error:"";u({show:!0,msg:(0,i.__)("Authorization failed","bitform")+" "+b+". "+(0,i.__)("please try again","bitform")}),c(!1)}}}),500)}else r({dataCenter:n.dataCenter?"":(0,i.__)("Data center cann't be empty","bitform"),clientId:n.clientId?"":(0,i.__)("Client ID cann't be empty","bitform"),clientSecret:n.clientSecret?"":(0,i.__)("Secret key cann't be empty","bitform")})},o=function(e,t,l,s,r,d,o){var c=(0,a.Z)({},t);c.dataCenter=l.dataCenter,c.clientId=l.clientId,c.clientSecret=l.clientSecret,c.redirectURI=bits.zohoRedirectURL,(0,n.Z)(c,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,a.Z)({},l);t.tokenDetails=e.data,s(t),r(!0),o({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):o({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});d(!1)}))},c=function(e,t,l,i,n){var s=(0,a.Z)({},t);n?i?s.relatedlists[n-1].upload_field_map.splice(e,0,{}):s.relatedlists[n-1].field_map.splice(e,0,{}):i?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),l((0,a.Z)({},s))},u=function(e,t,l,i,n){var s=(0,a.Z)({},t);n?i?s.relatedlists[n-1].upload_field_map.length>1&&s.relatedlists[n-1].upload_field_map.splice(e,1):s.relatedlists[n-1].field_map.length>1&&s.relatedlists[n-1].field_map.splice(e,1):i?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),l((0,a.Z)({},s))},f=function(e,t,l,i,n,s){var r=(0,a.Z)({},l);s?n?r.relatedlists[s-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[s-1].field_map[t][e.target.name]=e.target.value:n?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(s?r.relatedlists[s-1].field_map[t].customValue="":r.field_map[t].customValue=""),i((0,a.Z)({},r))},m=function(e,t,l,i,n){var s=(0,a.Z)({},l);n?s.relatedlists[n-1].field_map[t].customValue=e.target.value:s.field_map[t].customValue=e.target.value,i((0,a.Z)({},s))}},52904:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(88226),i=l(4637);function n(e){var t=e.step,l=e.saveConfig,n=e.edit,s=e.disabled;return n?(0,i.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,i.jsx)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:s,children:(0,a.__)("Update","bitform")})}):(0,i.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,i.jsx)("h2",{className:"ml-3",children:(0,a.__)("Successfully Integrated","bitform")}),(0,i.jsxs)("button",{onClick:l,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,a.__)("Finish & Save ","bitform")," ✔"]})]})}},26821:(e,t,l)=>{l.d(t,{Pd:()=>c,Pl:()=>o,Rx:()=>s,aS:()=>r,e1:()=>d});var a=l(60795),i=l(88226),n=l(97719),s=function(e,t,l){var i=(0,a.Z)({},t);i.name=e.target.value,l((0,a.Z)({},i))},r=function(e,t,l,s){l(!0);var r={api_key:e.api_key};(0,n.Z)(r,"bitforms_sblue_refresh_lists").then((function(n){if(n&&n.success){var r=(0,a.Z)({},e);r.default||(r.default={}),n.data.sblueList&&(r.default.sblueList=n.data.sblueList),s({show:!0,msg:(0,i.__)("List refreshed","bitform")}),t((0,a.Z)({},r))}else n&&n.data&&n.data.data||!n.success&&"string"===typeof n.data?s({show:!0,msg:(0,i.g)((0,i.__)("List refresh failed Cause: %s. please try again","bitform"),n.data.data||n.data)}):s({show:!0,msg:(0,i.__)("List failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},d=function(e,t,l){var s={api_key:e.api_key};(0,n.Z)(s,"bitforms_sblue_refresh_template").then((function(n){if(n&&n.success){var s=(0,a.Z)({},e);s.default||(s.default={}),n.data.sblueTemplates&&(s.default.sblueTemplates=n.data.sblueTemplates),l({show:!0,msg:(0,i.__)("Templates refreshed","bitform")}),t((0,a.Z)({},s))}else n&&n.data&&n.data.data||!n.success&&"string"===typeof n.data?l({show:!0,msg:(0,i.g)((0,i.__)("Templates refresh failed Cause: %s. please try again","bitform"),n.data.data||n.data)}):l({show:!0,msg:(0,i.__)("Templates failed. please try again","bitform")})}))},o=function(e,t,l,s){var r={api_key:e.api_key};(0,n.Z)(r,"bitforms_sblue_headers").then((function(n){if(n&&n.success){var r=(0,a.Z)({},e);if(n.data.sendinBlueField){r.default.fields=n.data.sendinBlueField;var d=r.default.fields;r.field_map=Object.values(d).filter((function(e){return e.required})).map((function(e){return{formField:"",sendinBlueField:e.fieldId,required:!0}})),s({show:!0,msg:(0,i.__)("SendinBlue fields refreshed","bitform")})}else s({show:!0,msg:(0,i.__)("No SendinBlue fields found. Try changing the header row number or try again","bitform")});t((0,a.Z)({},r))}else s({show:!0,msg:(0,i.__)("SendinBlue fields refresh failed. please try again","bitform")});l(!1)})).catch((function(){return l(!1)}))},c=function(e){var t,l=null!=e&&e.field_map?e.field_map.filter((function(e){return!e.formField&&e.sendinBlueField&&e.required})):[];return(!e.lists||void 0!==(null==(t=e.lists)?void 0:t.length))&&!(l.length>0)}},6269:(e,t,l)=>{l.d(t,{Z:()=>v});var a=l(60795),i=l(83428),n=l(88226),s=l(16740),r=l(22788),d=l(6518),o=l(26821),c=l(4637);function u(e){var t,l=e.sendinBlueConf,i=e.setSendinBlueConf,s=(e.setisLoading,e.setSnackbar);return(0,c.jsx)("div",{className:"pos-rel d-flx w-8",children:(0,c.jsx)(d.Z,{checked:(null==(t=l.actions)?void 0:t.update)||!1,onChange:function(e){return function(e,t){var n=(0,a.Z)({},l);"update"===t&&(e.target.checked?n.actions.update=!0:delete n.actions.update),"double_optin"===t&&(e.target.checked?(n.actions.double_optin=!0,n.templateId="",n.redirectionUrl="",(0,o.e1)(n,i,s)):(delete n.actions.double_optin,delete n.templateId,delete n.redirectionUrl)),i((0,a.Z)({},n))}(e,"update")},className:"wdt-200 mt-4 mr-2",value:"user_share",title:(0,n.__)("Update SendinBlue","bitform"),subTitle:(0,n.__)("Update Responses with SendinBlue existing email?","bitform")})})}var f=l(48291),m=l(28566),p=l(52052),_=l(30400),b=l(22139);function h(e){var t,l,i,s=e.i,r=e.formFields,d=e.field,o=e.sendinBlueConf,u=e.setSendinBlueConf,h=d.required,v=(null==o||null==(t=o.default)?void 0:t.fields)&&Object.values(null==o||null==(l=o.default)?void 0:l.fields).filter((function(e){return!e.required})),g=(0,f.sJ)(m.hi).isPro,x=function(e,t){var l=(0,a.Z)({},o);l.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(l.field_map[t].customValue=""),u(l)};return(0,c.jsxs)("div",{className:h?"mt-2 mr-1 flx w-9":"flx flx-around mt-2 mr-1",children:[(0,c.jsxs)("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:function(e){return x(e,s)},children:[(0,c.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),(0,c.jsx)("optgroup",{label:"Form Fields",children:r.map((function(e){return"file-up"!==e.type&&(0,c.jsx)("option",{value:e.key,children:e.name},"ff-zhcrm-"+e.key)}))}),(0,c.jsx)("option",{value:"custom",children:(0,n.__)("Custom...","bitform")}),(0,c.jsx)("optgroup",{label:"General Smart Codes "+(g?"":"(PRO)"),children:g&&(null==_.C?void 0:_.C.map((function(e){return(0,c.jsx)("option",{value:e.name,children:e.label},"ff-rm-"+e.name)})))})]}),"custom"===d.formField&&(0,c.jsx)(b.Z,{onChange:function(e){return function(e,t){var l=(0,a.Z)({},o);l.field_map[t].customValue=e.target.value,u(l)}(e,s)},label:(0,n.__)("Custom Value","bitform"),className:"mr-2",type:"text",value:d.customValue,placeholder:(0,n.__)("Custom Value","bitform")}),(0,c.jsxs)("select",{className:"btcd-paper-inp",name:"sendinBlueField",value:d.sendinBlueField,onChange:function(e){return x(e,s)},disabled:h,children:[(0,c.jsx)("option",{value:"",children:(0,n.__)("Select Field","bitform")}),h?(null==o||null==(i=o.default)?void 0:i.fields)&&Object.values(o.default.fields).map((function(e){return(0,c.jsx)("option",{value:e.fieldId,children:e.fieldName},e.fieldId+"-1")})):v&&v.map((function(e){return(0,c.jsx)("option",{value:e.fieldId,children:e.fieldName},e.fieldId+"-1")}))]}),!h&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:function(){return function(e){var t=(0,a.Z)({},o);t.field_map.splice(e,0,{}),u(t)}(s)},className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),(0,c.jsx)("button",{onClick:function(){return function(e){var t=(0,a.Z)({},o);t.field_map.length>1&&t.field_map.splice(e,1),u(t)}(s)},className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:(0,c.jsx)(p.Z,{})})]})]})}function v(e){e.formID;var t,l,d,f=e.formFields,m=e.sendinBlueConf,p=e.setSendinBlueConf,_=e.isLoading,b=e.setisLoading,v=e.setSnackbar,g=e.error,x=e.setError,j=function(e){var t=(0,a.Z)({},m),l=(0,a.Z)({},g);l[e.target.name]="",t[e.target.name]=e.target.value,x(l),p((0,a.Z)({},t))};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"flx",children:[(0,c.jsx)("b",{className:"wdt-200 d-in-b",children:(0,n.__)("List: ","bitform")}),(0,c.jsx)(i.Z,{defaultValue:null==m?void 0:m.lists,className:"btcd-paper-drpdwn w-6",options:function(){var e;return null!=m&&null!=(e=m.default)&&e.sblueList?Object.values(m.default.sblueList).map((function(e){return{label:e.name,value:String(e.id)}})):[]}(),onChange:function(e){return function(e){var t=(0,a.Z)({},m);e?(t.lists=e?e.split(","):[],!t.default.fields&&(0,o.Pl)(t,p,b,v)):delete t.lists,p((0,a.Z)({},t))}(e)}}),(0,c.jsx)("button",{onClick:function(){return(0,o.aS)(m,p,b,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh SendinBlue Lists","bitform")+"'"},type:"button",disabled:_,children:"↻"})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),_&&(0,c.jsx)(s.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),0!==(null==m||null==(t=m.lists)?void 0:t.length)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Map Fields","bitform")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsxs)("div",{className:"flx flx-around mt-2 mb-1",children:[(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("Form Fields","bitform")})}),(0,c.jsx)("div",{className:"txt-dp",children:(0,c.jsx)("b",{children:(0,n.__)("SendinBlue Fields","bitform")})})]}),m.field_map.map((function(e,t){return(0,c.jsx)(h,{i:t,field:e,sendinBlueConf:m,formFields:f,setSendinBlueConf:p},"sendinblue-m-"+(t+9))})),(0,c.jsx)("div",{className:"txt-center  mt-2",style:{marginRight:85},children:(0,c.jsx)("button",{onClick:function(){return(0,r.FP)(m.field_map.length,m,p)},className:"icn-btn sh-sm",type:"button",children:"+"})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(null==(l=m.actions)?void 0:l.double_optin)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"flx",children:[(0,c.jsx)("b",{className:"wdt-150 d-in-b",children:(0,n.__)("Template: ","bitform")}),(0,c.jsxs)("div",{className:"w-5",children:[(0,c.jsxs)("select",{onChange:j,name:"templateId",value:null==m?void 0:m.templateId,className:"btcd-paper-inp",children:[(0,c.jsx)("option",{value:"",children:(0,n.__)("Select Template","bitform")}),(null==m||null==(d=m.default)?void 0:d.sblueTemplates)&&Object.values(m.default.sblueTemplates).map((function(e){return(0,c.jsx)("option",{value:e.id||m.templateId,children:e.name},"sendinblue-"+(e.id+2))}))]}),(0,c.jsx)("div",{style:{color:"red",fontSize:"15px",marginTop:"3px"},children:g.templateId})]}),(0,c.jsx)("button",{onClick:function(){return(0,o.e1)(m,p,v)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,n.__)("Refresh SendinBlue Templates","bitform")+"'"},type:"button",disabled:_,children:"↻"})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"flx",children:[(0,c.jsx)("b",{className:"wdt-150 d-in-b",children:(0,n.__)("RedirectionUrl:","bitform")}),(0,c.jsxs)("div",{className:"w-5",children:[(0,c.jsx)("input",{type:"url",className:"btcd-paper-inp",placeholder:"Redirection URL",onChange:j,value:(null==m?void 0:m.redirectionUrl)||"",name:"redirectionUrl"}),(0,c.jsx)("div",{style:{color:"red",fontSize:"15px",marginTop:"3px"},children:g.redirectionUrl})]})]}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{})]}),(0,c.jsx)("div",{className:"mt-4",children:(0,c.jsx)("b",{className:"wdt-100",children:(0,n.__)("Actions","bitform")})}),(0,c.jsx)("div",{className:"btcd-hr mt-1"}),(0,c.jsx)(u,{sendinBlueConf:m,setSendinBlueConf:p,setisLoading:b,setSnackbar:v})]})]})}}}]);