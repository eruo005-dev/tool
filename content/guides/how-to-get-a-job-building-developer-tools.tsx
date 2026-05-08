/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Getting your first dev-tools job is mostly a portfolio + positioning game. Unlike
      generic SWE roles where coding-interview performance dominates, dev-tools hiring
      managers care about whether you can ship a tool other developers actually want to
      use — and your public artifacts make or break the case.
    </p>
    <p>
      This guide is the complete playbook: which companies hire for dev-tools, what
      hiring managers look for, the fastest path for career switchers, and the
      portfolio + interview prep that closes offers.
    </p>
  </>
);

export const toc = [
  { id: "companies", label: "Companies that hire for dev-tools roles" },
  { id: "what-hiring-managers-want", label: "What hiring managers look for" },
  { id: "first-job", label: "Getting your first dev-tools job" },
  { id: "interview-prep", label: "Interview prep that works" },
];

export const body = (
  <>
    <h2 id="companies">Companies that hire for developer tools roles</h2>
    <p>
      Categorized by likelihood of hiring + scale of the team:
    </p>
    <ul>
      <li>
        <strong>Big tech with named DPE/DevX teams:</strong> Google (Engineering
        Productivity), Meta (Developer Infrastructure), Microsoft (Developer Velocity),
        Amazon (Builder Tools), Apple (Internal Tools), Stripe (Developer Productivity),
        Shopify (Developer Acceleration), Airbnb (Tooling), Netflix (Productivity
        Engineering). Tier 1 comp.
      </li>
      <li>
        <strong>Dev-tools companies (the product IS the tool):</strong> GitHub, GitLab,
        JetBrains, Vercel, Netlify, Cloudflare, Datadog, Sentry, HashiCorp, Confluent,
        MongoDB, Posthog, Linear, dbt Labs, Supabase. Comp varies; mission alignment
        high.
      </li>
      <li>
        <strong>AI labs + AI-tooling startups:</strong> Anthropic, OpenAI, Cohere,
        Replicate, LangChain, Cursor (the Anysphere team), various YC AI startups. Tier
        1 comp at the labs; high upside at startups.
      </li>
      <li>
        <strong>Mid-size companies with platform teams:</strong> Stripe, Uber, Lyft,
        DoorDash, Airbnb, Square, Mercado Libre, Booking.com, Spotify (the Backstage
        team is the famous example). Strong DPE budgets.
      </li>
      <li>
        <strong>Open-source-heavy companies:</strong> Red Hat, Canonical, GitLab, Hugging
        Face, Sourcegraph, Postman. Often hire OSS contributors directly.
      </li>
    </ul>
    <p>
      Filter on: roles that explicitly say &ldquo;Developer Productivity,&rdquo;
      &ldquo;Developer Experience,&rdquo; &ldquo;Platform Engineer,&rdquo; &ldquo;Build
      Engineer,&rdquo; &ldquo;Internal Tools&rdquo;, or &ldquo;Tooling Engineer&rdquo;.
    </p>

    <h2 id="what-hiring-managers-want">What hiring managers look for</h2>
    <p>
      Public hiring posts and informal interviews with dev-tools hiring managers
      consistently surface five things:
    </p>
    <ol>
      <li>
        <strong>Public artifacts.</strong> A GitHub profile with at least 1–2 dev tools
        you&rsquo;ve shipped (your own or substantial OSS contributions). This is the
        single biggest signal — it shows you can finish things and that you have taste.
      </li>
      <li>
        <strong>Empathy for users.</strong> Tools fail when authors don&rsquo;t feel
        their users&rsquo; pain. Interviews probe this with &ldquo;walk me through how
        you&rsquo;d roll out tool X to a 50-engineer team.&rdquo;
      </li>
      <li>
        <strong>System thinking.</strong> Dev tools touch builds, CI, deploy, runtime.
        Hiring managers test for the ability to reason across the whole pipeline, not
        just the slice in front of you.
      </li>
      <li>
        <strong>Documentation + communication.</strong> Tools live or die on docs. A
        candidate who writes a clean README and clear PR descriptions stands out.
      </li>
      <li>
        <strong>Pragmatism.</strong> Dev tools is a discipline of solving real problems
        with the simplest possible tools. Over-engineering is a red flag; opinionated
        but proportional design is a green flag.
      </li>
    </ol>

    <h2 id="first-job">Getting your first dev-tools job</h2>
    <p>
      The fastest paths from regular dev → dev tools (in order of leverage):
    </p>
    <ol>
      <li>
        <strong>Internal rotation.</strong> Ask your current employer for a 6-month
        rotation onto the platform/DevX team. You keep your salary, build the portfolio,
        and apply externally with the title in hand. This converts faster than any
        external job search.
      </li>
      <li>
        <strong>Ship one OSS dev tool.</strong> 8 weeks of nights and weekends. Real
        tool, not a toy. Use our{" "}
        <a href="/tools/dev-tool-idea-scorer">idea scorer</a> to pick something high-
        signal. Apply to dev-tools roles with the GitHub link in your application.
      </li>
      <li>
        <strong>Substantial OSS contributions to dev-tool projects.</strong> Pick 1-2
        projects you actually use. Submit non-trivial PRs (not typo fixes; real features,
        documentation overhauls, or test-coverage drives). Reference them in
        applications.
      </li>
      <li>
        <strong>Conference talk or technical blog series.</strong> Write 6 posts on a
        dev-tools topic (your CI/CD migration, your build-system optimization, your
        internal tool pivot). Builds public credibility. Some companies (Stripe,
        Cloudflare) explicitly recruit blog authors.
      </li>
      <li>
        <strong>Cold outreach to teams you admire.</strong> Find DPE/DevX leads on
        LinkedIn, send a 100-word note referencing one specific thing they&rsquo;ve
        shipped, attach your GitHub. ~10% reply rate; better-than-zero.
      </li>
    </ol>

    <h2 id="interview-prep">Interview prep that works</h2>
    <p>
      Dev-tools interviews are different from generic SWE loops. Expect:
    </p>
    <ul>
      <li>
        <strong>System design with developer-tools framing.</strong> &ldquo;Design an
        internal feature flag service&rdquo; rather than &ldquo;design Twitter.&rdquo;
        Practice these specifically — the constraints differ.
      </li>
      <li>
        <strong>Product / UX questions.</strong> &ldquo;Walk me through the rollout plan
        for a new internal tool to 200 engineers.&rdquo; &ldquo;How would you handle
        backwards-compatibility for X?&rdquo; Prep stories from your past work.
      </li>
      <li>
        <strong>API design.</strong> &ldquo;Design the API for [some dev tool].&rdquo;
        Read aip.dev (Google&rsquo;s style guide) and Stripe&rsquo;s API design blog
        before the loop.
      </li>
      <li>
        <strong>Coding rounds:</strong> still happen, but often weighted lower at
        senior+ levels. Practice CLI-style problems (parse a command, walk a directory)
        rather than only LeetCode.
      </li>
      <li>
        <strong>Trivia about specific tools.</strong> Know your stack — if applying
        to a Bazel team, brush up on Bazel. If a CI/CD role, know GitHub Actions /
        GitLab CI / Buildkite differences.
      </li>
    </ul>
    <p>
      The portfolio link in your resume + clear specific stories from past dev-tools
      work matter more than LeetCode pattern memorization for these roles.
    </p>
  </>
);

export const cta = {
  label: "Salary ranges by level + tier + region",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "How do I get a job building developer tools?",
    a: "Five paths in priority: (1) internal rotation onto your employer's platform/DevX team — fastest by far, (2) ship one OSS dev tool over 8 weeks, (3) substantial PRs to dev-tool projects you use, (4) write a 6-post technical blog series, (5) cold outreach to DPE leads on LinkedIn with specific GitHub artifacts.",
  },
  {
    q: "What companies hire for developer tool roles?",
    a: "Big tech (Google, Meta, Microsoft, Amazon, Apple) named DPE teams. Dev-tool product companies (GitHub, GitLab, Vercel, Datadog, Sentry, HashiCorp). AI labs + tooling startups (Anthropic, OpenAI, LangChain, Cursor). Mid-size with platform teams (Stripe, Uber, Lyft, Spotify). OSS-heavy (Red Hat, GitLab, Hugging Face).",
  },
  {
    q: "What do hiring managers look for in developer tools roles?",
    a: "Public artifacts (1-2 shipped tools or substantial OSS PRs), empathy for users (rollout reasoning), system thinking (across build/CI/deploy/runtime), documentation quality, and pragmatism (solving real problems with the simplest tools — not over-engineered). The GitHub portfolio link beats LeetCode reps.",
  },
  {
    q: "How do I get my first developer tools job as a career switcher?",
    a: "Internal rotation if your employer has a platform team — fastest path, keeps your salary, gets you the title. If not, ship one OSS dev tool over 8 weeks (use our idea scorer to pick well), then apply externally with the GitHub link. Adding a substantial OSS contribution to a tool you use accelerates further.",
  },
];
