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

import {
  AllSlides as HiringAiSkilledFirstAllSlides,
  meta as hiringAiSkilledFirstMeta,
  SLIDES as HiringAiSkilledFirstSlides,
  Thumbnail as HiringAiSkilledFirstThumb,
} from "./hiring-ai-skilled-first";
import HiringAiSkilledFirstPost from "./hiring-ai-skilled-first";



import {
  AllSlides as StopPostingContentWithoutAiAllSlides,
  meta as stopPostingContentWithoutAiMeta,
  SLIDES as StopPostingContentWithoutAiSlides,
  Thumbnail as StopPostingContentWithoutAiThumb,
} from "./stop-posting-content-without-ai";
import StopPostingContentWithoutAiPost from "./stop-posting-content-without-ai";

import {
  AllSlides as PlacesToVisitInMadridSpainAllSlides,
  meta as placesToVisitInMadridSpainMeta,
  SLIDES as PlacesToVisitInMadridSpainSlides,
  Thumbnail as PlacesToVisitInMadridSpainThumb,
} from "./places-to-visit-in-madrid-spain";
import PlacesToVisitInMadridSpainPost from "./places-to-visit-in-madrid-spain";

import {
  AllSlides as ClaudeAiLiveZoomWomenAllSlides,
  meta as claudeAiLiveZoomWomenMeta,
  SLIDES as ClaudeAiLiveZoomWomenSlides,
  Thumbnail as ClaudeAiLiveZoomWomenThumb,
} from "./claude-ai-live-zoom-women";
import ClaudeAiLiveZoomWomenPost from "./claude-ai-live-zoom-women";

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
  {
    ...hiringAiSkilledFirstMeta,
    Thumbnail: HiringAiSkilledFirstThumb,
    Component: HiringAiSkilledFirstPost,
    AllSlides: HiringAiSkilledFirstAllSlides,
    Slides: HiringAiSkilledFirstSlides,
  },
  {
    ...stopPostingContentWithoutAiMeta,
    Thumbnail: StopPostingContentWithoutAiThumb,
    Component: StopPostingContentWithoutAiPost,
    AllSlides: StopPostingContentWithoutAiAllSlides,
    Slides: StopPostingContentWithoutAiSlides,
  },
  {
    ...placesToVisitInMadridSpainMeta,
    Thumbnail: PlacesToVisitInMadridSpainThumb,
    Component: PlacesToVisitInMadridSpainPost,
    AllSlides: PlacesToVisitInMadridSpainAllSlides,
    Slides: PlacesToVisitInMadridSpainSlides,
  },
  {
    ...claudeAiLiveZoomWomenMeta,
    Thumbnail: ClaudeAiLiveZoomWomenThumb,
    Component: ClaudeAiLiveZoomWomenPost,
    AllSlides: ClaudeAiLiveZoomWomenAllSlides,
    Slides: ClaudeAiLiveZoomWomenSlides,
  },
];
