import { Boxes, Handshake } from 'lucide-react'

const MODELS = [
  {
    icon: Boxes,
    title: 'Internal Brand Ecosystems',
    body: 'PeakForce develops, owns and operates a portfolio of consumer, professional and enterprise platforms. Each brand sits on shared infrastructure — not a collection of products, but a single architecture expressed across multiple surfaces.',
  },
  {
    icon: Handshake,
    title: 'White-Label & Strategic Infrastructure',
    body: 'Selected partners deploy PeakForce systems under their own brand. We provide the engineering substrate, the operational layer and long-term integration. Partners retain identity and customer relationship.',
  },
]

export default function OperatingModel() {
  return (
    <section data-nav-theme="dark" style={{ backgroundColor: '#F4F1EB' }}>
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Operating Model</p>
          <h2
            className="font-serif leading-[1.08] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            Built, Owned, and Deployed
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {MODELS.map((m) => {
            const Icon = m.icon
            return (
              <article
                key={m.title}
                className="group h-full p-9 lg:p-12 rounded-2xl border border-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_-12px_hsl(220_18%_4%/0.18)]"
                style={{ backgroundColor: '#e9e4d9' }}
              >
                <Icon size={28} strokeWidth={1.4} className="text-teal" />
                <h3 className="mt-6 font-serif text-2xl md:text-3xl text-foreground leading-snug">
                  {m.title}
                </h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">{m.body}</p>
              </article>
            )
          })}
        </div>

        <p
          className="mt-16 max-w-4xl mx-auto text-center font-serif italic text-foreground/85 leading-snug text-balance"
          style={{ fontSize: 'clamp(1.75rem, 4.2vw, 44px)' }}
        >
          One infrastructure. Multiple platforms.
          <br />
          A single foundation engineered for long-term performance.
        </p>
      </div>
    </section>
  )
}
