import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SoftwarePortfolio from './components/SoftwarePortfolio'
import ProductShowcase from './components/ProductShowcase'
import PrometheusLab from './components/PrometheusLab'
import Chameleon from './components/Chameleon'
import Technology from './components/Technology'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <SoftwarePortfolio />
      <ProductShowcase />
      <PrometheusLab />
      <Chameleon />
      <Technology />
      <Team />
      <Footer />
    </div>
  )
}
