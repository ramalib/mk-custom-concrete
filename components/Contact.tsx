'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECT_TYPES = [
  'Resort-Style Pool',
  'Pool Slide',
  'Grotto',
  'Outdoor Kitchen',
  'Fire Pit',
  'Retaining Wall',
  'Hardscape Design',
  'Multiple / Other',
]

type FormState = 'idle' | 'sending' | 'success'

function InfoLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-2">
      <div className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(200,137,42,0.55)' }} />
      <span className="font-body text-[10px] tracking-[0.25em] uppercase" style={{ color: '#C8892A' }}>
        {children}
      </span>
    </div>
  )
}

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', address: '', message: '',
  })
  const [state, setState] = useState<FormState>('idle')

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    setTimeout(() => setState('success'), 1200)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#09080A' }}>
      <div className="concrete-texture absolute inset-0 opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 0% 100%, rgba(200,137,42,0.09) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left info column ── */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-5"
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-mk-cream mb-5"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.8rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              Ready to build something extraordinary?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-body text-mk-muted text-sm mb-10"
              style={{ lineHeight: '1.8' }}
            >
              Tell us about your project and we'll respond within 24 hours with a free design consultation. No pressure, no commitment.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-7"
            >
              <div>
                <InfoLabel>Email</InfoLabel>
                <a
                  href="mailto:mkconcrete719@gmail.com"
                  className="font-body text-mk-cream hover:text-mk-amber transition-colors duration-200 text-sm"
                >
                  mkconcrete719@gmail.com
                </a>
              </div>

              <div>
                <InfoLabel>Location</InfoLabel>
                <p className="font-body text-mk-muted text-sm" style={{ lineHeight: '1.7' }}>
                  2910 N Powers Blvd #341<br />
                  Colorado Springs, CO 80922
                </p>
              </div>

              <div>
                <InfoLabel>Service Areas</InfoLabel>
                <p className="font-body text-mk-muted text-sm">Colorado and Florida</p>
              </div>

              <div>
                <InfoLabel>Follow Our Work</InfoLabel>
                <a
                  href="https://instagram.com/mk_concrete_sculpter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-mk-muted hover:text-mk-amber transition-colors duration-200"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                  @mk_concrete_sculpter
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right form column ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3 bg-mk-card border border-mk-border p-8 lg:p-10"
          >
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center gap-5">
                <div className="w-14 h-14 border border-mk-amber/40 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="#C8892A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-display text-mk-cream"
                  style={{ fontSize: '1.9rem', letterSpacing: '-0.02em' }}
                >
                  Message Received
                </h3>
                <p className="font-body text-mk-muted text-sm max-w-xs" style={{ lineHeight: '1.75' }}>
                  We'll review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-mk-muted">
                    Full Name <span className="text-mk-amber">*</span>
                  </label>
                  <input
                    required type="text" value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="bg-mk-surface border border-mk-border focus:border-mk-amber/50 text-mk-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-mk-muted/40"
                    placeholder="John Smith"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-mk-muted">
                    Email Address <span className="text-mk-amber">*</span>
                  </label>
                  <input
                    required type="email" value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="bg-mk-surface border border-mk-border focus:border-mk-amber/50 text-mk-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-mk-muted/40"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-mk-muted">
                    Phone Number
                  </label>
                  <input
                    type="tel" value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="bg-mk-surface border border-mk-border focus:border-mk-amber/50 text-mk-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-mk-muted/40"
                    placeholder="(719) 555-0100"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-mk-muted">
                    Project Type <span className="text-mk-amber">*</span>
                  </label>
                  <select
                    required value={form.projectType}
                    onChange={(e) => update('projectType', e.target.value)}
                    className="bg-mk-surface border border-mk-border focus:border-mk-amber/50 text-mk-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                    style={{ color: form.projectType ? undefined : '#8C8278' }}
                  >
                    <option value="" disabled>Select a project</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} style={{ background: '#1C1820' }}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-mk-muted">
                    Project Address
                  </label>
                  <input
                    type="text" value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className="bg-mk-surface border border-mk-border focus:border-mk-amber/50 text-mk-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-mk-muted/40"
                    placeholder="123 Main St, Colorado Springs, CO"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="font-body text-[10px] tracking-[0.2em] uppercase text-mk-muted">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    rows={4}
                    className="bg-mk-surface border border-mk-border focus:border-mk-amber/50 text-mk-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-mk-muted/40 resize-none"
                    placeholder="Describe your dream backyard — what you'd like to build and any details that matter to you..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={state === 'sending'}
                    className="w-full group flex items-center justify-center gap-3 bg-mk-amber hover:bg-mk-amber-light disabled:opacity-60 text-mk-black font-body font-semibold text-[11px] tracking-[0.22em] uppercase px-8 py-4 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(200,137,42,0.35)]"
                  >
                    {state === 'sending' ? 'Sending...' : (
                      <>
                        Send My Project Details
                        <svg
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          width="13" height="13" viewBox="0 0 13 13" fill="none"
                        >
                          <path d="M1 6.5h11M7 2l5 4.5L7 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center font-body text-[10px] tracking-[0.15em] uppercase text-mk-muted/55">
                    We respond within 24 hours, guaranteed.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
