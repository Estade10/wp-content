"use strict";(self.webpackChunk_bitforms=self.webpackChunk_bitforms||[]).push([[1061],{84584:(e,t,a)=>{a.d(t,{FP:()=>u,Mm:()=>r,P_:()=>d,T5:()=>f,WK:()=>o,mG:()=>m,wX:()=>c});var l=a(72564),i=a(99484),s=a(44947),r=function(e,t,a,i,s,r,o){var d=[].concat(e);if(o)d[r]=(0,l.Z)({},e[r],i),d.push({editItegration:!0}),t([].concat(d)),s.push(a);else{var n=[].concat(d);n.push(i),n.push({newItegration:!0}),t(n),s.push(a)}},o=function(e){var t={},a=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");a&&a.forEach((function(e){var a=e.split("=");a[1]&&(t[a[0]]=a[1])})),localStorage.setItem("__bitforms_"+e,JSON.stringify(t)),window.close()},d=function(e,t,a,s,r,o,d,u,f){if(s.dataCenter&&s.clientId&&s.clientSecret){u(!0);var c="https://accounts.zoho."+s.dataCenter+"/oauth/v2/auth?scope="+a+"&response_type=code&client_id="+s.clientId+"&prompt=Consent&access_type=offline&state="+encodeURIComponent(window.location.href)+"/redirect&redirect_uri="+encodeURIComponent(bits.zohoRedirectURL),m=window.open(c,e,"width=400,height=609,toolbar=off"),_=setInterval((function(){if(m.closed){clearInterval(_);var a={},o=!1,c=localStorage.getItem("__bitforms_"+e);if(c&&(o=!0,a=JSON.parse(c),localStorage.removeItem("__bitforms_"+e)),a.code&&!a.error&&a&&o){var p=(0,l.Z)({},s);p.accountServer=a["accounts-server"],n(t,a,p,r,d,u,f)}else{var h=a.error?"Cause: "+a.error:"";f({show:!0,msg:(0,i.__)("Authorization failed","bitform")+" "+h+". "+(0,i.__)("please try again","bitform")}),u(!1)}}}),500)}else o({dataCenter:s.dataCenter?"":(0,i.__)("Data center cann't be empty","bitform"),clientId:s.clientId?"":(0,i.__)("Client ID cann't be empty","bitform"),clientSecret:s.clientSecret?"":(0,i.__)("Secret key cann't be empty","bitform")})},n=function(e,t,a,r,o,d,n){var u=(0,l.Z)({},t);u.dataCenter=a.dataCenter,u.clientId=a.clientId,u.clientSecret=a.clientSecret,u.redirectURI=bits.zohoRedirectURL,(0,s.Z)(u,"bitforms_"+e+"_generate_token").then((function(e){return e})).then((function(e){if(e&&e.success){var t=(0,l.Z)({},a);t.tokenDetails=e.data,r(t),o(!0),n({show:!0,msg:(0,i.__)("Authorized Successfully","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?n({show:!0,msg:""+(0,i.__)("Authorization failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):n({show:!0,msg:(0,i.__)("Authorization failed. please try again","bitform")});d(!1)}))},u=function(e,t,a,i,s){var r=(0,l.Z)({},t);s?i?r.relatedlists[s-1].upload_field_map.splice(e,0,{}):r.relatedlists[s-1].field_map.splice(e,0,{}):i?r.upload_field_map.splice(e,0,{}):r.field_map.splice(e,0,{}),a((0,l.Z)({},r))},f=function(e,t,a,i,s){var r=(0,l.Z)({},t);s?i?r.relatedlists[s-1].upload_field_map.length>1&&r.relatedlists[s-1].upload_field_map.splice(e,1):r.relatedlists[s-1].field_map.length>1&&r.relatedlists[s-1].field_map.splice(e,1):i?r.upload_field_map.length>1&&r.upload_field_map.splice(e,1):r.field_map.length>1&&r.field_map.splice(e,1),a((0,l.Z)({},r))},c=function(e,t,a,i,s,r){var o=(0,l.Z)({},a);r?s?o.relatedlists[r-1].upload_field_map[t][e.target.name]=e.target.value:o.relatedlists[r-1].field_map[t][e.target.name]=e.target.value:s?o.upload_field_map[t][e.target.name]=e.target.value:o.field_map[t][e.target.name]=e.target.value,"custom"===e.target.value&&(r?o.relatedlists[r-1].field_map[t].customValue="":o.field_map[t].customValue=""),i((0,l.Z)({},o))},m=function(e,t,a,i,s){var r=(0,l.Z)({},a);s?r.relatedlists[s-1].field_map[t].customValue=e.target.value:r.field_map[t].customValue=e.target.value,i((0,l.Z)({},r))}},47520:(e,t,a)=>{a.d(t,{$8:()=>c,Ck:()=>o,Pd:()=>g,Rx:()=>r,TF:()=>m,X7:()=>f,lF:()=>p,oQ:()=>_,vF:()=>u});var l=a(72564),i=a(99484),s=a(44947),r=function(e,t,a,i,s,r,o,u,f,c){var m=(0,l.Z)({},a);if(0===t){if(u){var _=(0,l.Z)({},f);_[e.target.name]="",c((0,l.Z)({},_))}m[e.target.name]=e.target.value}else m.relatedlists||(m.relatedlists=[]),m.relatedlists[t-1][e.target.name]=e.target.value;switch(e.target.name){case"module":m=d(t,s,m,i,r,o);break;case"layout":m=n(t,s,m,i,r,o)}i((0,l.Z)({},m))},o=function(e,t,a,l,i,s,r){var o,d;e&&((null==(o=l.default)||null==(d=o.relatedlists)||!d[l.module])&&c(a,l,i,s,r));t(e)},d=function(e,t,a,i,s,r){var o,d=(0,l.Z)({},a),u=0===e?d.module:d.relatedlists[e-1].module;if(d.relatedlists[e-1]||(d.relatedlists[e-1]={}),0===e?(d.layout="",d.actions={},d.field_map=[{formField:"",zohoFormField:""}],d.upload_field_map=[{formField:"",zohoFormField:""}],d.relatedlists=[]):(d.relatedlists[e-1].layout="",d.relatedlists[e-1].actions={},d.relatedlists[e-1].field_map=[{formField:"",zohoFormField:""}],d.relatedlists[e-1].upload_field_map=[{formField:"",zohoFormField:""}]),null!=(o=d.default.layouts)&&o[u]){var c,m=Object.keys(null==(c=d.default.layouts)?void 0:c[u]);1===m.length&&(0===e?d.layout=m[0]:d.relatedlists[e-1].layout=m[0],d=n(e,t,d,i,s,r))}else f(e,t,d,i,s,r);return d},n=function(e,t,a,i,s,r){var o,d,n,u,f,c,_,p,g,F,y,v,b,k,Z,w,D,I=(0,l.Z)({},a),z=0===e?I.module:I.relatedlists[e-1].module,C=0===e?I.layout:I.relatedlists[e-1].layout;0===e?(I.actions={},I.field_map=null!=I&&null!=(d=I.default)&&null!=(n=d.layouts)&&null!=(u=n[z])&&null!=(f=u[C])&&f.required?h(e,I):[{formField:"",zohoFormField:""}],I.upload_field_map=null!=I&&null!=(c=I.default)&&null!=(_=c.layouts)&&null!=(p=_[z])&&null!=(g=p[C])&&g.requiredFileUploadFields&&Object.keys(I.default.layouts[z][C].requiredFileUploadFields).length>0?h(e,I,!0):[{formField:"",zohoFormField:""}]):(I.relatedlists[e-1].actions={},I.relatedlists[e-1].field_map=null!=I&&null!=(F=I.default)&&null!=(y=F.layouts)&&null!=(v=y[z])&&null!=(b=v[C])&&b.required?h(e,I):[{formField:"",zohoFormField:""}],I.relatedlists[e-1].upload_field_map=null!=I&&null!=(k=I.default)&&null!=(Z=k.layouts)&&null!=(w=Z[z])&&null!=(D=w[C])&&D.requiredFileUploadFields&&Object.keys(I.default.layouts[z][C].requiredFileUploadFields).length>0?h(e,I,!0):[{formField:"",zohoFormField:""}]);return(null==(o=I.default.tags)||!o[z])&&m(e,t,I,i,s,r),I},u=function(e,t,a,r,o){r(!0);var d={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(d,"bitforms_zcrm_refresh_modules").then((function(e){if(e&&e.success){var s=(0,l.Z)({},t);s.default||(s.default={}),e.data.modules&&(s.default.modules=e.data.modules),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),a((0,l.Z)({},s)),o({show:!0,msg:(0,i.__)("Modules refreshed","bitform")})}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:(0,i.g)((0,i.__)("Modules refresh failed Cause: %s. please try again","bitform"),e.data.data||e.data)}):o({show:!0,msg:(0,i.__)("Modules refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))},f=function(e,t,a,r,o,d){var n=(0,l.Z)({},a),u=0===e?n.module:n.relatedlists[e-1].module;if(u){o(!0);var f={formID:t,module:u,dataCenter:n.dataCenter,clientId:n.clientId,clientSecret:n.clientSecret,tokenDetails:n.tokenDetails};(0,s.Z)(f,"bitforms_zcrm_refresh_layouts").then((function(a){var s;if(a&&a.success){if(a.data.layouts){n.default.layouts||(n.default.layouts={}),n.default.layouts[u]=a.data.layouts;var f,c=[].concat(Object.keys(a.data.layouts));if(1===c.length)0===e?(n.layout=c[0],n.field_map=h(e,n),Object.keys(a.data.layouts[c].fileUploadFields).length>0&&(n.upload_field_map=h(e,n,!0))):(n.relatedlists[e-1].layout=c[0],n.relatedlists[e-1].field_map=h(e,n),Object.keys(a.data.layouts[c].fileUploadFields).length>0&&(n.relatedlists[e-1].upload_field_map=h(e,n,!0))),null!=(f=n.default.tags)&&f[u]||m(e,t,n,r,o,d)}a.data.tokenDetails&&(n.tokenDetails=a.data.tokenDetails),r((0,l.Z)({},n)),d({show:!0,msg:(0,i.__)("Layouts refreshed","bitform")})}else null!=a&&null!=(s=a.data)&&s.data||!a.success&&"string"===typeof a.data?d({show:!0,msg:(0,i.g)((0,i.__)("Layouts refresh failed Cause: %s. please try again","bitform"),a.data.data||a.data)}):d({show:!0,msg:(0,i.__)("Layouts refresh failed. please try again","bitform")});o(!1)})).catch((function(){return o(!1)}))}},c=function(e,t,a,r,o){if(t.module){r(!0);var d={formID:e,module:t.module,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(d,"bitforms_zcrm_get_related_lists").then((function(e){var s;if(e&&e.success){var d=(0,l.Z)({},t);e.data.relatedLists&&(d.default.relatedlists||(d.default.relatedlists={}),d.default.relatedlists[d.module]=(0,l.Z)({},e.data.relatedLists)),e.data.tokenDetails&&(d.tokenDetails=e.data.tokenDetails),a((0,l.Z)({},d)),o({show:!0,msg:(0,i.__)("RelatedLists refreshed","bitform")})}else null!=e&&null!=(s=e.data)&&s.data||!e.success&&"string"===typeof e.data?o({show:!0,msg:""+(0,i.__)("RelatedLists refresh failed Cause:")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):o({show:!0,msg:(0,i.__)("RelatedLists refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))}},m=function(e,t,a,r,o,d){var n=0===e?a.module:a.relatedlists[e-1].module;if(n){o(!0);var u={formID:t,module:n,dataCenter:a.dataCenter,clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};(0,s.Z)(u,"bitforms_zcrm_get_tags").then((function(e){var t;if(null!=e&&e.success){var s=(0,l.Z)({},a);e.data.tags&&(s.default.tags||(s.default.tags={}),s.default.tags[n]=(0,l.Z)({},e.data.tags)),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),r((0,l.Z)({},s)),d({show:!0,msg:(0,i.__)("Tags refreshed","bitform")})}else null!=e&&null!=(t=e.data)&&t.data||!e.success&&"string"===typeof e.data?d({show:!0,msg:""+(0,i.__)("Tags refresh failed Cause:","bitform")+(e.data.data||e.data)+". "+(0,i.__)("please try again","bitform")}):d({show:!0,msg:(0,i.__)("Tags refresh failed. please try again","bitform")});o(!1)})).catch((function(){return o(!1)}))}},_=function(e,t,a,r,o){r(!0);var d={formID:e,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(d,"bitforms_zcrm_get_users").then((function(e){if(null!=e&&e.success){var s=(0,l.Z)({},t);s.default.crmOwner=e.data.users,e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),a((0,l.Z)({},s)),o({show:!0,msg:(0,i.__)("Owners refreshed","bitform")})}else o({show:!0,msg:(0,i.__)("Owners refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))},p=function(e,t,a,r,o){var d=0===e?t.module:t.relatedlists[e-1].module;if(d){r(!0);var n={module:d,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(n,"bitforms_zcrm_get_assignment_rules").then((function(e){if(null!=e&&e.success){var s=(0,l.Z)({},t);s.default.assignmentRules||(s.default.assignmentRules={}),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),s.default.assignmentRules[d]=(0,l.Z)({},e.data.assignmentRules),a((0,l.Z)({},s)),o({show:!0,msg:(0,i.__)("Assignment Rules refreshed","bitform")})}else o({show:!0,msg:(0,i.__)("Assignment Rules refresh failed. please try again","bitform")});r(!1)})).catch((function(){return r(!1)}))}},h=function(e,t,a){var l=0===e?t.module:t.relatedlists[e-1].module,i=0===e?t.layout:t.relatedlists[e-1].layout;return a?t.default.layouts[l][i].requiredFileUploadFields.length>0?t.default.layouts[l][i].requiredFileUploadFields.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]:t.default.layouts[l][i].required.length>0?t.default.layouts[l][i].required.map((function(e){return{formField:"",zohoFormField:e}})):[{formField:"",zohoFormField:""}]},g=function(e){var t=null!=e&&e.field_map?e.field_map.filter((function(t){var a,l,i,s;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(a=e.default)||null==(l=a.layouts)||null==(i=l[e.module])||null==(s=i[e.layout])?void 0:s.required.indexOf(t.zohoFormField))})):[],a=null!=e&&e.upload_field_map?e.upload_field_map.filter((function(t){return!t.formField&&t.zohoFormField&&-1!==e.default.layouts[e.module][e.layout].requiredFileUploadFields.indexOf(t.zohoFormField)})):[],l=e.relatedlists.map((function(e){return e.field_map.filter((function(e){return!e.formField&&e.zohoFormField}))})),i=e.relatedlists.map((function(e){return e.upload_field_map.filter((function(e){return!e.formField&&e.zohoFormField}))}));return!(t.length>0||a.length>0||l.some((function(e){return e.length}))||i.some((function(e){return e.length})))}}}]);