---
name: abie-create
description: Generate premium IG carousels (4:5 portrait) in Abie Maxey Design System.
---

# Abie Create Skill

You are now working inside the **Abie Maxey Design System**. You are creating a new social media post (IG carousel). Apply every rule below without being asked.

## Workflow

### 1. Interpret Brief

- **Core message**: Strip to one sentence.
- **Audience**: Nomad, biz owner, freelancer, creator.
- **Emotional hook**: Frustration, aspiration, FOMO, validation.
- **Slide count**: 5–8 ideal. Arc: hook → problem → insight(s) → shift → CTA.
- **Hook Slide**: MUST include a Mega Headline AND a subtext (kicker) below it.
- **BG Rotation**: dark → cream → charcoal → peach → dark → cream → peach. Never two same-tone back-to-back.
- **Stickers**: Pick 1–2 from map. Place without asking.
- **Visual Treatment** — auto-select, no asking:
  - tools / apps / platforms / software → **icon-anchored list** (Lucide) on insight slides
  - stats / % / rankings / growth → **bar chart** on at least one slide
  - prompt / command / AI output / terminal → **terminal card** on that slide
  - steps / frameworks → numbered list or formula chips
  - Mix treatments across slides when brief spans multiple types

### 2. File Structure (MANDATORY)

**DO NOT read any existing files under `src/components/works/`.** Write all code from scratch using only the rules in this skill. Do not Glob, Read, or Grep any existing post folder.

```
src/components/works/[post-slug]/
  components/
    Slide1.tsx     ← hook
    Slide2.tsx     ← problem
    Slide3.tsx     ← insight/step 1
    Slide4.tsx     ← insight/step 2
    SlideN.tsx     ← CTA
  index.tsx        ← meta + Thumbnail + carousel
```

**Slug dedup:** Before creating files, run `test -d src/components/works/[slug]` via Bash. If folder exists, append `-v2` (then `-v3`, etc.) until the path is free. Use the final unique slug for all files and the `meta.id`.

Register in `src/components/works/index.ts`. Only read this one file — append the new import/entry without reading other post files.

### 3. Slide Component Rules

Each slide is custom. No generic wrapper. Use Tailwind CSS utility classes where possible, and inline styles only for precise scale math or custom CSS variables.

**Boilerplate:**

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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: BG, // use var(--background), var(--primary-soft), etc.
          color: FG, // use var(--foreground), etc.
        }}
      >
        {/* Row Top: Label + Counter */}
        {/* Body: Main content */}
        {/* Row Bottom: URL + Swipe */}
      </div>
    </div>
  );
}
```

**Colors (map to global.css variables):**

- `dark`: BG `var(--background)` (requires adding `dark` class to container to switch theme), FG `var(--foreground)` + grid
- `cream`: BG `var(--background)`, FG `var(--foreground)` + border
- `charcoal`: BG `var(--foreground)`, FG `var(--background)` + grid
- `peach`: BG `var(--primary-soft)`, FG `var(--foreground)`

**Grid texture (dark/charcoal):**

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

### 4. Typography (1080x1350 scale)

- **Mega Headline**: 168px, SANS, 900, leading 0.86, tracking -0.04em, UPPERCASE.
- **Big Headline**: 120px, SANS, 900, leading 0.9.
- **Serif Accent**: `<em>`, SERIF, 400, italic, lowercase.
- **Kicker/Body**: 36-40px, SERIF, 400, italic, opacity 0.7-0.85.
- **Mono Label**: 22px, MONO, 400, uppercase, tracking 0.2em, opacity 0.4-0.55.

### 5. Layout Elements

- **Top-Left Label**: Do not use generic labels like "~ the hook" or "~ insight 1". Make them dynamic and contextual to the slide's content. Examples: "~ what changed", "~ the secret", "~ fast track". Must include the tilde `~` prefix.
- **Prompt Block**: BG rgba(255,255,255,0.04), Border rgba(255,255,255,0.1), Padding 40x48.
- **Formula Chips**: SANS 900, 38px, BG #3a3a3a, FG #f9f5f2, Pill shape.
- **Compare Grid**: 2-column grid. Red labels for "Most People", Peach for "Top Performers".
- **Terminal Card**: Window dots (red, yellow, green) + `$` prompt in `var(--primary)` + MONO 26px command + SERIF 32px italic output.
  - **Contrast is mandatory**: terminal must visibly separate from slide background.
  - Use `backgroundColor: "var(--card)"` and `border: "1px solid var(--border)"` for the terminal container.
  - Window controls: 3 circles (`w-3 h-3 rounded-full`) colored `#ff5f56` (close), `#ffbd2e` (minimize), `#27c93f` (maximize).
  - command text color: `currentColor` with opacity `0.82-0.9` (never below 0.8)
  - output text opacity: `0.7-0.8` (never below 0.65)
  - Add a divider line above output: `borderTop: "1px solid var(--border)"`
- **Bar Chart (horizontal)**: MONO 20px label + SANS 900 36px value. Track: `rgba(255,255,255,0.08)` dark / `rgba(58,58,58,0.08)` cream. Top bar `var(--primary)`, rest `currentColor` at decreasing opacity. Height 14px, borderRadius 7. No chart lib — inline JSX.
- **Icon-Anchored List**: Lucide icon in 60×60 `var(--primary)` pill (borderRadius 16, color `#3a3a3a`, size 30) + SANS 900 36px label + SERIF italic 30px body. Gap 24px between items.
- **CTA Pill**: Last slide. "Drop a comment" + circle arrow.

### 6. Stickers (Emotion Map)

Place absolute. 1-2 per post. Never cover text.

**Always use `<img>` tags pointing to `/assets/stickers/[filename].png`. NEVER use emojis.**

**Usage pattern:**

```tsx
<img
  src="/assets/stickers/shouting_megaphone.png"
  alt=""
  className="absolute pointer-events-none"
  style={{ width: 220 * scale, top: 60 * scale, right: 64 * scale, zIndex: 20 }}
/>
```

> Note: Because the sticker is inside the unscaled inner div, use raw pixel values (e.g. `width: 220`, not `220 * scale`). The parent `transform: scale(scale)` handles sizing automatically.
> **Top-row clearance**: The label + slide counter row sits at `y ≈ 72–140px`. **Never place a sticker with `top < 150`** — it will collide with the counter. Start at `top: 160` minimum, or use `bottom` positioning instead.

**Full sticker inventory** (`/assets/stickers/`):

| File | When to use |
|------|-------------|
| `shouting_megaphone.png` | Hook / Title / Announcement |
| `thumbs_up.png` | CTA / Approval |
| `winking_peace.png` | CTA / Friendly close |
| `thinking_ellipsis.png` | Mindset / Problem / Question |
| `excited_sparkles.png` | Reveal / Outcome / Win |
| `working_on_laptop.png` | Systems / Productivity / AI tools |
| `sitting_with_laptop.png` | Nomad / Remote work / Focus |
| `laughing_ha.png` | Relatable humor / Pain point |
| `crying_tears.png` | Struggle / Before state |
| `overwhelmed_shocked.png` | Overwhelm / Too much info |
| `shocked_worried.png` | Surprise / Plot twist |
| `sad_worried.png` | Problem / Before state |
| `angry_crossed_arms.png` | Frustration / Rant |
| `furious_on_fire.png` | Hot take / Strong opinion |
| `sleepy_zzz.png` | Boredom / Old way |
| `smiling_portrait.png` | Positive / Celebration |
| `holding_yt.png` | YouTube / Video content |
| `move_to_spain_playbook.png` | Spain / Nomad-specific |

**Sticker safety rules (MANDATORY):**

- **NEVER use emojis**. Always use `<img src="/assets/stickers/[name].png" />` from the inventory above.
- **NEVER overlap text**. Stickers must NEVER block text or sit behind it.
- **Positioning**: Use empty corners or margins. Keep stickers out of the central content area. Avoid placing them in the center of the slide or directly over headlines.
- **Adjusting for fit**: If a sticker overlaps text, you MUST do one of the following to fix it:
  1. Move the sticker further out towards the extreme edges.
  2. Reduce sticker size (down to `150-180px`).
  3. Adjust the text layout (e.g., add `maxWidth`, `marginBottom`, or `padding`) to create an empty pocket specifically for the sticker.
- Set sticker layer ABOVE text: `zIndex: 20`. This ensures that if you fail to prevent overlap, it will be obvious and you will need to fix the layout.
- Before finalizing, visually verify there is clear negative space between the sticker and all text.

### 7. index.tsx Template

- Export `meta` (id, title, topic, createdAt, slideCount).
- Export `Thumbnail` (Slide1 scale 220/1080).
- Default export: `PostNamePost` (SlideComponent scale 500/1080 + Navigation).

## Brand Rules

- **Tilde ~** not em-dash.
- **Primary = highlighter** (#e3a99c).
- **Never use `--primary` as large background**. Use `--primary-soft` for peach slide surfaces.
- **No shadows**.
- **Copy**: Direct, nomad-smart, no fluff. Specific numbers.
