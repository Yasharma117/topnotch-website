import { describe, it, expect } from 'vitest'
import { notchPath, METRICS } from './notch'

/** On-curve anchors plus Bézier controls — the hull that bounds the outline. */
function points(path: string): [number, number][] {
  const out: [number, number][] = []
  const tok = path.trim().split(/\s+/)
  for (let i = 0; i < tok.length; ) {
    const cmd = tok[i++]
    const take = (k: number) => tok.slice(i, (i += k)).map(Number)
    if (cmd === 'M' || cmd === 'L') {
      const [x, y] = take(2)
      out.push([x, y])
    } else if (cmd === 'Q') {
      const [cx, cy, x, y] = take(4)
      out.push([cx, cy], [x, y])
    } else if (cmd === 'C') {
      const [ax, ay, bx, by, x, y] = take(6)
      out.push([ax, ay], [bx, by], [x, y])
    } else if (cmd !== 'Z') {
      throw new Error(`unexpected command: ${cmd}`)
    }
  }
  return out
}

const COLLAPSED = METRICS.notchWidth + 4 // blendStart
const WIDTHS = [210, COLLAPSED, COLLAPSED + 1, 230, 250, 260, 320, 420, 560, 900]

describe('notchPath — port of NotchBoxShape.path(in:)', () => {
  it('keeps the Swift NotchChromeMetrics values', () => {
    expect(METRICS).toEqual({
      notchWidth: 210,
      notchHeight: 44,
      shoulderDrop: 18,
      emergenceRadius: 18,
      outerTopRadius: 22,
      bottomRadius: 26,
    })
  })

  it.each(WIDTHS)('stays inside the panel rect at width=%s', (width) => {
    const height = 180
    for (const [x, y] of points(notchPath({ width, height }))) {
      expect(x).toBeGreaterThanOrEqual(-0.01)
      expect(x).toBeLessThanOrEqual(width + 0.01)
      expect(y).toBeGreaterThanOrEqual(-0.01)
      expect(y).toBeLessThanOrEqual(height + 0.01)
    }
  })

  it.each(WIDTHS)('is closed and finite at width=%s', (width) => {
    const path = notchPath({ width, height: 180 })
    expect(path).toMatch(/^M /)
    expect(path).toMatch(/ Z$/)
    expect(path).not.toMatch(/NaN|Infinity/)
  })

  it('is a plain rounded rect until the panel outgrows the notch', () => {
    // blend <= 0 up to and including notchWidth + 4.
    const collapsed = notchPath({ width: COLLAPSED, height: 44 })
    expect(collapsed).not.toContain('C ') // no emergence curves
    // Top edge spans the full width, square corners — it meets the bezel.
    expect(collapsed.startsWith('M 0 0 L 214 0')).toBe(true)
  })

  it('grows shoulders once past the blend threshold', () => {
    expect(notchPath({ width: COLLAPSED + 1, height: 44 })).toContain('C ')
  })

  it('blends continuously across the threshold rather than popping', () => {
    const before = points(notchPath({ width: COLLAPSED, height: 120 }))
    const after = points(notchPath({ width: COLLAPSED + 0.5, height: 120 }))
    const box = (pts: [number, number][]) => ({
      x: Math.min(...pts.map(([x]) => x)),
      y: Math.max(...pts.map(([, y]) => y)),
    })
    expect(Math.abs(box(after).x - box(before).x)).toBeLessThan(1)
    expect(Math.abs(box(after).y - box(before).y)).toBeLessThan(1)
  })

  it.each(WIDTHS)('is left-right symmetric at width=%s', (width) => {
    const pts = points(notchPath({ width, height: 180 }))
    const mirrored = pts.map(([x, y]) => [Number((width - x).toFixed(2)), y] as [number, number])
    // Compare the point SET: the outline is what must mirror. Zero-length segments
    // (the shelf line can land on the outer corner it already reached) change
    // multiplicity without changing the shape.
    const key = (p: [number, number][]) =>
      [...new Set(p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`))].sort().join(' ')
    expect(key(mirrored)).toBe(key(pts))
  })

  it('centres the notch tab on the panel', () => {
    const width = 560
    const path = notchPath({ width, height: 200 })
    const [left, right] = path.split(' ').slice(1, 5).filter((_, i) => i === 0 || i === 3).map(Number)
    expect(left + right).toBeCloseTo(width, 1)
    expect(right - left).toBeCloseTo(METRICS.notchWidth, 1)
  })

  it('never lets the shoulder spike past the panel edge', () => {
    // Widths just past the threshold are where Swift's unclamped shoulder overshot.
    for (const width of [230, 240, 250, 260, 280, 300, 312]) {
      const xs = points(notchPath({ width, height: 140 })).map(([x]) => x)
      expect(Math.max(...xs)).toBeLessThanOrEqual(width + 0.01)
      expect(Math.min(...xs)).toBeGreaterThanOrEqual(-0.01)
    }
  })
})
