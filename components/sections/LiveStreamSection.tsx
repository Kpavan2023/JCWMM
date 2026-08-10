'use client';

import { useEffect, useState } from 'react';
import { Radio, ExternalLink, Clock } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';

export default function LiveStreamSection() {
  const [isLive, setIsLive] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const checkLive = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const min = now.getMinutes();
      const totalMin = hour * 60 + min;
      const isSunday = day === 0 && totalMin >= 660 && totalMin <= 780;
      const isSaturday = day === 6 && totalMin >= 1080 && totalMin <= 1200;
      setIsLive(isSunday || isSaturday);
    };

    const calcCountdown = () => {
      const now = new Date();
      const nextSunday = new Date(now);
      const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(11, 0, 0, 0);
      const diff = nextSunday.getTime() - now.getTime();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    checkLive();
    calcCountdown();
    const interval = setInterval(() => {
      checkLive();
      calcCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live" className="py-24 relative overflow-hidden bg-royal-950">
      <div className="absolute inset-0 stars-bg opacity-20" />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{ background: 'linear-gradient(0deg, rgba(251,191,36,0.3) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-900/30 text-red-400 text-xs font-semibold font-inter uppercase tracking-wider border border-red-800/40 mb-4">
            Live Stream
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-4">
            {isLive ? (
              <>
                <span className="text-red-400">Live</span> Right Now
              </>
            ) : (
              <>
                Next <span className="text-gradient-gold">Service</span>
              </>
            )}
          </h2>
        </SectionReveal>

        {isLive ? (
          <SectionReveal delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-4 h-4 rounded-full bg-red-500 live-dot" />
                <Radio className="w-6 h-6 text-red-400 animate-pulse" />
                <span className="font-poppins font-bold text-2xl text-red-400">LIVE NOW</span>
              </div>
              <p className="font-inter text-royal-300 text-lg mb-8">
                Join us live on YouTube right now. The service is in progress!
              </p>
              <a
                href="https://www.youtube.com/@JCWMMOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-poppins font-bold text-lg shadow-xl shadow-red-900/40 transition-all hover:scale-105"
              >
                <Radio className="w-6 h-6" />
                Watch Live Now
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </SectionReveal>
        ) : (
          <SectionReveal delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 text-gold-400 mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-inter text-sm font-medium">Next service starts in</span>
              </div>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-4 max-w-xl mx-auto mb-10">
                {[
                  { value: countdown.days, label: 'Days' },
                  { value: countdown.hours, label: 'Hours' },
                  { value: countdown.minutes, label: 'Minutes' },
                  { value: countdown.seconds, label: 'Seconds' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div
                      className="aspect-square w-full max-w-[72px] sm:max-w-none mx-auto rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center"
                      style={{ animation: 'countdownPulse 1s ease-in-out infinite' }}
                    >
                      <span className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white tabular-nums">
                        {String(value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="font-inter text-royal-400 text-[10px] sm:text-xs mt-2 block uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-inter text-royal-300 mb-4">Sunday Worship Service • 11:00 AM</p>

              <a
                href="https://www.youtube.com/@JCWMMOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full blue-gradient text-white font-poppins font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
