---
name: Abie Create
description: Create Abie-style IG carousel post (4:5 portrait)
argument-hint: Brief for the post
agent: agent
tools: ["editFiles", "search", "runCommands"]
---

You are creating a new social media post inside the Abie Maxey Design System.

Brief:
{{input}}

Requirements:

1. Use portrait 4:5 canvas for all slides: 1080 x 1350.
2. Build post in folder structure:
   src/components/works/[post-slug]/
   components/Slide1.tsx ... SlideN.tsx
   index.tsx — exports: meta, Thumbnail, AllSlides, SLIDES (array), default carousel component
3. Register the new post in src/components/works/index.ts.
4. Slide arc must be 5-8 slides: hook -> problem -> insight(s) -> shift -> CTA.
5. Visual rules:
   - Background rotation: dark -> cream -> charcoal -> peach -> dark -> cream -> peach.
   - No same-tone back-to-back.
   - Use mono labels and counters.
   - Use tilde ~ style, no em dash.
   - Top-Left Label: Do not use generic labels like "~ the hook" or "~ insight 1". Make them dynamic and contextual to the slide's content. Examples: "~ what changed", "~ the secret", "~ fast track". Must include the tilde ~ prefix.
   - Visual treatment — auto-select based on brief (no asking):
     - tools / apps / platforms / software → icon-anchored list (Lucide icons) on insight slides
     - stats / percentages / rankings / growth numbers → horizontal bar chart on at least one slide
     - prompt / command / AI output / terminal / "what I typed" → terminal card on that slide
     - steps / frameworks / formulas → numbered list or formula chips
     - mix treatments freely across slides when brief spans multiple types
6. Typography style:
   - Headlines: uppercase sans + serif italic accent in em.
   - Keep strong hierarchy and concise copy.
7. Canvas boilerplate per slide:
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
        className="absolute top-0 left-0 flex flex-col p-[72px] box-border"
        style={{
          width: 1080,
          height: 1350,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          backgroundColor: "var(--background)", // use var(--background), var(--primary-soft), etc.
          color: "var(--foreground)", // use var(--foreground), etc.
        }}
      >
        {/* row top */}
        {/* body */}
        {/* row bottom */}
      </div>
    </div>
  );
}
```

8. New layout elements (use when content matches):

   Terminal card — AI prompts, commands, "what I actually typed", before/after output. Adapts to slide bg:

   ```tsx
   // High contrast required: terminal must be clearly visible vs slide background
   const termBg = isDark ? "rgba(249,245,242,0.06)" : "rgba(30,27,26,0.08)";
   const termBorder = isDark ? "rgba(249,245,242,0.18)" : "rgba(30,27,26,0.18)";
   // Window dots (3x, opacity 0.2) + $ prompt in var(--primary) + mono command text + serif italic output
   // Command opacity: >= 0.82, output opacity: >= 0.7, add divider above output.
   ```

   Horizontal bar chart — rankings, comparisons, stats. Inline, no chart lib:

   ```tsx
   // Track: rgba(255,255,255,0.08) dark / rgba(58,58,58,0.08) cream
   // Top bar fill: var(--primary). Rest: currentColor at decreasing opacity.
   // Label: MONO 20px uppercase opacity 0.55. Value: SANS 900 36px.
   ```

   Icon-anchored list — tools, features, benefits. Import Lucide icons matching content:

   ```tsx
   // 60x60 var(--primary) pill (borderRadius 16) with Lucide icon (size 30, color #3a3a3a)
   // Bold SANS 900 36px label + italic SERIF 30px body
   ```

9. index.tsx requirements:
   - Export: `meta`, `Thumbnail`, `AllSlides`, `SLIDES` (exported array), and the default carousel component.
   - Thumbnail uses Slide1 with scale 220/1080.
   - AllSlides renders all slides stacked at scale 500/1080.
   - Main carousel uses scale 500/1080.
   - Register in src/components/works/index.ts by reading the file and appending — never rewrite existing entries.
   - Registration shape: `{ ...meta, Thumbnail, Component, AllSlides, Slides }`
   - Slug dedup: use PowerShell `Test-Path src/components/works/[slug]` before creating the folder.
10. Keep brand tokens from globals.css; do not redefine.
11. Use specific, direct, no-fluff copy voice.
12. Never use `var(--primary)` as a full background surface; use `var(--primary-soft)` for peach slides/cards. Keep `var(--primary)` for highlights, chips, icons, and accents.
13. Sticker behavior is mandatory:

- Add 1-2 stickers from /assets/stickers automatically based on slide emotion/context.
- Default placement is hook slide + CTA slide unless another slide is a stronger fit.
- Never ask whether stickers should be added; add them directly.
- Never overlap stickers with headline/body/chart/terminal text.
- Reserve text-safe blocked area: left 72 -> right 820, top 160 -> bottom 1080.
- Use safe placement zones: top-right (right 96-140, top 140-240) or lower-right (right 96-130, bottom 320-500).
- When text density is high, reduce sticker size to 170-200 and place behind text (sticker zIndex 1, text zIndex 10).

Output behavior:

- Create or update files directly.
- If brief lacks details, infer practical defaults and proceed.
- Infer sticker choices and placement without follow-up questions.
- At end, summarize files created/changed and why.
