"use client";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Switch({ label, className = "", ...props }: SwitchProps) {
  return (
    <label className={`inline-flex items-center gap-2.5 cursor-pointer ${className}`}>
      <input type="checkbox" className="v-switch__input" {...props} />
      <span className="v-switch__track w-10 h-[22px] rounded-full bg-ink-200 relative transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] shrink-0">
        <span className="v-switch__thumb w-[18px] h-[18px] rounded-full bg-white shadow-xs absolute top-[2px] left-[2px] transition-transform duration-[var(--dur-fast)] ease-[var(--ease-out)]" />
      </span>
      {label && <span className="text-[var(--text-ui)] text-ink-900">{label}</span>}
    </label>
  );
}
