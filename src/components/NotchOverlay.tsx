'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { notchPath, METRICS } from '@/lib/notch'
import { DEFAULT_SCRIPT, CLASSIC, SPRING, springValue, wrapScript } from '@/lib/script'
import { cn } from '@/lib/utils'

/** AppColors.overlay* — white on the notch's black chrome. */
const OVERLAY = { caption: 0.35, secondary: 0.55, muted: 0.72, primary: 0.94 }

interface NotchOverlayProps {
  width?: number
  height?: number
  /** Defaults to the app's script, wrapped to the panel width. */
  lines?: string[]
  status?: string
  recording?: boolean
  /** Points per second. The app's classic-mode default is 40. */
  speed?: number
  /** Play the expand spring on mount, as the panel does when it opens. */
  reveal?: boolean
  className?: string
}

/**
 * Drives the panel from collapsed to expanded on the app's own spring. The shape
 * changes topology as it opens (the shoulders only exist past notchWidth+4), so the
 * path is regenerated per frame rather than transformed — CSS cannot tween that.
 */
function useReveal(width: number, height: number, enabled: boolean) {
  const [size, setSize] = useState(() =>
    enabled ? { w: METRICS.notchWidth, h: METRICS.notchHeight } : { w: width, h: height }
  )
  const frame = useRef(0)

  useEffect(() => {
    if (!enabled) return setSize({ w: width, h: height })
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return setSize({ w: width, h: height })
    }
    const start = performance.now()
    const tick = (now: number) => {
      const t = (now - start) / 1000
      setSize({
        w: springValue(t, METRICS.notchWidth, width),
        h: springValue(t, METRICS.notchHeight, height),
      })
      if (t < SPRING.settleDuration) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [width, height, enabled])

  return size
}

export function NotchOverlay({
  width = 340,
  height = 196,
  lines,
  status,
  recording = true,
  speed = CLASSIC.speed,
  reveal = false,
  className,
}: NotchOverlayProps) {
  const { w, h } = useReveal(width, height, reveal)
  // Mono runs ~0.6em per character; keep phrases inside the panel's inner width.
  const maxChars = Math.floor((width - 36) / (CLASSIC.fontSize * 0.6))
  const script = lines ?? wrapScript(DEFAULT_SCRIPT, maxChars)
  const uid = useId()
  const clipId = `${uid}-clip`
  const maskId = `${uid}-mask`
  const fadeId = `${uid}-fade`
  const tabLeft = (w - METRICS.notchWidth) / 2
  const bodyTop = METRICS.shoulderDrop + METRICS.notchHeight

  const lineHeight = CLASSIC.fontSize * CLASSIC.lineSpacing
  const span = script.length * lineHeight
  // Constant speed, so the loop duration is simply distance / speed.
  const duration = span / speed

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={cn('block h-auto w-full', className)}
      style={{ filter: 'drop-shadow(0 24px 60px rgba(0,0,0,0.28))' }}
      role="img"
      aria-label={`TopNotch teleprompter: ${script.join(' ')}`}
    >
      <defs>
        {/* Keeps the script inside the panel's rounded body */}
        <clipPath id={clipId}>
          <path d={notchPath({ width: w, height: h })} />
        </clipPath>
        {/* Bounds the script to below the tab AND fades it at both ends, so lines
            ease in and out instead of being sliced off at the panel edge. */}
        <linearGradient id={fadeId} x1="0" y1={bodyTop} x2="0" y2={h} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.18" stopColor="#fff" />
          <stop offset="0.82" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id={maskId}>
          <rect x={0} y={bodyTop} width={w} height={h - bodyTop} fill={`url(#${fadeId})`} />
        </mask>
      </defs>

      <path d={notchPath({ width: w, height: h })} fill="var(--tn-notch-black)" />

      {/* Record dot + mode, inside the 44pt tab */}
      <circle
        cx={tabLeft + 30}
        cy={METRICS.notchHeight / 2}
        r={4}
        fill={recording ? 'var(--tn-rose)' : 'rgba(255,255,255,0.26)'}
        className={recording ? 'animate-pulse' : undefined}
      />
      <text
        x={tabLeft + 44}
        y={METRICS.notchHeight / 2}
        dominantBaseline="middle"
        fill="#fff"
        fillOpacity={OVERLAY.muted}
        style={{ font: '500 12px var(--font-geist-mono, ui-monospace, SFMono-Regular, monospace)' }}
      >
        {status ?? `Classic · ${speed} pt/s`}
      </text>

      <g clipPath={`url(#${clipId})`} mask={`url(#${maskId})`}>
        <g
          style={{
            '--tn-scroll-span': `${span}px`,
            animation: `tn-classic-scroll ${duration}s linear infinite`,
          } as React.CSSProperties}
        >
          {/* Rendered twice so the shift by one full copy is seamless */}
          {[...script, ...script].map((line, i) => (
            <text
              key={i}
              x={w / 2}
              y={bodyTop + 22 + i * lineHeight}
              textAnchor="middle"
              fill="#fff"
              fillOpacity={OVERLAY.primary}
              style={{ font: `500 ${CLASSIC.fontSize}px var(--font-geist-mono, ui-monospace, SFMono-Regular, monospace)` }}
            >
              {line}
            </text>
          ))}
        </g>
      </g>
    </svg>
  )
}
