import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, MapPin, Car, Battery, CreditCard, X, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import batteryIcon from "@/assets/battery-icon.jpg";

const BookingHistory = () => {
  const { toast } = useToast();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [bankInfo, setBankInfo] = useState({
    accountNumber: "",
    bankName: "",
    accountHolder: "",
    reason: ""
  });

  const bookings = [
    {
      id: "BK001",
      vehicleType: "VinFast VF8",
      batteryType: "Lithium-ion",
      bookingTime: "15/01/2024 14:30",
      paymentTime: "15/01/2024 14:35",
      stationLocation: "Trạm Quận 1 - 123 Nguyễn Huệ",
      bookingMethod: "Thanh toán đầy đủ",
      status: "Hoàn thành",
      amount: "120,000",
      canCancel: false
    },
    {
      id: "BK002", 
      vehicleType: "VinFast VF9",
      batteryType: "LFP",
      bookingTime: "16/01/2024 09:15",
      paymentTime: "16/01/2024 09:20",
      stationLocation: "Trạm Bình Thạnh - 789 Xô Viết Nghệ Tĩnh",
      bookingMethod: "Đặt cọc",
      status: "Đã cọc",
      amount: "30,000",
      remainingAmount: "90,000",
      canCancel: true
    },
    {
      id: "BK003",
      vehicleType: "VinFast VF6",
      batteryType: "Lithium-ion", 
      bookingTime: "17/01/2024 16:45",
      paymentTime: "17/01/2024 16:50",
      stationLocation: "Trạm Quận 3 - 456 Lê Văn Sỹ",
      bookingMethod: "Thanh toán đầy đủ",
      status: "Đã thanh toán",
      amount: "110,000",
      canCancel: false
    }
  ];

  const handleCancelBooking = () => {
    if (!bankInfo.accountNumber || !bankInfo.bankName || !bankInfo.accountHolder) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin ngân hàng",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Yêu cầu hủy cọc đã được gửi",
      description: "Chúng tôi sẽ xử lý và hoàn tiền trong vòng 24h",
    });
    
    setCancelDialogOpen(false);
    setBankInfo({ accountNumber: "", bankName: "", accountHolder: "", reason: "" });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Hoàn thành": return "default";
      case "Đã cọc": return "secondary";
      case "Đã thanh toán": return "outline";
      default: return "default";
    }
  };

  const getMethodColor = (method) => {
    return method === "Đặt cọc" ? "destructive" : "default";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Lịch sử đặt chỗ</h1>
          </div>
          <div className="flex space-x-2">
            <Link to="/driver">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <Home className="h-4 w-4 mr-2" />
                Trang chủ
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <div className="relative mb-8 rounded-xl overflow-hidden animate-fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-charging/20" />
          <img 
            src={batteryIcon}
            alt="Battery Management" 
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold mb-1">Quản lý lịch sử đặt chỗ</h2>
            <p className="text-white/80">Theo dõi và quản lý các đơn đặt chỗ của bạn</p>
          </div>
        </div>

        {/* Booking Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 animate-slide-up">
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-electric-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{bookings.length}</h3>
              <p className="text-muted-foreground">Tổng đặt chỗ</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <CreditCard className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{bookings.filter(b => !b.canCancel).length}</h3>
              <p className="text-muted-foreground">Hoàn thành</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{bookings.filter(b => b.canCancel).length}</h3>
              <p className="text-muted-foreground">Đang cọc</p>
            </CardContent>
          </Card>
        </div>

        {/* Bookings List */}
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Danh sách đặt chỗ</CardTitle>
            <CardDescription>
              Chi tiết các lần đặt chỗ đổi pin của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {bookings.map((booking) => (
                <div key={booking.id} className="border rounded-lg p-6 hover-glow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-electric-blue">#{booking.id}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={getStatusColor(booking.status)}>{booking.status}</Badge>
                        <Badge variant={getMethodColor(booking.bookingMethod)}>{booking.bookingMethod}</Badge>
                      </div>
                    </div>
                    {!booking.canCancel && booking.status !== "Đã cọc" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="default" 
                            size="sm"
                          >
                            <CreditCard className="h-4 w-4 mr-1" />
                            Xem QR
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>QR Code đổi pin</DialogTitle>
                            <DialogDescription>
                              Xuất trình QR này cho nhân viên tại trạm để đổi pin
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="text-center p-6">
                            <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                              <div className="text-center">
                                <CreditCard className="h-16 w-16 mx-auto mb-2 text-electric-blue" />
                                <p className="text-sm font-medium">QR Code #{booking.id}</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Mã đặt chỗ: {booking.id}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Trạm: {booking.stationLocation}
                            </p>
                          </div>

                          <DialogFooter>
                            <Button variant="outline" className="w-full">
                              Đóng
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Car className="h-4 w-4 mr-1" />
                        Loại xe & pin
                      </div>
                      <p className="font-medium">{booking.vehicleType}</p>
                      <p className="text-sm text-muted-foreground">{booking.batteryType}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        Thời gian đặt
                      </div>
                      <p className="font-medium">{booking.bookingTime}</p>
                      <p className="text-sm text-muted-foreground">TT: {booking.paymentTime}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        Địa điểm
                      </div>
                      <p className="font-medium">{booking.stationLocation}</p>
                    </div>

                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <CreditCard className="h-4 w-4 mr-1" />
                        Thanh toán
                      </div>
                      <p className="font-medium text-success">{booking.amount.toLocaleString()} VNĐ</p>
                      {booking.remainingAmount && (
                        <p className="text-sm text-warning">Còn lại: {booking.remainingAmount.toLocaleString()} VNĐ</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingHistory;