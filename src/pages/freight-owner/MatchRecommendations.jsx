import Layout from "../../components/layout/Layout";
import { MapPin, Truck, Star, ArrowRight } from "lucide-react";

const transporters = [
  {
    id: 1,
    company: "Swift Logistics",
    match: "98%",
    location: "Johannesburg",
    vehicle: "Superlink Truck",
    price: "R18 500",
  },
  {
    id: 2,
    company: "Cargo Express",
    match: "95%",
    location: "Pretoria",
    vehicle: "Flatbed Truck",
    price: "R17 800",
  },
  {
    id: 3,
    company: "TransMove SA",
    match: "92%",
    location: "Bloemfontein",
    vehicle: "Refrigerated Truck",
    price: "R20 100",
  },
  {
    id: 4,
    company: "Road Freight Pro",
    match: "90%",
    location: "Durban",
    vehicle: "Curtain Side",
    price: "R19 000",
  },
];

function MatchRecommendations() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Match Recommendations
          </h1>

          <p className="text-slate-500 mt-2">
            TAMP has found the best transporters for your shipment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {transporters.map((company) => (
            <div
              key={company.id}
              className="rounded-2xl bg-white shadow-sm border p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h2 className="text-xl font-bold">
                    {company.company}
                  </h2>

                  <div className="flex items-center gap-2 text-yellow-500 mt-2">
                    <Star size={18} fill="currentColor" />
                    <span className="font-semibold">
                      {company.match} Match
                    </span>
                  </div>
                </div>

                <Truck className="text-slate-700" size={28} />

              </div>

              <div className="mt-6 space-y-3 text-slate-600">

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {company.location}
                </div>

                <p>
                  <strong>Vehicle:</strong> {company.vehicle}
                </p>

                <p>
                  <strong>Estimated Cost:</strong> {company.price}
                </p>

              </div>

              <div className="flex gap-3 mt-8">

                <button className="flex-1 rounded-xl border border-slate-300 py-3 font-medium hover:bg-slate-100 transition">
                  View Profile
                </button>

                <button className="flex-1 rounded-xl bg-slate-900 text-white py-3 flex justify-center items-center gap-2 hover:bg-slate-800 transition">
                  Select
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}

export default MatchRecommendations;