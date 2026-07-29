import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  Shield,
  Package,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const roles = [
  {
    id: "freight-owner",
    title: "Freight Owner",
    description:
      "I have loads, containers, or assets that need consistent transit and shipping across provinces.",
    features: [
      "Post loads to instant marketplace",
      "Automated carrier matching",
    ],
    icon: Package,
    route: "/freight-owner/dashboard",
    recommended: true,
  },
  {
    id: "transporter",
    title: "Transporter / Carrier",
    description:
      "I operate vehicles, fleet networks, or independent rigs looking for optimal shipping matches.",
    features: [
      "List fleet & vehicle locations",
      "Bid on smart cargo matches",
    ],
    icon: Truck,
    route: "/transporter/dashboard",
  },
  {
    id: "admin",
    title: "System Operator",
    description:
      "I oversee platform operations, compliance, audits, and customer support.",
    features: [
      "Platform audit controls",
      "Compliance management",
    ],
    icon: Shield,
    route: "/admin/dashboard",
  },
];

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const continueToDashboard = () => {
    if (!selectedRole) return;
    navigate(selectedRole.route);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12 antialiased selection:bg-white selection:text-black">
      <div className="max-w-6xl w-full">
        
        {/* Header Hero Banner with Pure White / Dark Heading */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3">
              TAMP Platform
            </div>
            
            {/* Pure White Header */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Select Your Operating Role
            </h1>
            
            {/* Light Neutral Grey Subtitle */}
            <p className="text-zinc-400 text-sm md:text-base mt-2 font-medium">
              Choose the perspective that best fits your operational needs to access the appropriate dashboard and features.
            </p>
          </div>

          <button
            disabled={!selectedRole}
            onClick={continueToDashboard}
            className={`
              px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all shrink-0 cursor-pointer
              ${
                selectedRole
                  ? "bg-white hover:bg-zinc-200 text-black shadow-md active:scale-[0.98]"
                  : "bg-zinc-800 text-zinc-500 border border-zinc-700/50 cursor-not-allowed"
              }
            `}
          >
            <span>
              {selectedRole
                ? `Continue as ${selectedRole.title}`
                : "Select a perspective"}
            </span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Role Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            const selected = selectedRole?.id === role.id;

            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className={`
                  text-left
                  rounded-2xl
                  p-6
                  transition-all
                  duration-200
                  flex
                  flex-col
                  justify-between
                  cursor-pointer
                  ${
                    selected
                      ? "bg-white border-2 border-white text-zinc-900 shadow-xl ring-4 ring-white/10 scale-[1.02]"
                      : "bg-[#EEF3F9] text-zinc-900 border border-transparent hover:bg-white transition-colors"
                  }
                `}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-white shadow-sm border border-zinc-200">
                      <Icon size={22} className="text-zinc-700" />
                    </div>

                    {selected ? (
                      <CheckCircle2 className="text-zinc-900 fill-zinc-900/10" size={24} />
                    ) : null}
                  </div>

                  <h2 className="text-xl font-bold mt-5 text-zinc-900">
                    {role.title}
                  </h2>

                  <p className="text-zinc-500 text-xs md:text-sm mt-2 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div>
                  <hr className="my-5 border-zinc-200" />

                  <div className="space-y-2.5">
                    {role.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs font-semibold text-zinc-700"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-600 shrink-0"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default RoleSelection;