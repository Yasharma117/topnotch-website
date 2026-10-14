import { Download } from '@/components/Download'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { METRICS } from '@/lib/notch'

const STEPS = [
  'Download TopNotch.dmg and open it.',
  'Drag TopNotch onto Applications.',
  'Launch it, then hover the notch — or the top centre of your screen.',
]

/**
 * The tab and its emergence curves, in the app's own numbers (NotchBoxShape): the
 * band below is the panel's body, so the whole closing section reads as the notch
 * panel opened all the way.
 */
const E = METRICS.emergenceRadius
const REACH = E * 1.6
const TAB_W = METRICS.notchWidth + REACH * 2
const TAB_H = METRICS.shoulderDrop
const TAB_PATH = [
  `M 0 ${TAB_H}`,
  `C ${REACH - E * 1.05} ${TAB_H} ${REACH - E * 0.55} 0 ${REACH} 0`,
  `L ${REACH + METRICS.notchWidth} 0`,
  `C ${REACH + METRICS.notchWidth + E * 0.55} 0 ${REACH + METRICS.notchWidth + E * 1.05} ${TAB_H} ${TAB_W} ${TAB_H}`,
  'Z',
].join(' ')

export function Install() {
  return (
    <Section id="download" aria-labelledby="install-title" className="px-3 pt-20 pb-3 md:px-4 md:pt-28 md:pb-4">
      <Reveal className="relative">
        <svg
          viewBox={`0 0 ${TAB_W} ${TAB_H}`}
          width={TAB_W}
          height={TAB_H}
          aria-hidden="true"
          className="absolute bottom-full left-1/2 -mb-px -translate-x-1/2"
        >
          <path d={TAB_PATH} fill="var(--notch)" />
        </svg>
        <div className="rounded-t-[22px] rounded-b-[26px] bg-notch px-6 pt-16 pb-14 text-white md:px-14 md:pt-20 md:pb-16">
          <p className="flex items-center justify-center gap-2 font-mono text-xs text-white/70">
            <span className="size-2 rounded-full bg-rec motion-safe:animate-pulse" />
            Ready when you are
          </p>
          <h2
            id="install-title"
            className="mx-auto mt-6 max-w-3xl text-center font-serif text-[2.6rem] leading-[1.02] font-light tracking-[-0.02em] md:text-7xl"
          >
            Put your script where the <em className="italic">camera</em> is.
          </h2>
          <ol className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex gap-4 bg-notch p-5 md:p-6">
                <span className="font-mono text-xs text-white/60">0{i + 1}</span>
                <span className="text-[15px] leading-snug text-white/90">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Download facts={false} />
          </div>
          <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white/70">
            Signed and notarised by Apple. macOS asks for Microphone and Speech Recognition the first
            time you use them.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
