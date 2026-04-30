# /abie-create-blog — Demo Script

Turn any blog post or idea into a fully-coded IG carousel in one command.

---

## How to invoke

```
/abie-create-blog <input>
```

**Input can be:**
- A blog post URL → Claude reads the content automatically
- A short text brief → describe the story, emotion, key numbers
- A topic idea → Claude fills in the arc

---

## Example 1 — Blog URL (most common)

```
/abie-create-blog https://abiemaxey.com/blog/the-real-cost-of-moving-to-spain
```

Claude will:
1. Fetch + read the blog post
2. Identify story type (`life_lesson` / `travel_place` / `personal_moment`)
3. Pick core emotion, audience, slide count
4. Select images from Zatoka library (or search Unsplash/Pexels if needed)
5. Plan layout sequence (FULL_BLEED → HALF_SPLIT → TEXT_ONLY…)
6. Write all slide components + `index.tsx`
7. Register the post in `src/components/works/index.ts`

**Output — new folder:**
```
src/components/works/real-cost-of-moving-to-spain/
  components/
    Slide1.tsx   ← FULL_BLEED hook
    Slide2.tsx   ← HALF_SPLIT narrative
    Slide3.tsx   ← TEXT_ONLY dark (pull quote)
    Slide4.tsx   ← INSET_CARD cream (numbers)
    Slide5.tsx   ← TEXT_ONLY peach (lessons)
    Slide6.tsx   ← TEXT_ONLY dark (CTA + sticker)
  index.tsx
```

Post is immediately visible in the app gallery.

---

## Example 2 — Text brief

```
/abie-create-blog I quit my corporate job in 2023 with $4,200 saved.
Here's what I wish someone had told me before I did it.
```

Claude extracts story type (`life_lesson`), emotion (clarity/fear), and builds the arc.

---

## Example 3 — Topic only

```
/abie-create-blog why I stopped trying to be productive every day
```

Claude treats it as a `personal_moment` and writes copy in Abie's voice.

---

## What Claude decides automatically

| Decision | Logic |
|----------|-------|
| Slide count | `personal_moment` → 4–5, `travel_place` → 6–7, `life_lesson` → 5–6 |
| Layout per slide | Hook = FULL_BLEED, narrative = HALF_SPLIT, insight = INSET_CARD/TEXT_ONLY |
| Background tone | Rotates dark → cream → peach, never same-tone back-to-back |
| Image | Zatoka library matched by mood; Unsplash/Pexels for cities/objects |
| Sticker | 1 sticker on CTA slide only, matched to emotion |
| Copy voice | Honest, first-person, specific — numbers exact, no fluff |

---

## Slug dedup

If the folder already exists, Claude appends `-v2`, `-v3`, etc. and checks again before writing.

---

## Layout modes reference

| Mode | When | Headline size |
|------|------|---------------|
| `FULL_BLEED` | Hook, strong image moments | 88–120px |
| `HALF_SPLIT` | Narrative, location + prose | max 88px |
| `INSET_CARD` | Insight with scene reference | max 88px |
| `TEXT_ONLY` | Lesson, reflection, CTA | 96–120px |

---

## Zatoka image quick-ref

| File | Mood |
|------|------|
| `smile-at-camera.jpg` | Direct hook, "I need to tell you this" |
| `campfire.jpg` | Raw honesty, late-night reflection |
| `river.jpg` | Journey, transition, change |
| `lake-smile.jpg` | Dreamy, aspirational, peaceful |
| `reading-book-at-door.jpg` | Threshold moments, "before" state |
| `outside-smile-sideview.jpg` | Freedom, casual nomad life |

---

## Tips for best results

- **Give it a URL** — blog posts produce the most grounded, specific copy
- **Include numbers** — Claude will surface exact figures on slides
- **State the emotion** — "I was terrified" lands better than "it was hard"
- **One post = one story** — don't combine two ideas; create two posts instead
