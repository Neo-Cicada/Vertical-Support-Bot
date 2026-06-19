"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";
import IconButton from "@/components/ui/IconButton";
import Tabs from "@/components/ui/Tabs";
import Tag from "@/components/ui/Tag";
import MetricStat from "@/components/product/MetricStat";
import ProgressBar from "@/components/ui/ProgressBar";

/* ── Settings tabs ── */

const SETTINGS_TABS = [
  { id: "general", label: "General" },
  { id: "members", label: "Members" },
  { id: "billing", label: "Billing" },
  { id: "notifications", label: "Notifications" },
  { id: "security", label: "API & security" },
];

/* ── Shared helpers ── */

function SettingRow({
  title,
  desc,
  last,
  children,
}: {
  title: string;
  desc?: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="row"
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
        padding: "16px 0",
        borderBottom: last ? "none" : "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: 420 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text-strong)",
          }}
        >
          {title}
        </div>
        {desc && (
          <div
            style={{
              fontSize: 12.5,
              color: "var(--text-muted)",
              marginTop: 3,
              lineHeight: 1.5,
            }}
          >
            {desc}
          </div>
        )}
      </div>
      <div style={{ flex: "none" }}>{children}</div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: ".07em",
        textTransform: "uppercase",
        color: "var(--text-subtle)",
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}

/* ── General tab ── */

function GeneralTab() {
  return (
    <div className="col" style={{ gap: 18 }}>
      <Card
        title="Workspace"
        subtitle="How this tenant is identified across Vertical"
      >
        <div className="col" style={{ gap: 16, marginTop: 4 }}>
          <Input label="Workspace name" defaultValue="Acme Support" />
          <Input
            label="Workspace ID"
            defaultValue="acme-support"
            hint="Used in your widget snippet and API calls. Lowercase, no spaces."
            iconLeft={<Icon name="globe" size={16} />}
          />
          <div className="grid-2">
            <Select
              label="Data region"
              defaultValue="us"
              options={[
                { value: "us", label: "United States (us-east-1)" },
                { value: "eu", label: "European Union (eu-west-1)" },
                { value: "ap", label: "Asia Pacific (ap-southeast-2)" },
              ]}
            />
            <Select
              label="Default language"
              defaultValue="en"
              options={[
                { value: "en", label: "English" },
                { value: "es", label: "Spanish" },
                { value: "fr", label: "French" },
                { value: "de", label: "German" },
              ]}
            />
          </div>
        </div>
      </Card>

      <Card
        title="Localization"
        subtitle="Defaults applied to new conversations"
      >
        <SettingRow
          title="Time zone"
          desc="Used for analytics and conversation timestamps."
        >
          <div style={{ width: 260 }}>
            <Select
              defaultValue="pt"
              options={[
                { value: "pt", label: "Pacific (UTC\u22128)" },
                { value: "et", label: "Eastern (UTC\u22125)" },
                { value: "gmt", label: "London (UTC+0)" },
                { value: "cet", label: "Central Europe (UTC+1)" },
              ]}
            />
          </div>
        </SettingRow>
        <SettingRow title="Week starts on">
          <div style={{ width: 260 }}>
            <Select
              defaultValue="mon"
              options={[
                { value: "sun", label: "Sunday" },
                { value: "mon", label: "Monday" },
              ]}
            />
          </div>
        </SettingRow>
        <SettingRow
          title='Show a "Grounded by Vertical" badge'
          desc="Displayed at the bottom of the widget. Hidden on Scale plans."
          last
        >
          <Switch defaultChecked />
        </SettingRow>
      </Card>

      <Card
        className="v-card--danger"
        style={{
          borderColor: "var(--clay-200)",
        }}
      >
        <SectionLabel>Danger zone</SectionLabel>
        <div
          className="row"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--text-strong)",
              }}
            >
              Delete this workspace
            </div>
            <div
              style={{
                fontSize: 12.5,
                color: "var(--text-muted)",
                marginTop: 3,
                lineHeight: 1.5,
              }}
            >
              Permanently removes all sources, conversations, and embeddings for
              Acme Support. This cannot be undone.
            </div>
          </div>
          <Button
            variant="danger"
            iconLeft={<Icon name="trash" size={16} />}
          >
            Delete workspace
          </Button>
        </div>
      </Card>

      <div
        className="row"
        style={{ gap: 10, alignItems: "center", paddingTop: 2 }}
      >
        <Button iconLeft={<Icon name="check" size={16} />}>
          Save changes
        </Button>
        <Button variant="ghost">Cancel</Button>
      </div>
    </div>
  );
}

/* ── Members tab ── */

const MEMBERS = [
  { name: "Dana Whitfield", email: "dana@acme.com", role: "owner", you: true },
  { name: "Marcus Lee", email: "marcus@acme.com", role: "admin" },
  { name: "Priya Nair", email: "priya@acme.com", role: "editor" },
  { name: "Tom Alvarez", email: "tom@acme.com", role: "viewer" },
];

const PENDING = [
  { email: "sofia@acme.com", role: "editor", sent: "sent 2d ago" },
];

const ROLE_OPTS = [
  { value: "owner", label: "Owner" },
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

function MembersTab() {
  return (
    <div className="col" style={{ gap: 18 }}>
      <Card
        title="Invite a teammate"
        subtitle="They\u2019ll get access to this workspace only"
      >
        <div
          className="row"
          style={{ gap: 10, alignItems: "flex-end", marginTop: 4 }}
        >
          <div style={{ flex: 1 }}>
            <Input
              label="Email address"
              placeholder="name@acme.com"
              iconLeft={<Icon name="mail" size={16} />}
            />
          </div>
          <div style={{ width: 160 }}>
            <Select
              label="Role"
              defaultValue="editor"
              options={ROLE_OPTS.filter((r) => r.value !== "owner")}
            />
          </div>
          <Button iconLeft={<Icon name="plus" size={16} />}>
            Send invite
          </Button>
        </div>
      </Card>

      <Card
        title="Members"
        subtitle={`${MEMBERS.length} people \u00b7 ${PENDING.length} pending`}
      >
        <div className="col" style={{ gap: 0, marginTop: 2 }}>
          {MEMBERS.map((m) => (
            <div
              key={m.email}
              className="row"
              style={{
                alignItems: "center",
                gap: 14,
                padding: "13px 0",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <Avatar name={m.name} size="md" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  className="row"
                  style={{ gap: 8, alignItems: "center" }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text-strong)",
                    }}
                  >
                    {m.name}
                  </span>
                  {m.you && <Badge variant="outline">You</Badge>}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--text-subtle)",
                    marginTop: 2,
                  }}
                >
                  {m.email}
                </div>
              </div>
              <div style={{ width: 150, flex: "none" }}>
                {m.role === "owner" ? (
                  <Badge variant="accent" dot>
                    Owner
                  </Badge>
                ) : (
                  <Select
                    defaultValue={m.role}
                    options={ROLE_OPTS.filter((r) => r.value !== "owner")}
                  />
                )}
              </div>
              <IconButton
                aria-label="Remove member"
                size="sm"
                disabled={m.role === "owner"}
              >
                <Icon name="trash" size={16} />
              </IconButton>
            </div>
          ))}

          {PENDING.map((p) => (
            <div
              key={p.email}
              className="row"
              style={{
                alignItems: "center",
                gap: 14,
                padding: "13px 0",
              }}
            >
              <Avatar
                name={p.email}
                size="md"
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "var(--text-body)",
                  }}
                >
                  {p.email}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-subtle)",
                    marginTop: 2,
                  }}
                >
                  {p.sent}
                </div>
              </div>
              <Badge variant="warning" dot>
                Pending
              </Badge>
              <Button size="sm" variant="ghost">
                Resend
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ── Billing tab ── */

const INVOICES = [
  { id: "INV-2026-0006", date: "Jun 1, 2026", amount: "$249.00" },
  { id: "INV-2026-0005", date: "May 1, 2026", amount: "$249.00" },
  { id: "INV-2026-0004", date: "Apr 1, 2026", amount: "$249.00" },
];

function BillingTab() {
  return (
    <div className="col" style={{ gap: 18 }}>
      <Card>
        <div
          className="row"
          style={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          <div>
            <div className="row" style={{ gap: 10, alignItems: "center" }}>
              <span className="sectiontitle">Growth</span>
              <Badge variant="success" dot>
                Active
              </Badge>
            </div>
            <div
              style={{
                fontSize: 13.5,
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-strong)",
                }}
              >
                $249
              </span>{" "}
              / month &middot; per-tenant &middot; renews Jul 1, 2026
            </div>
          </div>
          <div className="row" style={{ gap: 10 }}>
            <Button variant="secondary">Change plan</Button>
            <Button>Upgrade to Scale</Button>
          </div>
        </div>

        <div
          style={{
            height: 1,
            background: "var(--border-subtle)",
            margin: "20px 0",
          }}
        />

        <div className="grid-3-1" style={{ alignItems: "center" }}>
          <ProgressBar
            label="Conversations this cycle"
            value={8420}
            max={25000}
            showValue
          />
          <div
            style={{
              textAlign: "right",
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--text-muted)",
            }}
          >
            <span style={{ color: "var(--text-strong)" }}>8,420</span> / 25,000
          </div>
        </div>
      </Card>

      <div className="grid-4">
        <MetricStat
          icon={<Icon name="message" size={16} />}
          label="Conversations"
          value="8,420"
          sub="this billing cycle"
        />
        <MetricStat
          icon={<Icon name="sources" size={16} />}
          label="Sources indexed"
          value="12"
          sub="of 50 included"
        />
        <MetricStat
          icon={<Icon name="users" size={16} />}
          label="Seats used"
          value="4"
          sub="of 10 included"
        />
        <MetricStat
          icon={<Icon name="trending" size={16} />}
          label="Est. next invoice"
          value="$249"
          sub="due Jul 1"
        />
      </div>

      <Card title="Payment method">
        <div
          className="row"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <div className="row" style={{ gap: 12, alignItems: "center" }}>
            <span
              style={{
                width: 40,
                height: 28,
                borderRadius: 6,
                background: "var(--ink-900)",
                color: "var(--paper)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="card" size={16} />
            </span>
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-strong)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
                &bull;&bull;&bull;&bull; 4242
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 2,
                }}
              >
                Visa &middot; expires 09/27 &middot; billing@acme.com
              </div>
            </div>
          </div>
          <Button variant="secondary">Update</Button>
        </div>
      </Card>

      <Card title="Invoices">
        <div className="col" style={{ gap: 0, marginTop: 2 }}>
          {INVOICES.map((inv, i) => (
            <div
              key={inv.id}
              className="row"
              style={{
                alignItems: "center",
                gap: 14,
                padding: "12px 0",
                borderBottom:
                  i === INVOICES.length - 1
                    ? "none"
                    : "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ color: "var(--text-subtle)" }}>
                <Icon name="file" size={18} />
              </span>
              <span
                style={{
                  flex: 1,
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--text-strong)",
                }}
              >
                {inv.id}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  width: 120,
                }}
              >
                {inv.date}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--text-strong)",
                  width: 80,
                  textAlign: "right",
                }}
              >
                {inv.amount}
              </span>
              <Button
                size="sm"
                variant="ghost"
                iconLeft={<Icon name="external" size={15} />}
              >
                PDF
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ── Notifications tab ── */

function NotificationsTab() {
  return (
    <div className="col" style={{ gap: 18 }}>
      <Card title="Email alerts" subtitle="Sent to your account address">
        <div style={{ marginTop: 2 }}>
          <SettingRow
            title="New escalation"
            desc="A conversation was handed off to your team."
          >
            <Switch defaultChecked />
          </SettingRow>
          <SettingRow
            title="Source sync failed"
            desc="A crawl or upload couldn\u2019t be indexed."
          >
            <Switch defaultChecked />
          </SettingRow>
          <SettingRow
            title="Coverage gap detected"
            desc="Customers are asking about something your docs don\u2019t cover."
          >
            <Switch defaultChecked />
          </SettingRow>
          <SettingRow
            title="Product updates"
            desc="Occasional news about new Vertical features."
            last
          >
            <Switch />
          </SettingRow>
        </div>
      </Card>

      <Card
        title="Weekly digest"
        subtitle="A summary of deflection, top questions, and gaps"
      >
        <SettingRow title="Send weekly digest">
          <Switch defaultChecked />
        </SettingRow>
        <SettingRow title="Delivery day" last>
          <div style={{ width: 200 }}>
            <Select
              defaultValue="mon"
              options={[
                { value: "mon", label: "Monday morning" },
                { value: "fri", label: "Friday afternoon" },
              ]}
            />
          </div>
        </SettingRow>
      </Card>

      <Card
        title="Escalation routing"
        subtitle="Where handed-off conversations go"
      >
        <SettingRow
          title="Primary channel"
          desc="Used when an escalation rule fires."
        >
          <div style={{ width: 200 }}>
            <Select
              defaultValue="slack"
              options={[
                { value: "email", label: "Email" },
                { value: "slack", label: "Slack" },
                { value: "zendesk", label: "Zendesk" },
              ]}
            />
          </div>
        </SettingRow>
        <SettingRow
          title="Slack channel"
          desc="Connected to acme.slack.com"
          last
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--text-accent)",
            }}
          >
            #support-escalations
          </span>
        </SettingRow>
      </Card>
    </div>
  );
}

/* ── API & Security tab ── */

const API_KEYS = [
  {
    label: "Production",
    prefix: "vk_live_",
    tail: "a91f",
    created: "Mar 12, 2026",
    used: "4m ago",
  },
  {
    label: "Staging",
    prefix: "vk_test_",
    tail: "7c20",
    created: "Jan 8, 2026",
    used: "2d ago",
  },
];

function SecurityTab() {
  const [domains, setDomains] = useState([
    "acme.com",
    "help.acme.com",
    "app.acme.com",
  ]);

  return (
    <div className="col" style={{ gap: 18 }}>
      <Card
        title="API keys"
        subtitle="Authenticate server-side calls to the Vertical API"
        actions={
          <Button size="sm" iconLeft={<Icon name="plus" size={16} />}>
            Create key
          </Button>
        }
      >
        <div className="col" style={{ gap: 0, marginTop: 2 }}>
          {API_KEYS.map((k, i) => (
            <div
              key={k.label}
              className="row"
              style={{
                alignItems: "center",
                gap: 14,
                padding: "14px 0",
                borderBottom:
                  i === API_KEYS.length - 1
                    ? "none"
                    : "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ color: "var(--text-subtle)" }}>
                <Icon name="key" size={18} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  className="row"
                  style={{ gap: 8, alignItems: "center" }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text-strong)",
                    }}
                  >
                    {k.label}
                  </span>
                  <Badge
                    variant={
                      k.prefix === "vk_live_" ? "accent" : "neutral"
                    }
                  >
                    {k.prefix === "vk_live_" ? "Live" : "Test"}
                  </Badge>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12.5,
                    color: "var(--text-subtle)",
                    marginTop: 3,
                  }}
                >
                  {k.prefix}&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                  {k.tail} &middot; created {k.created} &middot; last used{" "}
                  {k.used}
                </div>
              </div>
              <IconButton aria-label="Copy key" size="sm">
                <Icon name="copy" size={16} />
              </IconButton>
              <Button size="sm" variant="ghost">
                Revoke
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <Card
        title="Allowed domains"
        subtitle="The widget will only load on these origins"
      >
        <div className="col" style={{ gap: 14, marginTop: 2 }}>
          <div
            className="row"
            style={{ gap: 8, flexWrap: "wrap", alignItems: "center" }}
          >
            {domains.map((d) => (
              <Tag
                key={d}
                mono
                onRemove={() =>
                  setDomains(domains.filter((x) => x !== d))
                }
              >
                {d}
              </Tag>
            ))}
          </div>
          <div
            className="row"
            style={{ gap: 10, alignItems: "flex-end" }}
          >
            <div style={{ flex: 1, maxWidth: 320 }}>
              <Input
                placeholder="add a domain, e.g. shop.acme.com"
                iconLeft={<Icon name="globe" size={16} />}
              />
            </div>
            <Button
              variant="secondary"
              iconLeft={<Icon name="plus" size={16} />}
            >
              Add domain
            </Button>
          </div>
        </div>
      </Card>

      <Card
        title="Access & retention"
        subtitle="Workspace-wide security controls"
      >
        <div style={{ marginTop: 2 }}>
          <SettingRow
            title="Require single sign-on (SSO)"
            desc="Members must authenticate through your SAML provider."
          >
            <Switch />
          </SettingRow>
          <SettingRow
            title="Require two-factor authentication"
            desc="Enforce 2FA for every member of this workspace."
          >
            <Switch defaultChecked />
          </SettingRow>
          <SettingRow
            title="Conversation retention"
            desc="How long transcripts are stored before automatic deletion."
          >
            <div style={{ width: 200 }}>
              <Select
                defaultValue="365"
                options={[
                  { value: "30", label: "30 days" },
                  { value: "90", label: "90 days" },
                  { value: "365", label: "12 months" },
                  { value: "0", label: "Keep forever" },
                ]}
              />
            </div>
          </SettingRow>
          <SettingRow
            title="Redact PII from training"
            desc="Strip emails and phone numbers before embedding."
            last
          >
            <Switch defaultChecked />
          </SettingRow>
        </div>
      </Card>
    </div>
  );
}

/* ── Settings screen ── */

export default function SettingsScreen() {
  const [tab, setTab] = useState("general");

  return (
    <div
      className="content__wide"
      style={{ maxWidth: 880, margin: "0 auto" }}
    >
      <div style={{ marginBottom: 22 }}>
        <Tabs
          value={tab}
          onChange={setTab}
          items={SETTINGS_TABS}
        />
      </div>
      {tab === "general" && <GeneralTab />}
      {tab === "members" && <MembersTab />}
      {tab === "billing" && <BillingTab />}
      {tab === "notifications" && <NotificationsTab />}
      {tab === "security" && <SecurityTab />}
    </div>
  );
}
