"use client";

import { useState } from "react";
import { ConfigPanel } from "@/components/ConfigPanel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import type { MoodId, SpaceId, StyleId } from "@/types/concept";

export default function Home() {
  const [space, setSpace] = useState<SpaceId>("living-room");
  const [style, setStyle] = useState<StyleId>("japandi");
  const [mood, setMood] = useState<MoodId>("calm");

  const handlePreset = () => {
    setSpace("cafe");
    setStyle("brutalist");
    setMood("dramatic");
  };

  const handleGenerate = () => {
    // Generation engine lands in the next iteration
    const target = document.getElementById("results");
    target?.scrollIntoView({ behavior: "smooth" });
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
        <section id="results" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <p className="text-sm text-muted">
            Concept output will appear here after generation.
          </p>
        </section>
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Interior Concept Generator</span>
          <a
            href="https://www.ka57studio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            www.ka57studio.com
          </a>
        </div>
      </footer>
    </div>
  );
}
