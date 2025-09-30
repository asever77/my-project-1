import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ChevronUp, 
  ChevronDown, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Edit, 
  Trash2, 
  Eye, 
  MoreHorizontal, 
  Star, 
  StarOff, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  Calendar, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Package, 
  ShoppingCart as ShoppingCartIcon, 
  CreditCard, 
  Truck, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Music, 
  Archive, 
  Globe, 
  Shield, 
  Lock, 
  Unlock, 
  Settings, 
  SortAsc, 
  SortDesc, 
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'UI/Base/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '구조화된 데이터를 표시하고 정렬, 필터링, 페이지네이션 기능을 제공하는 테이블 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => {
    const users = [
      { id: 1, name: '홍길동', email: 'hong@example.com', role: '관리자', status: '활성' },
      { id: 2, name: '김영희', email: 'kim@example.com', role: '사용자', status: '활성' },
      { id: 3, name: '이철수', email: 'lee@example.com', role: '편집자', status: '비활성' },
      { id: 4, name: '박민수', email: 'park@example.com', role: '사용자', status: '활성' },
      { id: 5, name: '최지영', email: 'choi@example.com', role: '관리자', status: '대기' },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">기본 테이블</h3>
        <Table>
          <TableCaption>총 {users.length}명의 사용자가 등록되어 있습니다.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      user.status === '활성' ? 'default' : 
                      user.status === '대기' ? 'secondary' : 'outline'
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

export const SortableTable: Story = {
  render: () => {
    const [sortField, setSortField] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    
    const employees = [
      { id: 1, name: '홍길동', department: '개발팀', salary: 5500, experience: 3, rating: 4.8 },
      { id: 2, name: '김영희', department: '디자인팀', salary: 4800, experience: 2, rating: 4.9 },
      { id: 3, name: '이철수', department: '마케팅팀', salary: 4200, experience: 5, rating: 4.3 },
      { id: 4, name: '박민수', department: '개발팀', salary: 6200, experience: 7, rating: 4.7 },
      { id: 5, name: '최지영', department: '기획팀', salary: 5000, experience: 4, rating: 4.6 },
      { id: 6, name: '정수현', department: '디자인팀', salary: 5300, experience: 6, rating: 4.8 },
    ];

    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    const sortedEmployees = useMemo(() => {
      if (!sortField) return employees;
      
      return [...employees].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }, [sortField, sortDirection]);

    const SortButton = ({ field, children }: { field: string; children: React.ReactNode }) => (
      <Button
        variant="ghost"
        size="sm"
        className="h-auto p-0 font-semibold"
        onClick={() => handleSort(field)}
      >
        <div className="flex items-center gap-1">
          {children}
          {sortField === field ? (
            sortDirection === 'asc' ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
          ) : (
            <ArrowUpDown className="h-3 w-3" />
          )}
        </div>
      </Button>
    );

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">정렬 가능한 테이블</h3>
        <Table>
          <TableCaption>
            클릭하여 열을 정렬할 수 있습니다. 
            {sortField && ` 현재 ${sortField}로 ${sortDirection === 'asc' ? '오름차순' : '내림차순'} 정렬됨`}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                <SortButton field="name">이름</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="department">부서</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="salary">연봉</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="experience">경력</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="rating">평점</SortButton>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="font-medium">{employee.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{employee.department}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    {employee.salary.toLocaleString()}만원
                  </div>
                </TableCell>
                <TableCell>{employee.experience}년</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {employee.rating}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

export const FilterableTable: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');
    
    const products = [
      { id: 1, name: 'iPhone 15 Pro', category: '전자제품', price: 1290000, stock: 25, status: '판매중' },
      { id: 2, name: '갤럭시 S24', category: '전자제품', price: 1090000, stock: 15, status: '판매중' },
      { id: 3, name: '맥북 프로', category: '컴퓨터', price: 2490000, stock: 8, status: '품절' },
      { id: 4, name: '에어팟 프로', category: '전자제품', price: 329000, stock: 42, status: '판매중' },
      { id: 5, name: '아이패드', category: '전자제품', price: 829000, stock: 0, status: '품절' },
      { id: 6, name: '키보드', category: '컴퓨터', price: 159000, stock: 18, status: '할인' },
      { id: 7, name: '마우스', category: '컴퓨터', price: 89000, stock: 33, status: '판매중' },
      { id: 8, name: '모니터', category: '컴퓨터', price: 459000, stock: 12, status: '할인' },
    ];

    const filteredProducts = useMemo(() => {
      return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        
        return matchesSearch && matchesStatus && matchesCategory;
      });
    }, [searchTerm, statusFilter, categoryFilter]);

    const getStatusBadge = (status: string) => {
      switch (status) {
        case '판매중': return <Badge variant="default">판매중</Badge>;
        case '품절': return <Badge variant="destructive">품절</Badge>;
        case '할인': return <Badge variant="secondary">할인</Badge>;
        default: return <Badge variant="outline">{status}</Badge>;
      }
    };

    const getStockStatus = (stock: number) => {
      if (stock === 0) return <span className="text-red-600">재고없음</span>;
      if (stock < 10) return <span className="text-orange-600">부족 ({stock}개)</span>;
      return <span className="text-green-600">충분 ({stock}개)</span>;
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">필터링 가능한 테이블</h3>
        
        {/* 필터 컨트롤 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">필터 및 검색</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">상품명 검색</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="상품명을 입력하세요..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">판매 상태</Label>
                <select 
                  id="status"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="all">전체</option>
                  <option value="판매중">판매중</option>
                  <option value="품절">품절</option>
                  <option value="할인">할인</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">카테고리</Label>
                <select 
                  id="category"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="all">전체</option>
                  <option value="전자제품">전자제품</option>
                  <option value="컴퓨터">컴퓨터</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>총 {filteredProducts.length}개 상품</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('all');
                  setCategoryFilter('all');
                }}
              >
                필터 초기화
              </Button>
            </div>
          </CardContent>
        </Card>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상품명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>가격</TableHead>
              <TableHead>재고</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell>₩{product.price.toLocaleString()}</TableCell>
                  <TableCell>{getStockStatus(product.stock)}</TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  검색 조건에 맞는 상품이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  },
};

export const SelectableTable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    
    const orders = [
      { id: 1, orderNo: 'ORD-001', customer: '홍길동', product: 'iPhone 15', amount: 1290000, date: '2024-01-15', status: '배송완료' },
      { id: 2, orderNo: 'ORD-002', customer: '김영희', product: '갤럭시 S24', amount: 1090000, date: '2024-01-16', status: '배송중' },
      { id: 3, orderNo: 'ORD-003', customer: '이철수', product: '맥북 프로', amount: 2490000, date: '2024-01-17', status: '준비중' },
      { id: 4, orderNo: 'ORD-004', customer: '박민수', product: '에어팟 프로', amount: 329000, date: '2024-01-18', status: '배송완료' },
      { id: 5, orderNo: 'ORD-005', customer: '최지영', product: '아이패드', amount: 829000, date: '2024-01-19', status: '취소' },
    ];

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedRows(new Set(orders.map(order => order.id)));
      } else {
        setSelectedRows(new Set());
      }
    };

    const handleSelectRow = (id: number, checked: boolean) => {
      const newSelected = new Set(selectedRows);
      if (checked) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      setSelectedRows(newSelected);
    };

    const isAllSelected = selectedRows.size === orders.length;
    const isIndeterminate = selectedRows.size > 0 && selectedRows.size < orders.length;

    const getStatusBadge = (status: string) => {
      switch (status) {
        case '배송완료': return <Badge variant="default">배송완료</Badge>;
        case '배송중': return <Badge variant="secondary">배송중</Badge>;
        case '준비중': return <Badge variant="outline">준비중</Badge>;
        case '취소': return <Badge variant="destructive">취소</Badge>;
        default: return <Badge variant="outline">{status}</Badge>;
      }
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">선택 가능한 테이블</h3>
        
        {/* 선택된 항목 정보 */}
        {selectedRows.size > 0 && (
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  {selectedRows.size}개 항목이 선택됨
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-2" />
                    내보내기
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-3 w-3 mr-2" />
                    이메일 발송
                  </Button>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-3 w-3 mr-2" />
                    삭제
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                  aria-label="모든 행 선택"
                />
              </TableHead>
              <TableHead>주문번호</TableHead>
              <TableHead>고객명</TableHead>
              <TableHead>상품</TableHead>
              <TableHead>금액</TableHead>
              <TableHead>주문일</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow 
                key={order.id} 
                className={selectedRows.has(order.id) ? 'bg-muted/50' : ''}
              >
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(order.id)}
                    onCheckedChange={(checked) => handleSelectRow(order.id, checked as boolean)}
                    aria-label={`${order.orderNo} 선택`}
                  />
                </TableCell>
                <TableCell className="font-medium">{order.orderNo}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>₩{order.amount.toLocaleString()}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

export const PaginatedTable: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    
    // 더 많은 데이터 생성
    const allTransactions = Array.from({ length: 47 }, (_, i) => ({
      id: i + 1,
      txId: `TX-${String(i + 1).padStart(4, '0')}`,
      type: ['입금', '출금', '이체'][Math.floor(Math.random() * 3)],
      amount: Math.floor(Math.random() * 1000000) + 10000,
      account: `계좌-${Math.floor(Math.random() * 9000) + 1000}`,
      date: new Date(2024, 0, Math.floor(Math.random() * 30) + 1).toLocaleDateString(),
      status: ['완료', '처리중', '보류', '실패'][Math.floor(Math.random() * 4)],
    }));

    const totalPages = Math.ceil(allTransactions.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentTransactions = allTransactions.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const getTypeIcon = (type: string) => {
      switch (type) {
        case '입금': return <TrendingUp className="h-3 w-3 text-green-600" />;
        case '출금': return <TrendingDown className="h-3 w-3 text-red-600" />;
        case '이체': return <ArrowUpDown className="h-3 w-3 text-blue-600" />;
        default: return null;
      }
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case '완료': return <Badge variant="default">완료</Badge>;
        case '처리중': return <Badge variant="secondary">처리중</Badge>;
        case '보류': return <Badge variant="outline">보류</Badge>;
        case '실패': return <Badge variant="destructive">실패</Badge>;
        default: return <Badge variant="outline">{status}</Badge>;
      }
    };

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">페이지네이션 테이블</h3>
        
        {/* 페이지 설정 */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  총 {allTransactions.length}개 항목 중 {startIndex + 1}-{Math.min(endIndex, allTransactions.length)}번째 표시
                </span>
                <div className="flex items-center gap-2">
                  <Label htmlFor="pageSize" className="text-sm">페이지당 표시:</Label>
                  <select 
                    id="pageSize"
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-2 py-1 border border-gray-300 rounded text-sm"
                  >
                    <option value={5}>5개</option>
                    <option value={10}>10개</option>
                    <option value={20}>20개</option>
                    <option value={50}>50개</option>
                  </select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>거래ID</TableHead>
              <TableHead>유형</TableHead>
              <TableHead>금액</TableHead>
              <TableHead>계좌</TableHead>
              <TableHead>날짜</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.txId}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(transaction.type)}
                    {transaction.type}
                  </div>
                </TableCell>
                <TableCell>
                  <span className={transaction.type === '출금' ? 'text-red-600' : 'text-green-600'}>
                    {transaction.type === '출금' ? '-' : '+'} ₩{transaction.amount.toLocaleString()}
                  </span>
                </TableCell>
                <TableCell>{transaction.account}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{getStatusBadge(transaction.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* 페이지네이션 */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                페이지 {currentPage} / {totalPages}
              </div>
              
              <div className="flex items-center gap-1">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft className="h-3 w-3" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-3 w-3" />
                </Button>
                
                {/* 페이지 번호 */}
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-3 w-3" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const AccessibilityDemo: Story = {
  render: () => {
    const [sortField, setSortField] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
    
    const students = [
      { id: 1, name: '김철수', grade: 'A', score: 95, subject: '수학', date: '2024-01-15' },
      { id: 2, name: '이영희', grade: 'B+', score: 87, subject: '영어', date: '2024-01-16' },
      { id: 3, name: '박민수', grade: 'A-', score: 92, subject: '과학', date: '2024-01-17' },
      { id: 4, name: '정수진', grade: 'B', score: 84, subject: '국어', date: '2024-01-18' },
    ];

    const handleSort = (field: string) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    const sortedStudents = useMemo(() => {
      if (!sortField) return students;
      
      return [...students].sort((a, b) => {
        const aValue = a[sortField as keyof typeof a];
        const bValue = b[sortField as keyof typeof b];
        
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }, [sortField, sortDirection]);

    const handleSelectRow = (id: number, checked: boolean) => {
      const newSelected = new Set(selectedRows);
      if (checked) {
        newSelected.add(id);
      } else {
        newSelected.delete(id);
      }
      setSelectedRows(newSelected);
    };

    return (
      <div className="w-full max-w-4xl space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-2">접근성 기능</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• 키보드 내비게이션 지원 (Tab, Enter, 방향키)</li>
            <li>• 스크린 리더 호환성 및 ARIA 레이블</li>
            <li>• 정렬 상태와 선택 상태 음성 안내</li>
            <li>• 적절한 제목과 캡션 제공</li>
            <li>• 색상에 의존하지 않는 정보 전달</li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              접근성 적용 테이블
            </CardTitle>
            <CardDescription>
              모든 사용자가 쉽게 이용할 수 있도록 설계된 데이터 테이블입니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table role="table" aria-label="학생 성적 테이블">
              <TableCaption>
                학생들의 성적 정보입니다. 총 {students.length}명의 학생 데이터가 있으며, 
                열 제목을 클릭하여 정렬할 수 있습니다.
                {sortField && ` 현재 ${sortField}로 ${sortDirection === 'asc' ? '오름차순' : '내림차순'} 정렬되어 있습니다.`}
                {selectedRows.size > 0 && ` ${selectedRows.size}개 행이 선택되어 있습니다.`}
              </TableCaption>
              
              <TableHeader>
                <TableRow role="row">
                  <TableHead role="columnheader" className="w-12">
                    <span className="sr-only">선택</span>
                  </TableHead>
                  <TableHead role="columnheader">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 font-semibold"
                      onClick={() => handleSort('name')}
                      aria-label={`이름으로 정렬 ${sortField === 'name' ? 
                        (sortDirection === 'asc' ? '(현재 오름차순, 클릭하면 내림차순)' : '(현재 내림차순, 클릭하면 오름차순)') : 
                        '(현재 정렬되지 않음, 클릭하면 오름차순)'}`}
                      aria-describedby="sort-instructions"
                    >
                      <div className="flex items-center gap-1">
                        이름
                        {sortField === 'name' ? (
                          sortDirection === 'asc' ? 
                          <ChevronUp className="h-3 w-3" aria-hidden="true" /> : 
                          <ChevronDown className="h-3 w-3" aria-hidden="true" />
                        ) : (
                          <ArrowUpDown className="h-3 w-3" aria-hidden="true" />
                        )}
                      </div>
                    </Button>
                  </TableHead>
                  <TableHead role="columnheader">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 font-semibold"
                      onClick={() => handleSort('subject')}
                      aria-label={`과목으로 정렬 ${sortField === 'subject' ? 
                        (sortDirection === 'asc' ? '(현재 오름차순)' : '(현재 내림차순)') : 
                        '(정렬 가능)'}`}
                    >
                      <div className="flex items-center gap-1">
                        과목
                        {sortField === 'subject' ? (
                          sortDirection === 'asc' ? 
                          <ChevronUp className="h-3 w-3" aria-hidden="true" /> : 
                          <ChevronDown className="h-3 w-3" aria-hidden="true" />
                        ) : (
                          <ArrowUpDown className="h-3 w-3" aria-hidden="true" />
                        )}
                      </div>
                    </Button>
                  </TableHead>
                  <TableHead role="columnheader">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 font-semibold"
                      onClick={() => handleSort('score')}
                      aria-label={`점수로 정렬 ${sortField === 'score' ? 
                        (sortDirection === 'asc' ? '(현재 오름차순)' : '(현재 내림차순)') : 
                        '(정렬 가능)'}`}
                    >
                      <div className="flex items-center gap-1">
                        점수
                        {sortField === 'score' ? (
                          sortDirection === 'asc' ? 
                          <ChevronUp className="h-3 w-3" aria-hidden="true" /> : 
                          <ChevronDown className="h-3 w-3" aria-hidden="true" />
                        ) : (
                          <ArrowUpDown className="h-3 w-3" aria-hidden="true" />
                        )}
                      </div>
                    </Button>
                  </TableHead>
                  <TableHead role="columnheader">등급</TableHead>
                  <TableHead role="columnheader">시험일</TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {sortedStudents.map((student, index) => (
                  <TableRow 
                    key={student.id} 
                    role="row"
                    className={selectedRows.has(student.id) ? 'bg-muted/50' : ''}
                    aria-selected={selectedRows.has(student.id)}
                  >
                    <TableCell role="gridcell">
                      <Checkbox
                        checked={selectedRows.has(student.id)}
                        onCheckedChange={(checked) => handleSelectRow(student.id, checked as boolean)}
                        aria-label={`${student.name} 학생 선택`}
                        aria-describedby={`student-${student.id}-info`}
                      />
                    </TableCell>
                    <TableCell role="gridcell" className="font-medium">
                      <div id={`student-${student.id}-info`}>
                        {student.name}
                        <span className="sr-only">
                          , {student.subject} 과목, {student.score}점, {student.grade} 등급
                        </span>
                      </div>
                    </TableCell>
                    <TableCell role="gridcell">
                      <Badge variant="outline" aria-label={`과목: ${student.subject}`}>
                        {student.subject}
                      </Badge>
                    </TableCell>
                    <TableCell role="gridcell">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{student.score}점</span>
                        {student.score >= 90 ? (
                          <Star className="h-3 w-3 text-yellow-500" aria-label="우수" />
                        ) : (
                          <span className="sr-only">보통</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell role="gridcell">
                      <Badge 
                        variant={student.grade.startsWith('A') ? 'default' : 'secondary'}
                        aria-label={`등급: ${student.grade}`}
                      >
                        {student.grade}
                      </Badge>
                    </TableCell>
                    <TableCell role="gridcell">
                      <time dateTime={student.date} aria-label={`시험일: ${student.date}`}>
                        {student.date}
                      </time>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            <div id="sort-instructions" className="sr-only">
              열 제목 버튼을 클릭하거나 Enter 키를 눌러 해당 열로 정렬할 수 있습니다. 
              같은 열을 다시 클릭하면 정렬 순서가 바뀝니다.
            </div>
          </CardContent>
        </Card>

        {/* 접근성 가이드라인 */}
        <Card>
          <CardHeader>
            <CardTitle>테이블 접근성 가이드라인</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-green-600">✅ 권장사항</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>명확한 테이블 캡션과 헤더</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>적절한 ARIA 역할과 속성</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>키보드 내비게이션 지원</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>정렬 상태 음성 안내</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>선택된 행 시각적/음성 표시</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">🎯 키보드 사용법</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>다음 요소로 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space</span>
                    <span>정렬 버튼 실행</span>
                  </div>
                  <div className="flex justify-between">
                    <span>↑/↓</span>
                    <span>행 간 이동</span>
                  </div>
                  <div className="flex justify-between">
                    <span>←/→</span>
                    <span>열 간 이동</span>
                  </div>
                </div>
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
                테이블은 구조화된 데이터를 표시하는 중요한 도구입니다. 
                스크린 리더 사용자가 행과 열의 관계를 정확히 이해할 수 있도록 
                적절한 헤더와 캡션, ARIA 속성을 제공하세요.
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
        story: '테이블 컴포넌트의 접근성 기능과 키보드 내비게이션을 보여주는 데모입니다.',
      },
    },
  },
};