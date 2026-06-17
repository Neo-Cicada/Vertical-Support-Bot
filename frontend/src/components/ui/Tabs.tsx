"use client";

type TabItem = string | { id: string; label: string; count?: number };

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  variant?: "underline" | "pill";
}

export default function Tabs({
  items,
  value,
  onChange,
  variant = "pill",
}: TabsProps) {
  return (
    <div className={`v-tabs v-tabs--${variant}`}>
      {items.map((item) => {
        const id = typeof item === "string" ? item : item.id;
        const label = typeof item === "string" ? item : item.label;
        const count = typeof item === "string" ? undefined : item.count;
        return (
          <button
            key={id}
            className={`v-tabs__item ${value === id ? "is-active" : ""}`}
            onClick={() => onChange(id)}
          >
            {label}
            {count !== undefined && (
              <span className="v-tabs__count">{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
