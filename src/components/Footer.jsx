const COMPANY_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Platforms', href: '#brands' },
  { label: 'Prometheus', href: '#/prometheus' },
  { label: 'White Label', href: '#white-label' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Restoration', href: '#restoration' },
  { label: 'Research', href: '#research' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Team', href: '#team' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground border-t border-white/5">
      <div className="container-edge py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <img
              src="/lovable/peakforce-logo-YY_iTjKO.png"
              alt="PeakForce"
              className="h-12 w-auto invert"
            />
            <p className="mt-8 max-w-md text-primary-foreground/65 leading-relaxed">
              PeakForce builds the infrastructure behind modern performance brands.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/50 mb-5">
              Company
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/50 mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="mailto:hello@peakforce.com"
                  className="hover:text-primary-foreground"
                >
                  hello@peakforce.com
                </a>
              </li>
              <li>Zürich, Switzerland</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-primary-foreground/55">
          <p>© 2026 PeakForce AG. All rights reserved. Made in Switzerland.</p>
          <div className="flex gap-6">
            <a href="#/privacy" className="hover:text-primary-foreground">
              Privacy
            </a>
            <a href="#/terms" className="hover:text-primary-foreground">
              Terms
            </a>
            <a href="#/impressum" className="hover:text-primary-foreground">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
