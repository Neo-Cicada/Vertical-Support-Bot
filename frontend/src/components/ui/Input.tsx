"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  iconLeft?: React.ReactNode;
}

export default function Input({
  label,
  hint,
  error,
  optional,
  iconLeft,
  className = "",
  ...props
}: InputProps) {
  return (
    <label className={`v-input ${error ? "v-input--error" : ""} ${className}`}>
      {label && (
        <span className="v-input__label">
          {label}
          {optional && <span className="v-input__opt">Optional</span>}
        </span>
      )}
      <span className="v-input__wrap">
        {iconLeft && <span className="v-input__icon">{iconLeft}</span>}
        <input className="v-input__el" {...props} />
      </span>
      {(hint || error) && (
        <span className={`v-input__hint ${error ? "v-input__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
