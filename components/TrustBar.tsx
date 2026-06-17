'use client'

import { motion } from 'framer-motion'

const items = [
  { icon: '◆', text: 'Colorado Springs Based' },
  { icon: '◆', text: 'Free Design Consultation' },
  { icon: '◆', text: '24-Hour Response' },
  { icon: '◆', text: 'Fully Custom Designs' },
  { icon: '◆', text: 'Serving CO and FL' },
]

export default function TrustBar() {
  return (
    <section
      className="relative border-y border-mk-border overflow-hidden"
      style={{ backgroundColor: '#131116' }}
    >
      <div className="concrete-texture absolute inset-0 opacity-30 pointer-events-none" />

      {/* Mobile — infinite scrolling ticker */}
      <div className="md:hidden relative py-4 overflow-hidden">
        {/* Left/right fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #131116, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #131116, transparent)' }} />

        <div
          className="flex"
          style={{ animation: 'trustScroll 22s linear infinite', willChange: 'transform' }}
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0 mx-5">
              <span className="text-mk-amber text-[7px]">{item.icon}</span>
              <span className="font-body text-[11px] tracking-[0.18em] uppercase text-mk-muted whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — spread layout */}
      <div className="hidden md:block relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center justify-between">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5"
            >
              <span className="text-mk-amber text-[8px]">{item.icon}</span>
              <span className="font-body text-[11px] tracking-[0.18em] uppercase text-mk-muted whitespace-nowrap">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes trustScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
