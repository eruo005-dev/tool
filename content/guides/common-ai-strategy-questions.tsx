/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Short answers to the AI strategy questions that come up over and over in business
      threads, paired with links to deeper guides where the answer needs more space.
      Covers consulting types, fintech, currency, training, ethics, and the many
      adjacent topics that don&rsquo;t fit cleanly into one of the longer guides.
    </p>
  </>
);

export const toc = [
  { id: "consulting-types", label: "Consulting + strategy types" },
  { id: "fintech", label: "AI in fintech" },
  { id: "currency", label: "Currency + international expansion" },
  { id: "training", label: "Team training + budget" },
  { id: "small-biz", label: "AI on a small budget" },
  { id: "ethics-legal", label: "Ethics + legal quick refs" },
];

export const body = (
  <>
    <h2 id="consulting-types">Consulting + strategy types</h2>

    <h3>What&rsquo;s the difference between AI consulting and AI strategy development?</h3>
    <p>
      <strong>AI strategy</strong> is the planning and prioritization phase: which
      use cases, which order, build vs buy, vendor shortlist, <a href="/learn/roi">ROI</a> estimates. Output is
      typically a roadmap document. Engagement: 4–12 weeks, $25K–$80K.{" "}
      <strong>AI consulting</strong> covers the strategy phase plus the implementation:
      actually building the system, integrating it into your workflow, training your
      team. Engagement: 3–6 months, $50K–$300K. The terms get used interchangeably in
      marketing, but the deliverables differ — confirm what you&rsquo;re buying before
      signing. Full breakdown in our{" "}
      <a href="/guides/how-to-choose-an-ai-consulting-firm">how to choose an AI
      consulting firm</a> guide.
    </p>

    <h3>What does &ldquo;agentic AI&rdquo; mean for my business?</h3>
    <p>
      An &ldquo;agent&rdquo; is an AI system that can take actions over multiple
      steps, not just generate text. In 2026 the realistic agent use cases are:
      structured workflows where each step is well-defined (research a company, find
      contacts, draft outreach, log to CRM). The marketing claims about &ldquo;fully
      autonomous AI employees&rdquo; mostly don&rsquo;t hold up under load — agents
      still need human checkpoints. Plan for human-in-the-loop unless your scope is
      narrow and well-tested.
    </p>

    <h2 id="fintech">AI in fintech</h2>

    <h3>How do successful fintech companies use AI?</h3>
    <p>
      Five well-documented use cases: (1) fraud detection — pattern matching on
      transaction streams, well-suited to AI; (2) credit underwriting — AI augmenting
      traditional bureau models, with regulatory limits; (3) customer support
      automation — Tier 1 ticket triage and FAQ; (4) compliance monitoring — KYC/AML
      pattern flagging; (5) personalized financial advice within tight regulatory
      guardrails. The unsexy areas (fraud, compliance) generally produce the best
      ROI. The trendy ones (personalized investment advice) carry the highest
      regulatory and liability risk.
    </p>

    <h2 id="currency">Currency + international expansion</h2>

    <h3>Should I use multiple currency platforms for international expansion?</h3>
    <p>
      Depends on volume + complexity. For early-stage international (under $500K
      annual non-USD revenue), one platform like Wise Business or Stripe&rsquo;s
      multi-currency receiving is enough — single dashboard, predictable FX margins
      around 0.5–1%. For mid-stage international ($500K–$5M annual non-USD), consider
      a primary platform (Wise, Mercury) plus a secondary for niche corridors not
      well-served by the primary. For mature international ($5M+), you&rsquo;ll often
      want a dedicated FX provider (Cambridge, OFX, Convera) for spot rates plus your
      payment platform for operational accounts. The cost of consolidating to one
      platform too early: hidden FX margins of 2–4% on transactions. The cost of too
      many platforms: operational overhead and reconciliation complexity.
    </p>

    <h3>How do I evaluate FX / multi-currency platforms?</h3>
    <p>
      Five criteria: real-time FX margin transparency (not just &ldquo;competitive
      rates&rdquo;), corridor coverage for your specific currencies, settlement speed,
      regulatory licensing in source/destination countries, integration with your
      accounting stack. Always test with a small transaction in each corridor before
      committing — published rates and actual rates often differ.
    </p>

    <h2 id="training">Team training + budget</h2>

    <h3>How should I invest in AI training for my team?</h3>
    <p>
      Layered approach across roles. <strong>For everyone:</strong> 4–8 hours of
      free Anthropic / DeepLearning.AI / Hugging Face courses on prompt engineering
      and AI fundamentals. <strong>For senior engineers:</strong> conference
      attendance ($1K–$3K/seat — AI Engineer Summit, applied tracks at QCon /
      MLSys), vendor certifications ($200–$500/seat), and 4–6 weeks pair-programming
      with a senior consultant ($20K–$50K). <strong>For leadership:</strong> a 4-week
      AI strategy engagement ($15K–$30K) so they make informed build/buy decisions.
      Total annual budget for a 10-person team: $30K–$80K. ROI: typically positive
      within 12–18 months in faster delivery and better tool selection.
    </p>

    <h2 id="small-biz">AI on a small budget</h2>

    <h3>How can small businesses use AI without breaking the budget?</h3>
    <p>
      Five high-leverage actions under $200/month: (1) ChatGPT or Claude paid tier
      ($20/month) for the team — enough usage and reasoning depth for real work; (2)
      structured prompt templates for the recurring tasks (sales outreach, customer
      support, content drafts) — free; (3) one tactical AI integration through your
      existing SaaS stack (Notion AI, HubSpot AI features, Intercom Fin) — typically
      $0–$50/month uplift on existing subscriptions; (4) free training for team —
      Anthropic course, DeepLearning.AI; (5) avoid AI subscription apps that promise
      to do everything (under-perform best-of-breed tools). The overlooked move:
      teach your team to use the <a href="/learn/llm">LLM</a> they already pay for properly, rather than
      buying additional AI tools they won&rsquo;t use.
    </p>

    <h2 id="ethics-legal">Ethics + legal quick refs</h2>

    <h3>What ethical issues should I consider before using AI?</h3>
    <p>
      Six items: transparency with users, human review on consequential decisions,
      bias testing against historically-discriminated groups, worker impact when AI
      displaces employees, environmental footprint at high volume, consent for
      training on customer data. See{" "}
      <a href="/guides/how-to-evaluate-an-ai-tool">how to evaluate an AI tool</a> for
      the structured framework.
    </p>

    <h3>What legal risks should I know?</h3>
    <p>
      Five areas: data privacy (GDPR / CCPA / sector-specific), copyright + IP
      (purely AI-generated content isn&rsquo;t copyrightable in the US), disclosure
      requirements (AI-driven hiring / lending often requires disclosure),
      output liability (most vendors disclaim it; you may carry it), bias /
      discrimination (existing law applies regardless of AI involvement). Detailed
      breakdown in <a href="/guides/how-to-evaluate-an-ai-tool">how to evaluate an
      AI tool</a>.
    </p>

    <h3>How do I document AI decision-making for compliance?</h3>
    <p>
      Three minimum-viable artifacts: (1) input log — what data went into the
      decision; (2) model + version log — exactly which model produced the output,
      with version pinning where possible; (3) output log + human review record —
      what the model returned and how a human reviewed it. Most regulated
      industries also want a human attestation that the final decision was reviewed
      by a qualified person, not just rubber-stamped. Start with these three logs;
      add more as your specific compliance regime requires.
    </p>

    <h3>How do I handle privacy when using AI tools?</h3>
    <p>
      Three rules: (1) classify data sensitivity before any AI input; (2) match the
      sensitivity to the right tier — public data anywhere, internal data on
      paid-tier with no-train guarantee, sensitive data on enterprise tier or
      self-hosted models, regulated data only on certified-compliant tools; (3)
      strip identifiers when possible (account numbers, full PII) even on paid
      tiers — defense in depth. Audit AI usage quarterly to catch drift.
    </p>
  </>
);

export const cta = {
  label: "Score your AI vendor (structured checklist)",
  targetSlug: "ai-tool-evaluation-scorecard",
};

export const faq = [
  {
    q: "What's the difference between AI consulting and AI strategy?",
    a: "Strategy is the planning phase (roadmap, prioritization, vendor shortlist) — 4-12 weeks, $25-80K. Consulting includes implementation (building, integrating, training your team) — 3-6 months, $50-300K. The terms get used interchangeably; confirm what's actually being delivered before signing.",
  },
  {
    q: "How do successful fintech companies use AI?",
    a: "Five proven patterns: fraud detection, credit underwriting (with regulatory limits), customer support tier-1 automation, KYC/AML compliance monitoring, personalized financial advice within strict regulatory guardrails. The unsexy uses (fraud, compliance) often produce the best ROI; the trendy ones (investment advice) carry the highest regulatory risk.",
  },
  {
    q: "How should I invest in AI training for my team?",
    a: "Layered: free fundamentals for everyone (Anthropic, DeepLearning.AI), conference attendance for senior engineers ($1-3K/seat), AI strategy engagement for leadership ($15-30K), pair-programming with consultants for hands-on engineers ($20-50K). Annual budget for a 10-person team: $30-80K with positive ROI typically within 12-18 months.",
  },
  {
    q: "How can small businesses use AI without breaking the budget?",
    a: "$200/month or less: paid LLM tier for the team, structured prompt templates for recurring tasks, one tactical AI integration on existing SaaS, free training, and avoiding AI subscription apps that under-perform best-of-breed tools. Most overlooked move: teach your team to properly use the LLM you already pay for.",
  },
];
