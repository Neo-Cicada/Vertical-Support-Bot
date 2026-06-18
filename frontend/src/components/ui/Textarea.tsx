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
    <label className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <span className="text-[var(--text-sm)] font-semibold text-ink-900 flex items-center gap-1.5">
          {label}
          {optional && (
            <span className="font-normal text-ink-400 text-xs">Optional</span>
          )}
        </span>
      )}
      <textarea
        className={`border rounded-md px-3 py-2.5 bg-white text-[var(--text-ui)] text-ink-900 resize-y min-h-[72px] transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] focus:border-jade-400 focus:shadow-[var(--ring)] focus:outline-none ${error ? "border-clay-500" : "border-ink-200"}`}
        rows={3}
        {...props}
      />
      {(hint || error) && (
        <span className={`text-xs ${error ? "text-clay-500" : "text-ink-500"}`}>
          {error || hint}
        </span>
      )}
    </label>
  );
}
