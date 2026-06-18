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

/* ── Landing page ─────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-8">
      {/* ── Nav ── */}
      <nav className="flex items-center gap-7 h-[72px]">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <span className="flex items-center justify-center w-8 h-8 rounded-sm bg-jade-500 text-white font-display text-[var(--text-sm)] font-bold tracking-tight">
            V
          </span>
          <span className="font-display text-lg font-semibold text-ink-900 tracking-tight">
            Vertical
          </span>
        </a>
        <div className="flex-1" />
        <button className="inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap h-[var(--control-sm)] px-3.5 text-[var(--text-sm)] bg-transparent text-ink-700 hover:bg-sand-50">
          Sign in
        </button>
        <button className="inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap h-[var(--control-sm)] px-3.5 text-[var(--text-sm)] bg-jade-500 text-white hover:bg-jade-600 hover:shadow-accent">
          Start free
        </button>
      </nav>

      {/* ── Hero ── */}
      <header className="text-center pt-[72px] pb-16 animate-fade-up">
        <div className="font-mono text-[var(--text-2xs)] tracking-[.08em] uppercase text-ink-500">
          Grounded support AI
        </div>
        <h1 className="text-[4rem] mt-[18px] mx-auto max-w-[14ch] tracking-[-0.03em] md:max-sm:text-[2.25rem]">
          Answers your customers can <em className="not-italic text-jade-600">trust</em>
        </h1>
        <p className="text-xl text-ink-500 max-w-[54ch] mx-auto mt-[22px] leading-snug">
          Vertical turns your help docs into an AI assistant that answers in
          your customers&rsquo; words — grounded in your content, with
          citations, and a human hand-off when it isn&rsquo;t sure.
        </p>
        <div className="flex gap-3 justify-center mt-[30px] max-md:flex-col max-md:items-center">
          <button className="inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap h-[var(--control-lg)] px-7 text-base bg-jade-500 text-white hover:bg-jade-600 hover:shadow-accent">
            Start free
          </button>
          <button className="inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap h-[var(--control-lg)] px-7 text-base bg-white text-ink-900 border border-ink-200 hover:bg-sand-50 hover:border-ink-300">
            See a live demo
          </button>
        </div>
        <div className="font-mono text-xs text-ink-400 mt-4">
          No credit card · live in minutes
        </div>
      </header>

      {/* ── Features ── */}
      <section className="grid grid-cols-3 gap-5 py-2 pb-[72px] max-md:grid-cols-1">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="bg-white border border-ink-200 rounded-lg p-6 shadow-xs transition-all duration-[var(--dur-base)] ease-[var(--ease-out)] hover:shadow-sm hover:-translate-y-0.5 animate-fade-up"
            style={{ animationDelay: `${(i + 1) * 0.1}s` }}
          >
            <div className="text-jade-600 [&>svg]:w-6 [&>svg]:h-6">
              <Ico d={f.icon} />
            </div>
            <h3 className="text-lg mt-3.5">{f.title}</h3>
            <p className="text-[var(--text-ui)] text-ink-500 mt-2 leading-normal">
              {f.description}
            </p>
          </div>
        ))}
      </section>

      {/* ── CTA Band ── */}
      <section
        className="bg-ink-900 text-sand-100 rounded-2xl px-8 py-14 text-center mb-[72px] animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="text-white text-[2.25rem]">
          Stand up your support assistant today
        </h2>
        <p className="text-ink-300 mt-3">
          Connect a help center, watch it index, and embed the widget before
          your coffee&rsquo;s cold.
        </p>
        <div className="flex gap-3 justify-center mt-[26px] max-md:flex-col max-md:items-center">
          <button className="inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md border-none cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap h-[var(--control-lg)] px-7 text-base bg-jade-500 text-white hover:bg-jade-600 hover:shadow-accent">
            Start free
          </button>
          <button className="inline-flex items-center justify-center gap-2 font-sans font-semibold rounded-md cursor-pointer transition-all duration-[var(--dur-fast)] ease-[var(--ease-out)] whitespace-nowrap h-[var(--control-lg)] px-7 text-base bg-transparent text-sand-100 border border-ink-600 hover:bg-ink-800 hover:border-ink-400">
            Talk to us
          </button>
        </div>
      </section>
    </div>
  );
}
