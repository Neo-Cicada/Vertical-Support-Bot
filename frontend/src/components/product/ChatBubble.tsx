"use client";

interface ChatBubbleProps {
  role: "user" | "assistant";
  name?: string;
  avatar?: React.ReactNode;
  citations?: React.ReactNode;
  children: React.ReactNode;
}

export default function ChatBubble({
  role,
  name,
  avatar,
  citations,
  children,
}: ChatBubbleProps) {
  if (role === "user") {
    return (
      <div className="v-msg v-msg--user">
        <div className="v-msg__bubble v-msg__bubble--user">{children}</div>
      </div>
    );
  }

  return (
    <div className="v-msg v-msg--assistant">
      {avatar && <span className="v-msg__avatar">{avatar}</span>}
      <div className="v-msg__col">
        {name && <span className="v-msg__name">{name}</span>}
        <div className="v-msg__bubble v-msg__bubble--assistant">{children}</div>
        {citations && <div className="v-msg__cites">{citations}</div>}
      </div>
    </div>
  );
}
