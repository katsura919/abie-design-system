import type { ComponentType } from "react";

import {
  AllSlides as BetterAiSystemsAllSlides,
  meta as betterAiSystemsMeta,
  SLIDES as BetterAiSystemsSlides,
  Thumbnail as BetterAiSystemsThumb,
} from "./better-ai-systems";
import BetterAiSystemsPost from "./better-ai-systems";

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
];
