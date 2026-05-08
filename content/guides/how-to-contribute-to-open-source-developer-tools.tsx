/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Contributing to open-source dev tools is one of the highest-leverage moves for
      anyone building a dev-tools career. It builds your portfolio, your network, and
      your judgment about what actually ships at production scale. The hard part:
      navigating the unwritten rules of OSS projects without burning your reputation
      on day one.
    </p>
    <p>
      This guide is the practical playbook: how to find good first issues, write a PR
      that gets merged, escalate to substantial contributions, and avoid the
      &ldquo;tone-deaf newcomer&rdquo; mistakes that scare people off.
    </p>
  </>
);

export const toc = [
  { id: "find-projects", label: "Finding the right projects" },
  { id: "first-pr", label: "Your first PR (and not getting laughed at)" },
  { id: "scale-up", label: "Scaling to substantial contributions" },
  { id: "etiquette", label: "OSS etiquette" },
];

export const body = (
  <>
    <h2 id="find-projects">Finding the right projects to contribute to</h2>
    <p>
      Three filters that produce a high-quality target list:
    </p>
    <ol>
      <li>
        <strong>Tools you actually use.</strong> Don&rsquo;t pick projects you don&rsquo;t
        use just to pad a resume. You&rsquo;ll write bad PRs because you don&rsquo;t feel
        the pain. Maintainers can tell.
      </li>
      <li>
        <strong>Active but not bloated.</strong> Look at recent commit cadence (commits
        in the last 30 days) and PR merge rate (PRs merged in last 90 days vs opened).
        Healthy projects have both. Dead projects (no commits in 3 months) won&rsquo;t
        merge your PR. Mega-bloated projects (Linux, Kubernetes core) have processes
        that take 6+ months for first-time contributors.
      </li>
      <li>
        <strong>Welcoming community.</strong> Read the last 20 closed PRs. Are
        maintainers supportive in reviews? Or curt and dismissive? The cultural fit
        matters for whether your contribution sticks.
      </li>
    </ol>

    <h2 id="first-pr">Your first PR — and how to not get laughed at</h2>
    <p>
      The pattern that consistently lands first PRs cleanly:
    </p>
    <ol>
      <li>
        <strong>Find a `good first issue` label.</strong> Most projects have these.
        Filter on age &gt; 14 days (someone hasn&rsquo;t already started silently) and &lt;
        90 days (still relevant).
      </li>
      <li>
        <strong>Comment on the issue before starting.</strong> Two sentences:
        &ldquo;I&rsquo;d like to take this. Here&rsquo;s my proposed approach: [one
        line].&rdquo; Wait for a maintainer ack. Saves wasted work.
      </li>
      <li>
        <strong>Read the contributor docs first.</strong> Style guide, test
        conventions, PR template. Skipping this is the #1 reason PRs get sent back for
        nits.
      </li>
      <li>
        <strong>Write tests.</strong> Even for tiny changes. PR descriptions that say
        &ldquo;tested manually&rdquo; get less benefit-of-the-doubt.
      </li>
      <li>
        <strong>PR description that respects the reviewer&rsquo;s time.</strong> What
        changed, why, how to test, any open questions. 100-200 words for typical
        changes.
      </li>
      <li>
        <strong>Respond to review comments quickly + politely.</strong> Disagreement
        is fine; tone is not. &ldquo;Could you say more about why X?&rdquo; lands better
        than &ldquo;I disagree because Y.&rdquo;
      </li>
    </ol>
    <p>
      The imposter-syndrome anti-pattern to avoid: apologizing 5 times in your PR
      description. Confident, terse, and humble all at once: &ldquo;Implements feature
      X by approach Y; tests added; happy to adjust on review.&rdquo;
    </p>

    <h2 id="scale-up">Scaling to substantial contributions</h2>
    <p>
      One typo fix doesn&rsquo;t change a hiring manager&rsquo;s mind. Substantial
      contributions do. The progression from drive-by to substantial:
    </p>
    <ol>
      <li>
        <strong>1-3 small PRs.</strong> Build maintainer trust. They check the contrib
        docs, that you respond to feedback, that your code is reasonable.
      </li>
      <li>
        <strong>1-2 medium PRs.</strong> A feature with tests, a non-trivial bug fix
        with reproduction, a documentation overhaul. 100-500 lines of meaningful change.
      </li>
      <li>
        <strong>1 large PR or ongoing area ownership.</strong> Tackling a big issue (a
        performance improvement, a new subsystem), or becoming the de-facto maintainer
        of one corner of the project (e.g. &ldquo;I own the Windows compatibility
        story&rdquo;). This is the level that changes hiring conversations.
      </li>
      <li>
        <strong>Maintainer / committer status.</strong> Some projects formalize this
        with `MAINTAINERS.md` or commit access. Mostly happens after sustained
        contribution over 6-12 months.
      </li>
    </ol>
    <p>
      Time investment: 2-5 hours/week sustained for 3-6 months gets you to medium-PR
      territory. For most career switchers that&rsquo;s sufficient — sustained presence
      in a public OSS project becomes a differentiator on its own.
    </p>

    <h2 id="etiquette">OSS etiquette: the unwritten rules</h2>
    <ul>
      <li>
        <strong>Don&rsquo;t open PRs without an issue + maintainer buy-in</strong> for
        anything bigger than a one-line fix. &ldquo;Drive-by feature PRs&rdquo; that
        change scope or architecture without prior discussion get closed unmerged.
      </li>
      <li>
        <strong>Don&rsquo;t ping maintainers for review</strong> on day 2. Most projects
        have a tacit 1-2 week SLA. Wait, then politely ask if they need anything from
        you.
      </li>
      <li>
        <strong>Don&rsquo;t argue style preferences.</strong> Match the existing
        codebase. Strong opinions about tabs vs spaces from a first-time contributor
        are a red flag.
      </li>
      <li>
        <strong>Credit prior work.</strong> If your PR builds on someone else&rsquo;s
        idea or code, say so explicitly. Never silently re-implement someone&rsquo;s
        work.
      </li>
      <li>
        <strong>If your PR gets rejected, accept gracefully.</strong> Maintainers see
        the project as a whole; you see one PR. Disagree by writing a thoughtful
        follow-up comment, not by re-opening the conversation in 5 places.
      </li>
      <li>
        <strong>Help review others&rsquo; PRs.</strong> The single highest-leverage
        contributor move. Maintainers remember who reviews — both for credit reasons
        and because reviewing is harder than writing.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Salary expectations for dev-tools roles",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "How do I contribute to open source developer tools?",
    a: "Pick projects you actually use, that are active but not bloated, with welcoming maintainers. Find a 'good first issue', comment before starting with your approach, write tests, write a clear PR description. Build trust through 1-3 small PRs, then medium PRs, then sustained contribution over 6-12 months for maintainer status.",
  },
  {
    q: "How do I contribute to open source without getting laughed at?",
    a: "Three rules: read the contributor docs first (skipping is the #1 reason PRs get nit-picked), write tests even for tiny changes, write a PR description that respects the reviewer's time. Don't apologize 5 times in your PR — be confident, terse, humble. Match existing code style; don't argue tabs-vs-spaces as a newcomer.",
  },
  {
    q: "What's the difference between drive-by PRs and substantial contributions?",
    a: "Drive-by: 1-line fixes, typos. Don't move hiring needles. Medium: features with tests, non-trivial bug fixes with reproduction, doc overhauls (100-500 lines). Substantial: large PRs, sustained area ownership ('I own Windows compat'), or maintainer status. The substantial level changes hiring conversations.",
  },
  {
    q: "How long does it take to become a meaningful OSS contributor?",
    a: "2-5 hours/week sustained for 3-6 months gets you to medium-PR territory. 6-12 months gets you to maintainer-level recognition. The compounding effect is real: once you have substantial contributions to one project, the next project is easier because maintainers can see your track record.",
  },
];
