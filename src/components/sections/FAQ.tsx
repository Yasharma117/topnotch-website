import { Plus } from 'lucide-react'
import { ISSUES, REPO } from '@/lib/links'
import { Label, Section } from '@/components/Section'

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Which Macs does it run on?',
    a: 'Any Mac on macOS 13 (Ventura) or later. On a MacBook with a notch the panel hangs from the notch; on every other Mac it opens in the same place, at the top centre of the screen.',
  },
  {
    q: 'My Mac has no notch. Does it still work?',
    a: 'Yes. Without a notch, the panel sits at the top centre of your screen instead — the same spot, just under the camera on most Macs and displays.',
  },
  {
    q: 'How do I quit it?',
    a: 'Click the TopNotch icon in the menu bar and choose Quit TopNotch.',
  },
  {
    q: 'Can I build it myself?',
    a: (
      <>
        Yes.{' '}
        <a href={REPO} className="text-ink underline decoration-rule hover:decoration-ink">
          The source is on GitHub
        </a>
        . Clone it, open TopNotch.xcodeproj in Xcode and run.
      </>
    ),
  },
  {
    q: 'Something isn’t working. Where do I report it?',
    a: (
      <>
        <a href={ISSUES} className="text-ink underline decoration-rule hover:decoration-ink">
          Open an issue on GitHub
        </a>
        . Your macOS version, Mac model and the steps you took make it far easier to fix.
      </>
    ),
  },
]

export function FAQ() {
  return (
    <Section aria-labelledby="faq-title" className="grid gap-10 px-6 py-24 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16 md:px-12 md:py-32">
      <div>
        <Label>FAQ</Label>
        <h2 id="faq-title" className="mt-5 font-serif text-4xl leading-[1.05] font-light tracking-[-0.02em] md:text-[3.5rem]">
          Questions.
        </h2>
      </div>
      <div className="divide-y divide-rule border-y border-rule">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium transition-colors hover:text-ink-2 [&::-webkit-details-marker]:hidden">
              {q}
              <Plus size={16} strokeWidth={1.5} aria-hidden="true" className="shrink-0 text-ink-2 transition-transform duration-300 ease-out-expo group-open:rotate-45" />
            </summary>
            <p className="max-w-[60ch] pb-6 leading-relaxed text-ink-2">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
