'use client';

import Link from 'next/link';
import { Home, RefreshCw, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <span className="font-poppins font-black text-[100px] sm:text-[140px] leading-none text-gradient-gold">500</span>
        <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-3">Something Went Wrong</h1>
        <p className="font-inter text-royal-300 text-base mb-8 leading-relaxed">
          An unexpected error occurred while loading this page. Please try again —
          if the problem persists, contact our team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 rounded-full gold-gradient text-white font-poppins font-semibold text-sm shadow-lg transition hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <Link href="/" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-poppins font-semibold text-sm transition hover:bg-white/20">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
