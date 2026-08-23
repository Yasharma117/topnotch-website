'use client'

import { useEffect, useState } from 'react'
import { MenuBar } from '@/components/MenuBar'
import { NotchOverlay } from '@/components/NotchOverlay'
import { HERO_SCRIPT, wrapScript } from '@/lib/script'

/** Past this many pixels the panel is out of the way and collapses to the tab. */
const COLLAPSE_AFTER = 64

/**
 * The notch is pinned to the top of the viewport for the whole page, the way it
 * is pinned to the top of a Mac's screen. Scrolling collapses it to the bare tab
 * — the same thing the app does when the panel is not in use — so it stays
 * present without eating the viewport, and the menu bar behind it fades out.
 */
export function NotchChrome() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      // Coalesce to one read per frame; scroll fires far more often than that.
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        setScrolled(window.scrollY > COLLAPSE_AFTER)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex max-w-full flex-col items-center overflow-hidden">
      <MenuBar hidden={scrolled} />
      <div className="-mt-7 flex justify-center">
        <NotchOverlay
          reveal
          collapsed={scrolled}
          speed={11}
          lines={wrapScript(HERO_SCRIPT, 30)}
          status="Voice-following · en-IN"
        />
      </div>
    </div>
  )
}
