import Link from "next/link"; // Yeh Next.js ka magic link hai

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 selection:bg-indigo-500/30 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full flex items-center justify-between p-6 border-b border-white/5 backdrop-blur-xl bg-black/40 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(99,102,241,0.4)]"></div>
          <h1 className="text-2xl font-bold tracking-widest text-white">KAIRO</h1>
        </div>
        
        {/* Link to Dashboard */}
        <Link href="/dashboard" className="px-6 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300">
          Go to Dashboard
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center pt-48 pb-20 px-4 text-center relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

        {/* Glowing Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-wide border rounded-full border-indigo-500/30 bg-indigo-500/10 text-indigo-300 uppercase">
          <span className="flex w-2 h-2 rounded-full bg-indigo-400"></span>
          AI-Powered Creator Intelligence
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          Master the Algorithm. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-white">
            Own Your Audience.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 font-light">
          Predict trends, analyze behavior, and optimize revenue in real-time. Stop guessing. Let Kairo tell you exactly what to post next.
        </p>

        {/* Link to Login Page */}
        <Link href="/login" className="inline-block px-10 py-4 text-black bg-white rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Start Free Trial
        </Link>
      </main>
    </div>
  );
}