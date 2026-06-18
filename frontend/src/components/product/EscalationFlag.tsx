"use client";

import Icon from "@/components/ui/Icon";

const statusClasses = {
  escalated: "bg-clay-100 border border-clay-500",
  pending:   "bg-amber-100 border border-amber-500",
  resolved:  "bg-jade-50 border border-jade-500",
} as const;

const iconColors = {
  escalated: "text-clay-500",
  pending:   "text-amber-500",
  resolved:  "text-jade-500",
} as const;

interface EscalationFlagProps {
  status?: "escalated" | "pending" | "resolved";
  action?: React.ReactNode;
  children: React.ReactNode;
}

export default function EscalationFlag({
  status = "escalated",
  action,
  children,
}: EscalationFlagProps) {
  return (
    <div
      className={`flex gap-3 px-4 py-3.5 rounded-md items-start ${statusClasses[status]}`}
    >
      <span className={`shrink-0 mt-px ${iconColors[status]}`}>
        <Icon name="alert" size={18} />
      </span>
      <div className="flex-1">
        <div className="text-[var(--text-ui)] text-ink-900">{children}</div>
        {action && <div className="mt-2.5">{action}</div>}
      </div>
    </div>
  );
}
