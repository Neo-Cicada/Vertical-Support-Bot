"use client";

import Icon from "./Icon";

const variantClasses = {
  success: "bg-jade-50 border border-jade-200",
  danger:  "bg-clay-100 border border-clay-500",
  info:    "bg-slate-100 border border-slate-500",
} as const;

interface ToastProps {
  variant?: "success" | "danger" | "info";
  title: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function Toast({
  variant = "success",
  title,
  onClose,
  children,
}: ToastProps) {
  return (
    <div
      className={`flex items-start gap-3 px-4 py-3.5 rounded-md shadow-md min-w-[280px] max-w-[380px] ${variantClasses[variant]}`}
    >
      <div className="flex-1">
        <div className="font-semibold text-[var(--text-ui)] text-ink-900">{title}</div>
        {children && (
          <div className="text-[var(--text-sm)] text-ink-500 mt-0.5">
            {children}
          </div>
        )}
      </div>
      {onClose && (
        <button
          className="bg-transparent border-none text-ink-400 cursor-pointer p-0.5 shrink-0"
          onClick={onClose}
          aria-label="Close"
        >
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
