import { Truck, PlusCircle } from "lucide-react";

function QuickActions() {
  return (
    <div className="space-y-4">

      <div className="bg-green-100 rounded-2xl p-6">
        <Truck className="mb-4 text-green-700" />

        <h3 className="font-semibold text-lg">
          Review New Matches
        </h3>

        <p className="text-sm text-slate-600 mt-2">
          View recommended transporters for your active loads.
        </p>
      </div>

      <div className="bg-yellow-100 rounded-2xl p-6">
        <PlusCircle className="mb-4 text-yellow-700" />

        <h3 className="font-semibold text-lg">
          Post Another Load
        </h3>

        <p className="text-sm text-slate-600 mt-2">
          Create a new shipment and start matching immediately.
        </p>
      </div>

    </div>
  );
}

export default QuickActions;