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
    <div className="bg-[radial-gradient(circle_at_1px_1px,var(--color-sand-200)_1px,transparent_0)_0_0/22px_22px,var(--color-sand-50)] border border-ink-200 rounded-lg p-6 min-h-[460px] flex items-end justify-end">
      <div
        className="w-[380px] bg-white border border-ink-200 rounded-xl shadow-md overflow-hidden flex flex-col font-sans"
      >
        {/* Header */}
        <div
          className="text-white px-[18px] py-4 flex items-center gap-[11px]"
          style={{ background: accent }}
        >
          <span className="w-[34px] h-[34px] rounded-[9px] bg-white/15 inline-flex items-center justify-center">
            <Icon name="bot" size={20} />
          </span>
          <div className="leading-tight">
            <div className="font-bold font-display">{name}</div>
            <div className="text-xs opacity-85 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />{" "}
              Online &middot; replies instantly
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="bg-paper p-4 flex flex-col gap-3 min-h-[220px]">
          {/* Bot welcome */}
          <div className="flex gap-[9px]">
            <Avatar bot size="sm" />
            <div className="bg-white border border-ink-200 rounded-[12px_12px_12px_4px] px-3 py-2.5 text-sm text-ink-900 max-w-[82%] shadow-xs">
              {welcome}
            </div>
          </div>

          {/* User message */}
          <div
            className="self-end text-white rounded-[12px_12px_4px_12px] px-3 py-2.5 text-sm max-w-[82%]"
            style={{ background: accent }}
          >
            How do I get a refund?
          </div>

          {/* Bot reply */}
          <div className="flex gap-[9px]">
            <Avatar bot size="sm" />
            <div className="max-w-[85%]">
              <div className="bg-white border border-ink-200 rounded-[12px_12px_12px_4px] px-3 py-2.5 text-sm text-ink-900 shadow-xs leading-normal">
                Refunds go back to your original payment method within 5-7
                business days.
              </div>
              {showCitations && (
                <div className="flex gap-1.5 mt-[7px] flex-wrap">
                  <SourceCitation index={1} label="faq.pdf \u00b7 p.4" />
                  <SourceCitation index={2} label="refund-policy.md" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-ink-200 p-3 flex gap-2 items-center bg-white">
          <div className="flex-1 h-[38px] border border-ink-200 rounded-full flex items-center px-3.5 text-ink-400 text-sm">
            Ask a question...
          </div>
          <span
            className="w-[38px] h-[38px] rounded-full text-white inline-flex items-center justify-center shrink-0"
            style={{ background: accent }}
          >
            <Icon name="chevronR" size={18} />
          </span>
        </div>

        {/* Footer */}
        <div className="text-center py-[7px] font-mono text-[10px] text-ink-400 bg-white border-t border-ink-100">
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
    <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-5 items-start">
      {/* Config */}
      <div className="flex flex-col gap-4">
        <Card title="Appearance" subtitle="How the widget looks on your site">
          <div className="flex flex-col gap-4 mt-0.5">
            <Input
              label="Assistant name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex flex-col gap-[7px]">
              <span className="text-[13px] font-semibold text-ink-900">
                Accent color
              </span>
              <div className="flex gap-2.5">
                {ACCENTS.map((a) => (
                  <button
                    key={a.v}
                    onClick={() => setAccent(a.v)}
                    title={a.name}
                    className="w-[34px] h-[34px] rounded-[9px] cursor-pointer"
                    style={{
                      background: a.v,
                      border:
                        accent === a.v
                          ? "2px solid var(--color-ink-900)"
                          : "2px solid transparent",
                      outline:
                        accent === a.v
                          ? "2px solid white"
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
          <div className="flex flex-col gap-3.5 mt-0.5">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-ink-900">
                  Show source citations
                </div>
                <div className="text-[12.5px] text-ink-500 mt-0.5">
                  Display the docs each answer drew from
                </div>
              </div>
              <Switch
                checked={showCitations}
                onChange={(e) => setShowCitations(e.target.checked)}
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm font-semibold text-ink-900">
                  Auto-escalate low confidence
                </div>
                <div className="text-[12.5px] text-ink-500 mt-0.5">
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

        <div className="flex gap-2.5 items-center">
          <Button iconLeft={<Icon name="check" size={16} />}>
            Publish widget
          </Button>
          <Button
            variant="secondary"
            iconLeft={<Icon name="external" size={16} />}
          >
            Open sandbox
          </Button>
          <span className="ml-auto">
            <Badge variant="success" dot>
              Live
            </Badge>
          </span>
        </div>
      </div>

      {/* Preview */}
      <div className="sticky top-0">
        <div className="text-[var(--text-sm)] text-ink-500 mb-2.5 font-mono text-[11px] tracking-[.06em] uppercase">
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
