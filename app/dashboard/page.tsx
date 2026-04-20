"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<any>(null);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<any[]>([{ role: "ai", text: "Hi! Main Kairo Advanced AI hu. Batao aaj kya predict karna hai?", type: "text" }]);

  const generateStrategy = async () => {
    if (!niche) return;
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: `Generate strategy for ${niche} on ${platform}` }) });
      const data = await res.json();
      setAiData(data);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const askResearchAgent = async (quickReply?: string) => {
    const text = quickReply || chatInput;
    if (!text) return;
    const newHistory = [...chatHistory, { role: "user", text, type: "text" }];
    setChatHistory(newHistory);
    setChatInput("");
    setIsChatLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text }) });
      const data = await res.json();
      setChatHistory([...newHistory, { role: "ai", ...data }]);
    } catch (e) { setChatHistory([...newHistory, { role: "ai", text: "Error connecting to engine." }]); }
    setIsChatLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-black mb-6">Empire Dashboard, <span className="text-indigo-400">{user?.firstName}</span></h1>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 mb-6 flex gap-4">
            <input type="text" value={niche} onChange={(e)=>setNiche(e.target.value)} placeholder="Topic..." className="flex-1 bg-transparent outline-none border-b border-white/20 p-2" />
            <button onClick={generateStrategy} className="bg-indigo-600 px-6 py-3 rounded-xl font-bold">{loading ? "..." : "Generate"}</button>
          </div>
          {aiData && (
            <div className="bg-indigo-600/10 p-6 rounded-3xl border border-indigo-500/30 animate-in fade-in">
              <h2 className="text-xl font-bold mb-4">AI Prediction for {niche}</h2>
              <p className="text-gray-300">{aiData.text}</p>
            </div>
          )}
        </div>
        <div className="lg:w-[450px] bg-[#0A0A0A] border border-white/10 rounded-3xl flex flex-col h-[700px]">
          <div className="p-4 border-b border-white/10 font-bold">Deep Research AI</div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {chatHistory.map((c, i) => (
              <div key={i} className={`p-4 rounded-2xl ${c.role==='ai'?'bg-white/5':'bg-indigo-600 self-end'}`}>
                <p className="text-sm">{c.text}</p>
                {c.chartData && <div className="mt-4 space-y-2">{c.chartData.map((d:any, j:number)=>(<div key={j} className="text-xs">{d.label}: {d.value}%</div>))}</div>}
                {c.quickReplies && <div className="flex flex-wrap gap-2 mt-4">{c.quickReplies.map((r:string, k:number)=>(<button key={k} onClick={()=>askResearchAgent(r)} className="text-[10px] bg-white/10 px-2 py-1 rounded-full">{r}</button>))}</div>}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/10 flex gap-2">
            <input type="text" value={chatInput} onChange={(e)=>setChatInput(e.target.value)} onKeyDown={(e)=>e.key==='Enter'&&askResearchAgent()} className="flex-1 bg-white/5 rounded-xl px-4 py-2" placeholder="Ask anything..." />
            <button onClick={()=>askResearchAgent()} className="bg-white text-black px-4 py-2 rounded-xl font-bold">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}