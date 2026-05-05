import { useEffect, useRef } from 'react';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111008 50%, #0d0d0d 100%)' }}
    >
      {/* Candle glow overlay */}
      <div className="absolute inset-0 candle-glow pointer-events-none" />

      {/* Ambient light spots */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(180,120,30,0.06) 0%, transparent 70%)' }}
      />

      {/* Brand name */}
      <div ref={ref} className="fade-up relative z-10 max-w-3xl mx-auto">
        <p
          className="uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-light"
          style={{ color: '#C9A84C', fontFamily: 'Lato, sans-serif' }}
        >
          Candid Candles &amp; More
        </p>

        {/* Main heading */}
        <h1
          className="font-dancing leading-none mb-4"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            background: 'linear-gradient(135deg, #C9A84C 0%, #E2C87A 40%, #C9A84C 70%, #A07830 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.1,
          }}
        >
          Sip, Pour &amp; Unwind ♡
        </h1>

        {/* Divider */}
        <div className="gold-divider my-6 mx-auto w-48" />

        {/* Subheading */}
        <p
          className="uppercase tracking-[0.2em] text-sm md:text-base mb-3 font-light"
          style={{ color: '#F5E6C8', fontFamily: 'Lato, sans-serif' }}
        >
          A Private Wellness Experience
        </p>
        <p
          className="font-dancing text-xl md:text-2xl mb-8"
          style={{ color: '#C9A84C' }}
        >
          by Candid Candles
        </p>

        {/* Description */}
        <p
          className="text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto font-light"
          style={{ color: 'rgba(245,230,200,0.7)' }}
        >
          Join us for an unforgettable afternoon of relaxation, creativity,
          connection, and wellness.
        </p>

        {/* CTA button */}
        <button
          onClick={onBookClick}
          className="inline-block px-10 py-4 text-sm uppercase tracking-[0.25em] font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #C9A84C 0%, #E2C87A 50%, #C9A84C 100%)',
            color: '#0d0d0d',
            fontFamily: 'Lato, sans-serif',
            boxShadow: '0 4px 24px rgba(201,168,76,0.35)',
          }}
        >
          Book Your Spot
        </button>

        {/* Tagline */}
        <p
          className="font-dancing text-lg mt-10 italic"
          style={{ color: 'rgba(201,168,76,0.6)' }}
        >
          Relax. Create. Connect. Leave Lighter. ♡
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(180deg, transparent, #C9A84C)' }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#C9A84C' }}
        />
      </div>
    </section>
  );
}
