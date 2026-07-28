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

// Helper to style status badges cleanly
const getStatusStyles = (status) => {
  switch (status) {
    case "Matching":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "In Transit":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "Delivered":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

function RecentLoads() {
  return (
    <div className="bg-[#EEF3F9] rounded-2xl p-6 border border-slate-200/60">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-900">Recent Loads</h2>

        <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {recentLoads.map((load) => (
          <div
            key={load.id}
            className="bg-white rounded-xl p-4 flex justify-between items-center border border-slate-200/80 shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <MapPin size={16} className="text-slate-400" />

                <span>{load.origin}</span>

                <ArrowRight size={14} className="text-slate-400" />

                <span>{load.destination}</span>
              </div>

              <div className="mt-2">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getStatusStyles(
                    load.status
                  )}`}
                >
                  {load.status}
                </span>
              </div>
            </div>

            <button className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentLoads;