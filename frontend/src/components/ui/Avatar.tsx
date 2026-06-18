"use client";

import Icon from "./Icon";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  square?: boolean;
  bot?: boolean;
}

export default function Avatar({
  src,
  name,
  size = "md",
  square,
  bot,
}: AvatarProps) {
  const sizeMap = { sm: 26, md: 34, lg: 44 };
  const px = sizeMap[size];

  if (bot) {
    return (
      <span
        className="v-avatar v-avatar--bot"
        style={{
          width: px,
          height: px,
          borderRadius: square ? 8 : "50%",
        }}
      >
        <Icon name="bot" size={px * 0.55} />
      </span>
    );
  }

  if (src) {
    return (
      <img
        className="v-avatar"
        src={src}
        alt={name || ""}
        style={{
          width: px,
          height: px,
          borderRadius: square ? 8 : "50%",
        }}
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
      className="v-avatar v-avatar--initials"
      style={{
        width: px,
        height: px,
        borderRadius: square ? 8 : "50%",
        fontSize: px * 0.38,
      }}
    >
      {initials}
    </span>
  );
}
