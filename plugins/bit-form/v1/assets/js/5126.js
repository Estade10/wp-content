"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[5126],{15126:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var n=s(72564),i=s(59496),a=(s(69306),s(83442)),r=s(48291),l=(s(13536),s(20859)),d=s(66399),o=s(15643),c=s(77029),m=s(66917),u=s(49320),b=s(96193),g=s(7020),p=s(52665),h=s(4637);const x=function(e){var t,s=e.formFields,x=e.setIntegration,f=e.integrations,_=e.allIntegURL,y=(0,a.k6)(),j=(0,a.UO)().formID,k=(0,r.sJ)(l.hi),v=(k.isPro,(0,i.useState)(!1)),N=v[0],C=v[1],w=(0,i.useState)(1),I=w[0],S=w[1],A=(0,i.useState)({show:!1}),q=A[0],F=A[1],Z=(0,i.useState)({name:"Groundhogg",type:"Groundhogg",token:"",public_key:"",id:"",mainAction:"",addTagToUser:"",emailAddress:"",domainName:k.siteURL,showMeta:!1,field_map:[{formField:"",GroundhoggMapField:""}],field_map_meta:[{formField:"",GroundhoggMetaMapField:""}],contactsFields:[{key:"email",label:"Email",required:!0},{key:"first_name",label:"First Name",required:!1},{key:"last_name",label:"Last Name",required:!1},{key:"user_id",label:"User Id",required:!1},{key:"owner_id",label:"Owner Id",required:!1},{key:"optin_status",label:"Optin Status",required:!1}],contactMetaFields:[{key:"primary_phone",label:"Primary Phone",required:!1},{key:"street_address_1",label:"Street Address 1",required:!1},{key:"street_address_2",label:"Street Address 2",required:!1},{key:"postal_zip",label:"Postal Zip",required:!1},{key:"city",label:"City",required:!1},{key:"country",label:"Country",required:!1}],allActions:[{key:"1",label:"Create Contact"},{key:"2",label:"Add tag to user"}],address_field:[],actions:{}}),L=Z[0],T=Z[1],P=!("2"===L.mainAction&&""!==L.addTagToUser);return(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Z,{snack:q,setSnackbar:F}),(0,h.jsx)("div",{className:"txt-center w-9 mt-2",children:(0,h.jsx)(c.Z,{step:3,active:I})}),(0,h.jsx)(m.default,{formID:j,groundhoggConf:L,setGroundhoggConf:T,step:I,setstep:S,isLoading:N,setIsLoading:C,setSnackbar:F}),(0,h.jsxs)("div",{className:"btcd-stp-page",style:(0,n.Z)({},2===I&&{width:900,height:"auto",overflow:"visible"}),children:[(0,h.jsx)(b.Z,{formFields:s,handleInput:function(e){return(0,u.Rx)(e,L,T,j,C,F)},groundhoggConf:L,setGroundhoggConf:T,isLoading:N,setIsLoading:C,setSnackbar:F}),(0,h.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),void("1"===L.mainAction&&!(0,u.Pd)(L)||L.showMeta&&!(0,u.hr)(L)?F({show:!0,msg:"Please map fields to continue."}):""!==L.listId&&S(3))},disabled:("2"===L.mainAction?P:!((null==(t=L.field_map)?void 0:t.length)>=1))||N,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,d.__)("Next","bit-integrations")," "," ",(0,h.jsx)("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(0,h.jsx)(g.Z,{step:I,saveConfig:function(){(0,p.Mm)(f,x,_,L,y)}})]})}},66917:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var n=s(72564),i=s(59496),a=s(13536),r=s(66399),l=s(65105),d=(s(79122),s(49320)),o=s(4637);function c(e){var t=e.formID,s=e.groundhoggConf,c=e.setGroundhoggConf,m=e.step,u=e.setstep,b=e.isLoading,g=e.setIsLoading,p=e.setSnackbar,h=(e.redirectLocation,e.isInfo),x=(0,i.useState)(!1),f=x[0],_=x[1],y=(0,i.useState)({token:"",public_key:"",domainName:""}),j=y[0],k=y[1],v=function(e){var t=(0,n.Z)({},s),i=(0,n.Z)({},j);i[e.target.name]="",t[e.target.name]=e.target.value,k(i),c(t)};return(0,o.jsxs)("div",{className:"btcd-stp-page",style:(0,n.Z)({},{width:1===m&&900},{height:1===m&&"auto"}),children:[(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,r.__)("Integration Name:","bit-integrations")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"name",value:s.name,type:"text",placeholder:(0,r.__)("Integration Name...","bit-integrations"),disabled:h}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,r.__)("Your Domain Name:","bit-integrations")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"domainName",value:s.domainName,type:"text",placeholder:(0,r.__)("Integration Name...","bit-integrations"),disabled:h}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,r.__)("Public Key:","bit-integrations")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"public_key",value:s.public_key,type:"text",placeholder:(0,r.__)("Public Key...","bit-integrations"),disabled:h}),(0,o.jsx)("div",{className:"mt-3",children:(0,o.jsx)("b",{children:(0,r.__)("Token:","bit-integrations")})}),(0,o.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"token",value:s.token,type:"text",placeholder:(0,r.__)("Token...","bit-integrations"),disabled:h}),(0,o.jsx)("div",{style:{color:"red",fontSize:"15px"},children:j.api_key}),(0,o.jsx)("div",{style:{color:"red",fontSize:"15px"},children:j.clientSecret}),!h&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("button",{onClick:function(){return(0,d.P_)(s,c,k,_,g,p)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:f||b,children:[f?(0,r.__)("Authorized ✔","bit-integrations"):(0,r.__)("Authorize","bit-integrations"),b&&(0,o.jsx)(l.Z,{size:20,clr:"#022217",className:"ml-2"})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("button",{onClick:function(){setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),u(2),(0,d.C8)(t,s,c,g,p)},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!f,children:[(0,r.__)("Next","bit-integrations"),(0,o.jsx)(a.Z,{className:"ml-1 rev-icn"})]})]})]})}},77029:(e,t,s)=>{s.d(t,{Z:()=>a});var n=s(59496),i=s(4637);const a=function(e){var t=e.step,s=e.active,a=e.className;return(0,i.jsx)("div",{className:"d-in-b "+a,children:(0,i.jsxs)("div",{className:"flx flx-center",children:[Array(s).fill(0).map((function(e,t){return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),s-1!==t&&(0,i.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-s!==0&&(0,i.jsx)("div",{className:"btcd-stp-line"}),Array(t-s).fill(0).map((function(e,a){return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:a+s+1}),t-s-1!==a&&(0,i.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(a+23))}))]})})}}}]);