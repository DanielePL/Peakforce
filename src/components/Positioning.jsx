export default function Positioning() {
  return (
    <section
      id="positioning"
      data-nav-theme="dark"
      className="relative bg-background overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: 'url(/lovable/positioning-bg-C2E-ke3n.webp)' }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(255,255,255,0.50)' }}
        aria-hidden
      />

      <div className="container-edge py-28 md:py-40 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl px-8 md:px-16 py-16 md:py-24 text-center overflow-hidden border border-white/40"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px) saturate(135%)',
              WebkitBackdropFilter: 'blur(20px) saturate(135%)',
            }}
          >
            <p className="eyebrow mb-6 text-charcoal">Positioning</p>
            <h2
              className="font-serif leading-[1.2] tracking-tight text-charcoal pb-2"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              Corporate Technology Infrastructure
            </h2>
            <p className="mt-8 text-base md:text-lg lg:text-xl text-charcoal/85 leading-relaxed max-w-3xl mx-auto">
              PeakForce operates as the corporate technology infrastructure behind a portfolio of
              performance platforms. We design, build and operate the systems that allow modern
              brands in health, wellness and human performance to scale — with structural
              integrity, shared architecture, and long-term operational depth.
            </p>

            <div
              className="mt-10 font-serif italic text-charcoal leading-snug space-y-1"
              style={{ fontSize: 'clamp(1.75rem, 4.2vw, 44px)' }}
            >
              <p>Not tools.</p>
              <p>Not features.</p>
              <p>Systems that execute.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
