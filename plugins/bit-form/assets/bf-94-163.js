import{j as e,o as J,e as z,h as Q,u as q,a as X,r as E,bE as w,bA as L,_ as i,q as s,d2 as ee,w as ne,l as h,aM as g,a2 as ae,ai as te,s as ce}from"./main-281.js";import{F as d}from"./bf-784-142.js";import{C as _}from"./bf-845-71.js";import{S as G}from"./bf-891-304.js";import{b as T}from"./bf-675-103.js";import{F as re,b as le,c as ie}from"./bf-997-88.js";import{a as C}from"./bf-558-170.js";import{S as f}from"./bf-869-79.js";import"./bf-900-104.js";import"./bf-646-73.js";import"./bf-231-105.js";/* empty css          */import"./bf-192-171.js";import"./bf-226-108.js";import"./bf-977-119.js";import"./bf-99-141.js";import"./bf-751-65.js";import"./bf-23-74.js";import"./bf-811-102.js";import"./bf-406-106.js";import"./bf-112-111.js";import"./bf-724-110.js";import"./bf-521-107.js";import"./bf-890-67.js";const se=[{currency:"United Arab Emirates Dirham",code:"AED"},{currency:"Albanian lek",code:"ALL"},{currency:"Armenian dram",code:"AMD"},{currency:"Argentine peso",code:"ARS"},{currency:"Australian dollar",code:"AUD"},{currency:"Aruban florin",code:"AWG"},{currency:"Barbadian dollar",code:"BBD"},{currency:"Bangladeshi taka",code:"BDT"},{currency:"Bermudian dollar",code:"BMD"},{currency:"Brunei dollar",code:"BND"},{currency:"Bolivian boliviano",code:"BOB"},{currency:"Bahamian dollar",code:"BSD"},{currency:"Botswana pula",code:"BWP"},{currency:"Belize dollar",code:"BZD"},{currency:"Canadian dollar",code:"CAD"},{currency:"Swiss franc",code:"CHF"},{currency:"Chinese yuan renminbi",code:"CNY"},{currency:"Colombian peso",code:"COP"},{currency:"Costa Rican colon",code:"CRC"},{currency:"Cuban peso",code:"CUP"},{currency:"Czech koruna",code:"CZK"},{currency:"Danish krone",code:"DKK"},{currency:"Dominican peso",code:"DOP"},{currency:"Algerian dinar",code:"DZD"},{currency:"Egyptian pound",code:"EGP"},{currency:"Ethiopian birr",code:"ETB"},{currency:"European euro",code:"EUR"},{currency:"Fijian dollar",code:"FJD"},{currency:"Pound sterling",code:"GBP"},{currency:"Gibraltar pound",code:"GIP"},{currency:"Ghanian Cedi",code:"GHS"},{currency:"Gambian dalasi",code:"GMD"},{currency:"Guatemalan quetzal",code:"GTQ"},{currency:"Guyanese dollar",code:"GYD"},{currency:"Hong Kong dollar",code:"HKD"},{currency:"Honduran lempira",code:"HNL"},{currency:"Croatian kuna",code:"HRK"},{currency:"Haitian gourde",code:"HTG"},{currency:"Hungarian forint",code:"HUF"},{currency:"Indonesian rupiah",code:"IDR"},{currency:"Israeli new shekel",code:"ILS"},{currency:"Indian rupee",code:"INR"},{currency:"Jamaican dollar",code:"JMD"},{currency:"Kenyan shilling",code:"KES"},{currency:"Kyrgyzstani som",code:"KGS"},{currency:"Cambodian riel",code:"KHR"},{currency:"Cayman Islands dollar",code:"KYD"},{currency:"Kazakhstani tenge",code:"KZT"},{currency:"Lao kip",code:"LAK"},{currency:"Lebanese pound",code:"LBP"},{currency:"Sri Lankan rupee",code:"LKR"},{currency:"Liberian dollar",code:"LRD"},{currency:"Lesotho loti",code:"LSL"},{currency:"Moroccan dirham",code:"MAD"},{currency:"Moldovan leu",code:"MDL"},{currency:"Macedonian denar",code:"MKD"},{currency:"Myanmar kyat",code:"MMK"},{currency:"Mongolian tugrik",code:"MNT"},{currency:"Macanese pataca",code:"MOP"},{currency:"Mauritian rupee",code:"MUR"},{currency:"Maldivian rufiyaa",code:"MVR"},{currency:"Malawian kwacha",code:"MWK"},{currency:"Mexican peso",code:"MXN"},{currency:"Malaysian ringgit",code:"MYR"},{currency:"Namibian dollar",code:"NAD"},{currency:"Nigerian naira",code:"NGN"},{currency:"Nicaraguan cordoba",code:"NIO"},{currency:"Norwegian krone",code:"NOK"},{currency:"Nepalese rupee",code:"NPR"},{currency:"New Zealand dollar",code:"NZD"},{currency:"Peruvian sol",code:"PEN"},{currency:"Papua New Guinean kina",code:"PGK"},{currency:"Philippine peso",code:"PHP"},{currency:"Pakistani rupee",code:"PKR"},{currency:"Qatari riyal",code:"QAR"},{currency:"Russian ruble",code:"RUB"},{currency:"Saudi Arabian riyal",code:"SAR"},{currency:"Seychellois rupee",code:"SCR"},{currency:"Swedish krona",code:"SEK"},{currency:"Singapore dollar",code:"SGD"},{currency:"Sierra Leonean leone",code:"SLL"},{currency:"Somali shilling",code:"SOS"},{currency:"South Sudanese pound",code:"SSP"},{currency:"Salvadoran colón",code:"SVC"},{currency:"Swazi lilangeni",code:"SZL"},{currency:"Thai baht",code:"THB"},{currency:"Trinidad and Tobago dollar",code:"TTD"},{currency:"Tanzanian shilling",code:"TZS"},{currency:"United States dollar",code:"USD"},{currency:"Uruguayan peso",code:"UYU"},{currency:"Uzbekistani so'm",code:"UZS"},{currency:"Yemeni rial",code:"YER"},{currency:"South African rand",code:"ZAR"}];function oe({title:c,value:m,action:y,name:b,options:v,className:a,cls:F}){return e.jsxs("div",{className:`mt-3 setting-inp ${a}`,children:[e.jsx("span",{children:c}),e.jsx("select",{className:F||"btcd-paper-inp mt-1",value:m,onChange:y,name:b,children:v.map(j=>e.jsx("option",{value:j.value,children:j.name},`btcd-k-${j.name}`))})]})}function Re(){var K,$,P;const{fieldKey:c}=J(),[m,y]=z(ae),[b,v]=z(te),a=Q(m[c]),F=Object.entries(m),j=q(ce),{css:r}=X(),[A,k]=E.useState([{}]),U=(a==null?void 0:a.payType)==="subscription",x=a.options.amountType==="dynamic";console.log({fieldData:a}),E.useEffect(()=>{var n,t,l;w(c,"razorpayAmountFldMissing"),w(c,"razorpayAmountMissing"),x&&!((n=a.options)!=null&&n.amountFld)?L({fieldKey:c,errorKey:"razorpayAmountFldMissing",errorMsg:i("Razorpay Dyanmic Amount Field is not Selected"),errorUrl:`field-settings/${c}`}):!x&&(!((t=a.options)!=null&&t.amount)||parseInt((l=a.options)==null?void 0:l.amount,10)<=0)&&L({fieldKey:c,errorKey:"razorpayAmountMissing",errorMsg:i("Razorpay Fixed Amount is not valid"),errorUrl:`field-settings/${c}`})},[(K=a.options)==null?void 0:K.amountType,($=a.options)==null?void 0:$.amount,(P=a.options)==null?void 0:P.amountFld]);const H=[{name:i("Left"),value:"left"},{name:i("Center"),value:"center"},{name:i("Right"),value:"right"}],O=n=>{a.payIntegID=n.target.value;const t=h(m,l=>{l[c]=a});y(t),g({event:`Cofiguration changed to "${n.target.value}": ${a.lbl||c}`,type:"set_configuration",state:{fields:t,fldKey:c}})},p=(n,t,l)=>{l?(a.options[l]||(a.options[l]={}),t?a.options[l][n]=t:delete a.options[l][n]):t?a.options[n]=t:delete a.options[n],l==="invoice"&&n==="generate"&&(a.options.invoice.itemName="Due Amount");const o=h(m,u=>{u[c]=a});y(o),g({event:`${de[n]} to ${t}: ${a.lbl||c}`,type:`${n}_changed`,state:{fields:o,fldKey:c}})},M=n=>{n.target.value?a.options.amountType=n.target.value:delete a.options.amountType;const t=h(m,l=>{l[c]=a});y(t),g({event:`Amount Type changed to "${n.target.value}": ${a.lbl||c}`,type:"set_amount_type",state:{fields:t,fldKey:c}})},B=({target:{name:n,value:t}})=>{a[n]=t;const l=h(m,u=>{u[c]=a});y(l);let o=b;n==="align"&&(o=h(b,u=>{u.fields[c].classes[`.${c}-razorpay-wrp`]["justify-content"]=t}),v(o)),g({event:`Button Style changed to "${t}": ${a.lbl||c}`,type:"set_button_style",state:{fields:l,styles:o,fldKey:c}})},Z=n=>{a.fulW=n.target.checked;const t=h(b,o=>{n.target.checked?(o.fields[c].classes[`.${c}-razorpay-btn`].width="100%",delete o.fields[c].classes[`.${c}-razorpay-btn`]["min-width"]):(o.fields[c].classes[`.${c}-razorpay-btn`]["min-width"]="160px",delete o.fields[c].classes[`.${c}-razorpay-btn`].width)});v(t);const l=h(m,o=>{o[c]=a});y(l),g({event:`Full Width "${n.target.checked?"On":"Off"}": ${a.lbl||c}`,type:"set_button_width",state:{fields:l,styles:t,fldKey:c}})},W=n=>{a.subTitl=n.target.checked;const t=h(m,l=>{l[c]=a});y(t),g({event:`Subtitle "${n.target.checked?"On":"Off"}": ${a.lbl||c}`,type:"set_sub_title",state:{fields:t,fldKey:c}})},N=(n,t,l,o)=>{const u=[...A];if(n==="add")return u.push({}),k(u),D(u);if(n==="delete")return u.splice(t,1),k(u),D(u);u[t][l]=o,k(u),D(u)},D=n=>{var R,I;const t={};let l=-1;const{length:o}=A;for(;++l<o;)(R=n[l])!=null&&R.key&&((I=n[l])!=null&&I.value)&&(t[n[l].key]=n[l].value);a.options.notes=t;const u=h(m,V=>{V[c]=a});y(u),g({event:`Notes Changes: ${a.lbl||c}`,type:"set_notes",state:{fields:u,fldKey:c}})},S=n=>{let t;return n==="amount"?t=/^(radio|number|currency)/:n==="desc"?t=/text|username/g:n==="email"?t=/text|email/g:n==="number"&&(t=/number/g),F.filter(o=>o[1].typ.match(t)).map(o=>e.jsx("option",{value:o[0],children:o[1].adminLbl||o[1].lbl},o[0]))},Y=()=>j.filter(t=>t.type==="Razorpay").map(t=>e.jsx("option",{value:t.id,children:t.name},t.id));return e.jsxs("div",{children:[e.jsx(re,{title:"Field Settings",subtitle:a.typ,fieldKey:c}),e.jsx(le,{}),e.jsx(C,{}),e.jsxs("div",{className:r(s.ml2,s.mr2,s.mt2,s.p1),children:[e.jsx("b",{children:i("Select Config")}),e.jsx("br",{}),e.jsxs("select",{"data-testid":"slct-cnfg-slct",name:"payIntegID",id:"payIntegID",onChange:O,className:r(d.input),value:a.payIntegID,children:[e.jsx("option",{value:"",children:"Select Config"}),Y()]})]}),(a==null?void 0:a.payIntegID)&&e.jsxs(e.Fragment,{children:[!U&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{className:r(s.ml2,s.p1),children:[e.jsx("b",{children:i("Amount Type")}),e.jsx("br",{}),e.jsx(_,{id:"amnt-typ-fxd",onChange:M,radio:!0,checked:!x,title:i("Fixed"),value:"fixed"}),e.jsx(_,{id:"amnt-typ-dynmc",onChange:M,radio:!0,checked:x,title:i("Dynamic"),value:"dynamic"})]}),!x&&e.jsx("div",{className:r(s.ml2,s.mr2,s.p1),children:e.jsx(G,{id:"amnt",inpType:"number",title:i("Amount"),value:a.options.amount||"",action:n=>p("amount",n.target.value),cls:r(d.input)})}),x&&e.jsxs("div",{className:r(s.ml2,s.mr2,s.p1),children:[e.jsx("b",{children:i("Select Amount Field")}),e.jsxs("select",{"data-testid":"slct-amnt-fld-slct",onChange:n=>p(n.target.name,n.target.value),name:"amountFld",className:r(d.input),value:a.options.amountFld,children:[e.jsx("option",{value:"",children:i("Select Field")}),S("amount")]})]})]}),e.jsx("div",{className:r(s.ml2,s.mr2,s.p1),children:e.jsxs("label",{htmlFor:"recap-thm",children:[e.jsx("b",{children:i("Currency")}),e.jsx("select",{"data-testid":"crncy-slct",onChange:n=>p(n.target.name,n.target.value),name:"currency",value:a.options.currency,className:r(d.input),children:ee(se,"currency").map(n=>e.jsx("option",{value:n.code,children:`${n.currency} - ${n.code}`},n.currency))})]})}),e.jsxs("div",{className:r(s.ml2,s.mr2,s.p1),children:[e.jsx("b",{children:i("Account Name")}),e.jsx("br",{}),e.jsx("input",{"data-testid":"acnt-nam-inp","aria-label":"Account Name",type:"text",className:r(d.input),placeholder:"Account Name",name:"name",value:a.options.name||"",onChange:n=>p(n.target.name,n.target.value)})]}),e.jsxs("div",{className:r(s.ml2,s.mr2,s.p1),children:[e.jsx("b",{children:i("Description")}),e.jsx("br",{}),e.jsx("textarea",{"data-testid":"dscrptn-txt-ara",className:r(d.input),placeholder:"Order Description",name:"description",rows:"5",value:a.options.description||"",onChange:n=>p(n.target.name,n.target.value)})]})]}),e.jsx(C,{}),e.jsxs(f,{id:"adtnl-stng",title:"Additional Settings",className:r(d.fieldSection),children:[e.jsxs(f,{id:"adtnl-stng-btn",title:"Button",className:r(d.fieldSection),children:[e.jsx(G,{id:"btn-txt",inpType:"text",title:i("Button Text"),value:a.btnTxt||"",name:"btnTxt",action:B,className:r(s.mt0,{pr:1}),cls:r(d.input)}),e.jsx(oe,{id:"btn-algn",className:r({pr:1}),title:i("Button Align:"),options:H,value:a.align,action:B,name:"align",cls:r(d.input)}),e.jsx(T,{id:"btn-txt",title:i("Full Width"),action:Z,isChecked:a.fulW,className:"mt-5"}),e.jsx(T,{id:"sub-titl",title:i("Subtitle:"),action:W,isChecked:a==null?void 0:a.subTitl,className:"mt-5"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsxs(f,{id:"thm-stng",title:"Theme",className:r(d.fieldSection),children:[e.jsxs("div",{className:r(s.flxcb,s.mt2),children:[e.jsx("b",{children:i("Theme Color:")}),e.jsx("input",{"data-testid":"thm-clr-inp","aria-label":"Theme color",className:"ml-2",type:"color",value:a.options.theme.color,onChange:n=>p("color",n.target.value,"theme")})]}),e.jsxs("div",{className:r(s.flxcb,s.mt2),children:[e.jsx("b",{children:i("Background Color:")}),e.jsx("input",{"data-testid":"bg-clr-inp","aria-label":"Background color",className:"ml-2",type:"color",value:a.options.theme.backdrop_color,onChange:n=>p("backdrop_color",n.target.value,"theme")})]})]}),e.jsx("div",{className:"btcd-hr"}),e.jsx(f,{id:"mdl-stng",title:"Modal",className:r(d.fieldSection),children:e.jsx(T,{id:"cnfrm-cls",className:r(s.mt2),title:i("Confirm on Close:"),action:n=>p("confirm_close",n.target.checked,"modal"),isChecked:a.options.modal.confirm_close})}),e.jsx("div",{className:"btcd-hr"}),e.jsx(f,{id:"prfil-stng",title:"Prefill",className:r(d.fieldSection),children:e.jsxs("div",{children:[e.jsxs("div",{className:r(s.mt2,{px:1}),children:[e.jsx("b",{children:i("Name :")}),e.jsxs("select",{"data-testid":"prfil-nam-slct",onChange:n=>p(n.target.name,n.target.value,"prefill"),name:"prefillNameFld",className:r(d.input),value:a.options.prefill.prefillNameFld,children:[e.jsx("option",{value:"",children:i("Select Field")}),S("desc")]})]}),e.jsxs("div",{className:r(s.mt2,{px:1}),children:[e.jsx("b",{children:i("Email :")}),e.jsxs("select",{"data-testid":"prfil-eml-slct",onChange:n=>p(n.target.name,n.target.value,"prefill"),name:"prefillEmailFld",className:r(d.input),value:a.options.prefill.prefillEmailFld,children:[e.jsx("option",{value:"",children:i("Select Field")}),S("email")]})]}),e.jsxs("div",{className:r(s.mt2,{px:1}),children:[e.jsx("b",{children:i("Contact :")}),e.jsxs("select",{"data-testid":"prfil-cntct-slct",onChange:n=>p(n.target.name,n.target.value,"prefill"),name:"prefillContactFld",className:r(d.input),value:a.options.prefill.prefillContactFld,children:[e.jsx("option",{value:"",children:i("Select Field")}),S("number")]})]})]})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs(f,{id:"nots-stng",title:"Notes",className:r(d.fieldSection),children:[e.jsxs("div",{className:"flx",children:[e.jsx("div",{className:"w-10",children:e.jsx("b",{children:i("Key :")})}),e.jsx("div",{className:"w-10",children:e.jsx("b",{children:i("Value :")})})]}),A.map((n,t)=>e.jsxs("div",{className:"flx",children:[e.jsx("div",{className:r({pl:2}),children:e.jsx("input",{"data-testid":"nots-key-inp","aria-label":"Note key",className:r(d.input,{pr:1}),type:"text",value:n.key,onChange:l=>N("edit",t,"key",l.target.value)})}),e.jsx("div",{className:"ml-1",children:e.jsx("input",{"data-testid":"nots-val-inp","aria-label":"Note value",className:r(d.input),type:"text",value:n.value,onChange:l=>N("edit",t,"value",l.target.value)})}),e.jsx("button",{"data-testid":"nots-del-btn",className:"icn-btn ml-1 mt-3",type:"button","aria-label":"btn",onClick:()=>N("delete",t),children:e.jsx(ne,{})})]},`rp${t*2}`)),e.jsx("div",{className:"txt-center mt-2",children:e.jsx("button",{"data-testid":"nots-ad-btn",className:"icn-btn",type:"button",onClick:()=>N("add"),children:"+"})})]})]}),e.jsx(C,{})]}),e.jsx(C,{}),e.jsx(ie,{})]})}const de={amount:"Amount changed",amountFld:"Amount Field Selected",currency:"Currency Selected",name:"Account Name Modifyed",description:"Description Changed",color:"Color changed",backdrop_color:"Backdrop Color changed",confirm_close:"Confirm on close",prefillNameFld:"Profile Name Selected",prefillEmailFld:"Profile Email Selected",prefillContactFld:"Profile Contact Field"};export{Re as default};
