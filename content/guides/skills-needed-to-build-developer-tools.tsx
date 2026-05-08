/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Do I have enough experience to build dev tools?&rdquo; comes up weekly on
      r/learnprogramming and r/cscareerquestions. The honest answer: less than people
      think. The technical bar for shipping a useful dev tool in 2026 is achievable for
      a 2-year developer with discipline. The bar for a successful dev-tool business is
      higher, but that&rsquo;s a different question.
    </p>
    <p>
      This guide is the practical skill stack: what you actually need (vs what gets
      gatekept on Twitter), language recommendations by tool type, and where junior /
      mid-level devs can plausibly ship in 2026.
    </p>
  </>
);

export const toc = [
  { id: "core-skills", label: "Core skills you actually need" },
  { id: "languages", label: "Languages by tool type" },
  { id: "experience-level", label: "How much experience is enough?" },
];

export const body = (
  <>
    <h2 id="core-skills">Core skills you actually need</h2>
    <p>
      Five categories, ranked by what most predicts success:
    </p>
    <ol>
      <li>
        <strong>Strong CLI + Unix fluency.</strong> Pipes, processes, signal handling, exit
        codes, environment variables, file descriptors. Even if you&rsquo;re building a
        GUI tool, your users live in shells.
      </li>
      <li>
        <strong>API design taste.</strong> Function signatures, error semantics, naming,
        deprecation policy. This is the skill that separates good dev tools from
        frustrating ones. Develop by reading great APIs (Stripe, Anthropic, Go standard
        library) and bad ones (anything by committee).
      </li>
      <li>
        <strong>Documentation writing.</strong> Probably a higher determinant of adoption
        than code quality. Stripe docs are the gold standard; study them.
      </li>
      <li>
        <strong>Cross-platform thinking.</strong> Different shells, line endings, path
        separators, color terminals. Most dev-tool failures are platform edge cases the
        author didn&rsquo;t test.
      </li>
      <li>
        <strong>Observability + debuggability mindset.</strong> Your tool will be running
        in environments you&rsquo;ve never seen. Build for the &ldquo;what is happening
        right now?&rdquo; question users will have.
      </li>
    </ol>
    <p>
      What you don&rsquo;t need (despite the gatekeeping):
    </p>
    <ul>
      <li><strong>Compiler theory.</strong> Unless you&rsquo;re building a compiler.</li>
      <li><strong>Distributed systems mastery.</strong> Most dev tools are local CLIs or single-server SaaS for a long time.</li>
      <li><strong>Mathematics beyond high school.</strong> Almost never relevant.</li>
      <li><strong>10 years of experience.</strong> Plenty of widely-used dev tools were started by 2-3 year devs who lived a specific pain.</li>
    </ul>

    <h2 id="languages">Languages by tool type</h2>
    <ul>
      <li>
        <strong>Bash:</strong> right for tiny glue scripts, post-commit hooks, project
        scaffolds. Wrong for anything &gt; 200 lines or anything you want to maintain
        cross-platform. Bash skills are still essential as a meta-skill — almost every
        dev tool ends up shelling out at some point.
      </li>
      <li>
        <strong>Python:</strong> right for data-adjacent tools, AI/ML tooling,
        infrastructure tools (Pulumi, AWS CDK style), most CLIs where startup time
        isn&rsquo;t critical. Wrong when you need a tiny static binary or sub-second
        startup. The ecosystem (Click, Typer, Rich) makes CLI building delightful.
      </li>
      <li>
        <strong>Go:</strong> right for everything CLI where you want a static binary,
        fast startup, and easy cross-compile. Docker, Terraform, Hugo, gh, kubectl, k9s
        — all Go for a reason. The bar for &ldquo;professional-looking dev tool in
        2026&rdquo; is increasingly Go-shaped.
      </li>
      <li>
        <strong>Rust:</strong> right for performance-critical tools, file
        watchers, parsers, anything in the build pipeline. ripgrep, fd, bat, hyperfine,
        cargo all show the strengths. Steeper learning curve; pay-off compounds.
      </li>
      <li>
        <strong>TypeScript / Node:</strong> right when your users live in npm-land or
        you&rsquo;re shipping JS-ecosystem tooling (linters, bundlers, package
        utilities). Wrong outside that audience because Node startup time and
        distribution friction add up.
      </li>
      <li>
        <strong>Zig, Nim, V, Crystal:</strong> niche. Use Go or Rust unless you have a
        specific reason.
      </li>
    </ul>

    <h2 id="experience-level">How much experience do you need?</h2>
    <p>
      Realistic thresholds:
    </p>
    <ul>
      <li>
        <strong>Junior (0–2 yrs):</strong> can absolutely ship a small dev tool. Best
        starting points: scratch your own itch (a missing tool in your daily workflow),
        contribute fixes to an existing OSS dev tool you use, or build a clear
        narrow-scope CLI (a config-file linter, a metrics scraper, a JSON pretty-printer
        with one specific feature). Don&rsquo;t try to build a Sentry-scale platform
        product.
      </li>
      <li>
        <strong>Mid (3–5 yrs):</strong> can ship dev tools that get real adoption.
        Most successful indie dev-tool founders launched in this range. Pair with
        deep domain knowledge of one stack (say, you&rsquo;ve done 4 years of React → ship
        a React-specific tool).
      </li>
      <li>
        <strong>Senior+ (5+ yrs):</strong> can credibly start dev-tools companies. The
        domain expertise + execution speed + ability to anticipate edge cases is what
        funded companies look for.
      </li>
    </ul>
    <p>
      The pattern: <strong>solve your own pain first, expand from there</strong>. Every
      successful indie dev tool we&rsquo;ve studied followed that arc.
    </p>
  </>
);

export const cta = {
  label: "Score your dev-tool idea before building",
  targetSlug: "dev-tool-idea-scorer",
};

export const faq = [
  {
    q: "What skills do I need to build developer utilities?",
    a: "Core five: strong CLI/Unix fluency, API design taste, documentation writing, cross-platform thinking, observability mindset. What you don't need: compiler theory, distributed systems mastery, math beyond high school, 10 years of experience. Most successful indie dev-tool founders shipped at 3-5 years.",
  },
  {
    q: "What programming language should I learn for developer tools?",
    a: "Go for static-binary CLIs (Docker/Terraform/Hugo style). Rust for performance-critical tools (ripgrep/cargo style). Python for data-adjacent tools, ML tooling, IaC. TypeScript/Node for JS-ecosystem tooling. Bash for tiny glue. Default to Go in 2026 for new general-purpose dev tools.",
  },
  {
    q: "Bash vs Python vs Go for developer utilities — which to use?",
    a: "Bash for <200 lines of glue. Python for data/ML tooling, infrastructure DSLs, cross-platform when startup time isn't critical. Go for static binaries, fast startup, easy cross-compile — the dominant choice for new CLIs in 2026. Pick one and ship; the language matters less than execution.",
  },
  {
    q: "How much experience do you need to build developer tools?",
    a: "Junior (0-2 yrs) can ship narrow-scope tools that scratch their own itch. Mid (3-5 yrs) is where most successful indie dev-tool founders launch. Senior+ has the domain expertise and edge-case anticipation that VC-backed dev-tools companies need. Don't gate yourself.",
  },
];
