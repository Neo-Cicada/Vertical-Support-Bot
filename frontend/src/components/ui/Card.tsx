"use client";

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
      className={`v-card v-card--${variant} v-card--pad-${padding} ${interactive ? "v-card--interactive" : ""} ${className}`}
    >
      {(title || actions) && (
        <div className="v-card__head">
          <div>
            {title && <div className="v-card__title">{title}</div>}
            {subtitle && <div className="v-card__sub">{subtitle}</div>}
          </div>
          {actions && <div className="v-card__actions">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
