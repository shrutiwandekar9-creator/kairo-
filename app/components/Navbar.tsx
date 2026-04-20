"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  // Dashboard aur Connect page par hum ye navbar nahi dikhayenge (unka apna layout hoga)
  if (pathname === "/dashboard" || pathname === "/connect") return null;

  return (
    <nav className="fixed w-full flex items-center justify-between p-6 border-b border-white/5 backdrop-blur-xl bg-black/40 z-50">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600"></div>
          <h1 className="text-2xl font-bold tracking-widest text-white uppercase">KAIRO</h1>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
        <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
      </div>

      <Link href="/login" className="px-6 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/5 transition-all">
        Login
      </Link>
    </nav>
  );
}