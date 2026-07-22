import { MOODS } from "@/data/moods";
import { SPACES } from "@/data/spaces";
import { STYLES } from "@/data/styles";
import type {
  ColorSwatch,
  ConceptSelection,
  GeneratedConcept,
  MoodId,
  SpaceId,
  StyleId,
} from "@/types/concept";

function pickIndex(length: number, seed: number): number {
  return Math.abs(seed) % length;
}

function rotate<T>(items: T[], offset: number): T[] {
  if (items.length === 0) return items;
  const start = pickIndex(items.length, offset);
  return [...items.slice(start), ...items.slice(0, start)];
}

function buildTitle(
  spaceLabel: string,
  styleFragments: string[],
  moodAdjectives: string[],
  variation: number
): string {
  const fragment = styleFragments[pickIndex(styleFragments.length, variation)];
  const adjective =
    moodAdjectives[pickIndex(moodAdjectives.length, variation + 3)];
  return `${adjective} ${fragment} — ${spaceLabel}`;
}

function buildNarrative(
  spaceId: SpaceId,
  styleId: StyleId,
  moodId: MoodId,
  variation: number
): string {
  const space = SPACES[spaceId];
  const style = STYLES[styleId];
  const mood = MOODS[moodId];
  const characteristic =
    style.characteristics[pickIndex(style.characteristics.length, variation)];
  const need =
    space.functionalNeeds[pickIndex(space.functionalNeeds.length, variation + 1)];

  return [
    mood.narrativeTone,
    `Designed for a ${space.label.toLowerCase()}, the concept centers on ${space.spatialFocus}.`,
    `${style.label} language enters through ${characteristic}, while ${need} anchors the brief.`,
    `Scale stays ${space.scaleNotes}.`,
    mood.atmosphere.charAt(0).toUpperCase() + mood.atmosphere.slice(1) + ".",
  ].join(" ");
}

function buildMaterials(
  styleId: StyleId,
  moodId: MoodId,
  variation: number
): string[] {
  const style = STYLES[styleId];
  const mood = MOODS[moodId];
  const rotated = rotate(style.materials, variation);
  const primary = rotated.slice(0, 4);
  return [...primary, mood.materialModifier];
}

function buildFurniture(
  spaceId: SpaceId,
  styleId: StyleId,
  variation: number
): string[] {
  const space = SPACES[spaceId];
  const style = STYLES[styleId];
  const pieces = rotate(space.furnitureBias, variation).slice(0, 4);
  return [
    `Overall direction: ${style.furnitureLanguage}.`,
    ...pieces.map((piece) => `${piece} interpreted through ${style.label.toLowerCase()} detailing`),
  ];
}

function buildLighting(styleId: StyleId, moodId: MoodId): string {
  const style = STYLES[styleId];
  const mood = MOODS[moodId];
  return `${style.lightingBias} Mood overlay: ${mood.lightingModifier}.`;
}

function buildPrinciples(
  styleId: StyleId,
  moodId: MoodId,
  variation: number
): string[] {
  const style = STYLES[styleId];
  const mood = MOODS[moodId];
  const stylePrinciples = rotate(style.principles, variation).slice(0, 3);
  return [...stylePrinciples, ...mood.principleExtras];
}

function buildPalette(styleId: StyleId, variation: number): ColorSwatch[] {
  const palettes = STYLES[styleId].palettes;
  return palettes[pickIndex(palettes.length, variation)].map((swatch) => ({
    ...swatch,
  }));
}

function buildRenderPrompt(
  spaceId: SpaceId,
  styleId: StyleId,
  moodId: MoodId,
  palette: ColorSwatch[],
  materials: string[],
  variation: number
): string {
  const space = SPACES[spaceId];
  const style = STYLES[styleId];
  const mood = MOODS[moodId];
  const keywords = rotate(style.promptKeywords, variation).slice(0, 5);
  const hexList = palette.map((c) => c.hex).join(", ");
  const materialList = materials.slice(0, 4).join(", ");
  const angleNote =
    variation % 2 === 0
      ? "wide-angle eye-level view"
      : "slightly elevated three-quarter composition";

  return [
    `Ultra-detailed interior visualization of a ${space.promptSetting}.`,
    `Style: ${keywords.join(", ")}.`,
    `Mood: ${mood.promptAtmosphere}.`,
    `Material focus: ${materialList}.`,
    `Color palette HEX anchors: ${hexList}.`,
    `Furniture language: ${style.furnitureLanguage}.`,
    `Lighting: ${style.lightingBias}; ${mood.lightingModifier}.`,
    `Camera: ${angleNote}, natural perspective, no people, no text overlays.`,
    `Quality: photorealistic, 8k, architectural photography, crisp materials, subtle depth of field.`,
    `Compatible with Midjourney, D5 Render and general AI image tools.`,
  ].join(" ");
}

export function generateConcept(
  selection: ConceptSelection,
  variation = 0
): GeneratedConcept {
  const { space, style, mood } = selection;
  const spaceData = SPACES[space];
  const styleData = STYLES[style];
  const moodData = MOODS[mood];
  const palette = buildPalette(style, variation);

  return {
    title: buildTitle(
      spaceData.label,
      styleData.titleFragments,
      moodData.titleAdjectives,
      variation
    ),
    narrative: buildNarrative(space, style, mood, variation),
    palette,
    materials: buildMaterials(style, mood, variation),
    furniture: buildFurniture(space, style, variation),
    lighting: buildLighting(style, mood),
    principles: buildPrinciples(style, mood, variation),
    renderPrompt: buildRenderPrompt(
      space,
      style,
      mood,
      palette,
      buildMaterials(style, mood, variation),
      variation
    ),
    variation,
    selection: { ...selection },
  };
}
