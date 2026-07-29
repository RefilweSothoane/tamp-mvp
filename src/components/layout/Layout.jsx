import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children, role = "freight-owner" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#18181b] flex flex-col font-['Quicksand',_sans-serif]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700;800&display=swap');
      `}</style>

      <Navbar onMobileMenuToggle={() => setIsSidebarOpen(true)} />

      <Sidebar
        role={role}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 p-6 md:p-10 max-w-6xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}