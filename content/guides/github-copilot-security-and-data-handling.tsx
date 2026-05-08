/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Code is sensitive. The biggest concern teams raise about GitHub Copilot is data
      handling: where does your code go, who sees it, does it train future models,
      and what happens when a suggestion turns out to be wrong? This guide walks the
      practical answers.
    </p>
  </>
);

export const toc = [
  { id: "code-safety", label: "Is your code safe with Copilot?" },
  { id: "internet", label: "Does Copilot need an internet connection?" },
  { id: "training-data", label: "What code does Copilot learn from?" },
  { id: "broken-code", label: "What if Copilot writes code that breaks?" },
];

export const body = (
  <>
    <h2 id="code-safety">GitHub Copilot security: is your code safe?</h2>
    <p>
      Three different concerns get conflated:
    </p>
    <ul>
      <li>
        <strong>Code transmission for <a href="/learn/inference">inference</a>.</strong> Yes, your prompt context
        (the code around your cursor) is sent to GitHub&rsquo;s servers for the model
        to generate suggestions. Encrypted in transit. Required for the service to
        work.
      </li>
      <li>
        <strong>Training on your code.</strong> Business + Enterprise tiers
        explicitly opt out of using your code for training. Individual tier:
        check current settings — historically opt-in or opt-out has shifted.
      </li>
      <li>
        <strong>Code retention.</strong> GitHub retains prompt-and-suggestion data
        for limited periods (varies by tier; Business + Enterprise have stricter
        deletion). For high-sensitivity codebases, the Enterprise tier&rsquo;s
        zero-retention mode is the right pick.
      </li>
    </ul>
    <p>
      For most teams: Business or Enterprise tier addresses the realistic concerns.
      Self-hosted alternatives (Codeium, Tabnine self-hosted, Continue with local
      models) exist if your security regime requires fully air-gapped operation.
    </p>

    <h2 id="internet">Does Copilot need an internet connection?</h2>
    <p>
      Yes. Inference happens on GitHub&rsquo;s servers; your editor sends the prompt
      and receives the completion. Without internet, suggestions don&rsquo;t appear.
      You&rsquo;ll see a status indicator showing connection state.
    </p>
    <p>
      Local-only alternatives:
    </p>
    <ul>
      <li><strong>Continue.dev</strong> with a local Ollama model.</li>
      <li><strong>Tabnine self-hosted</strong> (paid).</li>
      <li><strong>Cursor</strong> with a local model.</li>
    </ul>
    <p>
      These run on your machine but require a beefy GPU + significant disk space for
      the model weights. Quality is generally below GPT-4-class; closing fast as open
      models improve.
    </p>

    <h2 id="training-data">What code does GitHub Copilot learn from?</h2>
    <p>
      The base Copilot model was trained on public code on GitHub through a cutoff
      date in early 2024 (specific cutoffs vary by underlying model). The training
      data includes permissive-license code (MIT, Apache 2.0, BSD) plus some
      copyleft code (GPL).
    </p>
    <p>
      The copyright + license question is genuinely contested:
    </p>
    <ul>
      <li>
        Class-action lawsuits filed in 2022-2024 around copyright + DMCA. Most
        substantive claims either dismissed or reduced; a few proceeding through
        2026 courts.
      </li>
      <li>
        GitHub provides IP indemnification for Business + Enterprise customers —
        if Copilot output triggers a copyright claim, GitHub defends.
      </li>
      <li>
        Practical advice: don&rsquo;t use Copilot output for code you&rsquo;ll
        copyright-register without independent review. For typical commercial
        software, the indemnification + your editing makes this a non-issue.
      </li>
    </ul>

    <h2 id="broken-code">What happens if Copilot writes code that breaks your app?</h2>
    <p>
      You&rsquo;re responsible for the code you ship — Copilot or no Copilot. The
      practical implications:
    </p>
    <ul>
      <li>
        <strong>Liability for production outages:</strong> with you. Same as any code
        from any source. Copilot suggestions don&rsquo;t come with a warranty.
      </li>
      <li>
        <strong>Code review still required.</strong> Treat Copilot suggestions like
        a junior dev&rsquo;s PR — review before merging, run tests, verify edge
        cases.
      </li>
      <li>
        <strong>Test coverage matters more.</strong> AI-generated code can be subtly
        wrong in ways human-written code rarely is (e.g. confidently wrong about
        an API). Tests catch these.
      </li>
      <li>
        <strong>Audit trails.</strong> If you adopt Copilot in regulated environments,
        keep records of which suggestions were accepted vs modified vs rejected.
        Helps with future incident analysis.
      </li>
    </ul>
    <p>
      Code-quality research (GitClear 2024) shows AI-assisted code has more churn
      and slightly more duplication than hand-written code. Counter the tendency
      with strong code review + test culture.
    </p>
  </>
);

export const cta = {
  label: "Run Copilot ROI for your team",
  targetSlug: "github-copilot-roi-calculator",
};

export const faq = [
  {
    q: "GitHub Copilot security: is my code safe?",
    a: "Code is sent to GitHub for inference (encrypted in transit). Business + Enterprise opt out of training-data use; Individual tier varies. Business + Enterprise have stricter retention. For high-sensitivity codebases, Enterprise zero-retention mode or self-hosted alternatives (Codeium, Tabnine, Continue with local models).",
  },
  {
    q: "Does GitHub Copilot require an internet connection?",
    a: "Yes. Inference happens on GitHub's servers. Local-only alternatives (Continue.dev with Ollama, Tabnine self-hosted, Cursor with local models) require beefy GPU + significant disk space for weights. Quality is below GPT-4-class but improving.",
  },
  {
    q: "What code does GitHub Copilot learn from?",
    a: "Public code on GitHub through early-2024 cutoff. Includes permissive-license + some copyleft. Class-action lawsuits 2022-2024 mostly dismissed or reduced; some proceeding. Business + Enterprise customers get IP indemnification — GitHub defends if output triggers a claim.",
  },
  {
    q: "What if Copilot writes code that breaks my app?",
    a: "You're responsible for code you ship — Copilot or otherwise. Same review process. Tests matter more (AI code can be confidently wrong about APIs in ways human code rarely is). Track audit trails in regulated environments.",
  },
];
