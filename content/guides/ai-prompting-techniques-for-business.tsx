/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Prompt engineering is the difference between AI being a productivity multiplier
      and being a generic answer machine. The good news: 5–6 patterns cover 80% of
      practical business use cases. You don&rsquo;t need a prompt engineering
      certification — you need a few reliable templates and the discipline to use them.
    </p>
    <p>
      This guide covers the patterns that consistently outperform vibes-based
      prompting, including chain-of-verification (the &ldquo;does the model agree
      with itself?&rdquo; technique that reduces hallucinations), and how to apply
      them to common business workflows like proposal drafting, financial analysis,
      and legal-document review.
    </p>
  </>
);

export const toc = [
  { id: "patterns", label: "The 6 patterns that work" },
  { id: "operations", label: "Prompt engineering for business operations" },
  { id: "chain", label: "Chain of verification" },
  { id: "financial", label: "Better prompts for financial analysis" },
  { id: "writing", label: "AI for proposals + legal docs" },
];

export const body = (
  <>
    <h2 id="patterns">The 6 prompting patterns that work for business</h2>

    <h3>1. Role + context + task + format</h3>
    <p>
      The most reliable prompt structure for any business task:
    </p>
    <pre><code>{`You are [role with relevant expertise].
Context: [the situation, key facts, constraints].
Task: [specific request].
Format: [number of items, structure, length].`}</code></pre>
    <p>
      Example: &ldquo;You are a senior financial analyst. Context: I&rsquo;m
      reviewing a SaaS company&rsquo;s Q3 10-Q with [these numbers]. Task: identify
      the 3 most concerning trends. Format: bullet list, one sentence per trend,
      include the specific number that&rsquo;s concerning.&rdquo; Beats &ldquo;analyze
      this 10-Q&rdquo; by a wide margin.
    </p>

    <h3>2. Few-shot examples</h3>
    <p>
      Show the model 2–3 examples of the input/output you want, then give it a new
      input. The model picks up your format and style much more reliably than from
      description alone.
    </p>
    <pre><code>{`Here are examples of how I summarize customer feedback:

Input: "App keeps crashing when I open the camera"
Output: { category: "bug", severity: "high", area: "camera" }

Input: "Would love a dark mode option"
Output: { category: "feature_request", severity: "low", area: "ui" }

Now categorize this:
Input: "[the new feedback]"
Output:`}</code></pre>

    <h3>3. <a href="/learn/chain-of-thought">Chain of thought</a></h3>
    <p>
      Add &ldquo;think step by step&rdquo; or &ldquo;before answering, list the
      considerations&rdquo; to any complex reasoning task. Forces the model to
      structure its work, which usually improves accuracy.
    </p>
    <p>
      Example: &ldquo;Before recommending a pricing model, list the relevant
      considerations (customer payment habits, competition, willingness to pay,
      operational complexity), then make a recommendation.&rdquo;
    </p>

    <h3>4. Decomposition</h3>
    <p>
      Don&rsquo;t ask one big question; ask 3 small ones. &ldquo;Write me a
      marketing plan&rdquo; produces generic output. &ldquo;What&rsquo;s the right
      target customer for [product]? What pain do they feel? What 3 channels reach
      them best?&rdquo; — three focused prompts produce much better output.
    </p>

    <h3>5. Self-critique</h3>
    <p>
      After getting an answer, ask: &ldquo;What&rsquo;s wrong with this? What did
      you miss? What would a critic say?&rdquo; The follow-up surfaces issues the
      first response glossed over. Often catches 30–50% of issues you&rsquo;d
      otherwise miss.
    </p>

    <h3>6. Constraint + persona injection</h3>
    <p>
      &ldquo;Respond as a skeptical investor reviewing this pitch.&rdquo;
      &ldquo;Act as a security architect identifying risks.&rdquo; Personas
      activate different parts of the model&rsquo;s training. Useful for getting
      multiple lens reviews of one piece of content.
    </p>

    <h2 id="operations">Prompt engineering for business operations</h2>
    <p>
      The high-leverage operational use cases:
    </p>
    <ul>
      <li>
        <strong>Customer support triage:</strong> classify + route + draft response.
        Few-shot pattern with 5 example tickets categorized correctly.
      </li>
      <li>
        <strong>Sales prospecting:</strong> research candidate accounts,
        prioritize by fit, draft outreach. Role + context + task pattern with
        explicit fit criteria.
      </li>
      <li>
        <strong>Document processing:</strong> extract structured data from
        contracts, invoices, receipts. Few-shot pattern with sample extractions.
      </li>
      <li>
        <strong>Internal Q&amp;A:</strong> RAG-pattern. Retrieve relevant
        docs from your knowledge base, then prompt with retrieved-context + the
        question. Include &ldquo;say I don&rsquo;t know if the answer isn&rsquo;t
        in the context&rdquo; to reduce <a href="/learn/hallucination">hallucination</a>.
      </li>
      <li>
        <strong>Meeting summarization:</strong> structured output with action items,
        decisions, open questions. Format-specified pattern wins.
      </li>
      <li>
        <strong>Code review:</strong> &ldquo;Review this code as a senior engineer
        focused on [security / performance / readability]. List specific issues
        with line numbers.&rdquo; Persona + format combo.
      </li>
    </ul>

    <h2 id="chain">Chain of verification (the hallucination killer)</h2>
    <p>
      Chain of verification is a multi-step technique that significantly reduces
      hallucinations on factual tasks. The pattern:
    </p>
    <ol>
      <li>
        <strong>Step 1:</strong> Ask the model to answer the question.
      </li>
      <li>
        <strong>Step 2:</strong> Ask the model to generate verification questions
        for each claim in its answer (&ldquo;What questions would I need to verify
        this is correct?&rdquo;).
      </li>
      <li>
        <strong>Step 3:</strong> Have the model answer each verification question
        independently (in separate prompts is best — keeps it from anchoring on its
        first answer).
      </li>
      <li>
        <strong>Step 4:</strong> Reconcile. Where do the verification answers
        contradict the original answer? Those are the hallucinations.
      </li>
    </ol>
    <p>
      Published research (Dhuliawala et al., 2023) found CoVe reduces factual
      errors by 30–50% on long-form question answering. In practice, it&rsquo;s
      most useful for high-stakes outputs — financial analysis, legal summaries,
      compliance reviews.
    </p>
    <p>
      Quick CoVe template:
    </p>
    <pre><code>{`Question: [your question]
Initial answer: [model's first response]

Now generate 3-5 verification questions whose answers would
confirm or refute the claims in the initial answer.

Answer each verification question independently, citing the
specific source or reasoning.

Where do the verification answers contradict the initial answer?`}</code></pre>

    <h2 id="financial">Better prompts for financial analysis</h2>
    <p>
      Financial analysis is where vague prompts cost real money. The structured
      pattern:
    </p>
    <pre><code>{`You are a senior CPA reviewing this for [purpose:
investment / acquisition / lending / personal].

Context: [paste financials, with units and time period
clear].

Tasks (do each separately):
1. Identify any unusual line items (size, rate of change,
   inconsistency with peers).
2. Flag any accounting choices that affect comparability
   (e.g. revenue recognition, capitalization).
3. Compute [specific ratios or metrics relevant to the purpose].
4. Note 3 questions you'd ask management.

Format: numbered list per task. Cite the specific dollar
amount or percentage for each finding.`}</code></pre>
    <p>
      Always verify the model&rsquo;s numerical work against primary source —
      financial hallucinations (wrong dollar amounts, wrong fiscal year) are
      common. Use chain of verification for high-stakes analyses.
    </p>

    <h2 id="writing">AI for proposals and legal documents</h2>
    <p>
      Proposals, contracts, MOUs — AI shines at first drafts; humans must own the
      review.
    </p>
    <p>
      The proposal-drafting pattern:
    </p>
    <pre><code>{`Draft a 1-page proposal for [service] to [client].

Context:
- Client: [paste website summary]
- Their goal: [what they said in discovery]
- Our scope: [3-5 bullets of what we'll deliver]
- Pricing approach: [fixed / T&M / retainer]
- Timeline: [weeks]

Structure:
1. Executive summary (2-3 sentences)
2. Approach (3-5 bullets)
3. Deliverables (numbered list)
4. Timeline (table format)
5. Investment (range, not a single number)
6. Next step

Tone: professional, confident, specific (no buzzwords).`}</code></pre>
    <p>
      For legal docs (NDAs, contracts, addendums): AI is good at first drafts and
      red-lining. AI is bad at jurisdiction-specific compliance and case-law-
      driven nuance. Always have a real lawyer review before signing anything
      consequential.
    </p>
    <p>
      A useful red-line pattern:
    </p>
    <pre><code>{`Review this contract from [my role: vendor / customer]
perspective. Identify:
- Clauses that disadvantage me
- Missing protections
- Ambiguous language
- Industry-standard items that are missing

For each, propose a redline with specific replacement language.`}</code></pre>
  </>
);

export const cta = {
  label: "Try the free AI prompt generator",
  targetSlug: "ai-prompt-generator",
};

export const faq = [
  {
    q: "How can prompt engineering improve my business operations?",
    a: "Six core patterns: role + context + task + format, few-shot examples, chain of thought, decomposition, self-critique, persona injection. Apply to support triage, sales prospecting, document processing, internal Q&A (RAG), meetings, and code review. The structured prompts consistently outperform vibes-based prompting.",
  },
  {
    q: "What does 'chain of verification' mean for AI decisions?",
    a: "A multi-step technique to reduce hallucinations: (1) get initial answer, (2) generate verification questions for each claim, (3) answer them independently, (4) reconcile contradictions. Published research shows 30-50% reduction in factual errors on long-form QA. Most useful for high-stakes outputs like financial analysis or legal summaries.",
  },
  {
    q: "Can AI help me write better business proposals and legal docs?",
    a: "Yes for first drafts and red-lining. No for jurisdiction-specific compliance and case-law nuance. Use the structured proposal pattern (context + structure + tone) for proposals; use a redline-from-perspective pattern for contracts. Always have a real lawyer review consequential legal documents.",
  },
  {
    q: "How do I write better prompts for AI financial analysis?",
    a: "Use the role + context + tasks + format pattern. State the purpose (investment / acquisition / lending). Decompose into separate tasks (unusual items, accounting choices, ratios, management questions). Verify numerical work against primary source — financial hallucinations are common. Apply chain of verification for high-stakes analyses.",
  },
];
