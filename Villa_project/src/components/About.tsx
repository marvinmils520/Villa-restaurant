const ABOUT_IMG = 'https://images.unsplash.com/photo-1709548145082-04d0cde481d4?w=900&h=1100&fit=crop&auto=format'

const pillars = [
  { label: 'Свежие ингредиенты', desc: 'Сезонные продукты от локальных фермеров и проверенных европейских поставщиков.' },
  { label: 'Профессиональные шефы', desc: 'Команда, прошедшая обучение в разных странах Европы и имеющая богатый опыт.' },
  { label: 'Тёплое гостеприимство', desc: 'Каждый гость для нас — как семья, мы помним ваши предпочтения.' },
  { label: 'Семейные традиции', desc: 'Рецепты, уходящие корнями в многолетнее европейское кулинарное наследие.' },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#F7F3EA', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'center' }}>

        {/* Image side */}
        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '3/4', background: '#C4B89A' }}>
            <img
              src={ABOUT_IMG}
              alt="Villa Restaurant interior — warm evening ambiance"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.8s ease' }}
              onMouseEnter={e => { (e.target as HTMLImageElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
            />
          </div>
          {/* Gold accent tag */}
          <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', width: 120, height: 120, borderRadius: '50%', background: '#B8944F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 8px 32px rgba(184,148,79,0.35)' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: '#F7F3EA', lineHeight: 1 }}>12</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(247,243,234,0.8)', marginTop: 2 }}>Лет</span>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '1.25rem' }}>
            Наша история
          </p>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#252525', lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            Место, где<br /><em>еда становится памятью</em>
          </h2>

          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 300, color: '#5A5248', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Villa родился из простой идеи: идеальный ужин — это не только про еду. Это свет, смех, аромат трав, тепло комнаты, где незнакомые люди становятся друзьями.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 300, color: '#5A5248', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            Наша кухня черпает вдохновение из лучших европейских кулинарных традиций — от итальянского побережья до французской провинции — и переосмысляет их с помощью местных сезонных ингредиентов и искреннего гостеприимства.
          </p>

          {/* Calligraphy quote */}
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontStyle: 'normal', color: '#B8944F', borderLeft: '2px solid #B8944F', paddingLeft: '1.5rem', margin: '0 0 2.5rem', lineHeight: 1.5 }}>
            «Хорошая еда, хорошее вино и приятная компания — вот что мы предлагаем каждый вечер.»
          </blockquote>

          {/* Pillars grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {pillars.map(p => (
              <div key={p.label}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#252525', marginBottom: '0.35rem' }}>
                  {p.label}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 300, color: '#8A8272', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
