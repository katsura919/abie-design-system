# Abie Maxey — AI Carousel Generator
### How it works + how to set it up for your own brand

---

## What it does

You give Claude a blog post, an idea, or a story.
Claude turns it into a fully designed, ready-to-post IG carousel — slides, copy, images, layout, all of it.

No design tools. No Canva. No copy-pasting.

---

## Before you can use it — one-time setup

This is done once. After that, every carousel takes one command.

### 1. Define your brand design

Claude needs to know your visual identity so every slide looks consistent. This means deciding:

- **Colors** — your primary, background, accent, and muted tones
- **Fonts** — which font for headlines, body text, and labels
- **Rules** — things like "no shadows," "buttons are always pill-shaped," "use tilde ~ not em-dash"

These get saved as design tokens the system always references. Claude never guesses — it uses your exact values every time.

---

### 2. Write your brand voice

Claude needs to know how you sound. This is a written guide that covers:

- **Tone** — e.g. direct, first-person, no fluff, no inspirational-poster phrases
- **Copy rules** — e.g. "always use exact numbers," "never say 'it was tough' — say what actually happened"
- **Who you're talking to** — nomads, aspiring freelancers, content creators, etc.

The more specific this is, the more the captions sound like *you*, not like a generic AI.

---

### 3. Build your photo library

Claude picks images from a personal photo library — not random stock photos. For Abie, this is a set of photos from Ukraine (called the Zatoka collection) that each carry a specific mood:

| Photo | When Claude uses it |
|-------|---------------------|
| Smile at camera | Hook slide, direct personal address |
| Campfire | Raw honesty, vulnerability, late-night reflection |
| River | Journey, change, transitions |
| Lake dreamy | Aspirational, peaceful, arrival |
| Reading at doorway | Threshold moments, "before" state |
| Outdoors casual | Freedom, nomad lifestyle |

You upload these photos once. Claude knows which one fits each story type.

For topics outside your personal library (cities, food, objects), Claude searches Unsplash automatically and credits the photo.

---

### 4. Add your sticker pack

Stickers go on the final CTA slide to add personality. Each sticker maps to an emotion:

- Thinking face → mindset shift, reflection
- Shocked face → unexpected truth, big reveal
- Side-eye → calling out bad advice
- Point at viewer → CTA, "this is for you"
- Megaphone → announcement, hook energy

You save these as PNG files once. Claude picks the right one based on the story's emotion.

---

### 5. Install the skill

The whole system lives in a single instruction file — a Claude "skill" — that contains all your brand rules, voice guidelines, image library, layout logic, and slide templates.

Once installed, it activates whenever you type `/abie-create-blog`.

---

## Using it

```
/abie-create-blog <your input>
```

**A blog post link:**
```
/abie-create-blog https://abiemaxey.com/blog/the-real-cost-of-moving-to-spain
```

**A quick idea:**
```
/abie-create-blog why I stopped trying to be productive every day
```

**A personal story:**
```
/abie-create-blog I quit my corporate job in 2023 with $4,200 saved.
Here's what I wish someone told me before I did it.
```

---

## What Claude handles for you

- Reads your blog post (if you give a link)
- Decides how many slides the story needs
- Writes the copy in your voice — honest, specific, first person
- Picks the right photos from your personal library
- Designs each slide with the right layout, colors, and typography
- Picks and places the right sticker
- Publishes the post to your gallery instantly

---

## What you get

A finished carousel — usually 5 or 6 slides:

| Slide | What it does |
|-------|-------------|
| 1 | Hook — stops the scroll |
| 2–4 | The story — scene, insight, numbers |
| 5 | Actionable lesson or key takeaway |
| 6 | CTA — saves, shares, drives to the blog |

Every slide follows your exact brand: fonts, colors, tone, spacing. No two posts look off-brand.

---

## Tips

- **A blog URL gives the best results** — Claude reads the whole post and pulls the most shareable moments
- **Include real numbers** — "I spent €1,655 my first month" beats "it was expensive"
- **One idea per post** — if you have two stories, run the command twice
- **The more personal the brief, the better the copy** — Claude writes better when it has something real to work with
