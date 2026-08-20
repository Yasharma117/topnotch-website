'use client'

import { cn } from '@/lib/utils'

export function Pain() {
  return (
    <section
      id="pain"
      className={cn(
        'relative py-24 md:py-32 px-6',
        'bg-gradient-to-b from-white via-[var(--tn-blue-light)]/20 to-white'
      )}
      aria-labelledby="pain-title"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-rose)]">
          The problem
        </p>

        {/* Main pull quote — using gradient text like @designali-in/components/gradient-text */}
        <h2
          id="pain-title"
          className="mb-8 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-[var(--tn-rose)] via-[var(--tn-rose)] to-red-600 bg-clip-text text-transparent">
            &ldquo;You know the words. You&rsquo;ve practiced.&rdquo;
          </span>
          <br />
          <span className="bg-gradient-to-r from-[var(--tn-rose)] via-[var(--tn-rose)] to-red-600 bg-clip-text text-transparent">
            Then the camera turns on&hellip; and your mind goes blank.&rdquo;
          </span>
        </h2>

        {/* Supporting narrative */}
        <div className="mx-auto max-w-2xl space-y-5 text-lg text-[#444] leading-relaxed">
          <p>
            You&rsquo;re not nervous. You&rsquo;re prepared. But the moment that red light hits,
            the script vanishes. You look down at your notes — <em>breaking eye contact</em> —
            and the connection fractures.
          </p>
          <p>
            Teleprompters exist, sure. But they&rsquo;re either expensive hardware, clunky apps
            that cover your screen, or browser tools that don&rsquo;t follow <em>your</em> pace.
            And if you speak with an Indian accent? Most voice-following just&hellip; doesn&rsquo;t work.
          </p>
          <p className="font-medium text-[var(--tn-rose)]">
            The problem isn&rsquo;t you. It&rsquo;s that every teleprompter was built for someone else.
          </p>
        </div>

        {/* Visual: subtle rose accent line */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--tn-rose)] to-transparent" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--tn-rose)]">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[var(--tn-rose)] to-transparent" />
        </div>
      </div>
    </section>
  )
}