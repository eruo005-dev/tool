/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Quick answers to recurring GitHub + GitHub Copilot questions from
      r/learnprogramming, r/programming, r/cscareerquestions, and r/SoftwareRecs.
      Each links to a deeper guide where the answer needs more space.
    </p>
  </>
);

export const toc = [
  { id: "abandoned", label: "Abandoned + offline + maintenance" },
  { id: "find-code", label: "Finding code that solves your problem" },
  { id: "forking", label: "What forking actually means" },
  { id: "deleted-recovery", label: "Recovering deleted code" },
  { id: "copilot-misc", label: "Copilot mistakes + customization + updates" },
];

export const body = (
  <>
    <h2 id="abandoned">How do I know if an open source project is maintained?</h2>
    <p>
      Five signals (in order of reliability):
    </p>
    <ol>
      <li>
        <strong>Recent commits.</strong> Last commit in the past 90 days = active.
        6-12 months = check why; might still be alive but lower-priority. 1+ year
        = treat as abandoned unless explicitly stated otherwise.
      </li>
      <li>
        <strong>Recent releases.</strong> A real version bump in the last 6 months
        signals active maintenance.
      </li>
      <li>
        <strong>PR + issue response time.</strong> Look at recent PRs — are
        maintainers responding? &ldquo;Open for 200 days, no response&rdquo; is a
        bad sign.
      </li>
      <li>
        <strong>Maintainer count.</strong> Single-maintainer projects are
        bus-factor risks. Multi-maintainer + organization-owned is safer.
      </li>
      <li>
        <strong>Funding source.</strong> Foundation-backed (Apache, Linux),
        corporate-sponsored (React from Meta, K8s from Google), or commercial-
        backed (Posthog, Sentry) projects survive maintainer churn.
      </li>
    </ol>

    <h2>Can I use GitHub if I&rsquo;m offline most of the time?</h2>
    <p>
      Yes — Git is fundamentally offline. The git CLI works without internet;
      you commit + branch + browse history locally. You only need internet to{" "}
      <code>push</code> to GitHub or <code>pull</code> changes from collaborators.
    </p>
    <p>
      Workflow: work offline all week, push when you have connection. The
      occasional internet visit is enough for most use cases.
    </p>

    <h2>Does GitHub require maintenance?</h2>
    <p>
      Minimal for individual users. Periodic items:
    </p>
    <ul>
      <li>Rotate Personal Access Tokens (annually or on suspicion of leak).</li>
      <li>Review repo settings + permissions when team membership changes.</li>
      <li>Clean up stale forks + branches periodically.</li>
      <li>Audit dependabot alerts; either fix or accept the risk explicitly.</li>
    </ul>

    <h2 id="find-code">What&rsquo;s the easiest way to find code that solves my problem?</h2>
    <p>
      Three search strategies:
    </p>
    <ul>
      <li>
        <strong>GitHub code search.</strong> Search distinctive function names,
        error strings, or specific API patterns. Good for &ldquo;has anyone done
        X with library Y?&rdquo;
      </li>
      <li>
        <strong>Sourcegraph public search.</strong> Different index, sometimes
        finds what GitHub doesn&rsquo;t. Free tier covers public repos.
      </li>
      <li>
        <strong>npm / PyPI / crates search by topic.</strong> Find well-known
        libraries first; then dig into their source if you need to understand
        the implementation.
      </li>
    </ul>
    <p>
      For learning: pick a popular library, read the source. The compounding from
      reading high-quality production code beats course-taking.
    </p>

    <h2 id="forking">What does &ldquo;forking&rdquo; actually mean?</h2>
    <p>
      Fork = your personal copy of someone else&rsquo;s repo. Practical
      implications:
    </p>
    <ul>
      <li>
        Your fork can have changes the original doesn&rsquo;t.
      </li>
      <li>
        You can open a Pull Request from your fork back to the original to
        propose changes (the standard OSS contribution flow).
      </li>
      <li>
        If the original is updated, you can &ldquo;sync&rdquo; your fork from the
        GitHub UI.
      </li>
      <li>
        Forks count toward your repo total but use minimal storage (GitHub
        deduplicates).
      </li>
    </ul>
    <p>
      When to fork: contributing to OSS projects (you fork → branch → PR back).
      When not to fork: you only want to use the project — just install / clone,
      don&rsquo;t fork.
    </p>

    <h2 id="deleted-recovery">How do I recover code I accidentally deleted?</h2>
    <p>
      Multiple safety nets:
    </p>
    <ul>
      <li>
        <strong>Local Git history.</strong> If you committed it before deleting,
        <code>git log</code> shows it. <code>git checkout &lt;commit&gt; -- &lt;file&gt;</code> recovers.
      </li>
      <li>
        <strong>git reflog.</strong> Shows operations including HEAD changes. Can
        recover after force-push or reset.
      </li>
      <li>
        <strong>GitHub recovery.</strong> If you deleted a repo, you have ~90
        days to restore via Settings → General → Restore.
      </li>
      <li>
        <strong>Cached PR diffs.</strong> Even after force-push removal, GitHub
        sometimes shows old PR diffs that include the deleted content.
      </li>
      <li>
        <strong>Collaborator clones.</strong> If anyone else cloned the repo,
        their copy still has the history.
      </li>
    </ul>
    <p>
      First step: don&rsquo;t panic, don&rsquo;t commit anything new. Then run
      <code>git reflog</code>. 95% of accidents recover from there.
    </p>

    <h2 id="copilot-misc">GitHub Copilot mistakes, customization, and updates</h2>
    <ul>
      <li>
        <strong>Common Copilot mistakes:</strong> hallucinated APIs (always
        verify with docs), insecure defaults (SQL concat, missing input
        validation), outdated patterns (deprecated APIs from training data),
        confidently wrong off-by-ones. Code review + tests catch most.
      </li>
      <li>
        <strong>Customization:</strong> limited on Individual / Business tiers.
        Enterprise tier supports custom instructions per repo (style guides,
        naming conventions). For all tiers, .editorconfig + linters + formatters
        do most of what custom Copilot rules would.
      </li>
      <li>
        <strong>Update frequency:</strong> base model updates rolling — GitHub
        rotates underlying models periodically. Specific dates not announced
        for most upgrades. Stable IDE extension; major UX changes 1-2× per year.
      </li>
      <li>
        <strong>Multi-language support:</strong> 20+ languages with varying
        quality. Top: JS/TS, Python, Go, Java, Ruby, PHP, C#. Mobile: Swift,
        Kotlin. Niche: Erlang, Elixir, Haskell, Clojure work but accuracy
        drops.
      </li>
      <li>
        <strong>Open source projects:</strong> using Copilot on OSS contributions
        is generally fine. Some maintainers reject AI-assisted PRs on principle;
        check CONTRIBUTING.md before submitting.
      </li>
    </ul>

    <h2>How do I know if Copilot&rsquo;s suggestion is correct?</h2>
    <p>
      Same way you know any code is correct: run it, test it, read it. Copilot
      output isn&rsquo;t magically right or wrong — it&rsquo;s a starting point.
      Specifically check:
    </p>
    <ul>
      <li>Does the API call exist? (Most common <a href="/learn/hallucination">hallucination</a> type.)</li>
      <li>Are the function arguments in the right order?</li>
      <li>Does the logic actually do what the comment said?</li>
      <li>Are edge cases handled? (Copilot weak here.)</li>
      <li>Does it match your existing code style?</li>
    </ul>
  </>
);

export const cta = {
  label: "Get GitHub Copilot ROI estimate",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "How do I know if an open source project is actually maintained?",
    a: "Five signals: recent commits (last 90 days = active, 1+ year = abandoned), recent releases, PR/issue response time, maintainer count (single-maintainer = bus-factor risk), funding source (foundation/corporate/commercial backing survives churn).",
  },
  {
    q: "Can I use GitHub if I'm offline most of the time?",
    a: "Yes — Git is fundamentally offline. CLI works without internet; commit + branch + browse history locally. Only need internet to push or pull. Work offline all week, sync when connected.",
  },
  {
    q: "What does 'forking' actually mean for beginners?",
    a: "Fork = your personal copy of someone else's repo. You can have your own changes, open PRs back to original, sync from upstream when needed. Standard OSS contribution flow: fork → branch → PR. Don't fork if you just want to use a project — clone instead.",
  },
  {
    q: "How do I recover code I accidentally deleted?",
    a: "Don't panic. git reflog shows recent operations including ones that look 'lost'. git checkout <commit> -- <file> recovers from history. GitHub repo deletion has 90-day restore window. Force-pushed removals sometimes survive in PR diffs. Collaborator clones still have full history.",
  },
  {
    q: "How do I know if GitHub Copilot's suggestion is correct?",
    a: "Same way as any code — run it, test it, read it. Specifically check: does the API call exist (most common hallucination), are arguments in right order, does logic match the comment, are edge cases handled (weak point), matches your style? Tests catch most subtle errors.",
  },
];
