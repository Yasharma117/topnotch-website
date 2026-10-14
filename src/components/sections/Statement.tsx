import { InkText } from '@/components/InkText'
import { Label, Section } from '@/components/Section'

export function Statement() {
  return (
    <Section aria-label="Why the notch" className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Label>Why the notch</Label>
        <InkText
          className="mt-8 font-serif text-[1.75rem] leading-[1.25] font-light tracking-[-0.01em] md:text-[2.6rem]"
          text="A script in a window pulls your eyes away from the lens. TopNotch puts it in the notch, a few centimetres from the camera, so reading your lines looks like eye contact."
        />
      </div>
    </Section>
  )
}
