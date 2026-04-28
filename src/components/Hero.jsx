import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Shield, Beaker, GraduationCap, Code2, ArrowRight, Mail } from 'lucide-react'

const trustItems = [
  { icon: Code2, label: 'Swiss-Made Software' },
  { icon: Beaker, label: 'Sport-Science Driven' },
  { icon: Shield, label: 'EU GDPR Compliant' },
  { icon: GraduationCap, label: 'PhD-Level R&D' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fill()
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / 120)})`
            ctx.stroke()
          }
        })
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark z-[1]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[128px] z-[1]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[128px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
              We Build{' '}
              <span className="bg-gradient-to-r from-accent via-accent-light to-gold bg-clip-text text-transparent">
                Software
              </span>{' '}
              That Moves People.
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
              PeakForce is a Swiss software manufacturer for the sport, health and performance
              industry. We build production-grade platforms — from intelligent training systems to
              connected gym infrastructure — for our own brands and as a development partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group px-6 py-4 bg-gold hover:bg-gold-light text-dark font-bold rounded-xl text-sm transition-all duration-200 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                See Our Software
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:management@prometheus.coach"
                className="group px-6 py-4 border border-gray-600 hover:border-accent text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:bg-accent/5 flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Talk to Us
              </a>
            </div>
          </motion.div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <img
                src="/app-training.png"
                alt="Prometheus Athlete App — Training Dashboard"
                className="w-[280px] drop-shadow-2xl"
              />
              {/* Floating badges */}
              <div className="absolute -left-16 top-20 px-3 py-2 bg-dark-card/90 backdrop-blur border border-dark-border rounded-xl text-xs animate-[float_3s_ease-in-out_infinite]">
                <span className="text-accent font-semibold">Coach</span>
                <span className="text-gray-500 ml-1">Active</span>
              </div>
              <div className="absolute -right-12 top-40 px-3 py-2 bg-dark-card/90 backdrop-blur border border-dark-border rounded-xl text-xs animate-[float_3s_ease-in-out_infinite_1s]">
                <span className="text-gold font-semibold">VBT</span>
                <span className="text-gray-500 ml-1">0.85 m/s</span>
              </div>
              <div className="absolute -left-8 bottom-32 px-3 py-2 bg-dark-card/90 backdrop-blur border border-dark-border rounded-xl text-xs animate-[float_3s_ease-in-out_infinite_0.5s]">
                <span className="text-green-400 font-semibold">+12%</span>
                <span className="text-gray-500 ml-1">Progress</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-dark-border"
        >
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-gray-500">
                <item.icon size={16} className="text-accent/60" />
                <span className="text-xs sm:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
