'use client';

import { Phone, Mail, MapPin, Youtube, Facebook, Instagram, Send, Twitter, ExternalLink } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { CHURCH_INFO } from '@/lib/church-data';

const socialLinks = [
  {
    icon: Youtube,
    href: CHURCH_INFO.social.youtube,
    label: 'YouTube',
    color: 'bg-red-600 hover:bg-red-700',
    description: 'Watch Sermons',
  },
  {
    icon: Facebook,
    href: CHURCH_INFO.social.facebook,
    label: 'Facebook',
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'Follow Us',
  },
  {
    icon: Instagram,
    href: CHURCH_INFO.social.instagram,
    label: 'Instagram',
    color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500',
    description: 'See Our Moments',
  },
  {
    icon: Send,
    href: CHURCH_INFO.social.telegram,
    label: 'Telegram',
    color: 'bg-sky-500 hover:bg-sky-600',
    description: 'Join Channel',
  },
  {
    icon: Twitter,
    href: CHURCH_INFO.social.twitter,
    label: 'X (Twitter)',
    color: 'bg-slate-800 hover:bg-slate-900',
    description: 'Follow Updates',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
            Reach Us
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-royal-900 mb-4">
            Get in <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out, visit us, or connect on social media.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {/* Contact Info */}
          <SectionReveal delay={100} className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-royal-100/50 border border-royal-50 h-full">
              <h3 className="font-poppins font-bold text-xl text-royal-900 mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl blue-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-royal-900 text-sm mb-1">Phone</p>
                    <a href={`tel:${CHURCH_INFO.contact.phone1}`} className="text-gray-600 hover:text-royal-700 text-sm font-inter transition-colors block">
                      {CHURCH_INFO.contact.phone1}
                    </a>
                    <a href={`tel:${CHURCH_INFO.contact.phone2}`} className="text-gray-600 hover:text-royal-700 text-sm font-inter transition-colors block">
                      {CHURCH_INFO.contact.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-royal-900 text-sm mb-1">Email</p>
                    <a href={`mailto:${CHURCH_INFO.contact.email}`} className="text-gray-600 hover:text-royal-700 text-sm font-inter transition-colors">
                      {CHURCH_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-royal-900 text-sm mb-1">Address</p>
                   <a
  href={CHURCH_INFO.location.directions}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 hover:text-royal-700 text-sm font-inter leading-relaxed transition-colors"
>
  {CHURCH_INFO.address.full}
</a>
                  </div>
                </div>
              </div>

              <a
                href={CHURCH_INFO.location.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-xl blue-gradient text-white font-poppins font-semibold text-sm hover:opacity-90 transition-all hover:scale-[1.01] shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </SectionReveal>

          {/* Map */}
          <SectionReveal delay={200} className="lg:col-span-2">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-royal-100/50 border border-royal-50 h-full min-h-[400px]">
              <iframe
                title="JCWMM Church Location"
                src={CHURCH_INFO.location.embed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>

        {/* Social Media */}
        <SectionReveal delay={200}>
          <div className="text-center mb-8">
            <h3 className="font-poppins font-bold text-2xl text-royal-900 mb-2">Follow & Connect</h3>
            <p className="font-inter text-gray-600">Stay connected with us on all platforms</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label, color, description }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} - ${description}`}
                className={`group flex items-center gap-3 px-6 py-3.5 rounded-2xl text-white font-inter font-medium text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${color}`}
              >
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold">{label}</div>
                  <div className="text-white/70 text-xs">{description}</div>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
