"use client";

interface SourceCitationProps {
  index: number;
  label: string;
  plain?: boolean;
}

export default function SourceCitation({
  index,
  label,
  plain,
}: SourceCitationProps) {
  return (
    <span
      className={`inline-flex items-center gap-[5px] rounded-full py-0.5 pr-2.5 pl-1.5 text-xs cursor-pointer transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] ${
        plain
          ? "bg-ink-100 border border-ink-200 text-ink-500"
          : "bg-jade-50 border border-jade-100 text-jade-700 hover:bg-jade-100"
      }`}
    >
      <span className="w-4 h-4 rounded-full bg-jade-500 text-white text-[10px] font-bold inline-flex items-center justify-center font-mono">
        {index}
      </span>
      <span className="font-medium">{label}</span>
    </span>
  );
}
