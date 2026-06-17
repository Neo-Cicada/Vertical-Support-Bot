"use client";

import Icon from "./Icon";

interface ToastProps {
  variant?: "success" | "danger" | "info";
  title: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function Toast({
  variant = "success",
  title,
  onClose,
  children,
}: ToastProps) {
  return (
    <div className={`v-toast v-toast--${variant}`}>
      <div className="v-toast__content">
        <div className="v-toast__title">{title}</div>
        {children && <div className="v-toast__body">{children}</div>}
      </div>
      {onClose && (
        <button className="v-toast__close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
