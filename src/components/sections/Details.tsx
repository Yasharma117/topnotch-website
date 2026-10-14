import { Reveal } from '@/components/Reveal'
import { Label, Section } from '@/components/Section'
import { REPO } from '@/lib/links'

const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="inline-flex min-w-12 justify-center rounded-md border border-rule bg-white px-2 py-1 font-mono text-xs text-ink shadow-[0_1px_0_var(--rule)]">
    {children}
  </kbd>
)

/** Live mic level, as the app draws it while recording. Pauses offscreen. */
function Waveform() {
  return (
    <div className="flex items-center gap-4">
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink">
        <span className="size-2 rounded-full bg-rec motion-safe:animate-pulse" />
        REC
      </span>
      <div className="tn-wave flex h-10 flex-1 items-center gap-[3px]" aria-hidden="true">
        {Array.from({ length: 36 }, (_, i) => (
          <span
            key={i}
            className="h-full flex-1 rounded-full bg-ink/80"
            style={{ '--i': (i * 7) % 13, opacity: 0.35 + ((i * 5) % 9) / 14 } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}

/** A pasted script, broken at its natural stopping points. */
function Pauses() {
  const blocks = [3, 2, 3]
  return (
    <div className="space-y-2" aria-hidden="true">
      {blocks.map((n, b) => (
        <div key={b}>
          {Array.from({ length: n }, (_, l) => (
            <div key={l} className="mb-1.5 h-1.5 rounded-full bg-ink/15" style={{ width: `${92 - ((l * 17 + b * 11) % 35)}%` }} />
          ))}
          {b < blocks.length - 1 && <p className="pt-1 font-mono text-[11px] text-ink-2">— pause —</p>}
        </div>
      ))}
    </div>
  )
}

/** Classic mode's speed control, at the app's default. */
function Speed() {
  const at = (40 - 10) / (120 - 10)
  return (
    <div aria-hidden="true">
      <div className="relative h-1 rounded-full bg-ink/10">
        <div className="absolute inset-y-0 left-0 rounded-full bg-ink" style={{ width: `${at * 100}%` }} />
        <div className="absolute top-1/2 size-4 -translate-1/2 rounded-full border border-rule bg-white shadow-sm" style={{ left: `${at * 100}%` }} />
      </div>
      <div className="mt-3 flex justify-between font-mono text-[11px] text-ink-2">
        <span>10</span>
        <span className="text-ink">40 pt/s</span>
        <span>120</span>
      </div>
    </div>
  )
}

/** What the app sends anywhere: nothing. */
function Ledger() {
  const rows = [
    ['Network calls', 'None'],
    ['Account', 'None'],
    ['Speech recognition', 'On-device'],
    ['Recordings', 'Your disk'],
  ]
  return (
    <dl className="divide-y divide-rule border-y border-rule font-mono text-xs">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between py-2">
          <dt className="text-ink-2">{k}</dt>
          <dd className="text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

const CELLS = [
  {
    title: 'Records as you read',
    body: 'Your mic, saved as an .m4a (AAC, 44.1 kHz mono) on your Desktop. Drop it straight into Final Cut, Resolve or a captions tool.',
    art: <Waveform />,
    span: 'md:col-span-3',
  },
  {
    title: 'Finds your pauses',
    body: 'Paste a wall of text and it splits into sections at the natural stopping points.',
    art: <Pauses />,
    span: 'md:col-span-3',
  },
  {
    title: 'Or a steady scroll',
    body: 'Classic mode ignores your voice and scrolls at a fixed speed you set.',
    art: <Speed />,
    span: 'md:col-span-2',
  },
  {
    title: 'Stays on your Mac',
    body: (
      <>
        No account, nothing to sign in to.{' '}
        <a href={REPO} className="text-ink underline decoration-rule hover:decoration-ink">
          Read the source
        </a>
        .
      </>
    ),
    art: <Ledger />,
    span: 'md:col-span-2',
  },
  {
    title: 'From the keyboard',
    body: 'Global shortcuts, so you never reach for the mouse mid-take.',
    art: (
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 text-sm text-ink-2">
        <Kbd>⌘⇧R</Kbd> <span>Record</span>
        <Kbd>⌘⇧T</Kbd> <span>Teleprompter</span>
        <Kbd>⇧ ← →</Kbd> <span>Speed</span>
        <Kbd>⇧ ↑ ↓</Kbd> <span>Scroll</span>
      </div>
    ),
    span: 'md:col-span-2',
  },
]

export function Details() {
  return (
    <Section aria-labelledby="details-title">
      <div className="px-6 pt-24 pb-14 md:px-12 md:pt-32">
        <Label>The rest of it</Label>
        <h2 id="details-title" className="mt-5 max-w-xl font-serif text-4xl leading-[1.05] font-light tracking-[-0.02em] md:text-[3.5rem]">
          Everything else it does.
        </h2>
      </div>
      {/* Hairline grid: the 1px gap shows the rule colour through. */}
      <div className="grid gap-px border-t border-rule bg-rule md:grid-cols-6">
        {CELLS.map(({ title, body, art, span }, i) => (
          <Reveal key={title} delay={(i % 3) * 90} className={`flex flex-col gap-8 bg-paper p-6 md:p-10 ${span}`}>
            <div className="flex min-h-24 flex-col justify-center">{art}</div>
            <div>
              <h3 className="font-serif text-2xl font-light">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-2">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
