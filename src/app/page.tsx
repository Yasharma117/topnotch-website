/*
 * THESIS: the notch is the product; the page reads like a script under it. Text inks
 * in as it's "read", the way the panel lights the line you're on. Refuses the SaaS kit:
 * icon cards, badge rows, gradient CTA, rainbow accents.
 * OWN-WORLD: a page proof — quiet paper inside hairline rails with crop marks; light
 * Newsreader serif for the voice, Geist for prose, Geist Mono for labels, script and
 * file facts. Black is the notch's material; rose is only "recording".
 * STORY: see it in the notch → understand why the notch → watch the call not see it →
 * trust it hears your accent → everything else → download from the opened panel.
 * FIRST VIEWPORT: menu bar + live notch pinned top, light serif H1 reading itself in,
 * one black "Download for Mac", facts line, then the "invisible to" strip.
 * FORM: framed editorial column (Saturn-inspired). Code-led; no concept roll ran.
 */
import { NotchChrome } from '@/components/NotchChrome'
import { Hero } from '@/components/sections/Hero'
import { Statement } from '@/components/sections/Statement'
import { ScreenShare } from '@/components/sections/ScreenShare'
import { Voice } from '@/components/sections/Voice'
import { Details } from '@/components/sections/Details'
import { FAQ } from '@/components/sections/FAQ'
import { Install } from '@/components/sections/Install'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <NotchChrome />
      {/* The rails: one framed column, like a page proof, inset so the crop marks have room. */}
      <div className="mx-2.5 max-w-6xl border-x border-rule sm:mx-5 xl:mx-auto">
        <main>
          <Hero />
          <Statement />
          <ScreenShare />
          <Voice />
          <Details />
          <FAQ />
          <Install />
        </main>
        <Footer />
      </div>
    </>
  )
}
