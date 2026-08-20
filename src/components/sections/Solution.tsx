'use client'

import { cn } from '@/lib/utils'

export function Solution() {
  return (
    <section
      id="solution"
      className={cn('relative py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="solution-title"
    >
      <div className="mx-auto max-w-5xl">
        {/* Centered pivot card */}
        <div className="relative mx-auto max-w-3xl rounded-3xl p-8 md:p-12 text-center bg-[var(--tn-blue-light)]/30 border border-[var(--tn-blue)]/20">
          {/* Animated accent blob */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--tn-blue)]/10 to-[var(--tn-blue-mid)]/5 opacity-50 blur-3xl" aria-hidden="true" />

          <div className="relative z-10 space-y-6">
            {/* Checkmark icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Headline */}
            <h2
              id="solution-title"
              className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a]"
            >
              TopNotch follows <span className="text-[var(--tn-blue)]">your</span> voice.
            </h2>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-[#444] max-w-2xl mx-auto leading-relaxed">
              A teleprompter that lives in your Mac&rsquo;s notch. It scrolls <em>with</em> you —
              not against you — in 11 Indian languages, records your mic audio, and stays
              completely on-device.
            </p>

            {/* Differentiator bullets */}
            <ul className="mt-8 grid gap-4 sm:grid-cols-3 text-left text-sm text-[#444]" role="list">
              <li className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#0a0a0a]">Voice-following</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Matches your pace, not a timer</p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#0a0a0a]">11 Indian languages</p>
                  <p className="text-xs text-[var(--muted-foreground)]">en-IN default + 10 more</p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[var(--border)]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#0a0a0a]">Records .m4a</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Your mic audio, saved locally</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#get-topnotch"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-7 py-3',
                  'rounded-xl font-semibold text-base',
                  'bg-[var(--tn-blue)] text-white',
                  'hover:bg-[var(--tn-blue-dark)] active:bg-[var(--tn-blue)]/90',
                  'transition-colors duration-200',
                  'shadow-[0_4px_24px_rgba(66,151,247,0.3)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tn-blue)] focus-visible:ring-offset-2'
                )}
              >
                Get TopNotch — Free
              </a>
              <a
                href="#features"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-7 py-3',
                  'rounded-xl font-semibold text-base',
                  'border-2 border-[var(--border)] text-[var(--foreground)]',
                  'bg-white/80 backdrop-blur-sm',
                  'hover:bg-[var(--muted)] active:bg-[var(--muted)]',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2'
                )}
              >
                See features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}