import{j as e}from"./jsx-runtime-Bg0wcosX.js";import{T as n,a as s,b as t,c as r}from"./tooltip-DgiJQA_f.js";import{B as i}from"./button-D7SOlbox.js";import{B as o}from"./badge-Dw-13tHt.js";import{C as k,a as z,b as D,d as P}from"./card-DDKEa8bY.js";import{C as g}from"./circle-question-mark-DgzRKPEt.js";import{I as j}from"./info-Dc9Fyvqz.js";import{S as v}from"./settings-aLk_I4sW.js";import{S as y}from"./share-CkwyTK0t.js";import{C}from"./copy-BZVabyct.js";import{D as f}from"./download-mtd-6cL3.js";import{S as w}from"./square-pen-B2xRPUYB.js";import{T as B}from"./trash-2-Dki7QYyA.js";import{C as I}from"./circle-check-big-B5j281JP.js";import{C as b}from"./circle-alert-Bq9J_UJC.js";import{L as A}from"./lock-BlHtPvCM.js";import{c as F}from"./createLucideIcon-BrD2I-Pt.js";import{S as H}from"./star-1bioRDpF.js";import{U as S}from"./user-Dy5S_20S.js";import{S as O}from"./shield-BQ9CuCEX.js";import{P as R}from"./phone-BPGoQlgg.js";import{H as L}from"./house-D-lPt-7c.js";import{B as U}from"./briefcase-DZKpGwBO.js";import{C as E}from"./calendar-DfkeNr0N.js";import{P as _}from"./plus-NX8ApDUF.js";import"./iframe-BxFiHEBc.js";import"./index-BH9I6qX-.js";import"./index-DyUbU8gp.js";import"./index-DgoOwuDE.js";import"./index-rX4Nhu2y.js";import"./index-C1cwIXr4.js";import"./index-DRzWWaKl.js";import"./index-DVGQAVga.js";import"./index-C-vOXPwE.js";import"./index-CUAy8pfH.js";import"./index-9DEbcQqp.js";import"./index-DoirehBc.js";import"./index-CS4EtQnR.js";import"./index-ChxCFy0b.js";import"./index-bKM3j2IL.js";import"./utils-CBfrqCZ4.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],W=F("lock-open",M),Ie={title:"UI/Overlay/Tooltip",component:n,parameters:{layout:"centered",docs:{description:{component:`
호버 시 추가 정보나 설명을 제공하는 Tooltip 컴포넌트입니다. 사용자 경험을 향상시키고 인터페이스를 깔끔하게 유지할 수 있습니다.

## 주요 기능
- **호버 활성화**: 마우스 호버로 툴팁 표시
- **포커스 지원**: 키보드 포커스로도 활성화 가능
- **지능적 위치 조정**: 화면 경계에 맞춰 자동 위치 조정
- **다양한 위치**: top, bottom, left, right 배치 지원
- **지연 시간**: 표시/숨김 지연 시간 커스터마이징
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 지원
- **애니메이션**: 부드러운 나타남/사라짐 효과

## 사용법
\`\`\`tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// 기본 사용법
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <Button variant="outline">호버하세요</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>이것은 툴팁입니다</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// 위치 지정
<Tooltip>
  <TooltipTrigger>버튼</TooltipTrigger>
  <TooltipContent side="bottom">
    <p>아래쪽 툴팁</p>
  </TooltipContent>
</Tooltip>

// 지연 시간 설정
<TooltipProvider delayDuration={200}>
  <Tooltip>
    <TooltipTrigger>빠른 툴팁</TooltipTrigger>
    <TooltipContent>
      <p>200ms 후 나타납니다</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\`

## Props
### Tooltip
- \`open\`: 제어된 열림 상태
- \`defaultOpen\`: 기본 열림 상태
- \`onOpenChange\`: 열림 상태 변경 핸들러

### TooltipContent
- \`side\`: 위치 ("top" | "bottom" | "left" | "right")
- \`align\`: 정렬 ("start" | "center" | "end")
- \`sideOffset\`: 트리거로부터의 거리
- \`alignOffset\`: 정렬 오프셋
- \`className\`: 추가 CSS 클래스

### TooltipProvider
- \`delayDuration\`: 표시 지연 시간 (기본: 700ms)
- \`skipDelayDuration\`: 연속 호버 시 지연 생략 시간

## 접근성
- **ARIA 역할**: \`tooltip\` 역할로 스크린 리더 인식
- **키보드 지원**: Tab으로 포커스, Escape로 닫기
- **ARIA 관계**: \`aria-describedby\`로 트리거와 연결
- **포커스 관리**: 툴팁이 포커스를 가로채지 않음
- **스크린 리더**: 툴팁 내용을 적절히 읽어줌

## 위치 옵션
- **top**: 트리거 위쪽에 표시
- **bottom**: 트리거 아래쪽에 표시  
- **left**: 트리거 왼쪽에 표시
- **right**: 트리거 오른쪽에 표시
- **auto**: 화면 공간에 따라 자동 조정

## 사용 사례
- **도움말**: 기능 설명이나 사용법 안내
- **상태 정보**: 현재 상태나 추가 정보 표시
- **단축키**: 키보드 단축키 안내
- **경고/알림**: 중요한 정보나 주의사항
- **세부 정보**: 축약된 정보의 전체 내용
- **아이콘 설명**: 아이콘의 의미나 기능 설명

## 모범 사례
- 간결하고 명확한 텍스트 사용
- 중요한 정보는 툴팁에만 의존하지 말 것
- 터치 기기를 고려한 대안 제공
- 긴 텍스트는 다른 UI 패턴 고려
- 적절한 지연 시간으로 사용성 향상
- 일관된 툴팁 스타일 유지
        `}}},tags:["autodocs"],decorators:[N=>e.jsx(r,{children:e.jsx(N,{})})],argTypes:{side:{control:"select",options:["top","bottom","left","right"],description:"툴팁 위치"},align:{control:"select",options:["start","center","end"],description:"툴팁 정렬"},sideOffset:{control:"number",description:"트리거로부터의 거리"}},render:N=>e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"툴팁 보기"})}),e.jsx(n,{...N,children:e.jsx("p",{children:"이것은 기본 툴팁입니다"})})]})},l={args:{side:"top",align:"center",sideOffset:4},parameters:{docs:{description:{story:"기본 Tooltip입니다. 버튼 위에 마우스를 올리거나 키보드로 포커스하면 툴팁이 나타납니다."}}}},a={render:()=>e.jsx("div",{className:"flex flex-col items-center gap-8",children:e.jsxs("div",{className:"grid grid-cols-3 gap-4 items-center",children:[e.jsx("div",{}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"위쪽"})}),e.jsx(n,{side:"top",children:e.jsx("p",{children:"위쪽 툴팁"})})]}),e.jsx("div",{}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"왼쪽"})}),e.jsx(n,{side:"left",children:e.jsx("p",{children:"왼쪽 툴팁"})})]}),e.jsx("div",{className:"p-4 border rounded-lg bg-muted/20",children:e.jsx("p",{className:"text-sm text-center",children:"중앙 영역"})}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"오른쪽"})}),e.jsx(n,{side:"right",children:e.jsx("p",{children:"오른쪽 툴팁"})})]}),e.jsx("div",{}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"아래쪽"})}),e.jsx(n,{side:"bottom",children:e.jsx("p",{children:"아래쪽 툴팁"})})]}),e.jsx("div",{})]})}),parameters:{docs:{description:{story:"다양한 위치의 Tooltip을 보여줍니다. top, bottom, left, right 네 방향으로 배치할 수 있습니다."}}}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",size:"icon",children:e.jsx(g,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"도움말을 확인하세요"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",size:"icon",children:e.jsx(j,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"추가 정보가 있습니다"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",size:"icon",children:e.jsx(v,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"설정을 변경합니다"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",size:"icon",children:e.jsx(y,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"공유하기"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",size:"icon",children:e.jsx(C,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"클립보드에 복사 (Ctrl+C)"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",size:"icon",children:e.jsx(f,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"파일 다운로드"})})]})]}),parameters:{docs:{description:{story:"아이콘 버튼과 함께 사용되는 Tooltip입니다. 아이콘의 기능을 명확히 설명해줍니다."}}}},c={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"justify-start",children:[e.jsx(C,{className:"h-4 w-4 mr-2"}),"복사"]})}),e.jsxs(n,{children:[e.jsx("p",{children:"클립보드에 복사"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"Ctrl"})," +",e.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs ml-1",children:"C"})]})]})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"justify-start",children:[e.jsx(w,{className:"h-4 w-4 mr-2"}),"편집"]})}),e.jsxs(n,{children:[e.jsx("p",{children:"항목 편집하기"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:e.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"F2"})})]})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"justify-start",children:[e.jsx(B,{className:"h-4 w-4 mr-2"}),"삭제"]})}),e.jsxs(n,{children:[e.jsx("p",{children:"영구적으로 삭제"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:e.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"Delete"})})]})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"justify-start",children:[e.jsx(v,{className:"h-4 w-4 mr-2"}),"설정"]})}),e.jsxs(n,{children:[e.jsx("p",{children:"애플리케이션 설정"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[e.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"Ctrl"})," +",e.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs ml-1",children:","})]})]})]})]})}),parameters:{docs:{description:{story:"키보드 단축키 정보가 포함된 Tooltip입니다. 사용자에게 효율적인 조작 방법을 안내합니다."}}}},p={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"상태별 툴팁"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[e.jsx(I,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"성공"})]})}),e.jsx(n,{children:e.jsx("p",{children:"작업이 성공적으로 완료되었습니다"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[e.jsx(b,{className:"h-4 w-4 text-yellow-500"}),e.jsx("span",{children:"경고"})]})}),e.jsx(n,{children:e.jsx("p",{children:"주의가 필요한 상황입니다"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[e.jsx(b,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{children:"오류"})]})}),e.jsx(n,{children:e.jsx("p",{children:"문제가 발생했습니다. 다시 시도해주세요"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[e.jsx(j,{className:"h-4 w-4 text-blue-500"}),e.jsx("span",{children:"정보"})]})}),e.jsx(n,{children:e.jsx("p",{children:"추가 정보를 확인할 수 있습니다"})})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"보안 상태"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[e.jsx(A,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{children:"보안"})]})}),e.jsxs(n,{children:[e.jsx("p",{children:"안전한 연결이 설정되었습니다"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"SSL 인증서로 보호됨"})]})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[e.jsx(W,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{children:"비보안"})]})}),e.jsxs(n,{children:[e.jsx("p",{children:"보안되지 않은 연결입니다"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"민감한 정보 입력을 피하세요"})]})]})]})]})]}),parameters:{docs:{description:{story:"다양한 상태를 나타내는 Tooltip입니다. 성공, 경고, 오류, 정보, 보안 상태 등을 표시합니다."}}}},m={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(k,{className:"cursor-pointer hover:shadow-md transition-shadow",children:[e.jsx(z,{className:"pb-2",children:e.jsxs(D,{className:"text-base flex items-center gap-2",children:[e.jsx(H,{className:"h-4 w-4"}),"프리미엄 기능"]})}),e.jsx(P,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"고급 기능을 사용해보세요"})})]})}),e.jsx(n,{side:"bottom",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"font-medium",children:"프리미엄 구독 필요"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"월 $9.99로 모든 기능을 이용하세요"}),e.jsxs("div",{className:"flex gap-2 text-xs",children:[e.jsx(o,{variant:"secondary",children:"무제한 프로젝트"}),e.jsx(o,{variant:"secondary",children:"우선 지원"})]})]})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx("div",{className:"p-4 border rounded-lg cursor-pointer",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-4 w-4"}),e.jsx("span",{className:"font-medium",children:"사용자 정보"})]}),e.jsx(o,{children:"활성"})]})})}),e.jsx(n,{side:"bottom",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium",children:"JD"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"홍길동"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"hong@example.com"})]})]}),e.jsxs("div",{className:"flex gap-2 text-xs",children:[e.jsx(o,{variant:"outline",children:"관리자"}),e.jsx(o,{variant:"outline",children:"프리미엄"})]})]})})]})]})}),parameters:{docs:{description:{story:"풍부한 콘텐츠가 포함된 Tooltip입니다. 배지, 아바타, 복합 정보 등을 표시할 수 있습니다."}}}},x={render:()=>e.jsxs("div",{className:"space-y-6 w-[400px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"username",className:"text-sm font-medium",children:"사용자명"}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(g,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:"사용자명 규칙:"}),e.jsxs("ul",{className:"text-sm space-y-1 ml-2",children:[e.jsx("li",{children:"• 3-20자 길이"}),e.jsx("li",{children:"• 영문자로 시작"}),e.jsx("li",{children:"• 영문자, 숫자, _ 만 허용"}),e.jsx("li",{children:"• 대소문자 구분 없음"})]})]})})]})]}),e.jsx("input",{id:"username",className:"w-full p-2 border rounded-md",placeholder:"user123"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"비밀번호"}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(O,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:"강력한 비밀번호 조건:"}),e.jsxs("ul",{className:"text-sm space-y-1 ml-2",children:[e.jsx("li",{children:"• 최소 8자 이상"}),e.jsx("li",{children:"• 대문자 1개 이상"}),e.jsx("li",{children:"• 소문자 1개 이상"}),e.jsx("li",{children:"• 숫자 1개 이상"}),e.jsx("li",{children:"• 특수문자 1개 이상"})]})]})})]})]}),e.jsx("input",{id:"password",type:"password",className:"w-full p-2 border rounded-md",placeholder:"••••••••"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"이메일 주소"}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(j,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),e.jsxs(n,{children:[e.jsx("p",{children:"인증 이메일이 전송됩니다"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"스팸 폴더도 확인해주세요"})]})]})]}),e.jsx("input",{id:"email",type:"email",className:"w-full p-2 border rounded-md",placeholder:"name@example.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"phone",className:"text-sm font-medium",children:"전화번호"}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(R,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:"국제 형식으로 입력해주세요"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"예: +82-10-1234-5678"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"SMS 인증에 사용됩니다"})]})})]})]}),e.jsx("input",{id:"phone",type:"tel",className:"w-full p-2 border rounded-md",placeholder:"+82-10-1234-5678"})]})]}),parameters:{docs:{description:{story:"폼 필드의 도움말로 사용되는 Tooltip입니다. 입력 규칙이나 추가 정보를 제공합니다."}}}},h={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"사이드바 네비게이션"}),e.jsxs("div",{className:"w-12 space-y-2 border rounded-lg p-2",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"w-8 h-8",children:e.jsx(L,{className:"h-4 w-4"})})}),e.jsx(n,{side:"right",children:e.jsx("p",{children:"홈 대시보드"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"w-8 h-8",children:e.jsx(S,{className:"h-4 w-4"})})}),e.jsx(n,{side:"right",children:e.jsx("p",{children:"사용자 프로필"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"w-8 h-8",children:e.jsx(U,{className:"h-4 w-4"})})}),e.jsx(n,{side:"right",children:e.jsx("p",{children:"프로젝트 관리"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"w-8 h-8",children:e.jsx(E,{className:"h-4 w-4"})})}),e.jsx(n,{side:"right",children:e.jsx("p",{children:"일정 관리"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"w-8 h-8",children:e.jsx(v,{className:"h-4 w-4"})})}),e.jsx(n,{side:"right",children:e.jsx("p",{children:"설정"})})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"도구 모음"}),e.jsxs("div",{className:"flex gap-1 border rounded-lg p-2",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(_,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"새 항목 추가 (Ctrl+N)"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(w,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"편집 모드 (F2)"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(C,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"복사 (Ctrl+C)"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(y,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"공유하기"})})]}),e.jsx("div",{className:"w-px bg-border mx-1"}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(f,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"다운로드 (Ctrl+S)"})})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"ghost",size:"icon",className:"h-8 w-8",children:e.jsx(B,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsx("p",{children:"삭제 (Delete)"})})]})]})]})]}),parameters:{docs:{description:{story:"네비게이션과 툴바에서 사용되는 Tooltip입니다. 축약된 인터페이스에서 기능을 명확히 설명합니다."}}}},u={render:()=>e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"font-semibold",children:"지연 시간 테스트"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{delayDuration:0,children:e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"즉시 (0ms)"})}),e.jsx(n,{children:e.jsx("p",{children:"즉시 나타나는 툴팁"})})]})}),e.jsx(r,{delayDuration:200,children:e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"빠름 (200ms)"})}),e.jsx(n,{children:e.jsx("p",{children:"빠르게 나타나는 툴팁"})})]})}),e.jsx(r,{delayDuration:700,children:e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"기본 (700ms)"})}),e.jsx(n,{children:e.jsx("p",{children:"기본 속도 툴팁"})})]})}),e.jsx(r,{delayDuration:1500,children:e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"느림 (1500ms)"})}),e.jsx(n,{children:e.jsx("p",{children:"천천히 나타나는 툴팁"})})]})})]})]})}),parameters:{docs:{description:{story:"다양한 지연 시간을 가진 Tooltip입니다. 사용자 경험에 맞는 적절한 지연 시간을 선택할 수 있습니다."}}}},T={render:()=>e.jsxs("div",{className:"space-y-6 w-[500px]",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tooltip 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 포커스하면 툴팁 표시"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 툴팁 닫기"]}),e.jsx("li",{children:"마우스 호버로도 툴팁 표시"}),e.jsx("li",{children:"스크린 리더가 툴팁 내용을 자동으로 읽어줌"}),e.jsx("li",{children:"적절한 ARIA 속성으로 연결 관계 설정"}),e.jsx("li",{children:"키보드만으로도 모든 기능 접근 가능"})]})]}),e.jsx("div",{className:"border rounded-lg p-4 space-y-4",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2","aria-describedby":"save-tooltip",children:[e.jsx(f,{className:"h-4 w-4"}),"저장하기"]})}),e.jsxs(n,{id:"save-tooltip",children:[e.jsx("p",{children:"현재 작업을 파일로 저장합니다"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"단축키: Ctrl+S"})]})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx("button",{className:"p-2 border rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary","aria-label":"도움말 보기",children:e.jsx(g,{className:"h-4 w-4"})})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:"이 기능에 대한 도움말"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"자세한 정보는 F1을 눌러주세요"})]})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"accessible-input",className:"text-sm font-medium",children:"사용자 이름"}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(j,{className:"h-4 w-4 text-muted-foreground cursor-help",tabIndex:0,role:"button","aria-label":"사용자 이름 입력 도움말"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{children:"사용자 이름 생성 규칙:"}),e.jsxs("ul",{className:"text-sm space-y-1 ml-2",children:[e.jsx("li",{children:"• 3자 이상 15자 이하"}),e.jsx("li",{children:"• 영문자로 시작해야 함"}),e.jsx("li",{children:"• 특수문자 사용 금지"})]})]})})]})]}),e.jsx("input",{id:"accessible-input",className:"w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"영문자로 시작하는 사용자명","aria-describedby":"username-help"}),e.jsx("p",{id:"username-help",className:"text-xs text-muted-foreground",children:"영문자, 숫자, 밑줄(_)만 사용 가능합니다."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsx(i,{className:"flex-1",children:"계정 만들기"})}),e.jsxs(n,{children:[e.jsx("p",{children:"새 사용자 계정을 생성합니다"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"입력된 정보를 검증한 후 계정을 만듭니다"})]})]}),e.jsxs(s,{children:[e.jsx(t,{asChild:!0,children:e.jsxs(i,{variant:"outline",children:[e.jsx(g,{className:"h-4 w-4 mr-2"}),"도움말"]})}),e.jsxs(n,{children:[e.jsx("p",{children:"계정 생성에 대한 자세한 도움말"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"F1 키로도 접근할 수 있습니다"})]})]})]})]})})]}),parameters:{docs:{description:{story:"Tooltip의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    side: "top",
    align: "center",
    sideOffset: 4
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Tooltip입니다. 버튼 위에 마우스를 올리거나 키보드로 포커스하면 툴팁이 나타납니다."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div></div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">위쪽</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>위쪽 툴팁</p>
          </TooltipContent>
        </Tooltip>
        <div></div>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">왼쪽</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>왼쪽 툴팁</p>
          </TooltipContent>
        </Tooltip>
        <div className="p-4 border rounded-lg bg-muted/20">
          <p className="text-sm text-center">중앙 영역</p>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">오른쪽</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>오른쪽 툴팁</p>
          </TooltipContent>
        </Tooltip>
        
        <div></div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">아래쪽</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>아래쪽 툴팁</p>
          </TooltipContent>
        </Tooltip>
        <div></div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 위치의 Tooltip을 보여줍니다. top, bottom, left, right 네 방향으로 배치할 수 있습니다."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>도움말을 확인하세요</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Info className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>추가 정보가 있습니다</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>설정을 변경합니다</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Share className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>공유하기</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Copy className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>클립보드에 복사 (Ctrl+C)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>파일 다운로드</p>
        </TooltipContent>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "아이콘 버튼과 함께 사용되는 Tooltip입니다. 아이콘의 기능을 명확히 설명해줍니다."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Copy className="h-4 w-4 mr-2" />
              복사
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>클립보드에 복사</p>
            <p className="text-xs text-muted-foreground mt-1">
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl</kbd> + 
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs ml-1">C</kbd>
            </p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Edit className="h-4 w-4 mr-2" />
              편집
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>항목 편집하기</p>
            <p className="text-xs text-muted-foreground mt-1">
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">F2</kbd>
            </p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Trash2 className="h-4 w-4 mr-2" />
              삭제
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>영구적으로 삭제</p>
            <p className="text-xs text-muted-foreground mt-1">
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Delete</kbd>
            </p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="justify-start">
              <Settings className="h-4 w-4 mr-2" />
              설정
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>애플리케이션 설정</p>
            <p className="text-xs text-muted-foreground mt-1">
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl</kbd> + 
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs ml-1">,</kbd>
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "키보드 단축키 정보가 포함된 Tooltip입니다. 사용자에게 효율적인 조작 방법을 안내합니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold">상태별 툴팁</h3>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>성공</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>작업이 성공적으로 완료되었습니다</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span>경고</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>주의가 필요한 상황입니다</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <span>오류</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>문제가 발생했습니다. 다시 시도해주세요</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                <Info className="h-4 w-4 text-blue-500" />
                <span>정보</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>추가 정보를 확인할 수 있습니다</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">보안 상태</h3>
        <div className="flex gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                <Lock className="h-4 w-4 text-green-500" />
                <span>보안</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>안전한 연결이 설정되었습니다</p>
              <p className="text-xs text-muted-foreground mt-1">SSL 인증서로 보호됨</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">
                <Unlock className="h-4 w-4 text-red-500" />
                <span>비보안</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>보안되지 않은 연결입니다</p>
              <p className="text-xs text-muted-foreground mt-1">민감한 정보 입력을 피하세요</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 상태를 나타내는 Tooltip입니다. 성공, 경고, 오류, 정보, 보안 상태 등을 표시합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  프리미엄 기능
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  고급 기능을 사용해보세요
                </p>
              </CardContent>
            </Card>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <div className="space-y-2">
              <p className="font-medium">프리미엄 구독 필요</p>
              <p className="text-sm text-muted-foreground">
                월 $9.99로 모든 기능을 이용하세요
              </p>
              <div className="flex gap-2 text-xs">
                <Badge variant="secondary">무제한 프로젝트</Badge>
                <Badge variant="secondary">우선 지원</Badge>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <div className="p-4 border rounded-lg cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">사용자 정보</span>
                </div>
                <Badge>활성</Badge>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <div>
                  <p className="font-medium">홍길동</p>
                  <p className="text-xs text-muted-foreground">hong@example.com</p>
                </div>
              </div>
              <div className="flex gap-2 text-xs">
                <Badge variant="outline">관리자</Badge>
                <Badge variant="outline">프리미엄</Badge>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "풍부한 콘텐츠가 포함된 Tooltip입니다. 배지, 아바타, 복합 정보 등을 표시할 수 있습니다."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="username" className="text-sm font-medium">
            사용자명
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p>사용자명 규칙:</p>
                <ul className="text-sm space-y-1 ml-2">
                  <li>• 3-20자 길이</li>
                  <li>• 영문자로 시작</li>
                  <li>• 영문자, 숫자, _ 만 허용</li>
                  <li>• 대소문자 구분 없음</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <input id="username" className="w-full p-2 border rounded-md" placeholder="user123" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            비밀번호
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Shield className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p>강력한 비밀번호 조건:</p>
                <ul className="text-sm space-y-1 ml-2">
                  <li>• 최소 8자 이상</li>
                  <li>• 대문자 1개 이상</li>
                  <li>• 소문자 1개 이상</li>
                  <li>• 숫자 1개 이상</li>
                  <li>• 특수문자 1개 이상</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <input id="password" type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            이메일 주소
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>인증 이메일이 전송됩니다</p>
              <p className="text-xs text-muted-foreground mt-1">
                스팸 폴더도 확인해주세요
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="name@example.com" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            전화번호
          </label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Phone className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p>국제 형식으로 입력해주세요</p>
                <p className="text-xs text-muted-foreground">예: +82-10-1234-5678</p>
                <p className="text-xs text-muted-foreground">SMS 인증에 사용됩니다</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
        <input id="phone" type="tel" className="w-full p-2 border rounded-md" placeholder="+82-10-1234-5678" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "폼 필드의 도움말로 사용되는 Tooltip입니다. 입력 규칙이나 추가 정보를 제공합니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {/* 사이드바 네비게이션 */}
      <div className="space-y-4">
        <h3 className="font-semibold">사이드바 네비게이션</h3>
        <div className="w-12 space-y-2 border rounded-lg p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Home className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>홈 대시보드</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <User className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>사용자 프로필</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Briefcase className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>프로젝트 관리</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Calendar className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>일정 관리</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Settings className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>설정</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* 툴바 */}
      <div className="space-y-4">
        <h3 className="font-semibold">도구 모음</h3>
        <div className="flex gap-1 border rounded-lg p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>새 항목 추가 (Ctrl+N)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>편집 모드 (F2)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>복사 (Ctrl+C)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>공유하기</p>
            </TooltipContent>
          </Tooltip>

          <div className="w-px bg-border mx-1"></div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>다운로드 (Ctrl+S)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>삭제 (Delete)</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "네비게이션과 툴바에서 사용되는 Tooltip입니다. 축약된 인터페이스에서 기능을 명확히 설명합니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold">지연 시간 테스트</h3>
        <div className="flex gap-4">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">즉시 (0ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>즉시 나타나는 툴팁</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">빠름 (200ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>빠르게 나타나는 툴팁</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={700}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">기본 (700ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>기본 속도 툴팁</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider delayDuration={1500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">느림 (1500ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>천천히 나타나는 툴팁</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 지연 시간을 가진 Tooltip입니다. 사용자 경험에 맞는 적절한 지연 시간을 선택할 수 있습니다."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[500px]">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          Tooltip 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스하면 툴팁 표시</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 툴팁 닫기</li>
          <li>마우스 호버로도 툴팁 표시</li>
          <li>스크린 리더가 툴팁 내용을 자동으로 읽어줌</li>
          <li>적절한 ARIA 속성으로 연결 관계 설정</li>
          <li>키보드만으로도 모든 기능 접근 가능</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2" aria-describedby="save-tooltip">
                  <Download className="h-4 w-4" />
                  저장하기
                </Button>
              </TooltipTrigger>
              <TooltipContent id="save-tooltip">
                <p>현재 작업을 파일로 저장합니다</p>
                <p className="text-xs text-muted-foreground mt-1">
                  단축키: Ctrl+S
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-2 border rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary" aria-label="도움말 보기">
                  <HelpCircle className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p>이 기능에 대한 도움말</p>
                  <p className="text-xs text-muted-foreground">
                    자세한 정보는 F1을 눌러주세요
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="accessible-input" className="text-sm font-medium">
                사용자 이름
              </label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" tabIndex={0} role="button" aria-label="사용자 이름 입력 도움말" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p>사용자 이름 생성 규칙:</p>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• 3자 이상 15자 이하</li>
                      <li>• 영문자로 시작해야 함</li>
                      <li>• 특수문자 사용 금지</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <input id="accessible-input" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="영문자로 시작하는 사용자명" aria-describedby="username-help" />
            <p id="username-help" className="text-xs text-muted-foreground">
              영문자, 숫자, 밑줄(_)만 사용 가능합니다.
            </p>
          </div>

          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="flex-1">
                  계정 만들기
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>새 사용자 계정을 생성합니다</p>
                <p className="text-xs text-muted-foreground mt-1">
                  입력된 정보를 검증한 후 계정을 만듭니다
                </p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  도움말
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>계정 생성에 대한 자세한 도움말</p>
                <p className="text-xs text-muted-foreground mt-1">
                  F1 키로도 접근할 수 있습니다
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tooltip의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};export{T as AccessibilityDemo,l as Default,u as DelayedTooltips,a as DifferentPositions,x as FormHelpers,m as InteractiveContent,h as NavigationTooltips,p as StatusTooltips,d as WithIcons,c as WithKeyboardShortcuts,Ie as default};
