'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { Play, Heart, Radio, ChevronDown, Clock } from 'lucide-react';

const SERVICES = [
  { day: 'Every Saturday', time: '6:00 PM – 8:00 PM' },
  { day: 'Every Sunday', time: '11:00 AM – 1:00 PM' },
];

const MAPS_URL =
  'https://www.google.com/maps/place/Jigyaasa+Studio/@17.4355065,78.4493851,20.11z/data=!4m6!3m5!1s0x3bcb90c8f77ded69:0x86409d35be15ce57!8m2!3d17.4354808!4d78.4494062!16s%2Fg%2F1q66_drhh?entry=ttu';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [badgeFading, setBadgeFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rotateBadge = useCallback(() => {
    setBadgeFading(true);
    timerRef.current = setTimeout(() => {
      setBadgeIndex((i) => (i + 1) % SERVICES.length);
      setBadgeFading(false);
    }, 500);
  }, []);

  useEffect(() => {
    setMounted(true);
    const now = new Date();
    const day = now.getDay();
    const totalMin = now.getHours() * 60 + now.getMinutes();
    setIsLive(
      (day === 6 && totalMin >= 1080 && totalMin <= 1200) ||
      (day === 0 && totalMin >= 660 && totalMin <= 780)
    );
    const interval = setInterval(rotateBadge, 3500);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [rotateBadge]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const svc = SERVICES[badgeIndex];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero — Welcome to Mega Church JCWMM"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        {/* The background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/MegaChruch_back.jpeg')" }}
        />
        {/* Layered dark overlay — light enough to keep metallic frame visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(4,8,20,0.70) 0%, rgba(4,8,20,0.52) 40%, rgba(4,8,20,0.58) 70%, rgba(4,8,20,0.82) 100%)',
          }}
        />
        {/* Radial spotlight centred behind text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 48%, rgba(251,191,36,0.07) 0%, transparent 70%)',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.45) 100%)',
          }}
        />
      </div>

      {/* ── Floating logo glow ring ── */}
      <div
        className={`absolute z-[3] pointer-events-none hero-logo-float transition-opacity duration-700 ${
          mounted ? 'opacity-[0.18]' : 'opacity-0'
        }`}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        aria-hidden="true"
      >
        <div
          className="rounded-full"
          style={{
            width: 'clamp(160px, 30vw, 360px)',
            height: 'clamp(160px, 30vw, 360px)',
            background: 'radial-gradient(circle, rgba(251,191,36,0.09) 30%, transparent 70%)',
            border: '1px solid rgba(251,191,36,0.18)',
            boxShadow: '0 0 60px rgba(251,191,36,0.06)',
          }}
        />
      </div>

      {/* ── Service badge — glass, shimmer, positioned above content ── */}
      {mounted && (
        <div className="absolute top-[72px] sm:top-[88px] left-1/2 -translate-x-1/2 z-20">
          {isLive ? (
            <div
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border backdrop-blur-md shadow-lg"
              style={{ background: 'rgba(153,27,27,0.25)', borderColor: 'rgba(248,113,113,0.45)' }}
            >
              <span className="w-2 h-2 rounded-full bg-red-400 live-dot flex-shrink-0" />
              <Radio className="w-3.5 h-3.5 text-red-300" aria-hidden="true" />
              <span className="font-poppins font-semibold text-xs sm:text-sm text-white tracking-wide">
                Service Live Now
              </span>
            </div>
          ) : (
            <div
              className={`hero-badge relative flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-[9px] rounded-full border backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all duration-500 overflow-hidden ${
                badgeFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
              }`}
              style={{
                background: 'rgba(10,20,50,0.62)',
                borderColor: 'rgba(251,191,36,0.38)',
              }}
              aria-live="polite"
              aria-label={`Service: ${svc.day} ${svc.time}`}
            >
              {/* shimmer sweep */}
              <div className="badge-shimmer absolute inset-0 pointer-events-none" aria-hidden="true" />
              <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 relative z-10" aria-hidden="true" />
              <span className="font-inter text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap relative z-10">
                <span className="text-white/90">Service: </span>
                <span className="text-amber-300">{svc.day}</span>
                <span className="mx-1.5 text-amber-600/60">&bull;</span>
                <span className="text-white/90">{svc.time}</span>
              </span>
              <div className="flex gap-1 ml-0.5 relative z-10">
                {SERVICES.map((_, i) => (
                  <span
                    key={i}
                    className={`block rounded-full transition-all duration-300 ${
                      i === badgeIndex
                        ? 'w-3 h-1.5 bg-amber-400'
                        : 'w-1.5 h-1.5 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-32 sm:pt-36 pb-24 sm:pb-28">

        {/* Welcome to — Inter italic, lighter weight */}
        <p
          className={`font-inter font-light italic text-white text-white/85 leading-tight mb-3 sm:mb-4 transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '0.12s',
            fontSize: 'clamp(18px, 3.5vw, 32px)',
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
            letterSpacing: '0.02em',
          }}
        >
          Welcome to
        </p>

        {/* Mega Church — same Poppins bold as every other h2 heading, gold gradient, clean glow */}
        <h1
          className={`font-poppins font-bold leading-[1.0] tracking-tight select-none transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '0.28s',
            fontSize: 'clamp(52px, 12vw, 128px)',
            background: 'linear-gradient(180deg, #fef3c7 0%, #fbbf24 28%, #f59e0b 60%, #d97706 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            /* Minimal, elegant glow — no heavy 3D */
            filter: 'drop-shadow(0 0 18px rgba(251,191,36,0.28))',
          }}
        >
          Mega Church
        </h1>

        {/* JCWMM — Poppins SemiBold, silver-white gradient, wider spacing, gold dividers */}
        <div
          className={`mt-5 sm:mt-6 flex items-center justify-center gap-3 sm:gap-5 md:gap-7 w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.44s' }}
          aria-hidden="false"
        >
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(251,191,36,0.55))' }}
          />
          <span
            className="font-poppins font-semibold whitespace-nowrap select-none"
            style={{
              fontSize: 'clamp(20px, 5vw, 46px)',
              letterSpacing: '0.42em',
              background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 45%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.22))',
              paddingRight: '0.42em', /* compensate for letter-spacing on last char */
            }}
          >
            JCWMM
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: 'linear-gradient(to left, transparent, rgba(251,191,36,0.55))' }}
          />
        </div>

        {/* Tagline — Inter Medium, uppercase, soft white */}
        <p
          className={`mt-7 sm:mt-8 font-inter font-medium text-white text-white/65 uppercase tracking-[0.18em] sm:tracking-[0.24em] text-center transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '0.58s',
            fontSize: 'clamp(9px, 1.8vw, 13px)',
          }}
        >
          Sharing God&apos;s Word&nbsp;&bull;&nbsp;Transforming Lives&nbsp;&bull;&nbsp;Walking in Faith
        </p>

        {/* Description — Inter Regular, calm line-height */}
        <p
          className={`mt-4 sm:mt-5 font-inter font-normal text-white/60 leading-[1.8] max-w-[min(92vw,580px)] mx-auto text-center transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '0.68s',
            fontSize: 'clamp(13px, 2vw, 17px)',
          }}
        >
          A place where lives are transformed through God&apos;s Word, prayer,
          worship, and the saving grace of Jesus Christ.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.82s' }}
        >
          <button
            onClick={() => scrollTo('#services')}
            className="hero-btn-primary group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-white font-poppins font-semibold w-full sm:w-auto min-w-[172px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            style={{ fontSize: 'clamp(13px, 1.8vw, 15px)' }}
            aria-label="Join Worship service"
          >
            <Play className="w-4 h-4 fill-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            Join Worship
          </button>

          <button
            onClick={() => scrollTo('#live')}
            className="hero-btn-glass group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-white font-poppins font-semibold w-full sm:w-auto min-w-[172px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            style={{ fontSize: 'clamp(13px, 1.8vw, 15px)' }}
            aria-label="Watch Live stream"
          >
            <Radio className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            Watch Live
          </button>

          <button
            onClick={() => scrollTo('#prayer')}
            className="hero-btn-gold group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-white font-poppins font-semibold w-full sm:w-auto min-w-[172px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            style={{ fontSize: 'clamp(13px, 1.8vw, 15px)' }}
            aria-label="Submit a prayer request"
          >
            <Heart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            Prayer Request
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-10 sm:mt-12 flex items-center justify-center gap-0 transition-all duration-700 ${
            mounted ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.96s' }}
          aria-label="Ministry statistics"
        >
          {[
            { value: '100+', label: 'Members' },
            { value: '18+', label: 'Years of Ministry' },
            { value: '2', label: 'Weekly Services' },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-5 sm:px-8 md:px-10 py-2">
                <div
                  className="font-poppins font-bold"
                  style={{
                    fontSize: 'clamp(22px, 5vw, 40px)',
                    background: 'linear-gradient(180deg, #fcd34d 0%, #f59e0b 60%, #d97706 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-inter text-white text-white/45 uppercase tracking-widest mt-1"
                  style={{ fontSize: 'clamp(8px, 1.5vw, 11px)' }}
                >
                  {stat.label}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div
                  className="w-px self-stretch flex-shrink-0"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent, rgba(251,191,36,0.28), transparent)',
                    minHeight: '36px',
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 transition-all duration-700 ${
          mounted ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{ animationDelay: '1.3s' }}
      >
        <span className="text-white/20 font-inter uppercase tracking-[0.22em]" style={{ fontSize: '9px' }}>
          Scroll
        </span>
        <button
          onClick={() => scrollTo('#pastor')}
          className="scroll-indicator p-1 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-5 h-5 text-white/25" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
