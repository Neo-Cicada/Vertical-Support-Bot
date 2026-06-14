"use client";

import { useEffect, useState } from "react";
import { getHealth, type HealthResponse } from "@/lib/api";

/* ── Mock data ─────────────────────────────────────────────── */

const MOCK_CONVERSATIONS = [
  {
    id: 1,
    customer: "Sarah Chen",
    subject: "Unable to reset password",
    status: "open" as const,
    time: "2 min ago",
  },
  {
    id: 2,
    customer: "Marcus Rivera",
    subject: "Billing discrepancy on invoice #4821",
    status: "pending" as const,
    time: "14 min ago",
  },
  {
    id: 3,
    customer: "Aiko Tanaka",
    subject: "API rate limit questions",
    status: "resolved" as const,
    time: "1 hr ago",
  },
  {
    id: 4,
    customer: "James Okafor",
    subject: "Feature request: bulk export",
    status: "open" as const,
    time: "2 hr ago",
  },
  {
    id: 5,
    customer: "Elena Petrov",
    subject: "SSO configuration not working",
    status: "pending" as const,
    time: "3 hr ago",
  },
];

const NAV_ITEMS = [
  { label: "Dashboard", icon: GridIcon, active: true },
  { label: "Knowledge Base", icon: BookIcon, active: false },
  { label: "Conversations", icon: ChatIcon, active: false },
  { label: "Settings", icon: GearIcon, active: false },
];

/* ── Icons (inline SVG components) ─────────────────────────── */

function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="11" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="11" width="6" height="6" rx="1" />
      <rect x="11" y="11" width="6" height="6" rx="1" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2.5A1.5 1.5 0 0 1 3.5 1h3A1.5 1.5 0 0 1 8 2.5V16l-1-.67L5 14l-2 1.33L2 16V2.5Z" />
      <path d="M10 2.5A1.5 1.5 0 0 1 11.5 1h3A1.5 1.5 0 0 1 16 2.5V16l-1-.67L13 14l-2 1.33L10 16V2.5Z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 11a2 2 0 0 1-2 2H5l-3 3V3a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8Z" />
    </svg>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="2.5" />
      <path d="M7.6 1.5h2.8l.4 2.1a5.5 5.5 0 0 1 1.6.9l2-.8 1.4 2.4-1.6 1.3a5.6 5.6 0 0 1 0 1.8l1.6 1.3-1.4 2.4-2-.8a5.5 5.5 0 0 1-1.6.9l-.4 2.1H7.6l-.4-2.1a5.5 5.5 0 0 1-1.6-.9l-2 .8-1.4-2.4 1.6-1.3a5.6 5.6 0 0 1 0-1.8L2.2 6.1l1.4-2.4 2 .8a5.5 5.5 0 0 1 1.6-.9l.4-2.1Z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="3" y1="5" x2="17" y2="5" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="15" x2="17" y2="15" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3L5 8l5 5" />
    </svg>
  );
}

/* ── Status badge ──────────────────────────────────────────── */

function StatusBadge({ status }: { status: "open" | "pending" | "resolved" }) {
  const styles = {
    open: "bg-accent-soft text-accent",
    pending: "bg-amber-soft text-amber",
    resolved: "bg-border-subtle text-muted",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase ${styles[status]}`}>
      {status}
    </span>
  );
}

/* ── Main page ─────────────────────────────────────────────── */

export default function DashboardPage() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [offline, setOffline] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch(() => setOffline(true));
  }, []);

  const backendStatus = offline
    ? "offline"
    : health
      ? health.db === "connected"
        ? "connected"
        : "degraded"
      : "checking";

  return (
    <div className="flex h-full">
      {/* ── Sidebar ──────────────────────────────────────── */}
      <aside
        className={`flex flex-col bg-sidebar-bg transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-56" : "w-0 overflow-hidden"
        }`}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 px-5 h-14 border-b border-white/[0.06]">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-accent text-white text-xs font-bold tracking-tight">
            VS
          </div>
          <span className="text-sidebar-active text-sm font-semibold tracking-tight whitespace-nowrap">
            Vertical Support
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                item.active
                  ? "bg-sidebar-hover text-sidebar-active"
                  : "text-sidebar-fg hover:text-sidebar-active hover:bg-sidebar-hover"
              }`}
            >
              <item.icon className="shrink-0" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Collapse button */}
        <div className="px-3 py-3 border-t border-white/[0.06]">
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-xs text-sidebar-fg hover:text-sidebar-active hover:bg-sidebar-hover transition-colors"
          >
            <ChevronLeftIcon className="shrink-0" />
            <span className="whitespace-nowrap">Collapse</span>
          </button>
        </div>
      </aside>

      {/* ── Main content ────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between h-14 px-6 border-b border-border bg-surface">
          <div className="flex items-center gap-3">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 -ml-1.5 rounded-md text-muted hover:text-foreground hover:bg-border-subtle transition-colors"
              >
                <MenuIcon />
              </button>
            )}
            <h1 className="text-sm font-semibold tracking-tight">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* Connection indicator */}
            <div className="flex items-center gap-2">
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  backendStatus === "connected"
                    ? "bg-accent"
                    : backendStatus === "checking"
                      ? "bg-muted"
                      : "bg-amber"
                }`}
                style={
                  backendStatus === "checking"
                    ? { animation: "pulse-dot 1.5s ease-in-out infinite" }
                    : undefined
                }
              />
              <span className="text-xs text-muted font-mono">
                {backendStatus === "connected"
                  ? "API connected"
                  : backendStatus === "checking"
                    ? "Connecting..."
                    : "API offline"}
              </span>
            </div>
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-xs font-semibold text-muted">
              A
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* ── Stat cards ─────────────────────────────── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ animation: "fade-up 0.5s ease-out both" }}
          >
            {/* Backend Status */}
            <div className="bg-surface rounded-xl border border-border p-5 flex flex-col gap-3">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">
                Backend Status
              </span>
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    backendStatus === "connected"
                      ? "bg-accent"
                      : backendStatus === "checking"
                        ? "bg-muted"
                        : "bg-amber"
                  }`}
                  style={
                    backendStatus === "checking"
                      ? { animation: "pulse-dot 1.5s ease-in-out infinite" }
                      : undefined
                  }
                />
                <span className="text-lg font-semibold tracking-tight capitalize">
                  {backendStatus === "checking" ? "Checking..." : backendStatus}
                </span>
              </div>
            </div>

            {/* Docs Indexed */}
            <div className="bg-surface rounded-xl border border-border p-5 flex flex-col gap-3">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">
                Documents Indexed
              </span>
              <span className="text-2xl font-bold tracking-tight font-mono">
                1,247
              </span>
            </div>

            {/* Active Conversations */}
            <div className="bg-surface rounded-xl border border-border p-5 flex flex-col gap-3">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">
                Active Conversations
              </span>
              <span className="text-2xl font-bold tracking-tight font-mono">
                23
              </span>
            </div>

            {/* Avg Response Time */}
            <div className="bg-surface rounded-xl border border-border p-5 flex flex-col gap-3">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">
                Avg Response Time
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold tracking-tight font-mono">
                  1.2
                </span>
                <span className="text-sm text-muted font-medium">sec</span>
              </div>
            </div>
          </div>

          {/* ── Bottom row ─────────────────────────────── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            style={{ animation: "fade-up 0.5s ease-out 0.1s both" }}
          >
            {/* Recent Conversations */}
            <div className="lg:col-span-2 bg-surface rounded-xl border border-border">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="text-sm font-semibold tracking-tight">
                  Recent Conversations
                </h2>
                <span className="text-xs text-muted font-medium">
                  {MOCK_CONVERSATIONS.length} total
                </span>
              </div>
              <div className="divide-y divide-border-subtle">
                {MOCK_CONVERSATIONS.map((conv) => (
                  <div
                    key={conv.id}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-border-subtle/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-border-subtle flex items-center justify-center text-xs font-semibold text-muted shrink-0">
                        {conv.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">
                          {conv.customer}
                        </p>
                        <p className="text-xs text-muted truncate mt-0.5">
                          {conv.subject}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 ml-4">
                      <StatusBadge status={conv.status} />
                      <span className="text-xs text-muted font-mono w-16 text-right">
                        {conv.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Health */}
            <div className="bg-surface rounded-xl border border-border">
              <div className="px-5 py-4 border-b border-border">
                <h2 className="text-sm font-semibold tracking-tight">
                  System Health
                </h2>
              </div>
              <div className="p-5 space-y-4">
                {/* API */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">API Server</span>
                  {backendStatus === "checking" ? (
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full bg-border-subtle px-2.5 py-0.5 text-xs font-medium text-muted"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-muted"
                        style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }}
                      />
                      Checking
                    </span>
                  ) : backendStatus === "connected" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Online
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-2.5 py-0.5 text-xs font-medium text-amber">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                      Offline
                    </span>
                  )}
                </div>

                {/* Database */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Database</span>
                  {health?.db === "connected" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Connected
                    </span>
                  ) : offline ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-2.5 py-0.5 text-xs font-medium text-amber">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                      Offline
                    </span>
                  ) : health?.db === "error" ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-soft px-2.5 py-0.5 text-xs font-medium text-red">
                      <span className="w-1.5 h-1.5 rounded-full bg-red" />
                      Error
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-border-subtle px-2.5 py-0.5 text-xs font-medium text-muted">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-muted"
                        style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }}
                      />
                      Checking
                    </span>
                  )}
                </div>

                {/* Vector Store */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Vector Store</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-border-subtle px-2.5 py-0.5 text-xs font-medium text-muted">
                    Not configured
                  </span>
                </div>

                {/* LLM Provider */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">LLM Provider</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-border-subtle px-2.5 py-0.5 text-xs font-medium text-muted">
                    Not configured
                  </span>
                </div>

                {/* Divider + uptime hint */}
                <div className="pt-3 border-t border-border-subtle">
                  <p className="text-xs text-muted leading-relaxed">
                    {offline
                      ? "Start the backend with: uvicorn app.main:app --reload"
                      : health
                        ? "All monitored services reporting."
                        : "Waiting for health check response..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
