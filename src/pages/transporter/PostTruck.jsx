import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { ArrowLeft, Save, Truck } from "lucide-react";

function PostTruck() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    truckType: "",
    capacity: "",
    licensePlate: "",
    currentLocation: "",
    destinationLocation: "",
    availableDate: "",
    pricePerKm: "",
    refrigerated: false,
    hazardousPermit: false,
    tailgateLift: false,
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

    if (!formData.truckType)
      newErrors.truckType = "Truck type is required.";

    if (!formData.capacity || Number(formData.capacity) <= 0)
      newErrors.capacity = "Enter a valid capacity in tons.";

    if (!formData.licensePlate.trim())
      newErrors.licensePlate = "License plate / Registration is required.";

    if (!formData.currentLocation.trim())
      newErrors.currentLocation = "Current location is required.";

    if (!formData.availableDate)
      newErrors.availableDate = "Available date is required.";

    if (!formData.pricePerKm || Number(formData.pricePerKm) <= 0)
      newErrors.pricePerKm = "Enter a valid rate per km.";

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
      navigate("/transporter/dashboard");
    }, 2000);
  };

  return (
    <Layout role="transporter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => navigate("/transporter/dashboard")}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-3"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </button>

            <h1 className="text-4xl font-bold text-slate-900 flex items-center gap-3">
              <Truck size={36} className="text-slate-800" />
              Post Available Truck
            </h1>

            <p className="text-slate-500 mt-2">
              List your available vehicle capacity so freight owners can book routes.
            </p>
          </div>

          <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
            Active Listing
          </span>
        </div>

        {success && (
          <div className="mb-6 rounded-xl bg-green-100 border border-green-300 p-4 text-green-700">
            ✅ Truck listing published successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Truck Details */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Vehicle Specifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Truck Type
                </label>
                <select
                  name="truckType"
                  value={formData.truckType}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                >
                  <option value="">Select Truck Type</option>
                  <option>Flatbed</option>
                  <option>Box Truck / Dry Van</option>
                  <option>Refrigerated (Reefer)</option>
                  <option>Side Loader</option>
                  <option>Curtainsider</option>
                  <option>Tanker</option>
                  <option>Tipper / Dump Truck</option>
                </select>

                {errors.truckType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.truckType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Capacity (tons)
                </label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
                  placeholder="e.g. 15"
                  className="w-full rounded-xl border p-3"
                />

                {errors.capacity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.capacity}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  License Plate / Registration Number
                </label>
                <input
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleChange}
                  placeholder="e.g. CA 123-456"
                  className="w-full rounded-xl border p-3"
                />

                {errors.licensePlate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.licensePlate}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Availability & Route */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Availability & Route
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Location
                </label>
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  placeholder="e.g. Johannesburg"
                  className="w-full rounded-xl border p-3"
                />

                {errors.currentLocation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.currentLocation}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred Destination (Optional)
                </label>
                <input
                  type="text"
                  name="destinationLocation"
                  value={formData.destinationLocation}
                  onChange={handleChange}
                  placeholder="e.g. Durban (leave blank for any)"
                  className="w-full rounded-xl border p-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Available Date
                </label>
                <input
                  type="date"
                  name="availableDate"
                  value={formData.availableDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border p-3"
                />

                {errors.availableDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.availableDate}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Rate per Kilometer (R)
                </label>
                <input
                  type="number"
                  name="pricePerKm"
                  value={formData.pricePerKm}
                  onChange={handleChange}
                  placeholder="e.g. 25"
                  className="w-full rounded-xl border p-3"
                />

                {errors.pricePerKm && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pricePerKm}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Features & Permits */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              Vehicle Capabilities & Permits
            </h2>

            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="refrigerated"
                  checked={formData.refrigerated}
                  onChange={handleChange}
                />
                Refrigeration Unit Installed
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="hazardousPermit"
                  checked={formData.hazardousPermit}
                  onChange={handleChange}
                />
                Hazmat / Hazardous Goods Permit
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="tailgateLift"
                  checked={formData.tailgateLift}
                  onChange={handleChange}
                />
                Tailgate Lift Available
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/transporter/dashboard")}
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 flex items-center gap-2"
            >
              <Save size={18} />
              Publish Truck
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default PostTruck;
