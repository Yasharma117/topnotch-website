/**
 * TopNotch notch geometry — TypeScript port of Swift's NotchBoxShape.path(in:)
 * Source: TopNotch/NotchPanelController.swift (NotchChromeMetrics + NotchBoxShape)
 *
 * Geometry constants from Swift:
 * - width: 210, height: 44
 * - shoulderDrop: 18, emergenceRadius: 18
 * - outerTopRadius: 22, bottomRadius: 26
 * - blendStart: width + 4 = 214, blendEnd: width + 40 = 250
 * - collapsed radius: 20
 */

export interface NotchPathOptions {
  /** Base notch width (default 210) */
  width: number
  /** Base notch height (default 44) */
  height: number
  /** Expansion factor 0..1: 0 = collapsed rounded rect, 1 = full shouldered notch */
  expand: number
  /** Optional custom corner radius for collapsed state (default 20) */
  collapsedRadius?: number
}

const NOTCH_DEFAULTS = {
  shoulderDrop: 18,
  emergenceRadius: 18,
  outerTopRadius: 22,
  bottomRadius: 26,
  blendStartExtra: 4,   // blendStart = width + 4
  blendEndExtra: 40,    // blendEnd = width + 40
  collapsedRadius: 20,
} as const

/**
 * Linear interpolation helper
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

/**
 * Clamp value between min and max
 */
function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v))
}

/**
 * Generate the notch SVG path.
 * The coordinate system: origin at notch center-top.
 * x increases right, y increases down.
 * Returns an SVG path string (absolute commands).
 */
export function notchPath(opts: NotchPathOptions): string {
  const {
    width = 210,
    height = 44,
    expand = 0,
    collapsedRadius = NOTCH_DEFAULTS.collapsedRadius,
  } = opts

  const t = clamp(expand, 0, 1)

  // Interpolated geometry
  const w = width
  const h = height
  const shoulderDrop = NOTCH_DEFAULTS.shoulderDrop
  const emergenceRadius = NOTCH_DEFAULTS.emergenceRadius
  const outerTopRadius = NOTCH_DEFAULTS.outerTopRadius
  const bottomRadius = NOTCH_DEFAULTS.bottomRadius
  const blendStart = w + NOTCH_DEFAULTS.blendStartExtra
  const blendEnd = w + NOTCH_DEFAULTS.blendEndExtra

  // Interpolate between collapsed and expanded key measurements
  // Collapsed: rounded rect width w, height h, radius collapsedRadius
  // Expanded: shouldered notch with full geometry

  // Effective half-width at top (where shoulders emerge)
  const halfWidthTop = lerp(w / 2, blendEnd / 2, t)
  // Effective half-width at bottom of notch (base)
  const halfWidthBottom = lerp(w / 2, w / 2, t) // base width stays same
  // Shoulder y position (where curve transitions)
  const shoulderY = lerp(0, shoulderDrop, t)
  // Emergence curve radius (blends shoulder into top edge)
  const emergenceR = lerp(collapsedRadius, emergenceRadius, t)
  // Outer top corner radius
  const outerTopR = lerp(collapsedRadius, outerTopRadius, t)
  // Bottom corner radius
  const bottomR = lerp(collapsedRadius, bottomRadius, t)

  // Build path — start at left-bottom, go counter-clockwise
  // Coordinates relative to center (0,0) at notch top-center
  const leftBottomX = -halfWidthBottom
  const rightBottomX = halfWidthBottom
  const leftTopX = -halfWidthTop
  const rightTopX = halfWidthTop
  const topY = 0
  const shoulderTopY = -shoulderY // negative because shoulders go UP from top edge
  const bottomY = h

  // Build SVG path using absolute commands
  const cmds: string[] = []

  // Start at left-bottom corner
  cmds.push(`M ${leftBottomX.toFixed(2)} ${bottomY.toFixed(2)}`)

  // Bottom edge to right-bottom (with bottom radius)
  if (bottomR > 0) {
    // Arc to right-bottom
    cmds.push(`H ${(rightBottomX - bottomR).toFixed(2)}`)
    cmds.push(`A ${bottomR.toFixed(2)} ${bottomR.toFixed(2)} 0 0 1 ${rightBottomX.toFixed(2)} ${(bottomY - bottomR).toFixed(2)}`)
    // Right edge up to shoulder start
    cmds.push(`V ${(shoulderTopY + emergenceR).toFixed(2)}`)
    // Emergence curve (shoulder blend)
    cmds.push(`A ${emergenceR.toFixed(2)} ${emergenceR.toFixed(2)} 0 0 1 ${(rightTopX + outerTopR).toFixed(2)} ${shoulderTopY.toFixed(2)}`)
    // Top edge to left shoulder
    cmds.push(`H ${(-rightTopX - outerTopR).toFixed(2)}`)
    // Left emergence curve
    cmds.push(`A ${emergenceR.toFixed(2)} ${emergenceR.toFixed(2)} 0 0 1 ${(leftTopX - 0).toFixed(2)} ${(shoulderTopY + emergenceR).toFixed(2)}`)
    // Left edge down
    cmds.push(`V ${(bottomY - bottomR).toFixed(2)}`)
    // Bottom-left arc
    cmds.push(`A ${bottomR.toFixed(2)} ${bottomR.toFixed(2)} 0 0 1 ${leftBottomX.toFixed(2)} ${bottomY.toFixed(2)}`)
  } else {
    // No radius - simple rect
    cmds.push(`H ${rightBottomX.toFixed(2)}`)
    cmds.push(`V ${topY.toFixed(2)}`)
    cmds.push(`H ${leftBottomX.toFixed(2)}`)
    cmds.push(`Z`)
  }

  // If fully collapsed (t near 0), simplify to rounded rect
  if (t < 0.01) {
    const r = collapsedRadius
    const hw = w / 2
    return [
      `M ${(-hw + r).toFixed(2)} ${h.toFixed(2)}`,
      `H ${(hw - r).toFixed(2)}`,
      `A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${hw.toFixed(2)} ${(h - r).toFixed(2)}`,
      `V ${r.toFixed(2)}`,
      `A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${(hw - r).toFixed(2)} 0`,
      `H ${(-hw + r).toFixed(2)}`,
      `A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${(-hw).toFixed(2)} ${r.toFixed(2)}`,
      `V ${(h - r).toFixed(2)}`,
      `A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${(-hw + r).toFixed(2)} ${h.toFixed(2)}`,
      'Z',
    ].join(' ')
  }

  return cmds.join(' ')
}

/**
 * Get the bounding box of the notch path for a given expansion.
 * Useful for layout/sizing.
 */
export function notchBBox(opts: NotchPathOptions): { width: number; height: number; top: number; left: number; right: number; bottom: number } {
  const path = notchPath(opts)
  // Parse path for rough bbox (simplified)
  const coords = path.match(/[-]?\d+\.?\d*/g)?.map(Number) || []
  if (coords.length === 0) return { width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }
  const xs = coords.filter((_, i) => i % 2 === 0)
  const ys = coords.filter((_, i) => i % 2 === 1)
  const left = Math.min(...xs)
  const right = Math.max(...xs)
  const top = Math.min(...ys)
  const bottom = Math.max(...ys)
  return { width: right - left, height: bottom - top, top, left, right, bottom }
}