import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

const stats = [
  { label: 'Building Sport-Tech Since 2010', text: true },
  { end: 3, suffix: '', label: 'Production Platforms' },
  { end: 8, suffix: '+', label: 'Apps & Surfaces' },
  { label: 'AI · Computer Vision · IoT', text: true },
  { label: 'DE · EN · FR · IT · PL', text: true },
]

function StatItem({ stat, isVisible }) {
  const count = useCountUp(
    stat.decimal ? 45 : stat.end || 0,
    2000,
    false,
    isVisible
  )

  return (
    <div className="flex flex-col items-center gap-1 px-4 py-6 sm:py-8">
      {stat.text ? (
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.label}</span>
      ) : (
        <>
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
            {stat.decimal ? `${(count / 10).toFixed(1)}` : count}
            {stat.suffix}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</span>
        </>
      )}
    </div>
  )
}

export default function SocialProof() {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative py-8 border-y border-dark-border bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-dark-border">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
