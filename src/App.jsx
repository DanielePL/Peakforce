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
import Estimator from './components/Estimator'
import Engagements from './components/Engagements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import PrivacyPolicy from './components/legal/PrivacyPolicy'
import TermsOfService from './components/legal/TermsOfService'
import Impressum from './components/legal/Impressum'
import PrometheusPage from './components/prometheus/PrometheusPage'

const routedPages = {
  privacy: PrivacyPolicy,
  terms: TermsOfService,
  impressum: Impressum,
  prometheus: PrometheusPage,
}

const getRoute = () => window.location.hash.replace(/^#\/?/, '')

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => {
      const next = getRoute()
      setRoute(next)
      // Only jump to top for full-page routes (e.g. #/privacy). In-page
      // anchors (#pricing, #restoration, …) must keep their native scroll.
      if (routedPages[next]) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const RoutedPage = routedPages[route]
  if (RoutedPage) {
    return <RoutedPage />
  }

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
      <Estimator />
      <Engagements />
      <Contact />
      <Footer />
    </main>
  )
}
