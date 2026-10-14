import { Reveal } from '@/components/Reveal'
import { Label, Section } from '@/components/Section'
import { VoicePanel } from '@/components/VoicePanel'

const PAIRS = [
  ['v', 'w'],
  ['th', 't'],
  ['z', 'j'],
  ['s', 'sh'],
]

const LANGUAGES = [
  'Hindi', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati',
  'Kannada', 'Malayalam', 'Punjabi', 'English (US)', 'English (UK)',
]

export function Voice() {
  return (
    <Section aria-labelledby="voice-title" className="grid md:grid-cols-2">
      <div className="px-6 py-24 md:px-12 md:py-32">
        <Label>Voice-following</Label>
        <h2 id="voice-title" className="mt-5 font-serif text-4xl leading-[1.05] font-light tracking-[-0.02em] md:text-[3.5rem]">
          It keeps pace with how you <em className="italic">actually</em> speak.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">
          Apple&rsquo;s on-device speech recognition listens as you talk, and a fuzzy matcher finds your
          place in the script. Pause, ad-lib or slow down, and it waits instead of running ahead.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-ink-2">
          It doesn&rsquo;t assume one correct pronunciation. These sounds count as the same, so the
          mishearings that usually break voice-following don&rsquo;t break this one:
        </p>
        <ul aria-label="Sounds treated as interchangeable" className="mt-7 grid grid-cols-4 border-y border-rule">
          {PAIRS.map(([a, b], i) => (
            <Reveal as="li" key={a + b} delay={i * 80} className="border-rule py-4 text-center not-first:border-l">
              <span className="font-serif text-2xl font-light">{a}</span>
              <span className="mx-1.5 font-mono text-xs text-ink-2" aria-label="and">↔</span>
              <span className="font-serif text-2xl font-light">{b}</span>
            </Reveal>
          ))}
        </ul>
        <p className="mt-7 text-[15px] leading-relaxed text-ink-2">
          <span className="font-medium text-ink">English (India) is the default.</span> Eleven more:{' '}
          {LANGUAGES.join(', ')}.
        </p>
      </div>
      <div className="relative flex items-center bg-ink/[0.025] border-t border-rule px-6 py-16 md:border-t-0 md:border-l md:px-12">
        <div className="mx-auto w-full max-w-md">
          <VoicePanel />
        </div>
      </div>
    </Section>
  )
}
