"use client";

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
      className={`v-iconbtn v-iconbtn--${variant} v-iconbtn--${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
