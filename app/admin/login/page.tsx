'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, Mail, LogIn, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
    if (authError) {
      setError('Invalid email or password. Please try again.');
    } else {
      router.push('/admin/prayer-requests');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
              {/* Back to Home */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm font-inter bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-xl backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#181818] px-8 pt-8 pb-6 text-center border-b border-white/10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden border border-[#0B1F3A]">
                <Image
                  src="/logo_jcwmm.png"
                  alt="JCWMM Logo"
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h1 className="font-poppins font-bold text-white text-xl">JCWMM Admin</h1>
            <p className="font-inter text-royal-400 text-sm mt-1">Prayer Requests Dashboard</p>
          </div>

          {/* Form */}
          <div className="px-8 py-8">
           <h2 className="font-poppins font-semibold text-white text-lg mb-1">
  Sign In
</h2>

<p className="font-inter text-gray-400 text-sm mb-6">
  Authorized personnel only.
</p>

            <form onSubmit={handleLogin} className="space-y-5" noValidate>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pastor@jcwmm.org"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-[#0B1F3A] bg-gray-50 transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#0B1F3A] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] focus:border-[#0B1F3A] shadow-sm transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-inter">
                  <Lock className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || !email || !password}
                className="w-full py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#12315A] text-white font-poppins font-semibold text-sm transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Sign In
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="px-8 pb-6 text-center">
            <p className="text-xs font-inter text-gray-400">
              This page is restricted to authorized church administrators only.
            </p>
          </div>
        </div>

        <p className="text-center text-royal-400 text-xs font-inter mt-6">
          Jesus Christ Word Miracles Ministry &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
