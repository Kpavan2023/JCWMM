'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Youtube, Facebook, Instagram, Send, Twitter, Clock } from 'lucide-react';
import { CHURCH_INFO } from '@/lib/church-data';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Sermons', href: '#sermons' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Plan Your Visit', href: '/plan-your-visit' },
    { label: 'Give Now', href: '/give-now' },
    { label: 'Prayer Request', href: '#prayer' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Youtube, href: CHURCH_INFO.social.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: Facebook, href: CHURCH_INFO.social.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: CHURCH_INFO.social.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Send, href: CHURCH_INFO.social.telegram, label: 'Telegram', color: 'hover:bg-sky-500' },
    { icon: Twitter, href: CHURCH_INFO.social.twitter, label: 'X (Twitter)', color: 'hover:bg-slate-700' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-royal-950 text-white" role="contentinfo">
      {/* Wave top */}
      <div className="h-1 bg-gradient-to-r from-royal-700 via-gold-500 to-royal-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400/50">
                <Image src="/images/both_pic.png" alt="JCWMM Logo" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <span className="font-poppins font-bold text-xl text-white block">JCWMM</span>
                <span className="text-royal-300 text-xs font-inter">Jesus Christ Word Miracles Ministry</span>
              </div>
            </div>
            <p className="text-royal-300 text-sm leading-relaxed font-inter mb-5">
              {CHURCH_INFO.tagline}
            </p>
            <p className="text-royal-400 text-xs leading-relaxed font-inter italic">
              "{CHURCH_INFO.mission}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold-400 inline-block" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-royal-300 hover:text-gold-400 text-sm font-inter transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-400/50 group-hover:bg-gold-400 transition-colors" />
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-royal-300 hover:text-gold-400 text-sm font-inter transition-colors duration-200 flex items-center gap-1.5 group text-left"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-400/50 group-hover:bg-gold-400 transition-colors" />
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold-400 inline-block" />
              Service Times
            </h3>
            <div className="space-y-4">
              {CHURCH_INFO.services.map((service) => (
                <div key={service.id} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm font-poppins">{service.name}</p>
                    <p className="text-royal-300 text-xs font-inter">{service.day} • {service.time}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-gold-300 text-xs font-inter text-center">
                  All are welcome. Come as you are.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gold-400 inline-block" />
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+919700545494"
                className="flex items-start gap-3 group"
                aria-label="Call +91 9700545494"
              >
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-royal-300 group-hover:text-gold-400 text-sm font-inter transition-colors">+91 9700545494</p>
              </a>
              <a
                href="tel:+918686861836"
                className="flex items-start gap-3 group"
                aria-label="Call +91 8686861836"
              >
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-royal-300 group-hover:text-gold-400 text-sm font-inter transition-colors">+91 8686861836</p>
              </a>
              <a
                href={`mailto:${CHURCH_INFO.contact.email}`}
                className="flex items-start gap-3 group"
                aria-label={`Email ${CHURCH_INFO.contact.email}`}
              >
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-royal-300 group-hover:text-gold-400 text-sm font-inter transition-colors">{CHURCH_INFO.contact.email}</p>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-royal-300 text-sm font-inter">{CHURCH_INFO.address.full}</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="mt-5">
              <p className="text-royal-400 text-xs font-inter mb-3">Follow Us</p>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 ${color}`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-royal-800 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-royal-400 text-xs font-inter">
          <p>&copy; {year} Jesus Christ Word Miracles Ministry (JCWMM). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button className="hover:text-gold-400 transition-colors">Privacy Policy</button>
            <span className="text-royal-700">|</span>
            <button className="hover:text-gold-400 transition-colors">Terms of Service</button>
            <span className="text-royal-700">|</span>
            <Link href="/admin/login" className="hover:text-gold-400 transition-colors">
              Admin
            </Link>
          </div>
          <p className="text-royal-500">
            Designed with ❤️ for the Glory of God
          </p>
        </div>
      </div>
    </footer>
  );
}
