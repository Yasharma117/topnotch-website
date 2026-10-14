'use client'

import { useEffect, useRef, useState } from 'react'
import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders'

/**
 * The liquid-metal CTA from Yash's portfolio hero, as a link: a black pill inside a
 * moving chrome ring — the mirror ball of the app icon, in motion. Ported from
 * Portfolio-Site/components/ui/liquid-metal-button.tsx.
 */
const REST_SPEED = 0.6
const HOVER_SPEED = 1
const PRESS_SPEED = 2.4

/** Measured against the #202020 stop of the pill: 10.99:1 resting, 16.3:1 on hover. */
const LABEL = '#d4d4d4'
const LABEL_HOVER = '#ffffff'

const SHADOW_REST =
  '0 0 0 1px rgb(0 0 0/0.3), 0 36px 14px rgb(0 0 0/0.02), 0 20px 12px rgb(0 0 0/0.08), 0 9px 9px rgb(0 0 0/0.12), 0 2px 5px rgb(0 0 0/0.15)'
const SHADOW_HOVER =
  '0 0 0 1px rgb(0 0 0/0.4), 0 12px 6px rgb(0 0 0/0.05), 0 8px 5px rgb(0 0 0/0.1), 0 4px 4px rgb(0 0 0/0.15), 0 1px 2px rgb(0 0 0/0.2)'

export function LiquidMetalLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ring = useRef<HTMLDivElement>(null)
  const mount = useRef<ShaderMount | null>(null)
  const reduce = useRef(false)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const el = ring.current
    if (!el) return
    reduce.current = matchMedia('(prefers-reduced-motion: reduce)').matches
    try {
      mount.current = new ShaderMount(
        el,
        liquidMetalFragmentShader,
        {
          u_repetition: 4,
          u_softness: 0.5,
          u_shiftRed: 0.3,
          u_shiftBlue: 0.3,
          u_distortion: 0,
          u_contour: 0,
          u_angle: 45,
          u_scale: 8,
          u_shape: 1,
          u_offsetX: 0.1,
          u_offsetY: -0.1,
        },
        undefined,
        reduce.current ? 0 : REST_SPEED
      )
    } catch {
      // No WebGL: the pill and its shadow still read as a button, just without the metal.
    }
    // A WebGL loop has no business running offscreen.
    const io = new IntersectionObserver(([entry]) => {
      if (!reduce.current) mount.current?.setSpeed(entry.isIntersecting ? REST_SPEED : 0)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      mount.current?.dispose()
      mount.current = null
    }
  }, [])

  const speed = (s: number) => !reduce.current && mount.current?.setSpeed(s)

  return (
    <a
      href={href}
      onPointerEnter={() => {
        setHovered(true)
        speed(HOVER_SPEED)
      }}
      onPointerLeave={() => {
        setHovered(false)
        setPressed(false)
        speed(REST_SPEED)
      }}
      onPointerDown={() => {
        setPressed(true)
        speed(PRESS_SPEED)
      }}
      onPointerUp={() => {
        setPressed(false)
        speed(hovered ? HOVER_SPEED : REST_SPEED)
      }}
      className="relative inline-flex h-12 items-center justify-center rounded-full px-7 transition-[box-shadow,scale] duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      style={{ boxShadow: pressed ? '0 0 0 1px rgb(0 0 0/0.5), 0 1px 2px rgb(0 0 0/0.3)' : hovered ? SHADOW_HOVER : SHADOW_REST, scale: pressed ? '0.98' : '1' }}
    >
      {/* The chrome ring: the shader fills the whole pill, the black pill sits 2px inside it. */}
      <div ref={ring} aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-full [&_canvas]:absolute [&_canvas]:inset-0 [&_canvas]:size-full! [&_canvas]:rounded-full" />
      <span
        aria-hidden="true"
        className="absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,#202020_0%,#000_100%)] transition-shadow duration-150"
        style={{ boxShadow: pressed ? 'inset 0 2px 4px rgb(0 0 0/0.4), inset 0 1px 2px rgb(0 0 0/0.3)' : 'none' }}
      />
      <span
        className="relative flex items-center gap-2.5 text-[15px] font-medium whitespace-nowrap [text-shadow:0_1px_2px_rgb(0_0_0/0.5)] transition-colors duration-150"
        style={{ color: hovered ? LABEL_HOVER : LABEL }}
      >
        {children}
      </span>
    </a>
  )
}
