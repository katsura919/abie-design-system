"use client"

import { useState } from "react";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";

const SANS = "var(--font-host-grotesk)";

export const SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export const meta = {
  id: "foods-to-try-in-madrid",
  title: "Foods To Try In Madrid",
  topic: "Travel & Culture",
  createdAt: new Date().toISOString(),
  slideCount: SLIDES.length,
};

export function Thumbnail() {
  return <Slide1 scale={220 / 1080} />;
}

export function AllSlides() {
  return (
    <div className="flex flex-col gap-8">
      {SLIDES.map((Slide, i) => (
        <Slide key={i} scale={1} />
      ))}
    </div>
  );
}

export default function FoodsToTryInMadridPost() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="mb-8 flex items-center justify-between w-full max-w-[500px]">
        <div>
          <h1
            style={{ fontFamily: SANS }}
            className="text-foreground text-2xl font-black uppercase tracking-tight"
          >
            {meta.title}
          </h1>
          <p className="text-foreground/50 text-sm">{meta.topic}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentSlide((p) => Math.max(0, p - 1))}
            disabled={currentSlide === 0}
            className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex items-center justify-center disabled:opacity-30"
          >
            ←
          </button>
          <button
            onClick={() =>
              setCurrentSlide((p) => Math.min(SLIDES.length - 1, p + 1))
            }
            disabled={currentSlide === SLIDES.length - 1}
            className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex items-center justify-center disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="relative shadow-2xl"
        style={{
          width: 500,
          height: 500 * (1350 / 1080),
        }}
      >
        <CurrentSlideComponent scale={500 / 1080} />
      </div>

      <div className="mt-8 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? "bg-primary scale-110" : "bg-foreground/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
