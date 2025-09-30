import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { 
  Check, X, Minus, Mail, Bell, Shield, Star, Heart, 
  User, Settings, Eye, EyeOff, Lock, Unlock, Download,
  Calendar, MapPin, Phone, CreditCard, Tag, Bookmark
} from "lucide-react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const meta: Meta<typeof Checkbox> = {
  title: "UI/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
사용자가 여러 선택지 중 하나 이상을 선택할 수 있는 Checkbox 컴포넌트입니다. 폼에서 동의, 설정, 필터링 등에 사용됩니다.

## 주요 기능
- **다중 선택**: 여러 옵션을 동시에 선택 가능
- **3가지 상태**: checked, unchecked, indeterminate 지원
- **접근성**: WAI-ARIA 표준 준수, 스크린 리더 완벽 지원
- **키보드 네비게이션**: Tab, Space, Enter 키 완벽 지원
- **라벨 연동**: Label 클릭으로 체크박스 제어 가능
- **폼 통합**: HTML5 form validation과 완벽 호환
- **커스터마이징**: 다양한 크기와 스타일 지원

## 사용법
\`\`\`tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// 기본 사용법
<Checkbox id="terms" />

// 라벨과 함께
<div className="flex items-center space-x-2">
  <Checkbox id="notifications" />
  <Label htmlFor="notifications">알림 받기</Label>
</div>

// 제어된 컴포넌트
const [checked, setChecked] = useState(false)
<Checkbox 
  checked={checked} 
  onCheckedChange={setChecked}
/>

// Indeterminate 상태
<Checkbox 
  checked="indeterminate"
  onCheckedChange={handleChange}
/>
\`\`\`

## Props
- \`checked\`: 체크 상태 (boolean | "indeterminate")
- \`onCheckedChange\`: 상태 변경 핸들러
- \`disabled\`: 비활성화 상태
- \`required\`: 필수 선택 여부
- \`name\`: 폼 필드 이름
- \`value\`: 폼 값
- \`id\`: 요소 ID (라벨 연결용)

## 상태
- **Unchecked**: 선택되지 않은 기본 상태
- **Checked**: 선택된 상태 (체크 표시)
- **Indeterminate**: 부분 선택 상태 (하위 항목 일부만 선택)
- **Disabled**: 비활성화된 상태

## 접근성
- **ARIA 역할**: \`checkbox\` 역할로 스크린 리더 인식
- **키보드 지원**: Space/Enter로 토글, Tab으로 이동
- **라벨 연결**: \`htmlFor\`와 \`id\`로 라벨과 연결
- **상태 안내**: checked, unchecked, mixed 상태를 명확히 전달
- **그룹핑**: fieldset과 legend로 관련 체크박스 그룹화

## 사용 사례
- **약관 동의**: 이용약관, 개인정보처리방침 동의
- **설정 옵션**: 알림, 보안, 표시 설정
- **필터링**: 검색 결과 필터, 카테고리 선택
- **할일 목록**: 완료/미완료 상태 표시
- **권한 설정**: 사용자 권한, 역할 선택
- **선택 목록**: 여러 항목 일괄 선택

## 모범 사례
- 모든 체크박스에 의미있는 라벨 제공
- 그룹 체크박스는 fieldset으로 묶기
- Indeterminate 상태는 부분 선택에만 사용
- 긴 목록에서는 "전체 선택" 기능 제공
- 필수 선택 항목은 명확히 표시
- 비활성화 사유를 툴팁이나 설명으로 제공
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description: "체크박스 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
    },
    required: {
      control: "boolean",
      description: "필수 선택 여부",
    },
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox id="story-checkbox" {...args} />
      <Label htmlFor="story-checkbox">체크박스 라벨</Label>
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: "기본 Checkbox 컴포넌트입니다. 클릭하거나 스페이스바로 토글할 수 있습니다.",
      },
    },
  },
}

export const CheckedStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="unchecked" checked={false} />
        <Label htmlFor="unchecked">선택되지 않음</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" checked={true} />
        <Label htmlFor="checked">선택됨</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="indeterminate" checked="indeterminate" />
        <Label htmlFor="indeterminate">부분 선택 (Indeterminate)</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" disabled={true} checked={false} />
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
          비활성화 (선택 안됨)
        </Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled={true} checked={true} />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          비활성화 (선택됨)
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox의 다양한 상태를 보여줍니다. checked, unchecked, indeterminate, disabled 상태를 확인할 수 있습니다.",
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="email" />
        <Mail className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="email">이메일 알림 받기</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="push" />
        <Bell className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="push">푸시 알림 받기</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="security" />
        <Shield className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="security">보안 알림 받기</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="marketing" />
        <Star className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="marketing">마케팅 정보 받기</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "아이콘과 함께 사용하는 Checkbox입니다. 시각적으로 더 명확한 의미 전달이 가능합니다.",
      },
    },
  },
}

export const TermsAndConditions: Story = {
  render: () => {
    const [agreements, setAgreements] = React.useState({
      terms: false,
      privacy: false,
      marketing: false,
      age: false
    })
    
    const allRequired = agreements.terms && agreements.privacy && agreements.age
    const allChecked = allRequired && agreements.marketing
    
    const handleAllChange = (checked: boolean) => {
      setAgreements({
        terms: checked,
        privacy: checked,
        marketing: checked,
        age: checked
      })
    }
    
    const handleSingleChange = (key: string) => (checked: boolean) => {
      setAgreements(prev => ({ ...prev, [key]: checked }))
    }

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>회원가입 약관 동의</CardTitle>
          <CardDescription>
            서비스 이용을 위해 필요한 약관에 동의해주세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b">
            <Checkbox 
              id="all-agreements"
              checked={allChecked ? true : allRequired ? "indeterminate" : false}
              onCheckedChange={handleAllChange}
            />
            <Label htmlFor="all-agreements" className="font-medium">
              전체 동의
            </Label>
          </div>
          
          <div className="space-y-3 ml-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms"
                  checked={agreements.terms}
                  onCheckedChange={handleSingleChange('terms')}
                />
                <Label htmlFor="terms">
                  이용약관 동의 <span className="text-red-500">*</span>
                </Label>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                보기
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="privacy"
                  checked={agreements.privacy}
                  onCheckedChange={handleSingleChange('privacy')}
                />
                <Label htmlFor="privacy">
                  개인정보처리방침 동의 <span className="text-red-500">*</span>
                </Label>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                보기
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="marketing"
                  checked={agreements.marketing}
                  onCheckedChange={handleSingleChange('marketing')}
                />
                <Label htmlFor="marketing">
                  마케팅 정보 수신 동의 (선택)
                </Label>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                보기
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="age"
                checked={agreements.age}
                onCheckedChange={handleSingleChange('age')}
              />
              <Label htmlFor="age">
                만 14세 이상입니다 <span className="text-red-500">*</span>
              </Label>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              className="w-full" 
              disabled={!allRequired}
            >
              회원가입 계속하기
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "약관 동의 폼의 Checkbox 사용 예시입니다. 전체 선택, 부분 선택, 필수/선택 구분을 보여줍니다.",
      },
    },
  },
}

export const NotificationSettings: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState({
      email: {
        news: true,
        updates: false,
        security: true,
        marketing: false
      },
      push: {
        messages: true,
        mentions: true,
        likes: false,
        comments: true
      },
      sms: {
        security: true,
        reminders: false,
        promotions: false
      }
    })

    const updateNotification = (category: string, key: string) => (checked: boolean) => {
      setNotifications(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [key]: checked
        }
      }))
    }

    return (
      <div className="w-[500px] space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림 설정
            </CardTitle>
            <CardDescription>
              받고 싶은 알림 유형을 선택해주세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 이메일 알림 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <h3 className="font-medium">이메일 알림</h3>
              </div>
              <div className="ml-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="email-news"
                    checked={notifications.email.news}
                    onCheckedChange={updateNotification('email', 'news')}
                  />
                  <Label htmlFor="email-news">뉴스레터</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="email-updates"
                    checked={notifications.email.updates}
                    onCheckedChange={updateNotification('email', 'updates')}
                  />
                  <Label htmlFor="email-updates">제품 업데이트</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="email-security"
                    checked={notifications.email.security}
                    onCheckedChange={updateNotification('email', 'security')}
                  />
                  <Label htmlFor="email-security">보안 알림</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="email-marketing"
                    checked={notifications.email.marketing}
                    onCheckedChange={updateNotification('email', 'marketing')}
                  />
                  <Label htmlFor="email-marketing">마케팅 정보</Label>
                </div>
              </div>
            </div>

            {/* 푸시 알림 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <h3 className="font-medium">푸시 알림</h3>
              </div>
              <div className="ml-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="push-messages"
                    checked={notifications.push.messages}
                    onCheckedChange={updateNotification('push', 'messages')}
                  />
                  <Label htmlFor="push-messages">새 메시지</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="push-mentions"
                    checked={notifications.push.mentions}
                    onCheckedChange={updateNotification('push', 'mentions')}
                  />
                  <Label htmlFor="push-mentions">멘션</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="push-likes"
                    checked={notifications.push.likes}
                    onCheckedChange={updateNotification('push', 'likes')}
                  />
                  <Label htmlFor="push-likes">좋아요</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="push-comments"
                    checked={notifications.push.comments}
                    onCheckedChange={updateNotification('push', 'comments')}
                  />
                  <Label htmlFor="push-comments">댓글</Label>
                </div>
              </div>
            </div>

            {/* SMS 알림 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <h3 className="font-medium">SMS 알림</h3>
              </div>
              <div className="ml-6 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sms-security"
                    checked={notifications.sms.security}
                    onCheckedChange={updateNotification('sms', 'security')}
                  />
                  <Label htmlFor="sms-security">보안 알림</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sms-reminders"
                    checked={notifications.sms.reminders}
                    onCheckedChange={updateNotification('sms', 'reminders')}
                  />
                  <Label htmlFor="sms-reminders">일정 리마인더</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sms-promotions"
                    checked={notifications.sms.promotions}
                    onCheckedChange={updateNotification('sms', 'promotions')}
                  />
                  <Label htmlFor="sms-promotions">프로모션 정보</Label>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button className="flex-1">설정 저장</Button>
              <Button variant="outline">초기화</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "알림 설정 폼의 Checkbox 사용 예시입니다. 카테고리별로 그룹화된 설정 옵션을 보여줍니다.",
      },
    },
  },
}

export const TodoList: Story = {
  render: () => {
    const [todos, setTodos] = React.useState([
      { id: 1, text: "프로젝트 계획서 작성", completed: true },
      { id: 2, text: "디자인 시스템 구축", completed: true },
      { id: 3, text: "API 개발", completed: false },
      { id: 4, text: "프론트엔드 구현", completed: false },
      { id: 5, text: "테스트 코드 작성", completed: false },
      { id: 6, text: "배포 준비", completed: false }
    ])

    const completedCount = todos.filter(todo => todo.completed).length
    const totalCount = todos.length
    const allCompleted = completedCount === totalCount
    const someCompleted = completedCount > 0 && completedCount < totalCount

    const toggleAll = (checked: boolean) => {
      setTodos(todos.map(todo => ({ ...todo, completed: checked })))
    }

    const toggleTodo = (id: number) => (checked: boolean) => {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: checked } : todo
      ))
    }

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>프로젝트 할 일 목록</span>
            <span className="text-sm font-normal text-muted-foreground">
              {completedCount}/{totalCount} 완료
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b">
            <Checkbox 
              id="toggle-all"
              checked={allCompleted ? true : someCompleted ? "indeterminate" : false}
              onCheckedChange={toggleAll}
            />
            <Label htmlFor="toggle-all" className="font-medium">
              전체 선택
            </Label>
          </div>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div key={todo.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`todo-${todo.id}`}
                  checked={todo.completed}
                  onCheckedChange={toggleTodo(todo.id)}
                />
                <Label 
                  htmlFor={`todo-${todo.id}`}
                  className={`flex-1 ${todo.completed ? 'line-through text-muted-foreground' : ''}`}
                >
                  {todo.text}
                </Label>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>진행률</span>
              <span>{Math.round((completedCount / totalCount) * 100)}%</span>
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary rounded-full h-2 transition-all duration-300"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "할 일 목록의 Checkbox 사용 예시입니다. 개별 체크, 전체 선택, 진행률 표시 기능을 포함합니다.",
      },
    },
  },
}

export const FilterOptions: Story = {
  render: () => {
    const [filters, setFilters] = React.useState({
      categories: {
        electronics: false,
        clothing: true,
        books: false,
        home: true,
        sports: false
      },
      priceRange: {
        under50: false,
        between50_100: true,
        between100_200: false,
        over200: false
      },
      brands: {
        apple: true,
        samsung: false,
        nike: true,
        adidas: false
      },
      features: {
        freeShipping: true,
        inStock: true,
        onSale: false,
        newArrival: false
      }
    })

    const updateFilter = (category: string, key: string) => (checked: boolean) => {
      setFilters(prev => ({
        ...prev,
        [category]: {
          ...prev[category as keyof typeof prev],
          [key]: checked
        }
      }))
    }

    const clearAllFilters = () => {
      setFilters({
        categories: {
          electronics: false,
          clothing: false,
          books: false,
          home: false,
          sports: false
        },
        priceRange: {
          under50: false,
          between50_100: false,
          between100_200: false,
          over200: false
        },
        brands: {
          apple: false,
          samsung: false,
          nike: false,
          adidas: false
        },
        features: {
          freeShipping: false,
          inStock: false,
          onSale: false,
          newArrival: false
        }
      })
    }

    const activeFiltersCount = Object.values(filters).reduce((total, category) => 
      total + Object.values(category).filter(Boolean).length, 0
    )

    return (
      <div className="w-[300px] space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>필터</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-normal text-muted-foreground">
                  {activeFiltersCount}개 선택
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllFilters}
                  disabled={activeFiltersCount === 0}
                >
                  초기화
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 카테고리 */}
            <div className="space-y-3">
              <h3 className="font-medium">카테고리</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="electronics"
                    checked={filters.categories.electronics}
                    onCheckedChange={updateFilter('categories', 'electronics')}
                  />
                  <Label htmlFor="electronics">전자제품</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="clothing"
                    checked={filters.categories.clothing}
                    onCheckedChange={updateFilter('categories', 'clothing')}
                  />
                  <Label htmlFor="clothing">의류</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="books"
                    checked={filters.categories.books}
                    onCheckedChange={updateFilter('categories', 'books')}
                  />
                  <Label htmlFor="books">도서</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="home"
                    checked={filters.categories.home}
                    onCheckedChange={updateFilter('categories', 'home')}
                  />
                  <Label htmlFor="home">홈&가든</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="sports"
                    checked={filters.categories.sports}
                    onCheckedChange={updateFilter('categories', 'sports')}
                  />
                  <Label htmlFor="sports">스포츠</Label>
                </div>
              </div>
            </div>

            {/* 가격 범위 */}
            <div className="space-y-3">
              <h3 className="font-medium">가격 범위</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="under50"
                    checked={filters.priceRange.under50}
                    onCheckedChange={updateFilter('priceRange', 'under50')}
                  />
                  <Label htmlFor="under50">5만원 미만</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="between50_100"
                    checked={filters.priceRange.between50_100}
                    onCheckedChange={updateFilter('priceRange', 'between50_100')}
                  />
                  <Label htmlFor="between50_100">5만원 - 10만원</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="between100_200"
                    checked={filters.priceRange.between100_200}
                    onCheckedChange={updateFilter('priceRange', 'between100_200')}
                  />
                  <Label htmlFor="between100_200">10만원 - 20만원</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="over200"
                    checked={filters.priceRange.over200}
                    onCheckedChange={updateFilter('priceRange', 'over200')}
                  />
                  <Label htmlFor="over200">20만원 이상</Label>
                </div>
              </div>
            </div>

            {/* 특별 옵션 */}
            <div className="space-y-3">
              <h3 className="font-medium">특별 옵션</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="freeShipping"
                    checked={filters.features.freeShipping}
                    onCheckedChange={updateFilter('features', 'freeShipping')}
                  />
                  <Label htmlFor="freeShipping">무료배송</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="inStock"
                    checked={filters.features.inStock}
                    onCheckedChange={updateFilter('features', 'inStock')}
                  />
                  <Label htmlFor="inStock">재고 있음</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="onSale"
                    checked={filters.features.onSale}
                    onCheckedChange={updateFilter('features', 'onSale')}
                  />
                  <Label htmlFor="onSale">할인 중</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="newArrival"
                    checked={filters.features.newArrival}
                    onCheckedChange={updateFilter('features', 'newArrival')}
                  />
                  <Label htmlFor="newArrival">신상품</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "필터링 옵션의 Checkbox 사용 예시입니다. 카테고리별 필터링과 선택된 필터 개수 표시를 포함합니다.",
      },
    },
  },
}

export const AccessibilityDemo: Story = {
  render: () => {
    const [preferences, setPreferences] = React.useState({
      highContrast: false,
      largeText: true,
      screenReader: false,
      keyboardNav: true,
      animations: false
    })

    const updatePreference = (key: string) => (checked: boolean) => {
      setPreferences(prev => ({ ...prev, [key]: checked }))
    }

    return (
      <div className="space-y-6 w-[500px]">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">접근성 데모</h3>
          <p className="text-sm text-muted-foreground">
            Checkbox 컴포넌트의 접근성 기능을 확인해보세요:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Tab</kbd>으로 체크박스 간 이동</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Space</kbd>로 체크박스 토글</li>
            <li><kbd className="px-2 py-1 bg-muted rounded text-xs">Enter</kbd>로도 선택 가능</li>
            <li>라벨 클릭으로 체크박스 제어</li>
            <li>스크린 리더가 상태와 라벨을 명확히 안내</li>
            <li>그룹화된 체크박스는 fieldset으로 구조화</li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>접근성 설정</CardTitle>
            <CardDescription>
              사용하기 편한 환경으로 설정을 조정해보세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <fieldset className="space-y-4">
              <legend className="sr-only">접근성 환경 설정</legend>
              
              <div className="space-y-3">
                <h4 className="font-medium">시각적 접근성</h4>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="high-contrast"
                      checked={preferences.highContrast}
                      onCheckedChange={updatePreference('highContrast')}
                      aria-describedby="high-contrast-desc"
                    />
                    <Label htmlFor="high-contrast">고대비 모드</Label>
                  </div>
                  <p id="high-contrast-desc" className="text-sm text-muted-foreground ml-6">
                    텍스트와 배경의 대비를 높여 가독성을 향상시킵니다.
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="large-text"
                      checked={preferences.largeText}
                      onCheckedChange={updatePreference('largeText')}
                      aria-describedby="large-text-desc"
                    />
                    <Label htmlFor="large-text">큰 글씨</Label>
                  </div>
                  <p id="large-text-desc" className="text-sm text-muted-foreground ml-6">
                    모든 텍스트 크기를 120%로 확대합니다.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">보조 기술</h4>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="screen-reader"
                      checked={preferences.screenReader}
                      onCheckedChange={updatePreference('screenReader')}
                      aria-describedby="screen-reader-desc"
                    />
                    <Label htmlFor="screen-reader">스크린 리더 최적화</Label>
                  </div>
                  <p id="screen-reader-desc" className="text-sm text-muted-foreground ml-6">
                    스크린 리더 사용자를 위한 추가 설명과 안내를 제공합니다.
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="keyboard-nav"
                      checked={preferences.keyboardNav}
                      onCheckedChange={updatePreference('keyboardNav')}
                      aria-describedby="keyboard-nav-desc"
                    />
                    <Label htmlFor="keyboard-nav">키보드 네비게이션 강화</Label>
                  </div>
                  <p id="keyboard-nav-desc" className="text-sm text-muted-foreground ml-6">
                    키보드 포커스를 더 명확하게 표시하고 단축키를 활성화합니다.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">동작 및 애니메이션</h4>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="animations"
                      checked={preferences.animations}
                      onCheckedChange={updatePreference('animations')}
                      aria-describedby="animations-desc"
                    />
                    <Label htmlFor="animations">애니메이션 줄이기</Label>
                  </div>
                  <p id="animations-desc" className="text-sm text-muted-foreground ml-6">
                    멀미나 주의력 분산을 방지하기 위해 움직임을 최소화합니다.
                  </p>
                </div>
              </div>
            </fieldset>

            <div className="flex gap-3 pt-6 border-t">
              <Button className="flex-1">설정 저장</Button>
              <Button variant="outline">기본값으로 복원</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox의 접근성 기능을 보여주는 데모입니다. 키보드 네비게이션, ARIA 속성, 스크린 리더 지원을 확인할 수 있습니다.",
      },
    },
  },
}