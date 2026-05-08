/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Are free ATS tools any good?&rdquo; is one of the most-asked questions in{" "}
      <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>.
      The marketing answer (&ldquo;yes!&rdquo;) and the practitioner answer
      (&ldquo;sort of&rdquo;) diverge. We pulled the spec sheets, checked the limits, and
      wrote down what each free tier actually does — including resume parsing, screening,
      and the gotchas that hide in the fine print.
    </p>
    <p>
      Three buckets: tier-limited freemium ATSes, fully-free open-source self-hosted, and
      &ldquo;build your own with off-the-shelf parts.&rdquo; Each has a real use case and a
      real failure mode.
    </p>
  </>
);

export const toc = [
  { id: "freemium", label: "Freemium ATSes (with limits)" },
  { id: "oss", label: "Open-source self-hosted" },
  { id: "diy", label: "DIY: build your own free stack" },
  { id: "parsing", label: "Resume parsing for free" },
  { id: "accuracy", label: "Are free screeners actually accurate?" },
];

export const body = (
  <>
    <h2 id="freemium">Freemium ATSes — what they actually give you</h2>
    <p>
      The popular &ldquo;free ATS&rdquo; tools are freemium with hard caps. The limits as
      of mid-2026:
    </p>
    <ul>
      <li>
        <strong>Recruitee Free:</strong> not a real free tier anymore — only a free trial.
      </li>
      <li>
        <strong>Recruiterflow Free trial:</strong> 14 days then paid.
      </li>
      <li>
        <strong>Manatal Free trial:</strong> 14 days then $15/seat.
      </li>
      <li>
        <strong>Zoho Recruit Free Forever:</strong> 1 active job, 1 user, 100 candidates,
        1 GB storage. Real free tier; usable for solo recruiters at low volume. The
        upgrade is at $25/seat which is competitive.
      </li>
      <li>
        <strong>Freshteam Free:</strong> deprecated in 2024 — Freshworks killed the free
        plan.
      </li>
      <li>
        <strong>SmartRecruiters Free:</strong> 5 active jobs, 1 user, candidate management,
        career site. Genuinely free, but the upsell is aggressive — you'll be in the
        sales-call funnel after week 2.
      </li>
    </ul>
    <p>
      Verdict: <strong>Zoho Recruit Free</strong> and <strong>SmartRecruiters Free</strong>{" "}
      are the only two real free-forever options as of 2026. Zoho is solo-friendly,
      SmartRecruiters is multi-job-friendly. Both gate stage automation and reporting
      behind paid tiers.
    </p>

    <h2 id="oss">Open-source self-hosted (free if you can host)</h2>
    <p>
      Self-hosted means you run the software on your own server. Requires technical
      ability or a developer on the team:
    </p>
    <ul>
      <li>
        <strong>Open-Source ATS / OSCATS:</strong> oldest. Active. PHP-based. Tracks jobs,
        candidates, applications. UI is dated. Realistic if you have a sysadmin.
      </li>
      <li>
        <strong>Calibre / Recruiteefy / forks:</strong> various GitHub projects, mostly
        unmaintained. Read commit recency before adopting.
      </li>
      <li>
        <strong>Notion / Airtable templates:</strong> not technically an ATS but the
        community-built templates have stage-tracking, application forms, and reports out
        of the box. Closest to &ldquo;free ATS that actually works.&rdquo;
      </li>
    </ul>
    <p>
      The open-source ATS option mostly attracts hobbyists. For a real working team it&rsquo;s
      easier to use freemium tier limits + spreadsheet overflow than to maintain self-hosted.
    </p>

    <h2 id="diy">DIY: building a free stack from off-the-shelf parts</h2>
    <p>
      The most common &ldquo;free ATS&rdquo; in practice is the stitched stack:
    </p>
    <ol>
      <li>
        <strong>Pipeline:</strong>{" "}
        <a href="/tools/recruiting-pipeline-tracker">our free tracker</a> (or Trello /
        Notion).
      </li>
      <li>
        <strong>Resume screening:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">our keyword scorer</a>.
      </li>
      <li>
        <strong>Application form:</strong> Google Form → Sheet, or Typeform free tier (10
        responses/month is too low for hiring; use Tally free instead).
      </li>
      <li>
        <strong>Scheduling:</strong> Calendly free.
      </li>
      <li>
        <strong>Email:</strong> Gmail with templates (canned responses).
      </li>
    </ol>
    <p>
      Total cost: $0/month. Cost in time: 1–2 hours/week of stitching for a 3-req team.
      See our <a href="/tools/free-recruiting-tool-true-cost-calculator">true cost calculator</a>{" "}
      for whether that math works for you.
    </p>

    <h2 id="parsing">Free resume parsing — what works, what doesn't</h2>
    <p>
      &ldquo;Resume parsing&rdquo; means turning a PDF/Word resume into structured fields
      (name, email, work history, skills). Paid ATSes do this with vendors like Sovren or
      RChilli. Free options:
    </p>
    <ul>
      <li>
        <strong>LLMs (ChatGPT/Claude/Gemini free):</strong> paste resume text, ask for
        structured output (JSON schema). 90% accurate on standard formats. Fails on
        2-column resumes, scanned PDFs, weird fonts.
      </li>
      <li>
        <strong>Affinda Free Tier:</strong> 100 free parses/month. Real ATS-quality
        parser. The honest free option for low volume.
      </li>
      <li>
        <strong>Open-source parsers (resume-parser on PyPI etc.):</strong> brittle on
        anything but plain-text resumes. Hard to recommend unless you're a developer
        comfortable maintaining a Python pipeline.
      </li>
      <li>
        <strong>Apache Tika:</strong> free OCR + text extraction (not parsing). Pair with
        an <a href="/learn/llm">LLM</a> for structuring.
      </li>
    </ul>

    <h2 id="accuracy">Are free resume screeners actually accurate?</h2>
    <p>
      Pretrained AI models (GPT-4, Claude, Gemini) score resumes against JDs at roughly
      75–85% agreement with human screeners on tech roles, per published evaluations
      (the field is moving — newer benchmarks vary). The failure modes are consistent:
    </p>
    <ul>
      <li>
        <strong>False positives on keyword stuffing.</strong> A resume that pads
        &ldquo;React, Redux, Next.js&rdquo; everywhere will score well even if the
        candidate has barely used them.
      </li>
      <li>
        <strong>False negatives on transferable skills.</strong> A 5-year backend engineer
        applying for a frontend role gets scored low because the JD keywords aren&rsquo;t
        in the resume — but they could ramp.
      </li>
      <li>
        <strong>Title mismatch.</strong> &ldquo;Senior Software Engineer&rdquo; at a
        startup vs Google has different meanings; the screener doesn&rsquo;t know.
      </li>
    </ul>
    <p>
      The right way to use any screener (free or paid): as a triage tool, not a decision
      tool. A 70%+ score is &ldquo;worth a phone screen&rdquo;; a 30% score is
      &ldquo;skip unless you have a referral.&rdquo; Never reject without a human
      reviewing the borderline cases.
    </p>
  </>
);

export const cta = {
  label: "Try our free resume keyword scorer",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "What's the best fully-free ATS for a 1-person recruiting team?",
    a: "Zoho Recruit Free Forever — 1 active job, 1 user, 100 candidates, decent UI. Below that volume our free pipeline tracker may be enough; above it, you'll need to upgrade Zoho or move to SmartRecruiters Free.",
  },
  {
    q: "Are free resume parsers accurate enough to skip human review?",
    a: "No, and they shouldn't be. Use parsers to extract structured data; use humans (or AI as a second pass) for the actual judgment call. Affinda's free tier is the best parsing-only option at low volume.",
  },
  {
    q: "Can ChatGPT free actually screen resumes?",
    a: "For triage, yes. Paste 5-10 resumes plus the JD with a structured prompt ('rank 1-5 against these specific requirements, output a table'). For final hiring decisions, no — same caution as any screener.",
  },
  {
    q: "Is open-source self-hosted ATS a real option?",
    a: "Only if you have a sysadmin and like maintaining infrastructure. For most teams, freemium with a spreadsheet overflow is less hassle than running an OSS ATS yourself.",
  },
];
