You are now working inside the **Abie Maxey Design System**. Apply every rule below without being asked. Task: $ARGUMENTS

---

## Stack
- Next.js 16 + Tailwind v4 + shadcn
- Fonts loaded via `layout.tsx`: `--font-host-grotesk`, `--font-instrument-serif`, `--font-geist-mono`
- All brand tokens live in `src/app/globals.css` — never redeclare them

---

## 10 Non-Negotiable Rules

### 1. Headline Recipe (use 80% of the time)
```tsx
<h2 className="headline-brand text-[var(--t-h2)]">
  UPPERCASE Sans <em>italic serif accent</em>
</h2>
```
`headline-brand` class handles font-weight 800, uppercase, tight tracking. The `<em>` inside switches to Instrument Serif italic automatically.

### 2. Tilde ~ not em-dash
Section labels: `01 ~ Title`. Subtitles: `From the Field ~ Latest writing`. Inline asides: `27 countries and a weak passport later ~ I'm now...`. Never use `—`.

### 3. Primary = highlighter, not flood-fill
`--primary` (#e3a99c dusty peach) goes on: accent words in headlines, button fills, hover borders, badge text, pull-quote marks. **Never** as a full section or page background. Page bg is always `--background` (warm off-white) or `--foreground` (charcoal dark block).

### 4. Buttons = pills always
```tsx
<button className="btn-primary">WORK WITH ME →</button>
<button className="btn-outline">READ POST →</button>
```
- Always UPPERCASE, never sentence-case
- No period at end of CTA
- Always paired with `→` (internal) or `↗` (external)
- `border-radius: 9999px` — no exceptions

### 5. No shadows on UI
Surfaces differ via `border` + `background`, not `box-shadow`. The only shadows: floating glass nav (`nav-glass`) and modal overlays.

### 6. Mono labels everywhere
Section numbers, captions, counters, status pills:
```tsx
<span className="label-mono text-muted-foreground">01 ~ Section</span>
```
9–11px, UPPERCASE, `tracking-[var(--tr-mono)]`, Geist Mono. Never use mono for body copy.

### 7. Stickers not emoji (for expressive moments)
Use `<img src="/assets/stickers/[name].png" className="sticker" width={120} />` instead of 🎉🤔💼. Only use real emoji in micro-meta lines where a sticker is too loud (e.g. `📖 15 Lessons`).

Available stickers: `smiling_portrait`, `winking_peace`, `thumbs_up`, `thinking_ellipsis`, `shouting_megaphone`, `sitting_with_laptop`, `working_on_laptop`, `sleepy_zzz`, `excited_sparkles`, `laughing_ha`, `holding_yt`, `move_to_spain_playbook`, `overwhelmed_shocked`, `shocked_worried`, `sad_worried`, `crying_tears`, `angry_crossed_arms`, `furious_on_fire`

### 8. Specificity over inspiration
- ❌ "I traveled a lot"
- ✅ "27 countries and a weak passport later"
- ❌ "Affordable living abroad"
- ✅ "~$1,200/mo runway in Madrid"
- ❌ "Stories from my journey"
- ✅ "Real stories from a nomad building businesses abroad"

### 9. Cards — no shadow, border only
```tsx
<div className="card-brand">…</div>       // white card, border lifts on hover
<div className="card-tinted">…</div>      // peach-tinted surface
<div className="card-dark">…</div>        // dark/charcoal card, inverted text
```

### 10. Social Post Slides
When building IG slides (1080×1080):
```tsx
<div className="post-canvas post-canvas-dark">   // or -cream or -peach
  <div className="flex justify-between">
    <span className="post-watermark">01 / 06</span>
    <span className="chip">Category</span>
  </div>
  {/* content */}
  <span className="post-watermark">abiemaxey.com</span>
</div>
```
- 72px safe padding (already in `.post-canvas`)
- Rotate backgrounds: dark → cream → peach → dark. Never two same-tone in a row.
- Always show slide counter + URL in mono at low opacity

---

## Token Quick Reference

| Token | Value |
|---|---|
| `--primary` | #e3a99c (dusty peach) |
| `--background` | #f9f5f2 (warm off-white) |
| `--foreground` | #3a3a3a (charcoal) |
| `--secondary` | #e7ddd3 (warm sand) |
| `--accent` | #bbcccd (dusty teal) |
| `--muted-foreground` | #6b6b6b |
| `--t-h1` | 72px |
| `--t-h2` | 60px |
| `--t-h3` | 48px |
| `--t-body` | 17px |
| `--tr-mono` | 0.2em |
| `--lh-tight` | 0.88 |
| `--r-lg` | 18px (cards) |
| `--r-full` | 9999px (pills) |

Dark mode: everything flips except `--primary` — it stays #e3a99c as the anchor.
