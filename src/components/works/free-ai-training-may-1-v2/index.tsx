"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";

export const meta = {
  id: "free-ai-training-may-1-v2",
  title: "Ladies, Dont Miss This Free AI Training",
  topic: "AI TRAINING",
  createdAt: "Apr 26, 2026",
  slideCount: 7,
};

export const SLIDES = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
];

export function Thumbnail() {
  return <Slide1 scale={220 / 1080} />;
}

export function AllSlides() {
  return (
    <div className="flex flex-col gap-5">
      {SLIDES.map((SlideComponent, index) => (
        <SlideComponent key={index} scale={500 / 1080} />
      ))}
    </div>
  );
}

export default function FreeAiTrainingMay1V2Post() {
  const [index, setIndex] = useState(0);
  const SlideComponent = SLIDES[index];

  return (
    <div className="flex flex-col items-center gap-3">
      <SlideComponent scale={500 / 1080} />

      <div className="flex items-center justify-between" style={{ width: 500 }}>
        <button
          onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
          disabled={index === 0}
          className="inline-flex items-center justify-center"
          style={{
            width: 42,
            height: 42,
            borderRadius: 9999,
            border: "1px solid var(--border)",
            background: index === 0 ? "var(--secondary)" : "var(--card)",
            color: index === 0 ? "var(--muted-foreground)" : "var(--foreground)",
            cursor: index === 0 ? "not-allowed" : "pointer",
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <p
          className="label-mono"
          style={{ margin: 0, color: "var(--muted-foreground)", fontSize: 10 }}
        >
          Slide {index + 1} / {SLIDES.length}
        </p>

        <button
          onClick={() => setIndex((prev) => Math.min(SLIDES.length - 1, prev + 1))}
          disabled={index === SLIDES.length - 1}
          className="inline-flex items-center justify-center"
          style={{
            width: 42,
            height: 42,
            borderRadius: 9999,
            border: "1px solid var(--border)",
            background:
              index === SLIDES.length - 1 ? "var(--secondary)" : "var(--card)",
            color:
              index === SLIDES.length - 1
                ? "var(--muted-foreground)"
                : "var(--foreground)",
            cursor: index === SLIDES.length - 1 ? "not-allowed" : "pointer",
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
