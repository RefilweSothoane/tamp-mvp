import Layout from "../../components/layout/Layout";
import {
  Users,
  Truck,
  Package,
  GitMerge,
  TrendingUp,
  Activity,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "128",
    subtitle: "+12 this month",
    icon: Users,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Active Loads",
    value: "46",
    subtitle: "Awaiting transport",
    icon: Package,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Registered Trucks",
    value: "72",
    subtitle: "Available today",
    icon: Truck,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Successful Matches",
    value: "31",
    subtitle: "This week",
    icon: GitMerge,
    bgColor: "bg-[#EFF0A3]",
  },
];

const metrics = [
  {
    title: "Match Success Rate",
    value: "96%",
    icon: TrendingUp,
    colour: "text-green-600",
  },
  {
    title: "Completed Deliveries",
    value: "91%",
    icon: CheckCircle2,
    colour: "text-blue-600",
  },
  {
    title: "Platform Activity",
    value: "High",
    icon: Activity,
    colour: "text-purple-600",
  },
  {
    title: "Open Disputes",
    value: "2",
    icon: AlertTriangle,
    colour: "text-yellow-600",
  },
];

const weeklyActivity = [
  { day: "Mon", users: 45 },
  { day: "Tue", users: 61 },
  { day: "Wed", users: 72 },
  { day: "Thu", users: 83 },
  { day: "Fri", users: 91 },
  { day: "Sat", users: 57 },
  { day: "Sun", users: 38 },
];

function AdminAnalytics() {
  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Hero */}

          <section className="bg-[#EEF3F9] rounded-2xl p-8 border border-neutral-200 shadow-sm">

            <h1 className="text-4xl font-bold text-neutral-900">
              Platform Analytics
            </h1>

            <p className="text-neutral-500 mt-2">
              Monitor platform performance, activity and operational insights.
            </p>

          </section>

          {/* KPI Cards */}

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className={`${stat.bgColor} rounded-2xl p-5 border border-neutral-200 shadow-sm flex justify-between`}
                >
                  <div>

                    <p className="text-xs uppercase font-bold tracking-wider text-neutral-500">
                      {stat.title}
                    </p>

                    <h2 className="text-3xl font-bold text-neutral-900 mt-2">
                      {stat.value}
                    </h2>

                    <p className="text-xs text-neutral-600 mt-1">
                      {stat.subtitle}
                    </p>

                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-sm border">

                    <Icon
                      size={22}
                      className="text-neutral-800"
                    />

                  </div>

                </div>
              );
            })}

          </section>

          {/* Weekly Activity */}

          <section className="bg-[#EEF3F9] rounded-2xl p-6 border border-neutral-200 shadow-sm">

            <h2 className="text-xl font-bold text-neutral-900 mb-6">
              Weekly Platform Activity
            </h2>

            <div className="space-y-4">

              {weeklyActivity.map((day) => (

                <div
                  key={day.day}
                  className="flex items-center gap-4"
                >

                  <div className="w-12 text-sm font-semibold text-neutral-700">
                    {day.day}
                  </div>

                  <div className="flex-1 bg-neutral-200 rounded-full h-3 overflow-hidden">

                    <div
                      className="bg-slate-900 h-full rounded-full"
                      style={{
                        width: `${day.users}%`,
                      }}
                    />

                  </div>

                  <div className="text-sm font-semibold text-neutral-700 w-10 text-right">
                    {day.users}
                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* Performance Metrics */}

          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (

                <div
                  key={metric.title}
                  className="bg-[#EEF3F9] rounded-2xl p-6 border border-neutral-200 shadow-sm"
                >

                  <Icon
                    size={28}
                    className={`${metric.colour} mb-5`}
                  />

                  <h3 className="text-3xl font-bold text-neutral-900">
                    {metric.value}
                  </h3>

                  <p className="text-neutral-500 mt-2">
                    {metric.title}
                  </p>

                </div>

              );
            })}

          </section>

        </div>
      </div>
    </Layout>
  );
}

export default AdminAnalytics;