import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

// AspectRatio 컴포넌트의 props 타입을 정의
type AspectRatioProps = React.ComponentProps<typeof AspectRatio>;

const meta: Meta<AspectRatioProps> = {
  title: "UI/Contents/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Radix UI 기반의 종횡비(Aspect Ratio) 컴포넌트입니다. 이미지, 비디오, 임베드 콘텐츠 등이 특정 비율을 유지하도록 도와줍니다.

## 주요 기능
- **반응형 비율 유지**: 컨테이너 크기에 관계없이 설정된 종횡비를 항상 유지
- **다양한 비율 지원**: 16:9, 4:3, 1:1, 3:2 등 일반적인 미디어 비율부터 커스텀 비율까지 지원
- **완벽한 접근성**: 스크린 리더 및 키보드 네비게이션 완벽 지원
- **유연한 콘텐츠**: 이미지, 비디오, iframe, 커스텀 컴포넌트 등 모든 요소 지원
- **CSS-in-JS 없음**: 순수 CSS로 구현되어 성능이 우수하고 SSR 호환
- **크기 조절**: 부모 컨테이너의 width를 기준으로 height가 자동 계산

## 사용법
\`\`\`tsx
import { AspectRatio } from "@/components/ui/aspect-ratio"

// 16:9 비율 이미지
<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <img
      src="/placeholder.jpg"
      alt="이미지 설명"
      className="rounded-md object-cover w-full h-full"
    />
  </AspectRatio>
</div>

// 1:1 정사각형 비율
<div className="w-[300px]">
  <AspectRatio ratio={1}>
    <div className="flex items-center justify-center w-full h-full bg-muted rounded-md">
      <p>정사각형 콘텐츠</p>
    </div>
  </AspectRatio>
</div>
\`\`\`

## Props
- \`ratio\`: number - 종횡비 (너비/높이). 예: 16/9, 4/3, 1, 3/2
- \`asChild\`: boolean - 자식 요소를 직접 렌더링할지 여부
- \`className\`: string - 추가 CSS 클래스

## 일반적인 비율
- **16:9** (1.777): 와이드스크린 비디오, 현대적 이미지
- **4:3** (1.333): 전통적 TV, 태블릿 화면
- **1:1** (1): 정사각형, 프로필 사진, 인스타그램
- **3:2** (1.5): 35mm 필름, DSLR 사진
- **21:9** (2.333): 울트라와이드 모니터
        `,
      },
    },
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-[450px]">
      <AspectRatio {...args} ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="아름다운 자연 풍경"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
}

export default meta
type Story = StoryObj<AspectRatioProps>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="자연 풍경 사진"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "기본 16:9 비율의 AspectRatio입니다. 가장 일반적으로 사용되는 와이드스크린 비율로, 비디오나 현대적인 이미지에 적합합니다.",
      },
    },
  },
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&dpr=2&q=80"
          alt="프로필 사진"
          className="rounded-full object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "1:1 정사각형 비율의 AspectRatio입니다. 프로필 사진, 아바타, 인스타그램 포스트 등에 주로 사용됩니다.",
      },
    },
  },
}

export const Traditional: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&dpr=2&q=80"
          alt="전통적인 비율의 풍경"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "4:3 전통적인 비율의 AspectRatio입니다. 클래식한 TV 화면이나 태블릿 디스플레이 비율로 친숙한 느낌을 줍니다.",
      },
    },
  },
}

export const Photo: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={3 / 2}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&dpr=2&q=80"
          alt="사진 비율 이미지"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "3:2 사진 비율의 AspectRatio입니다. 35mm 필름이나 DSLR 카메라의 표준 비율로, 전문적인 사진에 적합합니다.",
      },
    },
  },
}

export const Ultrawide: Story = {
  render: () => (
    <div className="w-[600px]">
      <AspectRatio ratio={21 / 9}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&dpr=2&q=80"
          alt="울트라와이드 풍경"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "21:9 울트라와이드 비율의 AspectRatio입니다. 영화나 파노라마 사진, 울트라와이드 모니터에 최적화된 콘텐츠에 사용됩니다.",
      },
    },
  },
}

export const WithVideo: Story = {
  render: () => (
    <div className="w-[500px]">
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-md"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "비디오 임베드를 위한 AspectRatio입니다. YouTube, Vimeo 등의 동영상 플레이어를 반응형으로 삽입할 때 유용합니다.",
      },
    },
  },
}

export const CustomContent: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-md text-white">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold">16:9</div>
            <div className="text-sm opacity-90">커스텀 콘텐츠</div>
            <div className="w-16 h-1 bg-white/50 rounded"></div>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "커스텀 콘텐츠를 담은 AspectRatio입니다. 이미지나 비디오가 아닌 다양한 UI 요소들도 특정 비율로 배치할 수 있습니다.",
      },
    },
  },
}

export const ResponsiveGallery: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px]">
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&dpr=2&q=80"
          alt="갤러리 이미지 1"
          className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&dpr=2&q=80"
          alt="갤러리 이미지 2"
          className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&dpr=2&q=80"
          alt="갤러리 이미지 3"
          className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&dpr=2&q=80"
          alt="갤러리 이미지 4"
          className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform"
        />
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "반응형 갤러리에서 사용하는 AspectRatio입니다. 모든 이미지가 동일한 비율을 유지하여 깔끔한 그리드 레이아웃을 만듭니다.",
      },
    },
  },
}

export const PlaceholderContent: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">비율별 플레이스홀더</h3>
        <p className="text-sm text-muted-foreground">
          다양한 종횡비에서 플레이스홀더 콘텐츠가 어떻게 보이는지 확인할 수 있습니다.
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">16:9 (와이드스크린)</p>
          <AspectRatio ratio={16 / 9}>
            <div className="flex items-center justify-center w-full h-full bg-muted rounded-md border-2 border-dashed border-border">
              <div className="text-center space-y-1">
                <div className="text-lg font-semibold">16:9</div>
                <div className="text-sm text-muted-foreground">1920 × 1080</div>
              </div>
            </div>
          </AspectRatio>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">4:3 (전통적)</p>
          <AspectRatio ratio={4 / 3}>
            <div className="flex items-center justify-center w-full h-full bg-muted rounded-md border-2 border-dashed border-border">
              <div className="text-center space-y-1">
                <div className="text-lg font-semibold">4:3</div>
                <div className="text-sm text-muted-foreground">1024 × 768</div>
              </div>
            </div>
          </AspectRatio>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "플레이스홀더 콘텐츠를 보여주는 AspectRatio입니다. 실제 콘텐츠가 로드되기 전 레이아웃을 미리 보거나 빈 상태를 표시할 때 유용합니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">접근성 데모</h3>
        <p className="text-sm text-muted-foreground">
          AspectRatio 컴포넌트의 접근성 기능을 확인해보세요:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li>이미지에는 항상 의미 있는 alt 텍스트 제공</li>
          <li>키보드로 포커스 가능한 요소들의 적절한 배치</li>
          <li>스크린 리더가 콘텐츠를 올바르게 인식</li>
          <li>색상에만 의존하지 않는 정보 전달</li>
        </ul>
      </div>
      
      <AspectRatio ratio={16 / 9}>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="산과 호수가 어우러진 평화로운 자연 풍경. 맑은 물에 산의 실루엣이 반사되어 보이며, 하늘에는 부드러운 구름이 떠있다."
            className="rounded-md object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 rounded-md flex items-end">
            <div className="p-4 text-white">
              <h4 className="font-semibold">접근 가능한 이미지</h4>
              <p className="text-sm opacity-90">상세한 alt 텍스트와 캡션 제공</p>
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "AspectRatio의 접근성 기능을 보여주는 데모입니다. 적절한 alt 텍스트, 키보드 접근성, 스크린 리더 호환성을 확인할 수 있습니다.",
      },
    },
  },
}