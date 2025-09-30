import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Sidebar, 
  PanelLeft, 
  PanelRight, 
  Layout, 
  SplitSquareHorizontal, 
  SplitSquareVertical, 
  Monitor, 
  FileText, 
  Image, 
  Code, 
  Terminal, 
  FolderTree, 
  Settings, 
  Search, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Users, 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Zap, 
  Globe, 
  Database, 
  Server, 
  Cloud, 
  Smartphone, 
  Tablet, 
  Laptop, 
 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  Music, 
  Home, 
  User, 
  Bell, 
  Heart, 
  Star, 
  Bookmark, 
  Eye, 
  ThumbsUp, 
  Share2, 
  Download, 
  Upload, 
  Trash2, 
  Edit, 
  Plus, 
  Minus, 
  X, 
  MoreHorizontal,
  MoreVertical,
  GripVertical,
  GripHorizontal,
  Move,
  Expand,
  Shrink,
  Maximize,
  Minimize
} from 'lucide-react';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '사용자가 크기를 조절할 수 있는 패널 레이아웃 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: '패널 그룹의 방향',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => (
    <div className="h-96 w-full">
      <ResizablePanelGroup direction={args.direction}>
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>왼쪽 패널</CardTitle>
                <CardDescription>크기 조절 가능한 첫 번째 패널</CardDescription>
              </CardHeader>
              <CardContent>
                <p>이 패널의 크기를 조절해보세요. 최소 30% 크기까지 줄일 수 있습니다.</p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="flex h-full items-center justify-center p-6">
            <Card className="w-full h-full">
              <CardHeader>
                <CardTitle>오른쪽 패널</CardTitle>
                <CardDescription>크기 조절 가능한 두 번째 패널</CardDescription>
              </CardHeader>
              <CardContent>
                <p>가운데 구분선을 드래그하여 패널 크기를 조절할 수 있습니다.</p>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const IDELayout: Story = {
  render: () => {
    const [selectedFile, setSelectedFile] = useState('App.tsx');
    
    const files = [
      { name: 'App.tsx', icon: Code, type: 'tsx' },
      { name: 'components/', icon: FolderTree, type: 'folder' },
      { name: 'utils/', icon: FolderTree, type: 'folder' },
      { name: 'package.json', icon: FileText, type: 'json' },
      { name: 'README.md', icon: FileText, type: 'md' },
    ];

    const codeContent = `import React from 'react';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;`;

    return (
      <div className="h-[600px] w-full border rounded-lg overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* 사이드바 */}
          <ResizablePanel defaultSize={25} minSize={15} maxSize={40}>
            <div className="h-full flex flex-col">
              <div className="p-3 border-b bg-muted/50">
                <h3 className="font-semibold flex items-center gap-2">
                  <FolderTree className="h-4 w-4" />
                  Explorer
                </h3>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2 space-y-1">
                  {files.map((file) => {
                    const IconComponent = file.icon;
                    return (
                      <Button
                        key={file.name}
                        variant={selectedFile === file.name ? 'secondary' : 'ghost'}
                        size="sm"
                        className="w-full justify-start h-auto py-1"
                        onClick={() => setSelectedFile(file.name)}
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        <span className="text-sm">{file.name}</span>
                      </Button>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* 메인 에디터 영역 */}
          <ResizablePanel defaultSize={75}>
            <ResizablePanelGroup direction="vertical">
              {/* 에디터 */}
              <ResizablePanel defaultSize={70} minSize={30}>
                <div className="h-full flex flex-col">
                  <div className="p-2 border-b bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span className="text-sm font-medium">{selectedFile}</span>
                      <Badge variant="outline" className="text-xs">
                        TypeScript
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 p-4 font-mono text-sm bg-gray-900 text-gray-100 overflow-auto">
                    <pre className="whitespace-pre-wrap">{codeContent}</pre>
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle />
              
              {/* 터미널 */}
              <ResizablePanel defaultSize={30} minSize={15}>
                <div className="h-full flex flex-col">
                  <div className="p-2 border-b bg-muted/50">
                    <h3 className="font-semibold text-sm flex items-center gap-2">
                      <Terminal className="h-4 w-4" />
                      터미널
                    </h3>
                  </div>
                  <div className="flex-1 p-4 font-mono text-sm bg-black text-green-400 overflow-auto">
                    <div>$ npm start</div>
                    <div>✓ 개발 서버가 시작되었습니다.</div>
                    <div>→ http://localhost:3000</div>
                    <div className="text-gray-500">Compiled successfully!</div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

export const DashboardLayout: Story = {
  render: () => {
    const widgets = [
      {
        title: '매출 현황',
        value: '₩2,450,000',
        change: '+12%',
        icon: TrendingUp,
        color: 'text-green-600',
      },
      {
        title: '방문자 수',
        value: '8,429',
        change: '+5%',
        icon: Users,
        color: 'text-blue-600',
      },
      {
        title: '주문 수',
        value: '156',
        change: '-2%',
        icon: BarChart3,
        color: 'text-orange-600',
      },
      {
        title: '전환율',
        value: '3.2%',
        change: '+8%',
        icon: Activity,
        color: 'text-purple-600',
      },
    ];

    const recentOrders = [
      { id: '#1234', customer: '김철수', amount: '₩125,000', status: '완료' },
      { id: '#1235', customer: '이영희', amount: '₩89,000', status: '처리중' },
      { id: '#1236', customer: '박민수', amount: '₩234,000', status: '완료' },
    ];

    return (
      <div className="h-[600px] w-full border rounded-lg overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* 메인 대시보드 */}
          <ResizablePanel defaultSize={75} minSize={50}>
            <ResizablePanelGroup direction="vertical">
              {/* 상단 메트릭스 */}
              <ResizablePanel defaultSize={40} minSize={25}>
                <div className="h-full p-4">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    대시보드 개요
                  </h2>
                  <div className="grid grid-cols-2 gap-4 h-full">
                    {widgets.map((widget) => {
                      const IconComponent = widget.icon;
                      return (
                        <Card key={widget.title} className="h-fit">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-muted-foreground">{widget.title}</p>
                                <p className="text-2xl font-bold">{widget.value}</p>
                                <p className={`text-sm ${widget.color}`}>{widget.change}</p>
                              </div>
                              <IconComponent className={`h-8 w-8 ${widget.color}`} />
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle />
              
              {/* 차트 영역 */}
              <ResizablePanel defaultSize={60} minSize={35}>
                <div className="h-full p-4">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        매출 추이
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-48 flex items-center justify-center bg-muted rounded">
                        <div className="text-center">
                          <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-2" />
                          <p className="text-muted-foreground">차트 영역</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* 사이드 패널 */}
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
            <div className="h-full p-4">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    최근 주문
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-2 border rounded">
                        <div>
                          <p className="font-medium text-sm">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.customer}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-sm">{order.amount}</p>
                          <Badge variant={order.status === '완료' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button className="w-full" size="sm">
                    모든 주문 보기
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

export const EmailClient: Story = {
  render: () => {
    const [selectedEmail, setSelectedEmail] = useState(0);
    
    const folders = [
      { name: '받은편지함', count: 12, icon: Mail },
      { name: '보낸편지함', count: 8, icon: Upload },
      { name: '임시보관함', count: 3, icon: Edit },
      { name: '휴지통', count: 15, icon: Trash2 },
    ];

    const emails = [
      {
        id: 1,
        from: '김철수',
        subject: '프로젝트 미팅 일정',
        preview: '다음 주 화요일 오후 2시에 프로젝트 미팅을 진행하려고 합니다...',
        time: '오전 10:30',
        unread: true,
      },
      {
        id: 2,
        from: '이영희',
        subject: '디자인 시안 검토 요청',
        preview: '첨부된 디자인 시안을 검토해주시고 피드백 부탁드립니다...',
        time: '어제',
        unread: false,
      },
      {
        id: 3,
        from: '박민수',
        subject: '월간 보고서',
        preview: '이번 달 성과 보고서를 공유드립니다. 주요 지표들이...',
        time: '2일 전',
        unread: true,
      },
    ];

    return (
      <div className="h-[600px] w-full border rounded-lg overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {/* 폴더 목록 */}
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <div className="h-full flex flex-col">
              <div className="p-3 border-b bg-muted/50">
                <h3 className="font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  메일함
                </h3>
              </div>
              <div className="p-2 space-y-1">
                {folders.map((folder) => {
                  const IconComponent = folder.icon;
                  return (
                    <Button
                      key={folder.name}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between h-auto py-2"
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span className="text-sm">{folder.name}</span>
                      </div>
                      {folder.count > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {folder.count}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* 이메일 목록 */}
          <ResizablePanel defaultSize={35} minSize={25} maxSize={50}>
            <div className="h-full flex flex-col">
              <div className="p-3 border-b bg-muted/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">받은편지함</h3>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    새 메일
                  </Button>
                </div>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2 space-y-1">
                  {emails.map((email, index) => (
                    <div
                      key={email.id}
                      className={`p-3 rounded cursor-pointer transition-colors border ${
                        selectedEmail === index 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'hover:bg-muted border-transparent'
                      }`}
                      onClick={() => setSelectedEmail(index)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm ${email.unread ? 'font-semibold' : 'font-normal'}`}>
                          {email.from}
                        </span>
                        <span className="text-xs text-muted-foreground">{email.time}</span>
                      </div>
                      <div className={`text-sm mb-1 ${email.unread ? 'font-medium' : ''}`}>
                        {email.subject}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {email.preview}
                      </p>
                      {email.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* 이메일 내용 */}
          <ResizablePanel defaultSize={45} minSize={30}>
            <div className="h-full flex flex-col">
              <div className="p-4 border-b">
                <div className="space-y-2">
                  <h2 className="font-semibold">{emails[selectedEmail].subject}</h2>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>보낸사람: {emails[selectedEmail].from}</span>
                    <span>{emails[selectedEmail].time}</span>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4 mr-1" />
                    답장
                  </Button>
                  <Button size="sm" variant="outline">
                    <Upload className="h-4 w-4 mr-1" />
                    전달
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="h-4 w-4 mr-1" />
                    삭제
                  </Button>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4">
                <div className="prose prose-sm max-w-none">
                  <p>{emails[selectedEmail].preview}</p>
                  <p>안녕하세요,</p>
                  <p>
                    말씀드린 내용과 관련하여 자세한 사항을 공유드립니다. 
                    첨부 파일을 확인해보시고 궁금한 점이 있으시면 언제든지 연락 주세요.
                  </p>
                  <p>감사합니다.</p>
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

export const MediaPlayer: Story = {
  render: () => {
    const playlist = [
      { id: 1, title: '좋은 날', artist: 'IU', duration: '3:45', playing: true },
      { id: 2, title: 'Dynamite', artist: 'BTS', duration: '4:12', playing: false },
      { id: 3, title: 'ELEVEN', artist: 'IVE', duration: '3:28', playing: false },
      { id: 4, title: 'FEARLESS', artist: 'LE SSERAFIM', duration: '3:56', playing: false },
    ];

    return (
      <div className="h-[500px] w-full border rounded-lg overflow-hidden bg-gray-900 text-white">
        <ResizablePanelGroup direction="horizontal">
          {/* 플레이리스트 */}
          <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
            <div className="h-full flex flex-col">
              <div className="p-3 border-b border-gray-700 bg-gray-800">
                <h3 className="font-semibold flex items-center gap-2">
                  <Music className="h-4 w-4" />
                  플레이리스트
                </h3>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-2 space-y-1">
                  {playlist.map((song) => (
                    <div
                      key={song.id}
                      className={`p-3 rounded cursor-pointer transition-colors ${
                        song.playing 
                          ? 'bg-blue-600' 
                          : 'hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {song.playing ? (
                          <div className="w-4 h-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          </div>
                        ) : (
                          <Play className="h-4 w-4 text-gray-400" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{song.title}</p>
                          <p className="text-xs text-gray-400 truncate">{song.artist}</p>
                        </div>
                        <span className="text-xs text-gray-400">{song.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* 메인 플레이어 */}
          <ResizablePanel defaultSize={70}>
            <ResizablePanelGroup direction="vertical">
              {/* 앨범 아트 및 정보 */}
              <ResizablePanel defaultSize={75} minSize={50}>
                <div className="h-full flex flex-col items-center justify-center p-8">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                    <Music className="h-24 w-24 text-white/80" />
                  </div>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-2">좋은 날</h2>
                    <p className="text-lg text-gray-400">IU</p>
                  </div>
                  
                  {/* 진행바 */}
                  <div className="w-full max-w-md mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>1:23</span>
                      <span>3:45</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>
                  
                  {/* 컨트롤 버튼 */}
                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <SkipBack className="h-5 w-5" />
                    </Button>
                    <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
                      <Pause className="h-6 w-6" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle />
              
              {/* 볼륨 및 추가 컨트롤 */}
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="h-full p-4 border-t border-gray-700 bg-gray-800">
                  <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-4">
                      <Volume2 className="h-5 w-5 text-gray-400" />
                      <div className="w-32 bg-gray-700 rounded-full h-1">
                        <div className="bg-blue-500 h-1 rounded-full" style={{ width: '70%' }} />
                      </div>
                      <span className="text-sm text-gray-400">70%</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [leftSize, setLeftSize] = useState(50);

    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 접근성 지원 (Tab, 방향키, Enter, Space)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 크기 조절 핸들 포커스 관리</li>
            <li>• 패널 크기 변경 시 음성 안내</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <div className="h-96 w-full border rounded-lg overflow-hidden">
          <ResizablePanelGroup 
            direction="horizontal"
            aria-label="크기 조절 가능한 패널 그룹"
          >
            <ResizablePanel 
              defaultSize={leftSize} 
              minSize={20} 
              maxSize={80}
              aria-label="왼쪽 패널"
            >
              <div className="flex h-full items-center justify-center p-6 bg-blue-50">
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PanelLeft className="h-5 w-5" />
                      접근성 왼쪽 패널
                    </CardTitle>
                    <CardDescription>
                      현재 크기: {Math.round(leftSize)}%
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm">
                        이 패널은 완전한 키보드 접근성을 지원합니다.
                      </p>
                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          className="w-full"
                          aria-label="샘플 버튼 1"
                        >
                          버튼 1
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full"
                          aria-label="샘플 버튼 2"
                        >
                          버튼 2
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ResizablePanel>
            
            <ResizableHandle 
              aria-label="패널 크기 조절 핸들. 드래그하거나 방향키로 조절하세요"
              aria-valuemin={20}
              aria-valuemax={80}
              aria-valuenow={leftSize}
              aria-describedby="resize-instructions"
            />
            
            <ResizablePanel 
              defaultSize={100 - leftSize}
              aria-label="오른쪽 패널"
            >
              <div className="flex h-full items-center justify-center p-6 bg-green-50">
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PanelRight className="h-5 w-5" />
                      접근성 오른쪽 패널
                    </CardTitle>
                    <CardDescription>
                      현재 크기: {Math.round(100 - leftSize)}%
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm">
                        크기 조절 핸들은 키보드로도 조작할 수 있습니다.
                      </p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GripVertical className="h-3 w-3" />
                          <span>핸들 클릭 후 방향키로 조절</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Expand className="h-3 w-3" />
                          <span>Enter/Space로 세밀 조정 모드</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        
        <div 
          id="resize-instructions" 
          className="text-xs text-muted-foreground p-3 bg-muted rounded"
        >
          💡 접근성 팁: Tab으로 크기 조절 핸들에 포커스 → 방향키로 크기 조절 → Enter/Space로 세밀 조정
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 제공하는 크기 조절 가능한 패널 데모입니다.',
      },
    },
  },
};