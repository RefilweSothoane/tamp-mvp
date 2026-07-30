import Layout from "../../components/layout/Layout";
import {
  FileText,
  Activity,
  Search,
  Download,
  Clock3,
  User,
  ShieldCheck,
} from "lucide-react";

function AuditTrail() {
  const stats = [
    {
      title: "Total Events",
      value: "1,248",
      subtitle: "Recorded this month",
      icon: Activity,
      accent: "violet",
    },
    {
      title: "Today's Events",
      value: "86",
      subtitle: "Platform activity",
      icon: Clock3,
      accent: "cyan",
    },
    {
      title: "Active Users",
      value: "112",
      subtitle: "Performed actions",
      icon: User,
      accent: "emerald",
    },
    {
      title: "Audit Reports",
      value: "12",
      subtitle: "Available to export",
      icon: FileText,
      accent: "amber",
    },
  ];

  const logs = [
    {
      user: "ABC Logistics",
      action: "Posted Load",
      entity: "LOAD-204",
      metadata: "Johannesburg → Durban",
      time: "29 Jul 2026 • 09:15",
    },
    {
      user: "Swift Transport",
      action: "Accepted Match #1042",
      time: "29 Jul 2026 • 09:42",
    },
    {
      user: "Admin",
      action: "Approved Cargo Express verification",
      time: "29 Jul 2026 • 10:20",
    },
    {
      user: "Road Freight Pro",
      action: "Updated company documents",
      time: "29 Jul 2026 • 11:05",
    },
    {
      user: "ABC Logistics",
      action: "Marked shipment as delivered",
      time: "29 Jul 2026 • 12:14",
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
          {/* Top Banner / Hero */}
          <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">Audit Trail</h1>
              <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                View a complete, immutable history of activity across the platform.
              </p>
            </div>

            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-violet-500/20 cursor-pointer">
              <Download size={18} />
              Export Logs
            </button>
          </section>

          {/* Stats Grid */}
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

          {/* Search Controls */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 shadow-sm">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search audit logs by user, action, or entity..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all text-sm"
              />
            </div>
          </section>

          {/* Logs Activity Feed */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-sm space-y-2 p-6">
            <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-white" />
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    Recent Activity
                  </h2>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Immutable activity log
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-zinc-800/60 pt-2">
              {logs.map((log, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-4 px-2 hover:bg-zinc-900/50 rounded-xl transition-all gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm text-zinc-100">
                        {log.user}
                      </span>
                      {log.entity && (
                        <span className="bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs px-2.5 py-0.5 rounded-md font-mono">
                          {log.entity}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-400">
                      {log.action}
                      {log.metadata && (
                        <span className="text-zinc-500"> — {log.metadata}</span>
                      )}
                    </p>
                  </div>

                  <span className="text-xs font-medium text-zinc-500 shrink-0">
                    {log.time}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AuditTrail;