"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[3288],{53288:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var i=n(60795),s=n(59496),r=n(22440),l=n(88226),a=n(74127),o=n(39947),d=n(39296),c=n(4637);function u(e){e.formID;var t=e.sendFoxConf,n=e.setSendFoxConf,u=e.step,f=e.setstep,m=e.isLoading,b=e.setIsLoading,_=e.setSnackbar,F=e.redirectLocation,h=e.isInfo,x=(0,s.useState)(!1),g=x[0],p=x[1],v=(0,s.useState)({dataCenter:"",clientId:""}),k=v[0],j=v[1],y=function(e){var s=(0,i.Z)({},t),r=(0,i.Z)({},k);r[e.target.name]="",s[e.target.name]=e.target.value,j(r),n(s)};return(0,c.jsxs)("div",{className:"btcd-stp-page",style:(0,i.Z)({},{width:1===u&&900},{height:1===u&&"auto"}),children:[(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("b",{children:(0,l.__)("Integration Name:","bit-integrations")})}),(0,c.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:t.name,type:"text",placeholder:(0,l.__)("Integration Name...","bit-integrations"),disabled:h}),(0,c.jsxs)("small",{className:"d-blk mt-3",children:[(0,l.__)("To Get Client Auth token, Please Visit","bit-integrations")," ",(0,c.jsx)("a",{className:"btcd-link",href:"https://sendfox.com/account/oauth",target:"_blank",rel:"noreferrer",children:(0,l.__)("SendFox Access Token","bit-integrations")})]}),(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("b",{children:(0,l.__)("Authorized Redirect URIs:","bit-integrations")})}),(0,c.jsx)(o.Z,{value:F||""+window.location.href,className:"field-key-cpy w-6 ml-0",readOnly:h,setSnackbar:_}),(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("b",{children:(0,l.__)("Access Token:","bit-integrations")})}),(0,c.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"access_token",value:t.access_token,type:"text",placeholder:(0,l.__)("Access Token...","bit-integrations"),disabled:h}),(0,c.jsx)("div",{style:{color:"red",fontSize:"15px"},children:k.access_token}),!h&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("button",{onClick:function(){return(0,d.P_)(t,n,j,p,b,_)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:g||m,children:[g?(0,l.__)("Authorized ✔","bit-integrations"):(0,l.__)("Authorize","bit-integrations"),m&&(0,c.jsx)(a.Z,{size:20,clr:"#022217",className:"ml-2"})]}),(0,c.jsx)("br",{}),(0,c.jsxs)("button",{onClick:function(){setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),f(2)},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!g,children:[(0,l.__)("Next","bit-integrations"),(0,c.jsx)(r.Z,{className:"ml-1 rev-icn"})]})]})]})}},39296:(e,t,n)=>{n.d(t,{GF:()=>o,Kv:()=>f,P_:()=>d,Rx:()=>a,TN:()=>u,gn:()=>c,pK:()=>m});var i=n(60795),s=n(94965),r=n(97719),l=(n(12767),n(88226)),a=function(e,t,n,s,r,l){var a=(0,i.Z)({},t),d=e.target.name;""!==e.target.value?a[d]=e.target.value:delete a[d],"2"===a.mainAction&&o(a,n,s,r),n((0,i.Z)({},a))},o=function(e,t,n,a){n(!0);var o={access_token:e.access_token};(0,r.Z)(o,"bitforms_sendfox_fetch_all_list").then((function(r){if(r&&r.success){var a=(0,i.Z)({},e);return a.default||(a.default={}),r.data&&(a.default.allLists=r.data.data),t((0,i.Z)({},a)),n(!1),void s.ZP.success((0,l.__)("Lists fetched successfully","bit-integrations"))}n(!1),s.ZP.error((0,l.__)("Lists fetch failed. please try again","bit-integrations"))})).catch((function(){return n(!1)}))},d=function(e,t,n,a,o,d){if(e.access_token){n({}),o(!0);var c={access_token:e.access_token};(0,r.Z)(c,"bitforms_sendFox_authorize").then((function(n){if(n&&n.success){var r=(0,i.Z)({},e);return t(r),a(!0),o(!1),void s.ZP.success((0,l.__)("Authorized successfully","bit-integrations"))}o(!1),s.ZP.error((0,l.__)("Authorized failed","bit-integrations"))}))}else n({access_token:e.access_token?"":(0,l.__)("Access Token can't be empty","bit-integrations")})},c=function(e){var t=null==e?void 0:e.contactFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",sendFoxFormField:e.key}})):[{formField:"",sendFoxFormField:""}]},u=function(e){var t=null==e?void 0:e.listFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",sendFoxListFormField:e.key}})):[{formField:"",sendFoxListFormField:""}]},f=function(e){var t=null==e?void 0:e.unsubscribeFields.filter((function(e){return!0===e.required}));return t.length>0?t.map((function(e){return{formField:"",sendFoxUnsubscribeFormField:e.key}})):[{formField:"",sendFoxUnsubscribeFormField:""}]},m=function(e){return"1"===e.mainAction?!function(e){return!((null!=e&&e.field_map_list?e.field_map_list.filter((function(t){var n,i,s;return!t.formField&&t.sendFoxListFormField&&-1!==(null==e||null==(n=e.default)||null==(i=n.allFields)||null==(s=i[e.listId])?void 0:s.required.indexOf(t.sendFoxListFormField))})):[]).length>0)}(e):"2"===e.mainAction?!function(e){return(!e.field_map||!e.field_map.find((function(e){return!e.formField||!e.sendFoxFormField})))&&!((null!=e&&e.field_map?e.field_map.filter((function(t){var n,i,s;return!t.formField&&t.sendFoxFormField&&-1!==(null==e||null==(n=e.default)||null==(i=n.allFields)||null==(s=i[e.listId])?void 0:s.required.indexOf(t.sendFoxFormField))})):[]).length>0)}(e)||void 0===e.listId||""===e.listId:!function(e){return!((null!=e&&e.field_map_unsubscribe?e.field_map_unsubscribe.filter((function(t){var n,i,s;return!t.formField&&t.sendFoxUnsubscribeFormField&&-1!==(null==e||null==(n=e.default)||null==(i=n.allFields)||null==(s=i[e.listId])?void 0:s.required.indexOf(t.sendFoxUnsubscribeFormField))})):[]).length>0)}(e)}}}]);