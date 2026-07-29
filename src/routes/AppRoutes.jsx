import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import RoleSelection from "../pages/auth/RoleSelection";
import Dashboard from "../pages/freight-owner/Dashboard";
import PostLoad from "../pages/freight-owner/PostLoad";
import LandingPage from "../pages/Landing/LandingPage";
import MatchRecommendations from "../pages/freight-owner/MatchRecommendations";
import TransporterDashboard from "../pages/transporter/Dashboard";
import PostTruck from "../pages/transporter/PostTruck";
import DigitalConfirmation from "../pages/shared/DigitalConfirmation";

function AppRoutes() {
  return (
<BrowserRouter>
      <Routes>
        {/* Landing Page as Root Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/role-selection" element={<RoleSelection />} />

        {/* Freight Owner Routes */}
        <Route path="/freight-owner/dashboard" element={<Dashboard />} />
        <Route path="/freight-owner/post-load" element={<PostLoad />} />
        <Route path="/freight-owner/matches" element={<MatchRecommendations />} />
        <Route path="/transporter/dashboard" element={<TransporterDashboard />} />
        <Route path="/confirmation" element={<DigitalConfirmation />} />
        <Route path="/transporter/post-truck" element={<PostTruck />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;