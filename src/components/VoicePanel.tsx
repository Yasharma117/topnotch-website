'use client'

import { useEffect, useRef, useState } from 'react'
import { notchPath, METRICS } from '@/lib/notch'

const W = 420
const H = 236
const TOP = METRICS.notchHeight + METRICS.shoulderDrop
const LINE = 28
/** The line the speaker is on sits here; earlier lines scroll up past it. */
const FOCUS_ROW = 2

const LINES = [
  'Hi everyone, thanks for joining.',
  'Today I want to walk you through',
  'what we shipped this quarter',
  'and what is coming next.',
  'Let’s start with the numbers.',
  'Revenue grew in every region,',
  'and churn is the lowest it has been.',
].map((l) => l.split(' '))
const FLAT = LINES.flatMap((words, line) => words.map((_, w) => ({ line, w })))

/** Voice mode as the app draws it: read lines dim, the spoken word lit, the rest waiting. */
export function VoicePanel() {
  const [pos, setPos] = useState(FLAT.findIndex((p) => p.line === FOCUS_ROW) + 2)
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timer = 0
    const io = new IntersectionObserver(([entry]) => {
      clearInterval(timer)
      // Roughly speaking pace: ~2.6 words a second, looping back to the top.
      if (entry.isIntersecting) timer = window.setInterval(() => setPos((p) => (p + 1) % FLAT.length), 380)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      clearInterval(timer)
    }
  }, [])

  const { line: current, w: word } = FLAT[pos]
  const shift = Math.max(0, current - FOCUS_ROW) * LINE

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="block h-auto w-full"
      role="img"
      aria-label="The TopNotch panel following a speaker: the word being spoken is lit, lines already read are dimmed."
    >
      <defs>
        <clipPath id="voice-body">
          <rect x={0} y={TOP} width={W} height={H - TOP - 8} />
        </clipPath>
        <linearGradient id="voice-fade" x1="0" y1={TOP} x2="0" y2={H} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.16" stopColor="#fff" />
          <stop offset="0.84" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id="voice-mask">
          <rect x={0} y={TOP} width={W} height={H - TOP} fill="url(#voice-fade)" />
        </mask>
      </defs>
      <path d={notchPath({ width: W, height: H })} fill="var(--notch)" />
      <circle cx={W / 2 - 46} cy={METRICS.notchHeight / 2} r={4} fill="var(--rec)" />
      <text x={W / 2 - 34} y={METRICS.notchHeight / 2} dominantBaseline="middle" fill="#fff" fillOpacity={0.72} style={{ font: '500 12px var(--font-geist-mono)' }}>
        Voice · en-IN
      </text>
      <g clipPath="url(#voice-body)" mask="url(#voice-mask)">
        <g style={{ transform: `translateY(${-shift}px)`, transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          {LINES.map((words, l) => (
            <text key={l} x={W / 2} y={TOP + 32 + l * LINE} textAnchor="middle" fill="#fff" style={{ font: '500 17px var(--font-geist-mono)' }}>
              {words.map((w, i) => {
                const read = l < current || (l === current && i < word)
                const now = l === current && i === word
                return (
                  <tspan
                    key={i}
                    fillOpacity={now ? 1 : read ? 0.38 : 0.7}
                    fontWeight={now ? 600 : 500}
                    style={{ transition: 'fill-opacity 200ms ease-out' }}
                  >
                    {i ? ' ' : ''}
                    {w}
                  </tspan>
                )
              })}
            </text>
          ))}
        </g>
      </g>
    </svg>
  )
}
