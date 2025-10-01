import{j as e}from"./jsx-runtime-qXjPENQY.js";import{e as c}from"./iframe-vkdy9PSu.js";import{I as s}from"./input-VJxpx8l0.js";import{L as l}from"./label-kCHJfFiW.js";import{B as n}from"./button-BeR2cXOe.js";import{M as o}from"./mail-DwJXRejZ.js";import{L as j}from"./lock-CmbBxtXU.js";import{P as C}from"./phone-BpUNWwp3.js";import{S as f}from"./search-CxwwKcLr.js";import{C as w}from"./circle-check-big-BFgoofNU.js";import{C as L}from"./circle-alert-BpFs-_Nq.js";import{U as F}from"./user-BR8oJbTL.js";import{E as I}from"./eye-off-D8db3yff.js";import{E as S}from"./eye-BJd8dDQ5.js";import{X as E}from"./x-CtzjTZHi.js";import{F as k}from"./funnel-CnS1HM2w.js";import{M as q}from"./map-pin-DrgZarbe.js";import{C as P}from"./credit-card-BuSIZAH6.js";import{S as B}from"./star-B1Itfmbi.js";import{C as z}from"./circle-question-mark-DBDbs724.js";import"./utils-CBfrqCZ4.js";import"./index-0kxtDDZv.js";import"./index-BAWlKGlJ.js";import"./index-TaS-8cbB.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-DT2cZkkW.js";const ie={title:"UI/Forms/Input",component:s,parameters:{layout:"centered",docs:{description:{component:`
사용자로부터 텍스트 입력을 받는 기본 Input 컴포넌트입니다. 다양한 타입과 상태를 지원하며 접근성을 완벽히 준수합니다.

## 주요 기능
- **다양한 입력 타입**: text, email, password, number, search, tel, url 등
- **상태 관리**: default, focused, disabled, error, success 상태 지원
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 완벽 지원
- **반응형**: 모든 화면 크기에서 적절한 크기 조정
- **키보드 네비게이션**: Tab, Enter, Arrow keys 완벽 지원
- **폼 통합**: HTML5 form validation과 완벽 호환
- **스타일링**: Tailwind CSS 기반 커스터마이징 가능

## 사용법
\`\`\`tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// 기본 사용법
<Input placeholder="이메일을 입력하세요" />

// 라벨과 함께
<div className="space-y-2">
  <Label htmlFor="email">이메일</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="name@example.com" 
  />
</div>

// 에러 상태
<Input 
  type="email" 
  placeholder="name@example.com" 
  className="border-red-500 focus:border-red-500"
  aria-invalid="true"
  aria-describedby="email-error"
/>
\`\`\`

## Props
- \`type\`: 입력 타입 (text, email, password, number 등)
- \`placeholder\`: 플레이스홀더 텍스트
- \`disabled\`: 비활성화 상태
- \`required\`: 필수 입력 필드
- \`className\`: 추가 CSS 클래스
- \`value\`: 제어된 컴포넌트 값
- \`onChange\`: 값 변경 이벤트 핸들러
- \`onFocus\`: 포커스 이벤트 핸들러
- \`onBlur\`: 블러 이벤트 핸들러

## 접근성
- **ARIA 라벨**: \`aria-label\` 또는 연결된 \`<label>\` 요소
- **ARIA 설명**: \`aria-describedby\`로 도움말 텍스트 연결
- **에러 상태**: \`aria-invalid\`와 \`aria-describedby\`로 에러 메시지 연결
- **키보드 네비게이션**: Tab으로 포커스 이동, Enter로 폼 제출
- **스크린 리더**: 입력 타입, 상태, 요구사항을 명확히 안내

## 스타일 변형
- **기본**: 표준 테두리와 포커스 스타일
- **에러**: 빨간색 테두리와 에러 아이콘
- **성공**: 초록색 테두리와 체크 아이콘
- **비활성화**: 회색 배경과 커서 변경
- **검색**: 검색 아이콘과 함께 사용
- **비밀번호**: 표시/숨김 토글 버튼
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url"],description:"입력 필드의 타입"},placeholder:{control:"text",description:"플레이스홀더 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},required:{control:"boolean",description:"필수 입력 필드 여부"}},render:a=>e.jsx("div",{className:"w-[300px]",children:e.jsx(s,{...a})})},p={args:{placeholder:"텍스트를 입력하세요"},parameters:{docs:{description:{story:"기본 Input 컴포넌트입니다. 표준 텍스트 입력을 위한 깔끔한 디자인을 제공합니다."}}}},u={render:()=>e.jsxs("div",{className:"space-y-2 w-[300px]",children:[e.jsx(l,{htmlFor:"name",children:"이름"}),e.jsx(s,{id:"name",placeholder:"홍길동"})]}),parameters:{docs:{description:{story:"Label과 함께 사용하는 Input입니다. 접근성을 위해 htmlFor와 id를 연결해야 합니다."}}}},h={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"email",children:"이메일"}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"email",type:"email",placeholder:"name@example.com",className:"pl-10"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"password",children:"비밀번호"}),e.jsxs("div",{className:"relative",children:[e.jsx(j,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"password",type:"password",placeholder:"••••••••",className:"pl-10"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"phone",children:"전화번호"}),e.jsxs("div",{className:"relative",children:[e.jsx(C,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"phone",type:"tel",placeholder:"010-1234-5678",className:"pl-10"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"search",children:"검색"}),e.jsxs("div",{className:"relative",children:[e.jsx(f,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"search",type:"search",placeholder:"검색어를 입력하세요",className:"pl-10"})]})]})]}),parameters:{docs:{description:{story:"다양한 입력 타입을 보여주는 예시입니다. 각 타입에 맞는 아이콘과 플레이스홀더를 사용합니다."}}}},x={render:()=>{const[a,d]=c.useState({validEmail:"user@example.com",invalidEmail:"invalid-email",requiredField:"",successField:"올바른 입력값"}),r=t=>i=>{d(m=>({...m,[t]:i.target.value}))};return e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"valid-email",children:"이메일 (유효)"}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"valid-email",type:"email",value:a.validEmail,onChange:r("validEmail"),className:"pl-10 pr-10 border-green-500 focus:border-green-500"}),e.jsx(w,{className:"absolute right-3 top-3 h-4 w-4 text-green-500"})]}),e.jsx("p",{className:"text-sm text-green-600",children:"올바른 이메일 형식입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"invalid-email",children:"이메일 (오류)"}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"invalid-email",type:"email",value:a.invalidEmail,onChange:r("invalidEmail"),className:"pl-10 pr-10 border-red-500 focus:border-red-500","aria-invalid":"true","aria-describedby":"email-error"}),e.jsx(L,{className:"absolute right-3 top-3 h-4 w-4 text-red-500"})]}),e.jsx("p",{id:"email-error",className:"text-sm text-red-600",children:"올바른 이메일 형식이 아닙니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(l,{htmlFor:"required",className:"flex items-center",children:["이름",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx(s,{id:"required",value:a.requiredField,onChange:r("requiredField"),placeholder:"필수 입력 필드",required:!0,className:a.requiredField?"border-green-500":"border-red-500","aria-describedby":"required-help"}),e.jsx("p",{id:"required-help",className:"text-sm text-muted-foreground",children:"이 필드는 필수 입력 항목입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"success",children:"사용자명"}),e.jsxs("div",{className:"relative",children:[e.jsx(F,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"success",value:a.successField,onChange:r("successField"),className:"pl-10 pr-10 border-green-500 focus:border-green-500"}),e.jsx(w,{className:"absolute right-3 top-3 h-4 w-4 text-green-500"})]}),e.jsx("p",{className:"text-sm text-green-600",children:"사용 가능한 사용자명입니다."})]})]})},parameters:{docs:{description:{story:"입력 검증 상태를 보여주는 예시입니다. 성공, 오류, 필수 입력 등의 상태를 시각적으로 표현합니다."}}}},v={render:()=>{const[a,d]=c.useState(!1),[r,t]=c.useState("mySecretPassword123");return e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"password-toggle",children:"비밀번호"}),e.jsxs("div",{className:"relative",children:[e.jsx(j,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"password-toggle",type:a?"text":"password",value:r,onChange:i=>t(i.target.value),className:"pl-10 pr-10",placeholder:"비밀번호를 입력하세요"}),e.jsx(n,{type:"button",variant:"ghost",size:"sm",className:"absolute right-1 top-1 h-8 w-8 p-0",onClick:()=>d(!a),"aria-label":a?"비밀번호 숨기기":"비밀번호 보이기",children:a?e.jsx(I,{className:"h-4 w-4"}):e.jsx(S,{className:"h-4 w-4"})})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"비밀번호는 최소 8자 이상이어야 합니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"password-confirm",children:"비밀번호 확인"}),e.jsxs("div",{className:"relative",children:[e.jsx(j,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"password-confirm",type:a?"text":"password",className:"pl-10",placeholder:"비밀번호를 다시 입력하세요"})]})]})]})},parameters:{docs:{description:{story:"비밀번호 입력 필드에 표시/숨김 토글 기능을 추가한 예시입니다. 사용자 경험을 개선합니다."}}}},N={render:()=>{const[a,d]=c.useState(""),[r]=c.useState(["React 튜토리얼","TypeScript 가이드","Tailwind CSS","Storybook 설정"]);return e.jsxs("div",{className:"space-y-4 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"search-main",children:"검색"}),e.jsxs("div",{className:"relative",children:[e.jsx(f,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"search-main",type:"search",value:a,onChange:t=>d(t.target.value),className:"pl-10 pr-10",placeholder:"검색어를 입력하세요..."}),a&&e.jsx(n,{type:"button",variant:"ghost",size:"sm",className:"absolute right-1 top-1 h-8 w-8 p-0",onClick:()=>d(""),"aria-label":"검색어 지우기",children:e.jsx(E,{className:"h-4 w-4"})})]})]}),!a&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium text-muted-foreground",children:"최근 검색어"}),e.jsx("div",{className:"space-y-1",children:r.map((t,i)=>e.jsxs(n,{variant:"ghost",size:"sm",className:"h-8 w-full justify-start text-sm font-normal",onClick:()=>d(t),children:[e.jsx(f,{className:"h-3 w-3 mr-2"}),t]},i))})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(n,{size:"sm",className:"flex-1",children:[e.jsx(f,{className:"h-4 w-4 mr-2"}),"검색"]}),e.jsxs(n,{variant:"outline",size:"sm",children:[e.jsx(k,{className:"h-4 w-4 mr-2"}),"필터"]})]})]})},parameters:{docs:{description:{story:"검색 기능이 포함된 Input입니다. 검색어 지우기, 최근 검색어, 필터 기능을 포함합니다."}}}},g={render:()=>{const[a,d]=c.useState({firstName:"",lastName:"",email:"",phone:"",address:"",city:"",zipCode:"",cardNumber:""}),r=t=>i=>{d(m=>({...m,[t]:i.target.value}))};return e.jsxs("div",{className:"space-y-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"사용자 정보"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(l,{htmlFor:"firstName",children:["이름 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(s,{id:"firstName",value:a.firstName,onChange:r("firstName"),placeholder:"길동",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(l,{htmlFor:"lastName",children:["성 ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(s,{id:"lastName",value:a.lastName,onChange:r("lastName"),placeholder:"홍",required:!0})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"form-email",children:"이메일"}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"form-email",type:"email",value:a.email,onChange:r("email"),className:"pl-10",placeholder:"hong@example.com"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"form-phone",children:"전화번호"}),e.jsxs("div",{className:"relative",children:[e.jsx(C,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"form-phone",type:"tel",value:a.phone,onChange:r("phone"),className:"pl-10",placeholder:"010-1234-5678"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"주소 정보"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"address",children:"주소"}),e.jsxs("div",{className:"relative",children:[e.jsx(q,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"address",value:a.address,onChange:r("address"),className:"pl-10",placeholder:"서울특별시 강남구 테헤란로 123"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"col-span-2 space-y-2",children:[e.jsx(l,{htmlFor:"city",children:"도시"}),e.jsx(s,{id:"city",value:a.city,onChange:r("city"),placeholder:"서울특별시"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"zipCode",children:"우편번호"}),e.jsx(s,{id:"zipCode",value:a.zipCode,onChange:r("zipCode"),placeholder:"12345"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"결제 정보"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"cardNumber",children:"카드 번호"}),e.jsxs("div",{className:"relative",children:[e.jsx(P,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"cardNumber",value:a.cardNumber,onChange:r("cardNumber"),className:"pl-10",placeholder:"1234 5678 9012 3456",maxLength:19})]})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(n,{className:"flex-1",children:"저장하기"}),e.jsx(n,{variant:"outline",children:"취소"})]})]})},parameters:{docs:{description:{story:"실제 폼에서 사용되는 복합적인 Input 예시입니다. 다양한 입력 타입과 레이아웃을 보여줍니다."}}}},b={render:()=>e.jsxs("div",{className:"space-y-4 w-[350px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"disabled-text",children:"비활성화된 텍스트 입력"}),e.jsx(s,{id:"disabled-text",disabled:!0,placeholder:"비활성화된 입력 필드",value:"수정할 수 없는 값"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"disabled-email",children:"비활성화된 이메일"}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"disabled-email",type:"email",disabled:!0,className:"pl-10",value:"user@example.com"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"readonly",children:"읽기 전용"}),e.jsx(s,{id:"readonly",readOnly:!0,value:"읽기 전용 값",className:"bg-muted"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"이 필드는 읽기 전용입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"loading",children:"로딩 상태"}),e.jsxs("div",{className:"relative",children:[e.jsx(s,{id:"loading",placeholder:"로딩 중...",disabled:!0}),e.jsx("div",{className:"absolute right-3 top-3",children:e.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"})})]})]})]}),parameters:{docs:{description:{story:"비활성화, 읽기 전용, 로딩 상태 등 다양한 상태의 Input을 보여줍니다."}}}},y={render:()=>{const[a,d]=c.useState({username:"",email:"",rating:""}),r=t=>i=>{d(m=>({...m,[t]:i.target.value}))};return e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Input 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 입력 필드 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Shift+Tab"}),"으로 역방향 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"}),"로 폼 제출"]}),e.jsx("li",{children:"스크린 리더가 라벨, 타입, 상태를 정확히 안내"}),e.jsx("li",{children:"에러 메시지와 도움말이 적절히 연결됨"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(l,{htmlFor:"a11y-username",children:["사용자명",e.jsx("span",{className:"text-red-500 ml-1","aria-label":"필수",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsx(F,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"a11y-username",value:a.username,onChange:r("username"),className:"pl-10",placeholder:"사용자명을 입력하세요",required:!0,"aria-describedby":"username-help","aria-invalid":a.username.length>0&&a.username.length<3})]}),e.jsx("p",{id:"username-help",className:"text-sm text-muted-foreground",children:"3자 이상의 사용자명을 입력해주세요."}),a.username.length>0&&a.username.length<3&&e.jsx("p",{className:"text-sm text-red-600",role:"alert",children:"사용자명은 최소 3자 이상이어야 합니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"a11y-email",children:"이메일 주소"}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"a11y-email",type:"email",value:a.email,onChange:r("email"),className:"pl-10",placeholder:"name@example.com","aria-describedby":"email-help"})]}),e.jsx("p",{id:"email-help",className:"text-sm text-muted-foreground",children:"알림을 받을 이메일 주소를 입력해주세요."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{htmlFor:"a11y-rating",children:"평점 (1-5)"}),e.jsxs("div",{className:"relative",children:[e.jsx(B,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),e.jsx(s,{id:"a11y-rating",type:"number",min:"1",max:"5",value:a.rating,onChange:r("rating"),className:"pl-10",placeholder:"1","aria-describedby":"rating-help"})]}),e.jsx("p",{id:"rating-help",className:"text-sm text-muted-foreground",children:"1점(매우 나쁨)부터 5점(매우 좋음)까지 평가해주세요."})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(n,{className:"flex-1",children:"제출하기"}),e.jsxs(n,{variant:"outline",type:"button",children:[e.jsx(z,{className:"h-4 w-4 mr-2"}),"도움말"]})]})]})]})},parameters:{docs:{description:{story:"Input의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "텍스트를 입력하세요"
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Input 컴포넌트입니다. 표준 텍스트 입력을 위한 깔끔한 디자인을 제공합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-[300px]">
      <Label htmlFor="name">이름</Label>
      <Input id="name" placeholder="홍길동" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Label과 함께 사용하는 Input입니다. 접근성을 위해 htmlFor와 id를 연결해야 합니다."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="email" type="email" placeholder="name@example.com" className="pl-10" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">전화번호</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="phone" type="tel" placeholder="010-1234-5678" className="pl-10" />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="search">검색</Label>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="search" type="search" placeholder="검색어를 입력하세요" className="pl-10" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 입력 타입을 보여주는 예시입니다. 각 타입에 맞는 아이콘과 플레이스홀더를 사용합니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = React.useState({
      validEmail: "user@example.com",
      invalidEmail: "invalid-email",
      requiredField: "",
      successField: "올바른 입력값"
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="space-y-6 w-[400px]">
        {/* 유효한 이메일 */}
        <div className="space-y-2">
          <Label htmlFor="valid-email">이메일 (유효)</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="valid-email" type="email" value={values.validEmail} onChange={handleChange('validEmail')} className="pl-10 pr-10 border-green-500 focus:border-green-500" />
            <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
          </div>
          <p className="text-sm text-green-600">올바른 이메일 형식입니다.</p>
        </div>

        {/* 유효하지 않은 이메일 */}
        <div className="space-y-2">
          <Label htmlFor="invalid-email">이메일 (오류)</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="invalid-email" type="email" value={values.invalidEmail} onChange={handleChange('invalidEmail')} className="pl-10 pr-10 border-red-500 focus:border-red-500" aria-invalid="true" aria-describedby="email-error" />
            <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-red-500" />
          </div>
          <p id="email-error" className="text-sm text-red-600">올바른 이메일 형식이 아닙니다.</p>
        </div>

        {/* 필수 입력 필드 */}
        <div className="space-y-2">
          <Label htmlFor="required" className="flex items-center">
            이름 
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Input id="required" value={values.requiredField} onChange={handleChange('requiredField')} placeholder="필수 입력 필드" required className={values.requiredField ? "border-green-500" : "border-red-500"} aria-describedby="required-help" />
          <p id="required-help" className="text-sm text-muted-foreground">
            이 필드는 필수 입력 항목입니다.
          </p>
        </div>

        {/* 성공 상태 */}
        <div className="space-y-2">
          <Label htmlFor="success">사용자명</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="success" value={values.successField} onChange={handleChange('successField')} className="pl-10 pr-10 border-green-500 focus:border-green-500" />
            <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
          </div>
          <p className="text-sm text-green-600">사용 가능한 사용자명입니다.</p>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "입력 검증 상태를 보여주는 예시입니다. 성공, 오류, 필수 입력 등의 상태를 시각적으로 표현합니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState("mySecretPassword123");
    return <div className="space-y-4 w-[350px]">
        <div className="space-y-2">
          <Label htmlFor="password-toggle">비밀번호</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="password-toggle" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} className="pl-10 pr-10" placeholder="비밀번호를 입력하세요" />
            <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1 h-8 w-8 p-0" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보이기"}>
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            비밀번호는 최소 8자 이상이어야 합니다.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password-confirm">비밀번호 확인</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="password-confirm" type={showPassword ? "text" : "password"} className="pl-10" placeholder="비밀번호를 다시 입력하세요" />
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "비밀번호 입력 필드에 표시/숨김 토글 기능을 추가한 예시입니다. 사용자 경험을 개선합니다."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [recentSearches] = React.useState(["React 튜토리얼", "TypeScript 가이드", "Tailwind CSS", "Storybook 설정"]);
    return <div className="space-y-4 w-[400px]">
        <div className="space-y-2">
          <Label htmlFor="search-main">검색</Label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input id="search-main" type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-10" placeholder="검색어를 입력하세요..." />
            {searchQuery && <Button type="button" variant="ghost" size="sm" className="absolute right-1 top-1 h-8 w-8 p-0" onClick={() => setSearchQuery("")} aria-label="검색어 지우기">
                <X className="h-4 w-4" />
              </Button>}
          </div>
        </div>

        {!searchQuery && <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">최근 검색어</p>
            <div className="space-y-1">
              {recentSearches.map((term, index) => <Button key={index} variant="ghost" size="sm" className="h-8 w-full justify-start text-sm font-normal" onClick={() => setSearchQuery(term)}>
                  <Search className="h-3 w-3 mr-2" />
                  {term}
                </Button>)}
            </div>
          </div>}

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <Search className="h-4 w-4 mr-2" />
            검색
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            필터
          </Button>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "검색 기능이 포함된 Input입니다. 검색어 지우기, 최근 검색어, 필터 기능을 포함합니다."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: ""
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="space-y-6 w-[500px]">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">사용자 정보</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                이름 <span className="text-red-500">*</span>
              </Label>
              <Input id="firstName" value={formData.firstName} onChange={handleChange('firstName')} placeholder="길동" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
                성 <span className="text-red-500">*</span>
              </Label>
              <Input id="lastName" value={formData.lastName} onChange={handleChange('lastName')} placeholder="홍" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="form-email">이메일</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="form-email" type="email" value={formData.email} onChange={handleChange('email')} className="pl-10" placeholder="hong@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="form-phone">전화번호</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="form-phone" type="tel" value={formData.phone} onChange={handleChange('phone')} className="pl-10" placeholder="010-1234-5678" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">주소 정보</h3>
          
          <div className="space-y-2">
            <Label htmlFor="address">주소</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="address" value={formData.address} onChange={handleChange('address')} className="pl-10" placeholder="서울특별시 강남구 테헤란로 123" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="city">도시</Label>
              <Input id="city" value={formData.city} onChange={handleChange('city')} placeholder="서울특별시" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">우편번호</Label>
              <Input id="zipCode" value={formData.zipCode} onChange={handleChange('zipCode')} placeholder="12345" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">결제 정보</h3>
          
          <div className="space-y-2">
            <Label htmlFor="cardNumber">카드 번호</Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="cardNumber" value={formData.cardNumber} onChange={handleChange('cardNumber')} className="pl-10" placeholder="1234 5678 9012 3456" maxLength={19} />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="flex-1">
            저장하기
          </Button>
          <Button variant="outline">
            취소
          </Button>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "실제 폼에서 사용되는 복합적인 Input 예시입니다. 다양한 입력 타입과 레이아웃을 보여줍니다."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[350px]">
      <div className="space-y-2">
        <Label htmlFor="disabled-text">비활성화된 텍스트 입력</Label>
        <Input id="disabled-text" disabled placeholder="비활성화된 입력 필드" value="수정할 수 없는 값" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-email">비활성화된 이메일</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input id="disabled-email" type="email" disabled className="pl-10" value="user@example.com" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="readonly">읽기 전용</Label>
        <Input id="readonly" readOnly value="읽기 전용 값" className="bg-muted" />
        <p className="text-sm text-muted-foreground">
          이 필드는 읽기 전용입니다.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="loading">로딩 상태</Label>
        <div className="relative">
          <Input id="loading" placeholder="로딩 중..." disabled />
          <div className="absolute right-3 top-3">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "비활성화, 읽기 전용, 로딩 상태 등 다양한 상태의 Input을 보여줍니다."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formValues, setFormValues] = React.useState({
      username: "",
      email: "",
      rating: ""
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="space-y-6 w-[400px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Input 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 입력 필드 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Shift+Tab</kbd>으로 역방향 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 폼 제출</li>
            <li>스크린 리더가 라벨, 타입, 상태를 정확히 안내</li>
            <li>에러 메시지와 도움말이 적절히 연결됨</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="a11y-username">
              사용자명
              <span className="text-red-500 ml-1" aria-label="필수">*</span>
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="a11y-username" value={formValues.username} onChange={handleChange('username')} className="pl-10" placeholder="사용자명을 입력하세요" required aria-describedby="username-help" aria-invalid={formValues.username.length > 0 && formValues.username.length < 3} />
            </div>
            <p id="username-help" className="text-sm text-muted-foreground">
              3자 이상의 사용자명을 입력해주세요.
            </p>
            {formValues.username.length > 0 && formValues.username.length < 3 && <p className="text-sm text-red-600" role="alert">
                사용자명은 최소 3자 이상이어야 합니다.
              </p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="a11y-email">이메일 주소</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="a11y-email" type="email" value={formValues.email} onChange={handleChange('email')} className="pl-10" placeholder="name@example.com" aria-describedby="email-help" />
            </div>
            <p id="email-help" className="text-sm text-muted-foreground">
              알림을 받을 이메일 주소를 입력해주세요.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="a11y-rating">평점 (1-5)</Label>
            <div className="relative">
              <Star className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input id="a11y-rating" type="number" min="1" max="5" value={formValues.rating} onChange={handleChange('rating')} className="pl-10" placeholder="1" aria-describedby="rating-help" />
            </div>
            <p id="rating-help" className="text-sm text-muted-foreground">
              1점(매우 나쁨)부터 5점(매우 좋음)까지 평가해주세요.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1">
              제출하기
            </Button>
            <Button variant="outline" type="button">
              <HelpCircle className="h-4 w-4 mr-2" />
              도움말
            </Button>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Input의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};export{y as AccessibilityDemo,p as Default,b as DisabledStates,g as FormExample,h as InputTypes,v as PasswordWithToggle,N as SearchInput,u as WithLabel,x as WithValidation,ie as default};
