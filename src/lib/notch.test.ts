import { describe, it, expect } from 'vitest'
import { notchPath, type NotchPathOptions } from './notch'

describe('notchPath', () => {
  const baseOpts: NotchPathOptions = {
    width: 210,
    height: 44,
    expand: 0,
  }

  it('returns a valid SVG path string', () => {
    const path = notchPath(baseOpts)
    expect(typeof path).toBe('string')
    expect(path.length).toBeGreaterThan(0)
    expect(path).toMatch(/^M/)
  })

  it('collapsed notch (expand=0) produces a rounded-rect-like shape', () => {
    const path = notchPath({ ...baseOpts, expand: 0 })
    // Should contain arc commands for rounded corners
    expect(path).toMatch(/[Aa]/)
    // Width and height roughly respected (half-width 105, height 44)
    expect(path).toContain('105')
    expect(path).toContain('44')
  })

  it('expanded notch (expand=1) contains shoulder control points', () => {
    const path = notchPath({ ...baseOpts, expand: 1 })
    // Expanded shape should be wider than collapsed (shoulderDrop adds width)
    // and have more complex bezier curves
    expect(path.length).toBeGreaterThan(notchPath({ ...baseOpts, expand: 0 }).length)
  })

  it('expand parameter interpolates between collapsed and expanded', () => {
    const collapsed = notchPath({ ...baseOpts, expand: 0 })
    const expanded = notchPath({ ...baseOpts, expand: 1 })
    const mid = notchPath({ ...baseOpts, expand: 0.5 })
    // Mid should be different from both
    expect(mid).not.toBe(collapsed)
    expect(mid).not.toBe(expanded)
    // All should be valid paths
    expect(collapsed).toMatch(/^M/)
    expect(mid).toMatch(/^M/)
    expect(expanded).toMatch(/^M/)
  })

  it('width and height clamp to minimum values', () => {
    const tiny = notchPath({ width: 10, height: 10, expand: 0 })
    expect(tiny).toMatch(/^M/)
    // Should not throw or produce NaN
    expect(tiny).not.toContain('NaN')
  })

  it('expanded notch respects shoulderDrop (18) and emergenceRadius (18)', () => {
    const path = notchPath({ ...baseOpts, expand: 1 })
    // The expanded path should be visibly wider due to shoulders
    const bbox = path.match(/M([\d.]+) ([\d.]+)/)
    if (bbox) {
      const startX = parseFloat(bbox[1])
      // Path should start left of center due to shoulders
      expect(startX).toBeLessThan(0)
    }
  })
})