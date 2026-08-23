'use client'

import { useEffect, useState } from 'react'
import { Wifi, BatteryMedium, SlidersHorizontal, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const MENUS = ['File', 'Edit', 'View', 'Window', 'Help']

/**
 * A macOS menu bar behind the notch. Without it the panel reads as a floating
 * black box; flanked by a menu bar it reads as hanging off a screen's top bezel,
 * which is the whole point of the product.
 */
export function MenuBar({ hidden = false }: { hidden?: boolean }) {
  const [clock, setClock] = useState<string | null>(null)

  useEffect(() => {
    // Rendered only after mount — a live clock during SSR is a hydration mismatch.
    const tick = () =>
      setClock(
        new Date().toLocaleString('en-US', {
          weekday: 'short', month: 'short', day: 'numeric',
          hour: 'numeric', minute: '2-digit',
        })
      )
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex h-7 w-full select-none items-center justify-between overflow-hidden',
        'bg-[var(--tn-notch-black)] px-4 text-[13px] text-white/90',
        'transition-opacity duration-300 ease-out',
        hidden ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div className="flex items-center gap-4">
        {/* Apple's mark — a brand logo, so inline rather than from an icon set */}
        <svg width="13" height="15" viewBox="0 0 14 17" fill="currentColor">
          <path d="M11.6 8.9c0-1.9 1.5-2.8 1.6-2.9-.9-1.3-2.2-1.4-2.7-1.5-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.4.7-3.1 1.9-1.3 2.3-.3 5.6.9 7.5.6.9 1.4 1.9 2.4 1.9.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6c1 0 1.6-.9 2.2-1.8.7-1 1-2 1-2.1 0 0-1.9-.7-1.9-2.9zM9.7 3.2c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.6-.9 1.5-.8 2.4.9.1 1.8-.5 2.3-1.2z" />
        </svg>
        {/* The panel covers the centre of a narrow screen, so the wordmark would sit
            half-under it and read as clipped. macOS hides menu items behind the
            notch for the same reason. */}
        <span className="hidden font-semibold sm:inline">TopNotch</span>
        {MENUS.map((m) => (
          <span key={m} className="hidden text-white/85 sm:inline">{m}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-white/85">
        <BatteryMedium size={17} strokeWidth={1.5} />
        <Wifi size={15} strokeWidth={2} />
        <SlidersHorizontal size={14} strokeWidth={2} className="hidden xs:inline sm:inline" />
        <Search size={14} strokeWidth={2} className="hidden sm:inline" />
        {/* Reserve the width so enabling the clock does not shift the row */}
        <span className="hidden min-w-[9.5rem] text-right tabular-nums sm:inline">{clock ?? ' '}</span>
      </div>
    </div>
  )
}
