import type { ConceptSelection, MoodId, SpaceId, StyleId } from "@/types/concept";

const STORAGE_KEY = "interior-concept-generator:last-selection";

const SPACES: SpaceId[] = [
  "living-room",
  "bedroom",
  "home-office",
  "cafe",
  "boutique-hotel",
  "exhibition-space",
];

const STYLES: StyleId[] = [
  "japandi",
  "brutalist",
  "contemporary",
  "mediterranean",
  "industrial",
  "futuristic",
];

const MOODS: MoodId[] = [
  "calm",
  "warm",
  "dramatic",
  "natural",
  "sophisticated",
  "experimental",
];

function isSpace(value: unknown): value is SpaceId {
  return typeof value === "string" && SPACES.includes(value as SpaceId);
}

function isStyle(value: unknown): value is StyleId {
  return typeof value === "string" && STYLES.includes(value as StyleId);
}

function isMood(value: unknown): value is MoodId {
  return typeof value === "string" && MOODS.includes(value as MoodId);
}

export function loadSelection(): ConceptSelection | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConceptSelection>;
    if (!isSpace(parsed.space) || !isStyle(parsed.style) || !isMood(parsed.mood)) {
      return null;
    }
    return {
      space: parsed.space,
      style: parsed.style,
      mood: parsed.mood,
    };
  } catch {
    return null;
  }
}

export function saveSelection(selection: ConceptSelection): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection));
}

export function clearSelection(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

export async function copyToClipboard(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}
