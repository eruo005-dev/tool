/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The job-search-tool subscription bundle has gotten ridiculous: $20/mo for Jobscan,
      $9/mo for Teal, $30/mo for Huntr, plus LinkedIn Premium at $40. That&rsquo;s $1,200
      a year on top of being unemployed. Almost every paid feature has a free or
      browser-only alternative — this guide is the full job-search stack with no
      subscriptions.
    </p>
    <p>
      Coverage: keyword scoring, application tracking, automated job aggregation, resume
      tailoring, and AI-assisted research. We use everything below ourselves.
    </p>
  </>
);

export const toc = [
  { id: "stack", label: "The 7-tool free stack" },
  { id: "tracking", label: "Application tracking" },
  { id: "tailoring", label: "Resume tailoring" },
  { id: "ai", label: "AI tools for job search" },
  { id: "automation", label: "Automating job applications" },
  { id: "alerts", label: "Job alerts + aggregators" },
];

export const body = (
  <>
    <h2 id="stack">The 7-tool free stack</h2>
    <ol>
      <li>
        <strong>Keyword match scoring:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">our scorer</a> — unlimited scans, no
        account.
      </li>
      <li>
        <strong>Application tracker:</strong> our <a href="/tools/recruiting-pipeline-tracker">recruiting pipeline tracker</a> reused as a
        job-search board (rename stages: Applied / OA / Screen / Onsite / Offer), or a
        Google Sheet with company / role / link / status / next-action columns.
      </li>
      <li>
        <strong>Resume tailoring:</strong> ChatGPT free or Claude free with a structured
        prompt (template below).
      </li>
      <li>
        <strong>Job aggregation:</strong> Indeed RSS feeds + LinkedIn alerts + Google
        Jobs alerts. All free, all email.
      </li>
      <li>
        <strong>Salary research:</strong> levels.fyi (free, mostly tech), Glassdoor
        (free with limits), Payscale free salary report.
      </li>
      <li>
        <strong>Hiring manager finding:</strong> LinkedIn search + RocketReach free trial
        for one-off email lookups.
      </li>
      <li>
        <strong>Practice interviews:</strong> Pramp (free, peer-to-peer for tech),
        ChatGPT/Claude voice mode for behavioral.
      </li>
    </ol>

    <h2 id="tracking">Application tracking (replaces: Huntr Pro at $30/mo)</h2>
    <p>
      Huntr&rsquo;s headline feature is a kanban board with applications, contacts, and
      interview rounds. The free tier limits you to 40 applications which is laughable for
      a real job search. The free alternatives:
    </p>
    <ul>
      <li>
        <strong>Spreadsheet:</strong> 6 columns (company, role, link, applied date,
        status, next-action). 5 minutes to build, infinitely scalable, sortable. The
        people who get jobs faster aren&rsquo;t using fancier tools — they&rsquo;re
        consistent at logging.
      </li>
      <li>
        <strong>Our pipeline tracker:</strong> rename stages to job-search flow. Has
        in-stage day counter so you can see which apps have gone cold.
      </li>
      <li>
        <strong>Notion free:</strong> if you want fancier views (timeline, calendar) and
        already use Notion. Database template gallery has good starting points.
      </li>
    </ul>

    <h2 id="tailoring">Resume tailoring (replaces: Teal AI Resume at $9/mo)</h2>
    <p>
      The exact prompt that does what Teal does, in any free <a href="/learn/llm">LLM</a>:
    </p>
    <pre><code>{`I'm applying for [role] at [company]. Here's the JD:

[paste JD]

Here's my current resume:

[paste resume]

Rewrite the experience section to:
1. Use the verbs and skill terms from the JD
2. Highlight 2 bullets per role most relevant to this JD
3. Keep total length under one page
4. Don't lie about anything not in my original`}</code></pre>
    <p>
      Run that, then validate the output with our{" "}
      <a href="/tools/resume-keyword-match-scorer">keyword scorer</a>. If you score
      &gt;75% match, you're done. If &lt;60%, the gap is real skills, not phrasing — apply
      anyway if you have transferable experience, but expect a tougher screen.
    </p>

    <h2 id="ai">AI tools for job search (replaces: paid AI job-hunters)</h2>
    <p>
      A wave of paid &ldquo;AI applies for you&rdquo; services launched in 2024–2025
      (LazyApply, Sonara, Massive) at $40–100/mo. Most of them just spray-apply, which
      tanks your reply rate. The genuine AI use cases that move the needle:
    </p>
    <ul>
      <li>
        <strong>Company research summaries:</strong> &ldquo;Summarize [company] in 200
        words: products, recent funding, engineering culture (from Glassdoor reviews +
        public posts).&rdquo; Saves 20 minutes per interview prep.
      </li>
      <li>
        <strong>Mock interview practice:</strong> ChatGPT voice mode for behavioral
        practice; ChatGPT or Claude text for system design rehearsal. Free, infinite
        sessions.
      </li>
      <li>
        <strong>Cover letter drafts:</strong> 80% of a usable cover letter from a
        well-prompted LLM. Edit for voice; never send raw output.
      </li>
      <li>
        <strong>Salary negotiation scripts:</strong> &ldquo;Write a polite negotiation
        email asking for $X more, citing [reason]. Tone: confident, not entitled.&rdquo;
      </li>
    </ul>
    <p>
      What AI tools cannot replace: the actual application. You will write better tailored
      apps than auto-spray.
    </p>

    <h2 id="automation">Automating applications (the honest answer)</h2>
    <p>
      The Reddit thread that asks &ldquo;how do I automate job applications for
      free?&rdquo; appears every two weeks in <a href="https://www.reddit.com/r/jobsearchhacks/" rel="noreferrer">r/jobsearchhacks</a>.
      The honest answer most people don&rsquo;t want to hear: you can&rsquo;t automate
      good applications. The auto-apply Chrome extensions (LazyApply, Simplify, etc.) push
      your resume into 100 jobs in an evening — and your reply rate craters because
      nothing is tailored.
    </p>
    <p>
      What actually scales:
    </p>
    <ul>
      <li>
        <strong>Apply to 5 jobs deeply</strong> (15-min tailoring each = 75 min total) and
        get 1 reply.
      </li>
      <li>
        <strong>Auto-apply to 100 jobs</strong> with a generic resume and get 0–1 replies.
      </li>
    </ul>
    <p>
      The math has been measured by multiple recruiters publicly. Tailored apps get 5–10×
      reply rates of generic apps. Use AI tools to make tailoring faster — don&rsquo;t use
      them to skip tailoring.
    </p>

    <h2 id="alerts">Job alerts + aggregators (replaces: paid job-board memberships)</h2>
    <p>
      Set up these alerts on day 1; they save you from refreshing job sites:
    </p>
    <ul>
      <li>
        <strong>LinkedIn Job Alerts:</strong> save up to 20 search queries; daily emails.
      </li>
      <li>
        <strong>Indeed Email Alerts:</strong> RSS feeds also available — pipe into your
        feed reader if you don&rsquo;t want more email.
      </li>
      <li>
        <strong>Google Jobs:</strong> from search results, &ldquo;Set up alerts&rdquo; for
        any saved query.
      </li>
      <li>
        <strong>Niche boards:</strong> Wellfound (startups), Hacker News &ldquo;Who is
        hiring&rdquo; threads, RemoteOK, We Work Remotely — many have free RSS or daily
        digest emails.
      </li>
    </ul>
    <p>
      Aggregators (LinkedIn, Indeed, Google) catch ~80% of postings. The remaining 20% is
      where competition is lowest — niche boards and direct company careers pages.
    </p>
  </>
);

export const cta = {
  label: "Score your resume against any JD (free)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "What's the single best free tool for job search?",
    a: "A spreadsheet. Sounds boring but it's the highest-leverage thing — track every applied job with date, status, next action. People who get jobs faster aren't using fancier tools; they're consistent at logging.",
  },
  {
    q: "Is there a free version of Jobscan that's actually good?",
    a: "Our resume keyword scorer does the same core function (top-N JD keyword match) with no scan cap. Jobscan layers in title and education matching that ours doesn't, so use both — start with ours for unlimited iteration, end with one Jobscan free scan to validate.",
  },
  {
    q: "Should I pay for LinkedIn Premium?",
    a: "Not for most job searches. The InMail credits are useful for cold-reaching hiring managers but most of those messages get ignored anyway. The 'who viewed your profile' feature is interesting but not actionable. Save the $40/month for a course or coffee chats.",
  },
  {
    q: "Do AI auto-applier tools work?",
    a: "Briefly, badly. They get your resume into more jobs but your reply rate drops 5–10× because nothing is tailored. Use AI to speed up tailoring instead.",
  },
];
