/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Can AI actually help with personal finance? The honest answer in 2026: yes, in
      narrow ways that most people don&rsquo;t realize. AI is bad at picking stocks. It
      is good at categorizing spending, drafting financial messages, summarizing
      statements, and turning vague money worries into specific actions.
    </p>
    <p>
      This guide is the practical list of high-leverage AI applications for personal
      finance — with the prompts that work, the workflows that don&rsquo;t require
      sharing sensitive data, and the limits of what to expect.
    </p>
  </>
);

export const toc = [
  { id: "what-works", label: "What AI is actually good at" },
  { id: "categorization", label: "Spending categorization + budget review" },
  { id: "prompts", label: "Better prompts for financial insights" },
  { id: "negotiation", label: "Negotiation + comms drafts" },
  { id: "warnings", label: "What AI can&rsquo;t do (and shouldn&rsquo;t)" },
];

export const body = (
  <>
    <h2 id="what-works">What AI is actually good at for personal finance</h2>
    <p>
      The five highest-leverage applications:
    </p>
    <ol>
      <li>
        <strong>Spending categorization.</strong> Paste your bank export. AI can group
        transactions by category, flag recurring charges, and identify
        &ldquo;subscriptions you forgot about.&rdquo; Faster than any budgeting app
        because you don&rsquo;t need to teach it your categories.
      </li>
      <li>
        <strong>Statement summarization.</strong> Paste a 12-page brokerage statement or
        retirement plan disclosure. Get a 200-word summary of fees, asset allocation, and
        notable changes vs last quarter.
      </li>
      <li>
        <strong>Negotiation drafts.</strong> &ldquo;Draft a polite email asking my
        landlord for a 5% rent reduction, citing specific market data.&rdquo; AI is
        excellent at the framing and phrasing.
      </li>
      <li>
        <strong>Financial term explanations.</strong> &ldquo;Explain what a Roth conversion
        ladder is, in 200 words, like I&rsquo;m a graduate but not a CPA.&rdquo; Cuts
        through jargon without paying a financial advisor for the consult.
      </li>
      <li>
        <strong>Decision tree exploration.</strong> &ldquo;If I have $X and goal Y, walk
        me through the 3 main strategies I should consider, with tradeoffs.&rdquo; AI
        won&rsquo;t make the decision but it&rsquo;ll structure the choice space.
      </li>
    </ol>

    <h2 id="categorization">Spending categorization + budget review</h2>
    <p>
      The workflow that replaces a lot of paid budgeting apps:
    </p>
    <ol>
      <li>
        Export your last 90 days of bank + credit card transactions as CSV.
      </li>
      <li>
        Open ChatGPT or Claude (paid tier preferred for upload + reasoning depth, free
        works with copy-paste).
      </li>
      <li>
        Paste with: &ldquo;Categorize each transaction. Identify all recurring charges.
        Sum spending by category. Highlight any anomalies — unusually large or new
        merchant patterns.&rdquo;
      </li>
      <li>
        Review the output. Recategorize the obvious mistakes. Ask follow-ups: &ldquo;What
        am I spending more on this quarter than last quarter?&rdquo; or &ldquo;Which 5
        recurring charges could I cancel without affecting my life much?&rdquo;
      </li>
    </ol>
    <p>
      Critical: <strong>strip personal identifiers before pasting</strong>. Account
      numbers, full card numbers, addresses — none of that needs to be in the
      conversation. Most banks let you redact in the export. Use a fresh ChatGPT
      conversation; don&rsquo;t link this to memory or persistent context.
    </p>

    <h2 id="prompts">Better prompts for financial insights</h2>
    <p>
      The single biggest mistake people make with AI for finance: asking vague questions.
      &ldquo;Help me budget&rdquo; gets you generic advice. &ldquo;Should I invest in
      stocks or bonds?&rdquo; gets you a textbook answer.
    </p>
    <p>
      The prompt structure that actually works:
    </p>
    <pre><code>{`Context: I'm [age], earn [income], have [assets], have [debt],
and live in [region]. My goal is [specific goal] by [date].

Constraints: I can save [amount/month], my risk tolerance is
[low/medium/high], and I [will/will not] need this money in the
next 5 years.

Question: [specific question]

Output format: Give me 3 strategies, each with: how it works,
tradeoffs, what I'd actually need to do this month.`}</code></pre>
    <p>
      Three things this does:
    </p>
    <ul>
      <li>Forces specificity — AI can&rsquo;t hide behind generic advice when the inputs are concrete.</li>
      <li>Gives multiple options — good financial decisions are usually trade-offs, not single-answer.</li>
      <li>Demands actionability — &ldquo;what would I actually need to do this month&rdquo; is the test for whether the answer is real or fluff.</li>
    </ul>

    <h2 id="negotiation">Negotiation + comms drafts</h2>
    <p>
      The cheapest financial win most people don&rsquo;t take advantage of: AI-assisted
      negotiation drafts. Insurance, rent, salary, vendor bills — all negotiable, all
      improved by a calm professionally-worded ask.
    </p>
    <p>Examples that work:</p>
    <ul>
      <li>
        &ldquo;Draft a 100-word email asking my internet provider for a retention
        discount. I&rsquo;ve been a customer for 3 years and competing offers are
        $X cheaper.&rdquo;
      </li>
      <li>
        &ldquo;Draft a salary negotiation email asking for $X more, citing [reason]. Tone:
        confident, not entitled. Include 1 line opening the door for compromise.&rdquo;
      </li>
      <li>
        &ldquo;Draft a polite email to my insurance company requesting a re-shop quote
        based on [life change].&rdquo;
      </li>
    </ul>
    <p>
      Always edit AI drafts before sending — they read slightly off and people sense it.
      The 5-minute edit pass is worth it.
    </p>

    <h2 id="warnings">What AI can&rsquo;t do (and shouldn&rsquo;t)</h2>
    <p>
      The lines you shouldn&rsquo;t cross:
    </p>
    <ul>
      <li>
        <strong>Stock picking.</strong> AI is bad at predicting markets. Anyone selling
        you an &ldquo;AI stock picker&rdquo; in 2026 is selling vibes. Don&rsquo;t use AI
        as your investment thesis.
      </li>
      <li>
        <strong>Tax filing.</strong> AI gets 80% of tax law right and 20% catastrophically
        wrong (deductions you don&rsquo;t qualify for, AGI thresholds, state-specific
        rules). Use a CPA, or use TurboTax / FreeTaxUSA, not raw AI.
      </li>
      <li>
        <strong>Account changes / transfers.</strong> Never let an AI tool execute
        financial actions on your behalf, even if a vendor offers it. The error rate is
        not low enough for irreversible money movement.
      </li>
      <li>
        <strong>Insurance claims.</strong> Specific, time-sensitive, with legal
        consequences if you misstate. Talk to a human.
      </li>
      <li>
        <strong>Anything regulated.</strong> If a financial action requires a license
        (broker, CFP, CPA), AI is not licensed. Treat it as a research assistant, not an
        advisor.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Try the AI prompt generator (free)",
  targetSlug: "ai-prompt-generator",
};

export const faq = [
  {
    q: "Can AI really help me manage my personal finances better?",
    a: "Yes for narrow tasks: spending categorization, statement summarization, negotiation drafts, financial-term explanations, decision-space exploration. No for picking stocks, filing taxes, executing transactions, or anything regulated. Treat AI as a research and drafting assistant, not a financial advisor.",
  },
  {
    q: "How can I use AI prompts to get better financial insights?",
    a: "Stop asking vague questions. Use a structured prompt: state your situation (age, income, assets, debt, region), constraints (savings rate, risk tolerance, timeline), specific question, and required output format (e.g. '3 strategies with tradeoffs'). Specificity in equals specificity out.",
  },
  {
    q: "How do I write better prompts for AI financial analysis?",
    a: "Add context (numbers, not categories), constraints (what's actually possible for you), explicit format requirements (number of options, output structure), and a follow-up loop (ask AI to challenge its own answer). Avoid hypothetical 'should I' questions — phrase as 'compare 3 approaches.'",
  },
  {
    q: "Is it safe to share financial data with AI tools?",
    a: "Strip identifiers first (account numbers, full card numbers, addresses). Use fresh conversations without persistent memory. Free tiers may train on your data — check the privacy policy. For high-sensitivity data, use enterprise tiers with no-train guarantees, or process locally with self-hosted models.",
  },
];
