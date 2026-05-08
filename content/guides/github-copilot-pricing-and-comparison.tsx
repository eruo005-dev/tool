/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Copilot pricing is straightforward; the comparison vs ChatGPT and other
      AI coding tools is where teams spend the most time. This guide is the practical
      breakdown.
    </p>
  </>
);

export const toc = [
  { id: "pricing", label: "Pricing tiers" },
  { id: "free-vs-paid", label: "Free vs paid: what's the difference?" },
  { id: "vs-chatgpt", label: "Copilot vs ChatGPT for coding" },
  { id: "vs-others", label: "Copilot vs Cursor, Tabnine, Codeium" },
  { id: "ever-free", label: "Will Copilot ever be free?" },
  { id: "cancel", label: "How to cancel a subscription" },
];

export const body = (
  <>
    <h2 id="pricing">GitHub Copilot pricing tiers (2026)</h2>
    <ul>
      <li>
        <strong>Copilot Free:</strong> limited completions per month, free for verified
        students/teachers, OSS maintainers, and individual users on a basic tier.
        Subject to change.
      </li>
      <li>
        <strong>Copilot Individual (Pro):</strong> $10/month or $100/year. Unlimited
        completions + chat. The default for solo devs.
      </li>
      <li>
        <strong>Copilot Business:</strong> $19/seat/month. Centralized billing, audit
        logs, organization-level policies, opt-out from training-data usage.
      </li>
      <li>
        <strong>Copilot Enterprise:</strong> $39/seat/month. Adds custom instructions
        per repo, knowledge bases, IP indemnification, advanced security.
      </li>
    </ul>

    <h2 id="free-vs-paid">GitHub Copilot Free vs Paid</h2>
    <p>
      The differences:
    </p>
    <ul>
      <li>
        <strong>Free tier:</strong> limited monthly completions (the cap moves; check
        current). Useful for evaluation. Not enough for daily heavy usage.
      </li>
      <li>
        <strong>Paid tier (Individual / Business / Enterprise):</strong> unlimited
        completions. Required for any sustained usage.
      </li>
    </ul>
    <p>
      For evaluation: free tier or 30-day trial of Individual. For sustained usage:
      pay. For teams: Business is the standard pick; Enterprise only if you need the
      additional security or customization features.
    </p>

    <h2 id="vs-chatgpt">GitHub Copilot vs ChatGPT for coding</h2>
    <p>
      Different tools, different jobs:
    </p>
    <ul>
      <li>
        <strong>Copilot:</strong> in-IDE inline completions. Lower friction; faster
        flow. Best for moment-by-moment code writing.
      </li>
      <li>
        <strong>ChatGPT:</strong> separate chat interface. Better for &ldquo;explain
        this codebase,&rdquo; debugging discussions, architecture reasoning. Worse
        for inline coding flow.
      </li>
    </ul>
    <p>
      Most working developers use both: Copilot for typing, ChatGPT (or Claude) for
      explanation, debugging, and reasoning. ~$30/month total for both Pro tiers; the
      productivity gain easily justifies it.
    </p>

    <h2 id="vs-others">Copilot vs Cursor, Tabnine, Codeium, Continue</h2>
    <ul>
      <li>
        <strong>Cursor:</strong> a fork of VSCode with deeper AI integration. The
        agentic features (multi-file edits, codebase-wide refactors) outpace
        Copilot in 2026. $20/month. The strongest competitor.
      </li>
      <li>
        <strong>Tabnine:</strong> older entrant. Strong on privacy (self-hosted
        option). Code completion quality below Copilot in most stacks.
      </li>
      <li>
        <strong>Codeium:</strong> free tier is generous. Quality below Copilot
        but free is hard to argue against for solo devs evaluating.
      </li>
      <li>
        <strong>Continue.dev:</strong> open-source, BYO model (use Ollama locally,
        or Claude/GPT via API). Highest customization; requires technical setup.
      </li>
    </ul>
    <p>
      The 2026 ranking for paying solo devs: Cursor &gt; Copilot ≈ Cody ≈ Codeium Pro.
      Cursor has the best agentic features; Copilot has the largest install base and
      tightest GitHub integration. For organizations: Copilot Business or Enterprise
      remains the safest pick due to procurement maturity + IP indemnification.
    </p>

    <h2 id="ever-free">Will GitHub Copilot ever be free?</h2>
    <p>
      Already partially. Verified students, teachers, and OSS maintainers get free
      access. The basic Copilot Free tier launched in late 2024 with limited
      completions. Full unlimited free for everyone? Unlikely — <a href="/learn/inference">inference</a> costs are
      real and ongoing.
    </p>
    <p>
      The trajectory: more free-tier capacity over time, paid tiers stay paid but
      keep adding features. Don&rsquo;t plan as if free will become unlimited.
    </p>

    <h2 id="cancel">How to cancel a Copilot subscription</h2>
    <ol>
      <li>Sign in to github.com.</li>
      <li>Go to <code>Settings → Billing &amp; plans → Plans and usage</code>.</li>
      <li>Find &ldquo;GitHub Copilot&rdquo; section. Click cancel.</li>
      <li>Subscription remains active until end of current billing period.</li>
    </ol>
    <p>
      For Business + Enterprise: same flow but at the org level. Org admin must
      cancel; individual users can&rsquo;t self-cancel.
    </p>
  </>
);

export const cta = {
  label: "Calculate Copilot ROI",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "How much does GitHub Copilot actually cost?",
    a: "Free: limited monthly completions (free for students/teachers/OSS maintainers). Individual/Pro: $10/mo or $100/yr (unlimited). Business: $19/seat/mo. Enterprise: $39/seat/mo (adds custom instructions, IP indemnification).",
  },
  {
    q: "GitHub Copilot Free vs Paid — what's the difference?",
    a: "Free: limited monthly completions. Paid (Individual $10/mo): unlimited. Free is fine for evaluation; paid required for sustained usage. Most developers find paid pays back within the first week.",
  },
  {
    q: "GitHub Copilot vs ChatGPT for coding — which is better?",
    a: "Different jobs. Copilot: in-IDE inline completions, lowest friction for moment-by-moment writing. ChatGPT/Claude: chat interface, better for explanation + debugging + architecture reasoning. Most working devs use both — combined ~$30/mo, productivity gain justifies it.",
  },
  {
    q: "Is GitHub Copilot better than my current AI coding tool?",
    a: "Depends what you're using. vs Tabnine: Copilot's quality usually higher. vs Codeium: quality close, Copilot has tighter GitHub integration. vs Cursor: Cursor's agentic features outpace Copilot in 2026, but Copilot has wider IDE support + IP indemnification at scale.",
  },
  {
    q: "Will GitHub Copilot ever be free?",
    a: "Already partially — free for verified students, teachers, OSS maintainers. Limited free tier for everyone launched late 2024. Full unlimited free unlikely (inference costs are real). Trajectory: more free capacity over time, paid stays paid but keeps adding features.",
  },
  {
    q: "How do I cancel my GitHub Copilot subscription?",
    a: "Sign in to github.com → Settings → Billing & plans → Plans and usage → cancel under GitHub Copilot section. Active until end of current period. Business/Enterprise: org admin must cancel via org-level settings.",
  },
];
