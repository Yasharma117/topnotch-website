/**
 * TopNotch notch geometry — a direct port of NotchBoxShape.path(in:)
 * from TopNotch/NotchContentView.swift (github.com/Yasharma117/TopNotch).
 *
 * The rect is the WHOLE panel, not the notch. The 210pt notch is a tab centred on
 * the panel's top edge; as the panel grows wider than the notch, concave emergence
 * curves flare out from the tab down to a shelf at `shoulderDrop`, which runs out
 * to the panel's rounded outer corners. Below that it is a plain rounded body.
 *
 * Expansion is driven by panel WIDTH, exactly as in the app — there is no separate
 * expand parameter. Blend runs over notchWidth+4 .. notchWidth+40.
 */

/** NotchChromeMetrics, verbatim. */
export const METRICS = {
  notchWidth: 210,
  notchHeight: 44,
  shoulderDrop: 18,
  emergenceRadius: 18,
  outerTopRadius: 22,
  bottomRadius: 26,
} as const

export interface NotchPathOptions {
  /** Panel width. At <= notchWidth+4 the shape is the bare collapsed notch. */
  width?: number
  /** Panel height. */
  height?: number
  notchWidth?: number
  shoulderDrop?: number
  emergenceRadius?: number
  outerTopRadius?: number
  bottomRadius?: number
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))
const n = (v: number) => (Object.is(v, -0) ? 0 : Number(v.toFixed(2)))

/**
 * Generate the panel outline as an SVG path, origin at the panel's top-left
 * (x: 0..width, y: 0..height) to match SwiftUI's `rect`.
 */
export function notchPath(opts: NotchPathOptions = {}): string {
  const {
    width = METRICS.notchWidth,
    height = METRICS.notchHeight,
    notchWidth = METRICS.notchWidth,
    shoulderDrop = METRICS.shoulderDrop,
    emergenceRadius = METRICS.emergenceRadius,
    outerTopRadius = METRICS.outerTopRadius,
    bottomRadius = METRICS.bottomRadius,
  } = opts

  const minX = 0
  const minY = 0
  const maxX = Math.max(width, 1)
  const maxY = Math.max(height, 1)
  const midX = maxX / 2

  // Blend collapsed -> shouldered over a small width range so the shape does not
  // pop during animated frame transitions.
  const blendStart = notchWidth + 4
  const blendEnd = notchWidth + 40
  const blend = clamp((maxX - blendStart) / (blendEnd - blendStart), 0, 1)

  // Bottom radius cannot exceed what the box can hold, or the curves cross over.
  const botR = Math.min(bottomRadius, maxX / 2, maxY)

  if (blend <= 0) {
    // Fully collapsed — flat square top (it meets the bezel), rounded bottom.
    return [
      `M ${n(minX)} ${n(minY)}`,
      `L ${n(maxX)} ${n(minY)}`,
      `L ${n(maxX)} ${n(maxY - botR)}`,
      `Q ${n(maxX)} ${n(maxY)} ${n(maxX - botR)} ${n(maxY)}`,
      `L ${n(minX + botR)} ${n(maxY)}`,
      `Q ${n(minX)} ${n(maxY)} ${n(minX)} ${n(maxY - botR)}`,
      'Z',
    ].join(' ')
  }

  const drop = shoulderDrop * blend
  const emergence = emergenceRadius * blend

  // The tab cannot be wider than the panel, and the two outer corners have to fit
  // in whatever is left beside it — otherwise the corners overrun the tab and the
  // shelf inverts. Only bites on panels too narrow to hold notch + both corners.
  const tab = Math.min(notchWidth, maxX)
  const outerTop = Math.min(outerTopRadius * blend, (maxX - tab) / 2)

  const notchLeft = midX - tab / 2
  const notchRight = midX + tab / 2
  const shoulderY = minY + drop
  // Swift lets the shoulder run past the panel edge — harmless there because the
  // app controls the window width, but on the web a narrow panel spikes. Clamp it
  // to where the outer corner begins; identical output at the widths the app uses.
  const shoulderReach = Math.min(emergence * 1.6, Math.max(0, maxX - outerTop - notchRight))
  const rightShoulderEndX = notchRight + shoulderReach
  const leftShoulderStartX = notchLeft - shoulderReach
  const topShelfMaxX = Math.max(rightShoulderEndX, maxX - outerTop)
  const topShelfMinX = Math.min(leftShoulderStartX, minX + outerTop)

  return [
    `M ${n(notchLeft)} ${n(minY)}`,
    `L ${n(notchRight)} ${n(minY)}`,
    // Emergence: the tab's edge peels out and down onto the shelf.
    `C ${n(notchRight + emergence * 0.55)} ${n(minY)} ${n(notchRight + emergence * 1.05)} ${n(shoulderY)} ${n(rightShoulderEndX)} ${n(shoulderY)}`,
    `L ${n(topShelfMaxX)} ${n(shoulderY)}`,
    `Q ${n(maxX)} ${n(shoulderY)} ${n(maxX)} ${n(shoulderY + outerTop)}`,
    `L ${n(maxX)} ${n(maxY - botR)}`,
    `Q ${n(maxX)} ${n(maxY)} ${n(maxX - botR)} ${n(maxY)}`,
    `L ${n(minX + botR)} ${n(maxY)}`,
    `Q ${n(minX)} ${n(maxY)} ${n(minX)} ${n(maxY - botR)}`,
    `L ${n(minX)} ${n(shoulderY + outerTop)}`,
    `Q ${n(minX)} ${n(shoulderY)} ${n(minX + outerTop)} ${n(shoulderY)}`,
    `L ${n(topShelfMinX)} ${n(shoulderY)}`,
    // Swift is missing this segment: it runs the shelf line to topShelfMinX and then
    // curves from THERE back to the tab, so the left emergence stretches across the
    // whole shelf while the right one is a tight 1.6*emergence curve. leftShoulderStartX
    // is computed in the Swift but only ever reaches min(), so the curve never starts
    // where it should. Landing on it first mirrors the right side exactly.
    `L ${n(leftShoulderStartX)} ${n(shoulderY)}`,
    `C ${n(notchLeft - emergence * 1.05)} ${n(shoulderY)} ${n(notchLeft - emergence * 0.55)} ${n(minY)} ${n(notchLeft)} ${n(minY)}`,
    'Z',
  ].join(' ')
}
