"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7041],{53132:(e,t,a)=>{a.d(t,{Mm:()=>l,WK:()=>r,P_:()=>o,FP:()=>d,T5:()=>m,wX:()=>u,mG:()=>f});var s=a(665),n=a(73305),i=a(77111),l=function(e,t,a,n,i,l,r){var o=[].concat(e);if(r)o[l]=(0,s.Z)({},e[l],n),o.push({editItegration:!0}),t([].concat(o)),i.push(a);else{var c=[].concat(o);c.push(n),c.push({newItegration:!0}),t(c),i.push(a)}},r=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},o=function(e,t,a,i,l,r,o,d,m){if(i.dataCenter&&i.clientId&&i.clientSecret){d(!0);var u="https://accounts.zoho."+i.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+i.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),f=window.open(u,e,"width=400,height=609,toolbar=off"),h=setInterval((function(){if(f.closed){clearInterval(h);var a={},r=!1,u=localStorage.getItem("__bitforms_"+e);if(u&&(r=!0,a=JSON.parse(u),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&r){var p=(0,s.Z)({},i);p.accountServer=a["accounts-server"],c(t,a,p,l,o,d,m)}else{var _=a.error?"Cause: "+a.error:"";m({show:!0,msg:(0,n.__)("Authorization failed","bitform")+" "+_+". "+(0,n.__)("please try again","bitform")}),d(!1)}}}),500)}else r({dataCenter:i.dataCenter?"":(0,n.__)("Data center cann't be empty","bitform"),clientId:i.clientId?"":(0,n.__)("Client ID cann't be empty","bitform"),clientSecret:i.clientSecret?"":(0,n.__)("Secret key cann't be empty","bitform")})},c=function(e,t,a,l,r,o,c){var d=(0,s.Z)({},t);d.dataCenter=a.dataCenter,d.clientId=a.clientId,d.clientSecret=a.clientSecret,d.redirectURI=bits.zohoRedirectURL,(0,i.Z)(d,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,s.Z)({},a);t.tokenDetails=e.data,l(t),r(!0),c({show:!0,msg:(0,n.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?c({show:!0,msg:""+(0,n.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):c({show:!0,msg:(0,n.__)("Authorization failed. please try again","bitform")});o(!1)}))},d=function(e,t,a,n,i){var l=(0,s.Z)({},t);i?n?l.relatedlists[i-1].upload_field_map.splice(e,0,{}):l.relatedlists[i-1].field_map.splice(e,0,{}):n?l.upload_field_map.splice(e,0,{}):l.field_map.splice(e,0,{}),a((0,s.Z)({},l))},m=function(e,t,a,n,i){var l=(0,s.Z)({},t);i?n?l.relatedlists[i-1].upload_field_map.length>1&&l.relatedlists[i-1].upload_field_map.splice(e,1):l.relatedlists[i-1].field_map.length>1&&l.relatedlists[i-1].field_map.splice(e,1):n?l.upload_field_map.length>1&&l.upload_field_map.splice(e,1):l.field_map.length>1&&l.field_map.splice(e,1),a((0,s.Z)({},l))},u=function(e,t,a,n,i,l){var r=(0,s.Z)({},a);l?i?r.relatedlists[l-1].upload_field_map[t][e.target.name]=e.target.value:r.relatedlists[l-1].field_map[t][e.target.name]=e.target.value:i?r.upload_field_map[t][e.target.name]=e.target.value:r.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(l?r.relatedlists[l-1].field_map[t].customValue="":r.field_map[t].customValue=""),n((0,s.Z)({},r))},f=function(e,t,a,n,i){var l=(0,s.Z)({},a);i?l.relatedlists[i-1].field_map[t].customValue=e.target.value:l.field_map[t].customValue=e.target.value,n((0,s.Z)({},l))}},8940:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(73305),n=a(4637);function i(e){var t=e.step,a=e.saveConfig,i=e.edit,l=e.disabled;return i?(0,n.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,n.jsx)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:l,children:(0,s.__)("Update","bitform")})}):(0,n.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===t&&"90%",height:3===t&&"100%"},children:[(0,n.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated","bitform")}),(0,n.jsxs)("button",{onClick:a,id:"secondary-update-btn",className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,s.__)("Finish & Save ","bitform")," ✔"]})]})}},8976:(e,t,a)=>{a.d(t,{c:()=>l,R:()=>r});var s=a(665),n=a(73305),i=a(77111),l=function(e,t,a,l){var r=(0,s.Z)({},e),o={bot_api_key:r.bot_api_key};a(!0),(0,i.Z)(o,"bitforms_refresh_get_updates").then((function(e){e&&e.success?(r.default||(r.default={}),e.data.telegramChatLists&&(r.default.telegramChatLists=e.data.telegramChatLists),l({show:!0,msg:(0,n.__)("Chat list refreshed","bitform")}),t((0,s.Z)({},r))):e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?l({show:!0,msg:""+(0,n.__)("Chat list refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,n.__)("please try again","bitform")}):l({show:!0,msg:(0,n.__)("Chat list refresh failed. please try again","bitform")}),a(!1)})).catch((function(){return a(!1)}))},r=function(e,t,a){var n=(0,s.Z)({},t);n.name=e.target.value,a((0,s.Z)({},n))}},59886:(e,t,a)=>{a.d(t,{Z:()=>_});var s=a(665),n=a(14103),i=a(19753),l=a(73305),r=a(67860),o=a(44246),c=a(85012),d=a(59496),m=a(83524),u=a(2598),f=a(4637);function h(e){var t,a=e.formFields,n=e.telegramConf,i=e.setTelegramConf,r=(0,d.useState)({show:!1}),o=r[0],c=r[1];return(0,f.jsxs)("div",{className:"pos-rel",children:[(0,f.jsx)("div",{className:"d-flx flx-wrp",children:(0,f.jsx)(u.Z,{onChange:function(){return c({show:"attachments"})},checked:"attachments"in n.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:(0,l.__)("Attachments","bitform"),subTitle:(0,l.__)("Add attachments from BitForm to send Telegram.","bitform")})}),(0,f.jsxs)(m.Z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:"Ok",show:"attachments"===o.show,close:function(){return c({show:!1})},action:function(){return c({show:!1})},title:(0,l.__)("Select Attachment","bitform"),children:[(0,f.jsx)("div",{className:"btcd-hr mt-2"}),(0,f.jsx)("div",{className:"mt-2",children:(0,l.__)("Please select file upload fields","bitform")}),(0,f.jsxs)("select",{onChange:function(e){return function(e){var t=(0,s.Z)({},n);""!==e.target.value?t.actions.attachments=e.target.value:delete t.actions.attachments,i((0,s.Z)({},t))}(e)},name:"attachments",value:null==(t=n.actions)?void 0:t.attachments,className:"btcd-paper-inp w-10 mt-2",children:[(0,f.jsx)("option",{value:"",children:(0,l.__)("Select file upload field","bitform")}),a.filter((function(e){return"file-up"===e.type})).map((function(e){return(0,f.jsx)("option",{value:e.key,children:e.name},e.key+1)}))]})]})]})}var p=a(8976);function _(e){e.formID;var t,a=e.formFields,d=e.telegramConf,m=e.setTelegramConf,u=e.isLoading,_=e.setisLoading,b=e.setSnackbar,g=function(e){var t=(0,s.Z)({},d);t[e.target.name]=e.target.value,m(t)},v=function(e){m((function(t){return(0,n.ZP)(t,(function(t){t.body=e}))}))},x=function(e){var t=(0,s.Z)({},d);null!=t&&t.body&&(t.body=""),t.parse_mode=e.target.value,m(t)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"flx",children:[(0,f.jsx)("b",{className:"wdt-150 d-in-b",children:(0,l.__)("Chat List: ","bitform")}),(0,f.jsxs)("select",{onChange:g,name:"chat_id",value:d.chat_id,className:"btcd-paper-inp w-5",children:[(0,f.jsx)("option",{value:"",children:(0,l.__)("Select Chat List","bitform")}),(null==d||null==(t=d.default)?void 0:t.telegramChatLists)&&Object.keys(d.default.telegramChatLists).map((function(e){return(0,f.jsx)("option",{value:d.default.telegramChatLists[e].id,children:d.default.telegramChatLists[e].name},e)}))]}),(0,f.jsx)("button",{onClick:function(){return(0,p.c)(d,m,_,b)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,l.__)("Refresh Telegram List","bitform")+"'"},type:"button",disabled:u,children:"↻"})]}),u&&(0,f.jsx)(r.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(null==d?void 0:d.chat_id)&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"flx mt-4",children:[(0,f.jsx)("b",{className:"wdt-150 d-in-b",children:(0,l.__)("Parse Mode: ","bitform")}),(0,f.jsx)(o.Z,{radio:!0,onChange:function(e){return x(e)},name:"HTML",title:(0,f.jsx)("small",{className:"txt-dp",children:(0,l.__)("HTML","bitform")}),checked:"HTML"===d.parse_mode,value:"HTML"}),(0,f.jsx)(o.Z,{radio:!0,onChange:function(e){return x(e)},name:"MarkdownV2",title:(0,f.jsx)("small",{className:"txt-dp",children:(0,l.__)("Markdown v2","bitform")}),checked:"MarkdownV2"===d.parse_mode,value:"MarkdownV2"})]}),(0,f.jsxs)("div",{className:"flx mt-4",children:[(0,f.jsx)("b",{className:"wdt-150 d-in-b",children:(0,l.__)("Messages: ","bitform")}),"HTML"===(null==d?void 0:d.parse_mode)?(0,f.jsx)(c.Z,{formFields:a,value:d.body,onChangeHandler:v,width:"100%",toolbarMnu:"bold italic underline strikethrough | link | code | addFormField | addSmartField"}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("textarea",{className:"w-7",onChange:g,name:"body",rows:"5",value:d.body}),(0,f.jsx)(i.Z,{options:a.filter((function(e){return"file-up"!==e.type})).map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:function(e){return v(e)}})]})]}),(0,f.jsx)("div",{className:"mt-4",children:(0,f.jsx)("b",{className:"wdt-100",children:(0,l.__)("Actions","bitform")})}),(0,f.jsx)("div",{className:"btcd-hr mt-1"}),(0,f.jsx)(h,{telegramConf:d,setTelegramConf:m,formFields:a})]})]})}},44246:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(4637);const n=function(e){var t=e.className,a=e.disabled,n=e.checked,i=e.onChange,l=e.radio,r=e.name,o=e.title,c=e.value,d=e.sqr;return(0,s.jsxs)("label",{className:"btcd-ck-wrp "+t,children:[o,(0,s.jsx)("input",{type:l?"radio":"checkbox",checked:n,onChange:i,name:r,value:c,disabled:a}),(0,s.jsx)("span",{className:"btcd-mrk "+(!d&&"br-50")+" "+(l?"rdo":"ck")})]})}}}]);