import {
  Truck,
  ClipboardList,
  CircleCheck,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Loads",
    value: 24,
    icon: Truck,
    accent: "violet",
  },
  {
    title: "Pending Matches",
    value: 7,
    icon: ClipboardList,
    accent: "emerald",
  },
  {
    title: "Completed Deliveries",
    value: 186,
    icon: CircleCheck,
    accent: "cyan",
  },
];