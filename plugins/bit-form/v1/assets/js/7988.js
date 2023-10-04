"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[7988],{61473:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(4637);function n(e){var t=e.className,a=e.stroke,n=void 0===a?2:a,r=e.size,o=void 0===r?14:r;return(0,s.jsxs)("svg",{className:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 30 30",children:[(0,s.jsx)("path",{className:"svg-icn",strokeWidth:n,d:"M13.83,6.32H6.11a2.19,2.19,0,0,0-2.2,2.19v15.3A2.19,2.19,0,0,0,6.11,26H21.55a2.19,2.19,0,0,0,2.2-2.19V16.16"}),(0,s.jsx)("path",{className:"svg-icn",strokeWidth:n,d:"M22.1,4.68a2.35,2.35,0,0,1,3.31,0,2.31,2.31,0,0,1,0,3.28L14.93,18.35l-4.41,1.09,1.11-4.37Z"})]})}},48487:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(4637);function n(e){var t=e.className,a=e.name,n=e.title,r=e.action,o=e.disabled,i=e.checked;return(0,s.jsxs)("div",{className:""+t,children:[(0,s.jsx)("span",{children:n}),(0,s.jsxs)("label",{className:"btcd-label",children:[(0,s.jsxs)("div",{className:"btcd-toggle",children:[(0,s.jsx)("input",{"aria-label":n,onChange:function(e){o||r(e)},className:"btcd-toggle-state",type:"checkbox",name:a,id:a,value:"check",checked:i}),(0,s.jsx)("div",{className:"btcd-toggle-inner",children:(0,s.jsx)("div",{className:"btcd-indicator"})}),(0,s.jsx)("div",{className:"btcd-active-bg"})]}),(0,s.jsx)("div",{className:"btcd-label-text"})]})]})}},17637:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var s=a(665),n=a(59496),r=a(17607),o=a(97998),i=a(44084),l=a(73305),c=a(12859),d=a(77111),m=a(33591),u=a(84448),f=a(84725),b=a(73239),h=a(4637);function p(e){var t=e.setModal,a=e.setTempModal,r=e.newFormId,o=e.setSnackbar,l=(0,i.Zl)(u.pH),c=(0,n.useState)({prop:["all","additional","confirmation","workFlows","mailTem","integrations","reports"]}),p=c[0],x=c[1],v=(0,n.useState)({formDetail:"",prop:""}),j=v[0],g=v[1],w=(0,n.useState)(!1),k=w[0],N=w[1],_=function(e){var t;j[e.target.name]&&g((0,s.Z)({},j,((t={})[e.target.name]="",t)));if("checkbox"===e.target.type){var a=p.prop;if(e.target.checked&&a.indexOf(e.target.value)<0){if("all"===e.target.value)return void x((0,s.Z)({},p,{prop:["all","additional","confirmation","workFlows","mailTem","integrations","reports"]}));a.push(e.target.value)}!e.target.checked&&a.indexOf(e.target.value)>-1&&delete a[a.indexOf(e.target.value)],(a.indexOf("additional")<0||a.indexOf("confirmation")<0||a.indexOf("workFlows")<0||a.indexOf("mailTem")<0||a.indexOf("integrations")<0||a.indexOf("reports")<0)&&delete a[a.indexOf("all")],x((0,s.Z)({},p,{prop:a}))}else{var n=e.target.files[0];if(n&&"application/json"===n.type){var r=new FileReader;r.readAsText(e.target.files[0]),r.onload=function(){y(r.result,e.target)}}else g((0,s.Z)({},j,{formDetail:"Please select an exported json file"})),e.target.value=""}},y=function(e,t){var a={};try{a=JSON.parse(e)}catch(n){g((0,s.Z)({},j,{formDetail:"Please select an exported json file"})),t.value=""}a&&a.layout&&a.fields?x((0,s.Z)({},p,{formDetail:a})):(g((0,s.Z)({},j,{formDetail:"Please select an exported json file"})),t.value="")};return(0,h.jsxs)("div",{className:"flx flx-col flx-center mt-4",children:[(0,h.jsxs)("div",{className:"fld-wrp",children:[(0,h.jsx)("input",{type:"file",accept:".json",name:"formDetail",onChange:_}),j.formDetail&&(0,h.jsx)("span",{className:"btcd-btn-o-red",children:j.formDetail})]}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"fld-wrp",children:[(0,h.jsx)("div",{className:"fld-lbl",children:"Please select property you want to import with form"}),(0,h.jsxs)("div",{className:"no-drg fld btcd-ck-con btcd-round",children:[(0,h.jsxs)("label",{className:"btcd-ck-wrp",children:[(0,h.jsx)("span",{children:"All"}),(0,h.jsx)("input",{value:"all",type:"checkbox",defaultChecked:!0,checked:p.prop.indexOf("all")>=0,name:"prop",onChange:_}),(0,h.jsx)("span",{className:"btcd-mrk ck"})]}),(0,h.jsxs)("label",{className:"btcd-ck-wrp",children:[(0,h.jsx)("span",{children:"Form Settings"}),(0,h.jsx)("input",{value:"additional",type:"checkbox",defaultChecked:!0,checked:p.prop.indexOf("additional")>=0,name:"prop",onChange:_}),(0,h.jsx)("span",{className:"btcd-mrk ck"})]}),(0,h.jsxs)("label",{className:"btcd-ck-wrp",children:[(0,h.jsx)("span",{children:"Confirmations"}),(0,h.jsx)("input",{value:"confirmation",type:"checkbox",defaultChecked:!0,checked:p.prop.indexOf("confirmation")>=0,name:"prop",onChange:_}),(0,h.jsx)("span",{className:"btcd-mrk ck"})]}),(0,h.jsxs)("label",{className:"btcd-ck-wrp",children:[(0,h.jsx)("span",{children:"Conditional Logics"}),(0,h.jsx)("input",{value:"workFlows",type:"checkbox",defaultChecked:!0,checked:p.prop.indexOf("workFlows")>=0,name:"prop",onChange:_}),(0,h.jsx)("span",{className:"btcd-mrk ck"})]}),(0,h.jsxs)("label",{className:"btcd-ck-wrp",children:[(0,h.jsx)("span",{children:"Email Templates"}),(0,h.jsx)("input",{value:"mailTem",type:"checkbox",defaultChecked:!0,checked:p.prop.indexOf("mailTem")>=0,name:"prop",onChange:_}),(0,h.jsx)("span",{className:"btcd-mrk ck"})]}),(0,h.jsxs)("label",{className:"btcd-ck-wrp",children:[(0,h.jsx)("span",{children:"Integrations"}),(0,h.jsx)("input",{value:"integrations",type:"checkbox",defaultChecked:!0,checked:p.prop.indexOf("integrations")>=0,name:"prop",onChange:_}),(0,h.jsx)("span",{className:"btcd-mrk ck"})]})]})]}),(0,h.jsxs)("div",{className:"flx flx-between w-5",children:[(0,h.jsx)("button",{onClick:function(){return t(!1)},className:"btn round btcd-btn-lg blue blue-sh",type:"button",children:" Cancel "}),(0,h.jsxs)("button",{onClick:function(){var e,n;if(null!=(e=p.formDetail)&&e.layout&&null!=(n=p.formDetail)&&n.fields){for(var i=(0,m.p$)(p.formDetail),c=0,u=["additional","workFlows","reports"];c<u.length;c++){var b=u[c];-1===p.prop.indexOf(b)&&delete i[b]}if(i.formSettings)for(var h=0,x=["confirmation","mailTem","integrations"];h<x.length;h++){var v=x[h];-1===p.prop.indexOf(v)&&delete i.formSettings[v]}N(!0),(0,d.Z)({formDetail:i,newFormId:r},"bitforms_import_aform").then((function(e){if(e.success){var s=e.data;l((function(e){return(0,f.U)(e,{type:"add",data:{formID:s.id,status:!0,formName:s.form_name,shortcode:"bitform id='"+s.id+"'",entries:0,views:0,conversion:0,created_at:s.created_at}})})),o({show:!0,msg:s.message}),a(!1),t(!1)}else null!=e&&e.data&&o({show:!0,msg:e.data});N(!1)}))}else g((0,s.Z)({},j,{formDetail:"Please select an exported json file"}))},className:"btn round btcd-btn-lg blue blue-sh",type:"button",disabled:k,children:["Import",k&&(0,h.jsx)(b.Z,{size:20,clr:"#fff",className:"ml-2"})]})]})]})}var x=a(53676);function v(e){var t=e.setTempModal,a=e.newFormId,s=e.setSnackbar,r=(0,n.useState)(!1),i=r[0],d=r[1];return(0,h.jsxs)("div",{className:"btcd-tem-lay flx",children:[[{lbl:"Blank",img:""},{lbl:"Contact Form",img:""}].map((function(e){return(0,h.jsxs)("div",{className:"btcd-tem flx",children:[(0,h.jsx)("span",{className:"btcd-icn icn-file",style:{fontSize:90}}),(0,h.jsx)("div",{children:e.lbl}),(0,h.jsx)("div",{className:"btcd-hid-btn",children:(0,h.jsx)(o.rU,{to:"/form/builder/new/"+e.lbl+"/fs",className:"btn btn-white sh-sm",type:"button",children:(0,l.__)("Create","bitform")})})]},e.lbl)})),(0,h.jsxs)("div",{className:"btcd-tem flx",children:[(0,h.jsx)(x.Z,{size:"60"}),(0,h.jsx)("div",{children:"Form Import"}),(0,h.jsx)("div",{className:"btcd-hid-btn",children:(0,h.jsx)("button",{onClick:function(){return d(!0)},className:"btn btn-white sh-sm",type:"button",children:(0,l.__)("Import","bitform")})})]}),(0,h.jsx)(c.Z,{show:i,setModal:d,title:(0,l.__)("Import Form","bitform"),subTitle:"",children:(0,h.jsx)(p,{setModal:d,setTempModal:t,newFormId:a,setSnackbar:s})})]})}var j=a(83524),g=a(14705),w=a(94164),k=a(61473),N=a(94557);function _(e){return(0,h.jsxs)("div",{className:"btcd-menu",children:[(0,h.jsx)("button",{className:"btcd-menu-btn btcd-mnu sh-sm",onClick:function(e){e.target.parentNode.children[1].classList.contains("btcd-m-a")?(e.target.parentNode.children[1].classList.remove("btcd-m-a"),e.target.parentNode.parentNode.parentNode.style.zIndex="auto",e.target.blur()):(e.target.parentNode.parentNode.parentNode.style.zIndex=10,e.target.parentNode.children[1].classList.add("btcd-m-a"))},onBlur:function(e){var t=e.target;setTimeout((function(){t.parentNode.children[1].classList.remove("btcd-m-a"),t.parentNode.parentNode.parentNode.style.zIndex="auto"}),100)},"aria-label":"toggle menu",type:"button"}),(0,h.jsxs)("div",{className:"btcd-menu-list",children:[(0,h.jsxs)(o.rU,{to:"/form/builder/edit/"+e.formID+"/fs",type:"button",className:"flx","aria-label":"actions",children:[(0,h.jsx)(k.Z,{size:16}),"  Edit"]}),(0,h.jsxs)("button",{type:"button","aria-label":"actions",className:"flx",onClick:e.dup,children:[(0,h.jsx)(w.Z,{size:26}),"  Duplicate"]}),(0,h.jsxs)("button",{type:"button","aria-label":"actions",className:"flx",onClick:e.export,children:[(0,h.jsx)("span",{className:"btcd-icn icn-file_download"}),"  Export"]}),(0,h.jsxs)("button",{type:"button","aria-label":"actions",className:"flx",onClick:e.del,children:[(0,h.jsx)(N.Z,{size:15}),"  Delete"]})]})]})}function y(e){var t=e.value;return(0,h.jsxs)("div",{className:"flx",style:{width:"100%"},children:[(0,h.jsxs)("span",{style:{minWidth:68},children:[t,"%"]}),(0,h.jsx)("div",{className:"btcd-prgrs-wrp",children:(0,h.jsx)("div",{className:"btcd-prgrs",style:{width:t+"%"}})})]})}var C=a(48487),D=a(65194),Z=a(40676),I=(0,n.lazy)((function(){return a.e(2974).then(a.bind(a,22974))}));function F(){var e=(0,n.useState)(!1),t=e[0],a=e[1],b=(0,n.useState)({show:!1}),p=b[0],x=b[1],w=(0,i.FV)(u.pH),k=w[0],N=w[1],F=(0,n.useState)({show:!1,btnTxt:""}),T=F[0],S=F[1],O=(0,i.sJ)(u.bt),U=(0,i.sJ)(u.hi),H=(0,n.useState)([{width:70,minWidth:60,Header:(0,l.__)("Status","bitform"),accessor:"status",Cell:function(e){return(0,h.jsx)(C.Z,{className:"flx",action:function(t){return function(e,t){var a=e.target.checked,n={id:t,status:a};N((function(e){return(0,f.U)(e,{type:"update",data:{formID:t,status:n.status}})})),(0,d.Z)(n,"bitforms_change_status").then((function(e){"success"in e&&!e.success&&(N((function(e){return(0,f.U)(e,{type:"update",data:{formID:t,status:n.status}})})),x((0,s.Z)({},{show:!0,msg:(0,l.__)("Failed to change Form Status","bitform")})))})).catch((function(){N((function(e){return(0,f.U)(e,{type:"update",data:{formID:t,status:!a}})})),x((0,s.Z)({},{show:!0,msg:(0,l.__)("Failed to change Form Status","bitform")}))}))}(t,e.row.original.formID)},checked:e.row.original.status})}},{width:250,minWidth:80,Header:(0,l.__)("Form Name","bitform"),accessor:"formName",Cell:function(e){return(0,h.jsx)(o.rU,{to:"/form/responses/edit/"+e.row.original.formID+"/",className:"btcd-tabl-lnk",children:e.row.values.formName})}},{width:220,minWidth:200,Header:(0,l.__)("Short Code","bitform"),accessor:"shortcode",Cell:function(e){return(0,h.jsx)(g.Z,{value:"["+e.row.values.shortcode+"]",className:"cpyTxt"})}},{width:80,minWidth:60,Header:(0,l.__)("Views","bitform"),accessor:"views"},{width:170,minWidth:130,Header:(0,l.__)("Completion Rate","bitform"),accessor:"conversion",Cell:function(e){return(0,h.jsx)(y,{value:(t=e.row.values.entries,a=e.row.values.views,0===t?0:(t/("0"===a?1:a)*100).toFixed(2))});var t,a}},{width:100,minWidth:60,Header:(0,l.__)("Responses","bitform"),accessor:"entries",Cell:function(e){return(0,h.jsx)(o.rU,{to:"form/responses/edit/"+e.row.original.formID,className:"btcd-tabl-lnk",children:e.row.values.entries})}},{width:160,minWidth:60,Header:(0,l.__)("Created","bitform"),accessor:"created_at",Cell:function(e){return t=e.row.original.created_at,(0,h.jsxs)("div",{style:{lineHeight:.7,fontWeight:500},children:[(0,m.CI)(t,U.dateFormat),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("small",{children:(0,m.CI)(t,U.timeFormat)})]});var t}}]),z=H[0],M=H[1];(0,n.useEffect)((function(){}),[]),(0,n.useEffect)((function(){var e=z.filter((function(e){return"t_action"!==e.accessor}));e.push({sticky:"right",width:100,minWidth:60,Header:"Actions",accessor:"t_action",Cell:function(e){return(0,h.jsx)(_,{formID:e.row.original.formID,newFormId:e,index:e.row.id,del:function(){return E(e.row.original.formID,e.row.index)},dup:function(){return R(e.row.original.formID)},export:function(){return B(e.row.original.formID)}})}}),M([].concat(e))}),[O]);var W=(0,n.useCallback)((function(e,t){for(var a="Enable"===e.target.innerHTML,s=[],n=[],r=0;r<t.length;r+=1)s.push(t[r].id),n.push(t[r].original.formID);for(var o=[].concat(k),i=[].concat(k),l=0;l<s.length;l+=1)i[s[l]].status=a;N((function(e){return(0,f.U)(e,{data:i,type:"set"})}));var c={formID:n,status:a};(0,d.Z)(c,"bitforms_bulk_status_change").then((function(e){void 0===e||e.success?e.success&&x({show:!0,msg:e.data}):N((function(e){return(0,f.U)(e,{data:o,type:"set"})}))}))}),[]),L=(0,n.useCallback)((function(e){for(var t=[],a=[],s=0;s<e.length;s+=1)t.push(e[s].id),a.push(e[s].original.formID);for(var n=[].concat(k),r=[].concat(k),o=t.length-1;o>=0;o-=1)r.splice(Number(t[o]),1);N((function(e){return(0,f.U)(e,{data:r,type:"set"})}));var i={formID:a};(0,d.Z)(i,"bitforms_bulk_delete_form").then((function(e){void 0!==e&&e.success?e.success&&x({show:!0,msg:e.data}):N((function(e){return(0,f.U)(e,{data:n,type:"set"})}))}))}),[]),P=(0,n.useCallback)((function(e){M(e)}),[]),A=function(){T.show=!1,S((0,s.Z)({},T))},E=function(e,t){T.action=function(){!function(e,t){(0,d.Z)({id:e},"bitforms_delete_aform").then((function(e){e.success&&(N((function(e){return(0,f.U)(e,{type:"remove",data:t})})),x({show:!0,msg:(0,l.__)("Form Deleted Successfully","bitform")}))}))}(e,t),A()},T.btnTxt=(0,l.__)("Delete","bitform"),T.btn2Txt=null,T.btnClass="",T.body=(0,l.__)("Are you sure to delete this form?","bitform"),T.show=!0,S((0,s.Z)({},T))},R=function(e){T.action=function(){!function(e){var t=(0,d.Z)({id:e,newFormId:O},"bitforms_duplicate_aform").then((function(e){if(e.success){var t=e.data;return N((function(e){return(0,f.U)(e,{type:"add",data:{formID:t.id,status:!0,formName:t.form_name,shortcode:"bitform id='"+t.id+"'",entries:0,views:0,conversion:0,created_at:t.created_at}})})),"Form Duplicated Successfully."}}));r.ZP.promise(t,{success:function(e){return e},error:(0,l.__)("Error Occured","bit-form"),loading:(0,l.__)("duplicate...")})}(e),A()},T.btnTxt=(0,l.__)("Duplicate","bitform"),T.btn2Txt=null,T.btnClass="blue",T.body=(0,l.__)("Are you sure to duplicate this form ?","bitform"),T.show=!0,S((0,s.Z)({},T))},B=function(e){T.action=function(){!function(e){var t=new URL(U.ajaxURL);t.searchParams.append("action","bitforms_export_aform"),t.searchParams.append("_ajax_nonce",U.nonce),t.searchParams.append("id",e),r.ZP.loading("loading..."),fetch(t).then((function(t){t.ok?t.blob().then((function(t){var a=window.URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download="bitform_"+e+"_export.json",document.body.appendChild(s),s.click(),s.remove()})):t.json().then((function(e){e.data&&x({show:!0,msg:e.data})}))}))}(e),A()},T.btnTxt=(0,l.__)("Export","bitform"),T.btn2Txt=null,T.btnClass="blue",T.body=(0,l.__)("Are you sure to export this form ?","bitform"),T.show=!0,S((0,s.Z)({},T))};return(0,h.jsxs)("div",{id:"all-forms",children:[(0,h.jsx)(D.Z,{snack:p,setSnackbar:x}),(0,h.jsx)(j.Z,{show:T.show,body:T.body,action:T.action,close:A,btnTxt:T.btnTxt,btn2Txt:T.btn2Txt,btn2Action:T.btn2Action,btnClass:T.btnClass}),(0,h.jsx)(c.Z,{show:t,setModal:a,title:(0,l.__)("Create Form","bitform"),subTitle:"",children:(0,h.jsx)(v,{setTempModal:a,newFormId:O,setSnackbar:x})}),k.length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"af-header flx flx-between",children:[(0,h.jsx)("h2",{children:(0,l.__)("Forms","bitform")}),(0,h.jsx)("button",{onClick:function(){return a(!0)},type:"button",className:"btn round btcd-btn-lg blue blue-sh",children:(0,l.__)("Create Form","bitform")})]}),(0,h.jsx)("div",{className:"forms",children:(0,h.jsx)(Z.Z,{className:"f-table btcd-all-frm",height:500,columns:z,data:k,rowSeletable:!0,newFormId:O,resizable:!0,columnHidable:!0,setBulkStatus:W,setBulkDelete:L,setTableCols:P})})]}):(0,h.jsx)(I,{setModal:a})]})}const T=(0,n.memo)(F)}}]);