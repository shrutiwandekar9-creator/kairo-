"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth(); // Clerk ka smart checker
  
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

      <div>
        {/* Agar login nahi hai, toh Login button dikhao */}
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="px-6 py-2 text-sm font-medium border border-white/10 rounded-full hover:bg-white/5 transition-all">
              Login
            </button>
          </SignInButton>
        ) : (
          /* Agar login hai, toh Profile Photo dikhao */
          <UserButton />
        )}
      </div>
    </nav>
  );
}