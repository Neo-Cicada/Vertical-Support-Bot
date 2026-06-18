"use client";

const fillVariants = {
  accent:  "bg-jade-500",
  warning: "bg-amber-500",
  danger:  "bg-clay-500",
} as const;

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "md" | "sm";
  variant?: "accent" | "warning" | "danger";
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showValue,
  size = "md",
  variant = "accent",
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="flex flex-col gap-1.5">
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className="text-[var(--text-sm)] text-ink-500">{label}</span>
          )}
          {showValue && (
            <span className="font-mono text-[var(--text-sm)] font-semibold text-ink-900">
              {Math.round(pct)}%
            </span>
          )}
        </div>
      )}
      <div
        className={`${size === "sm" ? "h-1" : "h-1.5"} rounded-full bg-ink-100 overflow-hidden`}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-[var(--dur-slow)] ease-[var(--ease-out)] ${fillVariants[variant]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
