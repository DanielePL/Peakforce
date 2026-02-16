import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ProductShowcase from './components/ProductShowcase'
import PrometheusLab from './components/PrometheusLab'
import Chameleon from './components/Chameleon'
import FreeTrial from './components/FreeTrial'
import Technology from './components/Technology'
import Team from './components/Team'
import Roadmap from './components/Roadmap'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProductShowcase />
      <PrometheusLab />
      <Chameleon />
      <FreeTrial />
      <Technology />
      <Team />
      <Roadmap />
      <Testimonials />
      <Footer />
    </div>
  )
}
