export default function Resources() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wide border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300 uppercase">
            Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Resources & API</h1>
          <p className="text-xl text-gray-400">Everything you need to scale your influence and integrate Kairo's AI.</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* API Docs */}
          <div className="p-8 rounded-3xl border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all cursor-pointer">
            <div className="w-12 h-12 mb-6 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xl">{'{}'}</div>
            <h3 className="text-xl font-semibold text-white mb-3">Developer API Docs</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Integrate real-time trend detection and audience prediction directly into your own applications.</p>
            <button className="text-indigo-400 text-sm font-medium hover:text-white transition-colors">View Documentation →</button>
          </div>

          {/* Research & Case Studies */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">Case Studies & Research</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">See exact data on how top creators optimized their revenue using Kairo's predictive models.</p>
            <button className="text-blue-400 text-sm font-medium hover:text-white transition-colors">Read Studies →</button>
          </div>

          {/* Webinars */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 mb-6 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">🎥</div>
            <h3 className="text-xl font-semibold text-white mb-3">Webinars & Training</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Weekly live sessions on mastering the algorithm, crisis management, and using the dashboard.</p>
            <button className="text-purple-400 text-sm font-medium hover:text-white transition-colors">Join Next Session →</button>
          </div>

          {/* Weblinghub / Testimonials */}
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 mb-6 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 text-xl">⭐</div>
            <h3 className="text-xl font-semibold text-white mb-3">Weblinghub Testimonials</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Read unedited reviews, success stories, and digital PR wins from our community.</p>
            <button className="text-green-400 text-sm font-medium hover:text-white transition-colors">View Wall of Love →</button>
          </div>

           {/* Blog */}
           <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 mb-6 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-xl">📝</div>
            <h3 className="text-xl font-semibold text-white mb-3">Kairo Blog</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Latest updates on platform features, influencer marketing strategies, and algorithm changes.</p>
            <button className="text-orange-400 text-sm font-medium hover:text-white transition-colors">Read Articles →</button>
          </div>

           {/* Help Center */}
           <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
            <div className="w-12 h-12 mb-6 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 text-xl">❓</div>
            <h3 className="text-xl font-semibold text-white mb-3">Help Center</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Stuck? Find step-by-step guides on content strategy, platform forecasting, and account setup.</p>
            <button className="text-yellow-400 text-sm font-medium hover:text-white transition-colors">Get Support →</button>
          </div>

        </div>
      </div>
    </div>
  );
}