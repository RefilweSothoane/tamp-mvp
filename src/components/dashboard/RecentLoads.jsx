import { MapPin, ArrowRight } from "lucide-react";

const recentLoads = [
  {
    id: 1,
    origin: "Johannesburg",
    destination: "Durban",
    status: "Matching",
  },
  {
    id: 2,
    origin: "Cape Town",
    destination: "Bloemfontein",
    status: "In Transit",
  },
  {
    id: 3,
    origin: "Pretoria",
    destination: "Port Elizabeth",
    status: "Delivered",
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case "Matching":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    case "In Transit":
      return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
    case "Delivered":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    default:
      return "bg-zinc-800 text-zinc-400 border-zinc-700";
  }
};

function RecentLoads() {
  return (
    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">
          Recent Loads
        </h2>

        <button className="text-sm font-medium text-violet-400 hover:text-violet-300 transition">
          View All
        </button>
      </div>

      {/* Load Cards */}
      <div className="space-y-4">
        {recentLoads.map((load) => (
          <div
            key={load.id}
            className="bg-zinc-900 rounded-xl p-5 border border-zinc-800 hover:border-violet-500/30 transition-all"
          >
            <div className="flex items-center justify-between">

              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MapPin size={16} className="text-violet-400" />

                  <span>{load.origin}</span>

                  <ArrowRight
                    size={14}
                    className="text-zinc-500"
                  />

                  <span>{load.destination}</span>
                </div>

                <div className="mt-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${getStatusStyles(
                      load.status
                    )}`}
                  >
                    {load.status}
                  </span>
                </div>
              </div>

              <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentLoads;