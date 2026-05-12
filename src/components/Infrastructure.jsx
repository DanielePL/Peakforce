import { Layers, Globe2, Users, LayoutGrid } from 'lucide-react'

const CAPS = [
  {
    icon: Layers,
    title: 'Multi-Brand Environments',
    body: 'Distinct platforms on a unified architecture.',
  },
  {
    icon: Globe2,
    title: 'Multi-Region Deployment',
    body: 'Distribute services across geographies without duplication.',
  },
  {
    icon: Users,
    title: 'High-Volume User Systems',
    body: 'Scale to millions of sessions with operational integrity.',
  },
  {
    icon: LayoutGrid,
    title: 'Layered Product Ecosystems',
    body: 'Consumer, professional and enterprise on shared rails.',
  },
]

export default function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="bg-charcoal text-primary-foreground"
    >
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-teal mb-5">
            Infrastructure
          </p>
          <h2
            className="font-serif leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            Designed for Scale
          </h2>
          <p className="mt-7 text-base md:text-lg text-primary-foreground/70 leading-relaxed">
            The PeakForce stack is engineered as long-term infrastructure — not a collection of
            products. Every system built for distributed deployment, operational reliability and
            structural growth.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPS.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="h-full p-7 rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <Icon size={22} strokeWidth={1.5} className="text-teal" />
                <h3 className="mt-5 font-serif text-xl leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed">
                  {c.body}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mt-16 max-w-3xl font-serif italic text-2xl md:text-3xl text-primary-foreground/90 leading-snug">
          One foundation. Multiple platforms. Compounding value.
        </p>
      </div>
    </section>
  )
}
