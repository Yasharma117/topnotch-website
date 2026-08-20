'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--border)]">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo / Wordmark */}
        <Link href="/" className="flex items-center gap-2" aria-label="TopNotch home">
          <svg width="28" height="28" viewBox="-105 0 210 44" fill="none" aria-hidden="true">
            <path
              d="M -85 44 H 85 A 20 20 0 0 1 105 24 V 20 A 20 20 0 0 1 85 0 H -85 A 20 20 0 0 1 -105 20 V 24 A 20 20 0 0 1 -85 44 Z"
              fill="#0a0a0a"
              stroke="#4297F7"
              strokeWidth="1.5"
            />
            <circle cx="0" cy="6" r="3" fill="#4297F7" opacity="0.8" />
          </svg>
          <span className="text-xl font-bold text-[#0a0a0a] tracking-tight">TopNotch</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-[#333] hover:text-[var(--tn-blue)] transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[#333] hover:text-[var(--tn-blue)] transition-colors">
            How it works
          </Link>
          <Link href="#faq" className="text-sm font-medium text-[#333] hover:text-[var(--tn-blue)] transition-colors">
            FAQ
          </Link>
        </div>

        {/* CTA button */}
        <div className="flex items-center gap-4">
          <Link
            href="#get-topnotch"
            className={cn(
              'hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5',
              'rounded-lg font-semibold text-sm',
              'bg-[var(--tn-blue)] text-white',
              'hover:bg-[var(--tn-blue-dark)] active:bg-[var(--tn-blue)]/90',
              'transition-colors duration-200',
              'shadow-[0_2px_12px_rgba(66,151,247,0.25)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tn-blue)] focus-visible:ring-offset-2'
            )}
          >
            Get TopNotch — Free
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#333] hover:bg-[var(--muted)] transition-colors"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}