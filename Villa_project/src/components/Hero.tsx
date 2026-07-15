import { useEffect, useRef } from 'react'
import heroImg from '../assets/hero-dark.png'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <section
      style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', background: '#252525' }}
    >
      {/* Parallax background */}
      <div
        ref={parallaxRef}
        style={{
          position: 'absolute',
          inset: '-10%',
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
      />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(37,37,37,0.3) 0%, rgba(37,37,37,0.1) 40%, rgba(37,37,37,0.65) 100%)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 3rem 6rem' }}>
        <div style={{ maxWidth: 820 }}>
          {/* Eyebrow */}
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '1.5rem' }}>
            Европейская кухня · Основано в 2012
          </p>

          {/* Headline */}
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 400, lineHeight: 1.05, color: '#F7F3EA', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            Каждый ужин<br />
            <em>становится</em><br />
            особенным событием
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', fontWeight: 300, color: 'rgba(247,243,234,0.8)', marginBottom: '2.5rem', lineHeight: 1.7, letterSpacing: '0.02em' }}>
            Европейская кухня. Тёплая атмосфера. Идеальные вечера.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '0.9rem 2.2rem', background: '#B8944F', color: '#F7F3EA', border: 'none', borderRadius: 2, cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D4AE72' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8944F' }}
            >
              Забронировать столик
            </button>
            <button
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase',
                padding: '0.9rem 2.2rem',
                background: 'rgba(247,243,234,0.1)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#F7F3EA', border: '1px solid rgba(247,243,234,0.35)', borderRadius: 2, cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(247,243,234,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(247,243,234,0.1)' }}
            >
              Посмотреть меню
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2.5rem', right: '3rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,243,234,0.5)', writingMode: 'vertical-lr' }}>Прокрутить</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(247,243,234,0.5), transparent)', animation: 'pulse 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}