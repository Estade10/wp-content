var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var b=(a,e,s)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,k=(a,e)=>{for(var s in e||(e={}))z.call(e,s)&&b(a,s,e[s]);if(g)for(var s of g(e))R.call(e,s)&&b(a,s,e[s]);return a};import{_ as c,bs as p,$ as D,c as _,dv as W}from"./main-281.js";const P=(a,e,s,h,d,t,r,i,o)=>{let n=k({},e);if(r){const l=k({},i);l[a.target.name]="",o(k({},l))}switch(n[a.target.name]=a.target.value,a.target.name){case"workbook":n=$(n,h,s,d,t);break;case"worksheet":n=A(n,h,s,d,t);break}s(k({},n))},$=(a,e,s,h,d)=>{var r,i,o,n,l,w,u,m,f;const t=k({},a);return t.worksheet="",t.field_map=[{formField:"",zohoFormField:""}],(i=(r=t==null?void 0:t.default)==null?void 0:r.worksheets)!=null&&i[a.workbook]?Object.keys((n=(o=t==null?void 0:t.default)==null?void 0:o.worksheets)==null?void 0:n[a.workbook]).length===1&&(t.worksheet=(w=(l=t==null?void 0:t.default)==null?void 0:l.worksheets)==null?void 0:w[a.workbook][0].viewName,(f=(m=(u=t==null?void 0:t.default)==null?void 0:u.worksheets)==null?void 0:m.headers)!=null&&f[t.worksheet]||I(e,t,s,h,d)):v(e,t,s,h,d),t},A=(a,e,s,h,d)=>{var r,i,o;const t=k({},a);return t.field_map=[{formField:"",zohoFormField:""}],(o=(i=(r=t==null?void 0:t.default)==null?void 0:r.worksheets)==null?void 0:i.headers)!=null&&o[a.worksheet]||I(e,t,s,h,d),t},U=(a,e,s,h,d)=>{h(!0);const t={formID:a,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,ownerEmail:e.ownerEmail};_(t,"bitforms_zsheet_refresh_workbooks").then(r=>{if(r&&r.success){const i=k({},e);i.default||(i.default={}),r.data.workbooks&&(i.default.workbooks=r.data.workbooks),r.data.tokenDetails&&(i.tokenDetails=r.data.tokenDetails),d({show:!0,msg:c("Workbooks refreshed")}),s(k({},i))}else r&&r.data&&r.data.data||!r.success&&typeof r.data=="string"?d({show:!0,msg:W(c("Workbooks refresh failed Cause: %s. please try again"),r.data.data||r.data)}):d({show:!0,msg:c("Workbooks refresh failed. please try again")});h(!1)}).catch(()=>h(!1))},v=(a,e,s,h,d)=>{const{workbook:t}=e;if(!t)return;h(!0);const r={formID:a,workbook:t,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};_(r,"bitforms_zsheet_refresh_worksheets").then(i=>{if(i&&i.success){const o=k({},e);i.data.worksheets&&(o.default.worksheets||(o.default.worksheets={}),o.default.worksheets[t]=i.data.worksheets),i.data.tokenDetails&&(o.tokenDetails=i.data.tokenDetails),d({show:!0,msg:c("Worksheets refreshed")}),s(k({},o))}else d({show:!0,msg:c("Worksheets refresh failed. please try again")});h(!1)}).catch(()=>h(!1))},I=(a,e,s,h,d)=>{const{workbook:t,worksheet:r,headerRow:i}=e;if(!r)return;h(!0);const o={formID:a,workbook:t,worksheet:r,headerRow:i,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,ownerEmail:e.ownerEmail};_(o,"bitforms_zsheet_refresh_worksheet_headers").then(n=>{if(n&&n.success){const l=k({},e);n.data.worksheet_headers.length>0?(l.default.worksheets.headers||(l.default.worksheets.headers={}),l.default.worksheets.headers[r]||(l.default.worksheets.headers[r]={}),l.default.worksheets.headers[r][i]=n.data.worksheet_headers,n.data.tokenDetails&&(l.tokenDetails=n.data.tokenDetails),d({show:!0,msg:c("Worksheet Headers refreshed")})):d({show:!0,msg:c("No Worksheet headers found. Try changing the header row number or try again")}),n.data.tokenDetails&&(l.tokenDetails=n.data.tokenDetails),s(k({},l))}else d({show:!0,msg:c("Worksheet Headers refresh failed. please try again")});h(!1)}).catch(()=>h(!1))},H=(a,e,s,h,d,t)=>{if(!a.dataCenter||!a.clientId||!a.clientSecret){s({dataCenter:a.dataCenter?"":c("Data center cann't be empty"),clientId:a.clientId?"":c("Client ID cann't be empty"),clientSecret:a.clientSecret?"":c("Secret key cann't be empty")});return}const r=p(D);d(!0);const i="ZohoSheet.dataAPI.READ,ZohoSheet.dataAPI.UPDATE",o=`https://accounts.zoho.${a.dataCenter}/oauth/v2/auth?scope=${i}&response_type=code&client_id=${a.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}?redirect&redirect_uri=${encodeURIComponent(r.zohoRedirectURL)}`,n=window.open(o,"zohoSheet","width=400,height=609,toolbar=off"),l=setInterval(()=>{if(n.closed){clearInterval(l);let w={},u=!1;const m=localStorage.getItem("__bitforms_zohoSheet");if(m&&(u=!0,w=JSON.parse(m),localStorage.removeItem("__bitforms_zohoSheet")),!w.code||w.error||!w||!u){const f=w.error?`Cause: ${w.error}`:"";t({show:!0,msg:`${c("Authorization failed")} ${f}. ${c("please try again")}`}),d(!1)}else{const f=k({},a);f.accountServer=w["accounts-server"],S(w,f,e,h,d,t)}}},500)},S=(a,e,s,h,d,t)=>{const r=k({},a);r.dataCenter=e.dataCenter,r.clientId=e.clientId,r.clientSecret=e.clientSecret;const i=p(D);r.redirectURI=i.zohoRedirectURL,_(r,"bitforms_zsheet_generate_token").then(o=>o).then(o=>{if(o&&o.success){const n=k({},e);n.tokenDetails=o.data,s(n),h(!0),t({show:!0,msg:c("Authorized Successfully")})}else o&&o.data&&o.data.data||!o.success&&typeof o.data=="string"?t({show:!0,msg:`${c("Authorization failed Cause:")}${o.data.data||o.data}. ${c("please try again")}`}):t({show:!0,msg:c("Authorization failed. please try again")});d(!1)})};export{v as a,I as b,H as c,P as h,U as r};
