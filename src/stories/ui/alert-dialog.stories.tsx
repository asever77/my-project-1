import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import { AlertTriangle, Trash2, LogOut, Download, Save, X } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

// AlertDialog 컴포넌트의 props 타입을 정의
type AlertDialogProps = React.ComponentProps<typeof AlertDialog>;

const meta: Meta<AlertDialogProps> = {
  title: "UI/Overlay/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Radix UI 기반의 경고 대화상자 컴포넌트입니다. 사용자에게 중요한 정보를 전달하거나 확인이 필요한 작업을 수행하기 전에 표시됩니다.

## 주요 기능
- **모달 대화상자**: 오버레이와 함께 화면 중앙에 표시되며, 배경 클릭으로 닫기 불가
- **접근성 완벽 지원**: WAI-ARIA Dialog 패턴 준수, 키보드 네비게이션(Tab, Escape) 및 포커스 트랩
- **스크린 리더 지원**: 제목, 설명, 액션 버튼에 대한 완전한 스크린 리더 호환성
- **부드러운 애니메이션**: 열기/닫기 시 페이드 인/아웃 및 줌 효과
- **포털 렌더링**: React Portal을 사용하여 DOM 트리 최상위에 렌더링
- **Escape 키 지원**: Escape 키로 대화상자 닫기
- **포커스 관리**: 열릴 때 첫 번째 포커스 가능 요소로 포커스 이동, 닫힐 때 트리거로 복귀

## 사용법
\`\`\`tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">삭제</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>정말로 삭제하시겠습니까?</AlertDialogTitle>
      <AlertDialogDescription>
        이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>취소</AlertDialogCancel>
      <AlertDialogAction>삭제</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`

## 구성 요소
- \`AlertDialog\`: 대화상자의 루트 컨테이너
- \`AlertDialogTrigger\`: 대화상자를 여는 트리거 요소
- \`AlertDialogContent\`: 대화상자의 콘텐츠 컨테이너
- \`AlertDialogHeader\`: 제목과 설명을 담는 헤더 영역
- \`AlertDialogTitle\`: 대화상자 제목
- \`AlertDialogDescription\`: 대화상자 설명
- \`AlertDialogFooter\`: 액션 버튼들을 담는 푸터 영역
- \`AlertDialogAction\`: 주요 액션 버튼 (확인, 삭제 등)
- \`AlertDialogCancel\`: 취소 버튼

## 접근성 가이드라인
- 제목은 간결하고 명확하게 작성
- 설명은 행동의 결과를 명확히 설명
- 파괴적인 액션은 destructive 스타일 사용
- 키보드만으로도 모든 기능 사용 가능
        `,
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">확인 대화상자 열기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>작업을 계속하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업을 수행하면 일부 변경사항이 적용됩니다. 계속 진행하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>계속</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export default meta
type Story = StoryObj<AlertDialogProps>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">기본 대화상자</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>작업 확인</AlertDialogTitle>
          <AlertDialogDescription>
            선택한 작업을 수행하시겠습니까? 이 작업은 즉시 실행됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 Alert Dialog입니다. 일반적인 확인이 필요한 작업에 사용됩니다. 중립적인 스타일의 액션 버튼을 제공합니다.",
      },
    },
  },
}

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 />
          삭제
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="size-5 text-destructive" />
            정말로 삭제하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다. 선택한 항목이 서버에서 영구적으로 삭제되며, 
            관련된 모든 데이터도 함께 제거됩니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <Trash2 className="size-4" />
            삭제
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "파괴적인 작업(삭제, 제거 등)을 위한 Alert Dialog입니다. 경고 아이콘과 빨간색 액션 버튼으로 위험성을 강조합니다.",
      },
    },
  },
}

const handleDownloadAction = () => {
  alert("다운로드가 시작되었습니다.")
}
export const WithIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Download />
          다운로드
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Download className="size-5 text-primary" />
            파일 다운로드
          </AlertDialogTitle>
          <AlertDialogDescription>
            선택한 파일을 다운로드하시겠습니까? 파일 크기는 약 25MB이며, 
            다운로드에 몇 분이 소요될 수 있습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleDownloadAction}>
            <Download className="size-4" />
            다운로드 시작
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "아이콘이 포함된 Alert Dialog입니다. 시각적으로 작업의 성격을 더 명확하게 전달합니다.",
      },
    },
  },
}

export const LongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">긴 내용 보기</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>서비스 이용약관 동의</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="space-y-4 text-sm">
              <p>
                본 서비스를 이용하기 위해서는 다음 약관에 동의해야 합니다:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>개인정보 수집 및 이용에 대한 동의</li>
                <li>서비스 이용약관 준수</li>
                <li>쿠키 및 유사 기술 사용에 대한 동의</li>
                <li>마케팅 정보 수신 동의 (선택사항)</li>
              </ul>
              <p className="text-muted-foreground">
                자세한 내용은 개별 약관을 확인해 주세요. 필수 항목에 동의하지 않으시면 
                서비스 이용이 제한될 수 있습니다.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>거절</AlertDialogCancel>
          <AlertDialogAction>모두 동의</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "긴 내용이 포함된 Alert Dialog입니다. 리스트나 여러 단락의 텍스트를 포함할 수 있습니다.",
      },
    },
  },
}

export const MultipleActions: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Save />
          저장
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>변경사항 저장</AlertDialogTitle>
          <AlertDialogDescription>
            저장하지 않은 변경사항이 있습니다. 어떻게 하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col gap-2 sm:flex-row">
          <AlertDialogCancel>취소</AlertDialogCancel>
          <Button variant="outline" className="order-1">
            <X className="size-4" />
            저장하지 않고 닫기
          </Button>
          <AlertDialogAction>
            <Save className="size-4" />
            저장하고 닫기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "여러 액션이 포함된 Alert Dialog입니다. 사용자에게 다양한 선택지를 제공합니다.",
      },
    },
  },
}

export const Logout: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">
          <LogOut />
          로그아웃
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>로그아웃 확인</AlertDialogTitle>
          <AlertDialogDescription>
            정말 로그아웃하시겠습니까? 저장하지 않은 작업이 있다면 먼저 저장해 주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction>
            <LogOut className="size-4" />
            로그아웃
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "로그아웃 확인을 위한 Alert Dialog입니다. 사용자 세션 종료 전 최종 확인을 받습니다.",
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [step, setStep] = useState(1)

    const handleContinue = () => {
      if (step < 3) {
        setStep(step + 1)
      } else {
        setOpen(false)
        setStep(1)
      }
    }

    const handleCancel = () => {
      setOpen(false)
      setStep(1)
    }

    return (
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>
          다단계 프로세스 시작
        </Button>
        
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                설정 마법사 - 단계 {step}/3
              </AlertDialogTitle>
              <AlertDialogDescription>
                {step === 1 && "첫 번째 단계: 기본 정보를 설정합니다."}
                {step === 2 && "두 번째 단계: 고급 옵션을 구성합니다."}
                {step === 3 && "마지막 단계: 설정을 확인하고 완료합니다."}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancel}>취소</AlertDialogCancel>
              <AlertDialogAction onClick={handleContinue}>
                {step < 3 ? "다음" : "완료"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        
        <p className="text-sm text-muted-foreground">
          현재 열림 상태: {open ? "열림" : "닫힘"}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "제어된 Alert Dialog입니다. 외부 상태로 열림/닫힘을 관리하며, 다단계 프로세스를 구현할 수 있습니다.",
      },
    },
  },
}

export const CustomStyling: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          커스텀 스타일
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-purple-900">
            🎨 커스텀 스타일 대화상자
          </AlertDialogTitle>
          <AlertDialogDescription className="text-purple-700">
            TailwindCSS 클래스를 사용하여 Alert Dialog의 모양을 자유롭게 
            커스터마이징할 수 있습니다. 배경, 테두리, 색상 등을 변경해보세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-purple-300 text-purple-700 hover:bg-purple-100">
            취소
          </AlertDialogCancel>
          <AlertDialogAction className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "커스텀 스타일이 적용된 Alert Dialog입니다. TailwindCSS 클래스를 통해 디자인을 자유롭게 변경할 수 있습니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          다음 기능들을 테스트해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> 키로 포커스 이동</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd> 키로 대화상자 닫기</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 버튼 활성화</li>
          <li>스크린 리더로 제목과 설명 읽기</li>
          <li>포커스 트랩: 대화상자 열림 시 포커스가 내부에 유지됨</li>
        </ul>
      </div>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="w-full">
            접근성 테스트 대화상자 열기
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              접근성 완벽 지원 대화상자
            </AlertDialogTitle>
            <AlertDialogDescription>
              이 대화상자는 WAI-ARIA 접근성 가이드라인을 완벽하게 준수합니다. 
              키보드만으로도 모든 기능을 사용할 수 있으며, 스크린 리더 사용자도 
              쉽게 이해하고 조작할 수 있습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Alert Dialog의 접근성 기능을 설명하는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 포커스 관리 등을 테스트할 수 있습니다.",
      },
    },
  },
}