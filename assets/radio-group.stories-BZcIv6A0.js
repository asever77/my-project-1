import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{r as c}from"./iframe-BdMZbwUm.js";import{L as a}from"./label-DOMLoIND.js";import{R as n,a as t}from"./radio-group-DK1ioMMu.js";import{C as m,a as p,b as x,c as u,d as h}from"./card-BgCPKrWA.js";import{B as M}from"./button-bDZQ1CGr.js";import{B as b}from"./badge-B3XW2gOL.js";import{S as o}from"./separator-BhwIUBVE.js";import{C as w}from"./credit-card-CQaSktJt.js";import{B}from"./building-CFeCBnk6.js";import{S as P}from"./smartphone-BwBOkLd_.js";import{c as R}from"./createLucideIcon-CdHLrrBb.js";import{T as S}from"./truck-C8slMH75.js";import{P as k}from"./plane-B_qYPaxF.js";import{C as A}from"./car-BKEIkdup.js";import{B as D}from"./bell-D52r2PyL.js";import{M as I}from"./mail-jnGPqVVg.js";import{E as z}from"./eye-off-B22Xz08u.js";import{S as H}from"./sun-Bs2gpW7y.js";import{C as O}from"./calendar-TKHYDXI1.js";import{C as q}from"./clock-DuZK96C-.js";import{V as E}from"./volume-2-BaEWJYUI.js";import{S as U}from"./star-C0TOQxsF.js";import{U as L}from"./users-D0OQj7Zx.js";import{V as W}from"./volume-x-CT_Q9iZv.js";import{U as X}from"./user-BJjfzFFu.js";import{C as $}from"./circle-check-big-Cfx7f1FC.js";import{D as Z}from"./dollar-sign-DIUrrMM2.js";import{F}from"./file-text-DmRPTJWd.js";import{I as _}from"./image-BUKezXs8.js";import{V as J}from"./video-CwrjoPPM.js";import{M as K}from"./music-DBENafpc.js";import{A as Q}from"./archive-DKsLnyxN.js";import{P as Y}from"./phone-DD29FuQ8.js";import{M as ee}from"./message-square-yOCUFWvY.js";import"./index-BMTS4V62.js";import"./index-RnXzWidx.js";import"./index-COOYaFQ0.js";import"./utils-CBfrqCZ4.js";import"./index-CQPQ-BqZ.js";import"./index-B_g0QmXh.js";import"./index-Bxgse1uj.js";import"./index-RuX4kDbx.js";import"./index-DI80qA_d.js";import"./index-CdFegrUu.js";import"./index-BbsuTJMv.js";import"./index-CvWdknzs.js";import"./index-DEdBc4IE.js";import"./index-B74dw3ct.js";import"./index-C2zivziK.js";import"./circle-eZczKrwA.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],G=R("crown",se);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],ae=R("wallet",re),rs={title:"UI/Forms/RadioGroup",component:n,parameters:{layout:"centered",docs:{description:{component:"여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"기본 선택값"},value:{control:"text",description:"현재 선택된 값"},onValueChange:{action:"changed",description:"값 변경 콜백"}}},f={args:{defaultValue:"option1"},render:r=>e.jsxs(n,{defaultValue:r.defaultValue,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option1",id:"option1"}),e.jsx(a,{htmlFor:"option1",children:"옵션 1"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option2",id:"option2"}),e.jsx(a,{htmlFor:"option2",children:"옵션 2"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"option3",id:"option3"}),e.jsx(a,{htmlFor:"option3",children:"옵션 3"})]})]})},N={render:()=>{const[r,l]=c.useState("card"),i=[{id:"card",name:"신용/체크카드",description:"즉시 결제",icon:w,fee:"무료"},{id:"bank",name:"계좌이체",description:"1-2일 소요",icon:B,fee:"무료"},{id:"mobile",name:"휴대폰 결제",description:"통신비 합산",icon:P,fee:"2.5%"},{id:"wallet",name:"디지털 월렛",description:"PayPal, Apple Pay 등",icon:ae,fee:"1.5%"}];return e.jsxs(m,{className:"w-full max-w-md",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(w,{className:"h-5 w-5"}),"결제 방법 선택"]}),e.jsx(u,{children:"원하시는 결제 방법을 선택해주세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:r,onValueChange:l,children:e.jsx("div",{className:"space-y-3",children:i.map(s=>{const d=s.icon;return e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{value:s.id,id:s.id}),e.jsxs(a,{htmlFor:s.id,className:"flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted",children:[e.jsx(d,{className:"h-5 w-5 text-muted-foreground"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:s.name}),e.jsx(b,{variant:s.fee==="무료"?"default":"secondary",children:s.fee})]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:s.description})]})]})]})},s.id)})})}),e.jsx(o,{className:"my-4"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["선택된 결제 방법: ",e.jsx("strong",{children:i.find(s=>s.id===r)?.name})]})]})]})}},v={render:()=>{const[r,l]=c.useState("standard"),i=[{id:"standard",name:"일반 배송",time:"3-5일",price:"무료",description:"주문 후 3-5일 내 배송",icon:S},{id:"express",name:"빠른 배송",time:"1-2일",price:"3,000원",description:"주문 후 1-2일 내 배송",icon:k},{id:"same-day",name:"당일 배송",time:"오늘",price:"5,000원",description:"오후 6시 이전 주문 시 당일 배송",icon:A}];return e.jsxs(m,{className:"w-full max-w-md",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-5 w-5"}),"배송 옵션"]}),e.jsx(u,{children:"배송 방법을 선택해주세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:r,onValueChange:l,children:e.jsx("div",{className:"space-y-3",children:i.map(s=>{const d=s.icon;return e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{value:s.id,id:s.id}),e.jsxs(a,{htmlFor:s.id,className:"flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-lg border transition-colors hover:bg-muted",children:[e.jsx(d,{className:"h-6 w-6 text-muted-foreground"}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:s.name}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"font-medium",children:s.price}),e.jsx("div",{className:"text-sm text-muted-foreground",children:s.time})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:s.description})]})]})]})},s.id)})})}),e.jsx(o,{className:"my-4"}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"선택된 배송:"}),e.jsx("span",{className:"font-medium",children:i.find(s=>s.id===r)?.name})]})]})]})}},g={render:()=>{const[r,l]=c.useState("weekly"),[i,s]=c.useState("important");return e.jsx("div",{className:"w-full max-w-lg space-y-6",children:e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(D,{className:"h-5 w-5"}),"알림 설정"]}),e.jsx(u,{children:"받고 싶은 알림의 빈도와 유형을 설정하세요"})]}),e.jsxs(h,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(I,{className:"h-4 w-4"}),"이메일 알림 빈도"]}),e.jsx(n,{value:r,onValueChange:l,children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"never",id:"email-never"}),e.jsxs(a,{htmlFor:"email-never",className:"flex items-center gap-2",children:[e.jsx(z,{className:"h-4 w-4 text-muted-foreground"}),"받지 않음"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"daily",id:"email-daily"}),e.jsxs(a,{htmlFor:"email-daily",className:"flex items-center gap-2",children:[e.jsx(H,{className:"h-4 w-4 text-muted-foreground"}),"매일"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"weekly",id:"email-weekly"}),e.jsxs(a,{htmlFor:"email-weekly",className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-4 w-4 text-muted-foreground"}),"주간 요약"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"monthly",id:"email-monthly"}),e.jsxs(a,{htmlFor:"email-monthly",className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4 text-muted-foreground"}),"월간 요약"]})]})]})})]}),e.jsx(o,{}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[e.jsx(P,{className:"h-4 w-4"}),"푸시 알림"]}),e.jsx(n,{value:i,onValueChange:s,children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"all",id:"push-all"}),e.jsxs(a,{htmlFor:"push-all",className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-4 w-4 text-muted-foreground"}),"모든 알림"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"important",id:"push-important"}),e.jsxs(a,{htmlFor:"push-important",className:"flex items-center gap-2",children:[e.jsx(U,{className:"h-4 w-4 text-muted-foreground"}),"중요한 알림만"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"mentions",id:"push-mentions"}),e.jsxs(a,{htmlFor:"push-mentions",className:"flex items-center gap-2",children:[e.jsx(L,{className:"h-4 w-4 text-muted-foreground"}),"멘션될 때만"]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"none",id:"push-none"}),e.jsxs(a,{htmlFor:"push-none",className:"flex items-center gap-2",children:[e.jsx(W,{className:"h-4 w-4 text-muted-foreground"}),"받지 않음"]})]})]})})]}),e.jsx(o,{}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"이메일 빈도:"}),e.jsx("span",{className:"font-medium capitalize",children:r})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"푸시 알림:"}),e.jsx("span",{className:"font-medium capitalize",children:i})]})]})]})]})})}},j={render:()=>{const[r,l]=c.useState("pro"),i=[{id:"free",name:"무료",price:"0원",period:"월",features:["기본 기능","5GB 저장공간","이메일 지원"],icon:X,popular:!1},{id:"pro",name:"프로",price:"15,000원",period:"월",features:["모든 기능","100GB 저장공간","우선 지원","고급 분석"],icon:G,popular:!0},{id:"team",name:"팀",price:"45,000원",period:"월",features:["팀 기능","무제한 저장공간","24/7 지원","팀 관리","API 접근"],icon:L,popular:!1}];return e.jsxs(m,{className:"w-full max-w-2xl",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(G,{className:"h-5 w-5"}),"구독 플랜 선택"]}),e.jsx(u,{children:"필요에 맞는 플랜을 선택하세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:r,onValueChange:l,children:e.jsx("div",{className:"grid gap-4",children:i.map(s=>{const d=s.icon;return e.jsxs("div",{className:"relative",children:[s.popular&&e.jsx(b,{className:"absolute -top-2 left-4 z-10 bg-blue-600",children:"인기"}),e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx(t,{value:s.id,id:s.id,className:"mt-1"}),e.jsxs(a,{htmlFor:s.id,className:`flex-1 cursor-pointer p-4 rounded-lg border transition-colors hover:bg-muted ${s.popular?"border-blue-300 bg-blue-50":""}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d,{className:"h-5 w-5 text-muted-foreground"}),e.jsx("span",{className:"font-semibold text-lg",children:s.name})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:"text-2xl font-bold",children:s.price}),e.jsxs("span",{className:"text-muted-foreground",children:["/",s.period]})]})]}),e.jsx("ul",{className:"space-y-1 text-sm text-muted-foreground",children:s.features.map((T,V)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx($,{className:"h-4 w-4 text-green-500 flex-shrink-0"}),T]},V))})]})]})]},s.id)})})}),e.jsx(o,{className:"my-4"}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"text-sm text-muted-foreground",children:["선택된 플랜: ",e.jsx("strong",{children:i.find(s=>s.id===r)?.name})]}),e.jsxs(M,{children:[e.jsx(Z,{className:"mr-2 h-4 w-4"}),"구독하기"]})]})]})]})}},y={render:()=>{const[r,l]=c.useState("image"),i=[{id:"image",name:"이미지",extensions:"JPG, PNG, GIF, WebP",maxSize:"10MB",icon:_,color:"text-green-600"},{id:"document",name:"문서",extensions:"PDF, DOC, DOCX, TXT",maxSize:"25MB",icon:F,color:"text-blue-600"},{id:"video",name:"비디오",extensions:"MP4, AVI, MOV, WebM",maxSize:"100MB",icon:J,color:"text-purple-600"},{id:"audio",name:"오디오",extensions:"MP3, WAV, AAC, OGG",maxSize:"50MB",icon:K,color:"text-orange-600"},{id:"archive",name:"압축파일",extensions:"ZIP, RAR, 7Z, TAR",maxSize:"200MB",icon:Q,color:"text-gray-600"}];return e.jsxs(m,{className:"w-full max-w-lg",children:[e.jsxs(p,{children:[e.jsxs(x,{className:"flex items-center gap-2",children:[e.jsx(F,{className:"h-5 w-5"}),"업로드 파일 유형"]}),e.jsx(u,{children:"업로드할 파일의 유형을 선택하세요"})]}),e.jsxs(h,{children:[e.jsx(n,{value:r,onValueChange:l,children:e.jsx("div",{className:"space-y-3",children:i.map(s=>{const d=s.icon;return e.jsx("div",{children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(t,{value:s.id,id:s.id}),e.jsxs(a,{htmlFor:s.id,className:"flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted",children:[e.jsx(d,{className:`h-5 w-5 ${s.color}`}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-medium",children:s.name}),e.jsxs(b,{variant:"outline",children:["최대 ",s.maxSize]})]}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-1",children:["지원 형식: ",s.extensions]})]})]})]})},s.id)})})}),e.jsx(o,{className:"my-4"}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["선택된 파일 유형: ",e.jsx("strong",{children:i.find(s=>s.id===r)?.name})]})]})]})}},C={render:()=>{const[r,l]=c.useState("option2");return e.jsxs("div",{className:"w-full max-w-md space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"접근성 기능"}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsx("li",{children:"• 키보드 내비게이션 지원 (방향키, Space, Enter)"}),e.jsx("li",{children:"• 스크린 리더 호환성 및 ARIA 레이블"}),e.jsx("li",{children:"• 포커스 표시 및 관리"}),e.jsx("li",{children:"• 적절한 색상 대비"}),e.jsx("li",{children:"• 그룹 및 항목 역할 정의"})]})]}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(x,{children:"접근성 라디오 그룹 데모"}),e.jsx(u,{children:"완전한 키보드 접근성을 지원하는 라디오 버튼 그룹"})]}),e.jsxs(h,{children:[e.jsxs("fieldset",{className:"space-y-4",children:[e.jsx("legend",{className:"font-medium mb-3",children:"선호하는 연락 방법을 선택하세요"}),e.jsx(n,{value:r,onValueChange:l,"aria-label":"연락 방법 선택",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"email",id:"contact-email","aria-describedby":"email-desc"}),e.jsxs(a,{htmlFor:"contact-email",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(I,{className:"h-4 w-4 text-muted-foreground"}),"이메일"]})]}),e.jsx("p",{id:"email-desc",className:"text-sm text-muted-foreground ml-6",children:"이메일로 연락을 받습니다. 응답 시간: 24시간 이내"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"phone",id:"contact-phone","aria-describedby":"phone-desc"}),e.jsxs(a,{htmlFor:"contact-phone",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(Y,{className:"h-4 w-4 text-muted-foreground"}),"전화"]})]}),e.jsx("p",{id:"phone-desc",className:"text-sm text-muted-foreground ml-6",children:"전화로 연락을 받습니다. 응답 시간: 1시간 이내"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"message",id:"contact-message","aria-describedby":"message-desc"}),e.jsxs(a,{htmlFor:"contact-message",className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(ee,{className:"h-4 w-4 text-muted-foreground"}),"문자 메시지"]})]}),e.jsx("p",{id:"message-desc",className:"text-sm text-muted-foreground ml-6",children:"SMS로 연락을 받습니다. 응답 시간: 30분 이내"})]})})]}),e.jsx(o,{className:"my-4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("strong",{children:"선택된 연락 방법:"})," ",r||"선택 안함"]}),e.jsx("div",{className:"text-xs text-muted-foreground p-2 bg-muted rounded",children:"💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 옵션 선택, Space로 선택 확정"})]})]})]})]})},parameters:{docs:{description:{story:"완전한 키보드 접근성과 스크린 리더 지원을 제공하는 라디오 그룹 데모입니다."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'option1'
  },
  render: args => <RadioGroup defaultValue={args.defaultValue}>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option1" id="option1" />\r
        <Label htmlFor="option1">옵션 1</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option2" id="option2" />\r
        <Label htmlFor="option2">옵션 2</Label>\r
      </div>\r
      <div className="flex items-center space-x-2">\r
        <RadioGroupItem value="option3" id="option3" />\r
        <Label htmlFor="option3">옵션 3</Label>\r
      </div>\r
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
    return <Card className="w-full max-w-md">\r
        <CardHeader>\r
          <CardTitle className="flex items-center gap-2">\r
            <CreditCard className="h-5 w-5" />\r
            결제 방법 선택\r
          </CardTitle>\r
          <CardDescription>\r
            원하시는 결제 방법을 선택해주세요\r
          </CardDescription>\r
        </CardHeader>\r
        <CardContent>\r
          <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>\r
            <div className="space-y-3">\r
              {paymentMethods.map(method => {
              const IconComponent = method.icon;
              return <div key={method.id}>\r
                    <div className="flex items-center space-x-3">\r
                      <RadioGroupItem value={method.id} id={method.id} />\r
                      <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted">\r
                        <IconComponent className="h-5 w-5 text-muted-foreground" />\r
                        <div className="flex-1">\r
                          <div className="flex items-center justify-between">\r
                            <span className="font-medium">{method.name}</span>\r
                            <Badge variant={method.fee === '무료' ? 'default' : 'secondary'}>\r
                              {method.fee}\r
                            </Badge>\r
                          </div>\r
                          <p className="text-sm text-muted-foreground mt-1">\r
                            {method.description}\r
                          </p>\r
                        </div>\r
                      </Label>\r
                    </div>\r
                  </div>;
            })}\r
            </div>\r
          </RadioGroup>\r
          \r
          <Separator className="my-4" />\r
          \r
          <div className="text-sm text-muted-foreground">\r
            선택된 결제 방법: <strong>\r
              {paymentMethods.find(m => m.id === selectedPayment)?.name}\r
            </strong>\r
          </div>\r
        </CardContent>\r
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
    return <Card className="w-full max-w-md">\r
        <CardHeader>\r
          <CardTitle className="flex items-center gap-2">\r
            <Truck className="h-5 w-5" />\r
            배송 옵션\r
          </CardTitle>\r
          <CardDescription>\r
            배송 방법을 선택해주세요\r
          </CardDescription>\r
        </CardHeader>\r
        <CardContent>\r
          <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>\r
            <div className="space-y-3">\r
              {shippingOptions.map(option => {
              const IconComponent = option.icon;
              return <div key={option.id}>\r
                    <div className="flex items-center space-x-3">\r
                      <RadioGroupItem value={option.id} id={option.id} />\r
                      <Label htmlFor={option.id} className="flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-lg border transition-colors hover:bg-muted">\r
                        <IconComponent className="h-6 w-6 text-muted-foreground" />\r
                        <div className="flex-1">\r
                          <div className="flex items-center justify-between">\r
                            <span className="font-medium">{option.name}</span>\r
                            <div className="text-right">\r
                              <div className="font-medium">{option.price}</div>\r
                              <div className="text-sm text-muted-foreground">{option.time}</div>\r
                            </div>\r
                          </div>\r
                          <p className="text-sm text-muted-foreground mt-1">\r
                            {option.description}\r
                          </p>\r
                        </div>\r
                      </Label>\r
                    </div>\r
                  </div>;
            })}\r
            </div>\r
          </RadioGroup>\r
          \r
          <Separator className="my-4" />\r
          \r
          <div className="flex justify-between text-sm">\r
            <span>선택된 배송:</span>\r
            <span className="font-medium">\r
              {shippingOptions.find(o => o.id === selectedShipping)?.name}\r
            </span>\r
          </div>\r
        </CardContent>\r
      </Card>;
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [emailFrequency, setEmailFrequency] = useState('weekly');
    const [pushNotifications, setPushNotifications] = useState('important');
    return <div className="w-full max-w-lg space-y-6">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Bell className="h-5 w-5" />\r
              알림 설정\r
            </CardTitle>\r
            <CardDescription>\r
              받고 싶은 알림의 빈도와 유형을 설정하세요\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            <div>\r
              <h4 className="font-medium mb-3 flex items-center gap-2">\r
                <Mail className="h-4 w-4" />\r
                이메일 알림 빈도\r
              </h4>\r
              <RadioGroup value={emailFrequency} onValueChange={setEmailFrequency}>\r
                <div className="space-y-3">\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="never" id="email-never" />\r
                    <Label htmlFor="email-never" className="flex items-center gap-2">\r
                      <EyeOff className="h-4 w-4 text-muted-foreground" />\r
                      받지 않음\r
                    </Label>\r
                  </div>\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="daily" id="email-daily" />\r
                    <Label htmlFor="email-daily" className="flex items-center gap-2">\r
                      <Sun className="h-4 w-4 text-muted-foreground" />\r
                      매일\r
                    </Label>\r
                  </div>\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="weekly" id="email-weekly" />\r
                    <Label htmlFor="email-weekly" className="flex items-center gap-2">\r
                      <Calendar className="h-4 w-4 text-muted-foreground" />\r
                      주간 요약\r
                    </Label>\r
                  </div>\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="monthly" id="email-monthly" />\r
                    <Label htmlFor="email-monthly" className="flex items-center gap-2">\r
                      <Clock className="h-4 w-4 text-muted-foreground" />\r
                      월간 요약\r
                    </Label>\r
                  </div>\r
                </div>\r
              </RadioGroup>\r
            </div>\r
            \r
            <Separator />\r
            \r
            <div>\r
              <h4 className="font-medium mb-3 flex items-center gap-2">\r
                <Smartphone className="h-4 w-4" />\r
                푸시 알림\r
              </h4>\r
              <RadioGroup value={pushNotifications} onValueChange={setPushNotifications}>\r
                <div className="space-y-3">\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="all" id="push-all" />\r
                    <Label htmlFor="push-all" className="flex items-center gap-2">\r
                      <Volume2 className="h-4 w-4 text-muted-foreground" />\r
                      모든 알림\r
                    </Label>\r
                  </div>\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="important" id="push-important" />\r
                    <Label htmlFor="push-important" className="flex items-center gap-2">\r
                      <Star className="h-4 w-4 text-muted-foreground" />\r
                      중요한 알림만\r
                    </Label>\r
                  </div>\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="mentions" id="push-mentions" />\r
                    <Label htmlFor="push-mentions" className="flex items-center gap-2">\r
                      <Users className="h-4 w-4 text-muted-foreground" />\r
                      멘션될 때만\r
                    </Label>\r
                  </div>\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="none" id="push-none" />\r
                    <Label htmlFor="push-none" className="flex items-center gap-2">\r
                      <VolumeX className="h-4 w-4 text-muted-foreground" />\r
                      받지 않음\r
                    </Label>\r
                  </div>\r
                </div>\r
              </RadioGroup>\r
            </div>\r
            \r
            <Separator />\r
            \r
            <div className="space-y-2 text-sm">\r
              <div className="flex justify-between">\r
                <span>이메일 빈도:</span>\r
                <span className="font-medium capitalize">{emailFrequency}</span>\r
              </div>\r
              <div className="flex justify-between">\r
                <span>푸시 알림:</span>\r
                <span className="font-medium capitalize">{pushNotifications}</span>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
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
    return <Card className="w-full max-w-2xl">\r
        <CardHeader>\r
          <CardTitle className="flex items-center gap-2">\r
            <Crown className="h-5 w-5" />\r
            구독 플랜 선택\r
          </CardTitle>\r
          <CardDescription>\r
            필요에 맞는 플랜을 선택하세요\r
          </CardDescription>\r
        </CardHeader>\r
        <CardContent>\r
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>\r
            <div className="grid gap-4">\r
              {plans.map(plan => {
              const IconComponent = plan.icon;
              return <div key={plan.id} className="relative">\r
                    {plan.popular && <Badge className="absolute -top-2 left-4 z-10 bg-blue-600">\r
                        인기\r
                      </Badge>}\r
                    <div className="flex items-start space-x-3">\r
                      <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />\r
                      <Label htmlFor={plan.id} className={\`flex-1 cursor-pointer p-4 rounded-lg border transition-colors hover:bg-muted \${plan.popular ? 'border-blue-300 bg-blue-50' : ''}\`}>\r
                        <div className="flex items-center justify-between mb-2">\r
                          <div className="flex items-center gap-2">\r
                            <IconComponent className="h-5 w-5 text-muted-foreground" />\r
                            <span className="font-semibold text-lg">{plan.name}</span>\r
                          </div>\r
                          <div className="text-right">\r
                            <span className="text-2xl font-bold">{plan.price}</span>\r
                            <span className="text-muted-foreground">/{plan.period}</span>\r
                          </div>\r
                        </div>\r
                        \r
                        <ul className="space-y-1 text-sm text-muted-foreground">\r
                          {plan.features.map((feature, index) => <li key={index} className="flex items-center gap-2">\r
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />\r
                              {feature}\r
                            </li>)}\r
                        </ul>\r
                      </Label>\r
                    </div>\r
                  </div>;
            })}\r
            </div>\r
          </RadioGroup>\r
          \r
          <Separator className="my-4" />\r
          \r
          <div className="flex justify-between items-center">\r
            <div className="text-sm text-muted-foreground">\r
              선택된 플랜: <strong>\r
                {plans.find(p => p.id === selectedPlan)?.name}\r
              </strong>\r
            </div>\r
            <Button>\r
              <DollarSign className="mr-2 h-4 w-4" />\r
              구독하기\r
            </Button>\r
          </div>\r
        </CardContent>\r
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
    return <Card className="w-full max-w-lg">\r
        <CardHeader>\r
          <CardTitle className="flex items-center gap-2">\r
            <FileText className="h-5 w-5" />\r
            업로드 파일 유형\r
          </CardTitle>\r
          <CardDescription>\r
            업로드할 파일의 유형을 선택하세요\r
          </CardDescription>\r
        </CardHeader>\r
        <CardContent>\r
          <RadioGroup value={selectedType} onValueChange={setSelectedType}>\r
            <div className="space-y-3">\r
              {fileTypes.map(type => {
              const IconComponent = type.icon;
              return <div key={type.id}>\r
                    <div className="flex items-center space-x-3">\r
                      <RadioGroupItem value={type.id} id={type.id} />\r
                      <Label htmlFor={type.id} className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted">\r
                        <IconComponent className={\`h-5 w-5 \${type.color}\`} />\r
                        <div className="flex-1">\r
                          <div className="flex items-center justify-between">\r
                            <span className="font-medium">{type.name}</span>\r
                            <Badge variant="outline">\r
                              최대 {type.maxSize}\r
                            </Badge>\r
                          </div>\r
                          <p className="text-sm text-muted-foreground mt-1">\r
                            지원 형식: {type.extensions}\r
                          </p>\r
                        </div>\r
                      </Label>\r
                    </div>\r
                  </div>;
            })}\r
            </div>\r
          </RadioGroup>\r
          \r
          <Separator className="my-4" />\r
          \r
          <div className="text-sm text-muted-foreground">\r
            선택된 파일 유형: <strong>\r
              {fileTypes.find(t => t.id === selectedType)?.name}\r
            </strong>\r
          </div>\r
        </CardContent>\r
      </Card>;
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option2');
    return <div className="w-full max-w-md space-y-6">\r
        <div className="p-4 border rounded-lg">\r
          <h3 className="font-semibold mb-2">접근성 기능</h3>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>• 키보드 내비게이션 지원 (방향키, Space, Enter)</li>\r
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>\r
            <li>• 포커스 표시 및 관리</li>\r
            <li>• 적절한 색상 대비</li>\r
            <li>• 그룹 및 항목 역할 정의</li>\r
          </ul>\r
        </div>\r
        \r
        <Card>\r
          <CardHeader>\r
            <CardTitle>접근성 라디오 그룹 데모</CardTitle>\r
            <CardDescription>\r
              완전한 키보드 접근성을 지원하는 라디오 버튼 그룹\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <fieldset className="space-y-4">\r
              <legend className="font-medium mb-3">\r
                선호하는 연락 방법을 선택하세요\r
              </legend>\r
              \r
              <RadioGroup value={value} onValueChange={setValue} aria-label="연락 방법 선택">\r
                <div className="space-y-3">\r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="email" id="contact-email" aria-describedby="email-desc" />\r
                    <Label htmlFor="contact-email" className="flex items-center gap-2 cursor-pointer">\r
                      <Mail className="h-4 w-4 text-muted-foreground" />\r
                      이메일\r
                    </Label>\r
                  </div>\r
                  <p id="email-desc" className="text-sm text-muted-foreground ml-6">\r
                    이메일로 연락을 받습니다. 응답 시간: 24시간 이내\r
                  </p>\r
                  \r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="phone" id="contact-phone" aria-describedby="phone-desc" />\r
                    <Label htmlFor="contact-phone" className="flex items-center gap-2 cursor-pointer">\r
                      <Phone className="h-4 w-4 text-muted-foreground" />\r
                      전화\r
                    </Label>\r
                  </div>\r
                  <p id="phone-desc" className="text-sm text-muted-foreground ml-6">\r
                    전화로 연락을 받습니다. 응답 시간: 1시간 이내\r
                  </p>\r
                  \r
                  <div className="flex items-center space-x-2">\r
                    <RadioGroupItem value="message" id="contact-message" aria-describedby="message-desc" />\r
                    <Label htmlFor="contact-message" className="flex items-center gap-2 cursor-pointer">\r
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />\r
                      문자 메시지\r
                    </Label>\r
                  </div>\r
                  <p id="message-desc" className="text-sm text-muted-foreground ml-6">\r
                    SMS로 연락을 받습니다. 응답 시간: 30분 이내\r
                  </p>\r
                </div>\r
              </RadioGroup>\r
            </fieldset>\r
            \r
            <Separator className="my-4" />\r
            \r
            <div className="space-y-2">\r
              <div className="text-sm">\r
                <strong>선택된 연락 방법:</strong> {value || '선택 안함'}\r
              </div>\r
              \r
              <div className="text-xs text-muted-foreground p-2 bg-muted rounded">\r
                💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 옵션 선택, Space로 선택 확정\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 제공하는 라디오 그룹 데모입니다.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};export{C as AccessibilityDemo,f as Default,y as FileTypeSelector,g as NotificationSettings,N as PaymentMethods,v as ShippingOptions,j as SubscriptionPlans,rs as default};
