!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}function r(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];t.classList.add("show");var a=t.getAttribute("data-confirmation-type"),o=i(t.getAttribute("data-success")),c=i(t.getAttribute("data-error")),s=i(t.getAttribute("data-redirect-url"));n&&"redirect"===a&&(s&&s.length>0?window.location.replace(s):window.location.replace("/"));var l="success",u="error";e&&0!==e.length||t.classList.remove("show",l,u),n&&(t.classList.remove(u),t.classList.add(l)),n||(t.classList.remove(l),t.classList.add(u)),t.innerHTML=r?n?o:c:e}function i(e){return e&&"string"!==!t(e)&&0!==e.length?decodeURIComponent(e.replace(/\+/g," ")):e}window.addEventListener("DOMContentLoaded",(function(){var r,a=n(document.querySelectorAll(".eb-form-submit-button"));try{var i=function(){var a=r.value;a.onclick=function(r){r.preventDefault();var i=a.getAttribute("data-id"),c=(a.getAttribute("data-form-id"),"eb-field-wrapper"),s="eb-validation-error",l="eb-form-validation",u="g-recaptcha-response",d=document.querySelector(".".concat(i));if(d){var f,m=d.getElementsByClassName("eb-form")[0],v=d.getElementsByClassName("form-nonce"),y=new FormData(m),b=new FormData;b.append("action","eb_form_submit"),b.append("form_id",i),b.append("nonce",null===(f=v[0])||void 0===f?void 0:f.value);var p={};e(m.elements).forEach((function(t){t.name&&(p[t.name]="")})),e(y.entries()).forEach((function(n){p[n[0]].length>0&&n[1].length>0&&Object.keys(p).includes(n[0])?"string"==typeof p[n[0]]?p[n[0]]=[p[n[0]],n[1]]:"object"===t(p[n[0]])&&(p[n[0]]=[].concat(e(p[n[0]]),[n[1]])):p[n[0]]=n[1]})),delete p["form-nonce"];var g=!0;if(Object.keys(p).includes(u)&&0===p[u].length){var h=d.querySelector('[name="'.concat(u,'"]'));if(h){var S=h.closest(".".concat(c));S&&(S.classList.add(s),$errorHtml='<div class="'.concat(l,"\">reCAPTCHA isn't verified!</div>"))}g=!1}if(g)return a.classList.add("loading"),b.append("form_data",JSON.stringify(p)),fetch(EssentialBlocksLocalize.ajax_url,{method:"POST",body:b}).then((function(t){return t.text()})).then((function(e){var r=JSON.parse(e);a.classList.remove("loading"),function(t,e,r){var a,o=n(t.querySelectorAll(".".concat(e)));try{for(o.s();!(a=o.n()).done;)a.value.classList.remove(r)}catch(t){o.e(t)}finally{o.f()}}(d,c,s);var i=d.getElementsByClassName("eb_form_submit_response")[0];r.success&&("string"==typeof r.data&&o(i,r.data,!0),m.reset(),a.classList.add("success")),!r.success&&r.data&&(a.classList.remove("success"),"string"==typeof r.data?o(i,r.data,!1,!1):"object"===t(r.data)&&(r.data.message&&"string"==typeof r.data.message&&o(i,r.data.message,!1,!1),r.data.validation&&"object"===t(r.data.validation)&&Object.keys(r.data.validation).map((function(t){var e;t===u&&(e=d,grecaptcha.reset(e));var n=d.querySelector('[name="'.concat(t,'"]')).closest(".".concat(c));n.classList.add(s);var a=n.querySelector(".".concat(l));a&&(a.innerHTML=r.data.validation[t])}))))})).catch((function(t){return console.log(t)}))}}};for(a.s();!(r=a.n()).done;)i()}catch(t){a.e(t)}finally{a.f()}var c,s=n(document.getElementsByClassName("eb-form-wrapper"));try{for(s.s();!(c=s.n()).done;){var l,u=n(c.value.getElementsByClassName("eb-field-input"));try{var d=function(){var t,e=l.value;e.value&&(null===(t=e.nextSibling)||void 0===t||t.classList.add("active")),e.addEventListener("focus",(function(t){var n,r;null!==(n=e.nextSibling)&&void 0!==n&&n.classList.contains("active")||null===(r=e.nextSibling)||void 0===r||r.classList.add("active")})),e.addEventListener("blur",(function(){var t;e.value||null===(t=e.nextSibling)||void 0===t||t.classList.remove("active")}))};for(u.s();!(l=u.n()).done;)d()}catch(t){u.e(t)}finally{u.f()}}}catch(t){s.e(t)}finally{s.f()}}))}();