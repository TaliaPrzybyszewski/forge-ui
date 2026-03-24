import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Topbar from '@/components/layout/Topbar'

export const metadata: Metadata = {
  title: 'PRISM UI — Component Playground',
  description: 'Spectrum-aware, motion-first React component library. Configure visually, install with one CLI command, own the generated files.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"
          strategy="beforeInteractive"
        />
        <div className="app">
          <Topbar />
          {children}
        </div>
      </body>
    </html>
  )
}
