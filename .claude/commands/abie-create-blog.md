You are now working inside the **Abie Maxey Design System — Blog / Storytelling Mode**. You are creating a new social media post (IG carousel). Apply every rule below without being asked.

**Idea / Brief:** $ARGUMENTS

---

## Step 1 — Interpret the Brief

Before writing any code, think through:

- **Story type** — determines arc and slide count:
  - `personal_moment` → 4–5 slides: Hook image → What happened → What it meant → CTA
  - `travel_place` → 6–7 slides: Hook → Where/When → The Scene → The Insight → The Shift → What Stayed → CTA
  - `life_lesson` → 5–6 slides: Hook → The Before → The Moment → The Lesson → Apply It → CTA
- **Core emotion** — the single feeling driving the story: nostalgia, wonder, grief, joy, restlessness, clarity, belonging, longing.
- **Audience** — nomad, business owner, aspiring freelancer, content creator.
- **Image strategy** — decide per slide which layout mode fits:
  - Hook slide → almost always `FULL_BLEED` (strongest image first)
  - Narrative/scene slides → `HALF_SPLIT` or `FULL_BLEED`
  - Insight/lesson slides → `INSET_CARD` or `TEXT_ONLY`
  - CTA slide → `TEXT_ONLY` or `FULL_BLEED` (soft, peach-toned)
  - Never use the same layout 3 slides in a row.
- **Background rotation for TEXT_ONLY slides:**
  - Reflective/emotional → `dark` → `cream` → `peach`
  - Travel/adventure → `dark` → `charcoal` → `cream`
  - Lesson/growth → `cream` → `dark` → `peach`
  - Never two same-tone back-to-back.
- **Voice check** — before writing any copy, verify each slide passes:
  - **Honest + Specific**: no inspirational fluff. Not "it was tough" → "6 weeks alone in a city where I didn't speak the language"
  - **First person**: Abie's voice, not a narrator.
  - **Numbers exact**: Not "a lot" → "27 countries, 3 years, $1,200/mo."
- **Sticker plan** — pick 1 from emotion map. Place on CTA slide only. Never on Slide 1. See Step 7.

---

## Step 2 — Image Selection

### Zatoka library (auto-select by mood):

| File | Use when |
|------|----------|
| `smile-at-camera.jpg` | Hook slide, direct personal address, "I need to tell you something" |
| `outside-smile-sideview.jpg` | Lifestyle, freedom, casual nomad, lighter content |
| `lake-smile.jpg` | Dreamy, aspirational, peaceful arrival |
| `lake-gaze-above.jpg` | Introspection, looking up, open-ended questions |
| `sideview-in-water.jpg` | Surrender, flow, letting go, "I stopped fighting" |
| `river.jpg` | Journey, change, time passing, transitions |
| `campfire.jpg` | Reflection, vulnerability, late-night thoughts, raw honesty |
| `reading-book-front.jpg` | Learning, study, focused growth |
| `reading-book-at-door.jpg` | Threshold moments, between chapters of life |
| `reading-book-inside-through-window.jpg` | Introspection, rainy days, solitude |
| `read-book-outdoor.jpg` | Nature + learning, outdoor clarity |
| `drinking.jpg` | Celebratory, social, lighter wins |

Image path format: `/assets/zatoka/[filename]`

### Web images (when zatoka doesn't fit):

When the topic calls for food, a city, landscape, object, or scene not in zatoka:
1. Use WebSearch to find a real image URL from Unsplash or Pexels matching the topic.
2. Search query: `site:unsplash.com [topic] photo` or `site:pexels.com [topic]`
3. Embed the direct image URL in `<img src="[url]">`.
4. Add a tiny image credit on that slide (see credit rule in Step 4).
5. If no good web image is found, fall back to `INSET_CARD` with a solid color block instead.

### Image assignment rule:
- Slide 1 (hook): prioritize the most emotionally matched zatoka image OR a web image matching the story's setting.
- Middle slides: alternate zatoka personal shots with web images for variety.
- CTA slide: text-only or the warmest zatoka image (lake, smile).
- Never repeat the same image in one post.

---

## Step 3 — File Structure (mandatory, no exceptions)

Write all new slide code from scratch. You may read existing posts under `src/components/works/` to cross-check a pattern or export shape, but never copy content — only verify structure.

Every post lives in its own folder with individual slide component files:

```
src/components/works/[post-slug]/
  components/
    Slide1.tsx     ← hook / title slide
    Slide2.tsx     ← setup / scene
    Slide3.tsx     ← body / insight 1
    Slide4.tsx     ← body / insight 2
    SlideN.tsx     ← CTA / closer
  index.tsx        ← imports all slides, exports meta + Thumbnail + AllSlides + SLIDES + default carousel
```

**Slug:** kebab-case, matches post title. e.g. `campfire-that-changed-everything`, `lake-and-what-i-learned`.

**Slug dedup (required):** Before writing any files, check if folder exists (PowerShell: `Test-Path src/components/works/[slug]`). If it exists, append `-v2` and check again. Increment until free. Use the final unique slug everywhere.

After creating the folder, register in `src/components/works/index.ts`. Read this file first, then append — never rewrite existing imports.

```ts
import {
  AllSlides as NewPostAllSlides,
  meta as newPostMeta,
  SLIDES as NewPostSlides,
  Thumbnail as NewPostThumb,
} from "./[post-slug]";
import NewPost from "./[post-slug]";

// append to WORKS array:
{
  ...newPostMeta,
  Thumbnail: NewPostThumb,
  Component: NewPost,
  AllSlides: NewPostAllSlides,
  Slides: NewPostSlides,
}
```

---

## Step 4 — Layout Modes

Each `SlideN.tsx` is a **fully custom component** — no shared wrapper. Every slide owns its layout entirely.

```tsx
const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";
```

---

### FULL_BLEED
Image fills entire slide. Dark gradient overlay. All text `#f9f5f2`.
Use for: emotional hooks, strong personal moments, any high-impact opening.

```tsx
export default function SlideN({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/[filename].jpg"; // or web URL
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          color: "#f9f5f2",
          position: "relative",
        }}
      >
        {/* image layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(30,27,26,0.25) 0%, rgba(30,27,26,0.55) 45%, rgba(30,27,26,0.88) 100%)",
            }}
          />
        </div>

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e3a99c", opacity: 0.9 }}>
            ~ dynamic label
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            0N / 0T
          </span>
        </div>

        {/* body — justify-end so text sits in lower third where gradient is darkest */}
        <div className="flex flex-col justify-end flex-1" style={{ zIndex: 10, position: "relative" }}>
          {/* headline + kicker */}
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10, position: "relative" }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>

        {/* sticker layer — zIndex: 2 (above image, below text) */}
      </div>
    </div>
  );
}
```

Headline on FULL_BLEED: 88–120px (leave image breathing room). Kicker: 34–38px, opacity 0.85.

---

### HALF_SPLIT
Left column = image (43% width). Right column = text on brand background.
Use for: narrative/story slides, showing location or moment alongside prose.

```tsx
export default function SlideN({ scale }: { scale: number }) {
  const imgSrc = "/assets/zatoka/[filename].jpg";
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080 * scale, height: 1350 * scale, borderRadius: 18 * scale }}
    >
      <div
        className="absolute top-0 left-0"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          display: "flex",
        }}
      >
        {/* image column */}
        <div style={{ width: 464, height: 1350, flexShrink: 0, position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* text column */}
        <div
          style={{
            flex: 1,
            height: 1350,
            display: "flex",
            flexDirection: "column",
            padding: "72px 72px 72px 48px",
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          {/* row top */}
          <div className="flex justify-between items-start">
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
              ~ dynamic label
            </span>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              0N / 0T
            </span>
          </div>

          {/* body — smaller headline to fit column */}
          <div className="flex flex-col justify-center flex-1">
            {/* headline 72–88px max, kicker 32–34px */}
          </div>

          {/* row bottom */}
          <div className="flex justify-between items-end" style={{ marginTop: "auto" }}>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              abiemaxey.com
            </span>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
              Swipe →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

No sticker on HALF_SPLIT — not enough safe zone. Headline max 88px. Kicker max 34px, maxWidth 460.

---

### INSET_CARD
Text-dominant slide. Image as a contained rounded card in the body area, slightly tilted.
Use for: insight/lesson slides that reference a specific scene.

```tsx
{/* In the body flex column, above headline: */}
<div style={{ marginBottom: 32 }}>
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    src={imgSrc}
    alt=""
    style={{
      width: 460,
      height: 300,
      objectFit: "cover",
      borderRadius: 20,
      display: "block",
      transform: "rotate(-2deg)",
      border: "1px solid rgba(58,58,58,0.12)",
    }}
  />
</div>
{/* headline and kicker follow below */}
```

INSET_CARD uses same background rules as TEXT_ONLY. Card max width 480px, height 280–320px. Tilt range ±3deg, alternate direction per slide.

---

### TEXT_ONLY
No image. Full brand slide — same as abie-create canvas structure.

```tsx
export default function SlideN({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden [dark]"
      style={{
        width: 1080 * scale,
        height: 1350 * scale,
        borderRadius: 18 * scale,
      }}
    >
      <div
        className="absolute top-0 left-0 flex flex-col box-border"
        style={{
          width: 1080,
          height: 1350,
          padding: 72,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* grid texture on dark/charcoal slides */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* row top */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", opacity: 0.9 }}>
            ~ dynamic label
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            0N / 0T
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* headline, kicker, layout elements */}
        </div>

        {/* row bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
            abiemaxey.com
          </span>
          <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
            Swipe →
          </span>
        </div>

        {/* sticker layer — position absolute, zIndex 1 */}
      </div>
    </div>
  );
}
```

### Background colors (TEXT_ONLY + INSET_CARD):

| Name | Rules |
|------|-------|
| dark | `dark` class on outer div, BG `var(--background)`, FG `var(--foreground)` + grid texture |
| cream | BG `var(--background)`, FG `var(--foreground)` + `border: "1px solid rgba(58,58,58,0.08)"` on outer div |
| charcoal | BG `var(--foreground)`, FG `var(--background)` + grid texture |
| peach | BG `var(--primary-soft)`, FG `var(--foreground)` |

Label color: `var(--primary)` on dark/charcoal. `var(--foreground)` opacity 0.55 on cream/peach/HALF_SPLIT.

Last slide: replace "Swipe →" with `~ save · share · steal`.

---

## Step 5 — Typography

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Big headline (full width) | SANS | 120px | 900 | leading 0.9, tracking -0.04em, uppercase |
| Med headline (HALF_SPLIT) | SANS | 80px | 900 | leading 0.92 |
| Serif italic accent `<em>` | SERIF | inherit | 400 | italic, lowercase, tracking 0 |
| Kicker / prose | SERIF | 36–40px | 400 | italic, opacity 0.72–0.85, maxWidth 820 (full) / 460 (split) |
| Scene-setting mono eyebrow | MONO | 22px | 400 | uppercase, tracking 0.2em, opacity 0.5 |
| Image credit (web only) | MONO | 16px | 400 | uppercase, tracking 0.15em, opacity 0.3 |

**Top-left labels** — contextual, never generic. Must use `~` prefix.
Examples: `~ the day it changed`, `~ what I didn't expect`, `~ 3am thought`, `~ looking back`, `~ the scene`, `~ real talk`, `~ what stayed`, `~ worth it`

**Image credit** (web images only) — add to row bottom beside `abiemaxey.com`:
```tsx
<span style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.3 }}>
  Photo: Unsplash
</span>
```

---

## Step 6 — Layout Elements

### Storytelling-specific elements:

**Scene-setter eyebrow** — above headline, sets location/time:
```tsx
<div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
  <div style={{ width: 32, height: 2, background: "var(--primary)", borderRadius: 1 }} />
  <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
    Madrid · March 2024
  </span>
</div>
```

**Pull quote block** — for the core emotional sentence of the story:
```tsx
<div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 36, marginTop: 36 }}>
  <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 44, lineHeight: 1.4, margin: 0, opacity: 0.88 }}>
    "The sentence that hit different."
  </p>
</div>
```

**Moment stamp** — date/place/feeling triple on one row:
```tsx
<div style={{ display: "flex", gap: 48, marginTop: 40 }}>
  {[
    { label: "where", value: "Madrid" },
    { label: "when", value: "March" },
    { label: "feeling", value: "lost" },
  ].map(({ label, value }) => (
    <div key={label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: MONO, fontSize: 18, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
        {label}
      </span>
      <span style={{ fontFamily: SANS, fontWeight: 900, fontSize: 42, letterSpacing: "-0.04em", textTransform: "uppercase" }}>
        {value}
      </span>
    </div>
  ))}
</div>
```

**Lesson pill row** — for life-lesson slides, 2–3 short takeaways:
```tsx
<div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
  {["Lesson one short.", "Lesson two short.", "Lesson three."].map((lesson, i) => (
    <div
      key={i}
      style={{
        display: "flex", alignItems: "center", gap: 20,
        background: "rgba(58,58,58,0.05)",
        border: "1px solid rgba(58,58,58,0.1)",
        borderRadius: 16, padding: "20px 28px",
      }}
    >
      <span style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.2em", opacity: 0.4, minWidth: 40 }}>
        0{i + 1}
      </span>
      <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1.3, margin: 0 }}>
        {lesson}
      </p>
    </div>
  ))}
</div>
// dark bg: background rgba(249,245,242,0.04), border rgba(249,245,242,0.08)
```

**Decorative divider** — between headline and kicker:
```tsx
<div style={{ width: 48, height: 3, background: "var(--primary)", borderRadius: 2, margin: "28px 0" }} />
```

### All abie-create layout elements also available:
Prompt/quote block, formula chips, compare grid, highlight chip, numbered list, terminal card, bar chart, icon-anchored list, big stat display, pull quote slide, CTA pill, background accent shapes, gradient headline treatment, checklist layout, moment stamp.

---

## Step 7 — Sticker Usage

Place 1–2 stickers per post by default. Placement: top-right (`right 96–140, top 140–240`) or lower-right (`right 96–130, bottom 320–500`). Rotate ±4–12deg.

- Default: CTA slide only. Never on Slide 1 (hook).
- Never place over readable text or key data.
- Never on HALF_SPLIT slides.
- On FULL_BLEED: `zIndex: 2` (above image, below text `zIndex: 10`). Size 180–200px.
- On TEXT_ONLY: `zIndex: 1`, size 200–240px.

```tsx
{/* eslint-disable-next-line @next/next/no-img-element */}
<img
  src="/assets/stickers/[name].png"
  alt=""
  style={{
    position: "absolute",
    right: 128,
    top: 192,
    width: 220,
    height: 220,
    objectFit: "contain",
    transform: "rotate(8deg)",
    zIndex: 2,
  }}
/>
```

**Sticker emotion map:**

| Sticker | Use when |
|---------|----------|
| `announce-megaphone` | Hook slide, "you need to hear this" |
| `cta-point-viewers` | CTA closer, pointing at audience |
| `frown-concerned` | Vulnerability, raw honesty, "before" state |
| `idea` | Big reveal, "then I realized" moment |
| `ok-sign` | Positive closer, validation |
| `on-computer` | Nomad work, lifestyle content |
| `pointing-left-explain` | Lesson slides, "here's what I learned" |
| `shocked-hands-on-face` | Shock hook, unexpected truth |
| `side-eye-skeptical` | Calling out bad advice, "most people think" |
| `smile-confident` | Warm personal intro, light closer |
| `thinking` | Mindset shift, reflection |
| `thinking-point-head` | Deep insight, "I didn't know this" |

---

## Step 8 — index.tsx Template

```tsx
"use client";

import { useState } from "react";
import Slide1 from "./components/Slide1";
// import remaining slides...

const SANS = "var(--font-host-grotesk)";

export const SLIDES = [Slide1 /*, Slide2, ... */];

export const meta = {
  id: "[post-slug]",
  title: "[Post Title]",
  topic: "[Topic]",
  createdAt: "[YYYY-MM-DD]",
  slideCount: SLIDES.length,
};

export function Thumbnail() {
  return <Slide1 scale={220 / 1080} />;
}

export function AllSlides() {
  return (
    <div className="flex flex-col items-center gap-4">
      {SLIDES.map((SlideComponent, i) => (
        <SlideComponent key={i} scale={500 / 1080} />
      ))}
    </div>
  );
}

export default function PostNamePost() {
  const [current, setCurrent] = useState(0);
  const SlideComponent = SLIDES[current];
  const isFirst = current === 0;
  const isLast = current === SLIDES.length - 1;

  return (
    <div className="flex flex-col items-center gap-6">
      <SlideComponent scale={500 / 1080} />
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCurrent((c) => c - 1)}
          disabled={isFirst}
          className="rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: SANS,
            background: isFirst ? "var(--secondary)" : "var(--foreground)",
            color: isFirst ? "var(--muted-foreground)" : "var(--background)",
          }}
        >
          ← PREV
        </button>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-[7px] rounded-full border-none cursor-pointer p-0 transition-all duration-200"
              style={{
                width: i === current ? 20 : 7,
                background: i === current ? "var(--primary)" : "var(--border)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((c) => c + 1)}
          disabled={isLast}
          className="rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: SANS,
            background: isLast ? "var(--secondary)" : "var(--foreground)",
            color: isLast ? "var(--muted-foreground)" : "var(--background)",
          }}
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
```

---

## Brand Rules (always active)

**Stack:** Next.js + Tailwind v4 + shadcn. Fonts via `layout.tsx`. Tokens in `globals.css` — never redeclare.

**Headline:** UPPERCASE sans + `<em>` italic serif accent. 80% of headlines follow this pattern.

**Tilde ~ not em-dash.** Never `—` or `–`. Use period, comma, or restructure instead.

**Primary = highlighter.** `#e3a99c` on accent words, button fills. Never a full background.

**Peach surfaces use `--primary-soft`.** Never `--primary` as full-slide background.

**Buttons = pills.** `border-radius: 9999px`. UPPERCASE. `→` internal. No shadow.

**No shadows.** Depth via `border` + `background` only.

**Mono labels everywhere.** 22px canvas, uppercase, tracking 0.2em, opacity 0.4–0.55.

**Copy voice:** Direct, personal, specific. Short sentences. First person. Numbers exact.
- ❌ "It was a tough time" → ✅ "6 weeks alone in a city where I didn't speak the language"
- ❌ "I learned a lot" → ✅ "I learned I'd been optimizing for the wrong thing for 3 years"

**Token Quick Reference:**

| Token | Value |
|-------|-------|
| `--primary` | #e3a99c (dusty peach) |
| `--background` | #f9f5f2 (warm off-white) |
| `--foreground` | #3a3a3a (charcoal) |
| `--secondary` | #e7ddd3 (warm sand) |
| `--muted-foreground` | #6b6b6b |
| `--tr-mono` | 0.2em |
