import type { ComponentType } from "react";



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

import {
  AllSlides as IStoppedRunningAllSlides,
  meta as iStoppedRunningMeta,
  SLIDES as IStoppedRunningSlides,
  Thumbnail as IStoppedRunningThumb,
} from "./i-stopped-running";
import IStoppedRunningPost from "./i-stopped-running";

import {
  AllSlides as FreedomNeedsASystemAllSlides,
  meta as freedomNeedsASystemMeta,
  SLIDES as FreedomNeedsASystemSlides,
  Thumbnail as FreedomNeedsASystemThumb,
} from "./freedom-needs-a-system";
import FreedomNeedsASystemPost from "./freedom-needs-a-system";

import {
  AllSlides as PlacesToVisitInMadridSpainV2AllSlides,
  meta as placesToVisitInMadridSpainV2Meta,
  SLIDES as PlacesToVisitInMadridSpainV2Slides,
  Thumbnail as PlacesToVisitInMadridSpainV2Thumb,
} from "./places-to-visit-in-madrid-spain-v2";
import PlacesToVisitInMadridSpainV2Post from "./places-to-visit-in-madrid-spain-v2";

import {
  AllSlides as SeasonOfBecomingAllSlides,
  meta as seasonOfBecomingMeta,
  SLIDES as SeasonOfBecomingSlides,
  Thumbnail as SeasonOfBecomingThumb,
} from "./season-of-becoming";
import SeasonOfBecomingPost from "./season-of-becoming";

import {
  AllSlides as IChoseMyselfAllSlides,
  meta as iChoseMyselfMeta,
  SLIDES as IChoseMyselfSlides,
  Thumbnail as IChoseMyselfThumb,
} from "./i-chose-myself";
import IChoseMyselfPost from "./i-chose-myself";

import {
  AllSlides as PayingForSystemsAllSlides,
  meta as payingForSystemsMeta,
  SLIDES as PayingForSystemsSlides,
  Thumbnail as PayingForSystemsThumb,
} from "./paying-for-systems";
import PayingForSystemsPost from "./paying-for-systems";

import {
  AllSlides as SevilleAndTheDetourAllSlides,
  meta as sevilleAndTheDetourMeta,
  SLIDES as SevilleAndTheDetourSlides,
  Thumbnail as SevilleAndTheDetourThumb,
} from "./seville-and-the-detour";
import SevilleAndTheDetourPost from "./seville-and-the-detour";

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
  {
    ...iStoppedRunningMeta,
    Thumbnail: IStoppedRunningThumb,
    Component: IStoppedRunningPost,
    AllSlides: IStoppedRunningAllSlides,
    Slides: IStoppedRunningSlides,
  },
  {
    ...freedomNeedsASystemMeta,
    Thumbnail: FreedomNeedsASystemThumb,
    Component: FreedomNeedsASystemPost,
    AllSlides: FreedomNeedsASystemAllSlides,
    Slides: FreedomNeedsASystemSlides,
  },
  {
    ...placesToVisitInMadridSpainV2Meta,
    Thumbnail: PlacesToVisitInMadridSpainV2Thumb,
    Component: PlacesToVisitInMadridSpainV2Post,
    AllSlides: PlacesToVisitInMadridSpainV2AllSlides,
    Slides: PlacesToVisitInMadridSpainV2Slides,
  },
  {
    ...seasonOfBecomingMeta,
    Thumbnail: SeasonOfBecomingThumb,
    Component: SeasonOfBecomingPost,
    AllSlides: SeasonOfBecomingAllSlides,
    Slides: SeasonOfBecomingSlides,
  },
  {
    ...iChoseMyselfMeta,
    Thumbnail: IChoseMyselfThumb,
    Component: IChoseMyselfPost,
    AllSlides: IChoseMyselfAllSlides,
    Slides: IChoseMyselfSlides,
  },
  {
    ...payingForSystemsMeta,
    Thumbnail: PayingForSystemsThumb,
    Component: PayingForSystemsPost,
    AllSlides: PayingForSystemsAllSlides,
    Slides: PayingForSystemsSlides,
  },
  {
    ...sevilleAndTheDetourMeta,
    Thumbnail: SevilleAndTheDetourThumb,
    Component: SevilleAndTheDetourPost,
    AllSlides: SevilleAndTheDetourAllSlides,
    Slides: SevilleAndTheDetourSlides,
  },
];
