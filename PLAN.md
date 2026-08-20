# TopNotch Landing Website — Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build a single-page marketing site for the TopNotch macOS notch teleprompter, following notchie.app's information hierarchy but using TopNotch's real feature set, a white-background shader hero, a custom notch overlay, and a **free-app** layout (no paid pricing section).

**Architecture:** A Next.js (App Router) + Tailwind + shadcn/ui single page. The hero is a 21st.dev shader background forced to a white/light base with a custom SVG `NotchBoxShape` overlay (ported from TopNotch's Swift geometry) sitting top-center. All other sections reuse the pre-selected 21st.dev components, restyled to a light theme matching the white hero. The app is free, so the pricing section is replaced by a "Get TopNotch — free" download/CTA section.

**Tech Stack:** Next.js 14 (App Router), React 18, Tailwind CSS, shadcn/ui tokens, TypeScript, Vitest (for the notch geometry unit test), deployed on Vercel (matches 8bityash.vercel.app).

---

## Current context / assumptions

- TopNotch is a real macOS Swift app (github.com/Yasharma117/TopNotch): a notch teleprompter that records mic audio (.m4a) and scrolls a script. Two modes: Classic constant-speed and Voice-following (on-device Apple Speech, **en-IN default + 11 Indian languages**, accent-tolerant fuzzy matcher, auto section-break engine).
- Notch geometry is already specified in TopNotch's `NotchChromeMetrics` / `NotchBoxShape` (width 210, height 44, shoulderDrop 18, emergenceRadius 18, outerTopRadius 22, bottomRadius 26) with a bezier path that blends collapsed→expanded.
- The site must **not** look like a Notchie clone: own the shouldered notch silhouette, lead with TopNotch's differentiators (Indian-accent voice sync, 11 Indian languages, .m4a recording, auto-arrange pauses).
- App is **free for all** → no pricing tiers, no "buy" CTA. Replace with a free download / "get it on the Mac App Store" section.
- Reference hierarchy (from notchie.app): Nav → Hero → Pain narrative → Solution pivot → Differentiators → How it works → Use cases → Features → Testimonials → FAQ → Trust → Final CTA → Footer.
- All 21st.dev component links are verified live. The notch overlay is custom (no 21st.dev link).
- **Hero shader source:** `@paper-design/shaders-react` (npm, github.com/paper-design/shaders, 3.3k★, zero-dependency canvas shaders, TS). This is the actual library the 21st.dev "paper design shader" wrappers are built on; using it directly gives precise white/light color control. Shaders of interest: `GrainGradient` (animated, `colorBack` + up to 7 `colors`, `shape` modes, `intensity`/`noise`), `MeshGradient` (up to 10 colors, `distortion`/`swirl`), `PaperTexture` (static, `colorFront`/`colorBack`). User requirement: **overall light theme** so the notch is never clouded — drive all shader bases from white/light values.

## Selected components (final set)

| Section | Source | Notes |
|---|---|---|
| Hero background | **`@paper-design/shaders-react`** (use `GrainGradient` primary, `PaperTexture` static fallback) | White/light base so the notch never clouds. Source lib behind the 21st.dev "paper design shader" wrappers (github.com/paper-design/shaders, 3.3k★, zero-dep). Color-driven: `colorBack:'#f6f8ff'`, `colors:['#dbe7ff','#a9c8ff','#4297F7','#5667FF']`. References only: `@moazamtrade/components/paper-design-shader-background`, `@ola.leandroaraujo/components/shader-r`. |
| Hero notch overlay | **Custom** SVG `NotchBoxShape` (ported from TopNotch) | Black fill + blue accent, pulsing red dot, faint scroll text |
| Nav | Reuse 8bityash portfolio nav pattern | Minimal, light |
| Pain narrative | `@designali-in/components/gradient-text` | Pull-quote, rose tint (works on light) |
| Feature grid | `@manuarora700/components/feature-section-with-card-gradient` | Restyle to light |
| Comparison | `@7ovr/components/comparison-2` | "Built differently" two-column |
| FAQ | `@ruixen.ui/components/faqsection` | Data-driven accordion |
| Testimonials | `@sshahaider/components/testimonials-section` | User wall |
| Trust strip | `@sshahaider/components/logo-cloud-2` | App Store / Product Hunt |
| Free/Get section (replaces pricing) | `@sshahaider/components/cta-3` restyled as free download | "Get TopNotch — free" |
| Footer | `@shadcnblockscom/components/footer-7` | Light theme |
| Badges | `@edwinvakayil/components/verified-badge`, `@serafimcloud/components/status-badge` | "App Store verified" eyebrows |

**Theme decision (recorded):** Whole page is **light** to honor the white shader hero. Accent = TopNotch blue `#4297F7` (≈ app's `(0.26,0.52,0.97)`). Rose/orange appears only in the pain section. All selected components are restyled from their default dark to light tokens.

---

## Step-by-step plan

### Task 1: Scaffold Next.js + Tailwind + shadcn project
**Objective:** Create the project skeleton.
**Files:** Create `/Users/yashsharma/TopNotch-site/` (new git repo).
- Step 1: `npx create-next-app@latest TopNotch-site --ts --tailwind --app --eslint --src-dir --import-alias "@/*"`
- Step 2: `cd TopNotch-site && npx shadcn@latest init` (choose light base, zinc/neutral, CSS variables)
- Step 3: Add tokens to `src/app/globals.css`: `--accent: #4297F7; --notch-black: #0a0a0a;`
- Step 4: `npm run dev`, confirm localhost:3000 renders blank page. Commit `chore: scaffold`.

### Task 2: Port NotchBoxShape to a TS geometry module (+ Vitest)
**Objective:** Reusable, testable notch SVG path generator matching TopNotch's Swift shape.
**Files:** Create `src/lib/notch.ts`, `src/lib/notch.test.ts`.
- Step 1 (test): write `notch.test.ts` asserting `notchPath({width:210,height:44,expand:0})` returns a rounded-rect-ish path and `notchPath({expand:1})` contains shoulder control points; assert width/height clamp.
- Step 2: run `npx vitest run` → FAIL (module missing).
- Step 3: implement `notchPath(opts)` translating `NotchBoxShape.path(in:)` bezier math (collapsed blendStart=width+4, blendEnd=width+40, shoulderDrop 18, emergenceRadius 18, outerTopRadius 22, bottomRadius 26).
- Step 4: `npx vitest run` → PASS. Commit `feat: notch shape geometry + tests`.

### Task 3: Build the NotchOverlay component
**Objective:** Render the notch SVG top-center with black fill, blue accent rim, pulsing red record dot, faint scrolling caption.
**Files:** Create `src/components/NotchOverlay.tsx`.
- Use `notchPath()` from Task 2. Props: `expanded`, `recording`.
- Caption uses `AppColors.overlay*` opacities (0.35–0.94 white-on-black) ported as Tailwind classes.
- Verify in dev: notch sits centered at top of hero, animates collapsed→expanded on hover. Commit `feat: notch overlay`.

### Task 4: Hero section (paper shader + white + notch)
**Objective:** Assemble hero from `@paper-design/shaders-react` (light base) + `NotchOverlay` + headline + free CTA.
**Files:** Create `src/components/sections/Hero.tsx`, modify `src/app/page.tsx`.
- Install: `npm i @paper-design/shaders-react`.
- Primary: `<GrainGradient colorBack="#f6f8ff" colors={["#dbe7ff","#a9c8ff","#4297F7","#5667FF"]} shape={4} intensity={0.35} noise={0.12} speed={0.2} style={{position:"absolute",inset:0}} />` (soft animated light-blue gradient, white base → never clouds the notch).
- Fallback (static, most premium): `<PaperTexture colorBack="#fbfbfd" colorFront="#e9effc" roughness={0.4} fiber={0.3} />` — pure white Apple-like paper.
- Keep `@moazamtrade/components/paper-design-shader-background` and `@ola.leandroaraujo/components/shader-r` open as visual references only.
- Headline: "The teleprompter that lives in your Mac's notch." Sub: "Read your script, record your voice, stay eye-to-eye with the camera. Free." CTA: "Get TopNotch — free" (links to Mac App Store / download).
- Verify: hero is light, notch visible top-center, shader subtle and light. Commit `feat: hero section`.

### Task 5: Nav + Pain narrative + Solution pivot
**Objective:** Minimal light nav; rose-tinted pain section with gradient-text pull-quote; solution pivot.
**Files:** `src/components/sections/Nav.tsx`, `src/components/sections/Pain.tsx`, `src/components/sections/Solution.tsx`.
- Nav reuses 8bityash pattern (wordmark left, "Get TopNotch" right).
- Pain: `@designali-in/components/gradient-text` for the "Were they reading from a script?" quote, rose accent.
- Solution: short pivot copy leading into differentiators. Commit `feat: nav + pain + solution`.

### Task 6: Feature grid (light)
**Objective:** Showcase TopNotch's real features using `@manuarora700/components/feature-section-with-card-gradient` restyled light.
**Files:** `src/components/sections/Features.tsx`.
- 6 cards, copy from real features: Voice-following (en-IN + 11 Indian langs), Accent-tolerant sync, Records .m4a, Auto section-arrange, Classic mode, On-device/private.
- Verify cards render light with blue accent. Commit `feat: features`.

### Task 7: Comparison (voice vs classic / TopNotch vs others)
**Objective:** Two-column "Built differently" using `@7ovr/components/comparison-2`.
**Files:** `src/components/sections/Comparison.tsx`.
- Left: "Other teleprompters" (force your rhythm, English-only, no recording). Right: "TopNotch" (follows your pace, 11 Indian langs, records audio). Commit `feat: comparison`.

### Task 8: How it works + Use cases
**Objective:** 3-step how-it-works + high-stakes use cases.
**Files:** `src/components/sections/HowItWorks.tsx`, `src/components/sections/UseCases.tsx`.
- Steps: 1) Paste script 2) Hover notch / start 3) Read & record. Use cases: sales calls, interviews, webinars, talks (copy from notchie structure, TopNotch framing). Commit `feat: how-it-works + use-cases`.

### Task 9: Testimonials + Trust strip
**Objective:** User wall + logo cloud.
**Files:** `src/components/sections/Testimonials.tsx`, `src/components/sections/Trust.tsx`.
- `@sshahaider/components/testimonials-section` (placeholder quotes, mark for real later).
- `@sshahaider/components/logo-cloud-2` → App Store badge, Product Hunt #4. Commit `feat: testimonials + trust`.

### Task 10: FAQ (light)
**Objective:** Data-driven FAQ using `@ruixen.ui/components/faqsection`.
**Files:** `src/components/sections/Faq.tsx`, `src/data/faq.ts`.
- 8–12 Qs from TopNotch's real constraints: macOS 14+, Apple Silicon + Intel, mic permission, voice-sync in noise, multi-display, languages, free (no subscription), how to get it, recording format .m4a, privacy/local. Commit `feat: faq`.

### Task 11: Free / Get section (replaces pricing)
**Objective:** Free-download CTA replacing the paid pricing section.
**Files:** `src/components/sections/GetFree.tsx`.
- Use `@sshahaider/components/cta-3` restyled: headline "TopNotch is free. For everyone." + Mac App Store button + direct download + `@edwinvakayil/components/verified-badge` ("App Store verified") + `@serafimcloud/components/status-badge` ("Free • No account needed"). Commit `feat: get-free section`.

### Task 12: Footer (light) + assemble page
**Objective:** Light footer + wire all sections in `page.tsx`.
**Files:** `src/components/sections/Footer.tsx`, `src/app/page.tsx`.
- `@shadcnblockscom/components/footer-7` restyled light; links to GitHub, App Store, Privacy.
- `page.tsx` order: Nav, Hero, Pain, Solution, Features, Comparison, HowItWorks, UseCases, Testimonials, Trust, Faq, GetFree, Footer. Commit `feat: footer + page assembly`.

### Task 13: Responsive + theme pass + deploy
**Objective:** Verify mobile/desktop, light-theme consistency, deploy to Vercel.
- Step 1: `npm run build` succeeds.
- Step 2: Manual responsive check at 375 / 768 / 1440px (screenshot each section).
- Step 3: Confirm accent blue + light bg consistent; rose only in Pain.
- Step 4: `vercel deploy --prod` (or link repo). Commit `chore: deploy`.

---

## Files likely to change
- `src/app/page.tsx` (assembly)
- `src/app/globals.css` (tokens)
- `src/lib/notch.ts`, `src/lib/notch.test.ts` (new)
- `src/components/NotchOverlay.tsx` (new)
- `src/components/sections/*.tsx` (12 new section files)
- `src/data/faq.ts` (new)

## Tests / validation
- `npx vitest run` — notch geometry unit tests pass (Task 2).
- `npm run build` — production build succeeds (Task 13).
- Local dev server screenshots at 375/768/1440px for every section.
- Visual diff against the 13 opened 21st.dev tabs to confirm components match references.

## Risks / tradeoffs / open questions
- **Light vs dark for non-hero sections:** Plan assumes full light theme to match the white shader hero. If you'd rather keep the other components dark in a sectioned "light hero → dark body" layout, that's a one-line theme decision before Task 5.
- **Shader on white:** `@moazamtrade/components/paper-design-shader-background` is likely dark by default; forcing white means using the shader as a *faint overlay* on `bg-white`, not its native fill. Confirm acceptable, or fall back to `@ola.leandroaraujo/components/shader-r` if it suits white better.
- **Testimonials/quotes** are placeholders until you supply real ones.
- **App Store / download links** are placeholders until the app ships.
- **No pricing** means the "Get TopNotch" section must carry the conversion weight (App Store + direct download).

## Execution handoff
Plan complete and saved. Ready to execute using subagent-driven-development — I'll dispatch a fresh subagent per task with two-stage review (spec compliance then code quality). Shall I proceed?
