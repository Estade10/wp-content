var n=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var _=(e,l,a)=>l in e?n(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,i=(e,l)=>{for(var a in l||(l={}))c.call(l,a)&&_(e,a,l[a]);if(o)for(var a of o(l))m.call(l,a)&&_(e,a,l[a]);return e};const g=(e,l,a,d,t,s,f)=>{const p=[...e];if(f)p[s]=i(i({},e[s]),d),p.push({editItegration:!0}),l([...p]),t(a);else{const r=[...p];r.push(d),r.push({newItegration:!0}),l(r),t(a)}},h=(e,l,a,d,t)=>{const s=i({},l);t?d?s.relatedlists[t-1].upload_field_map.splice(e,0,{}):s.relatedlists[t-1].field_map.splice(e,0,{}):d?s.upload_field_map.splice(e,0,{}):s.field_map.splice(e,0,{}),a(i({},s))},w=(e,l,a,d,t)=>{const s=i({},l);t?d?s.relatedlists[t-1].upload_field_map.length>1&&s.relatedlists[t-1].upload_field_map.splice(e,1):s.relatedlists[t-1].field_map.length>1&&s.relatedlists[t-1].field_map.splice(e,1):d?s.upload_field_map.length>1&&s.upload_field_map.splice(e,1):s.field_map.length>1&&s.field_map.splice(e,1),a(i({},s))},C=(e,l,a,d,t,s)=>{const f=i({},a);s?t?f.relatedlists[s-1].upload_field_map[l][e.target.name]=e.target.value:f.relatedlists[s-1].field_map[l][e.target.name]=e.target.value:t?f.upload_field_map[l][e.target.name]=e.target.value:f.field_map[l][e.target.name]=e.target.value,e.target.value==="custom"&&(s?f.relatedlists[s-1].field_map[l].customValue="":f.field_map[l].customValue=""),d(i({},f))},M=(e,l,a,d,t)=>{const s=i({},a);t?s.relatedlists[t-1].field_map[l].customValue=e.target.value:s.field_map[l].customValue=e.target.value,d(i({},s))},V=(e,l,a,d,t,s)=>{const f=i({},a);f.address_field[l][e.target.name]=e.target.value,d(i({},f))},A=(e,l,a)=>{const d=i({},l);d.address_field||(d.address_field=[]),d.address_field.push({}),a(i({},d))},F=(e,l,a)=>{const d=i({},l);d.address_field&&d.address_field.length>1&&d.address_field.splice(e,1),a(i({},d))};export{C as a,M as b,h as c,F as d,w as e,A as f,V as h,g as s};
