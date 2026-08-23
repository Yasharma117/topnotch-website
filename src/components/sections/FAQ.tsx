'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, Mail } from 'lucide-react'
import { GithubMark } from '@/components/GithubMark'

const faqs = [
  {
    question: 'Which Macs does TopNotch run on?',
    answer:
      'macOS 13 (Ventura) or later, on a Mac with a camera notch — MacBook Pro 14”/16” from 2021, and MacBook Air from 2022. Apple Silicon and Intel both work.',
  },
  {
    question: 'Will people see the script when I share my screen?',
    answer:
      'No. The panel is marked as excluded from screen capture, so Zoom, Meet, Teams, Loom and OBS record your desktop without it. What they see is you looking straight at the camera.',
  },
  {
    question: 'Which languages does voice-following support?',
    answer:
      'Twelve: English (India) as the default, plus Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam and Punjabi, and US and UK English.',
  },
  {
    question: 'How does the voice-following work?',
    answer:
      'Apple’s on-device speech recognition transcribes as you talk, and a fuzzy matcher lines that transcript up against your script — allowing for mishearings, and for the sounds that shift from one speaker to the next — then scrolls to wherever you actually are. Nothing is sent anywhere.',
  },
  {
    question: 'How well does it handle my accent?',
    answer:
      'It does not assume one correct pronunciation. The matcher treats v/w, th/t, z/j and s/sh as interchangeable, so the mishearings that usually break voice-following do not break this one. English (India) is the default locale, with eleven more to choose from. Best judged on your own script and mic — try it and see.',
  },
  {
    question: 'What does it record?',
    answer:
      'Your microphone, as AAC in an .m4a container at 44.1 kHz, mono. It saves to Recording.m4a on your Desktop by default, and you can point it somewhere else.',
  },
  {
    question: 'Can I use it without recording?',
    answer:
      'Yes. Press ⌘⇧T for the teleprompter on its own. Classic mode also scrolls at a fixed speed you set, from 10 to 120 points per second, if you would rather it ignore your voice entirely.',
  },
  {
    question: 'What permissions does it need?',
    answer:
      'Microphone, to record and to hear you; and Speech Recognition, for the on-device transcription that drives voice-following. macOS asks for both the first time you use them.',
  },
  {
    question: 'Does any of this leave my Mac?',
    answer:
      'No. Speech recognition runs on-device, the recording is written to your disk, and the app makes no network calls. There is no account and nothing to sign in to.',
  },
  {
    question: 'What does it cost?',
    answer:
      'Nothing. No subscription, no in-app purchases, no account. It is MIT licensed and the source is on GitHub if you want to read it or build it yourself.',
  },
  {
    question: 'What if my Mac has no notch?',
    answer:
      'TopNotch is built around the notch, so a Mac without one is not supported today.',
  },
  {
    question: 'How do I report a bug?',
    answer:
      'Open an issue on GitHub, or email yash@8bityash.vercel.app. Including your macOS version, Mac model and the steps you took makes it far easier to fix.',
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
            Questions? <span className="text-[var(--tn-blue)]">Straight answers.</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed max-w-2xl mx-auto">
            What it runs on, what it records, and what it sends anywhere.
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
                <ChevronDown size={20} strokeWidth={2} className={cn(
                    'shrink-0 h-5 w-5 text-[var(--muted-foreground)] transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )} aria-hidden="true" />
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
              <Mail size={18} strokeWidth={2} aria-hidden="true" />
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
              <GithubMark size={18} />
              GitHub Issues
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}