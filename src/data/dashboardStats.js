import { Truck, ClipboardList, CircleCheck } from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Loads",
    value: 24,
    
    icon: Truck,
    bgColor: "bg-white",
  },
  {
    title: "Pending Matches",
    value: 7,
    icon: ClipboardList,
    bgColor: "bg-[#EEF3F9]",
  },
  {
    title: "Completed Deliveries",
    value: 186,
    
    icon: CircleCheck,
    bgColor: "bg-[#EFF0A3]",
  },
];