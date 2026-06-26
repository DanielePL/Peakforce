import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Platforms', href: '#brands' },
  { label: 'Prometheus', href: '#/prometheus' },
  { label: 'White Label', href: '#white-label' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Restoration', href: '#restoration' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [navTheme, setNavTheme] = useState('light')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('[data-nav-theme]')
    if (!sections.length) return

    const update = () => {
      const probe = 80
      let current = 'light'
      for (const s of sections) {
        const rect = s.getBoundingClientRect()
        if (rect.top <= probe && rect.bottom > probe) {
          current = s.getAttribute('data-nav-theme') || 'light'
          break
        }
      }
      setNavTheme(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const isDarkText = navTheme === 'dark'

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto relative mx-auto w-[94%] md:w-[92%] max-w-[1400px] rounded-[20px] overflow-hidden backdrop-blur-2xl backdrop-saturate-150 transition-all duration-700 ${
          scrolled
            ? 'mt-3 md:mt-4 shadow-[0_22px_60px_-12px_hsl(220_18%_4%/0.45)]'
            : 'mt-5 md:mt-7 shadow-[0_10px_30px_-10px_hsl(220_18%_4%/0.22)]'
        }`}
        style={{
          backgroundColor: isDarkText
            ? 'hsl(0 0% 100% / 0.45)'
            : 'hsl(220 18% 10% / 0.18)',
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[20px] [background:radial-gradient(120%_80%_at_50%_0%,hsl(0_0%_100%/0.07),transparent_55%),radial-gradient(120%_100%_at_50%_120%,hsl(220_18%_4%/0.4),transparent_60%)]" />

        <div className="relative z-10 flex items-center justify-between px-5 lg:px-6 xl:px-8 py-3.5 md:py-4 gap-4">
          <a href="#" className="flex items-center shrink-0" aria-label="PeakForce">
            <img
              src="/lovable/peakforce-logo-YY_iTjKO.png"
              alt="PeakForce"
              className={`w-auto transition-all duration-500 ${
                isDarkText ? '' : 'invert'
              } ${scrolled ? 'h-9 lg:h-9' : 'h-11 lg:h-11'}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-3 xl:gap-7 ml-auto mr-3 xl:mr-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11px] xl:text-[13px] uppercase tracking-[0.12em] font-medium whitespace-nowrap transition-colors ${
                  isDarkText
                    ? 'text-charcoal/80 hover:text-charcoal'
                    : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`hidden lg:inline-flex items-center whitespace-nowrap rounded-full px-5 xl:px-7 py-3 xl:py-3.5 text-[12px] xl:text-[13px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 hover:scale-[1.03] ${
              isDarkText
                ? 'bg-charcoal text-primary-foreground hover:shadow-[0_0_24px_-4px_hsl(220_18%_4%/0.5)]'
                : 'bg-primary-foreground text-charcoal hover:shadow-[0_0_24px_-4px_hsl(0_0%_100%/0.5)]'
            }`}
          >
            Contact Us
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 -mr-2 transition-colors ${
              isDarkText ? 'text-charcoal' : 'text-primary-foreground'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div
            className={`lg:hidden border-t relative z-10 ${
              isDarkText ? 'border-charcoal/10' : 'border-white/15'
            }`}
          >
            <nav className="px-5 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm uppercase tracking-[0.12em] font-medium ${
                    isDarkText
                      ? 'text-charcoal/85 hover:text-charcoal'
                      : 'text-primary-foreground/85 hover:text-primary-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={`mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs uppercase tracking-[0.12em] font-semibold ${
                  isDarkText
                    ? 'bg-charcoal text-primary-foreground'
                    : 'bg-primary-foreground text-charcoal'
                }`}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
