import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  PackagePlus,
  Truck,
  ClipboardList,
  GitCompare,
  MapPin,
  User,
  X,
  FileText,
  BarChart3,
} from "lucide-react";

function Sidebar({ role, isOpen, onClose }) {

const adminNavItems = [
  {
    path: "/admin/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/admin/users",
    label: "Users",
    icon: User,
  },
  {
    path: "/admin/compliance",
    label: "Compliance",
    icon: ClipboardList,
  },
  {
    path: "/admin/audit",
    label: "Audit Trail",
    icon: FileText,
  },
  {
    path: "/admin/analytics",
    label: "Analytics",
    icon: BarChart3,
  },
];  

const freightOwnerNavItems = [
  { path: "/freight-owner/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/freight-owner/post-load", label: "Post Load", icon: PackagePlus },
  { path: "/freight-owner/my-loads", label: "My Loads", icon: Package },
  { path: "/freight-owner/matches", label: "Match Recommendations", icon: GitCompare },
  { path: "/tracking", label: "Trip Tracking", icon: MapPin },
  { path: "/profile", label: "Profile", icon: User },
];

const transporterNavItems = [
  { path: "/transporter/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/transporter/post-truck", label: "Post Truck", icon: Truck },
  { path: "/transporter/my-trucks", label: "My Trucks", icon: ClipboardList },
  { path: "/transporter/loads", label: "Available Loads", icon: Package },
  { path: "/tracking", label: "Trip Tracking", icon: MapPin },
  { path: "/profile", label: "Profile", icon: User },
];

const navItems =
  role === "admin"
    ? adminNavItems
    : role === "transporter"
    ? transporterNavItems
    : freightOwnerNavItems;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex font-['Quicksand',_sans-serif]">
      {/* Dark Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding Sidebar Container */}
      <aside className="relative w-72 bg-black border-r border-zinc-800 text-white min-h-screen p-6 flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-left duration-200">
        <div>
          {/* Header with Close Button (No duplicate logo) */}
          <div className="flex items-center justify-between mb-8 px-1">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
              Explore
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose} // Closes drawer when a link is clicked
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 px-3.5 py-3 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-5 h-5 ${isActive ? "text-black stroke-[2.5]" : "text-zinc-400 stroke-[2]"}`} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer Accent */}
        <div className="border-t border-zinc-800 pt-4 px-1">
          <p className="text-[11px] font-semibold text-zinc-600 uppercase tracking-widest">
            truck asset matchmaking platform
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;