import Link from "next/link";
import Badge from "@/components/ui/Badge";
import SourceCitation from "@/components/product/SourceCitation";

/* ── Icon helper ──────────────────────────────────────────── */

function Ico({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
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

/* ── Icon paths ───────────────────────────────────────────── */

const P = {
  ingest: "M12 3v12M7 10l5 5 5-5M5 21h14",
  ground: "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6zM9 12l2 2 4-4",
  answer: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  cite: "M7 7h4v6a3 3 0 01-3 3M15 7h4v6a3 3 0 01-3 3",
  shield: "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z",
  chart: "M3 3v18h18M7 14l4-4 3 3 5-6",
  handoff: "M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7",
  plug: "M9 2v6M15 2v6M6 8h12v3a6 6 0 01-12 0zM12 17v5",
  globe:
    "M12 2a10 10 0 100 20 10 10 0 000-20M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20",
};

/* ── Data ─────────────────────────────────────────────────── */

const STEPS = [
  {
    n: "01",
    icon: P.ingest,
    t: "Ingest your docs",
    d: "Point Vertical at your help center, or drop in PDFs and FAQs. We chunk and embed everything into a vector store that\u2019s yours alone.",
  },
  {
    n: "02",
    icon: P.ground,
    t: "Ground every answer",
    d: "Retrieval pulls the most relevant passages for each question \u2014 so replies come from your content, never a guess. Tuned for one vertical, not everyone.",
  },
  {
    n: "03",
    icon: P.answer,
    t: "Answer with sources",
    d: "Customers get an instant, cited answer in an embeddable widget. Low confidence? It hands off to your team automatically.",
  },
];

const FEATURES = [
  {
    icon: P.cite,
    t: "Source citations on every reply",
    d: "Each answer shows the exact docs it came from. Trust you can audit, not a black box.",
  },
  {
    icon: P.handoff,
    t: "Confident hand-off",
    d: "When retrieval isn\u2019t sure, Vertical escalates to a human instead of hallucinating.",
  },
  {
    icon: P.chart,
    t: "Deflection analytics",
    d: "See deflection rate, top questions, and the documentation gaps quietly costing you tickets.",
  },
  {
    icon: P.shield,
    t: "Per-tenant isolation",
    d: "Every client gets a dedicated vector store. No shared context, no leakage.",
  },
  {
    icon: P.plug,
    t: "Embeddable in minutes",
    d: "One snippet drops the widget on any site. Theme it to match your brand.",
  },
  {
    icon: P.globe,
    t: "Tuned to your domain",
    d: "Built for a single vertical, so retrieval quality and onboarding fit your world.",
  },
];

/* ── Landing page ─────────────────────────────────────────── */

export default function LandingPage() {
  return (
    <div className="site">
      {/* ── Nav ── */}
      <nav className="nav">
        <div className="wrap nav__in">
          <a className="nav__logo" href="#">
            <img src="/assets/logo/wordmark.svg" alt="Vertical" />
          </a>
          <span className="nav__links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#">Pricing</a>
          </span>
          <span className="nav__cta">
            <Link href="/login" className="v-btn v-btn--ghost v-btn--sm">
              Sign in
            </Link>
            <Link href="/signup" className="v-btn v-btn--primary v-btn--sm">
              Start free
            </Link>
          </span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="hero">
        <div className="hero__dots" />
        <div className="wrap hero__in">
          <div className="eyebrow">Grounded support AI</div>
          <h1>
            Answers your customers can <em>trust</em>
          </h1>
          <p className="hero__sub">
            Vertical turns your help docs into an AI assistant that answers in
            your customers&rsquo; words &mdash; grounded in your content, with
            citations, and a human hand-off when it isn&rsquo;t sure.
          </p>
          <div className="hero__cta">
            <Link href="/signup" className="v-btn v-btn--primary v-btn--lg">
              Start free
            </Link>
            <button className="v-btn v-btn--secondary v-btn--lg">
              <Ico d={P.answer} size={18} />
              See a live demo
            </button>
          </div>
          <div className="hero__note">
            No credit card &middot; indexes your first source in minutes
          </div>

          {/* Proof card */}
          <div className="proof">
            <div className="proof__card">
              <div className="proof__q">
                How do I get a refund on an annual plan?
              </div>
              <div className="proof__a">
                <span className="proof__avatar">
                  <Ico d={P.answer} size={18} />
                </span>
                <div>
                  <div className="proof__bubble">
                    Annual plans are refundable on a pro-rated basis within 30
                    days of renewal. The unused portion returns to your original
                    payment method in 5&ndash;7 business days.
                  </div>
                  <div className="proof__cites">
                    <SourceCitation index={1} label="faq.pdf · p.4" />
                    <SourceCitation index={2} label="refund-policy.md · §2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Trust strip ── */}
      <div className="trust">
        <div className="wrap trust__row">
          <span>Northwind</span>
          <span>Lumen</span>
          <span>Cedar&nbsp;Health</span>
          <span>Outpost</span>
          <span>Fieldwork</span>
        </div>
      </div>

      {/* ── How it works ── */}
      <section className="mkt-section" id="how">
        <div className="wrap">
          <div className="mkt-section__head">
            <h2>From your docs to a trusted answer</h2>
            <p>
              Three steps, one focused vertical. Setup takes minutes, not a
              quarter.
            </p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step__n">{s.n}</div>
                <div className="step__icon">
                  <Ico d={s.icon} size={22} />
                </div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metric band ── */}
      <section className="mkt-section mkt-section--ink">
        <div className="wrap">
          <div className="metric-band">
            <div className="metric-band__item">
              <div className="metric-band__v">
                42<sup>%</sup>
              </div>
              <div className="metric-band__l">average ticket deflection</div>
            </div>
            <div className="metric-band__item">
              <div className="metric-band__v">
                1.4<sup>s</sup>
              </div>
              <div className="metric-band__l">median answer latency</div>
            </div>
            <div className="metric-band__item">
              <div className="metric-band__v">
                100<sup>%</sup>
              </div>
              <div className="metric-band__l">answers cite their source</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        className="mkt-section"
        id="features"
        style={{ background: "var(--surface-sunken)" }}
      >
        <div className="wrap">
          <div className="mkt-section__head">
            <h2>Built around grounding</h2>
            <p>
              Everything in Vertical exists to make answers accurate, sourced,
              and honest about their limits.
            </p>
          </div>
          <div className="mkt-features">
            {FEATURES.map((f) => (
              <div className="mkt-feature" key={f.t}>
                <span className="mkt-feature__icon">
                  <Ico d={f.icon} size={22} />
                </span>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mkt-section">
        <div className="wrap mkt-cta">
          <Badge variant="accent" mono>
            Start free
          </Badge>
          <h2 style={{ marginTop: 16 }}>
            Stand up your support assistant today
          </h2>
          <p>
            Connect a help center, watch it index, and embed the widget before
            your coffee&rsquo;s cold.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 28,
            }}
          >
            <Link href="/signup" className="v-btn v-btn--primary v-btn--lg">
              Start free
            </Link>
            <button className="v-btn v-btn--secondary v-btn--lg">
              Talk to us
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer__top">
            <div style={{ maxWidth: 280 }}>
              <img
                src="/assets/logo/wordmark-inverse.svg"
                alt="Vertical"
                style={{ height: 26 }}
              />
              <p className="footer__tagline">
                AI customer support, grounded in your own docs.
              </p>
            </div>
            <div className="footer__cols">
              <div className="footer__col">
                <h5>Product</h5>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Widget</a>
                <a href="#">Analytics</a>
              </div>
              <div className="footer__col">
                <h5>Company</h5>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </div>
              <div className="footer__col">
                <h5>Resources</h5>
                <Link href="/docs">Docs</Link>
                <a href="#">API</a>
                <a href="#">Status</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>&copy; 2026 Vertical, Inc.</span>
            <span>Grounded support AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
