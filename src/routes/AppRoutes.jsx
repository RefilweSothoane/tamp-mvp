import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import RoleSelection from "../pages/auth/RoleSelection";
import Dashboard from "../pages/freight-owner/Dashboard";
import PostLoad from "../pages/freight-owner/PostLoad";
import LandingPage from "../pages/Landing/LandingPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;