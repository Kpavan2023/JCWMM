import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg">
        <div className="mb-6">
          <span className="font-poppins font-black text-[120px] sm:text-[160px] leading-none text-gradient-gold">404</span>
        </div>
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-3">Page Not Found</h1>
        <p className="font-inter text-royal-300 text-base mb-8 leading-relaxed">
          The page you are looking for may have been moved, renamed, or never existed.
          Let's get you back on the right path.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="flex items-center gap-2 px-6 py-3 rounded-full gold-gradient text-white font-poppins font-semibold text-sm shadow-lg transition hover:scale-105">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/plan-your-visit" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-poppins font-semibold text-sm transition hover:bg-white/20">
            <Search className="w-4 h-4" /> Plan Your Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
