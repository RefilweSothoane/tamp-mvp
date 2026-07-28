import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f9] text-[#18181b] flex flex-col font-['Quicksand',_sans-serif]">
      {/* Global Google Font Import Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700;800&display=swap');
      `}</style>

      {/* Reusable Black Header Navbar */}
      <Navbar onMobileMenuToggle={() => setIsSidebarOpen(true)} />

      {/* Slide-over Drawer Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Shell - Centers child content with matching page margins */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}