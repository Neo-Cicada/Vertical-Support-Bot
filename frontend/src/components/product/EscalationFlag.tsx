"use client";

import Icon from "@/components/ui/Icon";

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
    <div className={`v-esc v-esc--${status}`}>
      <span className="v-esc__icon">
        <Icon name="alert" size={18} />
      </span>
      <div className="v-esc__body">
        <div className="v-esc__text">{children}</div>
        {action && <div className="v-esc__action">{action}</div>}
      </div>
    </div>
  );
}
