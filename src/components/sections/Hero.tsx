'use client'

import dynamic from 'next/dynamic'
import { NotchOverlay } from '@/components/NotchOverlay'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight, ArrowDown, Lock, Laptop } from 'lucide-react'
import { GithubMark } from '@/components/GithubMark'

// Client-only: the shader paints to a canvas, so it cannot render on the server.
const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false, loading: () => null }
)

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <GrainGradient
          colorBack="#f6f8ff"
          colors={['#dbe7ff', '#a9c8ff', '#4297F7', '#5667FF']}
          shape="corners"
          intensity={0.35}
          noise={0.12}
          speed={1}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      </div>

      {/* The notch hangs off the top edge of the viewport, as it does off the bezel */}
      <div className="relative z-20 w-full max-w-[340px] px-4">
        <NotchOverlay reveal speed={11} />
      </div>

      <div className="relative z-20 w-full max-w-5xl px-6 pt-16 pb-16 text-center">
        {/* Headline */}
        <h1
          id="hero-title"
          className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a0a0a]"
        >
          The teleprompter that lives in your Mac&rsquo;s notch.
        </h1>

        {/* Sub-headline */}
        <p className="mb-10 text-lg md:text-xl text-[#333] max-w-2xl mx-auto leading-relaxed">
          Read your script while looking straight down the lens. Hidden from screen shares,
          records as you go, and never leaves your Mac.
          <span className="font-semibold text-[var(--tn-blue)]"> Free, and there is no account.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#get-topnotch"
            className={cn(
              'inline-flex items-center justify-center gap-2 px-8 py-4',
              'rounded-xl font-semibold text-base',
              'bg-[#0a0a0a] text-white',
              'hover:bg-[#262626] active:bg-black',
              'transition-colors duration-200',
              'shadow-[0_8px_30px_rgba(0,0,0,0.28)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tn-blue)] focus-visible:ring-offset-2'
            )}
          >
            Get TopNotch — Free
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>

          <Link
            href="https://github.com/Yasharma117/TopNotch"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center gap-2 px-8 py-4',
              'rounded-xl font-semibold text-base',
              'border border-black/10 text-[#0a0a0a]',
              'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)]',
              'hover:bg-white/90 active:bg-white',
              'transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2'
            )}
          >
            <GithubMark size={18} />
            View on GitHub
          </Link>
        </div>

        {/* Trust badges — only claims that are actually true today */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted-foreground)]">
          <span className="flex items-center gap-1.5">
            <Lock size={14} strokeWidth={2} className="text-[var(--tn-blue)]" aria-hidden="true" />
            Runs entirely on your Mac
          </span>
          <span className="flex items-center gap-1.5">
            <GithubMark size={14} />
            Free and open source (MIT)
          </span>
          <span className="flex items-center gap-1.5">
            <Laptop size={14} strokeWidth={2} aria-hidden="true" />
            macOS 13+ · Macs with a notch
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20" aria-hidden="true">
        <ArrowDown size={24} strokeWidth={1.5} className="text-[var(--muted-foreground)] opacity-50" aria-hidden="true" />
      </div>
    </section>
  )
}
