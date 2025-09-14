import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BarChart3, ArrowLeft, Search, CalendarIcon, TrendingUp, DollarSign, Battery, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
  const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() });

  const stations = [
    {
      id: "1",
      name: "Trạm Quận 1",
      address: "123 Nguyễn Huệ, Quận 1",
      revenue: "850,000",
      transactions: 89,
      batteries: 45,
      efficiency: "96%",
      popularityScore: 9.2
    },
    {
      id: "2", 
      name: "Trạm Bình Thạnh",
      address: "789 Xô Viết Nghệ Tĩnh, Bình Thạnh",
      revenue: "720,000",
      transactions: 76,
      batteries: 38,
      efficiency: "94%",
      popularityScore: 8.8
    },
    {
      id: "3",
      name: "Trạm Quận 3",
      address: "456 Lê Văn Sỹ, Quận 3",
      revenue: "680,000",
      transactions: 64,
      batteries: 42,
      efficiency: "92%",
      popularityScore: 8.1
    }
  ];

  const kpiData = {
    totalRevenue: "2,850,000",
    totalTransactions: 245,
    avgTransaction: "11,633",
    customerSatisfaction: "94%",
    systemUptime: "99.2%",
    batteryUtilization: "87%"
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BarChart3 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Báo cáo tổng hợp</h1>
          </div>
          <Link to="/admin">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Filters */}
        <Card className="mb-8 animate-fade-in">
          <CardHeader>
            <CardTitle>Bộ lọc báo cáo</CardTitle>
            <CardDescription>Tùy chỉnh thời gian và trạm để xem báo cáo chi tiết</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Tìm kiếm trạm</label>
                <Input
                  placeholder="Tên trạm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Chọn trạm</label>
                <Select onValueChange={setSelectedStation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tất cả trạm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả trạm</SelectItem>
                    {stations.map((station) => (
                      <SelectItem key={station.id} value={station.id}>
                        {station.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Overview */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 animate-slide-up">
          <Card className="hover-scale">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="text-lg font-bold">{kpiData.totalRevenue}</h3>
              <p className="text-xs text-muted-foreground">Tổng doanh thu (VNĐ)</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-electric-blue mx-auto mb-2" />
              <h3 className="text-lg font-bold">{kpiData.totalTransactions}</h3>
              <p className="text-xs text-muted-foreground">Tổng giao dịch</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-4 text-center">
              <DollarSign className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="text-lg font-bold">{kpiData.avgTransaction}</h3>
              <p className="text-xs text-muted-foreground">TB/giao dịch (VNĐ)</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-charging mx-auto mb-2" />
              <h3 className="text-lg font-bold">{kpiData.customerSatisfaction}</h3>
              <p className="text-xs text-muted-foreground">Hài lòng KH</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="text-lg font-bold">{kpiData.systemUptime}</h3>
              <p className="text-xs text-muted-foreground">Uptime hệ thống</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-4 text-center">
              <Battery className="h-8 w-8 text-electric-blue mx-auto mb-2" />
              <h3 className="text-lg font-bold">{kpiData.batteryUtilization}</h3>
              <p className="text-xs text-muted-foreground">Sử dụng pin</p>
            </CardContent>
          </Card>
        </div>

        {/* Station Details */}
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Chi tiết từng trạm</CardTitle>
            <CardDescription>
              Thông tin chi tiết về doanh thu, giao dịch và hiệu suất của từng trạm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stations.map((station) => (
                <div key={station.id} className="border rounded-lg p-6 hover-glow">
                  <div className="grid lg:grid-cols-6 gap-4">
                    <div className="lg:col-span-2">
                      <h3 className="font-semibold text-lg text-electric-blue">{station.name}</h3>
                      <p className="text-sm text-muted-foreground">{station.address}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-muted-foreground mr-2">Độ phổ biến:</span>
                        <Badge variant="secondary">{station.popularityScore}/10</Badge>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-success">{station.revenue}</h4>
                      <p className="text-sm text-muted-foreground">Doanh thu (VNĐ)</p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-electric-blue">{station.transactions}</h4>
                      <p className="text-sm text-muted-foreground">Giao dịch</p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-warning">{station.batteries}</h4>
                      <p className="text-sm text-muted-foreground">Pin quản lý</p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-charging">{station.efficiency}</h4>
                      <p className="text-sm text-muted-foreground">Hiệu suất</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Lịch sử giao dịch tuần này</span>
                      <Button variant="outline" size="sm">
                        Xem chi tiết
                      </Button>
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

export default Reports;