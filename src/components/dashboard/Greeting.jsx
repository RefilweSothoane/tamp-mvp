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
    <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 bg-[#ECEFF3] p-6 lg:p-8 rounded-2xl">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {greeting}, {name}.
        </h1>

        <p className="text-slate-500 mt-1 text-sm lg:text-base">
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
  Post New Load
</button>
    </section>
  );
}

export default Greeting;