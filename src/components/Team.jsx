// Studio credibility strip. Curated for the software-services audience:
// the builder + tech/business pedigree that signals "trust us with your
// source code". Sport-science profiles live on the Prometheus product page,
// where the athletic framing belongs.
const MEMBERS = [
  {
    name: 'Daniele Pauli',
    role: 'Founder & Builder',
    image: '/lovable/team-daniele-BLXKUkZa.webp',
    bio: "Lead builder. Paired with AI, engineered the entire Prometheus ecosystem — 8 applications, 1.4M lines of production code — in 11 months. IPF World Champion: the same discipline, applied to software.",
    tags: ['AI-Augmented Build', 'Prometheus Architect'],
  },
  {
    name: 'Dr. Kevin Uram',
    role: 'Technical Advisor',
    image: '/lovable/team-kevin-C0fI8Aqs.webp',
    bio: 'PhD Physical Chemistry, University of Pittsburgh. Former IBM Senior Technical Staff Member. Managing Director, Lumileds. Holder of multiple US patents.',
    tags: ['IBM', 'US Patents'],
  },
  {
    name: 'Karin Känel',
    role: 'Operations & PM',
    image: '/lovable/team-karin-CvIBcsd_.webp',
    bio: 'Former constructor at Bruker BioSpin — global leader in NMR spectrometers. Certified Technische Kauffrau. Swiss-precision delivery.',
    tags: ['Bruker BioSpin', 'Precision Engineering'],
  },
  {
    name: 'Sascha Tarone',
    role: 'Advisor',
    image: '/lovable/team-sascha-9mDApBbm.webp',
    bio: 'Two decades in financial analytics. Brings business and financial rigour to every project — viability, pricing and revenue modelling from first scope to launch.',
    tags: ['Financial Analytics', 'Strategic Advisory'],
  },
]

export default function Team() {
  return (
    <section id="team" data-nav-theme="dark" className="bg-secondary">
      <div className="container-edge pt-16 md:pt-20 pb-28 md:pb-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Who You Work With</p>
          <h2
            className="font-serif leading-[1.08] tracking-tight text-foreground text-balance"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            The People Behind the Code.
          </h2>
          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed">
            Deep engineering and precision-industry pedigree — paired with an AI-augmented build
            method that ships at a pace traditional teams can't match. The people you'd hand the
            keys to.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {MEMBERS.map((m) => (
            <article key={m.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(220_18%_8%/0.35),transparent_55%)]" />
              </div>

              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-teal font-medium">
                  {m.role}
                </p>
                <h3 className="mt-2 font-serif text-2xl md:text-[28px] leading-tight text-foreground">
                  {m.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.18em] text-foreground/75 border border-border rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
