System.register(["./Header-legacy-1abc1bf3.js","./InputText-legacy-a8f0e82a.js","./ItemTitle-legacy-dc8eb101.js","./index-legacy-b7fe8758.js","./moment-legacy-67d72ca7.js","./ItemDataMutilLines-legacy-4652d7d5.js","./mixins-legacy-4e643a02.js"],(function(e,l){"use strict";var a,n,t,u,i,r,o,c,v,d,s,p,h,m,b,g,f,x,y,S,T,N,D,I,k,P,H,j,w;return{setters:[e=>{a=e.H},e=>{n=e.I},e=>{t=e.a,u=e.I},e=>{i=e.e,r=e.d,o=e.r,c=e.u,v=e.w,d=e.a,s=e.i,p=e.j,h=e.q,m=e.g,b=e.k,g=e.m,f=e.l,x=e.z,y=e.y,S=e.t,T=e.v,N=e.V,D=e.H,I=e.J,k=e.A,P=e.$},e=>{H=e.h},e=>{j=e.I},e=>{w=e.f}],execute:function(){var l=document.createElement("style");l.textContent="ion-content{--padding-top: 24px;--padding-bottom: 32px}.button-custom{width:200px}.button-primary{--border-radius: 8px !important;width:100%;--background: var( --gradient-primary, linear-gradient(136deg, #25a45e 24.37%, #33c273 100%) );height:36px!important;min-height:36px!important;--color-activated: #fff !important;--background-activated: #c1f3d4 !important;text-transform:none}ion-footer{padding:10px 20px;--color: #000 !important;box-shadow:0 -3px 6px rgba(0,0,0,.08);background-color:#fff!important}.line{background-color:#dde2ec;height:12px;border-bottom:1px solid #c8c7cc}\n",document.head.appendChild(l);const B={class:"w-full"},_=g("div",{class:"line w-full"},null,-1),Y=g("div",{class:"line w-full"},null,-1),C=g("div",{class:"line w-full"},null,-1),M={class:"px-5"};e("default",i({__name:"ConfirmPolicyPage",setup(e){const l=r((()=>P.getters["carStore/carTypeBussiness"])),i=r((()=>P.getters["priceStore/mainPrice"])),X=r((()=>P.getters["priceStore/humanProtectPrice"])),q=o(r((()=>P.getters["policyDetail/policyDetailData"]))),V=o(""),z=c(),A=(e,l)=>{q.value[l]=e,P.dispatch("policyDetail/setDetailPolicyInput",q.value)};return v((()=>q),(()=>{var e;const a="XCH"==q.value.carPurpose?q.value.carTonnage+" tấn":q.value.carNumberSeat+" chỗ";V.value=(null===(e=l.value.filter((e=>e.value==q.value.partnerType))[0])||void 0===e?void 0:e.name)+" - "+a})),d((()=>{var e;const a="XCH"==q.value.carPurpose?q.value.carTonnage+" tấn":q.value.carNumberSeat+" chỗ";V.value=(null===(e=l.value.filter((e=>e.value==q.value.partnerType))[0])||void 0===e?void 0:e.name)+" - "+a})),(e,l)=>(m(),s(h(k),null,{default:p((()=>[b(a,{isShowBackButton:!0}),b(h(x),null,{default:p((()=>{var e,a,r;return[g("div",B,[b(t,{label:"Kiểm tra thông tin"}),b(t,{label:"Thông tin trên đăng ký"}),b(u,{label:"Họ và tên",value:q.value.fullName},null,8,["value"]),b(u,{label:"Số điện thoại",value:q.value.phoneNumber},null,8,["value"]),b(u,{label:"Địa chỉ",value:q.value.address},null,8,["value"]),_,b(t,{label:"Thông tin xe được bảo hiểm"}),b(u,{label:"Mục đích sử dụng",value:1==q.value.isBussiness?"Xe cá nhân":"Xe kinh doanh"},null,8,["value"]),b(j,{label:"Thông tin xe",value:V.value},null,8,["value"]),b(u,{label:"Biển kiểm soát",value:q.value.carPlate},null,8,["value"]),Y,b(t,{label:"Chương trình bảo hiểm"}),b(u,{label:"Bảo hiểm TNDSBB",value:h(w)(i.value)+"đ"},null,8,["value"]),q.value.isHumanProtect?(m(),s(u,{key:0,label:"Bảo hiểm NNTX",value:h(w)(X.value)+"đ"},null,8,["value"])):f("",!0),b(u,{label:"Ngày hiệu lực",value:h(H)(q.value.effectDate).format("DD/MM/YYYY")},null,8,["value"]),b(u,{label:"Ngày hết hạn",value:h(H)(q.value.expireDate).format("DD/MM/YYYY")},null,8,["value"])]),C,b(t,{label:"Thông tin vận chuyển"}),g("div",M,[b(n,{label:"Địa chỉ","aria-label":"Địa chỉ",placeholder:"Địa chỉ","clear-input":!0,value:null===(e=q.value)||void 0===e?void 0:e.addressShip,onIonInput:l[0]||(l[0]=e=>A(e.detail.value,"addressShip")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),b(n,{label:"Họ tên người nhận","aria-label":"Họ tên người nhận",placeholder:"Họ tên người nhận","clear-input":!0,value:null===(a=q.value)||void 0===a?void 0:a.fullNameShip,onIonInput:l[1]||(l[1]=e=>A(e.detail.value,"fullNameShip")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"]),b(n,{label:"Số điện thoại liên hệ","aria-label":"Số điện thoại liên hệ",placeholder:"Số điện thoại liên hệ","clear-input":!0,value:null===(r=q.value)||void 0===r?void 0:r.phoneShipNumber,onIonInput:l[2]||(l[2]=e=>A(e.detail.value,"phoneShipNumber")),validates:[{required:!0,name:"Trường bắt buộc"}]},null,8,["value"])])]})),_:1}),b(h(I),null,{default:p((()=>[b(h(y),{lines:"none",class:"item-no-padding"},{default:p((()=>[b(h(S),{class:"text-black"},{default:p((()=>[T(" Phí bảo hiểm ")])),_:1}),b(h(S),{class:"!text-primary font-bold text-2xl !text-right"},{default:p((()=>[T(N(h(w)(i.value+X.value))+"VNĐ ",1)])),_:1})])),_:1}),b(h(D),{class:"button-primary",onClick:l[3]||(l[3]=e=>{z.push("/tabs/policy-success")})},{default:p((()=>[T(" Xác nhận ")])),_:1})])),_:1})])),_:1}))}}))}}}));
