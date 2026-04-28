import { Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'

const pageLinks = [
  { label: 'Software', href: '#portfolio' },
  { label: 'Inside Prometheus', href: '#product' },
  { label: 'Science', href: '#lab' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technology', href: '#technology' },
  { label: 'Team', href: '#team' },
]

const softwareLinks = [
  { label: 'Prometheus', href: 'https://prometheus.coach' },
  { label: 'Athlete App', href: 'https://prometheus.coach/app' },
  { label: 'Coach Software', href: 'https://prometheus.coach' },
  { label: 'Prometheus Enterprise', href: 'https://prometheus.coach/enterprise' },
  { label: 'LED Pro Studio', href: 'https://www.ledpro.solutions/' },
  { label: 'Prometheus Campus — Coming Soon', href: 'mailto:hello@peakforce-solutions.com?subject=Prometheus%20Campus%20-%20Notify%20Me' },
]

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'X' },
]

const legal = [
  { label: 'Privacy Policy', href: 'https://prometheus.coach/legal/privacy' },
  { label: 'Terms of Service', href: 'https://prometheus.coach/legal/terms' },
  { label: 'Impressum', href: 'https://prometheus.coach/legal/impressum' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-dark-border bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center font-bold text-sm">
                PF
              </div>
              <span className="font-bold text-lg tracking-tight">
                Peak<span className="text-accent">Force</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-sm">
              Swiss software studio for sport, health and performance. Builders of the Prometheus
              ecosystem, LED Pro Studio and Prometheus Campus — by scientists and world-class
              athletes.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Page Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Portfolio */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Software</h4>
            <ul className="space-y-2">
              {softwareLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <a
              href="mailto:hello@peakforce-solutions.com"
              className="text-sm text-gray-500 hover:text-accent transition-colors"
            >
              hello@peakforce-solutions.com
            </a>

            <h4 className="text-sm font-semibold text-white mt-8 mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © 2025 PeakForce — Swiss software for sport, health & performance
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-card border border-dark-border rounded-full">
                <span className="text-xs">🇨🇭</span>
                <span className="text-[10px] text-gray-500 font-medium">Made in Switzerland</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-card border border-dark-border rounded-full">
                <span className="text-xs">🇪🇺</span>
                <span className="text-[10px] text-gray-500 font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
