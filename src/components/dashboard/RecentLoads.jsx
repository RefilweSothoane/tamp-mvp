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

function RecentLoads() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent Loads</h2>

        <button className="text-sm text-slate-300 hover:text-white">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentLoads.map((load) => (
          <div
            key={load.id}
            className="bg-slate-800 rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />

                <span>
                  {load.origin}
                </span>

                <ArrowRight size={14} />

                <span>
                  {load.destination}
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-2">
                Status: {load.status}
              </p>
            </div>

            <button className="text-sm bg-white text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-200 transition">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentLoads;