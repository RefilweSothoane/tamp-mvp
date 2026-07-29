import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  Circle,
} from "lucide-react";

function TripTracking() {
  const navigate = useNavigate();

  const trackingSteps = [
    { title: "Load Posted", completed: true },
    { title: "Match Found", completed: true },
    { title: "Match Accepted", completed: true },
    { title: "Cargo Picked Up", completed: true },
    { title: "In Transit", completed: true, active: true },
    { title: "Delivered", completed: false },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              Trip Tracking
            </h1>

            <p className="text-slate-500 mt-2">
              Monitor your shipment from pickup to delivery.
            </p>

          </div>

          <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
            In Transit
          </span>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Timeline */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Shipment Progress
            </h2>

            <div className="space-y-6">

              {trackingSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">

                  <div className="flex flex-col items-center">

                    {step.completed ? (
                      <CheckCircle
                        className="text-green-600"
                        size={24}
                      />
                    ) : (
                      <Circle
                        className="text-slate-300"
                        size={24}
                      />
                    )}

                    {index !== trackingSteps.length - 1 && (
                      <div className="w-0.5 h-12 bg-slate-300 mt-2"></div>
                    )}

                  </div>

                  <div>

                    <h3
                      className={`font-semibold ${
                        step.active
                          ? "text-blue-600"
                          : "text-slate-900"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {step.completed
                        ? "Completed"
                        : "Pending"}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Shipment Details */}

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-sm border p-6">

              <h2 className="text-xl font-semibold mb-5">
                Shipment Details
              </h2>

              <div className="space-y-4">

                <div>
                  <p className="text-sm text-slate-500">
                    Shipment ID
                  </p>

                  <h3 className="font-semibold">
                    TAMP-2026-00125
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <Truck size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Vehicle
                    </p>
                    <h3 className="font-semibold">
                      Superlink Truck
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Current Location
                    </p>
                    <h3 className="font-semibold">
                      Bloemfontein
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Destination
                    </p>
                    <h3 className="font-semibold">
                      Cape Town
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={20} />
                  <div>
                    <p className="text-sm text-slate-500">
                      Estimated Arrival
                    </p>
                    <h3 className="font-semibold">
                      3 Hours
                    </h3>
                  </div>
                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6">

              <h2 className="text-xl font-semibold mb-5">
                Driver Information
              </h2>

              <div className="space-y-3">

                <div>
                  <p className="text-sm text-slate-500">
                    Driver
                  </p>

                  <h3 className="font-semibold">
                    John Dube
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Contact
                  </p>

                  <h3 className="font-semibold">
                    +27 82 123 4567
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button className="border border-slate-300 rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-slate-100">
            <Phone size={18} />
            Contact Driver
          </button>

          <button
            onClick={() => navigate("/ratings")}
            className="bg-slate-900 text-white rounded-xl px-6 py-3 hover:bg-slate-800"
          >
            Complete Delivery
          </button>

        </div>

      </div>
    </Layout>
  );
}

export default TripTracking;