/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Should you build dev tools or consumer apps? The honest answer changed in 2024–2026
      with the AI-tooling explosion: the dev-tools category is bigger, more profitable,
      and more durable than it was 5 years ago — but the bar to launch a memorable tool
      is also higher.
    </p>
    <p>
      This guide compares the two paths on what actually matters: market size, time to
      revenue, audience reach, defensibility, and lifestyle. Plus the build-tools-vs-apps
      sub-question that comes up most: internal tools vs commercial products, and open-source
      vs proprietary as a business model.
    </p>
  </>
);

export const toc = [
  { id: "comparison", label: "Dev tools vs consumer apps: head-to-head" },
  { id: "internal-vs-commercial", label: "Internal tools vs commercial dev products" },
  { id: "oss-vs-proprietary", label: "Open source vs proprietary" },
  { id: "decision", label: "How to decide" },
];

export const body = (
  <>
    <h2 id="comparison">Dev tools vs consumer apps: head-to-head</h2>
    <p>
      Trade-offs that map to your priorities:
    </p>
    <ul>
      <li>
        <strong>Market size:</strong> consumer is bigger (billions of users); dev tools
        is smaller (tens of millions of devs) but each user is more valuable. A SaaS dev
        tool at $20/seat × 1000 seats per customer matches a consumer product at $5/month
        × 4000 users.
      </li>
      <li>
        <strong>Distribution:</strong> dev tools have specific channels (HN, GitHub
        trending, niche Slacks, Twitter/X). Reach is achievable for a solo founder.
        Consumer requires content/social/paid acquisition; the cost-per-install math is
        brutal.
      </li>
      <li>
        <strong>Time to first dollar:</strong> dev tools — weeks to months if there's a
        clear pain. Consumer — months to years; many never monetize.
      </li>
      <li>
        <strong>Defensibility:</strong> dev tools defend through integration depth,
        community, and reliability brand. Consumer defends through network effects and
        UX brand. Both are real but require different investments.
      </li>
      <li>
        <strong>Support burden:</strong> dev tools — fewer users but more technical and
        more demanding when things break. Consumer — many users with simpler asks but
        emotional intensity.
      </li>
      <li>
        <strong>Founder fit:</strong> dev tools — you should code daily and feel the pain
        you&rsquo;re solving. Consumer — you should care about the audience even when
        you&rsquo;re not in it.
      </li>
    </ul>

    <h2 id="internal-vs-commercial">Internal tools vs commercial dev products</h2>
    <p>
      Internal-only dev tools (built for your own team) are the highest-<a href="/learn/roi">ROI</a> building
      ground. You ship to one customer (yourself), get instant feedback, and avoid
      distribution and pricing complexity. About 30% of public dev-tool startups started
      as internal tools that escaped — Sentry, Linear, dbt, Posthog, GitHub Actions all
      have this lineage.
    </p>
    <p>
      The pivot from internal to commercial requires three things: (1) the pain you solve
      must exist beyond your own team — verify with 5+ external interviews; (2) you have
      to own the distribution path (audience, content, GitHub presence); (3) you accept
      that 80% of work post-pivot is sales/support/positioning, not coding. If those
      three don&rsquo;t check, keep it internal and enjoy the leverage without the
      startup overhead.
    </p>

    <h2 id="oss-vs-proprietary">Open source vs proprietary as a business model</h2>
    <p>
      The 2026 reality:
    </p>
    <ul>
      <li>
        <strong>Open-core:</strong> the dominant model. Open-source the engine, charge for
        hosted/multi-tenant/enterprise features. Examples: GitLab, Sentry, Posthog,
        Supabase. Works because the OSS community generates marketing and trust; the
        paid tier captures the small fraction of users with budget.
      </li>
      <li>
        <strong>Pure proprietary:</strong> still works for tools where the value is in the
        platform integrations or the data network effect (Linear, Airbyte recently). The
        bar is higher — without OSS distribution, you need explicit marketing investment.
      </li>
      <li>
        <strong>Pure open-source / sponsorship-funded:</strong> rare to sustain. Solo
        maintainers eventually burn out. Foundation-backed (Linux, Node) or
        corporate-sponsored (Kubernetes from Google, React from Meta) are the durable
        flavors.
      </li>
    </ul>
    <p>
      For a new dev-tool startup in 2026: default to open-core. The exception is when the
      core value is genuinely a hosted service (CI runners, observability backends) where
      the OSS version doesn&rsquo;t drive distribution.
    </p>

    <h2 id="decision">How to decide</h2>
    <p>
      Quick framework:
    </p>
    <ol>
      <li>
        <strong>Do you live the problem?</strong> If you&rsquo;re a developer and the
        pain is in your daily workflow, dev tools wins. If you&rsquo;re building for
        someone whose life you don&rsquo;t see, consumer is risky regardless of category.
      </li>
      <li>
        <strong>What&rsquo;s your distribution superpower?</strong> Strong dev audience or
        ability to write technical content → dev tools. Strong creative/marketing/community
        instincts → consumer.
      </li>
      <li>
        <strong>How much time do you have?</strong> Dev tools can sustain a solo founder
        on $10K MRR with ~50 customers. Consumer at $10K MRR needs 2,000–10,000 paying
        users; harder to reach as a solo.
      </li>
      <li>
        <strong>Validate first.</strong> Run our{" "}
        <a href="/tools/dev-tool-idea-scorer">dev-tool idea scorer</a> on your idea before
        investing 6 months. The structured assessment beats vibes.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Score your dev-tool idea (free)",
  targetSlug: "dev-tool-idea-scorer",
};

export const faq = [
  {
    q: "Should I build developer tools or consumer apps?",
    a: "Dev tools if you live the problem and have any kind of dev audience or technical content angle. Consumer if you have creative/marketing instincts and care about a non-developer audience. Dev tools have smaller markets but higher per-user value and faster time-to-revenue.",
  },
  {
    q: "Should I build internal tools or commercial developer products?",
    a: "Build internal first. ~30% of public dev-tool startups (Sentry, Linear, dbt, Posthog) started as internal tools that escaped. Validate with 5+ external interviews before pivoting. If you can't, keep it internal and enjoy the leverage without startup overhead.",
  },
  {
    q: "Open source or proprietary for developer tools?",
    a: "Default to open-core in 2026 (open the engine, charge for hosted/enterprise). Pure proprietary works when value is in platform integrations or data network effects. Pure OSS is rarely sustainable for solo maintainers — foundation- or corporate-backed are the durable flavors.",
  },
  {
    q: "How do I know if my developer tool idea is worth building?",
    a: "Use a structured framework — score on demand signal, distribution path, defensibility, monetization clarity, build cost, and founder-market fit. Aim for 75+/100 before committing 6 months of build time. Our dev-tool idea scorer formalizes this.",
  },
];
