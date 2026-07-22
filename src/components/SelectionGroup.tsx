interface SelectionGroupProps<T extends string> {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

export function SelectionGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: SelectionGroupProps<T>) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`border px-4 py-3 text-left text-sm transition-colors ${
                selected
                  ? "border-accent bg-surface text-foreground"
                  : "border-border bg-transparent text-muted hover:border-accent/60 hover:text-foreground"
              }`}
              aria-pressed={selected}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
