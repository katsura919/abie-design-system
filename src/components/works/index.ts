import type { ComponentType } from "react";

import {
  AllSlides as BetterAiSystemsAllSlides,
  meta as betterAiSystemsMeta,
  SLIDES as BetterAiSystemsSlides,
  Thumbnail as BetterAiSystemsThumb,
} from "./better-ai-systems";
import BetterAiSystemsPost from "./better-ai-systems";

import {
  AllSlides as ClaudeVsChatgpt2026AllSlides,
  meta as claudeVsChatgpt2026Meta,
  SLIDES as ClaudeVsChatgpt2026Slides,
  Thumbnail as ClaudeVsChatgpt2026Thumb,
} from "./claude-vs-chatgpt-2026";
import ClaudeVsChatgpt2026Post from "./claude-vs-chatgpt-2026";

export type Work = {
  id: string;
  title: string;
  topic: string;
  createdAt: string;
  slideCount: number;
  Thumbnail: ComponentType;
  Component: ComponentType;
  AllSlides: ComponentType;
  Slides: ComponentType<{ scale: number }>[];
};

export const WORKS: Work[] = [
  {
    ...betterAiSystemsMeta,
    Thumbnail: BetterAiSystemsThumb,
    Component: BetterAiSystemsPost,
    AllSlides: BetterAiSystemsAllSlides,
    Slides: BetterAiSystemsSlides,
  },
  {
    ...claudeVsChatgpt2026Meta,
    Thumbnail: ClaudeVsChatgpt2026Thumb,
    Component: ClaudeVsChatgpt2026Post,
    AllSlides: ClaudeVsChatgpt2026AllSlides,
    Slides: ClaudeVsChatgpt2026Slides,
  },
];
