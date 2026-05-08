/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;How do I track recruiting metrics without buying analytics software?&rdquo; is
      mostly a vocabulary problem. The 4 metrics that actually drive hiring decisions all
      fit in a single Google Sheet, can be updated in 10 minutes a week, and tell you more
      than the dashboards built into paid ATSes.
    </p>
    <p>
      This guide is the spreadsheet template + the formulas + which numbers matter for a
      small team. Plus a candidate-database structure that doubles as a CRM, all on free
      Google Sheets.
    </p>
  </>
);

export const toc = [
  { id: "metrics", label: "The 4 metrics that matter" },
  { id: "template", label: "The spreadsheet template" },
  { id: "candidate-db", label: "Candidate database (CRM lite)" },
  { id: "automation", label: "Cheap automation" },
  { id: "review", label: "Weekly review checklist" },
];

export const body = (
  <>
    <h2 id="metrics">The 4 metrics that matter</h2>
    <p>
      Recruiting analytics tools surface 30+ metrics. For a 5-to-20-req team only four
      drive decisions:
    </p>
    <ol>
      <li>
        <strong>Source quality (applicants → hires by source):</strong> tells you which
        boards or referral channels to double down on. Most companies waste hours posting
        on platforms that produce zero hires for years.
      </li>
      <li>
        <strong>Stage conversion rates:</strong> phone-to-onsite %, onsite-to-offer %,
        offer-accept %. A drop in any one tells you where your process is broken.
      </li>
      <li>
        <strong>Days-in-stage:</strong> the diagnostic for &ldquo;why are candidates
        ghosting?&rdquo; Usually because someone sat on them for 9 days mid-pipeline.
      </li>
      <li>
        <strong>Time-to-hire (sourced → offer accepted):</strong> the only top-line metric
        that matters. SHRM 2024 median: 44 days. If you&rsquo;re above 60, something is
        broken.
      </li>
    </ol>
    <p>
      That&rsquo;s it. Cost-per-hire, applicant volume, candidate satisfaction scores —
      noise unless you&rsquo;re a 50+ person team.
    </p>

    <h2 id="template">The spreadsheet template</h2>
    <p>
      Build it yourself in Google Sheets in 30 minutes. Two tabs:
    </p>

    <h3>Tab 1: Candidates</h3>
    <p>Columns:</p>
    <ul>
      <li><code>Name</code></li>
      <li><code>Role</code></li>
      <li><code>Source</code> (LinkedIn, referral, Indeed, etc.)</li>
      <li><code>Sourced date</code></li>
      <li><code>Current stage</code> (Sourced / Phone / Onsite / Offer / Hired / Rejected)</li>
      <li><code>Stage entered date</code></li>
      <li><code>Days in stage</code> (formula: <code>=TODAY() - F2</code>)</li>
      <li><code>Outcome</code> (Hired / Rejected / Withdrew / Active)</li>
      <li><code>Notes</code></li>
    </ul>
    <p>
      The export from our{" "}
      <a href="/tools/recruiting-pipeline-tracker">recruiting pipeline tracker</a>{" "}
      matches this exactly — paste the CSV in and you&rsquo;re live.
    </p>

    <h3>Tab 2: Metrics dashboard</h3>
    <p>Formulas (assuming the Candidates tab is named &ldquo;Candidates&rdquo;):</p>
    <pre><code>{`Source quality (per source):
  =COUNTIFS(Candidates!C:C, "LinkedIn", Candidates!H:H, "Hired") /
   COUNTIF(Candidates!C:C, "LinkedIn")

Phone-to-onsite conversion:
  =COUNTIFS(Candidates!E:E, "Onsite") /
   (COUNTIFS(Candidates!E:E, "Onsite") + COUNTIFS(Candidates!E:E, "Phone"))

Average days-in-stage by stage:
  =AVERAGEIFS(Candidates!G:G, Candidates!E:E, "Phone")

Time-to-hire (avg):
  Add a "Hired date" column, then =AVERAGE(Hired_date - Sourced_date)`}</code></pre>
    <p>
      Update once a week. Keeps you honest about which sources work and where the funnel
      leaks.
    </p>

    <h2 id="candidate-db">Candidate database — the free CRM-lite</h2>
    <p>
      Building a candidate database is just adding more columns to the candidates tab and
      using filters. Recommended additions:
    </p>
    <ul>
      <li><code>Skills tags</code> (comma-separated; filter with <code>regex</code>)</li>
      <li><code>Years of experience</code></li>
      <li><code>Salary expectation</code></li>
      <li><code>Available date</code></li>
      <li><code>Last contact date</code></li>
      <li><code>Reach-out cadence</code> (every 60 days, 90 days, etc.)</li>
    </ul>
    <p>
      For 100–500 candidates this is fine. Above that, search performance degrades and
      you&rsquo;ll want a real database (Notion, Airtable, or eventually a CRM). Most
      small teams never get there.
    </p>

    <h2 id="automation">Cheap automation</h2>
    <p>
      Free things that save 30 minutes per week:
    </p>
    <ul>
      <li>
        <strong>Google Forms → Sheets:</strong> application form auto-populates the
        Candidates tab.
      </li>
      <li>
        <strong>Conditional formatting:</strong> highlight rows where days-in-stage &gt; 7,
        so stale candidates jump out visually.
      </li>
      <li>
        <strong>Apps Script for follow-ups:</strong> a 20-line script that sends a
        candidate-status email when stage changes. Runs free on Google Workspace personal.
      </li>
      <li>
        <strong>Slack webhook for new applications:</strong> Forms → Apps Script →
        webhook → posts to a #hiring channel.
      </li>
    </ul>

    <h2 id="review">Weekly review checklist (10 minutes)</h2>
    <p>Run every Monday morning:</p>
    <ol>
      <li>Sort by &ldquo;Days in stage&rdquo; descending. Anything &gt;7 days needs an action.</li>
      <li>Phone-to-onsite conversion this week vs last. Big drop → screening calls aren't filtering well.</li>
      <li>Source breakdown of new candidates. Two sources hot? Lean in. None? Refresh job postings.</li>
      <li>Time-to-hire average for last 5 closed reqs. Above 50 days → review where the friction is.</li>
    </ol>
  </>
);

export const cta = {
  label: "Pipeline tracker — exports straight to your spreadsheet",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "What's the simplest recruiting metric to track?",
    a: "Time-to-hire — the days between sourcing a candidate and them accepting an offer. Single number, comparable across roles, easy to compute in a spreadsheet. SHRM's 2024 median is 44 days for context.",
  },
  {
    q: "Can a Google Sheet really replace recruiting analytics software?",
    a: "For a 5-20 req team, yes. The 4 metrics that drive decisions (source quality, stage conversion, days-in-stage, time-to-hire) all fit in one sheet. Above ~50 reqs the manual update overhead starts to hurt.",
  },
  {
    q: "Should I track cost-per-hire?",
    a: "Only if you're spending real money on hiring (paid job boards, agency fees, sourcing tools). For a small team running on free tools, the time cost is the real cost — measure hours-per-hire instead.",
  },
  {
    q: "What's the ideal phone-to-onsite conversion rate?",
    a: "Industry-wide it's roughly 25-40%. Below 20% means your screening criteria might be too loose (anyone passes phone) or your job description is attracting the wrong candidates. Above 50% means you might be screening too hard pre-onsite.",
  },
];
