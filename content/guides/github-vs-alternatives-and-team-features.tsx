/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub vs GitLab vs alternatives, plus the team-management features that come
      up in scaling discussions: managing multiple repositories, onboarding non-
      technical coworkers, project management, and the question of using GitHub as
      an all-in-one platform.
    </p>
  </>
);

export const toc = [
  { id: "github-vs-gitlab", label: "GitHub vs GitLab" },
  { id: "deepseek", label: "DeepSeek + AI-first alternatives" },
  { id: "find-devs", label: "Finding developers near you / with your skills" },
  { id: "multi-repos", label: "Organizing multiple repositories" },
  { id: "non-tech-coworker", label: "Non-technical coworkers + GitHub" },
  { id: "project-management", label: "Replacing your PM tool with GitHub" },
];

export const body = (
  <>
    <h2 id="github-vs-gitlab">GitHub vs GitLab for my startup</h2>
    <p>
      For most startups in 2026: GitHub. Reasons:
    </p>
    <ul>
      <li>Larger network effects — developers expect GitHub.</li>
      <li>Better dev-tool integrations (most third-party tools target GitHub first).</li>
      <li>Stronger AI features (Copilot is part of the platform).</li>
      <li>Bigger marketplace + more starter actions.</li>
    </ul>
    <p>
      Where GitLab wins:
    </p>
    <ul>
      <li>
        <strong>Self-hosted requirements.</strong> GitLab CE (free, self-hosted) is
        the most-mature option. GitHub Enterprise Server exists but more
        expensive.
      </li>
      <li>
        <strong>Built-in CI/CD focus.</strong> GitLab CI is excellent;
        natively integrated. GitHub Actions caught up but GitLab CI&rsquo;s YAML
        is sometimes cleaner.
      </li>
      <li>
        <strong>Single integrated platform.</strong> GitLab unifies repo + CI/CD +
        registry + monitoring + deployments more tightly.
      </li>
      <li>
        <strong>Compliance / on-premise.</strong> GitLab&rsquo;s self-hosted
        offering is often easier to procure for regulated industries.
      </li>
    </ul>
    <p>
      Decision: cloud + small team → GitHub. Self-hosted requirement or compliance
      regime → GitLab. Don&rsquo;t agonize for too long; both work.
    </p>

    <h2 id="deepseek">Is DeepSeek a better AI-first alternative?</h2>
    <p>
      DeepSeek is an open-weights model (separate from any code-hosting platform).
      The relevant comparison is for AI coding tools:
    </p>
    <ul>
      <li>
        <strong>DeepSeek + Continue.dev or Cursor:</strong> excellent open-source
        alternative for those wanting privacy. Quality close to commercial models on
        coding tasks. Self-hosting requires a beefy GPU.
      </li>
      <li>
        <strong>vs Copilot for general coding:</strong> Copilot has tighter
        IDE integration, broader IDE support, IP indemnification. DeepSeek-via-
        Continue offers privacy + customization in exchange for setup complexity.
      </li>
      <li>
        <strong>For organizations:</strong> Copilot Enterprise still wins on
        procurement maturity. DeepSeek-based stacks are an option for teams with
        strong privacy requirements + technical budget.
      </li>
    </ul>

    <h2 id="find-devs">How do I find developers near me / with specific skills?</h2>
    <p>
      GitHub&rsquo;s built-in search:
    </p>
    <ul>
      <li>
        <strong>User search:</strong> github.com/search?q=location:Berlin+language:Rust+followers:&gt;100&type=Users
        (Boolean qualifiers work). Returns devs by location + language activity +
        follower count.
      </li>
      <li>
        <strong>Repo search by stars + recency:</strong> finds active maintainers
        in a domain.
      </li>
      <li>
        <strong>Issue + PR activity searches:</strong> identify devs actively
        contributing to your stack.
      </li>
    </ul>
    <p>
      Beyond GitHub:
    </p>
    <ul>
      <li>Local meetups + conferences (still produce the highest-signal connections).</li>
      <li>Stack Overflow Talent (paid; targets devs who answer questions in your stack).</li>
      <li>Dev-focused freelance platforms (Toptal, Codementor, Hired).</li>
      <li>OSS communities + Discord servers in your stack.</li>
    </ul>

    <h2 id="multi-repos">How do I organize multiple repositories for one product?</h2>
    <p>
      The two patterns:
    </p>
    <ul>
      <li>
        <strong>Monorepo:</strong> all code in one repo. Single CI, single PR for
        cross-cutting changes, easy refactoring. Tooling: Turborepo, Nx, Bazel.
        Works up to thousands of engineers (Google, Meta).
      </li>
      <li>
        <strong>Polyrepo:</strong> one service per repo. Independent CI, independent
        deploys, clear ownership. Coordination cost goes up; cross-repo changes
        require multiple PRs.
      </li>
    </ul>
    <p>
      For 5-50 person teams: monorepo is usually the right call in 2026. Tooling
      has improved enough that the &ldquo;monorepo is too hard&rdquo; objection from
      2018 doesn&rsquo;t hold. Above 50 engineers: case-by-case based on your
      organization shape.
    </p>
    <p>
      For non-monorepo cases: GitHub Projects (cross-repo views), org-level CODEOWNERS,
      and organization-level secrets help with coordination.
    </p>

    <h2 id="non-tech-coworker">Can my non-technical coworker use GitHub?</h2>
    <p>
      Yes for specific use cases; no for full collaboration parity.
    </p>
    <ul>
      <li>
        <strong>What works:</strong> editing files via the GitHub web UI, opening
        issues, reviewing PRs, commenting on code, accessing project boards.
      </li>
      <li>
        <strong>What doesn&rsquo;t:</strong> the Git CLI, branch management, PR
        creation flow, merge conflict resolution.
      </li>
      <li>
        <strong>Workflow that works:</strong> non-technical contributors edit
        Markdown directly in the web UI on a branch (GitHub creates one
        automatically), open a PR, an engineer reviews + merges. Common for
        documentation, content, design specs.
      </li>
      <li>
        <strong>Beyond that:</strong> consider a CMS that publishes to GitHub on
        their behalf (Forestry, Tina, Sanity). Lets non-tech contributors work
        in a familiar interface; engineers work in Git.
      </li>
    </ul>

    <h2 id="project-management">Can GitHub replace my project management tool?</h2>
    <p>
      For engineering-only teams: yes, often. GitHub Issues + Projects + Milestones
      cover sprint planning, kanban boards, dependency tracking, and burndown views.
      Most engineering-led startups do this.
    </p>
    <p>
      Where it breaks:
    </p>
    <ul>
      <li>
        <strong>Cross-functional teams.</strong> Non-engineering (sales, marketing,
        ops) struggle with the GitHub UX. Linear / Jira / Monday handle the
        cross-functional case better.
      </li>
      <li>
        <strong>Time tracking.</strong> Not GitHub&rsquo;s strength. Need a separate
        tool (Toggl, Harvest) or dedicated PM platform.
      </li>
      <li>
        <strong>Roadmap-style planning.</strong> GitHub Projects has a roadmap view
        but less polished than Linear&rsquo;s or Jira&rsquo;s for &ldquo;quarterly
        plan&rdquo; presentations.
      </li>
      <li>
        <strong>Customer-facing work tracking.</strong> Support tickets, customer
        requests, account-specific work usually goes in CRM / support tool.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Estimate Actions costs for your team",
  targetSlug: "github-actions-cost-estimator",
};

export const faq = [
  {
    q: "Is GitHub really better than GitLab for my startup?",
    a: "For cloud + small team: yes — bigger network effects, better integrations, AI features, marketplace. GitLab wins for self-hosted requirements, compliance regimes, and teams that want a single integrated platform (repo + CI + registry + monitoring + deploy). Don't agonize too long; both work.",
  },
  {
    q: "Is DeepSeek a better alternative to GitHub for my team?",
    a: "DeepSeek is an AI model, not a hosting platform. For AI coding tooling: DeepSeek + Continue.dev or Cursor offers privacy + customization in exchange for setup complexity. Copilot still wins on IDE integration breadth + IP indemnification at organization scale.",
  },
  {
    q: "How do I find developers near me or with my skills?",
    a: "GitHub user search with Boolean qualifiers (location:X language:Y followers:>100). Repo search by stars + recency identifies active maintainers. Beyond GitHub: local meetups, conferences, Stack Overflow Talent, freelance platforms (Toptal, Codementor), OSS Discord servers.",
  },
  {
    q: "How do I organize multiple repositories for one product?",
    a: "Two patterns. Monorepo: all code in one repo, single CI, easy refactor (tooling: Turborepo, Nx, Bazel). Polyrepo: one service per repo, independent CI, clear ownership. For 5-50 person teams in 2026: monorepo usually right. Above 50 engineers: case-by-case.",
  },
  {
    q: "Can my non-technical coworker use GitHub?",
    a: "For specific tasks, yes — editing files via web UI, opening issues, reviewing PRs, commenting. Beyond that, no — Git CLI, branch management, merge conflict resolution. For documentation/content collaboration, use a CMS that publishes to GitHub (Forestry, Tina, Sanity) so non-tech contributors work in familiar interfaces.",
  },
  {
    q: "Can GitHub replace my project management tool?",
    a: "For engineering-only teams: often yes. Issues + Projects + Milestones cover sprint planning, kanban, deps, burndown. Breaks down for cross-functional teams (Linear/Jira/Monday handle better), time tracking (Toggl/Harvest), polished roadmap presentations, customer-facing work tracking (CRM).",
  },
];
