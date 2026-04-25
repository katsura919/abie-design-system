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
