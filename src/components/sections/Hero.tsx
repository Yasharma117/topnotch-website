import { Download } from '@/components/Download'

const HEADLINE = ['The', 'teleprompter', 'that', 'lives', 'in', 'your', 'Mac’s', 'notch.']

/** Where the panel is excluded from capture — named in the app's own docs. */
const HIDDEN_FROM = ['Zoom', 'Google Meet', 'Microsoft Teams', 'Loom', 'OBS']

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="tn-dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 pt-56 pb-24 text-center sm:pt-64 md:pb-28">
        <h1
          id="hero-title"
          className="mx-auto max-w-4xl font-serif text-[2.75rem] leading-none font-light tracking-[-0.025em] sm:text-7xl md:text-[5.5rem]"
        >
          {HEADLINE.map((word, i) => (
            <span key={i}>
              <span className="tn-word" style={{ '--i': i } as React.CSSProperties}>
                {word === 'notch.' ? <em className="italic">notch.</em> : word}
              </span>{' '}
            </span>
          ))}
        </h1>
        <p
          className="tn-rise mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-2 md:text-xl"
          style={{ '--i': HEADLINE.length + 2 } as React.CSSProperties}
        >
          Read your script while looking straight down the lens. Nobody on the call can see it,
          and nothing leaves your Mac.
        </p>
        <div className="tn-rise mt-10" style={{ '--i': HEADLINE.length + 5 } as React.CSSProperties}>
          <Download />
        </div>
      </div>

      {/* Saturn-style proof strip — honest: these are the apps that can't see the panel. */}
      <div className="relative grid border-t border-rule sm:grid-cols-[auto_1fr]">
        <p className="flex items-center border-b border-rule px-6 py-4 font-mono text-[11px] tracking-[0.12em] text-ink-2 uppercase sm:border-r sm:border-b-0">
          Invisible to
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 font-serif text-lg text-ink-2 sm:justify-around">
          {HIDDEN_FROM.map((app) => (
            <li key={app}>{app}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
