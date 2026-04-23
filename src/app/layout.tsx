import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'גיבור הבורסה - Stock Hero',
  description: 'מכונת הזמן של ההשקעות — גלו כמה הכסף שלכם היה יכול לצמוח!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
