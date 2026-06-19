"use client";

type SelectOption = string | { value: string; label: string };

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  options: SelectOption[];
}

export default function Select({
  label,
  hint,
  error,
  optional,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <label
      className={`v-select ${error ? "v-select--error" : ""} ${className}`}
    >
      {label && (
        <span className="v-input__label">
          {label}
          {optional && <span className="v-input__opt">Optional</span>}
        </span>
      )}
      <select className="v-select__el" {...props}>
        {options.map((o) => {
          const value = typeof o === "string" ? o : o.value;
          const label = typeof o === "string" ? o : o.label;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      {(hint || error) && (
        <span className={`v-input__hint ${error ? "v-input__hint--error" : ""}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
