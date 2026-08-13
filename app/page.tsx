import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/shared/LoadingScreen';
import ScrollProgress from '@/components/shared/ScrollProgress';
import BackToTop from '@/components/shared/BackToTop';
import WhatsAppButton from '@/components/shared/WhatsAppButton';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BibleVerseSection from '@/components/sections/BibleVerseSection';
import SermonsSection from '@/components/sections/SermonsSection';
import LiveStreamSection from '@/components/sections/LiveStreamSection';
import EventsSection from '@/components/sections/EventsSection';

const GallerySection = dynamic(() => import('@/components/sections/GallerySection'));
const TestimoniesSection = dynamic(() => import('@/components/sections/TestimoniesSection'));
const PrayerSection = dynamic(() => import('@/components/sections/PrayerSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BibleVerseSection />
        <SermonsSection />
        <LiveStreamSection />
        <EventsSection />
        <GallerySection />
        <TestimoniesSection />
        <PrayerSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
