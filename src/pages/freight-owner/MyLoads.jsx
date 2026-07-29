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

function MyLoads() {
  const navigate = useNavigate();

  const statusColour = (status) => {
    switch (status) {
      case "Matched":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              My Loads
            </h1>

            <p className="text-slate-500 mt-2">
              View and manage all freight loads you've posted.
            </p>
          </div>

          <button
            onClick={() => navigate("/freight-owner/post-load")}
            className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 flex items-center gap-2"
          >
            <Plus size={18} />
            Post New Load
          </button>

        </div>

        <div className="grid gap-6">

          {loads.map((load) => (

            <div
              key={load.id}
              className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
            >

              <div className="flex justify-between items-start">

                <div>

                  <div className="flex items-center gap-3">

                    <Package className="text-slate-700" />

                    <h2 className="text-xl font-semibold">
                      {load.cargo}
                    </h2>

                  </div>

                  <p className="text-sm text-slate-500 mt-2">
                    Load ID: {load.id}
                  </p>

                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColour(
                    load.status
                  )}`}
                >
                  {load.status}
                </span>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">

                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  {load.pickup} → {load.delivery}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={18} />
                  {load.date}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Truck size={18} />
                  {load.transporter}
                </div>

              </div>

              <div className="flex justify-end gap-3 mt-6">

                <button
                  className="border border-slate-300 px-5 py-2 rounded-xl hover:bg-slate-100 flex items-center gap-2"
                >
                  <Eye size={18} />
                  View Details
                </button>

                {load.status === "Matched" && (
                  <button
                    onClick={() => navigate("/tracking")}
                    className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800"
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