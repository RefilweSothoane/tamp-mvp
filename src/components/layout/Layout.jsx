import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100/70 flex antialiased">
      {/* Mobile Sidebar Overlay Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar: Desktop Persistent / Mobile Drawer */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 transform lg:translate-x-0 transition-transform duration-200 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:z-auto`}
      >
        <Sidebar />
      </div>

      {/* Main App Container */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Sticky Navigation */}
        <Navbar onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

        {/* Dynamic Route Content Area */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;