"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Tabs from "@/components/ui/Tabs";
import MetricStat from "@/components/product/MetricStat";
import ConfidenceMeter from "@/components/product/ConfidenceMeter";

/* ── Chart ── */

const CHART_DATA = [
  { x: "Mon", v: 36 },
  { x: "Tue", v: 41 },
  { x: "Wed", v: 39 },
  { x: "Thu", v: 44 },
  { x: "Fri", v: 48 },
  { x: "Sat", v: 52 },
  { x: "Sun", v: 42 },
];

function DeflectionChart() {
  const peak = Math.max(...CHART_DATA.map((d) => d.v));
  return (
    <div className="flex items-end gap-2.5 h-[150px] pt-2">
      {CHART_DATA.map((d) => (
        <div
          className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
          key={d.x}
        >
          <div
            className={`chart__bar w-[60%] max-w-[26px] rounded-t-[4px] relative transition-[height] duration-[var(--dur-slow)] ease-[var(--ease-out)] ${d.v === peak ? "bg-jade-500" : "bg-jade-400"}`}
            data-v={d.v + "%"}
            style={{ height: (d.v / 60) * 100 + "%" }}
          />
          <span className="font-mono text-[10px] text-ink-400">{d.x}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Data ── */

const TOP_Q = [
  { q: "How do I get a refund?", n: 184 },
  { q: "Reset my password", n: 142 },
  { q: "Change billing plan", n: 96 },
  { q: "Cancel my subscription", n: 71 },
  { q: "Do you offer annual pricing?", n: 58 },
];

const GAPS: { q: string; note: string; tone: "danger" | "warning" }[] = [
  { q: "SOC 2 / compliance docs", note: "12 asks \u00b7 no source", tone: "danger" },
  { q: "API rate limits", note: "8 asks \u00b7 thin coverage", tone: "warning" },
  { q: "SSO / SAML setup", note: "6 asks \u00b7 no source", tone: "danger" },
];

/* ── Screen ── */

export default function OverviewScreen() {
  const [range, setRange] = useState("30d");
  const maxN = TOP_Q[0].n;

  return (
    <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <div>
          <div className="font-display font-bold text-lg text-ink-900 tracking-tight">
            This week
          </div>
          <div className="text-[var(--text-sm)] text-ink-500">
            Across 1,284 conversations on help.acme.com
          </div>
        </div>
        <Tabs
          variant="pill"
          value={range}
          onChange={setRange}
          items={["7d", "30d", "90d", "12m"]}
        />
      </div>

      {/* Metrics */}
      <Card padding="md">
        <div className="grid grid-cols-4 gap-4">
          <MetricStat
            label="Deflection rate"
            icon={<Icon name="trending" size={15} />}
            value="42"
            unit="%"
            delta="+6 pts"
            direction="up"
            sub="vs. last 30 days"
          />
          <MetricStat
            label="Conversations"
            icon={<Icon name="message" size={15} />}
            value="1,284"
            delta="+18%"
            direction="up"
            sub="416 this week"
          />
          <MetricStat
            label="Escalations"
            icon={<Icon name="alert" size={15} />}
            value="73"
            delta="-9%"
            direction="down"
            sub="lower is better"
          />
          <MetricStat
            label="Avg. response"
            icon={<Icon name="clock" size={15} />}
            value="1.4"
            unit="s"
            delta="flat"
            direction="flat"
            sub="median latency"
          />
        </div>
      </Card>

      {/* Chart + Confidence */}
      <div className="grid grid-cols-[1.6fr_1fr] gap-4">
        <Card
          title="Deflection rate"
          subtitle="Resolved without a human, by day"
          actions={
            <Badge variant="accent" mono>
              avg 43%
            </Badge>
          }
        >
          <DeflectionChart />
        </Card>
        <Card title="Answer confidence" subtitle="Last 1,000 answers">
          <div className="flex flex-col gap-3.5 mt-1">
            {(["high", "medium", "low"] as const).map((level) => (
              <div
                key={level}
                className="flex justify-between items-center"
              >
                <ConfidenceMeter level={level} />
                <span className="font-mono text-[13px] text-ink-500">
                  {level === "high" ? "71%" : level === "medium" ? "22%" : "7%"}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top questions + Gaps */}
      <div className="grid grid-cols-2 gap-4">
        <Card title="Top questions" subtitle="What customers ask most">
          <div>
            {TOP_Q.map((t, i) => (
              <div
                className="flex items-center gap-3 py-[11px] border-b border-ink-100 last:border-b-0"
                key={t.q}
              >
                <span className="font-mono text-xs text-ink-400 w-[22px] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[var(--text-ui)] text-ink-900">
                  {t.q}
                </span>
                <span className="w-[84px] h-1.5 rounded-full bg-ink-100 overflow-hidden shrink-0">
                  <i
                    className="block h-full bg-jade-400"
                    style={{ width: (t.n / maxN) * 100 + "%" }}
                  />
                </span>
                <span className="font-mono text-[var(--text-sm)] text-ink-500">
                  {t.n}
                </span>
              </div>
            ))}
          </div>
        </Card>
        <Card
          title="Coverage gaps"
          subtitle="Asked often, weakly sourced"
          actions={
            <Icon
              name="sparkles"
              size={16}
              className="text-jade-500"
            />
          }
        >
          <div className="flex flex-col gap-2.5">
            {GAPS.map((g) => (
              <div
                key={g.q}
                className="flex items-center justify-between p-[10px_12px] bg-sand-50 rounded-md"
              >
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {g.q}
                  </div>
                  <div className="font-mono text-[11px] text-ink-400 mt-0.5">
                    {g.note}
                  </div>
                </div>
                <Badge variant={g.tone}>
                  {g.tone === "danger" ? "Add source" : "Improve"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
