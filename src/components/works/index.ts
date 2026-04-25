import type { ComponentType } from "react";
import { meta as chatGPTMeta, Thumbnail as ChatGPTThumb } from "./stop-using-chatgpt-like-this";
import ChatGPTPost from "./stop-using-chatgpt-like-this";
import { meta as nomadBaseMeta, Thumbnail as NomadBaseThumb } from "./pick-your-first-nomad-base";
import NomadBasePost from "./pick-your-first-nomad-base";

export type Work = {
  id: string;
  title: string;
  topic: string;
  createdAt: string;
  slideCount: number;
  Thumbnail: ComponentType;
  Component: ComponentType;
};

export const WORKS: Work[] = [
  { ...chatGPTMeta, Thumbnail: ChatGPTThumb, Component: ChatGPTPost },
  { ...nomadBaseMeta, Thumbnail: NomadBaseThumb, Component: NomadBasePost },
];
