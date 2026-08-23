'use client'

import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import { GithubMark } from '@/components/GithubMark'
import Link from 'next/link'

export function GetFree() {
  return (
    <section
      id="get-topnotch"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="get-title"
    >
      <div className="mx-auto max-w-4xl">
        {/* Main CTA card - @sshahaider/components/cta-3 pattern */}
        <div className="relative rounded-3xl p-8 md:p-12 text-center bg-gradient-to-br from-[var(--tn-blue)] via-[var(--tn-blue)]/90 to-[var(--tn-blue-dark)]">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 rounded-3xl bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" aria-hidden="true" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <CircleCheck size={16} strokeWidth={2.5} className="text-white" aria-hidden="true" />
              <span className="text-sm font-semibold text-white">Public repo · build from source</span>
            </div>

            {/* Headline */}
            <h2
              id="get-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              Free, and staying that way.
            </h2>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              No subscription, no account, no upsell. Clone it, build it, and start presenting.
            </p>

            {/* Status badges - @serafimcloud/components/status-badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              <span className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
                'bg-white/20 text-white/90 border border-white/30'
              )}>
                <span className="relative flex h-1.5 w-1.5 rounded-full bg-green-400 before:absolute before:inset-[-2px] before:rounded-full before:bg-green-400/30 before:animate-ping" aria-hidden="true" />
                Free forever
              </span>
              <span className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
                'bg-white/20 text-white/90 border border-white/30'
              )}>
                No account needed
              </span>
              <span className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
                'bg-white/20 text-white/90 border border-white/30'
              )}>
                Source available
              </span>
            </div>

            {/* Primary CTA — the download that actually exists today */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Yasharma117/TopNotch"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-8 py-4',
                  'rounded-xl font-semibold text-base',
                  'bg-white text-[var(--tn-blue)]',
                  'hover:bg-white/90 active:bg-white',
                  'transition-colors duration-200',
                  'shadow-[0_8px_32px_rgba(0,0,0,0.15)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--tn-blue)]'
                )}
              >
                <GithubMark size={20} />
                Get TopNotch on GitHub
              </a>

              <a
                href="https://github.com/Yasharma117/TopNotch"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-8 py-4',
                  'rounded-xl font-semibold text-base',
                  'border-2 border-white/30 text-white',
                  'bg-transparent',
                  'hover:bg-white/10 active:bg-white/20',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--tn-blue)]'
                )}
              >
                <GithubMark size={20} />
                View the source
              </a>
            </div>

            {/* System requirements */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-sm text-white/85 mb-3">Requires macOS 13+ and a Mac with a camera notch — MacBook Pro 14&rdquo;/16&rdquo; (2021 or later) or MacBook Air (2022 or later)</p>
              <p className="text-xs text-white/80">Asks for Microphone and Speech Recognition the first time you use them</p>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            On-device speech recognition · no network calls · nothing to sign in to
          </p>
        </div>
      </div>
    </section>
  )
}