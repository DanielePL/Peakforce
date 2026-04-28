import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Flame, Lightbulb, GraduationCap, ArrowRight, Check, Clock } from 'lucide-react'

const products = [
  {
    name: 'Prometheus',
    tagline: 'Intelligent Training System',
    icon: Flame,
    status: 'Live',
    statusColor: 'green',
    description:
      'Our flagship — adaptive training, velocity-based barbell tracking, nutrition and full athlete management for athletes, coaches, gyms and clinics.',
    bullets: [
      'Athlete App (iOS & Android)',
      'Coach Web Software + Mobile Companion (iOS & Android, free with subscription)',
      'Enterprise platform for gyms, studios & clinics',
    ],
    cta: { label: 'Explore Prometheus', href: 'https://prometheus.coach' },
    accent: 'accent',
  },
  {
    name: 'LED Pro Studio',
    tagline: 'Intelligent Lighting for Studios & Gyms',
    icon: Lightbulb,
    status: 'Live',
    statusColor: 'green',
    description:
      'Built by PeakForce for LED Pro Schweiz — a B2B lighting platform for studios, gyms and wellness venues. Controls DMX, Tuya/Zigbee and Shelly fixtures with live energy savings in CHF.',
    bullets: [
      'Lighting expert "Luca" — natural-language control & advice',
      'Class-aware presets (yoga, HIIT, spinning, dance)',
      'Live energy dashboard — real-time Watts, CHF savings, ROI',
      'Integrates with the Prometheus ecosystem',
    ],
    cta: { label: 'Visit LED Pro', href: 'https://www.ledpro.solutions/' },
    accent: 'gold',
  },
  {
    name: 'Prometheus Campus',
    tagline: 'Education, Community & Communication for Coaches',
    icon: GraduationCap,
    status: 'In Development',
    statusColor: 'amber',
    description:
      'A unified platform combining a coaching academy, a social network for coaches and built-in video, chat and meetings. Certified trainings follow at launch.',
    bullets: [
      'Academy — tracks, lessons, exams, certificates',
      'Social network for the coaching community',
      'Built-in video meetings, chat & messaging',
    ],
    cta: { label: 'Get Notified', href: 'mailto:hello@peakforce-solutions.com?subject=Prometheus%20Campus%20-%20Notify%20Me' },
    accent: 'accent',
  },
]

const accentMap = {
  accent: {
    border: 'hover:border-accent/40',
    iconBg: 'bg-accent/10 border-accent/20',
    iconText: 'text-accent',
    btn: 'bg-accent hover:bg-accent-light text-white',
  },
  gold: {
    border: 'hover:border-gold/40',
    iconBg: 'bg-gold/10 border-gold/20',
    iconText: 'text-gold',
    btn: 'bg-gold hover:bg-gold-light text-dark',
  },
}

const statusMap = {
  green: {
    dot: 'bg-green-400',
    text: 'text-green-400',
    bg: 'bg-green-400/10 border-green-400/20',
    icon: Check,
  },
  amber: {
    dot: 'bg-amber-400',
    text: 'text-amber-400',
    bg: 'bg-amber-400/10 border-amber-400/20',
    icon: Clock,
  },
}

export default function SoftwarePortfolio() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="portfolio" ref={ref} className="py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Our Software
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
            Three Platforms.{' '}
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              One Studio Behind Them.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            PeakForce builds production software for sport, health and performance — for our own
            brands and on behalf of partners.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const a = accentMap[p.accent]
            const s = statusMap[p.statusColor]
            const StatusIcon = s.icon
            return (
              <div
                key={p.name}
                className={`group relative bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-500 ${a.border} hover:-translate-y-1 hover:shadow-xl flex flex-col ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 ${a.iconBg} border rounded-xl flex items-center justify-center`}>
                    <p.icon size={20} className={a.iconText} />
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${s.bg} border rounded-full`}>
                    <StatusIcon size={11} className={s.text} />
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${s.text}`}>
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                <p className={`text-sm font-medium mb-4 ${a.iconText}`}>{p.tagline}</p>

                {/* Description — fixed min-height keeps bullets aligned across cards */}
                <p className="text-sm text-gray-400 leading-relaxed mb-4 min-h-[110px] lg:min-h-[120px]">
                  {p.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check size={14} className={`${a.iconText} shrink-0 mt-1`} />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={p.cta.href}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 mt-auto ${a.btn}`}
                >
                  {p.cta.label}
                  <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>

        {/* Footnote */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-gray-500">
            Looking for a custom software project?{' '}
            <a href="mailto:hello@peakforce-solutions.com" className="text-accent hover:underline">
              Talk to PeakForce
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
