import type { MoodId, SpaceId, StyleId } from "@/types/concept";

export const SPACE_OPTIONS: { id: SpaceId; label: string }[] = [
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "home-office", label: "Home Office" },
  { id: "cafe", label: "Café" },
  { id: "boutique-hotel", label: "Boutique Hotel" },
  { id: "exhibition-space", label: "Exhibition Space" },
];

export const STYLE_OPTIONS: { id: StyleId; label: string }[] = [
  { id: "japandi", label: "Japandi" },
  { id: "brutalist", label: "Brutalist" },
  { id: "contemporary", label: "Contemporary" },
  { id: "mediterranean", label: "Mediterranean" },
  { id: "industrial", label: "Industrial" },
  { id: "futuristic", label: "Futuristic" },
];

export const MOOD_OPTIONS: { id: MoodId; label: string }[] = [
  { id: "calm", label: "Calm" },
  { id: "warm", label: "Warm" },
  { id: "dramatic", label: "Dramatic" },
  { id: "natural", label: "Natural" },
  { id: "sophisticated", label: "Sophisticated" },
  { id: "experimental", label: "Experimental" },
];
