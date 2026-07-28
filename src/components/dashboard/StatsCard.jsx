import { useEffect, useState } from "react";
import { CheckCircle2, TrendingUp } from "lucide-react";

// Helper component to handle smooth count-up animation
function AnimatedNumber({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // If the value passed isn't a number (or string number), render it plain
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let start = 0;
    const increment = target / (duration / 16); // ~60fps frame rate
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

function StatsCard({
  title,
  value,
  icon: Icon,
  bgColor = "bg-[#EEF3F9]",
}) {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-sm border border-slate-200/80`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>

          {/* Animated Big Value */}
          <h2 className="text-4xl font-bold mt-2 text-slate-900">
            <AnimatedNumber value={value} />
          </h2>
        </div>

        {/* Top Right Main Icon Block */}
        <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100">
          <Icon size={22} className="text-slate-700" />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;