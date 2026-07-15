import galleryImg1 from '../assets/gallery-1x7.jpg'
import galleryImg2 from '../assets/gallery-2x7.jpg'
import galleryImg3 from '../assets/gallery-3x7.jpg'
import galleryImg4 from '../assets/gallery-4x7.jpg'
import galleryImg5 from '../assets/gallery-5x7.jpg'
import galleryImg6 from '../assets/gallery-6x7.jpg'
import galleryImg7 from '../assets/gallery-7x7.jpg'

const photos = [
  { img: galleryImg1, alt: 'Restaurant interior with plants', span: 'tall' },
  { img: galleryImg2, alt: 'Wine glasses by candlelight', span: 'normal' },
  { img: galleryImg3, alt: 'Premium plated dish with wine', span: 'normal' },
  { img: galleryImg4, alt: 'Two glasses on table setting', span: 'normal' },
  { img: galleryImg7, alt: 'Romantic table set for two with wine', span: 'tall' },
  { img: galleryImg5, alt: 'Champagne flutes lined at bar', span: 'normal' },
  { img: galleryImg6, alt: 'Food and wine on dinner table', span: 'normal' },
]

export default function Gallery() {
  return (
    <section style={{ background: '#F7F3EA', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8944F', marginBottom: '0.75rem' }}>
            Атмосфера
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: '#252525', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Место, которое<br /><em>захочется посетить снова</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridAutoRows: '220px',
          gap: '0.75rem',
        }}>
          {photos.map((p, i) => (
            <div
              key={i}
              style={{
                borderRadius: 6,
                overflow: 'hidden',
                background: '#C4B89A',
                gridRow: p.span === 'tall' ? 'span 2' : 'span 1',
                position: 'relative',
              }}
            >
              <img
                src={p.img}
                alt={p.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                onMouseEnter={e => { (e.target as HTMLImageElement).style.transform = 'scale(1.05)' }}
                onMouseLeave={e => { (e.target as HTMLImageElement).style.transform = 'scale(1)' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive fallback for small screens */}
      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid > div { grid-row: span 1 !important; }
        }
        @media (max-width: 500px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
