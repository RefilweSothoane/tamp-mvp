import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/role-selection");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 antialiased selection:bg-white selection:text-black">
      {/* Main Card Container */}
      <div className="max-w-md w-full bg-zinc-950 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden">
        
        {/* Card Header */}
        <div className="p-8 text-center border-b border-zinc-800/80 pb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-black font-black text-xl mb-3 shadow-md uppercase">
            T
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-zinc-400 text-xs mt-1">Sign in to manage your freight network</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          
          {/* Email Input */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-4 py-3 text-sm bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-zinc-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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

          {/* Remember Me */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-zinc-700 bg-zinc-900 text-white focus:ring-0 accent-white cursor-pointer"
            />
            <label htmlFor="remember" className="text-xs font-medium text-zinc-400 select-none cursor-pointer">
              Remember this device for 30 days
            </label>
          </div>

          {/* Uber-Style Action Button */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.99] mt-2"
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Card Footer */}
        <div className="px-8 py-4 bg-zinc-900/50 border-t border-zinc-800/80 text-center text-xs text-zinc-500 font-medium">
          secure login
        </div>
      </div>
    </div>
  );
}

export default Login;