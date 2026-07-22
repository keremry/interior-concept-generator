import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <p className="text-sm text-muted">
            Configuration and generation modules load next.
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
