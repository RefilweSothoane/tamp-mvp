import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Search, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white antialiased selection:bg-white selection:text-black font-sans">
      
      {/* 1. Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black font-black text-xl rounded-xl flex items-center justify-center uppercase shadow-md">
              T
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              TAMP
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#transporters" className="hover:text-white transition-colors">For Transporters</a>
            <a href="#shippers" className="hover:text-white transition-colors">For Freight Owners</a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer active:scale-[0.98]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-zinc-800 p-6 space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white">How It Works</a>
            <a href="#transporters" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white">For Transporters</a>
            <a href="#shippers" onClick={() => setMobileMenuOpen(false)} className="block text-zinc-300 hover:text-white">For Freight Owners</a>
            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
              <Link to="/login" className="text-center py-2 text-zinc-300">Sign In</Link>
              <Link to="/register" className="bg-white text-black font-semibold text-center py-3 rounded-xl">Get Started</Link>
            </div>
          </div>
        )}
      </header>

{/* 2. Hero Section */}
<section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-medium mb-6 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Digital Freight Marketplace
      </div>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
        Eliminate empty miles. <br />
        Match freight instantly.
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed mb-8">
        TAMP connects freight owners with available transport capacity in real time.
        Improve truck utilisation, reduce return legs, and track every transaction with total transparency.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <Link
          to="/register"
        className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <span>Post or Find Cargo</span>
          <ArrowRight className="w-5 h-5" />
        </Link>

        <a
          href="#how-it-works"
          className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-4 rounded-xl text-base border border-zinc-800 flex items-center justify-center transition-all"
        >
          How TAMP Works
        </a>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative w-full h-[400px] hidden lg:flex items-center justify-center">
      <div className="absolute w-[450px] h-[450px] bg-violet-600/40 blur-[160px] rounded-full" />

<img
  src="/images/truck.svg"
  alt="Truck"
  className="relative w-[480px] float-animation"
/>

    </div>

  </div>
</section>

      {/* 3. Metrics Banner */}
      <section className="border-y border-zinc-800/80 bg-zinc-950/60 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">0%</h3>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Unused Return Capacity</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">100%</h3>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Transparent Tracking</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">&lt; 15 min</h3>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Average Load Allocation</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">256-bit</h3>
            <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Encrypted Transactions</p>
          </div>
        </div>
      </section>

      {/* 4. Core Value Proposition Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">Core Purpose</h2>
          <p className="text-3xl md:text-4xl font-bold text-white">Engineered for efficiency & trust.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-zinc-950 border border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-violet-400 mb-3">Maximise Fleet Utilisation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Fill empty return trips by matching available truck space with cargo along scheduled routes in real time.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-semibold text-zinc-500 uppercase">
              Operational Efficiency
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-950 border border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-3">Rapid Load Allocation</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Shorten the time required to pair cargo with verified transporters using instant automated compatibility scoring.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-semibold text-zinc-500 uppercase">
              Time Savings
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-950 border border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Auditable Transparency</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Maintain an immutable record of every match, price quote, and status update across the entire transport lifecycle.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-semibold text-zinc-500 uppercase">
              Trust & Security
            </div>
          </div>

        </div>
      </section>

      {/* 5. Dual Audience Section */}
      <section className="py-20 border-t border-zinc-800/80 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Freight Owners */}
          <div id="shippers" className="space-y-6">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">For Freight Owners</span>
            <h3 className="text-3xl font-bold text-white">Move cargo with verified fleet capacity.</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Access vetted truck operators instantly across major transit corridors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Transparent pricing without hidden intermediary markups.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>End-to-end tracking and status confirmation.</span>
              </li>
            </ul>
          </div>

          {/* Transporters */}
          <div id="transporters" className="space-y-6">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">For Transporters</span>
            <h3 className="text-3xl font-bold text-white">Turn empty miles into consistent revenue.</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Find backhaul loads matching your exact return vehicle capacity.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Reduce idle fleet downtime between major dispatches.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>Direct digital load confirmations and reliable payment records.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 6. Call to Action (CTA) */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to optimize your freight moves?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Join the digital freight network that keeps trucks moving and cargo arriving on time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/register" 
              className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black font-semibold px-8 py-3.5 rounded-xl text-sm transition-all active:scale-[0.98]"
            >
              Create Account
            </Link>
            <Link 
              to="/login" 
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3.5 rounded-xl text-sm border border-zinc-800 transition-all"
            >
              Sign In to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Minimalist Footer */}
      <footer className="border-t border-zinc-900 py-12 px-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white text-black font-black text-xs rounded-md flex items-center justify-center uppercase">
              T
            </div>
            <span className="text-zinc-400 font-semibold uppercase tracking-wider">TAMP Platform</span>
          </div>
          <p>© 2026 Truck Asset Matchmaking Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Support</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default LandingPage;