'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
  background: 'linear-gradient(135deg, #050505 0%, #0b0b0b 50%, #181818 100%)',
}}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24 animate-float">
          <div className="absolute inset-0 rounded-full bg-gold-400/20 animate-ping" />
          <div className="relative w-24 h-24 rounded-full bg-white/10 border-2 border-gold-400/50 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/IMG_6306_(3).PNG"
              alt="JCWMM Logo"
              width={80}
              height={80}
              className="object-contain rounded-full"
              priority
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-poppins font-bold text-2xl text-white tracking-wide">JCWMM</h1>
          <p className="text-gold-300 text-sm mt-1 font-inter">Jesus Christ Word Miracles Ministry</p>
        </div>
        <div className="flex gap-1.5 mt-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold-400"
              style={{
                animation: `pulse 1.2s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
