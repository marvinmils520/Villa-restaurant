import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Dishes from './components/Dishes'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import MenuSection from './components/MenuSection'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      <Nav />
      <Hero />
      <About />
      <Dishes />
      <Gallery />
      <WhyUs />
      <MenuSection />
      <Events />
      <Testimonials />
      <Reservation />
      <Location />
      <Footer />
    </div>
  )
}
