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
  /** Animate size changes on the app's spring (mount reveal, and collapse). */
  reveal?: boolean
  /** Collapse to the bare notch, as the app's panel does when it is not in use. */
  collapsed?: boolean
  className?: string
}

/**
 * Springs the panel to whatever size it is asked for, on the app's own curve.
 * The shape changes topology as it opens — shoulders only exist past
 * notchWidth + 4 — so the path is regenerated per frame rather than transformed,
 * because CSS cannot tween between those.
 */
function useSpringSize(targetW: number, targetH: number, animate: boolean) {
  const [size, setSize] = useState(() =>
    animate ? { w: METRICS.notchWidth, h: METRICS.notchHeight } : { w: targetW, h: targetH }
  )
  const frame = useRef(0)
  const current = useRef(size)
  current.current = size

  useEffect(() => {
    if (!animate) {
      setSize({ w: targetW, h: targetH })
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSize({ w: targetW, h: targetH })
      return
    }
    // Spring from wherever the panel is right now, so a direction change
    // mid-flight continues smoothly instead of snapping back to the start.
    const from = current.current
    const start = performance.now()
    const tick = (now: number) => {
      const t = (now - start) / 1000
      setSize({
        w: springValue(t, from.w, targetW),
        h: springValue(t, from.h, targetH),
      })
      if (t < SPRING.settleDuration) frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [targetW, targetH, animate])

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
  collapsed = false,
  className,
}: NotchOverlayProps) {
  const { w, h } = useSpringSize(
    collapsed ? METRICS.notchWidth : width,
    collapsed ? METRICS.notchHeight : height,
    reveal
  )
  // Mono runs ~0.6em per character; keep phrases inside the panel's inner width.
  const maxChars = Math.floor((width - 36) / (CLASSIC.fontSize * 0.6))
  const script = lines ?? wrapScript(DEFAULT_SCRIPT, maxChars)
  const uid = useId()
  const clipId = `${uid}-clip`
  const maskId = `${uid}-mask`
  const fadeId = `${uid}-fade`
  const tabLeft = (w - METRICS.notchWidth) / 2
  const bodyTop = METRICS.shoulderDrop + METRICS.notchHeight
  // Collapsed, the panel is shorter than the tab it starts below, so there is no
  // body to draw the script into — and a negative-height mask rect is invalid SVG.
  const bodyHeight = Math.max(0, h - bodyTop)
  const hasBody = bodyHeight > 1

  const lineHeight = CLASSIC.fontSize * CLASSIC.lineSpacing
  const span = script.length * lineHeight
  // Constant speed, so the loop duration is simply distance / speed.
  const duration = span / speed

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      // Rendered at true size so collapsing actually shrinks it, rather than
      // scaling a smaller viewBox up to fill a fixed-width box.
      style={{ width: w, height: h, maxWidth: '100%', filter: 'drop-shadow(0 24px 60px rgba(0,0,0,0.28))' }}
      className={cn('block', className)}
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
        <linearGradient id={fadeId} x1="0" y1={bodyTop} x2="0" y2={bodyTop + bodyHeight} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.18" stopColor="#fff" />
          <stop offset="0.82" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id={maskId}>
          <rect x={0} y={bodyTop} width={w} height={bodyHeight} fill={`url(#${fadeId})`} />
        </mask>
      </defs>

      <path d={notchPath({ width: w, height: h })} fill="var(--tn-notch-black)" />

      {/* Record dot + mode, centred in the 44pt tab. Centring matters once the
          panel collapses: left-anchored text runs straight off the narrower tab. */}
      {(() => {
        const full = status ?? `Classic · ${speed} pt/s`
        // Collapsed there is only room for the tail of the status, so use it.
        const label = hasBody ? full : full.split('·').pop()!.trim()
        const dot = 8
        const gap = 8
        const textW = label.length * 12 * 0.6
        const startX = (w - (dot + gap + textW)) / 2
        return (
          <g>
            <circle
              cx={startX + dot / 2}
              cy={METRICS.notchHeight / 2}
              r={4}
              fill={recording ? 'var(--tn-rose)' : 'rgba(255,255,255,0.26)'}
              className={recording ? 'animate-pulse' : undefined}
            />
            <text
              x={startX + dot + gap}
              y={METRICS.notchHeight / 2}
              dominantBaseline="middle"
              fill="#fff"
              fillOpacity={OVERLAY.muted}
              style={{ font: '500 12px var(--font-geist-mono, ui-monospace, SFMono-Regular, monospace)' }}
            >
              {label}
            </text>
          </g>
        )
      })()}

      {hasBody && (
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
      )}
    </svg>
  )
}
