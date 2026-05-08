/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The difference between a CLI developers love and one they tolerate isn&rsquo;t
      features — it&rsquo;s the small details. Tools like ripgrep, fd, gh, kubectl, and
      hyperfine all share a set of principles. This guide is the condensed version, plus
      the workflow-automation principles that apply when you&rsquo;re building tools
      developers want adopted across their team.
    </p>
  </>
);

export const toc = [
  { id: "principles", label: "The 6 design principles" },
  { id: "ux", label: "First-run UX details that matter" },
  { id: "automation", label: "Workflow automation tools developers actually use" },
  { id: "checklist", label: "The 16-item self-review checklist" },
];

export const body = (
  <>
    <h2 id="principles">The 6 design principles for CLIs developers love</h2>
    <ol>
      <li>
        <strong>Composability.</strong> Your tool is a Unix primitive. Default output
        should pipe cleanly to another tool. Add structured output (JSON) so users can
        wrap your tool in scripts without parsing brittle text. The single biggest
        force-multiplier in CLI design.
      </li>
      <li>
        <strong>Sensible defaults, configurable knobs.</strong> The 80% case should
        work with no flags. The 20% case should be reachable with explicit flags. If
        your tool requires reading the README to do anything useful, the default is
        wrong.
      </li>
      <li>
        <strong>Speak human, not machine.</strong> Error messages tell users what
        happened and what to do next. &ldquo;Connection refused&rdquo; is unhelpful.
        &ldquo;Connection refused — your token at $XDG_CONFIG_HOME/foo/auth may have
        expired; run `foo auth refresh`&rdquo; is gold.
      </li>
      <li>
        <strong>Trust by default.</strong> Don&rsquo;t silently delete things, send
        data to your server, or change global state. Destructive operations need a
        --dry-run or confirmation. Telemetry needs to be opt-in (or at minimum
        documented + easy to disable).
      </li>
      <li>
        <strong>Predictable across platforms.</strong> Same flags work on Linux, macOS,
        Windows. Same exit codes mean the same things. Same input file format works
        everywhere. Cross-platform tests catch the bugs.
      </li>
      <li>
        <strong>Fast feedback.</strong> Sub-second startup time. <a href="/learn/stream">Streaming</a> output (don&rsquo;t
        buffer everything before printing). Progress indicators on long operations.
        Developers are impatient — design for that.
      </li>
    </ol>

    <h2 id="ux">First-run UX details that matter</h2>
    <p>
      The first 30 seconds of a developer&rsquo;s experience with your CLI sets the
      adoption signal. The details that pay off:
    </p>
    <ul>
      <li>
        <strong>Working --help.</strong> --help, -h, and no-args should all show help.
        Each is a distinct user mental model.
      </li>
      <li>
        <strong>Examples in --help.</strong> 2-3 real example invocations beat any
        amount of flag descriptions.
      </li>
      <li>
        <strong>Tab completion shipped, not optional.</strong> Generate bash + zsh +
        fish completions; document install in 1 command.
      </li>
      <li>
        <strong>Useful default output for the empty case.</strong> &ldquo;What now?&rdquo; is
        the worst landing place. Show the user what to try.
      </li>
      <li>
        <strong>--version with commit SHA.</strong> Bug reports are 10× faster when you
        know the exact build.
      </li>
      <li>
        <strong>Color that auto-disables on pipe.</strong> Color in TTYs is friendly;
        color codes in piped output is hostile. Detect and adapt.
      </li>
    </ul>

    <h2 id="automation">Workflow automation tools developers actually use</h2>
    <p>
      For tools that aren&rsquo;t CLIs but workflow automations (n8n, GitHub Actions, Zapier-
      for-devs categories):
    </p>
    <ul>
      <li>
        <strong>Solve a single boring problem completely</strong> rather than ten
        problems halfway. The boring-and-complete bar (&ldquo;X is the obvious choice
        for Y&rdquo;) is reachable; the broad-but-shallow bar isn&rsquo;t.
      </li>
      <li>
        <strong>Integrate with where developers already work.</strong> GitHub, Slack,
        their IDE. Standalone web UIs that require a separate login face an adoption
        tax that often kills the tool.
      </li>
      <li>
        <strong>Provide an exit ramp.</strong> If users can export their automations as
        plain code (a script, a YAML), they trust your tool more. Lock-in increases
        adoption resistance.
      </li>
      <li>
        <strong>Show real-time output during runs.</strong> Workflow tools that hide
        execution behind &ldquo;processing...&rdquo; spinners feel worse than scripts that
        print as they go.
      </li>
      <li>
        <strong>Fail loud with actionable diagnostics.</strong> When step 7 of an
        automation fails, the user needs to know step 7 failed, why, and how to fix
        without re-running steps 1-6.
      </li>
    </ul>
    <p>
      Specifically for n8n and similar low-code automation platforms: they&rsquo;re
      excellent for &ldquo;glue&rdquo; integrations between SaaS APIs (Slack → Jira →
      Email). They struggle when you need stateful long-running processes or complex
      branching logic — those still belong in real code.
    </p>

    <h2 id="checklist">The 16-item self-review checklist</h2>
    <p>
      We turned the principles above into an interactive checklist:{" "}
      <a href="/tools/cli-dx-checklist">our CLI DX checklist</a>. Five categories
      (first-run, output, errors, trust + safety, distribution), 16 items, each with a
      rationale. Saved to your browser as you check off items. Use during build or as a
      self-review before public launch.
    </p>
  </>
);

export const cta = {
  label: "Run through the CLI DX checklist (free)",
  targetSlug: "cli-dx-checklist",
};

export const faq = [
  {
    q: "How do I design CLI tools that developers love?",
    a: "Six principles: composability (output pipes cleanly, structured output available), sensible defaults with knobs, speak human in error messages, trust by default (no silent destructive actions or unannounced telemetry), predictable across platforms, fast feedback (sub-second startup, streaming output). Use our 16-item self-review checklist before launch.",
  },
  {
    q: "What makes a good developer tool?",
    a: "Solving one boring problem completely (vs ten halfway), integrating where developers already work (GitHub, Slack, IDE), providing an exit ramp from lock-in, showing real-time output during execution, failing loud with actionable diagnostics. The first-run UX matters more than feature count.",
  },
  {
    q: "How to build automation tools that developers actually use?",
    a: "Single-problem-deep beats multi-problem-shallow. Integrate where they live (GitHub/Slack/IDE) — standalone web UIs lose adoption. Provide an exit ramp (export to plain code) so users trust the platform. Show real-time output. Fail loud with actionable diagnostics. Build with n8n for SaaS-glue automations; reserve real code for complex/long-running workflows.",
  },
  {
    q: "How to learn n8n for developer automation?",
    a: "Start with their official quickstart (~30 min). Build 2-3 real automations from your own workflow (Slack notification on PR review, GitHub issue → Jira ticket, etc.). The conceptual leap is from imperative scripts to node-based flows — most devs find it intuitive within a few projects. Strengths: SaaS-glue integrations. Weaknesses: stateful long-running logic, complex branching.",
  },
];
