import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RoleSelection from "../pages/auth/RoleSelection";
import Dashboard from "../pages/freight-owner/Dashboard";
import PostLoad from "../pages/freight-owner/PostLoad";
import LandingPage from "../pages/Landing/LandingPage";
import MatchRecommendations from "../pages/freight-owner/MatchRecommendations";
import TransporterDashboard from "../pages/transporter/Dashboard";
import PostTruck from "../pages/transporter/PostTruck";
import DigitalConfirmation from "../pages/shared/DigitalConfirmation";
import TripTracking from "../pages/shared/TripTracking";
import MyLoads from "../pages/freight-owner/MyLoads";
import MyTrucks from "../pages/transporter/MyTrucks";
import AdminDashboard from "../pages/admin/Dashboard";
import UsersManagement from "../pages/admin/Users";
import Compliance from "../pages/admin/Compliance";
import AuditTrail from "../pages/admin/AuditTrail";
import Ratings from "../pages/shared/Ratings";
import AdminAnalytics from "../pages/admin/AdminAnalytics";

function AppRoutes() {
  return (
<BrowserRouter>
      <Routes>
        {/* Landing Page as Root Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-selection" element={<RoleSelection />} />

        {/* Freight Owner Routes */}
        <Route path="/freight-owner/dashboard" element={<Dashboard />} />
        <Route path="/freight-owner/post-load" element={<PostLoad />} />
        <Route path="/freight-owner/matches" element={<MatchRecommendations />} />
        <Route path="/transporter/dashboard" element={<TransporterDashboard />} />
        <Route path="/confirmation" element={<DigitalConfirmation />} />
        <Route path="/tracking" element={<TripTracking />} />
        <Route path="/freight-owner/my-loads" element={<MyLoads />} />
        <Route path="/admin/compliance" element={<Compliance />} />
        <Route path="/transporter/post-truck" element={<PostTruck />} />
        <Route path="/transporter/my-trucks" element={<MyTrucks />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/audit" element={<AuditTrail />} />
        <Route path="/admin/users" element={<UsersManagement />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/ratings" element={<Ratings />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;