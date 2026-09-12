'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { CHURCH_INFO } from '@/lib/church-data';
import ThemeToggle from '@/components/shared/ThemeToggle';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  {
    label: 'More',
    href: '#',
    children: [
      { label: 'Plan Your Visit', href: '/plan-your-visit' },
      { label: 'Prayer Request', href: '#prayer' },
      { label: 'Testimonies', href: '#testimonies' },
      { label: 'Live Stream', href: '#live' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-royal-900/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-3" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0" aria-label="JCWMM Home">
          <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gold-400/60 shadow-md">
            <Image
              src="/images/both_pic.png"
              alt="JCWMM Logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span
              className={`font-poppins font-bold text-lg leading-tight block transition-colors duration-300 ${
                scrolled ? 'text-royal-900' : 'text-white'
              }`}
            >
              JCWMM
            </span>
            <span
              className={`text-xs font-inter leading-tight block transition-colors duration-300 ${
                scrolled ? 'text-royal-600' : 'text-blue-200'
              }`}
            >
              Jesus Christ Word Miracles Ministry
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium font-inter transition-all duration-200 hover:bg-royal-50 ${
                    scrolled ? 'text-royal-800 hover:text-royal-700' : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-royal-100 py-2 z-50">
                    {link.children.map((child) => (
                      child.href.startsWith('/') ? (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-royal-800 hover:bg-royal-50 hover:text-royal-700 font-inter transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.href)}
                          className="w-full text-left block px-4 py-2.5 text-sm text-royal-800 hover:bg-royal-50 hover:text-royal-700 font-inter transition-colors"
                        >
                          {child.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium font-inter transition-all duration-200 ${
                    scrolled
                      ? 'text-royal-800 hover:text-royal-700 hover:bg-royal-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* CTA Buttons — visible on all screen sizes */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/give-now"
            className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-royal-600 hover:bg-royal-500 text-white font-poppins font-semibold text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Give Now
          </Link>
          <Link
            href="/plan-your-visit"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-full gold-gradient text-white font-poppins font-semibold text-sm shadow-md hover:shadow-gold-400/40 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Plan Your Visit
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-royal-800 hover:bg-royal-50' : 'text-white hover:bg-white/10'
          }`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className={`px-4 py-4 space-y-1 backdrop-blur-md border-t ${
          scrolled
            ? 'bg-white/98 border-royal-100'
            : 'bg-black/95 border-white/10'
        }`}>
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className={`text-xs font-semibold uppercase tracking-wider px-3 pt-3 pb-1 ${scrolled ? 'text-royal-400' : 'text-gold-400'}`}>More</p>
                {link.children.map((child) =>
                  child.href.startsWith('/') ? (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={`block px-3 py-2.5 text-sm rounded-lg font-inter transition-colors ${scrolled ? 'text-royal-800 hover:bg-royal-50' : 'text-white hover:bg-white/10'}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child.href)}
                      className={`w-full text-left px-3 py-2.5 text-sm rounded-lg font-inter transition-colors ${scrolled ? 'text-royal-800 hover:bg-royal-50' : 'text-white hover:bg-white/10'}`}
                    >
                      {child.label}
                    </button>
                  )
                )}
              </div>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg font-inter transition-colors ${scrolled ? 'text-royal-800 hover:bg-royal-50' : 'text-white hover:bg-white/10'}`}
              >
                {link.label}
              </button>
            )
          )}
          <div className={`pt-3 border-t space-y-3 ${scrolled ? 'border-royal-100' : 'border-white/10'}`}>
            <div className="flex items-center justify-between px-3">
              <span className={`text-xs font-semibold uppercase tracking-wider ${scrolled ? 'text-royal-400' : 'text-gold-400'}`}>Theme</span>
              <ThemeToggle />
            </div>
            <Link
              href="/give-now"
              className={`block w-full text-center px-5 py-3 rounded-full font-poppins font-semibold text-sm transition-colors ${
                scrolled
                  ? 'bg-royal-600 text-white hover:bg-royal-500'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Give Now
            </Link>
            <Link
              href="/plan-your-visit"
              className="block w-full text-center px-5 py-3 rounded-full gold-gradient text-white font-poppins font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
