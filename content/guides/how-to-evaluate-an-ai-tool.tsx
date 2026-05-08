/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;What questions should I ask before buying an AI tool?&rdquo; is the
      right question. The wrong question is &ldquo;is X better than Y?&rdquo; — that
      depends on your data, your stack, your team, and what you&rsquo;ll use it for.
      This guide is the structured evaluation framework: 7 weighted criteria,
      red-flag signals, and the legal / ethical questions that should be on every
      buyer&rsquo;s checklist.
    </p>
    <p>
      Score any vendor with our{" "}
      <a href="/tools/ai-tool-evaluation-scorecard">AI tool evaluation scorecard</a> —
      it forces the same structured thinking you&rsquo;d get from a good procurement
      consultant for free.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "The 7-criteria framework" },
  { id: "questions", label: "Questions to ask before buying" },
  { id: "compare-fintech", label: "How to compare fintech / vertical AI tools" },
  { id: "legal", label: "Legal risks to know" },
  { id: "ethics", label: "Ethical issues" },
];

export const body = (
  <>
    <h2 id="framework">The 7-criteria framework</h2>
    <p>
      Score any AI tool 1–5 across these seven, weighted by importance:
    </p>
    <ul>
      <li>
        <strong>Privacy + data handling (×3):</strong> Does it train on your data?
        Where&rsquo;s data stored? Who has access? Retention policy? Is there an
        opt-out? Is the no-train guarantee in the contract or just the marketing
        copy?
      </li>
      <li>
        <strong>Output quality in your tests (×3):</strong> Run the tool on your
        actual data. Vendor demos are curated to make the model look 30–50% better
        than reality. Test against the failure modes you actually care about.
      </li>
      <li>
        <strong>Integration cost (×2):</strong> Engineering hours to wire it into
        your existing stack. Auth, data flow, observability, error handling. A tool
        with great quality but 200 hours of integration is sometimes worse than a
        weaker tool with native integrations.
      </li>
      <li>
        <strong>12-month TCO (×2):</strong> License fees + per-seat + per-token +
        ops + training. Most published &ldquo;cheap&rdquo; AI tools are expensive at
        production volume. Run the math at your expected utilization.
      </li>
      <li>
        <strong>Vendor stability (×2):</strong> Funding stage, runway, customer
        count, recent layoffs. AI startups in 2026 are a graveyard waiting to
        happen — picking a vendor that disappears in 18 months is expensive.
      </li>
      <li>
        <strong>Compliance fit (×2):</strong> SOC 2 Type II, HIPAA, GDPR, sector-
        specific certifications. Not the marketing badge — the actual audit reports.
      </li>
      <li>
        <strong>Switching cost (×1):</strong> Data export format, contract lock-in,
        prompt portability. The cheapest mistake is overpaying. The most expensive
        is being stuck with a tool you can&rsquo;t leave.
      </li>
    </ul>

    <h2 id="questions">Questions to ask before buying</h2>
    <ol>
      <li>
        <strong>&ldquo;Can we run a paid pilot with our data before committing?&rdquo;</strong>{" "}
        Real vendors say yes. Vendors that resist are flagging that demo-quality
        won&rsquo;t hold up.
      </li>
      <li>
        <strong>&ldquo;What&rsquo;s your data retention policy?&rdquo;</strong>{" "}
        Should be specific: how long, where, who can access. &ldquo;We follow
        industry best practices&rdquo; is not an answer.
      </li>
      <li>
        <strong>&ldquo;Will my data be used to train your models?&rdquo;</strong> If
        yes, walk away (or use a different tier). If no, get it in writing.
      </li>
      <li>
        <strong>&ldquo;What happens to my data if I cancel?&rdquo;</strong>{" "}
        Deletion timeline + verification mechanism. Some vendors retain
        &ldquo;de-identified&rdquo; data forever; clarify what that means.
      </li>
      <li>
        <strong>&ldquo;Do you have a SOC 2 Type II report we can review under
        NDA?&rdquo;</strong> A real cert comes with an audit report. A badge alone
        is just a logo.
      </li>
      <li>
        <strong>&ldquo;What&rsquo;s your latest customer-funded ARR? Customer
        count?&rdquo;</strong> Vendors at &lt;$5M ARR or &lt;100 customers carry
        higher disappearance risk.
      </li>
      <li>
        <strong>&ldquo;Show me the data export format.&rdquo;</strong> Should be
        clean JSON or CSV, not vendor-specific binary. Otherwise switching costs
        explode.
      </li>
      <li>
        <strong>&ldquo;What&rsquo;s your model upgrade cadence?&rdquo;</strong> If
        the underlying model gets swapped quarterly, your output quality may drift
        in ways that surprise you. Some vendors lock to a specific model version;
        others rotate.
      </li>
      <li>
        <strong>&ldquo;If we discover the tool isn&rsquo;t working, what&rsquo;s
        the cancellation process?&rdquo;</strong> Net-30, net-90, auto-renew
        clauses. Annual contracts often have surprise auto-renewal terms.
      </li>
      <li>
        <strong>&ldquo;Can I talk to a customer using this for [my exact use
        case]?&rdquo;</strong> Specificity matters — &ldquo;a customer in your
        industry&rdquo; is good but &ldquo;a customer using this for the exact
        workflow you&rsquo;ll use it for&rdquo; is better.
      </li>
    </ol>

    <h2 id="compare-fintech">How to compare fintech and vertical AI tools</h2>
    <p>
      Domain-specific AI tools (fintech, healthcare AI, legal AI) have additional
      considerations:
    </p>
    <ul>
      <li>
        <strong>Domain expertise of the team.</strong> The founders should have
        worked in your industry. Generalist AI engineers building &ldquo;AI for
        finance&rdquo; without finance experience often miss compliance edge cases.
      </li>
      <li>
        <strong>Regulatory familiarity.</strong> For fintech specifically:
        familiarity with FINRA, SEC, PCI-DSS, KYC/AML obligations. Ask how they
        handle each one in their product.
      </li>
      <li>
        <strong>Audit trails.</strong> Regulated industries need records of every
        decision the AI made. &ldquo;The model said yes&rdquo; isn&rsquo;t enough.
        Look for tools that log inputs, model version, output, and human review.
      </li>
      <li>
        <strong>Liability framing.</strong> Who&rsquo;s liable if the AI makes a
        bad recommendation? Most vendors disclaim all liability; in regulated
        industries this might be a deal-breaker.
      </li>
      <li>
        <strong>Reference customers in regulated peers.</strong> A bank vouching for
        a fintech AI tool is worth ten generic enterprise references.
      </li>
    </ul>
    <p>
      For currency / international payment tools specifically: ask about exchange
      rate transparency, hidden FX margins, and whether they support all the
      currencies you actually need (not just the marketing top-10).
    </p>

    <h2 id="legal">Legal risks to know about using AI in business</h2>
    <p>
      The five areas to clear with legal before deploying AI in customer-facing
      contexts:
    </p>
    <ol>
      <li>
        <strong>Data privacy laws.</strong> GDPR (EU), CCPA (California), state-by-
        state US patchwork, sector-specific (HIPAA for healthcare, GLBA for
        finance). AI processing of personal data triggers most of these.
      </li>
      <li>
        <strong>Copyright + IP.</strong> AI-generated content has murky copyright
        status. The US Copyright Office has ruled that purely AI-generated works
        aren&rsquo;t copyrightable. Substantial human authorship may be. Document
        your editing process.
      </li>
      <li>
        <strong>Disclosure requirements.</strong> Some jurisdictions require AI
        disclosure when AI is making consequential decisions about people (hiring,
        credit, healthcare). Check your jurisdiction.
      </li>
      <li>
        <strong>Output liability.</strong> If your AI hallucinates and a customer
        relies on the false info, who&rsquo;s liable? Most vendor contracts disclaim
        liability; you may carry it. Plan accordingly.
      </li>
      <li>
        <strong>Bias / discrimination.</strong> AI-driven hiring, lending, and
        housing decisions are subject to existing anti-discrimination laws (Title VII,
        ECOA, Fair Housing Act). The AI doesn&rsquo;t exempt you.
      </li>
    </ol>

    <h2 id="ethics">Ethical issues before deploying AI</h2>
    <ul>
      <li>
        <strong>Transparency with users.</strong> Disclose AI involvement when
        customers interact with it. Hidden AI is a trust killer when discovered.
      </li>
      <li>
        <strong>Human review on consequential decisions.</strong> Hiring,
        firing, lending, healthcare — these need a human in the loop. AI as
        advisor, not decider.
      </li>
      <li>
        <strong>Bias testing.</strong> Run your AI against representative samples
        from groups that historically face discrimination in your domain. Document
        the results.
      </li>
      <li>
        <strong>Worker impact.</strong> AI deployment displacing employees deserves
        a genuine conversation, not just a memo. Reskilling, transition support,
        clear comms.
      </li>
      <li>
        <strong>Environmental impact.</strong> <a href="/learn/llm">LLM</a> <a href="/learn/inference">inference</a> has a real carbon
        cost. Consider this in tool selection at high-volume use cases.
      </li>
      <li>
        <strong>Consent for data use.</strong> Train AI on customer data only with
        clear consent. Repurposing existing data for AI training without
        re-consenting is a violation in most jurisdictions.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Score your AI vendor (free, structured)",
  targetSlug: "ai-tool-evaluation-scorecard",
};

export const faq = [
  {
    q: "What questions should I ask before buying an AI tool?",
    a: "Top 10: paid pilot with our data, data retention specifics, training on our data y/n, post-cancellation deletion, SOC 2 Type II report, ARR/customer count, data export format, model upgrade cadence, cancellation process, customer using the exact use case. Vague answers on any of these are red flags.",
  },
  {
    q: "How do I review and compare different fintech AI tools?",
    a: "Standard 7-criteria framework PLUS: domain expertise of team, regulatory familiarity (FINRA, SEC, PCI-DSS, KYC/AML), audit trails, liability framing, reference customers in regulated peers. Generic AI engineers without finance background often miss compliance edge cases.",
  },
  {
    q: "What legal risks should I know about using AI in my business?",
    a: "Five areas: data privacy laws (GDPR, CCPA, sector-specific), copyright/IP (purely AI-generated work isn't copyrightable in the US), disclosure requirements when AI makes consequential decisions, output liability (most vendors disclaim it; you may carry it), bias/discrimination law (AI doesn't exempt you from Title VII, ECOA, etc.).",
  },
  {
    q: "What ethical issues should I consider before using AI?",
    a: "Transparency with users (disclose AI), human review on consequential decisions (hiring, lending, healthcare), bias testing against historically-discriminated groups, worker impact when AI displaces employees, environmental footprint at high volume, and consent for using data to train models.",
  },
];
