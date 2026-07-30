import Layout from "../../components/layout/Layout";
import {
  HandCoins,
  Package,
  Truck,
  GitMerge,
  ShieldCheck,
  AlertTriangle,
  Activity,
  TrendingUp,
  UserPlus,
  ArrowRight,
  Clock3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Available Trucks", value: "12", icon: Truck, accent: "violet" },
    { title: "Active Deliveries", value: "5", icon: Package, accent: "emerald" },
    { title: "Pending Matches", value: "8", icon: Clock3, accent: "cyan" },
    { title: "Monthly Earnings", value: "R126,500", icon: HandCoins, accent: "amber" },
  ];

  const activity = [
    { id: 1, action: "New transporter registered", time: "5 min ago" },
    { id: 2, action: "Load LD-001 matched successfully", time: "18 min ago" },
    { id: 3, action: "Freight owner verified", time: "42 min ago" },
    { id: 4, action: "System backup completed", time: "1 hour ago" },
  ];

  const verification = [
    { company: "Swift Logistics", status: "Pending" },
    { company: "Cargo Express", status: "Pending" },
    { company: "TransMove SA", status: "Verified" },
    { company: "Road Freight Pro", status: "Pending" },
  ];

  const healthMetrics = [
    {
      title: "Platform Uptime",
      value: "99.9%",
      description: "All core services operating normally.",
      icon: TrendingUp,
    },
    {
      title: "Fraud Alerts",
      value: "2",
      description: "Potential issues awaiting investigation.",
      icon: AlertTriangle,
    },
    {
      title: "Successful Matches",
      value: "1,284",
      description: "Loads successfully matched this month.",
      icon: GitMerge,
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
          {/* Top Banner / Greeting */}
          <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">Hi, Admin!</h1>
              <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                Here is an overview of the platform's current status and metrics...
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/users")}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-violet-500/20"
            >
              <UserPlus size={20} />
              Manage Users
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

          {/* Activity & Verification Grid */}
          <section className="grid lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-zinc-950 rounded-2xl p-6 text-neutral-900 border border-zinc-800 space-y-6 shadow-sm">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <Activity size={20} className="text-white" />
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      Recent Activity
                    </h2>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Real-time system events
                    </p>
                  </div>
                </div>

                <button className="text-xs font-bold text-neutral-400 hover:text-white uppercase tracking-wider cursor-pointer">
                  View Log
                </button>
              </div>

              <div className="space-y-4">
                {activity.map((item) => (
                  <div
                    key={item.id}
                    className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-sm flex items-center justify-between gap-4"
                  >
                    <p className="font-semibold text-sm text-zinc-100">
                      {item.action}
                    </p>
                    <span className="text-xs font-medium text-zinc-400 shrink-0">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Verification */}
            <div className="bg-zinc-950 rounded-2xl p-6 text-neutral-900 border border-zinc-800 space-y-6 shadow-sm">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={20} className="text-white" />
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-white">
                      Pending Verification
                    </h2>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Accounts awaiting review
                    </p>
                  </div>
                </div>

                <button className="text-xs font-bold text-neutral-400 hover:text-white uppercase tracking-wider cursor-pointer">
                  Review All
                </button>
              </div>

              <div className="space-y-4">
                {verification.map((item) => (
                  <div
                    key={item.company}
                    className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-sm flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-sm text-zinc-100">
                      {item.company}
                    </span>

                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${
                        item.status === "Verified"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Platform Health Section */}
          <section className="grid md:grid-cols-3 gap-6">
            {healthMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.title}
                  className="bg-zinc-950 rounded-2xl p-6 text-white border border-zinc-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-xl bg-zinc-900 border border-zinc-800 mb-4">
                      <Icon size={22} className="text-violet-400" />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      {metric.title}
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1.5 tracking-tight">
                      {metric.value}
                    </h3>

                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-xs font-bold text-white hover:gap-3 transition-all uppercase tracking-wider cursor-pointer">
                    <span>Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;