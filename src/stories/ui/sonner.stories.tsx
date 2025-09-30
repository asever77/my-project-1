import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Check, 
  X, 
  AlertCircle, 
  Info, 
  Bell, 
  Heart, 
  Star, 
  Download, 
  Upload, 
  Mail, 
  MessageSquare, 
  User, 
  Settings, 
  ShoppingCart as ShoppingCartIcon, 
  CreditCard, 
  Package, 
  Truck, 
  Clock, 
  Calendar, 
  FileText, 
  Image as ImageIcon, 
  Music, 
  Video, 
  Zap, 
  Shield, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Home, 
  Building, 
  Phone, 
  Globe, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryLow, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Repeat, 
  Shuffle, 
  Share2, 
  Bookmark, 
  Copy, 
  Save, 
  Trash2, 
  Edit, 
  Plus, 
  Minus, 
  Search, 
  Filter, 
  RefreshCw,
  Loader2
} from 'lucide-react';

const meta: Meta = {
  title: 'UI/Overlay/Sonner',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '사용자에게 피드백과 알림을 제공하는 토스트 컴포넌트입니다. 성공, 오류, 경고, 정보 메시지를 표시할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <Story />
        <Toaster 
          position="top-right" 
          richColors
          closeButton
          toastOptions={{
            duration: 4000,
          }}
        />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">기본 토스트</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          onClick={() => toast.success('성공적으로 저장되었습니다!')}
          variant="default"
        >
          <Check className="h-4 w-4 mr-2" />
          성공
        </Button>
        
        <Button
          onClick={() => toast.error('오류가 발생했습니다.')}
          variant="destructive"
        >
          <X className="h-4 w-4 mr-2" />
          오류
        </Button>
        
        <Button
          onClick={() => toast.warning('주의가 필요합니다.')}
          variant="secondary"
        >
          <AlertCircle className="h-4 w-4 mr-2" />
          경고
        </Button>
        
        <Button
          onClick={() => toast.info('새로운 정보가 있습니다.')}
          variant="outline"
        >
          <Info className="h-4 w-4 mr-2" />
          정보
        </Button>
      </div>
    </div>
  ),
};

export const InteractiveToasts: Story = {
  render: () => {
    const handleActionToast = () => {
      toast('파일을 삭제하시겠습니까?', {
        description: '이 작업은 되돌릴 수 없습니다.',
        action: {
          label: '삭제',
          onClick: () => toast.success('파일이 삭제되었습니다.'),
        },
        cancel: {
          label: '취소',
          onClick: () => toast.info('작업이 취소되었습니다.'),
        },
      });
    };

    const handleLoadingToast = () => {
      const loadingToast = toast.loading('파일을 업로드하는 중...');
      
      setTimeout(() => {
        toast.success('파일 업로드가 완료되었습니다!', {
          id: loadingToast,
        });
      }, 3000);
    };

    const handlePromiseToast = () => {
      const promise = new Promise((resolve) => 
        setTimeout(() => resolve({ name: 'document.pdf' }), 2000)
      );

      toast.promise(promise, {
        loading: '파일을 처리하는 중...',
        success: (data: any) => `${data.name} 처리가 완료되었습니다!`,
        error: '파일 처리 중 오류가 발생했습니다.',
      });
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">인터랙티브 토스트</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button onClick={handleActionToast} variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            액션 토스트
          </Button>
          
          <Button onClick={handleLoadingToast} variant="secondary">
            <Upload className="h-4 w-4 mr-2" />
            로딩 토스트
          </Button>
          
          <Button onClick={handlePromiseToast} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            프로미스 토스트
          </Button>
        </div>
      </div>
    );
  },
};

export const EcommerceToasts: Story = {
  render: () => {
    const notifications = [
      {
        id: 'cart',
        title: '장바구니에 추가됨',
        description: 'iPhone 15 Pro가 장바구니에 추가되었습니다.',
        icon: ShoppingCartIcon,
        action: () => toast.success('장바구니로 이동했습니다.'),
      },
      {
        id: 'wishlist',
        title: '위시리스트에 추가됨',
        description: '나이키 에어맥스를 위시리스트에 저장했습니다.',
        icon: Heart,
        action: () => toast.info('위시리스트를 확인하세요.'),
      },
      {
        id: 'order',
        title: '주문이 완료되었습니다',
        description: '주문번호 #12345로 주문이 접수되었습니다.',
        icon: Package,
        action: () => toast.success('주문 상세 페이지로 이동합니다.'),
      },
      {
        id: 'shipping',
        title: '배송이 시작되었습니다',
        description: '상품이 배송 준비 중입니다. 2-3일 내 도착 예정입니다.',
        icon: Truck,
        action: () => toast.info('배송 추적 페이지로 이동합니다.'),
      },
      {
        id: 'payment',
        title: '결제가 완료되었습니다',
        description: '카드 결제 ₩129,000이 성공적으로 처리되었습니다.',
        icon: CreditCard,
        action: () => toast.success('결제 내역을 확인하세요.'),
      },
      {
        id: 'review',
        title: '리뷰 작성 완료',
        description: '상품에 대한 리뷰가 성공적으로 등록되었습니다.',
        icon: Star,
        action: () => toast.info('다른 상품도 리뷰해보세요!'),
      },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">이커머스 알림</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Button
                key={notification.id}
                onClick={() => {
                  toast.success(notification.title, {
                    description: notification.description,
                    action: {
                      label: '보기',
                      onClick: notification.action,
                    },
                  });
                }}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-2 w-full">
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium text-sm">{notification.title}</span>
                </div>
                <p className="text-xs text-muted-foreground text-left">
                  {notification.description}
                </p>
              </Button>
            );
          })}
        </div>
      </div>
    );
  },
};

export const SystemNotifications: Story = {
  render: () => {
    const systemEvents = [
      {
        type: 'connection',
        title: '인터넷 연결됨',
        description: 'Wi-Fi에 성공적으로 연결되었습니다.',
        icon: Wifi,
        variant: 'success' as const,
      },
      {
        type: 'disconnection',
        title: '인터넷 연결 끊김',
        description: '네트워크 연결을 확인해주세요.',
        icon: WifiOff,
        variant: 'error' as const,
      },
      {
        type: 'battery',
        title: '배터리 부족',
        description: '배터리가 20% 남았습니다. 충전기를 연결하세요.',
        icon: BatteryLow,
        variant: 'warning' as const,
      },
      {
        type: 'update',
        title: '업데이트 완료',
        description: '시스템이 최신 버전으로 업데이트되었습니다.',
        icon: RefreshCw,
        variant: 'success' as const,
      },
      {
        type: 'security',
        title: '보안 알림',
        description: '새로운 기기에서 로그인이 감지되었습니다.',
        icon: Shield,
        variant: 'warning' as const,
      },
      {
        type: 'backup',
        title: '백업 완료',
        description: '모든 데이터가 클라우드에 백업되었습니다.',
        icon: Save,
        variant: 'info' as const,
      },
    ];

    const triggerToast = (event: typeof systemEvents[0]) => {
      const IconComponent = event.icon;
      
      switch (event.variant) {
        case 'success':
          toast.success(event.title, { description: event.description });
          break;
        case 'error':
          toast.error(event.title, { description: event.description });
          break;
        case 'warning':
          toast.warning(event.title, { description: event.description });
          break;
        case 'info':
          toast.info(event.title, { description: event.description });
          break;
      }
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">시스템 알림</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systemEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <Card key={event.type} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Button
                    onClick={() => triggerToast(event)}
                    variant="ghost"
                    className="w-full h-auto p-0 flex flex-col items-start gap-2"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <IconComponent className="h-4 w-4" />
                      <Badge variant={
                        event.variant === 'success' ? 'default' :
                        event.variant === 'error' ? 'destructive' :
                        event.variant === 'warning' ? 'secondary' : 'outline'
                      }>
                        {event.variant}
                      </Badge>
                    </div>
                    <div className="text-left w-full">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {event.description}
                      </p>
                    </div>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  },
};

export const SocialMediaToasts: Story = {
  render: () => {
    const socialEvents = [
      {
        id: 'like',
        title: '새로운 좋아요',
        description: '홍길동님이 회원님의 게시물을 좋아합니다.',
        icon: Heart,
        action: '게시물 보기',
      },
      {
        id: 'comment',
        title: '새로운 댓글',
        description: '김영희님이 댓글을 남겼습니다: "정말 멋진 사진이네요!"',
        icon: MessageSquare,
        action: '댓글 보기',
      },
      {
        id: 'follow',
        title: '새로운 팔로워',
        description: '이철수님이 회원님을 팔로우하기 시작했습니다.',
        icon: User,
        action: '프로필 보기',
      },
      {
        id: 'mention',
        title: '멘션 알림',
        description: '박민수님이 회원님을 게시물에 태그했습니다.',
        icon: Bell,
        action: '게시물 보기',
      },
      {
        id: 'share',
        title: '공유 알림',
        description: '회원님의 게시물이 10번 공유되었습니다.',
        icon: Share2,
        action: '통계 보기',
      },
      {
        id: 'message',
        title: '새로운 메시지',
        description: '최지영님으로부터 새로운 메시지가 도착했습니다.',
        icon: Mail,
        action: '메시지 보기',
      },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">소셜 미디어 알림</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialEvents.map((event) => {
            const IconComponent = event.icon;
            return (
              <Button
                key={event.id}
                onClick={() => {
                  toast(event.title, {
                    description: event.description,
                    icon: <IconComponent className="h-4 w-4" />,
                    action: {
                      label: event.action,
                      onClick: () => toast.success(`${event.action} 페이지로 이동합니다.`),
                    },
                  });
                }}
                variant="outline"
                className="h-auto p-4 flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-2 w-full">
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium text-sm">{event.title}</span>
                </div>
                <p className="text-xs text-muted-foreground text-left">
                  {event.description}
                </p>
              </Button>
            );
          })}
        </div>
      </div>
    );
  },
};

export const MediaPlayerToasts: Story = {
  render: () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(75);
    const [currentTrack] = useState('좋은 날 - IU');

    const mediaActions = [
      {
        id: 'play',
        title: '재생 시작',
        action: () => {
          setIsPlaying(true);
          toast.success('재생 중', {
            description: currentTrack,
            icon: <Play className="h-4 w-4" />,
          });
        },
        icon: Play,
      },
      {
        id: 'pause',
        title: '일시정지',
        action: () => {
          setIsPlaying(false);
          toast.info('일시정지', {
            description: currentTrack,
            icon: <Pause className="h-4 w-4" />,
          });
        },
        icon: Pause,
      },
      {
        id: 'next',
        title: '다음 곡',
        action: () => {
          toast('다음 곡으로 이동', {
            description: 'ELEVEN - IVE',
            icon: <SkipForward className="h-4 w-4" />,
          });
        },
        icon: SkipForward,
      },
      {
        id: 'volume',
        title: '볼륨 조절',
        action: () => {
          const newVolume = Math.floor(Math.random() * 100);
          setVolume(newVolume);
          toast(`볼륨 ${newVolume}%`, {
            icon: newVolume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />,
          });
        },
        icon: Volume2,
      },
      {
        id: 'shuffle',
        title: '셔플 모드',
        action: () => {
          toast.success('셔플 모드 활성화', {
            description: '곡이 무작위로 재생됩니다.',
            icon: <Shuffle className="h-4 w-4" />,
          });
        },
        icon: Shuffle,
      },
      {
        id: 'repeat',
        title: '반복 재생',
        action: () => {
          toast.info('반복 재생 활성화', {
            description: '현재 곡을 반복 재생합니다.',
            icon: <Repeat className="h-4 w-4" />,
          });
        },
        icon: Repeat,
      },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">미디어 플레이어 알림</h3>
        
        <Card className="p-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
              <Music className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium">{currentTrack}</h4>
              <p className="text-sm text-muted-foreground">
                {isPlaying ? '재생 중' : '일시정지'} • 볼륨 {volume}%
              </p>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mediaActions.map((action) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={action.id}
                onClick={action.action}
                variant="outline"
                className="flex items-center gap-2"
              >
                <IconComponent className="h-4 w-4" />
                {action.title}
              </Button>
            );
          })}
        </div>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [announcements, setAnnouncements] = useState<string[]>([]);

    const addAnnouncement = (message: string) => {
      setAnnouncements(prev => [...prev, message]);
      setTimeout(() => {
        setAnnouncements(prev => prev.slice(1));
      }, 5000);
    };

    const accessibleToasts = [
      {
        id: 'success-accessible',
        title: '접근성 성공 알림',
        description: '스크린 리더 사용자를 위한 상세한 설명이 포함된 성공 메시지입니다.',
        action: () => {
          toast.success('작업이 성공적으로 완료되었습니다', {
            description: '문서가 저장되었으며, 자동으로 백업되었습니다. 계속해서 편집할 수 있습니다.',
            duration: 6000,
          });
          addAnnouncement('성공: 문서 저장 및 백업 완료');
        },
      },
      {
        id: 'error-accessible',
        title: '접근성 오류 알림',
        description: '문제 해결 방법이 포함된 오류 메시지입니다.',
        action: () => {
          toast.error('파일 업로드에 실패했습니다', {
            description: '파일 크기가 10MB를 초과합니다. 파일을 압축하거나 작은 파일로 나누어 업로드해주세요.',
            action: {
              label: '도움말 보기',
              onClick: () => {
                toast.info('도움말 페이지로 이동합니다');
                addAnnouncement('도움말 페이지 열기');
              },
            },
            duration: 8000,
          });
          addAnnouncement('오류: 파일 업로드 실패 - 크기 초과');
        },
      },
      {
        id: 'warning-accessible',
        title: '접근성 경고 알림',
        description: '중요한 정보와 권장 사항이 포함된 경고 메시지입니다.',
        action: () => {
          toast.warning('세션이 곧 만료됩니다', {
            description: '5분 후 자동으로 로그아웃됩니다. 작업 중인 내용을 저장하세요.',
            action: {
              label: '세션 연장',
              onClick: () => {
                toast.success('세션이 연장되었습니다');
                addAnnouncement('세션 연장 완료');
              },
            },
            cancel: {
              label: '지금 저장',
              onClick: () => {
                toast.success('작업 내용이 저장되었습니다');
                addAnnouncement('작업 내용 저장 완료');
              },
            },
            duration: 10000,
          });
          addAnnouncement('경고: 세션 만료 임박');
        },
      },
    ];

    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Escape)</li>
            <li>• 적절한 색상 대비와 아이콘</li>
            <li>• 충분한 표시 시간과 일시정지 옵션</li>
            <li>• 명확한 액션 버튼과 설명</li>
          </ul>
        </div>

        {/* 실시간 알림 영역 (스크린 리더용) */}
        <div 
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
          className="sr-only"
        >
          {announcements.map((announcement, index) => (
            <div key={index}>{announcement}</div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessibleToasts.map((toast) => (
            <Card key={toast.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Button
                  onClick={toast.action}
                  variant="ghost"
                  className="w-full h-auto p-0 flex flex-col items-start gap-3"
                  aria-describedby={`${toast.id}-description`}
                >
                  <h4 className="font-medium text-sm text-left">{toast.title}</h4>
                  <p 
                    id={`${toast.id}-description`}
                    className="text-xs text-muted-foreground text-left"
                  >
                    {toast.description}
                  </p>
                  <Badge variant="outline" className="self-start">
                    클릭하여 실행
                  </Badge>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 토스트 설정 데모 */}
        <Card>
          <CardHeader>
            <CardTitle>토스트 설정</CardTitle>
            <CardDescription>
              사용자의 접근성 요구에 맞게 토스트 동작을 조정할 수 있습니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => {
                  toast('긴 표시 시간 토스트', {
                    description: '시각 장애인을 위해 충분한 시간 동안 표시됩니다.',
                    duration: 10000,
                  });
                  addAnnouncement('긴 표시 시간 토스트 활성화');
                }}
                variant="outline"
              >
                <Clock className="h-4 w-4 mr-2" />
                긴 표시 시간 (10초)
              </Button>

              <Button
                onClick={() => {
                  toast('고대비 토스트', {
                    description: '시각적 인식을 높이기 위한 고대비 디자인입니다.',
                    className: 'border-2 border-black bg-white text-black',
                  });
                  addAnnouncement('고대비 토스트 표시');
                }}
                variant="outline"
              >
                <Eye className="h-4 w-4 mr-2" />
                고대비 모드
              </Button>

              <Button
                onClick={() => {
                  toast('음성 설명 포함', {
                    description: '이 토스트는 스크린 리더에 의해 자동으로 읽힙니다. 중요한 정보가 포함되어 있습니다.',
                    duration: 8000,
                  });
                  addAnnouncement('중요 알림: 음성 설명이 포함된 토스트입니다. 스크린 리더 사용자를 위한 상세한 정보가 제공됩니다.');
                }}
                variant="outline"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                음성 설명 포함
              </Button>

              <Button
                onClick={() => {
                  toast('키보드 내비게이션', {
                    description: 'Tab키로 버튼에 포커스하고 Enter로 실행할 수 있습니다.',
                    action: {
                      label: '확인',
                      onClick: () => {
                        toast.success('키보드로 실행됨');
                        addAnnouncement('키보드 내비게이션 성공');
                      },
                    },
                  });
                  addAnnouncement('키보드 내비게이션 토스트 표시');
                }}
                variant="outline"
              >
                <Settings className="h-4 w-4 mr-2" />
                키보드 내비게이션
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">접근성 팁</h5>
              <p className="text-sm text-blue-800 mt-1">
                토스트는 중요한 정보를 전달하는 도구입니다. 스크린 리더 사용자도 내용을 완전히 이해할 수 있도록 
                명확한 제목과 설명, 충분한 표시 시간을 제공하세요. 또한 키보드만으로도 모든 액션을 수행할 수 있어야 합니다.
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
        story: '토스트 컴포넌트의 접근성 기능과 스크린 리더 지원을 보여주는 데모입니다.',
      },
    },
  },
};