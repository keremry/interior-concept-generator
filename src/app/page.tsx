"use client";

import { useEffect, useState } from "react";
import { ConceptResult } from "@/components/ConceptResult";
import { ConfigPanel } from "@/components/ConfigPanel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { generateConcept } from "@/lib/generateConcept";
import {
  clearSelection,
  loadSelection,
  saveSelection,
} from "@/lib/storage";
import type {
  GeneratedConcept,
  MoodId,
  SpaceId,
  StyleId,
} from "@/types/concept";

export default function Home() {
  const [space, setSpace] = useState<SpaceId>("living-room");
  const [style, setStyle] = useState<StyleId>("japandi");
  const [mood, setMood] = useState<MoodId>("calm");
  const [concept, setConcept] = useState<GeneratedConcept | null>(null);
  const [variation, setVariation] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadSelection();
    if (saved) {
      setSpace(saved.space);
      setStyle(saved.style);
      setMood(saved.mood);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveSelection({ space, style, mood });
  }, [space, style, mood, hydrated]);

  const handlePreset = () => {
    setSpace("cafe");
    setStyle("brutalist");
    setMood("dramatic");
  };

  const handleGenerate = () => {
    const next = generateConcept({ space, style, mood }, 0);
    setVariation(0);
    setConcept(next);
    window.setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleRegenerate = () => {
    const nextVariation = variation + 1;
    const next = generateConcept({ space, style, mood }, nextVariation);
    setVariation(nextVariation);
    setConcept(next);
  };

  const handleReset = () => {
    setSpace("living-room");
    setStyle("japandi");
    setMood("calm");
    setVariation(0);
    setConcept(null);
    clearSelection();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ConfigPanel
          space={space}
          style={style}
          mood={mood}
          onSpaceChange={setSpace}
          onStyleChange={setStyle}
          onMoodChange={setMood}
          onGenerate={handleGenerate}
          onPreset={handlePreset}
        />
        <ConceptResult
          concept={concept}
          onRegenerate={handleRegenerate}
          onReset={handleReset}
        />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Interior Concept Generator · Kerem</span>
          <a
            href="https://www.ka57studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-foreground"
          >
            www.ka57studio.com
          </a>
        </div>
      </footer>
    </div>
  );
}
