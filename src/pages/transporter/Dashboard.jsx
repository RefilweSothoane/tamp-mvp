import Layout from "../../components/layout/Layout";
import {
  Truck,
  Package,
  MapPinned,
  HandCoins,
  PlusCircle,
  Clock3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/dashboard/StatsCard";

function TransporterDashboard() {
  const navigate = useNavigate();
  const stats = [
  {
    title: "Available Trucks",
    value: 12,
    icon: Truck,
  },
  {
    title: "Active Deliveries",
    value: 5,
    icon: Package,
  },
  {
    title: "Pending Matches",
    value: 8,
    icon: Clock3,
  },
  {
    title: "Monthly Earnings",
    value: "126500",
    icon: HandCoins,
  },
];
  const deliveries = [
    {
      id: "TRK-1001",
      destination: "Johannesburg",
      status: "In Transit",
    },
    {
      id: "TRK-1002",
      destination: "Cape Town",
      status: "Awaiting Pickup",
    },
    {
      id: "TRK-1003",
      destination: "Durban",
      status: "Delivered",
    },
  ];

  const quickActions = [
    {
      title: "Manage Fleet",
      description: "Add new trucks or update current availability.",
      icon: Truck,
    },
    {
      title: "View Matches",
      description: "Review freight loads matched to your trucks.",
      icon: Package,
    },
    {
      title: "Completed Trips",
      description: "View your completed deliveries and ratings.",
      icon: CheckCircle2,
    },
  ];

  return (
    <Layout role="transporter">
      
      <div className="min-h-screen bg-black text-white p-6 md:p-10 antialiased selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Top Banner / Greeting */}
         <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl">
      <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">
                Good Morning, Daniel
              </h1>
              <p className="text-slate-400 mt-1 text-sm lg:text-base">
                Here is an overview of your current operations...
              </p>
            </div>

            <button
  onClick={() => navigate("/transporter/post-truck")}
  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-violet-500/20"
>
  <PlusCircle size={20} />
  Post Available Truck
</button>
          </section>

          {/* Stats Grid */}
<section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
  {stats.map((stat, index) => (
    <StatsCard
      key={stat.title}
      title={stat.title}
      value={stat.value}
      icon={stat.icon}
      accent={
        ["violet", "emerald", "cyan", "amber"][index]
      }
    />
  ))}
</section>

          {/* Active Deliveries */}
          <section className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
  Active Deliveries
</h2>

<p className="text-xs text-zinc-400 mt-0.5">
  Live tracking for active dispatches
</p>
              </div>

              <button className="text-xs font-bold text-neutral-700 hover:text-neutral-900 uppercase tracking-wider cursor-pointer">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-violet-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-sm text-white">
                      {delivery.id}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mt-1">
                      <MapPinned size={15} className="text-neutral-400" />
                      <span>{delivery.destination}</span>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${
                        delivery.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : delivery.status === "In Transit"
                          ? "bg-violet-50 text-violet-700 border-violet-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <div
                  key={action.title}
                  className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-violet-400 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-violet-600" />
                    </div>

                    <h3 className="font-bold text-lg text-neutral-900">
                      {action.title}
                    </h3>

                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      {action.description}
                    </p>
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-500 transition-all">
                    <span>Open</span>
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

export default TransporterDashboard;