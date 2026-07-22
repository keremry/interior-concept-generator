import { Github } from "lucide-react";

interface HeaderProps {
  githubUrl?: string;
}

export function Header({
  githubUrl = "https://github.com/keremry/interior-concept-generator",
}: HeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.22em] text-foreground sm:text-xl">
            CONCEPT.
          </p>
          <p className="mt-1 text-[11px] tracking-[0.14em] text-muted sm:text-xs">
            Interior Direction Generator
          </p>
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[11px] tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-foreground"
        >
          <Github size={14} strokeWidth={1.5} />
          GitHub
        </a>
      </div>
    </header>
  );
}
