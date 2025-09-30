import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CreditCard, 
  Wallet, 
  Smartphone, 
  Building, 
  Truck, 
  Plane, 
  Ship, 
  Car, 
  Bike, 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  Bell, 
  Shield, 
  Eye, 
  EyeOff, 
  Globe, 
  Lock, 
  Users, 
  User, 
  Crown, 
  Star, 
  Zap, 
  Coffee, 
  Pizza, 
  Home, 
  Building2, 
  Factory, 
  Store, 
  PaintBucket, 
  Palette, 
  Sun, 
  Moon, 
  Monitor, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff,
  CheckCircle,
  Circle,
  DollarSign,
  Clock,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Archive
} from 'lucide-react';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '기본 선택값',
    },
    value: {
      control: 'text',
      description: '현재 선택된 값',
    },
    onValueChange: {
      action: 'changed',
      description: '값 변경 콜백',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    defaultValue: 'option1',
  },
  render: (args) => (
    <RadioGroup defaultValue={args.defaultValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">옵션 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">옵션 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">옵션 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const PaymentMethods: Story = {
  render: () => {
    const [selectedPayment, setSelectedPayment] = useState('card');
    
    const paymentMethods = [
      {
        id: 'card',
        name: '신용/체크카드',
        description: '즉시 결제',
        icon: CreditCard,
        fee: '무료',
      },
      {
        id: 'bank',
        name: '계좌이체',
        description: '1-2일 소요',
        icon: Building,
        fee: '무료',
      },
      {
        id: 'mobile',
        name: '휴대폰 결제',
        description: '통신비 합산',
        icon: Smartphone,
        fee: '2.5%',
      },
      {
        id: 'wallet',
        name: '디지털 월렛',
        description: 'PayPal, Apple Pay 등',
        icon: Wallet,
        fee: '1.5%',
      },
    ];

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            결제 방법 선택
          </CardTitle>
          <CardDescription>
            원하시는 결제 방법을 선택해주세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <div key={method.id}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Label 
                        htmlFor={method.id} 
                        className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted"
                      >
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{method.name}</span>
                            <Badge variant={method.fee === '무료' ? 'default' : 'secondary'}>
                              {method.fee}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {method.description}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="text-sm text-muted-foreground">
            선택된 결제 방법: <strong>
              {paymentMethods.find(m => m.id === selectedPayment)?.name}
            </strong>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ShippingOptions: Story = {
  render: () => {
    const [selectedShipping, setSelectedShipping] = useState('standard');
    
    const shippingOptions = [
      {
        id: 'standard',
        name: '일반 배송',
        time: '3-5일',
        price: '무료',
        description: '주문 후 3-5일 내 배송',
        icon: Truck,
      },
      {
        id: 'express',
        name: '빠른 배송',
        time: '1-2일',
        price: '3,000원',
        description: '주문 후 1-2일 내 배송',
        icon: Plane,
      },
      {
        id: 'same-day',
        name: '당일 배송',
        time: '오늘',
        price: '5,000원',
        description: '오후 6시 이전 주문 시 당일 배송',
        icon: Car,
      },
    ];

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            배송 옵션
          </CardTitle>
          <CardDescription>
            배송 방법을 선택해주세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedShipping} onValueChange={setSelectedShipping}>
            <div className="space-y-3">
              {shippingOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <div key={option.id}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label 
                        htmlFor={option.id}
                        className="flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-lg border transition-colors hover:bg-muted"
                      >
                        <IconComponent className="h-6 w-6 text-muted-foreground" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{option.name}</span>
                            <div className="text-right">
                              <div className="font-medium">{option.price}</div>
                              <div className="text-sm text-muted-foreground">{option.time}</div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {option.description}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between text-sm">
            <span>선택된 배송:</span>
            <span className="font-medium">
              {shippingOptions.find(o => o.id === selectedShipping)?.name}
            </span>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const NotificationSettings: Story = {
  render: () => {
    const [emailFrequency, setEmailFrequency] = useState('weekly');
    const [pushNotifications, setPushNotifications] = useState('important');
    
    return (
      <div className="w-full max-w-lg space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              알림 설정
            </CardTitle>
            <CardDescription>
              받고 싶은 알림의 빈도와 유형을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                이메일 알림 빈도
              </h4>
              <RadioGroup value={emailFrequency} onValueChange={setEmailFrequency}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="never" id="email-never" />
                    <Label htmlFor="email-never" className="flex items-center gap-2">
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                      받지 않음
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="email-daily" />
                    <Label htmlFor="email-daily" className="flex items-center gap-2">
                      <Sun className="h-4 w-4 text-muted-foreground" />
                      매일
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="email-weekly" />
                    <Label htmlFor="email-weekly" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      주간 요약
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="email-monthly" />
                    <Label htmlFor="email-monthly" className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      월간 요약
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3 flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                푸시 알림
              </h4>
              <RadioGroup value={pushNotifications} onValueChange={setPushNotifications}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="push-all" />
                    <Label htmlFor="push-all" className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      모든 알림
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="important" id="push-important" />
                    <Label htmlFor="push-important" className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      중요한 알림만
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mentions" id="push-mentions" />
                    <Label htmlFor="push-mentions" className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      멘션될 때만
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="push-none" />
                    <Label htmlFor="push-none" className="flex items-center gap-2">
                      <VolumeX className="h-4 w-4 text-muted-foreground" />
                      받지 않음
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            <Separator />
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>이메일 빈도:</span>
                <span className="font-medium capitalize">{emailFrequency}</span>
              </div>
              <div className="flex justify-between">
                <span>푸시 알림:</span>
                <span className="font-medium capitalize">{pushNotifications}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const SubscriptionPlans: Story = {
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState('pro');
    
    const plans = [
      {
        id: 'free',
        name: '무료',
        price: '0원',
        period: '월',
        features: ['기본 기능', '5GB 저장공간', '이메일 지원'],
        icon: User,
        popular: false,
      },
      {
        id: 'pro',
        name: '프로',
        price: '15,000원',
        period: '월',
        features: ['모든 기능', '100GB 저장공간', '우선 지원', '고급 분석'],
        icon: Crown,
        popular: true,
      },
      {
        id: 'team',
        name: '팀',
        price: '45,000원',
        period: '월',
        features: ['팀 기능', '무제한 저장공간', '24/7 지원', '팀 관리', 'API 접근'],
        icon: Users,
        popular: false,
      },
    ];

    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            구독 플랜 선택
          </CardTitle>
          <CardDescription>
            필요에 맞는 플랜을 선택하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
            <div className="grid gap-4">
              {plans.map((plan) => {
                const IconComponent = plan.icon;
                return (
                  <div key={plan.id} className="relative">
                    {plan.popular && (
                      <Badge className="absolute -top-2 left-4 z-10 bg-blue-600">
                        인기
                      </Badge>
                    )}
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                      <Label 
                        htmlFor={plan.id}
                        className={`flex-1 cursor-pointer p-4 rounded-lg border transition-colors hover:bg-muted ${
                          plan.popular ? 'border-blue-300 bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-5 w-5 text-muted-foreground" />
                            <span className="font-semibold text-lg">{plan.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/{plan.period}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              선택된 플랜: <strong>
                {plans.find(p => p.id === selectedPlan)?.name}
              </strong>
            </div>
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              구독하기
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const FileTypeSelector: Story = {
  render: () => {
    const [selectedType, setSelectedType] = useState('image');
    
    const fileTypes = [
      {
        id: 'image',
        name: '이미지',
        extensions: 'JPG, PNG, GIF, WebP',
        maxSize: '10MB',
        icon: Image,
        color: 'text-green-600',
      },
      {
        id: 'document',
        name: '문서',
        extensions: 'PDF, DOC, DOCX, TXT',
        maxSize: '25MB',
        icon: FileText,
        color: 'text-blue-600',
      },
      {
        id: 'video',
        name: '비디오',
        extensions: 'MP4, AVI, MOV, WebM',
        maxSize: '100MB',
        icon: Video,
        color: 'text-purple-600',
      },
      {
        id: 'audio',
        name: '오디오',
        extensions: 'MP3, WAV, AAC, OGG',
        maxSize: '50MB',
        icon: Music,
        color: 'text-orange-600',
      },
      {
        id: 'archive',
        name: '압축파일',
        extensions: 'ZIP, RAR, 7Z, TAR',
        maxSize: '200MB',
        icon: Archive,
        color: 'text-gray-600',
      },
    ];

    return (
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            업로드 파일 유형
          </CardTitle>
          <CardDescription>
            업로드할 파일의 유형을 선택하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedType} onValueChange={setSelectedType}>
            <div className="space-y-3">
              {fileTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div key={type.id}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value={type.id} id={type.id} />
                      <Label 
                        htmlFor={type.id}
                        className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border transition-colors hover:bg-muted"
                      >
                        <IconComponent className={`h-5 w-5 ${type.color}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{type.name}</span>
                            <Badge variant="outline">
                              최대 {type.maxSize}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            지원 형식: {type.extensions}
                          </p>
                        </div>
                      </Label>
                    </div>
                  </div>
                );
              })}
            </div>
          </RadioGroup>
          
          <Separator className="my-4" />
          
          <div className="text-sm text-muted-foreground">
            선택된 파일 유형: <strong>
              {fileTypes.find(t => t.id === selectedType)?.name}
            </strong>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [value, setValue] = useState('option2');

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (방향키, Space, Enter)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 포커스 표시 및 관리</li>
            <li>• 적절한 색상 대비</li>
            <li>• 그룹 및 항목 역할 정의</li>
          </ul>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>접근성 라디오 그룹 데모</CardTitle>
            <CardDescription>
              완전한 키보드 접근성을 지원하는 라디오 버튼 그룹
            </CardDescription>
          </CardHeader>
          <CardContent>
            <fieldset className="space-y-4">
              <legend className="font-medium mb-3">
                선호하는 연락 방법을 선택하세요
              </legend>
              
              <RadioGroup 
                value={value} 
                onValueChange={setValue}
                aria-label="연락 방법 선택"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="email" 
                      id="contact-email"
                      aria-describedby="email-desc"
                    />
                    <Label 
                      htmlFor="contact-email" 
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      이메일
                    </Label>
                  </div>
                  <p id="email-desc" className="text-sm text-muted-foreground ml-6">
                    이메일로 연락을 받습니다. 응답 시간: 24시간 이내
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="phone" 
                      id="contact-phone"
                      aria-describedby="phone-desc"
                    />
                    <Label 
                      htmlFor="contact-phone" 
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      전화
                    </Label>
                  </div>
                  <p id="phone-desc" className="text-sm text-muted-foreground ml-6">
                    전화로 연락을 받습니다. 응답 시간: 1시간 이내
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value="message" 
                      id="contact-message"
                      aria-describedby="message-desc"
                    />
                    <Label 
                      htmlFor="contact-message" 
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      문자 메시지
                    </Label>
                  </div>
                  <p id="message-desc" className="text-sm text-muted-foreground ml-6">
                    SMS로 연락을 받습니다. 응답 시간: 30분 이내
                  </p>
                </div>
              </RadioGroup>
            </fieldset>
            
            <Separator className="my-4" />
            
            <div className="space-y-2">
              <div className="text-sm">
                <strong>선택된 연락 방법:</strong> {value || '선택 안함'}
              </div>
              
              <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                💡 키보드 사용법: Tab으로 포커스 이동, 방향키로 옵션 선택, Space로 선택 확정
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 제공하는 라디오 그룹 데모입니다.',
      },
    },
  },
};