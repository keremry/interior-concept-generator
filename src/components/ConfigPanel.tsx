"use client";

import { SelectionGroup } from "@/components/SelectionGroup";
import {
  MOOD_OPTIONS,
  SPACE_OPTIONS,
  STYLE_OPTIONS,
} from "@/data/options";
import type { MoodId, SpaceId, StyleId } from "@/types/concept";

interface ConfigPanelProps {
  space: SpaceId;
  style: StyleId;
  mood: MoodId;
  onSpaceChange: (space: SpaceId) => void;
  onStyleChange: (style: StyleId) => void;
  onMoodChange: (mood: MoodId) => void;
  onGenerate: () => void;
  onPreset: () => void;
}

export function ConfigPanel({
  space,
  style,
  mood,
  onSpaceChange,
  onStyleChange,
  onMoodChange,
  onGenerate,
  onPreset,
}: ConfigPanelProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              Configure direction
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Choose the space typology, design language and atmospheric mood.
              These inputs drive every layer of the generated concept.
            </p>
          </div>
          <button
            type="button"
            onClick={onPreset}
            className="self-start border border-border px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground sm:self-auto"
          >
            Try Brutalist Café
          </button>
        </div>

        <div className="space-y-12">
          <SelectionGroup
            label="Space"
            options={SPACE_OPTIONS}
            value={space}
            onChange={onSpaceChange}
          />
          <SelectionGroup
            label="Style"
            options={STYLE_OPTIONS}
            value={style}
            onChange={onStyleChange}
          />
          <SelectionGroup
            label="Mood"
            options={MOOD_OPTIONS}
            value={mood}
            onChange={onMoodChange}
          />
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={onGenerate}
            className="w-full border border-accent bg-foreground px-8 py-4 text-sm font-medium tracking-[0.15em] text-background transition-opacity hover:opacity-90 sm:w-auto"
          >
            Generate Concept
          </button>
        </div>
      </div>
    </section>
  );
}
