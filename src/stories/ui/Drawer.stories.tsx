import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  User, 
  Settings, 
  Menu, 
  ShoppingCart, 
  MessageSquare, 
  Bell,
  Search,
  Filter,
  Edit,
  Trash2,
  Star,
  Heart,
  Share,
  Download,
  Eye,
  EyeOff
} from 'lucide-react';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Overlay/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '화면 가장자리에서 슬라이드되는 패널 컴포넌트입니다. 내비게이션, 설정, 상세 정보 등을 표시하는 데 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={() => console.log('drawer opened')}>서랍 열기</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>기본 서랍</DrawerTitle>
            <DrawerDescription>
              간단한 내용을 표시하는 기본 서랍 패널입니다.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-sm text-muted-foreground">
              여기에 콘텐츠가 표시됩니다. 서랍은 모바일 기기에서 특히 유용합니다.
            </p>
          </div>
          <DrawerFooter>
            <Button>확인</Button>
            <DrawerClose asChild>
              <Button variant="outline">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const NavigationDrawer: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <Menu className="h-5 w-5" />
              메뉴
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <User className="mr-2 h-4 w-4" />
                프로필
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                설정
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                알림
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                메시지
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Search className="mr-2 h-4 w-4" />
                검색
              </Button>
            </nav>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const ShoppingCartDrawer: Story = {
  render: () => {
    const cartItems = [
      { id: 1, name: '무선 헤드폰', price: 89000, quantity: 1 },
      { id: 2, name: 'USB-C 케이블', price: 15000, quantity: 2 },
      { id: 3, name: '스마트폰 케이스', price: 25000, quantity: 1 },
    ];

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative">
            <ShoppingCart className="mr-2 h-4 w-4" />
            장바구니
            <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center">
              {cartItems.length}
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>장바구니</DrawerTitle>
              <DrawerDescription>
                {cartItems.length}개 상품이 담겨있습니다.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[300px] px-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.price.toLocaleString()}원 × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4">
              <Separator className="mb-4" />
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">총액:</span>
                <span className="font-bold text-lg">{total.toLocaleString()}원</span>
              </div>
            </div>
            <DrawerFooter>
              <Button>주문하기</Button>
              <DrawerClose asChild>
                <Button variant="outline">계속 쇼핑</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const UserProfileDrawer: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
            홍
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-medium">
                홍
              </div>
              <DrawerTitle>홍길동</DrawerTitle>
              <DrawerDescription>
                hong.gildong@example.com
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">125</div>
                <div className="text-sm text-muted-foreground">팔로워</div>
              </div>
              <div className="text-center p-3 border rounded-lg">
                <div className="font-semibold">89</div>
                <div className="text-sm text-muted-foreground">팔로잉</div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <User className="mr-2 h-4 w-4" />
                프로필 편집
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                계정 설정
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Star className="mr-2 h-4 w-4" />
                즐겨찾기
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="outline">로그아웃</Button>
            <DrawerClose asChild>
              <Button variant="ghost">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const FilterDrawer: Story = {
  render: () => {
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const brands = ['Apple', 'Samsung', 'LG', 'Sony', 'Xiaomi'];
    const categories = ['스마트폰', '헤드폰', '케이스', '충전기', '스피커'];

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            필터
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>상품 필터</DrawerTitle>
              <DrawerDescription>
                원하는 조건으로 상품을 필터링하세요.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[400px] px-4">
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">가격 범위</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-2">
                      <Input
                        placeholder="최소 가격"
                        value={priceRange[0].toLocaleString()}
                        className="text-sm"
                      />
                      <Input
                        placeholder="최대 가격"
                        value={priceRange[1].toLocaleString()}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">브랜드</Label>
                  <div className="mt-2 space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands([...selectedBrands, brand]);
                            } else {
                              setSelectedBrands(selectedBrands.filter(b => b !== brand));
                            }
                          }}
                          className="rounded"
                        />
                        <Label htmlFor={brand} className="text-sm">{brand}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">카테고리</Label>
                  <div className="mt-2 space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                          }}
                          className="rounded"
                        />
                        <Label htmlFor={category} className="text-sm">{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
            <DrawerFooter>
              <Button>필터 적용</Button>
              <Button variant="outline" onClick={() => {
                setPriceRange([0, 100000]);
                setSelectedBrands([]);
                setSelectedCategories([]);
              }}>
                초기화
              </Button>
              <DrawerClose asChild>
                <Button variant="ghost">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const MessageDrawer: Story = {
  render: () => {
    const messages = [
      {
        id: 1,
        sender: '김철수',
        message: '안녕하세요! 오늘 회의 일정이 어떻게 되나요?',
        time: '2분 전',
        unread: true,
      },
      {
        id: 2,
        sender: '이영희',
        message: '프로젝트 문서를 공유드립니다.',
        time: '10분 전',
        unread: true,
      },
      {
        id: 3,
        sender: '박민수',
        message: '수고 많으셨습니다!',
        time: '1시간 전',
        unread: false,
      },
    ];

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative">
            <MessageSquare className="mr-2 h-4 w-4" />
            메시지
            <Badge className="absolute -top-2 -right-2 h-6 w-6 p-0 flex items-center justify-center">
              2
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>메시지</DrawerTitle>
              <DrawerDescription>
                {messages.filter(m => m.unread).length}개의 읽지 않은 메시지
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[350px] px-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-3 border rounded-lg cursor-pointer hover:bg-accent ${
                      message.unread ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs font-medium">
                          {message.sender[0]}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{message.sender}</div>
                          <div className="text-xs text-muted-foreground">{message.time}</div>
                        </div>
                      </div>
                      {message.unread && (
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground line-clamp-2">
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4">
              <Button className="w-full mb-2">
                <MessageSquare className="mr-2 h-4 w-4" />
                새 메시지 작성
              </Button>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">닫기</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const SettingsDrawer: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('ko');

    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            설정
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>앱 설정</DrawerTitle>
              <DrawerDescription>
                애플리케이션 환경을 설정하세요.
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[400px] px-4">
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">알림 설정</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">푸시 알림</div>
                        <div className="text-xs text-muted-foreground">
                          새로운 메시지 및 업데이트 알림
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setNotifications(!notifications)}
                      >
                        {notifications ? (
                          <Eye className="h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">화면 설정</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">다크 모드</div>
                        <div className="text-xs text-muted-foreground">
                          어두운 테마 사용
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDarkMode(!darkMode)}
                      >
                        {darkMode ? '켜짐' : '꺼짐'}
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">언어 설정</Label>
                  <div className="mt-2">
                    <select 
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full p-2 border rounded-md text-sm"
                    >
                      <option value="ko">한국어</option>
                      <option value="en">English</option>
                      <option value="ja">日本語</option>
                      <option value="zh">中文</option>
                    </select>
                  </div>
                </div>

                <Separator />

                <div>
                  <Label className="text-base font-medium">계정</Label>
                  <div className="mt-2 space-y-2">
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      계정 정보
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      데이터 다운로드
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-red-600" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      계정 삭제
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
            <DrawerFooter>
              <Button>설정 저장</Button>
              <DrawerClose asChild>
                <Button variant="outline">취소</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">접근성 기능</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>
          <li>• 스크린 리더 호환성</li>
          <li>• 포커스 관리 및 트랩</li>
          <li>• ARIA 레이블 및 설명</li>
          <li>• 모바일 터치 제스처 지원</li>
        </ul>
      </div>
      
      <Drawer>
        <DrawerTrigger asChild>
          <Button 
            variant="outline"
            aria-describedby="drawer-description"
          >
            접근성 데모 열기
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>접근성 데모</DrawerTitle>
              <DrawerDescription id="drawer-description">
                이 서랍은 완전한 키보드 접근성과 스크린 리더 지원을 제공합니다.
                Tab 키로 요소들을 탐색하고, Enter로 활성화, Escape로 닫을 수 있습니다.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-4">
              <div>
                <Label htmlFor="demo-input">이름</Label>
                <Input 
                  id="demo-input"
                  placeholder="이름을 입력하세요"
                  aria-describedby="demo-input-help"
                />
                <p id="demo-input-help" className="text-xs text-muted-foreground mt-1">
                  2-20자 사이로 입력해주세요
                </p>
              </div>
              
              <div>
                <Label htmlFor="demo-textarea">메시지</Label>
                <Textarea 
                  id="demo-textarea"
                  placeholder="메시지를 입력하세요"
                  rows={3}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">접근성</Badge>
                <Badge variant="outline">키보드 지원</Badge>
                <Badge variant="default">스크린 리더</Badge>
              </div>
            </div>
            <DrawerFooter>
              <Button 
                aria-describedby="submit-help"
              >
                제출
              </Button>
              <p id="submit-help" className="sr-only">
                폼을 제출하려면 엔터를 누르세요
              </p>
              <DrawerClose asChild>
                <Button variant="outline">
                  취소 (Escape)
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      
      <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
        💡 팁: Tab 키로 순서대로 이동, Shift+Tab으로 역순 이동, Enter로 활성화, Escape로 닫기
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 데모입니다.',
      },
    },
  },
};