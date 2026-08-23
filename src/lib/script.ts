/**
 * SettingsManager.defaultTeleprompterText, verbatim from the app
 * (TopNotch/SettingsManager.swift:11) — the script every trial starts with.
 */
export const DEFAULT_SCRIPT = [
  'Welcome to TopNotch, your notch teleprompter.',
  'This short paragraph is here to help you test the scroll speed and speech sync features.',
  'Try reading it aloud at a comfortable pace and watch the text follow your voice.',
  'You can adjust the scroll speed and font size in the settings panel on the right.',
  'Speech recognition works best in a quiet environment with clear pronunciation.',
  'Testing one, two, three — the quick brown fox jumped over the lazy dog.',
]

/** Classic mode defaults: teleprompterSpeed 40 pt/s, fontSize 16, lineSpacing 1.55. */
export const CLASSIC = { speed: 40, fontSize: 16, lineSpacing: 1.55 } as const

/**
 * NotchAnimationConstants, ported from TopNotch/NotchPanelController.swift:676.
 * The expand/collapse spring: .spring(response: 0.32, dampingFraction: 0.80).
 */
export const SPRING = { response: 0.32, damping: 0.8, settleDuration: 0.5 } as const

/** springValue(t:from:to:) — underdamped spring, verbatim from the app. */
export function springValue(t: number, from: number, to: number): number {
  if (t <= 0) return from
  if (t >= SPRING.settleDuration) return to

  const omegaN = (2 * Math.PI) / SPRING.response
  const zeta = SPRING.damping
  const omegaD = omegaN * Math.sqrt(1 - zeta * zeta)
  const decay = Math.exp(-zeta * omegaN * t)
  const progress = 1 - decay * (Math.cos(omegaD * t) + ((zeta * omegaN) / omegaD) * Math.sin(omegaD * t))
  return from + (to - from) * progress
}

/**
 * Greedy word-wrap. The app wraps the script to the panel; the SVG teleprompter
 * cannot reflow text on its own, so lines are broken up front to short phrases —
 * a few words at a time, the way a teleprompter is actually read.
 */
export function wrapScript(lines: string[], maxChars: number): string[] {
  const out: string[] = []
  for (const line of lines) {
    let current = ''
    for (const word of line.split(/\s+/).filter(Boolean)) {
      if (!current) {
        current = word
      } else if (current.length + 1 + word.length <= maxChars) {
        current += ` ${word}`
      } else {
        out.push(current)
        current = word
      }
    }
    if (current) out.push(current)
  }
  return out
}
