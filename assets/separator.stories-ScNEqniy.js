import{j as e}from"./jsx-runtime-Bz4aBVDn.js";import{S as s}from"./separator-BhwIUBVE.js";import{B as r}from"./button-bDZQ1CGr.js";import{B as a}from"./badge-B3XW2gOL.js";import{C as v,a as j,b as f,c as g,d as y}from"./card-BgCPKrWA.js";import{H as b}from"./house-CKc6052P.js";import{U as u}from"./user-BJjfzFFu.js";import{S as w}from"./settings-DU4pWZhP.js";import{C as H}from"./circle-question-mark-CqzTygxD.js";import{S}from"./star-C0TOQxsF.js";import{P as A}from"./phone-DD29FuQ8.js";import{S as B}from"./shield-a7_S6rP-.js";import{B as z}from"./bell-D52r2PyL.js";import{B as T}from"./briefcase-B_WJanN0.js";import{L as I}from"./log-out-DeCHqWhI.js";import{B as M}from"./book-open-DffYBj6l.js";import{H as C}from"./heart-BFGUhVwJ.js";import{M as n}from"./music-DBENafpc.js";import{I as D}from"./image-BUKezXs8.js";import{B as L}from"./bookmark-BY9QLeCX.js";import{T as N}from"./tag-CIxqCmmc.js";import"./iframe-BdMZbwUm.js";import"./index-BMTS4V62.js";import"./index-RnXzWidx.js";import"./index-COOYaFQ0.js";import"./utils-CBfrqCZ4.js";import"./index-CdJFUDDL.js";import"./createLucideIcon-CdHLrrBb.js";const me={title:"UI/Base/Separator",component:s,parameters:{layout:"centered",docs:{description:{component:`
콘텐츠를 시각적으로 구분하는 Separator 컴포넌트입니다. 레이아웃의 가독성을 높이고 정보를 체계적으로 정리할 수 있습니다.

## 주요 기능
- **방향 설정**: 수평(horizontal), 수직(vertical) 구분선 지원
- **시맨틱**: WAI-ARIA separator 역할로 스크린 리더 지원
- **유연한 스타일링**: 색상, 두께, 여백 커스터마이징 가능
- **반응형**: 다양한 화면 크기에서 적절한 표시
- **접근성**: 장식적 구분선과 의미적 구분선 구분
- **다양한 용도**: 메뉴, 폼, 카드, 리스트 등에서 활용

## 사용법
\`\`\`tsx
import { Separator } from "@/components/ui/separator"

// 기본 수평 구분선
<Separator />

// 수직 구분선
<Separator orientation="vertical" />

// 장식적 구분선 (스크린 리더가 무시)
<Separator decorative />

// 커스텀 스타일
<Separator className="my-6 bg-red-200" />
\`\`\`

## Props
- \`orientation\`: 방향 ("horizontal" | "vertical", 기본값: "horizontal")
- \`decorative\`: 장식적 구분선 여부 (boolean, 기본값: false)
- \`className\`: 추가 CSS 클래스
- 기타 HTML div 요소의 모든 속성

## 접근성
- **ARIA Role**: \`separator\` 역할로 스크린 리더가 인식
- **Decorative**: \`decorative={true}\`일 때 \`aria-hidden="true"\` 자동 적용
- **시맨틱 구분**: 의미적 구분과 시각적 구분을 명확히 구별
- **키보드 네비게이션**: 포커스 가능하지 않은 요소로 적절히 처리

## 스타일 변형
- **기본**: 얇은 회색 선
- **굵은 선**: 더 두꺼운 구분선
- **색상 변형**: 다양한 색상의 구분선
- **간격 조정**: 위아래 또는 좌우 여백 설정
- **점선/대시선**: border-style로 패턴 변경

## 사용 사례
- **네비게이션**: 메뉴 아이템 간 구분
- **폼**: 섹션별 입력 필드 구분
- **카드**: 콘텐츠 영역 분리
- **리스트**: 항목 간 시각적 구분
- **레이아웃**: 사이드바와 메인 콘텐츠 구분
- **정보 그룹**: 관련 정보의 논리적 분리

## 모범 사례
- 의미적 구분이 필요한 경우 decorative={false} 사용
- 단순 시각적 구분은 decorative={true} 사용
- 적절한 여백과 함께 사용하여 가독성 향상
- 색상 대비를 고려하여 접근성 확보
- 반응형에서 방향 전환 고려
        `}}},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"구분선 방향"},decorative:{control:"boolean",description:"장식적 구분선 여부 (true일 때 스크린 리더가 무시)"},className:{control:"text",description:"추가 CSS 클래스"}},render:k=>e.jsxs("div",{className:"w-[300px] space-y-4",children:[e.jsx("div",{children:"구분선 위 콘텐츠"}),e.jsx(s,{...k}),e.jsx("div",{children:"구분선 아래 콘텐츠"})]})},t={args:{orientation:"horizontal",decorative:!1},parameters:{docs:{description:{story:"기본 수평 Separator입니다. 콘텐츠를 논리적으로 구분하는 데 사용됩니다."}}}},i={render:()=>e.jsxs("div",{className:"flex h-20 items-center space-x-4",children:[e.jsx("div",{children:"왼쪽 콘텐츠"}),e.jsx(s,{orientation:"vertical"}),e.jsx("div",{children:"오른쪽 콘텐츠"})]}),parameters:{docs:{description:{story:"수직 Separator입니다. 가로로 배치된 요소들을 구분할 때 사용됩니다."}}}},d={render:()=>e.jsxs("div",{className:"w-[400px]",children:[e.jsxs("nav",{className:"flex items-center space-x-1",children:[e.jsxs(r,{variant:"ghost",size:"sm",children:[e.jsx(b,{className:"h-4 w-4 mr-2"}),"홈"]}),e.jsx(s,{orientation:"vertical",className:"h-4",decorative:!0}),e.jsxs(r,{variant:"ghost",size:"sm",children:[e.jsx(u,{className:"h-4 w-4 mr-2"}),"프로필"]}),e.jsx(s,{orientation:"vertical",className:"h-4",decorative:!0}),e.jsxs(r,{variant:"ghost",size:"sm",children:[e.jsx(w,{className:"h-4 w-4 mr-2"}),"설정"]}),e.jsx(s,{orientation:"vertical",className:"h-4",decorative:!0}),e.jsxs(r,{variant:"ghost",size:"sm",children:[e.jsx(H,{className:"h-4 w-4 mr-2"}),"도움말"]})]}),e.jsx(s,{className:"my-4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"메인 콘텐츠"}),e.jsx("p",{className:"text-muted-foreground",children:"네비게이션 구분선 예시입니다. 메뉴 아이템 간에는 수직 구분선을, 네비게이션과 콘텐츠 간에는 수평 구분선을 사용합니다."})]})]}),parameters:{docs:{description:{story:"내비게이션에서 사용되는 Separator 예시입니다. 메뉴 아이템 간 구분과 섹션 분리에 활용됩니다."}}}},l={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 w-[600px]",children:[e.jsxs(v,{children:[e.jsxs(j,{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(u,{className:"h-5 w-5"}),"사용자 정보"]}),e.jsx(g,{children:"기본 프로필 정보를 확인하세요"})]}),e.jsx(s,{}),e.jsxs(y,{className:"pt-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"이름"}),e.jsx("span",{children:"홍길동"})]}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"이메일"}),e.jsx("span",{children:"hong@example.com"})]}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"가입일"}),e.jsx("span",{children:"2024년 1월 15일"})]})]})]}),e.jsxs(v,{children:[e.jsxs(j,{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-5 w-5"}),"활동 통계"]}),e.jsx(g,{children:"최근 활동 현황을 확인하세요"})]}),e.jsx(s,{}),e.jsxs(y,{className:"pt-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-muted-foreground",children:"총 게시글"}),e.jsx(a,{variant:"secondary",children:"42"})]}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-muted-foreground",children:"댓글 수"}),e.jsx(a,{variant:"secondary",children:"128"})]}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-muted-foreground",children:"받은 좋아요"}),e.jsx(a,{variant:"secondary",children:"356"})]})]})]})]}),parameters:{docs:{description:{story:"카드 컴포넌트 내에서 사용되는 Separator 예시입니다. 헤더와 콘텐츠, 그리고 정보 항목 간 구분에 활용됩니다."}}}},c={render:()=>e.jsx("div",{className:"w-[500px] space-y-6",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"계정 설정"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[e.jsx(u,{className:"h-5 w-5"}),"개인 정보"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"이름"}),e.jsx("input",{className:"w-full p-2 border rounded-md",placeholder:"홍길동"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"이메일"}),e.jsx("input",{className:"w-full p-2 border rounded-md",placeholder:"hong@example.com"})]})]})]}),e.jsx(s,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[e.jsx(A,{className:"h-5 w-5"}),"연락처 정보"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"전화번호"}),e.jsx("input",{className:"w-full p-2 border rounded-md",placeholder:"010-1234-5678"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"주소"}),e.jsx("input",{className:"w-full p-2 border rounded-md",placeholder:"서울특별시 강남구..."})]})]})]}),e.jsx(s,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[e.jsx(B,{className:"h-5 w-5"}),"보안 설정"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"현재 비밀번호"}),e.jsx("input",{type:"password",className:"w-full p-2 border rounded-md",placeholder:"••••••••"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"새 비밀번호"}),e.jsx("input",{type:"password",className:"w-full p-2 border rounded-md",placeholder:"••••••••"})]})]})]}),e.jsx(s,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-semibold flex items-center gap-2",children:[e.jsx(z,{className:"h-5 w-5"}),"알림 설정"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"이메일 알림"}),e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0})]}),e.jsx(s,{decorative:!0,className:"my-2"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"SMS 알림"}),e.jsx("input",{type:"checkbox",className:"rounded"})]}),e.jsx(s,{decorative:!0,className:"my-2"}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"앱 푸시 알림"}),e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0})]})]})]}),e.jsxs("div",{className:"flex gap-4 pt-6",children:[e.jsx(r,{className:"flex-1",children:"저장하기"}),e.jsx(r,{variant:"outline",children:"취소"})]})]})}),parameters:{docs:{description:{story:"폼에서 사용되는 Separator 예시입니다. 섹션별로 입력 필드를 그룹화하여 가독성을 높입니다."}}}},m={render:()=>e.jsxs("div",{className:"w-[400px] space-y-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"기본 스타일"}),e.jsx("div",{children:"기본 구분선 위"}),e.jsx(s,{}),e.jsx("div",{children:"기본 구분선 아래"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"굵은 구분선"}),e.jsx("div",{children:"굵은 구분선 위"}),e.jsx(s,{className:"h-0.5 bg-border"}),e.jsx("div",{children:"굵은 구분선 아래"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"색상 구분선"}),e.jsx("div",{children:"파란색 구분선 위"}),e.jsx(s,{className:"bg-blue-200"}),e.jsx("div",{children:"파란색 구분선 아래"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"점선 구분선"}),e.jsx("div",{children:"점선 구분선 위"}),e.jsx(s,{className:"border-dashed border-t border-border bg-transparent h-0"}),e.jsx("div",{children:"점선 구분선 아래"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"그라데이션 구분선"}),e.jsx("div",{children:"그라데이션 구분선 위"}),e.jsx(s,{className:"bg-gradient-to-r from-transparent via-border to-transparent"}),e.jsx("div",{children:"그라데이션 구분선 아래"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"font-semibold",children:"여백 조정"}),e.jsx("div",{children:"여백 없음"}),e.jsx(s,{className:"my-0"}),e.jsx("div",{children:"기본 여백"}),e.jsx(s,{className:"my-4"}),e.jsx("div",{children:"큰 여백"}),e.jsx(s,{className:"my-8"}),e.jsx("div",{children:"마지막 항목"})]})]}),parameters:{docs:{description:{story:"다양한 스타일의 Separator를 보여줍니다. 두께, 색상, 패턴, 여백 등을 커스터마이징할 수 있습니다."}}}},o={render:()=>e.jsxs("div",{className:"w-[300px] space-y-6",children:[e.jsxs("div",{className:"border rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-4",children:"대시보드"}),e.jsxs("nav",{className:"space-y-1",children:[e.jsxs(r,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(b,{className:"h-4 w-4 mr-2"}),"홈"]}),e.jsxs(r,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(u,{className:"h-4 w-4 mr-2"}),"프로필"]}),e.jsxs(r,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(T,{className:"h-4 w-4 mr-2"}),"프로젝트"]})]}),e.jsx(s,{className:"my-4"}),e.jsx("h4",{className:"font-medium text-sm text-muted-foreground mb-2",children:"관리"}),e.jsxs("nav",{className:"space-y-1",children:[e.jsxs(r,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(w,{className:"h-4 w-4 mr-2"}),"설정"]}),e.jsxs(r,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(B,{className:"h-4 w-4 mr-2"}),"보안"]}),e.jsxs(r,{variant:"ghost",className:"w-full justify-start",children:[e.jsx(z,{className:"h-4 w-4 mr-2"}),"알림"]})]}),e.jsx(s,{className:"my-4"}),e.jsxs(r,{variant:"ghost",className:"w-full justify-start text-red-600",children:[e.jsx(I,{className:"h-4 w-4 mr-2"}),"로그아웃"]})]}),e.jsxs("div",{className:"border rounded-lg p-2 shadow-lg",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:[e.jsx(M,{className:"h-4 w-4 mr-2"}),"열기"]}),e.jsxs(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:[e.jsx(S,{className:"h-4 w-4 mr-2"}),"즐겨찾기 추가"]}),e.jsxs(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:[e.jsx(C,{className:"h-4 w-4 mr-2"}),"좋아요"]})]}),e.jsx(s,{className:"my-2",decorative:!0}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:"공유하기"}),e.jsx(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:"링크 복사"})]}),e.jsx(s,{className:"my-2",decorative:!0}),e.jsx(r,{variant:"ghost",size:"sm",className:"w-full justify-start text-red-600",children:"삭제하기"})]})]}),parameters:{docs:{description:{story:"메뉴에서 사용되는 Separator 예시입니다. 사이드바와 컨텍스트 메뉴에서 메뉴 그룹을 구분합니다."}}}},p={render:()=>e.jsxs("div",{className:"w-[500px] space-y-6",children:[e.jsxs("div",{className:"border rounded-lg p-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center",children:e.jsx(n,{className:"h-6 w-6 text-white"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Amazing Song"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Great Artist"})]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(a,{children:"3:45"})})]}),e.jsx(s,{}),e.jsxs("div",{className:"py-4",children:[e.jsx("div",{className:"w-full bg-muted rounded-full h-1",children:e.jsx("div",{className:"bg-primary h-1 rounded-full w-1/3"})}),e.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground mt-2",children:[e.jsx("span",{children:"1:15"}),e.jsx("span",{children:"3:45"})]})]}),e.jsx(s,{}),e.jsxs("div",{className:"flex justify-center gap-4 pt-4",children:[e.jsx(r,{variant:"ghost",size:"sm",children:e.jsx(n,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"sm",children:e.jsx(n,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"sm",children:e.jsx(n,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"h-32 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center",children:e.jsx(D,{className:"h-12 w-12 text-white"})}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Beautiful Landscape"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"자연의 아름다움을 담은 풍경 사진입니다. 산과 바다가 어우러진 멋진 장면을 확인해보세요."}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex items-center justify-between pt-4",children:[e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(C,{className:"h-4 w-4"}),"245"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(L,{className:"h-4 w-4"}),"32"]})]}),e.jsx(r,{size:"sm",children:"공유하기"})]})]})]})]}),parameters:{docs:{description:{story:"미디어 콘텐츠에서 사용되는 Separator 예시입니다. 플레이어 정보, 컨트롤, 메타데이터를 구분합니다."}}}},x={render:()=>e.jsxs("div",{className:"w-[600px]",children:[e.jsxs("div",{className:"hidden md:block",children:[e.jsx("h3",{className:"font-semibold mb-4",children:"데스크톱 레이아웃"}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"메인 콘텐츠"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"주요 콘텐츠가 여기에 표시됩니다."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-20 bg-muted rounded"}),e.jsx("div",{className:"h-20 bg-muted rounded"})]})]}),e.jsx(s,{orientation:"vertical",className:"h-48"}),e.jsxs("div",{className:"w-48 space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"사이드바"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:[e.jsx(N,{className:"h-4 w-4 mr-2"}),"태그 1"]}),e.jsxs(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:[e.jsx(N,{className:"h-4 w-4 mr-2"}),"태그 2"]}),e.jsxs(r,{variant:"ghost",size:"sm",className:"w-full justify-start",children:[e.jsx(N,{className:"h-4 w-4 mr-2"}),"태그 3"]})]})]})]})]}),e.jsxs("div",{className:"md:hidden",children:[e.jsx("h3",{className:"font-semibold mb-4",children:"모바일 레이아웃"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"메인 콘텐츠"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"주요 콘텐츠가 여기에 표시됩니다."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-20 bg-muted rounded"}),e.jsx("div",{className:"h-20 bg-muted rounded"})]})]}),e.jsx(s,{}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"font-medium",children:"관련 태그"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"secondary",children:"태그 1"}),e.jsx(a,{variant:"secondary",children:"태그 2"}),e.jsx(a,{variant:"secondary",children:"태그 3"}),e.jsx(a,{variant:"secondary",children:"태그 4"})]})]})]})]})]}),parameters:{docs:{description:{story:"반응형 레이아웃에서 사용되는 Separator 예시입니다. 데스크톱에서는 수직, 모바일에서는 수평 구분선을 사용합니다."}}}},h={render:()=>e.jsxs("div",{className:"w-[500px] space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Separator 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 포커스 가능한 요소만 이동"]}),e.jsx("li",{children:'의미적 구분선은 스크린 리더가 "구분선"으로 안내'}),e.jsx("li",{children:"장식적 구분선은 스크린 리더가 무시"}),e.jsx("li",{children:"적절한 ARIA 역할로 콘텐츠 구조 전달"}),e.jsx("li",{children:"시각적 구분과 논리적 구분의 명확한 분리"})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 space-y-4",children:[e.jsx("h4",{className:"font-semibold",children:"의미적 구분 (스크린 리더가 인식)"}),e.jsxs("section",{"aria-labelledby":"personal-info",children:[e.jsx("h5",{id:"personal-info",className:"font-medium text-green-700",children:"개인 정보 섹션"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"사용자의 기본 정보를 입력하는 섹션입니다."})]}),e.jsx(s,{role:"separator","aria-label":"개인 정보와 연락처 정보 구분"}),e.jsxs("section",{"aria-labelledby":"contact-info",children:[e.jsx("h5",{id:"contact-info",className:"font-medium text-blue-700",children:"연락처 정보 섹션"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"연락 가능한 정보를 입력하는 섹션입니다."})]}),e.jsx(s,{role:"separator","aria-label":"연락처 정보와 선택사항 구분"}),e.jsxs("section",{"aria-labelledby":"preferences",children:[e.jsx("h5",{id:"preferences",className:"font-medium text-purple-700",children:"선택사항 섹션"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"개인화 설정을 선택하는 섹션입니다."})]})]}),e.jsxs("div",{className:"border rounded-lg p-4 space-y-4",children:[e.jsx("h4",{className:"font-semibold",children:"장식적 구분 (스크린 리더가 무시)"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"메뉴 항목 1"}),e.jsx(a,{children:"새로움"})]}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"메뉴 항목 2"}),e.jsx(a,{variant:"secondary",children:"인기"})]}),e.jsx(s,{decorative:!0}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"메뉴 항목 3"}),e.jsx(a,{variant:"outline",children:"추천"})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"위의 구분선들은 시각적 구분만을 위한 장식적 요소로, 스크린 리더는 이를 무시하고 메뉴 항목들을 연속적으로 읽습니다."})]})]}),parameters:{docs:{description:{story:"Separator의 접근성 기능을 보여주는 데모입니다. 의미적 구분과 장식적 구분의 차이를 확인할 수 있습니다."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    decorative: false
  },
  parameters: {
    docs: {
      description: {
        story: "기본 수평 Separator입니다. 콘텐츠를 논리적으로 구분하는 데 사용됩니다."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-20 items-center space-x-4">\r
      <div>왼쪽 콘텐츠</div>\r
      <Separator orientation="vertical" />\r
      <div>오른쪽 콘텐츠</div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "수직 Separator입니다. 가로로 배치된 요소들을 구분할 때 사용됩니다."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[400px]">\r
      <nav className="flex items-center space-x-1">\r
        <Button variant="ghost" size="sm">\r
          <Home className="h-4 w-4 mr-2" />\r
          홈\r
        </Button>\r
        <Separator orientation="vertical" className="h-4" decorative />\r
        <Button variant="ghost" size="sm">\r
          <User className="h-4 w-4 mr-2" />\r
          프로필\r
        </Button>\r
        <Separator orientation="vertical" className="h-4" decorative />\r
        <Button variant="ghost" size="sm">\r
          <Settings className="h-4 w-4 mr-2" />\r
          설정\r
        </Button>\r
        <Separator orientation="vertical" className="h-4" decorative />\r
        <Button variant="ghost" size="sm">\r
          <HelpCircle className="h-4 w-4 mr-2" />\r
          도움말\r
        </Button>\r
      </nav>\r
      \r
      <Separator className="my-4" />\r
      \r
      <div className="space-y-2">\r
        <h3 className="text-lg font-semibold">메인 콘텐츠</h3>\r
        <p className="text-muted-foreground">\r
          네비게이션 구분선 예시입니다. 메뉴 아이템 간에는 수직 구분선을, \r
          네비게이션과 콘텐츠 간에는 수평 구분선을 사용합니다.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "내비게이션에서 사용되는 Separator 예시입니다. 메뉴 아이템 간 구분과 섹션 분리에 활용됩니다."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[600px]">\r
      <Card>\r
        <CardHeader>\r
          <CardTitle className="flex items-center gap-2">\r
            <User className="h-5 w-5" />\r
            사용자 정보\r
          </CardTitle>\r
          <CardDescription>\r
            기본 프로필 정보를 확인하세요\r
          </CardDescription>\r
        </CardHeader>\r
        <Separator />\r
        <CardContent className="pt-4 space-y-3">\r
          <div className="flex justify-between">\r
            <span className="text-muted-foreground">이름</span>\r
            <span>홍길동</span>\r
          </div>\r
          <Separator decorative />\r
          <div className="flex justify-between">\r
            <span className="text-muted-foreground">이메일</span>\r
            <span>hong@example.com</span>\r
          </div>\r
          <Separator decorative />\r
          <div className="flex justify-between">\r
            <span className="text-muted-foreground">가입일</span>\r
            <span>2024년 1월 15일</span>\r
          </div>\r
        </CardContent>\r
      </Card>\r
\r
      <Card>\r
        <CardHeader>\r
          <CardTitle className="flex items-center gap-2">\r
            <Star className="h-5 w-5" />\r
            활동 통계\r
          </CardTitle>\r
          <CardDescription>\r
            최근 활동 현황을 확인하세요\r
          </CardDescription>\r
        </CardHeader>\r
        <Separator />\r
        <CardContent className="pt-4 space-y-3">\r
          <div className="flex justify-between items-center">\r
            <span className="text-muted-foreground">총 게시글</span>\r
            <Badge variant="secondary">42</Badge>\r
          </div>\r
          <Separator decorative />\r
          <div className="flex justify-between items-center">\r
            <span className="text-muted-foreground">댓글 수</span>\r
            <Badge variant="secondary">128</Badge>\r
          </div>\r
          <Separator decorative />\r
          <div className="flex justify-between items-center">\r
            <span className="text-muted-foreground">받은 좋아요</span>\r
            <Badge variant="secondary">356</Badge>\r
          </div>\r
        </CardContent>\r
      </Card>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "카드 컴포넌트 내에서 사용되는 Separator 예시입니다. 헤더와 콘텐츠, 그리고 정보 항목 간 구분에 활용됩니다."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[500px] space-y-6">\r
      <div className="space-y-4">\r
        <h2 className="text-2xl font-bold">계정 설정</h2>\r
        \r
        {/* 개인 정보 섹션 */}\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-semibold flex items-center gap-2">\r
            <User className="h-5 w-5" />\r
            개인 정보\r
          </h3>\r
          <div className="grid grid-cols-2 gap-4">\r
            <div className="space-y-2">\r
              <label className="text-sm font-medium">이름</label>\r
              <input className="w-full p-2 border rounded-md" placeholder="홍길동" />\r
            </div>\r
            <div className="space-y-2">\r
              <label className="text-sm font-medium">이메일</label>\r
              <input className="w-full p-2 border rounded-md" placeholder="hong@example.com" />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <Separator />\r
\r
        {/* 연락처 정보 섹션 */}\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-semibold flex items-center gap-2">\r
            <Phone className="h-5 w-5" />\r
            연락처 정보\r
          </h3>\r
          <div className="space-y-4">\r
            <div className="space-y-2">\r
              <label className="text-sm font-medium">전화번호</label>\r
              <input className="w-full p-2 border rounded-md" placeholder="010-1234-5678" />\r
            </div>\r
            <div className="space-y-2">\r
              <label className="text-sm font-medium">주소</label>\r
              <input className="w-full p-2 border rounded-md" placeholder="서울특별시 강남구..." />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <Separator />\r
\r
        {/* 보안 설정 섹션 */}\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-semibold flex items-center gap-2">\r
            <Shield className="h-5 w-5" />\r
            보안 설정\r
          </h3>\r
          <div className="space-y-4">\r
            <div className="space-y-2">\r
              <label className="text-sm font-medium">현재 비밀번호</label>\r
              <input type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" />\r
            </div>\r
            <div className="space-y-2">\r
              <label className="text-sm font-medium">새 비밀번호</label>\r
              <input type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <Separator />\r
\r
        {/* 알림 설정 섹션 */}\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-semibold flex items-center gap-2">\r
            <Bell className="h-5 w-5" />\r
            알림 설정\r
          </h3>\r
          <div className="space-y-3">\r
            <div className="flex items-center justify-between">\r
              <span>이메일 알림</span>\r
              <input type="checkbox" className="rounded" defaultChecked />\r
            </div>\r
            <Separator decorative className="my-2" />\r
            <div className="flex items-center justify-between">\r
              <span>SMS 알림</span>\r
              <input type="checkbox" className="rounded" />\r
            </div>\r
            <Separator decorative className="my-2" />\r
            <div className="flex items-center justify-between">\r
              <span>앱 푸시 알림</span>\r
              <input type="checkbox" className="rounded" defaultChecked />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="flex gap-4 pt-6">\r
          <Button className="flex-1">저장하기</Button>\r
          <Button variant="outline">취소</Button>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "폼에서 사용되는 Separator 예시입니다. 섹션별로 입력 필드를 그룹화하여 가독성을 높입니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-8">\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">기본 스타일</h3>\r
        <div>기본 구분선 위</div>\r
        <Separator />\r
        <div>기본 구분선 아래</div>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">굵은 구분선</h3>\r
        <div>굵은 구분선 위</div>\r
        <Separator className="h-0.5 bg-border" />\r
        <div>굵은 구분선 아래</div>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">색상 구분선</h3>\r
        <div>파란색 구분선 위</div>\r
        <Separator className="bg-blue-200" />\r
        <div>파란색 구분선 아래</div>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">점선 구분선</h3>\r
        <div>점선 구분선 위</div>\r
        <Separator className="border-dashed border-t border-border bg-transparent h-0" />\r
        <div>점선 구분선 아래</div>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">그라데이션 구분선</h3>\r
        <div>그라데이션 구분선 위</div>\r
        <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />\r
        <div>그라데이션 구분선 아래</div>\r
      </div>\r
\r
      <div className="space-y-6">\r
        <h3 className="font-semibold">여백 조정</h3>\r
        <div>여백 없음</div>\r
        <Separator className="my-0" />\r
        <div>기본 여백</div>\r
        <Separator className="my-4" />\r
        <div>큰 여백</div>\r
        <Separator className="my-8" />\r
        <div>마지막 항목</div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 스타일의 Separator를 보여줍니다. 두께, 색상, 패턴, 여백 등을 커스터마이징할 수 있습니다."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-6">\r
      {/* 사이드바 메뉴 */}\r
      <div className="border rounded-lg p-4">\r
        <h3 className="font-semibold mb-4">대시보드</h3>\r
        <nav className="space-y-1">\r
          <Button variant="ghost" className="w-full justify-start">\r
            <Home className="h-4 w-4 mr-2" />\r
            홈\r
          </Button>\r
          <Button variant="ghost" className="w-full justify-start">\r
            <User className="h-4 w-4 mr-2" />\r
            프로필\r
          </Button>\r
          <Button variant="ghost" className="w-full justify-start">\r
            <Briefcase className="h-4 w-4 mr-2" />\r
            프로젝트\r
          </Button>\r
        </nav>\r
        \r
        <Separator className="my-4" />\r
        \r
        <h4 className="font-medium text-sm text-muted-foreground mb-2">관리</h4>\r
        <nav className="space-y-1">\r
          <Button variant="ghost" className="w-full justify-start">\r
            <Settings className="h-4 w-4 mr-2" />\r
            설정\r
          </Button>\r
          <Button variant="ghost" className="w-full justify-start">\r
            <Shield className="h-4 w-4 mr-2" />\r
            보안\r
          </Button>\r
          <Button variant="ghost" className="w-full justify-start">\r
            <Bell className="h-4 w-4 mr-2" />\r
            알림\r
          </Button>\r
        </nav>\r
        \r
        <Separator className="my-4" />\r
        \r
        <Button variant="ghost" className="w-full justify-start text-red-600">\r
          <LogOut className="h-4 w-4 mr-2" />\r
          로그아웃\r
        </Button>\r
      </div>\r
\r
      {/* 컨텍스트 메뉴 스타일 */}\r
      <div className="border rounded-lg p-2 shadow-lg">\r
        <div className="space-y-1">\r
          <Button variant="ghost" size="sm" className="w-full justify-start">\r
            <BookOpen className="h-4 w-4 mr-2" />\r
            열기\r
          </Button>\r
          <Button variant="ghost" size="sm" className="w-full justify-start">\r
            <Star className="h-4 w-4 mr-2" />\r
            즐겨찾기 추가\r
          </Button>\r
          <Button variant="ghost" size="sm" className="w-full justify-start">\r
            <Heart className="h-4 w-4 mr-2" />\r
            좋아요\r
          </Button>\r
        </div>\r
        \r
        <Separator className="my-2" decorative />\r
        \r
        <div className="space-y-1">\r
          <Button variant="ghost" size="sm" className="w-full justify-start">\r
            공유하기\r
          </Button>\r
          <Button variant="ghost" size="sm" className="w-full justify-start">\r
            링크 복사\r
          </Button>\r
        </div>\r
        \r
        <Separator className="my-2" decorative />\r
        \r
        <Button variant="ghost" size="sm" className="w-full justify-start text-red-600">\r
          삭제하기\r
        </Button>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "메뉴에서 사용되는 Separator 예시입니다. 사이드바와 컨텍스트 메뉴에서 메뉴 그룹을 구분합니다."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[500px] space-y-6">\r
      {/* 미디어 플레이어 */}\r
      <div className="border rounded-lg p-6">\r
        <div className="flex items-center justify-between mb-4">\r
          <div className="flex items-center gap-3">\r
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">\r
              <Music className="h-6 w-6 text-white" />\r
            </div>\r
            <div>\r
              <h3 className="font-semibold">Amazing Song</h3>\r
              <p className="text-sm text-muted-foreground">Great Artist</p>\r
            </div>\r
          </div>\r
          <div className="flex items-center gap-2">\r
            <Badge>3:45</Badge>\r
          </div>\r
        </div>\r
        \r
        <Separator />\r
        \r
        <div className="py-4">\r
          <div className="w-full bg-muted rounded-full h-1">\r
            <div className="bg-primary h-1 rounded-full w-1/3"></div>\r
          </div>\r
          <div className="flex justify-between text-sm text-muted-foreground mt-2">\r
            <span>1:15</span>\r
            <span>3:45</span>\r
          </div>\r
        </div>\r
        \r
        <Separator />\r
        \r
        <div className="flex justify-center gap-4 pt-4">\r
          <Button variant="ghost" size="sm">\r
            <Music className="h-4 w-4" />\r
          </Button>\r
          <Button variant="ghost" size="sm">\r
            <Music className="h-4 w-4" />\r
          </Button>\r
          <Button variant="ghost" size="sm">\r
            <Music className="h-4 w-4" />\r
          </Button>\r
        </div>\r
      </div>\r
\r
      {/* 콘텐츠 카드 */}\r
      <div className="border rounded-lg overflow-hidden">\r
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">\r
          <Image className="h-12 w-12 text-white" />\r
        </div>\r
        \r
        <div className="p-4">\r
          <h3 className="font-semibold mb-2">Beautiful Landscape</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            자연의 아름다움을 담은 풍경 사진입니다. \r
            산과 바다가 어우러진 멋진 장면을 확인해보세요.\r
          </p>\r
          \r
          <Separator decorative />\r
          \r
          <div className="flex items-center justify-between pt-4">\r
            <div className="flex items-center gap-4 text-sm text-muted-foreground">\r
              <span className="flex items-center gap-1">\r
                <Heart className="h-4 w-4" />\r
                245\r
              </span>\r
              <span className="flex items-center gap-1">\r
                <Bookmark className="h-4 w-4" />\r
                32\r
              </span>\r
            </div>\r
            <Button size="sm">공유하기</Button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "미디어 콘텐츠에서 사용되는 Separator 예시입니다. 플레이어 정보, 컨트롤, 메타데이터를 구분합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[600px]">\r
      {/* 데스크톱 레이아웃 */}\r
      <div className="hidden md:block">\r
        <h3 className="font-semibold mb-4">데스크톱 레이아웃</h3>\r
        <div className="flex gap-6">\r
          <div className="flex-1 space-y-4">\r
            <h4 className="font-medium">메인 콘텐츠</h4>\r
            <p className="text-sm text-muted-foreground">\r
              주요 콘텐츠가 여기에 표시됩니다.\r
            </p>\r
            <div className="space-y-2">\r
              <div className="h-20 bg-muted rounded"></div>\r
              <div className="h-20 bg-muted rounded"></div>\r
            </div>\r
          </div>\r
          \r
          <Separator orientation="vertical" className="h-48" />\r
          \r
          <div className="w-48 space-y-4">\r
            <h4 className="font-medium">사이드바</h4>\r
            <div className="space-y-2">\r
              <Button variant="ghost" size="sm" className="w-full justify-start">\r
                <Tag className="h-4 w-4 mr-2" />\r
                태그 1\r
              </Button>\r
              <Button variant="ghost" size="sm" className="w-full justify-start">\r
                <Tag className="h-4 w-4 mr-2" />\r
                태그 2\r
              </Button>\r
              <Button variant="ghost" size="sm" className="w-full justify-start">\r
                <Tag className="h-4 w-4 mr-2" />\r
                태그 3\r
              </Button>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* 모바일 레이아웃 */}\r
      <div className="md:hidden">\r
        <h3 className="font-semibold mb-4">모바일 레이아웃</h3>\r
        <div className="space-y-6">\r
          <div className="space-y-4">\r
            <h4 className="font-medium">메인 콘텐츠</h4>\r
            <p className="text-sm text-muted-foreground">\r
              주요 콘텐츠가 여기에 표시됩니다.\r
            </p>\r
            <div className="space-y-2">\r
              <div className="h-20 bg-muted rounded"></div>\r
              <div className="h-20 bg-muted rounded"></div>\r
            </div>\r
          </div>\r
          \r
          <Separator />\r
          \r
          <div className="space-y-4">\r
            <h4 className="font-medium">관련 태그</h4>\r
            <div className="flex flex-wrap gap-2">\r
              <Badge variant="secondary">태그 1</Badge>\r
              <Badge variant="secondary">태그 2</Badge>\r
              <Badge variant="secondary">태그 3</Badge>\r
              <Badge variant="secondary">태그 4</Badge>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "반응형 레이아웃에서 사용되는 Separator 예시입니다. 데스크톱에서는 수직, 모바일에서는 수평 구분선을 사용합니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[500px] space-y-6">\r
      <div className="space-y-2">\r
        <h3 className="text-lg font-semibold">접근성 데모</h3>\r
        <p className="text-sm text-muted-foreground">\r
          Separator 컴포넌트의 접근성 기능을 확인해보세요:\r
        </p>\r
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스 가능한 요소만 이동</li>\r
          <li>의미적 구분선은 스크린 리더가 "구분선"으로 안내</li>\r
          <li>장식적 구분선은 스크린 리더가 무시</li>\r
          <li>적절한 ARIA 역할로 콘텐츠 구조 전달</li>\r
          <li>시각적 구분과 논리적 구분의 명확한 분리</li>\r
        </ul>\r
      </div>\r
\r
      <div className="border rounded-lg p-4 space-y-4">\r
        <h4 className="font-semibold">의미적 구분 (스크린 리더가 인식)</h4>\r
        \r
        <section aria-labelledby="personal-info">\r
          <h5 id="personal-info" className="font-medium text-green-700">개인 정보 섹션</h5>\r
          <p className="text-sm text-muted-foreground">\r
            사용자의 기본 정보를 입력하는 섹션입니다.\r
          </p>\r
        </section>\r
        \r
        <Separator role="separator" aria-label="개인 정보와 연락처 정보 구분" />\r
        \r
        <section aria-labelledby="contact-info">\r
          <h5 id="contact-info" className="font-medium text-blue-700">연락처 정보 섹션</h5>\r
          <p className="text-sm text-muted-foreground">\r
            연락 가능한 정보를 입력하는 섹션입니다.\r
          </p>\r
        </section>\r
        \r
        <Separator role="separator" aria-label="연락처 정보와 선택사항 구분" />\r
        \r
        <section aria-labelledby="preferences">\r
          <h5 id="preferences" className="font-medium text-purple-700">선택사항 섹션</h5>\r
          <p className="text-sm text-muted-foreground">\r
            개인화 설정을 선택하는 섹션입니다.\r
          </p>\r
        </section>\r
      </div>\r
\r
      <div className="border rounded-lg p-4 space-y-4">\r
        <h4 className="font-semibold">장식적 구분 (스크린 리더가 무시)</h4>\r
        \r
        <div className="space-y-2">\r
          <div className="flex items-center justify-between">\r
            <span>메뉴 항목 1</span>\r
            <Badge>새로움</Badge>\r
          </div>\r
          <Separator decorative />\r
          <div className="flex items-center justify-between">\r
            <span>메뉴 항목 2</span>\r
            <Badge variant="secondary">인기</Badge>\r
          </div>\r
          <Separator decorative />\r
          <div className="flex items-center justify-between">\r
            <span>메뉴 항목 3</span>\r
            <Badge variant="outline">추천</Badge>\r
          </div>\r
        </div>\r
        \r
        <p className="text-sm text-muted-foreground">\r
          위의 구분선들은 시각적 구분만을 위한 장식적 요소로, \r
          스크린 리더는 이를 무시하고 메뉴 항목들을 연속적으로 읽습니다.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Separator의 접근성 기능을 보여주는 데모입니다. 의미적 구분과 장식적 구분의 차이를 확인할 수 있습니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};export{h as AccessibilityDemo,t as Default,m as DifferentStyles,l as InCards,c as InForms,o as InMenus,d as InNavigation,p as MediaContent,x as ResponsiveLayout,i as Vertical,me as default};
