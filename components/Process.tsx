'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Dream It',
    body: 'Tell us your vision. We visit your space, listen to every detail, and make sure we understand exactly what you want to create.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M11 2v3M11 17v3M2 11h3M17 11h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Design It',
    body: 'We develop detailed project plans tailored to your site and your vision. You review and refine until it feels exactly right.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2.5" y="2.5" width="17" height="17" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M2.5 7.5h17" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M7.5 7.5v12" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M11 11.5h5M11 14.5h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Build It',
    body: 'Our skilled craftsmen bring every element to life using premium materials, expert concrete techniques, and obsessive attention to detail.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M2 17.5h18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        <path d="M5 17.5V10l6-7 6 7v7.5" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
        <rect x="9" y="12.5" width="4" height="5" stroke="currentColor" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Live It',
    body: 'Step into your transformation. Your private outdoor retreat is complete and built to be enjoyed for decades.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M11 1.5v2M11 18.5v2M1.5 11h2M18.5 11h2M4.1 4.1l1.4 1.4M16.5 16.5l1.4 1.4M4.1 17.9l1.4-1.4M16.5 5.5l1.4-1.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function CornerBracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const L = 12
  const d = {
    tl: `M${L} 0 H0 V${L}`,
    tr: `M0 0 H${L} V${L}`,
    bl: `M${L} ${L} H0 V0`,
    br: `M0 ${L} H${L} V0`,
  }[pos]
  const cls = {
    tl: 'top-3.5 left-3.5',
    tr: 'top-3.5 right-3.5',
    bl: 'bottom-3.5 left-3.5',
    br: 'bottom-3.5 right-3.5',
  }[pos]
  return (
    <svg
      className={`absolute ${cls} pointer-events-none opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
      width={L} height={L} viewBox={`0 0 ${L} ${L}`} fill="none"
    >
      <path d={d} stroke="#C8892A" strokeWidth="1"/>
    </svg>
  )
}

export default function Process() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0D0B0F', paddingTop: '6.5rem', paddingBottom: '7rem' }}
    >
      {/* Concrete texture */}
      <div className="absolute inset-0 concrete-texture opacity-25 pointer-events-none" />

      {/* Centered amber ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 108%, rgba(200,137,42,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Faint full-width amber top rule */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,137,42,0.18), transparent)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header — editorial 2-col split ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-end mb-20 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-5"
            >
              How It Works
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-mk-cream"
              style={{
                fontSize:      'clamp(2rem, 3.8vw, 3.6rem)',
                letterSpacing: '-0.025em',
                lineHeight:    1.05,
              }}
            >
              From first conversation
              <br />
              to finished masterpiece.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="font-body text-mk-muted"
            style={{ lineHeight: '1.82', fontSize: '0.95rem', maxWidth: '38ch' }}
          >
            Every MK project follows a proven four-phase journey — from initial vision to final reveal.
            No surprises, no shortcuts. Just extraordinary results delivered on time.
          </motion.p>
        </div>

        {/* ── Steps ── */}
        <div className="relative">

          {/* Animated connector line — desktop only */}
          <div
            className="hidden lg:block absolute left-0 right-0 z-0 pointer-events-none"
            style={{ top: '1.6rem' }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                height: '1px',
                background:
                  'linear-gradient(to right, rgba(200,137,42,0.55), rgba(200,137,42,0.55) 80%, rgba(200,137,42,0.1))',
                transformOrigin: 'left',
              }}
            />
          </div>

          {/* Diamond nodes — desktop only */}
          <div className="hidden lg:grid lg:grid-cols-4 absolute left-0 right-0 z-10 pointer-events-none" style={{ top: '1.6rem' }}>
            {steps.map((_, i) => (
              <div key={i} className="flex justify-center" style={{ marginTop: '-5px' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.65 + i * 0.18, type: 'spring', stiffness: 260, damping: 18 }}
                  style={{ transform: 'rotate(45deg)' }}
                  className="w-2.5 h-2.5 border border-mk-amber/80 bg-[#0D0B0F]"
                />
              </div>
            ))}
          </div>

          {/* Panel grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-mk-border/60">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 44 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.72, delay: 0.38 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-default"
              >
                {/* Blueprint brackets */}
                <CornerBracket pos="tl" />
                <CornerBracket pos="br" />

                {/* Amber top border — brightens on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(200,137,42,0.6)' }}
                />

                <div
                  className="relative z-10 px-8 lg:px-7 transition-transform duration-500 ease-out group-hover:-translate-y-1"
                  style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}
                >
                  {/* Watermark number */}
                  <div
                    className="absolute pointer-events-none select-none"
                    style={{
                      top: '-1.2rem',
                      right: '1rem',
                      fontFamily:    'var(--font-display)',
                      fontSize:      'clamp(5.5rem, 9vw, 8.5rem)',
                      lineHeight:    1,
                      color:         '#C8892A',
                      opacity:       0.05,
                      letterSpacing: '-0.04em',
                      fontWeight:    700,
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-6 transition-colors duration-350"
                    style={{ color: 'rgba(200,137,42,0.55)' }}
                  >
                    <div className="group-hover:text-mk-amber transition-colors duration-350">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step label */}
                  <p
                    className="font-body mb-3 tracking-[0.28em] uppercase transition-colors duration-350"
                    style={{ fontSize: '9px', color: 'rgba(200,137,42,0.45)' }}
                  >
                    Step {step.num}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-display text-mk-cream mb-4 transition-colors duration-400 group-hover:text-mk-amber-light"
                    style={{ fontSize: '1.7rem', letterSpacing: '-0.02em', lineHeight: 1.08 }}
                  >
                    {step.title}
                  </h3>

                  {/* Expanding amber rule */}
                  <div
                    className="h-px mb-5 w-8 group-hover:w-14 transition-[width] duration-500"
                    style={{ background: 'rgba(200,137,42,0.4)' }}
                  />

                  {/* Body */}
                  <p
                    className="font-body text-mk-muted text-sm"
                    style={{ lineHeight: '1.82' }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.92 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-mk-amber/35 hover:border-mk-amber text-mk-amber hover:text-mk-amber-light font-body font-medium text-[11px] tracking-[0.22em] uppercase px-10 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,137,42,0.15)]"
          >
            Start with a Free Estimate
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="13" height="13" viewBox="0 0 13 13" fill="none"
            >
              <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
