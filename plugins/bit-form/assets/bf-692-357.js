var u=Object.defineProperty;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(r,a,e)=>a in r?u(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,t=(r,a)=>{for(var e in a||(a={}))m.call(a,e)&&c(r,e,a[e]);if(n)for(var e of n(a))g.call(a,e)&&c(r,e,a[e]);return r};import{c as p,_ as l}from"./main-281.js";const y=(r,a,e)=>{const s=t({},a);s.name=r.target.value,e(t({},s))},E=(r,a,e,s)=>{const h={api_key:r.api_key},f=t({},r);p(h,"bitforms_encharge_headers").then(d=>{if(d&&d.success){if(f.default||(f.default={}),d.data.enChargeFields){f.default.fields=d.data.enChargeFields;const{fields:o}=f.default;f.field_map=Object.values(o).filter(i=>i.required).map(i=>({formField:"",enChargeFields:i.fieldId,required:!0})),s({show:!0,msg:l("Encharge fields refreshed")})}else s({show:!0,msg:l("No Encharge fields found. Try changing the header row number or try again")});a(t({},f))}else s({show:!0,msg:l("Encharge fields refresh failed. please try again")});e(!1)}).catch(()=>e(!1))},q=r=>!((r!=null&&r.field_map?r.field_map.filter(e=>!e.formField&&e.enChargeFields&&e.required):[]).length>0);export{q as c,y as h,E as r};
