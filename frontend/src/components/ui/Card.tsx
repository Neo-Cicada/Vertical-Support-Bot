"use client";

const variantClasses = {
  default: "bg-white border border-ink-200 rounded-lg shadow-xs",
  flat:    "bg-white border border-ink-200 rounded-lg shadow-none",
  sunken:  "bg-sand-50 border border-ink-100 rounded-lg shadow-none",
  raised:  "bg-white border border-ink-200 rounded-lg shadow-md",
} as const;

const paddingClasses = {
  sm: "p-3.5",
  md: "p-[18px]",
  lg: "p-6",
} as const;

interface CardProps {
  variant?: "default" | "flat" | "sunken" | "raised";
  padding?: "sm" | "md" | "lg";
  interactive?: boolean;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({
  variant = "default",
  padding = "lg",
  interactive,
  title,
  subtitle,
  actions,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`${variantClasses[variant]} ${paddingClasses[padding]} ${interactive ? "cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:shadow-sm hover:-translate-y-px" : ""} ${className}`}
    >
      {(title || actions) && (
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            {title && (
              <div className="font-display font-bold text-base text-ink-900 tracking-tight">
                {title}
              </div>
            )}
            {subtitle && (
              <div className="text-[var(--text-sm)] text-ink-500 mt-0.5">
                {subtitle}
              </div>
            )}
          </div>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
