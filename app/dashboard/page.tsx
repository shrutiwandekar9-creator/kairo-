export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[#050505] text-gray-200 font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-black/50 backdrop-blur-xl p-6 hidden md:block">
        <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-purple-600 mb-10">
          KAIRO
        </h2>
        <nav className="space-y-4">
          <a href="#" className="block px-4 py-2.5 bg-white/5 rounded-lg text-white font-medium border border-white/10">Overview</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">Content Discovery</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">Find Influencers</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">Trend Monitoring</a>
          <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">Crisis Alerting</a>
        </nav>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome back, Creator</h1>
            <p className="text-gray-400 text-sm">Here is your AI-driven performance breakdown today.</p>
          </div>
          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            + New Campaign
          </button>
        </header>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Predicted Audience Reach</h3>
            <p className="text-3xl font-bold text-white">1.2M <span className="text-green-400 text-sm font-normal ml-2">↑ 12%</span></p>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Real-time Trend Score</h3>
            <p className="text-3xl font-bold text-white">94/100 <span className="text-green-400 text-sm font-normal ml-2">Viral</span></p>
          </div>
          {/* Card 3 */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Revenue Optimization</h3>
            <p className="text-3xl font-bold text-white">$4,850 <span className="text-green-400 text-sm font-normal ml-2">↑ $420</span></p>
          </div>
        </div>

        {/* AI Suggestion Box */}
        <div className="p-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex w-3 h-3 rounded-full bg-indigo-400 animate-pulse"></span>
            <h2 className="text-lg font-semibold text-indigo-300">Kairo AI Recommendation</h2>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Based on current algorithm shifts, short-form tech reviews are trending. We suggest uploading a 60-second video on <strong className="text-white">"AI Automation Workflows"</strong> between 6:00 PM and 7:30 PM today for maximum engagement.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-all border border-white/10">
              Generate Script
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-all border border-white/10">
              View Competitors
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}