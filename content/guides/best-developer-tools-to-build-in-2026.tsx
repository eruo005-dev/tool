/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      What&rsquo;s worth building in dev tools in 2026? Big shifts in the underlying
      ecosystem — AI codegen, observability glut, build-system fragmentation, edge
      compute — opened gaps that didn&rsquo;t exist 3 years ago. This guide is an honest
      pattern-match: areas where the demand is high, the build-cost is achievable for a
      small team, and the existing players are either incomplete or actively struggling.
    </p>
    <p>
      Pair with our <a href="/tools/dev-tool-idea-scorer">idea scorer</a> — pick an idea
      from the list, score it for your specific context, then commit if you score 75+.
    </p>
  </>
);

export const toc = [
  { id: "high-demand", label: "High-demand categories in 2026" },
  { id: "small-team", label: "Buildable by a small team" },
  { id: "validation", label: "Validating before committing" },
  { id: "avoid", label: "Categories to avoid" },
];

export const body = (
  <>
    <h2 id="high-demand">High-demand categories in 2026</h2>
    <p>
      Areas with consistent recurring demand on r/programming, HN, and dev-Slack
      communities:
    </p>
    <ul>
      <li>
        <strong>AI eval and observability.</strong> Companies are shipping <a href="/learn/llm">LLM</a> features
        without good ways to test prompt regressions, monitor <a href="/learn/hallucination">hallucination</a> rates, or
        debug failed agent runs. Tools like LangSmith, Helicone, Arize set the bar — but
        the market is wide and underserved.
      </li>
      <li>
        <strong>Local-first developer infrastructure.</strong> The DevContainer / Nix /
        flake ecosystem has gaps — local dev environments are still painful. Tools that
        compress &ldquo;clone repo → run&rdquo; from 30 minutes to 30 seconds win.
      </li>
      <li>
        <strong>Build-system migration tooling.</strong> Companies stuck on legacy build
        systems want out. Migrations from Webpack → Vite, Make → Bazel, Babel → swc
        are recurring tickets. Tools that automate the migration are valuable.
      </li>
      <li>
        <strong>SDK / client-library generators.</strong> OpenAPI generators are still
        clunky. Stainless and Speakeasy are good examples; the next layer (better DX,
        more language support, more type-safety) has room.
      </li>
      <li>
        <strong>Database tooling for AI workloads.</strong> Vector databases, embedding
        management, RAG eval, semantic-cache observability. Most teams reinvent these
        badly.
      </li>
      <li>
        <strong>Code review + PR experience improvements.</strong> GitHub PR review is
        unchanged for 5+ years. Tools that improve review (Graphite, Reviewable) show
        traction; the space has room for more.
      </li>
      <li>
        <strong>Internal documentation that stays current.</strong> The
        &ldquo;how-do-I-do-X-at-our-company&rdquo; problem. Tools that wire into the
        codebase + Slack + tickets to surface accurate answers.
      </li>
    </ul>

    <h2 id="small-team">Buildable by a small team</h2>
    <p>
      What separates buildable-in-8-weeks from &ldquo;you&rsquo;ll-still-be-shipping-in-3-years&rdquo;:
    </p>
    <ul>
      <li>
        <strong>Single primary integration.</strong> A tool that works with GitHub or
        Slack only is shippable. A tool that promises GitHub + GitLab + Bitbucket +
        Azure DevOps + Jira + Linear is not.
      </li>
      <li>
        <strong>Single primary persona.</strong> &ldquo;A tool for backend engineers at
        Series A startups using Go&rdquo; is shippable. &ldquo;A tool for all
        developers&rdquo; is too vague.
      </li>
      <li>
        <strong>Stateful local first.</strong> CLIs and IDE extensions ship faster than
        SaaS. No auth, no billing, no infra. Add SaaS only after CLI traction.
      </li>
      <li>
        <strong>Boring tech stack.</strong> Go or Python or Node + Postgres + a basic
        front-end. Skip the cutting-edge framework while shipping; revisit after 1.0.
      </li>
    </ul>

    <h2 id="validation">Validating an idea before committing</h2>
    <p>
      The 5-step validation flow that beats &ldquo;just start building&rdquo;:
    </p>
    <ol>
      <li>
        <strong>Run our <a href="/tools/dev-tool-idea-scorer">idea scorer</a></strong>{" "}
        with honest evidence. Aim for 75+ before committing 6 months.
      </li>
      <li>
        <strong>Find 5 prospective users on Discord/Slack/Twitter.</strong> Show them
        either (a) a 5-minute Loom of you using a hand-rolled hack version, or (b) a
        figma mock of the workflow. Get reactions.
      </li>
      <li>
        <strong>Build a one-evening prototype.</strong> Hardcoded values, terrible UX,
        zero polish. Just confirm the technical approach works. If you can&rsquo;t hack
        a prototype in one evening, the technical risk is too high.
      </li>
      <li>
        <strong>Ship a closed beta to 5 people.</strong> See if they actually use it
        more than once. If they don&rsquo;t, you&rsquo;re not ready for public launch.
      </li>
      <li>
        <strong>Public launch via HN + your audience + 1-2 niche communities.</strong>{" "}
        Measure 7-day retention. If &lt; 30% of trial users are still active at day 7,
        the idea probably needs rework.
      </li>
    </ol>

    <h2 id="avoid">Categories to avoid (without strong reason)</h2>
    <ul>
      <li>
        <strong>Generic IDEs / code editors.</strong> VSCode + JetBrains + Cursor are
        the moats. Building a new IDE in 2026 needs a wedge (specific language, specific
        workflow) or you&rsquo;re fighting impossible distribution math.
      </li>
      <li>
        <strong>Generic CI/CD platforms.</strong> GitHub Actions + GitLab CI + Buildkite
        + CircleCI saturated this space. Niche use cases (mobile builds, GPU CI) still
        have room.
      </li>
      <li>
        <strong>&ldquo;Better Notion for engineers.&rdquo;</strong> Repeatedly attempted,
        repeatedly fails. Engineers default to whatever the wiki their company already
        runs.
      </li>
      <li>
        <strong>Generic monitoring / APM platforms.</strong> Datadog and New Relic spent
        a billion dollars on the category; entering as a generalist is hard. Specific
        verticals (LLM apps, edge functions) have room.
      </li>
      <li>
        <strong>AI-powered chatbot for &ldquo;your codebase.&rdquo;</strong> Saturation
        peaked in 2024–2025. The pivot is to specific workflows (code review, on-call
        runbooks) not generic chat.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Score your idea before committing",
  targetSlug: "dev-tool-idea-scorer",
};

export const faq = [
  {
    q: "What are the best developer tools to build in 2026?",
    a: "High-demand categories: AI eval and observability, local-first dev infra, build-system migration tools, SDK/client generators, database tooling for AI, code review experience, internal docs that stay current. Pick a category where you live the pain — fundamental for shipping a tool people actually use.",
  },
  {
    q: "How do I know if my developer tool idea is worth building?",
    a: "Five-step validation: score on a structured framework (use our scorer), interview 5 prospective users with a Loom or mock, build a one-evening prototype to confirm technical feasibility, ship to 5 closed-beta users for retention check, public launch with retention measurement. Don't skip steps.",
  },
  {
    q: "What developer tool categories should I avoid in 2026?",
    a: "Generic IDEs (VSCode/JetBrains/Cursor moats too strong), generic CI/CD (GitHub Actions/GitLab CI saturate), 'better Notion for engineers' (repeatedly fails), generic monitoring (Datadog spent billions on the category), generic 'AI for your codebase' (peaked 2024-2025). All have niche carve-outs but generalist plays are hard.",
  },
];
