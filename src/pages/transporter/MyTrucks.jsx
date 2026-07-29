import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import {
  Truck,
  MapPin,
  Calendar,
  Eye,
  Plus,
  Wrench,
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

  const statusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "On Trip":
        return "bg-blue-100 text-blue-700";
      case "Maintenance":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <Layout role="transporter">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              My Trucks
            </h1>

            <p className="text-slate-500 mt-2">
              Manage all trucks registered on TAMP.
            </p>
          </div>

          <button
            onClick={() => navigate("/transporter/post-truck")}
            className="bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 flex items-center gap-2"
          >
            <Plus size={18} />
            Register Truck
          </button>
        </div>

        <div className="grid gap-6">

          {trucks.map((truck) => (

            <div
              key={truck.id}
              className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition"
            >

              <div className="flex justify-between items-start">

                <div>
                  <div className="flex items-center gap-3">
                    <Truck className="text-slate-700" />
                    <h2 className="text-xl font-semibold">
                      {truck.type}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-500 mt-2">
                    Truck ID: {truck.id}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColor(
                    truck.available
                  )}`}
                >
                  {truck.available}
                </span>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">

                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={18} />
                  {truck.location}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Truck size={18} />
                  {truck.capacity}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={18} />
                  {truck.nextService}
                </div>

              </div>

              <div className="flex justify-end gap-3 mt-6">

                <button className="border border-slate-300 px-5 py-2 rounded-xl hover:bg-slate-100 flex items-center gap-2">
                  <Eye size={18} />
                  View Details
                </button>

                <button className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800 flex items-center gap-2">
                  <Wrench size={18} />
                  Edit Truck
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </Layout>
  );
}

export default MyTrucks;