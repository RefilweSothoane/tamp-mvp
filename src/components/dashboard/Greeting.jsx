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
    <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-[#D8DFE9] p-6 lg:p-8 rounded-2xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {greeting}, {name}.
        </h1>

        <p className="text-slate-500 mt-1 text-sm lg:text-base">
          Here's what's happening across your network today...
        </p>
      </div>

      <button
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-slate-950
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          hover:bg-slate-800
          transition
          shrink-0
        "
      >
        <Plus size={18} />
        Post new load
      </button>
    </section>
  );
}

export default Greeting;