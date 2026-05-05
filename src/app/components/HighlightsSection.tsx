import { useEffect, useRef } from 'react';
import { GiMeditation, GiWineGlass } from 'react-icons/gi';
import { PiCandle, PiChatsCircleFill } from 'react-icons/pi';

interface HighlightCard {
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  description: string;
}

const highlights: HighlightCard[] = [
  {
    Icon: GiMeditation,
    label: 'Yoga Session',
    description: 'Ground your body and calm your mind with a guided wellness yoga flow.',
  },
  {
    Icon: PiCandle,
    label: 'Candle Making Experience',
    description: 'Create your own luxury scented candle to take home as a keepsake.',
  },
  {
    Icon: GiWineGlass,
    label: 'Wine Tasting',
    description: 'Savour carefully curated wines in a warm, intimate setting.',
  },
  {
    Icon: PiChatsCircleFill,
    label: 'Real Conversations & Story Sharing',
    description: 'Connect authentically with like-minded women in a safe, uplifting space.',
  },
];

function HighlightCard({ card, delay }: { card: HighlightCard; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const { Icon } = card;
  
  return (
    <div
      ref={ref}
      className="fade-up flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(201,168,76,0.3)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.3), inset 0 0 24px rgba(201,168,76,0.03)',
      }}
    >
      {/* Icon circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
        style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1.5px solid rgba(201,168,76,0.5)',
          boxShadow: '0 0 20px rgba(201,168,76,0.15)',
        }}
      >
        <Icon size={32} style={{ color: '#C9A84C' }} />
      </div>

      <h3
        className="font-playfair text-base md:text-lg font-semibold mb-3 uppercase tracking-[0.12em]"
        style={{ color: '#C9A84C' }}
      >
        {card.label}
      </h3>
      <p
        className="text-xs md:text-sm leading-relaxed font-light"
        style={{ color: 'rgba(245,230,200,0.6)' }}
      >
        {card.description}
      </p>
    </div>
  );
}

export function HighlightsSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="fade-up text-center mb-14">
          <p
            className="uppercase tracking-[0.3em] text-xs mb-3 font-light"
            style={{ color: '#C9A84C' }}
          >
            The Experience
          </p>
          <h2
            className="font-playfair text-3xl md:text-4xl font-semibold mb-5"
            style={{ color: '#F5E6C8' }}
          >
            What to Expect
          </h2>
          <div className="gold-divider mx-auto w-32" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((card, i) => (
            <HighlightCard key={card.label} card={card} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
