"use client";

interface ConfidenceMeterProps {
  level?: "high" | "medium" | "low";
  showPercent?: boolean;
  showLabel?: boolean;
  segments?: number;
}

const LEVEL_DATA = {
  high: { pct: 92, label: "High confidence", color: "var(--color-jade-500)", lit: 3 },
  medium: {
    pct: 64,
    label: "Medium confidence",
    color: "var(--color-amber-500)",
    lit: 2,
  },
  low: { pct: 28, label: "Low confidence", color: "var(--color-clay-500)", lit: 1 },
};

export default function ConfidenceMeter({
  level = "high",
  showPercent,
  showLabel = true,
  segments = 3,
}: ConfidenceMeterProps) {
  const data = LEVEL_DATA[level];
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex gap-[3px]">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className="w-4 h-1.5 rounded-sm"
            style={{
              background: i < data.lit ? data.color : "var(--color-ink-100)",
            }}
          />
        ))}
      </span>
      {showLabel && (
        <span
          className="text-xs font-semibold"
          style={{ color: data.color }}
        >
          {data.label}
        </span>
      )}
      {showPercent && (
        <span className="font-mono text-xs text-ink-500">{data.pct}%</span>
      )}
    </span>
  );
}
