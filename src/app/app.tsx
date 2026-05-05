'use client';

import '@/index.css';
import { useRef } from 'react';
import { HeroSection } from '@/app/components/HeroSection';
import { HighlightsSection } from '@/app/components/HighlightsSection';
import { EventDetailsSection } from '@/app/components/EventDetailsSection';
import { DressCodeBanner } from '@/app/components/DressCodeBanner';
import { BookingForm } from '@/app/components/BookingForm';
import { Footer } from '@/app/components/Footer';

function App() {
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="luxury-page min-h-screen">
      <HeroSection onBookClick={scrollToBooking} />
      <HighlightsSection />
      <EventDetailsSection />
      <DressCodeBanner />
      <div ref={bookingRef}>
        <BookingForm />
      </div>
      <Footer />

      {/* Sticky mobile Book Now button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2"
        style={{ background: 'linear-gradient(0deg, rgba(13,13,13,0.97) 60%, transparent)' }}
      >
        <button
          onClick={scrollToBooking}
          className="w-full py-4 text-sm uppercase tracking-[0.25em] font-semibold rounded-full transition-all duration-300 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #E2C87A 50%, #C9A84C 100%)',
            color: '#0d0d0d',
            fontFamily: 'Lato, sans-serif',
            boxShadow: '0 4px 24px rgba(201,168,76,0.4)',
          }}
        >
          Book Now ♡
        </button>
      </div>
    </div>
  );
}

export default App;
