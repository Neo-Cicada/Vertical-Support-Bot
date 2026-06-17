"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Tabs from "@/components/ui/Tabs";
import IconButton from "@/components/ui/IconButton";
import ProgressBar from "@/components/ui/ProgressBar";
import SourceDoc from "@/components/product/SourceDoc";

const DOCS = [
  {
    type: "pdf",
    name: "Billing FAQ.pdf",
    meta: "84 chunks \u00b7 synced 4m ago",
    status: ["success", "Indexed"] as const,
  },
  {
    type: "web",
    name: "help.acme.com/getting-started",
    meta: "Crawling page 6 of 21",
    status: ["warning", "Indexing"] as const,
  },
  {
    type: "md",
    name: "refund-policy.md",
    meta: "12 chunks \u00b7 synced 1h ago",
    status: ["success", "Indexed"] as const,
  },
  {
    type: "pdf",
    name: "Terms of Service.pdf",
    meta: "56 chunks \u00b7 synced 1h ago",
    status: ["success", "Indexed"] as const,
  },
  {
    type: "web",
    name: "help.acme.com/integrations",
    meta: "Last sync failed \u00b7 403",
    status: ["danger", "Failed"] as const,
  },
  {
    type: "doc",
    name: "Onboarding playbook",
    meta: "Draft \u00b7 not published",
    status: ["neutral", "Draft"] as const,
  },
  {
    type: "md",
    name: "shipping.md",
    meta: "9 chunks \u00b7 synced 2h ago",
    status: ["success", "Indexed"] as const,
  },
];

interface SourcesScreenProps {
  onAdd: () => void;
}

export default function SourcesScreen({ onAdd }: SourcesScreenProps) {
  const [filter, setFilter] = useState("all");

  const shown = DOCS.filter((d) =>
    filter === "all"
      ? true
      : filter === "issues"
        ? ["danger", "warning"].includes(d.status[0])
        : d.type === filter,
  );

  return (
    <div className="content__wide col" style={{ gap: 20 }}>
      <div className="grid-3-1">
        <Card
          title="Knowledge base"
          subtitle="6 indexed \u00b7 1 indexing \u00b7 1 failed"
          actions={
            <Button
              size="sm"
              iconLeft={<Icon name="plus" size={16} />}
              onClick={onAdd}
            >
              Add source
            </Button>
          }
        >
          <div className="col" style={{ gap: 14 }}>
            <Tabs
              value={filter}
              onChange={setFilter}
              items={[
                { id: "all", label: "All", count: DOCS.length },
                { id: "pdf", label: "PDFs" },
                { id: "web", label: "Web" },
                { id: "issues", label: "Needs attention", count: 2 },
              ]}
            />
            <div className="col" style={{ gap: 10 }}>
              {shown.map((d) => (
                <SourceDoc
                  key={d.name}
                  type={d.type}
                  name={d.name}
                  meta={d.meta}
                  status={
                    <Badge
                      variant={d.status[0]}
                      dot={d.status[0] !== "neutral"}
                    >
                      {d.status[1]}
                    </Badge>
                  }
                  trailing={
                    <IconButton aria-label="More" size="sm">
                      <Icon name="chevronR" size={16} />
                    </IconButton>
                  }
                  interactive
                />
              ))}
            </div>
          </div>
        </Card>

        <div className="col">
          <Card title="Coverage">
            <div className="col" style={{ gap: 16, marginTop: 2 }}>
              <ProgressBar
                label="Documentation coverage"
                value={78}
                showValue
              />
              <ProgressBar
                label="Freshness (synced < 24h)"
                value={92}
                showValue
                variant="accent"
              />
              <ProgressBar
                label="Gaps closed this month"
                value={32}
                showValue
                variant="warning"
                size="sm"
              />
            </div>
          </Card>
          <Card variant="sunken" padding="md">
            <div
              className="row"
              style={{ gap: 11, alignItems: "flex-start" }}
            >
              <span style={{ color: "var(--jade-600)", marginTop: 1 }}>
                <Icon name="sparkles" size={18} />
              </span>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--text-strong)",
                    fontSize: 14,
                  }}
                >
                  3 suggested sources
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    marginTop: 3,
                    lineHeight: 1.5,
                  }}
                >
                  Customers keep asking about SSO and compliance. Add a doc to
                  lift deflection ~4 pts.
                </div>
                <div style={{ marginTop: 10 }}>
                  <Button size="sm" variant="secondary">
                    Review suggestions
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
