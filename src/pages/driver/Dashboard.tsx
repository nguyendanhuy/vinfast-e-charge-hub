import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Calendar, CreditCard, Battery, Home } from "lucide-react";
import { Link } from "react-router-dom";

const DriverDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Battery className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Dashboard Tài xế</h1>
          </div>
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Home className="h-4 w-4 mr-2" />
              Trang chủ
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2">Chào mừng bạn!</h2>
          <p className="text-muted-foreground">Quản lý xe điện và dịch vụ đổi pin của bạn</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Car className="h-12 w-12 text-electric-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold">1</h3>
              <p className="text-muted-foreground">Xe đã đăng ký</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-muted-foreground">Trạm gần đây</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-2xl font-bold">3</h3>
              <p className="text-muted-foreground">Lịch hẹn</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <CreditCard className="h-12 w-12 text-charging mx-auto mb-4" />
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-muted-foreground">Gói thuê bao</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <Car className="h-6 w-6 mr-2" />
                Đăng ký & Liên kết xe
              </CardTitle>
              <CardDescription>
                Đăng ký thông tin xe VINFAST và loại pin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/driver/register-vehicle">
                <Button className="w-full">Quản lý xe</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <MapPin className="h-6 w-6 mr-2" />
                Tìm trạm & Tồn kho pin
              </CardTitle>
              <CardDescription>
                Tìm trạm gần nhất và kiểm tra tình trạng pin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/driver/find-stations">
                <Button className="w-full">Tìm trạm</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <Calendar className="h-6 w-6 mr-2" />
                Đặt lịch giữ pin
              </CardTitle>
              <CardDescription>
                Đặt trước lịch đổi pin tại trạm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/driver/reservation">
                <Button className="w-full">Đặt lịch</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <CreditCard className="h-6 w-6 mr-2" />
                Thanh toán
              </CardTitle>
              <CardDescription>
                Thanh toán dịch vụ và nhận QR code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/driver/payment">
                <Button className="w-full">Thanh toán</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <Battery className="h-6 w-6 mr-2" />
                Gói thuê pin
              </CardTitle>
              <CardDescription>
                Đăng ký gói thuê bao pin hàng tháng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/driver/subscriptions">
                <Button className="w-full">Xem gói</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;