import { ArrowUpRight } from 'lucide-react'
import { NotchOverlay } from '@/components/NotchOverlay'
import { Reveal } from '@/components/Reveal'
import { Label, Section } from '@/components/Section'
import { REPO } from '@/lib/links'
import { notchPath } from '@/lib/notch'
import { wrapScript } from '@/lib/script'

const PW = 340
const PH = 196
const PANEL = notchPath({ width: PW, height: PH })
/** The line that does it, in the release people download. */
const SOURCE = `${REPO}/blob/v1.0/TopNotch/NotchPanelController.swift#L765`

const SCRIPT = wrapScript(
  [
    'Thanks for joining. Three things today:',
    'what shipped, what slipped,',
    'and what we need from you before Friday.',
    'Let’s start with what shipped.',
  ],
  30
)

/** A proof-sheet crop mark at a corner of the ghost's trim box. */
function Mark({ x, y }: { x: number; y: number }) {
  return <path d={`M${x - 7} ${y}h14M${x} ${y - 7}v14`} stroke="var(--ink-2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
}

function Frame({ label, note, children }: { label: string; note: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-paper">
      <div className="flex items-center justify-between border-b border-rule px-5 py-3 font-mono text-[11px] tracking-[0.12em] uppercase">
        <span className="text-ink">{label}</span>
        <span className="flex items-center gap-1.5 text-ink-2">{note}</span>
      </div>
      {/* The top edge of each frame is the top of the screen: the panel hangs from it. */}
      <div className="flex justify-center px-5 pb-14">{children}</div>
    </div>
  )
}

export function ScreenShare() {
  return (
    <Section aria-labelledby="share-title">
      <div className="grid gap-8 px-6 pt-24 pb-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end md:gap-16 md:px-12 md:pt-32">
        <div>
          <Label>Screen sharing</Label>
          <h2 id="share-title" className="mt-5 font-serif text-4xl leading-[1.05] font-light tracking-[-0.02em] md:text-[3.5rem]">
            Share your screen. <em className="italic">Keep</em> your script.
          </h2>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-ink-2">
          The panel is excluded from screen capture, so Zoom, Meet, Teams, Loom and OBS record your desktop
          without it. You see your lines; the call sees you looking at the camera.
        </p>
      </div>

      <Reveal className="tn-proof grid gap-px border-t border-rule bg-rule md:grid-cols-2">
        <Frame
          label="On your screen"
          note={
            <>
              <span className="size-1.5 rounded-full bg-rec motion-safe:animate-pulse" />
              Live
            </>
          }
        >
          <div className="w-full max-w-[340px]">
            <NotchOverlay fluid lines={SCRIPT} speed={18} />
          </div>
        </Frame>

        <Frame label="In the recording" note="Not captured">
          <div className="relative w-full max-w-[340px]">
            {/* The panel as the capture would have drawn it — it dissolves on arrival, leaving its trim lines. */}
            <svg viewBox={`0 0 ${PW} ${PH}`} className="block h-auto w-full overflow-visible" role="img" aria-label="An empty outline where the panel would be: the recording has no panel in it.">
              <path className="tn-proof-fill" d={PANEL} fill="var(--notch)" />
              <path d={PANEL} fill="none" stroke="var(--ink-2)" strokeWidth="1" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
              <Mark x={0} y={0} />
              <Mark x={PW} y={0} />
              <Mark x={0} y={PH} />
              <Mark x={PW} y={PH} />
            </svg>
            <p className="tn-proof-note absolute inset-x-0 top-[58%] text-center font-mono text-[11px] tracking-[0.12em] text-ink-2 uppercase">
              Nothing here
            </p>
          </div>
        </Frame>
      </Reveal>

      {/* The proof: the one line in the app that keeps it out of every capture. */}
      <a
        href={SOURCE}
        className="group grid gap-3 border-t border-rule px-6 py-6 transition-colors hover:bg-ink/[0.025] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:px-12"
      >
        <span className="font-mono text-[11px] tracking-[0.12em] text-ink-2 uppercase">NotchPanelController.swift : 765</span>
        <code className="font-mono text-base text-ink md:text-lg">
          panel.<span className="text-ink-2">sharingType</span> = <span className="text-rec">.none</span>
        </code>
        <span className="inline-flex items-center gap-1 text-sm text-ink-2 transition-colors group-hover:text-ink">
          View the source
          <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </Section>
  )
}
