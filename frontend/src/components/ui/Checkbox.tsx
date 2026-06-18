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
    <label htmlFor={id} className={`v-check ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="v-check__input"
      />
      <span className="v-check__box">
        <svg
          className="v-check__icon"
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
      {label && <span className="v-check__label">{label}</span>}
    </label>
  );
}
