var q=Object.defineProperty,Z=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var R=(a,e,h)=>e in a?q(a,e,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[e]=h,I=(a,e)=>{for(var h in e||(e={}))$.call(e,h)&&R(a,h,e[h]);if(F)for(var h of F(e))U.call(e,h)&&R(a,h,e[h]);return a},v=(a,e)=>Z(a,b(e));import{_ as k,bs as A,$ as T,c as n,dv as f}from"./main-281.js";const z=(a,e)=>{const h=I({},a),u=["projectId","milestoneId","tasklistFlag","tasklistId","taskId"];return u.splice(u.indexOf(e)+1).map(l=>{h!=null&&h[l]&&(h[l]=""),h.actions[l.split("Id")[0]]={}}),I({},h)},N=(a,e,h,u,l)=>{const d=I({},e);return d.subEvent.map(i=>{var m,s,t,r,g,w,y;d!=null&&d.projectId&&!((r=(t=(s=(m=d==null?void 0:d.default)==null?void 0:m.fields)==null?void 0:s[d.portalId])==null?void 0:t[d.projectId])!=null&&r[i])||!((y=(w=(g=d==null?void 0:d.default)==null?void 0:g.fields)==null?void 0:w[d.portalId])!=null&&y[i])?O(a,d,h,u,l,i):d.field_map[i]=_(d,i)}),I({},d)},o=(a,e,h,u,l,d,i,m,s)=>{var w,y,D,P,E;let t=I({},e);const r=a.target.name,g=a.target.value;if(i){const c=I({},m);c[r]="",s(I({},c))}switch(t[r]=g,r){case"portalId":t=M(t,u,h,l,d);break;case"event":t.subEvent=[g],t.field_map={},t.actions[g]={},t=x(z(t),u,h,l,d);break;case"projectId":case"milestoneId":case"tasklistId":case"taskId":{t=z(t,r);const c=r.split("Id")[0];t.actions[c]={},t.actions[t.event]={},t.subEvent.includes(c)&&t.subEvent.splice(t.subEvent.indexOf(c),1),!["project","milestone"].includes(t.event)&&c==="project"&&!((y=(w=e==null?void 0:e.default)==null?void 0:w.milestones)!=null&&y[t.portalId])&&H(u,t,h,l,d),t.event==="subtask"&&c!=="task"&&V(u,t,h,l,d),t=N(u,t,h,l,d)}break;case"tasklistFlag":t.tasklistId="",g&&t.subEvent.includes("tasklist")&&t.subEvent.splice(t.subEvent.indexOf("tasklist"),1),g&&["task","subtask"].includes(t.event)&&!((E=(P=(D=e==null?void 0:e.default)==null?void 0:D.milestones)==null?void 0:P[t.portalId])!=null&&E[g])&&J(u,t,h,l,d);break}h(I({},t))},M=(a,e,h,u,l)=>{var i,m;const d=I({},a);return d.event="",d.field_map={},d.actions={},d.subEvent=[],a!=null&&a.portalId&&!((i=a.default.tags)!=null&&i[d.portalId])&&W(e,a,h,u,l),a!=null&&a.portalId&&!((m=a.default.projects)!=null&&m[d.portalId])&&G(e,d,h,u,l),d},x=(a,e,h,u,l)=>{var i,m,s;const d=I({},a);return d.field_map={},d.field_map[d.event]=[{formField:"",zohoFormField:""}],d!=null&&d.event&&((s=(m=(i=d==null?void 0:d.default)==null?void 0:i.fields)==null?void 0:m[d.portalId])!=null&&s[d.event]?d.field_map[d.event]=_(d):O(e,d,h,u,l)),d},L=(a,e,h,u,l)=>{u(!0);const d={formID:a,id:e.id,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};n(d,"bitforms_zprojects_refresh_portals").then(i=>{if(i&&i.success){const m=I({},e);i.data.portals&&(Object.keys(i.data.portals).length>0?(m.default=v(I({},m.default),{portals:i.data.portals}),l({show:!0,msg:k("Portals refreshed")})):l({show:!0,msg:k("No Portal Found")})),i.data.tokenDetails&&(m.tokenDetails=i.data.tokenDetails),l({show:!0,msg:k("Portals refreshed")}),h(I({},m))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?l({show:!0,msg:f(k("Portals refresh failed Cause: %s. please try again"),i.data.data||i.data)}):l({show:!0,msg:k("Portals refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},G=(a,e,h,u,l)=>{const{id:d,portalId:i}=e;u(!0);const m={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i};n(m,"bitforms_zprojects_refresh_projects").then(s=>{if(s&&s.success){const t=I({},e);t.default.projects||(t.default.projects={}),s.data.projects&&(Object.keys(s.data.projects).length>0?(t.default.projects[i]=s.data.projects,l({show:!0,msg:k("Projects refreshed")})):l({show:!0,msg:k("No Project Found")})),s.data.tokenDetails&&(t.tokenDetails=s.data.tokenDetails),h(I({},t))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:f(k("Projects refresh failed Cause: %s. please try again"),s.data.data||s.data)}):l({show:!0,msg:k("Projects refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},H=(a,e,h,u,l)=>{const{id:d,portalId:i,projectId:m}=e;u(!0);const s={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i,projectId:m};n(s,"bitforms_zprojects_refresh_milestones").then(t=>{if(t&&t.success){const r=I({},e);t.data.milestones&&(r.default.milestones||(r.default.milestones={}),Object.keys(t.data.milestones).length>0?(r.default.milestones[m]=t.data.milestones,l({show:!0,msg:k("Milestones refreshed")})):l({show:!0,msg:k("No Milestone Found")})),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),h(I({},r))}else t&&t.data&&t.data.data||!t.success&&typeof t.data=="string"?l({show:!0,msg:f(k("Milestones refresh failed Cause: %s. please try again"),t.data.data||t.data)}):l({show:!0,msg:k("Milestones refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},J=(a,e,h,u,l)=>{const{id:d,portalId:i,projectId:m,tasklistFlag:s}=e;u(!0);const t={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i,projectId:m,tasklistFlag:s};e!=null&&e.milestoneId&&(t.milestoneId=e.milestoneId),n(t,"bitforms_zprojects_refresh_tasklists").then(r=>{if(r&&r.success){const g=I({},e);Object.keys(r.data.tasklists).length>0?(g.default.tasklists||(g.default.tasklists={}),g.default.tasklists[i]||(g.default.tasklists[i]={}),e!=null&&e.milestoneId?(g.default.tasklists[i][e.milestoneId]||(g.default.tasklists[i][e.milestoneId]={}),g.default.tasklists[i][e.milestoneId][s]=r.data.tasklists):g.default.tasklists[i][s]=r.data.tasklists,l({show:!0,msg:k("Tasklists refreshed")})):l({show:!0,msg:k("No Tasklist Found")}),r.data.tokenDetails&&(g.tokenDetails=r.data.tokenDetails),h(I({},g))}else r&&r.data&&r.data.data||!r.success&&typeof r.data=="string"?l({show:!0,msg:f(k("Tasklists refresh failed Cause: %s. please try again"),r.data.data||r.data)}):l({show:!0,msg:k("Tasklists refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},V=(a,e,h,u,l)=>{const{id:d,portalId:i,projectId:m}=e;u(!0);const s={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i,projectId:m};e!=null&&e.milestoneId&&(s.milestoneId=e.milestoneId),e!=null&&e.tasklistId&&(s.tasklistId=e.tasklistId),n(s,"bitforms_zprojects_refresh_tasks").then(t=>{if(t&&t.success){const r=I({},e);Object.keys(t.data.tasks).length>0?(r.default.tasks||(r.default.tasks={}),r.default.tasks[i]||(r.default.tasks[i]={}),e!=null&&e.milestoneId?e!=null&&e.tasklistId?(r.default.tasks[i][e==null?void 0:e.milestoneId]||(r.default.tasks[i][e==null?void 0:e.milestoneId]={}),r.default.tasks[i][e==null?void 0:e.milestoneId][e==null?void 0:e.tasklistId]=t.data.tasks):r.default.tasks[i][e==null?void 0:e.milestoneId]=t.data.tasks:e!=null&&e.tasklistId?r.default.tasks[i][e==null?void 0:e.tasklistId]=t.data.tasks:r.default.tasks[i]=t.data.tasks,l({show:!0,msg:k("Tasks refreshed")})):l({show:!0,msg:k("No Task Found")}),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),h(I({},r))}else t&&t.data&&t.data.data||!t.success&&typeof t.data=="string"?l({show:!0,msg:f(k("Tasks refresh failed Cause: %s. please try again"),t.data.data||t.data)}):l({show:!0,msg:k("Tasks refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},O=(a,e,h,u,l,d)=>{let i;d?i=d:i=e.event;const{portalId:m}=e;u(!0);const s={formID:a,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:m,event:i};e!=null&&e.projectId&&(s.projectId=e.projectId),n(s,"bitforms_zprojects_refresh_fields").then(t=>{if(t&&t.success){const r=I({},e);t.data.fields?(r.default.fields||(r.default.fields={}),r.default.fields[m]||(r.default.fields[m]={}),e!=null&&e.projectId?(r.default.fields[m][e.projectId]||(r.default.fields[m][e.projectId]={}),r.default.fields[m][r.projectId][i]=I({},t.data)):r.default.fields[m][i]=I({},t.data),r.field_map[i]=_(r,i),l({show:!0,msg:k("Fields refreshed")})):l({show:!0,msg:f(k("Fields refresh failed Cause: %s. please try again"),t.data.data||t.data)}),t.data.tokenDetails&&(r.tokenDetails=t.data.tokenDetails),h(I({},r))}else l({show:!0,msg:k("Fields refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},S=(a,e,h,u,l)=>{const{id:d,portalId:i}=e;u(!0);const m={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:e.portalId};e!=null&&e.projectId&&(m.projectId=e.projectId),n(m,"bitforms_zprojects_refresh_users").then(s=>{if(s&&s.success){const t=I({},e);t.default.users||(t.default.users={}),s.data.users&&(Object.keys(s.data.users).length>0?(e!=null&&e.projectId?(t.default.users[i]||(t.default.users[i]={}),t.default.users[i][e.projectId]=s.data.users):t.default.users[i]=s.data.users,l({show:!0,msg:k("Owners refreshed")})):l({show:!0,msg:k("No Owner Found")})),s.data.tokenDetails&&(t.tokenDetails=s.data.tokenDetails),h(I({},t))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:f(k("Owners refresh failed Cause: %s. please try again"),s.data.data||s.data)}):l({show:!0,msg:k("Owners refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},p=(a,e,h,u,l)=>{const{id:d,portalId:i}=e;u(!0);const m={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i};n(m,"bitforms_zprojects_refresh_task_layouts").then(s=>{if(s&&s.success){const t=I({},e);t.default.taskLays||(t.default.taskLays={}),s.data.taskLays&&(Object.keys(s.data.taskLays).length>0?(t.default.taskLays[i]=s.data.taskLays,l({show:!0,msg:k("Task Layouts refreshed")})):l({show:!0,msg:k("No Task Layout Found")})),s.data.tokenDetails&&(t.tokenDetails=s.data.tokenDetails),h(I({},t))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:f(k("Task Layouts refresh failed Cause: %s. please try again"),s.data.data||s.data)}):l({show:!0,msg:k("Task Layouts refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},j=(a,e,h,u,l)=>{const{id:d,portalId:i}=e;u(!0);const m={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i};n(m,"bitforms_zprojects_refresh_groups").then(s=>{if(s&&s.success){const t=I({},e);t.default.groups||(t.default.groups={}),s.data.groups&&(Object.keys(s.data.groups).length>0?(t.default.groups[i]=s.data.groups,l({show:!0,msg:k("Project Groups refreshed")})):l({show:!0,msg:k("No Project Group Found")})),s.data.tokenDetails&&(t.tokenDetails=s.data.tokenDetails),h(I({},t))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:f(k("Project Groups refresh failed Cause: %s. please try again"),s.data.data||s.data)}):l({show:!0,msg:k("Project Groups refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},W=(a,e,h,u,l)=>{const{id:d,portalId:i}=e;u(!0);const m={formID:a,id:d,dataCenter:e.dataCenter,clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails,portalId:i};n(m,"bitforms_zprojects_refresh_tags").then(s=>{if(s&&s.success){const t=I({},e);t.default.tags||(t.default.tags={}),s.data.tags&&(Object.keys(s.data.tags).length>0?(t.default.tags[i]=s.data.tags,l({show:!0,msg:k("Tags refreshed")})):l({show:!0,msg:k("No Tag Found")})),s.data.tokenDetails&&(t.tokenDetails=s.data.tokenDetails),h(I({},t))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?l({show:!0,msg:f(k("Tags refresh failed Cause: %s. please try again"),s.data.data||s.data)}):l({show:!0,msg:k("Tags refresh failed. please try again")});u(!1)}).catch(()=>u(!1))},_=(a,e)=>{var u,l;let h;return e?h=e:h=a.event,a!=null&&a.projectId?a.default.fields[a.portalId][a.projectId][h].required.length>0?(u=a.default.fields[a.portalId][a.projectId][h].required)==null?void 0:u.map(d=>({formField:"",zohoFormField:d})):[{formField:"",zohoFormField:""}]:a.default.fields[a.portalId][h].required.length>0?(l=a.default.fields[a.portalId][h].required)==null?void 0:l.map(d=>({formField:"",zohoFormField:d})):[{formField:"",zohoFormField:""}]},B=a=>{let e=!0;return a!=null&&a.subEvent&&a.subEvent.map(h=>{var l,d;let u=[];a!=null&&a.projectId?u=(l=a==null?void 0:a.field_map)!=null&&l[h]?a.field_map[h].filter(i=>{var m,s,t,r,g;return!i.formField&&i.zohoFormField&&((g=(r=(t=(s=(m=a==null?void 0:a.default)==null?void 0:m.fields)==null?void 0:s[a.portalId])==null?void 0:t[a.projectId])==null?void 0:r[h])==null?void 0:g.required.indexOf(i.zohoFormField))!==-1}):[]:u=(d=a==null?void 0:a.field_map)!=null&&d[h]?a.field_map[h].filter(i=>{var m,s,t,r;return!i.formField&&i.zohoFormField&&((r=(t=(s=(m=a==null?void 0:a.default)==null?void 0:m.fields)==null?void 0:s[a.portalId])==null?void 0:t[h])==null?void 0:r.required.indexOf(i.zohoFormField))!==-1}):[],u.length>0&&(e=!1)}),!!e},K=a=>{let e=!0;const h={project:["owner","tasklayoutid"],milestone:["owner","flag"],tasklist:["flag"],task:["owner"],subtask:["owner"],issue:["owner","flag"]};return a!=null&&a.subEvent&&a.subEvent.map(u=>{h[u].map(l=>{a.actions[u][l]||(e=!1)})}),!!e},C=(a,e)=>B(a)?K(a)?(a==null?void 0:a.event)==="subtask"&&!(a!=null&&a.taskId||a.subEvent.includes("task"))?(e({show:!0,msg:k("to create a subtask you must select a task or create a new task")}),!1):["task","subtask"].includes(a==null?void 0:a.event)&&(a!=null&&a.milestoneId||a.subEvent.includes("milestone"))&&!(a!=null&&a.tasklistId||a.subEvent.includes("tasklist"))?(e({show:!0,msg:f(k("to create a %s under milestone you must select a tasklist or create a new tasklist"),a.event)}),!1):!0:(e({show:!0,msg:k("please fill up the required actions")}),!1):(e({show:!0,msg:k("please map mandatory fields")}),!1),ee=(a,e,h,u,l,d)=>{if(!a.dataCenter||!a.clientId||!a.clientSecret){h({dataCenter:a.dataCenter?"":k("Data center cann't be empty"),clientId:a.clientId?"":k("Client ID cann't be empty"),clientSecret:a.clientSecret?"":k("Secret key cann't be empty")});return}const i=A(T);l(!0);const m="ZohoProjects.portals.READ,ZohoProjects.projects.READ,ZohoProjects.projects.CREATE,ZohoProjects.projects.UPDATE,ZohoProjects.milestones.READ,ZohoProjects.milestones.CREATE,ZohoProjects.milestones.UPDATE,ZohoProjects.tasklists.READ,ZohoProjects.tasklists.CREATE,ZohoProjects.tasklists.UPDATE,ZohoProjects.tasks.READ,ZohoProjects.tasks.CREATE,ZohoProjects.tasks.UPDATE,ZohoProjects.bugs.READ,ZohoProjects.bugs.CREATE,ZohoProjects.bugs.UPDATE,ZohoProjects.tags.ALL,ZohoProjects.users.READ,ZohoProjects.users.CREATE,ZohoProjects.timesheets.CREATE,ZohoPC.files.ALL",s=`https://accounts.zoho.${a.dataCenter}/oauth/v2/auth?scope=${m}&response_type=code&client_id=${a.clientId}&prompt=Consent&access_type=offline&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(i.zohoRedirectURL)}`,t=window.open(s,"zohoProjects","width=400,height=609,toolbar=off"),r=setInterval(()=>{if(t.closed){clearInterval(r);let g={},w=!1;const y=localStorage.getItem("__bitforms_zohoProjects");if(y&&(w=!0,g=JSON.parse(y),localStorage.removeItem("__bitforms_zohoProjects")),!g.code||g.error||!g||!w){const D=g.error?`Cause: ${g.error}`:"";d({show:!0,msg:`${k("Authorization failed")} ${D}. ${k("please try again")}`}),l(!1)}else{const D=I({},a);D.accountServer=g["accounts-server"],Q(g,D,e,u,l,d)}}},500)},Q=(a,e,h,u,l,d)=>{const i=A(T),m=I({},a);m.dataCenter=e.dataCenter,m.clientId=e.clientId,m.clientSecret=e.clientSecret,m.redirectURI=encodeURIComponent(i.zohoRedirectURL),n(m,"bitforms_zprojects_generate_token").then(s=>s).then(s=>{if(s&&s.success){const t=I({},e);t.tokenDetails=s.data,h(t),u(!0),d({show:!0,msg:k("Authorized Successfully")})}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?d({show:!0,msg:`${k("Authorization failed Cause:")}${s.data.data||s.data}. ${k("please try again")}`}):d({show:!0,msg:k("Authorization failed. please try again")});l(!1)})};export{p as a,j as b,C as c,W as d,O as e,L as f,G as g,o as h,H as i,J as j,V as k,N as l,ee as m,S as r};
