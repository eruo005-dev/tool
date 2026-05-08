/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The most-asked question on AI-strategy threads in 2026:{" "}
      <em>&ldquo;how much should I expect to pay, and is it worth it?&rdquo;</em> Vendor
      websites quote ranges from $15K to $500K with no useful signal about which end of
      that spectrum applies to you. This guide gives you the honest pricing model + <a href="/learn/roi">ROI</a>
      math + payback expectations.
    </p>
    <p>
      Plug your numbers into our{" "}
      <a href="/tools/ai-consulting-roi-calculator">AI consulting ROI calculator</a> in
      another tab as you read.
    </p>
  </>
);

export const toc = [
  { id: "models", label: "Pricing models" },
  { id: "ranges", label: "Realistic cost ranges" },
  { id: "roi", label: "What ROI to expect" },
  { id: "timeline", label: "Timeline expectations" },
  { id: "cheap", label: "Cheapest legitimate options" },
];

export const body = (
  <>
    <h2 id="models">The four pricing models</h2>
    <ul>
      <li>
        <strong>Fixed-fee project.</strong> One number for a defined scope. Best for
        well-bounded problems (build a document classifier, integrate Claude into your CRM).
        Risk: scope creep eats the margin and the consultant pushes back hard on changes.
      </li>
      <li>
        <strong>Time &amp; materials with ceiling.</strong> Hourly billing with a hard
        cap. Best for exploratory work where scope is genuinely uncertain. Risk: ceiling
        gets hit and you negotiate from a weak position.
      </li>
      <li>
        <strong>Retainer.</strong> Monthly fee for a fractional-CTO-like engagement.
        Best for ongoing strategy + implementation oversight. Risk: easy to keep paying
        when you&rsquo;ve plateaued on value.
      </li>
      <li>
        <strong>Outcome-based / equity.</strong> Vendor takes a percentage of measured
        savings or revenue uplift. Sounds great in theory; in practice the measurement
        is contentious and most firms don&rsquo;t actually offer this. The few that do
        charge premium rates to make the math work.
      </li>
    </ul>
    <p>
      Default to fixed-fee with milestones for first engagements. Move to T&amp;M or
      retainer only if you have a track record with the firm.
    </p>

    <h2 id="ranges">Realistic cost ranges (USD, 2026)</h2>
    <p>
      These ranges are public-pricing observations from RFPs, vendor proposals, and
      published case studies — not vendor-marketing &ldquo;starting from&rdquo; prices.
    </p>
    <ul>
      <li>
        <strong>Strategy-only engagements (6–12 weeks):</strong> $25K–$80K. Output: an AI
        roadmap, prioritized use cases, build-vs-buy recommendations, vendor short-list.
        No code shipped.
      </li>
      <li>
        <strong>Single-use-case implementation (8–16 weeks):</strong> $50K–$200K. Output:
        production-ready integration of an off-the-shelf model into one specific workflow
        (customer support, document processing, internal search).
      </li>
      <li>
        <strong>Custom model <a href="/learn/fine-tuning">fine-tuning</a> + deployment (16–24 weeks):</strong> $150K–$500K.
        Output: domain-specific fine-tuned model with eval harness, hosted infra, runbooks.
      </li>
      <li>
        <strong>Enterprise transformation programs:</strong> $500K–$5M+. Multi-year. Big
        consulting firms (Accenture, Deloitte, BCG GAMMA). Mostly out of scope for SMBs.
      </li>
      <li>
        <strong>Boutique / fractional-AI-leader retainers:</strong> $5K–$25K/month for
        20–40 hours of senior advisor time. Best entry point for SMBs that want
        guidance without committing to a big bang.
      </li>
    </ul>
    <p>
      What pushes you toward the top of each range: regulated industry (legal, healthcare,
      finance), large data volumes, custom model requirements, multi-stakeholder
      organizations. What pulls you toward the bottom: clear use case, willingness to use
      off-the-shelf APIs, single decision-maker, mid-size data.
    </p>

    <h2 id="roi">What ROI to expect</h2>
    <p>
      Use our{" "}
      <a href="/tools/ai-consulting-roi-calculator">ROI calculator</a> for your numbers,
      but the typical patterns:
    </p>
    <ul>
      <li>
        <strong>Strong-fit engagements:</strong> 3–6 month payback, 3–10× return over 3
        years. These are projects with clear repeatable workflows (customer support
        tickets, document processing, internal Q&amp;A).
      </li>
      <li>
        <strong>Marginal engagements:</strong> 9–18 month payback. The use case is real
        but accuracy is harder than expected, integration takes longer, or hours-saved
        estimates were optimistic.
      </li>
      <li>
        <strong>Failed engagements:</strong> negative ROI. The most common cause is
        wrong-problem-solved — the AI works as built but doesn&rsquo;t move the metric the
        business cares about.
      </li>
    </ul>
    <p>
      Roughly 60% of AI engagements deliver positive ROI by month 12. The 40% that
      don&rsquo;t share patterns: undefined success criteria, wrong vendor selected,
      hours-saved estimates that didn&rsquo;t survive contact with reality.
    </p>

    <h2 id="timeline">Timeline expectations</h2>
    <p>
      How long until you see results, by engagement type:
    </p>
    <ul>
      <li>
        <strong>Quick wins (6–8 weeks):</strong> use-case prioritization, off-the-shelf
        tool integration, prompt engineering for an existing workflow. You&rsquo;ll have
        something measurable in production by month 2.
      </li>
      <li>
        <strong>Medium projects (3–4 months):</strong> single-workflow automation,
        retrieval-augmented generation (RAG) pipelines, customer-support AI. Beta in
        month 2, production by month 4.
      </li>
      <li>
        <strong>Long projects (6–9 months):</strong> custom fine-tuned models, multi-system
        integrations, regulated-industry deployments. First measurable outcome at month
        4–5; production at 6–9.
      </li>
      <li>
        <strong>Enterprise programs (12–24+ months):</strong> AI-driven transformations
        spanning multiple departments. Stage-gated; first wins by month 6, full scope at
        18+.
      </li>
    </ul>
    <p>
      If a vendor promises &ldquo;production AI in 30 days,&rdquo; either the scope is
      tiny or they&rsquo;re glossing over the hardening phase. Both are fine — just know
      which one you&rsquo;re buying.
    </p>

    <h2 id="cheap">Cheapest legitimate options</h2>
    <p>
      For budget-conscious teams, four real paths under $20K:
    </p>
    <ol>
      <li>
        <strong>Fractional AI advisor at $5K/month for 3 months.</strong> 20–40 hours of
        senior strategy time. Total $15K. Output: prioritized roadmap + vendor shortlist
        + you have someone to call when you get stuck.
      </li>
      <li>
        <strong>Implementation-only contractor.</strong> Hire a freelancer with strong
        AI eng experience for $100–200/hour, 50–80 hours total. Total $5K–$15K. Best for
        when you&rsquo;ve already done the strategy yourself.
      </li>
      <li>
        <strong>AI-vendor professional services.</strong> Most major AI vendors
        (Anthropic, OpenAI, Vertex AI) have professional-services teams that&rsquo;ll do
        focused integration work. Often cheaper than a generalist consulting firm and
        comes with deeper product expertise.
      </li>
      <li>
        <strong>Self-serve + community.</strong> Spend the $15K on AI tools + LangChain/
        LlamaIndex training + a couple of conference tickets for your team. For startups
        with strong engineers, this often outperforms hiring outside consultants.
      </li>
    </ol>
    <p>
      The sub-$5K &ldquo;AI consultant&rdquo; you find on Upwork is risky. The good ones
      cost more; the rest will burn your data and budget without delivering.
    </p>
  </>
);

export const cta = {
  label: "Run your numbers in the ROI calculator",
  targetSlug: "ai-consulting-roi-calculator",
};

export const faq = [
  {
    q: "How much does AI consulting actually cost in 2026?",
    a: "Strategy engagements run $25K-$80K. Single-use-case implementations $50K-$200K. Custom fine-tuning + deployment $150K-$500K. Fractional-AI-leader retainers $5K-$25K/month. Enterprise programs $500K+. Range varies by industry, scope, and whether you go off-the-shelf or custom.",
  },
  {
    q: "What's the ROI of working with an AI consultant?",
    a: "Strong-fit engagements: 3-6 month payback, 3-10× return over 3 years. Marginal: 9-18 months. About 60% of engagements deliver positive ROI by month 12; the other 40% fail mostly due to undefined success criteria or optimistic hours-saved estimates. Use a real ROI calculator before signing.",
  },
  {
    q: "How long does AI consulting take to show results?",
    a: "Quick wins (use-case prioritization, off-the-shelf integration): 6-8 weeks. Medium projects (single-workflow automation, RAG pipelines): 3-4 months. Long projects (custom models, multi-system, regulated industries): 6-9 months. Enterprise programs: 12-24+ months. 'Production AI in 30 days' usually means tiny scope or glossing over hardening.",
  },
  {
    q: "What's the cheapest way to get professional AI help?",
    a: "Fractional AI advisor ($5K-$15K total for 3 months), implementation-only freelance contractor ($5K-$15K), AI-vendor professional services (often deeper product expertise than generalists), or self-serve with training budget. Avoid the sub-$5K Upwork option — risk usually exceeds value.",
  },
];
