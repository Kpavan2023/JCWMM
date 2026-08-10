'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { TESTIMONIES } from '@/lib/church-data';

export default function TestimoniesSection() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 250);
  };

  const next = () => goTo((current + 1) % TESTIMONIES.length);
  const prev = () => goTo((current - 1 + TESTIMONIES.length) % TESTIMONIES.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  });

  const testimony = TESTIMONIES[current];

  return (
    <section id="testimonies" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
            Testimonies
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-royal-900 mb-4">
            Lives <span className="text-gradient-blue">Transformed</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories of God's power changing lives through our church family.
          </p>
        </SectionReveal>

        {/* Main carousel */}
        <SectionReveal delay={100} className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-royal-100/50 p-10 sm:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-royal-100 -z-0" />
            <div
              className={`relative z-10 transition-all duration-250 ${
                transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="font-inter text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimony.testimony}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400/40 flex-shrink-0">
                  <Image
                    src={testimony.image}
                    alt={testimony.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-royal-900">{testimony.name}</div>
                  <div className="font-inter text-gray-500 text-sm">{testimony.role}</div>
                  <div className="font-inter text-royal-600 text-xs">{testimony.years} member</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimony"
              className="w-10 h-10 rounded-full bg-royal-100 hover:bg-royal-200 flex items-center justify-center text-royal-700 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`View testimony ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2.5 bg-royal-700'
                      : 'w-2.5 h-2.5 bg-royal-200 hover:bg-royal-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimony"
              className="w-10 h-10 rounded-full bg-royal-100 hover:bg-royal-200 flex items-center justify-center text-royal-700 transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </SectionReveal>

        {/* Avatar row */}
        <SectionReveal delay={200} className="flex justify-center gap-3">
          {TESTIMONIES.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`${t.name}'s testimony`}
              className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-royal-700 ring-offset-2 scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </button>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
