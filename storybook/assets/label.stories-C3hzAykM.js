import{j as e}from"./jsx-runtime-BNwwtYSP.js";import{e as r}from"./iframe-DnvNSyRk.js";import{L as s}from"./label-LWmktt5-.js";import{I as a}from"./input-DdcI9H5i.js";import{B as n}from"./button-B21MMDDv.js";import{C as i}from"./checkbox--GzQBjGt.js";import{R as b,a as t}from"./radio-group-CaGNqtFC.js";import{S as F}from"./switch-DivVwrUC.js";import{C as w}from"./circle-question-mark-CIW1Gci3.js";import{I}from"./info-DhLim-t2.js";import{E as k}from"./external-link-C_9Ph8lp.js";import{C as q}from"./circle-check-big-1MOwFRF8.js";import{C}from"./circle-alert-CmKiGnlk.js";import{U as S}from"./upload-BmF7zooh.js";import{C as R}from"./calendar-DpMnRCdR.js";import{M as E}from"./mail-CNEE6sMD.js";import{P as D}from"./phone-DoI7YtNT.js";import{M as B}from"./map-pin-EA-3Uu_Q.js";import{U as M}from"./user-CYhr768t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-cZtZ0fDU.js";import"./index-BQek2qpz.js";import"./index-B9uyLz2W.js";import"./utils-CBfrqCZ4.js";import"./index-CdJFUDDL.js";import"./index-DJjIRJmQ.js";import"./index-mE1rREmL.js";import"./index-4O7hDl4s.js";import"./index-DViAr5bX.js";import"./index-42gIw9X5.js";import"./index-Bk_nZ_Q6.js";import"./check-Dpbpba2R.js";import"./createLucideIcon-DkJCW-cg.js";import"./index-Bnml78I7.js";import"./index-hmAnMFt4.js";import"./index-u8QdvT0s.js";import"./index-CT42HFLf.js";import"./index-DrvUYCz4.js";import"./circle-RZWLHcYG.js";const ye={title:"UI/Forms/Label",component:s,parameters:{layout:"centered",docs:{description:{component:`
폼 요소에 라벨을 제공하는 Label 컴포넌트입니다. 접근성을 위해 필수적이며, 사용자 경험을 향상시킵니다.

## 주요 기능
- **접근성**: 폼 요소와 적절한 연결로 스크린 리더 지원
- **상호작용**: 라벨 클릭 시 연결된 폼 요소에 포커스
- **시각적 표시**: 필수 필드, 상태 표시 등 다양한 시각적 힌트
- **반응형**: 모든 화면 크기에서 적절한 레이아웃
- **유연한 스타일링**: 다양한 크기와 색상 지원
- **도움말 통합**: 추가 설명과 힌트 표시

## 사용법
\`\`\`tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// 기본 사용법
<div className="space-y-2">
  <Label htmlFor="email">이메일</Label>
  <Input id="email" type="email" />
</div>

// 필수 필드 표시
<Label htmlFor="name">
  이름 <span className="text-red-500">*</span>
</Label>

// 도움말과 함께
<Label htmlFor="password" className="flex items-center gap-2">
  비밀번호
  <HelpCircle className="h-4 w-4 text-muted-foreground" />
</Label>
\`\`\`

## Props
- \`htmlFor\`: 연결할 폼 요소의 id (필수)
- \`children\`: 라벨 텍스트 또는 컨텐츠
- \`className\`: 추가 CSS 클래스
- \`required\`: 필수 필드 표시 여부
- 기타 HTML label 요소의 모든 속성

## 접근성 가이드라인
- **htmlFor 속성**: 반드시 연결할 요소의 id와 일치해야 함
- **명확한 텍스트**: 폼 요소의 목적을 명확히 설명
- **필수 표시**: 시각적 표시와 함께 aria-required 사용
- **도움말 연결**: aria-describedby로 추가 설명 연결
- **적절한 위치**: 폼 요소 위 또는 왼쪽에 배치

## 스타일 변형
- **기본**: 표준 폰트 크기와 색상
- **소형**: 더 작은 폰트 크기 (sm)
- **대형**: 더 큰 폰트 크기 (lg)
- **필수**: 빨간색 별표(*)와 함께
- **비활성화**: 회색 처리
- **에러**: 빨간색 강조
- **성공**: 초록색 강조

## 모범 사례
- 모든 Input, Select, Textarea에 Label 제공
- 명확하고 간결한 라벨 텍스트 사용
- 필수 필드에는 시각적 표시 추가
- 복잡한 필드에는 도움말 텍스트 포함
- 일관된 라벨 스타일 유지
        `}}},tags:["autodocs"],argTypes:{htmlFor:{control:"text",description:"연결할 폼 요소의 id"},children:{control:"text",description:"라벨 텍스트"},className:{control:"text",description:"추가 CSS 클래스"}},render:l=>e.jsxs("div",{className:"w-[300px] space-y-2",children:[e.jsx(s,{...l}),e.jsx(a,{id:l.htmlFor,placeholder:"연결된 입력 필드"})]})},d={args:{htmlFor:"default-input",children:"기본 라벨"},parameters:{docs:{description:{story:"기본 Label 컴포넌트입니다. htmlFor 속성으로 입력 필드와 연결되어 접근성을 제공합니다."}}}},c={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"username",children:"사용자명"}),e.jsx(a,{id:"username",placeholder:"사용자명을 입력하세요"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"email",children:"이메일 주소"}),e.jsx(a,{id:"email",type:"email",placeholder:"name@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"password",children:"비밀번호"}),e.jsx(a,{id:"password",type:"password",placeholder:"••••••••"})]})]}),parameters:{docs:{description:{story:"Input과 함께 사용하는 일반적인 Label 예시입니다. 각 라벨은 해당 입력 필드와 올바르게 연결됩니다."}}}},m={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"required-name",children:["이름 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(a,{id:"required-name",required:!0,placeholder:"필수 입력 필드"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"required-email",className:"flex items-center gap-2",children:["이메일 주소",e.jsx("span",{className:"text-red-500","aria-label":"필수",children:"*"})]}),e.jsx(a,{id:"required-email",type:"email",required:!0,placeholder:"name@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"optional-phone",children:["전화번호",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(선택사항)"})]}),e.jsx(a,{id:"optional-phone",type:"tel",placeholder:"010-1234-5678"})]}),e.jsx("div",{className:"space-y-2",children:e.jsxs(s,{htmlFor:"required-terms",className:"flex items-center space-x-2 font-normal",children:[e.jsx(i,{id:"required-terms",required:!0}),e.jsxs("span",{children:["이용약관에 동의합니다 ",e.jsx("span",{className:"text-red-500",children:"*"})]})]})})]}),parameters:{docs:{description:{story:"필수 필드와 선택 필드를 구분하여 표시하는 Label 예시입니다. 시각적 표시와 함께 접근성을 고려합니다."}}}},o={render:()=>e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"username-help",className:"flex items-center gap-2",children:["사용자명",e.jsx(w,{className:"h-4 w-4 text-muted-foreground"})]}),e.jsx(a,{id:"username-help",placeholder:"3-20자의 영문, 숫자","aria-describedby":"username-description"}),e.jsx("p",{id:"username-description",className:"text-sm text-muted-foreground",children:"3자 이상 20자 이하의 영문자와 숫자만 사용 가능합니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"password-help",className:"flex items-center gap-2",children:["비밀번호",e.jsx(I,{className:"h-4 w-4 text-blue-500"})]}),e.jsx(a,{id:"password-help",type:"password",placeholder:"안전한 비밀번호","aria-describedby":"password-requirements"}),e.jsxs("div",{id:"password-requirements",className:"text-sm text-muted-foreground space-y-1",children:[e.jsx("p",{children:"비밀번호는 다음 조건을 만족해야 합니다:"}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsx("li",{children:"최소 8자 이상"}),e.jsx("li",{children:"대문자, 소문자, 숫자, 특수문자 각 1개 이상"}),e.jsx("li",{children:"연속된 문자나 숫자 사용 금지"})]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"api-key",className:"flex items-center gap-2",children:["API 키",e.jsx(n,{variant:"ghost",size:"sm",className:"h-auto p-0 text-blue-500",children:e.jsx(k,{className:"h-4 w-4"})})]}),e.jsx(a,{id:"api-key",placeholder:"sk-...","aria-describedby":"api-key-help"}),e.jsxs("p",{id:"api-key-help",className:"text-sm text-muted-foreground",children:["개발자 콘솔에서 API 키를 생성할 수 있습니다.",e.jsx(n,{variant:"link",className:"h-auto p-0 text-sm",children:"자세히 알아보기"})]})]})]}),parameters:{docs:{description:{story:"도움말 텍스트와 아이콘이 포함된 Label 예시입니다. 복잡한 입력 요구사항을 명확히 안내합니다."}}}},p={render:()=>{const[l,v]=r.useState({validEmail:"user@example.com",invalidEmail:"invalid-email",emptyRequired:"",successField:"올바른 값"});return e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"valid-field",className:"flex items-center gap-2 text-green-700",children:[e.jsx(q,{className:"h-4 w-4"}),"유효한 이메일"]}),e.jsx(a,{id:"valid-field",type:"email",value:l.validEmail,className:"border-green-500 focus:border-green-500",readOnly:!0}),e.jsx("p",{className:"text-sm text-green-600",children:"올바른 이메일 형식입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"invalid-field",className:"flex items-center gap-2 text-red-700",children:[e.jsx(C,{className:"h-4 w-4"}),"잘못된 이메일"]}),e.jsx(a,{id:"invalid-field",type:"email",value:l.invalidEmail,className:"border-red-500 focus:border-red-500","aria-invalid":"true","aria-describedby":"invalid-error"}),e.jsx("p",{id:"invalid-error",className:"text-sm text-red-600",children:"올바른 이메일 형식이 아닙니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"empty-required",className:"flex items-center gap-2",children:["필수 입력 필드",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(a,{id:"empty-required",value:l.emptyRequired,className:l.emptyRequired?"border-green-500":"border-red-500",placeholder:"필수 입력 필드"}),!l.emptyRequired&&e.jsx("p",{className:"text-sm text-red-600",role:"alert",children:"이 필드는 필수 입력 항목입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"disabled-field",className:"text-muted-foreground",children:"비활성화된 필드"}),e.jsx(a,{id:"disabled-field",disabled:!0,value:"수정할 수 없는 값"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"현재 수정할 수 없는 상태입니다."})]})]})},parameters:{docs:{description:{story:"다양한 검증 상태에 따른 Label 스타일을 보여줍니다. 성공, 에러, 필수, 비활성화 상태를 구분합니다."}}}},x={render:()=>{const[l,v]=r.useState("option1"),[f,j]=r.useState(!1),[y,g]=r.useState(!0);return e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{className:"text-base font-medium",children:"선호하는 연락 방법"}),e.jsxs(b,{value:l,onValueChange:v,children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"email",id:"contact-email"}),e.jsx(s,{htmlFor:"contact-email",className:"font-normal",children:"이메일"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"phone",id:"contact-phone"}),e.jsx(s,{htmlFor:"contact-phone",className:"font-normal",children:"전화"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"sms",id:"contact-sms"}),e.jsx(s,{htmlFor:"contact-sms",className:"font-normal",children:"문자 메시지"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{className:"text-base font-medium",children:"알림 설정"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{id:"notifications",checked:f,onCheckedChange:L=>j(L===!0)}),e.jsx(s,{htmlFor:"notifications",className:"font-normal",children:"이메일 알림 받기"})]}),e.jsx("p",{className:"text-sm text-muted-foreground ml-6",children:"새로운 메시지와 업데이트를 이메일로 받아보세요."})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{className:"text-base font-medium",children:"기능 설정"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{htmlFor:"auto-save",className:"font-normal",children:"자동 저장"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"변경사항을 자동으로 저장합니다."})]}),e.jsx(F,{id:"auto-save",checked:y,onCheckedChange:g})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"file-upload",className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-4 w-4"}),"파일 업로드"]}),e.jsx(a,{id:"file-upload",type:"file",className:"cursor-pointer",accept:".jpg,.jpeg,.png,.pdf"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"JPG, PNG, PDF 파일만 업로드 가능합니다. (최대 10MB)"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"birth-date",className:"flex items-center gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),"생년월일"]}),e.jsx(a,{id:"birth-date",type:"date"})]})]})},parameters:{docs:{description:{story:"다양한 폼 요소와 함께 사용되는 Label 예시입니다. Radio, Checkbox, Switch, File, Date 입력 등을 포함합니다."}}}},h={render:()=>e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"small-input",className:"text-xs",children:"소형 라벨 (text-xs)"}),e.jsx(a,{id:"small-input",placeholder:"작은 입력 필드",className:"h-8 text-sm"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"default-input",className:"text-sm",children:"기본 라벨 (text-sm)"}),e.jsx(a,{id:"default-input",placeholder:"기본 입력 필드"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"medium-input",className:"text-base",children:"중형 라벨 (text-base)"}),e.jsx(a,{id:"medium-input",placeholder:"중형 입력 필드",className:"h-12"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"large-input",className:"text-lg font-medium",children:"대형 라벨 (text-lg)"}),e.jsx(a,{id:"large-input",placeholder:"큰 입력 필드",className:"h-14 text-lg"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"xl-input",className:"text-xl font-semibold",children:"특대 라벨 (text-xl)"}),e.jsx(a,{id:"xl-input",placeholder:"특대 입력 필드",className:"h-16 text-xl"})]})]}),parameters:{docs:{description:{story:"다양한 크기의 Label과 그에 맞는 Input 크기를 보여줍니다. 일관된 시각적 계층을 유지합니다."}}}},u={render:()=>{const[l,v]=r.useState({title:"",firstName:"",lastName:"",email:"",confirmEmail:"",phone:"",address:"",city:"",zipCode:"",country:"",newsletter:!1,terms:!1});return e.jsx("div",{className:"space-y-8 w-[600px]",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"회원가입"}),e.jsx("p",{className:"text-muted-foreground",children:"아래 정보를 입력하여 계정을 생성하세요."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold border-b pb-2",children:"개인 정보"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"title",children:"호칭"}),e.jsxs("select",{id:"title",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",children:[e.jsx("option",{value:"",children:"선택"}),e.jsx("option",{value:"mr",children:"Mr."}),e.jsx("option",{value:"ms",children:"Ms."}),e.jsx("option",{value:"mrs",children:"Mrs."}),e.jsx("option",{value:"dr",children:"Dr."})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"complex-firstName",children:["이름 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(a,{id:"complex-firstName",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"complex-lastName",children:["성 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(a,{id:"complex-lastName",required:!0})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold border-b pb-2",children:"연락처 정보"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"complex-email",className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-4 w-4"}),"이메일 주소 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(a,{id:"complex-email",type:"email",required:!0,"aria-describedby":"email-note"}),e.jsx("p",{id:"email-note",className:"text-xs text-muted-foreground",children:"로그인 시 사용될 이메일입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"complex-confirmEmail",children:["이메일 확인 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(a,{id:"complex-confirmEmail",type:"email",required:!0,placeholder:"이메일을 다시 입력하세요"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"complex-phone",className:"flex items-center gap-2",children:[e.jsx(D,{className:"h-4 w-4"}),"전화번호",e.jsx("span",{className:"text-muted-foreground text-sm",children:"(선택사항)"})]}),e.jsx(a,{id:"complex-phone",type:"tel",placeholder:"010-1234-5678","aria-describedby":"phone-note"}),e.jsx("p",{id:"phone-note",className:"text-xs text-muted-foreground",children:"계정 보안 및 알림 용도로 사용됩니다."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold border-b pb-2",children:"주소 정보"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"complex-address",className:"flex items-center gap-2",children:[e.jsx(B,{className:"h-4 w-4"}),"주소"]}),e.jsx(a,{id:"complex-address",placeholder:"상세 주소를 입력하세요"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"complex-city",children:"도시"}),e.jsx(a,{id:"complex-city",placeholder:"서울특별시"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"complex-zipCode",children:"우편번호"}),e.jsx(a,{id:"complex-zipCode",placeholder:"12345"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"complex-country",children:"국가"}),e.jsxs("select",{id:"complex-country",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",children:[e.jsx("option",{value:"kr",children:"대한민국"}),e.jsx("option",{value:"us",children:"미국"}),e.jsx("option",{value:"jp",children:"일본"}),e.jsx("option",{value:"cn",children:"중국"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold border-b pb-2",children:"약관 동의"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(i,{id:"complex-newsletter"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{htmlFor:"complex-newsletter",className:"font-normal",children:"뉴스레터 구독 (선택)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"최신 소식과 업데이트를 이메일로 받아보세요."})]})]}),e.jsxs("div",{className:"flex items-start space-x-2",children:[e.jsx(i,{id:"complex-terms",required:!0}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs(s,{htmlFor:"complex-terms",className:"font-normal",children:["이용약관 및 개인정보처리방침에 동의합니다",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:[e.jsx(n,{variant:"link",className:"h-auto p-0 text-sm",children:"이용약관 보기"})," · ",e.jsx(n,{variant:"link",className:"h-auto p-0 text-sm",children:"개인정보처리방침 보기"})]})]})]})]})]}),e.jsxs("div",{className:"flex gap-4 pt-6",children:[e.jsx(n,{className:"flex-1",children:"계정 생성하기"}),e.jsx(n,{variant:"outline",children:"취소"})]})]})})},parameters:{docs:{description:{story:"실제 폼에서 사용되는 복잡한 Label 구성을 보여줍니다. 섹션 분리, 필수/선택 표시, 도움말 등을 포함합니다."}}}},N={render:()=>e.jsxs("div",{className:"space-y-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Label 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 폼 요소 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Space"}),"로 체크박스/라디오 선택"]}),e.jsx("li",{children:"라벨 클릭으로 연결된 요소에 포커스"}),e.jsx("li",{children:"스크린 리더가 라벨, 상태, 요구사항을 정확히 안내"}),e.jsx("li",{children:"필수 필드와 도움말이 적절히 연결됨"})]})]}),e.jsxs("div",{className:"space-y-4 p-4 border rounded-lg",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(s,{htmlFor:"a11y-name",className:"flex items-center gap-2",children:[e.jsx(M,{className:"h-4 w-4"}),"전체 이름",e.jsx("span",{className:"text-red-500","aria-label":"필수 입력 필드",children:"*"})]}),e.jsx(a,{id:"a11y-name",required:!0,placeholder:"이름을 입력하세요","aria-describedby":"name-help"}),e.jsx("p",{id:"name-help",className:"text-sm text-muted-foreground",children:"성과 이름을 모두 포함하여 입력해주세요."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"a11y-rating",children:"서비스 만족도 (1-5점)"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"a11y-rating",type:"range",min:"1",max:"5",defaultValue:"3",className:"flex-1","aria-describedby":"rating-help"}),e.jsx("span",{className:"text-sm font-medium w-8",children:"3"})]}),e.jsx("p",{id:"rating-help",className:"text-sm text-muted-foreground",children:"1점(매우 불만족)부터 5점(매우 만족)까지 평가해주세요."})]}),e.jsxs("fieldset",{className:"space-y-3",children:[e.jsxs("legend",{className:"text-sm font-medium",children:["알림 방법 선택 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs(b,{defaultValue:"email",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"email",id:"notify-email"}),e.jsx(s,{htmlFor:"notify-email",className:"font-normal",children:"이메일로 알림 받기"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"sms",id:"notify-sms"}),e.jsx(s,{htmlFor:"notify-sms",className:"font-normal",children:"SMS로 알림 받기"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(t,{value:"none",id:"notify-none"}),e.jsx(s,{htmlFor:"notify-none",className:"font-normal",children:"알림 받지 않기"})]})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(i,{id:"a11y-consent",required:!0}),e.jsxs(s,{htmlFor:"a11y-consent",className:"font-normal",children:["개인정보 수집 및 이용에 동의합니다",e.jsx("span",{className:"text-red-500 ml-1","aria-label":"필수",children:"*"})]})]}),e.jsx(n,{className:"w-full",children:"정보 제출하기"})]})]}),parameters:{docs:{description:{story:"Label의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: "default-input",
    children: "기본 라벨"
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Label 컴포넌트입니다. htmlFor 속성으로 입력 필드와 연결되어 접근성을 제공합니다."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <div className="space-y-2">
        <Label htmlFor="username">사용자명</Label>
        <Input id="username" placeholder="사용자명을 입력하세요" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">이메일 주소</Label>
        <Input id="email" type="email" placeholder="name@example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Input과 함께 사용하는 일반적인 Label 예시입니다. 각 라벨은 해당 입력 필드와 올바르게 연결됩니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <div className="space-y-2">
        <Label htmlFor="required-name">
          이름 <span className="text-red-500">*</span>
        </Label>
        <Input id="required-name" required placeholder="필수 입력 필드" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="required-email" className="flex items-center gap-2">
          이메일 주소 
          <span className="text-red-500" aria-label="필수">*</span>
        </Label>
        <Input id="required-email" type="email" required placeholder="name@example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="optional-phone">
          전화번호 
          <span className="text-muted-foreground text-sm">(선택사항)</span>
        </Label>
        <Input id="optional-phone" type="tel" placeholder="010-1234-5678" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="required-terms" className="flex items-center space-x-2 font-normal">
          <Checkbox id="required-terms" required />
          <span>
            이용약관에 동의합니다 <span className="text-red-500">*</span>
          </span>
        </Label>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "필수 필드와 선택 필드를 구분하여 표시하는 Label 예시입니다. 시각적 표시와 함께 접근성을 고려합니다."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">
      <div className="space-y-2">
        <Label htmlFor="username-help" className="flex items-center gap-2">
          사용자명
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </Label>
        <Input id="username-help" placeholder="3-20자의 영문, 숫자" aria-describedby="username-description" />
        <p id="username-description" className="text-sm text-muted-foreground">
          3자 이상 20자 이하의 영문자와 숫자만 사용 가능합니다.
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password-help" className="flex items-center gap-2">
          비밀번호
          <Info className="h-4 w-4 text-blue-500" />
        </Label>
        <Input id="password-help" type="password" placeholder="안전한 비밀번호" aria-describedby="password-requirements" />
        <div id="password-requirements" className="text-sm text-muted-foreground space-y-1">
          <p>비밀번호는 다음 조건을 만족해야 합니다:</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>최소 8자 이상</li>
            <li>대문자, 소문자, 숫자, 특수문자 각 1개 이상</li>
            <li>연속된 문자나 숫자 사용 금지</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="api-key" className="flex items-center gap-2">
          API 키
          <Button variant="ghost" size="sm" className="h-auto p-0 text-blue-500">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Label>
        <Input id="api-key" placeholder="sk-..." aria-describedby="api-key-help" />
        <p id="api-key-help" className="text-sm text-muted-foreground">
          개발자 콘솔에서 API 키를 생성할 수 있습니다. 
          <Button variant="link" className="h-auto p-0 text-sm">
            자세히 알아보기
          </Button>
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "도움말 텍스트와 아이콘이 포함된 Label 예시입니다. 복잡한 입력 요구사항을 명확히 안내합니다."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      validEmail: "user@example.com",
      invalidEmail: "invalid-email",
      emptyRequired: "",
      successField: "올바른 값"
    });
    return <div className="space-y-6 w-[400px]">
        {/* 성공 상태 */}
        <div className="space-y-2">
          <Label htmlFor="valid-field" className="flex items-center gap-2 text-green-700">
            <CheckCircle className="h-4 w-4" />
            유효한 이메일
          </Label>
          <Input id="valid-field" type="email" value={formData.validEmail} className="border-green-500 focus:border-green-500" readOnly />
          <p className="text-sm text-green-600">올바른 이메일 형식입니다.</p>
        </div>

        {/* 에러 상태 */}
        <div className="space-y-2">
          <Label htmlFor="invalid-field" className="flex items-center gap-2 text-red-700">
            <AlertCircle className="h-4 w-4" />
            잘못된 이메일
          </Label>
          <Input id="invalid-field" type="email" value={formData.invalidEmail} className="border-red-500 focus:border-red-500" aria-invalid="true" aria-describedby="invalid-error" />
          <p id="invalid-error" className="text-sm text-red-600">
            올바른 이메일 형식이 아닙니다.
          </p>
        </div>

        {/* 필수 필드 누락 */}
        <div className="space-y-2">
          <Label htmlFor="empty-required" className="flex items-center gap-2">
            필수 입력 필드
            <span className="text-red-500">*</span>
          </Label>
          <Input id="empty-required" value={formData.emptyRequired} className={formData.emptyRequired ? "border-green-500" : "border-red-500"} placeholder="필수 입력 필드" />
          {!formData.emptyRequired && <p className="text-sm text-red-600" role="alert">
              이 필드는 필수 입력 항목입니다.
            </p>}
        </div>

        {/* 비활성화 상태 */}
        <div className="space-y-2">
          <Label htmlFor="disabled-field" className="text-muted-foreground">
            비활성화된 필드
          </Label>
          <Input id="disabled-field" disabled value="수정할 수 없는 값" />
          <p className="text-sm text-muted-foreground">
            현재 수정할 수 없는 상태입니다.
          </p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "다양한 검증 상태에 따른 Label 스타일을 보여줍니다. 성공, 에러, 필수, 비활성화 상태를 구분합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState("option1");
    const [isChecked, setIsChecked] = React.useState(false);
    const [isEnabled, setIsEnabled] = React.useState(true);
    return <div className="space-y-6 w-[400px]">
        {/* Radio Group */}
        <div className="space-y-3">
          <Label className="text-base font-medium">선호하는 연락 방법</Label>
          <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="contact-email" />
              <Label htmlFor="contact-email" className="font-normal">이메일</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phone" id="contact-phone" />
              <Label htmlFor="contact-phone" className="font-normal">전화</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="contact-sms" />
              <Label htmlFor="contact-sms" className="font-normal">문자 메시지</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Checkbox */}
        <div className="space-y-3">
          <Label className="text-base font-medium">알림 설정</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="notifications" checked={isChecked} onCheckedChange={checked => setIsChecked(checked === true)} />
              <Label htmlFor="notifications" className="font-normal">
                이메일 알림 받기
              </Label>
            </div>
            <p className="text-sm text-muted-foreground ml-6">
              새로운 메시지와 업데이트를 이메일로 받아보세요.
            </p>
          </div>
        </div>

        {/* Switch */}
        <div className="space-y-3">
          <Label className="text-base font-medium">기능 설정</Label>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label htmlFor="auto-save" className="font-normal">
                자동 저장
              </Label>
              <p className="text-sm text-muted-foreground">
                변경사항을 자동으로 저장합니다.
              </p>
            </div>
            <Switch id="auto-save" checked={isEnabled} onCheckedChange={setIsEnabled} />
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            파일 업로드
          </Label>
          <Input id="file-upload" type="file" className="cursor-pointer" accept=".jpg,.jpeg,.png,.pdf" />
          <p className="text-sm text-muted-foreground">
            JPG, PNG, PDF 파일만 업로드 가능합니다. (최대 10MB)
          </p>
        </div>

        {/* Date Input */}
        <div className="space-y-2">
          <Label htmlFor="birth-date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            생년월일
          </Label>
          <Input id="birth-date" type="date" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "다양한 폼 요소와 함께 사용되는 Label 예시입니다. Radio, Checkbox, Switch, File, Date 입력 등을 포함합니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">
      <div className="space-y-2">
        <Label htmlFor="small-input" className="text-xs">
          소형 라벨 (text-xs)
        </Label>
        <Input id="small-input" placeholder="작은 입력 필드" className="h-8 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="default-input" className="text-sm">
          기본 라벨 (text-sm)
        </Label>
        <Input id="default-input" placeholder="기본 입력 필드" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="medium-input" className="text-base">
          중형 라벨 (text-base)
        </Label>
        <Input id="medium-input" placeholder="중형 입력 필드" className="h-12" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="large-input" className="text-lg font-medium">
          대형 라벨 (text-lg)
        </Label>
        <Input id="large-input" placeholder="큰 입력 필드" className="h-14 text-lg" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="xl-input" className="text-xl font-semibold">
          특대 라벨 (text-xl)
        </Label>
        <Input id="xl-input" placeholder="특대 입력 필드" className="h-16 text-xl" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 크기의 Label과 그에 맞는 Input 크기를 보여줍니다. 일관된 시각적 계층을 유지합니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
      newsletter: false,
      terms: false
    });
    return <div className="space-y-8 w-[600px]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">회원가입</h2>
            <p className="text-muted-foreground">
              아래 정보를 입력하여 계정을 생성하세요.
            </p>
          </div>

          {/* 개인 정보 섹션 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">개인 정보</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">호칭</Label>
                <select id="title" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">선택</option>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="dr">Dr.</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="complex-firstName">
                  이름 <span className="text-red-500">*</span>
                </Label>
                <Input id="complex-firstName" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="complex-lastName">
                  성 <span className="text-red-500">*</span>
                </Label>
                <Input id="complex-lastName" required />
              </div>
            </div>
          </div>

          {/* 연락처 정보 섹션 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">연락처 정보</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="complex-email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  이메일 주소 <span className="text-red-500">*</span>
                </Label>
                <Input id="complex-email" type="email" required aria-describedby="email-note" />
                <p id="email-note" className="text-xs text-muted-foreground">
                  로그인 시 사용될 이메일입니다.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="complex-confirmEmail">
                  이메일 확인 <span className="text-red-500">*</span>
                </Label>
                <Input id="complex-confirmEmail" type="email" required placeholder="이메일을 다시 입력하세요" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="complex-phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                전화번호
                <span className="text-muted-foreground text-sm">(선택사항)</span>
              </Label>
              <Input id="complex-phone" type="tel" placeholder="010-1234-5678" aria-describedby="phone-note" />
              <p id="phone-note" className="text-xs text-muted-foreground">
                계정 보안 및 알림 용도로 사용됩니다.
              </p>
            </div>
          </div>

          {/* 주소 정보 섹션 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">주소 정보</h3>
            
            <div className="space-y-2">
              <Label htmlFor="complex-address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                주소
              </Label>
              <Input id="complex-address" placeholder="상세 주소를 입력하세요" />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="complex-city">도시</Label>
                <Input id="complex-city" placeholder="서울특별시" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="complex-zipCode">우편번호</Label>
                <Input id="complex-zipCode" placeholder="12345" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="complex-country">국가</Label>
                <select id="complex-country" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="kr">대한민국</option>
                  <option value="us">미국</option>
                  <option value="jp">일본</option>
                  <option value="cn">중국</option>
                </select>
              </div>
            </div>
          </div>

          {/* 약관 동의 섹션 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">약관 동의</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox id="complex-newsletter" />
                <div className="space-y-1">
                  <Label htmlFor="complex-newsletter" className="font-normal">
                    뉴스레터 구독 (선택)
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    최신 소식과 업데이트를 이메일로 받아보세요.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="complex-terms" required />
                <div className="space-y-1">
                  <Label htmlFor="complex-terms" className="font-normal">
                    이용약관 및 개인정보처리방침에 동의합니다 
                    <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    <Button variant="link" className="h-auto p-0 text-sm">
                      이용약관 보기
                    </Button>
                    {" · "}
                    <Button variant="link" className="h-auto p-0 text-sm">
                      개인정보처리방침 보기
                    </Button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="flex gap-4 pt-6">
            <Button className="flex-1">
              계정 생성하기
            </Button>
            <Button variant="outline">
              취소
            </Button>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "실제 폼에서 사용되는 복잡한 Label 구성을 보여줍니다. 섹션 분리, 필수/선택 표시, 도움말 등을 포함합니다."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[500px]">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          Label 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 폼 요소 간 이동</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 체크박스/라디오 선택</li>
          <li>라벨 클릭으로 연결된 요소에 포커스</li>
          <li>스크린 리더가 라벨, 상태, 요구사항을 정확히 안내</li>
          <li>필수 필드와 도움말이 적절히 연결됨</li>
        </ul>
      </div>

      <div className="space-y-4 p-4 border rounded-lg">
        <div className="space-y-2">
          <Label htmlFor="a11y-name" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            전체 이름
            <span className="text-red-500" aria-label="필수 입력 필드">*</span>
          </Label>
          <Input id="a11y-name" required placeholder="이름을 입력하세요" aria-describedby="name-help" />
          <p id="name-help" className="text-sm text-muted-foreground">
            성과 이름을 모두 포함하여 입력해주세요.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="a11y-rating">
            서비스 만족도 (1-5점)
          </Label>
          <div className="flex items-center gap-2">
            <Input id="a11y-rating" type="range" min="1" max="5" defaultValue="3" className="flex-1" aria-describedby="rating-help" />
            <span className="text-sm font-medium w-8">3</span>
          </div>
          <p id="rating-help" className="text-sm text-muted-foreground">
            1점(매우 불만족)부터 5점(매우 만족)까지 평가해주세요.
          </p>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-medium">
            알림 방법 선택 <span className="text-red-500">*</span>
          </legend>
          <RadioGroup defaultValue="email">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="notify-email" />
              <Label htmlFor="notify-email" className="font-normal">
                이메일로 알림 받기
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="notify-sms" />
              <Label htmlFor="notify-sms" className="font-normal">
                SMS로 알림 받기
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="notify-none" />
              <Label htmlFor="notify-none" className="font-normal">
                알림 받지 않기
              </Label>
            </div>
          </RadioGroup>
        </fieldset>

        <div className="flex items-center space-x-2">
          <Checkbox id="a11y-consent" required />
          <Label htmlFor="a11y-consent" className="font-normal">
            개인정보 수집 및 이용에 동의합니다
            <span className="text-red-500 ml-1" aria-label="필수">*</span>
          </Label>
        </div>

        <Button className="w-full">
          정보 제출하기
        </Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Label의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};const ge=["Default","WithInput","RequiredFields","WithHelpText","ValidationStates","DifferentFormElements","LabelSizes","ComplexForm","AccessibilityDemo"];export{N as AccessibilityDemo,u as ComplexForm,d as Default,x as DifferentFormElements,h as LabelSizes,m as RequiredFields,p as ValidationStates,o as WithHelpText,c as WithInput,ge as __namedExportsOrder,ye as default};
