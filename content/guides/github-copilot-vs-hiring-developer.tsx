/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Should we adopt Copilot or hire another developer?&rdquo; is the wrong
      question — they&rsquo;re different categories. The right framing: give your
      existing devs Copilot, and hire when you need new capacity. This guide breaks
      down the math, security concerns, and adoption playbook.
    </p>
  </>
);

export const toc = [
  { id: "framing", label: "Why it&rsquo;s not actually a tradeoff" },
  { id: "cost-comparison", label: "Cost comparison" },
  { id: "ai-replace", label: "Will AI replace developer jobs?" },
  { id: "small-business", label: "Worth it for small businesses?" },
  { id: "freelance", label: "Productivity for freelancers" },
];

export const body = (
  <>
    <h2 id="framing">Why it&rsquo;s not actually a tradeoff</h2>
    <p>
      GitHub Copilot is a productivity multiplier on existing developers ($228/year per
      seat). A developer hire is full headcount ($150K-300K total comp). They&rsquo;re
      different financial categories with different ROIs and different decision
      timelines.
    </p>
    <p>
      The right question pair:
    </p>
    <ol>
      <li>
        <strong>Should we give our existing developers Copilot?</strong> Almost always
        yes — see our <a href="/tools/github-copilot-roi-calculator">ROI calculator</a>.
        The math works at any team size where you have actively-coding developers.
      </li>
      <li>
        <strong>Do we need additional developer capacity?</strong> Separate question.
        If yes, hire (and give the new hire Copilot). If no, optimize existing capacity
        with Copilot first.
      </li>
    </ol>
    <p>
      Companies that frame it as &ldquo;Copilot or hire&rdquo; usually under-invest in
      both. The correct answer is almost always &ldquo;both, sequentially.&rdquo;
    </p>

    <h2 id="cost-comparison">Cost comparison (when forced to choose)</h2>
    <ul>
      <li>
        <strong>GitHub Copilot Business:</strong> $228/year/seat. For a 15-person team,
        $3420/year. Conservative 15% productivity gain on coding tasks → $200K+ in
        time savings annually for typical mid-tier comp.
      </li>
      <li>
        <strong>One additional mid-level developer (US):</strong> $180K base + $25K
        bonus + $15K equity ≈ $220K total comp. Adds capacity equivalent to one
        developer.
      </li>
      <li>
        <strong>One additional offshore developer:</strong> $40K-80K total comp.
        Adds capacity (with coordination overhead).
      </li>
      <li>
        <strong>One contract/freelance developer:</strong> $80-200/hour. Variable
        capacity matched to need.
      </li>
    </ul>
    <p>
      Capacity-per-dollar: Copilot is the highest-leverage spend. New hire gives you
      net-new capacity. They solve different problems.
    </p>

    <h2 id="ai-replace">Will AI replace developer jobs?</h2>
    <p>
      Honest assessment based on multi-year studies (GitHub, GitClear, Microsoft
      Research) and industry observation 2023-2026:
    </p>
    <ul>
      <li>
        <strong>Productivity gains:</strong> 10-30% on coding tasks. Not 10× labor
        displacement. The numbers are real but moderate.
      </li>
      <li>
        <strong>Senior developer leverage:</strong> goes up. Senior devs use Copilot
        as scaffolding for more ambitious projects. Gap between senior and junior in
        leverage may widen.
      </li>
      <li>
        <strong>Junior developer skills:</strong> the floor of skill-required-to-be-
        productive may rise. Junior devs need to be intentional about not over-relying
        on Copilot for code they don&rsquo;t understand.
      </li>
      <li>
        <strong>Net employment effect:</strong> as of 2026, software-engineering
        employment is roughly stable. The pessimistic predictions of 2023 didn&rsquo;t
        materialize. Companies that adopted Copilot didn&rsquo;t fire developers — they
        shipped more.
      </li>
      <li>
        <strong>Long-term:</strong> uncertain. Models keep improving; the relationship
        between AI capability and labor demand will keep evolving. Reasonable
        framing: AI changes the work, not eliminates it, on a 5-year horizon.
      </li>
    </ul>

    <h2 id="small-business">Is GitHub Copilot worth it for small businesses?</h2>
    <p>
      Almost always yes for any team with developers. The math:
    </p>
    <ul>
      <li>3-person dev team: $684/year. 15% productivity gain × team comp ~$50K savings.</li>
      <li>10-person dev team: $2280/year. 15% productivity gain × team comp ~$170K savings.</li>
    </ul>
    <p>
      The barrier isn&rsquo;t cost — it&rsquo;s adoption. Some developers resist
      Copilot for taste, productivity-claim skepticism, or training-data concerns. The
      right move:
    </p>
    <ol>
      <li>Pilot with 3-5 willing volunteers for 60 days.</li>
      <li>Track their PR throughput vs the team baseline.</li>
      <li>Survey their satisfaction.</li>
      <li>If positive, roll out to full team with optional opt-in (forced adoption causes resentment).</li>
    </ol>

    <h2 id="freelance">Copilot for freelancers + independent contractors</h2>
    <p>
      For solo developers, Copilot Individual ($10/month or $100/year) is one of the
      highest-leverage subscriptions in tech:
    </p>
    <ul>
      <li>
        <strong>Faster project delivery.</strong> 10-30% on coding tasks compounds over
        a project.
      </li>
      <li>
        <strong>Domain pivot speed.</strong> Working in a language you don&rsquo;t use
        often becomes faster — Copilot fills in idioms you&rsquo;d Google.
      </li>
      <li>
        <strong>Documentation generation.</strong> Reasonably good at first-pass
        comments + JSDoc/Sphinx blocks.
      </li>
      <li>
        <strong>Proposal drafting.</strong> Good at scaffolding technical write-ups.
      </li>
    </ul>
    <p>
      The <a href="/learn/roi">ROI</a> for solo devs at any reasonable hourly rate is overwhelming. $100/year
      for tools that save you a dozen hours pays back many times over.
    </p>
  </>
);

export const cta = {
  label: "Run Copilot ROI for your team",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot vs hiring a developer — which costs less?",
    a: "Different categories. Copilot ($228/year/seat) is a productivity multiplier on existing devs. New developer hire ($150-300K total comp) is net-new capacity. Right framing: give existing devs Copilot, hire when you need new capacity. Almost never an either-or.",
  },
  {
    q: "Will AI replace my developer job?",
    a: "Multi-year studies show 10-30% productivity gains on coding tasks, not 10× labor displacement. Senior dev leverage goes up; junior dev skill floor rises. Net employment in software is roughly stable as of 2026. Companies that adopted AI shipped more rather than firing developers.",
  },
  {
    q: "Is GitHub Copilot worth it for small businesses?",
    a: "Almost always yes for teams with developers. 3-person team: $684/year for ~$50K productivity gains. 10-person team: $2280/year for ~$170K. The barrier is dev adoption (taste, skepticism, training-data concerns), not cost. Pilot with willing volunteers first.",
  },
  {
    q: "GitHub Copilot for freelancers — does it make you more productive?",
    a: "Yes — meaningfully. $100/year Individual tier saves ~10-30% time on coding tasks; for solo devs at any reasonable hourly rate, ROI is overwhelming. Best uses: faster delivery, working in unfamiliar languages, documentation generation, proposal scaffolding.",
  },
];
