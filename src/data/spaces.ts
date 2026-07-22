import type { SpaceData, SpaceId } from "@/types/concept";

export const SPACES: Record<SpaceId, SpaceData> = {
  "living-room": {
    id: "living-room",
    label: "Living Room",
    spatialFocus:
      "open conversational zones with clear circulation and a grounded seating core",
    functionalNeeds: [
      "flexible seating for gathering",
      "low storage that does not interrupt sightlines",
      "ambient layers for evening use",
    ],
    scaleNotes: "human-scaled volumes with generous negative space between pieces",
    furnitureBias: [
      "low-profile sofa",
      "sculptural lounge chair",
      "slim console or sideboard",
      "coffee table with intentional material contrast",
    ],
    promptSetting:
      "residential living room with generous floor area, large windows and a clear seating composition",
  },
  bedroom: {
    id: "bedroom",
    label: "Bedroom",
    spatialFocus:
      "a quiet resting volume organized around the bed as a centered architectural object",
    functionalNeeds: [
      "uncluttered bedside access",
      "soft acoustic control",
      "dimmable night-time lighting",
    ],
    scaleNotes: "intimate proportions with restrained furniture count",
    furnitureBias: [
      "platform or low headboard bed",
      "paired nightstands",
      "bench or ottoman at foot",
      "wardrobe with flush detailing",
    ],
    promptSetting:
      "serene bedroom interior with the bed as focal point, soft textiles and calm wall planes",
  },
  "home-office": {
    id: "home-office",
    label: "Home Office",
    spatialFocus:
      "a focused work bay with clear desk orientation and visual calm behind the primary task zone",
    functionalNeeds: [
      "ergonomic work surface",
      "cable concealment",
      "task lighting with reduced glare",
    ],
    scaleNotes: "compact efficiency without visual compression",
    furnitureBias: [
      "solid desk with clean silhouette",
      "supportive task chair",
      "vertical storage or shelving",
      "secondary soft seating for pause",
    ],
    promptSetting:
      "home office interior with a disciplined desk composition, shelving and controlled daylight",
  },
  cafe: {
    id: "cafe",
    label: "Café",
    spatialFocus:
      "a social hospitality plan with a strong counter presence and clustered seating islands",
    functionalNeeds: [
      "durable high-touch surfaces",
      "clear service circulation",
      "mix of communal and intimate seating",
    ],
    scaleNotes: "public-scale openness with intimate pockets",
    furnitureBias: [
      "service counter with material weight",
      "mixed table sizes",
      "banquette or bench seating",
      "bar stools with architectural lines",
    ],
    promptSetting:
      "independent café interior with a prominent counter, mixed seating clusters and atmospheric depth",
  },
  "boutique-hotel": {
    id: "boutique-hotel",
    label: "Boutique Hotel",
    spatialFocus:
      "a memorable arrival sequence and guest lounge that reads as curated rather than corporate",
    functionalNeeds: [
      "strong first impression at entry",
      "lounge flexibility for guests",
      "tactile luxury without excess ornament",
    ],
    scaleNotes: "elevated hospitality proportions with gallery-like calm",
    furnitureBias: [
      "statement lounge seating",
      "reception desk as architecture",
      "layered occasional tables",
      "custom cabinetry for service",
    ],
    promptSetting:
      "boutique hotel lobby or suite interior with curated furniture, refined materials and cinematic composition",
  },
  "exhibition-space": {
    id: "exhibition-space",
    label: "Exhibition Space",
    spatialFocus:
      "a flexible gallery volume where walls, light and circulation support objects and narratives",
    functionalNeeds: [
      "adaptable partitions or plinths",
      "controlled lighting for exhibits",
      "unobstructed visitor flow",
    ],
    scaleNotes: "generous height and spare furnishings that defer to content",
    furnitureBias: [
      "minimal plinths and display benches",
      "discrete reception desk",
      "modular seating for pause points",
      "concealed storage for rotation",
    ],
    promptSetting:
      "contemporary exhibition interior with tall ceilings, clean wall planes and precise object placement",
  },
};
