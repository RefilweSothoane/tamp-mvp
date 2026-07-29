import Layout from "../../components/layout/Layout";
import {
  Truck,
  Package,
  MapPinned,
  DollarSign,
  PlusCircle,
  Clock3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function TransporterDashboard() {
  const navigate = useNavigate();
  const stats = [
    {
      title: "Available Trucks",
      value: "12",
      subtitle: "Ready for loads",
      icon: Truck,
      bgColor: "bg-[#EEF3F9]",
    },
    {
      title: "Active Deliveries",
      value: "5",
      subtitle: "Currently in transit",
      icon: Package,
      bgColor: "bg-[#EEF3F9]",
    },
    {
      title: "Pending Matches",
      value: "8",
      subtitle: "Awaiting response",
      icon: Clock3,
      bgColor: "bg-[#EEF3F9]",
    },
    {
      title: "Monthly Earnings",
      value: "R 126,500",
      subtitle: "+18% from last month",
      icon: DollarSign,
      bgColor: "bg-[#EFF0A3]",
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
          <section className="bg-[#EEF3F9] rounded-2xl p-6 md:p-8 text-neutral-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm border border-neutral-200/80">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                Good Morning, Daniel
              </h1>
              <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                Here is an overview of your current operations...
              </p>
            </div>

            <button
  onClick={() => navigate("/transporter/post-truck")}
  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
>
  <PlusCircle size={20} />
  Post Available Truck
</button>
          </section>

          {/* Stats Grid */}
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

          {/* Active Deliveries */}
          <section className="bg-[#EEF3F9] rounded-2xl p-6 text-neutral-900 border border-neutral-200/80 space-y-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Active Deliveries</h2>
                <p className="text-xs text-neutral-500 mt-0.5">Live tracking for active dispatches</p>
              </div>

              <button className="text-xs font-bold text-neutral-700 hover:text-neutral-900 uppercase tracking-wider cursor-pointer">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="bg-white rounded-xl p-5 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-bold text-sm text-neutral-900">
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
                          ? "bg-blue-50 text-blue-800 border-blue-200"
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
                  className="bg-[#EEF3F9] rounded-2xl p-6 text-neutral-900 border border-neutral-200/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-xl bg-white shadow-sm border border-neutral-200/60 mb-4">
                      <Icon size={22} className="text-neutral-800" />
                    </div>

                    <h3 className="font-bold text-lg text-neutral-900">
                      {action.title}
                    </h3>

                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      {action.description}
                    </p>
                  </div>

                  <button className="mt-6 flex items-center gap-2 text-xs font-bold text-neutral-900 hover:gap-3 transition-all uppercase tracking-wider cursor-pointer">
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