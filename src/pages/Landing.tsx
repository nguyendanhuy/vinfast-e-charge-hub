import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Zap, Clock, Shield, Users, MapPin } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Battery className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">EV Battery Swap</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Đăng ký</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tương lai của việc
            <span className="text-primary"> sạc xe điện</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hệ thống đổi pin thông minh cho xe điện. Nhanh chóng, tiện lợi và thân thiện với môi trường.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signup">Bắt đầu ngay</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">Khám phá thêm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Tại sao chọn chúng tôi?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp đổi pin xe điện hiện đại nhất với công nghệ tiên tiến
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">Đổi pin siêu nhanh</h4>
              <p className="text-muted-foreground">
                Chỉ mất 3-5 phút để hoàn thành việc đổi pin, nhanh hơn nhiều so với sạc truyền thống
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">Mạng lưới rộng khắp</h4>
              <p className="text-muted-foreground">
                Hệ thống trạm đổi pin phủ sóng toàn quốc, dễ dàng tìm thấy ở mọi nơi
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h4 className="text-xl font-semibold mb-2">An toàn tuyệt đối</h4>
              <p className="text-muted-foreground">
                Pin được kiểm tra chất lượng nghiêm ngặt, đảm bảo an toàn cho người dùng
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
              <p className="text-muted-foreground">Trạm đổi pin</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">10,000+</h4>
              <p className="text-muted-foreground">Khách hàng tin tưởng</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">50,000+</h4>
              <p className="text-muted-foreground">Lượt đổi pin/tháng</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-muted-foreground">Hỗ trợ khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Sẵn sàng trải nghiệm?</h3>
          <p className="text-muted-foreground mb-8">
            Tham gia cùng hàng nghìn người dùng đã tin tưởng hệ thống đổi pin của chúng tôi
          </p>
          <Button size="lg" asChild>
            <Link to="/signup">Đăng ký miễn phí</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Battery className="h-6 w-6 text-primary" />
              <span className="font-semibold">EV Battery Swap</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EV Battery Swap. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;