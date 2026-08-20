'use client'

import { cn } from '@/lib/utils'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'blue' | 'rose' | 'green' | 'purple'
}

const features: Feature[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
    title: 'Voice-following teleprompter',
    description: 'Scrolls at your natural speaking pace. No fixed speed, no rushing, no lagging behind — the text moves when you do.',
    accent: 'blue',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <path d="M12 22v-10" />
      </svg>
    ),
    title: 'Accent-tolerant sync (en-IN + 11)',
    description: 'Built for Indian English. Phonetic variation map (v/w, th/t, z/j, s/sh) + Levenshtein 75% char-similarity + ±30-word window.',
    accent: 'purple',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: 'Records mic audio to .m4a',
    description: 'Your voice captured locally as AAC .m4a while you read. Perfect for post-production, captions, or review.',
    accent: 'green',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20" />
        <path d="M6.5 17A2.5 2.5 0 0 1 4 19.5" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
    title: 'Auto-arrange section pauses',
    description: 'NLP-powered TextArrangementEngine detects natural breaks and inserts pauses automatically — no manual formatting needed.',
    accent: 'rose',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Classic constant-speed mode',
    description: 'Prefer a steady scroll? Classic mode lets you set words-per-minute and walk away. Reliable, predictable, familiar.',
    accent: 'blue',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
    title: '100% on-device, private',
    description: 'No cloud, no accounts, no network calls. Apple Speech runs locally. Your script, your voice, your Mac — that\'s it.',
    accent: 'green',
  },
]

const accentStyles = {
  blue: {
    iconBg: 'bg-[var(--tn-blue)]/10',
    iconColor: 'text-[var(--tn-blue)]',
    border: 'border-[var(--tn-blue)]/20',
    hoverBorder: 'hover:border-[var(--tn-blue)]/40',
  },
  purple: {
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-600',
    border: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
  },
  green: {
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    border: 'border-green-500/20',
    hoverBorder: 'hover:border-green-500/40',
  },
  rose: {
    iconBg: 'bg-[var(--tn-rose)]/10',
    iconColor: 'text-[var(--tn-rose)]',
    border: 'border-[var(--tn-rose)]/20',
    hoverBorder: 'hover:border-[var(--tn-rose)]/40',
  },
}

export function Features() {
  return (
    <section
      id="features"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            Features
          </p>
          <h2
            id="features-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Built for how <span className="text-[var(--tn-blue)]">you</span> speak
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            Every feature exists because the alternatives got it wrong for Indian creators.
          </p>
        </div>

        {/* Feature grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const style = accentStyles[feature.accent || 'blue']
            return (
              <article
                key={index}
                className={cn(
                  'group relative rounded-2xl p-7 md:p-8',
                  'bg-white border transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]',
                  style.iconBg,
                  style.border,
                  style.hoverBorder
                )}
                style={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
                }}
              >
                {/* Subtle gradient top border */}
                <div
                  className="absolute top-0 left-4 right-4 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: feature.accent === 'blue' ? 'linear-gradient(90deg, transparent, var(--tn-blue), transparent)' :
                                feature.accent === 'purple' ? 'linear-gradient(90deg, transparent, #a855f7, transparent)' :
                                feature.accent === 'green' ? 'linear-gradient(90deg, transparent, #22c55e, transparent)' :
                                'linear-gradient(90deg, transparent, var(--tn-rose), transparent)',
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className={cn(
                    'mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                    'transition-all duration-300',
                    style.iconBg,
                    style.iconColor,
                    'group-hover:scale-110'
                  )}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a] group-hover:text-[var(--tn-blue)] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#444] leading-relaxed text-base">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* Subtle CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--muted-foreground)] mb-4">
            All features run locally. No signup. No subscription.
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