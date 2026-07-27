function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  bgColor,
}) {
  return (
    <div className={`${bgColor} rounded-2xl p-6 shadow-sm border border-slate-200`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-4xl font-bold mt-2">{value}</h2>
          <p className="text-sm text-green-600 mt-2">{subtitle}</p>
        </div>

        <div className="p-3 rounded-xl bg-white shadow">
          <Icon size={22} className="text-slate-700" />
        </div>
      </div>
    </div>
  );
}

export default StatsCard;