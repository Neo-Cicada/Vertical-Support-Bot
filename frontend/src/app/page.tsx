/* ── Feature data ─────────────────────────────────────────── */

const FEATURES = [
  {
    icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2zM8 10h8M8 14h5",
    title: "Grounded answers",
    description:
      "Every reply is drawn from your own help docs — never invented.",
  },
  {
    icon: "M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8z",
    title: "Source citations",
    description:
      "Each answer shows the exact docs it came from. Trust you can audit.",
  },
  {
    icon: "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3",
    title: "Confident hand-off",
    description:
      "When retrieval isn't sure, Vertical escalates to a human.",
  },
];

/* ── Icon helper ──────────────────────────────────────────── */

function Ico({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {d
        .split("M")
        .filter(Boolean)
        .map((s, i) => (
          <path key={i} d={"M" + s} />
        ))}
    </svg>
  );
}

/* ── Button component ─────────────────────────────────────── */

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

/* ── Landing page ─────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="wrap">
      {/* ── Nav ── */}
      <nav className="nav">
        <a href="/" className="nav__logo">
          <span className="nav__logo-mark">V</span>
          <span className="nav__logo-text">Vertical</span>
        </a>
        <div className="nav__spacer" />
        <Button variant="ghost" size="sm">
          Sign in
        </Button>
        <Button size="sm">Start free</Button>
      </nav>

      {/* ── Hero ── */}
      <header className="hero animate-fade-up">
        <div className="hero__eyebrow">Grounded support AI</div>
        <h1>
          Answers your customers can <em>trust</em>
        </h1>
        <p>
          Vertical turns your help docs into an AI assistant that answers in
          your customers&rsquo; words — grounded in your content, with
          citations, and a human hand-off when it isn&rsquo;t sure.
        </p>
        <div className="hero__cta">
          <Button size="lg">Start free</Button>
          <Button size="lg" variant="secondary">
            See a live demo
          </Button>
        </div>
        <div className="hero__note">No credit card · live in minutes</div>
      </header>

      {/* ── Features ── */}
      <section className="features">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`feature animate-fade-up animate-delay-${i + 1}`}
          >
            <div className="feature__icon">
              <Ico d={f.icon} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </section>

      {/* ── CTA Band ── */}
      <section className="band animate-fade-up animate-delay-3">
        <h2>Stand up your support assistant today</h2>
        <p>
          Connect a help center, watch it index, and embed the widget before
          your coffee&rsquo;s cold.
        </p>
        <div className="band__cta">
          <Button size="lg">Start free</Button>
          <Button size="lg" variant="secondary">
            Talk to us
          </Button>
        </div>
      </section>
    </div>
  );
}
