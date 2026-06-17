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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
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
    </section>
  )
}
