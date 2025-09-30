import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Terminal, AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

// Alert 컴포넌트의 props 타입을 정의
type AlertProps = React.ComponentProps<typeof Alert>;

const meta: Meta<AlertProps> = {
  title: "UI/Contents/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <Terminal />
      <AlertTitle>알림 제목</AlertTitle>
      <AlertDescription>
        이것은 기본 알림 메시지입니다. 사용자에게 중요한 정보를 전달할 때 사용합니다.
      </AlertDescription>
    </Alert>
  ),
}

export default meta
type Story = StoryObj<AlertProps>

export const Default: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <Info />
      <AlertTitle>시스템 점검 안내</AlertTitle>
      <AlertDescription>
        2024년 1월 15일 02:00 ~ 06:00 시스템 점검이 예정되어 있습니다. 
        점검 시간 동안 서비스 이용이 제한될 수 있습니다.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 Alert 컴포넌트입니다. 일반적인 정보 전달이나 안내사항에 사용합니다. 중성적인 색상으로 표시됩니다.",
      },
    },
  },
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[500px]">
      <AlertCircle />
      <AlertTitle>로그인 실패</AlertTitle>
      <AlertDescription>
        이메일 또는 비밀번호가 올바르지 않습니다. 
        5회 이상 실패 시 계정이 일시적으로 잠금될 수 있습니다.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "오류나 위험 상황을 알리는 Alert입니다. 빨간색 계열로 표시되어 사용자의 주의를 끕니다.",
      },
    },
  },
}

export const Success: Story = {
  render: () => (
    <Alert className="w-[500px] border-green-200 bg-green-50 text-green-800">
      <CheckCircle2 className="text-green-600" />
      <AlertTitle className="text-green-800">회원가입 완료</AlertTitle>
      <AlertDescription className="text-green-700">
        회원가입이 성공적으로 완료되었습니다! 
        인증 메일을 확인해주세요.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "성공 상황을 알리는 커스터마이징된 Alert입니다. 초록색 테마를 적용하여 긍정적인 피드백을 제공합니다.",
      },
    },
  },
}

export const Warning: Story = {
  render: () => (
    <Alert className="w-[500px] border-yellow-200 bg-yellow-50 text-yellow-800">
      <AlertTriangle className="text-yellow-600" />
      <AlertTitle className="text-yellow-800">주의사항</AlertTitle>
      <AlertDescription className="text-yellow-700">
        계정 보안을 위해 정기적으로 비밀번호를 변경해주세요. 
        마지막 변경일로부터 90일이 경과했습니다.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "경고나 주의사항을 알리는 커스터마이징된 Alert입니다. 노란색 테마로 주의를 환기시킵니다.",
      },
    },
  },
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <AlertTitle>간단한 알림</AlertTitle>
      <AlertDescription>
        아이콘 없이도 깔끔하게 메시지를 전달할 수 있습니다.
        간단한 안내사항이나 텍스트 중심의 알림에 적합합니다.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "아이콘 없이 텍스트만으로 구성된 Alert입니다. 간단한 메시지나 안내사항에 적합합니다.",
      },
    },
  },
}

export const TitleOnly: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <AlertCircle />
      <AlertTitle>제목만 있는 간단한 알림입니다</AlertTitle>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "제목만 있는 간단한 Alert입니다. 짧고 명확한 메시지를 전달할 때 사용합니다.",
      },
    },
  },
}

export const MultipleAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "여러 개의 Alert를 함께 사용하는 예시입니다. 알림 센터나 대시보드에서 다양한 상태의 메시지를 표시할 때 유용합니다.",
      },
    },
  },
}

export const CustomContent: Story = {
  render: () => (
    <Alert className="w-[500px]">
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
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "복잡한 내용을 포함하는 Alert 예시입니다. 상태 정보, 버튼, 배지 등 다양한 UI 요소를 조합하여 정보가 풍부한 알림을 만들 수 있습니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "완전한 접근성을 지원하는 Alert 데모입니다. role='alert' 속성과 구조화된 마크업으로 모든 사용자가 정보에 접근할 수 있습니다.",
      },
    },
  },
}