import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  TrendingUp, TrendingDown, BarChart as BarChartIcon, PieChart as PieChartIcon, LineChart as LineChartIcon, 
  Activity, DollarSign, Users, ShoppingCart, Target, Calendar,
  ArrowUp, ArrowDown, Minus, Eye, Download, Share
} from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ComposedChart
} from "recharts"

import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof ChartContainer> = {
  title: "UI/Contents-active/Chart",
  component: ChartContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
데이터를 시각적으로 표현하는 Chart 컴포넌트입니다. Recharts 라이브러리를 기반으로 다양한 차트 유형을 지원합니다.

## 주요 기능
- **다양한 차트 유형**: Bar, Line, Area, Pie, Radial 차트 지원
- **반응형 디자인**: 화면 크기에 따른 자동 조정
- **인터랙티브**: 툴팁, 줌, 호버 효과
- **커스터마이징**: 색상, 테마, 스타일 자유 설정
- **접근성**: 스크린 리더와 키보드 네비게이션 지원
- **애니메이션**: 부드러운 전환 효과
- **범례와 라벨**: 데이터 이해를 돕는 시각적 요소

## 구성 요소
- **ChartContainer**: 차트 컨테이너와 설정 관리
- **ChartTooltip**: 인터랙티브 툴팁
- **ChartTooltipContent**: 툴팁 내용 커스터마이징
- **ChartLegend**: 차트 범례
- **ChartLegendContent**: 범례 내용 커스터마이징

## 사용법
\`\`\`tsx
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartConfig
} from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis } from "recharts"

const chartConfig = {
  sales: {
    label: "매출",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

const data = [
  { month: "1월", sales: 186 },
  { month: "2월", sales: 305 },
  { month: "3월", sales: 237 },
]

<ChartContainer config={chartConfig}>
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--color-sales)" />
  </BarChart>
</ChartContainer>
\`\`\`

## ChartConfig
차트의 데이터 시리즈별 설정을 정의합니다:
\`\`\`tsx
const chartConfig = {
  series1: {
    label: "시리즈 1",
    color: "#ff6b6b",
  },
  series2: {
    label: "시리즈 2", 
    color: "#4ecdc4",
    icon: TrendingUp,
  },
} satisfies ChartConfig
\`\`\`

## 차트 유형
- **Bar Chart**: 막대형 차트 (카테고리별 비교)
- **Line Chart**: 선형 차트 (시간별 추세)
- **Area Chart**: 면적형 차트 (누적 데이터)
- **Pie Chart**: 원형 차트 (비율 표시)
- **Radial Chart**: 방사형 차트 (진행률)
- **Composed Chart**: 복합 차트 (여러 유형 조합)

## 접근성
- **ARIA 라벨**: 차트 제목과 설명 제공
- **키보드 네비게이션**: Tab으로 차트 요소 접근
- **스크린 리더**: 데이터 값과 추세 설명
- **고대비 모드**: 명확한 색상 구분
- **대체 텍스트**: 차트 내용의 텍스트 설명

## 사용 사례
- **대시보드**: KPI와 성과 지표 시각화
- **분석 리포트**: 데이터 분석 결과 표시
- **매출 현황**: 매출 추이와 목표 달성률
- **사용자 통계**: 사용자 행동과 참여도
- **재무 데이터**: 수익, 비용, 이익 분석
- **성과 추적**: 목표 대비 실적 모니터링

## 색상 시스템
shadcn/ui의 CSS 변수를 활용한 일관된 색상 시스템:
- \`--chart-1\` to \`--chart-5\`: 기본 차트 색상
- 라이트/다크 테마 자동 대응
- 브랜드 색상과의 일관성 유지

## 모범 사례
- 명확한 차트 제목과 축 라벨 제공
- 적절한 색상 대비로 가독성 확보
- 툴팁으로 상세 정보 제공
- 범례로 데이터 시리즈 설명
- 반응형 디자인으로 모바일 지원
- 로딩 상태와 에러 처리 구현
- 데이터 없음 상태 표시
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    config: {
      description: "차트 설정 객체",
    },
  },
}

export default meta
type Story = StoryObj<typeof ChartContainer>

export const Default: Story = {
  render: () => {
    const chartData = [
      { month: "1월", sales: 186 },
      { month: "2월", sales: 305 },
      { month: "3월", sales: 237 },
      { month: "4월", sales: 73 },
      { month: "5월", sales: 209 },
      { month: "6월", sales: 214 },
    ]

    const chartConfig = {
      sales: {
        label: "매출",
        color: "hsl(var(--chart-1))",
      },
    } satisfies ChartConfig

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>월별 매출</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <RechartsBarChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            </RechartsBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Bar Chart입니다. 월별 매출 데이터를 막대 그래프로 표시합니다.",
      },
    },
  },
}

export const LineChartStory: Story = {
  render: () => {
    const chartData = [
      { date: "2024-01", visitors: 1200, pageViews: 3400 },
      { date: "2024-02", visitors: 1900, pageViews: 4200 },
      { date: "2024-03", visitors: 1600, pageViews: 3800 },
      { date: "2024-04", visitors: 2100, pageViews: 5100 },
      { date: "2024-05", visitors: 2400, pageViews: 5800 },
      { date: "2024-06", visitors: 2200, pageViews: 5200 },
    ]

    const chartConfig = {
      visitors: {
        label: "방문자",
        color: "hsl(var(--chart-1))",
      },
      pageViews: {
        label: "페이지뷰",
        color: "hsl(var(--chart-2))",
      },
    } satisfies ChartConfig

    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            웹사이트 트래픽 추이
          </CardTitle>
          <CardDescription>
            최근 6개월간 방문자 및 페이지뷰 변화
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <RechartsLineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line 
                type="monotone" 
                dataKey="visitors" 
                stroke="var(--color-visitors)"
                strokeWidth={2}
                dot={{ fill: "var(--color-visitors)" }}
              />
              <Line 
                type="monotone" 
                dataKey="pageViews" 
                stroke="var(--color-pageViews)"
                strokeWidth={2}
                dot={{ fill: "var(--color-pageViews)" }}
              />
            </RechartsLineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "다중 시리즈 Line Chart입니다. 웹사이트 트래픽 데이터의 추이를 시간별로 보여줍니다.",
      },
    },
  },
}

export const AreaChartStory: Story = {
  render: () => {
    const chartData = [
      { quarter: "Q1", revenue: 320, expenses: 280, profit: 40 },
      { quarter: "Q2", revenue: 420, expenses: 310, profit: 110 },
      { quarter: "Q3", revenue: 380, expenses: 290, profit: 90 },
      { quarter: "Q4", revenue: 520, expenses: 350, profit: 170 },
    ]

    const chartConfig = {
      revenue: {
        label: "매출",
        color: "hsl(var(--chart-1))",
      },
      expenses: {
        label: "비용",
        color: "hsl(var(--chart-2))",
      },
      profit: {
        label: "순이익",
        color: "hsl(var(--chart-3))",
      },
    } satisfies ChartConfig

    return (
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChartIcon className="h-5 w-5" />
            분기별 재무 현황
          </CardTitle>
          <CardDescription>
            2024년 분기별 매출, 비용, 순이익 추이
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stackId="1"
                stroke="var(--color-revenue)"
                fill="var(--color-revenue)"
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                stackId="1"
                stroke="var(--color-expenses)"
                fill="var(--color-expenses)"
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                stackId="2"
                stroke="var(--color-profit)"
                fill="var(--color-profit)"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "누적 Area Chart입니다. 분기별 재무 데이터의 구성 비율과 변화를 시각적으로 보여줍니다.",
      },
    },
  },
}

export const PieChartStory: Story = {
  render: () => {
    const chartData = [
      { category: "데스크톱", value: 45.2, count: 1240 },
      { category: "모바일", value: 32.8, count: 890 },
      { category: "태블릿", value: 15.4, count: 420 },
      { category: "기타", value: 6.6, count: 180 },
    ]

    const chartConfig = {
      desktop: {
        label: "데스크톱",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "모바일",
        color: "hsl(var(--chart-2))",
      },
      tablet: {
        label: "태블릿",
        color: "hsl(var(--chart-3))",
      },
      other: {
        label: "기타",
        color: "hsl(var(--chart-4))",
      },
    } satisfies ChartConfig

    const COLORS = [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
    ]

    return (
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5" />
            디바이스별 접속 현황
          </CardTitle>
          <CardDescription>
            지난 30일간 디바이스 유형별 방문 비율
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ChartContainer config={chartConfig}>
              <RechartsPieChart>
                <ChartTooltip 
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value, name) => [
                    `${value}% (${chartData.find(d => d.category === name)?.count || 0}명)`,
                    name
                  ]}
                />
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, value }) => `${category}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="category"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </RechartsPieChart>
            </ChartContainer>

            {/* 통계 요약 */}
            <div className="grid grid-cols-2 gap-4">
              {chartData.map((item, index) => (
                <div key={item.category} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm">{item.category}</span>
                  <span className="text-sm font-medium ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Pie Chart입니다. 디바이스별 접속 비율을 원형 차트로 표시하고 범례와 통계를 함께 제공합니다.",
      },
    },
  },
}

export const RadialChart: Story = {
  render: () => {
    const chartData = [
      { name: "목표 달성률", value: 73, target: 100 },
    ]

    const chartConfig = {
      progress: {
        label: "진행률",
        color: "hsl(var(--chart-1))",
      },
      remaining: {
        label: "잔여",
        color: "hsl(var(--muted))",
      },
    } satisfies ChartConfig

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[800px]">
        {/* 매출 목표 */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-lg">매출 목표</CardTitle>
            <CardDescription>이번 분기</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
              <RadialBarChart data={[{ value: 73 }]} innerRadius="60%" outerRadius="90%">
                <ChartTooltip 
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => [`${value}%`, "달성률"]}
                />
                <RadialBar 
                  dataKey="value" 
                  fill="hsl(var(--chart-1))"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                />
              </RadialBarChart>
            </ChartContainer>
            <div className="text-center mt-4">
              <div className="text-2xl font-bold">73%</div>
              <div className="text-sm text-muted-foreground">
                120억원 / 165억원
              </div>
              <Badge variant="secondary" className="mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                목표 대비 +5%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* 고객 만족도 */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-lg">고객 만족도</CardTitle>
            <CardDescription>지난 30일</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
              <RadialBarChart data={[{ value: 87 }]} innerRadius="60%" outerRadius="90%">
                <ChartTooltip 
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => [`${value}%`, "만족도"]}
                />
                <RadialBar 
                  dataKey="value" 
                  fill="hsl(var(--chart-3))"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                />
              </RadialBarChart>
            </ChartContainer>
            <div className="text-center mt-4">
              <div className="text-2xl font-bold">87%</div>
              <div className="text-sm text-muted-foreground">
                4.35 / 5.0 점
              </div>
              <Badge variant="default" className="mt-2">
                <TrendingUp className="h-3 w-3 mr-1" />
                우수
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* 서버 가동률 */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-lg">서버 가동률</CardTitle>
            <CardDescription>실시간</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px]">
              <RadialBarChart data={[{ value: 99.2 }]} innerRadius="60%" outerRadius="90%">
                <ChartTooltip 
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => [`${value}%`, "가동률"]}
                />
                <RadialBar 
                  dataKey="value" 
                  fill="hsl(var(--chart-2))"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                />
              </RadialBarChart>
            </ChartContainer>
            <div className="text-center mt-4">
              <div className="text-2xl font-bold">99.2%</div>
              <div className="text-sm text-muted-foreground">
                743시간 / 744시간
              </div>
              <Badge variant="default" className="mt-2">
                <Activity className="h-3 w-3 mr-1" />
                정상
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Radial Chart입니다. 진행률이나 달성률을 원형 게이지로 표시하여 직관적인 이해를 돕습니다.",
      },
    },
  },
}

export const ComposedChartStory: Story = {
  render: () => {
    const chartData = [
      { month: "1월", revenue: 4000, orders: 240, avgOrder: 16.7 },
      { month: "2월", revenue: 3000, orders: 198, avgOrder: 15.2 },
      { month: "3월", revenue: 2000, orders: 150, avgOrder: 13.3 },
      { month: "4월", revenue: 2780, orders: 185, avgOrder: 15.0 },
      { month: "5월", revenue: 1890, orders: 132, avgOrder: 14.3 },
      { month: "6월", revenue: 2390, orders: 168, avgOrder: 14.2 },
      { month: "7월", revenue: 3490, orders: 225, avgOrder: 15.5 },
    ]

    const chartConfig = {
      revenue: {
        label: "매출 (만원)",
        color: "hsl(var(--chart-1))",
      },
      orders: {
        label: "주문 수",
        color: "hsl(var(--chart-2))",
      },
      avgOrder: {
        label: "평균 주문액 (만원)",
        color: "hsl(var(--chart-3))",
      },
    } satisfies ChartConfig

    return (
      <Card className="w-[700px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            월별 판매 성과 분석
          </CardTitle>
          <CardDescription>
            매출, 주문 수, 평균 주문액의 복합 분석
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              
              {/* 매출 - Bar */}
              <Bar 
                yAxisId="left"
                dataKey="revenue" 
                fill="var(--color-revenue)"
                radius={[4, 4, 0, 0]}
              />
              
              {/* 주문 수 - Area */}
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="orders"
                stroke="var(--color-orders)"
                fill="var(--color-orders)"
                fillOpacity={0.3}
              />
              
              {/* 평균 주문액 - Line */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="avgOrder"
                stroke="var(--color-avgOrder)"
                strokeWidth={3}
                dot={{ fill: "var(--color-avgOrder)", strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ChartContainer>
          
          {/* 요약 통계 */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-1">18,550</div>
              <div className="text-sm text-muted-foreground">총 매출 (만원)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-2">1,298</div>
              <div className="text-sm text-muted-foreground">총 주문 수</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-chart-3">14.9</div>
              <div className="text-sm text-muted-foreground">평균 주문액 (만원)</div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Composed Chart입니다. 서로 다른 유형의 차트(Bar, Area, Line)를 조합하여 복합적인 데이터 분석을 제공합니다.",
      },
    },
  },
}

export const DashboardCharts: Story = {
  render: () => {
    // KPI 데이터
    const kpiData = [
      {
        title: "총 매출",
        value: "₩1,234,567",
        change: "+12.5%",
        trend: "up",
        icon: DollarSign,
        chartData: [65, 78, 90, 81, 88, 95, 102]
      },
      {
        title: "활성 사용자",
        value: "12,345",
        change: "+5.2%",
        trend: "up",
        icon: Users,
        chartData: [45, 52, 48, 61, 58, 65, 68]
      },
      {
        title: "전환율",
        value: "3.24%",
        change: "-0.8%",
        trend: "down",
        icon: Target,
        chartData: [3.8, 3.5, 3.2, 3.6, 3.1, 3.3, 3.24]
      },
      {
        title: "주문 수",
        value: "1,567",
        change: "+8.1%",
        trend: "up",
        icon: ShoppingCart,
        chartData: [120, 135, 148, 165, 142, 158, 167]
      }
    ]

    const chartConfig = {
      value: {
        label: "값",
        color: "hsl(var(--chart-1))",
      },
    } satisfies ChartConfig

    return (
      <div className="w-[900px] space-y-6">
        {/* KPI 카드 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiData.map((kpi, index) => (
            <Card key={kpi.title}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <kpi.icon className="h-4 w-4 text-muted-foreground" />
                  <Badge 
                    variant={kpi.trend === "up" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {kpi.trend === "up" ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {kpi.change}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-2xl font-bold">{kpi.value}</p>
                </div>
                
                {/* 미니 차트 */}
                <div className="mt-3 h-[40px]">
                  <ChartContainer config={chartConfig}>
                    <AreaChart 
                      data={kpi.chartData.map((value, i) => ({ index: i, value }))}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-value)"
                        fill="var(--color-value)"
                        fillOpacity={0.3}
                        strokeWidth={1.5}
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 메인 차트 영역 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 주간 트래픽 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>주간 트래픽</span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                visitors: { label: "방문자", color: "hsl(var(--chart-1))" },
                pageViews: { label: "페이지뷰", color: "hsl(var(--chart-2))" }
              }}>
                <RechartsLineChart data={[
                  { day: "월", visitors: 1200, pageViews: 2400 },
                  { day: "화", visitors: 1900, pageViews: 3200 },
                  { day: "수", visitors: 800, pageViews: 1600 },
                  { day: "목", visitors: 1700, pageViews: 2800 },
                  { day: "금", visitors: 2200, pageViews: 4100 },
                  { day: "토", visitors: 1100, pageViews: 1900 },
                  { day: "일", visitors: 900, pageViews: 1500 },
                ]}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="var(--color-visitors)"
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="pageViews" 
                    stroke="var(--color-pageViews)"
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* 카테고리별 매출 */}
          <Card>
            <CardHeader>
              <CardTitle>카테고리별 매출</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{
                electronics: { label: "전자제품", color: "hsl(var(--chart-1))" },
                clothing: { label: "의류", color: "hsl(var(--chart-2))" },
                books: { label: "도서", color: "hsl(var(--chart-3))" },
                home: { label: "홈&가든", color: "hsl(var(--chart-4))" }
              }}>
                <RechartsBarChart data={[
                  { category: "전자제품", value: 45 },
                  { category: "의류", value: 28 },
                  { category: "도서", value: 15 },
                  { category: "홈&가든", value: 12 },
                ]}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-electronics)" radius={4} />
                </RechartsBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "대시보드에서 사용되는 다양한 차트들의 조합입니다. KPI 카드, 미니 차트, 주요 분석 차트를 포함합니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => {
    const chartData = [
      { category: "카테고리 A", value: 30, description: "전체의 30%를 차지하는 주요 항목" },
      { category: "카테고리 B", value: 25, description: "전체의 25%를 차지하는 중요 항목" },
      { category: "카테고리 C", value: 20, description: "전체의 20%를 차지하는 보통 항목" },
      { category: "카테고리 D", value: 15, description: "전체의 15%를 차지하는 소규모 항목" },
      { category: "카테고리 E", value: 10, description: "전체의 10%를 차지하는 기타 항목" },
    ]

    const chartConfig = {
      value: {
        label: "비율 (%)",
        color: "hsl(var(--chart-1))",
      },
    } satisfies ChartConfig

    return (
      <div className="space-y-6 w-[600px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Chart 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 차트 요소 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로 툴팁 활성화</li>
            <li>스크린 리더가 데이터 값과 범례 읽기</li>
            <li>고대비 모드에서 색상 구분 지원</li>
            <li>대체 텍스트로 차트 내용 설명</li>
            <li>키보드로 모든 인터랙션 접근 가능</li>
          </ul>
        </div>

        {/* 접근성 차트 */}
        <Card>
          <CardHeader>
            <CardTitle>접근 가능한 막대 차트</CardTitle>
            <CardDescription>
              스크린 리더와 키보드 네비게이션을 완벽 지원하는 차트
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 차트 */}
            <div 
              role="img" 
              aria-label="카테고리별 비율을 보여주는 막대 차트. 카테고리 A가 30%로 가장 높고, 카테고리 E가 10%로 가장 낮습니다."
            >
              <ChartContainer config={chartConfig}>
                <RechartsBarChart 
                  data={chartData}
                  accessibilityLayer
                >
                  <XAxis 
                    dataKey="category"
                    aria-label="카테고리"
                  />
                  <YAxis 
                    aria-label="비율 (퍼센트)"
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent 
                      formatter={(value, name, props) => [
                        `${value}%`,
                        `${props.payload?.description || name}`
                      ]}
                    />}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="var(--color-value)"
                    radius={4}
                    aria-label="데이터 값"
                  />
                </RechartsBarChart>
              </ChartContainer>
            </div>

            {/* 데이터 테이블 (스크린 리더용) */}
            <div className="sr-only">
              <table>
                <caption>카테고리별 비율 데이터</caption>
                <thead>
                  <tr>
                    <th>카테고리</th>
                    <th>비율</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.map((item) => (
                    <tr key={item.category}>
                      <td>{item.category}</td>
                      <td>{item.value}%</td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 시각적 범례 */}
            <div className="space-y-2">
              <h4 className="font-medium">데이터 상세 정보</h4>
              <div className="space-y-2">
                {chartData.map((item, index) => (
                  <div 
                    key={item.category}
                    className="flex items-center gap-3 p-2 rounded bg-muted/50"
                    tabIndex={0}
                    role="listitem"
                    aria-label={`${item.category}: ${item.value}%, ${item.description}`}
                  >
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: `hsl(var(--chart-${(index % 5) + 1}))` }}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{item.category}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                    <div className="text-lg font-bold">{item.value}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 접근성 상태 */}
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  접근성 기능 활성화됨
                </span>
              </div>
              <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                <li>• ARIA 라벨과 역할 정의됨</li>
                <li>• 키보드 네비게이션 지원</li>
                <li>• 스크린 리더용 대체 콘텐츠 제공</li>
                <li>• 고대비 색상 지원</li>
                <li>• 의미있는 툴팁과 설명 포함</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Chart의 접근성 기능을 보여주는 데모입니다. ARIA 속성, 키보드 네비게이션, 스크린 리더 지원을 확인할 수 있습니다.",
      },
    },
  },
}