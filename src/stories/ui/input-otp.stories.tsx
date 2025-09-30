import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lock, 
  Shield, 
  Smartphone, 
  Mail,
  Key,
  Check,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';

const meta: Meta<typeof InputOTP> = {
  title: 'UI/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '일회용 비밀번호(OTP) 입력을 위한 컴포넌트입니다. 보안 인증, 이중 인증 등에 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: {
      control: { type: 'number' },
      description: 'OTP 코드의 최대 길이',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">인증 코드 입력</h3>
          <p className="text-sm text-muted-foreground">
            휴대폰으로 전송된 6자리 코드를 입력하세요
          </p>
        </div>
        
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        
        <div className="text-center text-sm text-muted-foreground">
          {value.length}/6 자리 입력됨
        </div>
        
        <Button className="w-full" disabled={value.length !== 6}>
          <Shield className="mr-2 h-4 w-4" />
          인증 완료
        </Button>
      </div>
    );
  },
};

export const FourDigitCode: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">PIN 코드 입력</h3>
          <p className="text-sm text-muted-foreground">
            4자리 PIN 코드를 입력하세요
          </p>
        </div>
        
        <InputOTP
          maxLength={4}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        
        <div className="flex justify-center">
          <Badge variant={value.length === 4 ? "default" : "secondary"}>
            {value.length === 4 ? '완료' : `${value.length}/4`}
          </Badge>
        </div>
      </div>
    );
  },
};

export const EmailVerification: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const handleComplete = () => {
      if (value.length === 6) {
        setIsVerified(true);
        setTimeout(() => setIsVerified(false), 3000);
      }
    };

    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5" />
            이메일 인증
          </CardTitle>
          <CardDescription>
            example@email.com으로 전송된 인증 코드를 입력하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => {
                setValue(value);
                if (value.length === 6) {
                  setTimeout(handleComplete, 500);
                }
              }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          {isVerified && (
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Check className="h-4 w-4" />
              <span className="text-sm">인증이 완료되었습니다!</span>
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <Button 
              onClick={handleComplete}
              disabled={value.length !== 6}
              className="w-full"
            >
              인증 확인
            </Button>
            <Button variant="ghost" size="sm">
              인증 코드 재전송
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const TwoFactorAuth: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [showBackupCodes, setShowBackupCodes] = useState(false);

    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Lock className="h-5 w-5" />
            2단계 인증
          </CardTitle>
          <CardDescription>
            인증 앱에서 생성된 6자리 코드를 입력하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="text-center">
            <Badge variant="outline" className="gap-2">
              <Smartphone className="h-3 w-3" />
              Google Authenticator
            </Badge>
          </div>
          
          <Button 
            className="w-full" 
            disabled={value.length !== 6}
          >
            <Key className="mr-2 h-4 w-4" />
            로그인 완료
          </Button>
          
          <div className="text-center">
            <Button 
              variant="link" 
              size="sm"
              onClick={() => setShowBackupCodes(!showBackupCodes)}
            >
              {showBackupCodes ? '인증 앱 사용' : '백업 코드 사용'}
            </Button>
          </div>
          
          {showBackupCodes && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                백업 코드 중 하나를 입력하세요:
              </p>
              <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                <span>a1b2-c3d4</span>
                <span>e5f6-g7h8</span>
                <span>i9j0-k1l2</span>
                <span>m3n4-o5p6</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  },
};

export const PhoneVerification: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [timeLeft, setTimeLeft] = useState(180); // 3분

    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">휴대폰 인증</h3>
          <p className="text-sm text-muted-foreground">
            010-1234-5678로 전송된 인증번호를 입력하세요
          </p>
        </div>
        
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        
        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            남은 시간: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
          <Button variant="outline" size="sm">
            인증번호 재전송
          </Button>
        </div>
        
        <Button 
          className="w-full" 
          disabled={value.length !== 6}
        >
          <Smartphone className="mr-2 h-4 w-4" />
          휴대폰 인증 완료
        </Button>
      </div>
    );
  },
};

export const BankingPIN: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            보안 PIN 입력
          </CardTitle>
          <CardDescription>
            계좌 이체를 위한 보안 PIN을 입력하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value) => setValue(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <>
                  <EyeOff className="h-4 w-4 mr-1" />
                  숨기기
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-1" />
                  보기
                </>
              )}
            </Button>
          </div>
          
          {showPassword && (
            <div className="text-center p-2 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-xs text-yellow-800">입력된 PIN: {value}</p>
            </div>
          )}
          
          <div className="bg-blue-50 border border-blue-200 rounded p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-xs text-blue-800">
                <p className="font-medium">보안 안내</p>
                <p>PIN 번호는 타인에게 노출되지 않도록 주의하세요.</p>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full" 
            disabled={value.length !== 6}
          >
            이체 승인
          </Button>
        </CardContent>
      </Card>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, 화살표 키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 자동 포커스 이동</li>
            <li>• 숫자 입력 자동 검증</li>
            <li>• 접근 가능한 오류 메시지</li>
          </ul>
        </div>
        
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>접근성 OTP 입력</CardTitle>
            <CardDescription>
              키보드만으로 완전히 조작 가능한 OTP 입력 필드입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="otp-input" className="sr-only">
                6자리 인증 코드 입력
              </Label>
              <InputOTP
                id="otp-input"
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
                aria-label="6자리 인증 코드를 입력하세요"
                aria-describedby="otp-description otp-help"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            
            <div id="otp-description" className="text-sm text-muted-foreground">
              휴대폰으로 전송된 6자리 숫자를 입력하세요
            </div>
            
            <div id="otp-help" className="text-xs text-muted-foreground">
              현재 {value.length}자리 입력됨, {6 - value.length}자리 남음
            </div>
            
            {value.length === 6 && (
              <div className="text-green-600 text-sm font-medium" role="status" aria-live="polite">
                ✓ 인증 코드 입력이 완료되었습니다
              </div>
            )}
            
            <Button 
              className="w-full" 
              disabled={value.length !== 6}
              aria-describedby="submit-help"
            >
              인증 확인
            </Button>
            
            <div id="submit-help" className="sr-only">
              6자리 모두 입력하면 인증 확인이 가능합니다
            </div>
          </CardContent>
        </Card>
        
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab 키로 슬롯 이동, 숫자 키로 입력, Backspace로 삭제
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 키보드 접근성과 스크린 리더 지원을 보여주는 OTP 입력 데모입니다.',
      },
    },
  },
};