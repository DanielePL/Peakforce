const MEMBERS = [
  {
    name: 'Daniele Pauli',
    role: 'CEO & Founder',
    image: '/lovable/team-daniele-BLXKUkZa.webp',
    bio: "IPF World Champion (2018). Former Training Officer, Credit Suisse Health Management. 14,000+ coaching sessions. Developed the world's first 9-axis bar acceleration VBT prototype in 2017.",
    tags: ['IPF World Champion', 'VBT Pioneer'],
  },
  {
    name: 'Dr. Basil Achermann',
    role: 'Chief Science Officer',
    image: '/lovable/team-basil-DdeTDupP.webp',
    bio: 'PhD Sport Science, University of Zurich. The rare scientist who can both design the experiment and write the code. Leads the Prometheus Lab and drives the R&D pipeline.',
    tags: ['PhD Sport Science', 'Measurement Methodology'],
  },
  {
    name: 'Sjoerd Joosten',
    role: 'Chief Operating Officer',
    image: '/lovable/team-sjoerd-BU1G6MS9.webp',
    bio: 'Sport psychologist. Extensive experience leading talent sport schools. B2B specialist driving PeakForce into gyms, clinics and enterprises across Europe.',
    tags: ['Sport Psychology', 'Enterprise Growth'],
  },
  {
    name: 'Karin Känel',
    role: 'Executive Assistant & PM',
    image: '/lovable/team-karin-CvIBcsd_.webp',
    bio: 'Former constructor at Bruker BioSpin — global leader in NMR spectrometers. Certified Technische Kauffrau. Swiss clockwork efficiency.',
    tags: ['Bruker BioSpin', 'Precision Engineering'],
  },
  {
    name: 'Sascha Tarone',
    role: 'Advisor & Early Investor',
    image: '/lovable/team-sascha-9mDApBbm.webp',
    bio: '20 years in financial analytics. Shapes PeakForce from business model to exit strategy.',
    tags: ['Financial Analytics', 'Strategic Advisory'],
  },
  {
    name: 'Dr. Kevin Uram',
    role: 'Early Investor & Technical Advisor',
    image: '/lovable/team-kevin-C0fI8Aqs.webp',
    bio: 'PhD Physical Chemistry, University of Pittsburgh. Former IBM Senior Technical Staff Member. Managing Director, Lumileds. Multiple US patents.',
    tags: ['IBM', 'Lumileds', 'US Patents'],
  },
]

export default function Team() {
  return (
    <section id="team" data-nav-theme="dark" className="bg-secondary">
      <div className="container-edge pt-16 md:pt-20 pb-28 md:pb-36">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">The Studio Behind the Software</p>
          <h2
            className="font-serif leading-[1.08] tracking-tight text-foreground text-balance"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            Built by Scientists. <span className="italic">Driven by Athletes.</span>
          </h2>
          <p className="mt-7 text-base md:text-lg text-muted-foreground leading-relaxed">
            The PeakForce core team — sport science, precision engineering and elite athletic
            performance under one roof. Swiss-founded. Globally minded.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
