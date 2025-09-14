import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Driver pages
import DriverDashboard from "./pages/driver/Dashboard";
import VehicleRegistration from "./pages/driver/VehicleRegistration";
import StationFinder from "./pages/driver/StationFinder";
import Reservation from "./pages/driver/Reservation";
import Payment from "./pages/driver/Payment";
import Subscriptions from "./pages/driver/Subscriptions";

// Staff pages
import StaffDashboard from "./pages/staff/Dashboard";
import QRCheckIn from "./pages/staff/QRCheckIn";
import PayPerSwap from "./pages/staff/PayPerSwap";
import BatteryInventory from "./pages/staff/BatteryInventory";
import BatteryInspection from "./pages/staff/BatteryInspection";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import Reports from "./pages/admin/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Driver routes */}
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/driver/register-vehicle" element={<VehicleRegistration />} />
          <Route path="/driver/find-stations" element={<StationFinder />} />
          <Route path="/driver/reservation" element={<Reservation />} />
          <Route path="/driver/payment" element={<Payment />} />
          <Route path="/driver/subscriptions" element={<Subscriptions />} />
          
          {/* Staff routes */}
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="/staff/qr-checkin" element={<QRCheckIn />} />
          <Route path="/staff/pay-per-swap" element={<PayPerSwap />} />
          <Route path="/staff/battery-inventory" element={<BatteryInventory />} />
          <Route path="/staff/battery-inspection" element={<BatteryInspection />} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/reports" element={<Reports />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;