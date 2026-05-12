const PLATFORMS = [
  {
    status: 'Live',
    eyebrow: 'Platform — Flagship Consumer',
    name: 'Prometheus Athlete App',
    body: 'Consumer performance application for training, tracking and nutrition. Real-time VBT barbell velocity analysis via phone camera. 4.5M food database. Adaptive coaching engine. iOS & Android.',
    image: '/lovable/brand-1-DBGGg0YL.webp',
    imageFit: 'contain',
    bg: '#FFFFFF',
    dark: false,
    flushImage: false,
  },
  {
    status: 'Live',
    eyebrow: 'Platform — Professional',
    name: 'Prometheus Coach',
    body: 'Web-based coaching infrastructure with iOS & Android companion apps. Manage, analyze and scale athlete performance across distributed environments.',
    image: '/lovable/brand-2-CuYoXnfy.webp',
    imageFit: 'contain',
    bg: '#F4F1EB',
    dark: false,
    flushImage: false,
  },
  {
    status: 'Live',
    eyebrow: 'Platform — Enterprise',
    name: 'Prometheus Enterprise',
    body: 'Enterprise-grade platform for gyms, studios and clinical environments. Multi-location operations, staff coordination, system-wide performance deployment.',
    image: '/lovable/brand-3-DbbUlsxQ.webp',
    imageFit: 'contain',
    bg: '#FFFFFF',
    dark: false,
    flushImage: false,
  },
  {
    status: 'Live',
    eyebrow: 'Platform — B2B',
    name: 'LED Pro Studio',
    body: 'Intelligent lighting infrastructure for studios, gyms and wellness venues. Adaptive control, class-aware presets, live CHF energy dashboard. Built for LED Pro Schweiz.',
    image: '/lovable/brand-5-DtA6ZcVR.webp',
    imageFit: 'cover',
    bg: '#F4F1EB',
    dark: false,
    flushImage: true,
  },
  {
    status: 'In Development',
    eyebrow: 'Platform — Education',
    name: 'Prometheus Campus',
    body: 'Coaching academy, social network and built-in video & communication. Certified coach tracks, examinations, credentials.',
    image: '/lovable/prometheus-campus-B1HlVPJl.jpg',
    imageFit: 'cover',
    bg: '#FFFFFF',
    dark: false,
    flushImage: true,
  },
  {
    status: 'Live',
    eyebrow: 'Platform — Personal Performance',
    name: 'Daniele Pauli Coaching',
    body: 'Applied training systems and individualized athlete progression — powered by PeakForce infrastructure.',
    image: '/lovable/brand-6-BHQuzF58.webp',
    imageFit: 'contain',
    bg: '#161615',
    dark: true,
    flushImage: false,
  },
  {
    status: 'Live',
    eyebrow: 'Platform — Wellness Development',
    name: 'Personal Wellness Development by Sjoerd Joosten',
    body: 'Personal transformation through behavioral systems, mindset structure and long-term development — powered by PeakForce.',
    image: '/lovable/brand-7-CtZYeoAD.webp',
    imageFit: 'contain',
    bg: '#272726',
    dark: true,
    flushImage: false,
  },
]

function PlatformImage({ src, alt, fit, dark }) {
  const isContain = fit === 'contain'
  return (
    <div
      className={`relative aspect-[5/4] lg:aspect-[16/11] w-full overflow-hidden ${
        isContain ? 'bg-transparent' : dark ? 'bg-charcoal' : 'bg-muted'
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 w-full ${
          isContain ? 'h-full object-contain scale-110' : 'h-full object-cover'
        }`}
      />
      {!isContain && (
        <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(220_18%_8%/0.25),transparent_55%)]" />
      )}
    </div>
  )
}

export default function Platforms() {
  return (
    <section id="brands" data-nav-theme="dark" className="bg-background">
      <div className="container-edge pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Our Platforms</p>
          <h2
            className="font-serif leading-[1.06] tracking-tight text-foreground text-balance"
            style={{ fontSize: 'clamp(2.75rem, 7.5vw, 5rem)' }}
          >
            A Portfolio of Operating Platforms
          </h2>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            PeakForce builds and operates platforms across consumer, professional, enterprise and
            white-label environments — connected through a single infrastructure layer.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {PLATFORMS.map((p, idx) => {
          const reverse = idx % 2 === 1
          const hasBg = !!p.bg
          return (
            <div
              key={p.name}
              data-nav-theme={hasBg && !p.dark ? 'dark' : undefined}
              className="relative w-full"
              style={hasBg ? { backgroundColor: p.bg } : undefined}
            >
              <div
                className={`w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center px-4 md:px-[10px] ${
                  p.flushImage ? 'py-0' : 'py-16 md:py-20 lg:py-24'
                }`}
              >
                <div className={reverse ? 'md:order-2' : ''}>
                  <PlatformImage
                    src={p.image}
                    alt={p.name}
                    fit={p.imageFit}
                    dark={p.dark}
                  />
                </div>
                <div
                  className={`md:px-6 lg:px-10 ${reverse ? 'md:order-1' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-5 flex-wrap">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] font-medium px-3 py-1.5 rounded-full border ${
                        p.status === 'Live'
                          ? 'border-teal/40 text-teal bg-teal/5'
                          : p.dark
                          ? 'border-white/30 text-primary-foreground/80 bg-white/5'
                          : 'border-border text-muted-foreground bg-muted'
                      }`}
                    >
                      <span
                        className={`inline-block w-1.5 h-1.5 rounded-full ${
                          p.status === 'Live' ? 'bg-teal' : 'bg-amber-500'
                        }`}
                      />
                      {p.status}
                    </span>
                    <p
                      className={`eyebrow !mb-0 ${
                        p.dark ? 'text-primary-foreground/70' : ''
                      }`}
                    >
                      {p.eyebrow}
                    </p>
                  </div>

                  <h3
                    className={`font-serif tracking-tight leading-[1.02] ${
                      p.dark ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-7 text-lg md:text-xl leading-relaxed max-w-[640px] ${
                      p.dark ? 'text-primary-foreground/75' : 'text-muted-foreground'
                    }`}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
              {idx < PLATFORMS.length - 1 && !hasBg && (
                <div className="h-px bg-border" />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
