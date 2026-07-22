import type { ColorSwatch } from "@/types/concept";
import { CopyButton } from "@/components/CopyButton";

interface ColorPaletteProps {
  palette: ColorSwatch[];
}

export function ColorPalette({ palette }: ColorPaletteProps) {
  const hexBlock = palette.map((c) => `${c.name}: ${c.hex}`).join("\n");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Color Palette
        </h3>
        <CopyButton label="Copy HEX" value={hexBlock} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {palette.map((swatch) => (
          <div key={`${swatch.name}-${swatch.hex}`} className="space-y-2">
            <div
              className="aspect-[4/3] border border-border"
              style={{ backgroundColor: swatch.hex }}
              aria-hidden
            />
            <div>
              <p className="text-sm text-foreground">{swatch.name}</p>
              <p className="font-mono text-[11px] tracking-wide text-muted">
                {swatch.hex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
