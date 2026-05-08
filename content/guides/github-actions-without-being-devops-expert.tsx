/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Actions has a reputation for &ldquo;needs DevOps expertise.&rdquo;
      Untrue for the 90% case. Most teams need test-on-PR + deploy-on-main, both of
      which are 30-line YAML files using stock actions from the marketplace. This
      guide is the practical playbook for using Actions without being a CI/CD
      specialist.
    </p>
  </>
);

export const toc = [
  { id: "automate-tests", label: "Automate tests without hiring DevOps" },
  { id: "deploy", label: "Deploy your app via GitHub" },
  { id: "speed-up", label: "Speed up development with automation" },
  { id: "common-patterns", label: "Common patterns + templates" },
];

export const body = (
  <>
    <h2 id="automate-tests">How to automate code tests without hiring DevOps</h2>
    <p>
      The minimum-viable test workflow:
    </p>
    <pre><code>{`name: Tests
on:
  pull_request:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4   # or setup-python, setup-go, etc.
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test`}</code></pre>
    <p>
      Save as <code>.github/workflows/tests.yml</code>. Push. Tests run on every PR
      and every merge to main. 30 minutes total to set up. Most language ecosystems
      have an equivalent stock action (setup-python, setup-go, setup-java).
    </p>
    <p>
      Add coverage reporting once tests stabilize:
    </p>
    <ul>
      <li>Codecov / Coveralls integration via their action.</li>
      <li>Run linting in the same workflow (eslint, ruff, golangci-lint).</li>
      <li>Run on a matrix of OS / Node versions if you need cross-platform.</li>
    </ul>

    <h2 id="deploy">How do I actually deploy my app using GitHub?</h2>
    <p>
      Three common patterns:
    </p>
    <ol>
      <li>
        <strong>Vercel / Netlify / Cloudflare Pages.</strong> Connect your repo via
        their GitHub app. Auto-deploy on push to main. Zero CI/CD setup on your
        side. The path of least resistance for web apps.
      </li>
      <li>
        <strong>GitHub Actions deploys to your cloud.</strong> Use OIDC for
        keyless auth (modern best practice). Stock actions exist for AWS
        (aws-actions/configure-aws-credentials), GCP (google-github-actions/auth),
        Azure (azure/login). Then run your deploy command (terraform apply, kubectl
        apply, gcloud run deploy, etc.).
      </li>
      <li>
        <strong>Self-hosted runner deploys.</strong> For environments where you
        can&rsquo;t expose cloud credentials to public CI. Self-hosted runners
        live inside your network; deploys happen there.
      </li>
    </ol>
    <p>
      Pick the simplest that meets your security requirements. For most web apps:
      Vercel/Netlify connect-and-go. For backend services: GitHub Actions + cloud
      OIDC.
    </p>

    <h2 id="speed-up">Speed up development with GitHub automation</h2>
    <p>
      Beyond CI/CD, common automations that save real time:
    </p>
    <ul>
      <li>
        <strong>Auto-merge dependabot PRs.</strong> If your test coverage is good,
        let dependency updates merge themselves on green CI.
      </li>
      <li>
        <strong>Stale issue / PR cleanup.</strong> actions/stale closes stale
        issues + PRs after configurable periods. Keeps the issue tracker manageable.
      </li>
      <li>
        <strong>Release automation.</strong> release-please or semantic-release
        auto-generates changelogs + cuts releases on commits to main.
      </li>
      <li>
        <strong>Cross-repo notifications.</strong> When a downstream repo&rsquo;s
        tests break due to your change, notify the owner.
      </li>
      <li>
        <strong>Issue triage.</strong> Auto-label issues based on file paths
        affected, project labels, or AI-driven categorization.
      </li>
      <li>
        <strong>Documentation deploy.</strong> Build docs site on push, publish to
        GitHub Pages or your hosting.
      </li>
    </ul>
    <p>
      Each takes 15-60 minutes to set up and saves hours over the project
      lifetime.
    </p>

    <h2 id="common-patterns">Common Actions patterns + free templates</h2>
    <p>
      The patterns that cover 90% of cases:
    </p>
    <ul>
      <li>
        <strong>Test on PR + main.</strong> Above example.
      </li>
      <li>
        <strong>Lint on PR.</strong> Add eslint/ruff/etc as a separate job or step.
      </li>
      <li>
        <strong>Deploy on push to main.</strong> Vercel/Netlify integration handles
        for web apps; AWS/GCP OIDC for backend.
      </li>
      <li>
        <strong>Build + publish package.</strong> On tag push, build npm/PyPI/Maven
        package and publish.
      </li>
      <li>
        <strong>Scheduled runs.</strong> Daily security scan, weekly database
        cleanup, monthly metric report.
      </li>
      <li>
        <strong>Manual workflow_dispatch.</strong> Click a button in GitHub UI to
        trigger a workflow with custom inputs. Useful for ad-hoc deploys, data
        backfills.
      </li>
    </ul>
    <p>
      For each, search GitHub&rsquo;s &ldquo;starter workflows&rdquo; or the actions
      marketplace. Most patterns have official templates. Fork + customize.
    </p>
  </>
);

export const cta = {
  label: "Estimate Actions costs before scaling",
  targetSlug: "github-actions-cost-estimator",
};

export const faq = [
  {
    q: "How do I automate code tests without hiring DevOps?",
    a: "30-line YAML in .github/workflows/tests.yml using stock actions (actions/checkout, actions/setup-node/python/go). Tests run on every PR + push to main. 30 minutes total setup. Add coverage (Codecov/Coveralls), linting, OS matrix as you grow.",
  },
  {
    q: "How do I actually deploy my app using GitHub?",
    a: "Three options: (1) Vercel/Netlify/Cloudflare Pages auto-deploy on push (easiest for web apps), (2) GitHub Actions + cloud OIDC for AWS/GCP/Azure backend deploys, (3) self-hosted runners for environments where cloud credentials can't go to public CI. Pick simplest that meets security needs.",
  },
  {
    q: "How do I use GitHub Actions without being a DevOps expert?",
    a: "Use stock marketplace actions for 90% of workflows. Don't build custom Docker images unless required. Match your workflow to the closest official starter template; customize from there. Most patterns (test on PR, deploy on main, scheduled jobs, package release) have battle-tested templates.",
  },
  {
    q: "How do I speed up development with GitHub automation?",
    a: "Auto-merge dependabot PRs on green CI, stale issue cleanup (actions/stale), release automation (release-please, semantic-release), cross-repo notifications when downstream tests break, auto-labeling issues, automated docs deploy. Each saves hours over the project lifetime; 15-60 min setup each.",
  },
];
