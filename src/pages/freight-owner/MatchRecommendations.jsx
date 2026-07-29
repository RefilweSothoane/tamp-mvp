import Layout from "../../components/layout/Layout";
import {
  MapPin,
  Truck,
  Star,
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const transporters = [
  {
    id: 1,
    company: "Swift Logistics",
    match: "98%",
    rating: "4.9",
    reviews: 241,
    location: "Johannesburg",
    vehicle: "Superlink Truck",
    availability: "Available Today",
    price: "R18 500",
    verified: true,
    tracking: true,
    crossBorder: true,
  },
  {
    id: 2,
    company: "Cargo Express",
    match: "95%",
    rating: "4.8",
    reviews: 187,
    location: "Pretoria",
    vehicle: "Flatbed Truck",
    availability: "Available Tomorrow",
    price: "R17 800",
    verified: true,
    tracking: true,
    crossBorder: false,
  },
  {
    id: 3,
    company: "TransMove SA",
    match: "92%",
    rating: "4.7",
    reviews: 159,
    location: "Bloemfontein",
    vehicle: "Refrigerated Truck",
    availability: "Available Today",
    price: "R20 100",
    verified: true,
    tracking: true,
    crossBorder: true,
  },
  {
    id: 4,
    company: "Road Freight Pro",
    match: "90%",
    rating: "4.6",
    reviews: 121,
    location: "Durban",
    vehicle: "Curtain Side",
    availability: "Available in 2 Days",
    price: "R19 000",
    verified: true,
    tracking: false,
    crossBorder: true,
  },
];

function MatchRecommendations() {
  const navigate = useNavigate();

  return (
    <Layout role="freight-owner">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Match Recommendations
            </h1>

            <p className="text-slate-500 mt-2">
              TAMP analysed your shipment and found the best transporters.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-xl px-6 py-4 text-center">
            <p className="text-3xl font-bold">
              {transporters.length}
            </p>

            <p className="text-sm text-slate-300">
              Matches Found
            </p>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {transporters.map((company) => (

            <div
              key={company.id}
              className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >

              {/* Top */}

              <div className="flex justify-between items-start p-6 border-b">

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
                      {company.rating}
                    </span>

                    <span className="text-slate-400">
                      ({company.reviews} reviews)
                    </span>

                  </div>

                </div>

                <div className="bg-green-100 text-green-700 rounded-full px-4 py-2 font-bold">
                  {company.match}
                </div>

              </div>

              {/* Body */}

              <div className="p-6 space-y-5">

                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin size={20} />
                  {company.location}
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Truck size={20} />
                  {company.vehicle}
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Clock3 size={20} />
                  {company.availability}
                </div>

                <div className="bg-slate-50 rounded-xl p-4">

                  <h3 className="font-semibold mb-3">
                    Services
                  </h3>

                  <div className="space-y-2 text-sm">

                    {company.verified && (
                      <div className="flex items-center gap-2">
                        <BadgeCheck
                          size={16}
                          className="text-green-600"
                        />
                        Verified Transporter
                      </div>
                    )}

                    {company.tracking && (
                      <div className="flex items-center gap-2">
                        <ShieldCheck
                          size={16}
                          className="text-green-600"
                        />
                        GPS Tracking Available
                      </div>
                    )}

                    {company.crossBorder && (
                      <div className="flex items-center gap-2">
                        <ShieldCheck
                          size={16}
                          className="text-green-600"
                        />
                        Cross-border Licensed
                      </div>
                    )}

                  </div>

                </div>

                <div className="flex justify-between items-center pt-3">

                  <div>

                    <p className="text-sm text-slate-500">
                      Estimated Cost
                    </p>

                    <h3 className="text-2xl font-bold">
                      {company.price}
                    </h3>

                  </div>

                </div>

              </div>

              {/* Footer */}

              <div className="border-t p-6 flex gap-3">

                <button
                  className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold hover:bg-slate-100 transition"
                >
                  View Profile
                </button>

                <button
                  onClick={() => navigate("/confirmation")}
                  className="flex-1 rounded-xl bg-slate-900 text-white py-3 font-semibold flex justify-center items-center gap-2 hover:bg-slate-800 transition"
                >
                  Accept Match

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