import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Greeting({ name }) {
 const navigate = useNavigate(); 
  const hour = new Date().getHours();
  let greeting = "Good evening";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  }

  return (
    <section className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-zinc-950 border border-zinc-800 p-6 lg:p-8 rounded-2xl">
      <div className="absolute right-0 top-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />
      <div>
        <h1 className="text-3xl font-bold text-white">
          {greeting}, {name}.
        </h1>

        <p className="text-slate-400 mt-1 text-sm lg:text-base">
          Here's what's happening across your network today...
        </p>
      </div>

<button
  onClick={() => navigate("/freight-owner/post-load")}
  className="
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-violet-600
    px-5
    py-3
    text-sm
    font-semibold
    text-white
    hover:bg-violet-500
    transition
    shrink-0
  "
>
  <Plus size={18} />
  Post New Load
</button>
    </section>
  );
}

export default Greeting;