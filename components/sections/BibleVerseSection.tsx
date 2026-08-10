'use client';

import { useEffect, useState } from 'react';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { BIBLE_VERSES } from '@/lib/church-data';

export default function BibleVerseSection() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % BIBLE_VERSES.length);
  const prev = () => goTo((current - 1 + BIBLE_VERSES.length) % BIBLE_VERSES.length);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  });

  const verse = BIBLE_VERSES[current];

  return (
    <section id="verse" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 blue-gradient" />
      <div className="absolute inset-0 stars-bg opacity-30" />
      <div
        className="absolute bottom-0 left-0 right-0 h-48 opacity-20"
        style={{ background: 'linear-gradient(0deg, rgba(251,191,36,0.5) 0%, transparent 100%)' }}
      />

      {/* Cross watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 100 120" className="w-80 h-80 opacity-[0.05] fill-white">
          <rect x="40" y="0" width="20" height="120" />
          <rect x="0" y="30" width="100" height="20" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-gold-400" />
          </div>
        </div>

        <span className="inline-block text-gold-400 text-xs font-semibold font-inter uppercase tracking-widest mb-8">
          Bible Verse of the Day
        </span>

        {/* Verse */}
        <div
          className={`transition-all duration-300 ${transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <blockquote className="font-poppins text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 italic">
            {verse.verse}
          </blockquote>
          <cite className="font-inter text-gold-400 text-xl font-semibold not-italic">
            — {verse.reference}
          </cite>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Previous verse"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {BIBLE_VERSES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to verse ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2.5 bg-gold-400'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next verse"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
