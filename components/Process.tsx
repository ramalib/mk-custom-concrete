'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Dream It',
    body: 'Tell us your vision. We visit your space, listen to every detail, and make sure we understand exactly what you want to create.',
  },
  {
    num: '02',
    title: 'Design It',
    body: 'We develop detailed project plans tailored to your site and your vision. You review and refine until it feels exactly right.',
  },
  {
    num: '03',
    title: 'Build It',
    body: 'Our skilled craftsmen bring every element to life using premium materials, expert concrete techniques, and obsessive attention to detail.',
  },
  {
    num: '04',
    title: 'Live It',
    body: 'Step into your transformation. Your private outdoor retreat is complete and built to be enjoyed for decades.',
  },
]

export default function Process() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#09080A' }}>
      {/* Side amber accent line */}
      <div
        className="absolute left-0 inset-y-0 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,137,42,0.25), transparent)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-5"
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display text-display-lg text-mk-cream max-w-xl"
          >
            From first conversation to finished masterpiece.
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="relative group"
            >
              {/* Connector line (not last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-1/2 w-full h-px z-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, rgba(200,137,42,0.2), rgba(200,137,42,0.05))' }}
                />
              )}

              <div className="relative z-10 p-8 lg:px-6 border-t border-mk-border group-hover:border-mk-amber/30 transition-colors duration-400">
                {/* Step number */}
                <div className="mb-6 flex items-center gap-4">
                  <span
                    className="font-display font-bold text-mk-amber"
                    style={{ fontSize: '3.2rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                  >
                    {step.num}
                  </span>
                  <div
                    className="h-px flex-1 bg-mk-amber/20 group-hover:bg-mk-amber/40 transition-colors duration-400"
                  />
                </div>

                {/* Title */}
                <h3
                  className="font-display text-mk-cream mb-3 group-hover:text-mk-amber-light transition-colors duration-300"
                  style={{ fontSize: '1.6rem', letterSpacing: '-0.02em' }}
                >
                  {step.title}
                </h3>

                {/* Body */}
                <p
                  className="font-body text-mk-muted text-sm"
                  style={{ lineHeight: '1.75' }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-mk-amber/40 hover:border-mk-amber text-mk-amber hover:text-mk-amber-light font-body font-medium text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover:shadow-[0_0_24px_rgba(200,137,42,0.18)]"
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
