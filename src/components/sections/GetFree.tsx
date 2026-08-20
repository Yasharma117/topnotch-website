'use client'

import { cn } from '@/lib/utils'
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
            {/* Verified badge - @edwinvakayil/components/verified-badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-sm font-semibold text-white">App Store verified</span>
            </div>

            {/* Headline */}
            <h2
              id="get-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              TopNotch is free. <br />For everyone.
            </h2>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              No subscription. No account. No hidden costs. Just download and start presenting.
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
                Open source
              </span>
            </div>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Mac App Store button */}
              <a
                href="https://apps.apple.com/app/topnotch"
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 14.39c-.84-.46-1.75-.79-2.72-.79-.96 0-1.79.29-2.49.79-.7.53-1.21 1.2-1.5 1.94a7.76 7.76 0 0 0-1.31-.37c-2.22 0-3.95 1.59-4.17 3.75a3.74 3.74 0 0 0 1.71 2.92 4.5 4.5 0 0 0 .3 1.16 3.8 3.8 0 0 0 2.36.95c1.38 0 2.5-.64 3.21-1.56.71-.92 1.07-2.03 1.07-3.33 0-.95-.15-1.81-.38-2.56a5.44 5.44 0 0 0-1.11-1.97 4.93 4.93 0 0 0-1.8-.83c-1.5 0-2.71.87-3.04 2.04a6.04 6.04 0 0 0-.13 1.36c0 .68.07 1.32.18 1.94a5.2 5.2 0 0 0 2.54 3.56 5.7 5.7 0 0 0 3.2.63c2.3 0 4.1-1.7 4.23-3.99a3.84 3.84 0 0 0-1.64-2.85 3.68 3.68 0 0 0-.35-1.05 3.8 3.8 0 0 0-2.3-.88c-1.4 0-2.56.67-3.26 1.6-.7 1-1.05 2.16-1.05 3.44 0 .99.17 1.91.45 2.68a5.8 5.8 0 0 0 1.2 2.08 5.1 5.1 0 0 0 1.95.87c1.58 0 2.8-.84 3.18-1.96a5.8 5.8 0 0 0 .15-1.38c0-.7-.08-1.35-.19-1.96a5.4 5.4 0 0 0-2.72-3.75 5.8 5.8 0 0 0-3.38-.74c-2.4 0-4.2 1.8-4.34 4.08a4 4 0 0 0 1.72 3.02 3.8 3.8 0 0 0 .4 1.2 3.9 3.9 0 0 0 2.42 1.03c1.4 0 2.6-.67 3.3-1.6a6.4 6.4 0 0 0 1.4-2.76c.14-1.52.14-3.32-.04-4.56zm-9.85-5.63c.71 0 1.25-.45 1.25-1.03 0-.58-.54-1.03-1.25-1.03-.7 0-1.25.45-1.25 1.03 0 .58.55 1.03 1.25 1.03zm-2.16 9.74c-.7 0-1.25-.46-1.25-1.04 0-.58.54-1.03 1.25-1.03.71 0 1.25.45 1.25 1.03 0 .58-.54 1.04-1.25 1.04zm4.32 0c-.71 0-1.25-.46-1.25-1.04 0-.58.54-1.03 1.25-1.03.7 0 1.25.45 1.25 1.03 0 .58-.55 1.04-1.25 1.04z" />
                </svg>
                Download on the Mac App Store
              </a>

              {/* GitHub / Direct download */}
              <a
                href="https://github.com/Yasharma117/TopNotch/releases"
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* System requirements */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-3">Requires macOS 14+ · Mac with notch (MacBook Pro 14"/16" 2021+, MacBook Air 2022+, Studio Display)</p>
              <p className="text-xs text-white/50">Microphone permission required for voice-following & recording</p>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            100% on-device · Apple Speech Recognition · Zero network calls · Your data never leaves your Mac
          </p>
        </div>
      </div>
    </section>
  )
}