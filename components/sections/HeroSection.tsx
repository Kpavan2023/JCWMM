'use client';

import Image from 'next/image';
import { Play, Heart, Radio } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero-section relative min-h-[100svh] overflow-hidden bg-black text-white"
      aria-label="Jesus Christ Word Miracles Ministry Hero"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/MegaChruch_back.jpeg"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(4,8,20,0.74) 0%, rgba(4,8,20,0.55) 38%, rgba(4,8,20,0.62) 72%, rgba(4,8,20,0.88) 100%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 60% at 50% 48%, rgba(251,191,36,0.07) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 52%, rgba(0,0,0,0.48) 100%)',
          }}
        />
      </div>

      {/* =====================================================
          SINGLE HERO SLIDE
      ===================================================== */}

      <div className="relative z-10 min-h-[100svh]">
        <div className="hero-slide-safe-area">
          <div className="hero-slide-container">

            {/* =================================================
                COUPLES IMAGE
            ================================================= */}

            <div className="hero-founder-image">
              <div className="hero-founder-frame">

                <div
                  className="absolute inset-[8%] rounded-full blur-3xl opacity-25"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(251,191,36,0.35), transparent 70%)',
                  }}
                  aria-hidden="true"
                />

                <div className="hero-founder-image-inner">
                  <Image
                    src="/images/both_pic.png"
                    alt="Prophet Judah Asher and Prophetess Judah Praisy"
                    width={900}
                    height={1100}
                    priority
                    sizes="(max-width: 767px) 78vw, (max-width: 1023px) 52vw, 480px"
                    className="hero-founder-photo"
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/70 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  <div
                    className="absolute inset-2 rounded-[20px] border border-white/10 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                FOUNDER CONTENT
            ================================================= */}

            <div className="hero-founder-content">

              <p className="hero-eyebrow">
                Founders • JCWMM
              </p>

              <p className="hero-founder-welcome">
                Welcome to
              </p>

              <h1 className="hero-founder-jcwmm">
                JCWMM
              </h1>

              {/* Centered divider */}
              <div
                className="hero-founder-welcome-divider"
                aria-hidden="true"
              />

              <p className="hero-role">
                Prophet
              </p>

              <h2 className="hero-founder-name">
                Judah Asher
              </h2>

              {/* Centered divider */}
              <div
                className="hero-name-divider"
                aria-hidden="true"
              >
                <span />
                <b>&amp;</b>
                <span />
              </div>

              <p className="hero-role">
                Prophetess
              </p>

              <h2 className="hero-founder-name">
                Judah Praisy
              </h2>

              <p className="hero-ministry-name">
                Jesus Christ Word Miracles Ministry
              </p>

              <div className="hero-mission-line">
                <span />

                <p>
                  Sharing God&apos;s Word • Transforming Lives • Walking in Faith
                </p>

                <span />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA DOCK
        ===================================================== */}

        <div className="hero-cta-dock">
          <div className="hero-cta-row">

            <button
              type="button"
              onClick={() => scrollTo('#services')}
              className="hero-premium-btn hero-premium-btn-gold"
              aria-label="Join Worship service"
            >
              <Play
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                aria-hidden="true"
              />
              <span>Join Worship</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#live')}
              className="hero-premium-btn hero-premium-btn-glass"
              aria-label="Watch Live stream"
            >
              <Radio
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                aria-hidden="true"
              />
              <span>Watch Live</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#prayer')}
              className="hero-premium-btn hero-premium-btn-outline"
              aria-label="Prayer Request"
            >
              <Heart
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                aria-hidden="true"
              />

              <span className="hidden sm:inline">
                Prayer Request
              </span>

              <span className="sm:hidden">
                Prayer
              </span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}