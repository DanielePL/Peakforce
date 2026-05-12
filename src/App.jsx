import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Positioning from './components/Positioning'
import Origin from './components/Origin'
import About from './components/About'
import ImageDivider from './components/ImageDivider'
import OperatingModel from './components/OperatingModel'
import Platforms from './components/Platforms'
import Team from './components/Team'
import PrometheusLab from './components/PrometheusLab'
import Infrastructure from './components/Infrastructure'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Positioning />
      <Origin />
      <About />
      <ImageDivider
        image="/lovable/brand-2-bg-CSvc6lGD.webp"
        caption="Software Ecosystems for the Future of Health & Wellness"
      />
      <OperatingModel />
      <Platforms />
      <Team />
      <PrometheusLab />
      <ImageDivider
        image="/lovable/performance-bg-BxqgAg5A.webp"
        caption="Software that produces performance."
        height="h-[60vh]"
      />
      <Infrastructure />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  )
}
