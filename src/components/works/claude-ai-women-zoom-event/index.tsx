"use client";

import { useState } from "react";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";

const SANS = "var(--font-host-grotesk)";

export const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

export const meta = {
  id: "claude-ai-women-zoom-event",
  title: "Free Live Zoom Event — Claude AI for Women in Business",
  topic: "Events & Training",
  createdAt: "2026-04-26",
  slideCount: SLIDES.length,
};

export function Thumbnail() {
  return <Slide1 scale={220 / 1080} />;
}

export function AllSlides() {
  return (
    <div className="flex flex-col items-center gap-4">
      {SLIDES.map((SlideComponent, i) => (
        <SlideComponent key={i} scale={500 / 1080} />
      ))}
    </div>
  );
}

export default function ClaudeAiWomenZoomEventPost() {
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
