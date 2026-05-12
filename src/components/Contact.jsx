import { ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable/scale-bg-DCfIdXP0.jpg"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(220_18%_8%/0.85),transparent_55%)]" />
      </div>

      <div className="relative container-edge py-32 md:py-44 text-center text-primary-foreground">
        <p className="eyebrow mb-6 text-teal">Get in Touch</p>
        <h2
          className="font-serif leading-[1.05] tracking-tight max-w-4xl mx-auto text-balance"
          style={{ fontSize: 'clamp(2.75rem, 7.5vw, 90px)' }}
        >
          Build on Infrastructure That Scales.
        </h2>
        <p className="mt-7 max-w-xl mx-auto text-primary-foreground/75 leading-relaxed">
          Speak with the PeakForce team about platform deployment, white-label infrastructure, or
          strategic partnership.
        </p>
        <a
          href="mailto:hello@peakforce.com"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 text-sm font-medium hover:bg-background/90 transition-all hover:gap-3"
        >
          Get in Touch
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
