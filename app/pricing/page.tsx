export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans relative overflow-hidden py-24 px-4 md:px-8">
      
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Invest in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Influence.</span>
        </h1>
        <p className="text-xl text-gray-400">
          Choose the perfect plan to unlock AI-driven trend predictions, audience insights, and revenue optimization.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Plan 1: Content Creation */}
        <div className="flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
          <h3 className="text-xl font-semibold text-white mb-2">Content Creation</h3>
          <p className="text-sm text-gray-400 mb-6">For individual creators starting their journey.</p>
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">$29</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            <li className="flex items-center gap-2">✓ Content Discovery</li>
            <li className="flex items-center gap-2">✓ Best Upload Timings</li>
            <li className="flex items-center gap-2">✓ AI Title Suggestions</li>
          </ul>
          <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white text-white hover:text-black font-semibold transition-all">
            Get Started
          </button>
        </div>

        {/* Plan 2: PR & Comms (Popular) */}
        <div className="flex flex-col p-8 rounded-3xl border border-indigo-500/50 bg-indigo-500/10 backdrop-blur-sm relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(79,70,229,0.2)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
            Most Popular
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">PR & Comms</h3>
          <p className="text-sm text-indigo-200/70 mb-6">For agencies and growing personal brands.</p>
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-gray-400">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1 text-sm text-indigo-100/80">
            <li className="flex items-center gap-2">✓ Everything in Content</li>
            <li className="flex items-center gap-2 text-white font-medium">✓ Crisis Alerting</li>
            <li className="flex items-center gap-2 text-white font-medium">✓ Real-time Trend Detection</li>
            <li className="flex items-center gap-2">✓ Competitor Intelligence</li>
          </ul>
          <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.4)]">
            Start Free Trial
          </button>
        </div>

        {/* Plan 3: Suite */}
        <div className="flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
          <h3 className="text-xl font-semibold text-white mb-2">Suite</h3>
          <p className="text-sm text-gray-400 mb-6">The ultimate package for established influencers.</p>
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">$249</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            <li className="flex items-center gap-2">✓ Everything in PR & Comms</li>
            <li className="flex items-center gap-2 text-white">✓ Revenue Optimization</li>
            <li className="flex items-center gap-2 text-white">✓ Platform Specific Forecasting</li>
            <li className="flex items-center gap-2">✓ API Access (Basic)</li>
          </ul>
          <button className="w-full py-3 rounded-xl border border-white/20 hover:bg-white text-white hover:text-black font-semibold transition-all">
            Upgrade to Suite
          </button>
        </div>

        {/* Plan 4: Enterprise */}
        <div className="flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
          <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
          <p className="text-sm text-gray-400 mb-6">Custom AI solutions for large media companies.</p>
          <div className="mb-8">
            <span className="text-4xl font-bold text-white">Custom</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1 text-sm text-gray-300">
            <li className="flex items-center gap-2">✓ Custom AI Model Tuning</li>
            <li className="flex items-center gap-2">✓ Full API Access & Webhooks</li>
            <li className="flex items-center gap-2">✓ Dedicated Account Manager</li>
            <li className="flex items-center gap-2">✓ White-label Reports</li>
          </ul>
          <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}