"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[4e3,636],{80636:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var n=t(665),a=t(59496),r=t(19753),l=t(33290),i=t(47359),c=t(94557),o=t(77111),d=t(73305),m=t(73239),u=t(8665),f=t(4637);function b(e){e.formID;var s,t=e.formFields,b=e.webHooks,h=e.setWebHooks,p=(e.step,e.setstep),x=e.setSnackbar,v=e.create,j=e.isInfo,N=function(e){return null==e?void 0:e.match(/(\?|&)([^=]+)=([^&]+|)/gi)},g=(0,a.useState)(!1),_=g[0],k=g[1],y=(0,a.useRef)(null),w=function(e){k(!0),(0,o.Z)({hookDetails:e},"bitforms_test_webhook").then((function(e){if(e&&e.success)y.current.innerHTML="<pre>"+function(e){try{return JSON.stringify(e,null,2)}catch(s){return e}}(e.data.response)+"</pre>",x({show:!0,msg:(0,d.__)(e.data.msg)}),k(!1);else if(e&&e.data){var s="string"===typeof e.data?e.data:"Unknown error";x({show:!0,msg:s+". "+(0,d.__)("please try again","bitform")}),k(!1)}else x({show:!0,msg:(0,d.__)("Webhook tests failed. please try again","bitform")}),k(!1)}))},C=function(e,s,t){var a=(0,n.Z)({},b);""!==s?a.url="key"===e?a.url.replace(t,""+t.charAt(0)+s+"="+t.split("=")[1]):a.url.replace(t,t.split("=")[0]+"="+s):null===t.match(/\?/g)?a.url=a.url.replace(t,""):a.url=a.url.replace(t+"&","?"),h(a)},Z=function(e){var s=(0,n.Z)({},b);s[e.target.name]=e.target.value,h((0,n.Z)({},s))};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{style:(0,n.Z)({},{width:j&&900}),children:[(0,f.jsx)("div",{className:"flx ",children:(0,f.jsxs)("div",{className:"w-7 mr-2 mb-4",children:[(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Integration name","bitform")}),(0,f.jsx)("input",{name:"name",onChange:function(e){return Z(e)},className:"btcd-paper-inp mt-1",type:"text",value:b.name,disabled:j})]})}),(0,f.jsxs)("div",{className:"flx",children:[(0,f.jsxs)("div",{className:"w-7 mr-2",children:[(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Link:","bitform")}),(0,f.jsx)("input",{name:"url",onChange:function(e){return Z(e)},className:"btcd-paper-inp mt-1",type:"text",value:b.url,disabled:j}),(null==b?void 0:b.apiConsole)&&(0,f.jsxs)("small",{className:"d-blk mt-2",children:[(0,d.__)("To got Webhook , Please Visit","bitform")," ",(0,f.jsx)("a",{className:"btcd-link",href:b.apiConsole,target:"_blank",rel:"noreferrer",children:(0,d.__)(b.type+" Dashboard","bitform")})]})]}),(0,f.jsxs)("div",{className:"w-3",children:[(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Method:","bitform")}),(0,f.jsx)("select",{name:"method",onChange:function(e){return Z(e)},defaultValue:b.method,className:"btcd-paper-inp mt-1",disabled:j,children:["GET","POST","PUT","PATCH","OPTION","DELETE","TRACE","CONNECT"].map((function(e,s){return(0,f.jsx)("option",{value:e,children:e},"method-"+2*s)}))})]})]}),!j&&(0,f.jsxs)(u.Z,{onClick:function(){return w(b)},className:"btn btcd-btn-o-blue",disabled:_,children:[(0,d.__)("Test Webhook","bitform"),_&&(0,f.jsx)(m.Z,{size:14,clr:"#022217",className:"ml-2"})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("div",{className:"wh-resp-box",children:[(0,f.jsx)("div",{className:"f-m wh-resp-box-title",children:(0,d.__)("Response:","bitform")}),(0,f.jsx)("div",{className:"wh-resp-box-content",ref:y,children:"Test Webhook to see the response."})]}),(0,f.jsx)("br",{}),(0,f.jsx)("div",{className:"f-m",children:(0,d.__)("Add Url Parameter: (optional)","bitform")}),(0,f.jsx)("div",{className:"btcd-param-t-wrp mt-1",children:(0,f.jsxs)("div",{className:"btcd-param-t",children:[(0,f.jsxs)("div",{className:"tr",children:[(0,f.jsx)("div",{className:"td",children:(0,d.__)("Key","bitform")}),(0,f.jsx)("div",{className:"td",children:(0,d.__)("Value","bitform")})]}),null!==N(b.url)&&(null==(s=N(b.url))?void 0:s.map((function(e,s){return(0,f.jsxs)("div",{className:"tr",children:[(0,f.jsx)("div",{className:"td",children:(0,f.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(s){return C("key",s.target.value,e)},type:"text",value:e.split("=")[0].substr(1),disabled:j})}),(0,f.jsx)("div",{className:"td",children:(0,f.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(s){return C("val",s.target.value,e)},type:"text",value:e.split("=")[1],disabled:j})}),!j&&(0,f.jsxs)("div",{className:"flx p-atn",children:[(0,f.jsx)(u.Z,{onClick:function(){return function(e){var s=(0,n.Z)({},b);s.url=s.url.replace(e,""),h(s)}(e)},icn:!0,children:(0,f.jsx)(c.Z,{size:16})}),(0,f.jsx)(r.Z,{options:t.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:function(s){return function(e,s){var t=(0,n.Z)({},b),a=s.split("=");a[1]=e,t.url=t.url.replace(s,a.join("=")),h(t)}(s,e)},defaultValue:e.split("=")[1]})]})]},"fu-1"+3*s)}))),!j&&(0,f.jsx)(u.Z,{onClick:function(){return function(){var e=(0,n.Z)({},b);null!==e.url.match(/\?/g)?e.url+="&key=value":e.url+="?key=value",h(e)}()},className:"add-pram",icn:!0,children:(0,f.jsx)(i.Z,{size:"14",className:"icn-rotate-45"})})]})}),v&&(0,f.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),void p(2)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",children:[(0,d.__)("Next","bitform"),(0,f.jsx)(l.Z,{className:"ml-1 rev-icn"})]})]})})}},88497:(e,s,t)=>{t.d(s,{Z:()=>r});var n=t(73305),a=t(4637);function r(e){e.step;var s=e.saveConfig,t=e.edit,r=e.disabled;return t?(0,a.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,a.jsx)("button",{onClick:s,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:r,children:(0,n.__)("Save","bitform")})}):(0,a.jsxs)("div",{className:"txt-center",style:{marginLeft:210},children:[(0,a.jsx)("h2",{className:"ml-3",children:(0,n.__)("Successfully Integrated","bitform")}),(0,a.jsxs)("button",{onClick:s,className:"btn btcd-btn-lg green sh-sm",type:"button",children:[(0,n.__)("Finish & Save ","bitform"),"✔"]})]})}},14e3:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var n=t(665),a=t(59496),r=t(87230),l=t(65194),i=t(53132),c=t(80636),o=t(88497),d=t(4637);const m=function(e){var s=e.formFields,t=e.setIntegration,m=e.integrations,u=e.allIntegURL,f=(0,r.k6)(),b=(0,r.UO)(),h=b.id,p=b.formID,x=(0,a.useState)((0,n.Z)({},m[h])),v=x[0],j=x[1],N=(0,a.useState)({show:!1}),g=N[0],_=N[1];return(0,d.jsxs)("div",{style:{width:900},children:[(0,d.jsx)(l.Z,{snack:g,setSnackbar:_}),(0,d.jsx)("div",{className:"mt-3",children:(0,d.jsx)(c.default,{formID:p,formFields:s,webHooks:v,setWebHooks:j,setSnackbar:_})}),(0,d.jsx)(o.Z,{edit:!0,saveConfig:function(){return(0,i.Mm)(m,t,u,v,f,h,1)}}),(0,d.jsx)("br",{})]})}}}]);