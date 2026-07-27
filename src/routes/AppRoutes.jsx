import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import RoleSelection from "../pages/auth/RoleSelection";
import Dashboard from "../pages/freight-owner/Dashboard";
import PostLoad from "../pages/freight-owner/PostLoad";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/freight-owner/dashboard" element={<Dashboard />} />
        <Route path="/freight-owner/post-load" element={<PostLoad />} />
/&gt;
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;