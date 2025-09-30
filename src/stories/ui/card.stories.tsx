import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Star, Heart, ShoppingCart, MoreHorizontal, MapPin, Calendar, User, Mail, Phone, Globe, Github, Twitter, Award, CheckCircle, AlertCircle } from "lucide-react"

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Card 컴포넌트의 props 타입을 정의
type CardProps = React.ComponentProps<typeof Card>;

const meta: Meta<CardProps> = {
  title: "UI/Contents/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
유연하고 확장 가능한 컨테이너 컴포넌트입니다. 관련된 정보를 그룹화하여 표시하는 데 사용됩니다.

## 주요 기능
- **유연한 구조**: Header, Content, Footer를 자유롭게 조합
- **액션 지원**: 카드 우상단에 액션 버튼이나 메뉴 배치 가능
- **그림자 효과**: 깔끔한 그림자로 카드 경계 강조
- **반응형 디자인**: 다양한 화면 크기에 적응
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원
- **커스터마이징**: TailwindCSS를 통한 자유로운 스타일 변경

## 사용법
\`\`\`tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"

// 기본 사용법
<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>카드 내용</p>
  </CardContent>
  <CardFooter>
    <Button>액션</Button>
  </CardFooter>
</Card>

// 액션이 포함된 카드
<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
    <CardAction>
      <Button variant="ghost" size="sm">
        <MoreHorizontal className="w-4 h-4" />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>내용</CardContent>
</Card>
\`\`\`

## 구성 요소
- \`Card\`: 카드의 루트 컨테이너
- \`CardHeader\`: 제목과 설명을 담는 헤더 영역
- \`CardTitle\`: 카드 제목
- \`CardDescription\`: 카드 설명
- \`CardAction\`: 헤더 우상단의 액션 버튼 영역
- \`CardContent\`: 주요 내용을 담는 영역
- \`CardFooter\`: 하단 액션이나 추가 정보를 담는 영역

## 사용 사례
- 제품 카드, 사용자 프로필, 통계 대시보드
- 블로그 포스트 미리보기, 알림 카드
- 설정 패널, 폼 섹션 등
        `,
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드에 대한 간단한 설명입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 주요 내용이 여기에 표시됩니다.</p>
      </CardContent>
      <CardFooter>
        <Button>액션 버튼</Button>
      </CardFooter>
    </Card>
  ),
}

export default meta
type Story = StoryObj<CardProps>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>기본 카드</CardTitle>
        <CardDescription>이것은 기본적인 카드 컴포넌트입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드의 주요 내용이 이곳에 표시됩니다. 텍스트, 이미지, 또는 다른 컴포넌트들을 자유롭게 배치할 수 있습니다.</p>
      </CardContent>
      <CardFooter>
        <Button>더 보기</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 Card입니다. Header, Content, Footer로 구성된 표준적인 카드 레이아웃을 보여줍니다.",
      },
    },
  },
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>액션이 있는 카드</CardTitle>
        <CardDescription>우상단에 액션 버튼이 포함된 카드입니다.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>카드 헤더에 액션 버튼이나 메뉴를 추가할 수 있습니다.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline">취소</Button>
        <Button>확인</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "CardAction이 포함된 Card입니다. 헤더 우상단에 메뉴나 추가 액션을 배치할 수 있습니다.",
      },
    },
  },
}

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="aspect-square w-full bg-muted rounded-lg flex items-center justify-center mb-4">
          <ShoppingCart className="w-8 h-8 text-muted-foreground" />
        </div>
        <CardTitle>무선 이어폰</CardTitle>
        <CardDescription>고품질 사운드의 블루투스 이어폰</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground ml-1">(128)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">₩89,000</span>
            <Badge variant="secondary">무료배송</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingCart className="w-4 h-4 mr-2" />
          장바구니 담기
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "제품 정보를 표시하는 Card입니다. 이미지, 평점, 가격, 액션 버튼을 포함한 전형적인 e-commerce 카드입니다.",
      },
    },
  },
}

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <CardTitle>김개발</CardTitle>
            <CardDescription>프론트엔드 개발자</CardDescription>
          </div>
        </div>
        <CardAction>
          <Button variant="outline" size="sm">팔로우</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>서울, 대한민국</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>2019년 3월부터</span>
          </div>
          <p className="text-sm">
            React와 TypeScript를 사용한 웹 개발을 전문으로 하며, 
            사용자 경험을 중시하는 개발자입니다.
          </p>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Mail className="w-4 h-4 mr-2" />
          메시지
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Phone className="w-4 h-4 mr-2" />
          연락처
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "사용자 프로필을 표시하는 Card입니다. 아바타, 기본 정보, 소개글, 연락 방법을 포함합니다.",
      },
    },
  },
}

export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">총 사용자</CardTitle>
          <CardAction>
            <User className="w-4 h-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,350</div>
          <p className="text-xs text-muted-foreground">
            +20.1% 지난 달 대비
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">총 매출</CardTitle>
          <CardAction>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₩15,231,000</div>
          <p className="text-xs text-muted-foreground">
            +15.3% 지난 달 대비
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
          <CardAction>
            <CheckCircle className="w-4 h-4 text-green-500" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,892</div>
          <p className="text-xs text-muted-foreground">
            +7.2% 지난 달 대비
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "통계 정보를 표시하는 Card들입니다. 대시보드에서 주요 지표를 한눈에 볼 수 있도록 구성했습니다.",
      },
    },
  },
}

export const BlogPostCard: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="aspect-video w-full bg-muted rounded-lg mb-4 flex items-center justify-center">
          <Globe className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
        </div>
        <CardTitle className="line-clamp-2">
          Next.js 13과 함께 하는 모던 웹 개발 가이드
        </CardTitle>
        <CardDescription>
          최신 Next.js 기능들을 활용한 효율적인 웹 애플리케이션 개발 방법을 알아보세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>2024년 3월 15일</span>
          <span>•</span>
          <span>5분 읽기</span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">북마크</Button>
        <Button className="flex-1">읽어보기</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "블로그 포스트를 미리보는 Card입니다. 썸네일, 태그, 제목, 요약, 메타 정보를 포함합니다.",
      },
    },
  },
}

export const NotificationCard: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Card>
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <CardTitle className="text-sm">새로운 댓글</CardTitle>
              <CardDescription>
                "React 성능 최적화" 포스트에 댓글이 달렸습니다.
              </CardDescription>
            </div>
            <CardAction>
              <span className="text-xs text-muted-foreground">2분 전</span>
            </CardAction>
          </div>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <CardTitle className="text-sm">결제 완료</CardTitle>
              <CardDescription>
                프리미엄 플랜 구독이 성공적으로 처리되었습니다.
              </CardDescription>
            </div>
            <CardAction>
              <span className="text-xs text-muted-foreground">1시간 전</span>
            </CardAction>
          </div>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <CardTitle className="text-sm">보안 알림</CardTitle>
              <CardDescription>
                새로운 기기에서 로그인이 감지되었습니다.
              </CardDescription>
            </div>
            <CardAction>
              <Button variant="ghost" size="sm">확인</Button>
            </CardAction>
          </div>
        </CardHeader>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "알림을 표시하는 Card들입니다. 상태 아이콘, 메시지, 시간 정보를 포함하여 다양한 알림 유형을 보여줍니다.",
      },
    },
  },
}

export const InteractiveCard: Story = {
  render: () => {
    const [isLiked, setIsLiked] = React.useState(false)
    const [isBookmarked, setIsBookmarked] = React.useState(false)
    
    return (
      <Card className="w-[350px] cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle>상호작용 카드</CardTitle>
          <CardDescription>
            버튼들을 클릭하여 상태 변화를 확인해보세요.
          </CardDescription>
          <CardAction>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            이 카드는 사용자와 상호작용할 수 있습니다. 
            하트와 별 버튼의 상태가 클릭에 따라 변경됩니다.
          </p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className="flex-1"
          >
            <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            {isLiked ? '좋아요!' : '좋아요'}
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Globe className="w-4 h-4 mr-2" />
            공유
          </Button>
        </CardFooter>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "상호작용이 가능한 Card입니다. 좋아요, 북마크 등의 상태를 실시간으로 변경할 수 있습니다.",
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
          Card 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd> 키로 카드 내 요소들 간 이동</li>
          <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd> 또는 <kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 버튼 활성화</li>
          <li>스크린 리더가 카드 구조를 적절히 해석</li>
          <li>명확한 헤딩 구조로 내용 계층 표현</li>
        </ul>
      </div>
      
      <Card className="w-[400px]" tabIndex={0} role="article" aria-labelledby="accessible-card-title">
        <CardHeader>
          <CardTitle id="accessible-card-title">접근성 최적화 카드</CardTitle>
          <CardDescription>
            이 카드는 접근성 모범 사례를 따라 구현되었습니다.
          </CardDescription>
          <CardAction>
            <Button 
              variant="ghost" 
              size="sm"
              aria-label="카드 옵션 메뉴 열기"
            >
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span className="text-sm">WCAG 2.1 AA 준수</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">키보드 네비게이션 지원</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">스크린 리더 호환</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full"
            aria-describedby="accessible-card-title"
          >
            접근성 가이드 보기
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Card의 접근성 기능을 보여주는 데모입니다. 적절한 ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다.",
      },
    },
  },
}