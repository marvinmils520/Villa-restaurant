const features = [
  { icon: '🌿', label: 'Свежие ингредиенты', desc: 'Прямо с фермы, сезонные меню.' },
  { icon: '🍽️', label: 'Европейская кухня', desc: 'Вдохновения французской, итальянской и испанской кухни.' },
  { icon: '👨‍🍳', label: 'Профессиональные повара', desc: 'Команда, обученная шефами мишленовских ресторанов.' },
  { icon: '✨', label: 'Премиум-сервис', desc: 'Внимательное, теплое, ненавязчивое обслуживание.' },
  { icon: '🏡', label: 'Семейная атмосфера', desc: 'Добро пожаловать всем — парам, семьям, группам.' },
  { icon: '🎉', label: 'Приватные мероприятия', desc: 'Торжества, созданные специально для вас.' },
  { icon: '🍷', label: 'Винная коллекция', desc: 'Более 200 избранных европейских вин.' },
  { icon: '💨', label: 'Кальянный лаунж', desc: 'Премиум кальянная в отдельном лаунже.' },
]

export default function WhyUs() {
  return (
    <section style={{ background: '#53593B', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(3rem, 5vw, 5rem)', alignItems: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
              Почему Villa
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#F7F3EA', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Почему гости<br /><em>выбирают Villa</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 300, color: 'rgba(247,243,234,0.7)', lineHeight: 1.8 }}>
            Мы верим, что каждая деталь имеет значение — от первого наливания вина до последнего кусочка десерта. Поэтому наши гости возвращаются, и их вечера становятся историями, о которых стоит рассказывать.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', background: 'rgba(247,243,234,0.1)', border: '1px solid rgba(247,243,234,0.1)', borderRadius: 6, overflow: 'hidden' }}>
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                background: '#53593B',
                padding: '2rem 1.75rem',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#4F6546' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#53593B' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem', filter: 'grayscale(0.3)' }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F7F3EA', marginBottom: '0.5rem' }}>
                {f.label}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'rgba(247,243,234,0.6)', lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
