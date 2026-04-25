import type { ComponentType } from "react";
import {
  AllSlides as ChatGPTAllSlides,
  meta as chatGPTMeta,
  SLIDES as ChatGPTSlides,
  Thumbnail as ChatGPTThumb,
} from "./stop-using-chatgpt-like-this";
import ChatGPTPost from "./stop-using-chatgpt-like-this";

import {
  AllSlides as NomadBaseAllSlides,
  meta as nomadBaseMeta,
  SLIDES as NomadBaseSlides,
  Thumbnail as NomadBaseThumb,
} from "./pick-your-first-nomad-base";
import NomadBasePost from "./pick-your-first-nomad-base";

import {
  AllSlides as ClaudeVsChatGPTAllSlides,
  meta as claudeVsChatGPTMeta,
  SLIDES as ClaudeVsChatGPTSlides,
  Thumbnail as ClaudeVsChatGPTThumb,
} from "./five-reasons-claude-feels-smarter-than-chatgpt";
import ClaudeVsChatGPTPost from "./five-reasons-claude-feels-smarter-than-chatgpt";

import {
  AllSlides as HiddenClaudeFeaturesAllSlides,
  meta as hiddenClaudeFeaturesMeta,
  SLIDES as HiddenClaudeFeaturesSlides,
  Thumbnail as HiddenClaudeFeaturesThumb,
} from "./hidden-claude-features-nobody-talks-about";
import HiddenClaudeFeaturesPost from "./hidden-claude-features-nobody-talks-about";

import {
  AllSlides as BestClaudePromptsAllSlides,
  meta as bestClaudePromptsMeta,
  SLIDES as BestClaudePromptsSlides,
  Thumbnail as BestClaudePromptsThumb,
} from "./best-claude-prompts";
import BestClaudePromptsPost from "./best-claude-prompts";

import {
  AllSlides as MovingToSpainAllSlides,
  meta as movingToSpainMeta,
  SLIDES as MovingToSpainSlides,
  Thumbnail as MovingToSpainThumb,
} from "./moving-to-spain";
import MovingToSpainPost from "./moving-to-spain";

import {
  AllSlides as BestPlacesInSpainAllSlides,
  meta as bestPlacesInSpainMeta,
  SLIDES as BestPlacesInSpainSlides,
  Thumbnail as BestPlacesInSpainThumb,
} from "./best-places-in-spain";
import BestPlacesInSpainPost from "./best-places-in-spain";

import {
  AllSlides as SpanishHabitsAllSlides,
  meta as spanishHabitsMeta,
  SLIDES as SpanishHabitsSlides,
  Thumbnail as SpanishHabitsThumb,
} from "./spanish-habits";
import SpanishHabitsPost from "./spanish-habits";

import {
  AllSlides as WhyChooseNextjsAllSlides,
  meta as whyChooseNextjsMeta,
  SLIDES as WhyChooseNextjsSlides,
  Thumbnail as WhyChooseNextjsThumb,
} from "./why-choose-nextjs";
import WhyChooseNextjsPost from "./why-choose-nextjs";

import {
  AllSlides as TrendingAiTopicsAllSlides,
  meta as trendingAiTopicsMeta,
  SLIDES as TrendingAiTopicsSlides,
  Thumbnail as TrendingAiTopicsThumb,
} from "./trending-ai-topics";
import TrendingAiTopicsPost from "./trending-ai-topics";

import {
  AllSlides as FoodsToTryInMadridAllSlides,
  meta as foodsToTryInMadridMeta,
  SLIDES as FoodsToTryInMadridSlides,
  Thumbnail as FoodsToTryInMadridThumb,
} from "./foods-to-try-in-madrid";
import FoodsToTryInMadridPost from "./foods-to-try-in-madrid";

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
    ...foodsToTryInMadridMeta,
    Thumbnail: FoodsToTryInMadridThumb,
    Component: FoodsToTryInMadridPost,
    AllSlides: FoodsToTryInMadridAllSlides,
    Slides: FoodsToTryInMadridSlides,
  },
  {
    ...trendingAiTopicsMeta,
    Thumbnail: TrendingAiTopicsThumb,
    Component: TrendingAiTopicsPost,
    AllSlides: TrendingAiTopicsAllSlides,
    Slides: TrendingAiTopicsSlides,
  },
  {
    ...whyChooseNextjsMeta,
    Thumbnail: WhyChooseNextjsThumb,
    Component: WhyChooseNextjsPost,
    AllSlides: WhyChooseNextjsAllSlides,
    Slides: WhyChooseNextjsSlides,
  },
  {
    ...spanishHabitsMeta,
    Thumbnail: SpanishHabitsThumb,
    Component: SpanishHabitsPost,
    AllSlides: SpanishHabitsAllSlides,
    Slides: SpanishHabitsSlides,
  },
  {
    ...bestPlacesInSpainMeta,
    Thumbnail: BestPlacesInSpainThumb,
    Component: BestPlacesInSpainPost,
    AllSlides: BestPlacesInSpainAllSlides,
    Slides: BestPlacesInSpainSlides,
  },
  {
    ...movingToSpainMeta,
    Thumbnail: MovingToSpainThumb,
    Component: MovingToSpainPost,
    AllSlides: MovingToSpainAllSlides,
    Slides: MovingToSpainSlides,
  },
  {
    ...bestClaudePromptsMeta,
    Thumbnail: BestClaudePromptsThumb,
    Component: BestClaudePromptsPost,
    AllSlides: BestClaudePromptsAllSlides,
    Slides: BestClaudePromptsSlides,
  },
  {
    ...hiddenClaudeFeaturesMeta,
    Thumbnail: HiddenClaudeFeaturesThumb,
    Component: HiddenClaudeFeaturesPost,
    AllSlides: HiddenClaudeFeaturesAllSlides,
    Slides: HiddenClaudeFeaturesSlides,
  },
  {
    ...claudeVsChatGPTMeta,
    Thumbnail: ClaudeVsChatGPTThumb,
    Component: ClaudeVsChatGPTPost,
    AllSlides: ClaudeVsChatGPTAllSlides,
    Slides: ClaudeVsChatGPTSlides,
  },
  {
    ...chatGPTMeta,
    Thumbnail: ChatGPTThumb,
    Component: ChatGPTPost,
    AllSlides: ChatGPTAllSlides,
    Slides: ChatGPTSlides,
  },
  {
    ...nomadBaseMeta,
    Thumbnail: NomadBaseThumb,
    Component: NomadBasePost,
    AllSlides: NomadBaseAllSlides,
    Slides: NomadBaseSlides,
  },
];
