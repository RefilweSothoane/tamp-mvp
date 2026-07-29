import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Download,
  FileText,
  Calendar,
  User,
  Truck,
} from "lucide-react";

function DigitalConfirmation() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">

        {/* Success Banner */}

        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-8">

          <CheckCircle
            className="mx-auto text-green-600 mb-4"
            size={60}
          />

          <h1 className="text-4xl font-bold text-slate-900">
            Match Confirmed
          </h1>

          <p className="text-slate-500 mt-3">
            The freight owner and transporter have successfully
            accepted this shipment.
          </p>

        </div>

        {/* Receipt */}

        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <div className="flex justify-between items-center border-b pb-6 mb-6">

            <div>

              <h2 className="text-2xl font-bold">
                Digital Receipt
              </h2>

              <p className="text-slate-500 mt-1">
                TAMP Match Confirmation
              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Accepted
            </span>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex gap-4">

              <FileText className="text-slate-400" />

              <div>
                <p className="text-sm text-slate-500">
                  Contract ID
                </p>

                <h3 className="font-semibold">
                  TAMP-2026-00125
                </h3>
              </div>

            </div>

            <div className="flex gap-4">

              <FileText className="text-slate-400" />

              <div>
                <p className="text-sm text-slate-500">
                  Match ID
                </p>

                <h3 className="font-semibold">
                  MATCH-78452
                </h3>
              </div>

            </div>

            <div className="flex gap-4">

              <User className="text-slate-400" />

              <div>
                <p className="text-sm text-slate-500">
                  Freight Owner
                </p>

                <h3 className="font-semibold">
                  ABC Logistics
                </h3>
              </div>

            </div>

            <div className="flex gap-4">

              <Truck className="text-slate-400" />

              <div>
                <p className="text-sm text-slate-500">
                  Transporter
                </p>

                <h3 className="font-semibold">
                  Swift Transport
                </h3>
              </div>

            </div>

            <div className="flex gap-4">

              <Calendar className="text-slate-400" />

              <div>
                <p className="text-sm text-slate-500">
                  Confirmation Date
                </p>

                <h3 className="font-semibold">
                  29 July 2026
                </h3>
              </div>

            </div>

            <div className="flex gap-4">

              <Calendar className="text-slate-400" />

              <div>
                <p className="text-sm text-slate-500">
                  Time
                </p>

                <h3 className="font-semibold">
                  14:32
                </h3>
              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            className="border border-slate-300 px-6 py-3 rounded-xl hover:bg-slate-100 flex items-center gap-2"
          >
            <Download size={18} />
            Download Receipt
          </button>

          <button
  onClick={() => navigate("/tracking")}
  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl flex items-center gap-2"
>
  <Truck size={18} />
  Track Shipment
</button>

        </div>

      </div>
    </Layout>
  );
}

export default DigitalConfirmation;