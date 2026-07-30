import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import {
  Truck,
  MapPin,
  Calendar,
  Eye,
  Plus,
  Wrench,
  Weight,
} from "lucide-react";

const trucks = [
  {
    id: "TRK-001",
    type: "Superlink Truck",
    location: "Johannesburg",
    available: "Available",
    capacity: "34 Tons",
    nextService: "20 Aug 2026",
  },
  {
    id: "TRK-002",
    type: "Flatbed Truck",
    location: "Pretoria",
    available: "On Trip",
    capacity: "28 Tons",
    nextService: "15 Sept 2026",
  },
  {
    id: "TRK-003",
    type: "Refrigerated Truck",
    location: "Durban",
    available: "Maintenance",
    capacity: "20 Tons",
    nextService: "5 Aug 2026",
  },
];

function MyTrucks() {
  const navigate = useNavigate();

  const getStatusBadge = (status) => {
    switch (status) {
      case "Available":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "On Trip":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "Maintenance":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default:
        return "bg-zinc-800 text-zinc-400 border-zinc-700";
    }
  };

  return (
    <Layout role="transporter">
      <div className="min-h-screen bg-black text-white p-6 md:p-10 antialiased selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Top Hero / Header Section */}
          <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">My Fleet</h1>
              <p className="text-zinc-400 text-sm md:text-base mt-1 font-medium">
                Manage all trucks registered on TAMP.
              </p>
            </div>

            <button
              onClick={() => navigate("/transporter/post-truck")}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-500/20 cursor-pointer"
            >
              <Plus size={18} />
              Register Truck
            </button>
          </section>

          {/* Truck Fleet Cards */}
          <div className="grid gap-6">
            {trucks.map((truck) => (
              <div
                key={truck.id}
                className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 hover:border-zinc-700 transition-all shadow-sm"
              >
                {/* Header Row */}
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Truck size={22} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight">
                        {truck.type}
                      </h2>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">
                        ID: {truck.id}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(
                      truck.available
                    )}`}
                  >
                    {truck.available}
                  </span>
                </div>

                {/* Info Grid */}
                <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-900">
                  <div className="flex items-center gap-3 text-zinc-300 text-sm">
                    <MapPin size={18} className="text-zinc-500" />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Location</p>
                      <p className="font-semibold">{truck.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-300 text-sm">
                    <Weight size={18} className="text-zinc-500" />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Capacity</p>
                      <p className="font-semibold">{truck.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-zinc-300 text-sm">
                    <Calendar size={18} className="text-zinc-500" />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Next Service</p>
                      <p className="font-semibold">{truck.nextService}</p>
                    </div>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-zinc-900/60">
                  <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 cursor-pointer">
                    <Eye size={16} />
                    View Details
                  </button>

                  <button className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 cursor-pointer">
                    <Wrench size={16} />
                    Edit Truck
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyTrucks;