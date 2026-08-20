'use client'

import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    title: 'Paste your script',
    description: 'Copy any text — speeches, talking points, interview questions — into TopNotch. The TextArrangementEngine auto-detects natural pauses and inserts section breaks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M10 9h8M10 13h8M10 17h5" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Hover the notch',
    description: 'Move your pointer to the notch — TopNotch expands. Press ⌘⇧R or click the record button. The shouldered notch glows, ready to follow your voice.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
        <path d="M12 17v5" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Read, record, done',
    description: 'Speak naturally — the text scrolls with you in real time. Your mic audio saves as .m4a locally. When finished, the notch collapses. Export script + audio instantly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 17h8M12 17v4" />
        <path d="M12 7v4" />
        <path d="M8 11h8" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="how-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            How it works
          </p>
          <h2
            id="how-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Three steps to <span className="text-[var(--tn-blue)]">perfect delivery</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            No setup, no calibration, no account. Just paste, point, and present.
          </p>
        </div>

        {/* Steps - horizontal on desktop, stacked on mobile */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={index}
              className={cn(
                'relative rounded-2xl p-8 md:p-10',
                'bg-white border border-[var(--border)]',
                'shadow-[0_4px_24px_rgba(0,0,0,0.04)]',
                'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
              )}
            >
              {/* Step number */}
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--tn-blue)]/10 text-[var(--tn-blue)] font-bold text-lg font-mono">
                  {step.number}
                </span>
                <div className="flex-1">
                  <div className="h-1 w-full max-w-[60px] bg-gradient-to-r from-[var(--tn-blue)] to-[var(--tn-blue-mid)] rounded-full" />
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="text-[#444] leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}

          {/* Connecting line between steps (desktop only) */}
          <div className="hidden md:block absolute top-[50px] left-[calc(33.33%+4px)] right-[calc(33.33%+4px)] h-0.5 bg-gradient-to-r from-transparent via-[var(--tn-blue)]/30 to-transparent -z-10 pointer-events-none" aria-hidden="true" />
        </div>

        {/* Keyboard shortcuts note */}
        <div className="mt-16 rounded-2xl p-6 md:p-8 text-center bg-[var(--tn-blue-light)]/30 border border-[var(--tn-blue)]/20">
          <p className="text-sm text-[var(--tn-blue)] font-semibold mb-3">Pro tip: Keyboard shortcuts</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#444]">
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">⌘⇧R</kbd>
            <span>Start/Stop recording</span>
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">Space</kbd>
            <span>Play/Pause (Classic)</span>
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">↑/↓</kbd>
            <span>Speed up/Down</span>
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">Esc</kbd>
            <span>Collapse notch</span>
          </div>
        </div>
      </div>
    </section>
  )
}