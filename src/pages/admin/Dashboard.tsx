import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Battery, MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BarChart3 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Dashboard Quản trị</h1>
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Tổng quan hệ thống</h2>
          <p className="text-muted-foreground">Quản lý và giám sát toàn bộ mạng lưới trạm đổi pin</p>
        </div>

        {/* Key Performance Indicators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold">2.85M</h3>
              <p className="text-muted-foreground">Doanh thu (VNĐ)</p>
              <p className="text-xs text-success mt-1">+12% so với tháng trước</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-electric-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold">1,248</h3>
              <p className="text-muted-foreground">Người dùng hoạt động</p>
              <p className="text-xs text-electric-blue mt-1">+8% so với tuần trước</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="text-2xl font-bold">156</h3>
              <p className="text-muted-foreground">Lần đổi pin hôm nay</p>
              <p className="text-xs text-warning mt-1">+3% so với hôm qua</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-charging mx-auto mb-4" />
              <h3 className="text-2xl font-bold">12</h3>
              <p className="text-muted-foreground">Trạm hoạt động</p>
              <p className="text-xs text-charging mt-1">100% uptime</p>
            </CardContent>
          </Card>
        </div>


        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <BarChart3 className="h-6 w-6 mr-2" />
                Báo cáo tổng hợp
              </CardTitle>
              <CardDescription>
                Xem báo cáo chi tiết về doanh thu, KPI và hiệu suất
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/admin/reports">
                <Button className="w-full">Xem báo cáo</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <Battery className="h-6 w-6 mr-2" />
                Điều phối pin
              </CardTitle>
              <CardDescription>
                Quản lý phân phối và chuyển pin giữa các trạm
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/admin/battery-dispatch">
                <Button className="w-full" variant="outline">
                  Điều phối pin
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-electric-blue">
                <Users className="h-6 w-6 mr-2" />
                Quản lý nhân viên
              </CardTitle>
              <CardDescription>
                Phân công nhân viên cho các trạm đổi pin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="secondary">
                Assign nhân viên
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Station Management Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Quản lý trạm và nhân viên</h3>
          <div className="grid gap-6">
            {[
              { id: 1, name: "Trạm Bình Thạnh", address: "789 Xô Viết Nghệ Tĩnh", staff: "Nguyễn Văn A", status: "Hoạt động" },
              { id: 2, name: "Trạm Quận 1", address: "123 Lê Lợi", staff: "Chưa phân công", status: "Hoạt động" },
              { id: 3, name: "Trạm Thủ Đức", address: "456 Võ Văn Ngân", staff: "Trần Thị B", status: "Bảo trì" },
              { id: 4, name: "Trạm Tân Bình", address: "321 Cộng Hòa", staff: "Chưa phân công", status: "Hoạt động" }
            ].map((station) => (
              <Card key={station.id} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-6 w-6 text-electric-blue" />
                        <div>
                          <h4 className="font-semibold text-lg">{station.name}</h4>
                          <p className="text-muted-foreground text-sm">{station.address}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Nhân viên</p>
                        <p className={`font-medium ${station.staff === "Chưa phân công" ? "text-warning" : "text-foreground"}`}>
                          {station.staff}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Trạng thái</p>
                        <p className={`font-medium ${station.status === "Hoạt động" ? "text-success" : "text-warning"}`}>
                          {station.status}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        {station.staff === "Chưa phân công" ? "Assign Staff" : "Đổi Staff"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;