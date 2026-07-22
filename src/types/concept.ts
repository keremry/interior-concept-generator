export type SpaceId =
  | "living-room"
  | "bedroom"
  | "home-office"
  | "cafe"
  | "boutique-hotel"
  | "exhibition-space";

export type StyleId =
  | "japandi"
  | "brutalist"
  | "contemporary"
  | "mediterranean"
  | "industrial"
  | "futuristic";

export type MoodId =
  | "calm"
  | "warm"
  | "dramatic"
  | "natural"
  | "sophisticated"
  | "experimental";

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface SpaceData {
  id: SpaceId;
  label: string;
  spatialFocus: string;
  functionalNeeds: string[];
  scaleNotes: string;
  furnitureBias: string[];
  promptSetting: string;
}

export interface StyleData {
  id: StyleId;
  label: string;
  characteristics: string[];
  materials: string[];
  palettes: ColorSwatch[][];
  furnitureLanguage: string;
  lightingBias: string;
  principles: string[];
  promptKeywords: string[];
  titleFragments: string[];
}

export interface MoodData {
  id: MoodId;
  label: string;
  atmosphere: string;
  lightingModifier: string;
  materialModifier: string;
  narrativeTone: string;
  promptAtmosphere: string;
  principleExtras: string[];
  titleAdjectives: string[];
}

export interface ConceptSelection {
  space: SpaceId;
  style: StyleId;
  mood: MoodId;
}

export interface GeneratedConcept {
  title: string;
  narrative: string;
  palette: ColorSwatch[];
  materials: string[];
  furniture: string[];
  lighting: string;
  principles: string[];
  renderPrompt: string;
  variation: number;
  selection: ConceptSelection;
}
