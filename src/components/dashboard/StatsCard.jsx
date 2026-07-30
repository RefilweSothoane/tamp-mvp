import { useEffect, useState } from "react";

// Helper component to handle smooth count-up animation
function AnimatedNumber({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(value, 10);

    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
}

// Accent colours
const accents = {
  violet: {
    number: "text-violet-400",
    icon: "text-violet-400",
    box: "bg-violet-500/10 border-violet-500/20",
  },
  emerald: {
    number: "text-emerald-400",
    icon: "text-emerald-400",
    box: "bg-emerald-500/10 border-emerald-500/20",
  },
  cyan: {
    number: "text-cyan-400",
    icon: "text-cyan-400",
    box: "bg-cyan-500/10 border-cyan-500/20",
  },
  amber: {
    number: "text-amber-400",
    icon: "text-amber-400",
    box: "bg-amber-500/10 border-amber-500/20",
  },
};

function StatsCard({
  title,
  value,
  icon: Icon,
  accent = "violet",
}) {
  const style = accents[accent];

  return (
    <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-800 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-400">{title}</p>

          <h2 className={`text-4xl font-bold mt-2 ${style.number}`}>
            <AnimatedNumber value={value} />
          </h2>
        </div>

        <div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center ${style.box}`}
        >
          <Icon size={22} className={style.icon} />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;