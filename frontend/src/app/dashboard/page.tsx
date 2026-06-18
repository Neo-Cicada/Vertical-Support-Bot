"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Dialog from "@/components/ui/Dialog";
import Input from "@/components/ui/Input";
import Toast from "@/components/ui/Toast";
import OverviewScreen from "./_screens/OverviewScreen";
import SourcesScreen from "./_screens/SourcesScreen";
import ConversationsScreen from "./_screens/ConversationsScreen";
import WidgetScreen from "./_screens/WidgetScreen";

const TITLES: Record<string, [string, string]> = {
  overview: ["Overview", "Last updated just now"],
  sources: ["Sources", "Your indexed knowledge base"],
  conversations: ["Conversations", "Every question, grounded and logged"],
  widget: ["Widget", "Configure the embeddable assistant"],
};

export default function DashboardPage() {
  const [screen, setScreen] = useState("overview");
  const [addOpen, setAddOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [t, sub] = TITLES[screen];

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(false), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <div className="dash">
      <Sidebar active={screen} onNavigate={setScreen} />
      <div className="main">
        <Topbar title={t} subtitle={sub}>
          {screen === "overview" && (
            <Button
              size="sm"
              variant="secondary"
              iconLeft={<Icon name="external" size={16} />}
            >
              Export
            </Button>
          )}
          {screen === "sources" && (
            <Button
              size="sm"
              iconLeft={<Icon name="plus" size={16} />}
              onClick={() => setAddOpen(true)}
            >
              Add source
            </Button>
          )}
        </Topbar>
        <div className="content">
          {screen === "overview" && <OverviewScreen />}
          {screen === "sources" && (
            <SourcesScreen onAdd={() => setAddOpen(true)} />
          )}
          {screen === "conversations" && <ConversationsScreen />}
          {screen === "widget" && <WidgetScreen />}
        </div>
      </div>

      <Dialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add a source"
        description="Vertical chunks and embeds it into this workspace\u2019s vector store."
        footer={
          <>
            <Button variant="ghost" onClick={() => setAddOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setAddOpen(false);
                setToast(true);
              }}
            >
              Start indexing
            </Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Input
            label="Help center URL"
            placeholder="https://help.acme.com"
            iconLeft={
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                width={18}
                height={18}
              >
                <path d="M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.5 1.5" />
                <path d="M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.5-1.5" />
              </svg>
            }
          />
          <div
            style={{
              fontFamily: "var(--font-mono-stack)",
              fontSize: 12,
              color: "var(--text-subtle)",
            }}
          >
            or drop a PDF, FAQ export, or Markdown file
          </div>
        </div>
      </Dialog>

      {toast && (
        <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 200 }}>
          <Toast
            variant="success"
            title="Indexing started"
            onClose={() => setToast(false)}
          >
            We&apos;ll notify you when it&apos;s searchable.
          </Toast>
        </div>
      )}
    </div>
  );
}
