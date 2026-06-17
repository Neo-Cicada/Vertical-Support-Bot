"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import SourceCitation from "@/components/product/SourceCitation";

/* ── Accent colors ── */

const ACCENTS = [
  { name: "Jade", v: "#0E7A54" },
  { name: "Slate", v: "#2F6E8C" },
  { name: "Clay", v: "#BE4A30" },
  { name: "Ink", v: "#1F262A" },
];

/* ── Widget Preview ── */

function WidgetPreview({
  accent,
  name,
  welcome,
  showCitations,
}: {
  accent: string;
  name: string;
  welcome: string;
  showCitations: boolean;
}) {
  return (
    <div className="widget-preview-stage">
      <div
        style={{
          width: 380,
          background: "var(--surface-card)",
          border: "1px solid var(--border-default)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-md)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: accent,
            color: "#fff",
            padding: "16px 18px",
            display: "flex",
            alignItems: "center",
            gap: 11,
          }}
        >
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: "rgba(255,255,255,.16)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="bot" size={20} />
          </span>
          <div style={{ lineHeight: 1.25 }}>
            <div
              style={{
                fontWeight: 700,
                fontFamily: "var(--font-display)",
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: 12,
                opacity: 0.85,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 99,
                  background: "#fff",
                  display: "inline-block",
                }}
              />{" "}
              Online &middot; replies instantly
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            background: "var(--paper)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 220,
          }}
        >
          {/* Bot welcome */}
          <div style={{ display: "flex", gap: 9 }}>
            <Avatar bot size="sm" />
            <div
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-default)",
                borderRadius: "12px 12px 12px 4px",
                padding: "10px 12px",
                fontSize: 14,
                color: "var(--text-strong)",
                maxWidth: "82%",
                boxShadow: "var(--shadow-xs)",
              }}
            >
              {welcome}
            </div>
          </div>

          {/* User message */}
          <div
            style={{
              alignSelf: "flex-end",
              background: accent,
              color: "#fff",
              borderRadius: "12px 12px 4px 12px",
              padding: "10px 12px",
              fontSize: 14,
              maxWidth: "82%",
            }}
          >
            How do I get a refund?
          </div>

          {/* Bot reply */}
          <div style={{ display: "flex", gap: 9 }}>
            <Avatar bot size="sm" />
            <div style={{ maxWidth: "85%" }}>
              <div
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-default)",
                  borderRadius: "12px 12px 12px 4px",
                  padding: "10px 12px",
                  fontSize: 14,
                  color: "var(--text-strong)",
                  boxShadow: "var(--shadow-xs)",
                  lineHeight: 1.5,
                }}
              >
                Refunds go back to your original payment method within 5-7
                business days.
              </div>
              {showCitations && (
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    marginTop: 7,
                    flexWrap: "wrap",
                  }}
                >
                  <SourceCitation index={1} label="faq.pdf \u00b7 p.4" />
                  <SourceCitation index={2} label="refund-policy.md" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Composer */}
        <div
          style={{
            borderTop: "1px solid var(--border-default)",
            padding: 12,
            display: "flex",
            gap: 8,
            alignItems: "center",
            background: "var(--surface-card)",
          }}
        >
          <div
            style={{
              flex: 1,
              height: 38,
              border: "1px solid var(--border-default)",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              color: "var(--text-subtle)",
              fontSize: 14,
            }}
          >
            Ask a question...
          </div>
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              background: accent,
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon name="chevronR" size={18} />
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            padding: 7,
            fontFamily: "var(--font-mono-stack)",
            fontSize: 10,
            color: "var(--text-subtle)",
            background: "var(--surface-card)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          Grounded by Vertical
        </div>
      </div>
    </div>
  );
}

/* ── Screen ── */

export default function WidgetScreen() {
  const [accent, setAccent] = useState(ACCENTS[0].v);
  const [name, setName] = useState("Acme Assistant");
  const [welcome, setWelcome] = useState(
    "Hi! Ask me anything about Acme -- I answer from our help docs.",
  );
  const [showCitations, setShowCitations] = useState(true);

  return (
    <div
      className="content__wide"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        alignItems: "start",
      }}
    >
      {/* Config */}
      <div className="col" style={{ gap: 16 }}>
        <Card title="Appearance" subtitle="How the widget looks on your site">
          <div className="col" style={{ gap: 16, marginTop: 2 }}>
            <Input
              label="Assistant name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="col" style={{ gap: 7 }}>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-strong)",
                }}
              >
                Accent color
              </span>
              <div className="row" style={{ gap: 10 }}>
                {ACCENTS.map((a) => (
                  <button
                    key={a.v}
                    onClick={() => setAccent(a.v)}
                    title={a.name}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: a.v,
                      cursor: "pointer",
                      border:
                        accent === a.v
                          ? "2px solid var(--ink-900)"
                          : "2px solid transparent",
                      outline:
                        accent === a.v
                          ? "2px solid var(--white)"
                          : "none",
                      outlineOffset: -4,
                    }}
                  />
                ))}
              </div>
            </div>
            <Textarea
              label="Welcome message"
              value={welcome}
              onChange={(e) => setWelcome(e.target.value)}
            />
          </div>
        </Card>

        <Card title="Behavior" subtitle="Grounding & escalation">
          <div className="col" style={{ gap: 14, marginTop: 2 }}>
            <div
              className="row"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
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
                  Show source citations
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--text-muted)",
                    marginTop: 2,
                  }}
                >
                  Display the docs each answer drew from
                </div>
              </div>
              <Switch
                checked={showCitations}
                onChange={(e) => setShowCitations(e.target.checked)}
              />
            </div>
            <div
              className="row"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
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
                  Auto-escalate low confidence
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--text-muted)",
                    marginTop: 2,
                  }}
                >
                  Hand off when no confident source is found
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <Select
              label="Escalation channel"
              options={["Email", "Slack", "Zendesk", "None"]}
            />
          </div>
        </Card>

        <div className="row" style={{ gap: 10, alignItems: "center" }}>
          <Button iconLeft={<Icon name="check" size={16} />}>
            Publish widget
          </Button>
          <Button
            variant="secondary"
            iconLeft={<Icon name="external" size={16} />}
          >
            Open sandbox
          </Button>
          <span style={{ marginLeft: "auto" }}>
            <Badge variant="success" dot>
              Live
            </Badge>
          </span>
        </div>
      </div>

      {/* Preview */}
      <div style={{ position: "sticky", top: 0 }}>
        <div
          className="sectionsub"
          style={{
            marginBottom: 10,
            fontFamily: "var(--font-mono-stack)",
            fontSize: 11,
            letterSpacing: ".06em",
            textTransform: "uppercase",
          }}
        >
          Live preview
        </div>
        <WidgetPreview
          accent={accent}
          name={name}
          welcome={welcome}
          showCitations={showCitations}
        />
      </div>
    </div>
  );
}
