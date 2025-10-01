import{j as e}from"./jsx-runtime-CUYHGflD.js";import{e as x}from"./iframe-DUkcZvY3.js";import{C as r}from"./checkbox-BWp78CEO.js";import{L as a}from"./label-CNtROhFH.js";import{B as m}from"./button-BH1IU7qt.js";import{C as p,a as u,b as f,c as R,d as k}from"./card-DMQXtJ8M.js";import{M as A}from"./mail-BoLUSuM8.js";import{B as S}from"./bell-ComvyyFT.js";import{S as T}from"./shield-BT_8lB0I.js";import{S as B}from"./star-CZy5D_eT.js";import{P as _}from"./phone-pwtmtqkz.js";import"./index-Qk9vCU2k.js";import"./index-dEzg-V8q.js";import"./index-DtkgH7QJ.js";import"./index-D7Dk64nB.js";import"./index-DWdLTfjM.js";import"./index-CH9WEn8E.js";import"./index-B0-S_xVN.js";import"./index-Dr9TOaCp.js";import"./index-BSYvLJny.js";import"./utils-CBfrqCZ4.js";import"./check-Dvb3UiJt.js";import"./createLucideIcon-BYaaJxR_.js";import"./index-CdJFUDDL.js";const te={title:"UI/Forms/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:`
사용자가 여러 선택지 중 하나 이상을 선택할 수 있는 Checkbox 컴포넌트입니다. 폼에서 동의, 설정, 필터링 등에 사용됩니다.

## 주요 기능
- **다중 선택**: 여러 옵션을 동시에 선택 가능
- **3가지 상태**: checked, unchecked, indeterminate 지원
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 완벽 지원
- **키보드 네비게이션**: Tab, Space, Enter 키 완벽 지원
- **라벨 연동**: Label 클릭으로 체크박스 제어 가능
- **폼 통합**: HTML5 form validation과 완벽 호환
- **커스터마이징**: 다양한 크기와 스타일 지원

## 사용법
\`\`\`tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// 기본 사용법
<Checkbox id="terms" />

// 라벨과 함께
<div className="flex items-center space-x-2">
  <Checkbox id="notifications" />
  <Label htmlFor="notifications">알림 받기</Label>
</div>

// 제어된 컴포넌트
const [checked, setChecked] = useState(false)
<Checkbox 
  checked={checked} 
  onCheckedChange={setChecked}
/>

// Indeterminate 상태
<Checkbox 
  checked="indeterminate"
  onCheckedChange={handleChange}
/>
\`\`\`

## Props
- \`checked\`: 체크 상태 (boolean | "indeterminate")
- \`onCheckedChange\`: 상태 변경 핸들러
- \`disabled\`: 비활성화 상태
- \`required\`: 필수 선택 여부
- \`name\`: 폼 필드 이름
- \`value\`: 폼 값
- \`id\`: 요소 ID (라벨 연결용)

## 상태
- **Unchecked**: 선택되지 않은 기본 상태
- **Checked**: 선택된 상태 (체크 표시)
- **Indeterminate**: 부분 선택 상태 (하위 항목 일부만 선택)
- **Disabled**: 비활성화된 상태

## 접근성
- **ARIA 역할**: \`checkbox\` 역할로 스크린 리더 인식
- **키보드 지원**: Space/Enter로 토글, Tab으로 이동
- **라벨 연결**: \`htmlFor\`와 \`id\`로 라벨과 연결
- **상태 안내**: checked, unchecked, mixed 상태를 명확히 전달
- **그룹핑**: fieldset과 legend로 관련 체크박스 그룹화

## 사용 사례
- **약관 동의**: 이용약관, 개인정보처리방침 동의
- **설정 옵션**: 알림, 보안, 표시 설정
- **필터링**: 검색 결과 필터, 카테고리 선택
- **할일 목록**: 완료/미완료 상태 표시
- **권한 설정**: 사용자 권한, 역할 선택
- **선택 목록**: 여러 항목 일괄 선택

## 모범 사례
- 모든 체크박스에 의미있는 라벨 제공
- 그룹 체크박스는 fieldset으로 묶기
- Indeterminate 상태는 부분 선택에만 사용
- 긴 목록에서는 "전체 선택" 기능 제공
- 필수 선택 항목은 명확히 표시
- 비활성화 사유를 툴팁이나 설명으로 제공
        `}}},tags:["autodocs"],argTypes:{checked:{control:"select",options:[!0,!1,"indeterminate"],description:"체크박스 상태"},disabled:{control:"boolean",description:"비활성화 상태"},required:{control:"boolean",description:"필수 선택 여부"}},render:s=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"story-checkbox",...s}),e.jsx(a,{htmlFor:"story-checkbox",children:"체크박스 라벨"})]})},g={args:{checked:!1,disabled:!1},parameters:{docs:{description:{story:"기본 Checkbox 컴포넌트입니다. 클릭하거나 스페이스바로 토글할 수 있습니다."}}}},v={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"unchecked",checked:!1}),e.jsx(a,{htmlFor:"unchecked",children:"선택되지 않음"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"checked",checked:!0}),e.jsx(a,{htmlFor:"checked",children:"선택됨"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"indeterminate",checked:"indeterminate"}),e.jsx(a,{htmlFor:"indeterminate",children:"부분 선택 (Indeterminate)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"disabled-unchecked",disabled:!0,checked:!1}),e.jsx(a,{htmlFor:"disabled-unchecked",className:"text-muted-foreground",children:"비활성화 (선택 안됨)"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"disabled-checked",disabled:!0,checked:!0}),e.jsx(a,{htmlFor:"disabled-checked",className:"text-muted-foreground",children:"비활성화 (선택됨)"})]})]}),parameters:{docs:{description:{story:"Checkbox의 다양한 상태를 보여줍니다. checked, unchecked, indeterminate, disabled 상태를 확인할 수 있습니다."}}}},b={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"email"}),e.jsx(A,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(a,{htmlFor:"email",children:"이메일 알림 받기"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"push"}),e.jsx(S,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(a,{htmlFor:"push",children:"푸시 알림 받기"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"security"}),e.jsx(T,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(a,{htmlFor:"security",children:"보안 알림 받기"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"marketing"}),e.jsx(B,{className:"h-4 w-4 text-muted-foreground"}),e.jsx(a,{htmlFor:"marketing",children:"마케팅 정보 받기"})]})]}),parameters:{docs:{description:{story:"아이콘과 함께 사용하는 Checkbox입니다. 시각적으로 더 명확한 의미 전달이 가능합니다."}}}},C={render:()=>{const[s,l]=x.useState({terms:!1,privacy:!1,marketing:!1,age:!1}),t=s.terms&&s.privacy&&s.age,d=t&&s.marketing,o=n=>{l({terms:n,privacy:n,marketing:n,age:n})},i=n=>h=>{l(c=>({...c,[n]:h}))};return e.jsxs(p,{className:"w-[400px]",children:[e.jsxs(u,{children:[e.jsx(f,{children:"회원가입 약관 동의"}),e.jsx(R,{children:"서비스 이용을 위해 필요한 약관에 동의해주세요."})]}),e.jsxs(k,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2 pb-2 border-b",children:[e.jsx(r,{id:"all-agreements",checked:d?!0:t?"indeterminate":!1,onCheckedChange:o}),e.jsx(a,{htmlFor:"all-agreements",className:"font-medium",children:"전체 동의"})]}),e.jsxs("div",{className:"space-y-3 ml-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"terms",checked:s.terms,onCheckedChange:i("terms")}),e.jsxs(a,{htmlFor:"terms",children:["이용약관 동의 ",e.jsx("span",{className:"text-red-500",children:"*"})]})]}),e.jsx(m,{variant:"ghost",size:"sm",className:"text-xs",children:"보기"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"privacy",checked:s.privacy,onCheckedChange:i("privacy")}),e.jsxs(a,{htmlFor:"privacy",children:["개인정보처리방침 동의 ",e.jsx("span",{className:"text-red-500",children:"*"})]})]}),e.jsx(m,{variant:"ghost",size:"sm",className:"text-xs",children:"보기"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"marketing",checked:s.marketing,onCheckedChange:i("marketing")}),e.jsx(a,{htmlFor:"marketing",children:"마케팅 정보 수신 동의 (선택)"})]}),e.jsx(m,{variant:"ghost",size:"sm",className:"text-xs",children:"보기"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"age",checked:s.age,onCheckedChange:i("age")}),e.jsxs(a,{htmlFor:"age",children:["만 14세 이상입니다 ",e.jsx("span",{className:"text-red-500",children:"*"})]})]})]}),e.jsx("div",{className:"pt-4",children:e.jsx(m,{className:"w-full",disabled:!t,children:"회원가입 계속하기"})})]})]})},parameters:{docs:{description:{story:"약관 동의 폼의 Checkbox 사용 예시입니다. 전체 선택, 부분 선택, 필수/선택 구분을 보여줍니다."}}}},N={render:()=>{const[s,l]=x.useState({email:{news:!0,updates:!1,security:!0,marketing:!1},push:{messages:!0,mentions:!0,likes:!1,comments:!0},sms:{security:!0,reminders:!1,promotions:!1}}),t=(d,o)=>i=>{l(n=>({...n,[d]:{...n[d],[o]:i}}))};return e.jsx("div",{className:"w-[500px] space-y-6",children:e.jsxs(p,{children:[e.jsxs(u,{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-5 w-5"}),"알림 설정"]}),e.jsx(R,{children:"받고 싶은 알림 유형을 선택해주세요."})]}),e.jsxs(k,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"h-4 w-4"}),e.jsx("h3",{className:"font-medium",children:"이메일 알림"})]}),e.jsxs("div",{className:"ml-6 space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"email-news",checked:s.email.news,onCheckedChange:t("email","news")}),e.jsx(a,{htmlFor:"email-news",children:"뉴스레터"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"email-updates",checked:s.email.updates,onCheckedChange:t("email","updates")}),e.jsx(a,{htmlFor:"email-updates",children:"제품 업데이트"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"email-security",checked:s.email.security,onCheckedChange:t("email","security")}),e.jsx(a,{htmlFor:"email-security",children:"보안 알림"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"email-marketing",checked:s.email.marketing,onCheckedChange:t("email","marketing")}),e.jsx(a,{htmlFor:"email-marketing",children:"마케팅 정보"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-4 w-4"}),e.jsx("h3",{className:"font-medium",children:"푸시 알림"})]}),e.jsxs("div",{className:"ml-6 space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"push-messages",checked:s.push.messages,onCheckedChange:t("push","messages")}),e.jsx(a,{htmlFor:"push-messages",children:"새 메시지"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"push-mentions",checked:s.push.mentions,onCheckedChange:t("push","mentions")}),e.jsx(a,{htmlFor:"push-mentions",children:"멘션"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"push-likes",checked:s.push.likes,onCheckedChange:t("push","likes")}),e.jsx(a,{htmlFor:"push-likes",children:"좋아요"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"push-comments",checked:s.push.comments,onCheckedChange:t("push","comments")}),e.jsx(a,{htmlFor:"push-comments",children:"댓글"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-4 w-4"}),e.jsx("h3",{className:"font-medium",children:"SMS 알림"})]}),e.jsxs("div",{className:"ml-6 space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"sms-security",checked:s.sms.security,onCheckedChange:t("sms","security")}),e.jsx(a,{htmlFor:"sms-security",children:"보안 알림"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"sms-reminders",checked:s.sms.reminders,onCheckedChange:t("sms","reminders")}),e.jsx(a,{htmlFor:"sms-reminders",children:"일정 리마인더"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"sms-promotions",checked:s.sms.promotions,onCheckedChange:t("sms","promotions")}),e.jsx(a,{htmlFor:"sms-promotions",children:"프로모션 정보"})]})]})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(m,{className:"flex-1",children:"설정 저장"}),e.jsx(m,{variant:"outline",children:"초기화"})]})]})]})})},parameters:{docs:{description:{story:"알림 설정 폼의 Checkbox 사용 예시입니다. 카테고리별로 그룹화된 설정 옵션을 보여줍니다."}}}},j={render:()=>{const[s,l]=x.useState([{id:1,text:"프로젝트 계획서 작성",completed:!0},{id:2,text:"디자인 시스템 구축",completed:!0},{id:3,text:"API 개발",completed:!1},{id:4,text:"프론트엔드 구현",completed:!1},{id:5,text:"테스트 코드 작성",completed:!1},{id:6,text:"배포 준비",completed:!1}]),t=s.filter(c=>c.completed).length,d=s.length,o=t===d,i=t>0&&t<d,n=c=>{l(s.map(L=>({...L,completed:c})))},h=c=>L=>{l(s.map(w=>w.id===c?{...w,completed:L}:w))};return e.jsxs(p,{className:"w-[400px]",children:[e.jsx(u,{children:e.jsxs(f,{className:"flex items-center justify-between",children:[e.jsx("span",{children:"프로젝트 할 일 목록"}),e.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:[t,"/",d," 완료"]})]})}),e.jsxs(k,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-2 pb-2 border-b",children:[e.jsx(r,{id:"toggle-all",checked:o?!0:i?"indeterminate":!1,onCheckedChange:n}),e.jsx(a,{htmlFor:"toggle-all",className:"font-medium",children:"전체 선택"})]}),e.jsx("div",{className:"space-y-2",children:s.map(c=>e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:`todo-${c.id}`,checked:c.completed,onCheckedChange:h(c.id)}),e.jsx(a,{htmlFor:`todo-${c.id}`,className:`flex-1 ${c.completed?"line-through text-muted-foreground":""}`,children:c.text})]},c.id))}),e.jsxs("div",{className:"pt-4 border-t",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm text-muted-foreground",children:[e.jsx("span",{children:"진행률"}),e.jsxs("span",{children:[Math.round(t/d*100),"%"]})]}),e.jsx("div",{className:"mt-2 w-full bg-muted rounded-full h-2",children:e.jsx("div",{className:"bg-primary rounded-full h-2 transition-all duration-300",style:{width:`${t/d*100}%`}})})]})]})]})},parameters:{docs:{description:{story:"할 일 목록의 Checkbox 사용 예시입니다. 개별 체크, 전체 선택, 진행률 표시 기능을 포함합니다."}}}},y={render:()=>{const[s,l]=x.useState({categories:{electronics:!1,clothing:!0,books:!1,home:!0,sports:!1},priceRange:{under50:!1,between50_100:!0,between100_200:!1,over200:!1},brands:{apple:!0,samsung:!1,nike:!0,adidas:!1},features:{freeShipping:!0,inStock:!0,onSale:!1,newArrival:!1}}),t=(i,n)=>h=>{l(c=>({...c,[i]:{...c[i],[n]:h}}))},d=()=>{l({categories:{electronics:!1,clothing:!1,books:!1,home:!1,sports:!1},priceRange:{under50:!1,between50_100:!1,between100_200:!1,over200:!1},brands:{apple:!1,samsung:!1,nike:!1,adidas:!1},features:{freeShipping:!1,inStock:!1,onSale:!1,newArrival:!1}})},o=Object.values(s).reduce((i,n)=>i+Object.values(n).filter(Boolean).length,0);return e.jsx("div",{className:"w-[300px] space-y-6",children:e.jsxs(p,{children:[e.jsx(u,{children:e.jsxs(f,{className:"flex items-center justify-between",children:[e.jsx("span",{children:"필터"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-sm font-normal text-muted-foreground",children:[o,"개 선택"]}),e.jsx(m,{variant:"ghost",size:"sm",onClick:d,disabled:o===0,children:"초기화"})]})]})}),e.jsxs(k,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-medium",children:"카테고리"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"electronics",checked:s.categories.electronics,onCheckedChange:t("categories","electronics")}),e.jsx(a,{htmlFor:"electronics",children:"전자제품"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"clothing",checked:s.categories.clothing,onCheckedChange:t("categories","clothing")}),e.jsx(a,{htmlFor:"clothing",children:"의류"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"books",checked:s.categories.books,onCheckedChange:t("categories","books")}),e.jsx(a,{htmlFor:"books",children:"도서"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"home",checked:s.categories.home,onCheckedChange:t("categories","home")}),e.jsx(a,{htmlFor:"home",children:"홈&가든"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"sports",checked:s.categories.sports,onCheckedChange:t("categories","sports")}),e.jsx(a,{htmlFor:"sports",children:"스포츠"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-medium",children:"가격 범위"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"under50",checked:s.priceRange.under50,onCheckedChange:t("priceRange","under50")}),e.jsx(a,{htmlFor:"under50",children:"5만원 미만"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"between50_100",checked:s.priceRange.between50_100,onCheckedChange:t("priceRange","between50_100")}),e.jsx(a,{htmlFor:"between50_100",children:"5만원 - 10만원"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"between100_200",checked:s.priceRange.between100_200,onCheckedChange:t("priceRange","between100_200")}),e.jsx(a,{htmlFor:"between100_200",children:"10만원 - 20만원"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"over200",checked:s.priceRange.over200,onCheckedChange:t("priceRange","over200")}),e.jsx(a,{htmlFor:"over200",children:"20만원 이상"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"font-medium",children:"특별 옵션"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"freeShipping",checked:s.features.freeShipping,onCheckedChange:t("features","freeShipping")}),e.jsx(a,{htmlFor:"freeShipping",children:"무료배송"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"inStock",checked:s.features.inStock,onCheckedChange:t("features","inStock")}),e.jsx(a,{htmlFor:"inStock",children:"재고 있음"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"onSale",checked:s.features.onSale,onCheckedChange:t("features","onSale")}),e.jsx(a,{htmlFor:"onSale",children:"할인 중"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"newArrival",checked:s.features.newArrival,onCheckedChange:t("features","newArrival")}),e.jsx(a,{htmlFor:"newArrival",children:"신상품"})]})]})]})]})]})})},parameters:{docs:{description:{story:"필터링 옵션의 Checkbox 사용 예시입니다. 카테고리별 필터링과 선택된 필터 개수 표시를 포함합니다."}}}},F={render:()=>{const[s,l]=x.useState({highContrast:!1,largeText:!0,screenReader:!1,keyboardNav:!0,animations:!1}),t=d=>o=>{l(i=>({...i,[d]:o}))};return e.jsxs("div",{className:"space-y-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Checkbox 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 체크박스 간 이동"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Space"}),"로 체크박스 토글"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"}),"로도 선택 가능"]}),e.jsx("li",{children:"라벨 클릭으로 체크박스 제어"}),e.jsx("li",{children:"스크린 리더가 상태와 라벨을 명확히 안내"}),e.jsx("li",{children:"그룹화된 체크박스는 fieldset으로 구조화"})]})]}),e.jsxs(p,{children:[e.jsxs(u,{children:[e.jsx(f,{children:"접근성 설정"}),e.jsx(R,{children:"사용하기 편한 환경으로 설정을 조정해보세요."})]}),e.jsxs(k,{children:[e.jsxs("fieldset",{className:"space-y-4",children:[e.jsx("legend",{className:"sr-only",children:"접근성 환경 설정"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"시각적 접근성"}),e.jsxs("div",{className:"ml-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"high-contrast",checked:s.highContrast,onCheckedChange:t("highContrast"),"aria-describedby":"high-contrast-desc"}),e.jsx(a,{htmlFor:"high-contrast",children:"고대비 모드"})]}),e.jsx("p",{id:"high-contrast-desc",className:"text-sm text-muted-foreground ml-6",children:"텍스트와 배경의 대비를 높여 가독성을 향상시킵니다."}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"large-text",checked:s.largeText,onCheckedChange:t("largeText"),"aria-describedby":"large-text-desc"}),e.jsx(a,{htmlFor:"large-text",children:"큰 글씨"})]}),e.jsx("p",{id:"large-text-desc",className:"text-sm text-muted-foreground ml-6",children:"모든 텍스트 크기를 120%로 확대합니다."})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"보조 기술"}),e.jsxs("div",{className:"ml-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"screen-reader",checked:s.screenReader,onCheckedChange:t("screenReader"),"aria-describedby":"screen-reader-desc"}),e.jsx(a,{htmlFor:"screen-reader",children:"스크린 리더 최적화"})]}),e.jsx("p",{id:"screen-reader-desc",className:"text-sm text-muted-foreground ml-6",children:"스크린 리더 사용자를 위한 추가 설명과 안내를 제공합니다."}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"keyboard-nav",checked:s.keyboardNav,onCheckedChange:t("keyboardNav"),"aria-describedby":"keyboard-nav-desc"}),e.jsx(a,{htmlFor:"keyboard-nav",children:"키보드 네비게이션 강화"})]}),e.jsx("p",{id:"keyboard-nav-desc",className:"text-sm text-muted-foreground ml-6",children:"키보드 포커스를 더 명확하게 표시하고 단축키를 활성화합니다."})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-medium",children:"동작 및 애니메이션"}),e.jsxs("div",{className:"ml-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(r,{id:"animations",checked:s.animations,onCheckedChange:t("animations"),"aria-describedby":"animations-desc"}),e.jsx(a,{htmlFor:"animations",children:"애니메이션 줄이기"})]}),e.jsx("p",{id:"animations-desc",className:"text-sm text-muted-foreground ml-6",children:"멀미나 주의력 분산을 방지하기 위해 움직임을 최소화합니다."})]})]})]}),e.jsxs("div",{className:"flex gap-3 pt-6 border-t",children:[e.jsx(m,{className:"flex-1",children:"설정 저장"}),e.jsx(m,{variant:"outline",children:"기본값으로 복원"})]})]})]})]})},parameters:{docs:{description:{story:"Checkbox의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Checkbox 컴포넌트입니다. 클릭하거나 스페이스바로 토글할 수 있습니다."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="unchecked" checked={false} />\r
        <Label htmlFor="unchecked">선택되지 않음</Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="checked" checked={true} />\r
        <Label htmlFor="checked">선택됨</Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="indeterminate" checked="indeterminate" />\r
        <Label htmlFor="indeterminate">부분 선택 (Indeterminate)</Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="disabled-unchecked" disabled={true} checked={false} />\r
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">\r
          비활성화 (선택 안됨)\r
        </Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="disabled-checked" disabled={true} checked={true} />\r
        <Label htmlFor="disabled-checked" className="text-muted-foreground">\r
          비활성화 (선택됨)\r
        </Label>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Checkbox의 다양한 상태를 보여줍니다. checked, unchecked, indeterminate, disabled 상태를 확인할 수 있습니다."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="email" />\r
        <Mail className="h-4 w-4 text-muted-foreground" />\r
        <Label htmlFor="email">이메일 알림 받기</Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="push" />\r
        <Bell className="h-4 w-4 text-muted-foreground" />\r
        <Label htmlFor="push">푸시 알림 받기</Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="security" />\r
        <Shield className="h-4 w-4 text-muted-foreground" />\r
        <Label htmlFor="security">보안 알림 받기</Label>\r
      </div>\r
      \r
      <div className="flex items-center space-x-2">\r
        <Checkbox id="marketing" />\r
        <Star className="h-4 w-4 text-muted-foreground" />\r
        <Label htmlFor="marketing">마케팅 정보 받기</Label>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "아이콘과 함께 사용하는 Checkbox입니다. 시각적으로 더 명확한 의미 전달이 가능합니다."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [agreements, setAgreements] = React.useState({
      terms: false,
      privacy: false,
      marketing: false,
      age: false
    });
    const allRequired = agreements.terms && agreements.privacy && agreements.age;
    const allChecked = allRequired && agreements.marketing;
    const handleAllChange = (checked: boolean) => {
      setAgreements({
        terms: checked,
        privacy: checked,
        marketing: checked,
        age: checked
      });
    };
    const handleSingleChange = (key: string) => (checked: boolean) => {
      setAgreements(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <Card className="w-[400px]">\r
        <CardHeader>\r
          <CardTitle>회원가입 약관 동의</CardTitle>\r
          <CardDescription>\r
            서비스 이용을 위해 필요한 약관에 동의해주세요.\r
          </CardDescription>\r
        </CardHeader>\r
        <CardContent className="space-y-4">\r
          <div className="flex items-center space-x-2 pb-2 border-b">\r
            <Checkbox id="all-agreements" checked={allChecked ? true : allRequired ? "indeterminate" : false} onCheckedChange={handleAllChange} />\r
            <Label htmlFor="all-agreements" className="font-medium">\r
              전체 동의\r
            </Label>\r
          </div>\r
          \r
          <div className="space-y-3 ml-4">\r
            <div className="flex items-center justify-between">\r
              <div className="flex items-center space-x-2">\r
                <Checkbox id="terms" checked={agreements.terms} onCheckedChange={handleSingleChange('terms')} />\r
                <Label htmlFor="terms">\r
                  이용약관 동의 <span className="text-red-500">*</span>\r
                </Label>\r
              </div>\r
              <Button variant="ghost" size="sm" className="text-xs">\r
                보기\r
              </Button>\r
            </div>\r
            \r
            <div className="flex items-center justify-between">\r
              <div className="flex items-center space-x-2">\r
                <Checkbox id="privacy" checked={agreements.privacy} onCheckedChange={handleSingleChange('privacy')} />\r
                <Label htmlFor="privacy">\r
                  개인정보처리방침 동의 <span className="text-red-500">*</span>\r
                </Label>\r
              </div>\r
              <Button variant="ghost" size="sm" className="text-xs">\r
                보기\r
              </Button>\r
            </div>\r
            \r
            <div className="flex items-center justify-between">\r
              <div className="flex items-center space-x-2">\r
                <Checkbox id="marketing" checked={agreements.marketing} onCheckedChange={handleSingleChange('marketing')} />\r
                <Label htmlFor="marketing">\r
                  마케팅 정보 수신 동의 (선택)\r
                </Label>\r
              </div>\r
              <Button variant="ghost" size="sm" className="text-xs">\r
                보기\r
              </Button>\r
            </div>\r
            \r
            <div className="flex items-center space-x-2">\r
              <Checkbox id="age" checked={agreements.age} onCheckedChange={handleSingleChange('age')} />\r
              <Label htmlFor="age">\r
                만 14세 이상입니다 <span className="text-red-500">*</span>\r
              </Label>\r
            </div>\r
          </div>\r
          \r
          <div className="pt-4">\r
            <Button className="w-full" disabled={!allRequired}>\r
              회원가입 계속하기\r
            </Button>\r
          </div>\r
        </CardContent>\r
      </Card>;
  },
  parameters: {
    docs: {
      description: {
        story: "약관 동의 폼의 Checkbox 사용 예시입니다. 전체 선택, 부분 선택, 필수/선택 구분을 보여줍니다."
      }
    }
  }
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notifications, setNotifications] = React.useState({
      email: {
        news: true,
        updates: false,
        security: true,
        marketing: false
      },
      push: {
        messages: true,
        mentions: true,
        likes: false,
        comments: true
      },
      sms: {
        security: true,
        reminders: false,
        promotions: false
      }
    });
    const updateNotification = (category: string, key: string) => (checked: boolean) => {
      setNotifications(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [key]: checked
        }
      }));
    };
    return <div className="w-[500px] space-y-6">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center gap-2">\r
              <Bell className="h-5 w-5" />\r
              알림 설정\r
            </CardTitle>\r
            <CardDescription>\r
              받고 싶은 알림 유형을 선택해주세요.\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            {/* 이메일 알림 */}\r
            <div className="space-y-3">\r
              <div className="flex items-center gap-2">\r
                <Mail className="h-4 w-4" />\r
                <h3 className="font-medium">이메일 알림</h3>\r
              </div>\r
              <div className="ml-6 space-y-2">\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="email-news" checked={notifications.email.news} onCheckedChange={updateNotification('email', 'news')} />\r
                  <Label htmlFor="email-news">뉴스레터</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="email-updates" checked={notifications.email.updates} onCheckedChange={updateNotification('email', 'updates')} />\r
                  <Label htmlFor="email-updates">제품 업데이트</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="email-security" checked={notifications.email.security} onCheckedChange={updateNotification('email', 'security')} />\r
                  <Label htmlFor="email-security">보안 알림</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="email-marketing" checked={notifications.email.marketing} onCheckedChange={updateNotification('email', 'marketing')} />\r
                  <Label htmlFor="email-marketing">마케팅 정보</Label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            {/* 푸시 알림 */}\r
            <div className="space-y-3">\r
              <div className="flex items-center gap-2">\r
                <Bell className="h-4 w-4" />\r
                <h3 className="font-medium">푸시 알림</h3>\r
              </div>\r
              <div className="ml-6 space-y-2">\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="push-messages" checked={notifications.push.messages} onCheckedChange={updateNotification('push', 'messages')} />\r
                  <Label htmlFor="push-messages">새 메시지</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="push-mentions" checked={notifications.push.mentions} onCheckedChange={updateNotification('push', 'mentions')} />\r
                  <Label htmlFor="push-mentions">멘션</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="push-likes" checked={notifications.push.likes} onCheckedChange={updateNotification('push', 'likes')} />\r
                  <Label htmlFor="push-likes">좋아요</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="push-comments" checked={notifications.push.comments} onCheckedChange={updateNotification('push', 'comments')} />\r
                  <Label htmlFor="push-comments">댓글</Label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            {/* SMS 알림 */}\r
            <div className="space-y-3">\r
              <div className="flex items-center gap-2">\r
                <Phone className="h-4 w-4" />\r
                <h3 className="font-medium">SMS 알림</h3>\r
              </div>\r
              <div className="ml-6 space-y-2">\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="sms-security" checked={notifications.sms.security} onCheckedChange={updateNotification('sms', 'security')} />\r
                  <Label htmlFor="sms-security">보안 알림</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="sms-reminders" checked={notifications.sms.reminders} onCheckedChange={updateNotification('sms', 'reminders')} />\r
                  <Label htmlFor="sms-reminders">일정 리마인더</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="sms-promotions" checked={notifications.sms.promotions} onCheckedChange={updateNotification('sms', 'promotions')} />\r
                  <Label htmlFor="sms-promotions">프로모션 정보</Label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div className="flex gap-3 pt-4">\r
              <Button className="flex-1">설정 저장</Button>\r
              <Button variant="outline">초기화</Button>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "알림 설정 폼의 Checkbox 사용 예시입니다. 카테고리별로 그룹화된 설정 옵션을 보여줍니다."
      }
    }
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [todos, setTodos] = React.useState([{
      id: 1,
      text: "프로젝트 계획서 작성",
      completed: true
    }, {
      id: 2,
      text: "디자인 시스템 구축",
      completed: true
    }, {
      id: 3,
      text: "API 개발",
      completed: false
    }, {
      id: 4,
      text: "프론트엔드 구현",
      completed: false
    }, {
      id: 5,
      text: "테스트 코드 작성",
      completed: false
    }, {
      id: 6,
      text: "배포 준비",
      completed: false
    }]);
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const allCompleted = completedCount === totalCount;
    const someCompleted = completedCount > 0 && completedCount < totalCount;
    const toggleAll = (checked: boolean) => {
      setTodos(todos.map(todo => ({
        ...todo,
        completed: checked
      })));
    };
    const toggleTodo = (id: number) => (checked: boolean) => {
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo,
        completed: checked
      } : todo));
    };
    return <Card className="w-[400px]">\r
        <CardHeader>\r
          <CardTitle className="flex items-center justify-between">\r
            <span>프로젝트 할 일 목록</span>\r
            <span className="text-sm font-normal text-muted-foreground">\r
              {completedCount}/{totalCount} 완료\r
            </span>\r
          </CardTitle>\r
        </CardHeader>\r
        <CardContent className="space-y-4">\r
          <div className="flex items-center space-x-2 pb-2 border-b">\r
            <Checkbox id="toggle-all" checked={allCompleted ? true : someCompleted ? "indeterminate" : false} onCheckedChange={toggleAll} />\r
            <Label htmlFor="toggle-all" className="font-medium">\r
              전체 선택\r
            </Label>\r
          </div>\r
\r
          <div className="space-y-2">\r
            {todos.map(todo => <div key={todo.id} className="flex items-center space-x-2">\r
                <Checkbox id={\`todo-\${todo.id}\`} checked={todo.completed} onCheckedChange={toggleTodo(todo.id)} />\r
                <Label htmlFor={\`todo-\${todo.id}\`} className={\`flex-1 \${todo.completed ? 'line-through text-muted-foreground' : ''}\`}>\r
                  {todo.text}\r
                </Label>\r
              </div>)}\r
          </div>\r
\r
          <div className="pt-4 border-t">\r
            <div className="flex items-center justify-between text-sm text-muted-foreground">\r
              <span>진행률</span>\r
              <span>{Math.round(completedCount / totalCount * 100)}%</span>\r
            </div>\r
            <div className="mt-2 w-full bg-muted rounded-full h-2">\r
              <div className="bg-primary rounded-full h-2 transition-all duration-300" style={{
              width: \`\${completedCount / totalCount * 100}%\`
            }}></div>\r
            </div>\r
          </div>\r
        </CardContent>\r
      </Card>;
  },
  parameters: {
    docs: {
      description: {
        story: "할 일 목록의 Checkbox 사용 예시입니다. 개별 체크, 전체 선택, 진행률 표시 기능을 포함합니다."
      }
    }
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = React.useState({
      categories: {
        electronics: false,
        clothing: true,
        books: false,
        home: true,
        sports: false
      },
      priceRange: {
        under50: false,
        between50_100: true,
        between100_200: false,
        over200: false
      },
      brands: {
        apple: true,
        samsung: false,
        nike: true,
        adidas: false
      },
      features: {
        freeShipping: true,
        inStock: true,
        onSale: false,
        newArrival: false
      }
    });
    const updateFilter = (category: string, key: string) => (checked: boolean) => {
      setFilters(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [key]: checked
        }
      }));
    };
    const clearAllFilters = () => {
      setFilters({
        categories: {
          electronics: false,
          clothing: false,
          books: false,
          home: false,
          sports: false
        },
        priceRange: {
          under50: false,
          between50_100: false,
          between100_200: false,
          over200: false
        },
        brands: {
          apple: false,
          samsung: false,
          nike: false,
          adidas: false
        },
        features: {
          freeShipping: false,
          inStock: false,
          onSale: false,
          newArrival: false
        }
      });
    };
    const activeFiltersCount = Object.values(filters).reduce((total, category) => total + Object.values(category).filter(Boolean).length, 0);
    return <div className="w-[300px] space-y-6">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle className="flex items-center justify-between">\r
              <span>필터</span>\r
              <div className="flex items-center gap-2">\r
                <span className="text-sm font-normal text-muted-foreground">\r
                  {activeFiltersCount}개 선택\r
                </span>\r
                <Button variant="ghost" size="sm" onClick={clearAllFilters} disabled={activeFiltersCount === 0}>\r
                  초기화\r
                </Button>\r
              </div>\r
            </CardTitle>\r
          </CardHeader>\r
          <CardContent className="space-y-6">\r
            {/* 카테고리 */}\r
            <div className="space-y-3">\r
              <h3 className="font-medium">카테고리</h3>\r
              <div className="space-y-2">\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="electronics" checked={filters.categories.electronics} onCheckedChange={updateFilter('categories', 'electronics')} />\r
                  <Label htmlFor="electronics">전자제품</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="clothing" checked={filters.categories.clothing} onCheckedChange={updateFilter('categories', 'clothing')} />\r
                  <Label htmlFor="clothing">의류</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="books" checked={filters.categories.books} onCheckedChange={updateFilter('categories', 'books')} />\r
                  <Label htmlFor="books">도서</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="home" checked={filters.categories.home} onCheckedChange={updateFilter('categories', 'home')} />\r
                  <Label htmlFor="home">홈&가든</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="sports" checked={filters.categories.sports} onCheckedChange={updateFilter('categories', 'sports')} />\r
                  <Label htmlFor="sports">스포츠</Label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            {/* 가격 범위 */}\r
            <div className="space-y-3">\r
              <h3 className="font-medium">가격 범위</h3>\r
              <div className="space-y-2">\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="under50" checked={filters.priceRange.under50} onCheckedChange={updateFilter('priceRange', 'under50')} />\r
                  <Label htmlFor="under50">5만원 미만</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="between50_100" checked={filters.priceRange.between50_100} onCheckedChange={updateFilter('priceRange', 'between50_100')} />\r
                  <Label htmlFor="between50_100">5만원 - 10만원</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="between100_200" checked={filters.priceRange.between100_200} onCheckedChange={updateFilter('priceRange', 'between100_200')} />\r
                  <Label htmlFor="between100_200">10만원 - 20만원</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="over200" checked={filters.priceRange.over200} onCheckedChange={updateFilter('priceRange', 'over200')} />\r
                  <Label htmlFor="over200">20만원 이상</Label>\r
                </div>\r
              </div>\r
            </div>\r
\r
            {/* 특별 옵션 */}\r
            <div className="space-y-3">\r
              <h3 className="font-medium">특별 옵션</h3>\r
              <div className="space-y-2">\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="freeShipping" checked={filters.features.freeShipping} onCheckedChange={updateFilter('features', 'freeShipping')} />\r
                  <Label htmlFor="freeShipping">무료배송</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="inStock" checked={filters.features.inStock} onCheckedChange={updateFilter('features', 'inStock')} />\r
                  <Label htmlFor="inStock">재고 있음</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="onSale" checked={filters.features.onSale} onCheckedChange={updateFilter('features', 'onSale')} />\r
                  <Label htmlFor="onSale">할인 중</Label>\r
                </div>\r
                <div className="flex items-center space-x-2">\r
                  <Checkbox id="newArrival" checked={filters.features.newArrival} onCheckedChange={updateFilter('features', 'newArrival')} />\r
                  <Label htmlFor="newArrival">신상품</Label>\r
                </div>\r
              </div>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "필터링 옵션의 Checkbox 사용 예시입니다. 카테고리별 필터링과 선택된 필터 개수 표시를 포함합니다."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [preferences, setPreferences] = React.useState({
      highContrast: false,
      largeText: true,
      screenReader: false,
      keyboardNav: true,
      animations: false
    });
    const updatePreference = (key: string) => (checked: boolean) => {
      setPreferences(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div className="space-y-6 w-[500px]">\r
        <div className="space-y-2">\r
          <h3 className="text-lg font-semibold">접근성 데모</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Checkbox 컴포넌트의 접근성 기능을 확인해보세요:\r
          </p>\r
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 체크박스 간 이동</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 체크박스 토글</li>\r
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로도 선택 가능</li>\r
            <li>라벨 클릭으로 체크박스 제어</li>\r
            <li>스크린 리더가 상태와 라벨을 명확히 안내</li>\r
            <li>그룹화된 체크박스는 fieldset으로 구조화</li>\r
          </ul>\r
        </div>\r
\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>접근성 설정</CardTitle>\r
            <CardDescription>\r
              사용하기 편한 환경으로 설정을 조정해보세요.\r
            </CardDescription>\r
          </CardHeader>\r
          <CardContent>\r
            <fieldset className="space-y-4">\r
              <legend className="sr-only">접근성 환경 설정</legend>\r
              \r
              <div className="space-y-3">\r
                <h4 className="font-medium">시각적 접근성</h4>\r
                <div className="ml-4 space-y-2">\r
                  <div className="flex items-center space-x-2">\r
                    <Checkbox id="high-contrast" checked={preferences.highContrast} onCheckedChange={updatePreference('highContrast')} aria-describedby="high-contrast-desc" />\r
                    <Label htmlFor="high-contrast">고대비 모드</Label>\r
                  </div>\r
                  <p id="high-contrast-desc" className="text-sm text-muted-foreground ml-6">\r
                    텍스트와 배경의 대비를 높여 가독성을 향상시킵니다.\r
                  </p>\r
                  \r
                  <div className="flex items-center space-x-2">\r
                    <Checkbox id="large-text" checked={preferences.largeText} onCheckedChange={updatePreference('largeText')} aria-describedby="large-text-desc" />\r
                    <Label htmlFor="large-text">큰 글씨</Label>\r
                  </div>\r
                  <p id="large-text-desc" className="text-sm text-muted-foreground ml-6">\r
                    모든 텍스트 크기를 120%로 확대합니다.\r
                  </p>\r
                </div>\r
              </div>\r
\r
              <div className="space-y-3">\r
                <h4 className="font-medium">보조 기술</h4>\r
                <div className="ml-4 space-y-2">\r
                  <div className="flex items-center space-x-2">\r
                    <Checkbox id="screen-reader" checked={preferences.screenReader} onCheckedChange={updatePreference('screenReader')} aria-describedby="screen-reader-desc" />\r
                    <Label htmlFor="screen-reader">스크린 리더 최적화</Label>\r
                  </div>\r
                  <p id="screen-reader-desc" className="text-sm text-muted-foreground ml-6">\r
                    스크린 리더 사용자를 위한 추가 설명과 안내를 제공합니다.\r
                  </p>\r
                  \r
                  <div className="flex items-center space-x-2">\r
                    <Checkbox id="keyboard-nav" checked={preferences.keyboardNav} onCheckedChange={updatePreference('keyboardNav')} aria-describedby="keyboard-nav-desc" />\r
                    <Label htmlFor="keyboard-nav">키보드 네비게이션 강화</Label>\r
                  </div>\r
                  <p id="keyboard-nav-desc" className="text-sm text-muted-foreground ml-6">\r
                    키보드 포커스를 더 명확하게 표시하고 단축키를 활성화합니다.\r
                  </p>\r
                </div>\r
              </div>\r
\r
              <div className="space-y-3">\r
                <h4 className="font-medium">동작 및 애니메이션</h4>\r
                <div className="ml-4 space-y-2">\r
                  <div className="flex items-center space-x-2">\r
                    <Checkbox id="animations" checked={preferences.animations} onCheckedChange={updatePreference('animations')} aria-describedby="animations-desc" />\r
                    <Label htmlFor="animations">애니메이션 줄이기</Label>\r
                  </div>\r
                  <p id="animations-desc" className="text-sm text-muted-foreground ml-6">\r
                    멀미나 주의력 분산을 방지하기 위해 움직임을 최소화합니다.\r
                  </p>\r
                </div>\r
              </div>\r
            </fieldset>\r
\r
            <div className="flex gap-3 pt-6 border-t">\r
              <Button className="flex-1">설정 저장</Button>\r
              <Button variant="outline">기본값으로 복원</Button>\r
            </div>\r
          </CardContent>\r
        </Card>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...F.parameters?.docs?.source}}};export{F as AccessibilityDemo,v as CheckedStates,g as Default,y as FilterOptions,N as NotificationSettings,C as TermsAndConditions,j as TodoList,b as WithIcons,te as default};
