/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      A grab bag of the practical patterns that successful dev tools share: best
      practices for CI/CD pipeline tools, IDEs and editors used to build tools,
      what companies actually pay for, testing approaches, documentation
      standards, success metrics, and the frameworks/libraries that show up
      repeatedly in shipped code.
    </p>
  </>
);

export const toc = [
  { id: "ci-cd", label: "Best practices for CI/CD pipeline tools" },
  { id: "ides", label: "IDEs + editors for building tools" },
  { id: "what-companies-pay-for", label: "What companies pay for in dev tools" },
  { id: "testing", label: "Testing developer tools properly" },
  { id: "docs", label: "Documentation best practices" },
  { id: "metrics", label: "Measuring success" },
  { id: "tools-for-tools", label: "Best frameworks + libraries" },
];

export const body = (
  <>
    <h2 id="ci-cd">Best practices for CI/CD pipeline tools</h2>
    <p>
      If you&rsquo;re building tooling that lives inside CI/CD pipelines (GitHub
      Actions, GitLab CI, Buildkite plugins, custom CLIs run in CI):
    </p>
    <ul>
      <li>
        <strong>Idempotent operations.</strong> CI flakes happen. Your tool needs
        to be safe to retry. Anything destructive should require explicit
        confirmation or a state-check.
      </li>
      <li>
        <strong>Cache awareness.</strong> Take advantage of CI caches; document
        cache keys clearly. Provide a --no-cache flag for debugging.
      </li>
      <li>
        <strong>Fast failure modes.</strong> Fail in seconds when the input is
        wrong, not in minutes after running half the pipeline. Pre-flight checks
        before expensive operations.
      </li>
      <li>
        <strong>Structured output.</strong> JSON or GitHub Actions annotation
        format. Plain text logs are useful but the structured channel makes your
        tool composable with other CI tooling.
      </li>
      <li>
        <strong>Secret-handling discipline.</strong> Never echo secrets; redact in
        logs; document which env vars matter; fail loudly when required secrets
        are missing.
      </li>
      <li>
        <strong>Parallelism support.</strong> CI runs are expensive. Tools that
        parallelize internally (or document how to shard) save users real money.
      </li>
    </ul>

    <h2 id="ides">Best IDEs and editors for building developer tools</h2>
    <p>
      What working dev-tool engineers actually use in 2026:
    </p>
    <ul>
      <li>
        <strong>VSCode + Cursor.</strong> The dominant choice. Plugin ecosystem,
        AI integration, decent debug experience. Cursor specifically has eaten a
        lot of share among dev-tool builders for the AI-native workflow.
      </li>
      <li>
        <strong>JetBrains (GoLand, IntelliJ, RustRover).</strong> Heavier, but
        stronger refactoring and deep language understanding. Worth it for
        large codebases or when working in Java/Kotlin/Go/Rust.
      </li>
      <li>
        <strong>Neovim.</strong> Niche but devoted. Lua-driven, infinitely
        configurable. Steeper learning curve; payoff is compounded productivity
        for those who invest. LazyVim and AstroVim presets cut the setup time
        significantly.
      </li>
      <li>
        <strong>Helix.</strong> Modern modal editor. Lower-config than Vim; the
        rising third-place editor in 2026.
      </li>
      <li>
        <strong>Zed.</strong> Newer entrant. Multiplayer-first design, very fast.
        Worth watching; not yet dominant.
      </li>
    </ul>
    <p>
      Pick one and go deep. The compounding effect of muscle memory on a single
      editor outpaces marginal feature gains from switching.
    </p>

    <h2 id="what-companies-pay-for">What companies pay for in developer tools</h2>
    <p>
      The buyer&rsquo;s perspective. What turns a tool from &ldquo;nice idea&rdquo;
      into a budget line:
    </p>
    <ul>
      <li>
        <strong>Compliance + audit trails.</strong> SOC 2, HIPAA, GDPR, SSO,
        audit logs. Companies pay for these even when the underlying functionality
        is mediocre.
      </li>
      <li>
        <strong>Reliability + SLAs.</strong> Tools that companies depend on need
        99.9%+ uptime contracts. The SLA is what justifies the price for
        infrastructure-adjacent tools.
      </li>
      <li>
        <strong>Time savings × team size.</strong> A tool that saves each engineer
        2 hours/week × 50 engineers × $80/hour = $416K/year. A $50K/year
        subscription is easy to justify.
      </li>
      <li>
        <strong>Integration with existing systems.</strong> SAML/SSO, SCIM
        provisioning, the company&rsquo;s observability stack, the company&rsquo;s
        CI. Tools that integrate cleanly close deals; tools that require
        replacing existing infrastructure don&rsquo;t.
      </li>
      <li>
        <strong>Support response.</strong> Enterprise customers want a Slack
        Connect channel and 4-hour response. The tool&rsquo;s technical quality
        matters less than the speed of debugging help.
      </li>
      <li>
        <strong>Predictable pricing.</strong> Per-seat or fixed-rate. Companies
        hate usage-based bills they can&rsquo;t predict. Even if usage-based is
        cheaper, predictable pricing wins enterprise deals.
      </li>
    </ul>

    <h2 id="testing">Testing developer tools properly</h2>
    <p>
      Dev-tool testing has its own patterns:
    </p>
    <ul>
      <li>
        <strong>Snapshot tests for output.</strong> CLI output, generated code,
        documentation — all benefit from snapshot tests that catch surprise
        output changes.
      </li>
      <li>
        <strong>Cross-platform CI matrix.</strong> Linux, macOS, Windows. Bash 3
        and Bash 5. Different shells. Catch the platform-specific bugs in CI
        instead of customer reports.
      </li>
      <li>
        <strong>Integration tests against real artifacts.</strong> Real Docker
        images, real Kubernetes clusters (in CI), real databases. Mocks lie about
        edge cases.
      </li>
      <li>
        <strong>Performance regression tests.</strong> Build time, startup time,
        memory. Set thresholds in CI; fail when crossed.
      </li>
      <li>
        <strong>Backwards-compatibility tests.</strong> If your tool has stable
        APIs, run last release&rsquo;s test suite against current code as a
        pre-merge check.
      </li>
    </ul>

    <h2 id="docs">Documentation best practices for developer tools</h2>
    <p>
      Stripe + Anthropic + Cloudflare set the bar:
    </p>
    <ul>
      <li>
        <strong>Quickstart in the first 60 seconds.</strong> Install + first
        useful output. Anything more verbose loses readers.
      </li>
      <li>
        <strong>Real, runnable examples.</strong> Copy-paste-runnable. Test them
        in CI so they don&rsquo;t bit-rot.
      </li>
      <li>
        <strong>Concept docs separate from API reference.</strong> Conceptual
        docs explain why; reference docs explain what. Mixing them confuses
        readers.
      </li>
      <li>
        <strong>Search that works.</strong> Algolia DocSearch (free for OSS) is
        the standard. Without good search, the rest of the docs don&rsquo;t
        matter.
      </li>
      <li>
        <strong>Versioning.</strong> Old releases need their old docs. Don&rsquo;t
        force users on v1.5 to read v3.0 docs.
      </li>
      <li>
        <strong>Cookbook section.</strong> Common scenarios with full
        end-to-end examples. The most-used part of the docs after Quickstart.
      </li>
    </ul>

    <h2 id="metrics">Measuring success of a developer tool</h2>
    <p>
      The metrics that predict sustained success (not vanity):
    </p>
    <ul>
      <li>
        <strong>30-day retention</strong> of trial users — covered in the{" "}
        <a href="/guides/how-to-get-developers-to-adopt-your-tools">adoption
        guide</a>.
      </li>
      <li>
        <strong>Daily / weekly active users</strong> — for tools that should be
        habitual.
      </li>
      <li>
        <strong>Time-to-first-value</strong> — install to first useful output.
        Sub-5-minutes is the bar.
      </li>
      <li>
        <strong>Net Promoter Score (NPS) within developer audience.</strong> Above
        40 is strong; above 60 is rare. NPS for dev tools comes from
        in-product surveys, not email blasts.
      </li>
      <li>
        <strong>Documentation traffic patterns.</strong> Which pages get the most
        traffic? Where do users land vs leave? Reveals doc gaps.
      </li>
    </ul>
    <p>
      What to ignore: GitHub stars (vanity), Twitter mentions (noise), one-time
      HN front-page (correlates with nothing long-term).
    </p>

    <h2 id="tools-for-tools">Best frameworks + libraries for building developer tools</h2>
    <ul>
      <li>
        <strong>CLI frameworks:</strong> Cobra (Go), Click + Typer (Python),
        Clap (Rust), Yargs / Commander (Node). Pick the one for your language;
        all are mature.
      </li>
      <li>
        <strong>TUI frameworks:</strong> Charm Bubbletea (Go), Textual
        (Python), Ratatui (Rust), Ink (Node). All produce delightful UIs;
        Bubbletea + Charm ecosystem is the most prolific in 2026.
      </li>
      <li>
        <strong>Output formatting:</strong> tabwriter (Go), Rich (Python),
        Tabled (Rust). Don&rsquo;t hand-roll table layout.
      </li>
      <li>
        <strong>Config + serialization:</strong> Viper (Go), Pydantic Settings
        (Python), Serde (Rust), Zod (TS). Don&rsquo;t parse YAML by hand.
      </li>
      <li>
        <strong>Error wrapping + display:</strong> Cobra has built-ins; thiserror
        + miette in Rust; pretty-printed errors in TS via better-error-stack.
      </li>
      <li>
        <strong>Distribution:</strong> goreleaser (Go), cargo-dist (Rust),
        nfpm (multi-format packages), chocolatey + scoop (Windows), homebrew
        formulas. Pick the right one for your distribution targets; goreleaser
        + cargo-dist are the closest to &ldquo;one config covers all
        platforms.&rdquo;
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Run the CLI DX checklist on your tool",
  targetSlug: "cli-dx-checklist",
};

export const faq = [
  {
    q: "What are best practices for building CI/CD pipeline tools?",
    a: "Idempotent operations (CI flakes; tools must be retry-safe), cache awareness, fast failure modes (pre-flight checks before expensive ops), structured output (JSON/GHA annotations), secret-handling discipline (never echo, redact, fail loud on missing), parallelism support (CI runs are expensive — sharding saves real money).",
  },
  {
    q: "What IDEs are best for building developer tools?",
    a: "VSCode/Cursor dominate (plugins, AI integration). JetBrains (GoLand, IntelliJ, RustRover) for stronger refactoring and large codebases. Neovim for compounded productivity once invested. Helix and Zed are rising. Pick one and go deep — muscle memory beats marginal feature gains.",
  },
  {
    q: "What do companies pay for in developer tools?",
    a: "Compliance + audit trails (SOC 2, HIPAA, SSO, audit logs), reliability + SLAs, time-saved × team size math, integration with existing systems (SAML, SCIM, observability), support response (Slack Connect + 4-hour response), predictable pricing (per-seat beats unpredictable usage-based for enterprise).",
  },
  {
    q: "How do I test developer tools properly?",
    a: "Snapshot tests for CLI output and generated code, cross-platform CI matrix (Linux/macOS/Windows + multiple shells), integration tests against real artifacts (real containers, clusters, databases), performance regression tests with thresholds, backwards-compat tests running last release's suite against current code.",
  },
  {
    q: "How do I measure success of a developer tool?",
    a: "30-day retention of trial users (the most predictive), DAU/WAU for habitual tools, time-to-first-value (sub-5-min is the bar), in-product NPS (40+ strong, 60+ rare), documentation traffic patterns. Ignore GitHub stars, Twitter mentions, and HN front-page hits — none predict long-term sustained usage.",
  },
];
