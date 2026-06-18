"use client";

import Icon from "@/components/ui/Icon";

const TYPE_ICONS: Record<string, string> = {
  pdf: "file",
  web: "external",
  md: "file",
  doc: "file",
};

interface SourceDocProps {
  type?: string;
  name: string;
  meta?: string;
  status?: React.ReactNode;
  trailing?: React.ReactNode;
  interactive?: boolean;
}

export default function SourceDoc({
  type = "doc",
  name,
  meta,
  status,
  trailing,
  interactive,
}: SourceDocProps) {
  return (
    <div
      className={`flex items-center gap-3 px-3.5 py-3 border border-ink-200 rounded-md bg-white ${
        interactive
          ? "cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:border-ink-300 hover:shadow-sm"
          : ""
      }`}
    >
      <span className="text-ink-400 flex shrink-0">
        <Icon name={TYPE_ICONS[type] || "file"} size={18} />
      </span>
      <span className="flex-1 min-w-0">
        <span className="text-[var(--text-ui)] font-semibold text-ink-900 block overflow-hidden text-ellipsis whitespace-nowrap">
          {name}
        </span>
        {meta && (
          <span className="font-mono text-[11px] text-ink-400 block mt-0.5">
            {meta}
          </span>
        )}
      </span>
      {status && <span className="shrink-0">{status}</span>}
      {trailing}
    </div>
  );
}
