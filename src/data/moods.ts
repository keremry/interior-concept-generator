import type { MoodData, MoodId } from "@/types/concept";

export const MOODS: Record<MoodId, MoodData> = {
  calm: {
    id: "calm",
    label: "Calm",
    atmosphere:
      "a measured, restorative atmosphere where visual noise is reduced and pacing feels slow",
    lightingModifier:
      "prioritize soft ambient layers, low contrast and gentle transitions between day and evening",
    materialModifier:
      "favor matte, tactile finishes and muted tonal relationships over high-gloss contrast",
    narrativeTone:
      "The space is composed as a quiet refuge — deliberate, unhurried and emotionally steady.",
    promptAtmosphere:
      "calm serene mood, soft ambient light, low visual noise, peaceful composition",
    principleExtras: [
      "reduce contrast extremes to protect visual rest",
      "keep circulation paths visually quiet",
    ],
    titleAdjectives: ["Still", "Hushed", "Restorative", "Quiet"],
  },
  warm: {
    id: "warm",
    label: "Warm",
    atmosphere:
      "an inviting, human-centered atmosphere built from soft temperature, hospitality and touch",
    lightingModifier:
      "lean into warmer color temperatures, pooled glow and hospitable evening scenes",
    materialModifier:
      "emphasize timber, textiles and earth-toned surfaces that feel approachable and lived-in",
    narrativeTone:
      "The concept welcomes the body first — warmth, softness and easy social proximity.",
    promptAtmosphere:
      "warm inviting mood, golden ambient light, cozy hospitality, soft material depth",
    principleExtras: [
      "use warm light to activate seating zones",
      "layer textiles for tactile comfort",
    ],
    titleAdjectives: ["Hearth", "Golden", "Embered", "Welcoming"],
  },
  dramatic: {
    id: "dramatic",
    label: "Dramatic",
    atmosphere:
      "a cinematic atmosphere driven by contrast, shadow depth and singular focal moments",
    lightingModifier:
      "use strong directional light, deep shadows and spotlight hierarchy for theatrical emphasis",
    materialModifier:
      "heighten contrast between dark masses and illuminated surfaces; allow bold material statements",
    narrativeTone:
      "The direction is assertive and cinematic — composed for impact, memory and depth.",
    promptAtmosphere:
      "dramatic cinematic mood, strong contrast, deep shadows, theatrical lighting",
    principleExtras: [
      "establish one dominant focal volume",
      "use darkness as an active design material",
    ],
    titleAdjectives: ["Cinematic", "Bold", "Shadowed", "Intense"],
  },
  natural: {
    id: "natural",
    label: "Natural",
    atmosphere:
      "an outdoor-connected atmosphere grounded in organic texture, daylight honesty and biophilic calm",
    lightingModifier:
      "maximize daylight quality; supplement with fixtures that feel like filtered outdoor light",
    materialModifier:
      "foreground living materials — wood, stone, clay, plant life and breathable textiles",
    narrativeTone:
      "The concept stays close to landscape logic: honest materials, daylight and organic rhythm.",
    promptAtmosphere:
      "natural biophilic mood, daylight-driven, organic textures, indoor-outdoor feeling",
    principleExtras: [
      "keep material origins legible",
      "align furniture layouts with daylight paths",
    ],
    titleAdjectives: ["Earthen", "Daylit", "Organic", "Grounded"],
  },
  sophisticated: {
    id: "sophisticated",
    label: "Sophisticated",
    atmosphere:
      "a polished, gallery-adjacent atmosphere with refined restraint and elevated material control",
    lightingModifier:
      "favor precise, museum-like lighting with controlled highlights and elegant ambient fill",
    materialModifier:
      "select fewer, higher-quality finishes with exacting joins and subtle tonal luxury",
    narrativeTone:
      "The direction reads as curated and exacting — quiet luxury without decorative excess.",
    promptAtmosphere:
      "sophisticated refined mood, precise lighting, elevated materials, curated composition",
    principleExtras: [
      "edit accessories to gallery-level restraint",
      "align every joint and reveal with intention",
    ],
    titleAdjectives: ["Refined", "Curated", "Exacting", "Polished"],
  },
  experimental: {
    id: "experimental",
    label: "Experimental",
    atmosphere:
      "a curious, research-driven atmosphere that tests form, unexpected pairings and spatial play",
    lightingModifier:
      "allow unconventional lighting gestures — colored accents, graphic beams or sculptural glow",
    materialModifier:
      "mix unexpected material pairings and one provocative surface or object as a thesis piece",
    narrativeTone:
      "The concept treats the interior as a design laboratory — inventive, specific and slightly surprising.",
    promptAtmosphere:
      "experimental avant-garde mood, unexpected material pairings, inventive lighting, conceptual interior",
    principleExtras: [
      "introduce one deliberate rule-break as the concept signature",
      "keep experimentation focused, not chaotic",
    ],
    titleAdjectives: ["Provoked", "Inventive", "Studio", "Uncharted"],
  },
};
