import Layout from "../../components/layout/Layout";
import Greeting from "../../components/dashboard/Greeting";
import StatsCard from "../../components/dashboard/StatsCard";
import { dashboardStats } from "../../data/dashboardStats";
import RecentLoads from "../../components/dashboard/RecentLoads";
import QuickActions from "../../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <Layout role="freight-owner">
      <Greeting name="Refilwe" />

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {dashboardStats.map((stat) => (
      <StatsCard
        key={stat.title}
        title={stat.title}
        value={stat.value}
        subtitle={stat.subtitle}
        icon={stat.icon}
        bgColor={stat.bgColor}
      />
    ))}
  </div>
  <div className="grid gap-6 mt-8 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <RecentLoads />
  </div>

  <QuickActions />
</div>
</Layout>
  );
}
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {dashboardStats.map((stat) => (
        <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            bgColor={stat.bgColor}
        />
    ))}
</div>
export default Dashboard;