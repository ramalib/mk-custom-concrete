import Image from 'next/image'

const LOGO =
  'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/l2cHXR5mrooL3hdkO6Sg/media/6a052e40ab5d7da865763f6c.png'

const navLinks = [
  { label: 'Services',  href: '#services'  },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process',   href: '#process'   },
  { label: 'Contact',   href: '#contact'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t border-mk-border"
      style={{ backgroundColor: '#0D0B0F' }}
    >
      {/* Amber top border glow */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200,137,42,0.25), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand col */}
          <div>
            <div className="relative w-40 h-40 mb-5">
              <Image src={LOGO} alt="MK Custom Concrete" fill className="object-contain" />
            </div>
            <p className="font-body text-sm text-mk-muted mb-6" style={{ lineHeight: '1.75', maxWidth: '26ch' }}>
              Building extraordinary outdoor living spaces throughout Colorado Springs and beyond.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/mk_concrete_sculpter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 border border-mk-border hover:border-mk-amber/50 text-mk-muted hover:text-mk-amber transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://facebook.com/profile.php?id=100063481147661"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-9 h-9 border border-mk-border hover:border-mk-amber/50 text-mk-muted hover:text-mk-amber transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <h4 className="section-label text-[10px] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-mk-muted hover:text-mk-cream transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="section-label text-[10px] mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mkconcrete719@gmail.com"
                  className="font-body text-sm text-mk-muted hover:text-mk-amber transition-colors duration-200"
                >
                  mkconcrete719@gmail.com
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-mk-muted" style={{ lineHeight: '1.65' }}>
                  2910 N Powers Blvd #341<br />
                  Colorado Springs, CO 80922
                </p>
              </li>
              <li>
                <p className="font-body text-sm text-mk-muted">Colorado and Florida</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t border-mk-border flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-mk-muted/50">
            &copy; {year} MK Custom Concrete. All rights reserved.
          </p>
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-mk-muted/50">
            Colorado Springs, CO
          </p>
        </div>
      </div>
    </footer>
  )
}
