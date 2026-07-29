import Layout from "../../components/layout/Layout";
import {
  FileText,
  Activity,
  Search,
  Download,
  Clock3,
  User,
} from "lucide-react";

const stats = [
  {
    title: "Total Events",
    value: "1,248",
    subtitle: "Recorded this month",
    icon: Activity,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Today's Events",
    value: "86",
    subtitle: "Platform activity",
    icon: Clock3,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Active Users",
    value: "112",
    subtitle: "Performed actions",
    icon: User,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Audit Reports",
    value: "12",
    subtitle: "Available to export",
    icon: FileText,
    bgColor: "bg-[#EFF0A3]",
  },
];

const logs = [
  {
    user: "ABC Logistics",
    action: "Posted a new freight load",
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

function AuditTrail() {
  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Hero */}

          <section className="bg-[#EEF3F9] rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h1 className="text-4xl font-bold text-neutral-900">
                Audit Trail
              </h1>

              <p className="text-neutral-500 mt-2">
                View a complete history of activity across the platform.
              </p>
            </div>

            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 flex items-center gap-2">
              <Download size={18} />
              Export Logs
            </button>

          </section>

          {/* Stats */}

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
                    <Icon size={22} className="text-neutral-800" />
                  </div>
                </div>
              );
            })}
          </section>

          {/* Search */}

          <section className="bg-[#EEF3F9] rounded-2xl border border-neutral-200 shadow-sm p-6">

            <div className="relative">

              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search audit logs..."
                className="w-full rounded-xl border border-neutral-300 bg-white py-3 pl-11 pr-4 outline-none"
              />

            </div>

          </section>

          {/* Activity */}

          <section className="bg-[#EEF3F9] rounded-2xl border border-neutral-200 shadow-sm">

            <div className="px-6 py-5 border-b border-neutral-200">

              <h2 className="text-xl font-bold text-neutral-900">
                Recent Activity
              </h2>

            </div>

            <div className="divide-y divide-neutral-200">

              {logs.map((log, index) => (

                <div
                  key={index}
                  className="flex justify-between items-center px-6 py-5"
                >
                  <div>

                    <h3 className="font-semibold text-neutral-900">
                      {log.user}
                    </h3>

                    <p className="text-sm text-neutral-600 mt-1">
                      {log.action}
                    </p>

                  </div>

                  <span className="text-sm text-neutral-500">
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