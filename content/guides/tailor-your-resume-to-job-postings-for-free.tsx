/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Tailoring&rdquo; your resume isn&rsquo;t about rewording bullets — it&rsquo;s
      about making the keywords, titles, and concrete experience match what the JD is
      asking for, while staying truthful. Paid tools (Teal AI, Jobscan Premium, ResumeWorded)
      do this for $9–50/month. The free workflow with our keyword scorer + a generic <a href="/learn/llm">LLM</a>
      hits ~90% of the same outcome.
    </p>
    <p>
      Below: the exact 5-step workflow, the prompt that does the job, and the questions
      to ask yourself before submitting.
    </p>
  </>
);

export const toc = [
  { id: "workflow", label: "The 5-step free workflow" },
  { id: "prompt", label: "The exact LLM prompt" },
  { id: "validation", label: "Validating with the keyword scorer" },
  { id: "honest", label: "How to tailor without lying" },
  { id: "stuffing", label: "Why keyword stuffing backfires" },
];

export const body = (
  <>
    <h2 id="workflow">The 5-step free workflow (15 minutes per JD)</h2>
    <ol>
      <li>
        <strong>Score the baseline.</strong> Paste your generic resume + the JD into{" "}
        <a href="/tools/resume-keyword-match-scorer">our keyword scorer</a>. Note the
        score (it&rsquo;ll usually be 30–50% on a generic resume).
      </li>
      <li>
        <strong>Identify the gaps.</strong> The &ldquo;Missing&rdquo; list shows you
        which JD keywords aren&rsquo;t in your resume. Sort by which ones you actually
        have experience with.
      </li>
      <li>
        <strong>Run the LLM tailoring prompt.</strong> Paste both into ChatGPT or Claude
        free with the prompt below. Get back a rewritten experience section.
      </li>
      <li>
        <strong>Edit for voice.</strong> AI output reads slightly off — fix 1–2 phrases
        per bullet to sound like you. Never send raw AI output.
      </li>
      <li>
        <strong>Re-score.</strong> Paste tailored resume + JD back into the keyword
        scorer. Target: 70%+ match. If lower, iterate.
      </li>
    </ol>

    <h2 id="prompt">The exact LLM prompt</h2>
    <p>Copy this into ChatGPT or Claude free:</p>
    <pre><code>{`I'm applying for the role of [paste role title] at [paste company].

Here's the full job description:

[paste JD]

Here's my current resume:

[paste resume]

Rewrite the experience section of my resume so it:
1. Uses the verbs and skill terms from the JD where they
   match real things I did
2. Surfaces 2 bullets per role most relevant to this JD
3. Keeps total length to one page
4. Does NOT invent skills or experience I don't have

For each suggested bullet, briefly note (in parentheses)
which JD requirement it addresses. I'll edit the
parentheticals out before submitting.`}</code></pre>
    <p>
      The parentheticals trick is the key — it forces the LLM to map every bullet to a
      specific JD requirement, which makes it easy for you to verify nothing is fabricated.
    </p>

    <h2 id="validation">Validating with the keyword scorer</h2>
    <p>
      Why re-score after tailoring:
    </p>
    <ul>
      <li>
        <strong>You catch hallucinations.</strong> If the LLM added &ldquo;Kubernetes
        experience&rdquo; that you don&rsquo;t have, the scorer shows it as a match —
        prompting you to remove it.
      </li>
      <li>
        <strong>You quantify the improvement.</strong> Score went from 35% to 75%? You
        passed the JD&rsquo;s automated screen. Stuck at 50%? The gap is a real
        skills mismatch — apply anyway if you have transferable experience but expect a
        tougher screen.
      </li>
      <li>
        <strong>You can iterate fast.</strong> Edit a bullet, re-score in 5 seconds.
        That&rsquo;s the loop paid tools charge for.
      </li>
    </ul>

    <h2 id="honest">How to tailor without lying</h2>
    <p>
      The line between &ldquo;tailoring&rdquo; and &ldquo;lying&rdquo; is which words you
      use to describe what you actually did. Three rules:
    </p>
    <ol>
      <li>
        <strong>Same noun, different framing is fine.</strong> If you built something with
        &ldquo;React&rdquo; and the JD asks for &ldquo;ReactJS,&rdquo; absolutely use the
        JD&rsquo;s phrasing.
      </li>
      <li>
        <strong>Adjacent skill is sometimes fine.</strong> If you used Vue and the JD asks
        for React, you can write &ldquo;built component-based UIs in Vue (similar to React/Angular)&rdquo;
        — honest, accurate, surfaces the keyword.
      </li>
      <li>
        <strong>Net-new skills are not fine.</strong> Never list a skill or tool you
        haven&rsquo;t used. The phone screen will catch it; the offer will get withdrawn.
      </li>
    </ol>

    <h2 id="stuffing">Why keyword stuffing backfires</h2>
    <p>
      The &ldquo;invisible white text with keywords&rdquo; trick still gets discussed on
      Reddit. Here&rsquo;s why it doesn&rsquo;t work:
    </p>
    <ul>
      <li>
        Modern ATS systems flag keyword density anomalies — a resume with 50 instances of
        &ldquo;Python&rdquo; gets demoted, not promoted.
      </li>
      <li>
        Recruiters open the resume in their viewer, which usually renders all text. White-on-white
        becomes visible the moment they hit Cmd+A or print.
      </li>
      <li>
        Even if it gets through automated screen, it fails on human review — which is the
        next step in every funnel that matters.
      </li>
    </ul>
    <p>
      The honest tailoring workflow above gets you to the same match score without the
      risk. Spend 15 minutes per JD; submit fewer, better resumes; reply rate goes up
      5–10× per public recruiter data.
    </p>
  </>
);

export const cta = {
  label: "Score your tailored resume (free, unlimited)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "How long should I spend tailoring each resume?",
    a: "10-15 minutes is the sweet spot. Less and you don't address the gaps; more and you're spinning your wheels. The LLM workflow above hits that target.",
  },
  {
    q: "Should I customize my resume for every single application?",
    a: "For roles you actually want, yes. For spray applications to fill the funnel, a generic resume is fine — but expect a much lower reply rate. The math: 5 tailored apps with 1 reply beats 50 generic with 0-1 replies.",
  },
  {
    q: "Is using AI to tailor my resume considered cheating?",
    a: "Not in any sense employers care about. AI rewrites your real experience to match the JD's terms — recruiters and hiring managers do the same when they edit candidate write-ups for hiring committees. What matters is whether the underlying experience is real.",
  },
  {
    q: "What's a 'good' keyword match score?",
    a: "70-85% is the sweet spot. Below 60% you'll struggle past automated screening; above 90% it starts to look like keyword stuffing to a human reviewer. The goal is 'clearly relevant' not 'perfect overlap.'",
  },
];
