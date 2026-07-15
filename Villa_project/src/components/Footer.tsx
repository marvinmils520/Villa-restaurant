const navLinks = [
  { label: 'Меню', id: 'menu' },
  { label: 'Галерея', id: 'gallery' },
  { label: 'О нас', id: 'about' },
  { label: 'Мероприятия', id: 'events' },
  { label: 'Отзывы', id: 'reviews' },
  { label: 'Контакты', id: 'contacts' },
]
const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'TripAdvisor', href: 'https://tripadvisor.com' },
]

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#4F6546', padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 4rem) 2.5rem' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(247,243,234,0.15)' }}>
          {/* Logo + tagline */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: '#F7F3EA', letterSpacing: '0.04em', display: 'block' }}>Villa</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 300, color: 'rgba(247,243,234,0.5)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Ресторан</span>
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontStyle: 'normal', color: 'rgba(247,243,234,0.65)', lineHeight: 1.7 }}>
              «Хорошая еда, хорошее вино,<br />и отличная компания.»
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '1rem' }}>Навигация</p>
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'rgba(247,243,234,0.7)', padding: '0.3rem 0', transition: 'color 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F7F3EA' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(247,243,234,0.7)' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '1rem' }}>Часы работы</p>
            {[
              ['Пн – Чт', '12:00 – 23:00'],
              ['Пт – Сб', '12:00 – 00:00'],
              ['Воскресенье', '12:00 – 22:00'],
            ].map(([d, t]) => (
              <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid rgba(247,243,234,0.08)' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(247,243,234,0.6)' }}>{d}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 400, color: 'rgba(247,243,234,0.85)' }}>{t}</span>
              </div>
            ))}
          </div>

          {/* Reserve CTA */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '1rem' }}>Бронирование</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 300, color: 'rgba(247,243,234,0.65)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Забронируйте столик онлайн или свяжитесь с нами по телефону. Мы будем рады принять вас.
            </p>
            <a
              href="tel:+15552345678"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 400, color: '#F7F3EA', textDecoration: 'none', display: 'block', marginBottom: '0.75rem' }}
            >
              +1 (555) 234-5678
            </a>
            <button
              onClick={() => scrollTo('reservation')}
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.65rem 1.5rem', background: '#B8944F', color: '#F7F3EA', border: 'none', borderRadius: 2, cursor: 'pointer', transition: 'background 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D4AE72' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8944F' }}
            >
              Забронировать онлайн
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'rgba(247,243,234,0.4)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Villa Restaurant. Все права защищены.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'rgba(247,243,234,0.5)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#B8944F' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(247,243,234,0.5)' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
