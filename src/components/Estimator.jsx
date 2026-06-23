import { useMemo, useState } from 'react'
import {
  LayoutTemplate,
  AppWindow,
  Smartphone,
  Boxes,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Gauge,
  Plug,
  RefreshCw,
  ArrowRight,
  Check,
} from 'lucide-react'

// Indicative ranges in CHF. Deliberately broad — the goal is to qualify and
// set expectations, not to issue a binding quote. Real number comes after a call.
const PROJECT_TYPES = [
  { id: 'landing', label: 'Marketing Site', icon: LayoutTemplate, low: 8000, high: 18000 },
  { id: 'webapp', label: 'Web App / SaaS', icon: AppWindow, low: 25000, high: 60000 },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone, low: 30000, high: 70000 },
  { id: 'platform', label: 'Custom Platform', icon: Boxes, low: 50000, high: 120000 },
  { id: 'ai', label: 'AI / Automation', icon: Sparkles, low: 20000, high: 50000 },
]

const FEATURES = [
  { id: 'auth', label: 'Accounts & login', icon: ShieldCheck, low: 4000, high: 9000 },
  { id: 'payments', label: 'Payments & billing', icon: CreditCard, low: 5000, high: 12000 },
  { id: 'admin', label: 'Admin dashboard', icon: Gauge, low: 6000, high: 15000 },
  { id: 'integrations', label: 'APIs & integrations', icon: Plug, low: 5000, high: 14000 },
  { id: 'aifeatures', label: 'AI features', icon: Sparkles, low: 10000, high: 30000 },
  { id: 'realtime', label: 'Real-time / data sync', icon: RefreshCw, low: 8000, high: 20000 },
]

const TIMELINES = [
  { id: 'flexible', label: 'Flexible', note: 'No fixed deadline', mult: 0.95 },
  { id: 'standard', label: 'Standard', note: '2–4 months', mult: 1 },
  { id: 'urgent', label: 'Urgent', note: 'ASAP — fast track', mult: 1.25 },
]

// de-CH formatting with apostrophe thousands separator, rounded to nearest 1'000.
const formatChf = (n) => {
  const rounded = Math.round(n / 1000) * 1000
  return 'CHF ' + rounded.toLocaleString('de-CH').replace(/,/g, '’')
}

export default function Estimator() {
  const [type, setType] = useState('webapp')
  const [features, setFeatures] = useState(['auth'])
  const [timeline, setTimeline] = useState('standard')

  const toggleFeature = (id) =>
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )

  const { low, high } = useMemo(() => {
    const base = PROJECT_TYPES.find((t) => t.id === type) || PROJECT_TYPES[0]
    const mult = (TIMELINES.find((t) => t.id === timeline) || TIMELINES[1]).mult
    let low = base.low
    let high = base.high
    for (const f of FEATURES) {
      if (features.includes(f.id)) {
        low += f.low
        high += f.high
      }
    }
    return { low: low * mult, high: high * mult }
  }, [type, features, timeline])

  return (
    <section
      id="estimate"
      data-nav-theme="dark"
      style={{ backgroundColor: '#F4F1EB' }}
    >
      <div className="container-edge py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Project Estimate</p>
          <h2
            className="font-serif leading-[1.08] tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
          >
            What Would It Cost to Build?
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Tell us roughly what you have in mind and get an indicative range in seconds.
            Every PeakForce build is bespoke — this is a starting point, not a quote.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-7 space-y-10">
            {/* Project type */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/55 mb-4">
                1 — What are you building?
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PROJECT_TYPES.map((t) => {
                  const Icon = t.icon
                  const active = type === t.id
                  return (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`group flex flex-col items-start gap-3 rounded-2xl border p-5 text-left transition-all duration-300 ${
                        active
                          ? 'border-teal bg-teal text-primary-foreground shadow-[0_18px_44px_-14px_hsl(178_28%_32%/0.5)]'
                          : 'border-border/70 bg-[#e9e4d9] text-foreground hover:-translate-y-0.5 hover:border-teal/40'
                      }`}
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.4}
                        className={active ? 'text-primary-foreground' : 'text-teal'}
                      />
                      <span className="text-sm font-medium leading-snug">{t.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/55 mb-4">
                2 — What should it include?
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {FEATURES.map((f) => {
                  const Icon = f.icon
                  const active = features.includes(f.id)
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
                        active
                          ? 'border-teal/60 bg-teal/10 text-foreground'
                          : 'border-border/70 bg-[#e9e4d9] text-foreground/80 hover:border-teal/40'
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                          active ? 'bg-teal text-primary-foreground' : 'bg-background text-teal'
                        }`}
                      >
                        {active ? <Check size={15} strokeWidth={2.4} /> : <Icon size={15} strokeWidth={1.6} />}
                      </span>
                      <span className="text-sm font-medium leading-snug">{f.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-foreground/55 mb-4">
                3 — How soon do you need it?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {TIMELINES.map((t) => {
                  const active = timeline === t.id
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTimeline(t.id)}
                      className={`rounded-xl border px-4 py-4 text-left transition-all duration-300 ${
                        active
                          ? 'border-teal bg-teal text-primary-foreground'
                          : 'border-border/70 bg-[#e9e4d9] text-foreground hover:border-teal/40'
                      }`}
                    >
                      <span className="block text-sm font-semibold">{t.label}</span>
                      <span
                        className={`mt-1 block text-xs ${
                          active ? 'text-primary-foreground/75' : 'text-muted-foreground'
                        }`}
                      >
                        {t.note}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-charcoal text-primary-foreground p-9 lg:p-11 shadow-[0_28px_70px_-18px_hsl(220_18%_4%/0.5)]">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/55">
                Indicative range
              </p>
              <p
                className="mt-4 font-serif leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)' }}
              >
                {formatChf(low)}
                <span className="text-primary-foreground/45"> – </span>
                {formatChf(high)}
              </p>
              <p className="mt-5 text-sm text-primary-foreground/65 leading-relaxed">
                A realistic starting band based on your selection. Scope, integrations and
                design depth move the final figure — we pin it down together in a short call.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-background text-foreground px-7 py-4 text-sm font-medium transition-all hover:gap-3"
              >
                Get a precise quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>

              <p className="mt-5 flex items-center gap-2 text-xs text-primary-foreground/45">
                <ShieldCheck size={14} strokeWidth={1.6} />
                No commitment. Swiss-engineered, fixed-scope proposals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
