"use client";

import Icon from "@/components/ui/Icon";

const TYPE_ICONS: Record<string, string> = {
  pdf: "file",
  web: "external",
  md: "file",
  doc: "file",
};

interface SourceDocProps {
  type?: string;
  name: string;
  meta?: string;
  status?: React.ReactNode;
  trailing?: React.ReactNode;
  interactive?: boolean;
}

export default function SourceDoc({
  type = "doc",
  name,
  meta,
  status,
  trailing,
  interactive,
}: SourceDocProps) {
  return (
    <div
      className={`v-doc ${interactive ? "v-doc--interactive" : ""}`}
    >
      <span className="v-doc__icon">
        <Icon name={TYPE_ICONS[type] || "file"} size={18} />
      </span>
      <span className="v-doc__body">
        <span className="v-doc__name">{name}</span>
        {meta && <span className="v-doc__meta">{meta}</span>}
      </span>
      {status && <span className="v-doc__status">{status}</span>}
      {trailing}
    </div>
  );
}
