import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Menu, 
  Settings, 
  User, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Calendar, 
  Clock, 
  Bell, 
  Heart, 
  Star, 
  Bookmark, 
  Share2, 
  Download, 
  Upload, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Save, 
  Filter, 
  Search, 
  SortAsc, 
  SortDesc, 
  Grid, 
  List, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  DollarSign, 
  CreditCard, 
  ShoppingCart as ShoppingCartIcon, 
  Package, 
  Truck, 
  MessageSquare, 
  FileText, 
  Image, 
  Music, 
  Video, 
  Home, 
  Store, 
  Coffee, 
  Pizza, 
  Globe, 
  Wifi, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Monitor, 
  Camera, 
  Mic, 
  Volume2, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Shuffle, 
  Repeat, 
  ThumbsUp, 
  ThumbsDown, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Shield, 
  Key, 
  AlertCircle, 
  Info, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  Zap, 
  Target, 
  Award, 
  Trophy, 
  Medal, 
  Crown, 
  Gem, 
  Flame, 
  Sparkles, 
  Sun, 
  Moon, 
  Cloud, 
  CloudRain, 
  Umbrella, 
  Snowflake,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ExternalLink,
  Link,
  Copy,
  Clipboard,
  Archive,
  Database,
  Server,
  Cloud as CloudIcon,
  Folder,
  FolderOpen,
  File,
  Files,
  Layers,
  Command,
  Terminal
} from 'lucide-react';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Overlay/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '화면 가장자리에서 슬라이드되어 나타나는 오버레이 패널 컴포넌트입니다. 모바일에서 주로 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">시트 열기</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>기본 시트</SheetTitle>
          <SheetDescription>
            이것은 기본 시트 컴포넌트입니다. 여기에 콘텐츠를 추가할 수 있습니다.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="이름을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" placeholder="이메일을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">메시지</Label>
              <Textarea id="message" placeholder="메시지를 입력하세요" />
            </div>
            <Button className="w-full">
              <Save className="mr-2 h-4 w-4" />
              저장
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const NavigationMenu: Story = {
  render: () => {
    const menuItems = [
      { icon: Home, label: '홈', count: null, active: true },
      { icon: User, label: '프로필', count: null, active: false },
      { icon: MessageSquare, label: '메시지', count: 3, active: false },
      { icon: Bell, label: '알림', count: 12, active: false },
      { icon: Settings, label: '설정', count: null, active: false },
    ];

    const sections = [
      {
        title: '즐겨찾기',
        items: [
          { icon: Star, label: '즐겨찾기 항목', count: 5 },
          { icon: Bookmark, label: '저장된 게시물', count: 23 },
          { icon: Heart, label: '좋아요', count: 156 },
        ],
      },
      {
        title: '최근 활동',
        items: [
          { icon: Clock, label: '최근 본 항목', count: 8 },
          { icon: Download, label: '다운로드', count: 4 },
          { icon: Share2, label: '공유한 항목', count: 12 },
        ],
      },
    ];

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu className="mr-2 h-4 w-4" />
            메뉴
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              홍길동님
            </SheetTitle>
            <SheetDescription>
              메뉴에서 원하는 기능을 선택하세요
            </SheetDescription>
          </SheetHeader>
          
          <ScrollArea className="h-full py-4">
            <div className="space-y-6">
              {/* 메인 메뉴 */}
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Button
                      key={item.label}
                      variant={item.active ? "secondary" : "ghost"}
                      className="w-full justify-start h-12"
                    >
                      <IconComponent className="mr-3 h-5 w-5" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.count && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.count}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
              </div>

              <Separator />

              {/* 섹션별 메뉴 */}
              {sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground px-2">
                    {section.title}
                  </h4>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Button
                          key={item.label}
                          variant="ghost"
                          className="w-full justify-start h-10"
                        >
                          <IconComponent className="mr-3 h-4 w-4" />
                          <span className="flex-1 text-left text-sm">{item.label}</span>
                          {item.count && (
                            <Badge variant="outline" className="ml-auto text-xs">
                              {item.count}
                            </Badge>
                          )}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <Separator />

              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start h-10">
                  <HelpCircle className="mr-3 h-4 w-4" />
                  <span>도움말</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start h-10 text-red-600">
                  <X className="mr-3 h-4 w-4" />
                  <span>로그아웃</span>
                </Button>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  },
};

export const UserProfile: Story = {
  render: () => {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
      name: '홍길동',
      email: 'hong@example.com',
      phone: '010-1234-5678',
      location: '서울, 대한민국',
      bio: '안녕하세요! 프론트엔드 개발자입니다.',
    });

    const stats = [
      { label: '팔로워', value: '1,234', icon: Users },
      { label: '팔로잉', value: '567', icon: User },
      { label: '게시물', value: '89', icon: FileText },
      { label: '좋아요', value: '2,345', icon: Heart },
    ];

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <User className="mr-2 h-4 w-4" />
            프로필 보기
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <span>사용자 프로필</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditMode(!editMode)}
              >
                <Edit className="h-4 w-4" />
              </Button>
            </SheetTitle>
            <SheetDescription>
              프로필 정보를 확인하고 수정할 수 있습니다
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="h-full py-4">
            <div className="space-y-6">
              {/* 프로필 이미지 */}
              <div className="flex flex-col items-center space-y-3">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {formData.name.charAt(0)}
                </div>
                {editMode && (
                  <Button size="sm" variant="outline">
                    <Camera className="mr-2 h-4 w-4" />
                    사진 변경
                  </Button>
                )}
              </div>

              {/* 통계 */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => {
                  const IconComponent = stat.icon;
                  return (
                    <Card key={stat.label}>
                      <CardContent className="flex flex-col items-center p-4">
                        <IconComponent className="h-5 w-5 text-muted-foreground mb-2" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Separator />

              {/* 프로필 정보 */}
              <div className="space-y-4">
                <h4 className="font-medium">개인 정보</h4>
                
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name">이름</Label>
                    {editMode ? (
                      <Input
                        id="edit-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{formData.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-email">이메일</Label>
                    {editMode ? (
                      <Input
                        id="edit-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{formData.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-phone">전화번호</Label>
                    {editMode ? (
                      <Input
                        id="edit-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{formData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-location">위치</Label>
                    {editMode ? (
                      <Input
                        id="edit-location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2 p-2 bg-muted rounded">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{formData.location}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-bio">소개</Label>
                    {editMode ? (
                      <Textarea
                        id="edit-bio"
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={3}
                      />
                    ) : (
                      <div className="p-2 bg-muted rounded">
                        <span className="text-sm">{formData.bio}</span>
                      </div>
                    )}
                  </div>
                </div>

                {editMode && (
                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => setEditMode(false)}>
                      <Save className="mr-2 h-4 w-4" />
                      저장
                    </Button>
                    <Button variant="outline" onClick={() => setEditMode(false)}>
                      취소
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  },
};

export const ShoppingCart: Story = {
  render: () => {
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: '스마트폰 케이스',
        price: 29900,
        quantity: 2,
        image: '📱',
        option: '블랙',
      },
      {
        id: 2,
        name: '블루투스 이어폰',
        price: 89000,
        quantity: 1,
        image: '🎧',
        option: '화이트',
      },
      {
        id: 3,
        name: '무선 충전기',
        price: 45000,
        quantity: 1,
        image: '🔌',
        option: '10W',
      },
    ]);

    const updateQuantity = (id: number, change: number) => {
      setCartItems(items =>
        items.map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        ).filter(item => item.quantity > 0)
      );
    };

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            <ShoppingCartIcon className="mr-2 h-4 w-4" />
            장바구니
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {itemCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <ShoppingCartIcon className="h-5 w-5" />
              장바구니 ({itemCount}개)
            </SheetTitle>
            <SheetDescription>
              선택하신 상품을 확인하고 주문하세요
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-full py-4">
            <ScrollArea className="flex-1">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <ShoppingCartIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">장바구니가 비어있습니다</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-2xl">
                            {item.image}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">{item.option}</p>
                            <p className="font-semibold text-sm mt-1">
                              {item.price.toLocaleString()}원
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm w-6 text-center">{item.quantity}</span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 pt-3 border-t">
                          <span className="text-sm text-muted-foreground">소계</span>
                          <span className="font-semibold">
                            {(item.price * item.quantity).toLocaleString()}원
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </ScrollArea>

            {cartItems.length > 0 && (
              <div className="border-t pt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>상품 금액</span>
                    <span>{total.toLocaleString()}원</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>배송비</span>
                    <span>무료</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>총 결제 금액</span>
                    <span>{total.toLocaleString()}원</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  <CreditCard className="mr-2 h-4 w-4" />
                  주문하기
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const FilterPanel: Story = {
  render: () => {
    const [filters, setFilters] = useState({
      priceRange: [0, 100000],
      categories: [],
      brands: [],
      rating: 0,
      inStock: true,
    });

    const categories = [
      '전자제품', '의류', '도서', '홈&리빙', '스포츠', '뷰티'
    ];

    const brands = [
      'Apple', 'Samsung', 'LG', 'Sony', 'Nike', 'Adidas'
    ];

    const ratings = [5, 4, 3, 2, 1];

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            필터
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              상품 필터
            </SheetTitle>
            <SheetDescription>
              원하는 조건으로 상품을 필터링하세요
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="h-full py-4">
            <div className="space-y-6">
              {/* 가격 범위 */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  가격 범위
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="최소"
                      value={filters.priceRange[0]}
                      className="flex-1"
                    />
                    <span className="text-muted-foreground">~</span>
                    <Input
                      type="number"
                      placeholder="최대"
                      value={filters.priceRange[1]}
                      className="flex-1"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {filters.priceRange[0].toLocaleString()}원 - {filters.priceRange[1].toLocaleString()}원
                  </div>
                </div>
              </div>

              <Separator />

              {/* 카테고리 */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Grid className="h-4 w-4" />
                  카테고리
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* 브랜드 */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  브랜드
                </h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* 평점 */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  평점
                </h4>
                <div className="space-y-2">
                  {ratings.map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        className="rounded border-gray-300"
                      />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: rating }, (_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm">이상</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <Separator />

              {/* 재고 여부 */}
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  재고 상태
                </h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm">재고 있는 상품만</span>
                </label>
              </div>

              <Separator />

              {/* 버튼 */}
              <div className="space-y-2">
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" />
                  필터 적용
                </Button>
                <Button variant="outline" className="w-full">
                  <X className="mr-2 h-4 w-4" />
                  초기화
                </Button>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  },
};

export const NotificationPanel: Story = {
  render: () => {
    const [notifications, setNotifications] = useState([
      {
        id: 1,
        type: 'message',
        title: '새 메시지',
        description: '김철수님이 메시지를 보냈습니다',
        time: '2분 전',
        read: false,
        icon: MessageSquare,
      },
      {
        id: 2,
        type: 'like',
        title: '좋아요',
        description: '이영희님이 회원님의 게시물을 좋아합니다',
        time: '5분 전',
        read: false,
        icon: Heart,
      },
      {
        id: 3,
        type: 'comment',
        title: '새 댓글',
        description: '박민수님이 댓글을 달았습니다',
        time: '10분 전',
        read: true,
        icon: MessageSquare,
      },
      {
        id: 4,
        type: 'follow',
        title: '새 팔로워',
        description: '최지영님이 회원님을 팔로우하기 시작했습니다',
        time: '30분 전',
        read: true,
        icon: Users,
      },
      {
        id: 5,
        type: 'system',
        title: '시스템 알림',
        description: '계정 보안 설정이 업데이트되었습니다',
        time: '1시간 전',
        read: true,
        icon: Shield,
      },
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAsRead = (id: number) => {
      setNotifications(notifications.map(n => 
        n.id === id ? { ...n, read: true } : n
      ));
    };

    const markAllAsRead = () => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            <Bell className="mr-2 h-4 w-4" />
            알림
            {unreadCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                알림
              </div>
              {unreadCount > 0 && (
                <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                  모두 읽음
                </Button>
              )}
            </SheetTitle>
            <SheetDescription>
              {unreadCount > 0 ? `${unreadCount}개의 새 알림` : '새 알림이 없습니다'}
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="h-full py-4">
            <div className="space-y-2">
              {notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted ${
                      !notification.read ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 rounded-full">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                            {notification.title}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.description}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 트랩 및 관리</li>
            <li>• 모달 오버레이 적절한 처리</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline"
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              aria-describedby="sheet-description"
            >
              <Settings className="mr-2 h-4 w-4" />
              접근성 시트 열기
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right"
            role="dialog"
            aria-labelledby="sheet-title"
            aria-describedby="sheet-content"
          >
            <SheetHeader>
              <SheetTitle id="sheet-title">
                접근성 설정
              </SheetTitle>
              <SheetDescription id="sheet-content">
                웹 접근성 기능을 설정하고 관리하세요
              </SheetDescription>
            </SheetHeader>

            <div className="py-4 space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">키보드 내비게이션</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>시트 열기:</span>
                    <Badge variant="outline">Enter / Space</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>시트 닫기:</span>
                    <Badge variant="outline">Escape</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>요소 간 이동:</span>
                    <Badge variant="outline">Tab / Shift+Tab</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">스크린 리더 지원</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>시트 상태 자동 안내</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>헤딩 구조 명확히 전달</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>포커스 트랩으로 안전한 탐색</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>의미론적 HTML 구조 사용</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">접근성 옵션</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">고대비 모드</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">포커스 표시 강화</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">애니메이션 감소</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm">자동재생 비활성화</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  className="flex-1" 
                  onClick={() => setIsOpen(false)}
                  aria-label="설정 저장하고 시트 닫기"
                >
                  <Save className="mr-2 h-4 w-4" />
                  저장
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsOpen(false)}
                  aria-label="시트 닫기"
                >
                  <X className="mr-2 h-4 w-4" />
                  닫기
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div id="sheet-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab으로 버튼에 포커스 후 Enter/Space로 열기, Escape로 닫기
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 시트 데모입니다.',
      },
    },
  },
};