import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-charcoal">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable/hero-1-1-BGmEXgR6.webp"
          alt=""
          fetchPriority="high"
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 object-cover object-[center_65%]"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[hsl(215_35%_12%)]/55" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,hsl(215_40%_10%/0.7),hsl(215_40%_12%/0.35),hsl(215_40%_15%/0.1))]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,hsl(215_40%_8%/0.75)_0%,transparent_45%)]" />

      <div className="relative z-20 w-full container-edge py-20 md:py-28 pt-28 md:pt-32">
        <div className="max-w-none text-left">
          <p className="text-[11px] uppercase tracking-[0.32em] text-primary-foreground/65 mb-10">
            Swiss Software Infrastructure
          </p>

          <h1
            className="font-serif font-medium leading-[1.06] tracking-tight text-primary-foreground"
            style={{ fontSize: 'clamp(3rem, 9vw, 112px)' }}
          >
            Built for performance.
            <br />
            <span className="italic text-primary-foreground/85">Engineered for scale.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-primary-foreground/75">
            PeakForce designs, builds and operates the software infrastructure behind the next
            generation of health, wellness and human performance platforms.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#brands"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground text-charcoal px-7 py-4 text-sm font-medium hover:bg-primary-foreground/90 transition-all active:scale-[0.97]"
            >
              See Our Platforms
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors active:scale-[0.97]"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 right-6 md:right-10 z-20 text-[10px] md:text-xs uppercase tracking-[0.32em] text-primary-foreground/55">
        Zürich · Switzerland
      </p>
    </section>
  )
}
