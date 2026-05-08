/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The AI implementation post-mortems on r/MachineLearning, r/Entrepreneur, and the
      various IT-leadership Slacks are remarkably consistent in 2026. The same handful of
      mistakes show up over and over. None of them are technical — every one is a
      planning, scoping, or stakeholder-alignment failure that AI teams keep making.
    </p>
    <p>
      Here&rsquo;s the field-tested list, with the warning signs that show up before each
      mistake bites you.
    </p>
  </>
);

export const toc = [
  { id: "first-step", label: "What to do BEFORE implementing" },
  { id: "mistakes", label: "The 8 most common mistakes" },
  { id: "success", label: "How to know it&rsquo;s working" },
  { id: "growth", label: "Will AI actually help my business grow?" },
];

export const body = (
  <>
    <h2 id="first-step">What to do BEFORE implementing AI in your business</h2>
    <p>
      The first thing isn&rsquo;t picking a vendor or training your team. It&rsquo;s
      defining the metric you&rsquo;re trying to move. The single biggest determinant of
      whether your AI project succeeds or fails: did you define success before starting?
    </p>
    <p>
      Specifically, before any AI work begins, write down:
    </p>
    <ul>
      <li>
        <strong>The metric.</strong> Customer support response time, doc processing
        throughput, sales-rep capacity, etc. One specific number that your business
        already tracks.
      </li>
      <li>
        <strong>The current baseline.</strong> What is the metric today? Last 90 days,
        not vibes.
      </li>
      <li>
        <strong>The target.</strong> What number would make this project a success? Be
        specific. &ldquo;A lot better&rdquo; is not a target.
      </li>
      <li>
        <strong>The deadline.</strong> By when? AI experiments without deadlines run
        forever and cost a fortune.
      </li>
      <li>
        <strong>The kill switch.</strong> What number, by what date, means you&rsquo;ll
        cancel this project?
      </li>
    </ul>
    <p>
      Without these five lines written down, even a technically successful AI deployment
      will feel like a failure because nobody can agree on whether it worked. With them,
      a technically <em>marginal</em> deployment can be a clear win.
    </p>

    <h2 id="mistakes">The 8 most common mistakes</h2>

    <h3>1. Solving the wrong problem</h3>
    <p>
      The classic: a team spends 4 months building an AI system that does what they
      thought they needed, only to discover the actual bottleneck was somewhere else.
      Diagnostic: walk through the user&rsquo;s end-to-end workflow before scoping. If you
      can&rsquo;t describe in a sentence which specific step the AI replaces, you
      haven&rsquo;t scoped enough.
    </p>

    <h3>2. Optimizing for accuracy when speed matters</h3>
    <p>
      A slightly less accurate but 10× faster system will be used; a perfectly accurate
      system that takes 30 seconds per query won&rsquo;t. Common in document processing
      and customer-support deployments. Diagnostic: ask users to define their patience
      threshold (&ldquo;5 seconds is fine, 30 seconds is too slow&rdquo;) before picking
      the model.
    </p>

    <h3>3. Skipping the eval harness</h3>
    <p>
      An eval harness is a structured test set with expected outputs you can run against
      any model version. Without one, you can&rsquo;t answer &ldquo;is GPT-4o better than
      Claude here?&rdquo; without subjective vibes. Every successful deployment we&rsquo;ve
      seen has an eval harness. Most failed ones don&rsquo;t.
    </p>

    <h3>4. Ignoring data quality until it&rsquo;s too late</h3>
    <p>
      &ldquo;Garbage in, garbage out&rdquo; is even more true with AI than traditional
      software. If your customer support tickets are inconsistently tagged, no amount of
      prompt engineering fixes the downstream model. Audit data quality before model
      selection, not after.
    </p>

    <h3>5. Treating AI as set-and-forget</h3>
    <p>
      Models drift. Vendors release new versions. Edge cases emerge in production. AI
      systems need ongoing maintenance — typically 0.5–1 FTE per significant deployment
      after launch. Teams that scope &ldquo;build it and walk away&rdquo; engagements
      regret it within 6 months.
    </p>

    <h3>6. Not communicating with users about AI use</h3>
    <p>
      Users discover AI is in use mid-conversation; they feel deceived; they tell their
      colleagues; trust craters. Disclose AI involvement up front and loudly. The few
      hours of comms work pre-launch saves months of trust rebuilding.
    </p>

    <h3>7. Underbudgeting for ops + monitoring</h3>
    <p>
      Most teams budget the model + integration cost and forget: API rate limits,
      observability tooling, cost spikes from prompt-injection attacks, log storage,
      eval-harness compute. Realistic: 20–40% of total project cost goes to ops over the
      first year. Budget accordingly.
    </p>

    <h3>8. Letting one stakeholder veto without alternatives</h3>
    <p>
      Legal, security, or compliance often raise valid concerns — but those concerns can
      stall projects indefinitely if the team doesn&rsquo;t come back with alternatives.
      Bring 3 paths forward when a stakeholder raises a concern: the proposed approach,
      a more conservative version, and a way to verify the concern is real. Stalled
      consensus is the silent project killer.
    </p>

    <h2 id="success">How to know if AI consulting / implementation is working</h2>
    <p>
      The 6-month checkpoints that distinguish on-track from off-track engagements:
    </p>
    <ul>
      <li>
        <strong>Month 2:</strong> Eval harness is in place. Baseline metric is measured.
        First prototype is in users&rsquo; hands.
      </li>
      <li>
        <strong>Month 3:</strong> Iteration #2 of the model / prompt has shipped. User
        feedback is being collected. Cost-per-interaction is measured.
      </li>
      <li>
        <strong>Month 4:</strong> Production deployment to a subset of users. Monitoring
        + cost dashboards live. First measurable impact on the original metric.
      </li>
      <li>
        <strong>Month 6:</strong> Full rollout. Original metric improved by some
        measurable amount (against the pre-defined target). Knowledge transfer mostly
        complete; your team can iterate without the consultant.
      </li>
    </ul>
    <p>
      If at month 4 there&rsquo;s no production deployment to anyone, the project is
      probably off track. Have a hard conversation about scope and timeline before month
      6 turns into month 12.
    </p>

    <h2 id="growth">Will AI consulting actually help my business grow?</h2>
    <p>
      Honest answer: it depends entirely on the use case fit. AI is excellent at:
    </p>
    <ul>
      <li>Summarizing or extracting from large amounts of unstructured text</li>
      <li>Generating draft content (emails, documents, code) for human review</li>
      <li>Scoring or routing inputs based on learned patterns</li>
      <li>Conversational interfaces over structured data</li>
      <li>Detecting anomalies or surfacing patterns at scale</li>
    </ul>
    <p>
      AI is not yet excellent at:
    </p>
    <ul>
      <li>Decisions with multi-step reasoning across complex domains</li>
      <li>Anything requiring 100% accuracy without human review</li>
      <li>Tasks with very small training data + high stakes</li>
      <li>Long-running autonomous agents in dynamic environments</li>
    </ul>
    <p>
      Match your use case to the first list and you&rsquo;ll see growth. Match it to the
      second and you&rsquo;ll be in the failed-engagement statistic. The honest test: ask
      yourself, &ldquo;could a smart-but-junior employee do this with the right
      instructions?&rdquo; If yes, AI probably can. If no, AI probably can&rsquo;t — yet.
    </p>
  </>
);

export const cta = {
  label: "Score your AI vendor before signing",
  targetSlug: "ai-tool-evaluation-scorecard",
};

export const faq = [
  {
    q: "What's the first thing I should do before implementing AI in my business?",
    a: "Define the success metric, baseline, target, deadline, and kill switch — in writing — before any vendor conversations. The single biggest determinant of project success is whether you wrote down what 'success' means before starting.",
  },
  {
    q: "What are the most common mistakes when implementing AI?",
    a: "Solving the wrong problem (build for the actual bottleneck), optimizing for accuracy when speed matters, skipping the eval harness, ignoring data quality, treating AI as set-and-forget, not disclosing AI to users, underbudgeting ops + monitoring, and letting one stakeholder veto without alternatives.",
  },
  {
    q: "How do I know if AI consulting will actually help my business grow?",
    a: "Match your use case to where AI is genuinely strong (summarization, classification, extraction, conversational interfaces, anomaly detection) and avoid where it isn't yet (multi-step reasoning, 100%-accuracy decisions, very small training data with high stakes). If a smart-but-junior employee with clear instructions could do the task, AI probably can too.",
  },
  {
    q: "What does success look like at 6 months for an AI engagement?",
    a: "Month 2: eval harness + baseline + prototype. Month 3: iteration 2 shipped + user feedback. Month 4: production to subset of users + monitoring. Month 6: full rollout + measurable improvement vs target + knowledge transfer mostly done. If at month 4 nothing is in production, the project is off track.",
  },
];
