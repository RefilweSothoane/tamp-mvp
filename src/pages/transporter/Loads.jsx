import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import {
  Package,
  MapPin,
  Calendar,
  Weight,
  Banknote,
  Search,
  Eye,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

const loads = [
  {
    id: "LOAD-8821",
    origin: "Johannesburg, GP",
    destination: "Durban, KZN",
    cargoType: "Dry FMCG Goods",
    weight: "32 Tons",
    payout: "R 28,500",
    pickupDate: "02 Aug 2026",
    status: "Available",
    urgent: true,
  },
  {
    id: "LOAD-8824",
    origin: "Pretoria, GP",
    destination: "Cape Town, WC",
    cargoType: "Refrigerated Produce",
    weight: "22 Tons",
    payout: "R 42,000",
    pickupDate: "04 Aug 2026",
    status: "Available",
    urgent: false,
  },
  {
    id: "LOAD-8829",
    origin: "Polokwane, LP",
    destination: "Gqeberha, EC",
    cargoType: "Industrial Machinery",
    weight: "28 Tons",
    payout: "R 36,000",
    pickupDate: "05 Aug 2026",
    status: "Available",
    urgent: false,
  },
];

function AvailableLoads() {
  const navigate = useNavigate();

  return (
    <Layout role="transporter">
      <div className="min-h-screen bg-black text-white p-6 md:p-10 antialiased selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header Banner */}
          <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
            <div>
              <h1 className="text-3xl font-bold text-white">Available Loads</h1>
              <p className="text-zinc-400 text-sm md:text-base mt-1 font-medium">
                Browse available freight offers and instantly book shipments for your fleet.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm text-zinc-300">
                <TrendingUp size={16} className="text-emerald-400" />
                <span className="font-semibold text-white">142</span> Ready for Pickup
              </div>
            </div>
          </section>

          {/* Search & Filter Controls */}
          <section className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />
                <input
                  type="text"
                  placeholder="Search by origin, destination, or cargo..."
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white placeholder-zinc-500 focus:border-violet-500 focus:outline-none transition-all text-sm"
                />
              </div>

              <div className="flex gap-3">
                <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 focus:border-violet-500 focus:outline-none cursor-pointer">
                  <option>All Cargo Types</option>
                  <option>Dry FMCG</option>
                  <option>Refrigerated</option>
                  <option>Heavy Equipment</option>
                </select>

                <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300 focus:border-violet-500 focus:outline-none cursor-pointer">
                  <option>All Locations</option>
                  <option>Gauteng</option>
                  <option>KwaZulu-Natal</option>
                  <option>Western Cape</option>
                </select>
              </div>
            </div>
          </section>

          {/* Loads List */}
          <div className="grid gap-6">
            {loads.map((load) => (
              <div
                key={load.id}
                className="bg-zinc-950 rounded-2xl border border-zinc-800 p-6 hover:border-zinc-700 transition-all shadow-sm"
              >
                {/* Top Info Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-900">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Package size={20} />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 font-mono">
                        {load.id}
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {load.cargoType}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {load.urgent && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                        <Clock size={12} />
                        Urgent
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {load.status}
                    </span>
                  </div>
                </div>

                {/* Route Header */}
                <div className="grid md:grid-cols-4 gap-6 my-6 items-center">
                  <div className="md:col-span-2 flex items-center gap-3">
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Origin</p>
                      <p className="text-base font-semibold text-white flex items-center gap-1.5 mt-0.5">
                        <MapPin size={16} className="text-violet-400" />
                        {load.origin}
                      </p>
                    </div>

                    <ArrowRight size={20} className="text-zinc-600 shrink-0 mx-2" />

                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Destination</p>
                      <p className="text-base font-semibold text-white flex items-center gap-1.5 mt-0.5">
                        <MapPin size={16} className="text-emerald-400" />
                        {load.destination}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Weight size={18} className="text-zinc-500" />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Payload</p>
                      <p className="font-semibold text-zinc-200">{load.weight}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={18} className="text-zinc-500" />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Pickup Date</p>
                      <p className="font-semibold text-zinc-200">{load.pickupDate}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-900">
                  <div className="flex items-center gap-2">
                    <Banknote size={20} className="text-emerald-400" />
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Payout Rate</p>
                      <p className="text-xl font-bold text-emerald-400">{load.payout}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all text-sm font-semibold flex items-center gap-2 cursor-pointer">
                      <Eye size={16} />
                      View Details
                    </button>

                    <button
                      onClick={() => navigate(`/transporter/book/${load.id}`)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 cursor-pointer flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Book Load
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AvailableLoads;