import { useState } from 'react'

const categories = ['Супы', 'Салаты', 'Паста', 'Стейки', 'Морепродукты', 'Десерты']

const menuImages: Record<string, string> = {
  Супы: 'https://images.unsplash.com/photo-1595579547936-c3a0e6c171fc?w=900&h=600&fit=crop&auto=format',
  Салаты: 'https://images.unsplash.com/photo-1539586345401-51d5bfba7ac0?w=900&h=600&fit=crop&auto=format',
  Паста: 'https://images.unsplash.com/photo-1672636402078-4b957a572e4e?w=900&h=600&fit=crop&auto=format',
  Стейки: 'https://images.unsplash.com/photo-1663530761401-15eefb544889?w=900&h=600&fit=crop&auto=format',
  Морепродукты: 'https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=900&h=600&fit=crop&auto=format',
  Десерты: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=900&h=600&fit=crop&auto=format',
}

const menuItems: Record<string, { name: string; desc: string }[]> = {
  Супы: [
    { name: 'Французский луковый суп', desc: 'Классический суп с запечённой корочкой, грюйером и поджаренным багетом.' },
    { name: 'Биск из королевских креветок', desc: 'Бархатистый биск в форме из кислого хлеба, крем-фреш.' },
    { name: 'Трюфельный консомме', desc: 'Прозрачный говяжий бульон с черным трюфелем и травяным маслом.' },
  ],
  Салаты: [
    { name: 'Буррата и свёкла', desc: 'Старинная свёкла, буррата, карамелизованные орехи, соус со сливочным шампанским.' },
    { name: 'Нисуаз', desc: 'Обжаренный тунец, фасоль, оливки, мягкое яйцо, анчоусы.' },
    { name: 'Цезарь Рояль', desc: 'Молодый ромэн, домашний цезарь, хрустящие каперсы, выдержанный пармезан.' },
  ],
  Паста: [
    { name: 'Лингвини с морепродуктами', desc: 'Моллюски, креветки, кальмары, белое вино, шафрановый биск.' },
    { name: 'Качо э пеппе', desc: 'Тоннарелли, выдержанный Пекорино, черный перец Телличерри.' },
    { name: 'Паппарделле с рагу из утки', desc: 'Тушёная утка, белые грибы, свежая яичная паста.' },
  ],
  Стейки: [
    { name: 'Коте-де-боф', desc: '600 г сухой выдержки, трюфельный соус, водяная кресс-салат.' },
    { name: 'Филе-миньон', desc: '200 г филе, беарнез, фондан из картофеля.' },
    { name: 'Вагю стейк', desc: 'Мраморная говядина A5, чимичурри, запеченный костный мозг.' },
  ],
  Морепродукты: [
    { name: 'Филе морского окуня', desc: 'Обжаренное на сковороде, масло с каперсами, жареный фенхель, лимон.' },
    { name: 'Лобстер Термидор', desc: 'Половина лобстера, сливочный соус, грюйер, шафрановый рис.' },
    { name: 'Гриль-осьминог', desc: 'Португальская маринадная смесь, пюре из нута, паприковое масло.' },
  ],
  Десерты: [
    { name: 'Крем-брюле', desc: 'Тахитский ванильный крем, карамелизированный сахар, свежая ягода.' },
    { name: 'Шоколадный фондан', desc: 'Valrhona 70%, солёная карамель, ванильное мороженое.' },
    { name: 'Тарт татен', desc: 'Карамелизированное яблоко Granny Smith, слоёное тесто, крем-фреш.' },
  ],
}

export default function MenuSection() {
  const [active, setActive] = useState('Стейки')

  return (
    <section id="menu" style={{ background: '#F7F3EA', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'flex-end', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
              Избранное меню
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#252525', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Составлено с заботой,<br /><em>подано с любовью</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 300, color: '#8A8272', lineHeight: 1.8 }}>
            Наше меню меняется по сезонам. Каждое блюдо — результат совместной работы шефов и лучших европейских поставщиков.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: active === cat ? 500 : 400, letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0.55rem 1.25rem', border: '1px solid', borderColor: active === cat ? '#B8944F' : 'rgba(37,37,37,0.15)',
                background: active === cat ? '#B8944F' : 'transparent', color: active === cat ? '#F7F3EA' : '#252525',
                borderRadius: 2, cursor: 'pointer', transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content: image + items */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div style={{ borderRadius: 6, overflow: 'hidden', aspectRatio: '3/2', background: '#C4B89A' }}>
            <img
              key={active}
              src={menuImages[active]}
              alt={`${active} в ресторане Villa`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', animation: 'fadeIn 0.5s ease' }}
            />
          </div>

          <div>
            {menuItems[active].map((item, i) => (
              <div
                key={item.name}
                style={{ padding: '1.25rem 0', borderBottom: i < menuItems[active].length - 1 ? '1px solid rgba(37,37,37,0.08)' : 'none', animation: 'fadeIn 0.5s ease' }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: '#252525', marginBottom: '0.4rem' }}>
                  {item.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', fontWeight: 300, color: '#8A8272', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}

            <button
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ marginTop: '2rem', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.9rem 2rem', background: '#252525', color: '#F7F3EA', border: 'none', borderRadius: 2, cursor: 'pointer', transition: 'background 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#B8944F' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#252525' }}
            >
              Посмотреть всё меню и забронировать
            </button>
          </div>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  )
}
