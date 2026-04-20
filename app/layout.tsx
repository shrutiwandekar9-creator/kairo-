import { ClerkProvider } from '@clerk/nextjs';
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: '#6366f1' } }}>
      <html lang="en">
        <body className="bg-[#050505] text-white selection:bg-indigo-500/30">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}