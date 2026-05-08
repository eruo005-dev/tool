/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;What's the cheapest way to track candidates without paying for an ATS?&rdquo;
      shows up in <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>{" "}
      and <a href="https://www.reddit.com/r/smallbusiness/" rel="noreferrer">r/smallbusiness</a>{" "}
      every week. The honest answer: there's a real free stack that handles 80% of what
      Greenhouse Essential or Workable does — for 5-to-20-req teams. Above that volume,
      stitching free tools costs more than the subscription.
    </p>
    <p>
      This guide is the full stack. Each pick is a tool we've used or stress-tested,
      with the limit you'll hit and what to swap to when you do. Use the{" "}
      <a href="/tools/free-recruiting-tool-true-cost-calculator">true cost calculator</a>{" "}
      to find your own breakeven point.
    </p>
  </>
);

export const toc = [
  { id: "stack", label: "The 6-tool free stack" },
  { id: "pipeline", label: "Candidate pipeline" },
  { id: "screening", label: "Resume screening" },
  { id: "scheduling", label: "Interview scheduling" },
  { id: "outreach", label: "Outreach + sourcing" },
  { id: "metrics", label: "Metrics + reporting" },
  { id: "limits", label: "When to graduate" },
];

export const body = (
  <>
    <h2 id="stack">The 6-tool free stack (zero subscription)</h2>
    <p>
      Six tools, no paid tiers, no credit card. Plug them together and you have a working
      pipeline for a small team:
    </p>
    <ol>
      <li>
        <strong>Pipeline / candidate tracker:</strong>{" "}
        <a href="/tools/recruiting-pipeline-tracker">our recruiting pipeline tracker</a> or
        a Trello board with stage columns. We built ours specifically because Trello&rsquo;s
        free tier caps you at 10 boards and the per-card fields are limited.
      </li>
      <li>
        <strong>Resume screening:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">our resume keyword scorer</a> for
        match scores; for quick parsing without subscriptions, paste resumes into ChatGPT
        free or Claude free with a structured prompt.
      </li>
      <li>
        <strong>Interview scheduling:</strong> Calendly free (1 event type, unlimited
        bookings) or Google Calendar appointment slots (free with Google Workspace personal).
      </li>
      <li>
        <strong>Outreach:</strong> Gmail with mail merge via the Google Sheets +{" "}
        <code>GMass</code> free trial, or LinkedIn connect notes (no Recruiter seat).
      </li>
      <li>
        <strong>Job posting:</strong> Indeed free (organic), LinkedIn free (1 active job),
        ZipRecruiter free trial, then Google Jobs auto-aggregates anything with structured
        markup.
      </li>
      <li>
        <strong>Metrics:</strong> Google Sheets template — copy applicants per source,
        days-in-stage, offer-acceptance rate. We have a template in the metrics section
        below.
      </li>
    </ol>

    <h2 id="pipeline">Candidate pipeline (replaces: Workable Starter, Greenhouse Free Trial)</h2>
    <p>
      The hardest part of going stack-free is the pipeline view — the kanban-with-stages
      thing every paid ATS gives you. The two real free options:
    </p>
    <ul>
      <li>
        <strong>Trello:</strong> Free tier is fine. Make one board per role, columns =
        stages, cards = candidates. Limit: card-level fields are restricted, no automation
        on free, hits 10-board ceiling fast.
      </li>
      <li>
        <strong>Notion free:</strong> Database view with a stage select. Better
        custom-field support than Trello, but the unlock for &ldquo;timeline&rdquo; views
        is a paid feature.
      </li>
      <li>
        <strong>Our pipeline tracker:</strong> 6 fixed stages, in-stage day timer, CSV
        export. Single-machine (browser localStorage) — no team sync. The right pick if
        one person owns hiring; not the right pick for two coordinated recruiters.
      </li>
    </ul>

    <h2 id="screening">Resume screening (replaces: Jobscan, Teal premium)</h2>
    <p>
      Two complementary tools cover most of what paid resume-screen tools do:
    </p>
    <ol>
      <li>
        <strong>Keyword match score:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">our scorer</a> tokenizes the JD and
        shows what's in the resume vs missing. Free, browser-only, no monthly scan cap.
      </li>
      <li>
        <strong>Structured prompt screening:</strong> paste 10 resumes into a ChatGPT or
        Claude free conversation and ask: &ldquo;Score each on a 1-5 scale for [3 specific
        requirements from JD]. Output as a table.&rdquo; Faster than reading 10 PDFs cold.
        Don&rsquo;t paste anything you wouldn&rsquo;t want logged — both providers may
        retain prompts on free tiers.
      </li>
    </ol>
    <p>
      What this stack <em>can&rsquo;t</em> do: skill normalization (&ldquo;React.js&rdquo;
      = &ldquo;ReactJS&rdquo;), education extraction, work-authorization checks. If your
      compliance regime requires those signals, you've outgrown free tools.
    </p>

    <h2 id="scheduling">Interview scheduling (replaces: GoodTime, Calendly Pro)</h2>
    <p>
      Calendly free is enough for solo recruiters: one event type, your link, candidates
      pick a slot. The limits hurt with team interviews:
    </p>
    <ul>
      <li>
        <strong>Round-robin:</strong> not on free. Workaround: Google Calendar &ldquo;find
        a time&rdquo; with multiple invitees + send the candidate 3 specific options.
      </li>
      <li>
        <strong>Buffer time:</strong> not on free. Workaround: bake it into your
        availability windows manually (set Calendly to 9–10 AM and 11 AM–12 PM
        separately).
      </li>
      <li>
        <strong>Multi-stage scheduling:</strong> not on free. Workaround: send one link
        per stage; tag the booked event in your pipeline tracker.
      </li>
    </ul>

    <h2 id="outreach">Outreach + sourcing (replaces: LinkedIn Recruiter)</h2>
    <p>
      LinkedIn Recruiter starts at ~$170/seat/month. The free workarounds:
    </p>
    <ul>
      <li>
        <strong>Free LinkedIn search + connect notes:</strong> 100 searches/month soft cap;
        connect requests with a personalized note get accepted at ~30% (the trick:
        reference one specific post or project of theirs).
      </li>
      <li>
        <strong>Boolean searches in Google:</strong>{" "}
        <code>site:linkedin.com/in/ "react developer" "san francisco"</code> surfaces
        public profiles outside LinkedIn's gated search.
      </li>
      <li>
        <strong>GitHub for engineering roles:</strong> public commits are public; search
        by language + activity.
      </li>
      <li>
        <strong>Slack communities:</strong> niche dev/design Slacks have job boards.
        #hiring channels in Designer Hangout, Reactiflux, etc.
      </li>
    </ul>
    <p>
      For the sourcing playbook in detail, see our{" "}
      <a href="/guides/sourcing-candidates-without-linkedin-recruiter">
        sourcing without LinkedIn Recruiter
      </a>{" "}
      guide.
    </p>

    <h2 id="metrics">Metrics + reporting (replaces: Lever Analytics, Greenhouse Insights)</h2>
    <p>
      The 4 metrics that actually matter for small teams:
    </p>
    <ul>
      <li>
        <strong>Applicants per source:</strong> where are good candidates coming from?
      </li>
      <li>
        <strong>Stage conversion:</strong> phone-to-onsite %, onsite-to-offer %, offer
        accept rate.
      </li>
      <li>
        <strong>Days-in-stage:</strong> if candidates sit in &ldquo;phone screen&rdquo; for
        14 days, your scheduling is the bottleneck.
      </li>
      <li>
        <strong>Time-to-hire:</strong> sourced → offer accepted, in calendar days.
      </li>
    </ul>
    <p>
      Our pipeline tracker exports CSV with all four. Drop it into a Google Sheet pivot
      table, refresh weekly. See{" "}
      <a href="/guides/recruiting-metrics-on-a-free-spreadsheet">
        recruiting metrics on a free spreadsheet
      </a>{" "}
      for the full template.
    </p>

    <h2 id="limits">When to graduate to paid</h2>
    <p>
      The free stack breaks down at predictable thresholds:
    </p>
    <ul>
      <li>
        <strong>~15 active reqs.</strong> Trello hits its board cap; Notion gets messy.
      </li>
      <li>
        <strong>2+ recruiters working in parallel.</strong> No real-time sync between
        people without a shared backend.
      </li>
      <li>
        <strong>Compliance / EEO reporting.</strong> Free tools don&rsquo;t track
        protected-class data; paid ATSes do, with audit trails.
      </li>
      <li>
        <strong>Candidate self-service portal.</strong> &ldquo;Where am I in the process?&rdquo; emails get
        burdensome above ~50 active candidates.
      </li>
    </ul>
    <p>
      Run the{" "}
      <a href="/tools/free-recruiting-tool-true-cost-calculator">
        true cost calculator
      </a>{" "}
      to see when paid wins for your numbers — typically around 8–12 hires/year, depending
      on hiring-manager hourly rate.
    </p>
  </>
);

export const cta = {
  label: "Start tracking candidates now (free, no account)",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "What's the single most-recommended free recruiting tool?",
    a: "Trello for the pipeline view; the recurring complaint is the 10-board cap. For solo recruiters our pipeline tracker is denser since it has fixed hiring stages and an in-stage day counter built in.",
  },
  {
    q: "Is there a fully free ATS that handles compliance?",
    a: "No. Every ATS that handles EEO reporting, OFCCP audit trails, and structured-data candidate records charges. Below those compliance triggers, free tools are fine; above them, paid is the only legal path.",
  },
  {
    q: "Will Google penalize me for posting jobs on free job boards?",
    a: "No — Google Jobs aggregates structured-data postings regardless of paid vs free placement. Use JobPosting JSON-LD on your careers page and you'll get indexed.",
  },
  {
    q: "Can I use Trello + Calendly + Gmail and call it an ATS?",
    a: "Functionally for a 5-req team, yes. Legally if you're hiring at scale in regulated industries (finance, healthcare, government contracting), no — you need an audit trail.",
  },
];
