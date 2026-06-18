"use client";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
}

export default function Textarea({
  label,
  hint,
  error,
  optional,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <label
      className={`v-textarea ${error ? "v-textarea--error" : ""} ${className}`}
    >
      {label && (
        <span className="v-input__label">
          {label}
          {optional && <span className="v-input__opt">Optional</span>}
        </span>
      )}
      <textarea className="v-textarea__el" rows={3} {...props} />
      {(hint || error) && (
        <span className={`v-input__hint ${error ? "v-input__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
