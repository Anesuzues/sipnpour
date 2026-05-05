import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  dietary: string;
  plusOne: 'yes' | 'no' | '';
  plusOneName: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  plusOne?: string;
  plusOneName?: string;
}

export function BookingForm() {
  const [form, setForm] = useState<FormData>({
    fullName: '', phone: '', email: '', dietary: '', plusOne: '', plusOneName: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

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

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.plusOne) e.plusOne = 'Please select an option.';
    if (form.plusOne === 'yes' && !form.plusOneName.trim()) e.plusOneName = 'Plus one name is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(201,168,76,0.4)',
    color: '#F5E6C8',
    borderRadius: '10px',
    padding: '13px 16px',
    width: '100%',
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'rgba(201,168,76,0.8)',
    marginBottom: '6px',
    fontFamily: 'Lato, sans-serif',
  };

  const errorStyle: React.CSSProperties = {
    color: '#e57373',
    fontSize: '11px',
    marginTop: '4px',
    fontFamily: 'Lato, sans-serif',
  };

  return (
    <section id="booking" className="py-20 px-6" style={{ background: '#0d0d0d' }}>
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-xs mb-3 font-light" style={{ color: '#C9A84C' }}>
            Secure Your Place
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-5" style={{ color: '#F5E6C8' }}>
            Reserve Your Spot
          </h2>
          <div className="gold-divider mx-auto w-32" />
        </div>

        <div
          ref={ref}
          className="fade-up rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(201,168,76,0.25)',
            boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.12)', border: '1.5px solid rgba(201,168,76,0.5)' }}
              >
                <CheckCircle size={36} style={{ color: '#C9A84C' }} />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-3" style={{ color: '#F5E6C8' }}>
                  You're on the list! ♡
                </h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(245,230,200,0.65)' }}>
                  Thank you! Your booking request has been received.
                  <br />
                  We'll contact you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#C9A84C')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.4)')}
                />
                {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+27 000 000 0000"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#C9A84C')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.4)')}
                />
                {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => (e.target.style.borderColor = '#C9A84C')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.4)')}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>

              {/* Dietary */}
              <div>
                <label style={labelStyle}>Dietary Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Please list any dietary requirements or allergies..."
                  value={form.dietary}
                  onChange={e => setForm(f => ({ ...f, dietary: e.target.value }))}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                  onFocus={e => (e.target.style.borderColor = '#C9A84C')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.4)')}
                />
              </div>

              {/* Plus One */}
              <div>
                <label style={labelStyle}>Bringing a Plus One?</label>
                <div className="flex gap-6 mt-1">
                  {(['yes', 'no'] as const).map(opt => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 cursor-pointer"
                      style={{ color: '#F5E6C8', fontSize: '14px', fontFamily: 'Lato, sans-serif' }}
                    >
                      <input
                        type="radio"
                        name="plusOne"
                        value={opt}
                        checked={form.plusOne === opt}
                        onChange={() => setForm(f => ({ ...f, plusOne: opt, plusOneName: '' }))}
                        style={{ accentColor: '#C9A84C', width: '16px', height: '16px' }}
                      />
                      {opt === 'yes' ? 'Yes' : 'No'}
                    </label>
                  ))}
                </div>
                {errors.plusOne && <p style={errorStyle}>{errors.plusOne}</p>}
              </div>

              {/* Plus One Name – conditional */}
              {form.plusOne === 'yes' && (
                <div>
                  <label style={labelStyle}>Plus One Name</label>
                  <input
                    type="text"
                    placeholder="Your plus one's full name"
                    value={form.plusOneName}
                    onChange={e => setForm(f => ({ ...f, plusOneName: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = '#C9A84C')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.4)')}
                  />
                  {errors.plusOneName && <p style={errorStyle}>{errors.plusOneName}</p>}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="mt-3 w-full py-4 text-sm uppercase tracking-[0.25em] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E2C87A 50%, #C9A84C 100%)',
                  color: '#0d0d0d',
                  fontFamily: 'Lato, sans-serif',
                  boxShadow: '0 4px 24px rgba(201,168,76,0.3)',
                }}
              >
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
