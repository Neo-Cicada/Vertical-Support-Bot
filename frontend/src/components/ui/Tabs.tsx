"use client";

type TabItem = string | { id: string; label: string; count?: number };

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  variant?: "underline" | "pill";
}

const pillBase =
  "px-3.5 py-[5px] rounded-full text-[var(--text-sm)] font-medium border-none bg-transparent text-ink-500 cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] inline-flex items-center gap-1.5 hover:bg-sand-50 hover:text-ink-900";
const pillActive =
  "bg-jade-50 !text-jade-700 !font-semibold";

const underlineBase =
  "px-3.5 py-2 text-[var(--text-sm)] font-medium border-none border-b-2 border-b-transparent bg-transparent text-ink-500 cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] inline-flex items-center gap-1.5 hover:text-ink-900";
const underlineActive =
  "!text-jade-700 !border-b-jade-500 !font-semibold";

export default function Tabs({
  items,
  value,
  onChange,
  variant = "pill",
}: TabsProps) {
  const baseClass = variant === "pill" ? pillBase : underlineBase;
  const activeClass = variant === "pill" ? pillActive : underlineActive;

  return (
    <div className="flex gap-1 flex-wrap">
      {items.map((item) => {
        const id = typeof item === "string" ? item : item.id;
        const label = typeof item === "string" ? item : item.label;
        const count = typeof item === "string" ? undefined : item.count;
        return (
          <button
            key={id}
            className={`${baseClass} ${value === id ? activeClass : ""}`}
            onClick={() => onChange(id)}
          >
            {label}
            {count !== undefined && (
              <span className="font-mono text-[10px] bg-ink-100 px-1.5 py-px rounded-full text-ink-500">
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
