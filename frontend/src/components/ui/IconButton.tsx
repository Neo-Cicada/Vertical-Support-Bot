"use client";

const sizeClasses = {
  sm: "w-[var(--control-sm)] h-[var(--control-sm)]",
  md: "w-[var(--control-md)] h-[var(--control-md)]",
  lg: "w-[var(--control-lg)] h-[var(--control-lg)]",
} as const;

const variantClasses = {
  ghost:
    "bg-transparent text-ink-500 hover:bg-sand-50 hover:text-ink-900",
  outline:
    "bg-transparent text-ink-500 border border-ink-200 hover:border-ink-300 hover:text-ink-900",
  solid:
    "bg-jade-500 text-white hover:bg-jade-600",
} as const;

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

export default function IconButton({
  variant = "ghost",
  size = "md",
  children,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] shrink-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
