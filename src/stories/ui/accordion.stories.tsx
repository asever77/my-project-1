import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"


// Accordion 컴포넌트의 props 타입을 정의
type AccordionProps = React.ComponentProps<typeof Accordion>;

const meta: Meta<AccordionProps> = {
  title: "UI/contents-active/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
ㅁㅁRadix UI 기반의 아코디언 컴포넌트입니다. 세로로 쌓인 아이템 목록을 보여주며, 각 아이템을 확장하거나 축소하여 내용을 표시할 수 있습니다.

## 주요 기능
- **단일/다중 확장**: \`type\` prop을 통해 한 번에 하나의 아이템만 열리도록(\`single\`) 하거나 여러 아이템을 동시에 열 수 있도록(\`multiple\`) 설정
- **접기 가능**: \`collapsible\` prop (type='single'일 때)을 사용하여 열려 있는 아이템을 다시 클릭하여 닫기 가능
- **완전한 접근성**: 키보드 네비게이션(Tab, Arrow keys, Home/End, Enter/Space) 및 WAI-ARIA 표준 완벽 지원
- **스크린 리더 지원**: 시각 장애인 사용자를 위한 완전한 스크린 리더 호환성
- **애니메이션**: 부드러운 확장/축소 애니메이션 내장
- **유연한 구성**: AccordionItem, AccordionTrigger, AccordionContent 컴포넌트 조합으로 자유로운 구조 생성
- **커스터마이징**: TailwindCSS 클래스를 통한 스타일 커스터마이징 지원

## 사용법
\`\`\`tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// 단일 선택 (기본)
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>질문이 있나요?</AccordionTrigger>
    <AccordionContent>
      네, 언제든지 문의하세요.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// 다중 선택
<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>첫 번째 질문</AccordionTrigger>
    <AccordionContent>첫 번째 답변</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>두 번째 질문</AccordionTrigger>
    <AccordionContent>두 번째 답변</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

## Props
- \`type\`: 'single' | 'multiple' - 확장 모드 설정
- \`collapsible\`: boolean - 닫기 가능 여부 (single 타입에서만)
- \`defaultValue\`: string | string[] - 기본 열린 아이템
- \`value\`: string | string[] - 제어된 열린 아이템
- \`onValueChange\`: (value) => void - 값 변경 핸들러
        `,
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <Accordion {...args} className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>접근성이 지원되나요?</AccordionTrigger>
        <AccordionContent>
          네, WAI-ARIA 디자인 패턴을 완벽하게 준수합니다. 키보드 네비게이션과 스크린 리더를 완전히 지원합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>스타일이 적용되어 있나요?</AccordionTrigger>
        <AccordionContent>
          네, 다른 컴포넌트들과 일관된 디자인의 기본 스타일이 적용되어 있습니다. TailwindCSS를 통해 쉽게 커스터마이징할 수 있습니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>애니메이션이 지원되나요?</AccordionTrigger>
        <AccordionContent>
          네, 기본적으로 부드러운 확장/축소 애니메이션이 활성화되어 있습니다. 필요에 따라 비활성화할 수도 있습니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export default meta
type Story = StoryObj<AccordionProps>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>회원가입 방법이 궁금합니다.</AccordionTrigger>
        <AccordionContent>
          회원가입은 메인 페이지 우측 상단의 '회원가입' 버튼을 클릭하여 진행할 수 있습니다. 
          이메일 인증과 개인정보 입력이 필요합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>비밀번호를 잤어버렸어요.</AccordionTrigger>
        <AccordionContent>
          로그인 페이지에서 '비밀번호 찾기' 링크를 클릭하시면 됩니다. 
          등록된 이메일로 비밀번호 재설정 링크가 전송됩니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>배송 정책이 어떻게 되나요?</AccordionTrigger>
        <AccordionContent>
          3만원 이상 주문 시 무료배송입니다. 
          일반 배송은 2-3일, 도서산간 지역은 3-5일 소요됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 아코디언입니다. type='single'이며 collapsible이 true이므로 하나의 아이템만 열 수 있고, 열린 아이템을 다시 닫을 수도 있습니다. FAQ 페이지에 적합한 형태입니다.",
      },
    },
  },
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={["account", "security"]} className="w-[500px]">
      <AccordionItem value="account">
        <AccordionTrigger>계정 설정</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>계정 정보 수정</span>
              <button className="text-sm text-blue-600 hover:underline">수정</button>
            </div>
            <div className="flex justify-between items-center">
              <span>이메일 변경</span>
              <button className="text-sm text-blue-600 hover:underline">변경</button>
            </div>
            <div className="flex justify-between items-center">
              <span>계정 삭제</span>
              <button className="text-sm text-red-600 hover:underline">삭제</button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="security">
        <AccordionTrigger>보안 설정</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>비밀번호 변경</span>
              <button className="text-sm text-blue-600 hover:underline">변경</button>
            </div>
            <div className="flex justify-between items-center">
              <span>2단계 인증</span>
              <span className="text-sm text-green-600">활성화됨</span>
            </div>
            <div className="flex justify-between items-center">
              <span>로그인 기록</span>
              <button className="text-sm text-blue-600 hover:underline">보기</button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="notifications">
        <AccordionTrigger>알림 설정</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>이메일 알림 수신</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>SMS 알림 수신</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span>마케팅 정보 수신</span>
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "type='multiple'로 설정하여 여러 아이템을 동시에 열 수 있는 아코디언입니다. 설정 페이지나 대시보드에서 여러 섹션을 동시에 확인할 때 유용합니다.",
      },
    },
  },
}

export const SingleNonCollapsible: Story = {
  render: () => (
    <Accordion type="single" collapsible={false} defaultValue="dashboard" className="w-[500px]">
      <AccordionItem value="dashboard">
        <AccordionTrigger>대시보드</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">개요</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">통계</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">보고서</a>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="products">
        <AccordionTrigger>상품 관리</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">상품 목록</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">상품 등록</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">카테고리 관리</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">재고 관리</a>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="orders">
        <AccordionTrigger>주문 관리</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">주문 목록</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">배송 관리</a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">반품/교환</a>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "collapsible=false로 설정하면, 항상 하나의 아이템이 열려있는 상태가 유지됩니다. 사이드바 내비게이션에 적합한 형태입니다.",
      },
    },
  },
}

// 제어된 아코디언
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("pricing");
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button 
            onClick={() => setValue("features")}
            className="px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200"
          >
            기능 보기
          </button>
          <button 
            onClick={() => setValue("pricing")}
            className="px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200"
          >
            가격 보기
          </button>
          <button 
            onClick={() => setValue("support")}
            className="px-3 py-1 text-sm bg-blue-100 rounded hover:bg-blue-200"
          >
            지원 보기
          </button>
        </div>
        <Accordion type="single" value={value} onValueChange={setValue} className="w-[500px]">
          <AccordionItem value="features">
            <AccordionTrigger>주요 기능</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>실시간 협업</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>무제한 프로젝트</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>고급 분석</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing">
            <AccordionTrigger>요금제</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <h4 className="font-semibold">스타터</h4>
                  <p className="text-2xl font-bold">₩9,900<span className="text-sm font-normal">/월</span></p>
                  <p className="text-sm text-gray-600">개인 사용자에게 적합</p>
                </div>
                <div className="p-4 border rounded bg-blue-50">
                  <h4 className="font-semibold">프로</h4>
                  <p className="text-2xl font-bold">₩29,900<span className="text-sm font-normal">/월</span></p>
                  <p className="text-sm text-gray-600">팀 협업에 최적화</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>고객 지원</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>이메일 지원</span>
                  <span className="text-green-600">24시간</span>
                </div>
                <div className="flex justify-between">
                  <span>실시간 채팅</span>
                  <span className="text-green-600">평일 9-18시</span>
                </div>
                <div className="flex justify-between">
                  <span>전화 지원</span>
                  <span className="text-blue-600">프로 플랜 이상</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "외부 버튼으로 아코디언 상태를 제어할 수 있는 예시입니다. value와 onValueChange props를 사용하여 완전히 제어된 컴포넌트로 만들 수 있습니다.",
      },
    },
  },
}

// 커스텀 스타일 아코디언
export const CustomStyling: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[500px] space-y-2">
      <AccordionItem value="item-1" className="border border-blue-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-blue-50 px-4 py-3 hover:bg-blue-100 font-semibold text-blue-900">
          💡 혁신적인 아이디어
        </AccordionTrigger>
        <AccordionContent className="bg-white px-4 py-3 border-t border-blue-200">
          창의적이고 혁신적인 아이디어로 비즈니스를 발전시켜보세요. 
          새로운 관점에서 문제를 바라보고 독창적인 솔루션을 제안합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border border-green-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-green-50 px-4 py-3 hover:bg-green-100 font-semibold text-green-900">
          🚀 빠른 실행력
        </AccordionTrigger>
        <AccordionContent className="bg-white px-4 py-3 border-t border-green-200">
          계획부터 실행까지 빠르고 효율적으로 진행합니다. 
          민첩한 개발 방법론을 통해 신속한 결과물을 제공합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border border-purple-200 rounded-lg overflow-hidden">
        <AccordionTrigger className="bg-purple-50 px-4 py-3 hover:bg-purple-100 font-semibold text-purple-900">
          🎯 정확한 타겟팅
        </AccordionTrigger>
        <AccordionContent className="bg-white px-4 py-3 border-t border-purple-200">
          데이터 분석을 통해 정확한 타겟 고객을 식별하고 
          맞춤형 솔루션을 제공하여 높은 성과를 달성합니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "TailwindCSS를 사용하여 아코디언의 스타일을 커스터마이징한 예시입니다. 각 아이템마다 다른 색상 테마를 적용하여 시각적 구분을 명확히 했습니다.",
      },
    },
  },
}

// 접근성 데모
export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold mb-2">🔧 키보드 네비게이션 가이드</h4>
        <div className="text-sm space-y-1">
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Tab</kbd> - 다음 트리거로 이동</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Shift + Tab</kbd> - 이전 트리거로 이동</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Enter / Space</kbd> - 아이템 열기/닫기</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">↑ / ↓</kbd> - 트리거 간 이동</div>
          <div><kbd className="px-2 py-1 bg-white rounded border text-xs">Home / End</kbd> - 첫/마지막 트리거로 이동</div>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-[500px]">
        <AccordionItem value="keyboard">
          <AccordionTrigger>키보드로 조작해보세요</AccordionTrigger>
          <AccordionContent>
            Tab 키를 사용하여 이 트리거에 포커스를 맞추고, Enter 또는 Space 키로 열고 닫을 수 있습니다.
            화살표 키로도 다른 트리거들 사이를 이동할 수 있습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="screenreader">
          <AccordionTrigger>스크린 리더 지원</AccordionTrigger>
          <AccordionContent>
            이 컴포넌트는 WAI-ARIA 표준을 준수하여 스크린 리더 사용자들이 
            콘텐츠의 구조와 상태를 명확히 이해할 수 있도록 설계되었습니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="focus">
          <AccordionTrigger>포커스 관리</AccordionTrigger>
          <AccordionContent>
            키보드 포커스가 명확히 표시되며, 논리적인 순서로 요소들 사이를 이동할 수 있습니다.
            포커스 링이 잘 보이도록 디자인되어 있습니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다. WAI-ARIA 표준을 준수하여 모든 사용자가 접근할 수 있습니다.",
      },
    },
  },
}