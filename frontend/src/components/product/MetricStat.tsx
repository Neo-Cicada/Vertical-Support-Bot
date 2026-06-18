"use client";

const deltaColors = {
  up:   "text-jade-600",
  down: "text-clay-500",
  flat: "text-ink-400",
} as const;

interface MetricStatProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  unit?: string;
  delta?: string;
  direction?: "up" | "down" | "flat";
  sub?: string;
}

export default function MetricStat({
  label,
  icon,
  value,
  unit,
  delta,
  direction = "flat",
  sub,
}: MetricStatProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5">
        {icon && <span className="text-ink-400 flex">{icon}</span>}
        <span className="text-[var(--text-sm)] text-ink-500 font-medium">
          {label}
        </span>
      </div>
      <div className="font-display text-[1.75rem] font-bold text-ink-900 tracking-tight leading-none">
        {value}
        {unit && (
          <span className="text-[0.6em] font-medium text-ink-500 ml-0.5">
            {unit}
          </span>
        )}
      </div>
      {delta && (
        <div className={`font-mono text-xs font-medium ${deltaColors[direction]}`}>
          {direction === "up" && "\u2191 "}
          {direction === "down" && "\u2193 "}
          {delta}
        </div>
      )}
      {sub && <div className="text-xs text-ink-400">{sub}</div>}
    </div>
  );
}
