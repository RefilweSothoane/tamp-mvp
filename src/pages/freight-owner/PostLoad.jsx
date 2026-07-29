import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ArrowLeft, Save } from "lucide-react";

function PostLoad() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cargoType: "",
    weight: "",
    description: "",
    pickupLocation: "",
    pickupDate: "",
    deliveryLocation: "",
    deliveryDate: "",
    budget: "",
    refrigerated: false,
    hazardous: false,
    insurance: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cargoType)
      newErrors.cargoType = "Cargo type is required.";

    if (!formData.weight || Number(formData.weight) <= 0)
      newErrors.weight = "Enter a valid weight.";

    if (!formData.pickupLocation)
      newErrors.pickupLocation = "Pickup location is required.";

    if (!formData.deliveryLocation)
      newErrors.deliveryLocation = "Delivery location is required.";

    if (!formData.pickupDate)
      newErrors.pickupDate = "Pickup date is required.";

    if (!formData.deliveryDate)
      newErrors.deliveryDate = "Delivery date is required.";

    if (
      formData.pickupDate &&
      formData.deliveryDate &&
      formData.pickupDate > formData.deliveryDate
    ) {
      newErrors.deliveryDate =
        "Delivery date must be after pickup date.";
    }

    if (!formData.budget || Number(formData.budget) <= 0)
      newErrors.budget = "Enter a valid budget.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(formData);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      navigate("/freight-owner/dashboard");
    }, 2000);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <button
              onClick={() => navigate("/freight-owner/dashboard")}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-3"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </button>

            <h1 className="text-4xl font-bold text-slate-900">
  Post New Load
</h1>


            <p className="text-slate-500 mt-2">
              Create a shipment and let TAMP match you with the most suitable transporter.
            </p>

          </div>

          <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
            Draft
          </span>

        </div>

        {success && (
          <div className="mb-6 rounded-xl bg-green-100 border border-green-300 p-4 text-green-700">
            ✅ Load published successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Cargo */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-6">
              Cargo Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-medium mb-2">
                  Cargo Type
                </label>

                <select
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                >
                  <option value="">Select Cargo Type</option>
                  <option>Construction Materials</option>
                  <option>Food & Beverage</option>
                  <option>Furniture</option>
                  <option>Electronics</option>
                  <option>Machinery</option>
                  <option>Agricultural Goods</option>
                  <option>Other</option>
                </select>

                {errors.cargoType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cargoType}
                  </p>
                )}

              </div>

              <div>

                <label className="block text-sm font-medium mb-2">
                  Weight (tons)
                </label>

                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                {errors.weight && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.weight}
                  </p>
                )}

              </div>

            </div>

            <div className="mt-6">

              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />

            </div>

          </div>

          {/* Pickup & Delivery */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-6">
              Shipment Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2">Pickup Location</label>

                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                {errors.pickupLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pickupLocation}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2">
                  Delivery Location
                </label>

                <input
                  type="text"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                {errors.deliveryLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.deliveryLocation}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2">
                  Pickup Date
                </label>

                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                {errors.pickupDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pickupDate}
                  </p>
                )}

              </div>

              <div>

                <label className="block mb-2">
                  Delivery Date
                </label>

                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                {errors.deliveryDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.deliveryDate}
                  </p>
                )}

              </div>

            </div>

          </div>

          {/* Additional */}

          <div className="bg-white rounded-2xl shadow-sm p-6">

            <h2 className="text-xl font-semibold mb-6">
              Additional Requirements
            </h2>

            <div className="space-y-4">

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="refrigerated"
                  checked={formData.refrigerated}
                  onChange={handleChange}
                />
                Refrigerated Truck
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="hazardous"
                  checked={formData.hazardous}
                  onChange={handleChange}
                />
                Hazardous Materials
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="insurance"
                  checked={formData.insurance}
                  onChange={handleChange}
                />
                Insurance Required
              </label>

            </div>

            <div className="mt-6">

              <label className="block mb-2">
                Estimated Budget (R)
              </label>

              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />

              {errors.budget && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.budget}
                </p>
              )}

            </div>

          </div>

          {/* Buttons */}

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={() => navigate("/freight-owner/dashboard")}
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center gap-2"
            >
              <Save size={18} />
              Publish Load
            </button>

          </div>

        </form>

      </div>
    </Layout>
  );
}

export default PostLoad;