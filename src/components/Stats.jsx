const STATS = [
  { value: '2017', label: 'VBT research pipeline in continuous development' },
  { value: '7+', label: 'Active platforms across consumer, pro & enterprise' },
  { value: '4.5M', label: 'Food database entries inside Prometheus' },
  { value: 'PhD', label: 'Science leadership at every product decision' },
]

export default function Stats() {
  return (
    <section data-nav-theme="dark" className="border-y border-border bg-secondary">
      <div className="container-edge py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <p
                className="font-serif text-foreground tracking-tight tabular-nums leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 64px)' }}
              >
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[18rem]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
