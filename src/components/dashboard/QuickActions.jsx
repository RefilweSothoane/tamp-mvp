import { Truck, PlusCircle } from "lucide-react";

function QuickActions() {
  return (
    <div className="space-y-4">

      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
  <Truck className="w-6 h-6 text-violet-400" />
</div>

        <h3 className="font-semibold text-lg text-white">
          Review New Matches
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          View recommended transporters for your active loads.
        </p>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all cursor-pointer">
        <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
  <PlusCircle className="w-6 h-6 text-violet-400" />
</div>

        <h3 className="font-semibold text-lg text-white">
          Post Another Load
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          Create a new shipment and start matching immediately.
        </p>
      </div>

    </div>
  );
}

export default QuickActions;