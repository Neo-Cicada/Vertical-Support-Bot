"use client";

import Icon from "./Icon";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  square?: boolean;
  bot?: boolean;
}

const sizeMap = { sm: 26, md: 34, lg: 44 };

export default function Avatar({
  src,
  name,
  size = "md",
  square,
  bot,
}: AvatarProps) {
  const px = sizeMap[size];
  const radius = square ? "rounded-lg" : "rounded-full";

  if (bot) {
    return (
      <span
        className={`inline-flex items-center justify-center shrink-0 overflow-hidden bg-jade-50 text-jade-600 ${radius}`}
        style={{ width: px, height: px }}
      >
        <Icon name="bot" size={px * 0.55} />
      </span>
    );
  }

  if (src) {
    return (
      <img
        className={`inline-flex items-center justify-center shrink-0 overflow-hidden object-cover ${radius}`}
        src={src}
        alt={name || ""}
        style={{ width: px, height: px }}
      />
    );
  }

  const initials = (name || "?")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden bg-ink-100 text-ink-600 font-display font-bold ${radius}`}
      style={{ width: px, height: px, fontSize: px * 0.38 }}
    >
      {initials}
    </span>
  );
}
