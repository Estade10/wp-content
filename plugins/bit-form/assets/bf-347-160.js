import{o as $t,e as Vt,h as Kt,u as Lt,a as zt,j as e,_ as i,q as l,bj as Rt,bO as A,y as S,bA as C,bE as j,l as y,aM as v,a2 as Et,s as Ht}from"./main-281.js";import{u as T}from"./bf-607-113.js";import{a as h,t as bt}from"./bf-558-170.js";import{F as r,A as w}from"./bf-784-142.js";import{C as F}from"./bf-845-71.js";import{C as Ut}from"./bf-231-105.js";import{S as jt}from"./bf-891-304.js";import{F as Gt,c as Ot}from"./bf-997-88.js";import{S as b}from"./bf-869-79.js";import{a as Wt}from"./bf-291-133.js";import{b as Jt}from"./bf-675-103.js";import"./bf-23-74.js";import"./bf-811-102.js";import"./bf-646-73.js";import"./bf-900-104.js";/* empty css          */import"./bf-192-171.js";import"./bf-226-108.js";import"./bf-977-119.js";import"./bf-99-141.js";import"./bf-751-65.js";import"./bf-406-106.js";import"./bf-112-111.js";import"./bf-724-110.js";import"./bf-521-107.js";import"./bf-890-67.js";const vt={tabs:{type:"tabs",defaultCollapsed:!1},accordion:{type:"accordion",defaultCollapsed:!1,radios:!0,spacedAccordionItems:!1}},k=[{name:"Pre-authorized debit payments",type:"acss_debit",currency:["usd"]},{name:"Afterpay / Clearpay",type:"afterpay_clearpay",currency:["usd"]},{name:"Alipay",type:"alipay",currency:["cny","usd"]},{name:"Bancontact",type:"bancontact",currency:["eur"]},{name:"Card payments",type:"card",currency:["usd","eur","cad","gbp","aud","nzd","cny","hkd","jpy","sgd","myr","dkk","chf","nok","sek","czk","czk","pln"]},{name:"Cash App Pay",type:"cashapp",currency:["usd"]},{name:"EPS",type:"eps",currency:["eur"]},{name:"giropay",type:"giropay",currency:["eur"]},{name:"iDEAL",type:"ideal",currency:["eur"]},{name:"Klarna",type:"klarna",currency:["usd"]},{name:"Przelewy24",type:"p24",currency:["eur","pln"]},{name:"SEPA Direct Debit",type:"sepa_debit",currency:["eur"]},{name:"Sofort",type:"sofort",currency:["eur"]},{name:"ACH Direct Debit",type:"us_bank_account",currency:["usd"]},{name:"WeChat Pay",type:"wechat_pay",currency:["cny","usd"]}],Zt=[{region:"Stripe detects the locale of the browser",code:"auto"},{region:"Bulgarian(Bulgaria)",code:"bg"},{region:"Arabic",code:"ar"},{region:"Czech(Czech Republic)",code:"cs"},{region:"Danish(Denmark)",code:"da"},{region:"German(Germany)",code:"de"},{region:"Greek(Greece)",code:"el"},{region:"English",code:"en"},{region:"English(United Kingdom)",code:"en-GB"},{region:"Spanish(Spain)",code:"es"},{region:"Spanish(Latin America)",code:"es-419"},{region:"Estonian(Estonia)",code:"et"},{region:"Finnish(Finland)",code:"fi"},{region:"Filipino(Philipines)",code:"fil"},{region:"French(France)",code:"fr"},{region:"French(Canada)",code:"fr-CA"},{region:"Hebrew(Isreal)",code:"he"},{region:"Croatian(Croatia)",code:"hr"},{region:"Hungarian(Hungary)",code:"hu"},{region:"Indonesian(Indonesia)",code:"id"},{region:"Italian(Italy)",code:"it"},{region:"Japanese(Japan)",code:"ja"},{region:"Korean(Korea)",code:"ko"},{region:"Lithuanian(Lithuania)",code:"lt"},{region:"Latvian(Latvia)",code:"lv"},{region:"Malay(Malaysia)",code:"ms"},{region:"Maltese(Malta)",code:"mt"},{region:"Norwegian Bokmål",code:"nb"},{region:"Dutch(Netherlands)",code:"nl"},{region:"Polish(Poland)",code:"pl"},{region:"Portuguese(Brazil)",code:"pt-BR"},{region:"Portuguese(Brazil)",code:"pt"},{region:"Romanian(Romania)",code:"ro"},{region:"Russian(Russia)",code:"ru"},{region:"Slovak(Slovakia)",code:"sk"},{region:"Slovenian(Slovenia)",code:"sl"},{region:"Swedish(Sweden)",code:"sv"},{region:"Thai(Thailand)",code:"th"},{region:"Turkish(Turkey)",code:"tr"},{region:"Vietnamese(Vietnam)",code:"vi"},{region:"Chinese Simplified(China)",code:"zh"},{region:"Chinese Traditional(Hong Kong)",code:"zh-HK"},{region:"Chinese Traditional(Taiwan)",code:"zh-TW"}],_=[{currency:"United States Dollar",code:"usd",minAmount:.5},{currency:"United Arab Emirates Dirham",code:"aed",minAmount:2},{currency:"Australian Dollar",code:"aud",minAmount:.5},{currency:"Bulgarian Lev",code:"bgn",minAmount:1},{currency:"Brazilian Real",code:"brl",minAmount:.5},{currency:"Canadian Dollar",code:"cad",minAmount:.5},{currency:"Swiss Franc",code:"chf",minAmount:.5},{currency:"Czech Koruna",code:"czk",minAmount:15},{currency:"Danish Krone",code:"dkk",minAmount:2.5},{currency:"Euro",code:"eur",minAmount:.5},{currency:"British Pound",code:"gbp",minAmount:.3},{currency:"Hong Kong Dollar",code:"hkd",minAmount:4},{currency:"Croatian Kuna",code:"hrk",minAmount:.5},{currency:"Hungarian Forint",code:"huf",minAmount:175},{currency:"Indonesian Rupiah",code:"inr",minAmount:.5},{currency:"JAPAN (Yen)",code:"jpy",minAmount:50},{currency:"Mexican Peso",code:"mxn",minAmount:10},{currency:"Malaysian Ringgit",code:"myr",minAmount:2},{currency:"Norwegian Krone",code:"nok",minAmount:3},{currency:"New Zealand Dollar",code:"nzd",minAmount:.5},{currency:"Poland (Zloty)",code:"pln",minAmount:2},{currency:"Romanian Leu",code:"ron",minAmount:2},{currency:"Swedish Krona",code:"sek",minAmount:3},{currency:"Singapore Dollar",code:"sgd",minAmount:.5},{currency:"Thailand (Baht)",code:"thb",minAmount:10}],P={stripe:{theme:"stripe"},night:{theme:"night",labels:"floating"},flat:{theme:"flat"},minimal:{theme:"flat",variables:{fontFamily:' "Gill Sans", sans-serif',fontLineHeight:"1.5",borderRadius:"10px",colorBackground:"#F6F8FA",colorPrimaryText:"#262626"},rules:{".Block":{backgroundColor:"var(--colorBackground)",boxShadow:"none",padding:"12px"},".Input":{padding:"12px"},".Input:disabled, .Input--invalid:disabled":{color:"lightgray"},".Tab":{padding:"10px 12px 8px 12px",border:"none"},".Tab:hover":{border:"none",boxShadow:"0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)"},".Tab--selected, .Tab--selected:focus, .Tab--selected:hover":{border:"none",backgroundColor:"#fff",boxShadow:"0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)"},".Label":{fontWeight:"500"}}},bubblegum:{theme:"flat",variables:{fontWeightNormal:"500",borderRadius:"2px",colorBackground:"white",colorPrimary:"#DF1B41",colorPrimaryText:"white",spacingGridRow:"15px"},rules:{".Label":{marginBottom:"6px"},".Tab, .Input, .Block":{boxShadow:"0px 3px 10px rgba(18, 42, 66, 0.08)",padding:"12px"}}},"ninety five":{theme:"none",variables:{fontFamily:"Verdana",fontLineHeight:"1.5",borderRadius:"0",colorBackground:"#dfdfdf"},rules:{".Input":{backgroundColor:"#ffffff",boxShadow:"inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080"},".Input--invalid":{color:"#DF1B41"},".Tab, .Block":{boxShadow:"inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf"},".Tab:hover":{backgroundColor:"#eee"},".Tab--selected, .Tab--selected:focus, .Tab--selected:hover":{backgroundColor:"#ccc"}}},dark:{theme:"night",variables:{fontFamily:"Sohne, system-ui, sans-serif",fontWeightNormal:"500",borderRadius:"8px",colorBackground:"#0A2540",colorPrimary:"#EFC078",colorPrimaryText:"#1A1B25",colorText:"white",colorTextSecondary:"white",colorTextPlaceholder:"#727F96",colorIconTab:"white",colorLogo:"dark"},rules:{".Input, .Block":{backgroundColor:"transparent",border:"1.5px solid var(--colorPrimary)"}}}};function Sn(){var V,K,L,z,R,E,H,U,G,O,W,J,Z,q,Y,Q,X,ee,te,ne,ae,ie,se,le,oe,re,de,ce,ue,pe,me,ge,fe,he,xe,ye,be,je,ve,Fe,Ae,Se,Ce,Ne,ke,Te,we,_e,Pe,Be,De,Ie,Me,$e,Ve,Ke,Le,ze,Re,Ee,He,Ue,Ge,Oe,We,Je,Ze,qe,Ye,Qe,Xe,et,tt,nt,at,it,st,lt,ot,rt,dt,ct,ut,pt,mt,gt,ft,ht,xt,yt;const{fieldKey:o}=$t(),[g,x]=Vt(Et),n=Kt(g[o]),D=Object.entries(g),Ft=Lt(Ht),At=(n==null?void 0:n.payType)==="subscription",N=((V=n.config)==null?void 0:V.amountType)==="dynamic",{css:a}=zt();console.log({fieldData:n});const d=(t,s)=>{var u;if(console.log({value:s}),console.log(t),s==="split"&&A(n,"config->address->defaultValues->name"),s==="full"&&(A(n,"config->address->defaultValues->firstName"),A(n,"config->address->defaultValues->lastName")),s?S(n,t,s):A(n,t),t==="config->amount"){const m=((u=_.find(f=>f.code===n.config.options.currency))==null?void 0:u.minAmount)||0;m&&Number(s)<m?C({fieldKey:o,errorKey:"stripeAmountMin",errorMsg:i(`Stripe Minimum Amount is ${m}`),errorUrl:`field-settings/${o}`}):(j(o,"stripeAmountMin"),j(o,"stripeAmountMissing"))}else t==="config->amountFld"&&(s?j(o,"stripeAmountFldMissing"):C({fieldKey:o,errorKey:"stripeAmountFldMissing",errorMsg:i("Stripe Dynamic Amount Field is not Selected"),errorUrl:`field-settings/${o}`}));const c=y(g,m=>{m[o]=n});x(c),v({event:`${B[t]} to ${s}: ${n.lbl||o}`,type:`${t}_changed`,state:{fields:c,fldKey:o}})};function I(t){if(!t||t.length===0)return _;const c=k.filter(f=>t.includes(f.type)).map(f=>f.currency),u=c==null?void 0:c.reduce((f,It)=>f.filter(Mt=>It.includes(Mt)));return _.filter(f=>u.includes(f.code))||[]}const St=t=>{var c;if(t){const u=t.split(",");S(n,"config->options->payment_method_types",u);const m=I(u);m.length?(j(o,"stripeCurrencyMissing"),S(n,"config->options->currency",((c=m[0])==null?void 0:c.code)||"")):(C({fieldKey:o,errorKey:"stripeCurrencyMissing",errorMsg:i("Select a valid currency for the selected payment method types"),errorUrl:`field-settings/${o}`}),S(n,"config->options->currency",""))}else A(n,"config->options->payment_method_types"),j(o,"stripeCurrencyMissing"),S(n,"config->options->currency","usd");const s=y(g,u=>{u[o]=n});x(s)},Ct=t=>{t?n.config.layout=vt[t]:delete n.config.layout;const s=y(g,c=>{c[o]=n});x(s),v({event:`${B.layout} to ${t}: ${n.lbl||o}`,type:`${name}_changed`,state:{fields:s,fldKey:o}})},Nt=t=>{t?(n.config.theme.name=t,n.config.theme.style=P[t]):delete n.config.theme;const s=y(g,c=>{c[o]=n});x(s),v({event:`${B.layout} to ${t}: ${n.lbl||o}`,type:`${name}_changed`,state:{fields:s,fldKey:o}})},M=t=>{t.target.value?n.config.amountType=t.target.value:delete n.config.amountType,delete n.config.amount,delete n.config.amountFld,n.config.amountType==="dynamic"?(j(o,"stripeAmountMissing"),C({fieldKey:o,errorKey:"stripeAmountFldMissing",errorMsg:i("Stripe Dyanmic Amount Field is not Selected"),errorUrl:`field-settings/${o}`})):(j(o,"stripeAmountFldMissing"),C({fieldKey:o,errorKey:"stripeAmountMissing",errorMsg:i("Stripe Fixed Amount is not valid"),errorUrl:`field-settings/${o}`}));const s=y(g,c=>{c[o]=n});x(s),v({event:`Ammount Type Changed to "${t.target.value}": ${n.lbl||o}`,type:"set_amount",state:{fields:s,fldKey:o}})},kt=()=>D.filter(s=>s[1].typ.match(/^(radio|number|currency)/)).map(s=>e.jsx("option",{value:s[0],children:s[1].adminLbl||s[1].lbl},s[0])),Tt=()=>Zt.map(t=>({label:e.jsxs("div",{className:"flx flx-between",children:[e.jsx("span",{className:"btcd-ttl-ellipsis",children:t.region}),e.jsx("code",{className:"btcd-code",children:t.code})]}),title:`${t.region} - ${t.code}`,value:t.code})),wt=()=>Ft.filter(s=>s.type==="Stripe").map(s=>e.jsx("option",{value:s.id,children:s.name},s.id)),_t=()=>k==null?void 0:k.map(t=>({label:t.name,value:t.type}));function Pt(t){n.txt=t.target.value;const s=y(g,c=>{c[o]=n});x(s),v({event:`Stripe button text updated : ${n.txt}`,type:"change_stripe_btn_txt",state:{fields:s,fldKey:o}})}function Bt(t){n.config.payBtnTxt=t.target.value;const s=y(g,c=>{c[o]=n});x(s),v({event:`Stripe pay button text updated : ${n.config.payBtnTxt}`,type:"change_stripe_pay_btn_txt",state:{fields:s,fldKey:o}})}const p=t=>{let s;return t==="email"?s=/^(text|email)$/:t==="text"?s=/^(text|textarea|username)$/:t==="number"?s=/^(number)$/:t==="phone"?s=/^(number|phone-number)$/:t==="country"&&(s=/^(text|country)$/),D.filter(u=>u[1].typ.match(s)).map(u=>e.jsx("option",{value:u[0],children:u[1].adminLbl||u[1].lbl},u[0]))},$=t=>s=>{const{checked:c}=s.target;c?(n.config[t]||(n.config[t]={}),n.config[t].active=c,t==="address"&&(n.config.address.mode="billing")):delete n.config[t];const u=y(g,m=>{m[o]=n});x(u)},Dt=I(n.config.options.payment_method_types);return e.jsxs("div",{children:[e.jsx(Gt,{title:"Field Settings",subtitle:n.typ,fieldKey:o}),e.jsx(b,{id:"slct-cnfg-stng",title:"Select Config",className:a(r.fieldSection),children:e.jsxs("select",{"data-testid":"slct-cnfg-slct",name:"payIntegID",id:"payIntegID",onChange:t=>d(t.target.name,t.target.value),className:a(r.input),value:n.payIntegID,children:[e.jsx("option",{value:"",children:"Select Config"}),wt()]})}),e.jsx(h,{}),n.payIntegID&&e.jsxs(e.Fragment,{children:[e.jsx(b,{id:"btn-txt-stng",title:i("Button Text"),className:a(r.fieldSection),open:!0,children:e.jsx("div",{className:a(r.placeholder),children:e.jsx(w,{id:"btn-txt","aria-label":"Stripe button text",placeholder:"Type text here...",value:n.txt,changeAction:t=>Pt(t)})})}),e.jsx(h,{}),e.jsx(b,{id:"btn-txt-stng",title:i("Pay Button Text"),className:a(r.fieldSection),open:!0,children:e.jsx("div",{className:a(r.placeholder),children:e.jsx(w,{id:"pay-btn-txt","aria-label":"Stripe pay button text",placeholder:"Type text here...",value:n.config.payBtnTxt,changeAction:t=>Bt(t)})})}),e.jsx(h,{}),e.jsx(b,{id:"slct-cnfg-stng",title:"Layout",className:a(r.fieldSection),children:e.jsx("select",{"data-testid":"slct-cnfg-layout",name:"layout",id:"layout",onChange:t=>Ct(t.target.value),className:a(r.input),value:n.config.layout.type,children:Object.keys(vt).map(t=>e.jsx("option",{value:t,children:t},t))})}),e.jsx(h,{}),e.jsx(b,{id:"slct-cnfg-stng",title:"Theme",className:a(r.fieldSection,r.hover_tip),tip:bt.stripeTheme,tipProps:{width:250,icnSize:17},children:e.jsx("select",{"data-testid":"slct-cnfg-theme",name:"theme",id:"theme",onChange:t=>Nt(t.target.value),className:a(r.input),value:(K=n.config)==null?void 0:K.theme.name,children:Object.keys(P).map(t=>e.jsx("option",{value:t,children:t},`${P[t].theme}-${t}`))})}),e.jsx(h,{}),!At&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:a(l.ml2,l.mr2,l.p1),children:[e.jsx("b",{children:i("Language")}),e.jsx(T,{className:"w-10 btcd-paper-drpdwn mt-1",options:Tt(),onChange:t=>d("config->options->locale",t),defaultValue:(L=n.config.options)==null?void 0:L.locale,largeData:!0,singleSelect:!0})]}),e.jsxs("div",{className:a(l.ml2,l.mr2,l.p1),children:[e.jsx("b",{children:i("Payment Method Type")}),e.jsx(T,{className:"w-10 btcd-paper-drpdwn mt-1 btcd-ttc",options:_t(),onChange:t=>St(t),defaultValue:((z=n.config.options)==null?void 0:z.payment_method_types)||[]})]}),e.jsx(h,{}),e.jsx("div",{className:a(l.ml2,l.mr2,l.p1),children:e.jsxs("label",{htmlFor:"description",children:[e.jsxs("b",{children:[i("Description")," "]}),e.jsx(w,{id:"description","aria-label":"Stripe description text",placeholder:"Type text here...",value:(R=n.config.options)==null?void 0:R.description,changeAction:t=>d("config->options->description",t.target.value)})]})}),e.jsx("div",{className:a(l.ml2,l.mr2,l.p1),children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsxs("b",{children:[i("Currency")," "]}),e.jsx("select",{"data-testid":"crncy-fld-slct",onChange:t=>d("config->options->currency",t.target.value),name:"currency",value:(E=n.config.options)==null?void 0:E.currency,className:a(r.input),children:Dt.map(t=>e.jsx("option",{value:t.code,children:t.currency},t.code))})]})}),e.jsxs("div",{className:a(l.ml2,l.mr2,l.p1),children:[e.jsxs("b",{className:a(qt.amountType),children:[i("Amount Type"),e.jsx(Ut,{children:e.jsx("div",{className:"txt-body",children:e.jsx(Rt,{html:bt.amountType})})})]}),e.jsx(F,{id:"amnt-typ-fxd",onChange:M,radio:!0,checked:!N,title:i("Fixed")}),e.jsx(F,{id:"amnt-typ-dynmc",onChange:M,radio:!0,checked:N,title:i("Dynamic"),value:"dynamic"})]}),!N&&e.jsx("div",{className:a(l.ml2,l.mr2,l.p1),children:e.jsx(jt,{id:"amnt",className:a(l.mt0),cls:a(r.input),inpType:"number",title:i("Amount"),value:((H=n.config)==null?void 0:H.amount)||"",action:t=>d("config->amount",t.target.value)})}),N&&e.jsxs("div",{className:a(l.ml2,l.mr2,l.p1),children:[e.jsx("b",{children:i("Select Amount Field")}),e.jsxs("select",{"data-testid":"slct-amnt-slct",onChange:t=>d("config->amountFld",t.target.value),name:"amountFld",className:a(r.input),value:n.config.amountFld,children:[e.jsx("option",{value:"",children:i("Select Field")}),kt()]})]})]})]}),e.jsx(h,{}),e.jsxs(b,{id:"adtnl-stng",title:"Additional Settings",className:a(r.fieldSection),children:[e.jsx(b,{id:"link-auth-stng",title:"Email",className:a(r.fieldSection),switching:!0,toggleAction:$("linkAuthentication"),toggleChecked:((G=(U=n.config)==null?void 0:U.linkAuthentication)==null?void 0:G.active)||!1,open:((W=(O=n.config)==null?void 0:O.linkAuthentication)==null?void 0:W.active)||!1,disable:!((Z=(J=n.config)==null?void 0:J.linkAuthentication)!=null&&Z.active)||!1,children:e.jsx("div",{children:e.jsxs("select",{"data-testid":"prfil-nam-slct",onChange:t=>d("config->linkAuthentication->emailFld",t.target.value),name:"prefillNameFld",className:a(r.input),value:((Y=(q=n.config)==null?void 0:q.linkAuthentication)==null?void 0:Y.emailFld)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("email")]})})}),e.jsx(h,{}),e.jsx(b,{id:"address-stng",title:"Address",className:a(r.fieldSection),switching:!0,toggleAction:$("address"),toggleChecked:((X=(Q=n.config)==null?void 0:Q.address)==null?void 0:X.active)||!1,open:((te=(ee=n.config)==null?void 0:ee.address)==null?void 0:te.active)||!1,disable:!((ae=(ne=n.config)==null?void 0:ne.address)!=null&&ae.active)||!1,children:e.jsxs("div",{children:[e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Mode :")}),e.jsx(F,{id:"addr-mode-bill",onChange:t=>d("config->address->mode",t.target.value),radio:!0,checked:((se=(ie=n.config)==null?void 0:ie.address)==null?void 0:se.mode)==="billing",title:i("Billing"),value:"billing"}),e.jsx(F,{id:"addr-mode-shp",onChange:t=>d("config->address->mode",t.target.value),radio:!0,checked:((oe=(le=n.config)==null?void 0:le.address)==null?void 0:oe.mode)==="shipping",title:i("Shipping"),value:"shipping"})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Autocomplete :")}),e.jsxs("select",{"data-testid":"addr-autocmplt-slct",onChange:t=>d("config->address->autocomplete->mode",t.target.value),name:"autocomplete",className:a(r.input),value:((ce=(de=(re=n.config)==null?void 0:re.address)==null?void 0:de.autocomplete)==null?void 0:ce.mode)||"",children:[e.jsx("option",{value:"automatic",children:i("Automatic")}),e.jsx("option",{value:"google_maps_api",children:i("Google Maps API")}),e.jsx("option",{value:"disabled",children:i("Disabled")})]})]}),((me=(pe=(ue=n.config)==null?void 0:ue.address)==null?void 0:pe.autocomplete)==null?void 0:me.mode)==="google_maps_api"&&e.jsx("div",{className:a(l.mt2,{px:1}),children:e.jsx(jt,{id:"addr-gmap-api-key",className:a(l.mt0),cls:a(r.input),inpType:"text",title:i("Google Maps API Key"),value:((he=(fe=(ge=n.config)==null?void 0:ge.address)==null?void 0:fe.autocomplete)==null?void 0:he.google_maps_api_key)||"",action:t=>d("config->address->autocomplete->apiKey",t.target.value)})}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Allowed Countries :")}),e.jsx(T,{className:"w-10 btcd-paper-drpdwn mt-1 btcd-ttc",options:Wt.map(t=>({label:t.lbl,value:t.i})),onChange:t=>d("config->address->allowedCountries",t.split(",")),defaultValue:(((ye=(xe=n.config)==null?void 0:xe.address)==null?void 0:ye.allowedCountries)||[]).join(","),largeData:!0})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Name Mode:")}),e.jsx(F,{id:"name-full",onChange:t=>d("config->address->display->name",t.target.value),radio:!0,checked:((ve=(je=(be=n.config)==null?void 0:be.address)==null?void 0:je.display)==null?void 0:ve.name)==="full"||!1,title:i("Full"),value:"full"}),e.jsx(F,{id:"name-split",onChange:t=>d("config->address->display->name",t.target.value),radio:!0,checked:((Se=(Ae=(Fe=n.config)==null?void 0:Fe.address)==null?void 0:Ae.display)==null?void 0:Se.name)==="split"||!1,title:i("Split"),value:"split"})]}),((ke=(Ne=(Ce=n.config)==null?void 0:Ce.address)==null?void 0:Ne.display)==null?void 0:ke.name)==="full"&&e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Full Name:")}),e.jsxs("select",{"data-testid":"prfil-nam-slct",onChange:t=>d("config->address->defaultValues->name",t.target.value),name:"prefillNameFld",className:a(r.input),value:((_e=(we=(Te=n.config)==null?void 0:Te.address)==null?void 0:we.defaultValues)==null?void 0:_e.name)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]}),((De=(Be=(Pe=n.config)==null?void 0:Pe.address)==null?void 0:Be.display)==null?void 0:De.name)==="split"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("First Name:")}),e.jsxs("select",{"data-testid":"prfil-nam-slct",onChange:t=>d("config->address->defaultValues->firstName",t.target.value),name:"prefillFirstNameFld",className:a(r.input),value:(($e=(Me=(Ie=n.config)==null?void 0:Ie.address)==null?void 0:Me.defaultValues)==null?void 0:$e.firstName)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Last Name:")}),e.jsxs("select",{"data-testid":"prfil-nam-slct",onChange:t=>d("config->address->defaultValues->lastName",t.target.value),name:"prefilllastNameFld",className:a(r.input),value:((Le=(Ke=(Ve=n.config)==null?void 0:Ve.address)==null?void 0:Ke.defaultValues)==null?void 0:Le.lastName)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]})]}),e.jsx("div",{className:a(l.mt2,{px:1}),children:e.jsxs("div",{className:"flx flx-between",children:[e.jsx("b",{children:i("Phone Number:")}),e.jsx(Jt,{id:"phoneNumber",className:a(l.mr2),name:"phoneNumber",action:t=>d("config->address->fields->phone",t.target.checked?"always":"auto"),isChecked:((Ee=(Re=(ze=n.config)==null?void 0:ze.address)==null?void 0:Re.fields)==null?void 0:Ee.phone)==="always"})]})}),((Ge=(Ue=(He=n.config)==null?void 0:He.address)==null?void 0:Ue.fields)==null?void 0:Ge.phone)==="always"&&e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Phone:")}),e.jsxs("select",{"data-testid":"prfil-nam-slct",onChange:t=>d("config->address->defaultValues->phone",t.target.value),name:"prefillphoneFld",className:a(r.input),value:((Je=(We=(Oe=n.config)==null?void 0:Oe.address)==null?void 0:We.defaultValues)==null?void 0:Je.phone)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("phone")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Line 1:")}),e.jsxs("select",{"data-testid":"prfil-line1-slct",onChange:t=>d("config->address->defaultValues->address->line1",t.target.value),name:"prefillline1Fld",className:a(r.input),value:((Qe=(Ye=(qe=(Ze=n.config)==null?void 0:Ze.address)==null?void 0:qe.defaultValues)==null?void 0:Ye.address)==null?void 0:Qe.line1)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Line 2:")}),e.jsxs("select",{"data-testid":"prfil-line2-slct",onChange:t=>d("config->address->defaultValues->address->line2",t.target.value),name:"prefillline2Fld",className:a(r.input),value:((nt=(tt=(et=(Xe=n.config)==null?void 0:Xe.address)==null?void 0:et.defaultValues)==null?void 0:tt.address)==null?void 0:nt.line2)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("City:")}),e.jsxs("select",{"data-testid":"prfil-city-slct",onChange:t=>d("config->address->defaultValues->address->city",t.target.value),name:"prefillcityFld",className:a(r.input),value:((lt=(st=(it=(at=n.config)==null?void 0:at.address)==null?void 0:it.defaultValues)==null?void 0:st.address)==null?void 0:lt.city)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("State:")}),e.jsxs("select",{"data-testid":"prfil-state-slct",onChange:t=>d("config->address->defaultValues->address->state",t.target.value),name:"prefillstateFld",className:a(r.input),value:((ct=(dt=(rt=(ot=n.config)==null?void 0:ot.address)==null?void 0:rt.defaultValues)==null?void 0:dt.address)==null?void 0:ct.state)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("text")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Postal Code:")}),e.jsxs("select",{"data-testid":"prfil-postal_code-slct",onChange:t=>d("config->address->defaultValues->address->postal_code",t.target.value),name:"prefillpostal_codeFld",className:a(r.input),value:((gt=(mt=(pt=(ut=n.config)==null?void 0:ut.address)==null?void 0:pt.defaultValues)==null?void 0:mt.address)==null?void 0:gt.postal_code)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("number")]})]}),e.jsxs("div",{className:a(l.mt2,{px:1}),children:[e.jsx("b",{children:i("Country:")}),e.jsxs("select",{"data-testid":"prfil-country-slct",onChange:t=>d("config->address->defaultValues->address->country",t.target.value),name:"prefillcountryFld",className:a(r.input),value:((yt=(xt=(ht=(ft=n.config)==null?void 0:ft.address)==null?void 0:ht.defaultValues)==null?void 0:xt.address)==null?void 0:yt.country)||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),p("country")]})]})]})})]}),e.jsx(h,{}),e.jsx(Ot,{})]})}const B={payIntegID:"Payment Configuration Changed",planId:"Plan Id Changed",locale:"Language Selected",disableFunding:"Disabled Card",amount:"Amount",amountFld:"Amount Field Selected",shipping:"Shipping Cost",shippingFld:"Shipping Amount Field Selected",tax:"Tax changed",taxFld:"Tax Amount Field Selected",currency:"Currency Selected",description:"Other Description",descFld:"Description Field Selected",layout:"Layout Changed"},qt={amountType:{dy:"flex !important",fw:600,"& .hover-tip":{oy:0}}};export{Sn as default};
