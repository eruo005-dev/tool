/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      For small businesses with a development team, GitHub Copilot pays back
      faster than almost any other software subscription. The barrier isn&rsquo;t
      cost — it&rsquo;s adoption mechanics + measuring real productivity gains.
      This guide is the small-business decision framework.
    </p>
  </>
);

export const toc = [
  { id: "math", label: "The math for small teams" },
  { id: "rollout", label: "Rollout playbook" },
  { id: "measure", label: "Measuring real productivity gain" },
  { id: "objections", label: "Common dev objections" },
];

export const body = (
  <>
    <h2 id="math">The math for small teams</h2>
    <p>
      Use our <a href="/tools/github-copilot-roi-calculator">ROI calculator</a> with
      your numbers. Quick benchmarks at conservative 15% productivity gain on
      coding tasks:
    </p>
    <ul>
      <li><strong>3-person dev team:</strong> $684/year subscription. ~$50K/year saved.</li>
      <li><strong>5-person dev team:</strong> $1140/year subscription. ~$80K/year saved.</li>
      <li><strong>10-person dev team:</strong> $2280/year subscription. ~$170K/year saved.</li>
      <li><strong>15-person dev team:</strong> $3420/year subscription. ~$250K/year saved.</li>
    </ul>
    <p>
      Even at half the assumed productivity gain (7.5%), the <a href="/learn/roi">ROI</a> is overwhelming.
      The subscription cost is below the noise floor of most small-business IT
      budgets.
    </p>

    <h2 id="rollout">Rollout playbook for small teams</h2>
    <ol>
      <li>
        <strong>Pilot with 3-5 willing volunteers for 60 days.</strong> Self-
        selected; not mandated. Includes one senior dev, one mid, one junior
        ideally.
      </li>
      <li>
        <strong>Track outcomes.</strong> PR throughput, lines committed (caveat),
        self-reported satisfaction. The qualitative signal is more reliable than
        the quantitative — devs are good judges of whether a tool is helping.
      </li>
      <li>
        <strong>Iterate on workflow.</strong> Some teams use Copilot heavily for
        first drafts; others use it sparingly for autocomplete only. The right
        usage pattern varies.
      </li>
      <li>
        <strong>If pilot is positive (most are), roll out to full team.</strong>{" "}
        Optional opt-in beats forced adoption — devs who explicitly opt out tend
        to have specific concerns that mandate-from-above doesn&rsquo;t resolve.
      </li>
      <li>
        <strong>Set up Business tier billing.</strong> Centralized; org admin
        controls.
      </li>
      <li>
        <strong>Update policies.</strong> Document the org&rsquo;s position on
        Copilot use in OSS contributions, in client work, in code reviews.
        Reduces ambiguity.
      </li>
    </ol>

    <h2 id="measure">Measuring real productivity gain</h2>
    <p>
      The quantitative metrics that work:
    </p>
    <ul>
      <li>
        <strong>PRs per week per dev.</strong> Compare 60-day pre-Copilot baseline to
        60-day post-rollout. Adjust for team size + project complexity.
      </li>
      <li>
        <strong>Time-from-ticket-start to PR-opened.</strong> Tighter than
        ticket-completion which includes review wait.
      </li>
      <li>
        <strong>Lines of code per dev (with caveat).</strong> AI tools encourage
        verbose code; raw line count can mislead. Use as a directional signal
        only.
      </li>
      <li>
        <strong>Test coverage trends.</strong> Should stay flat or improve.
        Tests-shipping should accompany Copilot adoption.
      </li>
    </ul>
    <p>
      The qualitative metrics that work:
    </p>
    <ul>
      <li>
        <strong>Self-reported satisfaction.</strong> Quarterly survey: &ldquo;is
        Copilot helping?&rdquo; Most teams converge on yes by month 3.
      </li>
      <li>
        <strong>&ldquo;Would you keep it if you had to pay personally?&rdquo;</strong>{" "}
        The retention test. If most devs say yes, ROI is real.
      </li>
      <li>
        <strong>Specific use-case examples.</strong> Devs sharing &ldquo;Copilot
        wrote this and it saved me an hour&rdquo; stories. Anecdotal but accumulates.
      </li>
    </ul>

    <h2 id="objections">Common developer objections + how to address them</h2>
    <ul>
      <li>
        <strong>&ldquo;It writes bad code.&rdquo;</strong> Sometimes true. Frame: it&rsquo;s
        a starting point, not a finish line. Code review still required. Tests
        still catch errors.
      </li>
      <li>
        <strong>&ldquo;It will make me a worse programmer.&rdquo;</strong> Concern is
        real for juniors over-relying. Mitigate: pair-program with senior on
        non-Copilot weeks; insist on understanding generated code before merging.
      </li>
      <li>
        <strong>&ldquo;Privacy / training data.&rdquo;</strong> Business + Enterprise
        tiers opt out of training-data use. Get this in the contract.
      </li>
      <li>
        <strong>&ldquo;I don&rsquo;t want my code on GitHub&rsquo;s servers.&rdquo;</strong>{" "}
        Self-hosted alternatives (Continue.dev with local models, Tabnine self-
        hosted, Codeium self-hosted) exist. Acknowledge the concern; offer the
        alternatives.
      </li>
      <li>
        <strong>&ldquo;Copyright on output.&rdquo;</strong> Real concern. Business +
        Enterprise tiers include IP indemnification. Individual tier doesn&rsquo;t.
      </li>
      <li>
        <strong>&ldquo;Vendor lock-in.&rdquo;</strong> Modest. Copilot is an editor
        plugin — switching to Cursor, Codeium, or Continue is straightforward.
        Your code doesn&rsquo;t live in Copilot.
      </li>
    </ul>
    <p>
      The pattern across most objections: not entirely wrong, addressable with the
      right tier + workflow. Forced adoption fails; volunteer-driven adoption with
      transparent objection-handling succeeds.
    </p>
  </>
);

export const cta = {
  label: "Calculate ROI for your team",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "Is GitHub Copilot worth it for small businesses?",
    a: "Almost always yes for any team with developers. 3-person team: $684/year saves ~$50K/year at conservative 15% productivity gain. 10-person team: $2280/year saves ~$170K/year. Subscription cost is below most small-business IT noise floor. Barrier isn't cost — it's adoption mechanics.",
  },
  {
    q: "How do I roll out GitHub Copilot to my team?",
    a: "60-day pilot with 3-5 willing volunteers (one senior, one mid, one junior). Track PR throughput + qualitative satisfaction. If positive (most pilots are), roll out to full team with optional opt-in (forced adoption fails). Set up Business tier billing. Document policies for OSS / client work.",
  },
  {
    q: "How do I measure real productivity gain from Copilot?",
    a: "Quantitative: PRs/week/dev (compare pre/post 60-day baselines), ticket-start to PR-opened time, test coverage trends. Qualitative: self-reported satisfaction (quarterly survey), 'would you keep it if you had to pay personally' retention test, specific use-case stories.",
  },
  {
    q: "How do I address developer objections to Copilot?",
    a: "Common objections + addresses: 'writes bad code' (it's a starting point, code review still required), 'makes me worse programmer' (real for juniors over-relying — mitigate with non-Copilot pair sessions), 'privacy' (Business/Enterprise opt out), 'copyright' (Business/Enterprise IP indemnification). Forced adoption fails; volunteer-driven with transparent handling succeeds.",
  },
];
