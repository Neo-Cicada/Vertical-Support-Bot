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
      className="v-dialog"
      style={{ maxWidth: width }}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="v-dialog__inner">
        <div className="v-dialog__header">
          {title && <div className="v-dialog__title">{title}</div>}
          {description && <div className="v-dialog__desc">{description}</div>}
          <button
            className="v-dialog__close"
            onClick={onClose}
            aria-label="Close"
          >
            <Icon name="x" size={18} />
          </button>
        </div>
        <div className="v-dialog__body">{children}</div>
        {footer && <div className="v-dialog__footer">{footer}</div>}
      </div>
    </dialog>
  );
}
