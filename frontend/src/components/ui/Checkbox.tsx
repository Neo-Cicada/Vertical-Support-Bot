"use client";

import { useId } from "react";

interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  className = "",
}: CheckboxProps) {
  const id = useId();
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-start gap-2 cursor-pointer text-[var(--text-sm)] text-ink-700 select-none ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="relative mt-px flex shrink-0 items-center justify-center w-[18px] h-[18px] rounded-[4px] border border-ink-200 bg-white transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] peer-checked:bg-jade-500 peer-checked:border-jade-500 peer-focus-visible:shadow-[var(--ring)] peer-checked:[&>svg]:opacity-100">
        <svg
          className="w-3 h-3 text-white opacity-0 transition-opacity duration-[var(--dur-fast)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      {label && <span className="leading-[18px]">{label}</span>}
    </label>
  );
}
