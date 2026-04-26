import type { ComponentType } from "react";

import {
  AllSlides as TheRiseOfAiInfluencersAndWhyItsScaryAllSlides,
  meta as theRiseOfAiInfluencersAndWhyItsScaryMeta,
  SLIDES as TheRiseOfAiInfluencersAndWhyItsScarySlides,
  Thumbnail as TheRiseOfAiInfluencersAndWhyItsScaryThumb,
} from "./the-rise-of-ai-influencers-and-why-its-scary";
import TheRiseOfAiInfluencersAndWhyItsScaryPost from "./the-rise-of-ai-influencers-and-why-its-scary";

import {
  AllSlides as WhyChooseMadridAllSlides,
  meta as whyChooseMadridMeta,
  SLIDES as WhyChooseMadridSlides,
  Thumbnail as WhyChooseMadridThumb,
} from "./why-choose-madrid";
import WhyChooseMadridPost from "./why-choose-madrid";

import {
  AllSlides as ClaudeForBusinessEventAllSlides,
  meta as claudeForBusinessEventMeta,
  SLIDES as ClaudeForBusinessEventSlides,
  Thumbnail as ClaudeForBusinessEventThumb,
} from "./claude-for-business-event";
import ClaudeForBusinessEventPost from "./claude-for-business-event";

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
    ...whyChooseMadridMeta,
    Thumbnail: WhyChooseMadridThumb,
    Component: WhyChooseMadridPost,
    AllSlides: WhyChooseMadridAllSlides,
    Slides: WhyChooseMadridSlides,
  },
  {
    ...claudeForBusinessEventMeta,
    Thumbnail: ClaudeForBusinessEventThumb,
    Component: ClaudeForBusinessEventPost,
    AllSlides: ClaudeForBusinessEventAllSlides,
    Slides: ClaudeForBusinessEventSlides,
  },
  {
    ...theRiseOfAiInfluencersAndWhyItsScaryMeta,
    Thumbnail: TheRiseOfAiInfluencersAndWhyItsScaryThumb,
    Component: TheRiseOfAiInfluencersAndWhyItsScaryPost,
    AllSlides: TheRiseOfAiInfluencersAndWhyItsScaryAllSlides,
    Slides: TheRiseOfAiInfluencersAndWhyItsScarySlides,
  },
];
