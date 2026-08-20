'use client'

import dynamic from 'next/dynamic'
import { NotchOverlay } from '@/components/NotchOverlay'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Dynamic import for paper shaders (client-only, avoids SSR issues with canvas)
const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false, loading: () => null }
)

const PaperTexture = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.PaperTexture),
  { ssr: false, loading: () => null }
)

export function Hero() {
  // Primary: animated light gradient (GrainGradient)
  // Fallback: static paper texture (PaperTexture) — shown if GrainGradient fails or user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section
      className={cn(
        'relative min-h-[90vh] flex flex-col items-center justify-center',
        'bg-white overflow-hidden',
        'before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_var(--tn-blue-light)_0%,_transparent_70%)] before:opacity-30'
      )}
      aria-labelledby="hero-title"
    >
      {/* Paper shader background — full bleed */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {!prefersReducedMotion && (
          <GrainGradient
            colorBack="#f6f8ff"
            colors={['#dbe7ff', '#a9c8ff', '#4297F7', '#5667FF']}
            shape="corners"       // corners shape — soft, not too busy
            intensity={0.35}      // gentle distortion
            noise={0.12}          // subtle grain
            speed={0.15}          // slow, calm motion
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}
        {prefersReducedMotion && (
          <PaperTexture
            colorBack="#fbfbfd"
            colorFront="#e9effc"
            roughness={0.4}
            fiber={0.3}
            crumples={0.15}
            crumpleSize={0.3}
            folds={0.1}
            foldCount={4}
            fade={0.2}
            drops={0.05}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </div>

      {/* Subtle vignette overlay for depth */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.02) 100%)',
        }}
      />

      {/* Content — centered, above shader */}
      <div className="relative z-20 w-full max-w-5xl px-6 pt-20 pb-16 text-center">
        {/* Notch overlay — sits at top of content area */}
        <NotchOverlay
          expand={0.8}
          recording={false}
          caption="Your script, right where you look"
          className="mb-10"
        />

        {/* Headline */}
        <h1
          id="hero-title"
          className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a0a0a]"
        >
          The teleprompter that lives in your Mac&rsquo;s notch.
        </h1>

        {/* Sub-headline */}
        <p className="mb-10 text-lg md:text-xl text-[#333] max-w-2xl mx-auto leading-relaxed">
          Read your script, record your voice, stay eye-to-eye with the camera.
          <span className="font-semibold text-[var(--tn-blue)]"> Free. No account needed.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#get-topnotch"
            className={cn(
              'inline-flex items-center justify-center gap-2 px-8 py-4',
              'rounded-xl font-semibold text-base',
              'bg-[var(--tn-blue)] text-white',
              'hover:bg-[var(--tn-blue-dark)] active:bg-[var(--tn-blue)]/90',
              'transition-colors duration-200',
              'shadow-[0_4px_24px_rgba(66,151,247,0.3)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tn-blue)] focus-visible:ring-offset-2'
            )}
          >
            Get TopNotch — Free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="https://github.com/Yasharma117/TopNotch"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center gap-2 px-8 py-4',
              'rounded-xl font-semibold text-base',
              'border-2 border-[var(--border)] text-[var(--foreground)]',
              'bg-white/80 backdrop-blur-sm',
              'hover:bg-[var(--muted)] active:bg-[var(--muted)]',
              'transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2'
            )}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted-foreground)] opacity-70">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--tn-blue)]">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            App Store verified
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--tn-rose)]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Product Hunt #4
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
            100% on-device, private
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--muted-foreground)] opacity-50">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

/**
 * Static fallback for OG/social — renders without client shaders
 */
export function HeroStatic() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-white px-6 pt-20 pb-16 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tn-blue-light)_0%,_transparent_70%)] opacity-30" />

      <div className="relative z-10 max-w-5xl">
        <div className="mb-10 flex items-center justify-center">
          {/* Static notch silhouette for OG */}
          <svg
            viewBox="-105 0 210 44"
            width={210}
            height={44}
            className="filter drop-shadow(0 4px 24px rgba(0,0,0,0.15))"
          >
            <path
              d="M -85 44 H 85 A 20 20 0 0 1 105 24 V 20 A 20 20 0 0 1 85 0 H -85 A 20 20 0 0 1 -105 20 V 24 A 20 20 0 0 1 -85 44 Z"
              fill="#0a0a0a"
              stroke="#4297F7"
              strokeWidth="1.5"
            />
            <circle cx="0" cy="6" r="3" fill="#4297F7" opacity="0.8" />
          </svg>
        </div>

        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a0a0a]">
          The teleprompter that lives in your Mac&rsquo;s notch.
        </h1>

        <p className="mb-10 text-lg md:text-xl text-[#333] max-w-2xl mx-auto leading-relaxed">
          Read your script, record your voice, stay eye-to-eye with the camera.
          <span className="font-semibold text-[var(--tn-blue)]"> Free. No account needed.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#get-topnotch"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-[var(--tn-blue)] text-white hover:bg-[var(--tn-blue-dark)] transition-colors"
          >
            Get TopNotch — Free
          </a>
          <a
            href="https://github.com/Yasharma117/TopNotch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 border-[var(--border)] bg-white/80 hover:bg-[var(--muted)] transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}