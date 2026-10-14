# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
People who read a script on camera from a MacBook: founders recording demos, creators recording voice-overs, anyone presenting on a Zoom/Meet/Teams call who wants to look at the lens, not down at notes. English (India) speakers and Indic-language speakers are a first-class audience, not an afterthought. (Inferred from the app's defaults and copy; confirm.)

## Product Purpose
TopNotch is a free macOS teleprompter that lives in the MacBook camera notch (and at the top centre of the screen on Macs without one). The site has one job: get a Mac visitor to download `TopNotch.dmg` and understand, before they do, that it works on their Mac.

## Positioning
- The script sits a few centimetres from the camera, inside the notch, so reading it looks like eye contact.
- The panel is excluded from screen capture: the call never sees it.
- Voice-following is accent-forgiving: v/w, th/t, z/j and s/sh are treated as interchangeable, and English (India) is the default locale.
- Free, MIT licensed, no account, no network calls. Competitors (Notchie $29.99, Moody $29) are paid.

## Capabilities and Constraints
- Any Mac on macOS 13+. The panel is pinned to the top centre of the main screen (NotchPanelController.panelFrame); on notched MacBooks that is the notch. Intel support is unverified (no ARCHS set in the project), so the site doesn't claim it.
- Voice-following in 12 languages: English (India, default), Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, English (US), English (UK).
- Records mic to AAC .m4a, 44.1 kHz mono, Desktop by default.
- Classic mode: fixed scroll, 10–120 pt/s.
- Shortcuts: ⌘⇧R record, ⌘⇧T teleprompter, ⇧←/→ speed, ⇧↑/↓ scroll.
- Distributed as a signed, notarised `TopNotch.dmg` (~3 MB) from GitHub Releases.

## Brand Commitments
- Name: TopNotch. App icon: `public/topnotch-icon.png` (shipped AppIcon).
- The notch panel shape and spring are ported verbatim from the app (`src/lib/notch.ts`, `src/lib/script.ts`) and must stay faithful to it.
- Built by Yash Sharma (https://8bityash.vercel.app). Source: https://github.com/Yasharma117/TopNotch.

## Evidence on Hand
- The live notch simulation (real geometry, real spring).
- Real release: v1.0, TopNotch.dmg 3,006,709 bytes.
- No testimonials, user counts, press, or screen recordings exist. Do not fabricate any.
- No working contact email: support goes through GitHub Issues.

## Product Principles
1. Show the product doing the thing; don't describe it twice.
2. Say each fact once, where it answers a question.
3. Only claims the source code supports.
4. One action: download for Mac.
