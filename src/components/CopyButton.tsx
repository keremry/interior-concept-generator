"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  label: string;
  value: string;
  className?: string;
}

export function CopyButton({ label, value, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground ${className}`}
      aria-label={label}
    >
      {copied ? <Check size={12} strokeWidth={1.75} /> : <Copy size={12} strokeWidth={1.75} />}
      {copied ? "Copied" : label}
    </button>
  );
}
