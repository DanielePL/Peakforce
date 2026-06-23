import { ArrowLeft } from 'lucide-react'

export default function LegalLayout({ eyebrow, title, intro, lastUpdated, children }) {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container-edge flex items-center justify-between py-5">
          <a href="#" className="flex items-center shrink-0" aria-label="PeakForce">
            <img
              src="/lovable/peakforce-logo-YY_iTjKO.png"
              alt="PeakForce"
              className="h-9 w-auto"
            />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.12em] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="container-edge flex-1 py-20 md:py-28">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1
            className="font-serif leading-[1.05] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 64px)' }}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>
          )}
          {lastUpdated && (
            <p className="mt-4 text-sm text-muted-foreground/70">Last updated: {lastUpdated}</p>
          )}

          <div className="mt-12 space-y-10 leading-relaxed text-foreground/85">
            {children}
          </div>
        </div>
      </article>

      {/* Minimal footer bar */}
      <footer className="border-t border-border">
        <div className="container-edge py-8 text-xs text-muted-foreground flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p>© 2026 PeakForce AG. All rights reserved. Made in Switzerland.</p>
          <div className="flex gap-6">
            <a href="#/privacy" className="hover:text-foreground">Privacy</a>
            <a href="#/terms" className="hover:text-foreground">Terms</a>
            <a href="#/impressum" className="hover:text-foreground">Impressum</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export function Section({ heading, children }) {
  return (
    <section>
      <h2 className="font-serif text-2xl md:text-[28px] tracking-tight mb-4">{heading}</h2>
      <div className="space-y-3 text-muted-foreground">{children}</div>
    </section>
  )
}
