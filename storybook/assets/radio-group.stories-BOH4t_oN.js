import{j as e}from"./jsx-runtime-BNwwtYSP.js";import{r as o}from"./iframe-DnvNSyRk.js";import{L as t}from"./label-LWmktt5-.js";import{R as n,a as i}from"./radio-group-CaGNqtFC.js";import{C as m,a as p,b as x,c as u,d as h}from"./card-Bu-o81qD.js";import{B as M}from"./button-B21MMDDv.js";import{B as b}from"./badge-B8bvTjs5.js";import{S as c}from"./separator-D-SPUzJk.js";import{C as w}from"./credit-card-v42k9zlO.js";import{B}from"./building-CbG8p1S8.js";import{S as P}from"./smartphone-ClhC_qVU.js";import{c as R}from"./createLucideIcon-DkJCW-cg.js";import{T as S}from"./truck-BiL0BcCV.js";import{P as k}from"./plane-CPi-zOAO.js";import{C as D}from"./car-Bg_q5q9W.js";import{B as A}from"./bell-OdUjksen.js";import{M as I}from"./mail-CNEE6sMD.js";import{E as z}from"./eye-off-Bdelk6CZ.js";import{S as O}from"./sun-BZJNHIGq.js";import{C as H}from"./calendar-DpMnRCdR.js";import{C as E}from"./clock-Dp4joxOs.js";import{V as q}from"./volume-2-DeR7wQ0w.js";import{S as U}from"./star-CKb_E8Qt.js";import{U as L}from"./users-21NM1hbP.js";import{V as W}from"./volume-x-C2XGiIPO.js";import{U as X}from"./user-CYhr768t.js";import{C as _}from"./circle-check-big-1MOwFRF8.js";import{D as $}from"./dollar-sign-Dp9aDNcd.js";import{F}from"./file-text-CNzFLBlo.js";import{I as Z}from"./image-DuqHi2jY.js";import{V as J}from"./video-CzZRkK7y.js";import{M as K}from"./music-DM2aJ7-E.js";import{A as Q}from"./archive-Da2qC6kr.js";import{P as Y}from"./phone-DoI7YtNT.js";import{M as ee}from"./message-square-DTLSJErj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-cZtZ0fDU.js";import"./index-BQek2qpz.js";import"./index-B9uyLz2W.js";import"./utils-CBfrqCZ4.js";import"./index-mE1rREmL.js";import"./index-DJjIRJmQ.js";import"./index-Bnml78I7.js";import"./index-hmAnMFt4.js";import"./index-u8QdvT0s.js";import"./index-CT42HFLf.js";import"./index-4O7hDl4s.js";import"./index-DrvUYCz4.js";import"./index-42gIw9X5.js";import"./index-DViAr5bX.js";import"./index-Bk_nZ_Q6.js";import"./circle-RZWLHcYG.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],G=R("crown",se);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],te=R("wallet",ae),ts={title:"UI/Forms/RadioGroup",component:n,parameters:{layout:"centered",docs:{description:{component:"여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"기본 선택값"},value:{control:"text",description:"현재 선택된 값"},onValueChange:{action:"changed",description:"값 변경 콜백"}}},f={args:{defaultValue:"option1"},render:a=>e.jsxs(n,{defaultValue:a.defaultValue,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"option1",id:"option1"}),e.jsx(t,{htmlFor:"option1",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"option2",id:"option2"}),e.jsx(t,{htmlFor:"option2",children:"옵션 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"option3",id:"option3"}),e.jsx(t,{htmlFor:"option3",children:"옵션 3"})]})]})},N={render:()=>{const[a,l]=o.useState("card"),r=[{id:"card",name:"신용/체크카드",description:"즉시 결제",icon:w,fee:"무료"},{id:"bank",name:"계좌이체",description:"1-2일 소요",icon:B,fee:"무료"},{id:"mobile",name:"휴대폰 결제",description:"통신비 합산",icon:P,fee:"2.5%"},{id:"wallet",name:"디지털 월렛",description:"PayPal, Apple Pay 등",icon:te,fee:"1.5%"}];return e.jsxs(m,{className:"w-full max-w-md",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(w,{className:"h-5 w-5"}),"결제 방법 선택"]}),e.jsx(u,{children:"원하시는 결제 방법을 선택해주세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:a,onValueChange:l,children:e.jsx("div",{className:"space-y-3",children:r.map(s=>{const d=s.icon;return e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(i,{value:s.id,id:s.id}),e.jsxs(t,{htmlFor:s.id,className:"flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted",children:[e.jsx(d,{className:"h-5 w-5 text-muted-foreground"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:s.name}),e.jsx(b,{variant:s.fee==="무료"?"default":"secondary",children:s.fee})]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:s.description})]})]})]})},s.id)})})}),e.jsx(c,{className:"my-4"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["선택된 결제 방법: ",e.jsx("strong",{children:r.find(s=>s.id===a)?.name})]})]})]})}},v={render:()=>{const[a,l]=o.useState("standard"),r=[{id:"standard",name:"일반 배송",time:"3-5일",price:"무료",description:"주문 후 3-5일 내 배송",icon:S},{id:"express",name:"빠른 배송",time:"1-2일",price:"3,000원",description:"주문 후 1-2일 내 배송",icon:k},{id:"same-day",name:"당일 배송",time:"오늘",price:"5,000원",description:"오후 6시 이전 주문 시 당일 배송",icon:D}];return e.jsxs(m,{className:"w-full max-w-md",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-5 w-5"}),"배송 옵션"]}),e.jsx(u,{children:"배송 방법을 선택해주세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:a,onValueChange:l,children:e.jsx("div",{className:"space-y-3",children:r.map(s=>{const d=s.icon;return e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(i,{value:s.id,id:s.id}),e.jsxs(t,{htmlFor:s.id,className:"flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-lg border transition-colors hover:bg-muted",children:[e.jsx(d,{className:"h-6 w-6 text-muted-foreground"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:s.name}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"font-medium",children:s.price}),e.jsx("div",{className:"text-sm text-muted-foreground",children:s.time})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:s.description})]})]})]})},s.id)})})}),e.jsx(c,{className:"my-4"}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"선택된 배송:"}),e.jsx("span",{className:"font-medium",children:r.find(s=>s.id===a)?.name})]})]})]})}},g={render:()=>{const[a,l]=o.useState("weekly"),[r,s]=o.useState("important");return e.jsx("div",{className:"w-full max-w-lg space-y-6",children:e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(A,{className:"h-5 w-5"}),"알림 설정"]}),e.jsx(u,{children:"받고 싶은 알림의 빈도와 유형을 설정하세요"})]}),e.jsxs(h,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(I,{className:"h-4 w-4"}),"이메일 알림 빈도"]}),e.jsx(n,{value:a,onValueChange:l,children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"never",id:"email-never"}),e.jsxs(t,{htmlFor:"email-never",className:"flex items-center gap-2",children:[e.jsx(z,{className:"h-4 w-4 text-muted-foreground"}),"받지 않음"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"daily",id:"email-daily"}),e.jsxs(t,{htmlFor:"email-daily",className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-4 w-4 text-muted-foreground"}),"매일"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"weekly",id:"email-weekly"}),e.jsxs(t,{htmlFor:"email-weekly",className:"flex items-center gap-2",children:[e.jsx(H,{className:"h-4 w-4 text-muted-foreground"}),"주간 요약"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"monthly",id:"email-monthly"}),e.jsxs(t,{htmlFor:"email-monthly",className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-4 w-4 text-muted-foreground"}),"월간 요약"]})]})]})})]}),e.jsx(c,{}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(P,{className:"h-4 w-4"}),"푸시 알림"]}),e.jsx(n,{value:r,onValueChange:s,children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"all",id:"push-all"}),e.jsxs(t,{htmlFor:"push-all",className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4 text-muted-foreground"}),"모든 알림"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"important",id:"push-important"}),e.jsxs(t,{htmlFor:"push-important",className:"flex items-center gap-2",children:[e.jsx(U,{className:"h-4 w-4 text-muted-foreground"}),"중요한 알림만"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"mentions",id:"push-mentions"}),e.jsxs(t,{htmlFor:"push-mentions",className:"flex items-center gap-2",children:[e.jsx(L,{className:"h-4 w-4 text-muted-foreground"}),"멘션될 때만"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"none",id:"push-none"}),e.jsxs(t,{htmlFor:"push-none",className:"flex items-center gap-2",children:[e.jsx(W,{className:"h-4 w-4 text-muted-foreground"}),"받지 않음"]})]})]})})]}),e.jsx(c,{}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"이메일 빈도:"}),e.jsx("span",{className:"font-medium capitalize",children:a})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"푸시 알림:"}),e.jsx("span",{className:"font-medium capitalize",children:r})]})]})]})]})})}},j={render:()=>{const[a,l]=o.useState("pro"),r=[{id:"free",name:"무료",price:"0원",period:"월",features:["기본 기능","5GB 저장공간","이메일 지원"],icon:X,popular:!1},{id:"pro",name:"프로",price:"15,000원",period:"월",features:["모든 기능","100GB 저장공간","우선 지원","고급 분석"],icon:G,popular:!0},{id:"team",name:"팀",price:"45,000원",period:"월",features:["팀 기능","무제한 저장공간","24/7 지원","팀 관리","API 접근"],icon:L,popular:!1}];return e.jsxs(m,{className:"w-full max-w-2xl",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(G,{className:"h-5 w-5"}),"구독 플랜 선택"]}),e.jsx(u,{children:"필요에 맞는 플랜을 선택하세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:a,onValueChange:l,children:e.jsx("div",{className:"grid gap-4",children:r.map(s=>{const d=s.icon;return e.jsxs("div",{className:"relative",children:[s.popular&&e.jsx(b,{className:"absolute -top-2 left-4 z-10 bg-blue-600",children:"인기"}),e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx(i,{value:s.id,id:s.id,className:"mt-1"}),e.jsxs(t,{htmlFor:s.id,className:`flex-1 cursor-pointer p-4 rounded-lg border transition-colors hover:bg-muted ${s.popular?"border-blue-300 bg-blue-50":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{className:"h-5 w-5 text-muted-foreground"}),e.jsx("span",{className:"font-semibold text-lg",children:s.name})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:"text-2xl font-bold",children:s.price}),e.jsxs("span",{className:"text-muted-foreground",children:["/",s.period]})]})]}),e.jsx("ul",{className:"space-y-1 text-sm text-muted-foreground",children:s.features.map((T,V)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4 text-green-500 flex-shrink-0"}),T]},V))})]})]})]},s.id)})})}),e.jsx(c,{className:"my-4"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["선택된 플랜: ",e.jsx("strong",{children:r.find(s=>s.id===a)?.name})]}),e.jsxs(M,{children:[e.jsx($,{className:"mr-2 h-4 w-4"}),"구독하기"]})]})]})]})}},y={render:()=>{const[a,l]=o.useState("image"),r=[{id:"image",name:"이미지",extensions:"JPG, PNG, GIF, WebP",maxSize:"10MB",icon:Z,color:"text-green-600"},{id:"document",name:"문서",extensions:"PDF, DOC, DOCX, TXT",maxSize:"25MB",icon:F,color:"text-blue-600"},{id:"video",name:"비디오",extensions:"MP4, AVI, MOV, WebM",maxSize:"100MB",icon:J,color:"text-purple-600"},{id:"audio",name:"오디오",extensions:"MP3, WAV, AAC, OGG",maxSize:"50MB",icon:K,color:"text-orange-600"},{id:"archive",name:"압축파일",extensions:"ZIP, RAR, 7Z, TAR",maxSize:"200MB",icon:Q,color:"text-gray-600"}];return e.jsxs(m,{className:"w-full max-w-lg",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(F,{className:"h-5 w-5"}),"업로드 파일 유형"]}),e.jsx(u,{children:"업로드할 파일의 유형을 선택하세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:a,onValueChange:l,children:e.jsx("div",{className:"space-y-3",children:r.map(s=>{const d=s.icon;return e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(i,{value:s.id,id:s.id}),e.jsxs(t,{htmlFor:s.id,className:"flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted",children:[e.jsx(d,{className:`h-5 w-5 ${s.color}`}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:s.name}),e.jsxs(b,{variant:"outline",children:["최대 ",s.maxSize]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-1",children:["지원 형식: ",s.extensions]})]})]})]})},s.id)})})}),e.jsx(c,{className:"my-4"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["선택된 파일 유형: ",e.jsx("strong",{children:r.find(s=>s.id===a)?.name})]})]})]})}},C={render:()=>{const[a,l]=o.useState("option2");return e.jsxs("div",{className:"w-full max-w-md space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (방향키, Space, Enter)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 표시 및 관리"}),e.jsx("li",{children:"• 적절한 색상 대비"}),e.jsx("li",{children:"• 그룹 및 항목 역할 정의"})]})]}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(x,{children:"접근성 라디오 그룹 데모"}),e.jsx(u,{children:"완전한 키보드 접근성을 지원하는 라디오 버튼 그룹"})]}),e.jsxs(h,{children:[e.jsxs("fieldset",{className:"space-y-4",children:[e.jsx("legend",{className:"font-medium mb-3",children:"선호하는 연락 방법을 선택하세요"}),e.jsx(n,{value:a,onValueChange:l,"aria-label":"연락 방법 선택",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"email",id:"contact-email","aria-describedby":"email-desc"}),e.jsxs(t,{htmlFor:"contact-email",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(I,{className:"h-4 w-4 text-muted-foreground"}),"이메일"]})]}),e.jsx("p",{id:"email-desc",className:"text-sm text-muted-foreground ml-6",children:"이메일로 연락을 받습니다. 응답 시간: 24시간 이내"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"phone",id:"contact-phone","aria-describedby":"phone-desc"}),e.jsxs(t,{htmlFor:"contact-phone",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(Y,{className:"h-4 w-4 text-muted-foreground"}),"전화"]})]}),e.jsx("p",{id:"phone-desc",className:"text-sm text-muted-foreground ml-6",children:"전화로 연락을 받습니다. 응답 시간: 1시간 이내"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{value:"message",id:"contact-message","aria-describedby":"message-desc"}),e.jsxs(t,{htmlFor:"contact-message",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(ee,{className:"h-4 w-4 text-muted-foreground"}),"문자 메시지"]})]}),e.jsx("p",{id:"message-desc",className:"text-sm text-muted-foreground ml-6",children:"SMS로 연락을 받습니다. 응답 시간: 30분 이내"})]})})]}),e.jsx(c,{className:"my-4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"선택된 연락 방법:"})," ",a||"선택 안함"]}),e.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 옵션 선택, Space로 선택 확정"})]})]})]})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 제공하는 라디오 그룹 데모입니다."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'option1'
  },
  render: args => <RadioGroup defaultValue={args.defaultValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">옵션 3</Label>
      </div>
    </RadioGroup>
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPayment, setSelectedPayment] = useState('card');
    const paymentMethods = [{
      id: 'card',
      name: '신용/체크카드',
      description: '즉시 결제',
      icon: CreditCard,
      fee: '무료'
    }, {
      id: 'bank',
      name: '계좌이체',
      description: '1-2일 소요',
      icon: Building,
      fee: '무료'
    }, {
      id: 'mobile',
      name: '휴대폰 결제',
      description: '통신비 합산',
      icon: Smartphone,
      fee: '2.5%'
    }, {
      id: 'wallet',
      name: '디지털 월렛',
      description: 'PayPal, Apple Pay 등',
      icon: Wallet,
      fee: '1.5%'
    }];
    return <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            결제 방법 선택
          </CardTitle>
          <CardDescription>
            원하시는 결제 방법을 선택해주세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
            <div className="space-y-3">
              {paymentMethods.map(method => {
              const IconComponent = method.icon;
              return <div key={method.id}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted">
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{method.name}</span>
                            <Badge variant={method.fee === '무료' ? 'default' : 'secondary'}>
                              {method.fee}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {method.description}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>;
            })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="text-sm text-muted-foreground">
            선택된 결제 방법: <strong>
              {paymentMethods.find(m => m.id === selectedPayment)?.name}
            </strong>
          </div>
        </CardContent>
      </Card>;
  }
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedShipping, setSelectedShipping] = useState('standard');
    const shippingOptions = [{
      id: 'standard',
      name: '일반 배송',
      time: '3-5일',
      price: '무료',
      description: '주문 후 3-5일 내 배송',
      icon: Truck
    }, {
      id: 'express',
      name: '빠른 배송',
      time: '1-2일',
      price: '3,000원',
      description: '주문 후 1-2일 내 배송',
      icon: Plane
    }, {
      id: 'same-day',
      name: '당일 배송',
      time: '오늘',
      price: '5,000원',
      description: '오후 6시 이전 주문 시 당일 배송',
      icon: Car
    }];
    return <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            배송 옵션
          </CardTitle>
          <CardDescription>
            배송 방법을 선택해주세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
            <div className="space-y-3">
              {shippingOptions.map(option => {
              const IconComponent = option.icon;
              return <div key={option.id}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-lg border transition-colors hover:bg-muted">
                        <IconComponent className="h-6 w-6 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option.name}</span>
                            <div className="text-right">
                              <div className="font-medium">{option.price}</div>
                              <div className="text-sm text-muted-foreground">{option.time}</div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {option.description}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>;
            })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between text-sm">
            <span>선택된 배송:</span>
            <span className="font-medium">
              {shippingOptions.find(o => o.id === selectedShipping)?.name}
            </span>
          </div>
        </CardContent>
      </Card>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [emailFrequency, setEmailFrequency] = useState('weekly');
    const [pushNotifications, setPushNotifications] = useState('important');
    return <div className="w-full max-w-lg space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림 설정
            </CardTitle>
            <CardDescription>
              받고 싶은 알림의 빈도와 유형을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                이메일 알림 빈도
              </h4>
              <RadioGroup value={emailFrequency} onValueChange={setEmailFrequency}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="never" id="email-never" />
                    <Label htmlFor="email-never" className="flex items-center gap-2">
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                      받지 않음
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="email-daily" />
                    <Label htmlFor="email-daily" className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-muted-foreground" />
                      매일
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="email-weekly" />
                    <Label htmlFor="email-weekly" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      주간 요약
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="email-monthly" />
                    <Label htmlFor="email-monthly" className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      월간 요약
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                푸시 알림
              </h4>
              <RadioGroup value={pushNotifications} onValueChange={setPushNotifications}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="push-all" />
                    <Label htmlFor="push-all" className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      모든 알림
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="push-important" />
                    <Label htmlFor="push-important" className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      중요한 알림만
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mentions" id="push-mentions" />
                    <Label htmlFor="push-mentions" className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      멘션될 때만
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="push-none" />
                    <Label htmlFor="push-none" className="flex items-center gap-2">
                      <VolumeX className="h-4 w-4 text-muted-foreground" />
                      받지 않음
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <Separator />
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>이메일 빈도:</span>
                <span className="font-medium capitalize">{emailFrequency}</span>
              </div>
              <div className="flex justify-between">
                <span>푸시 알림:</span>
                <span className="font-medium capitalize">{pushNotifications}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState('pro');
    const plans = [{
      id: 'free',
      name: '무료',
      price: '0원',
      period: '월',
      features: ['기본 기능', '5GB 저장공간', '이메일 지원'],
      icon: User,
      popular: false
    }, {
      id: 'pro',
      name: '프로',
      price: '15,000원',
      period: '월',
      features: ['모든 기능', '100GB 저장공간', '우선 지원', '고급 분석'],
      icon: Crown,
      popular: true
    }, {
      id: 'team',
      name: '팀',
      price: '45,000원',
      period: '월',
      features: ['팀 기능', '무제한 저장공간', '24/7 지원', '팀 관리', 'API 접근'],
      icon: Users,
      popular: false
    }];
    return <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            구독 플랜 선택
          </CardTitle>
          <CardDescription>
            필요에 맞는 플랜을 선택하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
            <div className="grid gap-4">
              {plans.map(plan => {
              const IconComponent = plan.icon;
              return <div key={plan.id} className="relative">
                    {plan.popular && <Badge className="absolute -top-2 left-4 z-10 bg-blue-600">
                        인기
                      </Badge>}
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                      <Label htmlFor={plan.id} className={\`flex-1 cursor-pointer p-4 rounded-lg border transition-colors hover:bg-muted \${plan.popular ? 'border-blue-300 bg-blue-50' : ''}\`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5 text-muted-foreground" />
                            <span className="font-semibold text-lg">{plan.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/{plan.period}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {plan.features.map((feature, index) => <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>)}
                        </ul>
                      </Label>
                    </div>
                  </div>;
            })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              선택된 플랜: <strong>
                {plans.find(p => p.id === selectedPlan)?.name}
              </strong>
            </div>
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              구독하기
            </Button>
          </div>
        </CardContent>
      </Card>;
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedType, setSelectedType] = useState('image');
    const fileTypes = [{
      id: 'image',
      name: '이미지',
      extensions: 'JPG, PNG, GIF, WebP',
      maxSize: '10MB',
      icon: Image,
      color: 'text-green-600'
    }, {
      id: 'document',
      name: '문서',
      extensions: 'PDF, DOC, DOCX, TXT',
      maxSize: '25MB',
      icon: FileText,
      color: 'text-blue-600'
    }, {
      id: 'video',
      name: '비디오',
      extensions: 'MP4, AVI, MOV, WebM',
      maxSize: '100MB',
      icon: Video,
      color: 'text-purple-600'
    }, {
      id: 'audio',
      name: '오디오',
      extensions: 'MP3, WAV, AAC, OGG',
      maxSize: '50MB',
      icon: Music,
      color: 'text-orange-600'
    }, {
      id: 'archive',
      name: '압축파일',
      extensions: 'ZIP, RAR, 7Z, TAR',
      maxSize: '200MB',
      icon: Archive,
      color: 'text-gray-600'
    }];
    return <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            업로드 파일 유형
          </CardTitle>
          <CardDescription>
            업로드할 파일의 유형을 선택하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedType} onValueChange={setSelectedType}>
            <div className="space-y-3">
              {fileTypes.map(type => {
              const IconComponent = type.icon;
              return <div key={type.id}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={type.id} id={type.id} />
                      <Label htmlFor={type.id} className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted">
                        <IconComponent className={\`h-5 w-5 \${type.color}\`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{type.name}</span>
                            <Badge variant="outline">
                              최대 {type.maxSize}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            지원 형식: {type.extensions}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>;
            })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="text-sm text-muted-foreground">
            선택된 파일 유형: <strong>
              {fileTypes.find(t => t.id === selectedType)?.name}
            </strong>
          </div>
        </CardContent>
      </Card>;
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    return <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (방향키, Space, Enter)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 표시 및 관리</li>
            <li>• 적절한 색상 대비</li>
            <li>• 그룹 및 항목 역할 정의</li>
          </ul>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>접근성 라디오 그룹 데모</CardTitle>
            <CardDescription>
              완전한 키보드 접근성을 지원하는 라디오 버튼 그룹
            </CardDescription>
          </CardHeader>
          <CardContent>
            <fieldset className="space-y-4">
              <legend className="font-medium mb-3">
                선호하는 연락 방법을 선택하세요
              </legend>
              
              <RadioGroup value={value} onValueChange={setValue} aria-label="연락 방법 선택">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="contact-email" aria-describedby="email-desc" />
                    <Label htmlFor="contact-email" className="flex items-center gap-2 cursor-pointer">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      이메일
                    </Label>
                  </div>
                  <p id="email-desc" className="text-sm text-muted-foreground ml-6">
                    이메일로 연락을 받습니다. 응답 시간: 24시간 이내
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="contact-phone" aria-describedby="phone-desc" />
                    <Label htmlFor="contact-phone" className="flex items-center gap-2 cursor-pointer">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      전화
                    </Label>
                  </div>
                  <p id="phone-desc" className="text-sm text-muted-foreground ml-6">
                    전화로 연락을 받습니다. 응답 시간: 1시간 이내
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="message" id="contact-message" aria-describedby="message-desc" />
                    <Label htmlFor="contact-message" className="flex items-center gap-2 cursor-pointer">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      문자 메시지
                    </Label>
                  </div>
                  <p id="message-desc" className="text-sm text-muted-foreground ml-6">
                    SMS로 연락을 받습니다. 응답 시간: 30분 이내
                  </p>
                </div>
              </RadioGroup>
            </fieldset>
            
            <Separator className="my-4" />
            
            <div className="space-y-2">
              <div className="text-sm">
                <strong>선택된 연락 방법:</strong> {value || '선택 안함'}
              </div>
              
              <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 옵션 선택, Space로 선택 확정
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 제공하는 라디오 그룹 데모입니다.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const is=["Default","PaymentMethods","ShippingOptions","NotificationSettings","SubscriptionPlans","FileTypeSelector","AccessibilityDemo"];export{C as AccessibilityDemo,f as Default,y as FileTypeSelector,g as NotificationSettings,N as PaymentMethods,v as ShippingOptions,j as SubscriptionPlans,is as __namedExportsOrder,ts as default};
