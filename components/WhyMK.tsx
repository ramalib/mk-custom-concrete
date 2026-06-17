'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3 L29 10 V22 L16 29 L3 22 V10 Z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 16 L14 20 L22 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Built Only for You',
    body: 'Every project starts from a blank canvas. No catalog layouts, no preset packages. Your space, your vision, built from scratch by craftsmen who treat it as their own.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M16 8 v8 l5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 4 L4 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
        <path d="M24 4 L28 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    title: 'Colorado Craftsmen',
    body: 'Rooted in Colorado Springs, we understand the terrain, the altitude, and the seasons. Local expertise means your outdoor space holds up beautifully year after year.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 14 C6 8 10 4 16 4 C22 4 26 8 26 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <rect x="4" y="14" width="24" height="4" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M12 18 v6 M16 18 v8 M20 18 v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    title: 'Free Estimate, Fast Reply',
    body: 'Request a consultation and we respond within 24 hours. No cost, no obligation. Just a real conversation about what we can build together.',
  },
]

export default function WhyMK() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#131116' }}>
      {/* Amber glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(200,137,42,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="concrete-texture absolute inset-0 opacity-25 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-5"
            >
              Why Choose MK
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-display-lg text-mk-cream mb-6"
            >
              We make Disneyland in your backyard.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-body text-mk-muted text-base"
              style={{ lineHeight: '1.8', maxWidth: '36ch' }}
            >
              That's not a figure of speech. We've built resort-quality outdoor spaces throughout Colorado Springs that rival anything you'd find at a five-star property. Custom concrete is our craft and your backyard is our canvas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-mk-amber hover:bg-mk-amber-light text-mk-black font-body font-semibold text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,137,42,0.35)]"
              >
                Get Free Design Consultation
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  width="13" height="13" viewBox="0 0 13 13" fill="none"
                >
                  <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
                className="group flex gap-5 p-6 bg-mk-card border border-mk-border card-amber-hover"
              >
                <div className="text-mk-amber flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <div>
                  <h3
                    className="font-display text-mk-cream mb-2 group-hover:text-mk-amber-light transition-colors duration-300"
                    style={{ fontSize: '1.3rem', letterSpacing: '-0.015em' }}
                  >
                    {p.title}
                  </h3>
                  <p className="font-body text-mk-muted text-sm" style={{ lineHeight: '1.72' }}>
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
