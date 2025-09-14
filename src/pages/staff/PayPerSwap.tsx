import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, ArrowLeft, Search, CheckCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

const PayPerSwap = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const pendingPayments = [
    {
      id: "1",
      customerName: "Nguyễn Văn A",
      phone: "0123456789",
      vehicle: "VF 8 Plus",
      depositAmount: "50,000",
      remainingAmount: "100,000",
      reservationTime: "14:30 - 15/12/2024",
      status: "Chờ thanh toán"
    },
    {
      id: "2", 
      customerName: "Trần Thị B",
      phone: "0987654321",
      vehicle: "VF e34",
      depositAmount: "50,000",
      remainingAmount: "100,000",
      reservationTime: "15:00 - 15/12/2024",
      status: "Chờ thanh toán"
    },
    {
      id: "3",
      customerName: "Lê Văn C",
      phone: "0555666777",
      vehicle: "VF 9",
      depositAmount: "50,000",
      remainingAmount: "100,000",
      reservationTime: "16:30 - 15/12/2024",
      status: "Chờ thanh toán"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <CreditCard className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Thanh toán Pay-per-swap</h1>
          </div>
          <Link to="/staff">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Search and Filter */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Tìm kiếm khách hàng đặt cọc</CardTitle>
            <CardDescription>
              Tìm khách hàng đã đặt cọc và cần thanh toán phần còn lại
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Tìm theo tên, số điện thoại..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pending Payments List */}
        <div className="space-y-4 animate-slide-up">
          {pendingPayments.map((payment) => (
            <Card key={payment.id} className="hover-glow">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Customer Info */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-electric-blue mr-2" />
                      <h3 className="font-semibold text-lg">{payment.customerName}</h3>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>SĐT: {payment.phone}</p>
                      <p>Xe: {payment.vehicle}</p>
                      <p>Thời gian: {payment.reservationTime}</p>
                    </div>
                    <Badge variant="secondary">{payment.status}</Badge>
                  </div>

                  {/* Payment Info */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Thông tin thanh toán</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Đã đặt cọc:</span>
                        <span className="font-medium">{payment.depositAmount} VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Còn lại:</span>
                        <span className="font-medium text-electric-blue">{payment.remainingAmount} VNĐ</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-medium">
                          <span>Tổng cộng:</span>
                          <span>150,000 VNĐ</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Action */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phương thức thanh toán</label>
                      <Select onValueChange={setPaymentMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn phương thức" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Tiền mặt</SelectItem>
                          <SelectItem value="card">Thẻ</SelectItem>
                          <SelectItem value="transfer">Chuyển khoản</SelectItem>
                          <SelectItem value="wallet">Ví điện tử</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Button 
                        className="w-full" 
                        disabled={!paymentMethod}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Xác nhận thanh toán
                      </Button>
                      <Button variant="outline" className="w-full">
                        Hoãn lại
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="mt-8 animate-scale-in">
          <CardHeader>
            <CardTitle>Thống kê thanh toán hôm nay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-electric-blue">8</h3>
                <p className="text-muted-foreground">Chờ thanh toán</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-success">15</h3>
                <p className="text-muted-foreground">Đã hoàn thành</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charging">2,850,000</h3>
                <p className="text-muted-foreground">Tổng thu (VNĐ)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayPerSwap;