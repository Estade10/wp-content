var D=Object.defineProperty,F=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var z=(e,t,a)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))A.call(t,a)&&z(e,a,t[a]);if(m)for(var a of m(t))C.call(t,a)&&z(e,a,t[a]);return e},$=(e,t)=>F(e,g(t));import{_ as l,bs as R,$ as y,c as w}from"./main-281.js";const Z=(e,t,a,c,r,s,i,o,d)=>{let h=n({},a);if(i){const p=n({},o);p[e.target.name]="",d(n({},p))}switch(h[e.target.name]=e.target.value,e.target.name){case"list":h=v(h,t,c,r,s);break}c(n({},h))},v=(e,t,a,c,r)=>{var i,o;const s=n({},e);return s.field_map=[{formField:"",zohoFormField:"Contact Email"}],(o=(i=s==null?void 0:s.default)==null?void 0:i.fields)!=null&&o[s.list]||S(t,s,a,c,r),s},q=(e,t,a,c,r)=>{c(!0);const s={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};w(s,"bitforms_zmarketingHub_refresh_lists").then(i=>{if(i&&i.success){const o=n({},t);i.data.lists&&(o.default=$(n({},o.default),{lists:i.data.lists})),i.data.tokenDetails&&(o.tokenDetails=i.data.tokenDetails),r({show:!0,msg:l("Lists refreshed")}),a(n({},o))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?r({show:!0,msg:`${l("Lists refresh failed Cause:")}${i.data.data||i.data}. ${l("please try again")}`}):r({show:!0,msg:l("Lists refresh failed. please try again")});c(!1)}).catch(()=>c(!1))},S=(e,t,a,c,r)=>{const{list:s}=t;if(!s)return;c(!0);const i={formID:e,list:s,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};w(i,"bitforms_zmarketingHub_refresh_contact_fields").then(o=>{if(o&&o.success){const d=n({},t);o.data.fields?(d.default.fields||(d.default.fields={}),d.default.fields[s]=o.data,r({show:!0,msg:l("Contact Fields refreshed")})):r({show:!0,msg:l("Zoho didn't provide fields names for this list")}),o.data.tokenDetails&&(d.tokenDetails=o.data.tokenDetails),a(n({},d))}else r({show:!0,msg:l("Contact Fields refresh failed. please try again")});c(!1)}).catch(()=>c(!1))},P=e=>!((e!=null&&e.field_map?e.field_map.filter(a=>{var c,r,s;return!a.formField&&a.zohoFormField&&((s=(r=(c=e==null?void 0:e.default)==null?void 0:c.fields)==null?void 0:r[e.list])==null?void 0:s.required.indexOf(a.zohoFormField))!==-1}):[]).length>0),L=(e,t,a,c,r,s)=>{if(!e.dataCenter||!e.clientId||!e.clientSecret){a({dataCenter:e.dataCenter?"":l("Data center cann't be empty"),clientId:e.clientId?"":l("Client ID cann't be empty"),clientSecret:e.clientSecret?"":l("Secret key cann't be empty")});return}const i=R(y);r(!0);const o="ZohoMarketingHub.lead.READ,ZohoMarketingHub.lead.CREATE,ZohoMarketingHub.lead.UPDATE",d=`https://accounts.zoho.${e.dataCenter}/oauth/v2/auth?scope=${o}&response_type=code&client_id=${e.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(i.zohoRedirectURL)}`,h=window.open(d,"zohoMarkatingHub","width=400,height=609,toolbar=off"),p=setInterval(()=>{if(h.closed){clearInterval(p);let f={},u=!1;const I=localStorage.getItem("__bitforms_zohoMarkatingHub");if(I&&(u=!0,f=JSON.parse(I),localStorage.removeItem("__bitforms_zohoMarkatingHub")),!f.code||f.error||!f||!u){const _=f.error?`Cause: ${f.error}`:"";s({show:!0,msg:`${l("Authorization failed")} ${_}. ${l("please try again")}`}),r(!1)}else{const _=n({},e);_.accountServer=f["accounts-server"],U(f,_,t,c,r,s)}}},500)},U=(e,t,a,c,r,s)=>{const i=R(y),o=n({},e);o.dataCenter=t.dataCenter,o.clientId=t.clientId,o.clientSecret=t.clientSecret,o.redirectURI=encodeURIComponent(i.zohoRedirectURL),w(o,"bitforms_zmarketingHub_generate_token").then(d=>{if(d&&d.success){const h=n({},t);h.tokenDetails=d.data,a(h),c(!0),s({show:!0,msg:l("Authorized Successfully")})}else d&&d.data&&d.data.data||!d.success&&typeof d.data=="string"?s({show:!0,msg:`${l("Authorization failed Cause:")}${d.data.data||d.data}. ${l("please try again")}`}):s({show:!0,msg:l("Authorization failed. please try again")});r(!1)})};export{S as a,L as b,P as c,Z as h,q as r};
