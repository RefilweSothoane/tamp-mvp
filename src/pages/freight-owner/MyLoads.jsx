import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import {
  Package,
  MapPin,
  Calendar,
  Truck,
  Eye,
  Plus,
} from "lucide-react";

const loads = [
  {
    id: "LD-001",
    cargo: "Construction Materials",
    pickup: "Johannesburg",
    delivery: "Cape Town",
    date: "12 Aug 2026",
    status: "Matched",
    transporter: "Swift Logistics",
  },
  {
    id: "LD-002",
    cargo: "Electronics",
    pickup: "Pretoria",
    delivery: "Durban",
    date: "15 Aug 2026",
    status: "Pending",
    transporter: "-",
  },
  {
    id: "LD-003",
    cargo: "Furniture",
    pickup: "Bloemfontein",
    delivery: "Port Elizabeth",
    date: "18 Aug 2026",
    status: "Completed",
    transporter: "Cargo Express",
  },
];

const statusColour = (status) => {
  switch (status) {
    case "Matched":
      return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";

    case "Completed":
      return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";

    default:
      return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
  }
};

const statusBorder = (status) => {
  switch (status) {
    case "Matched":
      return "border-l-cyan-400";

    case "Completed":
      return "border-l-emerald-400";

    default:
      return "border-l-amber-400";
  }
};

function MyLoads() {
  const navigate = useNavigate();

  return (
    <Layout role="freight-owner">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">

          <div>
            <h1 className="text-4xl font-bold text-white">
              My Loads
            </h1>

            <p className="text-zinc-400 mt-2">
              View and manage all freight loads you've posted.
            </p>
          </div>

          <button
            onClick={() => navigate("/freight-owner/post-load")}
            className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition-all"
          >
            <Plus size={18} />
            Post New Load
          </button>

        </div>

        {/* Loads */}
        <div className="space-y-6">

          {loads.map((load) => (

            <div
              key={load.id}
              className={`bg-zinc-950 border border-zinc-800 border-l-4 ${statusBorder(
                load.status
              )} rounded-2xl p-6 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all`}
            >

              {/* Top */}
              <div className="flex flex-col lg:flex-row justify-between gap-6">

                <div>

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                      <Package
                        className="text-violet-400"
                        size={20}
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {load.cargo}
                      </h2>

                      <p className="text-sm text-zinc-500 mt-1">
                        Load ID: {load.id}
                      </p>
                    </div>

                  </div>

                </div>

                <span
                  className={`h-fit px-4 py-2 rounded-full text-sm font-semibold ${statusColour(
                    load.status
                  )}`}
                >
                  {load.status}
                </span>

              </div>

              {/* Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div className="flex items-start gap-3">

                  <MapPin
                    size={20}
                    className="text-violet-400 mt-1"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Route
                    </p>

                    <p className="text-white font-medium">
                      {load.pickup}
                    </p>

                    <p className="text-zinc-500 text-sm">
                      ↓
                    </p>

                    <p className="text-white font-medium">
                      {load.delivery}
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <Calendar
                    size={20}
                    className="text-violet-400 mt-1"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Pickup Date
                    </p>

                    <p className="text-white">
                      {load.date}
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <Truck
                    size={20}
                    className="text-violet-400 mt-1"
                  />

                  <div>
                    <p className="text-xs uppercase tracking-wide text-zinc-500">
                      Transporter
                    </p>

                    <p className="text-white">
                      {load.transporter}
                    </p>
                  </div>

                </div>

              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8">

                <button
                  className="border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-violet-500 text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <Eye size={18} />
                  View Details
                </button>

                {load.status === "Matched" && (
                  <button
                    onClick={() => navigate("/tracking")}
                    className="bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl transition-all"
                  >
                    Track Shipment
                  </button>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </Layout>
  );
}

export default MyLoads;