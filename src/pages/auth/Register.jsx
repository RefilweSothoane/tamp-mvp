import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    navigate("/role-selection");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 antialiased selection:bg-white selection:text-black">
      {/* Main Card Container */}
      <div className="max-w-md w-full bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden my-8">
        
        {/* Card Header */}
        <div className="p-8 text-center border-b border-zinc-800/80 pb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-black font-black text-xl mb-3 shadow-md uppercase">
            T
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Create Account</h1>
          <p className="text-zinc-400 text-xs mt-1">Get started with your freight network today</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          
          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Refilwe M."
              className="w-full px-4 py-3 text-sm bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-4 py-3 text-sm bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full pl-4 pr-11 py-3 text-sm bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              required
              className="w-4 h-4 mt-0.5 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-0 accent-white cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs font-medium text-zinc-400 select-none cursor-pointer leading-relaxed">
              I agree to the{" "}
              <span className="text-white underline underline-offset-2">Terms of Service</span> and{" "}
              <span className="text-white underline underline-offset-2">Privacy Policy</span>
            </label>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] mt-2"
          >
            <span>Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Card Footer - Link back to Login */}
        <div className="px-8 py-4 bg-zinc-900/50 border-t border-zinc-800/80 text-center text-xs text-zinc-400 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-semibold underline underline-offset-4 hover:text-zinc-200 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;