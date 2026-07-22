interface HeaderProps {
  githubUrl?: string;
}

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.382 6.839 9.74.5.094.683-.223.683-.494 0-.244-.009-.892-.014-1.75-2.782.616-3.37-1.37-3.37-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.055 1.532 1.055.892 1.563 2.341 1.111 2.91.85.091-.662.35-1.111.636-1.366-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.037 1.029-2.754-.103-.258-.446-1.297.098-2.703 0 0 .84-.275 2.75 1.052A9.34 9.34 0 0 1 12 6.844a9.34 9.34 0 0 1 2.504.345c1.909-1.327 2.748-1.052 2.748-1.052.546 1.406.203 2.445.1 2.703.64.717 1.028 1.633 1.028 2.754 0 3.943-2.339 4.811-4.566 5.065.359.317.679.943.679 1.901 0 1.372-.012 2.477-.012 2.814 0 .273.18.593.688.492C19.138 20.63 22 16.787 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  );
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
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </header>
  );
}
