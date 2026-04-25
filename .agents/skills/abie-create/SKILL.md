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
- **BG Rotation**: dark → cream → charcoal → peach → dark → cream → peach. Never two same-tone back-to-back.
- **Stickers**: Pick 1–2 from map. Place without asking.

### 2. File Structure (MANDATORY)
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
Register in `src/components/works/index.ts`.

### 3. Slide Component Rules
Each slide is custom. No generic wrapper.

**Boilerplate:**
```tsx
const MONO = "var(--font-geist-mono)";
const SANS = "var(--font-host-grotesk)";
const SERIF = "var(--font-instrument-serif)";

export default function SlideN({ scale }: { scale: number }) {
  return (
    <div style={{ width: 1080 * scale, height: 1350 * scale, position: "relative", borderRadius: 18 * scale, overflow: "hidden" }}>
      <div className="absolute top-0 left-0 flex flex-col" style={{ width: 1080, height: 1350, transform: `scale(${scale})`, transformOrigin: "top left", background: BG, color: FG, padding: 72, boxSizing: "border-box" }}>
        {/* Row Top: Label + Counter */}
        {/* Body: Main content */}
        {/* Row Bottom: URL + Swipe */}
      </div>
    </div>
  );
}
```

**Colors:**
- `dark`: BG #1e1b1a, FG #f9f5f2 + grid
- `cream`: BG #f9f5f2, FG #3a3a3a + border
- `charcoal`: BG #3a3a3a, FG #f9f5f2 + grid
- `peach`: BG #e3a99c, FG #3a3a3a

**Grid texture (dark/charcoal):**
```tsx
<div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(249,245,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,245,242,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
```

### 4. Typography (1080x1350 scale)
- **Mega Headline**: 168px, SANS, 900, leading 0.86, tracking -0.04em, UPPERCASE.
- **Big Headline**: 120px, SANS, 900, leading 0.9.
- **Serif Accent**: `<em>`, SERIF, 400, italic, lowercase.
- **Kicker/Body**: 36-40px, SERIF, 400, italic, opacity 0.7-0.85.
- **Mono Label**: 22px, MONO, 400, uppercase, tracking 0.2em, opacity 0.4-0.55.

### 5. Layout Elements
- **Prompt Block**: BG rgba(255,255,255,0.04), Border rgba(255,255,255,0.1), Padding 40x48.
- **Formula Chips**: SANS 900, 38px, BG #3a3a3a, FG #f9f5f2, Pill shape.
- **Compare Grid**: 2-column grid. Red labels for "Most People", Peach for "Top Performers".
- **CTA Pill**: Last slide. "Drop a comment" + circle arrow.

### 6. Stickers (Emotion Map)
Place absolute. 1-2 per post. Never cover text.
- `shouting_megaphone`: Hook/Title
- `thumbs_up` / `winking_peace`: CTA
- `thinking_ellipsis`: Mindset/Problem
- `excited_sparkles`: Reveal/Outcome
- `working_on_laptop` / `sitting_with_laptop`: Systems/Nomad

### 7. index.tsx Template
- Export `meta` (id, title, topic, createdAt, slideCount).
- Export `Thumbnail` (Slide1 scale 220/1080).
- Default export: `PostNamePost` (SlideComponent scale 500/1080 + Navigation).

## Brand Rules
- **Tilde ~** not em-dash.
- **Primary = highlighter** (#e3a99c).
- **No shadows**.
- **Copy**: Direct, nomad-smart, no fluff. Specific numbers.
