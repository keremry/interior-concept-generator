"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { copyToClipboard } from "@/lib/storage";

interface CopyButtonProps {
  label: string;
  value: string;
  className?: string;
}

export function CopyButton({ label, value, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setFailed(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
      return;
    }
    setFailed(true);
    window.setTimeout(() => setFailed(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 border border-border px-3 py-1.5 text-xs tracking-wide text-muted transition-all duration-200 hover:border-accent hover:text-foreground ${className}`}
      aria-label={label}
    >
      {copied ? (
        <Check size={12} strokeWidth={1.75} />
      ) : (
        <Copy size={12} strokeWidth={1.75} />
      )}
      {failed ? "Copy failed" : copied ? "Copied" : label}
    </button>
  );
}
