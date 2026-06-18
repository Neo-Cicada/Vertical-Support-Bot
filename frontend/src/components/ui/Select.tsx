"use client";

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  options: string[];
}

export default function Select({
  label,
  hint,
  error,
  optional,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <span className="text-[var(--text-sm)] font-semibold text-ink-900 flex items-center gap-1.5">
          {label}
          {optional && (
            <span className="font-normal text-ink-400 text-xs">Optional</span>
          )}
        </span>
      )}
      <select
        className={`v-select__el h-[var(--control-md)] border rounded-md px-3 bg-white text-[var(--text-ui)] text-ink-900 transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] focus:border-jade-400 focus:shadow-[var(--ring)] focus:outline-none ${error ? "border-clay-500" : "border-ink-200"}`}
        {...props}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {(hint || error) && (
        <span className={`text-xs ${error ? "text-clay-500" : "text-ink-500"}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
