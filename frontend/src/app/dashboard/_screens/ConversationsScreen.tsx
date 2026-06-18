"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import ConfidenceMeter from "@/components/product/ConfidenceMeter";
import SourceCitation from "@/components/product/SourceCitation";
import ChatBubble from "@/components/product/ChatBubble";
import EscalationFlag from "@/components/product/EscalationFlag";

/* ── Data ── */

type Convo = {
  id: string;
  q: string;
  meta: string;
  status: [string, string];
  conf: "high" | "medium" | "low";
  turns: {
    role: "user" | "assistant";
    text: string;
    cites?: [string, number][];
    escalate?: boolean;
    conf?: "high" | "medium" | "low";
  }[];
};

const CONVOS: Convo[] = [
  {
    id: "1284",
    q: "How do I get a refund on an annual plan?",
    meta: "#1284 \u00b7 2m ago \u00b7 resolved by Vertical",
    status: ["success", "Resolved"],
    conf: "high",
    turns: [
      { role: "user", text: "How do I get a refund on an annual plan?" },
      {
        role: "assistant",
        text: "Annual plans are refundable on a pro-rated basis within 30 days of renewal. The unused portion is returned to your original payment method in 5\u20137 business days.",
        cites: [
          ["faq.pdf \u00b7 p.4", 1],
          ["refund-policy.md \u00b7 \u00a72", 2],
        ],
        conf: "high",
      },
    ],
  },
  {
    id: "1283",
    q: "Do you support SAML single sign-on?",
    meta: "#1283 \u00b7 14m ago \u00b7 escalated",
    status: ["danger", "Escalated"],
    conf: "low",
    turns: [
      { role: "user", text: "Do you support SAML single sign-on?" },
      {
        role: "assistant",
        text: "I couldn\u2019t find a confident answer for this in your help center.",
        escalate: true,
        conf: "low",
      },
    ],
  },
  {
    id: "1282",
    q: "Change the card on file",
    meta: "#1282 \u00b7 31m ago \u00b7 resolved by Vertical",
    status: ["success", "Resolved"],
    conf: "high",
    turns: [
      { role: "user", text: "How do I change the card on file?" },
      {
        role: "assistant",
        text: 'Go to Settings \u2192 Billing \u2192 Payment method and choose "Update card." The new card is used from your next invoice.',
        cites: [["help/billing/payment", 1]],
        conf: "high",
      },
    ],
  },
  {
    id: "1281",
    q: "Is there an API rate limit?",
    meta: "#1281 \u00b7 1h ago \u00b7 medium confidence",
    status: ["warning", "Review"],
    conf: "medium",
    turns: [
      { role: "user", text: "Is there an API rate limit?" },
      {
        role: "assistant",
        text: "The documented limit is 600 requests per minute per workspace. I\u2019m only moderately confident \u2014 this page may be out of date.",
        cites: [["help/api/limits", 1]],
        conf: "medium",
      },
    ],
  },
];

/* ── Transcript ── */

function Transcript({ convo }: { convo: Convo }) {
  return (
    <div className="bg-paper border border-ink-200 rounded-lg p-[22px] flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-ink-100">
        <div>
          <div className="font-semibold text-ink-900">{convo.q}</div>
          <div className="font-mono text-[11px] text-ink-400 mt-[3px]">
            {convo.meta}
          </div>
        </div>
        <Badge
          variant={convo.status[0] as "success" | "danger" | "warning"}
          dot={convo.status[0] !== "neutral"}
        >
          {convo.status[1]}
        </Badge>
      </div>

      {convo.turns.map((t, i) =>
        t.role === "user" ? (
          <ChatBubble key={i} role="user">
            {t.text}
          </ChatBubble>
        ) : (
          <ChatBubble
            key={i}
            role="assistant"
            avatar={<Avatar bot />}
            name="Vertical"
            citations={
              t.cites
                ? t.cites.map(([label, idx]) => (
                    <SourceCitation key={idx} index={idx} label={label} />
                  ))
                : undefined
            }
          >
            {t.text}
          </ChatBubble>
        ),
      )}

      {convo.conf === "low" ? (
        <EscalationFlag
          status="escalated"
          action={
            <Button size="sm" variant="secondary">
              Assign to me
            </Button>
          }
        >
          No confident source found. A teammate was notified.
        </EscalationFlag>
      ) : (
        <div className="flex items-center gap-2.5 pt-1">
          <span className="font-mono text-[11px] text-ink-400">
            RETRIEVAL
          </span>
          <ConfidenceMeter level={convo.conf} showPercent />
        </div>
      )}
    </div>
  );
}

/* ── Screen ── */

export default function ConversationsScreen() {
  const [sel, setSel] = useState(CONVOS[0].id);
  const convo = CONVOS.find((c) => c.id === sel)!;

  return (
    <div className="max-w-[1180px] mx-auto grid grid-cols-[1fr_1.4fr] gap-4 items-start">
      <div className="flex flex-col gap-2.5">
        {CONVOS.map((c) => (
          <button
            key={c.id}
            className={`flex items-center gap-3.5 px-4 py-[13px] cursor-pointer bg-white border rounded-md transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] w-full text-left hover:border-ink-300 hover:shadow-sm ${
              c.id === sel
                ? "border-jade-300 shadow-accent"
                : "border-ink-200"
            }`}
            onClick={() => setSel(c.id)}
          >
            <span className="shrink-0">
              <ConfidenceMeter
                level={c.conf}
                segments={3}
                showLabel={false}
              />
            </span>
            <span className="flex-1 min-w-0 flex flex-col">
              <span className="text-[var(--text-ui)] font-semibold text-ink-900 overflow-hidden text-ellipsis whitespace-nowrap">
                {c.q}
              </span>
              <span className="font-mono text-[11px] text-ink-400 mt-0.5">
                {c.meta}
              </span>
            </span>
            <Badge
              variant={c.status[0] as "success" | "danger" | "warning"}
              dot={c.status[0] !== "neutral"}
            >
              {c.status[1]}
            </Badge>
          </button>
        ))}
      </div>
      <Transcript convo={convo} />
    </div>
  );
}
