---
name: TopNotch
description: The teleprompter that lives in your Mac's notch. A page proof framed in hairline rails, with one black notch hanging off its top edge.
colors:
  paper: "oklch(0.982 0.003 95)"
  ink: "oklch(0.18 0.004 95)"
  ink-2: "oklch(0.45 0.006 95)"
  ink-3: "oklch(0.18 0.004 95 / 0.2)"
  rule: "oklch(0.18 0.004 95 / 0.12)"
  notch: "#0a0a0a"
  rec: "#f43f5e"
  focus: "oklch(0.5 0.17 255)"
typography:
  display:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "5.5rem"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.025em"
  display-close:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "4.5rem"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "3.5rem"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "2.6rem"
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Newsreader, ui-serif, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 300
    lineHeight: 1.33
  lede:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  control:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.375
  small:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.43
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.12em"
  fact:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.33
  script:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.55
rounded:
  key: "6px"
  inset: "12px"
  panel-top: "22px"
  panel-bottom: "26px"
  full: "9999px"
spacing:
  hairline: "1px"
  rail-inset-sm: "10px"
  rail-inset: "20px"
  gutter-sm: "24px"
  gutter: "48px"
  band-sm: "96px"
  band: "128px"
components:
  button-download:
    backgroundColor: "{colors.notch}"
    textColor: "#d4d4d4"
    typography: "{typography.control}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "48px"
  segmented-option:
    textColor: "{colors.ink-2}"
    typography: "{typography.small}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  segmented-option-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  grid-cell:
    backgroundColor: "{colors.paper}"
    padding: "40px"
  key-cap:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    typography: "{typography.fact}"
    rounded: "{rounded.key}"
    padding: "4px 8px"
  section-label:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  closing-panel:
    backgroundColor: "{colors.notch}"
    textColor: "#ffffff"
    padding: "80px 56px 64px"
---

# Design System: TopNotch

## Overview

**Creative North Star: "The Page Proof Under the Notch"**

The page is a proof sheet: warm off-white paper held inside one framed column whose hairline rails run the full height, with a small crop mark ("+") wherever a section's top hairline meets a rail. Inside that frame the type does the talking. A light Newsreader serif carries every headline as the product's voice, Geist carries the prose, and Geist Mono speaks for the machine: section labels, file facts, keys, and the teleprompter script itself. The register is Saturn-style editorial restraint, quiet and exact, closer to a spec sheet than a SaaS page.

Black is not a colour here; it is the notch's material. A real macOS menu bar and the live notch panel are pinned to the top of the viewport for the whole page, and the page ends with the same panel opened all the way: the closing band is the notch's body, its tab and emergence curves drawn from the app's own geometry. Rose means one thing, "recording", and appears only where the app would show it.

Motion follows the teleprompter. Text "reads itself in": the hero headline rises word by word out of a blur, and the statement paragraph inks from dim to full as it scrolls through the viewport, the way the panel brightens the line you are on. Everything else is supporting: one-time block reveals, a screen-share demo that flips views on its own, a voice panel that tracks a spoken word, a waveform. Every loop pauses offscreen, and every effect has a reduced-motion path.

**Key Characteristics:**
- One framed column (max 72rem) between hairline rails, crop marks at every section seam.
- Light serif (300) for all headlines, one italic word as the stress.
- Mono uppercase labels name sections, the way a spec sheet labels its parts.
- Hairline grids built from a 1px gap over the rule colour, never from card borders.
- Black is the notch; rose is recording; blue is focus. No other hue in the UI.
- Text inks in as it is read; loops pause offscreen; reduced motion lands everything static.

## Colors

A near-achromatic warm paper-and-ink palette (hue 95) with three functional exceptions, each owning exactly one meaning.

### Primary
- **Notch Black** (notch): the material of the notch panel, the menu bar, the device bezel, and the closing band. Never used as a generic dark surface or section background unrelated to the notch.

### Secondary
- **Recording Rose** (rec): the record dot (in the panel tab, the waveform's REC label, the closing band's status line) and the capture-frame brackets in the screen-share demo. It always means "recording / being captured".

### Tertiary
- **Focus Blue** (focus): `:focus-visible` outline (2px, 3px offset) and text selection at 18% alpha. Nothing else.

### Neutral
- **Proof Paper** (paper): the page ground and the fill of every hairline-grid cell; 
- **Press Ink** (ink): headlines, primary text, the default Download button, the filled part of controls.
- **Second Ink** (ink-2): ledes, body prose, labels, captions, footer, inactive controls, crop marks (at 60%).
- **Unread Ink** (ink-3): ink at 20%; the dimmed, not-yet-read state of the ink-in effects.
- **Rule** (rule): ink at 12%; every hairline (rails, section tops, grid gaps, list dividers), link underlines at rest, and the dot fields.

### Named Rules
**The One Meaning Rule.** Each of the three hues owns one meaning: black is the notch, rose is recording, blue is focus. Rose on anything that is not recording or capture breaks the vocabulary.

**The Ink Not Hue Rule.** Hierarchy comes from ink vs. ink-2 vs. ink-3, never from an accent colour, tinted band, or gradient on UI.

## Typography

**Display Font:** Newsreader (variable, optical-size axis on, normal + italic), with ui-serif, Georgia
**Body Font:** Geist, with ui-sans-serif, system-ui
**Label/Mono Font:** Geist Mono, with ui-monospace, SFMono-Regular

**Character:** A light, optically sized book serif set large and tight against a neutral grotesk and a precise mono. The serif is the voice, the sans explains, the mono reports what the machine shows.

### Hierarchy
- **Display** (Newsreader 300, 2.75rem mobile, 4.5rem at sm, 5.5rem at md; line-height 1; -0.025em): the hero H1 only, max 56rem wide, centred, last word italic.
- **Display Close** (Newsreader 300, 2.6rem to 4.5rem at md; 1.02; -0.02em): the closing band's H2, white on notch black.
- **Headline** (Newsreader 300, 2.25rem to 3.5rem at md; 1.05; -0.02em): every section H2. One italic word where the sentence stresses it.
- **Statement** (Newsreader 300, 1.75rem to 2.6rem at md; 1.25; -0.01em): the single centred thesis paragraph that inks in as it is read.
- **Title** (Newsreader 300, 1.5rem): hairline-grid cell titles and the sound-pair glyphs ("v ↔ w").
- **Proof list** (Newsreader 400, 1.125rem, ink-2): the "Invisible to" app names.
- **Lede** (Geist 400, 1.125rem, 1.25rem in the hero at md; line-height 1.625; ink-2): the paragraph beside or under a headline, max ~36rem.
- **Body** (Geist 400, 1rem; 1.625; ink-2): cell bodies and FAQ answers (max 60ch). FAQ questions use Geist 500 at the same size in ink.
- **Control** (Geist 500, 15px): the Download button, install steps, and the language line.
- **Small** (Geist 400, 14px): captions, the segmented control, footer, keyboard legends.
- **Label** (Geist Mono 400, 11px, uppercase, 0.12em tracking, ink-2): section labels and the "Invisible to" cell.
- **Fact** (Geist Mono 400, 12px): the facts line ("Free · MIT · macOS 13+ · …"), ledger rows, key caps, step numerals, status lines.
- **Script** (Geist Mono 500, 16px at 1.55 line spacing; 17px in the voice panel; 12px status): text inside the notch panel, taken from the app's Classic-mode constants.

### Named Rules
**The Light Voice Rule.** Every serif headline is weight 300 with negative tracking. No bold serif, no sans headline.

**The One Italic Rule.** A headline may italicise one word, the one the sentence leans on ("notch.", "Keep", "actually", "camera"). Never a phrase, never two.

**The Spec Sheet Label Rule.** Sections are named by an 11px mono uppercase label above the H2 ("Why the notch", "Screen sharing", "Voice-following", "The rest of it", "FAQ"). This is a deliberate choice of the page-proof world (Saturn reference), a part label on a spec sheet, not a marketing eyebrow. Labels are short nouns that name the section; they never restate or tease the headline.

## Layout

**The frame.** One column, max-width 72rem, with 1px rule-coloured rails on its left and right. It is inset 10px from the screen edge on mobile and 20px from sm, centring itself at xl, so the crop marks always have room outside the rails. Nothing but the pinned notch chrome sits outside the frame.

**Bands.** Each section is a band with a 1px rule top border and two 11px crop marks centred on the points where that border meets the rails. Standard band padding is 24px horizontal / 96px vertical on mobile, 48px / 128px from md. The statement band breathes more (112px, 160px at md). The hero opens with 224px of top padding (256px at sm) to clear the pinned menu bar and open notch.

**Rhythm inside a band.** Label, then 20px, then H2, then 24px, then lede. Two-column bands (screen share, voice, FAQ) split at md: equal halves, or 1 : 1.6 for FAQ, with 64px column gap.

**The hairline grid.** Multi-item content is a CSS grid with a 1px gap over a rule-coloured background, each cell paper-filled, so the gaps draw the lines. Details uses six columns at md (two 3-span cells, then three 2-span cells), each cell 24px padding (40px at md), with the illustration above the title. The same technique, in white at 10%, draws the install steps inside the closing band. Lists use divide-y hairlines bounded by top and bottom hairlines (FAQ, ledger, sound pairs).

**Ground.** A faint 1px dot field (22px pitch) fades out radially from the notch behind the hero; an even 18px field sits under the voice-panel illustration.

### Named Rules
**The Rails Rule.** Content lives between the rails. A band may go full-bleed within the frame (grids, strips), never past it.

**The Gap Is The Line Rule.** Grid lines are the 1px gap showing the rule through, not borders on cards.

## Elevation & Depth

Flat. Depth is carried by hairlines and by the one black object, not by shadows. The notch panel is never shadowed: it hangs flush off the top edge of the screen, and the closing band hangs flush off its tab. Two shadows exist and both are physical: the default Download button carries a small ambient drop (a pressable thing on paper), and key caps carry a 1px rule-coloured bottom edge (a physical key). The screen-share device mock carries its own illustration shadow, which belongs to the drawing, not the system.

### Shadow Vocabulary
- **Pressable** (`0 1px 2px rgb(0 0 0/0.2), 0 8px 24px -8px rgb(0 0 0/0.35)`): the default Download button only.
- **Key edge** (`0 1px 0 var(--rule)`): key caps only.

### Named Rules
**The Flush Notch Rule.** The notch panel and the closing band are never lifted, outlined, or shadowed.

## Shapes

Square by default: bands, rails, grid cells and strips have no radius. Rounding belongs to things that are rounded in the real world. Controls are full pills (Download, segmented control, the sharing chip). Key caps take 6px. The notch geometry is ported from the Swift app (210 x 44 tab, 18 shoulder drop and emergence radius, 22 outer top radius, 26 bottom radius); the closing band reuses those radii (22px top, 26px bottom) and its tab path. Inset groups on black take 12px. The crop mark ("+") and the capture-frame bracket (an "L" corner in rose) are the page's two drawn marks; the bracket deliberately repeats the crop-mark language.

## Components

### Buttons
- **Download for Mac** is the only call to action, the same liquid-metal pill everywhere (LiquidMetalLink, ported from Yash's portfolio hero): a 48px black pill (#202020 → #000 gradient) sitting 2px inside a moving chrome ring drawn by the @paper-design/shaders liquid-metal shader, the app icon's mirror ball in motion. Label #d4d4d4 (10.99:1), white on hover; the shader speeds up on hover and press, pauses offscreen, and holds still under reduced motion. Press scales to 0.98 with a springy settle. It reads the same on paper and on the black closing band, so there is no inverse variant. The facts line (fact type, ink-2: "Free · MIT · macOS 13+ · 3 MB") follows it once, in the hero.
- **Segmented control** (screen share): a pill track with a rule border on white at 70%, 4px inset; options are small type, ink-2, and the pressed option fills ink with paper text (aria-pressed).

### Section Label
Label type, ink-2, first element of a band, 20px above its H2 (32px above the statement).

### Hairline Grid Cell
Paper fill, square, 24px / 40px padding, a 96px-min illustration slot, then a Title-serif heading and body in ink-2. Illustrations are drawn from the product's own UI (waveform, paused script lines, speed track at 40 pt/s, a mono ledger, key caps), never icons.

### Key Cap
White, 1px rule border, 6px radius, key-edge shadow, fact mono in ink, 48px min width.

### Disclosure (FAQ)
Native `details`: question in Geist 500 with a 16px plus that rotates 45 degrees on open (300ms, expo out), hover drops the question to ink-2; answer in body, ink-2, max 60ch, between divide-y hairlines.

### Links
Inline links are ink with a 1px underline in rule colour at 0.2em offset, turning ink on hover. Footer nav links are ink-2 turning ink, no underline.

### Notch Chrome (signature)
A 28px macOS menu bar (notch black, 13px Geist in white at 85-90%) and the live notch panel, fixed to the top of the viewport. The panel opens from the bare tab on the app's spring (response 0.32, damping 0.8) and scrolls the script in Classic mode; past 64px of scroll it collapses back to the tab and the menu bar fades out (300ms); hovering the tab reopens it. The tab shows the rose record dot (pulsing) and a mono status. Script lines fade in and out at the panel edges.

### Voice Panel
The opened panel drawn at 420 x 236, following a speaker: the current word white at full opacity and weight 600, read words at 38%, unread at 70%; lines shift up on the 500ms expo curve. It advances about 2.6 words a second only while on screen.

### Screen-Share Demo
A notch-black device bezel around a desktop with a shared slide. "Your screen" shows the notch panel; "What the call sees" fades the panel out (blur, scale 0.95) and closes rose capture brackets in, with a "Sharing screen" chip. It flips every 3.2s while 40% visible until the visitor touches the control; the caption updates via aria-live.

### Closing Band
The notch panel opened all the way: the tab with its emergence curves (from the app's metrics) sits on top of a notch-black body with 22px / 26px radii, inset 12px (16px at md) inside the last band. It holds a mono status line with the record dot, the Display Close headline, the three install steps in a white-at-10% hairline grid, the Download button, and a small white-at-70% note.

### Motion System

**Focal: text reads itself in.** The hero H1 words rise out of an 8px blur and 0.35em drop, 900ms on the expo-out curve (cubic-bezier(0.16, 1, 0.3, 1)), staggered 55ms per word after a 450ms wait for the notch to open; the lede and button rise on the same timeline. The statement paragraph inks word by word with scroll: each word goes from 20% to full opacity as the paragraph travels from 85% to 45% of the viewport. It is server-rendered fully inked; only script dims it.

**Supporting.** Blocks reveal once (opacity 700ms, 16px rise 900ms, expo out, 80-90ms stagger), hidden only when scripting is enabled. The waveform bars scale on a 1.1s loop, the screen-share demo toggles, the voice panel tracks words, the record dots pulse. Every loop is gated by an IntersectionObserver and pauses offscreen.

**Reduced motion.** Word rise, script scroll and waveform stop; reveals become a 300ms opacity fade with no transform; ink-in, the screen-share auto toggle and voice tracking do not start; the notch spring lands in one frame.

#### Motion Rules
**The Read-Along Rule.** The focal motion is text being read: words arriving or brightening in reading order. New motion either serves that idea or demonstrates the product; it is never decoration.

**The Offscreen Stop Rule.** Nothing animates where it cannot be seen, and nothing animates under reduced motion except opacity.

## Do's and Don'ts

### Do:
- **Do** keep every section inside the railed frame, with a top hairline and crop marks at the rail seams.
- **Do** set every headline in Newsreader 300 with negative tracking and at most one italic word.
- **Do** name sections with the 11px mono uppercase label, as a spec-sheet part name.
- **Do** draw grids as a 1px gap over the rule colour.
- **Do** build illustrations from TopNotch's own UI and the app's ported constants (METRICS, SPRING, CLASSIC), unchanged.
- **Do** keep one action, "Download for Mac", identical wherever it appears.
- **Do** pause every loop offscreen and give every effect a reduced-motion path.

### Don't:
- **Don't** use rose for anything but recording or capture.
- **Don't** shadow, outline or lift the notch panel or the closing band.
- **Don't** introduce icon cards, badge rows, gradient CTAs, or a second accent colour.
- **Don't** set headlines in Geist or in a bold serif.
- **Don't** round bands, grid cells or strips; rounding is for pills, keys and the notch.
- **Don't** let autoplay motion start before the visitor can see it, or keep it running after they scroll past.
