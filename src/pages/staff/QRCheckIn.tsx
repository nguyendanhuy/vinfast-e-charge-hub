import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, ArrowLeft, Battery, CheckCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

const QRCheckIn = () => {
  const [scannedCustomer, setScannedCustomer] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const mockCustomer = {
    name: "Nguyễn Văn A",
    phone: "0123456789",
    vehicle: "VF 8 Plus",
    batteryType: "Lithium-ion",
    paymentStatus: "Đã thanh toán",
    reservationTime: "14:30 - 15/12/2024",
    qrCode: "QR123456789"
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate QR scanning
    setTimeout(() => {
      setScannedCustomer(mockCustomer);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-primary text-white p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <QrCode className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Check-in QR</h1>
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
        <div className="max-w-2xl mx-auto">
          {/* QR Scanner */}
          <Card className="mb-6 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center">Quét QR Code khách hàng</CardTitle>
              <CardDescription className="text-center">
                Quét mã QR của khách hàng để xác nhận đặt lịch
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <div className="w-64 h-64 mx-auto border-2 border-dashed border-electric-blue rounded-lg flex items-center justify-center bg-electric-blue-light">
                  {isScanning ? (
                    <div className="animate-spin">
                      <QrCode className="h-16 w-16 text-electric-blue" />
                    </div>
                  ) : (
                    <QrCode className="h-16 w-16 text-electric-blue" />
                  )}
                </div>
              </div>
              <Button 
                onClick={handleScan} 
                disabled={isScanning}
                size="lg"
                className="min-w-[200px]"
              >
                {isScanning ? "Đang quét..." : "Bắt đầu quét QR"}
              </Button>
            </CardContent>
          </Card>

          {/* Customer Information */}
          {scannedCustomer && (
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center text-success">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  Thông tin khách hàng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Tên khách hàng</label>
                    <p className="font-medium">{mockCustomer.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Số điện thoại</label>
                    <p className="font-medium">{mockCustomer.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Loại xe</label>
                    <p className="font-medium">{mockCustomer.vehicle}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Loại pin</label>
                    <p className="font-medium">{mockCustomer.batteryType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Thời gian hẹn</label>
                    <p className="font-medium">{mockCustomer.reservationTime}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Trạng thái thanh toán</label>
                    <Badge variant="secondary" className="bg-success text-white">
                      {mockCustomer.paymentStatus}
                    </Badge>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-4">Quy trình đổi pin</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 border rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-electric-blue text-white flex items-center justify-center mr-3 text-sm font-bold">
                        1
                      </div>
                      <span>Kiểm tra xe và pin cũ</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center mr-3 text-sm font-bold">
                        2
                      </div>
                      <span>Tháo pin cũ và gắn pin mới</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center mr-3 text-sm font-bold">
                        3
                      </div>
                      <span>Kiểm tra hoạt động và hoàn thành</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1" size="lg">
                    <Battery className="h-4 w-4 mr-2" />
                    Bắt đầu đổi pin
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    Từ chối
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCheckIn;