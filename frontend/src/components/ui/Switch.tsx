"use client";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Switch({ label, className = "", ...props }: SwitchProps) {
  return (
    <label className={`v-switch ${className}`}>
      <input type="checkbox" className="v-switch__input" {...props} />
      <span className="v-switch__track">
        <span className="v-switch__thumb" />
      </span>
      {label && <span className="v-switch__label">{label}</span>}
    </label>
  );
}
