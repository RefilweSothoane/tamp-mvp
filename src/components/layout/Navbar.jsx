import { Bell, Menu, Truck, User } from "lucide-react";

function Navbar({ onMobileMenuToggle }) {
  return (
    <header className="h-16 bg-black border-b border-zinc-800 px-6 flex items-center justify-between sticky top-0 z-40 font-['Quicksand',_sans-serif]">
      {/* Brand & Hamburger Trigger */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMobileMenuToggle}
          className="p-1.5 rounded-md text-white hover:bg-zinc-900 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 stroke-[2]" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="bg-white text-black p-1.5 rounded-md flex items-center justify-center">
            <Truck className="w-5 h-5 stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold text-white tracking-widest uppercase">
            TAMP
          </span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-5">
        <button 
          className="relative p-1.5 text-white hover:text-zinc-300 transition-colors focus:outline-none"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 stroke-[2]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-black" />
        </button>

        <button 
          className="p-1.5 text-white hover:text-zinc-300 border border-zinc-700 hover:border-white rounded-full transition-all focus:outline-none"
          aria-label="User Profile"
        >
          <User className="w-5 h-5 stroke-[2]" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;