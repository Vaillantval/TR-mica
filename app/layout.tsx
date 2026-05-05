import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MICA Consulting — Ingénierie Éducative en Haïti',
    template: '%s | MICA Consulting',
  },
  description:
    'Cabinet haïtien de conseil stratégique spécialisé en ingénierie pédagogique, transformation numérique des systèmes éducatifs et renforcement des capacités institutionnelles.',
  keywords: ['ingénierie éducative', 'conseil stratégique', 'formation', 'Haïti', 'MICA Consulting'],
  authors: [{ name: 'MICA Consulting' }],
  creator: 'MICA Consulting',
  openGraph: {
    type: 'website',
    locale: 'fr_HT',
    siteName: 'MICA Consulting',
    title: 'MICA Consulting — Ingénierie Éducative en Haïti',
    description:
      'Cabinet haïtien de conseil stratégique spécialisé en ingénierie pédagogique et transformation des systèmes éducatifs.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
