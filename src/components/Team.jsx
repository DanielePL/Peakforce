import { useScrollAnimation } from '../hooks/useScrollAnimation'

const coreTeam = [
  {
    initials: 'DP',
    name: 'Daniele Pauli',
    title: 'CEO & Founder',
    bio: 'IPF World Champion (2018) with over 20 years of coaching experience across 14,000+ sessions — from Olympic athletes to Swiss bank executives. Started building fitness CRM systems in 2010 and developed the world\'s first 9-axis bar acceleration VBT prototype in 2017. A master metalworker turned tech entrepreneur who bridges the gap between iron and algorithms.',
    color: 'from-accent to-blue-400',
  },
  {
    initials: 'BA',
    name: 'Dr. Basil Achermann',
    title: 'Chief Science Officer',
    bio: 'Holds a PhD in Sport Science from the University of Zurich, specializing in measurement methodology for acceleration-based training. Combines a 4-year IT apprenticeship with deep academic research, making him the rare scientist who can both design the experiment and write the code. Leads the Prometheus Lab and drives our R&D pipeline.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    initials: 'SJ',
    name: 'Sjoerd Joosten',
    title: 'Chief Operating Officer',
    bio: 'Sport psychologist by training, hybrid athlete by nature — carrying a golf handicap of 7 alongside serious numbers in weightlifting and WOD training. Brings extensive experience leading talent sport schools and training high-level athletes. As COO and B2B specialist, Sjoerd is the powerhouse driving Prometheus into gyms, clinics, and enterprises across Europe.',
    color: 'from-gold to-orange-400',
  },
]

const team = [
  {
    initials: 'KK',
    name: 'Karin Känel',
    title: 'Executive Assistant & Project Manager',
    bio: 'Trained Polymechanikerin (EFZ) and former constructor at Bruker BioSpin — a global leader in scientific measurement instruments including NMR spectrometers. Certified Technische Kauffrau, combining precision engineering discipline with business acumen. Keeps PeakForce running with Swiss clockwork efficiency.',
    color: 'from-purple-400 to-violet-500',
  },
]

const advisors = [
  {
    initials: 'ST',
    name: 'Sascha Tarone',
    title: 'Advisor & Early Investor',
    bio: 'Versatile entrepreneur with 20 years of experience in financial analytics. As both strategic consultant and early investor, Sascha brings the financial rigor and market perspective that shapes Prometheus from business model to exit strategy.',
    color: 'from-cyan-400 to-teal-500',
    badge: true,
  },
  {
    initials: 'KU',
    name: 'Dr. Kevin Uram',
    title: 'Early Investor & Technical Advisor',
    bio: 'PhD in Physical Chemistry (University of Pittsburgh), former IBM Senior Technical Staff Member (12+ years), and Managing Director at Lumileds semiconductor manufacturing (11+ years). Holds multiple US patents in semiconductor fabrication technology. A veteran of precision engineering who recognized Prometheus as the next frontier of applied science.',
    color: 'from-rose-400 to-pink-500',
    badge: true,
  },
]

function TeamCard({ member, large }) {
  return (
    <div className={`group bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 relative ${large ? 'lg:p-8' : ''}`}>
      {/* Accent line */}
      <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${member.color} rounded-b opacity-50 group-hover:opacity-100 transition-opacity`} />

      {/* Badge */}
      {member.badge && (
        <div className="absolute top-4 right-4 px-2.5 py-1 bg-gold/10 border border-gold/20 rounded-full">
          <span className="text-[10px] text-gold font-semibold uppercase tracking-wider">Advisor & Investor</span>
        </div>
      )}

      {/* Avatar */}
      <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mb-4 ${large ? 'w-20 h-20' : ''}`}>
        <span className={`font-bold text-dark ${large ? 'text-xl' : 'text-lg'}`}>{member.initials}</span>
      </div>

      <h3 className={`font-bold text-white ${large ? 'text-xl' : 'text-lg'}`}>{member.name}</h3>
      <p className="text-accent text-sm font-medium mb-3">{member.title}</p>
      <p className={`text-gray-400 leading-relaxed ${large ? 'text-sm' : 'text-xs'}`}>{member.bio}</p>
    </div>
  )
}

export default function Team() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="team" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            The Minds Behind Prometheus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4">
            Built by Scientists.{' '}
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              Driven by Athletes.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A team that combines world-class sport science, semiconductor engineering, and elite
            athletic performance
          </p>
        </div>

        {/* Core Team */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {coreTeam.map((m) => (
            <TeamCard key={m.name} member={m} large />
          ))}
        </div>

        {/* Team */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {team.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Advisors */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {advisors.map((m) => (
            <TeamCard key={m.name} member={m} />
          ))}
        </div>

        {/* Note */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span>🇨🇭</span>
            <span>🇪🇪</span>
            <span>PeakForce OÜ is registered in Estonia (EU). Swiss-founded. Science-driven. Globally minded.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
