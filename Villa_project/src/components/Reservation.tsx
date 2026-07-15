import { useState } from 'react'

const RES_BG = 'https://images.unsplash.com/photo-1758705477547-1070b9fac15d?w=1600&h=1000&fit=crop&auto=format'

const inputStyle = {
  fontFamily: 'var(--font-sans)' as const,
  fontSize: '0.9rem' as const,
  fontWeight: 300,
  width: '100%' as const,
  padding: '0.85rem 1rem',
  background: 'rgba(247,243,234,0.1)' as const,
  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  border: '1px solid rgba(247,243,234,0.25)' as const,
  borderRadius: 4,
  color: '#F7F3EA' as const,
  outline: 'none' as const,
  transition: 'border-color 0.3s' as const,
}

const labelStyle = {
  fontFamily: 'var(--font-sans)' as const,
  fontSize: '0.65rem' as const,
  fontWeight: 500,
  letterSpacing: '0.2em' as const,
  textTransform: 'uppercase' as const,
  color: 'rgba(247,243,234,0.6)' as const,
  display: 'block' as const,
  marginBottom: '0.4rem',
}

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '2', date: '', time: '19:00', notes: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="reservation" style={{ position: 'relative', overflow: 'hidden', background: '#252525', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      {/* Background */}
      <img
        src={RES_BG}
        alt="Elegant table setting with candles"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.25 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,37,37,0.97) 0%, rgba(83,89,59,0.88) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
            Забронировать столик
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#F7F3EA', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Ваш вечер начинается<br /><em>с одного шага</em>
          </h2>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(184,148,79,0.15)', border: '1px solid rgba(184,148,79,0.3)', borderRadius: 8 }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🥂</div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#F7F3EA', marginBottom: '0.75rem' }}>Ваш столик забронирован.</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 300, color: 'rgba(247,243,234,0.7)', lineHeight: 1.7 }}>
              Спасибо, {form.name}. Мы получили вашу заявку на бронь и подтвердим её по телефону в течение часа. Мы будем рады вашему визиту.
            </p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={labelStyle}>Ваше имя</label>
                <input style={inputStyle} name="name" value={form.name} onChange={handle} placeholder="София Лоран" required
                  onFocus={e => { e.target.style.borderColor = 'rgba(184,148,79,0.7)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(247,243,234,0.25)' }}
                />
              </div>
              <div>
                <label style={labelStyle}>Номер телефона</label>
                <input style={inputStyle} name="phone" value={form.phone} onChange={handle} placeholder="+7 900 000 00 00" required type="tel"
                  onFocus={e => { e.target.style.borderColor = 'rgba(184,148,79,0.7)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(247,243,234,0.25)' }}
                />
              </div>
              <div>
                <label style={labelStyle}>Гости</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} name="guests" value={form.guests} onChange={handle}>
                  {['1','2','3','4','5','6','7','8','9','10+'].map(n => <option key={n} value={n} style={{ background: '#252525' }}>{n} {n === '1' ? 'гость' : 'гостей'}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Дата</label>
                <input style={inputStyle} type="date" name="date" value={form.date} onChange={handle} required
                  onFocus={e => { e.target.style.borderColor = 'rgba(184,148,79,0.7)' }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(247,243,234,0.25)' }}
                />
              </div>
              <div>
                <label style={labelStyle}>Время</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} name="time" value={form.time} onChange={handle}>
                  {['12:00','13:00','14:00','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00'].map(t => (
                    <option key={t} value={t} style={{ background: '#252525' }}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={labelStyle}>Особые пожелания (необязательно)</label>
              <textarea
                style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                name="notes" value={form.notes} onChange={handle}
                placeholder="Юбилей, диетические ограничения, предпочтение по посадке..."
                onFocus={e => { e.target.style.borderColor = 'rgba(184,148,79,0.7)' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(247,243,234,0.25)' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '1rem 3.5rem', background: '#B8944F', color: '#F7F3EA', border: 'none', borderRadius: 2, cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#D4AE72' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#B8944F' }}
              >
                Забронировать столик
              </button>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'rgba(247,243,234,0.4)', marginTop: '1rem', letterSpacing: '0.05em' }}>
                Мы подтвердим вашу бронь по телефону в течение 1 часа.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
