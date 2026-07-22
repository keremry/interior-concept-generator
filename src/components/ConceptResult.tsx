"use client";

import { ColorPalette } from "@/components/ColorPalette";
import { CopyButton } from "@/components/CopyButton";
import type { GeneratedConcept } from "@/types/concept";
import { RefreshCw, RotateCcw } from "lucide-react";

interface ConceptResultProps {
  concept: GeneratedConcept | null;
  onRegenerate: () => void;
  onReset: () => void;
}

function ResultBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3 border-t border-border pt-8">
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {title}
      </h3>
      {children}
    </div>
  );
}

export function ConceptResult({
  concept,
  onRegenerate,
  onReset,
}: ConceptResultProps) {
  if (!concept) {
    return (
      <section id="results" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="text-sm text-muted">
            Configure a space, style and mood, then generate a concept to see
            palettes, materials, lighting and render prompts.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="results"
      className="border-b border-border animate-in fade-in duration-500"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Generated Concept
              {concept.variation > 0 ? ` · Variation ${concept.variation + 1}` : ""}
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-4xl">
              {concept.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {concept.narrative}
            </p>
            <div className="mt-5">
              <CopyButton label="Copy Description" value={concept.narrative} />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onRegenerate}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              <RefreshCw size={13} strokeWidth={1.5} />
              Regenerate
            </button>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              <RotateCcw size={13} strokeWidth={1.5} />
              Reset
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <ColorPalette palette={concept.palette} />

          <ResultBlock title="Primary Materials">
            <ul className="space-y-2 text-sm leading-relaxed text-foreground">
              {concept.materials.map((material) => (
                <li key={material} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock title="Furniture Direction">
            <ul className="space-y-2 text-sm leading-relaxed text-foreground">
              {concept.furniture.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock title="Lighting Strategy">
            <p className="text-sm leading-relaxed text-foreground">
              {concept.lighting}
            </p>
          </ResultBlock>

          <ResultBlock title="Key Design Principles">
            <ul className="space-y-2 text-sm leading-relaxed text-foreground">
              {concept.principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </ResultBlock>

          <ResultBlock title="AI Render Prompt">
            <div className="space-y-4">
              <p className="border border-border bg-surface p-4 text-sm leading-relaxed text-muted sm:p-5">
                {concept.renderPrompt}
              </p>
              <CopyButton
                label="Copy Prompt"
                value={concept.renderPrompt}
              />
            </div>
          </ResultBlock>
        </div>
      </div>
    </section>
  );
}
