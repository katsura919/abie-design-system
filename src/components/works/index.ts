import type { ComponentType } from "react";

import {
  AllSlides as TheRiseOfAiInfluencersAndWhyItsScaryAllSlides,
  meta as theRiseOfAiInfluencersAndWhyItsScaryMeta,
  SLIDES as TheRiseOfAiInfluencersAndWhyItsScarySlides,
  Thumbnail as TheRiseOfAiInfluencersAndWhyItsScaryThumb,
} from "./the-rise-of-ai-influencers-and-why-its-scary";
import TheRiseOfAiInfluencersAndWhyItsScaryPost from "./the-rise-of-ai-influencers-and-why-its-scary";

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
    ...theRiseOfAiInfluencersAndWhyItsScaryMeta,
    Thumbnail: TheRiseOfAiInfluencersAndWhyItsScaryThumb,
    Component: TheRiseOfAiInfluencersAndWhyItsScaryPost,
    AllSlides: TheRiseOfAiInfluencersAndWhyItsScaryAllSlides,
    Slides: TheRiseOfAiInfluencersAndWhyItsScarySlides,
  },
 
];
