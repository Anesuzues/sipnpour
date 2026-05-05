import { useEffect, useRef } from 'react';
import { MapPin, CalendarDays, Clock, Ticket } from 'lucide-react';

interface DetailItem {
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  value: string;
  sub?: string;
}

const details: DetailItem[] = [
  {
    Icon: MapPin,
    label: 'Location',
    value: 'Midrand',
    sub: 'Exact location shared after booking',
  },
  {
    Icon: CalendarDays,
    label: 'Date',
    value: 'August 2026',
  },
  {
    Icon: Clock,
    label: 'Time',
    value: '12:00 PM',
    sub: 'to Sunset',
  },
  {
    Icon: Ticket,
    label: 'Price',
    value: 'R650',
    sub: 'per person',
  },
];

export function EventDetailsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #111008 50%, #0d0d0d 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p
            className="uppercase tracking-[0.3em] text-xs mb-3 font-light"
            style={{ color: '#C9A84C' }}
          >
            Plan Your Visit
          </p>
          <h2
            className="font-playfair text-3xl md:text-4xl font-semibold mb-5"
            style={{ color: '#F5E6C8' }}
          >
            Event Details
          </h2>
          <div className="gold-divider mx-auto w-32" />
        </div>

        {/* Details cards */}
        <div ref={ref} className="fade-up grid grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map(({ Icon, label, value, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.35)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}
              >
                <Icon size={20} style={{ color: '#C9A84C' }} />
              </div>
              <p
                className="uppercase tracking-[0.15em] text-xs mb-2 font-light"
                style={{ color: 'rgba(201,168,76,0.7)' }}
              >
                {label}
              </p>
              <p
                className="font-playfair text-lg md:text-xl font-semibold"
                style={{ color: '#F5E6C8' }}
              >
                {value}
              </p>
              {sub && (
                <p
                  className="text-xs mt-1 font-light"
                  style={{ color: 'rgba(245,230,200,0.45)' }}
                >
                  {sub}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Limited spots badge */}
        <div className="text-center mt-10">
          <span
            className="inline-block px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-semibold"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
              border: '1px solid rgba(201,168,76,0.4)',
              color: '#C9A84C',
            }}
          >
            ✦ Limited Public Tickets Available ✦
          </span>
        </div>
      </div>
    </section>
  );
}
