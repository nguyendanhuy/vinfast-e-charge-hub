import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowLeft, Battery, Filter, Map, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const StationFinder = () => {
  const [filters, setFilters] = useState({
    distance: "",
    batteryCount: "",
    crowdLevel: ""
  });

  const mockStations = [
    {
      id: 1,
      name: "Trạm Quận 1",
      address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
      distance: "2.5 km",
      batteries: { full: 8, charging: 3, empty: 1 },
      crowdLevel: "Thấp",
      status: "Hoạt động"
    },
    {
      id: 2,
      name: "Trạm Quận 3",
      address: "456 Lê Văn Sỹ, Quận 3, TP.HCM",
      distance: "4.2 km",
      batteries: { full: 5, charging: 5, empty: 2 },
      crowdLevel: "Trung bình",
      status: "Hoạt động"
    },
    {
      id: 3,
      name: "Trạm Bình Thạnh",
      address: "789 Xô Viết Nghệ Tĩnh, Bình Thạnh, TP.HCM",
      distance: "6.1 km",
      batteries: { full: 12, charging: 2, empty: 1 },
      crowdLevel: "Cao",
      status: "Hoạt động"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MapPin className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Tìm trạm</h1>
          </div>
          <Link to="/driver">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Location and Map */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Navigation className="h-5 w-5 mr-2" />
              Vị trí hiện tại
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input 
                placeholder="Địa chỉ hiện tại..." 
                className="flex-1"
                defaultValue="123 Lê Lợi, Quận 1, TP.HCM"
              />
              <Button variant="outline">
                <Map className="h-4 w-4 mr-2" />
                Chọn trên bản đồ
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-6 animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Bộ lọc
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Khoảng cách</label>
                <Select onValueChange={(value) => setFilters({...filters, distance: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tất cả" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Dưới 1 km</SelectItem>
                    <SelectItem value="5">Dưới 5 km</SelectItem>
                    <SelectItem value="10">Dưới 10 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Số lượng pin</label>
                <Select onValueChange={(value) => setFilters({...filters, batteryCount: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tất cả" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">Trên 5 pin</SelectItem>
                    <SelectItem value="10">Trên 10 pin</SelectItem>
                    <SelectItem value="15">Trên 15 pin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Mức độ đông người</label>
                <Select onValueChange={(value) => setFilters({...filters, crowdLevel: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tất cả" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Thấp</SelectItem>
                    <SelectItem value="medium">Trung bình</SelectItem>
                    <SelectItem value="high">Cao</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Station List */}
        <div className="space-y-4 animate-scale-in">
          {mockStations.map((station) => (
            <Card key={station.id} className="hover-glow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-electric-blue">{station.name}</h3>
                    <p className="text-muted-foreground">{station.address}</p>
                    <p className="text-sm text-muted-foreground mt-1">Cách {station.distance}</p>
                  </div>
                  <Badge variant="secondary">{station.status}</Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">{station.batteries.full}</div>
                    <div className="text-sm text-muted-foreground">Pin đầy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-charging">{station.batteries.charging}</div>
                    <div className="text-sm text-muted-foreground">Đang sạc</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-muted-foreground">{station.batteries.empty}</div>
                    <div className="text-sm text-muted-foreground">Pin rỗng</div>
                  </div>
                  <div className="text-center">
                    <Badge variant={station.crowdLevel === "Thấp" ? "secondary" : station.crowdLevel === "Trung bình" ? "default" : "destructive"}>
                      {station.crowdLevel}
                    </Badge>
                    <div className="text-sm text-muted-foreground">Đông người</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to="/driver/reservation" className="flex-1">
                    <Button className="w-full">
                      <Battery className="h-4 w-4 mr-2" />
                      Đặt lịch
                    </Button>
                  </Link>
                  <Button variant="outline">
                    <MapPin className="h-4 w-4 mr-2" />
                    Chỉ đường
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationFinder;