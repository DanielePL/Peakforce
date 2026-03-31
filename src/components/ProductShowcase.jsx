import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Smartphone,
  Monitor,
  Building2,
  Eye,
  Utensils,
  TrendingUp,
  Users,
  BarChart3,
  Bot,
  CalendarDays,
  LayoutDashboard,
} from 'lucide-react'

const tabs = [
  {
    id: 'athlete',
    label: 'Athlete App',
    icon: Smartphone,
    title: 'Prometheus Athlete App',
    description: 'Your AI-powered training companion that learns, adapts, and evolves with every rep.',
    features: [
      { icon: Bot, text: 'AI coaching & periodization' },
      { icon: Eye, text: 'Real-time VBT barbell velocity analysis via phone camera' },
      { icon: Utensils, text: 'Nutrition tracking with 4.5M food database' },
      { icon: TrendingUp, text: 'Progressive overload planning' },
    ],
    mockup: 'phone',
    images: [
      { src: '/app-nutrition.png', alt: 'Nutrition Tracking' },
      { src: '/app-training.png', alt: 'Training Dashboard' },
      { src: '/app-mealplans.png', alt: 'AI Meal Plans' },
    ],
  },
  {
    id: 'coach',
    label: 'Coach Software',
    icon: Monitor,
    title: 'Prometheus Coach Software',
    description: 'Professional-grade tools to manage, program, and analyze your athletes.',
    features: [
      { icon: Users, text: 'Client management & program design' },
      { icon: BarChart3, text: 'Progress analytics & reporting' },
      { icon: Bot, text: 'AI-assisted programming suggestions' },
    ],
    mockup: 'desktop',
    images: [
      { src: '/coach-dashboard.png', alt: 'Coach Dashboard — AI Briefing, Calendar & Action Items' },
      { src: '/coach-client.png', alt: 'Client Profile — Training, Analytics & Workout Management' },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: Building2,
    title: 'Prometheus Enterprise',
    description: 'End-to-end studio and clinic management with AI-powered insights.',
    features: [
      { icon: LayoutDashboard, text: 'Managed coaching software & member CRM' },
      { icon: Smartphone, text: 'Studio entry management via phone' },
      { icon: CalendarDays, text: 'Group course organization' },
      { icon: Bot, text: 'Full CRM with analytics and AI assistants' },
    ],
    mockup: 'desktop',
    images: [
      { src: '/enterprise-command.png', alt: 'Command Center — Sessions, Members & Alerts' },
      { src: '/enterprise-analytics.png', alt: 'Analytics & Reports — Retention, Revenue & Insights' },
    ],
  },
]

function PhoneMockup({ images }) {
  return (
    <div className="flex gap-3 sm:gap-5 justify-center items-end px-4">
      {images.map((img, i) => (
        <div
          key={img.alt}
          className={`transition-all duration-300 ${
            i === 1
              ? 'w-40 sm:w-48 z-10 drop-shadow-2xl'
              : 'w-32 sm:w-40 opacity-80 hidden sm:block drop-shadow-xl'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-[1.5rem]"
          />
          <p className="text-[10px] text-gray-500 text-center mt-2 font-medium">{img.alt}</p>
        </div>
      ))}
    </div>
  )
}

function DesktopMockup({ images }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Browser chrome */}
      <div className="bg-dark border border-dark-border rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-dark-card border-b border-dark-border">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <div className="flex-1 mx-8">
            <div className="h-5 bg-dark rounded-md flex items-center justify-center">
              <span className="text-[10px] text-gray-600">prometheus.coach</span>
            </div>
          </div>
        </div>
        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-auto"
        />
      </div>
      {/* Image switcher */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeImage === i
                  ? 'bg-accent text-white'
                  : 'bg-dark-card text-gray-400 hover:text-white border border-dark-border'
              }`}
            >
              {img.alt.split('—')[0].trim()}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('athlete')
  const [ref, isVisible] = useScrollAnimation(0.1)
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section id="product" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            The Prometheus{' '}
            <span className="bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every tool a serious athlete and health professional needs. One platform.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-dark-card text-gray-400 hover:text-white hover:bg-dark-card/80 border border-dark-border'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{active.title}</h3>
              <p className="text-gray-400 mb-8">{active.description}</p>
              <div className="space-y-4">
                {active.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={18} className="text-accent" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1.5">{f.text}</span>
                  </div>
                ))}
              </div>
              <a
                href={active.id === 'athlete' || active.id === 'vbt'
                  ? 'https://prometheus.coach/app'
                  : active.id === 'enterprise'
                    ? 'https://prometheus.coach/enterprise'
                    : 'https://prometheus.coach'
                }
                className="inline-flex mt-8 px-6 py-3 bg-gold hover:bg-gold-light text-dark font-semibold rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                {active.id === 'athlete' || active.id === 'vbt' ? 'Get the App' : 'Start Free Trial'}
              </a>
            </div>

            {/* Mockup */}
            <div className="flex justify-center">
              {active.mockup === 'phone' && <PhoneMockup images={active.images} />}
              {active.mockup === 'desktop' && <DesktopMockup images={active.images} />}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
