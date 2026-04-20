"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function ConnectEmpire() {
  const router = useRouter();
  const { user } = useUser();
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = (platform: string) => {
    setConnecting(platform);
    
    // Simulate real API connection delay
    setTimeout(() => {
      setConnecting(null);
      // Pushing user to Dashboard after "successful" connection
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl w-full relative z-10 text-center">
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 inline-block">
          ● Integration Required
        </span>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
          Connect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Empire</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
          Link your social accounts so Kairo's AI can analyze your audience, predict trends, and optimize your revenue.
        </p>

        <div className="space-y-4 text-left">
          {/* YouTube */}
          <div className="p-6 bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors rounded-2xl flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M9.996,15.005l0-6.01l5.244,3.005L9.996,15.005z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">YouTube</h3>
                <p className="text-sm text-gray-500">Video analytics & SEO prediction</p>
              </div>
            </div>
            <button 
              onClick={() => handleConnect('YouTube')}
              disabled={connecting !== null}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {connecting === 'YouTube' ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : "Connect"}
            </button>
          </div>

          {/* Instagram */}
          <div className="p-6 bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors rounded-2xl flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Instagram</h3>
                <p className="text-sm text-gray-500">Reel trends & audience growth</p>
              </div>
            </div>
            <button 
              onClick={() => handleConnect('Instagram')}
              disabled={connecting !== null}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-full transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {connecting === 'Instagram' ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : "Connect"}
            </button>
          </div>
        </div>

        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-12 text-sm text-gray-400 hover:text-white flex items-center gap-2 mx-auto px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all"
        >
          Skip for now <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}