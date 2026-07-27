import { Plus } from "lucide-react";

function Greeting({ name }) {
    const hour = new Date().getHours();

let greeting = "Good evening";

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
}
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
  {greeting}, {name}
</h1>

        <p className="text-slate-500 mt-2">
          Your freight network is moving smoothly.
          Here's what needs your attention today.
        </p>
      </div>

      <button
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-900
          px-5
          py-3
          text-sm
          font-medium
          hover:bg-slate-900
          hover:text-white
          transition
        "
      >
        <Plus size={18} />
        Post New Load
      </button>
    </section>
  );
}

export default Greeting;