import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Settings, 
  Bell, 
  Lock, 
  CreditCard, 
  Star, 
  Heart, 
  Bookmark, 
  Home, 
  Search, 
  Calendar, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Shield, 
  Eye, 
  EyeOff, 
  Edit, 
  Save, 
  Download, 
  Upload, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Music, 
  Archive, 
  Folder, 
  File, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Activity, 
  DollarSign, 
  Package, 
  ShoppingCart as ShoppingCartIcon, 
  Truck, 
  MessageSquare, 
  Users, 
  Building, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Camera, 
  Mic, 
  Volume2, 
  Wifi, 
  Bluetooth, 
  Battery, 
  Zap, 
  Thermometer, 
  Sun, 
  Moon, 
  CloudIcon, 
  Umbrella, 
  Wind,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Plus,
  Minus,
  MoreHorizontal,
  Filter,
  SortAsc,
  Share2,
  Copy,
  Trash2,
  RefreshCw,
  Play
} from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Contents-active/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '콘텐츠를 탭으로 구성하여 사용자가 쉽게 전환할 수 있도록 하는 탭 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      description: '기본으로 선택될 탭',
      control: 'text',
    },
    orientation: {
      description: '탭의 방향',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <h3 className="text-lg font-semibold mb-4">기본 탭</h3>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">계정</TabsTrigger>
          <TabsTrigger value="password">비밀번호</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름</Label>
            <Input id="name" defaultValue="홍길동" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">사용자명</Label>
            <Input id="username" defaultValue="@hong" />
          </div>
          <Button>변경사항 저장</Button>
        </TabsContent>
        <TabsContent value="password" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current">현재 비밀번호</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">새 비밀번호</Label>
            <Input id="new" type="password" />
          </div>
          <Button>비밀번호 변경</Button>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

export const ProfileSettings: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("personal");
    
    return (
      <div className="w-full max-w-4xl space-y-4">
        <h3 className="text-lg font-semibold mb-4">프로필 설정</h3>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              개인정보
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              보안
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              알림
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              결제
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>개인정보</CardTitle>
                <CardDescription>
                  프로필 정보를 관리하고 업데이트하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">이름</Label>
                    <Input id="firstName" defaultValue="길동" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">성</Label>
                    <Input id="lastName" defaultValue="홍" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" type="email" defaultValue="hong@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">전화번호</Label>
                    <Input id="phone" defaultValue="010-1234-5678" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">자기소개</Label>
                  <textarea 
                    id="bio" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    rows={3}
                    defaultValue="안녕하세요! 웹 개발자 홍길동입니다."
                  />
                </div>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  저장
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>보안 설정</CardTitle>
                <CardDescription>
                  계정 보안을 강화하고 로그인 설정을 관리하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">비밀번호 변경</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">현재 비밀번호</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">새 비밀번호</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                  </div>
                  <Button variant="outline">비밀번호 변경</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">2단계 인증</h4>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">인증 앱</p>
                      <p className="text-sm text-muted-foreground">Google Authenticator 또는 유사한 앱 사용</p>
                    </div>
                    <Badge variant="outline">비활성</Badge>
                  </div>
                  <Button variant="outline">
                    <Lock className="h-4 w-4 mr-2" />
                    2단계 인증 설정
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">로그인 기록</h4>
                  <div className="space-y-3">
                    {[
                      { device: 'Chrome (Windows)', location: '서울, 한국', time: '2시간 전', current: true },
                      { device: 'Safari (iPhone)', location: '서울, 한국', time: '1일 전', current: false },
                      { device: 'Edge (Windows)', location: '부산, 한국', time: '3일 전', current: false },
                    ].map((session, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium flex items-center gap-2">
                            {session.device}
                            {session.current && <Badge variant="default" className="text-xs">현재</Badge>}
                          </p>
                          <p className="text-sm text-muted-foreground">{session.location} • {session.time}</p>
                        </div>
                        {!session.current && (
                          <Button variant="ghost" size="sm">종료</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>알림 설정</CardTitle>
                <CardDescription>
                  받고 싶은 알림 유형을 선택하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { id: 'email', title: '이메일 알림', description: '중요한 업데이트를 이메일로 받기', enabled: true },
                  { id: 'push', title: '푸시 알림', description: '브라우저 알림 받기', enabled: false },
                  { id: 'sms', title: 'SMS 알림', description: '긴급한 알림을 문자로 받기', enabled: true },
                  { id: 'marketing', title: '마케팅 알림', description: '프로모션 및 새로운 기능 소식', enabled: false },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Button variant={item.enabled ? "default" : "outline"} size="sm">
                      {item.enabled ? '활성' : '비활성'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>결제 및 구독</CardTitle>
                <CardDescription>
                  결제 방법과 구독 정보를 관리하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">현재 플랜</h4>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">프로 플랜</h5>
                      <Badge>활성</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      월 ₩29,000 • 다음 결제일: 2024-02-15
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">플랜 변경</Button>
                      <Button variant="outline" size="sm">취소</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">결제 방법</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 1234</p>
                          <p className="text-sm text-muted-foreground">만료: 12/25</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">기본</Badge>
                        <Button variant="ghost" size="sm">편집</Button>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    새 결제 방법 추가
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">결제 내역</h4>
                  <div className="space-y-3">
                    {[
                      { date: '2024-01-15', amount: '₩29,000', status: '완료' },
                      { date: '2023-12-15', amount: '₩29,000', status: '완료' },
                      { date: '2023-11-15', amount: '₩29,000', status: '완료' },
                    ].map((payment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">{payment.amount}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{payment.status}</Badge>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const FileManager: Story = {
  render: () => {
    type FileItem = {
      name: string;
      size: string;
      modified: string;
      type: 'document' | 'image' | 'video' | 'music';
    };

    const files = {
      documents: [
        { name: '프로젝트 계획서.docx', size: '2.3 MB', modified: '2024-01-15', type: 'document' as const },
        { name: '회의록.pdf', size: '1.8 MB', modified: '2024-01-14', type: 'document' as const },
        { name: '보고서.xlsx', size: '3.1 MB', modified: '2024-01-13', type: 'document' as const },
      ],
      images: [
        { name: '스크린샷1.png', size: '4.2 MB', modified: '2024-01-15', type: 'image' as const },
        { name: '로고.svg', size: '156 KB', modified: '2024-01-12', type: 'image' as const },
        { name: '배경이미지.jpg', size: '8.7 MB', modified: '2024-01-10', type: 'image' as const },
      ],
      videos: [
        { name: '프레젠테이션.mp4', size: '125 MB', modified: '2024-01-11', type: 'video' as const },
        { name: '데모영상.mov', size: '89 MB', modified: '2024-01-09', type: 'video' as const },
      ],
      music: [
        { name: '배경음악.mp3', size: '5.2 MB', modified: '2024-01-08', type: 'music' as const },
        { name: '효과음.wav', size: '2.1 MB', modified: '2024-01-07', type: 'music' as const },
      ],
    };

    const getFileIcon = (type: string) => {
      switch (type) {
        case 'document': return <FileText className="h-4 w-4 text-blue-600" />;
        case 'image': return <ImageIcon className="h-4 w-4 text-green-600" />;
        case 'video': return <Video className="h-4 w-4 text-purple-600" />;
        case 'music': return <Music className="h-4 w-4 text-orange-600" />;
        default: return <File className="h-4 w-4 text-gray-600" />;
      }
    };

    const FileList = ({ files }: { files: FileItem[] }) => (
      <div className="space-y-2">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-3 border rounded hover:bg-muted/50">
            <div className="flex items-center gap-3">
              {getFileIcon(file.type)}
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground">{file.size} • {file.modified}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Download className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div className="w-full max-w-4xl space-y-4">
        <h3 className="text-lg font-semibold mb-4">파일 관리자</h3>
        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              문서 ({files.documents.length})
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              이미지 ({files.images.length})
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              동영상 ({files.videos.length})
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              음악 ({files.music.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="documents" className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">문서 파일</h4>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Upload className="h-3 w-3 mr-2" />
                  업로드
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="h-3 w-3 mr-2" />
                  필터
                </Button>
              </div>
            </div>
            <FileList files={files.documents} />
          </TabsContent>
          
          <TabsContent value="images" className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">이미지 파일</h4>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">갤러리 보기</Button>
                <Button variant="outline" size="sm">목록 보기</Button>
              </div>
            </div>
            <FileList files={files.images} />
          </TabsContent>
          
          <TabsContent value="videos" className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">동영상 파일</h4>
              <Button variant="outline" size="sm">
                <Play className="h-3 w-3 mr-2" />
                전체 재생
              </Button>
            </div>
            <FileList files={files.videos} />
          </TabsContent>
          
          <TabsContent value="music" className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">음악 파일</h4>
              <Button variant="outline" size="sm">
                <Music className="h-3 w-3 mr-2" />
                플레이리스트 생성
              </Button>
            </div>
            <FileList files={files.music} />
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const Dashboard: Story = {
  render: () => {
    const analytics = {
      overview: {
        totalUsers: 12543,
        revenue: 2840000,
        orders: 1847,
        conversion: 3.2
      },
      traffic: [
        { source: '직접 방문', visitors: 4521, percentage: 35 },
        { source: '검색 엔진', visitors: 3876, percentage: 30 },
        { source: '소셜 미디어', visitors: 2445, percentage: 19 },
        { source: '이메일', visitors: 1701, percentage: 16 }
      ],
      topProducts: [
        { name: 'iPhone 15 Pro', sales: 423, revenue: 546570000 },
        { name: '갤럭시 S24', sales: 387, revenue: 421830000 },
        { name: '맥북 프로', sales: 156, revenue: 388440000 }
      ]
    };

    return (
      <div className="w-full max-w-6xl space-y-4">
        <h3 className="text-lg font-semibold mb-4">대시보드</h3>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              개요
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              분석
            </TabsTrigger>
            <TabsTrigger value="sales" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              매출
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              보고서
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">총 사용자</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.overview.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    +20.1% 전월 대비
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">총 수익</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₩{analytics.overview.revenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    +12.5% 전월 대비
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">주문 수</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.overview.orders.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    +8.2% 전월 대비
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">전환율</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.overview.conversion}%</div>
                  <p className="text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 inline mr-1" />
                    +0.3% 전월 대비
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>트래픽 소스</CardTitle>
                <CardDescription>방문자들이 어디서 오는지 분석</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.traffic.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-600 rounded" style={{ 
                          backgroundColor: `hsl(${index * 90}, 70%, 50%)` 
                        }} />
                        <span className="font-medium">{item.source}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{item.visitors.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{item.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sales" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>인기 상품</CardTitle>
                <CardDescription>매출 기준 상위 상품</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.sales}개 판매</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">₩{product.revenue.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">수익</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>보고서 생성</CardTitle>
                <CardDescription>다양한 형태의 보고서를 생성하고 다운로드하세요</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: '월간 매출 보고서', description: '지난 30일간의 매출 데이터', type: 'monthly' },
                    { name: '사용자 활동 보고서', description: '사용자 행동 패턴 분석', type: 'user' },
                    { name: '상품 성과 보고서', description: '상품별 판매 성과', type: 'product' },
                    { name: '마케팅 ROI 보고서', description: '마케팅 캠페인 효과 분석', type: 'marketing' },
                  ].map((report, index) => (
                    <div key={index} className="p-4 border rounded">
                      <h4 className="font-medium mb-2">{report.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{report.description}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-2" />
                          미리보기
                        </Button>
                        <Button size="sm">
                          <Download className="h-3 w-3 mr-2" />
                          다운로드
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("general");
    
    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, 방향키, Enter)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 활성 탭 상태 명확한 표시</li>
            <li>• 적절한 색상 대비와 포커스 표시</li>
            <li>• 탭 패널과 트리거 간 연결 관계</li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              접근성 적용 탭
            </CardTitle>
            <CardDescription>
              모든 사용자가 쉽게 이용할 수 있도록 설계된 탭 컴포넌트입니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="w-full"
              aria-label="접근성 설정 탭"
            >
              <TabsList 
                className="grid w-full grid-cols-3"
                role="tablist"
                aria-label="접근성 설정 카테고리"
              >
                <TabsTrigger 
                  value="general" 
                  className="flex items-center gap-2"
                  role="tab"
                  aria-selected={activeTab === "general"}
                  aria-controls="general-panel"
                  id="general-tab"
                >
                  <Settings className="h-4 w-4" />
                  일반 설정
                </TabsTrigger>
                <TabsTrigger 
                  value="visual" 
                  className="flex items-center gap-2"
                  role="tab"
                  aria-selected={activeTab === "visual"}
                  aria-controls="visual-panel"
                  id="visual-tab"
                >
                  <Eye className="h-4 w-4" />
                  시각 설정
                </TabsTrigger>
                <TabsTrigger 
                  value="audio" 
                  className="flex items-center gap-2"
                  role="tab"
                  aria-selected={activeTab === "audio"}
                  aria-controls="audio-panel"
                  id="audio-tab"
                >
                  <Volume2 className="h-4 w-4" />
                  청각 설정
                </TabsTrigger>
              </TabsList>
              
              <TabsContent 
                value="general" 
                className="space-y-4 mt-6"
                role="tabpanel"
                aria-labelledby="general-tab"
                id="general-panel"
                tabIndex={0}
              >
                <h3 className="text-lg font-semibold">일반 접근성 설정</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">키보드 내비게이션</Label>
                      <p className="text-sm text-muted-foreground">Tab, Enter, 방향키로 모든 기능 사용</p>
                    </div>
                    <Badge variant="default">활성화됨</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">포커스 표시</Label>
                      <p className="text-sm text-muted-foreground">현재 포커스된 요소를 명확하게 표시</p>
                    </div>
                    <Badge variant="default">활성화됨</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">건너뛰기 링크</Label>
                      <p className="text-sm text-muted-foreground">주요 콘텐츠로 바로 이동</p>
                    </div>
                    <Button variant="outline" size="sm">설정</Button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">키보드 사용법</h4>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p>• Tab: 다음 탭으로 이동</p>
                    <p>• Shift + Tab: 이전 탭으로 이동</p>
                    <p>• Enter 또는 Space: 탭 활성화</p>
                    <p>• 방향키: 탭 간 이동 (tablist 내에서)</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent 
                value="visual" 
                className="space-y-4 mt-6"
                role="tabpanel"
                aria-labelledby="visual-tab"
                id="visual-panel"
                tabIndex={0}
              >
                <h3 className="text-lg font-semibold">시각 접근성 설정</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">고대비 모드</Label>
                      <p className="text-sm text-muted-foreground">텍스트와 배경 간 대비 강화</p>
                    </div>
                    <Button variant="outline" size="sm">활성화</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">큰 텍스트</Label>
                      <p className="text-sm text-muted-foreground">모든 텍스트 크기 확대</p>
                    </div>
                    <Button variant="outline" size="sm">활성화</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">색상 구분 없는 정보</Label>
                      <p className="text-sm text-muted-foreground">색상 외에도 아이콘과 텍스트로 정보 전달</p>
                    </div>
                    <Badge variant="default">적용됨</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">애니메이션 감소</Label>
                      <p className="text-sm text-muted-foreground">움직임에 민감한 사용자를 위한 설정</p>
                    </div>
                    <Button variant="outline" size="sm">활성화</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent 
                value="audio" 
                className="space-y-4 mt-6"
                role="tabpanel"
                aria-labelledby="audio-tab"
                id="audio-panel"
                tabIndex={0}
              >
                <h3 className="text-lg font-semibold">청각 접근성 설정</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">스크린 리더 지원</Label>
                      <p className="text-sm text-muted-foreground">NVDA, JAWS, VoiceOver 등과 호환</p>
                    </div>
                    <Badge variant="default">지원됨</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">음성 안내</Label>
                      <p className="text-sm text-muted-foreground">탭 변경 시 음성으로 상태 안내</p>
                    </div>
                    <Button variant="outline" size="sm">활성화</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">알림음</Label>
                      <p className="text-sm text-muted-foreground">중요한 상태 변경 시 알림음 재생</p>
                    </div>
                    <Button variant="outline" size="sm">설정</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded">
                    <div>
                      <Label className="font-medium">자막 지원</Label>
                      <p className="text-sm text-muted-foreground">동영상 콘텐츠에 자막 제공</p>
                    </div>
                    <Badge variant="default">지원됨</Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 접근성 가이드라인 */}
        <Card>
          <CardHeader>
            <CardTitle>탭 접근성 가이드라인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 탭 레이블과 설명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 역할과 속성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 내비게이션 완전 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>활성 탭 시각적 표시</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>탭과 패널 간 관계 설정</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>탭이 너무 많으면 사용성 저하</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>자동 탭 전환은 접근성 문제</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>중요한 정보는 첫 번째 탭에</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>탭 내용은 즉시 로드되어야 함</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">접근성 팁</h5>
              <p className="text-sm text-blue-800 mt-1">
                탭은 관련된 콘텐츠를 체계적으로 구성하는 중요한 도구입니다. 
                스크린 리더 사용자가 탭의 구조와 현재 위치를 명확히 파악할 수 있도록 
                적절한 ARIA 속성과 키보드 내비게이션을 제공하세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '탭 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.',
      },
    },
  },
};