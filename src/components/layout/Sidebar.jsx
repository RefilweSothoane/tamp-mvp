import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  PackagePlus, 
  GitCompare, 
  MapPin, 
  User 
} from "lucide-react";

function Sidebar() {
  const navItems = [
    { path: "/freight-owner/dashboard", label: "Overview", icon: LayoutDashboard },
    { path: "/loads/new", label: "Post new load", icon: PackagePlus },
    { path: "/matches", label: "Match recommendations", icon: GitCompare },
    { path: "/tracking", label: "Trip tracking", icon: MapPin },
    { path: "/profile", label: "Profile settings", icon: User },
  ];

  return (
    <aside className="w-64 bg-[#18181b] text-zinc-400 min-h-screen p-6 flex flex-col justify-between select-none">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
            T
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-none tracking-tight">TAMARA</h2>
            <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase">Freight Solutions</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-zinc-800/80 text-amber-200 font-semibold"
                      : "hover:bg-zinc-800/40 hover:text-zinc-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={`w-4 h-4 ${isActive ? "text-amber-200" : "text-zinc-400"}`} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;