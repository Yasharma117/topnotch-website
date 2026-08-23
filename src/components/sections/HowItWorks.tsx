import { cn } from '@/lib/utils'
import { ClipboardPaste, MousePointer2, CircleCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Paste your script',
    description: 'Drop in your talking points, a full script, or a list of questions. TopNotch breaks it into sections at the natural pauses.',
    icon: <ClipboardPaste size={28} strokeWidth={1.5} />,
  },
  {
    number: '02',
    title: 'Hover the notch',
    description: 'Point at the notch and the panel opens. Hit ⌘⇧R to start recording, or ⌘⇧T for the teleprompter on its own.',
    icon: <MousePointer2 size={28} strokeWidth={1.5} />,
  },
  {
    number: '03',
    title: 'Read, record, done',
    description: 'Talk normally. The script keeps pace, your audience sees nothing, and your audio lands on the Desktop as an .m4a.',
    icon: <CircleCheck size={28} strokeWidth={1.5} />,
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className={cn('py-24 md:py-32 px-6', 'bg-white')}
      aria-labelledby="how-title"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--tn-blue)]">
            How it works
          </p>
          <h2
            id="how-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-6"
          >
            Running in <span className="text-[var(--tn-blue)]">about a minute</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            No setup, no calibration, no account.
          </p>
        </div>

        {/* Steps - horizontal on desktop, stacked on mobile */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={index}
              className={cn(
                'relative rounded-2xl p-8 md:p-10',
                'bg-white border border-[var(--border)]',
                'shadow-[0_4px_24px_rgba(0,0,0,0.04)]',
                'transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
              )}
            >
              {/* Step number */}
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--tn-blue)]/10 text-[var(--tn-blue)] font-bold text-lg font-mono">
                  {step.number}
                </span>
                <div className="flex-1">
                  <div className="h-1 w-full max-w-[60px] bg-gradient-to-r from-[var(--tn-blue)] to-[var(--tn-blue-mid)] rounded-full" />
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--tn-blue)]/10 text-[var(--tn-blue)]">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="text-[#444] leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}

          {/* Connecting line between steps (desktop only) */}
          <div className="hidden md:block absolute top-[50px] left-[calc(33.33%+4px)] right-[calc(33.33%+4px)] h-0.5 bg-gradient-to-r from-transparent via-[var(--tn-blue)]/30 to-transparent -z-10 pointer-events-none" aria-hidden="true" />
        </div>

        {/* Keyboard shortcuts note */}
        <div className="mt-16 rounded-2xl p-6 md:p-8 text-center bg-[var(--tn-blue-light)]/30 border border-[var(--tn-blue)]/20">
          <p className="text-sm text-[var(--tn-blue)] font-semibold mb-3">Global shortcuts</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-[#444]">
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">⌘⇧R</kbd>
            <span>Start / stop recording</span>
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">⌘⇧T</kbd>
            <span>Toggle teleprompter</span>
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">⇧←/→</kbd>
            <span>Slower / faster</span>
            <kbd className="px-3 py-1.5 rounded bg-white border border-[var(--border)] font-mono">⇧↑/↓</kbd>
            <span>Scroll the script</span>
          </div>
        </div>
      </div>
    </section>
  )
}