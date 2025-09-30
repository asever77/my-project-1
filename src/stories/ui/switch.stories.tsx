import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { 
  Bell, 
  BellOff, 
  Eye, 
  EyeOff, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff, 
  Bluetooth, 
  Airplane, 
  Shield, 
  ShieldOff, 
  Lock, 
  Unlock, 
  Settings, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Battery, 
  BatteryLow, 
  Zap, 
  ZapOff, 
  Globe, 
  GlobeIcon, 
  Heart, 
  HeartOff, 
  Star, 
  Bookmark, 
  BookmarkCheck, 
  Mail, 
  MailOpen, 
  MessageSquare, 
  MessageSquareOff, 
  Camera, 
  CameraOff, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  MapPin, 
  Navigation, 
  Compass, 
  Clock, 
  Timer, 
  Calendar, 
  CalendarOff, 
  FileText, 
  File, 
  Download, 
  Upload, 
  Share2, 
  Link, 
  Archive, 
  Trash2, 
  Edit, 
  Save, 
  RefreshCw, 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Repeat, 
  Shuffle, 
  Radio,
  Database,
  CloudIcon,
  HardDrive,
  Cpu,
  MemoryStick,
  Power,
  PowerOff
} from 'lucide-react';

const meta: Meta<typeof Switch> = {
  title: 'UI/Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '사용자가 옵션을 켜거나 끌 수 있는 토글 스위치 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      description: '스위치의 체크 상태',
      control: 'boolean',
    },
    disabled: {
      description: '비활성화 상태',
      control: 'boolean',
    },
    size: {
      description: '스위치 크기',
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 스위치</h3>
        <div className="flex items-center space-x-2">
          <Switch
            id="default-switch"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="default-switch">
            알림 활성화 ({checked ? '켜짐' : '꺼짐'})
          </Label>
        </div>
      </div>
    );
  },
};

export const NotificationSettings: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      pushNotifications: true,
      emailNotifications: false,
      smsNotifications: true,
      desktopNotifications: false,
      soundEnabled: true,
      vibrationEnabled: true,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const notificationOptions = [
      {
        id: 'pushNotifications',
        label: '푸시 알림',
        description: '앱에서 발생하는 실시간 알림을 받습니다',
        icon: settings.pushNotifications ? Bell : BellOff,
        checked: settings.pushNotifications,
      },
      {
        id: 'emailNotifications',
        label: '이메일 알림',
        description: '중요한 소식을 이메일로 받습니다',
        icon: settings.emailNotifications ? Mail : MailOpen,
        checked: settings.emailNotifications,
      },
      {
        id: 'smsNotifications',
        label: 'SMS 알림',
        description: '긴급한 알림을 문자로 받습니다',
        icon: settings.smsNotifications ? MessageSquare : MessageSquareOff,
        checked: settings.smsNotifications,
      },
      {
        id: 'desktopNotifications',
        label: '데스크톱 알림',
        description: '브라우저 데스크톱 알림을 표시합니다',
        icon: settings.desktopNotifications ? Monitor : Laptop,
        checked: settings.desktopNotifications,
      },
      {
        id: 'soundEnabled',
        label: '알림음',
        description: '알림 시 소리를 재생합니다',
        icon: settings.soundEnabled ? Volume2 : VolumeX,
        checked: settings.soundEnabled,
      },
      {
        id: 'vibrationEnabled',
        label: '진동',
        description: '모바일 기기에서 진동을 활성화합니다',
        icon: settings.vibrationEnabled ? Smartphone : Tablet,
        checked: settings.vibrationEnabled,
      },
    ];

    return (
      <div className="w-full max-w-2xl space-y-4">
        <h3 className="text-lg font-semibold mb-4">알림 설정</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림 환경설정
            </CardTitle>
            <CardDescription>
              받고 싶은 알림 유형을 선택하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {notificationOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <IconComponent className="h-5 w-5 text-muted-foreground" />
                    <div className="space-y-1">
                      <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={option.id}
                    checked={option.checked}
                    onCheckedChange={() => updateSetting(option.id as keyof typeof settings)}
                  />
                </div>
              );
            })}
            
            <Separator />
            
            <div className="text-center text-sm text-muted-foreground">
              활성화된 알림: {Object.values(settings).filter(Boolean).length}개 / {Object.keys(settings).length}개
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const PrivacySettings: Story = {
  render: () => {
    const [privacy, setPrivacy] = useState({
      profileVisibility: true,
      onlineStatus: false,
      activityTracking: true,
      locationSharing: false,
      dataCollection: false,
      personalizedAds: true,
      cookieConsent: true,
      analyticsOptIn: false,
    });

    const updatePrivacy = (key: keyof typeof privacy) => {
      setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const privacyOptions = [
      {
        id: 'profileVisibility',
        label: '프로필 공개',
        description: '다른 사용자에게 프로필을 공개합니다',
        icon: privacy.profileVisibility ? Eye : EyeOff,
        checked: privacy.profileVisibility,
        level: 'medium' as const,
      },
      {
        id: 'onlineStatus',
        label: '온라인 상태 표시',
        description: '현재 온라인 상태를 다른 사용자에게 표시합니다',
        icon: privacy.onlineStatus ? Globe : GlobeIcon,
        checked: privacy.onlineStatus,
        level: 'high' as const,
      },
      {
        id: 'activityTracking',
        label: '활동 추적',
        description: '서비스 개선을 위한 사용 패턴 분석을 허용합니다',
        icon: privacy.activityTracking ? MapPin : Navigation,
        checked: privacy.activityTracking,
        level: 'medium' as const,
      },
      {
        id: 'locationSharing',
        label: '위치 정보 공유',
        description: '현재 위치 정보를 서비스에서 사용할 수 있도록 허용합니다',
        icon: privacy.locationSharing ? MapPin : Compass,
        checked: privacy.locationSharing,
        level: 'high' as const,
      },
      {
        id: 'dataCollection',
        label: '데이터 수집',
        description: '서비스 개선을 위한 사용 데이터 수집을 허용합니다',
        icon: privacy.dataCollection ? Database : HardDrive,
        checked: privacy.dataCollection,
        level: 'medium' as const,
      },
      {
        id: 'personalizedAds',
        label: '맞춤형 광고',
        description: '관심사에 기반한 맞춤형 광고를 표시합니다',
        icon: privacy.personalizedAds ? Star : Bookmark,
        checked: privacy.personalizedAds,
        level: 'low' as const,
      },
      {
        id: 'cookieConsent',
        label: '쿠키 사용',
        description: '웹사이트 기능 향상을 위한 쿠키 사용을 허용합니다',
        icon: privacy.cookieConsent ? Shield : ShieldOff,
        checked: privacy.cookieConsent,
        level: 'low' as const,
      },
      {
        id: 'analyticsOptIn',
        label: '분석 도구 참여',
        description: '사용자 경험 분석을 위한 도구 사용을 허용합니다',
        icon: privacy.analyticsOptIn ? Settings : Edit,
        checked: privacy.analyticsOptIn,
        level: 'medium' as const,
      },
    ];

    const getLevelColor = (level: 'low' | 'medium' | 'high') => {
      switch (level) {
        case 'low': return 'bg-green-100 text-green-800';
        case 'medium': return 'bg-yellow-100 text-yellow-800';
        case 'high': return 'bg-red-100 text-red-800';
      }
    };

    const getLevelText = (level: 'low' | 'medium' | 'high') => {
      switch (level) {
        case 'low': return '낮음';
        case 'medium': return '보통';
        case 'high': return '높음';
      }
    };

    return (
      <div className="w-full max-w-2xl space-y-4">
        <h3 className="text-lg font-semibold mb-4">개인정보 설정</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              개인정보 보호 설정
            </CardTitle>
            <CardDescription>
              개인정보 보호 수준을 조정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {privacyOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <IconComponent className="h-5 w-5 text-muted-foreground" />
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                          {option.label}
                        </Label>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getLevelColor(option.level)}`}
                        >
                          민감도: {getLevelText(option.level)}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={option.id}
                    checked={option.checked}
                    onCheckedChange={() => updatePrivacy(option.id as keyof typeof privacy)}
                  />
                </div>
              );
            })}
            
            <Separator />
            
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="font-medium">공개 설정</div>
                <div className="text-xs text-muted-foreground">
                  {Object.entries(privacy).filter(([key, value]) => 
                    ['profileVisibility', 'onlineStatus'].includes(key) && value
                  ).length}/2 활성화
                </div>
              </div>
              <div>
                <div className="font-medium">데이터 수집</div>
                <div className="text-xs text-muted-foreground">
                  {Object.entries(privacy).filter(([key, value]) => 
                    ['activityTracking', 'dataCollection', 'analyticsOptIn'].includes(key) && value
                  ).length}/3 허용
                </div>
              </div>
              <div>
                <div className="font-medium">광고 및 쿠키</div>
                <div className="text-xs text-muted-foreground">
                  {Object.entries(privacy).filter(([key, value]) => 
                    ['personalizedAds', 'cookieConsent'].includes(key) && value
                  ).length}/2 허용
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const SystemSettings: Story = {
  render: () => {
    const [system, setSystem] = useState({
      darkMode: false,
      autoUpdate: true,
      bluetooth: false,
      wifi: true,
      airplane: false,
      powerSaving: false,
      autoBackup: true,
      cloudSync: false,
    });

    const updateSystem = (key: keyof typeof system) => {
      setSystem(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const systemOptions = [
      {
        id: 'darkMode',
        label: '다크 모드',
        description: '어두운 테마로 전환합니다',
        icon: system.darkMode ? Moon : Sun,
        checked: system.darkMode,
        category: 'display',
      },
      {
        id: 'autoUpdate',
        label: '자동 업데이트',
        description: '앱을 자동으로 최신 버전으로 업데이트합니다',
        icon: system.autoUpdate ? RefreshCw : Pause,
        checked: system.autoUpdate,
        category: 'system',
      },
      {
        id: 'bluetooth',
        label: 'Bluetooth',
        description: 'Bluetooth 연결을 활성화합니다',
        icon: system.bluetooth ? Bluetooth : Radio,
        checked: system.bluetooth,
        category: 'connectivity',
      },
      {
        id: 'wifi',
        label: 'Wi-Fi',
        description: '무선 인터넷 연결을 활성화합니다',
        icon: system.wifi ? Wifi : WifiOff,
        checked: system.wifi,
        category: 'connectivity',
      },
      {
        id: 'airplane',
        label: '비행기 모드',
        description: '모든 무선 연결을 비활성화합니다',
        icon: system.airplane ? Airplane : Globe,
        checked: system.airplane,
        category: 'connectivity',
      },
      {
        id: 'powerSaving',
        label: '절전 모드',
        description: '배터리 사용량을 줄여 사용 시간을 연장합니다',
        icon: system.powerSaving ? BatteryLow : Battery,
        checked: system.powerSaving,
        category: 'power',
      },
      {
        id: 'autoBackup',
        label: '자동 백업',
        description: '중요한 데이터를 자동으로 백업합니다',
        icon: system.autoBackup ? Save : Archive,
        checked: system.autoBackup,
        category: 'data',
      },
      {
        id: 'cloudSync',
        label: '클라우드 동기화',
        description: '데이터를 클라우드와 동기화합니다',
        icon: system.cloudSync ? CloudIcon : HardDrive,
        checked: system.cloudSync,
        category: 'data',
      },
    ];

    const categories = {
      display: '화면 설정',
      system: '시스템',
      connectivity: '연결성',
      power: '전원 관리',
      data: '데이터 관리',
    };

    const groupedOptions = Object.entries(categories).map(([key, title]) => ({
      title,
      options: systemOptions.filter(option => option.category === key),
    }));

    return (
      <div className="w-full max-w-2xl space-y-4">
        <h3 className="text-lg font-semibold mb-4">시스템 설정</h3>
        
        {groupedOptions.map(({ title, options }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {options.map((option) => {
                const IconComponent = option.icon;
                return (
                  <div key={option.id} className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-3 flex-1">
                      <IconComponent className="h-5 w-5 text-muted-foreground" />
                      <div className="space-y-1">
                        <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                          {option.label}
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    <Switch
                      id={option.id}
                      checked={option.checked}
                      onCheckedChange={() => updateSystem(option.id as keyof typeof system)}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  },
};

export const MediaControls: Story = {
  render: () => {
    const [media, setMedia] = useState({
      autoplay: false,
      hd: true,
      subtitles: false,
      nightMode: true,
      backgroundPlay: false,
      downloadOverWifiOnly: true,
    });

    const updateMedia = (key: keyof typeof media) => {
      setMedia(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const currentTrack = {
      title: '좋은 날',
      artist: 'IU',
      duration: '3:45',
    };

    const mediaOptions = [
      {
        id: 'autoplay',
        label: '자동 재생',
        description: '다음 트랙을 자동으로 재생합니다',
        icon: media.autoplay ? Play : Pause,
        checked: media.autoplay,
      },
      {
        id: 'hd',
        label: 'HD 화질',
        description: '고화질로 비디오를 재생합니다',
        icon: media.hd ? Video : Monitor,
        checked: media.hd,
      },
      {
        id: 'subtitles',
        label: '자막 표시',
        description: '사용 가능한 자막을 표시합니다',
        icon: media.subtitles ? FileText : File,
        checked: media.subtitles,
      },
      {
        id: 'nightMode',
        label: '야간 모드',
        description: '어두운 환경에 최적화된 화면으로 전환합니다',
        icon: media.nightMode ? Moon : Sun,
        checked: media.nightMode,
      },
      {
        id: 'backgroundPlay',
        label: '백그라운드 재생',
        description: '다른 앱 사용 중에도 음악을 계속 재생합니다',
        icon: media.backgroundPlay ? Smartphone : Tablet,
        checked: media.backgroundPlay,
      },
      {
        id: 'downloadOverWifiOnly',
        label: 'Wi-Fi에서만 다운로드',
        description: '데이터 절약을 위해 Wi-Fi 연결시에만 다운로드합니다',
        icon: media.downloadOverWifiOnly ? Wifi : Download,
        checked: media.downloadOverWifiOnly,
      },
    ];

    return (
      <div className="w-full max-w-lg space-y-4">
        <h3 className="text-lg font-semibold mb-4">미디어 설정</h3>
        
        {/* 현재 재생 중인 미디어 */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                <Play className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{currentTrack.title}</h4>
                <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
              </div>
              <Badge variant="outline">{currentTrack.duration}</Badge>
            </div>
          </CardContent>
        </Card>
        
        {/* 미디어 설정 옵션 */}
        <Card>
          <CardHeader>
            <CardTitle>재생 설정</CardTitle>
            <CardDescription>
              미디어 재생 환경을 개인화하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mediaOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <div key={option.id} className="flex items-center justify-between space-x-4">
                  <div className="flex items-center space-x-3 flex-1">
                    <IconComponent className="h-5 w-5 text-muted-foreground" />
                    <div className="space-y-1">
                      <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={option.id}
                    checked={option.checked}
                    onCheckedChange={() => updateMedia(option.id as keyof typeof media)}
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      screenReader: true,
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      keyboardNavigation: true,
      voiceControl: false,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const accessibilityOptions = [
      {
        id: 'screenReader',
        label: '스크린 리더 지원',
        description: '스크린 리더 소프트웨어와의 호환성을 향상시킵니다',
        icon: settings.screenReader ? Volume2 : VolumeX,
        checked: settings.screenReader,
        importance: 'critical' as const,
      },
      {
        id: 'highContrast',
        label: '고대비 모드',
        description: '텍스트와 배경 간의 대비를 높여 가독성을 향상시킵니다',
        icon: settings.highContrast ? Eye : EyeOff,
        checked: settings.highContrast,
        importance: 'high' as const,
      },
      {
        id: 'largeText',
        label: '큰 텍스트',
        description: '모든 텍스트 크기를 확대하여 읽기 쉽게 만듭니다',
        icon: settings.largeText ? Eye : Monitor,
        checked: settings.largeText,
        importance: 'high' as const,
      },
      {
        id: 'reducedMotion',
        label: '애니메이션 감소',
        description: '화면 애니메이션과 전환 효과를 최소화합니다',
        icon: settings.reducedMotion ? Pause : Play,
        checked: settings.reducedMotion,
        importance: 'medium' as const,
      },
      {
        id: 'keyboardNavigation',
        label: '키보드 내비게이션',
        description: '마우스 없이 키보드만으로 모든 기능을 사용할 수 있습니다',
        icon: settings.keyboardNavigation ? Settings : Lock,
        checked: settings.keyboardNavigation,
        importance: 'critical' as const,
      },
      {
        id: 'voiceControl',
        label: '음성 제어',
        description: '음성 명령으로 앱을 제어할 수 있습니다',
        icon: settings.voiceControl ? Mic : MicOff,
        checked: settings.voiceControl,
        importance: 'medium' as const,
      },
    ];

    const getImportanceColor = (importance: 'critical' | 'high' | 'medium') => {
      switch (importance) {
        case 'critical': return 'bg-red-100 text-red-800 border-red-200';
        case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
        case 'medium': return 'bg-blue-100 text-blue-800 border-blue-200';
      }
    };

    const getImportanceText = (importance: 'critical' | 'high' | 'medium') => {
      switch (importance) {
        case 'critical': return '필수';
        case 'high': return '중요';
        case 'medium': return '보통';
      }
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, Space)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 적절한 색상 대비와 포커스 표시</li>
            <li>• 상태 변경 시 명확한 피드백</li>
            <li>• 접근 가능한 라벨과 설명</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 접근성이 적용된 스위치 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                접근성 설정
              </CardTitle>
              <CardDescription>
                모든 사용자가 앱을 편리하게 사용할 수 있도록 도와주는 설정입니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {accessibilityOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <div key={option.id} className="space-y-3">
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-3 flex-1">
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <Label 
                              htmlFor={option.id} 
                              className="text-sm font-medium cursor-pointer"
                            >
                              {option.label}
                            </Label>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getImportanceColor(option.importance)}`}
                            >
                              {getImportanceText(option.importance)}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                      </div>
                      <Switch
                        id={option.id}
                        checked={option.checked}
                        onCheckedChange={() => updateSetting(option.id as keyof typeof settings)}
                        aria-describedby={`${option.id}-description`}
                        aria-label={`${option.label} ${option.checked ? '활성화됨' : '비활성화됨'}`}
                      />
                    </div>
                    
                    {/* 스크린 리더용 추가 설명 */}
                    <div id={`${option.id}-description`} className="sr-only">
                      {option.description}. 현재 상태: {option.checked ? '활성화됨' : '비활성화됨'}.
                      {option.importance === 'critical' && ' 이 설정은 접근성에 매우 중요합니다.'}
                    </div>
                  </div>
                );
              })}
              
              <Separator />
              
              <div className="text-center text-sm">
                <div className="font-medium mb-2">접근성 점수</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <Badge variant="destructive" className="w-full">
                      필수: {accessibilityOptions.filter(o => o.importance === 'critical' && o.checked).length}/
                      {accessibilityOptions.filter(o => o.importance === 'critical').length}
                    </Badge>
                  </div>
                  <div>
                    <Badge variant="secondary" className="w-full">
                      중요: {accessibilityOptions.filter(o => o.importance === 'high' && o.checked).length}/
                      {accessibilityOptions.filter(o => o.importance === 'high').length}
                    </Badge>
                  </div>
                  <div>
                    <Badge variant="outline" className="w-full">
                      보통: {accessibilityOptions.filter(o => o.importance === 'medium' && o.checked).length}/
                      {accessibilityOptions.filter(o => o.importance === 'medium').length}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 접근성 가이드라인 */}
          <Card>
            <CardHeader>
              <CardTitle>스위치 접근성 가이드라인</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 Label과 현재 상태 설명</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드로 조작 가능 (Tab, Space, Enter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 속성 사용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>시각적 포커스 인디케이터</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>충분한 클릭 영역 (최소 44px)</span>
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">🎯 키보드 사용법</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>다음 스위치로 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shift + Tab</span>
                    <span>이전 스위치로 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Space / Enter</span>
                    <span>스위치 토글</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <h4 className="font-medium text-orange-600">⚠️ 주의사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>상태 변경 시 즉각적인 피드백 제공</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>중요한 설정은 확인 절차 필요</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>비활성화 상태에서는 이유 설명</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h5 className="font-medium text-blue-900">접근성 팁</h5>
              <p className="text-sm text-blue-800 mt-1">
                스위치는 설정의 켜짐/꺼짐 상태를 명확하게 전달해야 합니다. 
                시각적 표시뿐만 아니라 스크린 리더 사용자도 현재 상태를 정확히 파악할 수 있도록 
                적절한 ARIA 레이블과 상태 정보를 제공하세요.
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
        story: '스위치 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.',
      },
    },
  },
};