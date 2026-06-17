"use client";

interface BadgeProps {
  variant?:
    | "neutral"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "accent"
    | "outline";
  dot?: boolean;
  mono?: boolean;
  children: React.ReactNode;
}

export default function Badge({
  variant = "neutral",
  dot,
  mono,
  children,
}: BadgeProps) {
  return (
    <span
      className={`v-badge v-badge--${variant} ${mono ? "v-badge--mono" : ""}`}
    >
      {dot && <span className="v-badge__dot" />}
      {children}
    </span>
  );
}
