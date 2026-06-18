"use client";

const variantClasses = {
  neutral: "bg-ink-100 text-ink-600",
  success: "bg-jade-50 text-jade-700",
  warning: "bg-amber-100 text-amber-700",
  danger:  "bg-clay-100 text-clay-700",
  info:    "bg-slate-100 text-slate-700",
  accent:  "bg-jade-50 text-jade-600",
  outline: "bg-transparent border border-ink-200 text-ink-500",
} as const;

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
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-[3px] rounded-full whitespace-nowrap ${variantClasses[variant]} ${mono ? "font-mono" : ""}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />}
      {children}
    </span>
  );
}
