export default function Origin() {
  return (
    <section className="bg-charcoal text-primary-foreground border-t border-white/5">
      <div className="container-edge py-32 md:py-44">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5 text-teal">Origin</p>
            <h2
              className="font-serif leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
            >
              Built from the inside of performance
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-7 text-base md:text-lg text-primary-foreground/75 leading-relaxed">
            <p>PeakForce did not begin as a software company.</p>
            <p>
              It began in training environments, research labs, and real-world performance systems
              — where measurement mattered, and approximation failed.
            </p>
            <p>
              Before infrastructure, there was a problem: performance could not be measured
              precisely, consistently, or at scale.
            </p>
            <p
              className="font-serif italic text-primary-foreground/95 leading-[1.05]"
              style={{ fontSize: '50px' }}
            >
              So the systems were built.
            </p>
            <div className="space-y-2 text-primary-foreground/80">
              <p>A velocity-based training pipeline developed over years.</p>
              <p>A scientist writing production code.</p>
              <p>A world champion operating at the highest level.</p>
            </div>
            <p>What started as solving real constraints became a foundation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
