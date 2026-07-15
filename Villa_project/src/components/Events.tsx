const EVENT_IMG = 'https://images.unsplash.com/photo-1768851142314-c4ebf49ad45b?w=1600&h=1000&fit=crop&auto=format'

const eventTypes = [
  { label: 'Свадебные банкеты', icon: '💍' },
  { label: 'Дни рождения', icon: '🎂' },
  { label: 'Корпоративные мероприятия', icon: '🤝' },
  { label: 'Романтические ужины', icon: '🕯️' },
  { label: 'Семейные праздники', icon: '🥂' },
]

export default function Events() {
  return (
    <section id="events" style={{ position: 'relative', minHeight: 600, overflow: 'hidden', background: '#252525' }}>
      {/* Background image */}
      <img
        src={EVENT_IMG}
        alt="Elegant private event setting at Villa Restaurant"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.45 }}
      />

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(83,89,59,0.92) 0%, rgba(37,37,37,0.85) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1300, margin: '0 auto', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>

        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
            Частные мероприятия
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 400, color: '#F7F3EA', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            Ваш идеальный<br /><em>праздник уже рядом</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 300, color: 'rgba(247,243,234,0.72)', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Планируете ли вы уютный романтический ужин или масштабное празднество, наш приватный зал вмещает до 80 гостей с авторскими меню, персональным обслуживанием и атмосферой, которая делает каждый момент особенным.
          </p>
          <button
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.9rem 2.2rem', background: '#B8944F', color: '#F7F3EA', border: 'none', borderRadius: 2, cursor: 'pointer', transition: 'background 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#D4AE72' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#B8944F' }}
          >
            Узнать о мероприятиях
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {eventTypes.map((ev) => (
            <div
              key={ev.label}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.1rem 1.5rem',
                background: 'rgba(247,243,234,0.07)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                border: '1px solid rgba(247,243,234,0.12)',
                borderRadius: 4,
                transition: 'background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(184,148,79,0.15)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(247,243,234,0.07)' }}
            >
              <span style={{ fontSize: '1.2rem' }}>{ev.icon}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 400, color: '#F7F3EA', letterSpacing: '0.03em' }}>{ev.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
