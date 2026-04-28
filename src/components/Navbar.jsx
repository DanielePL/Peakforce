import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Software', href: '#portfolio' },
  { label: 'Prometheus', href: '#product' },
  { label: 'Science', href: '#lab' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setMobileOpen(false)
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-gold rounded-lg flex items-center justify-center font-bold text-sm">
              PF
            </div>
            <span className="font-bold text-lg tracking-tight">
              Peak<span className="text-accent">Force</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="mailto:hello@peakforce-solutions.com"
              className="px-5 py-2.5 bg-gold hover:bg-gold-light text-dark font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-light/95 backdrop-blur-md border-t border-dark-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-dark-card rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@peakforce-solutions.com"
            className="block mx-4 mt-4 px-5 py-2.5 bg-gold hover:bg-gold-light text-dark font-semibold text-sm rounded-lg text-center transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}
