import { useState } from 'react'

const dishes = [
  {
    name: 'Коте-де-боф',
    category: 'Стейки',
    desc: 'Выдержка 28 дней, подаётся с трюфельным соусом и сезонной зеленью.',
    img: 'https://images.unsplash.com/photo-1663530761401-15eefb544889?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Лингвини с морепродуктами',
    category: 'Паста',
    desc: 'Моллюски, креветки, кальмары в лёгком шафрановом бискe.',
    img: 'https://images.unsplash.com/photo-1672636402078-4b957a572e4e?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Филе морского окуня',
    category: 'Морепродукты',
    desc: 'Обжаренный на сковороде морской окунь, масло с каперсами, жареный фенхель.',
    img: 'https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Биск из королевских креветок',
    category: 'Супы',
    desc: 'Подаётся в тёплой форме из кислого хлеба с крем-фреш.',
    img: 'https://images.unsplash.com/photo-1595579547936-c3a0e6c171fc?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Фирменный коктейль',
    category: 'Коктейли',
    desc: 'Домашняя смесь выдержанных спиртов, цитрусовых и ароматных трав.',
    img: 'https://images.unsplash.com/photo-1778104959469-0861d423de46?w=600&h=750&fit=crop&auto=format',
  },
  {
    name: 'Салат с урожая',
    category: 'Салаты',
    desc: 'Жареная свёкла, буррата, карамелизованные орехи, шампанский винегрет.',
    img: 'https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?w=600&h=750&fit=crop&auto=format',
  },
]

export default function Dishes() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="gallery" style={{ background: '#F4EEE3', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
              Фирменные блюда
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#252525', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Создано со<br /><em>страстью и смыслом</em>
            </h2>
          </div>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'none', border: 'none', borderBottom: '1px solid #B8944F', color: '#B8944F', cursor: 'pointer', paddingBottom: 2, transition: 'opacity 0.3s' }}
          >
            Посмотреть всё меню →
          </button>
        </div>

        {/* Dishes grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                borderRadius: 6,
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: '#C4B89A',
                cursor: 'pointer',
                boxShadow: hovered === i ? '0 20px 60px rgba(37,37,37,0.2)' : '0 4px 20px rgba(37,37,37,0.08)',
                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
              }}
            >
              <img
                src={dish.img}
                alt={dish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease', transform: hovered === i ? 'scale(1.06)' : 'scale(1)' }}
              />
              {/* Gradient */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(37,37,37,0.85) 0%, rgba(37,37,37,0.2) 50%, transparent 100%)' }} />
              {/* Text */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8944F', display: 'block', marginBottom: '0.4rem' }}>
                  {dish.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, color: '#F7F3EA', marginBottom: '0.4rem', lineHeight: 1.2 }}>
                  {dish.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(247,243,234,0.72)', lineHeight: 1.5,
                  maxHeight: hovered === i ? '4rem' : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, opacity 0.4s ease',
                  opacity: hovered === i ? 1 : 0,
                }}>
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
