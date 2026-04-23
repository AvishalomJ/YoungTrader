'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-surface-200 shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
          🏆 גיבור הבורסה
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-primary-600 font-semibold transition-colors"
          >
            בית
          </Link>
          <Link
            href="/simulator"
            className="text-gray-600 hover:text-primary-600 font-semibold transition-colors"
          >
            סימולטור
          </Link>
        </div>
      </nav>
    </header>
  )
}
