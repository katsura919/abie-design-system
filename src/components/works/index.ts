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
