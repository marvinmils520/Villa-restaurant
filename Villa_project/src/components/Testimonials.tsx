import { useState } from 'react'

const reviews = [
  {
    name: 'Елизавета Тимошенко',
    date: '22 сентября 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Вы нас покорили! Это было так вкусно. На веранде чисто, красиво и очень уютно. Обслуживание было быстрое и приятное — мы остались в полном восторге.',
    avatar: 'ЕТ',
  },
  {
    name: 'CrisValerevna',
    date: '14 июня 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Это один из наших любимых ресторанов — посещаем его уже не в первый раз. Каждый раз остаёмся очень довольны: блюда вкусные, качественно приготовлены и красиво поданы.',
    avatar: 'CV',
  },
  {
    name: 'Ирина Цховребова',
    date: '1 февраля 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Место уютное, милое и красивое. Меню большое, сервис хороший, а еда действительно радует. Очень приятно проводить здесь время.',
    avatar: 'ИЦ',
  },
  {
    name: 'Александр',
    date: '27 августа 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Были недолго в Мариуполе, пришли по отзывам и не прогадали. Официант Кирилл вежлив и обходителен, блюда вкусные, а атмосфера очень комфортная.',
    avatar: 'А',
  },
  {
    name: 'Сергей Верховцев',
    date: '4 июня 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Был в ресторане Villa — всё совпало: атмосфера, еда и отношение к гостю. Интерьер уютный, официанты работают спокойно и внимательно.',
    avatar: 'СВ',
  },
  {
    name: 'Екатерина',
    date: '22 мая 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Хорошее заведение, красивый интерьер и вкусная кухня. Особенно хочу отметить салат с уткой и яблоком — он просто невероятный.',
    avatar: 'ЕК',
  },
  {
    name: 'Кора Z.',
    date: '5 ноября 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Уже не первый раз сюда приходим с мужем после работы. Очень нравится кухня, персонал всегда приветливый и внимательный.',
    avatar: 'KZ',
  },
  {
    name: 'Алексей',
    date: '6 июня 2025',
    source: 'Яндекс Карты',
    rating: 5,
    text: 'Ресторан Villa — отличное место для поездки по делам или на отдых. Вкусная еда, отличная барная карта и приветливый персонал.',
    avatar: 'АЛ',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#B8944F">
          <polygon points="6,1 7.8,4.4 11.5,4.9 8.75,7.6 9.5,11.3 6,9.5 2.5,11.3 3.25,7.6 0.5,4.9 4.2,4.4" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((current) => (current - 1 + reviews.length) % reviews.length)
  const next = () => setActive((current) => (current + 1) % reviews.length)

  const visible = [
    reviews[(active - 1 + reviews.length) % reviews.length],
    reviews[active],
    reviews[(active + 1) % reviews.length],
  ]

  return (
    <section id="reviews" style={{ background: '#F4EEE3', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
            Отзывы гостей
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#252525', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Истории от<br /><em>наших гостей</em>
          </h2>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', padding: '0 1rem' }}>
          <button
            onClick={prev}
            aria-label="Предыдущий отзыв"
            style={{
              position: 'absolute', top: '50%', left: 0, transform: 'translate(-50%, -50%)', zIndex: 2,
              width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(37,37,37,0.08)', color: '#252525', cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Следующий отзыв"
            style={{
              position: 'absolute', top: '50%', right: 0, transform: 'translate(50%, -50%)', zIndex: 2,
              width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(37,37,37,0.08)', color: '#252525', cursor: 'pointer',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', minHeight: 420, padding: '1rem 3rem' }}>
            {visible.map((review, index) => {
              const isCenter = index === 1
              return (
                <article
                  key={`${review.name}-${index}`}
                  style={{
                    flex: '0 0 32%',
                    minWidth: 240,
                    background: '#1E1E1E',
                    color: '#F7F3EA',
                    borderRadius: 24,
                    padding: '2rem',
                    boxShadow: isCenter ? '0 24px 80px rgba(37,37,37,0.18)' : '0 16px 40px rgba(0,0,0,0.12)',
                    transform: isCenter ? 'scale(1)' : 'scale(0.92)',
                    opacity: isCenter ? 1 : 0.65,
                    transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    zIndex: isCenter ? 1 : 0,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#252525', display: 'grid', placeItems: 'center', color: '#F7F3EA', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem' }}>
                      {review.avatar}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 700, color: '#F7F3EA' }}>{review.name}</p>
                      <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 400, color: '#B9B0A1' }}>{review.date} · {review.source}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '1.25rem' }}>
                    <Stars n={review.rating} />
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: '#B9B0A1' }}>{review.rating}.0</span>
                  </div>
                  <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(0.95rem, 1.2vw, 1rem)', lineHeight: 1.8, color: '#F7F3EA' }}>
                    “{review.text}”
                  </p>
                </article>
              )
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '2rem' }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Показать отзыв ${i + 1}`}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: 'none',
                  background: active === i ? '#B8944F' : '#D7CAB8',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
