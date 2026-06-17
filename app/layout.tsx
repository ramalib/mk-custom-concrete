import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MK Custom Concrete | Colorado Springs Outdoor Living',
  description:
    'Colorado Springs premier custom outdoor living specialists. Resort-style pools, grottos, outdoor kitchens, fire features, and hardscape design. Free design consultation, 24-hour response.',
  keywords:
    'custom concrete Colorado Springs, outdoor living, resort pool, grotto, outdoor kitchen, fire pit, retaining wall, hardscape design Colorado',
  openGraph: {
    title: 'MK Custom Concrete | Colorado Springs Outdoor Living',
    description:
      'Resort-style pools, grottos, outdoor kitchens and fire features custom-built for Colorado Springs backyards.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        {children}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a32f95f0e84ef9ef991aec3"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
