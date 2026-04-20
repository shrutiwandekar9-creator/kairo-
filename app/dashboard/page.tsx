"use client";

import { useState } from "react";

export default function Dashboard() {
  const [aiData, setAiData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Yeh function tumhari banayi hui API ko call karta hai
  const fetchAiPrediction = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform: 'YouTube', niche: 'Tech & AI' })
      });
      const data = await response.json();
      setAiData(data);
    } catch (error) {
      console.error("API Call Failed", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex bg-[#050505] text-gray-200 font-sans">
      
      {/* Sidebar (Same as before) */}
      <aside className="w-64 border-r border-white/5 bg-black/50 backdrop-blur-xl p-6 hidden md:block">
        <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-tr from-indigo-500 to-purple-600 mb-10">KAIRO</h2>
        <nav className="space-y-4">
          <a href="#" className="block px-4 py-2.5 bg-white/5 rounded-lg text-white font-medium border border-white/10">Overview</a>
          <a href="/resources" className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">Resources</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Welcome back, Creator</h1>
            <p className="text-gray-400 text-sm">Your AI-driven performance breakdown.</p>
          </div>
          
          {/* THE MAGIC BUTTON */}
          <button 
            onClick={fetchAiPrediction}
            disabled={loading}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] disabled:opacity-50"
          >
            {loading ? "AI is Thinking..." : "Generate AI Strategy ⚡"}
          </button>
        </header>

        {/* Dynamic AI Box - Yeh tabhi dikhega jab API se data aayega */}
        {aiData && (
          <div className="p-6 mb-8 rounded-2xl border border-green-500/30 bg-green-500/5 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
              <h2 className="text-lg font-bold text-green-400">Live Kairo AI Insight</h2>
            </div>
            <div className="space-y-3">
              <p className="text-white text-xl font-semibold">Title: {aiData.title}</p>
              <p className="text-gray-300"><strong>Caption Idea:</strong> {aiData.caption}</p>
              <p className="text-gray-300"><strong>Best Time to Post:</strong> <span className="text-white">{aiData.bestTime}</span></p>
              <p className="text-gray-300"><strong>Advice:</strong> {aiData.actionableAdvice}</p>
            </div>
          </div>
        )}

        {/* Dummy Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-gray-400 text-sm mb-2">Predicted Reach</h3>
            <p className="text-3xl font-bold text-white">1.2M</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-gray-400 text-sm mb-2">Trend Score</h3>
            <p className="text-3xl font-bold text-white">94/100</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-gray-400 text-sm mb-2">Revenue Opt.</h3>
            <p className="text-3xl font-bold text-white">$4,850</p>
          </div>
        </div>

      </main>
    </div>
  );
}