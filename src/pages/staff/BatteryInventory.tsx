import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Battery, ArrowLeft, Search, Edit, Trash, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const BatteryInventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const batteries = [
    {
      id: "BAT001",
      type: "Lithium-ion",
      status: "full",
      soh: "95%",
      location: "Slot A1",
      lastUpdated: "15/12/2024 10:30"
    },
    {
      id: "BAT002", 
      type: "Pin LFP",
      status: "charging",
      soh: "92%",
      location: "Slot A2",
      lastUpdated: "15/12/2024 09:15"
    },
    {
      id: "BAT003",
      type: "Lithium-ion",
      status: "empty",
      soh: "88%",
      location: "Slot A3",
      lastUpdated: "15/12/2024 14:45"
    },
    {
      id: "BAT004",
      type: "Pin LFP",
      status: "full",
      soh: "97%",
      location: "Slot B1",
      lastUpdated: "15/12/2024 11:20"
    },
    {
      id: "BAT005",
      type: "Lithium-ion",
      status: "charging",
      soh: "91%",
      location: "Slot B2",
      lastUpdated: "15/12/2024 13:10"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "full":
        return <Badge className="bg-success text-white">Pin đầy</Badge>;
      case "charging":
        return <Badge className="bg-charging text-white">Đang sạc</Badge>;
      case "empty":
        return <Badge variant="secondary">Pin rỗng</Badge>;
      default:
        return <Badge variant="outline">Không xác định</Badge>;
    }
  };

  const statusCounts = {
    full: batteries.filter(b => b.status === "full").length,
    charging: batteries.filter(b => b.status === "charging").length,
    empty: batteries.filter(b => b.status === "empty").length
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Battery className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Quản lý tồn kho pin</h1>
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
        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{statusCounts.full}</h3>
              <p className="text-muted-foreground">Pin đầy</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-charging mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{statusCounts.charging}</h3>
              <p className="text-muted-foreground">Đang sạc</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{statusCounts.empty}</h3>
              <p className="text-muted-foreground">Pin rỗng</p>
            </CardContent>
          </Card>
          <Card className="hover-scale">
            <CardContent className="p-6 text-center">
              <Battery className="h-12 w-12 text-electric-blue mx-auto mb-4" />
              <h3 className="text-2xl font-bold">{batteries.length}</h3>
              <p className="text-muted-foreground">Tổng số pin</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6 animate-slide-up">
          <CardHeader>
            <CardTitle>Tìm kiếm và lọc pin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Tìm theo mã pin, loại pin..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="full">Pin đầy</SelectItem>
                  <SelectItem value="charging">Đang sạc</SelectItem>
                  <SelectItem value="empty">Pin rỗng</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Tìm kiếm
              </Button>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Thêm pin
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Battery List Table */}
        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle>Danh sách pin</CardTitle>
            <CardDescription>
              Quản lý thông tin chi tiết từng pin tại trạm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã pin</TableHead>
                  <TableHead>Loại pin</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>SoH</TableHead>
                  <TableHead>Vị trí</TableHead>
                  <TableHead>Cập nhật cuối</TableHead>
                  <TableHead>Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {batteries.map((battery) => (
                  <TableRow key={battery.id}>
                    <TableCell className="font-medium">{battery.id}</TableCell>
                    <TableCell>{battery.type}</TableCell>
                    <TableCell>{getStatusBadge(battery.status)}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        parseInt(battery.soh) > 90 ? 'text-success' : 
                        parseInt(battery.soh) > 80 ? 'text-warning' : 'text-destructive'
                      }`}>
                        {battery.soh}
                      </span>
                    </TableCell>
                    <TableCell>{battery.location}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {battery.lastUpdated}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BatteryInventory;