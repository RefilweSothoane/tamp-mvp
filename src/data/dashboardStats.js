import { Truck, ClipboardList, CircleCheck } from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Loads",
    value: 24,
    subtitle: "+12% this week",
    icon: Truck,
    bgColor: "bg-white",
  },
  {
    title: "Pending Matches",
    value: 7,
    subtitle: "3 high compatibility",
    icon: ClipboardList,
    bgColor: "bg-green-100",
  },
  {
    title: "Completed Deliveries",
    value: 186,
    subtitle: "98.8% on time",
    icon: CircleCheck,
    bgColor: "bg-yellow-100",
  },
];