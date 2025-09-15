import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Zap, Users, BarChart3, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Battery className="h-8 w-8 text-white mr-3" />
            <span className="text-white text-xl font-bold">EV Battery Swap</span>
          </div>
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="outline" className="text-white border-white/20 bg-white/10 hover:bg-white/20">
                <LogIn className="h-4 w-4 mr-2" />
                Đăng nhập
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-white text-electric-blue hover:bg-white/90">
                <UserPlus className="h-4 w-4 mr-2" />
                Đăng ký
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hệ thống Đổi Pin EV
            <span className="block text-3xl md:text-5xl mt-2 text-white/90">VINFAST</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Giải pháp quản lý trạm đổi pin xe điện hiện đại, nhanh chóng và hiệu quả. 
            Kết nối tài xế, nhân viên và quản trị viên trong một hệ thống thống nhất.
          </p>
          <div className="space-x-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-white/90 text-lg px-8 py-3">
                Bắt đầu ngay
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/10 hover:bg-white/20 text-lg px-8 py-3">
                Đăng nhập
              </Button>
            </Link>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 animate-slide-up">
          <Card className="hover-scale hover-glow border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-electric-blue-light rounded-full w-fit">
                <Zap className="h-8 w-8 text-electric-blue" />
              </div>
              <CardTitle className="text-2xl text-electric-blue">Tài xế</CardTitle>
              <CardDescription className="text-base">
                Đăng ký xe, tìm trạm, đặt lịch đổi pin
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-4 space-y-2">
                <li>• Tìm trạm đổi pin gần nhất</li>
                <li>• Đặt lịch trước</li>
                <li>• Thanh toán trực tuyến</li>
                <li>• Theo dõi lịch sử</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale hover-glow border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-electric-blue-light rounded-full w-fit">
                <Users className="h-8 w-8 text-electric-blue" />
              </div>
              <CardTitle className="text-2xl text-electric-blue">Nhân viên</CardTitle>
              <CardDescription className="text-base">
                Quản lý đổi pin, thanh toán, kiểm tra pin
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-4 space-y-2">
                <li>• Quét QR xác nhận</li>
                <li>• Kiểm tra pin</li>
                <li>• Quản lý kho pin</li>
                <li>• Theo dõi giao dịch</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-scale hover-glow border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-electric-blue-light rounded-full w-fit">
                <BarChart3 className="h-8 w-8 text-electric-blue" />
              </div>
              <CardTitle className="text-2xl text-electric-blue">Quản trị</CardTitle>
              <CardDescription className="text-base">
                Báo cáo, thống kê, quản lý hệ thống
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-sm text-muted-foreground mb-4 space-y-2">
                <li>• Dashboard tổng quan</li>
                <li>• Báo cáo chi tiết</li>
                <li>• Phân tích dữ liệu</li>
                <li>• Quản lý người dùng</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center animate-scale-in">
          <h2 className="text-3xl font-bold text-white mb-8">Tính năng nổi bật</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
              <Battery className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quản lý Pin Thông minh</h3>
              <p className="text-sm text-white/80">Theo dõi trạng thái pin real-time với công nghệ IoT</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
              <Zap className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Đổi Pin Nhanh chóng</h3>
              <p className="text-sm text-white/80">Quy trình đổi pin tối ưu chỉ trong 5 phút</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Đa vai trò</h3>
              <p className="text-sm text-white/80">Hệ thống phân quyền cho tài xế, nhân viên, quản trị</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
              <BarChart3 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Báo cáo Chi tiết</h3>
              <p className="text-sm text-white/80">Thống kê và phân tích dữ liệu toàn diện</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Sẵn sàng bắt đầu?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Tham gia ngay hôm nay và trải nghiệm hệ thống đổi pin xe điện hiện đại nhất Việt Nam
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-electric-blue hover:bg-white/90 text-lg px-8 py-3">
                Đăng ký miễn phí
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Battery className="h-6 w-6 text-white mr-2" />
              <span className="text-white font-semibold">EV Battery Swap System</span>
            </div>
            <p className="text-white/70 text-sm">
              © 2024 VINFAST. Hệ thống quản lý trạm đổi pin xe điện.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;