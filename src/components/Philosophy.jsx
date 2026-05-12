const STATEMENTS = [
  'Measurement over assumption.',
  'Structure over fragmentation.',
  'Execution over narrative.',
]

export default function Philosophy() {
  return (
    <section id="philosophy" data-nav-theme="dark" className="bg-background">
      <div className="container-edge py-32 md:py-44">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-8">Philosophy</p>
          <div className="space-y-3 md:space-y-5">
            {STATEMENTS.map((s) => (
              <p
                key={s}
                className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground/90 italic leading-tight tracking-tight text-balance"
              >
                {s}
              </p>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-border max-w-2xl mx-auto">
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug text-balance">
              Made in Switzerland.
              <br />
              <span className="italic">Engineered for the world.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
