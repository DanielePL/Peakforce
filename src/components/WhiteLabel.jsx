import { Palette, Globe, Boxes } from 'lucide-react'

// Commercial expression of the Infrastructure story: one foundation, many
// platforms — now offered under the client's brand. Dark section (no
// data-nav-theme) so the generated product video carries the surface.
const POINTS = [
  {
    icon: Palette,
    title: 'Your Brand',
    body: 'Logo, palette and identity applied end to end. Your customers never see ours.',
  },
  {
    icon: Globe,
    title: 'Your Domain',
    body: 'Deployed on your domains and app stores. We stay invisible by design.',
  },
  {
    icon: Boxes,
    title: 'Our Engine',
    body: 'The full Swiss-built stack underneath — maintained, scaled and secured by us.',
  },
]

export default function WhiteLabel() {
  return (
    <section id="white-label" className="bg-charcoal text-primary-foreground">
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-teal mb-5">
            White Label
          </p>
          <h2
            className="font-serif leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            Your Brand. <span className="italic">Our Ecosystem.</span>
          </h2>
          <p className="mt-7 text-base md:text-lg text-primary-foreground/70 leading-relaxed">
            Every platform we build is available white-label — across the entire ecosystem.
            Consumer apps, professional tools and enterprise systems, deployed under your name on
            our Swiss infrastructure. You own the brand. We run the engine.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
          <video
            className="w-full aspect-video object-cover"
            src="/white-label.mp4"
            poster="/white-label-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {POINTS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="h-full p-7 rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <Icon size={22} strokeWidth={1.5} className="text-teal" />
                <h3 className="mt-5 font-serif text-xl leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/65 leading-relaxed">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>

        <p className="mt-16 max-w-3xl font-serif italic text-2xl md:text-3xl text-primary-foreground/90 leading-snug">
          One ecosystem. Infinite brands.
        </p>
      </div>
    </section>
  )
}
