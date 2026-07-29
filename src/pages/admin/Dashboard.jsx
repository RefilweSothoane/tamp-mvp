import Layout from "../../components/layout/Layout";
import {
  Users,
  Package,
  Truck,
  GitMerge,
  ShieldCheck,
  AlertTriangle,
  Activity,
  TrendingUp,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Users",
      value: "128",
      subtitle: "+12 new this week",
      icon: Users,
      bgColor: "bg-[#EEF3F9]",
    },
    {
      title: "Active Loads",
      value: "46",
      subtitle: "Across all regions",
      icon: Package,
      bgColor: "bg-[#EEF3F9]",
    },
    {
      title: "Registered Trucks",
      value: "72",
      subtitle: "Verified fleet count",
      icon: Truck,
      bgColor: "bg-[#EEF3F9]",
    },
    {
      title: "Successful Matches",
      value: "31",
      subtitle: "96% match success rate",
      icon: GitMerge,
      bgColor: "bg-[#EFF0A3]",
    },
  ];

  const activity = [
    {
      id: 1,
      action: "ABC Logistics posted a new load",
      time: "10 mins ago",
    },
    {
      id: 2,
      action: "Swift Logistics accepted Match #1042",
      time: "22 mins ago",
    },
    {
      id: 3,
      action: "Trip #304 marked In Transit",
      time: "35 mins ago",
    },
    {
      id: 4,
      action: "New transporter registered",
      time: "1 hour ago",
    },
  ];

  const verification = [
    {
      company: "ABC Logistics",
      status: "Pending",
    },
    {
      company: "Cargo Express",
      status: "Verified",
    },
    {
      company: "Road Freight Pro",
      status: "Pending",
    },
  ];

  const healthMetrics = [
    {
      title: "Match Success Rate",
      value: "96%",
      description: "Optimal algorithmic efficiency.",
      icon: TrendingUp,
    },
    {
      title: "Trips Completed",
      value: "91%",
      description: "On-time delivery success rate.",
      icon: Truck,
    },
    {
      title: "Open Disputes",
      value: "2",
      description: "Requires administrator review.",
      icon: AlertTriangle,
    },
  ];

  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10 antialiased selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Top Banner / Greeting */}
          <section className="bg-[#EEF3F9] rounded-2xl p-6 md:p-8 text-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-neutral-200/80">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Hi, Admin!
              </h1>
              <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                Here is an overview of the platform's current status and metrics...
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/users")}
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition font-medium text-sm shrink-0 cursor-pointer"
            >
              <UserPlus size={20} />
              Manage Users
            </button>
          </section>

          {/* KPI Stats Grid */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className={`${stat.bgColor} rounded-2xl p-5 shadow-sm text-neutral-900 border border-neutral-200/80 flex items-start justify-between gap-3 min-w-0`}
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 truncate">
                      {stat.title}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold mt-1.5 tracking-tight truncate">
                      {stat.value}
                    </h2>
                    <p className="text-[11px] font-semibold text-neutral-600 mt-1 truncate">
                      {stat.subtitle}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white shadow-sm border border-neutral-200/60 shrink-0">
                    <Icon size={20} className="text-neutral-800" />
                  </div>
                </div>
              );
            })}
          </section>

          {/* Activity & Verification Grid */}
          <section className="grid lg:grid-cols-2 gap-8">

            {/* Recent Activity */}
            <div className="bg-[#EEF3F9] rounded-2xl p-6 text-neutral-900 border border-neutral-200/80 space-y-6 shadow-sm">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-2.5">
                  <Activity size={20} className="text-neutral-800" />
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
                    <p className="text-xs text-neutral-500 mt-0.5">Real-time system events</p>
                  </div>
                </div>

                <button className="text-xs font-bold text-neutral-700 hover:text-neutral-900 uppercase tracking-wider cursor-pointer">
                  View Log
                </button>
              </div>

              <div className="space-y-4">
                {activity.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl p-4 border border-neutral-200/80 shadow-sm flex items-center justify-between gap-4"
                  >
                    <p className="font-semibold text-sm text-neutral-900">
                      {item.action}
                    </p>
                    <span className="text-xs font-medium text-neutral-500 shrink-0">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Verification */}
            <div className="bg-[#EEF3F9] rounded-2xl p-6 text-neutral-900 border border-neutral-200/80 space-y-6 shadow-sm">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={20} className="text-neutral-800" />
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Pending Verification</h2>
                    <p className="text-xs text-neutral-500 mt-0.5">Accounts awaiting review</p>
                  </div>
                </div>

                <button className="text-xs font-bold text-neutral-700 hover:text-neutral-900 uppercase tracking-wider cursor-pointer">
                  Review All
                </button>
              </div>

              <div className="space-y-4">
                {verification.map((item) => (
                  <div
                    key={item.company}
                    className="bg-white rounded-xl p-4 border border-neutral-200/80 shadow-sm flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-sm text-neutral-900">
                      {item.company}
                    </span>

                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${
                        item.status === "Verified"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
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
                  className="bg-[#EEF3F9] rounded-2xl p-6 text-neutral-900 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-xl bg-white shadow-sm border border-neutral-200/60 mb-4">
                      <Icon size={22} className="text-neutral-800" />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {metric.title}
                    </p>

                    <h3 className="text-3xl font-bold text-neutral-900 mt-1.5 tracking-tight">
                      {metric.value}
                    </h3>

                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-xs font-bold text-neutral-900 hover:gap-3 transition-all uppercase tracking-wider cursor-pointer">
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