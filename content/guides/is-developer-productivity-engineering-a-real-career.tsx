/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Developer Productivity Engineering (DPE) — sometimes called Developer Experience
      (DevX), Platform Engineering, or just DevTools — is one of the fastest-growing
      specialized career paths in 2026. The skepticism (&ldquo;is this just a renamed
      DevOps role?&rdquo;) is fair but outdated.
    </p>
    <p>
      This guide is the honest market view: how DPE differs from DevOps, why it&rsquo;s
      growing, what the career arc looks like, and whether the &ldquo;dead-end&rdquo;
      criticism has merit.
    </p>
  </>
);

export const toc = [
  { id: "what-is-dpe", label: "What DPE actually is" },
  { id: "growth", label: "Is DPE growing?" },
  { id: "career-arc", label: "Career arc + ceiling" },
  { id: "dead-end", label: "Is it a dead-end?" },
];

export const body = (
  <>
    <h2 id="what-is-dpe">What developer productivity engineering actually is</h2>
    <p>
      DPE is the discipline of measuring and improving the productivity of your
      organization&rsquo;s developers. Concretely: faster local builds, more reliable CI,
      better dev environments, faster code review, faster deploy, fewer outages from
      dev-environment drift, better internal tooling, better docs.
    </p>
    <p>
      The framing came from Gradle Inc. and got formalized in the State of DevOps Report
      (DORA metrics: deploy frequency, lead time, MTTR, change failure rate). Big tech
      adopted the title around 2019–2021; mid-market companies in 2022–2024; almost
      everyone with &gt; 50 engineers in 2025–2026.
    </p>
    <p>
      Closely-related titles you might see:
    </p>
    <ul>
      <li><strong>Developer Experience Engineer (DevX):</strong> mostly the same job, more frontend-flavored.</li>
      <li><strong>Platform Engineer:</strong> overlapping; more focused on the infrastructure substrate.</li>
      <li><strong>Build Engineer / Build Systems Engineer:</strong> the deep-end specialist (Bazel, Buck2, monorepo work).</li>
      <li><strong>Internal Tools Engineer:</strong> usually the older, less-prestigious version of the same role.</li>
    </ul>

    <h2 id="growth">Is developer productivity engineering growing?</h2>
    <p>
      Yes, on multiple measurable dimensions:
    </p>
    <ul>
      <li>
        Job listings with &ldquo;Developer Productivity&rdquo; in the title roughly 4×
        from 2022 to 2025 on LinkedIn (anecdotal, but tracks with multiple recruiter
        observations).
      </li>
      <li>
        DPE conferences (DPE Summit, Lead Dev) launched and grew through 2023–2025.
      </li>
      <li>
        Pay-transparency disclosures in NY/CA show DPE roles 5–15% above generic SWE
        baselines at the same level.
      </li>
      <li>
        Most enterprises now have a named &ldquo;Developer Productivity&rdquo; team
        (formerly subsumed under platform/infra).
      </li>
    </ul>
    <p>
      The structural reason: companies grew their engineering orgs faster than their
      dev-experience invested in keeping those teams productive. Now the catch-up
      investment is happening, and DPE is where it lands.
    </p>

    <h2 id="career-arc">Career arc + ceiling</h2>
    <p>
      Typical progression:
    </p>
    <ol>
      <li>
        <strong>L4 / mid (3–5 yrs):</strong> own a corner of the developer experience —
        build system, dev env, observability. Ship measurable improvements.
      </li>
      <li>
        <strong>L5 / senior (5–8 yrs):</strong> own a substantial slice + lead small
        projects. Ship cross-team initiatives.
      </li>
      <li>
        <strong>L6 / staff (8–12 yrs):</strong> set technical direction for a portion of
        DPE for the org. Drive multi-quarter projects.
      </li>
      <li>
        <strong>L7 / principal (12+ yrs):</strong> own DPE strategy for the company at the
        100s-of-engineers level. Few of these roles, high comp, high impact.
      </li>
    </ol>
    <p>
      Comp is competitive with SWE at every level — slightly above mid, comparable at
      senior+. See our{" "}
      <a href="/tools/dev-tool-salary-estimator">salary estimator</a> for ranges.
    </p>

    <h2 id="dead-end">Is dev tools / DPE a dead-end career?</h2>
    <p>
      The criticism has narrow merit. The argument:
    </p>
    <ul>
      <li>DPE is rarely the &ldquo;hot&rdquo; team that gets the biggest performance reviews.</li>
      <li>It&rsquo;s a cost center, not a revenue center; budget gets cut first in downturns.</li>
      <li>The skills are organization-specific — your Bazel-magic knowledge doesn&rsquo;t directly translate when you switch employers.</li>
    </ul>
    <p>
      Counter-arguments:
    </p>
    <ul>
      <li>
        Senior DPE engineers are repeatedly cited as some of the most-recruited talent in
        tech because they accelerate everyone around them.
      </li>
      <li>
        The cost-center critique applies to QA, IT, security too — and those are still
        full careers.
      </li>
      <li>
        The skills DO translate: build-system design, CI/CD, observability, internal
        tooling are all portable. The vendor-specific knowledge is a smaller fraction
        than people think.
      </li>
    </ul>
    <p>
      The honest take: DPE isn&rsquo;t a dead-end, but you should pick employers whose
      leadership <em>visibly values</em> developer productivity. At companies where the
      CTO talks about deploy frequency or DORA metrics, DPE thrives. At companies where
      the CTO never mentions them, you&rsquo;ll be undervalued.
    </p>
  </>
);

export const cta = {
  label: "Estimate DPE salary by level + region",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "Is developer productivity engineering a real career?",
    a: "Yes — and one of the fastest-growing specialized career paths in 2026. Big tech adopted the title around 2019-2021; mid-market 2022-2024; almost everyone with 50+ engineers now. Job listings ~4× since 2022. Comp is competitive with SWE at every level.",
  },
  {
    q: "Is DPE / developer tools growing?",
    a: "Yes on multiple measures: job listings 4× from 2022 to 2025, DPE Summit + Lead Dev conferences, pay-transparency disclosures showing 5-15% premium over generic SWE, named DPE teams now standard at enterprises. The catch-up investment in dev experience is the structural driver.",
  },
  {
    q: "Is building developer tools a dead-end career?",
    a: "No, with caveats. The cost-center criticism applies but isn't unique to DPE (true of QA, IT, security too — and those are full careers). Skills do translate: build systems, CI/CD, observability are portable. Pick employers whose leadership visibly values developer productivity — DORA-metric-aware CTOs.",
  },
  {
    q: "What's the difference between DPE and DevOps?",
    a: "DevOps focuses on the deploy and runtime side (infrastructure, on-call, CI/CD pipelines). DPE focuses on the developer-facing side (local environments, build performance, internal tooling, dev metrics). Significant overlap, especially at smaller companies where one team does both. At scale they specialize.",
  },
];
