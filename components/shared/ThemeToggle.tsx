'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;

    if (t === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem('jcwmm-theme') as Theme | null;

    // Dark is the default theme.
    const initial: Theme = stored ?? 'dark';

    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';

    setTheme(next);
    applyTheme(next);
    localStorage.setItem('jcwmm-theme', next);
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 group"
      style={{
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Sun
        className={`w-4 h-4 absolute transition-all duration-300 ${
          theme === 'dark'
            ? 'opacity-100 rotate-0 scale-100 text-gold-400'
            : 'opacity-0 rotate-90 scale-0'
        }`}
      />

      <Moon
        className={`w-4 h-4 absolute transition-all duration-300 ${
          theme === 'light'
            ? 'opacity-100 rotate-0 scale-100 text-royal-700'
            : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
    </button>
  );
}