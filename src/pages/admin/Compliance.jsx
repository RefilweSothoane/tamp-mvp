import Layout from "../../components/layout/Layout";
import {
  ShieldCheck,
  FileCheck,
  Clock3,
  AlertTriangle,
  Search,
  Download,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Pending Reviews",
    value: "18",
    subtitle: "Awaiting verification",
    icon: Clock3,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Approved",
    value: "96",
    subtitle: "Verified companies",
    icon: ShieldCheck,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Rejected",
    value: "9",
    subtitle: "Incomplete submissions",
    icon: AlertTriangle,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Expiring Documents",
    value: "5",
    subtitle: "Renewal required",
    icon: FileCheck,
    bgColor: "bg-[#EFF0A3]",
  },
];

const compliance = [
  {
    company: "ABC Logistics",
    role: "Freight Owner",
    documents: "Complete",
    status: "Pending",
  },
  {
    company: "Swift Transport",
    role: "Transporter",
    documents: "Complete",
    status: "Approved",
  },
  {
    company: "Road Freight Pro",
    role: "Transporter",
    documents: "Missing Operating Permit",
    status: "Rejected",
  },
  {
    company: "Cargo Express",
    role: "Freight Owner",
    documents: "Complete",
    status: "Pending",
  },
];

function Compliance() {
  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Hero */}

          <section className="bg-[#EEF3F9] rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h1 className="text-4xl font-bold text-neutral-900">
                Compliance Management
              </h1>

              <p className="text-neutral-500 mt-2">
                Review company documents and approve registrations.
              </p>
            </div>

            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 flex items-center gap-2 transition">
              <Download size={18} />
              Export Report
            </button>

          </section>

          {/* Statistics */}

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
                placeholder="Search company..."
                className="w-full rounded-xl border border-neutral-300 bg-white py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-slate-300"
              />

            </div>

          </section>

          {/* Compliance Table */}

          <section className="bg-[#EEF3F9] rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">

            <div className="px-6 py-5 border-b border-neutral-200">

              <h2 className="text-xl font-bold text-neutral-900">
                Compliance Reviews
              </h2>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-white">

                  <tr>

                    <th className="px-6 py-4 text-left">Company</th>
                    <th className="px-6 py-4 text-left">Role</th>
                    <th className="px-6 py-4 text-left">Documents</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Actions</th>

                  </tr>

                </thead>

                <tbody>

                  {compliance.map((company) => (

                    <tr
                      key={company.company}
                      className="border-t border-neutral-200"
                    >

                      <td className="px-6 py-5 font-semibold text-neutral-900">
                        {company.company}
                      </td>

                      <td className="px-6 py-5 text-neutral-700">
                        {company.role}
                      </td>

                      <td className="px-6 py-5 text-neutral-700">
                        {company.documents}
                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            company.status === "Approved"
                              ? "bg-green-100 text-green-700"
                              : company.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {company.status}
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <div className="flex gap-2">

                          <button className="p-2 rounded-lg bg-white border hover:bg-neutral-100">
                            <Eye size={17} />
                          </button>

                          <button className="p-2 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100">
                            <CheckCircle2
                              size={17}
                              className="text-green-600"
                            />
                          </button>

                          <button className="p-2 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100">
                            <XCircle
                              size={17}
                              className="text-red-600"
                            />
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

export default Compliance;