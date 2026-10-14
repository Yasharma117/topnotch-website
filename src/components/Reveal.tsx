'use client'

import { useEffect, useRef } from 'react'

/**
 * Fades its block up the first time it scrolls into view (data-shown), and keeps
 * data-inview live so looping illustrations inside can pause offscreen.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li'
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        el.dataset.inview = String(entry.isIntersecting)
        if (entry.isIntersecting) el.dataset.shown = ''
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} data-reveal="" className={className} style={{ '--delay': `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  )
}
