import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  User, Settings, Bell, Shield, CreditCard, HelpCircle, 
  LogOut, Star, Heart, BookOpen, Music, Image, Video,
  Calendar, Mail, Phone, MapPin, Clock, Bookmark,
  Coffee, Home, Briefcase, GraduationCap, Tag
} from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const meta: Meta<typeof Separator> = {
  title: "UI/Contents/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "구분선 방향",
    },
    decorative: {
      control: "boolean",
      description: "장식적 구분선 여부 (true일 때 스크린 리더가 무시)",
    },
    className: {
      control: "text", 
      description: "추가 CSS 클래스",
    },
  },
  render: (args) => (
    <div className="w-[300px] space-y-4">
      <div>구분선 위 콘텐츠</div>
      <Separator {...args} />
      <div>구분선 아래 콘텐츠</div>
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Separator>

export const Default: Story = {
  args: {
    orientation: "horizontal",
    decorative: false,
  },
  parameters: {
    docs: {
      description: {
        story: "기본 수평 Separator입니다. 콘텐츠를 논리적으로 구분하는 데 사용됩니다.",
      },
    },
  },
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>왼쪽 콘텐츠</div>
      <Separator orientation="vertical" />
      <div>오른쪽 콘텐츠</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "수직 Separator입니다. 가로로 배치된 요소들을 구분할 때 사용됩니다.",
      },
    },
  },
}

export const InNavigation: Story = {
  render: () => (
    <div className="w-[400px]">
      <nav className="flex items-center space-x-1">
        <Button variant="ghost" size="sm">
          <Home className="h-4 w-4 mr-2" />
          홈
        </Button>
        <Separator orientation="vertical" className="h-4" decorative />
        <Button variant="ghost" size="sm">
          <User className="h-4 w-4 mr-2" />
          프로필
        </Button>
        <Separator orientation="vertical" className="h-4" decorative />
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          설정
        </Button>
        <Separator orientation="vertical" className="h-4" decorative />
        <Button variant="ghost" size="sm">
          <HelpCircle className="h-4 w-4 mr-2" />
          도움말
        </Button>
      </nav>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">메인 콘텐츠</h3>
        <p className="text-muted-foreground">
          네비게이션 구분선 예시입니다. 메뉴 아이템 간에는 수직 구분선을, 
          네비게이션과 콘텐츠 간에는 수평 구분선을 사용합니다.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "내비게이션에서 사용되는 Separator 예시입니다. 메뉴 아이템 간 구분과 섹션 분리에 활용됩니다.",
      },
    },
  },
}

export const InCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[600px]">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            사용자 정보
          </CardTitle>
          <CardDescription>
            기본 프로필 정보를 확인하세요
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">이름</span>
            <span>홍길동</span>
          </div>
          <Separator decorative />
          <div className="flex justify-between">
            <span className="text-muted-foreground">이메일</span>
            <span>hong@example.com</span>
          </div>
          <Separator decorative />
          <div className="flex justify-between">
            <span className="text-muted-foreground">가입일</span>
            <span>2024년 1월 15일</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            활동 통계
          </CardTitle>
          <CardDescription>
            최근 활동 현황을 확인하세요
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">총 게시글</span>
            <Badge variant="secondary">42</Badge>
          </div>
          <Separator decorative />
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">댓글 수</span>
            <Badge variant="secondary">128</Badge>
          </div>
          <Separator decorative />
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">받은 좋아요</span>
            <Badge variant="secondary">356</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "카드 컴포넌트 내에서 사용되는 Separator 예시입니다. 헤더와 콘텐츠, 그리고 정보 항목 간 구분에 활용됩니다.",
      },
    },
  },
}

export const InForms: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">계정 설정</h2>
        
        {/* 개인 정보 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <User className="h-5 w-5" />
            개인 정보
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">이름</label>
              <input 
                className="w-full p-2 border rounded-md" 
                placeholder="홍길동" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">이메일</label>
              <input 
                className="w-full p-2 border rounded-md" 
                placeholder="hong@example.com" 
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* 연락처 정보 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Phone className="h-5 w-5" />
            연락처 정보
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">전화번호</label>
              <input 
                className="w-full p-2 border rounded-md" 
                placeholder="010-1234-5678" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">주소</label>
              <input 
                className="w-full p-2 border rounded-md" 
                placeholder="서울특별시 강남구..." 
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* 보안 설정 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="h-5 w-5" />
            보안 설정
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">현재 비밀번호</label>
              <input 
                type="password" 
                className="w-full p-2 border rounded-md" 
                placeholder="••••••••" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">새 비밀번호</label>
              <input 
                type="password" 
                className="w-full p-2 border rounded-md" 
                placeholder="••••••••" 
              />
            </div>
          </div>
        </div>

        <Separator />

        {/* 알림 설정 섹션 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Bell className="h-5 w-5" />
            알림 설정
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>이메일 알림</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <Separator decorative className="my-2" />
            <div className="flex items-center justify-between">
              <span>SMS 알림</span>
              <input type="checkbox" className="rounded" />
            </div>
            <Separator decorative className="my-2" />
            <div className="flex items-center justify-between">
              <span>앱 푸시 알림</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <Button className="flex-1">저장하기</Button>
          <Button variant="outline">취소</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "폼에서 사용되는 Separator 예시입니다. 섹션별로 입력 필드를 그룹화하여 가독성을 높입니다.",
      },
    },
  },
}

export const DifferentStyles: Story = {
  render: () => (
    <div className="w-[400px] space-y-8">
      <div className="space-y-4">
        <h3 className="font-semibold">기본 스타일</h3>
        <div>기본 구분선 위</div>
        <Separator />
        <div>기본 구분선 아래</div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">굵은 구분선</h3>
        <div>굵은 구분선 위</div>
        <Separator className="h-0.5 bg-border" />
        <div>굵은 구분선 아래</div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">색상 구분선</h3>
        <div>파란색 구분선 위</div>
        <Separator className="bg-blue-200" />
        <div>파란색 구분선 아래</div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">점선 구분선</h3>
        <div>점선 구분선 위</div>
        <Separator className="border-dashed border-t border-border bg-transparent h-0" />
        <div>점선 구분선 아래</div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">그라데이션 구분선</h3>
        <div>그라데이션 구분선 위</div>
        <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
        <div>그라데이션 구분선 아래</div>
      </div>

      <div className="space-y-6">
        <h3 className="font-semibold">여백 조정</h3>
        <div>여백 없음</div>
        <Separator className="my-0" />
        <div>기본 여백</div>
        <Separator className="my-4" />
        <div>큰 여백</div>
        <Separator className="my-8" />
        <div>마지막 항목</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 스타일의 Separator를 보여줍니다. 두께, 색상, 패턴, 여백 등을 커스터마이징할 수 있습니다.",
      },
    },
  },
}

export const InMenus: Story = {
  render: () => (
    <div className="w-[300px] space-y-6">
      {/* 사이드바 메뉴 */}
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-4">대시보드</h3>
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="h-4 w-4 mr-2" />
            홈
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="h-4 w-4 mr-2" />
            프로필
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Briefcase className="h-4 w-4 mr-2" />
            프로젝트
          </Button>
        </nav>
        
        <Separator className="my-4" />
        
        <h4 className="font-medium text-sm text-muted-foreground mb-2">관리</h4>
        <nav className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            설정
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Shield className="h-4 w-4 mr-2" />
            보안
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-2" />
            알림
          </Button>
        </nav>
        
        <Separator className="my-4" />
        
        <Button variant="ghost" className="w-full justify-start text-red-600">
          <LogOut className="h-4 w-4 mr-2" />
          로그아웃
        </Button>
      </div>

      {/* 컨텍스트 메뉴 스타일 */}
      <div className="border rounded-lg p-2 shadow-lg">
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <BookOpen className="h-4 w-4 mr-2" />
            열기
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Star className="h-4 w-4 mr-2" />
            즐겨찾기 추가
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <Heart className="h-4 w-4 mr-2" />
            좋아요
          </Button>
        </div>
        
        <Separator className="my-2" decorative />
        
        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            공유하기
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            링크 복사
          </Button>
        </div>
        
        <Separator className="my-2" decorative />
        
        <Button variant="ghost" size="sm" className="w-full justify-start text-red-600">
          삭제하기
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "메뉴에서 사용되는 Separator 예시입니다. 사이드바와 컨텍스트 메뉴에서 메뉴 그룹을 구분합니다.",
      },
    },
  },
}

export const MediaContent: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      {/* 미디어 플레이어 */}
      <div className="border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Music className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Amazing Song</h3>
              <p className="text-sm text-muted-foreground">Great Artist</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge>3:45</Badge>
          </div>
        </div>
        
        <Separator />
        
        <div className="py-4">
          <div className="w-full bg-muted rounded-full h-1">
            <div className="bg-primary h-1 rounded-full w-1/3"></div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>1:15</span>
            <span>3:45</span>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="ghost" size="sm">
            <Music className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Music className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Music className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* 콘텐츠 카드 */}
      <div className="border rounded-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <Image className="h-12 w-12 text-white" />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold mb-2">Beautiful Landscape</h3>
          <p className="text-sm text-muted-foreground mb-4">
            자연의 아름다움을 담은 풍경 사진입니다. 
            산과 바다가 어우러진 멋진 장면을 확인해보세요.
          </p>
          
          <Separator decorative />
          
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                245
              </span>
              <span className="flex items-center gap-1">
                <Bookmark className="h-4 w-4" />
                32
              </span>
            </div>
            <Button size="sm">공유하기</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "미디어 콘텐츠에서 사용되는 Separator 예시입니다. 플레이어 정보, 컨트롤, 메타데이터를 구분합니다.",
      },
    },
  },
}

export const ResponsiveLayout: Story = {
  render: () => (
    <div className="w-[600px]">
      {/* 데스크톱 레이아웃 */}
      <div className="hidden md:block">
        <h3 className="font-semibold mb-4">데스크톱 레이아웃</h3>
        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            <h4 className="font-medium">메인 콘텐츠</h4>
            <p className="text-sm text-muted-foreground">
              주요 콘텐츠가 여기에 표시됩니다.
            </p>
            <div className="space-y-2">
              <div className="h-20 bg-muted rounded"></div>
              <div className="h-20 bg-muted rounded"></div>
            </div>
          </div>
          
          <Separator orientation="vertical" className="h-48" />
          
          <div className="w-48 space-y-4">
            <h4 className="font-medium">사이드바</h4>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Tag className="h-4 w-4 mr-2" />
                태그 1
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Tag className="h-4 w-4 mr-2" />
                태그 2
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Tag className="h-4 w-4 mr-2" />
                태그 3
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 레이아웃 */}
      <div className="md:hidden">
        <h3 className="font-semibold mb-4">모바일 레이아웃</h3>
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-medium">메인 콘텐츠</h4>
            <p className="text-sm text-muted-foreground">
              주요 콘텐츠가 여기에 표시됩니다.
            </p>
            <div className="space-y-2">
              <div className="h-20 bg-muted rounded"></div>
              <div className="h-20 bg-muted rounded"></div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h4 className="font-medium">관련 태그</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">태그 1</Badge>
              <Badge variant="secondary">태그 2</Badge>
              <Badge variant="secondary">태그 3</Badge>
              <Badge variant="secondary">태그 4</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "반응형 레이아웃에서 사용되는 Separator 예시입니다. 데스크톱에서는 수직, 모바일에서는 수평 구분선을 사용합니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="w-[500px] space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          Separator 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 포커스 가능한 요소만 이동</li>
          <li>의미적 구분선은 스크린 리더가 "구분선"으로 안내</li>
          <li>장식적 구분선은 스크린 리더가 무시</li>
          <li>적절한 ARIA 역할로 콘텐츠 구조 전달</li>
          <li>시각적 구분과 논리적 구분의 명확한 분리</li>
        </ul>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <h4 className="font-semibold">의미적 구분 (스크린 리더가 인식)</h4>
        
        <section aria-labelledby="personal-info">
          <h5 id="personal-info" className="font-medium text-green-700">개인 정보 섹션</h5>
          <p className="text-sm text-muted-foreground">
            사용자의 기본 정보를 입력하는 섹션입니다.
          </p>
        </section>
        
        <Separator role="separator" aria-label="개인 정보와 연락처 정보 구분" />
        
        <section aria-labelledby="contact-info">
          <h5 id="contact-info" className="font-medium text-blue-700">연락처 정보 섹션</h5>
          <p className="text-sm text-muted-foreground">
            연락 가능한 정보를 입력하는 섹션입니다.
          </p>
        </section>
        
        <Separator role="separator" aria-label="연락처 정보와 선택사항 구분" />
        
        <section aria-labelledby="preferences">
          <h5 id="preferences" className="font-medium text-purple-700">선택사항 섹션</h5>
          <p className="text-sm text-muted-foreground">
            개인화 설정을 선택하는 섹션입니다.
          </p>
        </section>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <h4 className="font-semibold">장식적 구분 (스크린 리더가 무시)</h4>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span>메뉴 항목 1</span>
            <Badge>새로움</Badge>
          </div>
          <Separator decorative />
          <div className="flex items-center justify-between">
            <span>메뉴 항목 2</span>
            <Badge variant="secondary">인기</Badge>
          </div>
          <Separator decorative />
          <div className="flex items-center justify-between">
            <span>메뉴 항목 3</span>
            <Badge variant="outline">추천</Badge>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          위의 구분선들은 시각적 구분만을 위한 장식적 요소로, 
          스크린 리더는 이를 무시하고 메뉴 항목들을 연속적으로 읽습니다.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Separator의 접근성 기능을 보여주는 데모입니다. 의미적 구분과 장식적 구분의 차이를 확인할 수 있습니다.",
      },
    },
  },
}