import { Hammer, Infinity as InfinityIcon, Rocket, Wrench, ArrowRight, Check } from 'lucide-react'

// Engagement models. Prices are entry-point anchors ("from") — edit freely.
// They are positioned at fair market value; the AI-augmented cost advantage
// stays in the margin, never advertised as a discount.
const MODELS = [
  {
    id: 'build',
    icon: Hammer,
    name: 'Build',
    tagline: 'One defined product, delivered fast.',
    price: 'from CHF 15’000',
    priceNote: 'fixed scope · fixed price',
    points: [
      'Locked scope, timeline and price upfront',
      'MVP, web app, mobile or platform',
      'Weeks, not quarters — time-to-market is the value',
    ],
    cta: 'Estimate your build',
    href: '#estimate',
  },
  {
    id: 'partner',
    icon: InfinityIcon,
    name: 'Partner',
    tagline: 'Your engineering team, as a subscription.',
    price: 'from CHF 9’500',
    priceNote: 'per month · pause anytime',
    points: [
      'Continuous development, one flat monthly fee',
      'A shared backlog — ship features on a steady cadence',
      'No hiring, no overhead, no long contracts',
    ],
    cta: 'Talk about a partnership',
    href: '#contact',
    featured: true,
  },
  {
    id: 'venture',
    icon: Rocket,
    name: 'Venture',
    tagline: 'We build it with you — and share the upside.',
    price: 'Reduced fee + equity',
    priceNote: 'for selected founders',
    points: [
      'Lower cash outlay in exchange for equity or revenue-share',
      'For startups with strong potential, limited budget',
      'We back what we build — skin in the game',
    ],
    cta: 'Pitch us your idea',
    href: '#contact',
  },
]

export default function Engagements() {
  return (
    <section id="pricing" data-nav-theme="dark" className="bg-background">
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Ways to Work With Us</p>
          <h2
            className="font-serif leading-[1.08] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            Three Ways In. One Standard.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Whether you need a single product shipped, a long-term engineering partner, or a
            co-founder in everything but name — there is a model that fits.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {MODELS.map((m) => {
            const Icon = m.icon
            return (
              <article
                key={m.id}
                className={`group relative flex h-full flex-col rounded-2xl border p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 ${
                  m.featured
                    ? 'border-transparent bg-charcoal text-primary-foreground shadow-[0_28px_70px_-18px_hsl(220_18%_4%/0.5)]'
                    : 'border-border/70 bg-[#F4F1EB] text-foreground hover:shadow-[0_22px_60px_-12px_hsl(220_18%_4%/0.18)]'
                }`}
              >
                {m.featured && (
                  <span className="absolute right-8 top-8 rounded-full bg-teal px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}

                <Icon
                  size={28}
                  strokeWidth={1.4}
                  className={m.featured ? 'text-teal' : 'text-teal'}
                />
                <h3 className="mt-6 font-serif text-3xl leading-snug">{m.name}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    m.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {m.tagline}
                </p>

                <div className="mt-6">
                  <p className="font-serif text-2xl">{m.price}</p>
                  <p
                    className={`mt-1 text-xs uppercase tracking-[0.14em] ${
                      m.featured ? 'text-primary-foreground/50' : 'text-foreground/45'
                    }`}
                  >
                    {m.priceNote}
                  </p>
                </div>

                <ul className="mt-7 space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed">
                      <Check
                        size={17}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-teal"
                      />
                      <span className={m.featured ? 'text-primary-foreground/85' : 'text-foreground/80'}>
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={m.href}
                  className={`group/btn mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all hover:gap-3 ${
                    m.featured
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'bg-charcoal text-primary-foreground hover:shadow-[0_0_24px_-4px_hsl(220_18%_4%/0.5)]'
                  }`}
                >
                  {m.cta}
                  <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-0.5" />
                </a>
              </article>
            )
          })}
        </div>

        {/* Restoration — the rare specialty. Most can build new; few can restore. */}
        <div
          id="restoration"
          className="scroll-mt-28 mt-6 lg:mt-8 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center rounded-2xl border border-teal/25 bg-[#F4F1EB] p-9 lg:p-12"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <Wrench size={26} strokeWidth={1.4} className="text-teal" />
              <p className="eyebrow !text-teal !tracking-[0.22em]">Software Restoration</p>
            </div>
            <h3 className="mt-5 font-serif text-3xl md:text-4xl leading-tight text-foreground">
              Anyone can build new. We restore what already runs.
            </h3>
            <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Aging systems, lost documentation, code no one dares to touch — that is where
              the real value sits, and where almost no one can help. We reverse-engineer
              existing software, rebuild it cleaner and faster, modernise legacy stacks, and
              graft on new features or AI assistants — without breaking what works. If we can
              reach the source, we can restore it.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-sm text-foreground/75">
              {[
                'Reverse-engineering & rebuilds',
                'Legacy modernisation',
                'AI features into existing apps',
                'Rescue & maintenance',
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={15} strokeWidth={2} className="text-teal" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-border/60 lg:pl-10">
            <p className="font-serif text-2xl text-foreground">By assessment</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-foreground/45">
              day rate or fixed scope
            </p>
            <a
              href="#contact"
              className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:gap-3"
            >
              Send us your system
              <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
