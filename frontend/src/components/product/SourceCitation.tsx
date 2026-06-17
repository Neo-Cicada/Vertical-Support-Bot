"use client";

interface SourceCitationProps {
  index: number;
  label: string;
  plain?: boolean;
}

export default function SourceCitation({
  index,
  label,
  plain,
}: SourceCitationProps) {
  return (
    <span className={`v-cite ${plain ? "v-cite--plain" : ""}`}>
      <span className="v-cite__idx">{index}</span>
      <span className="v-cite__label">{label}</span>
    </span>
  );
}
