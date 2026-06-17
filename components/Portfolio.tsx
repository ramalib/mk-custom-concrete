'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const BASE = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/l2cHXR5mrooL3hdkO6Sg/media/'

const projects = [
  {
    src: BASE + '65e605b8471cd513e06c2a1c.jpeg',
    label: 'Custom Pool',
    col: 'col-span-2',
    height: 480,
  },
  {
    src: BASE + '6886dc14c1049767bb015d22.jpeg',
    label: 'Resort Build',
    col: 'col-span-1',
    height: 480,
  },
  {
    src: BASE + '65e5d57b2e5ddb2a0a99b625.jpeg',
    label: 'Water Feature',
    col: 'col-span-1',
    height: 360,
  },
  {
    src: BASE + '47054e99-bd50-4154-98e4-a75cba649ebe.jpeg',
    label: 'Outdoor Living',
    col: 'col-span-2',
    height: 360,
  },
]

export default function Portfolio() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="portfolio" className="relative py-20 lg:py-28" style={{ backgroundColor: '#131116' }}>
      {/* Top border glow */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,137,42,0.3), transparent)' }}
      />
      <div className="concrete-texture absolute inset-0 opacity-25 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              Featured Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-mk-cream"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.2rem)', letterSpacing: '-0.025em', lineHeight: 1.05 }}
            >
              Backyards we've transformed<br className="hidden md:block" /> into private resorts.
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:inline-flex items-center gap-2 font-body text-[11px] tracking-widest uppercase text-mk-amber hover:text-mk-amber-light transition-colors duration-200 flex-shrink-0 ml-8"
          >
            Start Your Project
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1 5.5h9M6 2l4 3.5L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Tight editorial grid — 3 cols, 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 gap-2"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${p.col}`}
              style={{ height: p.height }}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />

              {/* Persistent bottom gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(9,8,10,0.72) 0%, rgba(9,8,10,0.12) 38%, transparent 60%)',
                }}
              />

              {/* Hover amber tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'rgba(200,137,42,0.07)' }}
              />

              {/* Top amber sweep on hover */}
              <div
                className="absolute top-0 left-0 h-0.5 w-0 bg-mk-amber group-hover:w-14 transition-all duration-500"
              />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <span
                  className="font-body text-[10px] tracking-[0.25em] uppercase text-white/75 group-hover:text-mk-amber transition-colors duration-300"
                >
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex md:hidden justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-body text-[11px] tracking-widest uppercase text-mk-amber hover:text-mk-amber-light transition-colors duration-200"
          >
            Start Your Project
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1 5.5h9M6 2l4 3.5L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
