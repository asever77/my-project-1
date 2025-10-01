import{j as e}from"./jsx-runtime-BNwwtYSP.js";import{c as v}from"./index-CdJFUDDL.js";import{c as g}from"./utils-CBfrqCZ4.js";import{T as h}from"./terminal-BICq1fCJ.js";import{I as j}from"./info-DhLim-t2.js";import{C as u}from"./circle-alert-CmKiGnlk.js";import{c as b}from"./createLucideIcon-DkJCW-cg.js";import{T as w}from"./triangle-alert-CSx-V7Jh.js";import"./iframe-DnvNSyRk.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],N=b("circle-check",f),T="relative w-full rounded-lg border px-4 py-3 text-sm",D="grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",C=v(T+" "+D,{variants:{variant:{default:"bg-card text-card-foreground",destructive:"text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"}},defaultVariants:{variant:"default"}}),r=({className:n,variant:l,...y})=>e.jsx("div",{"data-slot":"alert",role:"alert",className:g(C({variant:l}),n),...y}),t=({className:n,...l})=>e.jsx("div",{"data-slot":"alert-title",className:g("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",n),...l}),s=({className:n,...l})=>e.jsx("div",{"data-slot":"alert-description",className:g("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",n),...l});r.__docgenInfo={description:"",methods:[],displayName:"Alert"};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};s.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const L={title:"UI/Contents/Alert",component:r,parameters:{layout:"centered",docs:{description:{component:`
사용자에게 중요한 정보나 상태를 전달하는 Alert 컴포넌트입니다. 다양한 상황에 맞는 시각적 피드백을 제공합니다.

## 주요 기능
- **다양한 변형**: \`default\`, \`destructive\` 등 상황에 맞는 스타일 제공
- **아이콘 지원**: Lucide React 아이콘과 완벽하게 호환되는 그리드 레이아웃
- **접근성**: \`role="alert"\` 속성으로 스크린 리더에게 중요한 정보임을 알림
- **유연한 구성**: AlertTitle과 AlertDescription을 조합하여 구조화된 메시지 작성
- **반응형 디자인**: 모든 화면 크기에서 일관된 표시
- **커스터마이징**: TailwindCSS 클래스를 통한 스타일 커스터마이징 지원

## 사용법
\`\`\`tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

// 기본 사용법
<Alert>
  <AlertCircle />
  <AlertTitle>알림</AlertTitle>
  <AlertDescription>
    중요한 정보를 전달합니다.
  </AlertDescription>
</Alert>

// 위험 상황 알림
<Alert variant="destructive">
  <AlertTriangle />
  <AlertTitle>오류 발생</AlertTitle>
  <AlertDescription>
    문제가 발생했습니다. 다시 시도해주세요.
  </AlertDescription>
</Alert>
\`\`\`

## Props
- \`variant\`: 'default' | 'destructive' - 알림의 종류 설정
- \`className\`: string - 추가 CSS 클래스
- \`children\`: React.ReactNode - 아이콘, 제목, 설명 등의 내용
        `}}},tags:["autodocs"],render:n=>e.jsxs(r,{...n,className:"w-[400px]",children:[e.jsx(h,{}),e.jsx(t,{children:"알림 제목"}),e.jsx(s,{children:"이것은 기본 알림 메시지입니다. 사용자에게 중요한 정보를 전달할 때 사용합니다."})]})},a={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(j,{}),e.jsx(t,{children:"시스템 점검 안내"}),e.jsx(s,{children:"2024년 1월 15일 02:00 ~ 06:00 시스템 점검이 예정되어 있습니다. 점검 시간 동안 서비스 이용이 제한될 수 있습니다."})]}),parameters:{docs:{description:{story:"기본 Alert 컴포넌트입니다. 일반적인 정보 전달이나 안내사항에 사용합니다. 중성적인 색상으로 표시됩니다."}}}},c={render:()=>e.jsxs(r,{variant:"destructive",className:"w-[500px]",children:[e.jsx(u,{}),e.jsx(t,{children:"로그인 실패"}),e.jsx(s,{children:"이메일 또는 비밀번호가 올바르지 않습니다. 5회 이상 실패 시 계정이 일시적으로 잠금될 수 있습니다."})]}),parameters:{docs:{description:{story:"오류나 위험 상황을 알리는 Alert입니다. 빨간색 계열로 표시되어 사용자의 주의를 끕니다."}}}},i={render:()=>e.jsxs(r,{className:"w-[500px] border-green-200 bg-green-50 text-green-800",children:[e.jsx(N,{className:"text-green-600"}),e.jsx(t,{className:"text-green-800",children:"회원가입 완료"}),e.jsx(s,{className:"text-green-700",children:"회원가입이 성공적으로 완료되었습니다! 인증 메일을 확인해주세요."})]}),parameters:{docs:{description:{story:"성공 상황을 알리는 커스터마이징된 Alert입니다. 초록색 테마를 적용하여 긍정적인 피드백을 제공합니다."}}}},o={render:()=>e.jsxs(r,{className:"w-[500px] border-yellow-200 bg-yellow-50 text-yellow-800",children:[e.jsx(w,{className:"text-yellow-600"}),e.jsx(t,{className:"text-yellow-800",children:"주의사항"}),e.jsx(s,{className:"text-yellow-700",children:"계정 보안을 위해 정기적으로 비밀번호를 변경해주세요. 마지막 변경일로부터 90일이 경과했습니다."})]}),parameters:{docs:{description:{story:"경고나 주의사항을 알리는 커스터마이징된 Alert입니다. 노란색 테마로 주의를 환기시킵니다."}}}},d={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(t,{children:"간단한 알림"}),e.jsx(s,{children:"아이콘 없이도 깔끔하게 메시지를 전달할 수 있습니다. 간단한 안내사항이나 텍스트 중심의 알림에 적합합니다."})]}),parameters:{docs:{description:{story:"아이콘 없이 텍스트만으로 구성된 Alert입니다. 간단한 메시지나 안내사항에 적합합니다."}}}},p={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(u,{}),e.jsx(t,{children:"제목만 있는 간단한 알림입니다"})]}),parameters:{docs:{description:{story:"제목만 있는 간단한 Alert입니다. 짧고 명확한 메시지를 전달할 때 사용합니다."}}}},m={render:()=>e.jsxs("div",{className:"space-y-4 w-[500px]",children:[e.jsxs(r,{children:[e.jsx(j,{}),e.jsx(t,{children:"업데이트 알림"}),e.jsx(s,{children:"새로운 기능이 추가되었습니다. 업데이트를 확인해보세요."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(u,{}),e.jsx(t,{children:"결제 실패"}),e.jsx(s,{children:"카드 정보를 다시 확인해주세요."})]}),e.jsxs(r,{className:"border-green-200 bg-green-50 text-green-800",children:[e.jsx(N,{className:"text-green-600"}),e.jsx(t,{className:"text-green-800",children:"주문 완료"}),e.jsx(s,{className:"text-green-700",children:"주문이 성공적으로 처리되었습니다."})]})]}),parameters:{docs:{description:{story:"여러 개의 Alert를 함께 사용하는 예시입니다. 알림 센터나 대시보드에서 다양한 상태의 메시지를 표시할 때 유용합니다."}}}},x={render:()=>e.jsxs(r,{className:"w-[500px]",children:[e.jsx(h,{}),e.jsx(t,{children:"시스템 상태"}),e.jsx(s,{children:e.jsxs("div",{className:"mt-2 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"서버 상태"}),e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded text-xs",children:"정상"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"데이터베이스"}),e.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 rounded text-xs",children:"정상"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"마지막 업데이트"}),e.jsx("span",{className:"text-sm text-gray-600",children:"2분 전"})]}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",children:"새로고침"}),e.jsx("button",{className:"px-3 py-1 border rounded text-sm hover:bg-gray-50",children:"상세보기"})]})]})})]}),parameters:{docs:{description:{story:"복잡한 내용을 포함하는 Alert 예시입니다. 상태 정보, 버튼, 배지 등 다양한 UI 요소를 조합하여 정보가 풍부한 알림을 만들 수 있습니다."}}}},A={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg w-[500px]",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🔧 접근성 가이드"}),e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{children:[e.jsx("code",{className:"px-2 py-1 bg-white rounded border text-xs",children:'role="alert"'})," - 스크린 리더가 즉시 알림을 읽어줍니다"]}),e.jsxs("div",{children:[e.jsx("code",{className:"px-2 py-1 bg-white rounded border text-xs",children:"AlertTitle"})," - 구조화된 제목으로 내용을 명확히 구분"]}),e.jsxs("div",{children:[e.jsx("code",{className:"px-2 py-1 bg-white rounded border text-xs",children:"AlertDescription"})," - 상세 설명으로 완전한 정보 제공"]}),e.jsx("div",{children:"아이콘은 시각적 보조 수단으로 텍스트와 함께 사용됩니다"})]})]}),e.jsxs(r,{className:"w-[500px]",children:[e.jsx(u,{}),e.jsx(t,{children:"접근성이 고려된 알림"}),e.jsx(s,{children:"이 알림은 스크린 리더 사용자들도 쉽게 이해할 수 있도록 구조화된 마크업과 적절한 ARIA 속성을 사용합니다. 시각적 아이콘과 명확한 텍스트를 함께 제공합니다."})]})]}),parameters:{docs:{description:{story:"완전한 접근성을 지원하는 Alert 데모입니다. role='alert' 속성과 구조화된 마크업으로 모든 사용자가 정보에 접근할 수 있습니다."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <Info />
      <AlertTitle>시스템 점검 안내</AlertTitle>
      <AlertDescription>
        2024년 1월 15일 02:00 ~ 06:00 시스템 점검이 예정되어 있습니다. 
        점검 시간 동안 서비스 이용이 제한될 수 있습니다.
      </AlertDescription>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "기본 Alert 컴포넌트입니다. 일반적인 정보 전달이나 안내사항에 사용합니다. 중성적인 색상으로 표시됩니다."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[500px]">
      <AlertCircle />
      <AlertTitle>로그인 실패</AlertTitle>
      <AlertDescription>
        이메일 또는 비밀번호가 올바르지 않습니다. 
        5회 이상 실패 시 계정이 일시적으로 잠금될 수 있습니다.
      </AlertDescription>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "오류나 위험 상황을 알리는 Alert입니다. 빨간색 계열로 표시되어 사용자의 주의를 끕니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px] border-green-200 bg-green-50 text-green-800">
      <CheckCircle2 className="text-green-600" />
      <AlertTitle className="text-green-800">회원가입 완료</AlertTitle>
      <AlertDescription className="text-green-700">
        회원가입이 성공적으로 완료되었습니다! 
        인증 메일을 확인해주세요.
      </AlertDescription>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "성공 상황을 알리는 커스터마이징된 Alert입니다. 초록색 테마를 적용하여 긍정적인 피드백을 제공합니다."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px] border-yellow-200 bg-yellow-50 text-yellow-800">
      <AlertTriangle className="text-yellow-600" />
      <AlertTitle className="text-yellow-800">주의사항</AlertTitle>
      <AlertDescription className="text-yellow-700">
        계정 보안을 위해 정기적으로 비밀번호를 변경해주세요. 
        마지막 변경일로부터 90일이 경과했습니다.
      </AlertDescription>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "경고나 주의사항을 알리는 커스터마이징된 Alert입니다. 노란색 테마로 주의를 환기시킵니다."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <AlertTitle>간단한 알림</AlertTitle>
      <AlertDescription>
        아이콘 없이도 깔끔하게 메시지를 전달할 수 있습니다.
        간단한 안내사항이나 텍스트 중심의 알림에 적합합니다.
      </AlertDescription>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "아이콘 없이 텍스트만으로 구성된 Alert입니다. 간단한 메시지나 안내사항에 적합합니다."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <AlertCircle />
      <AlertTitle>제목만 있는 간단한 알림입니다</AlertTitle>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "제목만 있는 간단한 Alert입니다. 짧고 명확한 메시지를 전달할 때 사용합니다."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[500px]">
      <Alert>
        <Info />
        <AlertTitle>업데이트 알림</AlertTitle>
        <AlertDescription>
          새로운 기능이 추가되었습니다. 업데이트를 확인해보세요.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle />
        <AlertTitle>결제 실패</AlertTitle>
        <AlertDescription>
          카드 정보를 다시 확인해주세요.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-green-200 bg-green-50 text-green-800">
        <CheckCircle2 className="text-green-600" />
        <AlertTitle className="text-green-800">주문 완료</AlertTitle>
        <AlertDescription className="text-green-700">
          주문이 성공적으로 처리되었습니다.
        </AlertDescription>
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "여러 개의 Alert를 함께 사용하는 예시입니다. 알림 센터나 대시보드에서 다양한 상태의 메시지를 표시할 때 유용합니다."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[500px]">
      <Terminal />
      <AlertTitle>시스템 상태</AlertTitle>
      <AlertDescription>
        <div className="mt-2 space-y-2">
          <div className="flex justify-between items-center">
            <span>서버 상태</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">정상</span>
          </div>
          <div className="flex justify-between items-center">
            <span>데이터베이스</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">정상</span>
          </div>
          <div className="flex justify-between items-center">
            <span>마지막 업데이트</span>
            <span className="text-sm text-gray-600">2분 전</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
              새로고침
            </button>
            <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
              상세보기
            </button>
          </div>
        </div>
      </AlertDescription>
    </Alert>,
  parameters: {
    docs: {
      description: {
        story: "복잡한 내용을 포함하는 Alert 예시입니다. 상태 정보, 버튼, 배지 등 다양한 UI 요소를 조합하여 정보가 풍부한 알림을 만들 수 있습니다."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg w-[500px]">
        <h4 className="font-semibold mb-2">🔧 접근성 가이드</h4>
        <div className="text-sm space-y-1">
          <div><code className="px-2 py-1 bg-white rounded border text-xs">role="alert"</code> - 스크린 리더가 즉시 알림을 읽어줍니다</div>
          <div><code className="px-2 py-1 bg-white rounded border text-xs">AlertTitle</code> - 구조화된 제목으로 내용을 명확히 구분</div>
          <div><code className="px-2 py-1 bg-white rounded border text-xs">AlertDescription</code> - 상세 설명으로 완전한 정보 제공</div>
          <div>아이콘은 시각적 보조 수단으로 텍스트와 함께 사용됩니다</div>
        </div>
      </div>
      
      <Alert className="w-[500px]">
        <AlertCircle />
        <AlertTitle>접근성이 고려된 알림</AlertTitle>
        <AlertDescription>
          이 알림은 스크린 리더 사용자들도 쉽게 이해할 수 있도록 
          구조화된 마크업과 적절한 ARIA 속성을 사용합니다.
          시각적 아이콘과 명확한 텍스트를 함께 제공합니다.
        </AlertDescription>
      </Alert>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "완전한 접근성을 지원하는 Alert 데모입니다. role='alert' 속성과 구조화된 마크업으로 모든 사용자가 정보에 접근할 수 있습니다."
      }
    }
  }
}`,...A.parameters?.docs?.source}}};const M=["Default","Destructive","Success","Warning","WithoutIcon","TitleOnly","MultipleAlerts","CustomContent","AccessibilityDemo"];export{A as AccessibilityDemo,x as CustomContent,a as Default,c as Destructive,m as MultipleAlerts,i as Success,p as TitleOnly,o as Warning,d as WithoutIcon,M as __namedExportsOrder,L as default};
