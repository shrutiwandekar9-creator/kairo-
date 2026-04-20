"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<any>(null);

  const generateStrategy = async () => {
    if (!niche) return alert("Please enter a topic first!");
    setLoading(true);
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ niche, platform }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setAiData(data);
    } catch (error) {
      console.error("API Error:", error);
      alert("AI Engine abhi connect nahi ho paya. Terminal check karo.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Welcome, <span className="text-indigo-400">{user?.firstName || "Creator"}</span>
          </h1>
          <p className="text-gray-400 text-lg">Your AI-Powered Growth Agency is ready.</p>
        </header>

        {/* Input Section - The Real Working Form */}
        <div className="bg-black/40 border border-white/10 rounded-3xl p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="E.g. Tech setup tour, Coding tutorial, Gym vlog..."
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500"
            />
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="Instagram" className="bg-gray-900">Instagram</option>
              <option value="YouTube" className="bg-gray-900">YouTube</option>
              <option value="X" className="bg-gray-900">X (Twitter)</option>
            </select>
            <button
              onClick={generateStrategy}
              disabled={loading || !niche}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Generate AI Strategy"}
            </button>
          </div>
        </div>

        {/* Results Section - Connected to Real AI Data */}
        {aiData && (
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
              <h2 className="text-2xl font-bold">Intelligence Report</h2>
              <div className="bg-black/50 px-4 py-2 rounded-full border border-green-500/30 text-green-400 font-black">
                SEO Score: {aiData.seoScore}/100
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-indigo-300 font-semibold uppercase mb-2">Optimized Title</p>
                  <p className="text-2xl font-bold">{aiData.title}</p>
                </div>
                <div>
                  <p className="text-sm text-indigo-300 font-semibold uppercase mb-2">Viral Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {aiData.viralTags?.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-md text-sm">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 bg-black/40 p-6 rounded-2xl border border-white/5">
                <div>
                  <p className="text-sm text-purple-300 font-semibold uppercase mb-2">5-Second Hook Script</p>
                  <p className="text-gray-300 italic">"{aiData.videoHook}"</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-400 uppercase mb-1">Growth Strategy</p>
                  <p className="text-white">{aiData.actionableAdvice}</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}