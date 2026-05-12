const POINTS = [
  'Software platform engineering & multi-brand architecture',
  'Distributed operational systems built for compounding scale',
  'PhD-level performance research at every product decision',
  'White-label & strategic infrastructure for partner brands',
  'Long-term ecosystem development across health & wellness',
]

export default function About() {
  return (
    <section id="about" data-nav-theme="dark" className="relative bg-secondary overflow-hidden">
      <div className="container-edge py-32 md:py-44">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/lovable/about-CteB7rWk.jpg"
              alt="PeakForce systems engineering"
              loading="lazy"
              className="absolute inset-0 w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(220_18%_8%/0.25),transparent_50%)]" />
          </div>

          <div>
            <p className="eyebrow mb-5">About PeakForce</p>
            <h2
              className="font-serif leading-[1.08] tracking-tight text-foreground text-balance"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              A parent company building performance systems for the long term.
            </h2>
            <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed">
              PeakForce is structured as a corporate technology and operating company. We hold,
              develop and deploy a portfolio of platforms across consumer, professional, enterprise
              and white-label environments — connected through a single infrastructure layer.
            </p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-4 border-t border-border/70 pt-4"
                >
                  <span className="font-serif text-sm text-teal mt-1 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="text-foreground/85 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <p
              className="mt-10 font-serif italic text-foreground/85 leading-snug"
              style={{ fontSize: '32px' }}
            >
              One infrastructure. Multiple platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
