'use client'

import { cn } from '@/lib/utils'

const comparisons = [
  {
    category: 'Voice sync',
    other: 'Fixed speed — you adapt to the teleprompter',
    topnotch: 'Follows your voice in real time — it adapts to you',
    winner: 'topnotch',
  },
  {
    category: 'Indian English',
    other: 'Fails on Indian accents — US/UK models only',
    topnotch: 'en-IN default + 10 Indian languages, phonetic variation map',
    winner: 'topnotch',
  },
  {
    category: 'Audio recording',
    other: 'No recording — separate app needed',
    topnotch: 'Records mic to .m4a (AAC) while you read',
    winner: 'topnotch',
  },
  {
    category: 'Section pauses',
    other: 'Manual --- breaks required',
    topnotch: 'Auto-arrange via NLP (TextArrangementEngine)',
    winner: 'topnotch',
  },
  {
    category: 'Privacy',
    other: 'Cloud-based — scripts & audio leave your device',
    topnotch: '100% on-device (Apple Speech), zero network calls',
    winner: 'topnotch',
  },
  {
    category: 'Classic mode',
    other: 'Often missing or separate purchase',
    topnotch: 'Built-in constant-speed mode with WPM control',
    winner: 'topnotch',
  },
  {
    category: 'Notch integration',
    other: 'Windowed overlay — covers content',
    topnotch: 'Lives in the notch — zero screen real estate lost',
    winner: 'topnotch',
  },
  {
    category: 'Cost',
    other: 'Subscriptions ($10-30/mo) or $100+ hardware',
    topnotch: 'Free. No account. No subscription.',
    winner: 'topnotch',
  },
]

export function Comparison() {
  return (
    <section
      id="comparison"
      className={cn('py-24 md:py-32 px-6', 'bg-[var(--tn-blue-light)]/20')}
      aria-labelledby="comparison-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            Built differently
          </p>
          <h2
            id="comparison-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Why TopNotch <span className="text-[var(--tn-blue)]">wins</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            We didn't just add features — we rethought what a teleprompter should be for Indian creators.
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          {/* Table header */}
          <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[var(--border)] bg-[var(--muted)]/50">
            <div className="px-6 py-4 font-semibold text-[#0a0a0a] text-sm md:text-base">
              Category
            </div>
            <div className="px-6 py-4 font-semibold text-[#0a0a0a] text-sm md:text-base text-center border-l border-[var(--border)]">
              Other teleprompters
            </div>
            <div className="px-6 py-4 font-semibold text-[#0a0a0a] text-sm md:text-base text-center border-l border-[var(--border)]">
              TopNotch
            </div>
          </div>

          {/* Table rows */}
          <div className="divide-y divide-[var(--border)]">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'grid grid-cols-[1.2fr_1fr_1fr]',
                  'transition-colors duration-200',
                  index % 2 === 0 ? 'bg-white' : 'bg-[var(--muted)]/30',
                  'hover:bg-[var(--tn-blue-light)]/30'
                )}
              >
                {/* Category */}
                <div className="px-6 py-5 md:py-6 font-medium text-[#0a0a0a] text-sm md:text-base flex items-center">
                  {item.category}
                </div>

                {/* Other teleprompters */}
                <div className="px-6 py-5 md:py-6 text-center border-l border-[var(--border)]">
                  <p className="text-[#666] text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                    {item.other}
                  </p>
                </div>

                {/* TopNotch */}
                <div className="px-6 py-5 md:py-6 text-center border-l border-[var(--border)] relative">
                  <p className="text-[#0a0a0a] text-sm md:text-base font-medium leading-relaxed max-w-xs mx-auto">
                    {item.topnotch}
                  </p>
                  {/* Winner badge */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                    <span className={cn(
                      'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold',
                      'bg-[var(--tn-blue)] text-white shadow-[0_2px_8px_rgba(66,151,247,0.4)]'
                    )}>
                      ✓
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Every row above is a real difference — not marketing fluff. TopNotch exists because the alternatives
            didn't work for how Indian creators actually speak, record, and present.
          </p>
        </div>
      </div>
    </section>
  )
}