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

const stats = [
  {
    title: "Total Users",
    value: "128",
    subtitle: "Across the platform",
    icon: Users,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Freight Owners",
    value: "52",
    subtitle: "Registered companies",
    icon: Building2,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Transporters",
    value: "61",
    subtitle: "Verified fleets",
    icon: Truck,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Pending Verification",
    value: "15",
    subtitle: "Awaiting approval",
    icon: ShieldCheck,
    bgColor: "bg-[#EFF0A3]",
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

function UsersManagement() {
  return (
    <Layout role="admin">
      <div className="min-h-screen bg-black text-white p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">

          {/* Header */}

          <section className="bg-[#EEF3F9] rounded-2xl p-6 md:p-8 border border-neutral-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h1 className="text-4xl font-bold text-neutral-900">
                Users Management
              </h1>

              <p className="text-neutral-500 mt-2">
                Manage all registered users across the TAMP platform.
              </p>
            </div>

            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition">
              <UserPlus size={18} />
              Add User
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

            <div className="flex flex-col md:flex-row gap-4">

              <div className="relative flex-1">

                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full rounded-xl border border-neutral-300 bg-white py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-slate-300"
                />

              </div>

              <select className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-700">
                <option>All Roles</option>
                <option>Freight Owner</option>
                <option>Transporter</option>
                <option>Administrator</option>
              </select>

              <select className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-700">
                <option>All Status</option>
                <option>Verified</option>
                <option>Pending</option>
                <option>Suspended</option>
              </select>

            </div>

          </section>

          {/* Users Table */}

          <section className="bg-[#EEF3F9] rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">

            <div className="px-6 py-5 border-b border-neutral-200">

              <h2 className="text-xl font-bold text-neutral-900">
                Registered Users
              </h2>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-white">

                  <tr className="text-left">

                    <th className="px-6 py-4 text-sm font-semibold text-neutral-600">
                      Company
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-neutral-600">
                      Role
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-neutral-600">
                      Status
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-neutral-600">
                      Joined
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-neutral-600">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {users.map((user) => (

                    <tr
                      key={user.company}
                      className="border-t border-neutral-200 bg-[#EEF3F9]"
                    >

                      <td className="px-6 py-5 font-semibold text-neutral-900">
                        {user.company}
                      </td>

                      <td className="px-6 py-5 text-neutral-700">
                        {user.role}
                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            user.status === "Verified"
                              ? "bg-green-100 text-green-700"
                              : user.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>

                      </td>

                      <td className="px-6 py-5 text-neutral-700">
                        {user.joined}
                      </td>

                      <td className="px-6 py-5">

                        <div className="flex gap-2">

                          <button className="p-2 rounded-lg bg-white border hover:bg-neutral-100">
                            <Eye size={17} />
                          </button>

                          <button className="p-2 rounded-lg bg-white border hover:bg-neutral-100">
                            <Pencil size={17} />
                          </button>

                          <button className="p-2 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100">
                            <Ban
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

export default UsersManagement;