"use client";

import Icon from "@/components/ui/Icon";

const NAV = [
  { id: "overview", label: "Overview", icon: "overview" },
  { id: "sources", label: "Sources", icon: "sources", count: "12" },
  {
    id: "conversations",
    label: "Conversations",
    icon: "conversations",
    count: "1.3k",
  },
  { id: "widget", label: "Widget", icon: "widget" },
];

interface SidebarProps {
  active: string;
  onNavigate: (id: string) => void;
}

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="flex flex-col bg-white border-r border-ink-200 px-3.5 pt-[18px] pb-[18px] gap-1 min-h-0">
      <div className="flex items-center gap-2.5 px-2 pt-1.5 pb-4">
        <span className="w-[30px] h-[30px] rounded-lg bg-jade-500 text-white inline-flex items-center justify-center font-display font-bold text-sm shrink-0">
          V
        </span>
        <span className="font-display font-bold text-lg text-ink-900 tracking-tight">
          Vertical
        </span>
      </div>

      <div className="font-mono text-[10px] tracking-[.08em] uppercase text-ink-400 px-2.5 pt-3.5 pb-1.5">
        Workspace
      </div>
      <nav className="flex flex-col gap-0.5">
        {NAV.map((n) => (
          <button
            key={n.id}
            className={`flex items-center gap-[11px] px-2.5 py-2 rounded-md text-[var(--text-ui)] font-medium cursor-pointer border-none bg-transparent w-full text-left transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:shrink-0 ${
              active === n.id
                ? "bg-jade-50 text-jade-700 font-semibold [&>svg]:text-jade-600"
                : "text-ink-500 hover:bg-sand-50 hover:text-ink-900"
            }`}
            onClick={() => onNavigate(n.id)}
          >
            <Icon name={n.icon} />
            {n.label}
            {n.count ? (
              <span className="ml-auto font-mono text-[11px] text-ink-400">
                {n.count}
              </span>
            ) : null}
          </button>
        ))}
      </nav>

      <div className="font-mono text-[10px] tracking-[.08em] uppercase text-ink-400 px-2.5 pt-3.5 pb-1.5">
        Account
      </div>
      <nav className="flex flex-col gap-0.5">
        <button className="flex items-center gap-[11px] px-2.5 py-2 rounded-md text-[var(--text-ui)] font-medium text-ink-500 cursor-pointer border-none bg-transparent w-full text-left transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] hover:bg-sand-50 hover:text-ink-900 [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:shrink-0">
          <Icon name="settings" />
          Settings
        </button>
      </nav>

      <div className="flex-1" />

      <button className="flex items-center gap-2.5 px-2.5 py-[9px] rounded-md border border-ink-200 cursor-pointer transition-colors duration-[var(--dur-fast)] ease-[var(--ease-out)] bg-transparent hover:border-ink-300">
        <span className="w-[30px] h-[30px] rounded-lg bg-ink-800 text-paper inline-flex items-center justify-center font-display font-bold text-[13px] shrink-0">
          A
        </span>
        <span className="flex-1 min-w-0">
          <span className="text-[var(--text-sm)] font-semibold text-ink-900 leading-tight block">
            Acme Support
          </span>
          <span className="font-mono text-[10px] text-ink-400">
            Growth &middot; per-tenant
          </span>
        </span>
        <Icon
          name="chevron"
          size={16}
          className="text-ink-400"
        />
      </button>
    </aside>
  );
}
