'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 20c3-6 7-10 12-10s9 4 12 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M2 24c3-4 7-7 12-7s9 3 12 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
        <ellipse cx="14" cy="10" rx="4" ry="4" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'Resort-Style Pools',
    description:
      'Custom-designed pools built to transform your backyard into a private escape. Infinity edges, natural rock formations, beach entries and more.',
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6c4 2 8 8 8 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M4 6c4-1 10 3 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="4" cy="6" r="2" fill="currentColor"/>
        <circle cx="12" cy="22" r="2" fill="currentColor" opacity=".6"/>
      </svg>
    ),
    title: 'Pool Slides',
    description:
      'Gravity-fed concrete slides sculpted seamlessly into natural rock formations. The centerpiece of any backyard water experience.',
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 24 C3 14 8 6 14 4 C20 6 25 14 25 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 24 C8 18 11 13 14 12 C17 13 20 18 20 24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".5"/>
        <path d="M3 24 h22" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Grottos',
    description:
      'Cave-like retreats carved from concrete and natural stone, creating intimate hideaways built directly into your pool environment.',
  },
  {
    num: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="14" width="22" height="3" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M6 14V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M10 10 V8 M14 10 V8 M18 10 V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".6"/>
        <rect x="5" y="17" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" opacity=".5"/>
      </svg>
    ),
    title: 'Outdoor Kitchens',
    description:
      'Fully equipped outdoor cooking spaces built to extend your living area year-round. Custom countertops, built-in grills, and storage.',
  },
  {
    num: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3 C14 3 9 9 9 14 C9 18 11 22 14 22 C17 22 19 18 19 14 C19 9 14 3 14 3Z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M14 10 C14 10 11 13 11 16 C11 18 12.5 20 14 20 C15.5 20 17 18 17 16 C17 13 14 10 14 10Z" stroke="currentColor" strokeWidth="1.2" opacity=".5"/>
        <path d="M5 25 h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 22 v3 M14 22 v3 M20 22 v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
    title: 'Fire Pits',
    description:
      'Custom fire features designed in any shape or scale, built to become the magnetic center of your outdoor gathering space.',
  },
  {
    num: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2"  y="19" width="24" height="4" rx="1" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="5"  y="13" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" opacity=".7"/>
        <rect x="8"  y="8"  width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" opacity=".5"/>
        <rect x="11" y="4"  width="6"  height="3" rx="1" stroke="currentColor" strokeWidth="1.2" opacity=".35"/>
      </svg>
    ),
    title: 'Retaining Walls',
    description:
      'Structural and decorative hardscaping that shapes your landscape, controls erosion, and adds lasting visual definition to any property.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-24 lg:py-32" style={{ backgroundColor: '#09080A' }}>
      <div className="concrete-texture absolute inset-0 opacity-40 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            What We Build
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-display-lg text-mk-cream max-w-2xl"
          >
            Every project, built entirely from your imagination.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mk-border">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
              className="group relative bg-mk-card p-8 card-amber-hover cursor-default"
              style={{ borderLeft: '2px solid transparent' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderLeftColor = 'rgba(200,137,42,0.5)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderLeftColor = 'transparent'
              }}
            >
              {/* Step number (ghost) */}
              <span
                className="absolute top-6 right-6 font-display font-bold select-none pointer-events-none"
                style={{ fontSize: '4.5rem', lineHeight: 1, color: 'rgba(200,137,42,0.06)' }}
              >
                {svc.num}
              </span>

              {/* Icon */}
              <div className="text-mk-amber mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                {svc.icon}
              </div>

              {/* Title */}
              <h3
                className="font-display text-mk-cream mb-3 group-hover:text-mk-amber-light transition-colors duration-300"
                style={{ fontSize: '1.45rem', letterSpacing: '-0.015em' }}
              >
                {svc.title}
              </h3>

              {/* Description */}
              <p className="font-body text-mk-muted text-sm leading-relaxed" style={{ lineHeight: '1.7' }}>
                {svc.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-body text-mk-amber text-xs tracking-widest uppercase">Learn more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="#C8892A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
