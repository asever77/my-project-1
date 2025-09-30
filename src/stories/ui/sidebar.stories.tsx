import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Menu, 
  Home, 
  User, 
  Users, 
  Settings, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Music, 
  Video, 
  Download, 
  Upload, 
  Star, 
  Heart, 
  Bookmark, 
  Bell, 
  Search, 
  Filter, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Database, 
  Server, 
  Cloud, 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  EyeOff, 
  Globe, 
  Wifi, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Monitor, 
  Printer, 
  Camera, 
  Mic, 
  Volume2, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Shuffle, 
  Repeat, 
  Plus, 
  Minus, 
  Edit, 
  Trash2, 
  Copy, 
  Share2, 
  ExternalLink, 
  Link, 
  Archive, 
  Folder, 
  FolderOpen, 
  File, 
  Files, 
  Layers, 
  Command, 
  Terminal, 
  Code, 
  GitBranch, 
  Github, 
  Package, 
  ShoppingCart as ShoppingCartIcon, 
  CreditCard, 
  DollarSign, 
  Target, 
  Award, 
  Trophy, 
  Medal, 
  Crown, 
  Gem, 
  Flame, 
  Sparkles, 
  Zap, 
  Coffee, 
  Pizza, 
  Utensils, 
  Store, 
  Building, 
  Factory, 
  Truck, 
  Car, 
  Bike, 
  Plane, 
  Ship, 
  Train, 
  Clock, 
  Timer, 
  AlarmClock, 
  Sun, 
  Moon, 
  CloudRain, 
  Umbrella, 
  Snowflake, 
  Wind, 
  Thermometer, 
  Compass, 
  Map, 
  MapPin, 
  Navigation, 
  Route, 
  Flag, 
  Bookmark as BookmarkIcon, 
  Tag, 
  Hash, 
  AtSign, 
  Percent, 
  DollarSign as Currency, 
  Euro, 
  PoundSterling, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  MessageSquare, 
  MessageCircle, 
  Send, 
  Phone, 
  PhoneCall, 
  VideoIcon, 
  Headphones, 
  Speaker,
  PanelLeft,
  PanelRight,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ChevronsRight,
  ChevronsLeft,
  Minimize,
  Maximize,
  MoreHorizontal,
  MoreVertical
} from 'lucide-react';

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '앱의 주요 네비게이션과 기능에 접근할 수 있는 사이드바 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-semibold">앱 이름</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="h-4 w-4" />
                      <span>홈</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <User className="h-4 w-4" />
                      <span>프로필</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>설정</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="px-4 py-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                홍길동
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-6">
            <SidebarTrigger />
            <h1 className="text-2xl font-bold">메인 콘텐츠 영역</h1>
          </div>
          <p className="text-muted-foreground">
            사이드바 토글 버튼을 클릭하여 사이드바를 열고 닫을 수 있습니다.
          </p>
        </main>
      </div>
    </SidebarProvider>
  ),
};

export const ApplicationSidebar: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('dashboard');
    
    const navigationItems = [
      { id: 'dashboard', label: '대시보드', icon: BarChart3, badge: null },
      { id: 'analytics', label: '분석', icon: TrendingUp, badge: null },
      { id: 'users', label: '사용자', icon: Users, badge: '24' },
      { id: 'messages', label: '메시지', icon: Mail, badge: '12' },
      { id: 'calendar', label: '캘린더', icon: Calendar, badge: null },
      { id: 'tasks', label: '할 일', icon: CheckCircle, badge: '5' },
    ];

    const fileItems = [
      { id: 'documents', label: '문서', icon: FileText, count: 156 },
      { id: 'images', label: '이미지', icon: Image, count: 89 },
      { id: 'videos', label: '비디오', icon: Video, count: 23 },
      { id: 'music', label: '음악', icon: Music, count: 67 },
    ];

    const recentProjects = [
      { id: 'project1', name: '웹사이트 리뉴얼', status: 'active' },
      { id: 'project2', name: '모바일 앱 개발', status: 'pending' },
      { id: 'project3', name: '데이터 분석', status: 'completed' },
    ];

    return (
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar className="w-64">
            <SidebarHeader>
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <h2 className="font-semibold">프로젝트 관리</h2>
                  <p className="text-xs text-muted-foreground">v2.1.0</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              {/* 메인 네비게이션 */}
              <SidebarGroup>
                <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton 
                            isActive={activeItem === item.id}
                            onClick={() => setActiveItem(item.id)}
                          >
                            <IconComponent className="h-4 w-4" />
                            <span>{item.label}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="ml-auto">
                                {item.badge}
                              </Badge>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2" />

              {/* 파일 관리 */}
              <SidebarGroup>
                <SidebarGroupLabel>파일 관리</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {fileItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton>
                            <IconComponent className="h-4 w-4" />
                            <span>{item.label}</span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              {item.count}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2" />

              {/* 최근 프로젝트 */}
              <SidebarGroup>
                <SidebarGroupLabel>최근 프로젝트</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {recentProjects.map((project) => (
                      <SidebarMenuItem key={project.id}>
                        <SidebarMenuButton>
                          <div className={`h-2 w-2 rounded-full ${
                            project.status === 'active' ? 'bg-green-500' :
                            project.status === 'pending' ? 'bg-yellow-500' :
                            'bg-gray-400'
                          }`} />
                          <span className="text-sm">{project.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-muted">
                  <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    홍
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">홍길동</p>
                    <p className="text-xs text-muted-foreground truncate">
                      hong@example.com
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">
                {navigationItems.find(item => item.id === activeItem)?.label || '대시보드'}
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    활성 프로젝트
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-muted-foreground">진행 중인 프로젝트</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    팀 멤버
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24</div>
                  <p className="text-muted-foreground">활성 사용자</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    완료된 작업
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">87</div>
                  <p className="text-muted-foreground">이번 주 완료</p>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  },
};

export const EcommerceSidebar: Story = {
  render: () => {
    const categories = [
      { id: 'electronics', name: '전자제품', icon: Smartphone, count: 245 },
      { id: 'clothing', name: '의류', icon: Heart, count: 189 },
      { id: 'books', name: '도서', icon: FileText, count: 156 },
      { id: 'home', name: '홈&리빙', icon: Home, count: 134 },
      { id: 'sports', name: '스포츠', icon: Target, count: 98 },
      { id: 'beauty', name: '뷰티', icon: Star, count: 67 },
    ];

    const quickActions = [
      { id: 'cart', name: '장바구니', icon: ShoppingCartIcon, badge: '3' },
      { id: 'wishlist', name: '찜', icon: Heart, badge: '12' },
      { id: 'orders', name: '주문내역', icon: Package, badge: null },
      { id: 'coupons', name: '쿠폰', icon: Tag, badge: '2' },
    ];

    const brands = [
      'Apple', 'Samsung', 'Nike', 'Adidas', 'Sony', 'LG'
    ];

    return (
      <SidebarProvider>
        <div className="flex h-screen">
          <Sidebar className="w-72">
            <SidebarHeader>
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <h2 className="font-semibold">쇼핑몰</h2>
                  <p className="text-xs text-muted-foreground">최고의 쇼핑 경험</p>
                </div>
              </div>
              
              <div className="px-4 pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="상품 검색..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              {/* 빠른 액션 */}
              <SidebarGroup>
                <SidebarGroupLabel>빠른 액션</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {quickActions.map((action) => {
                      const IconComponent = action.icon;
                      return (
                        <SidebarMenuItem key={action.id}>
                          <SidebarMenuButton>
                            <IconComponent className="h-4 w-4" />
                            <span>{action.name}</span>
                            {action.badge && (
                              <Badge variant="destructive" className="ml-auto">
                                {action.badge}
                              </Badge>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2" />

              {/* 카테고리 */}
              <SidebarGroup>
                <SidebarGroupLabel>카테고리</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <SidebarMenuItem key={category.id}>
                          <SidebarMenuButton>
                            <IconComponent className="h-4 w-4" />
                            <span>{category.name}</span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              {category.count}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2" />

              {/* 브랜드 */}
              <SidebarGroup>
                <SidebarGroupLabel>인기 브랜드</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {brands.map((brand) => (
                      <SidebarMenuItem key={brand}>
                        <SidebarMenuButton>
                          <div className="h-4 w-4 bg-gray-200 rounded flex-shrink-0" />
                          <span className="text-sm">{brand}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2" />

              {/* 특별 혜택 */}
              <SidebarGroup>
                <SidebarGroupLabel>특별 혜택</SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="px-3 space-y-3">
                    <Card className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Flame className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium">오늘의 특가</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        선택 상품 최대 70% 할인
                      </p>
                    </Card>
                    
                    <Card className="p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Truck className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium">무료배송</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        5만원 이상 구매 시
                      </p>
                    </Card>
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <div className="p-4">
                <Button className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  로그인
                </Button>
              </div>
            </SidebarFooter>
          </Sidebar>
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <h1 className="text-2xl font-bold">상품 목록</h1>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  필터
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  정렬
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }, (_, i) => (
                <Card key={i} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <Package className="h-12 w-12 text-gray-400" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">상품 {i + 1}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, j) => (
                          <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">(128)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₩{(Math.random() * 100000 + 10000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                      <Button size="sm">
                        <ShoppingCartIcon className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  },
};

export const MediaPlayerSidebar: Story = {
  render: () => {
    const [currentTrack, setCurrentTrack] = useState(0);
    
    const playlists = [
      { id: 'favorites', name: '즐겨찾기', count: 23, icon: Heart },
      { id: 'recent', name: '최근 재생', count: 15, icon: Clock },
      { id: 'rock', name: '록 음악', count: 67, icon: Music },
      { id: 'pop', name: '팝 음악', count: 89, icon: Music },
      { id: 'jazz', name: '재즈', count: 34, icon: Music },
    ];

    const tracks = [
      { title: '좋은 날', artist: 'IU', duration: '3:45', playing: true },
      { title: 'Dynamite', artist: 'BTS', duration: '4:12', playing: false },
      { title: 'ELEVEN', artist: 'IVE', duration: '3:28', playing: false },
      { title: 'FEARLESS', artist: 'LE SSERAFIM', duration: '3:56', playing: false },
      { title: 'Next Level', artist: 'aespa', duration: '4:23', playing: false },
    ];

    return (
      <SidebarProvider>
        <div className="flex h-screen bg-gray-900 text-white">
          <Sidebar className="w-64 bg-gray-800 border-gray-700">
            <SidebarHeader>
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <h2 className="font-semibold text-white">뮤직 플레이어</h2>
                  <p className="text-xs text-gray-400">음악을 즐기세요</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              {/* 라이브러리 */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-gray-400">라이브러리</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-white hover:bg-gray-700">
                        <Music className="h-4 w-4" />
                        <span>모든 음악</span>
                        <span className="ml-auto text-xs text-gray-400">567</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-white hover:bg-gray-700">
                        <User className="h-4 w-4" />
                        <span>아티스트</span>
                        <span className="ml-auto text-xs text-gray-400">89</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-white hover:bg-gray-700">
                        <FileText className="h-4 w-4" />
                        <span>앨범</span>
                        <span className="ml-auto text-xs text-gray-400">123</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2 bg-gray-700" />

              {/* 플레이리스트 */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-gray-400">플레이리스트</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {playlists.map((playlist) => {
                      const IconComponent = playlist.icon;
                      return (
                        <SidebarMenuItem key={playlist.id}>
                          <SidebarMenuButton className="text-white hover:bg-gray-700">
                            <IconComponent className="h-4 w-4" />
                            <span>{playlist.name}</span>
                            <span className="ml-auto text-xs text-gray-400">
                              {playlist.count}
                            </span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <Separator className="my-2 bg-gray-700" />

              {/* 큐 */}
              <SidebarGroup>
                <SidebarGroupLabel className="text-gray-400">재생 대기열</SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="px-3 space-y-2">
                    {tracks.slice(0, 3).map((track, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded cursor-pointer transition-colors ${
                          track.playing ? 'bg-purple-600' : 'hover:bg-gray-700'
                        }`}
                        onClick={() => setCurrentTrack(index)}
                      >
                        <div className="flex items-center gap-2">
                          {track.playing ? (
                            <div className="w-4 h-4 flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                            </div>
                          ) : (
                            <Play className="h-3 w-3 text-gray-400" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{track.title}</p>
                            <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                          </div>
                          <span className="text-xs text-gray-400">{track.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            
            <SidebarFooter>
              <div className="p-4 bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {tracks[currentTrack]?.title}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {tracks[currentTrack]?.artist}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <Shuffle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                    <Pause className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <SkipForward className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-gray-700">
                    <Repeat className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div className="bg-white h-1 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>
          
          <main className="flex-1 p-6 overflow-auto">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger className="text-white" />
              <h1 className="text-2xl font-bold text-white">발견하기</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }, (_, i) => (
                <Card key={i} className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-t-lg flex items-center justify-center">
                    <Music className="h-12 w-12 text-white" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2 text-white">플레이리스트 {i + 1}</h3>
                    <p className="text-sm text-gray-400">다양한 아티스트</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-400">{Math.floor(Math.random() * 50 + 10)}곡</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <Play className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </SidebarProvider>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
      { id: 'home', label: '홈 페이지', icon: Home, shortcut: 'Ctrl+H' },
      { id: 'profile', label: '프로필 설정', icon: User, shortcut: 'Ctrl+P' },
      { id: 'messages', label: '메시지 보기', icon: Mail, shortcut: 'Ctrl+M' },
      { id: 'calendar', label: '캘린더', icon: Calendar, shortcut: 'Ctrl+C' },
      { id: 'settings', label: '환경 설정', icon: Settings, shortcut: 'Ctrl+S' },
    ];

    return (
      <div className="w-full max-w-6xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 방향키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 랜드마크 역할과 헤딩 구조</li>
            <li>• 키보드 단축키 지원</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <SidebarProvider>
          <div className="flex h-96 border rounded-lg overflow-hidden">
            <Sidebar 
              className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
              aria-label="메인 네비게이션"
            >
              <SidebarHeader>
                <div className="flex items-center justify-between px-4 py-3">
                  {!isCollapsed && (
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <span className="font-semibold">접근성 앱</span>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    aria-label={isCollapsed ? "사이드바 펼치기" : "사이드바 접기"}
                    aria-expanded={!isCollapsed}
                  >
                    {isCollapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
                  </Button>
                </div>
              </SidebarHeader>
              
              <SidebarContent>
                <SidebarGroup>
                  {!isCollapsed && (
                    <SidebarGroupLabel>메인 메뉴</SidebarGroupLabel>
                  )}
                  <SidebarGroupContent>
                    <SidebarMenu role="list">
                      {menuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <SidebarMenuItem key={item.id} role="listitem">
                            <SidebarMenuButton
                              aria-label={`${item.label} ${item.shortcut ? `(단축키: ${item.shortcut})` : ''}`}
                              title={isCollapsed ? item.label : undefined}
                            >
                              <IconComponent className="h-4 w-4" aria-hidden="true" />
                              {!isCollapsed && (
                                <>
                                  <span>{item.label}</span>
                                  {item.shortcut && (
                                    <Badge variant="outline" className="ml-auto text-xs">
                                      {item.shortcut}
                                    </Badge>
                                  )}
                                </>
                              )}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
              
              <SidebarFooter>
                <div className="p-4">
                  <Button 
                    variant="ghost" 
                    className={`w-full ${isCollapsed ? 'px-2' : 'justify-start'}`}
                    aria-label="사용자 메뉴"
                  >
                    <User className="h-4 w-4" aria-hidden="true" />
                    {!isCollapsed && <span className="ml-2">홍길동</span>}
                  </Button>
                </div>
              </SidebarFooter>
            </Sidebar>
            
            <main className="flex-1 p-6" role="main" aria-label="메인 콘텐츠">
              <div className="flex items-center gap-4 mb-6">
                <SidebarTrigger 
                  aria-label="사이드바 토글"
                  aria-controls="sidebar"
                />
                <h1 className="text-xl font-bold">접근성 데모</h1>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      시각적 접근성
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>고대비 색상 적용</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>명확한 포커스 표시</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>적절한 글자 크기</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5" />
                      청각적 접근성
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>스크린 리더 호환</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>의미론적 HTML 구조</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>적절한 ARIA 레이블</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Command className="h-5 w-5" />
                      키보드 접근성
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Tab 순환 지원</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>키보드 단축키</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>ESC 키로 닫기</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 text-xs text-muted-foreground p-3 bg-muted rounded">
                💡 키보드 사용법: Tab으로 이동, Enter로 활성화, 방향키로 메뉴 탐색, Ctrl+키 조합으로 단축키 사용
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 사이드바 데모입니다.',
      },
    },
  },
};