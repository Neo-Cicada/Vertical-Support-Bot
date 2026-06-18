"use client";

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
    <div className="v-metric">
      <div className="v-metric__head">
        {icon && <span className="v-metric__icon">{icon}</span>}
        <span className="v-metric__label">{label}</span>
      </div>
      <div className="v-metric__value">
        {value}
        {unit && <span className="v-metric__unit">{unit}</span>}
      </div>
      {delta && (
        <div className={`v-metric__delta v-metric__delta--${direction}`}>
          {direction === "up" && "\u2191 "}
          {direction === "down" && "\u2193 "}
          {delta}
        </div>
      )}
      {sub && <div className="v-metric__sub">{sub}</div>}
    </div>
  );
}
