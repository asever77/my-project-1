import{j as e}from"./jsx-runtime-Bg0wcosX.js";import{B as s}from"./badge-Dw-13tHt.js";import{S as h}from"./star-1bioRDpF.js";import{C as x}from"./circle-check-big-B5j281JP.js";import{T as g}from"./triangle-alert-DygdZT0S.js";import{H as u}from"./heart-C4vMaBkh.js";import{S as N}from"./shopping-cart-D7kvgrZQ.js";import{Z as j}from"./zap-rgMaGoUD.js";import{X as p}from"./x-CpLUHpD2.js";import"./iframe-BxFiHEBc.js";import"./index-DyUbU8gp.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./createLucideIcon-BrD2I-Pt.js";const I={title:"UI/Base/Badge",component:s,parameters:{layout:"centered",docs:{description:{component:`
작고 간결한 라벨 컴포넌트입니다. 상태, 카테고리, 개수 등을 표시하는 데 사용됩니다.

## 주요 기능
- **다양한 변형**: default, secondary, destructive, outline 스타일 지원
- **아이콘 지원**: SVG 아이콘과 텍스트를 함께 표시 가능
- **링크 지원**: asChild prop을 통해 링크나 버튼으로 사용 가능
- **접근성**: focus-visible, aria-invalid 등 접근성 기능 내장
- **반응형**: 다양한 화면 크기에서 적절한 크기로 조정
- **커스터마이징**: TailwindCSS 클래스를 통한 스타일 변경 지원

## 사용법
\`\`\`tsx
import { Badge } from "@/components/ui/badge"

// 기본 사용법
<Badge>새로운</Badge>

// 변형 사용법
<Badge variant="secondary">보조</Badge>
<Badge variant="destructive">삭제</Badge>
<Badge variant="outline">테두리</Badge>

// 아이콘과 함께
<Badge>
  <Star className="w-3 h-3" />
  인기
</Badge>

// 링크로 사용
<Badge asChild>
  <a href="/category">카테고리</a>
</Badge>
\`\`\`

## 변형 (Variants)
- **default**: 기본 스타일, 주요 정보 표시
- **secondary**: 보조 정보, 덜 중요한 내용
- **destructive**: 경고나 삭제 관련 정보
- **outline**: 테두리만 있는 스타일, 미묘한 표시

## Props
- \`variant\`: 'default' | 'secondary' | 'destructive' | 'outline' - 스타일 변형
- \`asChild\`: boolean - 자식 요소를 직접 렌더링할지 여부
- \`className\`: string - 추가 CSS 클래스
        `}}},tags:["autodocs"],render:v=>e.jsx(s,{...v,children:"새로운"})},a={render:()=>e.jsx(s,{children:"기본 배지"}),parameters:{docs:{description:{story:"기본 Badge입니다. 주요 정보나 강조하고 싶은 내용을 표시할 때 사용합니다."}}}},n={render:()=>e.jsx(s,{variant:"secondary",children:"보조 배지"}),parameters:{docs:{description:{story:"Secondary 변형의 Badge입니다. 부가적인 정보나 덜 중요한 내용을 표시할 때 사용합니다."}}}},r={render:()=>e.jsx(s,{variant:"destructive",children:"경고 배지"}),parameters:{docs:{description:{story:"Destructive 변형의 Badge입니다. 오류, 경고, 삭제 등의 중요한 알림을 표시할 때 사용합니다."}}}},i={render:()=>e.jsx(s,{variant:"outline",children:"테두리 배지"}),parameters:{docs:{description:{story:"Outline 변형의 Badge입니다. 미묘한 강조나 선택적 정보를 표시할 때 사용합니다."}}}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(s,{children:[e.jsx(h,{className:"w-3 h-3"}),"인기"]}),e.jsxs(s,{variant:"secondary",children:[e.jsx(x,{className:"w-3 h-3"}),"완료"]}),e.jsxs(s,{variant:"destructive",children:[e.jsx(g,{className:"w-3 h-3"}),"주의"]}),e.jsxs(s,{variant:"outline",children:[e.jsx(u,{className:"w-3 h-3"}),"좋아요"]})]}),parameters:{docs:{description:{story:"아이콘이 포함된 Badge입니다. 시각적으로 더 명확한 정보 전달이 가능합니다."}}}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(N,{className:"w-6 h-6"}),e.jsx(s,{className:"absolute -top-2 -right-2 px-1 min-w-5 h-5",children:"3"})]}),e.jsxs("div",{className:"relative",children:[e.jsx(u,{className:"w-6 h-6"}),e.jsx(s,{variant:"destructive",className:"absolute -top-2 -right-2 px-1 min-w-5 h-5",children:"12"})]}),e.jsxs("div",{className:"relative",children:[e.jsx(h,{className:"w-6 h-6"}),e.jsx(s,{variant:"secondary",className:"absolute -top-2 -right-2 px-1 min-w-5 h-5",children:"99+"})]})]}),parameters:{docs:{description:{story:"알림 카운터로 사용되는 Badge입니다. 아이콘과 함께 배치하여 개수나 상태를 표시합니다."}}}},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"주문 상태:"}),e.jsx(s,{children:"처리 중"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"배송 상태:"}),e.jsxs(s,{variant:"secondary",children:[e.jsx(j,{className:"w-3 h-3"}),"빠른 배송"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"결제 상태:"}),e.jsx(s,{variant:"destructive",children:"결제 실패"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"회원 등급:"}),e.jsx(s,{variant:"outline",children:"골드"})]})]}),parameters:{docs:{description:{story:"상태 라벨로 사용되는 Badge입니다. 다양한 상태 정보를 명확하게 전달합니다."}}}},l={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:"제품 태그"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{children:"신상품"}),e.jsx(s,{variant:"secondary",children:"할인"}),e.jsx(s,{variant:"outline",children:"무료배송"}),e.jsx(s,{children:"베스트셀러"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:"카테고리"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(s,{variant:"outline",children:"전자제품"}),e.jsx(s,{variant:"outline",children:"컴퓨터"}),e.jsx(s,{variant:"outline",children:"노트북"})]})]})]}),parameters:{docs:{description:{story:"제품 태그나 카테고리 표시에 사용되는 Badge입니다. 여러 개를 조합하여 사용할 수 있습니다."}}}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:"클릭 가능한 배지"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{asChild:!0,children:e.jsxs("button",{className:"cursor-pointer hover:opacity-80",children:["필터: 가격",e.jsx(p,{className:"w-3 h-3 ml-1"})]})}),e.jsx(s,{variant:"secondary",asChild:!0,children:e.jsxs("button",{className:"cursor-pointer hover:opacity-80",children:["필터: 브랜드",e.jsx(p,{className:"w-3 h-3 ml-1"})]})}),e.jsx(s,{variant:"outline",asChild:!0,children:e.jsxs("button",{className:"cursor-pointer hover:opacity-80",children:["필터: 카테고리",e.jsx(p,{className:"w-3 h-3 ml-1"})]})})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:"링크 배지"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{asChild:!0,children:e.jsx("a",{href:"#",className:"cursor-pointer hover:opacity-80",children:"#React"})}),e.jsx(s,{variant:"secondary",asChild:!0,children:e.jsx("a",{href:"#",className:"cursor-pointer hover:opacity-80",children:"#TypeScript"})}),e.jsx(s,{variant:"outline",asChild:!0,children:e.jsx("a",{href:"#",className:"cursor-pointer hover:opacity-80",children:"#Storybook"})})]})]})]}),parameters:{docs:{description:{story:"상호작용이 가능한 Badge입니다. 버튼이나 링크로 사용하여 필터링이나 네비게이션 기능을 제공합니다."}}}},m={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"접근성 데모"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Badge 컴포넌트의 접근성 기능을 확인해보세요:"}),e.jsxs("ul",{className:"text-sm text-muted-foreground list-disc list-inside space-y-1",children:[e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Tab"})," 키로 포커스 이동 (상호작용 가능한 배지)"]}),e.jsxs("li",{children:[e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Enter"})," 또는 ",e.jsx("kbd",{className:"px-2 py-1 bg-muted rounded text-xs",children:"Space"}),"로 활성화"]}),e.jsx("li",{children:"스크린 리더가 배지 내용을 적절히 읽어줌"}),e.jsx("li",{children:"색상뿐만 아니라 텍스트로도 정보 전달"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-medium",children:"포커스 가능한 배지"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{asChild:!0,children:e.jsxs("button",{className:"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2","aria-label":"중요한 알림을 확인하세요",children:[e.jsx(g,{className:"w-3 h-3"}),"중요"]})}),e.jsx(s,{variant:"secondary",asChild:!0,children:e.jsxs("a",{href:"#",className:"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2","aria-label":"완료된 작업 목록으로 이동",children:[e.jsx(x,{className:"w-3 h-3"}),"완료"]})})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-medium",children:"상태 표시"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"연결 상태:"}),e.jsxs(s,{children:[e.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mr-1"}),"온라인"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"동기화 상태:"}),e.jsxs(s,{variant:"destructive",children:[e.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full mr-1"}),"오프라인"]})]})]})]})]}),parameters:{docs:{description:{story:"Badge의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 라벨링을 확인할 수 있습니다."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Badge>기본 배지</Badge>,
  parameters: {
    docs: {
      description: {
        story: "기본 Badge입니다. 주요 정보나 강조하고 싶은 내용을 표시할 때 사용합니다."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Badge variant="secondary">보조 배지</Badge>,
  parameters: {
    docs: {
      description: {
        story: "Secondary 변형의 Badge입니다. 부가적인 정보나 덜 중요한 내용을 표시할 때 사용합니다."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Badge variant="destructive">경고 배지</Badge>,
  parameters: {
    docs: {
      description: {
        story: "Destructive 변형의 Badge입니다. 오류, 경고, 삭제 등의 중요한 알림을 표시할 때 사용합니다."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Badge variant="outline">테두리 배지</Badge>,
  parameters: {
    docs: {
      description: {
        story: "Outline 변형의 Badge입니다. 미묘한 강조나 선택적 정보를 표시할 때 사용합니다."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge>
        <Star className="w-3 h-3" />
        인기
      </Badge>
      <Badge variant="secondary">
        <CheckCircle className="w-3 h-3" />
        완료
      </Badge>
      <Badge variant="destructive">
        <AlertTriangle className="w-3 h-3" />
        주의
      </Badge>
      <Badge variant="outline">
        <Heart className="w-3 h-3" />
        좋아요
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Badge입니다. 시각적으로 더 명확한 정보 전달이 가능합니다."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <div className="relative">
        <ShoppingCart className="w-6 h-6" />
        <Badge className="absolute -top-2 -right-2 px-1 min-w-5 h-5">3</Badge>
      </div>
      <div className="relative">
        <Heart className="w-6 h-6" />
        <Badge variant="destructive" className="absolute -top-2 -right-2 px-1 min-w-5 h-5">12</Badge>
      </div>
      <div className="relative">
        <Star className="w-6 h-6" />
        <Badge variant="secondary" className="absolute -top-2 -right-2 px-1 min-w-5 h-5">99+</Badge>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "알림 카운터로 사용되는 Badge입니다. 아이콘과 함께 배치하여 개수나 상태를 표시합니다."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">주문 상태:</span>
        <Badge>처리 중</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">배송 상태:</span>
        <Badge variant="secondary">
          <Zap className="w-3 h-3" />
          빠른 배송
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">결제 상태:</span>
        <Badge variant="destructive">결제 실패</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">회원 등급:</span>
        <Badge variant="outline">골드</Badge>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "상태 라벨로 사용되는 Badge입니다. 다양한 상태 정보를 명확하게 전달합니다."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">제품 태그</h4>
        <div className="flex flex-wrap gap-2">
          <Badge>신상품</Badge>
          <Badge variant="secondary">할인</Badge>
          <Badge variant="outline">무료배송</Badge>
          <Badge>베스트셀러</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-medium">카테고리</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">전자제품</Badge>
          <Badge variant="outline">컴퓨터</Badge>
          <Badge variant="outline">노트북</Badge>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "제품 태그나 카테고리 표시에 사용되는 Badge입니다. 여러 개를 조합하여 사용할 수 있습니다."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">클릭 가능한 배지</h4>
        <div className="flex gap-2">
          <Badge asChild>
            <button className="cursor-pointer hover:opacity-80">
              필터: 가격
              <X className="w-3 h-3 ml-1" />
            </button>
          </Badge>
          <Badge variant="secondary" asChild>
            <button className="cursor-pointer hover:opacity-80">
              필터: 브랜드
              <X className="w-3 h-3 ml-1" />
            </button>
          </Badge>
          <Badge variant="outline" asChild>
            <button className="cursor-pointer hover:opacity-80">
              필터: 카테고리
              <X className="w-3 h-3 ml-1" />
            </button>
          </Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium">링크 배지</h4>
        <div className="flex gap-2">
          <Badge asChild>
            <a href="#" className="cursor-pointer hover:opacity-80">
              #React
            </a>
          </Badge>
          <Badge variant="secondary" asChild>
            <a href="#" className="cursor-pointer hover:opacity-80">
              #TypeScript
            </a>
          </Badge>
          <Badge variant="outline" asChild>
            <a href="#" className="cursor-pointer hover:opacity-80">
              #Storybook
            </a>
          </Badge>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "상호작용이 가능한 Badge입니다. 버튼이나 링크로 사용하여 필터링이나 네비게이션 기능을 제공합니다."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          Badge 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> 키로 포커스 이동 (상호작용 가능한 배지)</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 활성화</li>
          <li>스크린 리더가 배지 내용을 적절히 읽어줌</li>
          <li>색상뿐만 아니라 텍스트로도 정보 전달</li>
        </ul>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium">포커스 가능한 배지</h4>
        <div className="flex gap-2">
          <Badge asChild>
            <button className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" aria-label="중요한 알림을 확인하세요">
              <AlertTriangle className="w-3 h-3" />
              중요
            </button>
          </Badge>
          <Badge variant="secondary" asChild>
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" aria-label="완료된 작업 목록으로 이동">
              <CheckCircle className="w-3 h-3" />
              완료
            </a>
          </Badge>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="text-sm font-medium">상태 표시</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>연결 상태:</span>
            <Badge>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
              온라인
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span>동기화 상태:</span>
            <Badge variant="destructive">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              오프라인
            </Badge>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Badge의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 라벨링을 확인할 수 있습니다."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};export{m as AccessibilityDemo,a as Default,r as Destructive,o as InteractiveBadges,d as Notifications,i as Outline,l as ProductTags,n as Secondary,c as StatusLabels,t as WithIcons,I as default};
