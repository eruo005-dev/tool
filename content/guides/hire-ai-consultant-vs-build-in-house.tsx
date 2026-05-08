/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The hire-vs-build decision for AI is the same question every business has faced
      with every new technology — but the math has changed because the tooling moves so
      fast. Three years ago you needed an ML PhD. Today you need someone who can read
      docs and ship API integrations.
    </p>
    <p>
      This guide is the decision framework: when consulting wins, when in-house wins, and
      the hybrid path that&rsquo;s become the most common pattern in 2026.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "The decision framework" },
  { id: "consulting-wins", label: "When consulting wins" },
  { id: "in-house-wins", label: "When in-house wins" },
  { id: "hybrid", label: "The hybrid pattern" },
  { id: "training", label: "Investing in team AI training" },
  { id: "non-technical", label: "Getting started if you&rsquo;re non-technical" },
];

export const body = (
  <>
    <h2 id="framework">The decision framework</h2>
    <p>
      Three variables determine the answer:
    </p>
    <ol>
      <li>
        <strong>How specific is the use case to your business?</strong> Common use cases
        (customer support AI, doc summarization, email drafting) have off-the-shelf
        solutions and consultants who&rsquo;ve done it 50 times. Specific use cases (your
        proprietary data, your unique workflow, your industry&rsquo;s regulations) need
        in-house judgment.
      </li>
      <li>
        <strong>What&rsquo;s your engineering bench?</strong> If you have 5 senior
        engineers with API-integration experience, your in-house cost is much lower than
        a team of 2 who&rsquo;d be doing this on top of feature work.
      </li>
      <li>
        <strong>How much will this scale?</strong> A one-time deployment? Consulting wins.
        A capability you&rsquo;ll keep iterating on for 3 years? In-house pays off.
      </li>
    </ol>

    <h2 id="consulting-wins">When consulting wins</h2>
    <ul>
      <li>
        <strong>Standard use case + tight timeline.</strong> Customer support AI for a
        SaaS company is a worn path; a consultant ships in 6 weeks what would take your
        team 6 months while learning.
      </li>
      <li>
        <strong>Regulated industries with compliance burden.</strong> Healthcare, finance,
        legal — consultants who&rsquo;ve shipped in those domains know the gotchas
        (HIPAA, SOC 2 Type II, model audit trails) that&rsquo;d eat your team&rsquo;s
        first 3 months.
      </li>
      <li>
        <strong>Strategy / prioritization work.</strong> A 3-month engagement to figure out
        which 5 of 50 ideas are worth pursuing is high-leverage even if you build it all
        in-house afterwards.
      </li>
      <li>
        <strong>One-shot deployments.</strong> Building a custom internal tool for a
        specific narrow workflow you&rsquo;ll use for years but never iterate on.
      </li>
      <li>
        <strong>You don&rsquo;t have engineering capacity.</strong> If your two engineers
        are already underwater, adding AI work without external help just delays both.
      </li>
    </ul>

    <h2 id="in-house-wins">When in-house wins</h2>
    <ul>
      <li>
        <strong>Core-product features.</strong> Anything that ships to your users as part
        of your product. The iteration loop matters too much to outsource. You&rsquo;ll
        learn what works only by being in it daily.
      </li>
      <li>
        <strong>Recurring iteration.</strong> If you&rsquo;ll be tweaking prompts, fine-
        tuning models, or adjusting RAG pipelines weekly for the next 2 years, every dollar
        spent on a consultant is a dollar that doesn&rsquo;t build internal expertise.
      </li>
      <li>
        <strong>Strong existing engineering bench.</strong> If you have engineers who can
        ramp on AI in 3-4 months, that&rsquo;s often cheaper than a 6-month consulting
        engagement and you keep the knowledge.
      </li>
      <li>
        <strong>High-stakes data privacy.</strong> When you can&rsquo;t share data with a
        third party at all (even under DPA), in-house is the only path. Build it on
        self-hosted models or carefully-vetted enterprise plans.
      </li>
      <li>
        <strong>Strategic moat ambitions.</strong> If the AI capability is supposed to be
        a competitive differentiator, you can&rsquo;t outsource the differentiator.
      </li>
    </ul>

    <h2 id="hybrid">The hybrid pattern (what most teams actually do in 2026)</h2>
    <p>
      The most common shape of a successful AI rollout:
    </p>
    <ol>
      <li>
        <strong>Months 1-3: hire a consultant for strategy.</strong> Fractional AI advisor
        at $5K-$15K/month. Output: prioritized use cases, build-vs-buy recommendations,
        vendor shortlist, training plan for your team.
      </li>
      <li>
        <strong>Months 3-6: consultant + your engineers ship the first use case.</strong>{" "}
        Senior consultant pairs with your engineers on the first production deployment.
        Knowledge transfer baked in. Total: $50K-$150K.
      </li>
      <li>
        <strong>Months 6-12: your team owns it.</strong> Consultant transitions to
        check-in advisor at $2K-$5K/month or zero. Your engineers iterate on the deployed
        system + start the next use case independently.
      </li>
      <li>
        <strong>Year 2+: in-house with occasional consulting for new domains.</strong>{" "}
        When you tackle a new use case in an unfamiliar domain (say, AI for legal review
        when your team has only done AI for support), bring in a specialist for 4-6 weeks.
      </li>
    </ol>
    <p>
      This pattern keeps total cost moderate ($75K-$200K in year 1), builds your team&rsquo;s
      capability, and avoids both extremes (over-reliance on consultants, or underwater
      engineers learning AI from scratch on critical infrastructure).
    </p>

    <h2 id="training">How to invest in AI training for your team</h2>
    <p>
      Whether you go consulting-heavy, in-house, or hybrid, your team needs AI fluency.
      The cheapest effective options:
    </p>
    <ul>
      <li>
        <strong>Self-paced courses ($0-$500/seat):</strong> Anthropic&rsquo;s Prompt
        Engineering Course (free), DeepLearning.AI specializations (~$50/month), Hugging
        Face NLP course (free), Andrew Ng / Andrej Karpathy YouTube series (free).
      </li>
      <li>
        <strong>Conference attendance ($1K-$3K/seat):</strong> AI Engineer Summit, applied
        tracks at QCon, NeurIPS workshops. Best for senior engineers who need to see
        production patterns.
      </li>
      <li>
        <strong>Internal practice projects ($0):</strong> dedicate Friday afternoons to
        AI experiments. Not directly billable; long-term <a href="/learn/roi">ROI</a> on capability is enormous.
      </li>
      <li>
        <strong>Vendor-specific certifications ($200-$500/seat):</strong> AWS Certified
        Machine Learning, Google Cloud Generative AI, etc. Most useful if you&rsquo;re
        committed to that vendor stack.
      </li>
      <li>
        <strong>Pair with a senior consultant for 4-6 weeks ($20K-$50K):</strong> the
        knowledge-transfer-as-engagement pattern. Your team ships real work alongside
        someone senior; they learn 6 months of patterns in 6 weeks.
      </li>
    </ul>

    <h2 id="non-technical">Getting started if you&rsquo;re non-technical</h2>
    <p>
      If you&rsquo;re a non-technical founder or operator, the path is different. You
      can&rsquo;t (and shouldn&rsquo;t) try to build AI from scratch. The ladder:
    </p>
    <ol>
      <li>
        <strong>Use ChatGPT / Claude / Gemini daily for 30 days.</strong> Learn what AI
        can and can&rsquo;t do by using it. Most non-technical founders form opinions
        about AI before trying it for two weeks. Don&rsquo;t.
      </li>
      <li>
        <strong>Join one AI-for-business community.</strong> Slack, LinkedIn group, or
        forum focused on practical applications in your industry. You&rsquo;ll learn what
        others have shipped, where they hit walls, and which vendors are credible.
      </li>
      <li>
        <strong>Hire a 4-week strategy engagement</strong> from a consultant who&rsquo;s
        worked in your industry. $15K-$30K. They&rsquo;ll write a prioritized roadmap and
        you&rsquo;ll know what to build first.
      </li>
      <li>
        <strong>Pilot one use case</strong> with off-the-shelf tools (no custom builds
        early). $5K-$15K. Track results.
      </li>
      <li>
        <strong>Then decide:</strong> hire a permanent AI engineer (~$180K-$280K loaded
        cost), keep using consultants, or stay on off-the-shelf tools.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Calculate the ROI of an AI engagement",
  targetSlug: "ai-consulting-roi-calculator",
};

export const faq = [
  {
    q: "Should I hire an AI consultant or build AI in-house?",
    a: "Consulting wins for: standard use cases with tight timelines, regulated industries, strategy/prioritization work, one-shot deployments, when you lack engineering capacity. In-house wins for: core product features, recurring iteration, when you have a strong engineering bench, high-stakes data privacy, strategic moat ambitions. Most teams pick a hybrid path.",
  },
  {
    q: "What's the typical hybrid AI rollout pattern?",
    a: "Months 1-3: consultant for strategy ($5-15K/mo). Months 3-6: consultant + your engineers pair on first deployment ($50-150K). Months 6-12: your team owns it, consultant becomes check-in advisor. Year 2+: in-house with occasional specialist consulting for new domains. Total year-1: $75K-$200K.",
  },
  {
    q: "How do I invest in AI training for my team?",
    a: "Layered approach: free self-paced courses (Anthropic, DeepLearning.AI, Hugging Face) for everyone, conference attendance for senior engineers ($1-3K/seat), internal practice projects (Friday afternoons), vendor certs for stack alignment, and a 4-6 week pair-with-consultant engagement for accelerated knowledge transfer.",
  },
  {
    q: "How do I get started with AI if I'm not technical?",
    a: "Use ChatGPT/Claude/Gemini daily for 30 days, join an AI-for-business community in your industry, hire a 4-week strategy engagement ($15-30K), pilot one use case with off-the-shelf tools ($5-15K). Then decide whether to hire a permanent AI engineer, keep using consultants, or stay on off-the-shelf.",
  },
];
