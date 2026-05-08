/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The transition from regular software development to building developer tools is
      common, well-trodden, and faster than most people think — usually 6–12 months
      from decision to first dev-tools-titled role. The path is mostly about positioning
      what you already do.
    </p>
    <p>
      This guide is the practical playbook: how to translate your CRUD/SaaS experience
      into dev-tools positioning, the skills you actually need to add (vs the ones
      you&rsquo;ll discover you already have), and how to switch back if it&rsquo;s not
      a fit.
    </p>
  </>
);

export const toc = [
  { id: "translate", label: "Translate your existing experience" },
  { id: "gaps", label: "What new skills to add" },
  { id: "transition-roles", label: "Roles that make the transition easy" },
  { id: "back-to-product", label: "Switching back to regular dev" },
];

export const body = (
  <>
    <h2 id="translate">Translate your existing experience</h2>
    <p>
      Most CRUD-app developers undersell their dev-tools experience. Think about your
      last 2 years:
    </p>
    <ul>
      <li>Built or maintained CI/CD pipelines? That&rsquo;s dev tools.</li>
      <li>Wrote internal scripts that other devs use? Dev tools.</li>
      <li>Owned the test framework, observability stack, or deploy process? Dev tools.</li>
      <li>Built or improved your team&rsquo;s linting, formatting, or release tooling? Dev tools.</li>
      <li>Created internal libraries or SDKs? Dev tools.</li>
    </ul>
    <p>
      These are dev-tools experience. The transition isn&rsquo;t starting from zero —
      it&rsquo;s repositioning. Take 30 minutes, list every internal tool / library /
      pipeline / script you&rsquo;ve owned, and rewrite your resume bullets to surface
      that work. You&rsquo;ll look 2 years more experienced than you did before.
    </p>

    <h2 id="gaps">What new skills to actually add</h2>
    <p>
      The genuinely new skills to learn (not the ones you already have):
    </p>
    <ol>
      <li>
        <strong>Public API design.</strong> Internal libraries can be sloppy. Public
        SDKs and CLIs need versioning, deprecation policy, error semantics. Read{" "}
        <code>github.com/golang/go/wiki/CodeReviewComments</code> and{" "}
        <code>aip.dev</code> (Google&rsquo;s API style guide) for the principles.
      </li>
      <li>
        <strong>Observability for dev tools.</strong> Different from app observability
        because you&rsquo;re instrumenting your customers&rsquo; build/runtime
        environments. Sentry SDK source code is a great teacher.
      </li>
      <li>
        <strong>Cross-platform CLI distribution.</strong> brew, apt, scoop, npm, cargo,
        Docker, GitHub releases. Each has gotchas. The CLI you write spends more time in
        package-manager registries than you expect.
      </li>
      <li>
        <strong>Documentation as a first-class artifact.</strong> Dev tools succeed or
        fail on docs. Read Stripe docs, Twilio docs, Anthropic API docs to internalize
        the bar.
      </li>
      <li>
        <strong>Empathy for &ldquo;not me&rdquo; developers.</strong> The hardest
        transition: your tool will be used by people whose stack, team size, and skill
        level differ from yours. Customer interviews + dogfooding are the only fix.
      </li>
    </ol>

    <h2 id="transition-roles">Roles that make the transition easy</h2>
    <p>
      Three roles that bridge regular development and dev tools cleanly:
    </p>
    <ul>
      <li>
        <strong>Platform engineer / SRE adjacent:</strong> own internal developer
        platforms. Most companies have these now; the title varies.
      </li>
      <li>
        <strong>DevX / Developer Experience:</strong> the explicit dev-tools role at
        bigger companies. DPE (Developer Productivity Engineering) is the sister title.
      </li>
      <li>
        <strong>Open-source maintainer (with employer backing):</strong> some companies
        explicitly hire to staff OSS projects (Stripe, Cloudflare, Anthropic, GitHub
        itself).
      </li>
    </ul>
    <p>
      The fastest path is often <em>internal</em>: ask your current employer for a 6-month
      rotation onto the platform/devx team, build your portfolio there, then apply
      externally with the title in hand.
    </p>

    <h2 id="back-to-product">Switching back to regular dev</h2>
    <p>
      Skill transferability is high in both directions. Dev-tools experience translates
      well to:
    </p>
    <ul>
      <li><strong>Senior product engineering</strong> — strong opinions on testing, deploy, operability.</li>
      <li><strong>Backend / infrastructure</strong> — natural overlap.</li>
      <li><strong>Tech lead / staff engineering</strong> — system thinking is the dev-tools default.</li>
    </ul>
    <p>
      The only switch that&rsquo;s genuinely harder: <strong>dev tools → frontend product
      engineering at consumer companies</strong>. The frontend bar at top consumer
      companies is high and dev-tools work doesn&rsquo;t exercise it daily. Solvable with
      6 months of focused frontend work, but it&rsquo;s a real gap.
    </p>
  </>
);

export const cta = {
  label: "Estimate dev-tools salaries by role + region",
  targetSlug: "dev-tool-salary-estimator",
};

export const faq = [
  {
    q: "How do I transition from regular development to developer tools?",
    a: "Start by repositioning what you already do — CI/CD work, internal scripts, observability, SDKs all count. Add 5 new skills: public API design, dev-tool observability, cross-platform CLI distribution, docs-as-product, empathy for non-you developers. Use an internal rotation onto a platform/DevX team to build the portfolio.",
  },
  {
    q: "From CRUD apps to dev tools: what's the realistic timeline?",
    a: "6-12 months from decision to first dev-tools-titled role. Faster if you have CI/CD or internal-tools experience to surface. Slower if you've only done UI/CRUD work — plan to ship one OSS dev tool side project to demonstrate the pivot before applying externally.",
  },
  {
    q: "Can I switch back to regular development if dev tools isn't a fit?",
    a: "Yes — skill transferability is high. Dev-tools experience translates well to senior product, backend, infra, and tech-lead roles. The only hard switch back is to frontend product engineering at consumer companies, where the daily-frontend muscle weakens. Plan for 6 months of catch-up if going that direction.",
  },
];
