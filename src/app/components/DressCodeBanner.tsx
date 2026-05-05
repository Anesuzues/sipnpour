import { useEffect, useRef } from 'react';

export function DressCodeBanner() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 px-6 brushstroke-bg" ref={ref}>
      <div className="fade-up max-w-3xl mx-auto text-center">
        <p
          className="font-dancing text-xl md:text-2xl tracking-wide"
          style={{ color: '#C9A84C' }}
        >
          ♡ &nbsp;Dress Code: Soft Life &nbsp;|&nbsp; Neutrals &nbsp;|&nbsp; Effortless
        </p>
      </div>
    </section>
  );
}
