"use client";

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
    <div className={`v-progress v-progress--${size}`}>
      {(label || showValue) && (
        <div className="v-progress__head">
          {label && <span className="v-progress__label">{label}</span>}
          {showValue && <span className="v-progress__val">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className="v-progress__track">
        <div
          className={`v-progress__fill v-progress__fill--${variant}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
