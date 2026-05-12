import { Quote } from 'lucide-react'

const TAGS = [
  'Acceleration-based training',
  'Peer-reviewed protocols',
  'VBT pipeline since 2017',
  'Computer vision on-device',
  'University of Zurich',
  'No cloud dependency',
]

export default function PrometheusLab() {
  return (
    <section
      id="research"
      className="relative overflow-hidden bg-charcoal text-primary-foreground"
    >
      <div className="absolute inset-0 opacity-25">
        <img
          src="/lovable/performance-bg-BxqgAg5A.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />

      <div className="relative container-edge py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <p className="eyebrow mb-5 text-teal">Prometheus Lab</p>
            <h2
              className="font-serif leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Performance is measurable.
              <br />
              <span className="italic text-primary-foreground/85">
                Systems make it repeatable.
              </span>
            </h2>

            <p className="mt-7 text-base md:text-lg text-primary-foreground/75 leading-relaxed">
              Our platforms are informed by structured performance research and applied
              measurement. PhD-level sports science drives every algorithm, every output, every
              claim — translating data into systems that operate reliably at scale.
            </p>

            <div className="mt-10 p-7 md:p-9 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl">
              <Quote size={22} strokeWidth={1.4} className="text-teal" />
              <p className="mt-4 font-serif text-xl md:text-2xl leading-snug italic text-primary-foreground/95">
                “We don't just build fitness apps. We build measurement instruments that happen to
                run on your phone.”
              </p>
              <div className="mt-5 text-sm">
                <div className="font-medium">Dr. Basil Achermann</div>
                <div className="text-primary-foreground/60">Chief Science Officer</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="text-[11px] uppercase tracking-[0.18em] text-primary-foreground/75 border border-white/15 rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lovable/research-BWHl8_yo.jpg"
              alt="PeakForce performance research lab"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
