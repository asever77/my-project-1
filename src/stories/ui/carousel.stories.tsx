import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  Star, Heart, ShoppingCart, Eye, ChevronRight, Play, Pause,
  MapPin, Calendar, Clock, User, Camera, Image as ImageIcon,
  Quote, ArrowRight, Bookmark, Share, Download, ExternalLink
} from "lucide-react"

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// Avatar component not available, using initials instead

const meta: Meta<typeof Carousel> = {
  title: "UI/Overlay/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
사용자가 여러 콘텐츠를 슬라이드로 탐색할 수 있는 Carousel 컴포넌트입니다. 이미지 갤러리, 제품 쇼케이스, 콘텐츠 피드 등에 사용됩니다.

## 주요 기능
- **터치/스와이프 지원**: 모바일 환경에서 터치로 슬라이드 제어
- **키보드 네비게이션**: 좌우 화살표 키로 슬라이드 이동
- **자동 재생**: 설정에 따른 자동 슬라이드 전환
- **반응형**: 화면 크기에 따른 슬라이드 개수 조정
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 지원
- **커스터마이징**: 다양한 레이아웃과 스타일 옵션
- **플러그인**: Embla Carousel 기반의 확장 가능한 아키텍처

## 구성 요소
- **Carousel**: 전체 캐러셀 컨테이너
- **CarouselContent**: 슬라이드 콘텐츠 래퍼
- **CarouselItem**: 개별 슬라이드 아이템
- **CarouselPrevious**: 이전 버튼
- **CarouselNext**: 다음 버튼

## 사용법
\`\`\`tsx
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"

// 기본 사용법
<Carousel>
  <CarouselContent>
    <CarouselItem>슬라이드 1</CarouselItem>
    <CarouselItem>슬라이드 2</CarouselItem>
    <CarouselItem>슬라이드 3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// 옵션 설정
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  orientation="vertical"
>
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        {item}
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

// API 사용
const [api, setApi] = useState<CarouselApi>()
<Carousel setApi={setApi}>
  {/* content */}
</Carousel>
\`\`\`

## Props
- \`orientation\`: 방향 ("horizontal" | "vertical")
- \`opts\`: Embla Carousel 옵션
- \`plugins\`: Embla 플러그인 배열
- \`setApi\`: API 인스턴스 콜백

## 옵션 (opts)
- \`align\`: 정렬 ("start" | "center" | "end")
- \`loop\`: 무한 루프 여부
- \`slidesToScroll\`: 한 번에 스크롤할 슬라이드 수
- \`containScroll\`: 스크롤 제한 설정
- \`dragFree\`: 자유 드래그 여부
- \`direction\`: 텍스트 방향 ("ltr" | "rtl")

## 접근성
- **ARIA 역할**: \`carousel\`, \`slide\` 역할 제공
- **키보드 지원**: 좌우 화살표로 네비게이션
- **스크린 리더**: 슬라이드 개수와 현재 위치 안내
- **포커스 관리**: 활성 슬라이드 포커스 추적
- **라이브 영역**: 상태 변경 시 스크린 리더 안내

## 사용 사례
- **제품 갤러리**: 제품 이미지 슬라이드쇼
- **배너/히어로**: 메인 페이지 프로모션 배너
- **포트폴리오**: 작품 사례 슬라이드
- **후기/리뷰**: 고객 후기 순환 표시
- **뉴스 피드**: 최신 뉴스 항목 슬라이드
- **카드 레이아웃**: 카드 형태의 콘텐츠 네비게이션

## 반응형 설정
- **basis 클래스**: \`md:basis-1/2 lg:basis-1/3\`로 화면별 슬라이드 수 조정
- **그리드 시스템**: Tailwind CSS의 그리드 시스템과 연동
- **브레이크포인트**: 다양한 화면 크기별 최적화

## 모범 사례
- 각 슬라이드에 의미있는 콘텐츠 제공
- 터치 디바이스에서 스와이프 가능 표시
- 자동 재생 시 일시정지 옵션 제공
- 슬라이드 표시기(dots) 제공으로 위치 파악 지원
- 로딩 상태 표시로 사용자 경험 향상
- 키보드 사용자를 위한 명확한 네비게이션 제공
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "캐러셀 방향",
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "기본 Carousel 컴포넌트입니다. 숫자 카드로 구성된 간단한 슬라이드를 보여줍니다.",
      },
    },
  },
}

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-2xl font-semibold mb-2">카드 {index + 1}</div>
                      <div className="text-sm text-muted-foreground">
                        반응형 그리드 레이아웃
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "반응형 그리드 레이아웃의 Carousel입니다. 화면 크기에 따라 표시되는 슬라이드 개수가 변경됩니다.",
      },
    },
  },
}

export const ProductGallery: Story = {
  render: () => {
    const products = [
      {
        id: 1,
        name: "프리미엄 헤드폰",
        price: "299,000원",
        rating: 4.8,
        reviews: 124,
        badge: "베스트셀러",
        image: "🎧"
      },
      {
        id: 2,
        name: "무선 키보드",
        price: "159,000원",
        rating: 4.6,
        reviews: 89,
        badge: "신상품",
        image: "⌨️"
      },
      {
        id: 3,
        name: "게이밍 마우스",
        price: "89,000원",
        rating: 4.9,
        reviews: 256,
        badge: "할인중",
        image: "🖱️"
      },
      {
        id: 4,
        name: "USB-C 허브",
        price: "79,000원",
        rating: 4.5,
        reviews: 67,
        badge: "추천",
        image: "🔌"
      },
      {
        id: 5,
        name: "웹캠 HD",
        price: "129,000원",
        rating: 4.7,
        reviews: 143,
        badge: "인기",
        image: "📹"
      }
    ]

    return (
      <div className="w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">추천 제품</h2>
          <p className="text-muted-foreground">고객 평점이 높은 인기 제품들을 만나보세요</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="group hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      {/* 제품 이미지 */}
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                        <div className="text-6xl">{product.image}</div>
                        <Badge 
                          variant={product.badge === "할인중" ? "destructive" : "secondary"}
                          className="absolute top-2 left-2"
                        >
                          {product.badge}
                        </Badge>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="secondary" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* 제품 정보 */}
                      <div className="space-y-2">
                        <h3 className="font-semibold truncate">{product.name}</h3>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating) 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-muted-foreground"
                              }`} 
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">{product.price}</span>
                          <Button size="sm" className="gap-1">
                            <ShoppingCart className="h-4 w-4" />
                            담기
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "제품 갤러리 Carousel입니다. 제품 정보, 평점, 가격 등을 포함한 완전한 제품 카드를 보여줍니다.",
      },
    },
  },
}

export const VerticalOrientation: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel
        orientation="vertical"
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xs"
      >
        <CarouselContent className="h-[400px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-2xl font-semibold mb-2">
                        세로 슬라이드 {index + 1}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        수직 방향 스크롤
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "세로 방향 Carousel입니다. orientation=\"vertical\"로 수직 스크롤이 가능합니다.",
      },
    },
  },
}

export const TestimonialCarousel: Story = {
  render: () => {
    const testimonials = [
      {
        id: 1,
        content: "이 서비스를 사용한 후 업무 효율성이 200% 향상되었습니다. 정말 혁신적인 솔루션이에요!",
        author: "김미영",
        position: "마케팅 디렉터",
        company: "테크스타트업",
        avatar: "KM",
        rating: 5
      },
      {
        id: 2,
        content: "사용하기 쉽고 직관적인 인터페이스가 인상적입니다. 팀 전체가 만족하고 있어요.",
        author: "박준호",
        position: "프로덕트 매니저",
        company: "이노베이션 랩",
        avatar: "PJ",
        rating: 5
      },
      {
        id: 3,
        content: "고객 지원팀의 응답이 빠르고 친절합니다. 문제가 생겨도 금방 해결되어 안심이 됩니다.",
        author: "이서연",
        position: "운영팀장",
        company: "글로벌 커머스",
        avatar: "LS",
        rating: 4
      },
      {
        id: 4,
        content: "가격 대비 성능이 뛰어나고, 필요한 기능들이 모두 포함되어 있어 매우 만족합니다.",
        author: "최동욱",
        position: "CTO",
        company: "스마트솔루션",
        avatar: "CD",
        rating: 5
      }
    ]

    return (
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">고객 후기</h2>
          <p className="text-muted-foreground">우리 서비스를 사용하는 고객들의 생생한 후기를 확인해보세요</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        {/* 인용문 아이콘 */}
                        <Quote className="h-8 w-8 text-primary mb-4" />
                        
                        {/* 후기 내용 */}
                        <blockquote className="text-lg leading-relaxed mb-6 flex-1">
                          "{testimonial.content}"
                        </blockquote>
                        
                        {/* 평점 */}
                        <div className="flex items-center gap-1 mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < testimonial.rating 
                                  ? "fill-yellow-400 text-yellow-400" 
                                  : "text-muted-foreground"
                              }`} 
                            />
                          ))}
                        </div>
                        
                        {/* 작성자 정보 */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">
                              {testimonial.position}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "고객 후기 Carousel입니다. 인용문, 평점, 작성자 정보를 포함한 완전한 후기 카드를 보여줍니다.",
      },
    },
  },
}

export const ImageGallery: Story = {
  render: () => {
    const images = [
      {
        id: 1,
        title: "산악 풍경",
        description: "아름다운 산맥과 구름이 어우러진 풍경",
        photographer: "김자연",
        date: "2024.03.15",
        icon: "🏔️"
      },
      {
        id: 2,
        title: "도시 야경",
        description: "빛나는 도시의 밤 풍경",
        photographer: "박도시",
        date: "2024.03.10",
        icon: "🌃"
      },
      {
        id: 3,
        title: "바다 일출",
        description: "수평선 너머로 떠오르는 태양",
        photographer: "이바다",
        date: "2024.03.08",
        icon: "🌅"
      },
      {
        id: 4,
        title: "숲속 길",
        description: "초록빛 나무들 사이의 오솔길",
        photographer: "최숲",
        date: "2024.03.05",
        icon: "🌲"
      },
      {
        id: 5,
        title: "꽃밭 풍경",
        description: "알록달록한 꽃들이 만발한 들판",
        photographer: "정꽃",
        date: "2024.03.01",
        icon: "🌸"
      }
    ]

    return (
      <div className="w-full max-w-5xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">포토 갤러리</h2>
          <p className="text-muted-foreground">전 세계 사진작가들의 아름다운 작품을 감상해보세요</p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="lg:basis-3/4">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <div className="relative">
                      {/* 이미지 영역 */}
                      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
                        <div className="text-8xl">{image.icon}</div>
                        
                        {/* 호버 오버레이 */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button size="sm" variant="secondary" className="gap-1">
                            <Eye className="h-4 w-4" />
                            보기
                          </Button>
                          <Button size="sm" variant="secondary" className="gap-1">
                            <Download className="h-4 w-4" />
                            다운로드
                          </Button>
                          <Button size="sm" variant="secondary" className="gap-1">
                            <Share className="h-4 w-4" />
                            공유
                          </Button>
                        </div>
                        
                        {/* 북마크 버튼 */}
                        <Button 
                          size="icon" 
                          variant="secondary" 
                          className="absolute top-4 right-4 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* 이미지 정보 */}
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">{image.title}</h3>
                          <p className="text-muted-foreground text-sm">{image.description}</p>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Camera className="h-4 w-4" />
                              <span>{image.photographer}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{image.date}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "이미지 갤러리 Carousel입니다. 이미지 미리보기, 메타데이터, 상호작용 버튼을 포함합니다.",
      },
    },
  },
}

export const InteractiveControls: Story = {
  render: () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [isPlaying, setIsPlaying] = React.useState(false)

    React.useEffect(() => {
      if (!api) return

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    React.useEffect(() => {
      if (!api || !isPlaying) return

      const interval = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext()
        } else {
          api.scrollTo(0)
        }
      }, 3000)

      return () => clearInterval(interval)
    }, [api, isPlaying])

    const slides = [
      { title: "첫 번째 슬라이드", content: "자동 재생과 수동 제어가 가능합니다" },
      { title: "두 번째 슬라이드", content: "현재 슬라이드 위치를 확인할 수 있습니다" },
      { title: "세 번째 슬라이드", content: "이전/다음 버튼으로 직접 제어할 수 있습니다" },
      { title: "네 번째 슬라이드", content: "페이지 인디케이터로 현재 위치를 알 수 있습니다" },
      { title: "다섯 번째 슬라이드", content: "재생/일시정지 버튼으로 자동 재생을 제어합니다" }
    ]

    return (
      <div className="w-full max-w-2xl">
        <div className="space-y-4">
          {/* 캐러셀 */}
          <Carousel setApi={setApi}>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold">{slide.title}</h3>
                        <p className="text-muted-foreground">{slide.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* 컨트롤 패널 */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  슬라이드 {current} / {count}
                </div>
                
                {/* 페이지 인디케이터 */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === current - 1 ? "bg-primary" : "bg-muted"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
                
                {/* 재생 컨트롤 */}
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="gap-1"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4" />
                        일시정지
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        재생
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "상호작용 컨트롤을 포함한 Carousel입니다. 자동 재생, 페이지 인디케이터, 슬라이드 카운터 등의 기능을 보여줍니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => {
    const [announcements, setAnnouncements] = React.useState<string[]>([])
    
    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev, message])
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1))
      }, 3000)
    }

    const accessibilityFeatures = [
      {
        title: "키보드 네비게이션",
        description: "좌우 화살표 키로 슬라이드 간 이동이 가능합니다.",
        demo: "← → 키를 사용해보세요"
      },
      {
        title: "스크린 리더 지원",
        description: "각 슬라이드의 역할과 내용을 명확히 안내합니다.",
        demo: "aria-label과 role 속성 적용"
      },
      {
        title: "포커스 관리",
        description: "활성 슬라이드로 포커스가 자동 이동됩니다.",
        demo: "Tab 키로 포커스 이동 확인"
      },
      {
        title: "상태 안내",
        description: "현재 슬라이드 위치와 전체 개수를 안내합니다.",
        demo: "스크린 리더가 위치 정보 읽기"
      }
    ]

    return (
      <div className="space-y-6 w-full max-w-3xl">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Carousel 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">좌우 화살표</kbd>로 슬라이드 네비게이션</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 컨트롤 버튼 포커스</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter/Space</kbd>로 버튼 활성화</li>
            <li>스크린 리더가 슬라이드 정보와 상태 안내</li>
            <li>ARIA 라이브 영역으로 상태 변경 알림</li>
            <li>고대비 모드와 큰 글씨 지원</li>
          </ul>
        </div>

        {/* 라이브 영역 */}
        <div 
          aria-live="polite" 
          aria-label="캐러셀 상태 안내"
          className="sr-only"
        >
          {announcements.map((announcement, index) => (
            <div key={index}>{announcement}</div>
          ))}
        </div>

        {/* 접근성 기능 캐러셀 */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              addAnnouncement(`${e.key === "ArrowLeft" ? "이전" : "다음"} 슬라이드로 이동`)
            }
          }}
        >
          <CarouselContent>
            {accessibilityFeatures.map((feature, index) => (
              <CarouselItem 
                key={index} 
                className="md:basis-1/2"
                role="group"
                aria-roledescription="slide"
                aria-label={`슬라이드 ${index + 1}, ${feature.title}`}
              >
                <div className="p-1">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                      
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="text-sm font-medium mb-1">시도해보기:</div>
                        <div className="text-sm text-muted-foreground">
                          {feature.demo}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => addAnnouncement(`${feature.title} 기능 테스트됨`)}
                        aria-describedby={`feature-${index}-desc`}
                      >
                        기능 테스트
                      </Button>
                      <div id={`feature-${index}-desc`} className="sr-only">
                        {feature.title} 접근성 기능을 테스트합니다
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            aria-label="이전 슬라이드로 이동"
            onClick={() => addAnnouncement("이전 슬라이드로 이동했습니다")}
          />
          <CarouselNext 
            aria-label="다음 슬라이드로 이동"
            onClick={() => addAnnouncement("다음 슬라이드로 이동했습니다")}
          />
        </Carousel>

        {/* 상태 표시 */}
        <Card>
          <CardContent className="p-4">
            <div className="text-sm">
              <div className="font-medium mb-2">접근성 상태:</div>
              <div className="space-y-1 text-muted-foreground">
                <div>• 키보드 네비게이션: 활성화됨</div>
                <div>• 스크린 리더 지원: 활성화됨</div>
                <div>• ARIA 라벨: 적용됨</div>
                <div>• 포커스 표시: 활성화됨</div>
              </div>
              
              {announcements.length > 0 && (
                <div className="mt-4 p-2 bg-primary/10 rounded border-l-2 border-primary">
                  <div className="text-xs font-medium">최근 안내:</div>
                  <div className="text-xs">{announcements[announcements.length - 1]}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Carousel의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다.",
      },
    },
  },
}