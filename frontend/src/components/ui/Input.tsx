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
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <span className="text-[var(--text-sm)] font-semibold text-ink-900 flex items-center gap-1.5">
          {label}
          {optional && (
            <span className="font-normal text-ink-400 text-xs">Optional</span>
          )}
        </span>
      )}
      <span
        className={`flex items-center gap-2 h-[var(--control-md)] border rounded-md px-3 bg-white transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] focus-within:border-jade-400 focus-within:shadow-[var(--ring)] ${error ? "border-clay-500" : "border-ink-200"}`}
      >
        {iconLeft && (
          <span className="text-ink-400 shrink-0 flex [&>svg]:w-[18px] [&>svg]:h-[18px]">
            {iconLeft}
          </span>
        )}
        <input
          className="border-none bg-transparent outline-none w-full text-[var(--text-ui)] text-ink-900 placeholder:text-ink-400"
          {...props}
        />
      </span>
      {(hint || error) && (
        <span className={`text-xs ${error ? "text-clay-500" : "text-ink-500"}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
