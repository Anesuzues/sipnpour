import { useEffect, useRef } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export function Footer() {
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
    <footer
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #080808 100%)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
      }}
    >
      <div ref={ref} className="fade-up max-w-5xl mx-auto px-6 py-14">
        {/* Top tagline */}
        <div className="text-center mb-10">
          <p className="font-dancing text-2xl md:text-3xl mb-2" style={{ color: '#C9A84C' }}>
            Spots are limited.
          </p>
          <p className="uppercase tracking-[0.25em] text-xs font-light" style={{ color: 'rgba(245,230,200,0.5)' }}>
            Secure yours today! ♡
          </p>
        </div>

        <div className="gold-divider mb-10" />

        {/* Contact + social */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10">
          {/* WhatsApp */}
          <a
            href="https://wa.me/27604844697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)' }}
            >
              <FaWhatsapp size={20} style={{ color: '#C9A84C' }} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] mb-0.5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                Book via WhatsApp
              </p>
              <p className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>060 484 4697</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:candidcandlesandmore@gmail.com"
            className="flex items-center gap-3 group"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)' }}
            >
              <HiMail size={20} style={{ color: '#C9A84C' }} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] mb-0.5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                Email Us
              </p>
              <p className="text-sm font-semibold" style={{ color: '#F5E6C8' }}>candidcandlesandmore@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://instagram.com/candidcandlesandmore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.3)',
            }}
          >
            <FaInstagram size={18} style={{ color: '#C9A84C' }} />
          </a>
          <a
            href="https://facebook.com/candidcandlesandmore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.3)',
            }}
          >
            <FaFacebookF size={16} style={{ color: '#C9A84C' }} />
          </a>
        </div>

        <div className="gold-divider mb-6" />

        {/* Copyright */}
        <p className="text-center text-xs font-light" style={{ color: 'rgba(245,230,200,0.3)' }}>
          © 2026 Candid Candles &amp; More. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
