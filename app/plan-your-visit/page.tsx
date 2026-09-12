import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Clock, Shirt, Baby, Timer, Phone, ChevronDown,
  Calendar, Heart, Users, CheckCircle, ArrowLeft, ArrowRight,
  Car, Mail,
} from 'lucide-react';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import ScrollProgress from '@/components/shared/ScrollProgress';
import ThemeToggle from '@/components/shared/ThemeToggle';
import { CHURCH_INFO } from '@/lib/church-data';
import PlanVisitAccordion from '@/components/plan-visit/PlanVisitAccordion';

const MAPS_URL =
  'https://www.google.com/maps/place/JCWMM+Church/@17.4353984,78.4490905,21z/data=!4m6!3m5!1s0x3bcb910006dd8d83:0xe60192921bfababe!8m2!3d17.4355138!4d78.4493678!16s%2Fg%2F11zx6s8qld!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D';

export const metadata: Metadata = {
  title: 'Plan Your Visit | Jesus Christ Word Miracles Ministry (JCWMM)',
  description:
    'Planning your first visit to JCWMM? Find everything you need to know: service times, parking, dress code, children\'s ministry, and what to expect.',
  openGraph: {
    title: 'Plan Your Visit | JCWMM',
    description: 'Everything you need to know before visiting Jesus Christ Word Miracles Ministry.',
  },
};

const faqs = [
  {
    id: 'what-to-expect',
    icon: <CheckCircle className="w-5 h-5 text-royal-600" />,
    question: 'What should I expect during the service?',
    answer: `Our Sunday Worship Service is a warm, Spirit-filled gathering that typically lasts about two hours. You can expect:

• **Worship & Praise** (30–40 min) — Our choir and worship team lead anointed praise and worship that ushers you into God's presence.
• **Prayer** — We take time to pray corporately and personally, believing God hears and answers.
• **The Word** — Our pastor delivers a clear, powerful, and practical message from the Bible.
• **Altar Call** — An invitation for salvation, healing, or rededication is given.
• **Fellowship** — After the service, we love to connect, share a meal, and pray for one another.

We are a joyful and welcoming congregation. Expect warmth, love, and a genuine encounter with God.`,
  },
  {
    id: 'parking',
    icon: <Car className="w-5 h-5 text-royal-600" />,
    question: 'Is there parking available?',
    answer: `Yes! We have parking available at the church premises and nearby areas for your convenience.

• **On-site Parking** — Limited spaces are available in our church compound (first come, first served).
• **Street Parking** — Ample street parking is available around the church.
• **Arrival Tip** — We recommend arriving 10–15 minutes early, especially on special service days, to find a comfortable parking spot and settle in.

Our ushers will be happy to guide you from the parking area to the church entrance.`,
  },
  {
    id: 'dress-code',
    icon: <Shirt className="w-5 h-5 text-royal-600" />,
    question: 'What should I wear?',
    answer: `At JCWMM, we believe you should **come as you are**. There is no strict dress code — what matters most is your heart, not your outfit.

Most of our congregation dresses in smart-casual to semi-formal attire:

• **Smart-casual** — jeans, nice tops, kurtas, or casual dresses are perfectly fine.
• **Traditional wear** — sarees, salwars, or traditional outfits are warmly welcomed.
• **Formal/Sunday Best** — If you prefer to dress up, you're absolutely welcome to!

We want you to feel comfortable and free to worship without any pressure. God looks at the heart.`,
  },
  {
    id: 'children',
    icon: <Baby className="w-5 h-5 text-royal-600" />,
    question: "Is there Sunday School or Children's Ministry?",
    answer: `Absolutely! We love children and have a dedicated Children's Ministry just for them.

• **Children's Church** runs simultaneously with the main service for ages 3–12 years.
• **Age-appropriate Bible lessons**, worship, interactive activities, and games.
• **Safe, loving environment** — all our children's workers are vetted, trained, and passionate about kids.
• **Nursery care** is available for infants and toddlers (ages 0–2) so parents can worship freely.
• **Teens & Youth** are welcome to stay in the main service or join our Youth Fellowship.

Simply bring your children to the children's welcome desk when you arrive — our team will lovingly take care of them!`,
  },
  {
    id: 'service-length',
    icon: <Timer className="w-5 h-5 text-royal-600" />,
    question: 'How long is the service?',
    answer: `Our **Sunday Worship Service** runs from **11:00 AM to approximately 1:00 PM** — about two hours in total.

• **Saturday Prayer Service** runs from **6:00 PM to 8:00 PM**.
• Services can occasionally run a little longer during special events or revival meetings — but you're always free to stay or go as needed, no pressure!

We encourage you to stay for the full service to receive all that God has for you. After the service, many members enjoy fellowship and prayer in a relaxed environment — you're warmly invited to stay and connect.`,
  },
  {
    id: 'contact-before',
    icon: <Phone className="w-5 h-5 text-royal-600" />,
    question: 'How can I contact someone before visiting?',
    answer: `We'd love to hear from you before your first visit! Here's how you can reach us:

• **Phone/WhatsApp** — Call or message us at ${CHURCH_INFO.contact.phone1} or ${CHURCH_INFO.contact.phone2}
• **Email** — Write to us at ${CHURCH_INFO.contact.email}
• **Social Media** — Connect with us on YouTube, Facebook, or Instagram (@JCWMM)
• **WhatsApp Chat** — Use the chat button on our website for instant connection.

Our team will be happy to answer any questions, help you find the church, or pray with you before your visit. We want you to feel completely at ease when you walk through our doors!`,
  },
  {
    id: 'first-time',
    icon: <Heart className="w-5 h-5 text-royal-600" />,
    question: 'What happens when I arrive for the first time?',
    answer: `Welcome! As a first-time visitor, you will feel warmly received from the moment you step in.

• **Greeters & Ushers** will welcome you at the entrance and help you find your seat.
• **Welcome Desk** — Look for our clearly marked welcome desk where our hospitality team will greet you, give you a welcome card, and answer any questions.
• **Seating** — We will guide you to comfortable seating. Feel free to sit anywhere you like.
• **Children's Check-in** — Our team will help you register your children for Children's Church.
• **No pressure** — You won't be asked to speak, introduce yourself publicly, or give an offering as a first-time guest. Just come and receive!

After the service, our pastor and leadership team make time to greet visitors personally. We truly look forward to meeting you!`,
  },
  {
    id: 'giving',
    icon: <CheckCircle className="w-5 h-5 text-royal-600" />,
    question: 'Is there an offering? Am I expected to give?',
    answer: `As a visitor, you are never expected or obligated to give. The offering is for members who wish to participate in the ministry of the church.

We take an offering during the service as part of our worship and obedience to God's Word. Giving bags or plates will be passed around, but visitors can simply let them pass by — there is absolutely no pressure.

If you later feel led to give and support the ministry, you can do so through the offering bag during service, at the welcome desk, or by asking our team about bank transfer details. We are grateful for every gift given from the heart!`,
  },
];

const visitSteps = [
  {
    step: '01',
    title: 'Plan Your Route',
    description: 'Find us in Hyderabad, Telangana. Use Google Maps for directions — our ushers will guide you from the car park.',
    icon: MapPin,
  },
  {
    step: '02',
    title: 'Arrive Early',
    description: 'Come 10–15 minutes before the service starts to settle in, meet our welcome team, and get your children registered.',
    icon: Clock,
  },
  {
    step: '03',
    title: 'Be Welcomed',
    description: 'Our greeting team will receive you at the door with warmth. You\'ll receive a welcome pack and be guided to your seat.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Worship & Experience God',
    description: 'Enjoy a powerful time of praise, worship, prayer, and the Word. Relax — you\'re in a safe, loving community.',
    icon: Heart,
  },
];

export default function PlanYourVisitPage() {
  return (
    <>
      <ScrollProgress />
      {/* Minimal top bar — no navbar on this page */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="inline-flex items-center gap-2 text-royal-700 hover:text-royal-900 text-sm font-inter font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <span className="font-poppins font-bold text-royal-900 text-sm">Plan Your Visit</span>
          </div>
        </div>
      </div>
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Church congregation welcoming visitors"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-inter mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold font-inter uppercase tracking-wider border border-gold-400/30">
                First-Time Visitors
              </span>
            </div>
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Plan Your <span style={{
                background: 'linear-gradient(135deg, #fcd34d, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Visit</span>
            </h1>
            <p className="font-inter text-blue-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              We're so excited to have you join us! Here's everything you need to know
              to make your first visit to JCWMM comfortable, joyful, and memorable.
            </p>
          </div>
        </section>

        {/* Service info bar */}
        <div className="bg-royal-900 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-inter">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span className="text-royal-300">Sunday Worship:</span>
                <span className="text-white font-medium">11:00 AM – 1:00 PM</span>
              </div>
              <span className="text-royal-600 hidden sm:block">|</span>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span className="text-royal-300">Saturday Prayer:</span>
                <span className="text-white font-medium">6:00 PM – 8:00 PM</span>
              </div>
              <span className="text-royal-600 hidden sm:block">|</span>
              <div className="flex items-center gap-2 text-white">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="text-white font-medium hover:text-gold-300 transition-colors">JCWMM Church, Ameerpet, Hyderabad</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
                Your Journey
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-royal-900 mb-4">
                What to Expect on <span className="text-gradient-blue">Your First Visit</span>
              </h2>
              <p className="font-inter text-gray-600 max-w-xl mx-auto">
                A simple 4-step guide to make your first Sunday a wonderful experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {visitSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="relative flex flex-col items-center text-center">
                    {/* Connector line */}
                    {index < visitSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-0.5 bg-gradient-to-r from-royal-200 to-transparent" />
                    )}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 rounded-2xl blue-gradient flex items-center justify-center shadow-lg shadow-royal-300/30">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center">
                        <span className="font-poppins font-bold text-xs text-white">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-royal-900 mb-2">{step.title}</h3>
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 section-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
                FAQ
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-royal-900 mb-4">
                Common <span className="text-gradient-blue">Questions</span>
              </h2>
              <p className="font-inter text-gray-600 max-w-xl mx-auto">
                We've answered the most common questions first-time visitors ask. Don't see yours? Reach out!
              </p>
            </div>

            <PlanVisitAccordion faqs={faqs} />
          </div>
        </section>

        {/* What to Bring / Quick Tips */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
                  Quick Tips
                </span>
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-royal-900 mb-8">
                  What to <span className="text-gradient-blue">Bring</span>
                </h2>

                <div className="space-y-4">
                  {[
                    { item: 'Your Bible (or Bible app on your phone)', note: 'We follow along with scripture readings' },
                    { item: 'An open heart and expectant faith', note: 'God is ready to meet you' },
                    { item: 'Your children', note: "They'll love our Children's Ministry" },
                    { item: 'A friend or family member', note: 'First visits are better with someone you know' },
                    { item: 'Your prayer needs', note: 'Our team will be happy to pray with you' },
                  ].map(({ item, note }) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-inter font-medium text-royal-900 text-sm">{item}</p>
                        <p className="font-inter text-gray-500 text-xs mt-0.5">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Church community welcoming new visitors"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-poppins font-bold text-xl text-white">
                    "Come as you are. God loves you just the way you are."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-royal-950 relative overflow-hidden">
          <div className="absolute inset-0 stars-bg opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to <span className="text-gradient-gold">Visit Us?</span>
            </h2>
            <p className="font-inter text-royal-300 text-lg mb-10 max-w-xl mx-auto">
              We can't wait to meet you. Join us this Sunday and experience the love of God and the warmth of our church family.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full gold-gradient text-white font-poppins font-semibold shadow-xl hover:scale-105 transition-transform"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
              <a
                href={`tel:${CHURCH_INFO.contact.phone1}`}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-poppins font-semibold hover:bg-white/20 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Us First
              </a>
              <a
                href={`mailto:${CHURCH_INFO.contact.email}`}
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-poppins font-semibold hover:bg-white/20 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-royal-400 hover:text-white text-sm font-inter transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Main Website
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
