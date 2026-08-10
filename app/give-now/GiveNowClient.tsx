'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart, Copy, CheckCheck, Landmark, Smartphone,
  ArrowLeft, Shield, Sparkles, Phone, QrCode,
} from 'lucide-react';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { GIVE_NOW_VERSE } from '@/lib/give-now-data';

/* ─── small utility ─────────────────────────────────────── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () =>
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  return (
    <button
      onClick={copy}
      title="Copy"
      className="ml-1.5 p-1.5 rounded-lg text-gray-400 hover:text-royal-600 hover:bg-royal-50 dark:hover:bg-white/10 transition-colors flex-shrink-0"
    >
      {copied
        ? <CheckCheck className="w-3.5 h-3.5 text-green-500" />
        : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 dark-border last:border-0 gap-3">
      <span className="text-[11px] font-inter font-medium text-gray-500 dark-muted uppercase tracking-wider flex-shrink-0 w-28">
        {label}
      </span>
      <div className="flex items-center min-w-0">
        <span className="font-inter font-semibold text-royal-900 dark-heading text-sm break-all">{value}</span>
        <CopyButton text={value} />
      </div>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────── */
export default function GiveNowClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-royal-50 via-white to-royal-50/50 dark-page font-inter">

      {/* Top bar */}
      <div className="bg-royal-950 dark-topbar text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-royal-300 hover:text-white transition text-sm font-inter"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20">
              <Image src="/logo_jcwmm.png" alt="JCWMM" width={32} height={32} className="object-cover w-full h-full" />
            </div>
            <span className="font-poppins font-bold text-sm">JCWMM</span>
          </div>
        </div>
      </div>

      {/* ── Hero banner ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 dark-badge-bg text-gold-700 dark-badge-text text-xs font-semibold uppercase tracking-wider mb-4">
          Give &amp; Support
        </span>
        <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-royal-900 dark-heading mb-3">
          Sow Into the <span className="text-gradient-gold">Kingdom of God</span>
        </h1>
        <p className="text-gray-600 dark-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
          Your generous giving enables us to spread the Gospel, support our ministries,
          and serve the community. Every seed sown in faith bears fruit for His glory.
        </p>
        {/* scripture */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-royal-50 dark-card border border-royal-100 dark-border">
          <p className="font-inter text-royal-700 dark-body text-sm italic leading-relaxed">
            {GIVE_NOW_VERSE.text}
          </p>
          <p className="font-poppins font-semibold text-gold-600 text-sm mt-2">— {GIVE_NOW_VERSE.reference}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 pb-16">

        {/* ═══════════════════════════════════════════════
            SECTION 1 — UPI / QR Code
        ═══════════════════════════════════════════════ */}
        <div>
          <h2 className="font-poppins font-bold text-xl text-royal-900 dark-heading mb-5 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-royal-600 dark-accent" />
            UPI / QR Code
          </h2>

          {/* Main UPI card */}
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-royal-900/15 bg-gradient-to-br from-royal-950 to-royal-800">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left — QR */}
              <div className="flex flex-col items-center justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
                <p className="font-inter text-royal-300 text-xs uppercase tracking-widest mb-5">
                  Scan to Pay
                </p>
                {/* QR image — white padded card */}
                <div className="w-52 h-52 sm:w-60 sm:h-60 bg-white rounded-2xl p-3 shadow-xl">
                  <Image
                    src="/images/JCWMM_OFFERING_QR_CODE_2.jpg"
                    alt="JCWMM UPI QR Code"
                    width={228}
                    height={228}
                    className="w-full h-full object-contain rounded-lg"
                    priority
                  />
                </div>
                {/* UPI ID row */}
                <div className="mt-5 w-full max-w-[240px] bg-white/10 rounded-xl px-4 py-3 border border-white/10">
                  <p className="font-inter text-royal-400 text-[10px] uppercase tracking-wider mb-1">UPI ID</p>
                  <div className="flex items-center justify-between">
                    <p className="font-poppins font-bold text-gold-400 text-lg">JCWMM@SBI</p>
                    <CopyButton text="JCWMM@SBI" />
                  </div>
                </div>
                <p className="mt-2 font-inter text-royal-400 text-xs">
                  Merchant: <span className="text-white font-medium">JUDAH ASHER</span>
                </p>
              </div>

              {/* Right — details */}
              <div className="flex flex-col justify-center p-8 md:p-10 text-white">
                <div className="mb-6">
                  <p className="font-inter text-royal-300 text-xs uppercase tracking-widest mb-2">
                    Accepted via
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['GPay', 'PhonePe', 'Paytm', 'BHIM UPI', 'WhatsApp Pay'].map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-inter font-medium text-white"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-inter text-royal-300 text-xs uppercase tracking-widest mb-3">
                    Contact for payment
                  </p>
                  {['+91 8686861836', '+91 9700545494'].map((ph) => (
                    <a
                      key={ph}
                      href={`tel:${ph.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 mb-2 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <span className="font-poppins font-semibold text-gold-300 group-hover:text-gold-200 transition text-sm">
                        {ph}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Offering box image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/Offering_Box.jpg"
                    alt="JCWMM Offering Box"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-poppins font-bold text-white text-sm">Sow Your Seed</p>
                    <p className="font-inter text-royal-300 text-xs">Every gift counts for the Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 2 — Bank Transfer (SBI)
        ═══════════════════════════════════════════════ */}
        <div>
          <h2 className="font-poppins font-bold text-xl text-royal-900 dark-heading mb-5 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-royal-600 dark-accent" />
            Bank Transfer — SBI
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-xl shadow-royal-100/60 border border-gray-100 dark-border bg-white dark-card">
            <div className="grid grid-cols-1 md:grid-cols-5">

              {/* Left — Abrahamic Covenant poster */}
              <div className="md:col-span-2 relative min-h-[240px] md:min-h-0">
                <Image
                  src="/images/BECOME_A_ABRAHAMIC_CONVENANT-C.jpg"
                  alt="Become an Abrahamic Covenant Partner"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                {/* gradient overlay for text legibility on right */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#111a2e] to-transparent" />
              </div>

              {/* Right — bank details */}
              <div className="md:col-span-3 p-6 sm:p-8">
                {/* SBI header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="font-poppins font-extrabold text-white text-sm leading-none">SBI</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-royal-900 dark-heading text-base">
                      State Bank of India
                    </h3>
                    <p className="font-inter text-gray-500 dark-muted text-xs">NEFT · RTGS · IMPS · Internet Banking</p>
                  </div>
                </div>

                {/* rows */}
                <div className="bg-gray-50 dark-inner-card rounded-2xl px-4 py-1 border border-gray-100 dark-border">
                  <Row label="Account Name" value="MR. JUDAH ASHER" />
                  <Row label="Account No." value="20385704769" />
                  <Row label="IFSC Code"   value="SBIN0018395" />
                  <Row label="Branch Code" value="018395" />
                  <Row label="Bank"        value="State Bank of India" />
                  <Row label="Branch"      value="Hyderabad" />
                </div>

                {/* phones */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {['+91 8686861836', '+91 9700545494'].map((ph) => (
                    <a
                      key={ph}
                      href={`tel:${ph.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-royal-50 dark-icon-bg border border-royal-100 dark-border text-royal-700 dark-accent text-xs font-inter font-medium hover:bg-royal-100 transition"
                    >
                      <Phone className="w-3 h-3" />
                      {ph}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            SECTION 3 — Abrahamic Covenant Partner
        ═══════════════════════════════════════════════ */}
        <div>
          <h2 className="font-poppins font-bold text-xl text-royal-900 dark-heading mb-5 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-500" />
            Become an Abrahamic Covenant Partner
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-xl shadow-royal-100/60">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-square sm:aspect-auto sm:min-h-[360px]">
                <Image
                  src="/images/BECOME_A_ABRAHAMIC_COVENANT_PARTNER.jpg"
                  alt="Become an Abrahamic Covenant Partner — JCWMM Monthly Partner"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-gradient-to-br from-royal-950 to-royal-800 p-7 sm:p-9 flex flex-col justify-center text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4 self-start">
                  Monthly Partnership
                </span>
                <h3 className="font-poppins font-bold text-2xl sm:text-3xl mb-3 leading-tight">
                  Invest in the<br />
                  <span className="text-gradient-gold">Kingdom of God</span>
                </h3>
                <p className="font-inter text-royal-300 text-sm leading-relaxed mb-6">
                  Become an Abrahamic Covenant Monthly Partner and sow consistently into
                  this ministry. Your partnership enables us to preach the Gospel,
                  conduct crusades, and transform lives across the nation.
                </p>

                <div className="bg-white/8 rounded-2xl p-4 border border-white/10 mb-5">
                  <p className="font-inter text-royal-400 text-[10px] uppercase tracking-wider mb-2">Scan &amp; Pay Monthly</p>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-white rounded-xl p-1.5 flex-shrink-0">
                      <Image
                        src="/images/JCWMM_OFFERING_QR_CODE_2.jpg"
                        alt="Monthly Partner QR"
                        width={72}
                        height={72}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-poppins font-bold text-gold-400 text-base">JCWMM@SBI</p>
                      <p className="font-inter text-royal-400 text-xs mt-0.5">UPI ID</p>
                      <div className="flex gap-1 mt-2 flex-wrap">
                        {['GPay', 'PhonePe', 'Paytm'].map((a) => (
                          <span key={a} className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white font-inter">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['+91 8686861836', '+91 9700545494'].map((ph) => (
                    <a
                      key={ph}
                      href={`tel:${ph.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-inter font-medium hover:bg-white/15 transition"
                    >
                      <Phone className="w-3 h-3 text-gold-400" />
                      {ph}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            Trust badges
        ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Heart,    title: '100% to Ministry',  desc: 'Every rupee goes directly to God\'s work' },
            { icon: Shield,   title: 'Secure & Private',  desc: 'Your personal details are never shared'  },
            { icon: Sparkles, title: 'Eternal Impact',    desc: 'Sowing seeds that bear fruit for eternity' },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-3 p-4 rounded-2xl bg-white dark-card border border-gray-100 dark-border shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-royal-50 dark-icon-bg flex items-center justify-center flex-shrink-0">
                <b.icon className="w-4 h-4 text-royal-600 dark-accent" />
              </div>
              <div>
                <div className="font-poppins font-semibold text-sm text-royal-900 dark-heading">{b.title}</div>
                <div className="font-inter text-xs text-gray-500 dark-muted mt-0.5">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <p className="text-center text-gray-500 dark-muted text-sm font-inter pb-2">
          For any giving-related queries, contact us at{' '}
          <a href="mailto:jcwmm.off@gmail.com" className="text-royal-600 dark-accent hover:underline font-medium">
            jcwmm.off@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
