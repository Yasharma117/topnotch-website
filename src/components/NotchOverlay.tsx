'use client'

import { notchPath, type NotchPathOptions } from '@/lib/notch'
import { cn } from '@/lib/utils'
import { useState, useEffect, useRef } from 'react'

interface NotchOverlayProps {
  /** Expansion factor 0..1 (collapsed → full shouldered notch) */
  expand?: number
  /** Whether the notch is in recording state (shows pulsing red dot) */
  recording?: boolean
  /** Custom caption text to display inside notch */
  caption?: string
  /** Additional className */
  className?: string
  /** Notch width (default 210) */
  width?: number
  /** Notch height (default 44) */
  height?: number
}

export function NotchOverlay({
  expand = 0,
  recording = false,
  caption,
  className,
  width = 210,
  height = 44,
}: NotchOverlayProps) {
  const [isMounted, setIsMounted] = useState(false)
  const captionRef = useRef<HTMLDivElement>(null)
  const [captionWidth, setCaptionWidth] = useState(0)

  useEffect(() => {
    setIsMounted(true)
    // Measure caption width for potential scrolling
    if (captionRef.current) {
      setCaptionWidth(captionRef.current.scrollWidth)
    }
  }, [])

  const notchOpts = { width, height, expand }
  const path = notchPath(notchOpts)

  // Default caption mimics teleprompter text
  const defaultCaption = 'Tap to start reading…'
  const displayCaption = caption || defaultCaption

  return (
    <div
      className={cn(
        'relative flex items-center justify-center pointer-events-none',
        'w-full max-w-[400px] mx-auto',
        className
      )}
      role="img"
      aria-label={recording ? 'TopNotch teleprompter recording' : 'TopNotch teleprompter'}
    >
      {/* Notch SVG — black fill with blue accent rim */}
      <svg
        viewBox={`-${width / 2} 0 ${width} ${height}`}
        width={width}
        height={height}
        className="pointer-events-none"
        style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.15))' }}
      >
        {/* Notch shape — black fill */}
        <path
          d={path}
          fill="var(--tn-notch-black)"
          stroke="var(--tn-blue)"
          strokeWidth={1.5}
          className="transition-all duration-500 ease-out"
        />

        {/* Blue accent indicator at top-center (microphone/camera hint) */}
        <circle
          cx={0}
          cy={6}
          r={3}
          fill="var(--tn-blue)"
          opacity={0.8}
          className="transition-opacity duration-300"
        />

        {/* Recording indicator — pulsing red dot */}
        {recording && (
          <circle
            cx={0}
            cy={height - 10}
            r={5}
            fill="var(--tn-rose)"
            className="animate-pulse"
            aria-hidden="true"
          />
        )}
      </svg>

      {/* Caption text inside notch — only visible when mounted to avoid layout shift */}
      {isMounted && (
        <div
          ref={captionRef}
          className={cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'whitespace-nowrap text-white select-none pointer-events-none',
            'text-[11px] font-medium leading-tight',
            'transition-opacity duration-300'
          )}
          style={{
            opacity: 0.6, // matches AppColors.overlayNormal ~0.6
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
          }}
          aria-hidden="true"
        >
          {displayCaption}
        </div>
      )}

      {/* Optional: expanded caption area below notch for longer text */}
      {caption && captionWidth > width - 20 && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1"
          style={{
            background: 'var(--tn-notch-black)',
            border: '1px solid var(--tn-blue)',
            borderRadius: '8px',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.8)',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          }}
          aria-hidden="true"
        >
          {caption}
        </div>
      )}
    </div>
  )
}

/**
 * Demo wrapper for testing the notch in isolation
 */
export function NotchOverlayDemo() {
  const [expand, setExpand] = useState(0)
  const [recording, setRecording] = useState(false)

  return (
    <div className="flex flex-col items-center gap-8 p-12 bg-white min-h-screen">
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={expand}
            onChange={(e) => setExpand(Number(e.target.value))}
            className="w-48"
          />
          <span className="text-sm font-mono">{Math.round(expand * 100)}%</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={recording}
            onChange={(e) => setRecording(e.target.checked)}
          />
          <span>Recording</span>
        </label>
      </div>

      <NotchOverlay expand={expand} recording={recording} caption="Your script scrolls here…" />
    </div>
  )
}