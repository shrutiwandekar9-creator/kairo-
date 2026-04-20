import Link from "next/link";
export default function ConnectSocials() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-gray-200 font-sans relative overflow-hidden px-4">
      
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide border rounded-full border-blue-500/30 bg-blue-500/10 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] uppercase">
            <span className="flex w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Integration Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Connect Your Empire</h1>
          <p className="text-gray-400 text-lg">Link your social accounts so Kairo's AI can analyze your audience, predict trends, and optimize your revenue.</p>
        </div>

        {/* Social Connection Cards */}
        <div className="space-y-4">
          
          {/* YouTube Card */}
          <div className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500/20 text-red-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">YouTube</h3>
                <p className="text-sm text-gray-400">Video analytics & SEO prediction</p>
              </div>
            </div>
            <button className="px-5 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-full transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              Connect
            </button>
          </div>

          {/* Instagram Card */}
          <div className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-500/20 text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Instagram</h3>
                <p className="text-sm text-gray-400">Reel trends & audience growth</p>
              </div>
            </div>
            <button className="px-5 py-2 text-sm font-medium bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white rounded-full transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              Connect
            </button>
          </div>

          {/* X (Twitter) Card */}
          <div className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-500/20 text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">X (Twitter)</h3>
                <p className="text-sm text-gray-400">Real-time sentiment & PR monitoring</p>
              </div>
            </div>
            <button className="px-5 py-2 text-sm font-medium bg-white hover:bg-gray-200 text-black rounded-full transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Connect
            </button>
          </div>

        </div>

        {/* Continue Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white rounded-full font-medium transition-all flex items-center gap-2">
            Continue to Dashboard 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </div>
  );
}