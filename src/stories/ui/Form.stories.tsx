import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Building,
  CreditCard,
  Lock,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  Info,
  Send,
  Save,
  FileText,
  Image,
  Upload
} from 'lucide-react';

const meta: Meta<typeof Form> = {
  title: 'UI/Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'React Hook Form과 Zod를 사용한 폼 컴포넌트입니다. 유효성 검사, 오류 처리, 다양한 입력 필드를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Form>;

// 기본 연락처 폼 스키마
const contactSchema = z.object({
  name: z.string().min(2, { message: '이름은 최소 2자 이상이어야 합니다.' }),
  email: z.string().email({ message: '올바른 이메일 주소를 입력해주세요.' }),
  message: z.string().min(10, { message: '메시지는 최소 10자 이상이어야 합니다.' }),
});

export const Default: Story = {
  render: () => {
    const form = useForm<z.infer<typeof contactSchema>>({
      resolver: zodResolver(contactSchema),
      defaultValues: {
        name: '',
        email: '',
        message: '',
      },
    });

    function onSubmit(values: z.infer<typeof contactSchema>) {
      console.log(values);
      alert('폼이 성공적으로 제출되었습니다!');
    }

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">연락처 폼</h2>
          <p className="text-muted-foreground">메시지를 남겨주세요</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="hong@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>메시지</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="메시지를 입력해주세요..." 
                      className="resize-none" 
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    최소 10자 이상 입력해주세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              메시지 보내기
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

// 회원가입 폼 스키마
const signupSchema = z.object({
  username: z.string().min(3, { message: '사용자명은 최소 3자 이상이어야 합니다.' }),
  email: z.string().email({ message: '올바른 이메일 주소를 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
  confirmPassword: z.string(),
  age: z.number().min(18, { message: '18세 이상이어야 합니다.' }).max(120),
  terms: z.boolean().refine(val => val === true, { message: '이용약관에 동의해야 합니다.' }),
}).refine(data => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword'],
});

export const SignupForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof signupSchema>>({
      resolver: zodResolver(signupSchema),
      defaultValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        age: 18,
        terms: false,
      },
    });

    function onSubmit(values: z.infer<typeof signupSchema>) {
      console.log(values);
      alert('회원가입이 완료되었습니다!');
    }

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">회원가입</h2>
          <p className="text-muted-foreground">새 계정을 생성하세요</p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>사용자명</FormLabel>
                  <FormControl>
                    <Input placeholder="username123" {...field} />
                  </FormControl>
                  <FormDescription>
                    다른 사용자들에게 표시될 이름입니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="user@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>
                    최소 8자 이상의 안전한 비밀번호를 사용하세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>나이</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      {...field} 
                      onChange={e => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      이용약관 및 개인정보처리방침에 동의합니다.
                    </FormLabel>
                    <FormDescription>
                      서비스 이용을 위해 동의가 필요합니다.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              <User className="mr-2 h-4 w-4" />
              회원가입
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

// 프로필 설정 폼 스키마
const profileSchema = z.object({
  firstName: z.string().min(1, { message: '이름을 입력해주세요.' }),
  lastName: z.string().min(1, { message: '성을 입력해주세요.' }),
  bio: z.string().max(160).optional(),
  url: z.string().url().optional().or(z.literal('')),
  location: z.string().optional(),
  notifications: z.boolean(),
  marketing: z.boolean(),
});

export const ProfileSettings: Story = {
  render: () => {
    const form = useForm<z.infer<typeof profileSchema>>({
      resolver: zodResolver(profileSchema),
      defaultValues: {
        firstName: '길동',
        lastName: '홍',
        bio: '안녕하세요! 저는 웹 개발자입니다.',
        url: 'https://example.com',
        location: '서울, 대한민국',
        notifications: true,
        marketing: false,
      },
    });

    function onSubmit(values: z.infer<typeof profileSchema>) {
      console.log(values);
      alert('프로필이 업데이트되었습니다!');
    }

    return (
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">프로필 설정</h2>
          <p className="text-muted-foreground">
            공개 프로필 정보를 관리하세요.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="길동" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>성</FormLabel>
                    <FormControl>
                      <Input placeholder="홍" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>소개</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="자신을 소개해보세요..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value?.length || 0}/160
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>웹사이트</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    개인 웹사이트나 포트폴리오 URL을 추가하세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>위치</FormLabel>
                  <FormControl>
                    <Input placeholder="서울, 대한민국" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">알림 설정</h3>
              
              <FormField
                control={form.control}
                name="notifications"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        이메일 알림
                      </FormLabel>
                      <FormDescription>
                        새로운 메시지와 업데이트에 대한 이메일을 받습니다.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="marketing"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        마케팅 이메일
                      </FormLabel>
                      <FormDescription>
                        제품 업데이트, 회사 소식 및 이벤트에 대한 이메일을 받습니다.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex gap-2">
              <Button type="submit">
                <Save className="mr-2 h-4 w-4" />
                저장하기
              </Button>
              <Button type="button" variant="outline">
                취소
              </Button>
            </div>
          </form>
        </Form>
      </div>
    );
  },
};

// 결제 폼 스키마
const paymentSchema = z.object({
  cardNumber: z.string().min(16, { message: '카드 번호를 정확히 입력해주세요.' }),
  expiryDate: z.string().min(5, { message: '유효기간을 MM/YY 형식으로 입력해주세요.' }),
  cvv: z.string().min(3, { message: 'CVV는 3자리 숫자입니다.' }),
  cardholderName: z.string().min(1, { message: '카드 소유자 이름을 입력해주세요.' }),
  billingAddress: z.string().min(1, { message: '청구 주소를 입력해주세요.' }),
  city: z.string().min(1, { message: '도시를 입력해주세요.' }),
  postalCode: z.string().min(5, { message: '우편번호를 입력해주세요.' }),
  saveCard: z.boolean(),
});

export const PaymentForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof paymentSchema>>({
      resolver: zodResolver(paymentSchema),
      defaultValues: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: '',
        billingAddress: '',
        city: '',
        postalCode: '',
        saveCard: false,
      },
    });

    function onSubmit(values: z.infer<typeof paymentSchema>) {
      console.log(values);
      alert('결제가 처리되었습니다!');
    }

    return (
      <div className="w-full max-w-lg space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">결제 정보</h2>
          <p className="text-muted-foreground">
            안전한 결제를 위해 정확한 정보를 입력해주세요.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  카드 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>카드 번호</FormLabel>
                      <FormControl>
                        <Input placeholder="1234 5678 9012 3456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>유효기간</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="cardholderName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>카드 소유자 이름</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  청구 주소
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="billingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>주소</FormLabel>
                      <FormControl>
                        <Input placeholder="서울시 강남구 테헤란로 123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>도시</FormLabel>
                        <FormControl>
                          <Input placeholder="서울" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>우편번호</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            
            <FormField
              control={form.control}
              name="saveCard"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      다음 결제를 위해 카드 정보 저장
                    </FormLabel>
                    <FormDescription>
                      안전하게 암호화되어 저장됩니다.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" size="lg">
              <Lock className="mr-2 h-4 w-4" />
              안전하게 결제하기
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

// 설문조사 폼 스키마
const surveySchema = z.object({
  satisfaction: z.string().min(1, { message: '만족도를 선택해주세요.' }),
  recommendation: z.string().min(1, { message: '추천 의향을 선택해주세요.' }),
  features: z.array(z.string()).min(1, { message: '최소 하나의 기능을 선택해주세요.' }),
  improvement: z.string().min(10, { message: '최소 10자 이상 입력해주세요.' }),
  newsletter: z.boolean(),
});

export const SurveyForm: Story = {
  render: () => {
    const form = useForm<z.infer<typeof surveySchema>>({
      resolver: zodResolver(surveySchema),
      defaultValues: {
        satisfaction: '',
        recommendation: '',
        features: [],
        improvement: '',
        newsletter: false,
      },
    });

    const features = [
      { id: 'ui', label: '사용자 인터페이스' },
      { id: 'performance', label: '성능' },
      { id: 'reliability', label: '안정성' },
      { id: 'support', label: '고객 지원' },
      { id: 'pricing', label: '가격' },
      { id: 'documentation', label: '문서화' },
    ];

    function onSubmit(values: z.infer<typeof surveySchema>) {
      console.log(values);
      alert('설문조사가 제출되었습니다. 감사합니다!');
    }

    return (
      <div className="w-full max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">고객 만족도 설문조사</h2>
          <p className="text-muted-foreground">
            귀중한 의견을 들려주세요. 더 나은 서비스를 위해 노력하겠습니다.
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="satisfaction"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-base">전반적인 만족도는 어떠신가요?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                        <Label htmlFor="very-satisfied">매우 만족</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="satisfied" id="satisfied" />
                        <Label htmlFor="satisfied">만족</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="neutral" id="neutral" />
                        <Label htmlFor="neutral">보통</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                        <Label htmlFor="dissatisfied">불만족</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
                        <Label htmlFor="very-dissatisfied">매우 불만족</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="recommendation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    다른 사람에게 추천하실 의향이 있으신가요?
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="추천 의향을 선택해주세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="definitely">적극 추천</SelectItem>
                      <SelectItem value="probably">추천할 것 같음</SelectItem>
                      <SelectItem value="maybe">모르겠음</SelectItem>
                      <SelectItem value="probably-not">추천하지 않을 것 같음</SelectItem>
                      <SelectItem value="definitely-not">절대 추천하지 않음</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="features"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      가장 만족스러운 기능은 무엇인가요? (복수 선택 가능)
                    </FormLabel>
                  </div>
                  {features.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="features"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="improvement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">
                    개선이 필요한 부분이나 추가 의견이 있으시다면 알려주세요.
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="개선 사항이나 추가 의견을 자유롭게 작성해주세요..."
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    구체적인 의견일수록 도움이 됩니다.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      제품 업데이트 및 뉴스레터 구독
                    </FormLabel>
                    <FormDescription>
                      새로운 기능과 업데이트 소식을 이메일로 받아보세요.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              설문조사 제출하기
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: '',
        password: '',
        rememberMe: false,
      },
    });

    function onSubmit(values: any) {
      console.log(values);
      alert('접근성 데모 폼이 제출되었습니다!');
    }

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Shift+Tab)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 오류 메시지 자동 안내</li>
            <li>• 포커스 표시 및 관리</li>
            <li>• 적절한 색상 대비</li>
            <li>• 필수 필드 표시</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">로그인</h2>
          <p className="text-muted-foreground">
            계정에 접속하세요
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-demo" className="required">
                이메일 주소
                <span className="text-red-500 ml-1" aria-label="필수 항목">*</span>
              </Label>
              <Input
                id="email-demo"
                type="email"
                placeholder="user@example.com"
                required
                aria-describedby="email-help email-error"
                {...form.register('email', { 
                  required: '이메일 주소를 입력해주세요.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                    message: '올바른 이메일 형식을 입력해주세요.'
                  }
                })}
              />
              <div id="email-help" className="text-xs text-muted-foreground">
                가입할 때 사용한 이메일 주소를 입력해주세요
              </div>
              {form.formState.errors.email && (
                <div 
                  id="email-error" 
                  className="text-xs text-red-600 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="h-3 w-3" />
                  {form.formState.errors.email.message}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-demo" className="required">
                비밀번호
                <span className="text-red-500 ml-1" aria-label="필수 항목">*</span>
              </Label>
              <Input
                id="password-demo"
                type="password"
                placeholder="비밀번호를 입력하세요"
                required
                aria-describedby="password-help password-error"
                {...form.register('password', { 
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 6,
                    message: '비밀번호는 최소 6자 이상이어야 합니다.'
                  }
                })}
              />
              <div id="password-help" className="text-xs text-muted-foreground">
                최소 6자 이상의 비밀번호를 입력해주세요
              </div>
              {form.formState.errors.password && (
                <div 
                  id="password-error" 
                  className="text-xs text-red-600 flex items-center gap-1"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle className="h-3 w-3" />
                  {form.formState.errors.password.message}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember-demo"
                {...form.register('rememberMe')}
                aria-describedby="remember-help"
              />
              <Label 
                htmlFor="remember-demo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                로그인 상태 유지
              </Label>
            </div>
            <div id="remember-help" className="text-xs text-muted-foreground ml-6">
              다음에 자동으로 로그인됩니다 (공용 컴퓨터에서는 사용하지 마세요)
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              aria-describedby="submit-help"
            >
              <User className="mr-2 h-4 w-4" />
              로그인
            </Button>
            <div id="submit-help" className="sr-only">
              폼을 제출하려면 엔터를 누르거나 버튼을 클릭하세요
            </div>
            
            <div className="text-center">
              <Button variant="link" size="sm">
                비밀번호를 잊으셨나요?
              </Button>
            </div>
          </form>
        </Form>
        
        <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
          💡 팁: Tab 키로 순서대로 이동, Shift+Tab으로 역순 이동, Enter로 제출
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '완전한 접근성 지원을 보여주는 로그인 폼 데모입니다.',
      },
    },
  },
};