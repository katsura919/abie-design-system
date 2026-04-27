---
name: abie-create-blog
description: Generate premium IG carousels (4:5 portrait) for storytelling — personal moments, travel, life lessons. Same Abie Maxey Design System as abie-create but image-forward with zatoka photos and web-sourced images.
---

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
  - Never use same layout 3 slides in a row.
- **Background rotation for TEXT_ONLY slides:**
  - Reflective/emotional → `dark` → `cream` → `peach`
  - Travel/adventure → `dark` → `charcoal` → `cream`
  - Lesson/growth → `cream` → `dark` → `peach`
  - Never two same-tone back-to-back.
- **Sticker plan** — pick 1–2 from emotion map. Place without asking. See Step 6.

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

When topic calls for food, city, landscape, object, or scene not in zatoka:
1. Use WebSearch to find a real image URL from Unsplash or Pexels matching the topic.
2. Search query format: `site:unsplash.com [topic] photo` or `site:pexels.com [topic]`
3. Embed the direct image URL in `<img src="[url]">`.
4. Add tiny image credit on that slide (see credit rule in Step 4).
5. If no good web image found, fall back to `INSET_CARD` with a color block instead.

### Image assignment rule:
- Slide 1 (hook): prioritize zatoka `smile-at-camera` OR the most emotionally matched zatoka image OR web image matching the story's setting.
- Middle slides: alternate zatoka personal shots with web images for variety.
- CTA slide: text-only or the warmest/softest zatoka image (lake, smile).
- Never repeat the same image in one post.

---

## Step 3 — File Structure (mandatory, no exceptions)

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

**Slug dedup (required):** Before writing any files, check if folder exists (PowerShell: `Test-Path src/components/works/[slug]`). If exists, append `-v2`, increment until free. Use final unique slug everywhere.

After creating folder, register in `src/components/works/index.ts`. Read first, append — never rewrite existing imports.

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

### FULL_BLEED
Image fills entire slide. Dark gradient overlay. All text white (`#f9f5f2`).
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
          {/* gradient: stronger at bottom so text reads */}
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

        {/* body */}
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

        {/* sticker layer zIndex: 1 */}
      </div>
    </div>
  );
}
```

On FULL_BLEED: `justify-end flex-1` for body (text sits in bottom third where gradient is darkest). Headline can be smaller (88–120px) to leave image breathing room.

---

### HALF_SPLIT
Left column = image (45% width). Right column = text on brand background.
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
        <div style={{ width: 468, height: 1350, flexShrink: 0, position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* subtle right-edge fade into text bg */}
          <div
            style={{
              position: "absolute",
              top: 0, right: 0, width: 80, height: "100%",
              background: "linear-gradient(to right, transparent, var(--background))",
            }}
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
          <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.55 }}>
              ~ dynamic label
            </span>
            <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4 }}>
              0N / 0T
            </span>
          </div>

          {/* body */}
          <div className="flex flex-col justify-center flex-1">
            {/* headline + kicker — use smaller sizes: med (88px) or 72px to fit column */}
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

HALF_SPLIT headline sizes: 72–88px max (narrower column). Kicker 32–36px. No sticker on HALF_SPLIT (not enough safe zone).

---

### INSET_CARD
Text-dominant slide. Image as a contained rounded card, slightly tilted, positioned in the body area.
Use for: insight/lesson slides within a story, when image illustrates a specific detail.

```tsx
{/* In the body flex column: */}
<div style={{ position: "relative", marginBottom: 32 }}>
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img
    src={imgSrc}
    alt=""
    style={{
      width: 420,
      height: 280,
      objectFit: "cover",
      borderRadius: 20,
      display: "block",
      transform: "rotate(-2deg)",
      boxShadow: "none",
      border: "1px solid rgba(58,58,58,0.12)",
    }}
  />
</div>
{/* headline and kicker follow below the image card */}
```

INSET_CARD uses same background rules as TEXT_ONLY (dark / cream / charcoal / peach). Image card max width 480px, height 280–340px. Tilt range: -3deg to +3deg, alternate direction each card.

---

### TEXT_ONLY
No image. Identical to abie-create slide structure. Use all layout elements from abie-create Step 4 (prompt blocks, numbered lists, formula chips, compare grids, terminal cards, bar charts).

Canvas boilerplate: same as abie-create Step 3 (full width/height, brand bg, row top, body center, row bottom).

---

## Step 5 — Slide Component Constants

```tsx
const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";
```

### Typography sizes (1080×1350 canvas):

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Big headline (full width) | SANS | 120px | 900 | leading 0.9, tracking -0.04em, uppercase |
| Med headline (HALF_SPLIT col) | SANS | 80px | 900 | leading 0.92 |
| Serif italic accent `<em>` | SERIF | inherit | 400 | italic, lowercase, tracking 0 |
| Kicker / prose | SERIF | 36–40px | 400 | italic, opacity 0.72–0.85, maxWidth 820 (full) / 500 (split) |
| Scene-setting mono eyebrow | MONO | 22px | 400 | uppercase, tracking 0.2em, opacity 0.5 |
| Image credit | MONO | 16px | 400 | uppercase, tracking 0.15em, opacity 0.3 — bottom of slide |

### Dynamic top-left labels (contextual, never generic):

Examples for blog storytelling:
- `~ the day it changed`, `~ what I didn't expect`, `~ 3am thought`, `~ looking back`, `~ the scene`, `~ real talk`, `~ what stayed`, `~ worth it`

Label color: `#e3a99c` (var(--primary)) on FULL_BLEED and dark/charcoal slides. `var(--foreground)` opacity 0.55 on cream/peach/HALF_SPLIT.

### Image credit (web images only):

Add to row bottom, replacing or beside `abiemaxey.com`:
```tsx
<span style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.3 }}>
  Photo: Unsplash
</span>
```

---

## Step 6 — Storytelling Layout Elements

These complement the abie-create layout elements. Use both sets as needed.

**Scene-setter eyebrow** — above headline, sets location/time:
```tsx
<div style={{ display: "flex", align-items: "center", gap: 16, marginBottom: 24 }}>
  <div style={{ width: 32, height: 2, background: "var(--primary)", borderRadius: 1 }} />
  <span style={{ fontFamily: MONO, fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.6 }}>
    Madrid · March 2024
  </span>
</div>
```

**Pull quote block** — for the core emotional sentence of the story:
```tsx
<div
  style={{
    borderLeft: "3px solid var(--primary)",
    paddingLeft: 36,
    marginTop: 36,
  }}
>
  <p
    style={{
      fontFamily: SERIF,
      fontStyle: "italic",
      fontSize: 44,
      lineHeight: 1.4,
      margin: 0,
      opacity: 0.88,
    }}
  >
    "The sentence that hit different."
  </p>
</div>
```

**Moment stamp** — date/place/feeling triple on a single row:
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

**Lesson pill row** — for life-lesson slides, 2–3 short takeaways as chips:
```tsx
<div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
  {["Lesson one short.", "Lesson two short.", "Lesson three."].map((lesson, i) => (
    <div
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        background: "rgba(58,58,58,0.05)",
        border: "1px solid rgba(58,58,58,0.1)",
        borderRadius: 16,
        padding: "20px 28px",
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
```

All abie-create layout elements (numbered list, formula chips, compare grid, highlight chip, CTA pill, terminal card, bar chart, icon-anchored list) are also available — use when the story's content calls for them.

---

## Step 7 — Sticker Usage

Same rules as abie-create. Place 1–2 stickers per post by default. Blog-specific emotion map additions:

| Sticker | Blog use |
|---------|----------|
| `crying_tears` | Vulnerability, "I've been there", raw honesty slides |
| `campfire` (if exists) | Reflective / campfire story vibes |
| `sitting_with_laptop` | Nomad lifestyle, freedom moment |
| `smiling_portrait` | Warm personal hook |
| `lake-gaze-above` | Do NOT use as sticker — it's a photo |
| `excited_sparkles` | Revelation, "then I realized" moment |
| `winking_peace` | Light CTA closer |
| `thinking_ellipsis` | "I didn't know this" setup |

Placement rules identical to abie-create Step 5. Safe zones: top-right (`right 96–140, top 140–240`) or lower-right (`right 96–130, bottom 320–500`). Never on HALF_SPLIT slides.

On FULL_BLEED slides: sticker `zIndex: 2` (above image, behind text which is `zIndex: 10`). Reduce size to 180–200px on image slides so it doesn't compete.

---

## Step 8 — index.tsx Template

Identical to abie-create Step 6. Use the same carousel navigation component, `meta` shape, `SLIDES` array, `Thumbnail`, `AllSlides`, and default export.

```tsx
export const meta = {
  id: "[post-slug]",
  title: "[Post Title]",
  topic: "[Topic]",
  createdAt: "[YYYY-MM-DD]",
  slideCount: SLIDES.length,
};
```

---

## Brand Rules (always active)

All abie-create brand rules apply identically:

- **Stack:** Next.js + Tailwind v4 + shadcn. Fonts via `layout.tsx`. Tokens in `globals.css` — never redeclare.
- **Headline:** UPPERCASE sans + `<em>` italic serif accent. 80% of headlines follow this.
- **Tilde ~ not em-dash.** Never `—`.
- **Primary = highlighter.** `#e3a99c` on accents. Never full background.
- **No shadows.** Depth via `border` + `background` only. (Exception: `box-shadow: none` explicit on image cards.)
- **Mono labels everywhere.** Counter, watermark, eyebrow: 22px canvas, uppercase, tracking 0.2em, opacity 0.4–0.55.
- **Copy voice:** Direct, personal, specific. Short sentences. First person. Numbers always specific.
  - ❌ "It was a tough time" → ✅ "6 weeks alone in a city where I didn't speak the language"
  - ❌ "I learned a lot" → ✅ "I learned I'd been optimizing for the wrong thing for 3 years"
- **Buttons = pills.** `border-radius: 9999px`. UPPERCASE. No shadow.

**Token Quick Reference:**

| Token | Value |
|-------|-------|
| `--primary` | #e3a99c (dusty peach) |
| `--background` | #f9f5f2 (warm off-white) |
| `--foreground` | #3a3a3a (charcoal) |
| `--secondary` | #e7ddd3 (warm sand) |
| `--muted-foreground` | #6b6b6b |
| `--tr-mono` | 0.2em |
