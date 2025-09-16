import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, ArrowLeft, AlertTriangle, CheckCircle, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BatteryInspection = () => {
  const { toast } = useToast();
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [inspectionType, setInspectionType] = useState("");

  const emptyBatteries = [
    {
      id: "BAT005",
      type: "Lithium-ion",
      lastUsed: "14/12/2024 16:30",
      location: "Slot A3",
      soh: "78%",
      cycles: 345,
      temperature: "23°C"
    },
    {
      id: "BAT009",
      type: "Pin LFP", 
      lastUsed: "14/12/2024 15:20",
      location: "Slot B3",
      soh: "75%",
      cycles: 389,
      temperature: "24°C"
    },
    {
      id: "BAT014",
      type: "Lithium-ion",
      lastUsed: "14/12/2024 14:10",
      location: "Slot C2",
      soh: "72%",
      cycles: 467,
      temperature: "25°C"
    }
  ];

  const MaintenanceForm = ({ battery, onClose }) => {
    const [damageDescription, setDamageDescription] = useState("");
    const [sohValue, setSohValue] = useState("");

    const handleSubmit = () => {
      if (inspectionType === "maintenance") {
        toast({
          title: "Gửi pin bảo trì thành công",
          description: `Pin ${battery.id} đã được gửi đi bảo trì. Hệ thống sẽ theo dõi tiến độ.`,
        });
      } else if (inspectionType === "continue") {
        toast({
          title: "Cập nhật SoH thành công", 
          description: `Pin ${battery.id} đã được cập nhật SoH mới: ${sohValue}%`,
        });
      }
      onClose();
    };

    return (
      <div className="space-y-4">
        <div className="bg-electric-blue-light p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Thông tin pin: {battery.id}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Loại: {battery.type}</span>
            <span>SoH hiện tại: {battery.soh}</span>
            <span>Chu kỳ: {battery.cycles}</span>
            <span>Nhiệt độ: {battery.temperature}</span>
          </div>
        </div>

        {inspectionType === "maintenance" && (
          <div className="space-y-3">
            <Label htmlFor="damage">Mô tả tình trạng hư hại</Label>
            <Textarea
              id="damage"
              placeholder="Nhập chi tiết tình trạng pin cần bảo trì..."
              value={damageDescription}
              onChange={(e) => setDamageDescription(e.target.value)}
            />
          </div>
        )}

        {inspectionType === "continue" && (
          <div className="space-y-3">
            <Label htmlFor="soh">Cập nhật SoH của pin (%)</Label>
            <Input
              id="soh"
              type="number"
              placeholder="Nhập giá trị SoH..."
              value={sohValue}
              onChange={(e) => setSohValue(e.target.value)}
            />
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button 
            className="flex-1"
            onClick={handleSubmit}
          >
            {inspectionType === "maintenance" ? "Gửi bảo trì" : "Cập nhật SoH"}
          </Button>
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Hủy bỏ
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Search className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Kiểm tra/Giám định pin</h1>
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
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Pin rỗng cần kiểm tra</CardTitle>
            <CardDescription>
              Danh sách pin đang ở trạng thái rỗng cần được kiểm tra tình trạng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {emptyBatteries.map((battery) => (
                <div key={battery.id} className="border rounded-lg p-4 hover-glow">
                  <div className="grid lg:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-electric-blue">{battery.id}</h3>
                      <p className="text-sm text-muted-foreground">{battery.type}</p>
                      <p className="text-sm text-muted-foreground">Vị trí: {battery.location}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>SoH:</span>
                        <span className={`font-medium ${
                          parseInt(battery.soh) > 90 ? 'text-success' : 
                          parseInt(battery.soh) > 80 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {battery.soh}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Chu kỳ:</span>
                        <span>{battery.cycles}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Nhiệt độ:</span>
                        <span>{battery.temperature}</span>
                      </div>
                    </div>
                    
                    <div>
                      <Badge variant="secondary">Pin rỗng</Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        Sử dụng cuối: {battery.lastUsed}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedBattery(battery);
                              setInspectionType("maintenance");
                            }}
                          >
                            <Wrench className="h-4 w-4 mr-2" />
                            Gửi bảo trì
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Gửi pin đi bảo trì</DialogTitle>
                            <DialogDescription>
                              Ghi rõ tình trạng hư hại của pin
                            </DialogDescription>
                          </DialogHeader>
                          {selectedBattery && (
                            <MaintenanceForm 
                              battery={selectedBattery} 
                              onClose={() => setSelectedBattery(null)}
                            />
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm"
                            onClick={() => {
                              setSelectedBattery(battery);
                              setInspectionType("continue");
                            }}
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Cập nhật SoH
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Cập nhật thông số pin</DialogTitle>
                            <DialogDescription>
                              Nhập thông số SoH mới để tiếp tục sử dụng
                            </DialogDescription>
                          </DialogHeader>
                          {selectedBattery && (
                            <MaintenanceForm 
                              battery={selectedBattery} 
                              onClose={() => setSelectedBattery(null)}
                            />
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inspection Summary */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle>Thống kê kiểm tra hôm nay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <AlertTriangle className="h-12 w-12 text-warning mx-auto mb-2" />
                <h3 className="text-2xl font-bold">3</h3>
                <p className="text-muted-foreground">Cần kiểm tra</p>
              </div>
              <div>
                <Wrench className="h-12 w-12 text-destructive mx-auto mb-2" />
                <h3 className="text-2xl font-bold">2</h3>
                <p className="text-muted-foreground">Gửi bảo trì</p>
              </div>
              <div>
                <CheckCircle className="h-12 w-12 text-success mx-auto mb-2" />
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-muted-foreground">Đạt chuẩn</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BatteryInspection;