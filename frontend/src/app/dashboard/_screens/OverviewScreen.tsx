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
    <div className="chart">
      {CHART_DATA.map((d) => (
        <div className="chart__col" key={d.x}>
          <div
            className={`chart__bar${d.v === peak ? " is-peak" : ""}`}
            data-v={d.v + "%"}
            style={{ height: (d.v / 60) * 100 + "%" }}
          />
          <span className="chart__x">{d.x}</span>
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
    <div className="content__wide col" style={{ gap: 20 }}>
      {/* Header row */}
      <div
        className="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <div>
          <div className="sectiontitle">This week</div>
          <div className="sectionsub">
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
        <div className="grid-4">
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
      <div className="grid-3-1">
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
          <div className="col" style={{ gap: 14, marginTop: 4 }}>
            {(["high", "medium", "low"] as const).map((level) => (
              <div
                key={level}
                className="row"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ConfidenceMeter level={level} />
                <span
                  style={{
                    fontFamily: "var(--font-mono-stack)",
                    fontSize: 13,
                    color: "var(--text-muted)",
                  }}
                >
                  {level === "high" ? "71%" : level === "medium" ? "22%" : "7%"}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top questions + Gaps */}
      <div className="grid-2">
        <Card title="Top questions" subtitle="What customers ask most">
          <div>
            {TOP_Q.map((t, i) => (
              <div className="qrow" key={t.q}>
                <span className="qrow__rank">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="qrow__q">{t.q}</span>
                <span className="qrow__bar">
                  <i style={{ width: (t.n / maxN) * 100 + "%" }} />
                </span>
                <span className="qrow__n">{t.n}</span>
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
              style={{ color: "var(--jade-500)" }}
            />
          }
        >
          <div className="col" style={{ gap: 10 }}>
            {GAPS.map((g) => (
              <div
                key={g.q}
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  background: "var(--surface-sunken)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text-strong)",
                    }}
                  >
                    {g.q}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono-stack)",
                      fontSize: 11,
                      color: "var(--text-subtle)",
                      marginTop: 2,
                    }}
                  >
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
