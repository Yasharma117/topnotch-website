'use client'

import { cn } from '@/lib/utils'

const useCases = [
  {
    title: 'Sales & demo calls',
    description: 'Deliver your pitch flawlessly while maintaining eye contact with prospects. Record the call for CRM notes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    accent: 'blue' as const,
  },
  {
    title: 'Job interviews',
    description: 'Never lose your train of thought. Voice-following keeps pace with your answers — even when you pause to think.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: 'green' as const,
  },
  {
    title: 'Webinars & live streams',
    description: 'Present for 60+ minutes without drifting. Auto-arrange handles section transitions. .m4a recording = instant captions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 17h8M12 17v4" />
        <path d="M12 7v4" />
      </svg>
    ),
    accent: 'purple' as const,
  },
  {
    title: 'Talks & presentations',
    description: 'Stage or screen — the notch teleprompter is invisible to the audience. Your script scrolls perfectly, you stay present.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    accent: 'rose' as const,
  },
]

type AccentKey = 'blue' | 'green' | 'purple' | 'rose'

const accentStyles: Record<AccentKey, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-[var(--tn-blue)]/10', text: 'text-[var(--tn-blue)]', border: 'border-[var(--tn-blue)]/20' },
  green: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
  rose: { bg: 'bg-[var(--tn-rose)]/10', text: 'text-[var(--tn-rose)]', border: 'border-[var(--tn-rose)]/20' },
}

export function UseCases() {
  return (
    <section
      id="use-cases"
      className={cn('py-24 md:py-32 px-6', 'bg-[var(--tn-blue-light)]/20')}
      aria-labelledby="usecases-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            Use cases
          </p>
          <h2
            id="usecases-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            High-stakes moments <span className="text-[var(--tn-blue)]">where it matters</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            From your desk to the stage — TopNotch is built for the moments you can't afford to mess up.
          </p>
        </div>

        {/* Use case cards - 2x2 grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc, index) => {
            const style = accentStyles[uc.accent]
            return (
              <article
                key={index}
                className={cn(
                  'relative rounded-2xl p-7 md:p-8',
                  'bg-white border transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]',
                  style.bg,
                  style.border,
                  'hover:border-opacity-60'
                )}
              >
                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: uc.accent === 'blue' ? 'linear-gradient(90deg, var(--tn-blue), var(--tn-blue-mid))' :
                                uc.accent === 'green' ? 'linear-gradient(90deg, #22c55e, #16a34a)' :
                                uc.accent === 'purple' ? 'linear-gradient(90deg, #a855f7, #9333ea)' :
                                'linear-gradient(90deg, var(--tn-rose), #e11d48)',
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${style.bg} !important` }}
                >
                  <span className={cn(style.text)}>{uc.icon}</span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a]">
                  {uc.title}
                </h3>
                <p className="text-[#444] leading-relaxed">
                  {uc.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            Works everywhere you present — Zoom, Meet, Teams, Loom, Riverside, OBS, stage screens.
          </p>
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
        </div>
      </div>
    </section>
  )
}