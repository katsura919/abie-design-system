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
   index.tsx
3. Register the new post in src/components/works/index.ts.
4. Slide arc must be 5-8 slides: hook -> problem -> insight(s) -> shift -> CTA.
5. Visual rules:
   - Background rotation: dark -> cream -> charcoal -> peach -> dark -> cream -> peach.
   - No same-tone back-to-back.
   - Use mono labels and counters.
   - Use tilde ~ style, no em dash.
   - Top-Left Label: Do not use generic labels like "~ the hook" or "~ insight 1". Make them dynamic and contextual to the slide's content. Examples: "~ what changed", "~ the secret", "~ fast track". Must include the tilde ~ prefix.
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
          backgroundColor: "var(--background)", // use var(--background), var(--primary), etc.
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

8. index.tsx requirements:
   - Export meta, Thumbnail, default carousel component.
   - Thumbnail uses Slide1 with scale 220/1080.
   - Main carousel uses scale 500/1080.
9. Keep brand tokens from globals.css; do not redefine.
10. Use specific, direct, no-fluff copy voice.
11. Sticker behavior is mandatory:

- Add 1-2 stickers from /assets/stickers automatically based on slide emotion/context.
- Default placement is hook slide + CTA slide unless another slide is a stronger fit.
- Never ask whether stickers should be added; add them directly.

Output behavior:

- Create or update files directly.
- If brief lacks details, infer practical defaults and proceed.
- Infer sticker choices and placement without follow-up questions.
- At end, summarize files created/changed and why.
