import{j as e}from"./jsx-runtime-zcBydOHc.js";import{e as o}from"./iframe-f0y5nwCv.js";import{T as t}from"./textarea-DrRFormm.js";import{L as r}from"./label-BM3K1upj.js";import{B as c}from"./button-BFt4UOU8.js";import{B as M}from"./badge-Clo-twS7.js";import{C,a as T,b as L,d as F}from"./card-C4KhRH4Z.js";import{C as y}from"./circle-check-big-D0Dgrclk.js";import{C as S}from"./circle-alert-CYU9pkxJ.js";import{M as z}from"./message-square-CRkNA9Za.js";import{U as R}from"./user-DfoaXFfO.js";import{S as B}from"./send-De_nWQOe.js";import{R as I}from"./rotate-ccw-C7_1bNqC.js";import{M as E}from"./mail-BfEz4195.js";import{C as A}from"./clock-CXWQK-CV.js";import{c as q}from"./createLucideIcon-D1NW3S5P.js";import{F as V}from"./file-text-CosDzJ2u.js";import{T as D}from"./type-CWrCiNEB.js";import{S as H}from"./save-IZTmZawT.js";import{S as k}from"./star-Cl5gcV0f.js";import{I as $}from"./info-DZNCpMKX.js";import{C as U}from"./circle-question-mark-CdRaBXR8.js";import"./utils-CBfrqCZ4.js";import"./index-DtN1zOg8.js";import"./index-BOW4bzV5.js";import"./index-Bnc6pY_-.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],W=q("maximize",_);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],P=q("minimize",O),je={title:"UI/Forms/Textarea",component:t,parameters:{layout:"centered",docs:{description:{component:`
여러 줄의 텍스트 입력을 받는 Textarea 컴포넌트입니다. 긴 텍스트, 댓글, 메시지, 설명 등을 입력할 때 사용됩니다.

## 주요 기능
- **여러 줄 입력**: 자동 줄바꿈과 크기 조절 지원
- **크기 조절**: 사용자가 드래그로 크기 조절 가능
- **상태 관리**: default, focused, disabled, error, success 상태
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 완벽 지원
- **반응형**: 모든 화면 크기에서 적절한 크기 조정
- **키보드 네비게이션**: Tab, Enter, 화살표 키 완벽 지원
- **폼 통합**: HTML5 form validation과 완벽 호환
- **글자 수 제한**: maxLength와 실시간 카운터 지원

## 사용법
\`\`\`tsx
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// 기본 사용법
<Textarea placeholder="메시지를 입력하세요..." />

// 라벨과 함께
<div className="space-y-2">
  <Label htmlFor="message">메시지</Label>
  <Textarea 
    id="message" 
    placeholder="자세한 내용을 입력해주세요" 
  />
</div>

// 글자 수 제한
<Textarea 
  placeholder="최대 500자까지 입력 가능합니다"
  maxLength={500}
/>

// 에러 상태
<Textarea 
  placeholder="내용을 입력하세요" 
  className="border-red-500 focus:border-red-500"
  aria-invalid="true"
  aria-describedby="error-message"
/>
\`\`\`

## Props
- \`placeholder\`: 플레이스홀더 텍스트
- \`disabled\`: 비활성화 상태
- \`required\`: 필수 입력 필드
- \`rows\`: 기본 행 수 (기본값: 3)
- \`maxLength\`: 최대 글자 수
- \`className\`: 추가 CSS 클래스
- \`value\`: 제어된 컴포넌트 값
- \`onChange\`: 값 변경 이벤트 핸들러
- \`onFocus\`: 포커스 이벤트 핸들러
- \`onBlur\`: 블러 이벤트 핸들러

## 접근성
- **ARIA 라벨**: \`aria-label\` 또는 연결된 \`<label>\` 요소
- **ARIA 설명**: \`aria-describedby\`로 도움말 텍스트 연결
- **에러 상태**: \`aria-invalid\`와 \`aria-describedby\`로 에러 메시지 연결
- **키보드 네비게이션**: Tab으로 포커스 이동, Enter로 줄바꿈
- **스크린 리더**: 입력 상태, 글자 수, 요구사항을 명확히 안내

## 스타일 변형
- **기본**: 표준 테두리와 포커스 스타일
- **에러**: 빨간색 테두리와 에러 아이콘
- **성공**: 초록색 테두리와 체크 아이콘  
- **비활성화**: 회색 배경과 커서 변경
- **크기 고정**: resize-none으로 크기 조절 금지
- **자동 높이**: 내용에 따라 높이 자동 조절

## 사용 사례
- **댓글/리뷰**: 사용자 피드백 입력
- **메시지**: 긴 텍스트 메시지 작성
- **설명**: 상세 설명이나 추가 정보 입력
- **폼**: 기타 의견이나 요청사항 입력
- **에디터**: 간단한 텍스트 편집
- **피드백**: 고객 의견이나 제안사항 수집

## 모범 사례
- 적절한 placeholder로 입력 가이드 제공
- 필수 필드에는 명확한 표시 추가
- 글자 수 제한이 있는 경우 실시간 카운터 제공
- 에러 상태에서는 구체적인 오류 메시지 표시
- 긴 내용 입력 시 적절한 기본 크기 설정
        `}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"플레이스홀더 텍스트"},disabled:{control:"boolean",description:"비활성화 상태"},required:{control:"boolean",description:"필수 입력 필드 여부"},rows:{control:"number",description:"기본 행 수"},maxLength:{control:"number",description:"최대 글자 수"}},render:s=>e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{...s})})},x={args:{placeholder:"메시지를 입력하세요...",rows:3},parameters:{docs:{description:{story:"기본 Textarea 컴포넌트입니다. 여러 줄의 텍스트 입력을 위한 깔끔한 디자인을 제공합니다."}}}},p={render:()=>e.jsxs("div",{className:"space-y-2 w-[400px]",children:[e.jsx(r,{htmlFor:"message",children:"메시지"}),e.jsx(t,{id:"message",placeholder:"자세한 내용을 입력해주세요",rows:4})]}),parameters:{docs:{description:{story:"Label과 함께 사용하는 Textarea입니다. 접근성을 위해 htmlFor와 id를 연결해야 합니다."}}}},h={render:()=>e.jsxs("div",{className:"space-y-6 w-[450px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"small-textarea",children:"소형 (2줄)"}),e.jsx(t,{id:"small-textarea",placeholder:"간단한 메모나 코멘트",rows:2})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"medium-textarea",children:"중형 (4줄)"}),e.jsx(t,{id:"medium-textarea",placeholder:"일반적인 내용 입력",rows:4})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"large-textarea",children:"대형 (6줄)"}),e.jsx(t,{id:"large-textarea",placeholder:"긴 내용이나 상세한 설명",rows:6})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"xl-textarea",children:"특대형 (8줄)"}),e.jsx(t,{id:"xl-textarea",placeholder:"매우 긴 텍스트나 문서 작성",rows:8})]})]}),parameters:{docs:{description:{story:"다양한 크기의 Textarea를 보여줍니다. 용도에 따라 적절한 크기를 선택할 수 있습니다."}}}},u={render:()=>{const[s,d]=o.useState(""),[a,i]=o.useState(""),l=150,n=500;return e.jsxs("div",{className:"space-y-6 w-[450px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"char-count",children:["간단한 설명",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx(t,{id:"char-count",placeholder:"상품에 대한 간단한 설명을 입력하세요",value:s,onChange:m=>d(m.target.value),maxLength:l,rows:3}),e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"필수 입력 항목입니다."}),e.jsxs("span",{className:`${s.length>l*.9?"text-orange-500":"text-muted-foreground"}`,children:[s.length,"/",l]})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"long-char-count",children:"상세 설명"}),e.jsx(t,{id:"long-char-count",placeholder:"상품의 상세한 설명, 특징, 사용법 등을 자세히 입력해주세요",value:a,onChange:m=>i(m.target.value),maxLength:n,rows:6}),e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"최대한 자세하게 작성해주세요."}),e.jsxs("div",{className:"flex items-center gap-2",children:[a.length>n*.8&&e.jsx(M,{variant:a.length>=n?"destructive":"secondary",children:a.length>=n?"한도 초과":"거의 다참"}),e.jsxs("span",{className:`${a.length>=n?"text-red-500":a.length>n*.9?"text-orange-500":"text-muted-foreground"}`,children:[a.length,"/",n]})]})]})]})]})},parameters:{docs:{description:{story:"글자 수 제한과 실시간 카운터가 있는 Textarea입니다. 사용자에게 입력 제한을 명확히 알려줍니다."}}}},g={render:()=>{const[s,d]=o.useState({validContent:"이것은 올바른 내용입니다. 충분한 길이와 적절한 내용을 담고 있습니다.",invalidContent:"너무 짧음",requiredField:"",successField:"완벽한 설명입니다! 이 내용은 모든 요구사항을 만족합니다."}),a=i=>l=>{d(n=>({...n,[i]:l.target.value}))};return e.jsxs("div",{className:"space-y-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"valid-content",children:"유효한 설명"}),e.jsx(t,{id:"valid-content",value:s.validContent,onChange:a("validContent"),className:"border-green-500 focus:border-green-500",rows:3}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-600",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx("span",{children:"훌륭한 설명입니다."})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"invalid-content",children:"설명 (오류)"}),e.jsx(t,{id:"invalid-content",value:s.invalidContent,onChange:a("invalidContent"),className:"border-red-500 focus:border-red-500","aria-invalid":"true","aria-describedby":"content-error",rows:3}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-red-600",children:[e.jsx(S,{className:"h-4 w-4"}),e.jsx("span",{id:"content-error",children:"최소 20자 이상 입력해주세요."})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"required-content",children:["필수 설명",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx(t,{id:"required-content",value:s.requiredField,onChange:a("requiredField"),placeholder:"이 필드는 필수 입력 항목입니다",required:!0,className:s.requiredField?"border-green-500":"border-red-500","aria-describedby":"required-help",rows:4}),e.jsx("div",{className:"flex items-center gap-2 text-sm",children:s.requiredField?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{className:"text-green-600",children:"필수 조건을 만족합니다."})]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{id:"required-help",className:"text-red-600",children:"이 필드는 필수 입력 항목입니다."})]})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"success-content",children:"완벽한 설명"}),e.jsx(t,{id:"success-content",value:s.successField,onChange:a("successField"),className:"border-green-500 focus:border-green-500 bg-green-50",rows:3}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-600",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx("span",{children:"모든 요구사항을 완벽히 만족하는 설명입니다!"})]})]})]})},parameters:{docs:{description:{story:"입력 검증 상태를 보여주는 Textarea 예시입니다. 성공, 오류, 필수 입력 등의 상태를 시각적으로 표현합니다."}}}},v={render:()=>{const[s,d]=o.useState(""),[a,i]=o.useState(!1),l=300,n=()=>{i(!0),setTimeout(()=>{i(!1),d("")},2e3)};return e.jsx("div",{className:"w-[500px] space-y-4",children:e.jsxs(C,{children:[e.jsx(T,{children:e.jsxs(L,{className:"flex items-center gap-2",children:[e.jsx(z,{className:"h-5 w-5"}),"댓글 작성"]})}),e.jsxs(F,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"comment",className:"flex items-center gap-2",children:[e.jsx(R,{className:"h-4 w-4"}),"댓글 내용"]}),e.jsx(t,{id:"comment",placeholder:"댓글을 입력하세요. 건설적이고 예의 바른 의견을 남겨주세요.",value:s,onChange:m=>d(m.target.value),maxLength:l,rows:4,disabled:a}),e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"타인을 존중하는 댓글을 작성해주세요."}),e.jsxs("span",{className:`${s.length>l*.9?"text-orange-500":"text-muted-foreground"}`,children:[s.length,"/",l]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{onClick:n,disabled:!s.trim()||a,className:"flex items-center gap-2",children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"}),"전송 중..."]}):e.jsxs(e.Fragment,{children:[e.jsx(B,{className:"h-4 w-4"}),"댓글 등록"]})}),e.jsxs(c,{variant:"outline",onClick:()=>d(""),disabled:!s||a,children:[e.jsx(I,{className:"h-4 w-4 mr-2"}),"초기화"]})]})]})]})})},parameters:{docs:{description:{story:"댓글 작성 폼의 Textarea 사용 예시입니다. 글자 수 제한, 상태 관리, 제출 로직을 포함합니다."}}}},N={render:()=>{const[s,d]=o.useState(""),[a,i]=o.useState(!1),[l,n]=o.useState(!1),m=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return e.jsx("div",{className:"w-[600px] space-y-4",children:e.jsxs(C,{children:[e.jsx(T,{className:"pb-3",children:e.jsxs(L,{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-5 w-5"}),"새 메시지 작성"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(M,{variant:"outline",className:"text-xs",children:[e.jsx(A,{className:"h-3 w-3 mr-1"}),"임시저장됨"]}),e.jsx(c,{variant:"ghost",size:"sm",onClick:()=>n(!l),children:l?e.jsx(P,{className:"h-4 w-4"}):e.jsx(W,{className:"h-4 w-4"})})]})]})}),e.jsxs(F,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"recipient",children:"받는 사람"}),e.jsx("input",{id:"recipient",className:"w-full p-2 border rounded-md",placeholder:"email@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"subject",children:"제목"}),e.jsx("input",{id:"subject",className:"w-full p-2 border rounded-md",placeholder:"메시지 제목"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"message-content",className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-4 w-4"}),"메시지 내용"]}),e.jsx(t,{id:"message-content",placeholder:"메시지 내용을 입력하세요...",value:s,onChange:w=>d(w.target.value),rows:l?12:6,className:"resize-none transition-all duration-200"}),e.jsxs("div",{className:"flex justify-between items-center text-sm text-muted-foreground",children:[e.jsx("span",{children:"Ctrl+Enter로 빠르게 전송할 수 있습니다."}),e.jsxs("span",{children:[s.length," 글자"]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(c,{variant:"outline",size:"sm",children:[e.jsx(D,{className:"h-4 w-4 mr-2"}),"서식"]}),e.jsx(c,{variant:"outline",size:"sm",children:"첨부파일"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{variant:"outline",onClick:m,disabled:!s.trim(),children:a?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"h-4 w-4 mr-2"}),"저장됨"]}):e.jsxs(e.Fragment,{children:[e.jsx(H,{className:"h-4 w-4 mr-2"}),"임시저장"]})}),e.jsxs(c,{disabled:!s.trim(),children:[e.jsx(B,{className:"h-4 w-4 mr-2"}),"전송"]})]})]})]})]})})},parameters:{docs:{description:{story:"메시지 작성기의 Textarea 사용 예시입니다. 확장/축소, 임시저장, 키보드 단축키 등의 기능을 포함합니다."}}}},b={render:()=>{const[s,d]=o.useState({experience:"",improvement:"",recommendation:""}),[a,i]=o.useState(0),l=n=>m=>{d(w=>({...w,[n]:m.target.value}))};return e.jsx("div",{className:"w-[600px] space-y-6",children:e.jsxs(C,{children:[e.jsx(T,{children:e.jsxs(L,{className:"flex items-center gap-2",children:[e.jsx(k,{className:"h-5 w-5"}),"서비스 피드백"]})}),e.jsxs(F,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{children:"전반적인 만족도"}),e.jsxs("div",{className:"flex items-center gap-1",children:[[1,2,3,4,5].map(n=>e.jsx(c,{variant:"ghost",size:"sm",onClick:()=>i(n),className:"p-1",children:e.jsx(k,{className:`h-6 w-6 ${n<=a?"fill-yellow-400 text-yellow-400":"text-gray-300"}`})},n)),e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:a>0&&`${a}/5점`})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"experience",children:["서비스 이용 경험을 자세히 알려주세요",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx(t,{id:"experience",placeholder:"어떤 점이 좋았거나 아쉬웠는지 구체적으로 설명해주세요.",value:s.experience,onChange:l("experience"),rows:4,required:!0}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"솔직하고 상세한 후기가 서비스 개선에 큰 도움이 됩니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"improvement",children:"개선이 필요한 부분"}),e.jsx(t,{id:"improvement",placeholder:"어떤 기능이나 서비스가 개선되면 좋을지 제안해주세요.",value:s.improvement,onChange:l("improvement"),rows:3})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"recommendation",children:"추천 의사"}),e.jsx(t,{id:"recommendation",placeholder:"다른 사람에게 이 서비스를 추천하시겠습니까? 그 이유는 무엇인가요?",value:s.recommendation,onChange:l("recommendation"),rows:3})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx($,{className:"h-4 w-4"}),e.jsx("span",{children:"제출된 피드백은 서비스 개선을 위해서만 사용됩니다."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{variant:"outline",children:"나중에 작성"}),e.jsx(c,{disabled:!s.experience.trim()||a===0,children:"피드백 제출"})]})]})]})]})})},parameters:{docs:{description:{story:"피드백 폼의 Textarea 사용 예시입니다. 여러 입력 필드와 평점 시스템이 결합된 복합적인 폼입니다."}}}},j={render:()=>e.jsxs("div",{className:"space-y-6 w-[450px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"disabled-text",children:"비활성화된 텍스트 영역"}),e.jsx(t,{id:"disabled-text",disabled:!0,value:"이 텍스트 영역은 편집할 수 없습니다. 비활성화된 상태를 보여주는 예시입니다.",rows:3}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"이 필드는 현재 편집할 수 없는 상태입니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"readonly",children:"읽기 전용"}),e.jsx(t,{id:"readonly",readOnly:!0,value:"이 내용은 읽기 전용입니다. 사용자가 볼 수는 있지만 수정할 수는 없습니다.",className:"bg-muted cursor-default",rows:3}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"읽기 전용 모드입니다. 내용을 확인만 할 수 있습니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"loading-state",children:"로딩 상태"}),e.jsxs("div",{className:"relative",children:[e.jsx(t,{id:"loading-state",placeholder:"데이터를 불러오는 중...",disabled:!0,rows:3}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/50",children:e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx("div",{className:"h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"}),e.jsx("span",{children:"데이터 로딩 중..."})]})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"fixed-size",children:"크기 고정"}),e.jsx(t,{id:"fixed-size",placeholder:"이 텍스트 영역은 크기를 조절할 수 없습니다.",className:"resize-none",rows:4}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"resize-none 클래스로 크기 조절이 비활성화되었습니다."})]})]}),parameters:{docs:{description:{story:"비활성화, 읽기 전용, 로딩 상태, 크기 고정 등 다양한 상태의 Textarea를 보여줍니다."}}}},f={render:()=>{const[s,d]=o.useState({title:"",description:"",feedback:""}),a=i=>l=>{d(n=>({...n,[i]:l.target.value}))};return e.jsxs("div",{className:"space-y-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Textarea 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 텍스트 영역 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Shift+Tab"}),"으로 역방향 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"}),"로 줄바꿈"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Ctrl+A"}),"로 전체 선택"]}),e.jsx("li",{children:"스크린 리더가 라벨, 상태, 글자 수를 정확히 안내"}),e.jsx("li",{children:"에러 메시지와 도움말이 적절히 연결됨"})]})]}),e.jsxs("div",{className:"space-y-4 border rounded-lg p-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"a11y-title",children:["제목",e.jsx("span",{className:"text-red-500 ml-1","aria-label":"필수",children:"*"})]}),e.jsx(t,{id:"a11y-title",value:s.title,onChange:a("title"),placeholder:"글의 제목을 입력하세요",rows:2,required:!0,"aria-describedby":"title-help","aria-invalid":s.title.length>0&&s.title.length<5}),e.jsx("p",{id:"title-help",className:"text-sm text-muted-foreground",children:"5자 이상의 제목을 입력해주세요."}),s.title.length>0&&s.title.length<5&&e.jsx("p",{className:"text-sm text-red-600",role:"alert",children:"제목은 최소 5자 이상이어야 합니다."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"a11y-description",children:"상세 설명"}),e.jsx(t,{id:"a11y-description",value:s.description,onChange:a("description"),placeholder:"자세한 내용을 입력하세요",rows:5,"aria-describedby":"description-help"}),e.jsx("p",{id:"description-help",className:"text-sm text-muted-foreground",children:"독자들이 이해하기 쉽도록 자세히 작성해주세요."})]}),e.jsxs("fieldset",{className:"space-y-2",children:[e.jsx("legend",{className:"text-sm font-medium",children:"추가 의견"}),e.jsx(t,{id:"a11y-feedback",value:s.feedback,onChange:a("feedback"),placeholder:"기타 의견이나 제안사항이 있으시면 작성해주세요",rows:3,"aria-describedby":"feedback-help"}),e.jsx("p",{id:"feedback-help",className:"text-sm text-muted-foreground",children:"선택사항이지만 귀중한 의견을 듣고 싶습니다."})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(c,{className:"flex-1",children:"제출하기"}),e.jsxs(c,{variant:"outline",type:"button",children:[e.jsx(U,{className:"h-4 w-4 mr-2"}),"도움말"]})]})]})]})},parameters:{docs:{description:{story:"Textarea의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "메시지를 입력하세요...",
    rows: 3
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Textarea 컴포넌트입니다. 여러 줄의 텍스트 입력을 위한 깔끔한 디자인을 제공합니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-[400px]">
      <Label htmlFor="message">메시지</Label>
      <Textarea id="message" placeholder="자세한 내용을 입력해주세요" rows={4} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Label과 함께 사용하는 Textarea입니다. 접근성을 위해 htmlFor와 id를 연결해야 합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[450px]">
      <div className="space-y-2">
        <Label htmlFor="small-textarea">소형 (2줄)</Label>
        <Textarea id="small-textarea" placeholder="간단한 메모나 코멘트" rows={2} />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="medium-textarea">중형 (4줄)</Label>
        <Textarea id="medium-textarea" placeholder="일반적인 내용 입력" rows={4} />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="large-textarea">대형 (6줄)</Label>
        <Textarea id="large-textarea" placeholder="긴 내용이나 상세한 설명" rows={6} />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="xl-textarea">특대형 (8줄)</Label>
        <Textarea id="xl-textarea" placeholder="매우 긴 텍스트나 문서 작성" rows={8} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 크기의 Textarea를 보여줍니다. 용도에 따라 적절한 크기를 선택할 수 있습니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = React.useState("");
    const [longText, setLongText] = React.useState("");
    const maxLength = 150;
    const longMaxLength = 500;
    return <div className="space-y-6 w-[450px]">
        <div className="space-y-2">
          <Label htmlFor="char-count">
            간단한 설명 
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Textarea id="char-count" placeholder="상품에 대한 간단한 설명을 입력하세요" value={text} onChange={e => setText(e.target.value)} maxLength={maxLength} rows={3} />
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              필수 입력 항목입니다.
            </span>
            <span className={\`\${text.length > maxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'}\`}>
              {text.length}/{maxLength}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="long-char-count">상세 설명</Label>
          <Textarea id="long-char-count" placeholder="상품의 상세한 설명, 특징, 사용법 등을 자세히 입력해주세요" value={longText} onChange={e => setLongText(e.target.value)} maxLength={longMaxLength} rows={6} />
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">
              최대한 자세하게 작성해주세요.
            </span>
            <div className="flex items-center gap-2">
              {longText.length > longMaxLength * 0.8 && <Badge variant={longText.length >= longMaxLength ? "destructive" : "secondary"}>
                  {longText.length >= longMaxLength ? "한도 초과" : "거의 다참"}
                </Badge>}
              <span className={\`\${longText.length >= longMaxLength ? 'text-red-500' : longText.length > longMaxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'}\`}>
                {longText.length}/{longMaxLength}
              </span>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "글자 수 제한과 실시간 카운터가 있는 Textarea입니다. 사용자에게 입력 제한을 명확히 알려줍니다."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = React.useState({
      validContent: "이것은 올바른 내용입니다. 충분한 길이와 적절한 내용을 담고 있습니다.",
      invalidContent: "너무 짧음",
      requiredField: "",
      successField: "완벽한 설명입니다! 이 내용은 모든 요구사항을 만족합니다."
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="space-y-6 w-[500px]">
        {/* 유효한 내용 */}
        <div className="space-y-2">
          <Label htmlFor="valid-content">유효한 설명</Label>
          <Textarea id="valid-content" value={values.validContent} onChange={handleChange('validContent')} className="border-green-500 focus:border-green-500" rows={3} />
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>훌륭한 설명입니다.</span>
          </div>
        </div>

        {/* 유효하지 않은 내용 */}
        <div className="space-y-2">
          <Label htmlFor="invalid-content">설명 (오류)</Label>
          <Textarea id="invalid-content" value={values.invalidContent} onChange={handleChange('invalidContent')} className="border-red-500 focus:border-red-500" aria-invalid="true" aria-describedby="content-error" rows={3} />
          <div className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            <span id="content-error">최소 20자 이상 입력해주세요.</span>
          </div>
        </div>

        {/* 필수 입력 필드 */}
        <div className="space-y-2">
          <Label htmlFor="required-content">
            필수 설명 
            <span className="text-red-500 ml-1">*</span>
          </Label>
          <Textarea id="required-content" value={values.requiredField} onChange={handleChange('requiredField')} placeholder="이 필드는 필수 입력 항목입니다" required className={values.requiredField ? "border-green-500" : "border-red-500"} aria-describedby="required-help" rows={4} />
          <div className="flex items-center gap-2 text-sm">
            {values.requiredField ? <>
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-green-600">필수 조건을 만족합니다.</span>
              </> : <>
                <AlertCircle className="h-4 w-4 text-red-500" />
                <span id="required-help" className="text-red-600">이 필드는 필수 입력 항목입니다.</span>
              </>}
          </div>
        </div>

        {/* 성공 상태 */}
        <div className="space-y-2">
          <Label htmlFor="success-content">완벽한 설명</Label>
          <Textarea id="success-content" value={values.successField} onChange={handleChange('successField')} className="border-green-500 focus:border-green-500 bg-green-50" rows={3} />
          <div className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle className="h-4 w-4" />
            <span>모든 요구사항을 완벽히 만족하는 설명입니다!</span>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "입력 검증 상태를 보여주는 Textarea 예시입니다. 성공, 오류, 필수 입력 등의 상태를 시각적으로 표현합니다."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [comment, setComment] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const maxLength = 300;
    const handleSubmit = () => {
      setIsSubmitting(true);
      // 실제 제출 로직 시뮬레이션
      setTimeout(() => {
        setIsSubmitting(false);
        setComment("");
      }, 2000);
    };
    return <div className="w-[500px] space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              댓글 작성
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="comment" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                댓글 내용
              </Label>
              <Textarea id="comment" placeholder="댓글을 입력하세요. 건설적이고 예의 바른 의견을 남겨주세요." value={comment} onChange={e => setComment(e.target.value)} maxLength={maxLength} rows={4} disabled={isSubmitting} />
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">
                  타인을 존중하는 댓글을 작성해주세요.
                </span>
                <span className={\`\${comment.length > maxLength * 0.9 ? 'text-orange-500' : 'text-muted-foreground'}\`}>
                  {comment.length}/{maxLength}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button onClick={handleSubmit} disabled={!comment.trim() || isSubmitting} className="flex items-center gap-2">
                {isSubmitting ? <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    전송 중...
                  </> : <>
                    <Send className="h-4 w-4" />
                    댓글 등록
                  </>}
              </Button>
              <Button variant="outline" onClick={() => setComment("")} disabled={!comment || isSubmitting}>
                <RotateCcw className="h-4 w-4 mr-2" />
                초기화
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "댓글 작성 폼의 Textarea 사용 예시입니다. 글자 수 제한, 상태 관리, 제출 로직을 포함합니다."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [message, setMessage] = React.useState("");
    const [isDraft, setIsDraft] = React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const handleSaveDraft = () => {
      setIsDraft(true);
      setTimeout(() => setIsDraft(false), 2000);
    };
    return <div className="w-[600px] space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                새 메시지 작성
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  임시저장됨
                </Badge>
                <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">받는 사람</Label>
                  <input id="recipient" className="w-full p-2 border rounded-md" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">제목</Label>
                  <input id="subject" className="w-full p-2 border rounded-md" placeholder="메시지 제목" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message-content" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  메시지 내용
                </Label>
                <Textarea id="message-content" placeholder="메시지 내용을 입력하세요..." value={message} onChange={e => setMessage(e.target.value)} rows={isExpanded ? 12 : 6} className="resize-none transition-all duration-200" />
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Ctrl+Enter로 빠르게 전송할 수 있습니다.</span>
                  <span>{message.length} 글자</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Type className="h-4 w-4 mr-2" />
                  서식
                </Button>
                <Button variant="outline" size="sm">
                  첨부파일
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={handleSaveDraft} disabled={!message.trim()}>
                  {isDraft ? <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      저장됨
                    </> : <>
                      <Save className="h-4 w-4 mr-2" />
                      임시저장
                    </>}
                </Button>
                <Button disabled={!message.trim()}>
                  <Send className="h-4 w-4 mr-2" />
                  전송
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "메시지 작성기의 Textarea 사용 예시입니다. 확장/축소, 임시저장, 키보드 단축키 등의 기능을 포함합니다."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [feedback, setFeedback] = React.useState({
      experience: "",
      improvement: "",
      recommendation: ""
    });
    const [rating, setRating] = React.useState(0);
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFeedback(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="w-[600px] space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              서비스 피드백
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>전반적인 만족도</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(star => <Button key={star} variant="ghost" size="sm" onClick={() => setRating(star)} className="p-1">
                      <Star className={\`h-6 w-6 \${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}\`} />
                    </Button>)}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {rating > 0 && \`\${rating}/5점\`}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">
                  서비스 이용 경험을 자세히 알려주세요 
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Textarea id="experience" placeholder="어떤 점이 좋았거나 아쉬웠는지 구체적으로 설명해주세요." value={feedback.experience} onChange={handleChange('experience')} rows={4} required />
                <p className="text-sm text-muted-foreground">
                  솔직하고 상세한 후기가 서비스 개선에 큰 도움이 됩니다.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="improvement">개선이 필요한 부분</Label>
                <Textarea id="improvement" placeholder="어떤 기능이나 서비스가 개선되면 좋을지 제안해주세요." value={feedback.improvement} onChange={handleChange('improvement')} rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recommendation">추천 의사</Label>
                <Textarea id="recommendation" placeholder="다른 사람에게 이 서비스를 추천하시겠습니까? 그 이유는 무엇인가요?" value={feedback.recommendation} onChange={handleChange('recommendation')} rows={3} />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>제출된 피드백은 서비스 개선을 위해서만 사용됩니다.</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">나중에 작성</Button>
                <Button disabled={!feedback.experience.trim() || rating === 0}>
                  피드백 제출
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "피드백 폼의 Textarea 사용 예시입니다. 여러 입력 필드와 평점 시스템이 결합된 복합적인 폼입니다."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[450px]">
      <div className="space-y-2">
        <Label htmlFor="disabled-text">비활성화된 텍스트 영역</Label>
        <Textarea id="disabled-text" disabled value="이 텍스트 영역은 편집할 수 없습니다. 비활성화된 상태를 보여주는 예시입니다." rows={3} />
        <p className="text-sm text-muted-foreground">
          이 필드는 현재 편집할 수 없는 상태입니다.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="readonly">읽기 전용</Label>
        <Textarea id="readonly" readOnly value="이 내용은 읽기 전용입니다. 사용자가 볼 수는 있지만 수정할 수는 없습니다." className="bg-muted cursor-default" rows={3} />
        <p className="text-sm text-muted-foreground">
          읽기 전용 모드입니다. 내용을 확인만 할 수 있습니다.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="loading-state">로딩 상태</Label>
        <div className="relative">
          <Textarea id="loading-state" placeholder="데이터를 불러오는 중..." disabled rows={3} />
          <div className="absolute inset-0 flex items-center justify-center bg-background/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
              <span>데이터 로딩 중...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fixed-size">크기 고정</Label>
        <Textarea id="fixed-size" placeholder="이 텍스트 영역은 크기를 조절할 수 없습니다." className="resize-none" rows={4} />
        <p className="text-sm text-muted-foreground">
          resize-none 클래스로 크기 조절이 비활성화되었습니다.
        </p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "비활성화, 읽기 전용, 로딩 상태, 크기 고정 등 다양한 상태의 Textarea를 보여줍니다."
      }
    }
  }
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formValues, setFormValues] = React.useState({
      title: "",
      description: "",
      feedback: ""
    });
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };
    return <div className="space-y-6 w-[500px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Textarea 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 텍스트 영역 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Shift+Tab</kbd>으로 역방향 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 줄바꿈</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl+A</kbd>로 전체 선택</li>
            <li>스크린 리더가 라벨, 상태, 글자 수를 정확히 안내</li>
            <li>에러 메시지와 도움말이 적절히 연결됨</li>
          </ul>
        </div>

        <div className="space-y-4 border rounded-lg p-4">
          <div className="space-y-2">
            <Label htmlFor="a11y-title">
              제목
              <span className="text-red-500 ml-1" aria-label="필수">*</span>
            </Label>
            <Textarea id="a11y-title" value={formValues.title} onChange={handleChange('title')} placeholder="글의 제목을 입력하세요" rows={2} required aria-describedby="title-help" aria-invalid={formValues.title.length > 0 && formValues.title.length < 5} />
            <p id="title-help" className="text-sm text-muted-foreground">
              5자 이상의 제목을 입력해주세요.
            </p>
            {formValues.title.length > 0 && formValues.title.length < 5 && <p className="text-sm text-red-600" role="alert">
                제목은 최소 5자 이상이어야 합니다.
              </p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="a11y-description">상세 설명</Label>
            <Textarea id="a11y-description" value={formValues.description} onChange={handleChange('description')} placeholder="자세한 내용을 입력하세요" rows={5} aria-describedby="description-help" />
            <p id="description-help" className="text-sm text-muted-foreground">
              독자들이 이해하기 쉽도록 자세히 작성해주세요.
            </p>
          </div>

          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">추가 의견</legend>
            <Textarea id="a11y-feedback" value={formValues.feedback} onChange={handleChange('feedback')} placeholder="기타 의견이나 제안사항이 있으시면 작성해주세요" rows={3} aria-describedby="feedback-help" />
            <p id="feedback-help" className="text-sm text-muted-foreground">
              선택사항이지만 귀중한 의견을 듣고 싶습니다.
            </p>
          </fieldset>

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
        story: "Textarea의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};export{f as AccessibilityDemo,v as CommentForm,x as Default,h as DifferentSizes,j as DisabledStates,b as FeedbackForm,N as MessageComposer,g as ValidationStates,u as WithCharacterCount,p as WithLabel,je as default};
