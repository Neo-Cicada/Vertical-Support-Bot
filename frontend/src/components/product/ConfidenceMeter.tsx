"use client";

interface ConfidenceMeterProps {
  level?: "high" | "medium" | "low";
  showPercent?: boolean;
  showLabel?: boolean;
  segments?: number;
}

const LEVEL_DATA = {
  high: { pct: 92, label: "High confidence", color: "var(--jade-500)", lit: 3 },
  medium: {
    pct: 64,
    label: "Medium confidence",
    color: "var(--amber-500)",
    lit: 2,
  },
  low: { pct: 28, label: "Low confidence", color: "var(--clay-500)", lit: 1 },
};

export default function ConfidenceMeter({
  level = "high",
  showPercent,
  showLabel = true,
  segments = 3,
}: ConfidenceMeterProps) {
  const data = LEVEL_DATA[level];
  return (
    <span className="v-conf">
      <span className="v-conf__bars">
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className="v-conf__seg"
            style={{
              background: i < data.lit ? data.color : "var(--ink-100)",
            }}
          />
        ))}
      </span>
      {showLabel && (
        <span className="v-conf__label" style={{ color: data.color }}>
          {data.label}
        </span>
      )}
      {showPercent && <span className="v-conf__pct">{data.pct}%</span>}
    </span>
  );
}
