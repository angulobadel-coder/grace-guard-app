import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import RegisterAdmin from "./pages/RegisterAdmin";
import RegisterMember from "./pages/RegisterMember";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMembers from "./pages/AdminMembers";
import AdminAttendance from "./pages/AdminAttendance";
import AdminAlerts from "./pages/AdminAlerts";
import MemberDashboard from "./pages/MemberDashboard";
import MemberAlerts from "./pages/MemberAlerts";
import MemberProfile from "./pages/MemberProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/admin" element={<RegisterAdmin />} />
          <Route path="/register/member" element={<RegisterMember />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/members" element={<AdminMembers />} />
          <Route path="/admin/attendance" element={<AdminAttendance />} />
          <Route path="/admin/alerts" element={<AdminAlerts />} />
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/member/alerts" element={<MemberAlerts />} />
          <Route path="/member/profile" element={<MemberProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
