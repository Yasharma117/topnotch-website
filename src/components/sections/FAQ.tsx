'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What macOS versions does TopNotch support?',
    answer:
      'TopNotch requires macOS 14 (Sonoma) or later. It runs on both Apple Silicon (M1/M2/M3) and Intel Macs with a notch.',
  },
  {
    question: 'Which languages does voice-following support?',
    answer:
      '11 Indian languages with en-IN as default: English (India), Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia. The phonetic variation map handles v/w, th/t, th/d, z/j, s/sh substitutions automatically.',
  },
  {
    question: 'Does TopNotch work with an external monitor?',
    answer:
      'Yes. The notch teleprompter appears on the built-in display\'s notch. If you close the lid (clamshell mode), TopNotch pauses automatically since the notch isn\'t visible.',
  },
  {
    question: 'How does the voice-following actually work?',
    answer:
      'On-device Apple Speech Recognition streams transcripts locally. Our fuzzy matcher (Levenshtein 75% char similarity + phonetic map + ±30-word sliding window) aligns your spoken words to the script and scrolls accordingly. No cloud, no latency.',
  },
  {
    question: 'What audio format does it record?',
    answer:
      'AAC encoded .m4a at 44.1kHz stereo. The file saves to your chosen folder (default: ~/Movies/TopNotch). You can drag it directly into Final Cut, DaVinci, Premiere, or any editor.',
  },
  {
    question: 'Is there a subscription or account required?',
    answer:
      'No. TopNotch is completely free — no signup, no subscription, no in-app purchases. The app is open source (github.com/Yasharma117/TopNotch). Download from the Mac App Store or GitHub releases.',
  },
  {
    question: 'How accurate is the accent tolerance?',
    answer:
      'For Indian English, our tests show ~85% word-level sync accuracy in real-world conditions (background noise, mixed Hindi-English, varying mic quality). The phonetic map handles the most common Indian English variations. It\'s not perfect — heavy noise or very fast speech can cause brief desync, but it recovers within the ±30-word window.',
  },
  {
    question: 'Can I use TopNotch for teleprompting without recording?',
    answer:
      'Yes. Classic mode gives you constant-speed scrolling with WPM control (100–300 WPM). Voice-following mode works without recording too — just disable the record toggle. The notch still glows to show it\'s active.',
  },
  {
    question: 'What permissions does TopNotch need?',
    answer:
      'Microphone (for voice-following + recording), Accessibility (for global hotkeys ⌘⇧R), and Screen Recording (for the notch overlay to appear above other windows). All permissions are requested on first use with clear explanations.',
  },
  {
    question: 'Does it work with Zoom / Teams / Meet / Loom / OBS?',
    answer:
      'Yes. TopNotch sits in the system notch — it\'s invisible to screen capture and meeting apps. Your camera sees you looking straight at the lens. The .m4a records your local mic, not the meeting audio.',
  },
  {
    question: 'What if I don\'t have a notch Mac?',
    answer:
      'TopNotch requires a Mac with a camera housing notch (MacBook Pro 14"/16" 2021+, MacBook Air 13" 2022+, Studio Display). On non-notch Macs, the app will show a "Notch not available" notice and won\'t run.',
  },
  {
    question: 'How do I report bugs or request features?',
    answer:
      'Open an issue on GitHub (github.com/Yasharma117/TopNotch/issues) or email yash@8bityash.vercel.app. Include macOS version, Mac model, and steps to reproduce. We respond within 48 hours.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Questions? <span className="text-[var(--tn-blue)]">We have answers.</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about TopNotch — from compatibility to privacy.
          </p>
        </div>

        {/* FAQ accordion - @ruixen.ui/components/faqsection pattern */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className={cn(
                'rounded-xl border border-[var(--border)] bg-white',
                'overflow-hidden transition-all duration-200',
                'shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]',
                openIndex === index && 'border-[var(--tn-blue)]/40 shadow-[0_8px_24px_rgba(66,151,247,0.1)]'
              )}
              role="listitem"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  'w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4',
                  'text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tn-blue)] focus-visible:ring-offset-2'
                )}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-base md:text-lg font-medium text-[#0a0a0a] leading-relaxed pr-8">
                  {faq.question}
                </span>
                <svg
                  className={cn(
                    'shrink-0 h-5 w-5 text-[var(--muted-foreground)] transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={cn(
                  'overflow-hidden transition-all duration-200 ease-out',
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <div className="px-6 pb-6 text-[#444] leading-relaxed border-t border-[var(--border)]">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 rounded-2xl p-6 md:p-8 text-center bg-[var(--tn-blue-light)]/30 border border-[var(--tn-blue)]/20">
          <p className="text-[#444] mb-4">
            Didn't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:yash@8bityash.vercel.app"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3',
                'rounded-xl font-semibold text-base',
                'bg-[var(--tn-blue)] text-white',
                'hover:bg-[var(--tn-blue-dark)] active:bg-[var(--tn-blue)]/90',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tn-blue)] focus-visible:ring-offset-2'
              )}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email us
            </a>
            <a
              href="https://github.com/Yasharma117/TopNotch/issues"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-2 px-6 py-3',
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
              GitHub Issues
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}