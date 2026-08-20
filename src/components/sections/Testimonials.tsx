'use client'

import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote: "TopNotch is the first teleprompter that actually understands my accent. The voice-following in Hindi-English mixed speech is eerily good — it doesn't trip on 'v/w' or 'th/t' like every other tool.",
    author: "Priya Sharma",
    role: "Sales Engineer",
    company: "SaaS startup",
    avatar: "PS",
  },
  {
    quote: "I record 20+ Loom videos a week. Before TopNotch, I'd do 3-4 takes per video. Now it's one take — the notch teleprompter + .m4a recording means my script and audio are perfectly synced.",
    author: "Arjun Mehta",
    role: "Developer Advocate",
    company: "DevTools company",
    avatar: "AM",
  },
  {
    quote: "The auto-arrange feature saved me hours. I paste a 40-minute talk script and it just knows where the natural pauses are. No more manually inserting '---' breaks.",
    author: "Neha Reddy",
    role: "Conference Speaker",
    company: "Tech conferences",
    avatar: "NR",
  },
  {
    quote: "Finally a teleprompter that's free and doesn't spy on you. 100% on-device, records locally, works offline. This is how software should be built.",
    author: "Karan Patel",
    role: "Privacy Engineer",
    company: "Fintech",
    avatar: "KP",
  },
  {
    quote: "Interview prep changed completely. I can practice answers at my natural pace, record them, review the .m4a. The Classic mode with WPM control is great for timed responses.",
    author: "Sneha Iyer",
    role: "Product Manager",
    company: "Big Tech",
    avatar: "SI",
  },
  {
    quote: "Webinars used to mean reading off a second monitor and looking shifty. Now I'm looking straight at the camera the whole time. The notch integration is invisible to attendees.",
    author: "Rohit Banerjee",
    role: "Marketing Lead",
    company: "B2B SaaS",
    avatar: "RB",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            Trusted by creators
          </p>
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Real people. <span className="text-[var(--tn-blue)]">Real results.</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            From sales calls to conference stages — here's what Indian creators say about TopNotch.
          </p>
        </div>

        {/* Testimonial grid - 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={index}
              className={cn(
                'relative rounded-2xl p-7 md:p-8',
                'bg-white border border-[var(--border)]',
                'shadow-[0_4px_24px_rgba(0,0,0,0.04)]',
                'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
              )}
            >
              {/* Quote icon */}
              <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609v7.391h-8.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609v7.391h-9zm11 0h7.017v-7.391c0-5.704-3.716-9.57-8.983-10.609v7.391h7.017z" />
                </svg>
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 text-[#333] leading-relaxed text-base">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-semibold text-sm',
                    'bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]'
                  )}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#0a0a0a]">{t.author}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{t.role} · {t.company}</p>
                </div>
              </div>
            </article>
          ))}

          {/* Placeholder for future real testimonials */}
          <article className={cn(
            'relative rounded-2xl p-7 md:p-8',
            'bg-[var(--tn-blue-light)]/30 border border-[var(--tn-blue)]/20',
            'flex flex-col items-center justify-center text-center min-h-[280px]'
          )}>
            <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <p className="text-[#444] mb-4">More testimonials coming soon</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Using TopNotch? <a href="mailto:yash@8bityash.vercel.app" className="text-[var(--tn-blue)] hover:underline">Share your story</a>
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}