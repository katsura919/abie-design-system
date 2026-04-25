export type SlideBg = "dark" | "cream" | "peach";

export interface PostSlide {
  background: SlideBg;
  chip?: string;
  eyebrow?: string;
  headline: string;
  headlineAccent?: string;
  accentColor?: "primary" | "white" | "inherit";
  body?: string;
  cta?: string;
  sticker?: string; // filename without extension, from /assets/stickers/
}

export interface Post {
  id: string;
  title: string;
  topic: string;
  createdAt: string;
  slides: PostSlide[];
}

