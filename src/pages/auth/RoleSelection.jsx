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
      "I have loads, containers, or assets that need consistent transit and shipping across regions.",
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
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full">

        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm font-semibold">
            TAMP
          </div>

          <h1 className="text-5xl font-bold mt-6">
            Select your platform perspective
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Configure your workflow dashboard based on your operations.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

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
                border
                bg-white
                p-7
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                ${
                  selected
                    ? "border-blue-600 bg-blue-50 shadow-xl ring-2 ring-blue-100"
                    : "border-slate-200"
                }
                `}
              >

                <div className="flex justify-between items-start">

                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">

                    <Icon className="text-blue-700"/>

                  </div>

                  {selected && (
                    <CheckCircle2 className="text-blue-600"/>
                  )}

                </div>

                {role.recommended && (
                  <span className="inline-block mt-4 text-xs bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-semibold">
                    RECOMMENDED
                  </span>
                )}

                <h2 className="text-2xl font-semibold mt-5">
                  {role.title}
                </h2>

                <p className="text-slate-500 mt-3 leading-relaxed">
                  {role.description}
                </p>

                <hr className="my-6"/>

                <div className="space-y-3">

                  {role.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-green-600"
                      />

                      {feature}

                    </div>

                  ))}

                </div>

              </button>
            );

          })}

        </div>

        <div className="flex justify-center mt-10">

          <button
            disabled={!selectedRole}
            onClick={continueToDashboard}
            className={`
              px-8
              py-4
              rounded-xl
              text-white
              font-semibold
              flex
              items-center
              gap-2
              transition

              ${
                selectedRole
                  ? "bg-slate-900 hover:bg-slate-800"
                  : "bg-slate-400 cursor-not-allowed"
              }
            `}
          >
            {selectedRole
              ? `Continue as ${selectedRole.title}`
              : "Select a role"}

            <ArrowRight size={18}/>
          </button>

        </div>

      </div>

    </div>
  );
}

export default RoleSelection;