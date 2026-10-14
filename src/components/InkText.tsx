'use client'

import { useEffect, useRef } from 'react'

/**
 * A paragraph that inks in word by word as it scrolls through the viewport — the way
 * the teleprompter brightens the line you're on. Server-rendered fully inked; the
 * script only dims the words still ahead, so nothing is hidden without JS.
 */
export function InkText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const words = [...el.querySelectorAll<HTMLSpanElement>('[data-w]')]
    let frame = 0
    const paint = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      // 0 when the paragraph's top reaches 85% of the viewport, 1 when its bottom reaches 45%.
      const start = innerHeight * 0.85
      const end = innerHeight * 0.45
      const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)))
      const lit = p * words.length
      words.forEach((w, i) => {
        w.style.opacity = String(Math.min(1, Math.max(0.2, lit - i + 0.2)))
      })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    paint()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    return () => {
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <p ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} data-w="" className="transition-opacity duration-150">
          {word}{' '}
        </span>
      ))}
    </p>
  )
}
