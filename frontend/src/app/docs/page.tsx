import Link from "next/link";

export const metadata = {
  title: "Getting started · Vertical Docs",
  description:
    "A ten-minute walkthrough: create a workspace, connect your knowledge, and ship a grounded AI assistant that cites its sources.",
};

export default function DocsPage() {
  return (
    <div className="site">
      {/* ── Reading progress filament ── */}
      <div className="doc-progress" aria-hidden="true" />

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="wrap nav__in">
          <Link className="nav__logo" href="/">
            <img src="/assets/logo/wordmark.svg" alt="Vertical" />
          </Link>
          <span className="nav__links" />
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

      {/* ── Article ── */}
      <article className="doc">
        {/* ── Masthead ── */}
        <p className="doc__eyebrow doc-reveal">Docs / Guides</p>
        <h1 className="doc-reveal doc-reveal--1">
          Set up your first support assistant
        </h1>
        <p className="doc__lede doc-reveal doc-reveal--2">
          A ten-minute walkthrough: create a workspace, connect your knowledge,
          and ship a grounded AI assistant that cites its sources.
        </p>
        <div className="doc__byline doc-reveal doc-reveal--3">
          <strong>Vertical Docs</strong>
          <span>Updated June 2026</span>
          <span>8 min read</span>
        </div>

        {/* ── Intro ── */}
        <p>
          Vertical lets any business stand up its own AI customer-support
          assistant — one that answers from <em>your</em> content and shows
          where every answer came from. This guide takes you from an empty
          workspace to a live assistant embedded on your site. You don&rsquo;t
          need to write any code beyond pasting one snippet.
        </p>

        <p>By the end you will have:</p>
        <ul>
          <li>A workspace connected to at least one knowledge source</li>
          <li>An assistant configured with your tone and escalation rules</li>
          <li>A working chat widget on a test page</li>
        </ul>

        {/* ── Step 1 ── */}
        <p className="doc__step">Step 1</p>
        <h2>Create your workspace</h2>
        <p>
          Sign in and choose <strong>Create a workspace</strong>. A workspace is
          an isolated tenant: its knowledge, settings, and conversations never
          mix with anyone else&rsquo;s. Give it the name your customers will
          recognize — usually your product or company name.
        </p>
        <p>
          Once created, you&rsquo;ll land on the workspace dashboard. The left
          rail is where you&rsquo;ll find <strong>Knowledge</strong>,{" "}
          <strong>Assistant</strong>, and <strong>Conversations</strong> — the
          three areas you&rsquo;ll use most.
        </p>

        {/* ── Step 2 ── */}
        <p className="doc__step">Step 2</p>
        <h2>Connect a knowledge source</h2>
        <p>
          An assistant is only as good as what it can read. Open{" "}
          <strong>Knowledge &rarr; Add source</strong> and pick how you want to
          bring content in:
        </p>
        <ul>
          <li>
            <strong>Crawl a website</strong> — point Vertical at your docs or
            help center URL and it indexes every page it can reach.
          </li>
          <li>
            <strong>Upload files</strong> — drop in PDFs, Markdown, or Word
            documents.
          </li>
          <li>
            <strong>Connect an app</strong> — sync from Notion, Zendesk, or a
            Google Drive folder so updates flow in automatically.
          </li>
        </ul>
        <p>
          Indexing runs in the background. Smaller sources are ready in under a
          minute; a large site may take a few. You can start configuring the
          assistant while it finishes.
        </p>

        <div className="doc__note">
          <b>Tip</b>
          Start with one high-quality source — your help center — rather than
          everything at once. It&rsquo;s easier to judge answer quality when you
          know exactly what the assistant can see.
        </div>

        {/* ── Step 3 ── */}
        <p className="doc__step">Step 3</p>
        <h2>Configure the assistant</h2>
        <p>
          Go to <strong>Assistant &rarr; Settings</strong>. Two things matter
          most here.
        </p>

        <h3>Voice and tone</h3>
        <p>
          Write a short instruction describing how the assistant should sound.
          Keep it concrete:
        </p>
        <pre>
          <code>{`You are Vertical's support assistant.
Be concise and friendly. Answer in 2–4 sentences.
Always cite the source. If you're unsure, say so
and offer to connect the customer to a human.`}</code>
        </pre>

        <h3>Escalation rules</h3>
        <p>
          Decide when a conversation should hand off to your team. Common
          triggers are billing questions, an explicit request for a human, or
          low confidence on three replies in a row. When a rule fires, Vertical
          routes the conversation to the inbox or channel you choose.
        </p>

        {/* ── Step 4 ── */}
        <p className="doc__step">Step 4</p>
        <h2>Test before you ship</h2>
        <p>
          Use the <strong>Preview</strong> panel to ask the questions your
          customers actually ask. Every answer shows a <code>[1]</code>-style
          citation — click it to see the exact passage the assistant drew from.
          If an answer is wrong, it&rsquo;s almost always a knowledge gap, not a
          model problem: add or fix the source and re-ask.
        </p>
        <p>
          Spend a few minutes here. Ten real questions will tell you more than
          any benchmark.
        </p>

        {/* ── Step 5 ── */}
        <p className="doc__step">Step 5</p>
        <h2>Embed the widget</h2>
        <p>
          When you&rsquo;re happy, open <strong>Assistant &rarr; Embed</strong>{" "}
          and copy the snippet. Paste it just before the closing{" "}
          <code>&lt;/body&gt;</code> tag on your site:
        </p>
        <pre>
          <code>{`<script
  src="https://cdn.vertical.app/widget.js"
  data-workspace="your-workspace-id"
  defer></script>`}</code>
        </pre>
        <p>
          That&rsquo;s it. The widget appears in the corner of your site,
          inherits your accent color, and starts answering immediately. Changes
          you make to knowledge or settings go live without touching the snippet
          again.
        </p>

        <hr />

        <h2>Where to go next</h2>
        <p>
          You now have a grounded assistant in production. From here, most
          teams:
        </p>
        <ul>
          <li>
            Review the <strong>Conversations</strong> log weekly to spot missing
            content
          </li>
          <li>Add escalation routing to their existing help desk</li>
          <li>Invite teammates and set per-role permissions</li>
        </ul>
        <p className="doc__foot">
          Questions? Reach the team at{" "}
          <a href="mailto:support@vertical.app">support@vertical.app</a> or
          browse the rest of the <Link href="/docs">documentation</Link>.
        </p>
      </article>
    </div>
  );
}
