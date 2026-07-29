import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Truck,
  Star,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const transporters = [
  {
    id: 1,
    company: "Swift Logistics",
    match: "98%",
    location: "Johannesburg",
    vehicle: "Superlink Truck",
    price: "R18 500",
    reasons: [
      "Truck capacity matches your cargo",
      "Available on pickup date",
      "Located near pickup location",
      "Verified transporter",
    ],
  },
  {
    id: 2,
    company: "Cargo Express",
    match: "95%",
    location: "Pretoria",
    vehicle: "Flatbed Truck",
    price: "R17 800",
    reasons: [
      "Competitive pricing",
      "Available immediately",
      "High customer rating",
      "Suitable vehicle type",
    ],
  },
  {
    id: 3,
    company: "TransMove SA",
    match: "92%",
    location: "Bloemfontein",
    vehicle: "Refrigerated Truck",
    price: "R20 100",
    reasons: [
      "Refrigerated vehicle available",
      "Experienced transporter",
      "Available on requested dates",
      "Excellent delivery record",
    ],
  },
  {
    id: 4,
    company: "Road Freight Pro",
    match: "90%",
    location: "Durban",
    vehicle: "Curtain Side Truck",
    price: "R19 000",
    reasons: [
      "Verified transporter",
      "Affordable quote",
      "Reliable fleet",
      "Suitable capacity",
    ],
  },
];

function MatchRecommendations() {
  const navigate = useNavigate();

  return (
    <Layout role="freight-owner">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Match Recommendations
            </h1>

            <p className="text-slate-500 mt-2">
              TAMP analysed your shipment and found the best transporters for your load.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl px-6 py-5 text-center">
            <p className="text-3xl font-bold">
              {transporters.length}
            </p>

            <p className="text-sm text-slate-300">
              Matches Found
            </p>
          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {transporters.map((company) => (

            <div
              key={company.id}
              className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition p-7"
            >

              {/* Top */}

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {company.company}
                  </h2>

                  <div className="flex items-center gap-2 mt-3">

                    <Star
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="font-semibold">
                      {company.match} Match
                    </span>

                  </div>

                </div>

                <Truck
                  className="text-slate-700"
                  size={30}
                />

              </div>

              {/* Details */}

              <div className="mt-7 space-y-4 text-slate-700">

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {company.location}
                </div>

                <div className="flex items-center gap-3">
                  <Truck size={18} />
                  {company.vehicle}
                </div>

                <div>
                  <span className="font-semibold">
                    Estimated Cost:
                  </span>{" "}
                  {company.price}
                </div>

              </div>

              {/* Reasons */}

              <div className="mt-7 bg-slate-50 rounded-2xl p-5">

                <h3 className="font-semibold text-slate-900 mb-4">
                  Why this transporter?
                </h3>

                <div className="space-y-3">

                  {company.reasons.map((reason, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >

                      <CheckCircle2
                        size={18}
                        className="text-green-600"
                      />

                      <span>{reason}</span>

                    </div>

                  ))}

                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-8">

                <button
                  className="flex-1 border border-red-300 text-red-600 rounded-xl py-3 hover:bg-red-50 flex items-center justify-center gap-2 transition"
                >
                  <XCircle size={18} />
                  Reject
                </button>

                <button
                  onClick={() => navigate("/confirmation")}
                  className="flex-1 bg-slate-900 text-white rounded-xl py-3 hover:bg-slate-800 flex items-center justify-center gap-2 transition"
                >
                  Accept
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