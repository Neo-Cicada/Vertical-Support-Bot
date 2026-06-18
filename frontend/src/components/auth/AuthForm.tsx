"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Toast from "@/components/ui/Toast";

/* ---- Inline icons (Lucide-style, 1.75 stroke) ---- */

function Mail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

function Lock() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  );
}

function Eye() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOff() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.9 4.2A10.9 10.9 0 0112 4c6.5 0 10 7 10 7a18.4 18.4 0 01-3 3.8M6.6 6.6A18.4 18.4 0 002 11s3.5 7 10 7a10.9 10.9 0 004.1-.8" />
      <path d="M9.9 9.9a3 3 0 004.2 4.2M2 2l20 20" />
    </svg>
  );
}

function Shield() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GoogleG() {
  return (
    <svg
      style={{ width: 18, height: 18, display: "block" }}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  );
}

function Wordmark() {
  return (
    <svg
      width="232"
      height="56"
      viewBox="0 0 232 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vertical"
      style={{ height: 30, width: "auto", display: "block" }}
    >
      <g transform="translate(0,8)">
        <rect width="40" height="40" rx="10" fill="#0E7A54" />
        <circle cx="20" cy="10.6" r="4.4" fill="#FAF8F3" />
        <rect
          x="18.1"
          y="12.5"
          width="3.8"
          height="15"
          rx="1.9"
          fill="#FAF8F3"
        />
        <rect x="10" y="28.1" width="20" height="3.8" rx="1.9" fill="#FAF8F3" />
      </g>
      <text
        x="52"
        y="37"
        fontFamily="Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#14181A"
      >
        Vertical
      </text>
    </svg>
  );
}

/* ---- Password field with show/hide toggle ---- */

function PasswordField({
  label,
  autoComplete,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  autoComplete: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [show, setShow] = useState(false);
  const id = useId();

  return (
    <div className="pw-field">
      <label htmlFor={id} className="pw-field__label">
        {label}
      </label>
      <div className="pw-field__wrap">
        <span className="pw-field__icon">
          <Lock />
        </span>
        <input
          id={id}
          type={show ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="pw-field__input"
        />
        <button
          type="button"
          className="pw-field__toggle"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </div>
  );
}

/* ---- Copy per mode ---- */

const COPY = {
  login: {
    heading: "Sign in to Vertical",
    sub: "Welcome back to your support workspace.",
    submit: "Sign in",
    footPrompt: "New to Vertical?",
    footAction: "Create a workspace",
    footHref: "/signup",
    toastTitle: "Signed in",
    toastBody: "Taking you to your workspace\u2026",
  },
  signup: {
    heading: "Create your workspace",
    sub: "Stand up your AI support assistant in minutes.",
    submit: "Create workspace",
    footPrompt: "Already have an account?",
    footAction: "Sign in",
    footHref: "/login",
    toastTitle: "Workspace created",
    toastBody: "Setting things up and signing you in\u2026",
  },
} as const;

export type AuthMode = "login" | "signup";

/* ---- Form ---- */

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [remember, setRemember] = useState(true);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ title: string; body: string } | null>(
    null
  );
  const c = COPY[mode];

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(id);
  }, [toast]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast({ title: c.toastTitle, body: c.toastBody });
    }, 1500);
  }

  return (
    <div className="auth">
      <div className="auth__inner">
        {/* Brand */}
        <Link href="/" className="auth__brand">
          <Wordmark />
        </Link>

        {/* Card */}
        <form className="auth__card" onSubmit={onSubmit}>
          {/* Segmented toggle */}
          <div
            className={`seg ${mode === "signup" ? "seg--signup" : ""}`}
            role="tablist"
            aria-label="Authentication mode"
          >
            <span className="seg__thumb" aria-hidden="true" />
            <Link
              href="/login"
              role="tab"
              aria-selected={mode === "login"}
              className={`seg__btn ${mode === "login" ? "is-active" : ""}`}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              role="tab"
              aria-selected={mode === "signup"}
              className={`seg__btn ${mode === "signup" ? "is-active" : ""}`}
            >
              Create account
            </Link>
          </div>

          {/* Heading */}
          <div className="auth__heading">
            <h1>{c.heading}</h1>
            <p>{c.sub}</p>
          </div>

          {/* Google SSO */}
          <Button
            type="button"
            variant="secondary"
            size="lg"
            fullWidth
            iconLeft={<GoogleG />}
          >
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="auth__divider">
            <span />
            <span className="auth__divider-label">or</span>
            <span />
          </div>

          {/* Fields */}
          <div className="auth__fields">
            <Input
              label="Work email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              iconLeft={<Mail />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <PasswordField
              label="Password"
              placeholder={
                mode === "signup" ? "At least 8 characters" : "Your password"
              }
              autoComplete={
                mode === "signup" ? "new-password" : "current-password"
              }
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />

            {mode === "login" ? (
              <div className="auth__row">
                <Checkbox
                  label="Remember me"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <a
                  className="auth__link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot password?
                </a>
              </div>
            ) : (
              <div>
                <Checkbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  label={
                    <span>
                      I agree to the{" "}
                      <a
                        className="auth__link"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        className="auth__link"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  }
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <Button type="submit" size="lg" fullWidth loading={loading}>
            {c.submit}
          </Button>

          {/* Footer */}
          <div className="auth__footer">
            <span>{c.footPrompt}</span>
            <Link href={c.footHref}>{c.footAction}</Link>
          </div>
        </form>

        {/* Trust line */}
        <div className="auth__trust">
          <Shield />
          <span>Your data stays in your workspace</span>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="auth__toast">
          <Toast
            variant="success"
            title={toast.title}
            onClose={() => setToast(null)}
          >
            {toast.body}
          </Toast>
        </div>
      )}
    </div>
  );
}
