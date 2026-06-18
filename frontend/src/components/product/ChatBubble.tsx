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
      <div className="flex gap-2.5 justify-end">
        <div className="bg-jade-500 text-white rounded-[14px_14px_4px_14px] max-w-[80%] px-3.5 py-2.5 text-[var(--text-ui)] leading-normal">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2.5 justify-start">
      {avatar && <span className="shrink-0 mt-0.5">{avatar}</span>}
      <div className="max-w-[85%]">
        {name && (
          <span className="text-xs font-semibold text-ink-500 mb-1 block">
            {name}
          </span>
        )}
        <div className="bg-white text-ink-900 border border-ink-200 rounded-[14px_14px_14px_4px] shadow-xs px-3.5 py-2.5 text-[var(--text-ui)] leading-normal">
          {children}
        </div>
        {citations && (
          <div className="flex gap-1.5 mt-2 flex-wrap">{citations}</div>
        )}
      </div>
    </div>
  );
}
