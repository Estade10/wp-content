"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[4495],{97633:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(4637);function r(e){var t=e.className,s=e.stroke,r=void 0===s?2:s,i=e.size,a=void 0===i?14:i;return(0,n.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 30 30",children:[(0,n.jsx)("path",{className:"svg-icn",strokeWidth:r,d:"M13.83,6.32H6.11a2.19,2.19,0,0,0-2.2,2.19v15.3A2.19,2.19,0,0,0,6.11,26H21.55a2.19,2.19,0,0,0,2.2-2.19V16.16"}),(0,n.jsx)("path",{className:"svg-icn",strokeWidth:r,d:"M22.1,4.68a2.35,2.35,0,0,1,3.31,0,2.31,2.31,0,0,1,0,3.28L14.93,18.35l-4.41,1.09,1.11-4.37Z"})]})}},54495:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(78450),r=s(6534),i=s.n(r),a=s(59496),c=s(83442),l=s(78736),o=s(51108),u=s(51163),d=s(18846),p=s(48291),m=s(90794),h=s(83460),f=s(65037),x=s(32198),v=s(5980),b=s(67362),j=s(46377),g=s(65362),y=s(4637);function N(e){var t,s,r=e.removeIntegration,c=(0,a.useState)({show:!1,action:null}),l=c[0],N=c[1],k=(0,p.FV)(m.UL),w=k[0],_=k[1],Z=(0,p.sJ)(m.uJ),C=function(){var e=(0,n.Z)(i().mark((function e(t){var s,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(0,x.p$)(w),n=s.type.successMsg[t],s.type.successMsg.splice(t,1),_(s),l.show=!1,N((0,u.Z)({},l)),void 0===n.id){e.next=11;break}return e.next=9,r(n.id,"msg");case 9:e.sent||(s.type.successMsg.splice(t,0,n),_(s));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(j.Z,{action:l.action,show:l.show,body:(0,o.__)("Are you sure to delete this message ?","bitform"),btnTxt:(0,o.__)("Delete","bitform"),close:function(){l.show=!1,N((0,u.Z)({},l))}}),null!=w&&null!=(t=w.type)&&t.successMsg?null==(s=w.type.successMsg)?void 0:s.map((function(e,t){return(0,y.jsxs)("div",{className:"flx",children:[(0,y.jsx)(v.Z,{title:e.title,titleEditable:!0,cls:"mt-2 mr-2 w-9",onTitleChange:function(e){return function(e,t){var s=(0,x.p$)(w);s.type.successMsg[t].title=e.target.value,_(s)}(e,t)},children:(0,y.jsx)(g.Z,{id:"conf-"+t,formFields:Z,value:e.msg,onChangeHandler:function(e){return s=e,n=t,void _((function(e){return(0,d.ZP)(e,(function(e){e.type.successMsg[n].msg=s}))}));var s,n}})}),(0,y.jsx)(b.Z,{onClick:function(){return function(e){l.show=!0,l.action=function(){return C(e)},N((0,u.Z)({},l))}(t)},icn:!0,className:"sh-sm white mt-2",children:(0,y.jsx)(f.Z,{size:16})})]},"f-m-"+(t+1))})):(0,y.jsxs)("div",{className:"txt-center btcd-empty",children:[(0,y.jsx)("span",{className:"btcd-icn icn-stack"}),(0,o.__)("Empty","bitform")]}),(0,y.jsx)("div",{className:"txt-center",children:(0,y.jsx)(b.Z,{onClick:function(){var e,t=(0,x.p$)(w);null!=t&&null!=(e=t.type)&&e.successMsg||(t.type=(0,u.Z)({successMsg:[]},t.type)),t.type.successMsg.push({title:"Untitled Message "+(t.type.successMsg.length+1),msg:(0,o.__)("Successfully Submitted.","bitform")}),_(t)},icn:!0,className:"sh-sm blue tooltip mt-2",style:{"--tooltip-txt":"'"+(0,o.__)("Add More Alternative Success Message","bitform")+"'"},children:(0,y.jsx)(h.Z,{size:"14",stroke:"3",className:"icn-rotate-45"})})})]})}const k=(0,a.memo)(N);var w=s(55873);function _(e){var t,s=e.removeIntegration,r=(0,a.useState)({show:!1,action:null}),c=r[0],l=r[1],d=(0,a.useState)(null),g=d[0],N=d[1],k=(0,p.FV)(m.UL),_=k[0],Z=k[1],C=(0,p.sJ)(m.uJ);(0,a.useEffect)((function(){(0,w.Z)(null,"bitforms_get_all_wp_pages").then((function(e){null!=e&&e.success&&null!=e&&e.data&&N(e.data)}))}),[]);var P=function(e){return e.match(/(\?|&)([^=]+)=([^&]+|)/gi)},H=function(e,t,s,n){var r=(0,x.p$)(_);""!==t?r.type.redirectPage[n].url="key"===e?r.type.redirectPage[n].url.replace(s,""+s.charAt(0)+t+"="+s.split("=")[1]):r.type.redirectPage[n].url.replace(s,s.split("=")[0]+"="+t):null===s.match(/\?/g)?r.type.redirectPage[n].url=r.type.redirectPage[n].url.replace(s,""):r.type.redirectPage[n].url=r.type.redirectPage[n].url.replace(s+"&","?"),Z(r)},T=function(){var e=(0,n.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,x.p$)(_),r=n.type.redirectPage[t],n.type.redirectPage.splice(t,1),Z(n),c.show=!1,l((0,u.Z)({},c)),void 0===r.id){e.next=11;break}return e.next=9,s(r.id,"url");case 9:e.sent||(n.type.redirectPage.splice(t,0,r),Z(n));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(j.Z,{action:c.action,show:c.show,body:(0,o.__)("Are you sure to delete this URL ?","bitform"),btnTxt:(0,o.__)("Delete","bitform"),close:function(){c.show=!1,l((0,u.Z)({},c))}}),null!=_&&null!=(t=_.type)&&t.redirectPage?_.type.redirectPage.map((function(e,t){return(0,y.jsxs)("div",{className:"flx",children:[(0,y.jsxs)(v.Z,{title:e.title,titleEditable:!0,cls:"mt-2 mr-2 w-9",onTitleChange:function(e){return function(e,t){var s=(0,x.p$)(_);s.type.redirectPage[t].title=e.target.value,Z(s)}(e,t)},children:[(0,y.jsx)("div",{className:"f-m",children:(0,o.__)("Select A Page:","bitform")}),(0,y.jsxs)("select",{className:"btcd-paper-inp mt-1",onChange:function(e){return function(e,t){var s=(0,x.p$)(_);s.type.redirectPage[t].url=e.target.value,Z(s)}(e,t)},children:[(0,y.jsx)("option",{value:"",children:(0,o.__)("Custom Link","bitform")}),g&&g.map((function(e,t){return(0,y.jsx)("option",{value:e.url,children:e.title},"r-url-"+(t+22))}))]}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"f-m",children:"Link:"}),(0,y.jsx)("input",{onChange:function(e){return function(e,t){var s=(0,x.p$)(_);s.type.redirectPage[t].url=e,Z(s)}(e.target.value,t)},className:"btcd-paper-inp mt-1",type:"text",value:e.url}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"f-m",children:(0,o.__)("Add Url Parameter: (optional)","bitform")}),(0,y.jsx)("div",{className:"btcd-param-t-wrp mt-1",children:(0,y.jsxs)("div",{className:"btcd-param-t",children:[(0,y.jsxs)("div",{className:"tr",children:[(0,y.jsx)("div",{className:"td",children:(0,o.__)("Key","bitform")}),(0,y.jsx)("div",{className:"td",children:(0,o.__)("Value","bitform")})]}),null!==P(e.url)&&P(e.url).map((function(e,s){return(0,y.jsxs)("div",{className:"tr",children:[(0,y.jsx)("div",{className:"td",children:(0,y.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(s){return H("key",s.target.value,e,t)},type:"text",value:e.split("=")[0].substr(1)})}),(0,y.jsx)("div",{className:"td",children:(0,y.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(s){return H("val",s.target.value,e,t)},type:"text",value:e.split("=")[1]})}),(0,y.jsxs)("div",{className:"flx p-atn",children:[(0,y.jsx)(b.Z,{onClick:function(){return function(e,t){var s=(0,x.p$)(_);s.type.redirectPage[e].url=s.type.redirectPage[e].url.replace(t,""),Z(s)}(t,e)},icn:!0,children:(0,y.jsx)(f.Z,{size:16})}),(0,y.jsx)("span",{className:"tooltip",style:{"--tooltip-txt":"'"+(0,o.__)("set Form Field","bitform")+"'",position:"relative"},children:(0,y.jsxs)("select",{className:"btcd-paper-inp p-i-sm mt-1",onChange:function(s){return function(e,t,s){var n=(0,x.p$)(_),r=s.split("=");r[1]=e,n.type.redirectPage[t].url=n.type.redirectPage[t].url.replace(s,r.join("=")),Z(n)}(s.target.value,t,e)},defaultValue:e.split("=")[1],children:[(0,y.jsx)("option",{value:"",children:(0,o.__)("Select Form Field","bitform")}),null!==C&&C.map((function(e){return!e.type.match(/^(file-up|recaptcha)$/)&&(0,y.jsx)("option",{value:"${"+e.key+"}",children:e.name},e.key)}))]})})]})]},"url-p-"+(s+21))})),(0,y.jsx)(b.Z,{onClick:function(){return function(e){var t=(0,x.p$)(_);null!==t.type.redirectPage[e].url.match(/\?/g)?t.type.redirectPage[e].url+="&key=value":t.type.redirectPage[e].url+="?key=value",Z(t)}(t)},className:"add-pram",icn:!0,children:(0,y.jsx)(h.Z,{size:"14",stroke:"3",className:"icn-rotate-45"})})]})})]}),(0,y.jsx)(b.Z,{onClick:function(){return function(e){c.show=!0,c.action=function(){return T(e)},l((0,u.Z)({},c))}(t)},icn:!0,className:"sh-sm white mt-2",children:(0,y.jsx)(f.Z,{size:16})})]},"f-u-"+(t+1))})):(0,y.jsxs)("div",{className:"txt-center btcd-empty",children:[(0,y.jsx)("span",{className:"btcd-icn icn-stack"}),(0,o.__)("Empty","bitform")]}),(0,y.jsx)("div",{className:"txt-center",children:(0,y.jsx)(b.Z,{onClick:function(){var e,t=(0,x.p$)(_);null!=t&&null!=(e=t.type)&&e.redirectPage||(t.type=(0,u.Z)({redirectPage:[]},t.type)),t.type.redirectPage.push({title:"Redirect Url "+(t.type.redirectPage.length+1),url:""}),Z(t)},icn:!0,className:"sh-sm blue tooltip mt-2",style:{"--tooltip-txt":"'"+(0,o.__)("Add More Alternative URl","bitform")+"'"},children:(0,y.jsx)(h.Z,{size:"14",stroke:"3",className:"icn-rotate-45"})})})]})}const Z=(0,a.memo)(_);var C=s(83428),P=s(75995);function H(e){var t,s=e.removeIntegration,r=(0,a.useState)({show:!1,action:null}),c=r[0],l=r[1],d=(0,a.useState)({show:!1}),g=d[0],N=d[1],k=(0,p.FV)(m.UL),_=k[0],Z=k[1],H=(0,p.sJ)(m.uJ),T=(0,a.useRef)([]),E=function(e){e&&!T.current.includes(e)&&T.current.push(e)},$=function(e){var t=e.match(/(\?|&)([^=]+)=([^&]+|)/gi),s=[];if(t)for(var n=0;n<t.length;n+=1){var r=t[n].split("=");s.push({key:r[0].substring(1),value:r[1]})}return s},M=function(e,t,s,n){var r=(0,x.p$)(_);r.type.webHooks[s].params[n][e]=t,r.type.webHooks[s].url=L(s),Z(r)},A=function(){var e=(0,n.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,x.p$)(_),r=n.type.webHooks[t],n.type.webHooks.splice(t,1),Z(n),c.show=!1,l((0,u.Z)({},c)),void 0===r.id){e.next=11;break}return e.next=9,s(r.id,"hook");case 9:e.sent||(n.type.webHooks.splice(t,0,r),Z(n));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){var t=(0,x.p$)(_);(0,w.Z)({hookDetails:t.type.webHooks[e]},"bitforms_test_webhook").then((function(t){if(t&&t.success)0===t.data.response.length?T.current[e].innerHTML=(0,o.__)("No response from the server"):T.current[e].innerHTML="<pre>"+function(e){try{return JSON.stringify(e,null,2)}catch(t){return e}}(t.data.response)+"</pre>",N({show:!0,msg:(0,o.__)(t.data.msg)});else if(t&&t.data){var s="string"===typeof t.data?t.data:"Unknown error";N({show:!0,msg:s+". "+(0,o.__)("please try again","bitform")})}else N({show:!0,msg:(0,o.__)("Webhook tests failed. please try again","bitform")})}))},L=function(e){var t=(0,x.p$)(_),s=t.type.webHooks[e].url,n=t.type.webHooks[e].params;if(s=s.replaceAll(/\?.*/gi,""),n)for(var r=n.length,i=0;i<r;i+=1)0===i&&null===s.match(/\?/g)?s+="?"+n[i].key+"="+n[i].value:s+="&"+n[i].key+"="+n[i].value;return s};return(0,y.jsxs)("div",{children:[(0,y.jsx)(P.Z,{snack:g,setSnackbar:N}),(0,y.jsx)(j.Z,{action:c.action,show:c.show,body:(0,o.__)("Are you sure to delete this web hook?","bitform"),btnTxt:(0,o.__)("Delete","bitform"),close:function(){c.show=!1,l((0,u.Z)({},c))}}),null!=_&&null!=(t=_.type)&&t.webHooks?_.type.webHooks.map((function(e,t){return(0,y.jsxs)("div",{className:"flx",children:[(0,y.jsxs)(v.Z,{title:e.title,titleEditable:!0,cls:"mt-2 mr-2 w-9",onTitleChange:function(e){return function(e,t){var s=(0,x.p$)(_);s.type.webHooks[t].title=e.target.value,Z(s)}(e,t)},children:[(0,y.jsx)("br",{}),(0,y.jsxs)("div",{className:"flx",children:[(0,y.jsxs)("div",{className:"w-7 mr-2",children:[(0,y.jsx)("div",{className:"f-m",children:(0,o.__)("Link:","bitform")}),(0,y.jsx)("input",{onChange:function(e){return function(e,t){var s=(0,x.p$)(_);Z(s),s.type.webHooks[t].url=e,s.type.webHooks[t].params=$(e)}(e.target.value,t)},className:"btcd-paper-inp mt-1",type:"text",value:e.url})]}),(0,y.jsxs)("div",{className:"w-3",children:[(0,y.jsx)("div",{className:"f-m",children:(0,o.__)("Method:","bitform")}),(0,y.jsxs)("select",{onChange:function(e){return function(e,t){var s=(0,x.p$)(_);s.type.webHooks[t].method=e,Z(s)}(e.target.value,t)},defaultValue:e.method,className:"btcd-paper-inp mt-1",children:[(0,y.jsx)("option",{value:"GET",children:"GET"}),(0,y.jsx)("option",{value:"POST",children:"POST"}),(0,y.jsx)("option",{value:"PUT",children:"PUT"}),(0,y.jsx)("option",{value:"PATCH",children:"PATCH"}),(0,y.jsx)("option",{value:"OPTION",children:"OPTION"}),(0,y.jsx)("option",{value:"DELETE",children:"DELETE"}),(0,y.jsx)("option",{value:"TRACE",children:"TRACE"}),(0,y.jsx)("option",{value:"CONNECT",children:"CONNECT"})]})]})]}),(0,y.jsx)(b.Z,{onClick:function(){return S(t)},className:"btn btcd-btn-o-blue",children:(0,o.__)("Test Webhook","bitform")}),(0,y.jsx)("br",{}),(0,y.jsxs)("div",{className:"wh-resp-box",children:[(0,y.jsx)("div",{className:"f-m wh-resp-box-title",children:(0,o.__)("Response:","bitform")}),(0,y.jsx)("div",{className:"wh-resp-box-content",ref:E,children:"Test Webhook to see the response."})]}),(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"f-m",children:(0,o.__)("Add Url Parameter: (optional)","bitform")}),(0,y.jsx)("div",{className:"btcd-param-t-wrp mt-1",children:(0,y.jsxs)("div",{className:"btcd-param-t",children:[(0,y.jsxs)("div",{className:"tr",children:[(0,y.jsx)("div",{className:"td",children:(0,o.__)("Key","bitform")}),(0,y.jsx)("div",{className:"td",children:(0,o.__)("Value","bitform")})]}),(null==e?void 0:e.params)&&e.params.map((function(e,s){var n=e.key,r=e.value;return(0,y.jsxs)("div",{className:"tr",children:[(0,y.jsx)("div",{className:"td",children:(0,y.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(e){return M("key",e.target.value,t,s)},type:"text",value:n})}),(0,y.jsx)("div",{className:"td",children:(0,y.jsx)("input",{className:"btcd-paper-inp p-i-sm",onChange:function(e){return M("value",e.target.value,t,s)},type:"text",value:r})}),(0,y.jsxs)("div",{className:"flx p-atn",children:[(0,y.jsx)(b.Z,{onClick:function(){return function(e,t){var s=(0,x.p$)(_);s.type.webHooks[e].params.splice(t,1),s.type.webHooks[e].url=L(e),Z(s)}(t,s)},icn:!0,children:(0,y.jsx)(f.Z,{size:16})}),(0,y.jsx)(C.Z,{options:H.map((function(e){return{label:e.name,value:"${"+e.key+"}"}})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:function(e){return M("value",e,t,s)},defaultValue:r})]})]},"url-p-"+(s+11))})),(0,y.jsx)(b.Z,{onClick:function(){return function(e){var t,s,n=(0,x.p$)(_);if(null!=(t=n.type.webHooks[e])&&t.params){if(null!=(s=n.type.webHooks[e])&&s.params){var r=n.type.webHooks[e].url;n.type.webHooks[e].params=$(r)}}else n.type.webHooks[e].params=[];n.type.webHooks[e].params.push({key:"key",value:"value"}),n.type.webHooks[e].url=L(e),Z(n)}(t)},className:"add-pram",icn:!0,children:(0,y.jsx)(h.Z,{size:"14",stroke:"3",className:"icn-rotate-45"})})]})})]}),(0,y.jsx)(b.Z,{onClick:function(){return function(e){c.show=!0,c.action=function(){return A(e)},l((0,u.Z)({},c))}(t)},icn:!0,className:"sh-sm white mt-2",children:(0,y.jsx)(f.Z,{size:16})})]},"f-u-"+(t+1))})):(0,y.jsxs)("div",{className:"txt-center btcd-empty",children:[(0,y.jsx)("span",{className:"btcd-icn icn-stack"}),(0,o.__)("Empty","bitform")]}),(0,y.jsx)("div",{className:"txt-center",children:(0,y.jsx)(b.Z,{onClick:function(){var e,t=(0,x.p$)(_);null!=t&&null!=(e=t.type)&&e.webHooks||(t.type=(0,u.Z)({webHooks:[]},t.type)),t.type.webHooks.push({title:"Web Hook "+(t.type.webHooks.length+1),url:"",method:"GET"}),Z(t)},icn:!0,className:"sh-sm blue tooltip mt-2",style:{"--tooltip-txt":"'"+(0,o.__)("Add More Hook","bitform")+"'"},children:(0,y.jsx)(h.Z,{size:"14",stroke:"3",className:"icn-rotate-45"})})})]})}const T=(0,a.memo)(H);function E(e){var t=e.formID,s=(0,c.$B)().path,r=function(){var e=(0,n.Z)(i().mark((function e(s,n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=null),r="bitforms_delete_integration",n&&"msg"===n&&(r="bitforms_delete_success_messsage"),e.next=5,(0,w.Z)({formID:t,id:s},r);case 5:return a=void 0!==(a=e.sent)?a.success:a.data&&a.data.data?a.data.data:null,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{className:"mt-4",style:{width:900},children:[(0,y.jsx)("h2",{children:(0,o.__)("Confirmations","bitform")}),(0,y.jsxs)("div",{children:[(0,y.jsx)(l.OL,{exact:!0,to:"/form/settings/edit/"+t+"/confirmations",className:"btcd-f-c-t-o mr-4 sh-sm",activeClassName:"btcd-f-c-t-o-a",children:(0,o.__)("Success/Error Messages","bitform")}),(0,y.jsx)(l.OL,{to:"/form/settings/edit/"+t+"/confirmations/redirect-url",className:"btcd-f-c-t-o mr-4 sh-sm",activeClassName:"btcd-f-c-t-o-a",children:(0,o.__)("Redirect Page","bitform")}),(0,y.jsx)(l.OL,{to:"/form/settings/edit/"+t+"/confirmations/webhooks",className:"btcd-f-c-t-o mr-4 sh-sm",activeClassName:"btcd-f-c-t-o-a",children:(0,o.__)("Web Hooks","bitform")})]}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsxs)(c.rs,{children:[(0,y.jsx)(c.AW,{exact:!0,path:s,children:(0,y.jsx)(k,{removeIntegration:r})}),(0,y.jsx)(c.AW,{path:s+"/:redirect-url",children:(0,y.jsx)(Z,{removeIntegration:r})}),(0,y.jsx)(c.AW,{path:s+"/:webhooks",children:(0,y.jsx)(T,{removeIntegration:r})})]})]})}},5980:(e,t,s)=>{s.d(t,{Z:()=>u});var n=s(59496),r=s(29404),i=s(97633),a=s(67362),c=s(85493),l=s(4637);function o(e){var t=e.title,s=e.customTitle,o=e.subtitle,u=e.children,d=e.titleEditable,p=e.onTitleChange,m=e.cls,h=(e.notScroll,e.header),f=e.onExpand,x=e.onCollapse,v=e.toggle,b=e.action,j=e.checked,g=(0,n.useState)(!1),y=g[0],N=g[1],k=(0,n.useState)(0),w=k[0],_=k[1],Z=(0,n.useRef)(null),C=function(e){e.target.classList.contains("edit")||N(!y)},P=function(){Z.current.focus()};return(0,l.jsxs)("div",{className:"btcd-accr sh-sm "+m,children:[(0,l.jsxs)("div",{className:"btcd-accr-btn "+(y&&"blue")+" flx flx-between",onClick:C,onKeyPress:C,role:"button",tabIndex:0,children:[(0,l.jsxs)("div",{className:"btcd-accr-title w-10",children:[(0,l.jsxs)("div",{children:[s,void 0!==t&&(0,l.jsx)("input",{title:t,ref:Z,className:d&&"edit",style:{color:y?"white":"inherit"},type:"text",onChange:p,value:t,readOnly:void 0===d}),d&&(0,l.jsx)("div",{className:"edit-icn",onClick:P,onKeyPress:P,role:"button",tabIndex:0,"aria-label":"focus edit",children:(0,l.jsx)("span",{style:{color:y?"white":"gray"},children:(0,l.jsx)(i.Z,{})})}),!y&&h]}),void 0!==o&&(0,l.jsx)("small",{children:o})]}),v&&(0,l.jsx)(c.Z,{action:b,checked:j,className:"flx"}),(0,l.jsx)(a.Z,{icn:!0,children:(0,l.jsx)("span",{className:"btcd-icn icn-"+(y?"keyboard_arrow_up":"keyboard_arrow_down"),style:{color:y?"white":"inherit"}})})]}),(0,l.jsx)("div",{className:"o-h "+(y&&"delay-overflow"),style:{height:w,transition:"height 300ms"},children:(0,l.jsx)(r.Z,{in:y,timeout:300,onEntering:function(e){return _(e.offsetHeight)},onEntered:function(){_("auto"),f&&f()},onExiting:function(){return _(0)},onExit:function(e){return function(e){_(e.offsetHeight),x&&x()}(e)},unmountOnExit:!0,children:(0,l.jsx)("div",{className:"p-2",children:u})})})]})}const u=(0,n.memo)(o)},85493:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(4637);function r(e){var t=e.className,s=e.name,r=e.title,i=e.action,a=e.disabled,c=e.checked;return(0,n.jsxs)("div",{className:""+t,children:[(0,n.jsx)("span",{children:r}),(0,n.jsxs)("label",{className:"btcd-label",children:[(0,n.jsxs)("div",{className:"btcd-toggle",children:[(0,n.jsx)("input",{"aria-label":r,onChange:function(e){a||i(e)},className:"btcd-toggle-state",type:"checkbox",name:s,id:s,value:"check",checked:c}),(0,n.jsx)("div",{className:"btcd-toggle-inner",children:(0,n.jsx)("div",{className:"btcd-indicator"})}),(0,n.jsx)("div",{className:"btcd-active-bg"})]}),(0,n.jsx)("div",{className:"btcd-label-text"})]})]})}}}]);