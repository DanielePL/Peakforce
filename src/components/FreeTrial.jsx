import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Check, Building2, ArrowRight, Smartphone, Monitor } from 'lucide-react'

const plans = [
  {
    name: 'Athlete App',
    price: 'Free',
    period: '14-day trial',
    desc: 'AI training & nutrition on your phone',
    highlight: true,
    icon: Smartphone,
    features: [
      'AI coaching & periodization',
      'VBT barbell velocity tracking',
      'Nutrition tracking (4.5M foods)',
      'WOD scanner & workout builder',
      'Progress analytics',
      'No credit card required',
    ],
    cta: 'Download the App',
    href: 'https://prometheus.coach/app',
  },
  {
    name: 'Coach Software',
    price: 'From €29',
    period: '/month',
    desc: 'For personal trainers & coaches',
    icon: Monitor,
    features: [
      'Client management & CRM',
      'Workout & program builder',
      'AI-assisted programming',
      'Video analysis & feedback',
      'Invoicing & scheduling',
      '14-day free trial',
    ],
    cta: 'Start Coach Trial',
    href: 'https://prometheus.coach',
  },
  {
    name: 'Enterprise',
    price: 'From €49',
    period: '/month',
    desc: 'For gyms, clinics & studios',
    icon: Building2,
    features: [
      'Member CRM & management',
      'Studio entry & access control',
      'Group course scheduling',
      'Coach integration',
      'Revenue analytics',
      '14-day free trial',
    ],
    cta: 'Start Enterprise Trial',
    href: 'https://prometheus.coach/enterprise',
  },
]

export default function FreeTrial() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="trial" ref={ref} className="py-24 lg:py-32 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Prometheus
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Three products. One ecosystem. All with a 14-day free trial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-500 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-accent/10 to-dark-card border-2 border-accent/30 shadow-lg shadow-accent/10 scale-105 z-10'
                  : 'bg-dark-card border border-dark-border hover:border-dark-border/80'
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                  <plan.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-xs text-gray-500">{plan.desc}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? 'bg-gold hover:bg-gold-light text-dark hover:shadow-lg hover:shadow-gold/20'
                    : 'bg-dark-light border border-dark-border text-white hover:border-accent/30 hover:bg-accent/5'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs text-gray-600">
            No credit card required. All trials include full feature access for 14 days.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Detailed pricing at{' '}
            <a href="https://prometheus.coach/pricing" className="text-accent hover:underline">
              prometheus.coach/pricing
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
