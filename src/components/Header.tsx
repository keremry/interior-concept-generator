import { Github } from "lucide-react";

interface HeaderProps {
  githubUrl?: string;
}

export function Header({
  githubUrl = "https://github.com/keremry/interior-concept-generator",
}: HeaderProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <div>
          <p className="text-xl font-semibold tracking-[0.18em] text-foreground">
            CONCEPT.
          </p>
          <p className="mt-1 text-xs tracking-wide text-muted">
            Interior Direction Generator
          </p>
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground"
        >
          <Github size={14} strokeWidth={1.5} />
          GitHub
        </a>
      </div>
    </header>
  );
}
