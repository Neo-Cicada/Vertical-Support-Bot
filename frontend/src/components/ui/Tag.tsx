"use client";

interface TagProps {
  mono?: boolean;
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Tag({
  mono,
  onRemove,
  className = "",
  children,
}: TagProps) {
  return (
    <span className={`v-tag ${mono ? "v-tag--mono" : ""} ${className}`}>
      {children}
      {onRemove && (
        <button
          type="button"
          className="v-tag__remove"
          aria-label="Remove"
          onClick={onRemove}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      )}
    </span>
  );
}
