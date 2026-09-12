import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { EVENTS } from '@/lib/church-data';

const featuredEvents = EVENTS.filter((event) => event.featured);
const otherEvents = EVENTS.filter((event) => !event.featured);

export default function EventsSection() {
return ( 
<section id="events" className="py-24 section-gradient"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <SectionReveal className="text-center mb-16"> <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
What's Happening </span>

      <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-royal-900 mb-4">
        Upcoming <span className="text-gradient-blue">Events</span>
      </h2>

      <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
        Don't miss out on what God is doing through our church.
      </p>
    </SectionReveal>

    {featuredEvents.map((event) => (
      <SectionReveal key={event.id} delay={100} className="mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="relative aspect-[16/6] min-h-[280px]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              priority
              sizes="100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-royal-900/90 via-royal-900/60 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center p-8 sm:p-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full gold-gradient text-white text-xs font-inter font-semibold">
                  Featured Event
                </span>

                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-inter">
                  {event.category}
                </span>
              </div>

              <h3 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                {event.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-white/80 text-sm font-inter mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  {event.date}
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gold-400" />
                  {event.time}
                </div>
              </div>

              <p className="text-white/70 font-inter leading-relaxed mb-6 text-sm sm:text-base">
                {event.description}
              </p>

              {/*
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full gold-gradient text-white font-poppins font-semibold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
                Register Now <ArrowRight className="w-4 h-4" />
              </button>
              */}
            </div>
          </div>
        </div>
      </SectionReveal>
    ))}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {otherEvents.map((event, index) => (
        <SectionReveal key={event.id} delay={index * 100}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-royal-100/50 border border-gray-100 card-hover group h-full flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/40 via-transparent to-transparent" />

              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full bg-royal-700 text-white text-xs font-inter">
                  {event.category}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 font-inter mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-royal-500" />
                  {event.date}
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-royal-500" />
                  {event.time}
                </div>
              </div>

              <h3 className="font-poppins font-semibold text-lg text-royal-900 mb-3 leading-snug">
                {event.title}
              </h3>

              <p className="font-inter text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                {event.description}
              </p>

              <button className="flex items-center gap-2 text-royal-700 font-inter font-medium text-sm hover:gap-3 transition-all duration-200 group/btn mt-auto">
                Register
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  </div>
</section>

);
}
