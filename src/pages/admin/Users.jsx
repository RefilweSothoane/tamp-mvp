import Layout from "../../components/layout/Layout";
import {
  Users,
  Truck,
  Building2,
  ShieldCheck,
  Search,
  UserPlus,
  Eye,
  Pencil,
  Ban,
} from "lucide-react";

function UsersManagement() {
  const stats = [
    {
      title: "Total Users",
      value: "128",
      subtitle: "Across the platform",
      icon: Users,
      accent: "violet",
    },
    {
      title: "Freight Owners",
      value: "52",
      subtitle: "Registered companies",
      icon: Building2,
      accent: "cyan",
    },
    {
      title: "Transporters",
      value: "61",
      subtitle: "Verified fleets",
      icon: Truck,
      accent: "emerald",
    },
    {
      title: "Pending Verification",
      value: "15",
      subtitle: "Awaiting approval",
      icon: ShieldCheck,
      accent: "amber",
    },
  ];

  const users = [
    {
      company: "ABC Logistics",
      role: "Freight Owner",
      status: "Verified",
      joined: "12 Jul 2026",
    },
    {
      company: "Swift Transport",
      role: "Transporter",
      status: "Pending",
      joined: "18 Jul 2026",
    },
    {
      company: "Cargo Express",
      role: "Transporter",
      status: "Verified",
      joined: "21 Jul 2026",
    },
    {
      company: "Road Freight Pro",
      role: "Transporter",
      status: "Suspended",
      joined: "24 Jul 2026",
    },
  ];

  const accents = {
    violet: {
      number: "text-violet-400",
      icon: "text-violet-400",
      box: "bg-violet-500/10 border-violet-500/20",
      hover: "hover:border-violet-500/40 hover:shadow-violet-500/10",
    },
    emerald: {
      number: "text-emerald-400",
      icon: "text-emerald-400",
      box: "bg-emerald-500/10 border-emerald-500/20",
      hover: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    },
    cyan: {
      number: "text-cyan-400",
      icon: "text-cyan-400",
      box: "bg-cyan-500/10 border-cyan-500/20",
      hover: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
    },
    amber: {
      number: "text-amber-400",
      icon: "text-amber-400",
      box: "bg-amber-500/10 border-amber-500/20",
      hover: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    },
  };

  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10 antialiased selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Top Banner / Header */}
          <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">Users Management</h1>
              <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                Manage all registered users and platform permissions.
              </p>
            </div>

            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-violet-500/20 cursor-pointer">
              <UserPlus size={18} />
              Add User
            </button>
          </section>

          {/* Statistics Grid */}
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const style = accents[stat.accent || "violet"];

              return (
                <div
                  key={stat.title}
                  className={`bg-zinc-950 rounded-2xl p-6 border border-zinc-800 transition-all hover:shadow-lg ${style.hover}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-zinc-400">
                        {stat.title}
                      </p>
                      <h2 className={`text-4xl font-bold mt-2 ${style.number}`}>
                        {stat.value}
                      </h2>
                      <p className="text-xs text-zinc-500 mt-1.5 font-medium">
                        {stat.subtitle}
                      </p>
                    </div>

                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center ${style.box}`}
                    >
                      <Icon size={22} className={style.icon} />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Search & Filters */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />
                <input
                  type="text"
                  placeholder="Search users by name, company, or email..."
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all text-sm"
                />
              </div>

              <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 focus:border-violet-500 focus:outline-none cursor-pointer">
                <option>All Roles</option>
                <option>Freight Owner</option>
                <option>Transporter</option>
                <option>Administrator</option>
              </select>

              <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 focus:border-violet-500 focus:outline-none cursor-pointer">
                <option>All Status</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Suspended</option>
              </select>
            </div>
          </section>

          {/* Users Table */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-800">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Registered Users
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-zinc-900/50 border-b border-zinc-800">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Company
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Role
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Joined
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-800/60">
                  {users.map((user) => (
                    <tr
                      key={user.company}
                      className="hover:bg-zinc-900/50 transition-all"
                    >
                      <td className="px-6 py-4 font-semibold text-sm text-zinc-100">
                        {user.company}
                      </td>

                      <td className="px-6 py-4 text-sm text-zinc-400">
                        {user.role}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                            user.status === "Verified"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : user.status === "Pending"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-sm text-zinc-400">
                        {user.joined}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer">
                            <Eye size={16} />
                          </button>

                          <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer">
                            <Pencil size={16} />
                          </button>

                          <button className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 text-rose-400 transition-all cursor-pointer">
                            <Ban size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default UsersManagement;