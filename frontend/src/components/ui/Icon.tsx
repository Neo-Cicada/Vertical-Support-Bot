"use client";

export const ICON_PATHS: Record<string, string> = {
  overview: "M3 13h8V3H3zM13 21h8V11h-8zM13 3v6h8V3zM3 21h8v-6H3z",
  sources: "M4 4h11l5 5v11a0 0 0 010 0H4zM15 4v5h5M8 13h8M8 17h8",
  conversations: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  widget:
    "M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 01-9 9c-1.6 0-3.1-.4-4.4-1.1L3 21l1.1-4.6A9 9 0 1121 12z",
  settings:
    "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-2.74.99 2 2 0 11-4 0 1.65 1.65 0 00-2.74-.99l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a2 2 0 110-4 1.65 1.65 0 00.99-2.74l-.06-.06A2 2 0 118.36 5.4l.06.06A1.65 1.65 0 0011 4.6a2 2 0 114 0 1.65 1.65 0 002.74.99l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 11a2 2 0 110 4z",
  search: "M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z",
  plus: "M12 5v14M5 12h14",
  trending: "M22 7l-8.5 8.5-5-5L2 17M16 7h6v6",
  message: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  alert:
    "M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.4 3.9a2 2 0 00-3.4 0z",
  clock: "M12 7v5l3 2M12 22a10 10 0 100-20 10 10 0 000 20z",
  bot: "M12 8V4M8 8h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2zM9 13h.01M15 13h.01M5 15H4M20 15h-1",
  chevron: "M6 9l6 6 6-6",
  chevronR: "M9 6l6 6-6 6",
  sparkles:
    "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8zM5 14l.6 1.6L7 16l-1.4.6L5 18l-.6-1.4L3 16l1.4-.4z",
  file: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6",
  check: "M20 6L9 17l-5-5",
  external:
    "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3",
  back: "M19 12H5M12 19l-7-7 7-7",
  link: "M10 13a5 5 0 007.5.5l3-3a5 5 0 00-7-7l-1.5 1.5M14 11a5 5 0 00-7.5-.5l-3 3a5 5 0 007 7l1.5-1.5",
  x: "M18 6L6 18M6 6l12 12",
};

interface IconProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  style,
  className,
}: IconProps) {
  const d = ICON_PATHS[name] || "";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
    >
      {d
        .split("M")
        .filter(Boolean)
        .map((seg, i) => (
          <path key={i} d={"M" + seg} />
        ))}
    </svg>
  );
}
