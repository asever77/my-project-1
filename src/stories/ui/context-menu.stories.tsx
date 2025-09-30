import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  Copy, Scissors, Clipboard, Edit, Trash2, Download, Share, Star, 
  Eye, EyeOff, ChevronRight, Settings, User, LogOut, 
  MoreHorizontal, FileText, Folder, Image, Music, Video 
} from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
} from "@/components/ui/context-menu"

// ContextMenu 컴포넌트의 props 타입을 정의
type ContextMenuProps = React.ComponentProps<typeof ContextMenu>;

const meta: Meta<ContextMenuProps> = {
  title: "UI/Overlay/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
우클릭 시 나타나는 컨텍스트 메뉴 컴포넌트입니다. 사용자가 특정 요소에서 수행할 수 있는 액션들을 제공합니다.

## 주요 기능
- **우클릭 활성화**: 마우스 우클릭으로 메뉴 열기
- **키보드 지원**: 키보드만으로도 완전한 네비게이션 가능
- **서브메뉴**: 중첩된 메뉴 구조로 복잡한 액션 그룹화
- **다양한 아이템**: 일반, 체크박스, 라디오, 구분선, 라벨 지원
- **단축키 표시**: 키보드 단축키를 메뉴에 함께 표시
- **완전한 접근성**: WAI-ARIA 표준 준수, 스크린 리더 지원
- **애니메이션**: 부드러운 열기/닫기 애니메이션

## 사용법
\`\`\`tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>
    <div className="p-4 border rounded">
      우클릭해보세요
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      <Copy className="w-4 h-4 mr-2" />
      복사
      <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      <Clipboard className="w-4 h-4 mr-2" />
      붙여넣기
      <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">
      <Trash2 className="w-4 h-4 mr-2" />
      삭제
    </ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
\`\`\`

## 구성 요소
- \`ContextMenu\`: 컨텍스트 메뉴의 루트 컨테이너
- \`ContextMenuTrigger\`: 우클릭 이벤트를 받는 트리거 요소
- \`ContextMenuContent\`: 메뉴 내용을 담는 컨테이너
- \`ContextMenuItem\`: 개별 메뉴 아이템
- \`ContextMenuSub\`: 서브메뉴 컨테이너
- \`ContextMenuSubTrigger\`: 서브메뉴를 여는 트리거
- \`ContextMenuSubContent\`: 서브메뉴 내용
- \`ContextMenuSeparator\`: 메뉴 아이템 구분선
- \`ContextMenuShortcut\`: 단축키 표시
- \`ContextMenuCheckboxItem\`: 체크박스 아이템
- \`ContextMenuRadioGroup\`: 라디오 그룹
- \`ContextMenuRadioItem\`: 라디오 아이템
- \`ContextMenuLabel\`: 메뉴 섹션 라벨

## 키보드 단축키
- **우클릭** 또는 **Shift+F10**: 메뉴 열기
- **Escape**: 메뉴 닫기
- **Arrow Keys**: 메뉴 아이템 간 이동
- **Enter** 또는 **Space**: 아이템 선택
- **Right Arrow**: 서브메뉴 열기
- **Left Arrow**: 서브메뉴 닫기
        `,
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          우클릭해보세요
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="w-4 h-4 mr-2" />
          잘라내기
          <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Clipboard className="w-4 h-4 mr-2" />
          붙여넣기
          <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export default meta
type Story = StoryObj<ContextMenuProps>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          기본 컨텍스트 메뉴 - 우클릭하세요
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Edit className="w-4 h-4 mr-2" />
          편집
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Share className="w-4 h-4 mr-2" />
          공유
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          삭제
          <ContextMenuShortcut>Del</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 ContextMenu입니다. 일반적인 편집 작업들을 포함하며, 단축키와 구분선을 사용합니다.",
      },
    },
  },
}

export const WithSubmenus: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[180px] w-[320px] items-center justify-center rounded-md border bg-muted/30">
          <div className="text-center">
            <Folder className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm font-medium">프로젝트 폴더</p>
            <p className="text-xs text-muted-foreground">우클릭으로 옵션 보기</p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Eye className="w-4 h-4 mr-2" />
          열기
          <ContextMenuShortcut>Enter</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="w-4 h-4 mr-2" />
          잘라내기
          <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Download className="w-4 h-4 mr-2" />
            내보내기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <FileText className="w-4 h-4 mr-2" />
              PDF로 내보내기
            </ContextMenuItem>
            <ContextMenuItem>
              <Image className="w-4 h-4 mr-2" />
              이미지로 내보내기
            </ContextMenuItem>
            <ContextMenuItem>
              <Folder className="w-4 h-4 mr-2" />
              압축 파일로 내보내기
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="w-4 h-4 mr-2" />
            공유하기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Copy className="w-4 h-4 mr-2" />
              링크 복사
            </ContextMenuItem>
            <ContextMenuItem>
              이메일로 전송
            </ContextMenuItem>
            <ContextMenuItem>
              소셜 미디어 공유
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Settings className="w-4 h-4 mr-2" />
          속성
        </ContextMenuItem>
        <ContextMenuItem variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          삭제
          <ContextMenuShortcut>Del</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "서브메뉴가 포함된 ContextMenu입니다. 복잡한 액션들을 그룹화하여 체계적으로 관리할 수 있습니다.",
      },
    },
  },
}

export const WithCheckboxes: Story = {
  render: () => {
    const [showHidden, setShowHidden] = React.useState(false)
    const [showPreview, setShowPreview] = React.useState(true)
    const [viewMode, setViewMode] = React.useState("list")
    
    return (
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-[180px] w-[320px] items-center justify-center rounded-md border bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <Settings className="w-10 h-10 mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-medium">설정 패널</p>
              <p className="text-xs text-muted-foreground">우클릭으로 옵션 변경</p>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>보기 옵션</ContextMenuLabel>
          <ContextMenuCheckboxItem 
            checked={showHidden} 
            onCheckedChange={setShowHidden}
          >
            <EyeOff className="w-4 h-4 mr-2" />
            숨김 파일 표시
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem 
            checked={showPreview} 
            onCheckedChange={setShowPreview}
          >
            <Eye className="w-4 h-4 mr-2" />
            미리보기 표시
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>보기 모드</ContextMenuLabel>
          <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
            <ContextMenuRadioItem value="list">
              목록 보기
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="grid">
              그리드 보기
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="tile">
              타일 보기
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            고급 설정
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "체크박스와 라디오 버튼이 포함된 ContextMenu입니다. 설정 변경이나 옵션 선택에 유용합니다.",
      },
    },
  },
}

export const MediaPlayer: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="flex h-[200px] w-[400px] items-center justify-center rounded-md border bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-center">
            <Music className="w-16 h-16 mx-auto mb-3 text-purple-600" />
            <p className="text-lg font-medium">음악 플레이어</p>
            <p className="text-sm text-muted-foreground">현재 재생 중: "Amazing Song"</p>
            <p className="text-xs text-muted-foreground mt-2">우클릭으로 미디어 옵션</p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Star className="w-4 h-4 mr-2" />
          즐겨찾기에 추가
          <ContextMenuShortcut>Ctrl+D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="w-4 h-4 mr-2" />
            공유하기
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Copy className="w-4 h-4 mr-2" />
              링크 복사
            </ContextMenuItem>
            <ContextMenuItem>
              소셜 미디어에 공유
            </ContextMenuItem>
            <ContextMenuItem>
              이메일로 전송
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Download className="w-4 h-4 mr-2" />
            다운로드
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Music className="w-4 h-4 mr-2" />
              MP3 (320kbps)
            </ContextMenuItem>
            <ContextMenuItem>
              <Music className="w-4 h-4 mr-2" />
              FLAC (무손실)
            </ContextMenuItem>
            <ContextMenuItem>
              <Video className="w-4 h-4 mr-2" />
              뮤직비디오 (MP4)
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <User className="w-4 h-4 mr-2" />
          아티스트 정보
        </ContextMenuItem>
        <ContextMenuItem>
          앨범 전체 보기
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="w-4 h-4 mr-2" />
          플레이리스트에서 제거
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "미디어 플레이어용 ContextMenu입니다. 음악이나 비디오 관련 액션들을 그룹화하여 제공합니다.",
      },
    },
  },
}

export const TextEditor: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="h-[200px] w-[400px] rounded-md border p-4 bg-white">
          <div className="text-sm space-y-2">
            <p className="font-medium">텍스트 에디터</p>
            <p>
              이것은 샘플 텍스트입니다. 이 영역에서 우클릭하여 
              텍스트 편집 관련 컨텍스트 메뉴를 확인해보세요.
            </p>
            <p className="text-muted-foreground">
              복사, 붙여넣기, 서식 지정 등의 옵션을 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          복사
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="w-4 h-4 mr-2" />
          잘라내기
          <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Clipboard className="w-4 h-4 mr-2" />
          붙여넣기
          <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Edit className="w-4 h-4 mr-2" />
            서식
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <strong className="mr-2 text-xs">B</strong>
              굵게
              <ContextMenuShortcut>Ctrl+B</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <em className="mr-2 text-xs">I</em>
              기울임
              <ContextMenuShortcut>Ctrl+I</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <u className="mr-2 text-xs">U</u>
              밑줄
              <ContextMenuShortcut>Ctrl+U</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem>
          전체 선택
          <ContextMenuShortcut>Ctrl+A</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Settings className="w-4 h-4 mr-2" />
          에디터 설정
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "텍스트 에디터용 ContextMenu입니다. 편집, 서식 지정, 선택 등의 텍스트 관련 작업을 제공합니다.",
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
          ContextMenu 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">우클릭</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Shift+F10</kbd>으로 메뉴 열기</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Arrow Keys</kbd>로 메뉴 아이템 간 이동</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 아이템 선택</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Escape</kbd>로 메뉴 닫기</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Right Arrow</kbd>로 서브메뉴 열기</li>
          <li>스크린 리더가 메뉴 구조와 단축키를 적절히 안내</li>
        </ul>
      </div>
      
      <ContextMenu>
        <ContextMenuTrigger>
          <div 
            className="flex h-[150px] w-[350px] items-center justify-center rounded-md border bg-gradient-to-br from-orange-50 to-red-50"
            role="button"
            tabIndex={0}
            aria-label="접근성 데모 컨텍스트 메뉴 트리거. 우클릭하거나 Shift+F10을 눌러 메뉴를 여세요."
          >
            <div className="text-center">
              <Settings className="w-12 h-12 mx-auto mb-2 text-orange-600" />
              <p className="text-sm font-medium">접근성 완벽 지원</p>
              <p className="text-xs text-muted-foreground">키보드와 스크린 리더 호환</p>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>편집 작업</ContextMenuLabel>
          <ContextMenuItem>
            <Copy className="w-4 h-4 mr-2" />
            복사하기
            <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Clipboard className="w-4 h-4 mr-2" />
            붙여넣기
            <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Settings className="w-4 h-4 mr-2" />
              접근성 설정
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>
                고대비 모드 전환
              </ContextMenuItem>
              <ContextMenuItem>
                화면 확대 도구
              </ContextMenuItem>
              <ContextMenuItem>
                키보드 네비게이션 가이드
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuItem>
            <User className="w-4 h-4 mr-2" />
            접근성 피드백 보내기
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "ContextMenu의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, 스크린 리더 지원, 적절한 ARIA 속성을 확인할 수 있습니다.",
      },
    },
  },
}