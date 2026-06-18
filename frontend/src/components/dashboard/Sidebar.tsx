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
    <aside className="side">
      <div className="side__brand">
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "var(--jade-500)",
            color: "var(--white)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          V
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--text-lg)",
            color: "var(--text-strong)",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          Vertical
        </span>
      </div>

      <div className="side__group">Workspace</div>
      <nav className="side__nav">
        {NAV.map((n) => (
          <button
            key={n.id}
            className={`navitem ${active === n.id ? "is-active" : ""}`}
            onClick={() => onNavigate(n.id)}
          >
            <Icon name={n.icon} />
            {n.label}
            {n.count ? <span className="navitem__count">{n.count}</span> : null}
          </button>
        ))}
      </nav>

      <div className="side__group">Account</div>
      <nav className="side__nav">
        <button className="navitem">
          <Icon name="settings" />
          Settings
        </button>
      </nav>

      <div className="side__spacer" />

      <button className="side__ws">
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "var(--ink-800)",
            color: "var(--paper)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 13,
            flexShrink: 0,
          }}
        >
          A
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span className="side__ws-name" style={{ display: "block" }}>
            Acme Support
          </span>
          <span className="side__ws-plan">Growth &middot; per-tenant</span>
        </span>
        <Icon
          name="chevron"
          size={16}
          style={{ color: "var(--text-subtle)" }}
        />
      </button>
    </aside>
  );
}
