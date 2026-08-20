'use client'

import { cn } from '@/lib/utils'

const trustItems = [
  { label: 'Mac App Store', verified: true },
  { label: 'Product Hunt #4', verified: true },
  { label: '11 Indian languages', verified: false },
  { label: '100% on-device', verified: false },
  { label: 'Free forever', verified: false },
  { label: 'Open source', verified: false },
]

export function Trust() {
  return (
    <section
      id="trust"
      className={cn('py-16 md:py-24 px-6', 'bg-[var(--tn-blue-light)]/20 border-y border-[var(--border)]')}
      aria-labelledby="trust-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Logo cloud / trust strip - @sshahaider/components/logo-cloud-2 pattern */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full',
                'transition-all duration-200',
                'bg-white/60 backdrop-blur-sm border',
                item.verified
                  ? 'border-[var(--tn-blue)]/30 text-[var(--tn-blue)]'
                  : 'border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--tn-blue)]/40 hover:text-[var(--tn-blue)]'
              )}
            >
              {item.verified && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--tn-blue)] shrink-0" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              )}
              <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Subtle divider */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>

        {/* Press / social proof placeholder */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-50">
            <span className="text-xs font-medium tracking-wider uppercase text-[var(--muted-foreground)]">Your publication here</span>
          </div>
        </div>
      </div>
    </section>
  )
}