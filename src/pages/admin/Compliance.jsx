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

function Compliance() {
  const stats = [
    {
      title: "Pending Reviews",
      value: "18",
      subtitle: "Awaiting verification",
      icon: Clock3,
      accent: "amber",
    },
    {
      title: "Approved",
      value: "96",
      subtitle: "Verified companies",
      icon: ShieldCheck,
      accent: "emerald",
    },
    {
      title: "Rejected",
      value: "9",
      subtitle: "Incomplete submissions",
      icon: AlertTriangle,
      accent: "rose",
    },
    {
      title: "Expiring Documents",
      value: "5",
      subtitle: "Renewal required",
      icon: FileCheck,
      accent: "indigo",
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

  const accents = {
    amber: {
      number: "text-amber-400",
      icon: "text-amber-400",
      box: "bg-amber-500/10 border-amber-500/20",
      hover: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    },
    emerald: {
      number: "text-emerald-400",
      icon: "text-emerald-400",
      box: "bg-emerald-500/10 border-emerald-500/20",
      hover: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    },
    rose: {
      number: "text-rose-400",
      icon: "text-rose-400",
      box: "bg-rose-500/10 border-rose-500/20",
      hover: "hover:border-rose-500/40 hover:shadow-rose-500/10",
    },
    indigo: {
      number: "text-indigo-400",
      icon: "text-indigo-400",
      box: "bg-indigo-500/10 border-indigo-500/20",
      hover: "hover:border-indigo-500/40 hover:shadow-indigo-500/10",
    },
  };

  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10 antialiased selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Hero Banner */}
          <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">
                Compliance Management
              </h1>
              <p className="text-neutral-500 text-sm md:text-base mt-1 font-medium">
                Review company documents and approve registrations.
              </p>
            </div>

            <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-violet-500/20 cursor-pointer">
              <Download size={18} />
              Export Report
            </button>
          </section>

          {/* Statistics Grid */}
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const style = accents[stat.accent || "amber"];

              return (
                <div
                  key={stat.title}
                  className={`bg-zinc-950 rounded-2xl p-6 border border-zinc-800 transition-all hover:shadow-lg ${style.hover}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                        {stat.title}
                      </p>
                      <h2 className={`text-3xl font-bold mt-2 ${style.number}`}>
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

          {/* Search Section */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 shadow-sm">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                placeholder="Search company or verification status..."
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all text-sm"
              />
            </div>
          </section>

          {/* Compliance Table */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-800">
              <h2 className="text-xl font-bold tracking-tight text-white">
                Compliance Reviews
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
                      Documents
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-800/60">
                  {compliance.map((company) => (
                    <tr
                      key={company.company}
                      className="hover:bg-zinc-900/50 transition-all"
                    >
                      <td className="px-6 py-5 font-semibold text-sm text-zinc-100">
                        {company.company}
                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-400">
                        {company.role}
                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-400">
                        {company.documents}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                            company.status === "Approved"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : company.status === "Pending"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                          }`}
                        >
                          {company.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer">
                            <Eye size={17} />
                          </button>

                          <button className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 transition-all cursor-pointer">
                            <CheckCircle2 size={17} />
                          </button>

                          <button className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 text-rose-400 transition-all cursor-pointer">
                            <XCircle size={17} />
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