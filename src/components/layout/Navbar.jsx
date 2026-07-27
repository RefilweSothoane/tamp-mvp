import { Bell, Menu, Search } from "lucide-react";

function Navbar({ onMobileMenuToggle }) {
  return (
    <header className="h-16 border-b border-slate-200/80 bg-white/80 backdrop-blur-md px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30">
      {/* Left Section: Mobile Toggle & Context */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Trigger */}
        <button
          onClick={onMobileMenuToggle}
          className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden transition-colors"
          aria-label="Toggle Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Page Context / Breadcrumb */}
        <div>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider hidden sm:block">
            Dashboard
          </span>
          <h1 className="text-base font-semibold text-slate-800 leading-tight">
            Overview
          </h1>
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Quick Search */}
        <div className="relative hidden md:block w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search loads, trips..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          {/* Notification Ping */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white" />
        </button>

        <div className="h-6 w-px bg-slate-200 hidden sm:block" />

        {/* User Profile Avatar */}
        <button className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-xs shadow-sm">
            RS
          </div>
          <div className="text-left hidden sm:block pr-1">
            <p className="text-xs font-semibold text-slate-700 leading-none">Refilwe</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Freight Owner</p>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Navbar;