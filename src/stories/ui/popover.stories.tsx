import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { 
  Calendar as CalendarIcon, 
  Settings, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Info, 
  HelpCircle, 
  Share, 
  Download, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  Star, 
  Heart, 
  Bookmark, 
  Bell, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock,
  Check,
  X,
  AlertCircle,
  Clock,
  Filter,
  Search,
  Tag,
  Image,
  FileText,
  Link,
  Send,
  Save,
  Copy,
  ExternalLink
} from 'lucide-react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '클릭 시 나타나는 작은 오버레이 창 컴포넌트입니다. 추가 정보나 간단한 폼을 표시할 때 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">팝오버 열기</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">설정</h4>
            <p className="text-sm text-muted-foreground">
              계정 설정을 관리하세요.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">폭</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">높이</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const DatePicker: Story = {
  render: () => {
    const [date, setDate] = useState<Date>();

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            날짜를 선택하세요
          </p>
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[280px] justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "yyyy년 MM월 dd일", { locale: ko }) : "날짜 선택"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        
        {date && (
          <div className="text-center p-2 bg-muted rounded">
            <p className="text-sm">
              선택된 날짜: <strong>{format(date, "yyyy년 MM월 dd일", { locale: ko })}</strong>
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const UserProfile: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    return (
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 rounded-full p-0">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                홍
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  홍길동
                </div>
                <div>
                  <h4 className="font-medium">홍길동</h4>
                  <p className="text-sm text-muted-foreground">hong@example.com</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <Label htmlFor="notifications" className="text-sm">알림</Label>
                  </div>
                  <Switch
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <Label htmlFor="darkMode" className="text-sm">다크 모드</Label>
                  </div>
                  <Switch
                    id="darkMode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="mr-2 h-4 w-4" />
                  프로필 편집
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  계정 설정
                </Button>
                <Button variant="ghost" size="sm" className="justify-start text-red-600">
                  <Lock className="mr-2 h-4 w-4" />
                  로그아웃
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const QuickActions: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState(3);

    return (
      <div className="flex gap-4 items-center">
        <div className="text-sm text-muted-foreground">
          {selectedItems}개 항목 선택됨
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              작업
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56">
            <div className="grid gap-2">
              <div className="grid gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Edit className="mr-2 h-4 w-4" />
                  편집
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Copy className="mr-2 h-4 w-4" />
                  복사
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  다운로드
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Share className="mr-2 h-4 w-4" />
                  공유
                </Button>
              </div>
              
              <Separator />
              
              <div className="grid gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  즐겨찾기 추가
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  <Tag className="mr-2 h-4 w-4" />
                  태그 추가
                </Button>
              </div>
              
              <Separator />
              
              <Button variant="ghost" size="sm" className="justify-start text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                삭제
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const ColorPicker: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState('#3b82f6');
    
    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308',
      '#84cc16', '#22c55e', '#10b981', '#14b8a6',
      '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
      '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
      '#f43f5e', '#64748b', '#374151', '#111827'
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div 
            className="w-8 h-8 rounded border border-gray-300"
            style={{ backgroundColor: selectedColor }}
          />
          <span className="text-sm font-mono">{selectedColor}</span>
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              색상 선택
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium mb-2">색상 팔레트</h4>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded border-2 ${
                        selectedColor === color ? 'border-gray-900' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`색상 ${color} 선택`}
                    />
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <Label htmlFor="customColor" className="text-sm font-medium">
                  커스텀 색상
                </Label>
                <Input
                  id="customColor"
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full h-10 mt-2"
                />
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedColor('#000000')}
                >
                  초기화
                </Button>
                <Button size="sm">
                  적용
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const NotificationCenter: Story = {
  render: () => {
    const [unreadCount, setUnreadCount] = useState(5);
    
    const notifications = [
      {
        id: 1,
        title: '새 메시지',
        description: '김철수님이 메시지를 보냈습니다.',
        time: '2분 전',
        read: false,
        type: 'message'
      },
      {
        id: 2,
        title: '업데이트 완료',
        description: '시스템 업데이트가 완료되었습니다.',
        time: '1시간 전',
        read: false,
        type: 'system'
      },
      {
        id: 3,
        title: '파일 공유됨',
        description: '새로운 문서가 공유되었습니다.',
        time: '3시간 전',
        read: true,
        type: 'file'
      },
    ];

    const getNotificationIcon = (type: string) => {
      switch (type) {
        case 'message': return <Mail className="h-4 w-4 text-blue-500" />;
        case 'system': return <Settings className="h-4 w-4 text-green-500" />;
        case 'file': return <FileText className="h-4 w-4 text-orange-500" />;
        default: return <Bell className="h-4 w-4" />;
      }
    };

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">알림</h4>
              <Button variant="ghost" size="sm" onClick={() => setUnreadCount(0)}>
                모두 읽음
              </Button>
            </div>
            
            <div className="grid gap-3 max-h-80 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${
                    notification.read ? 'bg-muted/50' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{notification.title}</p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <Button variant="outline" size="sm" className="w-full">
              모든 알림 보기
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const ShareDialog: Story = {
  render: () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const shareUrl = 'https://example.com/shared-content';

    const handleCopyUrl = () => {
      navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    };

    const socialPlatforms = [
      { name: 'Twitter', color: 'bg-blue-400', icon: '🐦' },
      { name: 'Facebook', color: 'bg-blue-600', icon: '📘' },
      { name: 'LinkedIn', color: 'bg-blue-700', icon: '💼' },
      { name: 'WhatsApp', color: 'bg-green-500', icon: '💬' },
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Share className="mr-2 h-4 w-4" />
            공유하기
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div>
              <h4 className="font-medium mb-2">링크 공유</h4>
              <div className="flex gap-2">
                <Input
                  value={shareUrl}
                  readOnly
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyUrl}
                  className="px-3"
                >
                  {copySuccess ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {copySuccess && (
                <p className="text-sm text-green-600 mt-1">
                  링크가 복사되었습니다!
                </p>
              )}
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3">소셜 미디어</h4>
              <div className="grid grid-cols-2 gap-2">
                {socialPlatforms.map((platform) => (
                  <Button
                    key={platform.name}
                    variant="outline"
                    size="sm"
                    className="justify-start"
                  >
                    <span className="mr-2">{platform.icon}</span>
                    {platform.name}
                  </Button>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-2">이메일로 공유</h4>
              <div className="grid gap-2">
                <Input placeholder="이메일 주소 입력" />
                <Textarea 
                  placeholder="메시지 추가 (선택사항)" 
                  rows={2}
                  className="resize-none"
                />
                <Button size="sm">
                  <Send className="mr-2 h-4 w-4" />
                  보내기
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 관리 및 트랩</li>
            <li>• 자동 포지셔닝 및 충돌 방지</li>
            <li>• 적절한 색상 대비</li>
          </ul>
        </div>
        
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline"
              aria-haspopup="dialog"
              aria-expanded={isOpen}
              aria-describedby="popover-description"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              접근성 도움말
            </Button>
          </PopoverTrigger>
          <PopoverContent 
            className="w-80"
            role="dialog"
            aria-labelledby="popover-title"
            aria-describedby="popover-content"
          >
            <div className="grid gap-4">
              <div>
                <h4 id="popover-title" className="font-medium">
                  키보드 사용법
                </h4>
                <div id="popover-content" className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>팝오버 열기:</span>
                    <Badge variant="outline">Enter / Space</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>팝오버 닫기:</span>
                    <Badge variant="outline">Escape</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>요소 간 이동:</span>
                    <Badge variant="outline">Tab / Shift+Tab</Badge>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">스크린 리더 지원</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 팝오버 상태 자동 안내</li>
                  <li>• 콘텐츠 구조 명확히 전달</li>
                  <li>• 상호작용 가능한 요소 식별</li>
                </ul>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  onClick={() => setIsOpen(false)}
                  aria-label="도움말 창 닫기"
                >
                  <Check className="mr-2 h-4 w-4" />
                  이해했어요
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  aria-label="도움말 창 닫기"
                >
                  <X className="mr-2 h-4 w-4" />
                  닫기
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <div id="popover-description" className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab으로 버튼에 포커스 후 Enter/Space로 열기, Escape로 닫기
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 팝오버 데모입니다.',
      },
    },
  },
};