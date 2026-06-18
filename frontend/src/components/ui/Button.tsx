"use client";

const sizeClasses = {
  sm: "h-[var(--control-sm)] px-3.5 text-[var(--text-sm)]",
  md: "h-[var(--control-md)] px-5 text-[var(--text-ui)]",
  lg: "h-[var(--control-lg)] px-7 text-base",
} as const;

const variantClasses = {
  primary:
    "bg-jade-500 text-white hover:bg-jade-600 hover:shadow-accent",
  secondary:
    "bg-white text-ink-900 border border-ink-200 hover:bg-sand-50 hover:border-ink-300",
  ghost:
    "bg-transparent text-ink-700 hover:bg-sand-50",
  danger:
    "bg-clay-500 text-white hover:bg-clay-700",
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth,
  loading,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap no-underline focus-visible:shadow-[var(--ring)] disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        iconLeft
      )}
      {children}
      {iconRight}
    </button>
  );
}
