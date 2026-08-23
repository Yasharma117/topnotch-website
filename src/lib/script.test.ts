import { describe, it, expect } from 'vitest'
import { springValue, SPRING, DEFAULT_SCRIPT, CLASSIC, wrapScript } from './script'

describe('springValue — port of NotchAnimationConstants', () => {
  it('holds the start value before the animation begins', () => {
    expect(springValue(0, 44, 250)).toBe(44)
    expect(springValue(-1, 44, 250)).toBe(44)
  })

  it('snaps to the target once settled', () => {
    expect(springValue(SPRING.settleDuration, 44, 250)).toBe(250)
    expect(springValue(10, 44, 250)).toBe(250)
  })

  it('is within a pixel of the target at the settle boundary', () => {
    // The Swift comment claims < 1px at settleDuration; verify the curve agrees
    // rather than trusting the constant.
    const justBefore = springValue(SPRING.settleDuration - 0.001, 44, 250)
    expect(Math.abs(justBefore - 250)).toBeLessThan(1)
  })

  it('overshoots, because damping 0.8 is underdamped', () => {
    const peak = Math.max(
      ...Array.from({ length: 200 }, (_, i) => springValue((i / 200) * SPRING.settleDuration, 0, 100))
    )
    expect(peak).toBeGreaterThan(100)
    expect(peak).toBeLessThan(110) // a nudge, not a bounce
  })

  it('moves toward the target overall', () => {
    const early = springValue(0.05, 44, 250)
    const mid = springValue(0.2, 44, 250)
    expect(early).toBeGreaterThan(44)
    expect(mid).toBeGreaterThan(early)
  })
})

describe('app defaults', () => {
  it('keeps the shipped script and classic-mode constants', () => {
    expect(DEFAULT_SCRIPT).toHaveLength(6)
    expect(DEFAULT_SCRIPT[0]).toBe('Welcome to TopNotch, your notch teleprompter.')
    expect(CLASSIC).toEqual({ speed: 40, fontSize: 16, lineSpacing: 1.55 })
  })
})

describe('wrapScript', () => {
  it('breaks long lines at word boundaries within the limit', () => {
    const wrapped = wrapScript(['the quick brown fox jumped over the lazy dog'], 16)
    expect(wrapped.every((l) => l.length <= 16)).toBe(true)
    expect(wrapped.join(' ')).toBe('the quick brown fox jumped over the lazy dog')
  })

  it('keeps short lines intact', () => {
    expect(wrapScript(['short line'], 40)).toEqual(['short line'])
  })

  it('never drops or reorders words from the real script', () => {
    const wrapped = wrapScript(DEFAULT_SCRIPT, 30)
    expect(wrapped.join(' ')).toBe(DEFAULT_SCRIPT.join(' '))
    expect(wrapped.length).toBeGreaterThan(DEFAULT_SCRIPT.length)
  })

  it('does not hang on a word longer than the limit', () => {
    const wrapped = wrapScript(['supercalifragilistic ok'], 5)
    expect(wrapped).toEqual(['supercalifragilistic', 'ok'])
  })
})
