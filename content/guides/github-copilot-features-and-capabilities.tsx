/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      What GitHub Copilot can and can&rsquo;t do, plus the workflow patterns that
      get the most out of it. Covers accuracy expectations, code-writing scope,
      debugging, web development, legacy code, tests + docs, team collaboration,
      and the corner cases (mobile, customization, API integration).
    </p>
  </>
);

export const toc = [
  { id: "accuracy", label: "Code accuracy + correctness" },
  { id: "scope", label: "What Copilot can and can&rsquo;t do" },
  { id: "debug", label: "Debugging with Copilot" },
  { id: "web", label: "Web development" },
  { id: "legacy", label: "Legacy code + tests + docs" },
  { id: "teams", label: "Teams + customization" },
  { id: "stack", label: "Multi-language, mobile, API integration" },
];

export const body = (
  <>
    <h2 id="accuracy">How accurate is Copilot&rsquo;s code?</h2>
    <p>
      Mixed answer. For idiomatic patterns in popular languages (JS, Python, Go), 80-95%
      of suggestions compile and pass basic tests. For unusual patterns or rare APIs,
      accuracy drops fast. Common failure modes:
    </p>
    <ul>
      <li><strong>Confidently wrong API signatures.</strong> Hallucinated function names that don&rsquo;t exist.</li>
      <li><strong>Plausible but subtly broken logic.</strong> Off-by-one, wrong comparison operator.</li>
      <li><strong>Outdated patterns.</strong> Suggesting deprecated APIs from training data.</li>
      <li><strong>Security antipatterns.</strong> SQL string concatenation, missing input validation.</li>
    </ul>
    <p>
      Treat suggestions like junior-dev work: review before accepting. Tests catch
      most hallucinations.
    </p>

    <h2 id="scope">Can Copilot write entire applications?</h2>
    <p>
      No, in any meaningful sense. Copilot completes lines and small blocks well; it
      doesn&rsquo;t architect systems, make tradeoff decisions, or maintain
      consistency across a 50K-line codebase. The right framing: Copilot is a
      productivity multiplier on existing developers, not a developer replacement.
    </p>
    <p>
      Specific capabilities + limits:
    </p>
    <ul>
      <li>✅ Function bodies from clear comments (90% accuracy on idiomatic).</li>
      <li>✅ Boilerplate (CRUD, type definitions, test scaffolds).</li>
      <li>✅ Translation between similar languages / frameworks.</li>
      <li>✅ Documentation comments + JSDoc/Sphinx blocks.</li>
      <li>⚠️ Multi-file refactors (Copilot Workspace + Chat helps but human in loop).</li>
      <li>❌ Architecture decisions, novel algorithm design, system design.</li>
      <li>❌ Cross-cutting concerns (logging strategy, error handling philosophy).</li>
    </ul>

    <h2 id="debug">Debugging with Copilot</h2>
    <p>
      Copilot Chat (the chat-style interface inside your IDE) is genuinely useful
      for debugging:
    </p>
    <ul>
      <li>Paste an error message + relevant code; ask &ldquo;why is this failing?&rdquo;</li>
      <li>Ask for likely fixes; evaluate each.</li>
      <li>Ask &ldquo;what tests would have caught this?&rdquo; to improve coverage.</li>
    </ul>
    <p>
      Less useful for: subtle race conditions, distributed-systems bugs, anything
      requiring multi-file context the model can&rsquo;t see.
    </p>

    <h2 id="web">Is Copilot good for web development?</h2>
    <p>
      Yes, particularly strong for web stacks. JavaScript, TypeScript, React, Vue,
      Next.js, CSS, HTML — all well-represented in training data. Common useful
      cases:
    </p>
    <ul>
      <li>Component scaffolding from a brief description.</li>
      <li>Form validation logic.</li>
      <li>Tailwind utility classes from styling intent.</li>
      <li>API endpoint handlers.</li>
      <li>Type definitions from JSON shapes.</li>
    </ul>
    <p>
      Less useful for: novel CSS layouts, animation curves, accessibility-specific
      ARIA patterns. These need taste + testing more than pattern-matching.
    </p>

    <h2 id="legacy">Legacy code, tests, docs</h2>
    <ul>
      <li>
        <strong>Legacy code:</strong> Copilot can summarize unfamiliar functions
        ("explain this code"). Less useful for refactoring without strong test
        coverage as a safety net.
      </li>
      <li>
        <strong>Test generation:</strong> good at scaffolding test files + happy-
        path tests. Mediocre at edge cases — humans still need to think about
        boundary conditions.
      </li>
      <li>
        <strong>Documentation:</strong> good first-pass JSDoc/Sphinx/docstring
        blocks. Edit for accuracy and voice.
      </li>
    </ul>

    <h2 id="teams">Teams + customization</h2>
    <ul>
      <li>
        <strong>Team collaboration:</strong> Business + Enterprise tiers. Centralized
        billing, opt-out, audit logs.
      </li>
      <li>
        <strong>Custom instructions:</strong> Enterprise tier supports custom
        instructions per repo (style guides, naming conventions). Business tier
        doesn&rsquo;t.
      </li>
      <li>
        <strong>Coding standards enforcement:</strong> Copilot doesn&rsquo;t enforce
        your style guide. Use linters + formatters on top.
      </li>
    </ul>

    <h2 id="stack">Multi-language, mobile, API integration</h2>
    <ul>
      <li>
        <strong>Multi-language support:</strong> 20+ languages with varying quality.
        Top tier: JS/TS, Python, Go, Java, Ruby, PHP, C#. Second tier: C/C++, Rust,
        Swift, Kotlin. Third tier: Erlang, Elixir, Haskell, Clojure (works but
        accuracy drops).
      </li>
      <li>
        <strong>Mobile dev:</strong> Swift (iOS) + Kotlin (Android) both decent.
        React Native + Flutter very strong (web stack inheritance).
      </li>
      <li>
        <strong>API integration:</strong> good for popular APIs in training data
        (Stripe, Twilio, AWS SDK). Weak on niche APIs the model hasn&rsquo;t seen
        much. Always verify generated calls against current docs.
      </li>
      <li>
        <strong>IDE compatibility:</strong> VSCode, JetBrains, Neovim, Cursor, Visual
        Studio. Tabnine works in more IDEs if you&rsquo;re on something niche.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Calculate ROI for your team",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "How accurate is GitHub Copilot's code?",
    a: "80-95% of idiomatic suggestions in popular languages compile and pass basic tests. Lower for unusual patterns or rare APIs. Common failures: hallucinated APIs, off-by-one logic, outdated patterns, security antipatterns. Treat suggestions like junior-dev work — review before accepting; tests catch most hallucinations.",
  },
  {
    q: "Can GitHub Copilot write entire applications?",
    a: "No. Copilot completes lines and small blocks well; it doesn't architect systems, make tradeoffs, or maintain consistency across large codebases. Productivity multiplier, not replacement.",
  },
  {
    q: "Is GitHub Copilot good for web development?",
    a: "Yes — particularly strong. JS/TS, React, Vue, Next.js, Tailwind all well-represented. Useful for component scaffolding, form validation, API handlers, type definitions. Less useful for novel CSS, animation, accessibility-specific ARIA patterns.",
  },
  {
    q: "What programming languages does GitHub Copilot support?",
    a: "20+ languages with varying quality. Top tier: JS/TS, Python, Go, Java, Ruby, PHP, C#. Second tier: C/C++, Rust, Swift, Kotlin. Mobile: Swift, Kotlin, React Native, Flutter all decent. Niche: Erlang, Elixir, Haskell, Clojure work with reduced accuracy.",
  },
  {
    q: "Does Copilot work in my IDE?",
    a: "VSCode, JetBrains (IntelliJ, WebStorm, GoLand, etc.), Neovim, Cursor, Visual Studio all officially supported. For niche IDEs, Tabnine has wider compatibility. Mobile/iPad development requires the IDE you're using to support extensions.",
  },
];
