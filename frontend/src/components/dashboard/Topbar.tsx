"use client";

import Icon from "@/components/ui/Icon";

interface TopbarProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Topbar({ title, subtitle, children }: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <div className="topbar__title">{title}</div>
        {subtitle && <div className="topbar__sub">{subtitle}</div>}
      </div>
      <div className="topbar__spacer" />
      {children}
      <div className="topbar__search">
        <Icon name="search" size={16} />
        <input placeholder="Search questions, sources\u2026" />
      </div>
    </header>
  );
}
