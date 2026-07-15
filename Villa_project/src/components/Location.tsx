const hours = [
  { day: 'Понедельник', time: '10:00 – 22:00' },
  { day: 'Вторник', time: '10:00 – 22:00' },
  { day: 'Среда', time: '10:00 – 22:00' },
  { day: 'Четверг', time: '10:00 – 22:00' },
  { day: 'Пятница', time: '10:00 – 22:00' },
  { day: 'Суббота', time: '10:00 – 22:00' },
  { day: 'Воскресенье', time: '10:00 – 22:00' },
]

const contacts = [
  { label: 'Телефон', value: '+7 (949) 500-07-41', href: 'tel:+79495000741', icon: '📞' },
  { label: 'WhatsApp', value: 'Написать', href: 'https://wa.me/79495000741', icon: '💬' },
  { label: 'Instagram', value: '@villa.restaurant', href: 'https://instagram.com', icon: '📷' },
  { label: 'Почта', value: 'hello@villa.restaurant', href: 'mailto:hello@villa.restaurant', icon: '✉️' },
]

export default function Location() {
  return (
    <section id="contacts" style={{ background: '#F7F3EA', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'start' }}>

          {/* Info side */}
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
              Найти нас
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#252525', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
              Мы ждём вас<br /><em>уже сегодня</em>
            </h2>

            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8272', marginBottom: '0.5rem' }}>Адрес</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 300, color: '#252525', lineHeight: 1.7 }}>
                проспект Строителей, 75<br />Мариуполь, Донецкая область, 287501
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 300, color: '#8A8272', marginTop: '0.5rem' }}>
                🅿️ Парковка рядом, вход с проспекта Строителей
              </p>
            </div>

            {/* Hours */}
            <div style={{ marginBottom: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8A8272', marginBottom: '0.75rem' }}>Время работы</p>
              {hours.map(h => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid rgba(37,37,37,0.08)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 300, color: '#252525' }}>{h.day}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 400, color: '#B8944F' }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Contacts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {contacts.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', background: '#F4EEE3', borderRadius: 4, textDecoration: 'none', transition: 'background 0.25s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(184,148,79,0.12)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#F4EEE3' }}
                >
                  <span style={{ fontSize: '1rem' }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A8272', marginBottom: 1 }}>{c.label}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: '#252525', fontWeight: 400 }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Map side */}
          <div>
            <div style={{ borderRadius: 8, overflow: 'hidden', background: '#C4B89A', boxShadow: '0 8px 40px rgba(37,37,37,0.1)' }}>
              <iframe
                title="Villa — ресторан"
                src="https://yandex.ru/map-widget/v1/?oid=228360196687&ll=37.521489%2C47.089102&z=16.38"
                style={{ width: '100%', height: 420, border: 'none', display: 'block', filter: 'sepia(0.3) saturate(0.8) contrast(1.05)' }}
                loading="lazy"
              />
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 300, color: '#8A8272', marginTop: '0.75rem', textAlign: 'center', letterSpacing: '0.05em' }}>
              10 мин от центра города · Такси высаживают у просп. Строителей
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
