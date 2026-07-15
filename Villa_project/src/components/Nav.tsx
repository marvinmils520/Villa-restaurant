import { useState, useEffect } from 'react'

const links = [
  { label: 'Меню', id: 'menu' },
  { label: 'Галерея', id: 'gallery' },
  { label: 'О нас', id: 'about' },
  { label: 'Мероприятия', id: 'events' },
  { label: 'Отзывы', id: 'reviews' },
  { label: 'Контакты', id: 'contacts' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled ? 'rgba(247,243,234,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,148,79,0.15)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: scrolled ? '#252525' : '#F7F3EA', letterSpacing: '0.04em', transition: 'color 0.4s' }}>
            Villa
          </span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 300, color: scrolled ? '#B8944F' : 'rgba(247,243,234,0.75)', letterSpacing: '0.25em', display: 'block', textTransform: 'uppercase', marginTop: -2, transition: 'color 0.4s' }}>
            Ресторан
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden md:flex">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: scrolled ? '#252525' : 'rgba(247,243,234,0.88)', transition: 'color 0.3s', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#B8944F')}
              onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#252525' : 'rgba(247,243,234,0.88)')}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('reservation')}
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.6rem 1.5rem', border: '1px solid', borderColor: scrolled ? '#B8944F' : 'rgba(247,243,234,0.6)', color: scrolled ? '#B8944F' : '#F7F3EA', background: scrolled ? 'transparent' : 'rgba(247,243,234,0.08)', borderRadius: 2, cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#B8944F'; e.currentTarget.style.borderColor = '#B8944F'; e.currentTarget.style.color = '#F7F3EA' }}
            onMouseLeave={e => { e.currentTarget.style.background = scrolled ? 'transparent' : 'rgba(247,243,234,0.08)'; e.currentTarget.style.borderColor = scrolled ? '#B8944F' : 'rgba(247,243,234,0.6)'; e.currentTarget.style.color = scrolled ? '#B8944F' : '#F7F3EA' }}
          >
            Бронировать
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          <div style={{ width: 22, height: 1.5, background: scrolled ? '#252525' : '#F7F3EA', marginBottom: 5, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <div style={{ width: 22, height: 1.5, background: scrolled ? '#252525' : '#F7F3EA', marginBottom: 5, transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
          <div style={{ width: 22, height: 1.5, background: scrolled ? '#252525' : '#F7F3EA', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#F7F3EA', padding: '1rem 2rem 2rem', borderTop: '1px solid rgba(184,148,79,0.2)' }}>
          {links.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#252525', padding: '0.75rem 0', borderBottom: '1px solid rgba(37,37,37,0.08)' }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('reservation')} style={{ marginTop: '1rem', width: '100%', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.75rem', border: '1px solid #B8944F', color: '#B8944F', background: 'transparent', borderRadius: 2, cursor: 'pointer' }}>
            Забронировать столик
          </button>
        </div>
      )}
    </nav>
  )
}
