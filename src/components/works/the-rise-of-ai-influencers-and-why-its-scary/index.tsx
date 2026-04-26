"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";

export const meta = {
  id: "the-rise-of-ai-influencers-and-why-its-scary",
  title: "The Rise of AI Influencers (and Why It's Scary)",
  topic: "AI",
  createdAt: "2026-04-26T00:00:00.000Z",
  slideCount: 6,
};

export const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export function Thumbnail() {
  return <Slide1 scale={220 / 1080} />;
}

export function AllSlides() {
  return (
    <div className="flex flex-col gap-8">
      {SLIDES.map((Slide, index) => (
        <Slide key={index} scale={1} />
      ))}
    </div>
  );
}

export default function TheRiseOfAiInfluencersAndWhyItsScaryPost() {
  const [index, setIndex] = useState(0);
  const Slide = SLIDES[index];

  return (
    <div className="mx-auto flex w-full max-w-[980px] flex-col gap-6 px-4 py-8">
      <div className="flex items-center justify-between gap-4 rounded-[20px] border border-[var(--border)] bg-[var(--card)] px-5 py-4 text-[var(--foreground)]">
        <button
          type="button"
          onClick={() =>
            setIndex((current) => (current - 1 + SLIDES.length) % SLIDES.length)
          }
          className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-4 py-2 text-sm uppercase tracking-[0.16em]"
        >
          <ArrowLeft size={16} />
          Prev
        </button>
        <div className="font-mono text-xs uppercase tracking-[0.22em] opacity-60">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(SLIDES.length).padStart(2, "0")}
        </div>
        <button
          type="button"
          onClick={() => setIndex((current) => (current + 1) % SLIDES.length)}
          className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] px-4 py-2 text-sm uppercase tracking-[0.16em]"
        >
          Next
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="flex justify-center overflow-hidden rounded-[18px]">
        <Slide scale={500 / 1080} />
      </div>
    </div>
  );
}
