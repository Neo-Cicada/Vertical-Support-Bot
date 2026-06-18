"use client";

import { useEffect, useRef } from "react";
import Icon from "./Icon";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  width?: number;
}

export default function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  children,
  width = 460,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="border-none rounded-xl p-0 shadow-md bg-white w-full"
      style={{ maxWidth: width }}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="p-6">
        <div className="relative mb-[18px]">
          {title && (
            <div className="font-display font-bold text-lg text-ink-900">
              {title}
            </div>
          )}
          {description && (
            <div className="text-[var(--text-sm)] text-ink-500 mt-1">
              {description}
            </div>
          )}
          <button
            className="absolute top-0 right-0 bg-transparent border-none text-ink-400 cursor-pointer p-1 rounded-sm hover:text-ink-900 hover:bg-sand-50"
            onClick={onClose}
            aria-label="Close"
          >
            <Icon name="x" size={18} />
          </button>
        </div>
        <div className="mb-[18px]">{children}</div>
        {footer && (
          <div className="flex justify-end gap-2.5">{footer}</div>
        )}
      </div>
    </dialog>
  );
}
