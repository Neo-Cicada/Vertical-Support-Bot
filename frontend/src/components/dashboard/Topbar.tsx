"use client";

import Icon from "@/components/ui/Icon";

interface TopbarProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Topbar({ title, subtitle, children }: TopbarProps) {
  return (
    <header className="flex items-center gap-4 px-7 py-3.5 border-b border-ink-200 bg-[color-mix(in_oklab,var(--surface-app)_80%,white)] backdrop-blur-sm sticky top-0 z-10">
      <div>
        <div className="font-display font-bold text-xl text-ink-900 tracking-tight">
          {title}
        </div>
        {subtitle && (
          <div className="text-[var(--text-sm)] text-ink-500 mt-px">
            {subtitle}
          </div>
        )}
      </div>
      <div className="flex-1" />
      {children}
      <div className="flex items-center gap-2 h-9 px-3 w-[260px] bg-white border border-ink-200 rounded-md text-ink-400">
        <Icon name="search" size={16} />
        <input
          className="border-none bg-transparent outline-none text-[var(--text-ui)] text-ink-900 w-full"
          placeholder="Search questions, sources\u2026"
        />
      </div>
    </header>
  );
}
