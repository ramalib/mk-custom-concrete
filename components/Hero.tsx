'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref       = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opContent = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const yContent  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Base ── */}
      <div className="absolute inset-0" style={{ backgroundColor: '#09080A' }} />

      {/* ── Atmospheric gradient stack — balanced for centered layout ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 115%, rgba(200,137,42,0.44) 0%, rgba(180,100,10,0.10) 42%, transparent 62%),
            radial-gradient(ellipse 40% 45% at 5%  85%,   rgba(160,88,8,0.16)   0%, transparent 52%),
            radial-gradient(ellipse 40% 45% at 95% 85%,   rgba(160,88,8,0.16)   0%, transparent 52%),
            radial-gradient(ellipse 70% 50% at 50% 0%,    rgba(0,0,0,0.72)      0%, transparent 55%)
          `,
        }}
      />

      {/* ── Concrete diagonal striations ── */}
      <div className="absolute inset-0 concrete-texture opacity-45 pointer-events-none" />

      {/* ── Decorative SVG: concentric diamonds centered behind content ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg
          style={{ width: '75%', maxWidth: 900, height: '88%', opacity: 0.042 }}
          viewBox="0 0 700 800"
          fill="none"
        >
          <rect x="350" y="10"  width="520" height="520" transform="rotate(45 350 410)" stroke="#C8892A" strokeWidth="0.75" rx="1"/>
          <rect x="350" y="105" width="350" height="350" transform="rotate(45 350 410)" stroke="#C8892A" strokeWidth="0.55" rx="1"/>
          <rect x="350" y="185" width="205" height="205" transform="rotate(45 350 410)" stroke="#C8892A" strokeWidth="0.4"  rx="1"/>
        </svg>
      </div>

      {/* ── Main content — centered ── */}
      <motion.div
        style={{ opacity: opContent, y: yContent }}
        className="relative z-10 flex flex-col items-center justify-center flex-1 min-h-screen text-center max-w-5xl mx-auto w-full px-6 lg:px-10 py-32"
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="section-label mb-8"
        >
          Colorado Springs, CO
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-mk-cream select-none mb-7"
          style={{
            fontSize:      'clamp(3.4rem, 9vw, 8.5rem)',
            lineHeight:    '0.92',
            letterSpacing: '-0.038em',
          }}
        >
          The Backyard
          <br />
          <em style={{ color: '#C8892A', fontStyle: 'italic', fontWeight: 300 }}>
            You Always
          </em>
          <br />
          Imagined.
        </motion.h1>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.88 }}
          className="font-body text-mk-muted text-base md:text-[1.05rem] max-w-[44ch] mb-10"
          style={{ lineHeight: '1.78' }}
        >
          Resort-style pools, grottos, outdoor kitchens, and fire features — custom-built in Colorado Springs. If you can dream it, we build it.
        </motion.p>

        {/* CTAs — directly under text, centered */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-mk-amber hover:bg-mk-amber-light text-mk-black font-body font-semibold text-[11px] tracking-[0.22em] uppercase px-9 py-4 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(200,137,42,0.45)]"
          >
            Get Free Estimate
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="13" height="13" viewBox="0 0 13 13" fill="none"
            >
              <path d="M1 6.5h11M7.5 2l5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center border border-white/20 hover:border-mk-amber/55 text-mk-cream hover:text-mk-amber font-body font-medium text-[11px] tracking-[0.22em] uppercase px-9 py-4 transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(200,137,42,0.65), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
