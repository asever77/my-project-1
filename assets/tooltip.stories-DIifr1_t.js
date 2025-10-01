import{j as r}from"./jsx-runtime-CUYHGflD.js";import{T as e,a as n,b as s,c as o}from"./tooltip-ByDcGj7Y.js";import{B as t}from"./button-BH1IU7qt.js";import{B as i}from"./badge-B-XMMOJi.js";import{C as k,a as z,b as D,d as P}from"./card-DMQXtJ8M.js";import{C as g}from"./circle-question-mark-CHFLujmU.js";import{I as j}from"./info-CS4_ZTF6.js";import{S as v}from"./settings-C4unARJR.js";import{S as y}from"./share-qPINXPP2.js";import{C}from"./copy-Bq3NKcYF.js";import{D as f}from"./download-Byz1FdaI.js";import{S as w}from"./square-pen-Ca1YOAdL.js";import{T as B}from"./trash-2-sHkUCPXd.js";import{C as I}from"./circle-check-big-Dyw4RiP_.js";import{C as b}from"./circle-alert-DMiz7VJe.js";import{L as A}from"./lock-CvDBEmiu.js";import{c as F}from"./createLucideIcon-BYaaJxR_.js";import{S as H}from"./star-CZy5D_eT.js";import{U as S}from"./user-DS-tfe1w.js";import{S as O}from"./shield-BT_8lB0I.js";import{P as R}from"./phone-pwtmtqkz.js";import{H as L}from"./house-D8erqax2.js";import{B as U}from"./briefcase-KQrzmmwG.js";import{C as E}from"./calendar-B0c0Cf0q.js";import{P as _}from"./plus-A0oPmAlK.js";import"./iframe-DUkcZvY3.js";import"./index-DtkgH7QJ.js";import"./index-Qk9vCU2k.js";import"./index-dEzg-V8q.js";import"./index-Bw06jJjB.js";import"./index-Dr9TOaCp.js";import"./index-BSYvLJny.js";import"./index-CfBgQs8v.js";import"./index-CS53fVwJ.js";import"./index-NfaMm55A.js";import"./index-CH9WEn8E.js";import"./index-B-LXRLju.js";import"./index-B0-S_xVN.js";import"./index-D7Dk64nB.js";import"./index-DmO8txDd.js";import"./utils-CBfrqCZ4.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],W=F("lock-open",M),Ir={title:"UI/Overlay/Tooltip",component:e,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],decorators:[N=>r.jsx(o,{children:r.jsx(N,{})})],argTypes:{side:{control:"select",options:["top","bottom","left","right"],description:"툴팁 위치"},align:{control:"select",options:["start","center","end"],description:"툴팁 정렬"},sideOffset:{control:"number",description:"트리거로부터의 거리"}},render:N=>r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"툴팁 보기"})}),r.jsx(e,{...N,children:r.jsx("p",{children:"이것은 기본 툴팁입니다"})})]})},l={args:{side:"top",align:"center",sideOffset:4},parameters:{docs:{description:{story:"기본 Tooltip입니다. 버튼 위에 마우스를 올리거나 키보드로 포커스하면 툴팁이 나타납니다."}}}},a={render:()=>r.jsx("div",{className:"flex flex-col items-center gap-8",children:r.jsxs("div",{className:"grid grid-cols-3 gap-4 items-center",children:[r.jsx("div",{}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"위쪽"})}),r.jsx(e,{side:"top",children:r.jsx("p",{children:"위쪽 툴팁"})})]}),r.jsx("div",{}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"왼쪽"})}),r.jsx(e,{side:"left",children:r.jsx("p",{children:"왼쪽 툴팁"})})]}),r.jsx("div",{className:"p-4 border rounded-lg bg-muted/20",children:r.jsx("p",{className:"text-sm text-center",children:"중앙 영역"})}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"오른쪽"})}),r.jsx(e,{side:"right",children:r.jsx("p",{children:"오른쪽 툴팁"})})]}),r.jsx("div",{}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"아래쪽"})}),r.jsx(e,{side:"bottom",children:r.jsx("p",{children:"아래쪽 툴팁"})})]}),r.jsx("div",{})]})}),parameters:{docs:{description:{story:"다양한 위치의 Tooltip을 보여줍니다. top, bottom, left, right 네 방향으로 배치할 수 있습니다."}}}},d={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",size:"icon",children:r.jsx(g,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"도움말을 확인하세요"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",size:"icon",children:r.jsx(j,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"추가 정보가 있습니다"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",size:"icon",children:r.jsx(v,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"설정을 변경합니다"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",size:"icon",children:r.jsx(y,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"공유하기"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",size:"icon",children:r.jsx(C,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"클립보드에 복사 (Ctrl+C)"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",size:"icon",children:r.jsx(f,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"파일 다운로드"})})]})]}),parameters:{docs:{description:{story:"아이콘 버튼과 함께 사용되는 Tooltip입니다. 아이콘의 기능을 명확히 설명해줍니다."}}}},c={render:()=>r.jsx("div",{className:"space-y-4",children:r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(t,{variant:"outline",className:"justify-start",children:[r.jsx(C,{className:"h-4 w-4 mr-2"}),"복사"]})}),r.jsxs(e,{children:[r.jsx("p",{children:"클립보드에 복사"}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[r.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"Ctrl"})," +",r.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs ml-1",children:"C"})]})]})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(t,{variant:"outline",className:"justify-start",children:[r.jsx(w,{className:"h-4 w-4 mr-2"}),"편집"]})}),r.jsxs(e,{children:[r.jsx("p",{children:"항목 편집하기"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:r.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"F2"})})]})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(t,{variant:"outline",className:"justify-start",children:[r.jsx(B,{className:"h-4 w-4 mr-2"}),"삭제"]})}),r.jsxs(e,{children:[r.jsx("p",{children:"영구적으로 삭제"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:r.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"Delete"})})]})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(t,{variant:"outline",className:"justify-start",children:[r.jsx(v,{className:"h-4 w-4 mr-2"}),"설정"]})}),r.jsxs(e,{children:[r.jsx("p",{children:"애플리케이션 설정"}),r.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[r.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs",children:"Ctrl"})," +",r.jsx("kbd",{className:"px-1 py-0.5 bg-muted rounded text-xs ml-1",children:","})]})]})]})]})}),parameters:{docs:{description:{story:"키보드 단축키 정보가 포함된 Tooltip입니다. 사용자에게 효율적인 조작 방법을 안내합니다."}}}},p={render:()=>r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"font-semibold",children:"상태별 툴팁"}),r.jsxs("div",{className:"flex gap-4",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[r.jsx(I,{className:"h-4 w-4 text-green-500"}),r.jsx("span",{children:"성공"})]})}),r.jsx(e,{children:r.jsx("p",{children:"작업이 성공적으로 완료되었습니다"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[r.jsx(b,{className:"h-4 w-4 text-yellow-500"}),r.jsx("span",{children:"경고"})]})}),r.jsx(e,{children:r.jsx("p",{children:"주의가 필요한 상황입니다"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[r.jsx(b,{className:"h-4 w-4 text-red-500"}),r.jsx("span",{children:"오류"})]})}),r.jsx(e,{children:r.jsx("p",{children:"문제가 발생했습니다. 다시 시도해주세요"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[r.jsx(j,{className:"h-4 w-4 text-blue-500"}),r.jsx("span",{children:"정보"})]})}),r.jsx(e,{children:r.jsx("p",{children:"추가 정보를 확인할 수 있습니다"})})]})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"font-semibold",children:"보안 상태"}),r.jsxs("div",{className:"flex gap-4",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[r.jsx(A,{className:"h-4 w-4 text-green-500"}),r.jsx("span",{children:"보안"})]})}),r.jsxs(e,{children:[r.jsx("p",{children:"안전한 연결이 설정되었습니다"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"SSL 인증서로 보호됨"})]})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs("div",{className:"flex items-center gap-2 p-2 border rounded cursor-pointer",children:[r.jsx(W,{className:"h-4 w-4 text-red-500"}),r.jsx("span",{children:"비보안"})]})}),r.jsxs(e,{children:[r.jsx("p",{children:"보안되지 않은 연결입니다"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"민감한 정보 입력을 피하세요"})]})]})]})]})]}),parameters:{docs:{description:{story:"다양한 상태를 나타내는 Tooltip입니다. 성공, 경고, 오류, 정보, 보안 상태 등을 표시합니다."}}}},m={render:()=>r.jsx("div",{className:"space-y-4",children:r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(k,{className:"cursor-pointer hover:shadow-md transition-shadow",children:[r.jsx(z,{className:"pb-2",children:r.jsxs(D,{className:"text-base flex items-center gap-2",children:[r.jsx(H,{className:"h-4 w-4"}),"프리미엄 기능"]})}),r.jsx(P,{children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"고급 기능을 사용해보세요"})})]})}),r.jsx(e,{side:"bottom",children:r.jsxs("div",{className:"space-y-2",children:[r.jsx("p",{className:"font-medium",children:"프리미엄 구독 필요"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"월 $9.99로 모든 기능을 이용하세요"}),r.jsxs("div",{className:"flex gap-2 text-xs",children:[r.jsx(i,{variant:"secondary",children:"무제한 프로젝트"}),r.jsx(i,{variant:"secondary",children:"우선 지원"})]})]})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx("div",{className:"p-4 border rounded-lg cursor-pointer",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(S,{className:"h-4 w-4"}),r.jsx("span",{className:"font-medium",children:"사용자 정보"})]}),r.jsx(i,{children:"활성"})]})})}),r.jsx(e,{side:"bottom",children:r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium",children:"JD"}),r.jsxs("div",{children:[r.jsx("p",{className:"font-medium",children:"홍길동"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"hong@example.com"})]})]}),r.jsxs("div",{className:"flex gap-2 text-xs",children:[r.jsx(i,{variant:"outline",children:"관리자"}),r.jsx(i,{variant:"outline",children:"프리미엄"})]})]})})]})]})}),parameters:{docs:{description:{story:"풍부한 콘텐츠가 포함된 Tooltip입니다. 배지, 아바타, 복합 정보 등을 표시할 수 있습니다."}}}},x={render:()=>r.jsxs("div",{className:"space-y-6 w-[400px]",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("label",{htmlFor:"username",className:"text-sm font-medium",children:"사용자명"}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(g,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),r.jsx(e,{children:r.jsxs("div",{className:"space-y-1",children:[r.jsx("p",{children:"사용자명 규칙:"}),r.jsxs("ul",{className:"text-sm space-y-1 ml-2",children:[r.jsx("li",{children:"• 3-20자 길이"}),r.jsx("li",{children:"• 영문자로 시작"}),r.jsx("li",{children:"• 영문자, 숫자, _ 만 허용"}),r.jsx("li",{children:"• 대소문자 구분 없음"})]})]})})]})]}),r.jsx("input",{id:"username",className:"w-full p-2 border rounded-md",placeholder:"user123"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"비밀번호"}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(O,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),r.jsx(e,{children:r.jsxs("div",{className:"space-y-1",children:[r.jsx("p",{children:"강력한 비밀번호 조건:"}),r.jsxs("ul",{className:"text-sm space-y-1 ml-2",children:[r.jsx("li",{children:"• 최소 8자 이상"}),r.jsx("li",{children:"• 대문자 1개 이상"}),r.jsx("li",{children:"• 소문자 1개 이상"}),r.jsx("li",{children:"• 숫자 1개 이상"}),r.jsx("li",{children:"• 특수문자 1개 이상"})]})]})})]})]}),r.jsx("input",{id:"password",type:"password",className:"w-full p-2 border rounded-md",placeholder:"••••••••"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"이메일 주소"}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(j,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),r.jsxs(e,{children:[r.jsx("p",{children:"인증 이메일이 전송됩니다"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"스팸 폴더도 확인해주세요"})]})]})]}),r.jsx("input",{id:"email",type:"email",className:"w-full p-2 border rounded-md",placeholder:"name@example.com"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("label",{htmlFor:"phone",className:"text-sm font-medium",children:"전화번호"}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(R,{className:"h-4 w-4 text-muted-foreground cursor-help"})}),r.jsx(e,{children:r.jsxs("div",{className:"space-y-1",children:[r.jsx("p",{children:"국제 형식으로 입력해주세요"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"예: +82-10-1234-5678"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"SMS 인증에 사용됩니다"})]})})]})]}),r.jsx("input",{id:"phone",type:"tel",className:"w-full p-2 border rounded-md",placeholder:"+82-10-1234-5678"})]})]}),parameters:{docs:{description:{story:"폼 필드의 도움말로 사용되는 Tooltip입니다. 입력 규칙이나 추가 정보를 제공합니다."}}}},h={render:()=>r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"font-semibold",children:"사이드바 네비게이션"}),r.jsxs("div",{className:"w-12 space-y-2 border rounded-lg p-2",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"w-8 h-8",children:r.jsx(L,{className:"h-4 w-4"})})}),r.jsx(e,{side:"right",children:r.jsx("p",{children:"홈 대시보드"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"w-8 h-8",children:r.jsx(S,{className:"h-4 w-4"})})}),r.jsx(e,{side:"right",children:r.jsx("p",{children:"사용자 프로필"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"w-8 h-8",children:r.jsx(U,{className:"h-4 w-4"})})}),r.jsx(e,{side:"right",children:r.jsx("p",{children:"프로젝트 관리"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"w-8 h-8",children:r.jsx(E,{className:"h-4 w-4"})})}),r.jsx(e,{side:"right",children:r.jsx("p",{children:"일정 관리"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"w-8 h-8",children:r.jsx(v,{className:"h-4 w-4"})})}),r.jsx(e,{side:"right",children:r.jsx("p",{children:"설정"})})]})]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"font-semibold",children:"도구 모음"}),r.jsxs("div",{className:"flex gap-1 border rounded-lg p-2",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"h-8 w-8",children:r.jsx(_,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"새 항목 추가 (Ctrl+N)"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"h-8 w-8",children:r.jsx(w,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"편집 모드 (F2)"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"h-8 w-8",children:r.jsx(C,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"복사 (Ctrl+C)"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"h-8 w-8",children:r.jsx(y,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"공유하기"})})]}),r.jsx("div",{className:"w-px bg-border mx-1"}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"h-8 w-8",children:r.jsx(f,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"다운로드 (Ctrl+S)"})})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"ghost",size:"icon",className:"h-8 w-8",children:r.jsx(B,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsx("p",{children:"삭제 (Delete)"})})]})]})]})]}),parameters:{docs:{description:{story:"네비게이션과 툴바에서 사용되는 Tooltip입니다. 축약된 인터페이스에서 기능을 명확히 설명합니다."}}}},u={render:()=>r.jsx("div",{className:"space-y-6",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"font-semibold",children:"지연 시간 테스트"}),r.jsxs("div",{className:"flex gap-4",children:[r.jsx(o,{delayDuration:0,children:r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"즉시 (0ms)"})}),r.jsx(e,{children:r.jsx("p",{children:"즉시 나타나는 툴팁"})})]})}),r.jsx(o,{delayDuration:200,children:r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"빠름 (200ms)"})}),r.jsx(e,{children:r.jsx("p",{children:"빠르게 나타나는 툴팁"})})]})}),r.jsx(o,{delayDuration:700,children:r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"기본 (700ms)"})}),r.jsx(e,{children:r.jsx("p",{children:"기본 속도 툴팁"})})]})}),r.jsx(o,{delayDuration:1500,children:r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{variant:"outline",children:"느림 (1500ms)"})}),r.jsx(e,{children:r.jsx("p",{children:"천천히 나타나는 툴팁"})})]})})]})]})}),parameters:{docs:{description:{story:"다양한 지연 시간을 가진 Tooltip입니다. 사용자 경험에 맞는 적절한 지연 시간을 선택할 수 있습니다."}}}},T={render:()=>r.jsxs("div",{className:"space-y-6 w-[500px]",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"Tooltip 컴포넌트의 접근성 기능을 확인해보세요:"}),r.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[r.jsxs("li",{children:[r.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"}),"으로 포커스하면 툴팁 표시"]}),r.jsxs("li",{children:[r.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Escape"}),"로 툴팁 닫기"]}),r.jsx("li",{children:"마우스 호버로도 툴팁 표시"}),r.jsx("li",{children:"스크린 리더가 툴팁 내용을 자동으로 읽어줌"}),r.jsx("li",{children:"적절한 ARIA 속성으로 연결 관계 설정"}),r.jsx("li",{children:"키보드만으로도 모든 기능 접근 가능"})]})]}),r.jsx("div",{className:"border rounded-lg p-4 space-y-4",children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(t,{variant:"outline",className:"flex items-center gap-2","aria-describedby":"save-tooltip",children:[r.jsx(f,{className:"h-4 w-4"}),"저장하기"]})}),r.jsxs(e,{id:"save-tooltip",children:[r.jsx("p",{children:"현재 작업을 파일로 저장합니다"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"단축키: Ctrl+S"})]})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx("button",{className:"p-2 border rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary","aria-label":"도움말 보기",children:r.jsx(g,{className:"h-4 w-4"})})}),r.jsx(e,{children:r.jsxs("div",{className:"space-y-1",children:[r.jsx("p",{children:"이 기능에 대한 도움말"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"자세한 정보는 F1을 눌러주세요"})]})})]})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("label",{htmlFor:"accessible-input",className:"text-sm font-medium",children:"사용자 이름"}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(j,{className:"h-4 w-4 text-muted-foreground cursor-help",tabIndex:0,role:"button","aria-label":"사용자 이름 입력 도움말"})}),r.jsx(e,{children:r.jsxs("div",{className:"space-y-1",children:[r.jsx("p",{children:"사용자 이름 생성 규칙:"}),r.jsxs("ul",{className:"text-sm space-y-1 ml-2",children:[r.jsx("li",{children:"• 3자 이상 15자 이하"}),r.jsx("li",{children:"• 영문자로 시작해야 함"}),r.jsx("li",{children:"• 특수문자 사용 금지"})]})]})})]})]}),r.jsx("input",{id:"accessible-input",className:"w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary",placeholder:"영문자로 시작하는 사용자명","aria-describedby":"username-help"}),r.jsx("p",{id:"username-help",className:"text-xs text-muted-foreground",children:"영문자, 숫자, 밑줄(_)만 사용 가능합니다."})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsx(t,{className:"flex-1",children:"계정 만들기"})}),r.jsxs(e,{children:[r.jsx("p",{children:"새 사용자 계정을 생성합니다"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"입력된 정보를 검증한 후 계정을 만듭니다"})]})]}),r.jsxs(n,{children:[r.jsx(s,{asChild:!0,children:r.jsxs(t,{variant:"outline",children:[r.jsx(g,{className:"h-4 w-4 mr-2"}),"도움말"]})}),r.jsxs(e,{children:[r.jsx("p",{children:"계정 생성에 대한 자세한 도움말"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"F1 키로도 접근할 수 있습니다"})]})]})]})]})})]}),parameters:{docs:{description:{story:"Tooltip의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: () => <div className="flex flex-col items-center gap-8">\r
      <div className="grid grid-cols-3 gap-4 items-center">\r
        <div></div>\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline">위쪽</Button>\r
          </TooltipTrigger>\r
          <TooltipContent side="top">\r
            <p>위쪽 툴팁</p>\r
          </TooltipContent>\r
        </Tooltip>\r
        <div></div>\r
        \r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline">왼쪽</Button>\r
          </TooltipTrigger>\r
          <TooltipContent side="left">\r
            <p>왼쪽 툴팁</p>\r
          </TooltipContent>\r
        </Tooltip>\r
        <div className="p-4 border rounded-lg bg-muted/20">\r
          <p className="text-sm text-center">중앙 영역</p>\r
        </div>\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline">오른쪽</Button>\r
          </TooltipTrigger>\r
          <TooltipContent side="right">\r
            <p>오른쪽 툴팁</p>\r
          </TooltipContent>\r
        </Tooltip>\r
        \r
        <div></div>\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline">아래쪽</Button>\r
          </TooltipTrigger>\r
          <TooltipContent side="bottom">\r
            <p>아래쪽 툴팁</p>\r
          </TooltipContent>\r
        </Tooltip>\r
        <div></div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 위치의 Tooltip을 보여줍니다. top, bottom, left, right 네 방향으로 배치할 수 있습니다."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="icon">\r
            <HelpCircle className="h-4 w-4" />\r
          </Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>도움말을 확인하세요</p>\r
        </TooltipContent>\r
      </Tooltip>\r
\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="icon">\r
            <Info className="h-4 w-4" />\r
          </Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>추가 정보가 있습니다</p>\r
        </TooltipContent>\r
      </Tooltip>\r
\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="icon">\r
            <Settings className="h-4 w-4" />\r
          </Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>설정을 변경합니다</p>\r
        </TooltipContent>\r
      </Tooltip>\r
\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="icon">\r
            <Share className="h-4 w-4" />\r
          </Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>공유하기</p>\r
        </TooltipContent>\r
      </Tooltip>\r
\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="icon">\r
            <Copy className="h-4 w-4" />\r
          </Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>클립보드에 복사 (Ctrl+C)</p>\r
        </TooltipContent>\r
      </Tooltip>\r
\r
      <Tooltip>\r
        <TooltipTrigger asChild>\r
          <Button variant="outline" size="icon">\r
            <Download className="h-4 w-4" />\r
          </Button>\r
        </TooltipTrigger>\r
        <TooltipContent>\r
          <p>파일 다운로드</p>\r
        </TooltipContent>\r
      </Tooltip>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "아이콘 버튼과 함께 사용되는 Tooltip입니다. 아이콘의 기능을 명확히 설명해줍니다."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="grid grid-cols-2 gap-4">\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline" className="justify-start">\r
              <Copy className="h-4 w-4 mr-2" />\r
              복사\r
            </Button>\r
          </TooltipTrigger>\r
          <TooltipContent>\r
            <p>클립보드에 복사</p>\r
            <p className="text-xs text-muted-foreground mt-1">\r
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl</kbd> + \r
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs ml-1">C</kbd>\r
            </p>\r
          </TooltipContent>\r
        </Tooltip>\r
\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline" className="justify-start">\r
              <Edit className="h-4 w-4 mr-2" />\r
              편집\r
            </Button>\r
          </TooltipTrigger>\r
          <TooltipContent>\r
            <p>항목 편집하기</p>\r
            <p className="text-xs text-muted-foreground mt-1">\r
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">F2</kbd>\r
            </p>\r
          </TooltipContent>\r
        </Tooltip>\r
\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline" className="justify-start">\r
              <Trash2 className="h-4 w-4 mr-2" />\r
              삭제\r
            </Button>\r
          </TooltipTrigger>\r
          <TooltipContent>\r
            <p>영구적으로 삭제</p>\r
            <p className="text-xs text-muted-foreground mt-1">\r
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Delete</kbd>\r
            </p>\r
          </TooltipContent>\r
        </Tooltip>\r
\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline" className="justify-start">\r
              <Settings className="h-4 w-4 mr-2" />\r
              설정\r
            </Button>\r
          </TooltipTrigger>\r
          <TooltipContent>\r
            <p>애플리케이션 설정</p>\r
            <p className="text-xs text-muted-foreground mt-1">\r
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl</kbd> + \r
              <kbd className="px-1 py-0.5 bg-muted rounded text-xs ml-1">,</kbd>\r
            </p>\r
          </TooltipContent>\r
        </Tooltip>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "키보드 단축키 정보가 포함된 Tooltip입니다. 사용자에게 효율적인 조작 방법을 안내합니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">상태별 툴팁</h3>\r
        <div className="flex gap-4">\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">\r
                <CheckCircle className="h-4 w-4 text-green-500" />\r
                <span>성공</span>\r
              </div>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>작업이 성공적으로 완료되었습니다</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">\r
                <AlertCircle className="h-4 w-4 text-yellow-500" />\r
                <span>경고</span>\r
              </div>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>주의가 필요한 상황입니다</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">\r
                <AlertCircle className="h-4 w-4 text-red-500" />\r
                <span>오류</span>\r
              </div>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>문제가 발생했습니다. 다시 시도해주세요</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">\r
                <Info className="h-4 w-4 text-blue-500" />\r
                <span>정보</span>\r
              </div>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>추가 정보를 확인할 수 있습니다</p>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">보안 상태</h3>\r
        <div className="flex gap-4">\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">\r
                <Lock className="h-4 w-4 text-green-500" />\r
                <span>보안</span>\r
              </div>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>안전한 연결이 설정되었습니다</p>\r
              <p className="text-xs text-muted-foreground mt-1">SSL 인증서로 보호됨</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <div className="flex items-center gap-2 p-2 border rounded cursor-pointer">\r
                <Unlock className="h-4 w-4 text-red-500" />\r
                <span>비보안</span>\r
              </div>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>보안되지 않은 연결입니다</p>\r
              <p className="text-xs text-muted-foreground mt-1">민감한 정보 입력을 피하세요</p>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 상태를 나타내는 Tooltip입니다. 성공, 경고, 오류, 정보, 보안 상태 등을 표시합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div className="grid grid-cols-2 gap-4">\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <Card className="cursor-pointer hover:shadow-md transition-shadow">\r
              <CardHeader className="pb-2">\r
                <CardTitle className="text-base flex items-center gap-2">\r
                  <Star className="h-4 w-4" />\r
                  프리미엄 기능\r
                </CardTitle>\r
              </CardHeader>\r
              <CardContent>\r
                <p className="text-sm text-muted-foreground">\r
                  고급 기능을 사용해보세요\r
                </p>\r
              </CardContent>\r
            </Card>\r
          </TooltipTrigger>\r
          <TooltipContent side="bottom">\r
            <div className="space-y-2">\r
              <p className="font-medium">프리미엄 구독 필요</p>\r
              <p className="text-sm text-muted-foreground">\r
                월 $9.99로 모든 기능을 이용하세요\r
              </p>\r
              <div className="flex gap-2 text-xs">\r
                <Badge variant="secondary">무제한 프로젝트</Badge>\r
                <Badge variant="secondary">우선 지원</Badge>\r
              </div>\r
            </div>\r
          </TooltipContent>\r
        </Tooltip>\r
\r
        <Tooltip>\r
          <TooltipTrigger asChild>\r
            <div className="p-4 border rounded-lg cursor-pointer">\r
              <div className="flex items-center justify-between">\r
                <div className="flex items-center gap-2">\r
                  <User className="h-4 w-4" />\r
                  <span className="font-medium">사용자 정보</span>\r
                </div>\r
                <Badge>활성</Badge>\r
              </div>\r
            </div>\r
          </TooltipTrigger>\r
          <TooltipContent side="bottom">\r
            <div className="space-y-2">\r
              <div className="flex items-center gap-2">\r
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">\r
                  JD\r
                </div>\r
                <div>\r
                  <p className="font-medium">홍길동</p>\r
                  <p className="text-xs text-muted-foreground">hong@example.com</p>\r
                </div>\r
              </div>\r
              <div className="flex gap-2 text-xs">\r
                <Badge variant="outline">관리자</Badge>\r
                <Badge variant="outline">프리미엄</Badge>\r
              </div>\r
            </div>\r
          </TooltipContent>\r
        </Tooltip>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "풍부한 콘텐츠가 포함된 Tooltip입니다. 배지, 아바타, 복합 정보 등을 표시할 수 있습니다."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[400px]">\r
      <div className="space-y-2">\r
        <div className="flex items-center gap-2">\r
          <label htmlFor="username" className="text-sm font-medium">\r
            사용자명\r
          </label>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <div className="space-y-1">\r
                <p>사용자명 규칙:</p>\r
                <ul className="text-sm space-y-1 ml-2">\r
                  <li>• 3-20자 길이</li>\r
                  <li>• 영문자로 시작</li>\r
                  <li>• 영문자, 숫자, _ 만 허용</li>\r
                  <li>• 대소문자 구분 없음</li>\r
                </ul>\r
              </div>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
        <input id="username" className="w-full p-2 border rounded-md" placeholder="user123" />\r
      </div>\r
\r
      <div className="space-y-2">\r
        <div className="flex items-center gap-2">\r
          <label htmlFor="password" className="text-sm font-medium">\r
            비밀번호\r
          </label>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Shield className="h-4 w-4 text-muted-foreground cursor-help" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <div className="space-y-1">\r
                <p>강력한 비밀번호 조건:</p>\r
                <ul className="text-sm space-y-1 ml-2">\r
                  <li>• 최소 8자 이상</li>\r
                  <li>• 대문자 1개 이상</li>\r
                  <li>• 소문자 1개 이상</li>\r
                  <li>• 숫자 1개 이상</li>\r
                  <li>• 특수문자 1개 이상</li>\r
                </ul>\r
              </div>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
        <input id="password" type="password" className="w-full p-2 border rounded-md" placeholder="••••••••" />\r
      </div>\r
\r
      <div className="space-y-2">\r
        <div className="flex items-center gap-2">\r
          <label htmlFor="email" className="text-sm font-medium">\r
            이메일 주소\r
          </label>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>인증 이메일이 전송됩니다</p>\r
              <p className="text-xs text-muted-foreground mt-1">\r
                스팸 폴더도 확인해주세요\r
              </p>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
        <input id="email" type="email" className="w-full p-2 border rounded-md" placeholder="name@example.com" />\r
      </div>\r
\r
      <div className="space-y-2">\r
        <div className="flex items-center gap-2">\r
          <label htmlFor="phone" className="text-sm font-medium">\r
            전화번호\r
          </label>\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Phone className="h-4 w-4 text-muted-foreground cursor-help" />\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <div className="space-y-1">\r
                <p>국제 형식으로 입력해주세요</p>\r
                <p className="text-xs text-muted-foreground">예: +82-10-1234-5678</p>\r
                <p className="text-xs text-muted-foreground">SMS 인증에 사용됩니다</p>\r
              </div>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
        <input id="phone" type="tel" className="w-full p-2 border rounded-md" placeholder="+82-10-1234-5678" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "폼 필드의 도움말로 사용되는 Tooltip입니다. 입력 규칙이나 추가 정보를 제공합니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      {/* 사이드바 네비게이션 */}\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">사이드바 네비게이션</h3>\r
        <div className="w-12 space-y-2 border rounded-lg p-2">\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="w-8 h-8">\r
                <Home className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="right">\r
              <p>홈 대시보드</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="w-8 h-8">\r
                <User className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="right">\r
              <p>사용자 프로필</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="w-8 h-8">\r
                <Briefcase className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="right">\r
              <p>프로젝트 관리</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="w-8 h-8">\r
                <Calendar className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="right">\r
              <p>일정 관리</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="w-8 h-8">\r
                <Settings className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent side="right">\r
              <p>설정</p>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
      </div>\r
\r
      {/* 툴바 */}\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">도구 모음</h3>\r
        <div className="flex gap-1 border rounded-lg p-2">\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="h-8 w-8">\r
                <Plus className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>새 항목 추가 (Ctrl+N)</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="h-8 w-8">\r
                <Edit className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>편집 모드 (F2)</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="h-8 w-8">\r
                <Copy className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>복사 (Ctrl+C)</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="h-8 w-8">\r
                <Share className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>공유하기</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <div className="w-px bg-border mx-1"></div>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="h-8 w-8">\r
                <Download className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>다운로드 (Ctrl+S)</p>\r
            </TooltipContent>\r
          </Tooltip>\r
\r
          <Tooltip>\r
            <TooltipTrigger asChild>\r
              <Button variant="ghost" size="icon" className="h-8 w-8">\r
                <Trash2 className="h-4 w-4" />\r
              </Button>\r
            </TooltipTrigger>\r
            <TooltipContent>\r
              <p>삭제 (Delete)</p>\r
            </TooltipContent>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "네비게이션과 툴바에서 사용되는 Tooltip입니다. 축약된 인터페이스에서 기능을 명확히 설명합니다."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">\r
      <div className="space-y-4">\r
        <h3 className="font-semibold">지연 시간 테스트</h3>\r
        <div className="flex gap-4">\r
          <TooltipProvider delayDuration={0}>\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button variant="outline">즉시 (0ms)</Button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <p>즉시 나타나는 툴팁</p>\r
              </TooltipContent>\r
            </Tooltip>\r
          </TooltipProvider>\r
\r
          <TooltipProvider delayDuration={200}>\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button variant="outline">빠름 (200ms)</Button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <p>빠르게 나타나는 툴팁</p>\r
              </TooltipContent>\r
            </Tooltip>\r
          </TooltipProvider>\r
\r
          <TooltipProvider delayDuration={700}>\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button variant="outline">기본 (700ms)</Button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <p>기본 속도 툴팁</p>\r
              </TooltipContent>\r
            </Tooltip>\r
          </TooltipProvider>\r
\r
          <TooltipProvider delayDuration={1500}>\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button variant="outline">느림 (1500ms)</Button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <p>천천히 나타나는 툴팁</p>\r
              </TooltipContent>\r
            </Tooltip>\r
          </TooltipProvider>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "다양한 지연 시간을 가진 Tooltip입니다. 사용자 경험에 맞는 적절한 지연 시간을 선택할 수 있습니다."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-[500px]">\r
      <div className="space-y-2">\r
        <h3 className="text-lg font-semibold">접근성 데모</h3>\r
        <p className="text-sm text-muted-foreground">\r
          Tooltip 컴포넌트의 접근성 기능을 확인해보세요:\r
        </p>\r
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">\r
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스하면 툴팁 표시</li>\r
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 툴팁 닫기</li>\r
          <li>마우스 호버로도 툴팁 표시</li>\r
          <li>스크린 리더가 툴팁 내용을 자동으로 읽어줌</li>\r
          <li>적절한 ARIA 속성으로 연결 관계 설정</li>\r
          <li>키보드만으로도 모든 기능 접근 가능</li>\r
        </ul>\r
      </div>\r
\r
      <div className="border rounded-lg p-4 space-y-4">\r
        <div className="space-y-4">\r
          <div className="flex items-center gap-4">\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button variant="outline" className="flex items-center gap-2" aria-describedby="save-tooltip">\r
                  <Download className="h-4 w-4" />\r
                  저장하기\r
                </Button>\r
              </TooltipTrigger>\r
              <TooltipContent id="save-tooltip">\r
                <p>현재 작업을 파일로 저장합니다</p>\r
                <p className="text-xs text-muted-foreground mt-1">\r
                  단축키: Ctrl+S\r
                </p>\r
              </TooltipContent>\r
            </Tooltip>\r
\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <button className="p-2 border rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary" aria-label="도움말 보기">\r
                  <HelpCircle className="h-4 w-4" />\r
                </button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <div className="space-y-1">\r
                  <p>이 기능에 대한 도움말</p>\r
                  <p className="text-xs text-muted-foreground">\r
                    자세한 정보는 F1을 눌러주세요\r
                  </p>\r
                </div>\r
              </TooltipContent>\r
            </Tooltip>\r
          </div>\r
\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-2">\r
              <label htmlFor="accessible-input" className="text-sm font-medium">\r
                사용자 이름\r
              </label>\r
              <Tooltip>\r
                <TooltipTrigger asChild>\r
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" tabIndex={0} role="button" aria-label="사용자 이름 입력 도움말" />\r
                </TooltipTrigger>\r
                <TooltipContent>\r
                  <div className="space-y-1">\r
                    <p>사용자 이름 생성 규칙:</p>\r
                    <ul className="text-sm space-y-1 ml-2">\r
                      <li>• 3자 이상 15자 이하</li>\r
                      <li>• 영문자로 시작해야 함</li>\r
                      <li>• 특수문자 사용 금지</li>\r
                    </ul>\r
                  </div>\r
                </TooltipContent>\r
              </Tooltip>\r
            </div>\r
            <input id="accessible-input" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="영문자로 시작하는 사용자명" aria-describedby="username-help" />\r
            <p id="username-help" className="text-xs text-muted-foreground">\r
              영문자, 숫자, 밑줄(_)만 사용 가능합니다.\r
            </p>\r
          </div>\r
\r
          <div className="flex gap-2">\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button className="flex-1">\r
                  계정 만들기\r
                </Button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <p>새 사용자 계정을 생성합니다</p>\r
                <p className="text-xs text-muted-foreground mt-1">\r
                  입력된 정보를 검증한 후 계정을 만듭니다\r
                </p>\r
              </TooltipContent>\r
            </Tooltip>\r
\r
            <Tooltip>\r
              <TooltipTrigger asChild>\r
                <Button variant="outline">\r
                  <HelpCircle className="h-4 w-4 mr-2" />\r
                  도움말\r
                </Button>\r
              </TooltipTrigger>\r
              <TooltipContent>\r
                <p>계정 생성에 대한 자세한 도움말</p>\r
                <p className="text-xs text-muted-foreground mt-1">\r
                  F1 키로도 접근할 수 있습니다\r
                </p>\r
              </TooltipContent>\r
            </Tooltip>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Tooltip의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};export{T as AccessibilityDemo,l as Default,u as DelayedTooltips,a as DifferentPositions,x as FormHelpers,m as InteractiveContent,h as NavigationTooltips,p as StatusTooltips,d as WithIcons,c as WithKeyboardShortcuts,Ir as default};
