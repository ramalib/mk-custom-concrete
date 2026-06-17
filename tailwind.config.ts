import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mk: {
          black:        '#09080A',
          surface:      '#131116',
          card:         '#1C1820',
          border:       '#272330',
          amber:        '#C8892A',
          'amber-light':'#DFA94C',
          'amber-dark': '#A06E1A',
          'amber-dim':  'rgba(200,137,42,0.12)',
          stone:        '#7A6E5F',
          cream:        '#F0EBE3',
          muted:        '#8C8278',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
