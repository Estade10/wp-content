 if(!window.bf_globals){ window.bf_globals={};}["bitforms_1_157_1"].forEach(function(contentId){const form=document.getElementById(contentId);if(!form){ delete window.bf_globals[contentId];return;}if(!window.bf_globals[contentId]){window.bf_globals[contentId]={inits:{},contentId: contentId};}else{ window.bf_globals[contentId].inits={};window.bf_globals[contentId].contentId=contentId;}});var bfSelect=function(){"use strict";return function(e,t){return(t||document).querySelector(e)}}();var bfReset=function(){"use strict";return function(e,t=!1){if(t){const t=new CustomEvent("bf-form-reset",{detail:{formId:e}});bfSelect(`#form-${e}`).dispatchEvent(t)}const r=window.bf_globals[e];bfSelect(`#form-${e}`).reset(),localStorage.setItem("bf-entry-id",""),"undefined"!=typeof customFieldsReset&&customFieldsReset(r),"undefined"!=typeof resetOtherOpt&&resetOtherOpt(),window.bf_globals[e].modifiedFields=r.fields,Object.keys(r.fields).forEach((t=>{const r=bfSelect(`#form-${e} .${t}-err-wrp`);r&&(setStyleProperty(r,"height","0px"),setStyleProperty(r,"opacity",0),setStyleProperty(bfSelect(`.${t}-err-msg`,r),"display","none"))})),r.gRecaptchaSiteKey&&"v2"===r.gRecaptchaVersion&&window?.grecaptcha?.reset()}}();var setBFMsg=function(){"use strict";return function(e){let t=bfSelect(`#bf-form-msg-wrp-${e.contentId}`);t.innerHTML=`<div class="bf-form-msg deactive ${e.type} scroll">${e.msg}</div>`,t=bfSelect(".bf-form-msg",t);let s=5e3;e.msgId&&(t=bfSelect(`.msg-content-${e.msgId} .msg-content`,bfSelect(`#${e.contentId}`)),t.innerHTML=e.msg,t=bfSelect(`.msg-container-${e.msgId}`,bfSelect(`#${e.contentId}`)),s=e.duration),t&&t.classList.replace("active","deactive"),t.classList.contains("scroll")&&scrollToElm(t),t&&(setTimeout((()=>{t.classList.replace("deactive","active")}),100),s&&setTimeout((()=>{t.classList.replace("active","deactive")}),s))}}();var scrollToElm=function(){"use strict";let t;function e(t,e){const o=t.getBoundingClientRect(),n=e===document.documentElement?{top:0,left:0,bottom:window.innerHeight,right:window.innerWidth}:e.getBoundingClientRect();return o.top>=n.top&&o.left>=n.left&&o.bottom<=n.bottom&&o.right<=n.right}return function(o){clearTimeout(t),t=setTimeout((()=>{(()=>{let t=o.parentElement;for(;t;){const n=getComputedStyle(t);if(("absolute"===n.position||"auto"===n.overflow||"scroll"===n.overflow)&&!e(o,t)){const e=o.getBoundingClientRect(),n=t.getBoundingClientRect(),l=e.left-n.left+t.scrollLeft,i=e.top-n.top+t.scrollTop;t.scrollTo({top:i,left:l,behavior:"smooth"})}t=t.parentElement}e(o,document.documentElement)||o.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})})()}),10)}}();var getFldKeyAndRowIndx=function(){"use strict";return function(n){const t=n.match(/([^\[]+)(?:\[(\d+)\])?/);return t?[t[1],t[2]||""]:[n]}}();var moveToFirstErrFld=function(){"use strict";return function(t,n=[]){const r=t?.layout||{},e=t?.nestedLayout||{},o=Array.isArray(r);let s=-1;const c=(o?r:[{layout:r}]).reduce(((t,r,o)=>{const c=r.layout.lg.reduce(((t,n)=>{const r=n.i;if(r in e){const n=e[r].lg.map((t=>t.i));return[...t,r,...n]}return[...t,r]}),[]),i=c.find((t=>n.includes(t)));return-1===s&&i&&(s=o),[...t,...c]}),[]);o&&s>-1&&(t.inits.multi_step_form.step=s+1),c.some((r=>n.some((n=>{const[e,o]=getFldKeyAndRowIndx(n);if(r===e){const n=o?`.rpt-index-${o}`:"",e=bfSelect(`#form-${t.contentId} ${n} .btcd-fld-itm.${r}`);return scrollToElm(e,!0),!0}return!1}))))}}();var bfValidationErrMsg=function(){"use strict";return function(e,t){const{data:r}=e;r&&"string"==typeof r?setBFMsg({contentId:t,msg:r,error:!0,show:!0,type:"error"}):r&&(void 0!==r.$form&&(setBFMsg({contentId:t,msg:r.$form.message,msgId:r.$form.msg_id,duration:r.$form.msg_duration,type:"error"}),delete r.$form),Object.keys(r).length>0&&function(e,t){const r=Object.keys(e);r.forEach((r=>{const[o,s]=getFldKeyAndRowIndx(r),y=bfSelect(`#form-${t} ${s?`.rpt-index-${s}`:""} .${o}-err-wrp`),i=bfSelect(`.${o}-err-txt`,y),n=bfSelect(`.${o}-err-msg`,y);let l=!1;try{l="grid"===getComputedStyle(y).display,l&&(y.style.removeProperty("opacity"),y.style.removeProperty("height"),n.style.removeProperty("display"))}catch(e){l=!1}i.innerHTML=e[r],l?setStyleProperty(y,"grid-template-rows","1fr"):setTimeout((()=>{n.style.removeProperty("display"),setStyleProperty(y,"height",`${i.offsetHeight}px`),setStyleProperty(y,"opacity",1)}),100)})),moveToFirstErrFld(window?.bf_globals?.[t],r)}(r,t))}}();var setHiddenFld=function(){"use strict";return function e(t,n){let a=bfSelect(`input[name="${t.name}"]`,n);return a||(a=document.createElement("input"),a.type="text",a.className="d-none",n.append(a)),"b_h_t"===t.name&&(bfSelect(`input[name="${a.value}"]`,n)?.remove(),e({name:t.value,required:""},n)),Object.keys(t).forEach((e=>{a.setAttribute(e,t[e])})),a}}();var submit_form=function(){"use strict";function e(e,t){const o=new URL(e?.ajaxURL),n=e?.entryId?"bitforms_update_form_entry":"bitforms_submit_form";return o.searchParams.append("action",n),e?.entryId&&(o.searchParams.append("_ajax_nonce",e.nonce||""),o.searchParams.append("entryID",e.entryId),o.searchParams.append("formID",e.formId)),fetch(o,{method:"POST",body:t})}function t(e,t,n){e.then((e=>new Promise(((o,n)=>{if(e.staus>400){const o=new CustomEvent("bf-form-submit-error",{detail:{formId:t,errors:result.data}});bfSelect(`#form-${t}`).dispatchEvent(o),500===e.staus?n(new Error("Mayebe Internal Server Error")):n(e.json())}else o(e.json())})))).then((e=>{const a=new CustomEvent("bf-form-submit-success",{detail:{formId:t,entryId:e.entryId,formData:n}});bfSelect(`#form-${t}`).dispatchEvent(a);let r=null,s=null,c="",d=1e3;const i=window.bf_globals[t];if(void 0!==e&&e.success){const o=bfSelect(`#form-${t}`);bfReset(t),"object"==typeof e.data?(o&&e?.data?.hidden_fields?.map((e=>{setHiddenFld(e,o)})),r=e.data.redirectPage,e.data.cron&&(s=e.data.cron),e.data.cronNotOk&&(s=e.data.cronNotOk),e.data.new_nonce&&(c=e.data.new_nonce),setBFMsg({contentId:t,msgId:e.data.msg_id,msg:e.data.message,duration:e.data.msg_duration,show:!0,type:"success",error:!1}),d=Number(e.data.msg_duration||1e3)):setBFMsg({contentId:t,msg:e.data,type:"success",show:!0,error:!1}),localStorage.removeItem(`bitform-partial-form-${i.formId}`);const n=bfSelect('input[name="entryID"]',o);n&&n.remove(),delete i.entryId}else{const o=new CustomEvent("bf-form-submit-error",{detail:{formId:t,errors:e.data}});bfSelect(`#form-${t}`).dispatchEvent(o),bfValidationErrMsg(e,t)}if(function(e,t,o){const n=window.bf_globals[o];if(e)if("string"==typeof e){const t=new URL(e);t.protocol!==window.location.protocol&&(t.protocol=window.location.protocol),fetch(t)}else{const o=new URL(n.ajaxURL);o.searchParams.append("action","bitforms_trigger_workflow");const a={cronNotOk:e,token:t||n.nonce,id:n.appID};fetch(o,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}}(s,c,t),r){const e=setTimeout((()=>{window.location=decodeURI(r),e&&clearTimeout(e)}),d)}o(t,!1)})).catch((e=>{const n=e?.message?e.message:"Unknown Error";setBFMsg({contentId:t,msg:n,show:!0,type:"error",error:!0}),o(t,!1)}))}function o(e,t){bfSelect('button[type="submit"]',bfSelect(`#form-${e}`)).disabled=t;const o=bfSelect('button[type="submit"] span',bfSelect(`#form-${e}`));o&&o.classList.toggle("d-none")}return function(n=null){(n?[n]:Object.keys(window.bf_globals)).forEach((n=>{const a=bfSelect(`#form-${n}`);a&&(a.addEventListener("submit",(n=>{!function(n){n.preventDefault();const a=n.target.id.slice(n.target.id.indexOf("-")+1);if("undefined"!=typeof validateForm&&!validateForm({form:a})){const e=new CustomEvent("bf-form-validation-error",{detail:{formId:a,fieldId:"",error:""}});return void n.target.dispatchEvent(e)}o(a,!0);let r=new FormData(n.target);const s=window.bf_globals[a];"undefined"!=typeof advancedFileHandle&&(r=advancedFileHandle(s,r)),"undefined"!=typeof decisionFldHandle&&(r=decisionFldHandle(s,r)),s.GCLID&&r.set("GCLID",s.GCLID);const c=[];Object.entries(s?.fields||{}).forEach((e=>{e[1]?.valid?.hide&&c.push(e[0])})),c.length&&r.append("hidden_fields",c),"v3"===s?.gRecaptchaVersion&&s?.gRecaptchaSiteKey?grecaptcha.ready((()=>{grecaptcha.execute(s.gRecaptchaSiteKey,{action:"submit"}).then((o=>{r.append("g-recaptcha-response",o),t(e(s,r),a,r)}))})):t(e(s,r),a,r)}(n)})),bfSelect('button[type="reset"]',a)?.addEventListener("click",(()=>bfReset(a.id.replace("form-",""),!0))))})),document.querySelectorAll(".msg-backdrop,.bf-msg-close").forEach((e=>{e.addEventListener("click",(t=>{t.target===e&&(t.stopPropagation(),bfSelect(`#${e.dataset.contentid} .msg-container-${e.dataset.msgid}`).classList.replace("active","deactive"))}))})),localStorage.setItem("bf-entry-id","")}}();var setStyleProperty=function(){"use strict";return function(t,e,r){t?.style&&t.style.setProperty(e,r,"important")}}();var customFieldsReset=function(){"use strict";return function(e){Object.entries(e.inits||{}).map((([t,s])=>{if(s?.reset){const i=t.replace(/\[\w+\]/g,""),n=e.fields[i];s.reset(n?.val)}}))}}();var bit_file_up_field=function(){"use strict";return class{#e=null;#t=null;#s=null;#i=null;#l=null;#a=null;#c=null;#r=null;#n=null;#h={};#o=[];#f=null;#d={};#p={};#u={};#m="";#v="";#b=[];#g={id:"upload",name:"upload",required:!0,multiple:!1,maxSize:0,sizeUnit:"KB",isItTotalMax:!1,showMaxSize:!0,showSelectStatus:!0,fileSelectStatus:"No Choosen File",allowedFileType:"",showFileList:!0,showFilePreview:!0,showFileSize:!0,accept:".pdf,.exe,.msi",duplicateAllow:!1,capture:"",minFile:0,maxFile:0,onchange:()=>{console.log("Hellow World")},oninput:()=>{}};constructor(e,t){Object.assign(this.#g,t),this.#f=t.document?t.document:document,this.#d=t.window?t.window:window,this.#p=t.attributes||{},this.#u=t.classNames||{},this.#e="string"==typeof e?this.#f.querySelector(e):e,this.#m=this.#g.fieldKey,this.fieldKey=this.#m,this.#v=t.assetsURL||"",this.init()}init(){this.#t=this.#w(`.${this.#m}-label`),this.#s=this.#w(`.${this.#m}-inp-btn`),this.#i=this.#w(`.${this.#m}-file-select-status`),this.#l=this.#w(`.${this.#m}-file-input-wrpr`),this.#a=this.#w(`.${this.#m}-max-size-lbl`),this.#c=this.#w(`.${this.#m}-file-upload-input`),this.#n=this.#w(`.${this.#m}-file-input-wrpr .err-wrp`);const{multiple:e,allowedFileType:t,accept:s,showSelectStatus:i,fileSelectStatus:l,oldFiles:a}=this.#g;this.#c.multiple=e,this.#c.accept=t?`${t},${s}`:s,i?this.#i.innerHTML=l:this.#i?.remove(),this.#h={},this.#C(),a&&this.#L(a),this.#S(this.#c,"change",(e=>this.#F(e))),this.#S(this.#s,"click",(()=>this.#c.click()))}#L(e){const t=JSON.parse(e);this.#b=JSON.parse(e),this.#r||this.#x(),t.forEach((e=>{this.#E(e)}));const s=this.#y("input");s.type="hidden",s.name=`${this.#m}_old`,s.value=this.#b.toString(),this.#l.appendChild(s)}#E(e){const t=this.#y("div"),s=e.replace(/( |\.|\(|\))/g,"");if(t.id=`file-wrp-${s}`,this.#A(t,"file-wrpr"),"file-wrpr"in this.#u){const e=this.#u["file-wrpr"];e&&this.#$(t,e)}if("file-wrpr"in this.#p){const e=this.#p["file-wrpr"];this.#z(t,e)}const i=this.#y("div");this.#A(i,"file-details");const l=this.#y("a");if(this.#A(l,"file-title"),"file-title"in this.#u){const e=this.#u["file-title"];e&&this.#$(l,e)}if("file-title"in this.#g.attributes){const e=this.#g.attributes["file-title"];this.#z(l,e)}this.#U(l,"target","_blank"),this.#U(l,"href",`${this.#g.baseDLURL}&fileID=${e}`),this.#T(l,e),i.append(l),t.append(i);const a=this.#y("button");if(this.#A(a,"cross-btn"),"cross-btn"in this.#u){const e=this.#u["cross-btn"];e&&this.#$(a,e)}if(this.#U(a,"data-file-id",s),this.#U(a,"data-file-name",e),this.#U(a,"type","button"),"cross-btn"in this.#g.attributes){const e=this.#g.attributes["cross-btn"];this.#z(a,e)}this.#T(a,"×"),this.#S(a,"click",(e=>this.#I(e))),t.append(a),this.#r.appendChild(t)}#F(e){const{files:t}=this.#c,{sizeUnit:s,allowMaxSize:i,maxSize:l,maxSizeErrMsg:a,isItTotalMax:c,multiple:r,showFileList:n,fileExistMsg:h,showFilePreview:o,showFileSize:f,showSelectStatus:d,fileSelectStatus:p,minFile:u,minFileErrMsg:m,maxFile:v,maxFileErrMsg:b}=this.#g,g=this.#N(s,l);let w=0;const C=[];this.#K(this.#n,"active"),c&&Object.values(this.#h).forEach((e=>{w+=e.size})),!r&&t.length>0&&(this.#h={},this.#r&&this.#T(this.#r,""));for(let e=0;e<t.length;e+=1){const s=t[e],r=s.name.replace(/( |\.|\(|\))/g,"");if(this.#h[r])C.push(h);else if(!i||!l||s.size+w<=g)if(!(v>0)||Object.keys(this.#h).length<v){if(this.#h[r]=s,n){this.#r||this.#x();const e=this.#y("div");if(e.id=`file-wrp-${r}`,this.#A(e,"file-wrpr"),"file-wrpr"in this.#u){const t=this.#u["file-wrpr"];t&&this.#$(e,t)}if("file-wrpr"in this.#p){const t=this.#p["file-wrpr"];this.#z(e,t)}if(o){const t=this.#y("img");if(t.src=this.#M(s),t.alt="Image Uploaded",this.#A(t,"file-preview"),"file-preview"in this.#u){const e=this.#u["file-preview"];e&&this.#$(t,e)}if("file-preview"in this.#p){const e=this.#p["file-preview"];this.#z(t,e)}e.append(t)}const t=this.#y("div");this.#A(t,"file-details");const i=this.#y("span");if(this.#A(i,"file-title"),"file-title"in this.#u){const e=this.#u["file-title"];e&&this.#$(i,e)}if("file-title"in this.#g.attributes){const e=this.#g.attributes["file-title"];this.#z(i,e)}if(this.#T(i,s.name),t.append(i),f){const e=this.#y("span");if(this.#A(e,"file-size"),"file-size"in this.#u){const t=this.#u["file-size"];t&&this.#$(e,t)}if("file-size"in this.#g.attributes){const t=this.#g.attributes["file-size"];this.#z(e,t)}this.#T(e,this.#W(s.size)),t.append(e)}e.append(t);const l=this.#y("button");if(this.#A(l,"cross-btn"),"cross-btn"in this.#u){const e=this.#u["cross-btn"];e&&this.#$(l,e)}if(this.#U(l,"data-file-id",r),"cross-btn"in this.#g.attributes){const e=this.#g.attributes["cross-btn"];this.#z(l,e)}this.#T(l,"×"),e.append(l),this.#r.append(e)}c&&(w+=s.size)}else this.#n.innerHTML=b,this.#A(this.#n,"active"),setTimeout((()=>{this.#K(this.#n,"active")}),3e3);else C.push(a)}this.#j(`.${this.#m}-file-input-wrpr .cross-btn`).forEach((e=>{this.#S(e,"click",(e=>this.#k(e)))}));const L=Object.keys(this.#h).length;this.#O(),L&&d?this.#i.innerText=`${L} file${L>1?"s":""} selected`:d&&(this.#i.innerHTML=p),u>0&&L<u&&(this.#n.innerHTML=m,this.#A(this.#n,"active")),!this.#r&&C.length>0&&this.#x(),C.map(((e,t)=>{this.#r.insertAdjacentHTML("afterbegin",`\n <div id='err-${t}' class="err-wrp">\n ${e}\n </div>`);const s=this.#w(`#err-${t}`);this.#A(s,"active"),setTimeout((()=>{this.#K(s,"active")}),3e3),setTimeout((()=>{s?.remove(),Object.keys(this.#h).length||this.#C()}),5e3)}))}#x(){if(this.#r=this.#y("div"),this.#A(this.#r,"files-list"),"files-list"in this.#u){const e=this.#u["files-list"];e&&this.#$(this.#r,e)}if("files-list"in this.#p){const e=this.#p["files-list"];this.#z(this.#r,e)}this.#l.append(this.#r)}#C(){this.#r?.remove(),this.#r=null}#O(){const e=new DataTransfer;Object.values(this.#h)?.forEach((t=>{e.items.add(t)})),this.#c.files=e.files}#I(e){const t=e.target.getAttribute("data-file-id"),s=e.target.getAttribute("data-file-name");this.#R(`#file-wrp-${t}`),this.#b=this.#b.filter((e=>e!==s)),this.#w(`input[name="${this.#m}_old"]`).value=this.#b.toString()}#k=e=>{const t=e.target.getAttribute("data-file-id");this.#R(`#file-wrp-${t}`),delete this.#h[t];const s=Object.keys(this.#h).length;s?this.#i.innerText=`${s} file${s>1?"s":""} selected`:(this.#i.innerHTML=this.#g.fileSelectStatus,this.#C()),this.#O()};#w(e){return this.#e.querySelector(e)}#j(e){return this.#e.querySelectorAll(e)}#R(e){this.#w(e)?.remove()}#y(e){return this.#f.createElement(e)}#M(e){switch(e.name.substring(e.name.lastIndexOf(".")+1)){case"xbm":case"tif":case"pjp":case"pjpeg":case"svgz":case"jpg":case"jpeg":case"ico":case"tiff":case"gif":case"svg":case"bmp":case"png":case"jfif":case"webp":return URL.createObjectURL(e);case"7z":case"arj":case"deb":case"pkg":case"rar":case".rpm":case".gz":case"z":case"zip":return`${this.#v}/zip-compressed.svg`;case"key":case"odp":case"pps":case"ppt":case"pptx":return`${this.#v}/presentation.svg`;case"_RF_":case"doc":case"docx":case"odt":case"pdf":case"rtf":case"tex":case"txt":case"wks":case"wps":case"wpd":return`${this.#v}/document.svg`;case"csv":case"dat":case"db":case"dbf":case"log":case"mdb":case"sav":case"sql":case"tar":case"sqlite":case"xml":return`${this.#v}/database.svg`;case"opus":case"flac":case"webm":case"weba":case"wav":case"ogg":case"m4a":case"mp3":case"oga":case"mid":case"amr":case"aiff":case"wma":case"au":case"acc":case"wpl":case"ogm":case"wmv":case"mpg":case"ogv":case"mov":case"asx":case"mpeg":case"mp4":case"m4v":case"avi":case"3gp":case"flv":case"mkv":case"swf":return`${this.#v}/file-audio.svg`;default:return`${this.#v}/paperclip.svg`}}#S(e,t,s){e.addEventListener(t,s),this.#o.push({element:e,eventType:t,eventAction:s})}#A(e,t){e.classList.add(t)}#K(e,t){e.classList.remove(t)}#T(e,t){e.textContent=t}#U(e,t,s){e?.setAttribute?.(t,s)}#$(e,t){t.trim().split(/\b\s+\b/g).forEach((t=>this.#A(e,t)))}#z(e,t){const s=t.length;if(s)for(let i=0;i<s;i+=1)this.#U(e,t[i].key,t[i].value)}#W(e){return e<1024?`${e}Bytes`:e>=1024&&e<1048576?`${(e/1024).toFixed(1)}KB`:e>=1048576&&e<1073741824?`${(e/1048576).toFixed(1)}MB`:e>=1073741824?`${(e/1073741824).toFixed(1)}GB`:void 0}#N(e,t){switch(e){case"Bytes":return t;case"KB":return 1024*t;case"MB":return 1048576*t;case"GB":return 1073741824*t;default:return 0}}#B(){this.#o.forEach((({element:e,eventType:t,eventAction:s})=>{e.removeEventListener(t,s)}))}destroy(){this.#r&&(this.#r.innerHTML=""),this.#B()}reset(){this.destroy(),this.init()}}}();var requiredFldValidation=function(){"use strict";return r=>r?.valid?.req?"req":""}();var generateBackslashPattern=function(){"use strict";return t=>(t||"").split("$_bf_$").join("\\")}();var emailFldValidation=function(){"use strict";return(e,t)=>t.err.invalid.show?new RegExp(generateBackslashPattern(t.pattern)).test(e)?"":"invalid":""}();var validateForm=function(){"use strict";let e,t,i={},n=[];const r=t=>window?.bf_globals?.[e].inits?.[t],o=e=>{const n=e.replace(/\[\d*\]/g,"");if(i[n])return i[n];const r=Object.entries(t);for(let e=0;e<r.length;e+=1){const[t,o]=r[e];if(o?.fieldName===n)return i[n]=t,t}return""},l=()=>{const n=new FormData(bfSelect(`#form-${e}`)),r={},l=Array.from(n.entries());return i={},l.forEach((([e,i])=>{const n=o(e),l=e.replace("[]","");n in t&&(r[l]?(Array.isArray(r[l])||(r[l]=[r[l]]),r[l].push(i)):r[l]=i)})),r},d=(t,i,r,o="")=>{const l=bfSelect(`#form-${e} ${o} .${i}-err-wrp`),d=bfSelect(`.${i}-err-txt`,l),a=bfSelect(`.${i}-err-msg`,l);let s=!1;try{s="grid"===getComputedStyle(l).display,s&&(l.style.removeProperty("opacity"),l.style.removeProperty("height"),a.style.removeProperty("display"))}catch(e){s=!1}d&&"err"in(r||{})&&(t&&r?.err?.[t]?.show?(d.innerHTML=r.err[t].custom?r.err[t].msg:r.err[t].dflt,s?setStyleProperty(l,"grid-template-rows","1fr"):setTimeout((()=>{a.style.removeProperty("display"),setStyleProperty(l,"height",`${d.offsetHeight}px`),setStyleProperty(l,"opacity",1)}),100),n.push(i)):(d.innerHTML="",s?setStyleProperty(l,"grid-template-rows","0fr"):(setStyleProperty(l,"height",0),setStyleProperty(l,"opacity",0),setStyleProperty(a,"display","none"))))};return function({form:i,input:a},{step:s}={}){i?e=i:a?.form?.id&&([,e]=a.form.id.split("form-"));const f=window?.bf_globals?.[e];if(void 0===f)return!1;let c={};n=[];const p=f.configs.bf_separator;if(s){let e=f.layout[s-1];if(!e)return!1;e=e?.layout||e;const i=e.lg.map((e=>e.i)),n=f.nestedLayout||{};Object.entries(n).forEach((([e,t])=>{if(i.includes(e)){const e=t.lg.map((e=>e.i));i.push(...e)}})),t=i.reduce(((e,t)=>({...e,[t]:f.fields[t]})),{})}else t=f.fields;const{modifiedFields:u}=f;if(u&&Object.assign(t,u),i)c=l();else if(a){if(!f.validateFocusLost)return!0;const e=o(a.name);c=l(),t={[e]:t[e]}}let y=!0;const m=Object.entries(t);let{length:h}=m;for(;h--;){const[t,i]=m[h];let n=[""];if("undefined"!=typeof checkRepeatedField){const e=checkRepeatedField(t,f);n=getRepeatedIndexes(e,f,a)}for(let o=0;o<n.length;o+=1){const l=n[o],a=l?`${i.fieldName}[${l}]`:i.fieldName,s=l?`.rpt-index-${l}`:"",f=i.typ,u="string"==typeof c[a]?c[a].trim():c[a];if(bfSelect(`#form-${e} ${s} .${t}.fld-hide`)){d("",t,i,s);continue}let m="";"check"===f&&(m="undefined"!=typeof checkFldValidation?checkFldValidation(u,i):""),"check"!==f&&"radio"!==f||m||"undefined"==typeof customOptionValidation||(m=customOptionValidation(e,t,i)),u||m||(m="undefined"!=typeof requiredFldValidation?requiredFldValidation(i):null),d(m,t,i,s),m?y=!1:u&&("number"===f&&"undefined"!=typeof nmbrFldValidation?m=nmbrFldValidation(u,i):"email"===f&&"undefined"!=typeof emailFldValidation?m=emailFldValidation(u,i):"url"===f&&"undefined"!=typeof urlFldValidation?m=urlFldValidation(u,i):"decision-box"===f&&"undefined"!=typeof dcsnbxFldValidation?m=dcsnbxFldValidation(u,i):"check"!==f&&"select"!==f||"undefined"==typeof checkMinMaxOptions?"file-up"===f&&"undefined"!=typeof fileupFldValidation?m=fileupFldValidation(u,i):"advanced-file-up"===f&&"undefined"!=typeof advanceFileUpFldValidation?m=advanceFileUpFldValidation(r(t),i):"phone-number"===f&&"undefined"!=typeof phoneNumberFldValidation&&(m=phoneNumberFldValidation(r(t),i)):m=checkMinMaxOptions(u,i,p),i?.valid?.regexr&&!m&&(m="undefined"!=typeof regexPatternValidation?regexPatternValidation(u,i):null),d(m,t,i,s),m&&(y=!1))}}return moveToFirstErrFld(f,n),y}}(); const customFldConfigPaths={"file-up":{"fieldKey":{"var":"fieldKey"},"formID":{"var":"formId"},"maxSizeErrMsg":{"path":["err->maxSize->msg","err->maxSize->dflt"]},"minFileErrMsg":{"path":["err->minFile->msg","err->minFile->dflt"]},"maxFileErrMsg":{"path":["err->maxFile->msg","err->maxFile->dflt"]},"assetsURL":{"val":"http:\/\/lle-aux-livres.local\/wp-content\/plugins\/bit-form\/static\/file-upload\/"},"classNames":{"path":"customClasses"},"attributes":{"path":"customAttributes"},"fieldName":{"path":"fieldName"}}};const fldContainers={"file-up":".__$fk__-file-up-wrpr"};;function initAllCustomFlds(formContentId=null){const allContendIds=formContentId? [formContentId]: Object.keys(bf_globals);allContendIds.forEach((contentId)=>{const contentData=bf_globals[contentId];const flds=bf_globals[contentId].fields;const fldKeys=Object.keys(flds).reverse();fldKeys.forEach((fldKey)=>{const fldData=flds[fldKey];const fldType=fldData.typ;if(fldType==='paypal'){;} else if(fldType==='razorpay'){;} else if(fldType==='recaptcha'){;} else if(fldType==='stripe'){;} else if(customFldConfigPaths[fldType]){contentData.inits[fldKey]=getFldInstance(contentId,fldKey,fldType);}});if(contentData.gRecaptchaVersion==='v3' && contentData.gRecaptchaSiteKey){;}});};function getFldInstance(contentId,fldKey,fldTyp,nestedSelector=''){const fldClass=this['bit_'+fldTyp.replace(/-/g,'_')+'_field'];const selector='#form-'+contentId+' '+nestedSelector+fldContainers[fldTyp].replace("__$fk__",fldKey);if(!fldClass || !bfSelect(selector)) return;return new fldClass(selector,getFldConf(contentId,fldKey,fldTyp));};function getFldConf(contentId,fieldKey,fldTyp){const fldData=bf_globals[contentId].fields[fieldKey];const fldConfPaths=Object.entries(customFldConfigPaths[fldTyp]);let fldConf={};const{ formId }=bf_globals[contentId];if(!("config" in customFldConfigPaths[fldTyp]) && "config" in fldData) fldConf=fldData.config;const varData={ contentId,fieldKey,formId };fldConfPaths.forEach(([ confPath,fldPath ])=>{let value="";if(fldPath.var) value=varData[fldPath.var];if(!value && fldPath.path){if(Array.isArray(fldPath.path)){fldPath.path.forEach((path)=>{if(!value) value=getDataFromNestedPath(fldData,path);});} else{value=getDataFromNestedPath(fldData,fldPath.path);}}if(!value && fldPath.val){value=fldPath.val;if(typeof value==='string'){Object.entries(varData).forEach(([key,val])=>{value=value.replace("__$"+key+"__",val);});}}fldConf=setDataToNestedPath(fldConf,confPath,value);});return fldConf;};function getDataFromNestedPath(data,key){const keys=key.split("->");const lastKey=keys.pop();let current={...data};for(const k of keys){if(!(k in current)) return null;current=current[k];}return current[lastKey] || null;}function setDataToNestedPath(data,key,value){const keys=key.split("->");const lastKey=keys.pop();let current={...data};keys.forEach((k)=>{if(!current[k]) current[k]={};current=current[k];});current[lastKey]=value;return current;}var bitform_init=function(){"use strict";function e(e=null){"undefined"!=typeof hidden_token_field&&hidden_token_field(e),"undefined"!=typeof initAllCustomFlds&&initAllCustomFlds(e),"undefined"!=typeof initAddOtherOpt&&initAddOtherOpt(e),"undefined"!=typeof initCheckDisableOnMax&&initCheckDisableOnMax(e),"undefined"!=typeof validate_focus&&validate_focus(e),"undefined"!=typeof submit_form&&submit_form(e),"undefined"!=typeof bit_form_abandonment&&bit_form_abandonment(e),"undefined"!=typeof setFieldValues&&setFieldValues(e),"undefined"!=typeof bit_multi_step_form&&bit_multi_step_form(e)}return document.addEventListener("DOMContentLoaded",(()=>{e()})),e}();let bfContentId="",bfVars="";