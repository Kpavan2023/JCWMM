import { Sun, Moon, Calendar, MapPin } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { CHURCH_INFO } from '@/lib/church-data';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-royal-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 stars-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-royal-800/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full jcwmm-yellow-heading text-xs font-semibold font-inter uppercase tracking-wider border border-gold-800/50 mb-4">
            Join Us
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-4">
            Weekly <span className="jcwmm-yellow-heading">Services</span>
          </h2>
          <p className="font-inter text-royal-300 text-lg max-w-2xl mx-auto">
            Come and experience the presence of God with us. Everyone is welcome.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {CHURCH_INFO.services.map((service, index) => {
            const Icon = service.icon === 'sun' ? Sun : Moon;
            return (
              <SectionReveal key={service.id} delay={index * 150}>
                <div className="relative group rounded-3xl overflow-hidden border border-royal-700/50 bg-gradient-to-br from-royal-900 to-royal-800 p-8 shadow-2xl card-hover">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-royal-700/30 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mb-6 shadow-lg shadow-gold-900/40 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gold-400" />
                      <span className="font-inter text-gold-400 text-sm font-medium">{service.day}</span>
                    </div>
                    <h3 className="font-poppins font-bold text-2xl text-white mb-3">{service.name}</h3>
                    <div className="inline-flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                      <span className="font-inter text-white font-semibold">{service.time}</span>
                    </div>
                    <p className="font-inter text-royal-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Location */}
        <SectionReveal className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <div className="flex items-center gap-2 text-gold-400">
              <MapPin className="w-5 h-5" />
              <span className="font-inter font-medium text-white">
                {CHURCH_INFO.address.full}
              </span>
            </div>

            <a
              href={CHURCH_INFO.location.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-white font-poppins font-semibold text-sm transition-colors duration-200"
            >
              Get Directions
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
