import{I as V,D as H,a as j}from"./ItemTitleNoPadding-7da62bda.js";import{_ as $,H as z}from"./Header-aaf967e3.js";import{e as w,H as q,K as W,L as X,z as G,M as J,y as A,N as F,O as Q,G as K,P as Y,Q as Z,R as ee,r as v,f as g,g as D,S as N,k as l,j as c,T as B,U as ae,i as E,v as f,V as P,t as le,W as te,X as ne,I as oe,a as ue,Y as ie,m as S,Z as se,u as re,d as ve,q as x,_ as ce,J as de,A as pe,$ as U}from"./index-8ca2be60.js";import{I as m}from"./InputText-e3c2aa51.js";import"./moment-09df310e.js";const me=w({props:{items:Array,selectedItem:{type:String,default:""},title:{type:String,default:"Select Items"}},emits:["selection-cancel","selection-change"],components:{IonButton:q,IonButtons:W,IonCheckbox:X,IonContent:G,IonHeader:J,IonItem:A,IonList:F,IonTitle:Q,IonSearchbar:K,IonToolbar:Y,IonRadioGroup:Z,IonRadio:ee},setup(t,{emit:o}){const n=v([...t.items]),u=v(t.selectedItem),d=()=>{o("selection-cancel")},b=s=>{o("selection-change",s.detail.value)},i=s=>{r(s.target.value)},r=s=>{if(s===void 0)n.value=[...t.items];else{const e=s.toLowerCase();n.value=t.items.filter(p=>p.text.toLowerCase().includes(e))}};return{filteredItems:n,value:u,cancelChanges:d,confirmChanges:b,searchbarInput:i}}});function be(t,o,n,u,d,b){const i=g("ion-searchbar"),r=g("ion-radio"),s=g("ion-radio-group");return D(),N(B,null,[l(i,{onIonInput:o[0]||(o[0]=e=>t.searchbarInput(e))}),l(s,{id:"modal-list",value:t.value,"onUpdate:value":o[1]||(o[1]=e=>t.value=e),mode:"md",onIonChange:o[2]||(o[2]=e=>t.confirmChanges(e))},{default:c(()=>[(D(!0),N(B,null,ae(t.filteredItems,e=>(D(),E(r,{value:e.value,key:e.value},{default:c(()=>[f(P(e.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])],64)}const Ie=$(me,[["render",be]]),ge=w({components:{SearchSelect:Ie,IonContent:G,IonItem:A,IonLabel:le,IonList:F,IonModal:te,IonInput:ne,IonIcon:oe},props:["label","options","value"],emits:["update:value"],setup(t,o){const n=v(t.options),u=v(t.label),d=v(!1),b=v(t.label),i=v(""),r=v(!1),s=()=>{r.value=!0},e=()=>{d.value=!1},p=()=>{r.value=!1},C=()=>{d.value=!0,console.log(d.value)},y=I=>{const h=n.value.find(T=>T.value===I);return(h==null?void 0:h.text)||u.value},_=I=>{b.value=y(I),o.emit("update:value",I),i.value=I,d.value=!1};return ue(()=>{b.value=y(t.value)}),{isOpen:d,optionsSearch:n,selectedText:b,selectedValue:i,selectionChanged:_,onFocus:s,onBlur:p,isFocus:r,openModal:C,onDidDismiss:e,labelSearch:u,chevronDownOutline:ie}}});const fe={class:"flex flex-col w-full mt-4"};function he(t,o,n,u,d,b){const i=g("ion-label"),r=g("ion-icon"),s=g("SearchSelect"),e=g("ion-modal");return D(),N(B,null,[S("div",fe,[l(i,null,{default:c(()=>[f(P(t.labelSearch),1)]),_:1}),l(i,{onClick:o[0]||(o[0]=p=>t.openModal()),class:se(t.selectedText==t.labelSearch?"input-select text-[#a4a4a4]":"input-select")},{default:c(()=>[f(P(t.selectedText)+" ",1),l(r,{icon:t.chevronDownOutline,class:"icon-select"},null,8,["icon"])]),_:1},8,["class"])]),l(e,{"is-open":t.isOpen,"initial-breakpoint":1,breakpoints:[0,1],onDidDismiss:o[3]||(o[3]=p=>t.onDidDismiss())},{default:c(()=>[l(i,{class:"w-full flex items-center justify-center pt-2 text-lg"},{default:c(()=>[f(P(t.label),1)]),_:1}),l(s,{class:"ion-page",title:t.label,items:t.optionsSearch,selectedItem:t.selectedValue,onSelectionChange:o[1]||(o[1]=p=>t.selectionChanged(p)),onSelectionCancel:o[2]||(o[2]=p=>t.isOpen=!1)},null,8,["title","items","selectedItem"])]),_:1},8,["is-open"])],64)}const k=$(ge,[["render",he],["__scopeId","data-v-7f71e9c7"]]),xe={class:"flex w-full gap-4"},ye={class:"w-1/2"},Se={class:"w-1/2"},De={class:"flex"},Ce=w({__name:"FormClaimPage",setup(t){const o=re(),n=v(ve(()=>U.getters["claimDetail/claimDetailData"])),u=(s,e)=>{n.value[e]=s,U.dispatch("claimDetail/setDetailClaimInput",n.value)},d=()=>{o.push("/tabs/claim-success")},b=()=>{o.push("/tabs/claim")};v("1");const i=v(new Date().toISOString()),r=v([{text:"Apple",value:1},{text:"Apricot",value:2},{text:"Banana",value:"banana"},{text:"Blackberry",value:"blackberry"},{text:"Blueberry",value:"blueberry"},{text:"Cherry",value:"cherry"},{text:"Cranberry",value:"cranberry"},{text:"Grape",value:"grape"},{text:"Grapefruit",value:"grapefruit"},{text:"Guava",value:"guava"},{text:"Jackfruit",value:"jackfruit"},{text:"Lime",value:"lime"},{text:"Mango",value:"mango"},{text:"Nectarine",value:"nectarine"},{text:"Orange",value:"orange"},{text:"Papaya",value:"papaya"},{text:"Passionfruit",value:"passionfruit"},{text:"Peach",value:"peach"},{text:"Pear",value:"pear"},{text:"Plantain",value:"plantain"},{text:"Plum",value:"plum"},{text:"Pineapple",value:"pineapple"},{text:"Pomegranate",value:"pomegranate"},{text:"Raspberry",value:"raspberry"},{text:"Strawberry",value:"strawberry"}]);return(s,e)=>(D(),E(x(pe),null,{default:c(()=>[l(z,{isShowBackButton:!0}),l(x(G),null,{default:c(()=>{var p,C,y,_,I,h,T,L,R,M,O;return[l(V,{lines:"none",label:"Thông báo tổn thất"}),l(H,{placeholder:"Ngày thông báo",label:"Ngày thông báo",value:i.value,"onUpdate:value":e[0]||(e[0]=a=>i.value=a)},null,8,["value"]),l(x(ce),{class:"mt-4",labelPlacement:"end",checked:n.value.onLocation,onIonChange:e[1]||(e[1]=a=>u(a.detail.checked,"onLocation"))},{default:c(()=>[f(" Xe ở hiện trường ")]),_:1},8,["checked"]),l(m,{label:"Người liên hệ","aria-label":"Người liên hệ",placeholder:"Người liên hệ","clear-input":!0,value:(p=n.value)==null?void 0:p.contactName,onIonInput:e[2]||(e[2]=a=>u(a.detail.value,"contactName")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Số điện thoại","aria-label":"Số điện thoại",placeholder:"Số điện thoại","clear-input":!0,value:(C=n.value)==null?void 0:C.contactPhone,onIonInput:e[3]||(e[3]=a=>u(a.detail.value,"contactPhone")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(j,{label:"Mối quan hệ với chủ xe","aria-label":"Mối quan hệ với chủ xe",placeholder:"Mối quan hệ với chủ xe",options:[{name:"Apple",value:1},{name:"Orange",value:2},{name:"Banana",value:3}],value:n.value.contactInRelationship,"onUpdate:value":e[4]||(e[4]=a=>u(a,"contactInRelationship"))},null,8,["value"]),l(m,{label:"Email","aria-label":"Email",placeholder:"Email","clear-input":!0,value:(y=n.value)==null?void 0:y.contactEmail,onIonInput:e[5]||(e[5]=a=>u(a.detail.value,"contactEmail")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Giấy chứng nhận","aria-label":"Giấy chứng nhận",placeholder:"Giấy chứng nhận","clear-input":!0,value:(_=n.value)==null?void 0:_.certificateNo,onIonInput:e[6]||(e[6]=a=>u(a.detail.value,"certificateNo")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Biển số xe","aria-label":"Biển số xe",placeholder:"Biển số xe","clear-input":!0,value:(I=n.value)==null?void 0:I.carPlate,onIonInput:e[7]||(e[7]=a=>u(a.detail.value,"carPlate")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(H,{placeholder:"Ngày tổn thất",label:"Ngày tổn thất",value:i.value,"onUpdate:value":e[8]||(e[8]=a=>i.value=a)},null,8,["value"]),l(m,{label:"Địa điểm tổn thất","aria-label":"Địa điểm tổn thất",placeholder:"Địa điểm tổn thất","clear-input":!0,value:(h=n.value)==null?void 0:h.lossAddress,onIonInput:e[9]||(e[9]=a=>u(a.detail.value,"lossAddress")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),S("div",xe,[S("div",ye,[l(k,{label:"Tỉnh thành",options:r.value,value:n.value.lossProvinceId,"onUpdate:value":e[10]||(e[10]=a=>u(a,"lossProvinceId"))},null,8,["options","value"])]),S("div",Se,[l(k,{label:"Quận/Huyện",options:r.value,value:n.value.lossDistrictId,"onUpdate:value":e[11]||(e[11]=a=>u(a,"lossDistrictId"))},null,8,["options","value"])])]),l(k,{label:"Phường/Xã",options:r.value,value:n.value.lossWardId,"onUpdate:value":e[12]||(e[12]=a=>u(a,"lossWardId"))},null,8,["options","value"]),l(m,{label:"Diễn biến","aria-label":"Diễn biến",placeholder:"Diễn biến","clear-input":!0,value:(T=n.value)==null?void 0:T.lossDescription,onIonInput:e[13]||(e[13]=a=>u(a.detail.value,"lossDescription")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Hậu quả","aria-label":"Hậu quả",placeholder:"Hậu quả","clear-input":!0,value:(L=n.value)==null?void 0:L.lossResult,onIonInput:e[14]||(e[14]=a=>u(a.detail.value,"lossResult")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Tên lái xe","aria-label":"Tên lái xe",placeholder:"Tên lái xe","clear-input":!0,value:(R=n.value)==null?void 0:R.carDriverName,onIonInput:e[15]||(e[15]=a=>u(a.detail.value,"carDriverName")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Số điện thoại lái xe","aria-label":"Số điện thoại lái xe",placeholder:"Số điện thoại lái xe","clear-input":!0,value:(M=n.value)==null?void 0:M.carDriverPhone,onIonInput:e[16]||(e[16]=a=>u(a.detail.value,"carDriverPhone")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),l(m,{label:"Ghi chú","aria-label":"Ghi chú",placeholder:"Ghi chú","clear-input":!0,value:(O=n.value)==null?void 0:O.note,onIonInput:e[17]||(e[17]=a=>u(a.detail.value,"note")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"])]}),_:1}),l(x(de),null,{default:c(()=>[S("div",De,[l(x(q),{onClick:b,class:"button-primary"},{default:c(()=>[f("Đóng")]),_:1}),l(x(q),{onClick:d,class:"button-primary"},{default:c(()=>[f("Gửi thông báo")]),_:1})])]),_:1})]),_:1}))}});const Ne=$(Ce,[["__scopeId","data-v-8365bc6c"]]);export{Ne as default};
