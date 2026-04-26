---
name: abie-create
description: Generate premium IG carousels (4:5 portrait) in Abie Maxey Design System.
---
You are now working inside the **Abie Maxey Design System**. You are creating a new social media post (IG carousel). Apply every rule below without being asked.

**Idea / Brief:** $ARGUMENTS

---

## Step 1 — Interpret the Brief

Before writing any code, think through:

- **Core message** — strip to one sentence.
- **Audience** — nomad, business owner, aspiring freelancer, content creator.
- **Emotional hook** — frustration, aspiration, curiosity, FOMO, relief, validation.
- **Slide count** — 5–8 is ideal. Arc: hook → problem → insight(s) → shift → CTA.
- **Background rotation that fits the tone:**
  - High-energy / provocative → start `dark`, mix `charcoal`
  - Warm / aspirational → start `cream`, accent with `peach`
  - Educational / step-by-step → `dark` → `cream` alternating, `peach` for formula/CTA slides
  - Never two same-tone back-to-back. Standard rotation: dark → cream → charcoal → peach → dark → cream → peach.
- **Layout per slide** — pick from the layout elements below based on what the content needs. Not every slide is just a headline + kicker. Use prompt blocks for quotes/examples, formula chips for frameworks, compare grids for contrasts, numbered lists for steps.
- **Sticker plan** — pick 1–2 stickers automatically from the emotion map and place them without asking. See Step 5.
- **Visual treatment** — auto-select based on brief. No asking:
  - Brief mentions tools / apps / platforms / software → use **icon-anchored list** (Lucide icons) on insight slides
  - Brief has stats / percentages / rankings / growth numbers → use **bar chart** on at least one data slide
  - Brief mentions prompt / command / AI output / terminal / "what I typed" → use **terminal card** on that slide
  - Steps / frameworks / formulas → numbered list or formula chips (existing)
  - Default → standard headline + kicker
  - Mix treatments across slides when brief spans multiple types

---

## Step 2 — File Structure (mandatory, no exceptions)

**DO NOT read any existing files under `src/components/works/`.** Write all code from scratch using only the rules in this skill. Do not Glob, Read, or Grep any existing post folder — not to "check patterns", not for any reason.

Every post lives in its own folder with individual slide component files:

```
src/components/works/[post-slug]/
  components/
    Slide1.tsx     ← hook / title slide
    Slide2.tsx     ← problem / setup
    Slide3.tsx     ← insight or step 1
    Slide4.tsx     ← insight or step 2
    SlideN.tsx     ← CTA / closer
  index.tsx        ← imports all slides, exports meta + Thumbnail + default carousel
```

**Slug:** kebab-case, matches the post title. e.g. `stop-using-chatgpt-like-this`, `move-to-spain-playbook`.

**Slug dedup (required):** Before writing any files, run `test -d src/components/works/[slug] && echo exists` via Bash. If it outputs `exists`, append `-v2` to the slug and check again. Increment suffix (`-v3`, `-v4`) until the path is free. Use the final unique slug everywhere (folder, `meta.id`, imports).

After creating the folder, register in `src/components/works/index.ts`. Only read this one file for the registration step — do not read any other files in `src/components/works/`.

```ts
import { meta as newMeta, Thumbnail as NewThumb } from "./[post-slug]";
import NewPost from "./[post-slug]";

export const WORKS: Work[] = [
  { ...newMeta, Thumbnail: NewThumb, Component: NewPost },
];
```

---

## Step 3 — Slide Component Rules

Each `SlideN.tsx` is a **fully custom component** — no shared `<Slide />` wrapper. Every slide owns its layout entirely.

### Canvas boilerplate:

Each slide is custom. No generic wrapper. Use Tailwind CSS utility classes where possible, and inline styles only for precise scale math or custom CSS variables.

```tsx
const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function SlideN({ scale }: { scale: number }) {
  return (
    <div
      className="relative overflow-hidden"
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
          backgroundColor: "var(--background)", // use var(--background), var(--primary-soft), etc.
          color: "var(--foreground)", // use var(--foreground), etc.
        }}
      >
        {/* row top — always z-10 */}
        <div className="flex justify-between items-start" style={{ zIndex: 10 }}>
          {/* label + slide counter */}
        </div>

        {/* body — MUST use justify-center flex-1 to vertically center content */}
        <div className="flex flex-col justify-center flex-1" style={{ zIndex: 10 }}>
          {/* headline, kicker, layout elements */}
        </div>

        {/* row bottom — marginTop auto pushes to bottom */}
        <div className="flex justify-between items-end" style={{ marginTop: "auto", zIndex: 10 }}>
          {/* abiemaxey.com + Swipe → */}
        </div>

        {/* sticker layer — position absolute, zIndex 1 (behind text) */}
      </div>
    </div>
  );
}
```

### Background colors (map to global.css variables):

| Name     | Theme rules                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------- |
| dark     | add `dark` class to container, BG `var(--background)`, FG `var(--foreground)` + grid texture                |
| cream    | BG `var(--background)`, FG `var(--foreground)` + add `border: "1px solid rgba(58,58,58,0.08)"` on outer div |
| charcoal | BG `var(--foreground)`, FG `var(--background)` + grid texture                                               |
| peach    | BG `var(--primary-soft)`, FG `var(--foreground)`                                                            |

**Grid texture** (dark + charcoal slides):

```tsx
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage:
      "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
  }}
/>
```

### Typography sizes (at 1080x1350 canvas scale):

| Element                      | Font  | Size    | Weight | Notes                                       |
| ---------------------------- | ----- | ------- | ------ | ------------------------------------------- |
| Mega headline                | SANS  | 168px   | 900    | leading 0.86, tracking -0.04em, uppercase   |
| Big headline                 | SANS  | 120px   | 900    | leading 0.9                                 |
| Med headline                 | SANS  | 88px    | 900    | leading 0.95                                |
| Serif italic accent (`<em>`) | SERIF | inherit | 400    | italic, lowercase, tracking 0               |
| Kicker / body                | SERIF | 36–40px | 400    | italic, opacity 0.7–0.85, maxWidth 820      |
| Mono label / counter / url   | MONO  | 22px    | 400    | uppercase, tracking 0.2em, opacity 0.4–0.55 |
| Prompt block quote           | SERIF | 36px    | 400    | italic                                      |
| Prompt block label           | MONO  | 18px    | 400    | uppercase, tracking 0.2em                   |

### Row top (every slide):

**Top-Left Label**: Do not use generic labels like "~ the hook" or "~ insight 1". Make them dynamic and contextual to the slide's content. Examples: "~ what changed", "~ the secret", "~ fast track". Must include the tilde `~` prefix.

```tsx
<div className="flex justify-between items-start z-10">
  <span
    style={{
      fontFamily: MONO,
      fontSize: 22,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: labelColor,
      opacity: labelOpacity,
    }}
  >
    ~ dynamic label
  </span>
  <span
    style={{
      fontFamily: MONO,
      fontSize: 22,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      opacity: 0.4,
    }}
  >
    0N / 0T
  </span>
</div>
```

Label is `var(--primary)` on dark/charcoal slides, `var(--foreground)` with opacity on cream/peach slides.

### Row bottom (every slide):

```tsx
<div className="flex justify-between items-end" style={{ marginTop: "auto" }}>
  <span
    style={{
      fontFamily: MONO,
      fontSize: 22,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      opacity: 0.4,
    }}
  >
    abiemaxey.com
  </span>
  <span
    style={{
      fontFamily: MONO,
      fontSize: 22,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      opacity: 0.55,
    }}
  >
    Swipe →
  </span>
</div>
```

Last slide: replace "Swipe →" with `~ save · share · steal`.

---

## Step 4 — Layout Elements (match to content)

**Prompt / quote block** — use for "what people actually type" or example prompts:

```tsx
// Dark variant:
<div
  style={{
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 24,
    padding: "40px 48px",
    marginTop: 36,
  }}
>
  <span
    style={{
      fontFamily: MONO,
      fontSize: 18,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#e3a99c",
      marginBottom: 14,
      display: "block",
    }}
  >
    ~ label
  </span>
  <p
    style={{
      fontFamily: SERIF,
      fontStyle: "italic",
      fontSize: 36,
      lineHeight: 1.5,
      margin: 0,
    }}
  >
    quote
  </p>
</div>
// Cream variant: bg rgba(58,58,58,0.04), border rgba(58,58,58,0.12)
```

**Formula chips** — use for frameworks with named parts (Role + Task + Context...):

```tsx
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "16px 14px",
    marginTop: 40,
    alignItems: "center",
  }}
>
  {CHIPS.flatMap((chip, i, arr) => [
    <span
      key={chip}
      style={{
        fontFamily: SANS,
        fontWeight: 900,
        fontSize: 38,
        textTransform: "uppercase",
        background: "rgba(58,58,58,0.92)",
        color: "#f9f5f2",
        padding: "14px 24px",
        borderRadius: 9999,
      }}
    >
      {chip}
    </span>,
    ...(i < arr.length - 1
      ? [
          <span
            key={`+${i}`}
            style={{ fontFamily: MONO, fontSize: 32, opacity: 0.5 }}
          >
            +
          </span>,
        ]
      : []),
  ])}
</div>
```

On peach slides use charcoal chips with cream text.

**Compare grid** — use for "most people vs top performers" or before/after:

```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 36,
  }}
>
  <div
    style={{
      background: "rgba(58,58,58,0.06)",
      border: "1px solid rgba(58,58,58,0.12)",
      borderRadius: 24,
      padding: 36,
    }}
  >
    <div
      style={{
        fontFamily: MONO,
        fontSize: 18,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#c47373",
        marginBottom: 16,
      }}
    >
      ~ Most people
    </div>
    <p
      style={{
        fontFamily: SANS,
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "-0.04em",
        fontSize: 56,
        lineHeight: 0.95,
        margin: 0,
      }}
    >
      Headline{" "}
      <em
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontWeight: 400,
          textTransform: "lowercase",
          letterSpacing: 0,
          opacity: 0.8,
        }}
      >
        accent
      </em>
    </p>
  </div>
  <div
    style={
      {
        /* same box */
      }
    }
  >
    <div style={{ color: "#e3a99c" }}>~ Top performers</div>
    ...
  </div>
</div>
```

**Highlight chip** — inline word emphasis inside kicker/body:

```tsx
<span
  style={{
    display: "inline-block",
    background: "#e3a99c",
    color: "#3a3a3a",
    padding: "4px 18px",
    borderRadius: 12,
    fontFamily: SANS,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "-0.04em",
    fontSize: 32,
  }}
>
  word
</span>
```

**Numbered list** — use for steps, lessons, tips:

```tsx
<div
  style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 32 }}
>
  {ITEMS.map((item, i) => (
    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
      <span
        style={{
          fontFamily: MONO,
          fontSize: 22,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          opacity: 0.5,
          minWidth: 56,
          paddingTop: 12,
        }}
      >
        0{i + 1}
      </span>
      <p
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: 38,
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {item}
      </p>
    </div>
  ))}
</div>
```

**Terminal card** — use for AI prompts, commands, "what I actually typed", before/after outputs. Adapts to slide bg:

```tsx
// isDark = slide is dark or charcoal theme
// High contrast is mandatory; terminal must not blend into background
const termBg = isDark ? "rgba(249,245,242,0.06)" : "rgba(30,27,26,0.08)";
const termBorder = isDark ? "rgba(249,245,242,0.18)" : "rgba(30,27,26,0.18)";

<div
  style={{
    background: termBg,
    border: `1px solid ${termBorder}`,
    borderRadius: 24,
    padding: "40px 48px",
    marginTop: 36,
  }}
>
  {/* window dots */}
  <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        style={{
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "currentColor",
          display: "inline-block",
          opacity: 0.2,
        }}
      />
    ))}
  </div>
  {/* prompt */}
  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
    <span
      style={{
        fontFamily: MONO,
        fontSize: 28,
        color: "var(--primary)",
        opacity: 0.9,
        lineHeight: 1.6,
      }}
    >
      $
    </span>
    <p
      style={{
        fontFamily: MONO,
        fontSize: 26,
        lineHeight: 1.6,
        margin: 0,
        opacity: 0.88,
      }}
    >
      {command}
    </p>
  </div>
  {/* output — only if slide shows result */}
  <p
    style={{
      fontFamily: SERIF,
      fontStyle: "italic",
      fontSize: 32,
      lineHeight: 1.5,
      marginTop: 20,
      opacity: 0.75,
      borderTop: `1px solid ${termBorder}`,
      paddingTop: 20,
    }}
  >
    {output}
  </p>
</div>;
```

**Horizontal bar chart** — use for rankings, comparisons, stats with numbers. Inline SVG, no chart lib:

```tsx
const BAR_DATA = [
  { label: "Tool A", value: 92 },
  { label: "Tool B", value: 78 },
  { label: "Tool C", value: 61 },
];
const maxVal = Math.max(...BAR_DATA.map((d) => d.value));
// trackColor adapts to bg: light on dark, dark on cream
const trackColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(58,58,58,0.08)";

<div
  style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 40 }}
>
  {BAR_DATA.map(({ label, value }, i) => (
    <div
      key={label}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontFamily: MONO,
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: SANS,
            fontWeight: 900,
            fontSize: 36,
            letterSpacing: "-0.04em",
          }}
        >
          {value}%
        </span>
      </div>
      <div
        style={{
          height: 14,
          background: trackColor,
          borderRadius: 7,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(value / maxVal) * 100}%`,
            background: i === 0 ? "var(--primary)" : "currentColor",
            opacity: i === 0 ? 1 : 0.35 - i * 0.05,
            borderRadius: 7,
          }}
        />
      </div>
    </div>
  ))}
</div>;
```

**Icon-anchored list** — use for tools, features, benefits. Import Lucide icons matching content:

```tsx
import { Zap, Globe, Brain, Layers, Target } from "lucide-react";

const ITEMS = [
  { icon: Zap, label: "Tool Name", body: "what it does in one line" },
  { icon: Brain, label: "Tool Name", body: "what it does in one line" },
];

<div
  style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 36 }}
>
  {ITEMS.map(({ icon: Icon, label, body }, i) => (
    <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div
        style={{
          width: 60,
          height: 60,
          background: "var(--primary)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={30} color="#3a3a3a" />
      </div>
      <div>
        <p
          style={{
            fontFamily: SANS,
            fontWeight: 900,
            fontSize: 36,
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            margin: "0 0 8px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: 30,
            lineHeight: 1.4,
            margin: 0,
            opacity: 0.7,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  ))}
</div>;
```

**CTA pill** — last slide only:

```tsx
<div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 24,
    background: "#1e1b1a",
    color: "#f9f5f2",
    borderRadius: 9999,
    padding: "14px 14px 14px 48px",
    fontFamily: SANS,
    fontWeight: 700,
    fontSize: 32,
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    marginTop: 40,
    alignSelf: "flex-start",
  }}
>
  Drop a comment
  <span
    style={{
      width: 60,
      height: 60,
      background: "#e3a99c",
      color: "#3a3a3a",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 28,
    }}
  >
    →
  </span>
</div>
```

---

## Step 5 — Sticker Usage

Place inside the 1080x1350 canvas div with `position: absolute`. Add 1–2 stickers per post by default. Never cover headline text. Common positions: top-right `right: 128, top: 192` or mid-right `right: 112, bottom: 440`. Rotate ±4–12deg.

Mandatory behavior:

- Always choose sticker(s) from the emotion map based on context.
- Default placement is hook slide + CTA slide unless another slide has a better emotional match.
- Do not ask the user whether stickers should be added.
- Never place stickers over readable text or key data blocks.
- Treat this as a blocked text area on every slide: `left 72 -> right 820`, `top 160 -> bottom 1080`.
- Use safe decoration zones: top-right (`right 96-140`, `top 140-240`) or lower-right (`right 96-130`, `bottom 320-500`).
- If slide is text-heavy, reduce sticker size to `170-200` instead of `240`.
- Keep stickers behind text layers: sticker `zIndex: 1`, text/content `zIndex: 10`.

```tsx
{
  /* eslint-disable-next-line @next/next/no-img-element */
}
<img
  src="/assets/stickers/[name].png"
  alt=""
  style={{
    position: "absolute",
    right: 128,
    top: 192,
    width: 240,
    height: 240,
    objectFit: "contain",
    transform: "rotate(8deg)",
  }}
/>;
```

**Sticker → emotion map:**

| Sticker                  | Use when...                                       |
| ------------------------ | ------------------------------------------------- |
| `shouting_megaphone`     | Title/hook slide — "you need to hear this" energy |
| `thumbs_up`              | CTA / closer — positive closer                    |
| `thinking_ellipsis`      | Mindset shift, "most people think..."             |
| `excited_sparkles`       | Big reveal, aspirational outcome                  |
| `working_on_laptop`      | Systems, productivity, hustle content             |
| `sitting_with_laptop`    | Lifestyle, freedom, nomad content                 |
| `winking_peace`          | Light/fun closer                                  |
| `overwhelmed_shocked`    | "Stop doing this" shock hook                      |
| `laughing_ha`            | Relatable pain, self-aware humor                  |
| `smiling_portrait`       | Warm personal intro                               |
| `sad_worried`            | The "before" state, problem slide                 |
| `angry_crossed_arms`     | Frustration hook, rant energy                     |
| `shocked_worried`        | "I didn't know this" moment                       |
| `sleepy_zzz`             | Old way, missed opportunity                       |
| `furious_on_fire`        | High-energy provocation                           |
| `crying_tears`           | Vulnerability, "I've been there"                  |
| `holding_yt`             | YouTube / content creation posts                  |
| `move_to_spain_playbook` | Spain / nomad / location posts                    |

---

## Step 6 — index.tsx Template

```tsx
"use client";

import { useState } from "react";
import Slide1 from "./components/Slide1";
// import remaining slides...

const SANS = "var(--font-host-grotesk)";
const SLIDES = [Slide1 /*, Slide2, ... */];

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

**Tilde ~ not em-dash.** Section labels, inline asides, subtitles. Never `—`.

**Primary = highlighter.** `#e3a99c` on accent words, button fills, hover borders. Never a full section background.

**Peach surfaces use `--primary-soft`.** Do not use `--primary` as full-slide or large-card background.

**Buttons = pills.** `border-radius: 9999px`. UPPERCASE. `→` internal, `↗` external. No shadow.

**No shadows.** Depth via `border` + `background` only.

**Mono labels everywhere.** Counter, watermark, eyebrow: 22px (canvas) / 9–11px (UI), uppercase, tracking 0.2em, opacity 0.4–0.55.

**Specificity over inspiration.**

- ❌ "Affordable living" → ✅ "~$1,200/mo runway in Madrid"
- ❌ "I traveled a lot" → ✅ "27 countries and a weak passport later"

**Copy voice:** Direct, nomad-smart, no corporate filler. Short sentences. First person. Numbers are always specific.

**Token Quick Reference:**

| Token                | Value                    |
| -------------------- | ------------------------ |
| `--primary`          | #e3a99c (dusty peach)    |
| `--background`       | #f9f5f2 (warm off-white) |
| `--foreground`       | #3a3a3a (charcoal)       |
| `--secondary`        | #e7ddd3 (warm sand)      |
| `--muted-foreground` | #6b6b6b                  |
| `--tr-mono`          | 0.2em                    |

