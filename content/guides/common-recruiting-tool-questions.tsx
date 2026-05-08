/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Short answers to the recruiting / job-search tool questions that come up over and
      over in <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>,{" "}
      <a href="https://www.reddit.com/r/jobsearchhacks/" rel="noreferrer">r/jobsearchhacks</a>,
      and <a href="https://www.reddit.com/r/smallbusiness/" rel="noreferrer">r/smallbusiness</a>.
      Each links to a deeper guide if the answer is &ldquo;here&rsquo;s how, in detail.&rdquo;
    </p>
  </>
);

export const toc = [
  { id: "screening", label: "Screening + parsing" },
  { id: "outreach", label: "Outreach + follow-up" },
  { id: "search", label: "Job search tools" },
  { id: "boards", label: "Boards + aggregators" },
  { id: "operations", label: "Operations + writing" },
];

export const body = (
  <>
    <h2 id="screening">Screening + parsing</h2>

    <h3>How do I screen resumes for free without paid tools?</h3>
    <p>
      Two-step workflow. First, use{" "}
      <a href="/tools/resume-keyword-match-scorer">our keyword scorer</a> to triage by
      JD-keyword overlap. Second, paste the top-scoring resumes into ChatGPT or Claude
      free with a structured ranking prompt: &ldquo;Rank these against [3 specific
      requirements from JD] on a 1–5 scale.&rdquo; Total time: 5 minutes per 10 resumes.
      See our <a href="/guides/free-ats-reality-check">free ATS reality check</a> for the
      full mechanic.
    </p>

    <h3>What questions should I ask during resume screening?</h3>
    <p>
      Three types: (1) <strong>concrete experience</strong> — &ldquo;tell me about a
      project where you did [JD-required skill]&rdquo;; (2){" "}
      <strong>compensation / location alignment</strong> — kill mismatches early; (3){" "}
      <strong>motivation</strong> — &ldquo;why this role specifically?&rdquo; The
      generic-application killer. Skip behavioral questions at the screening
      stage — save them for the interview.
    </p>

    <h3>Are free resume parser tools any good?</h3>
    <p>
      For low volume, Affinda&rsquo;s free tier (100 parses/month) is the most accurate.
      For zero-cost open-source: an <a href="/learn/llm">LLM</a> with a JSON schema prompt hits ~90% accuracy on
      standard formats. Both fail on 2-column resumes and scanned PDFs. See{" "}
      <a href="/guides/free-ats-reality-check">free ATS reality check</a> for the full
      comparison.
    </p>

    <h3>Are free background-check tools real?</h3>
    <p>
      Yes for surface-level checks: TrueFinder free social-media search, court-record
      lookups via county-level public databases (free but slow), LinkedIn employment
      verification. For anything covered by FCRA (US Fair Credit Reporting Act) — credit,
      criminal, motor vehicle — you legally must use an FCRA-compliant provider. Cheapest:
      Checkr ~$30/check.
    </p>

    <h2 id="outreach">Outreach + follow-up</h2>

    <h3>What are the best free email tools for recruiting outreach?</h3>
    <p>
      Gmail with templates handles the basics — Settings → General → Templates. For
      sequences (send + auto-follow-up if no reply): Mailtrack free (open tracking),
      Streak free (CRM in Gmail), or GMass free trial for mail merge. None match Outreach
      or Apollo&rsquo;s automation, but for low volume the manual approach actually
      performs better — recruiters who blast the same template at 200 candidates get
      ignored.
    </p>

    <h3>Are there free tools that automate follow-up messages to candidates?</h3>
    <p>
      Built-in Gmail templates + scheduled send (free) covers most cases. For full
      sequence automation: Mailmeteor free does mail merge + simple sequencing on Google
      Sheets. Boomerang free for scheduled sends. Avoid auto-sequence tools that don&rsquo;t
      stop on candidate reply — they create the worst kind of impression.
    </p>

    <h3>What are the best free tools for coordinating team interviews?</h3>
    <p>
      Google Calendar &ldquo;Find a time&rdquo; for free if everyone is in one Google
      Workspace org. Doodle free for cross-org polls. Cal.com self-hosted gets you the
      paid features for free if you can host it. See{" "}
      <a href="/guides/free-interview-scheduling-for-recruiters">free interview scheduling</a>{" "}
      for the full breakdown.
    </p>

    <h2 id="search">Job search tools</h2>

    <h3>What are the best free AI tools for job-search automation?</h3>
    <p>
      The genuine high-leverage uses: company research summaries (paste public info,
      ask for a 200-word summary), mock interview practice (ChatGPT voice mode), cover
      letter drafts (free LLM with a structured prompt), salary negotiation script
      generation. The auto-apply tools (LazyApply, Sonara) tank reply rates — avoid.
    </p>

    <h3>Are there AI tools that find job postings automatically?</h3>
    <p>
      Mostly bad. The aggregator-with-AI startups (Adzuna AI, Workscape) recycle
      Indeed/LinkedIn postings with marginally better filtering. Free alternative: set up
      LinkedIn Job Alerts, Indeed Email Alerts, and Google Jobs Alerts with specific
      queries. Better signal, zero subscription.
    </p>

    <h3>What free tools help me find jobs in my industry?</h3>
    <p>
      For most industries, the niche boards beat aggregators on signal. Tech: Wellfound,
      Hacker News &ldquo;Who is hiring,&rdquo; key Slacks. Design: Dribbble Jobs,
      Behance Jobs. Marketing: Workshop newsletter, Demand Curve job board. Sales: Bravado
      free tier. Finance: eFinancialCareers (free). Look up your industry+&ldquo;niche
      job board&rdquo; — usually 2–3 high-quality options exist.
    </p>

    <h3>How do I compare free job-search tools before choosing one?</h3>
    <p>
      Three criteria: (1) <strong>Hard cap matters</strong> — Teal&rsquo;s 5-app limit is
      useless for a real search; (2) <strong>Workflow integration</strong> — does it have
      a Chrome extension to capture jobs? (3) <strong>Export</strong> — can you get your
      data out when you graduate to a different tool? Most free tools fail criterion 3 —
      worth checking before you commit a month of data.
    </p>

    <h2 id="boards">Boards + aggregators</h2>

    <h3>Do free job-board aggregators save time?</h3>
    <p>
      Mostly yes. Indeed and LinkedIn already aggregate from most paid boards.
      Aggregator-of-aggregators (LinkedIn aggregates Glassdoor, Indeed aggregates
      ZipRecruiter, etc.) get you ~80% coverage with two saved searches. Specialized
      aggregators help in niche domains: RemoteOK for remote, Wellfound for startups.
      Set up email alerts and let aggregators come to you.
    </p>

    <h3>How do I post jobs on multiple platforms for free at once?</h3>
    <p>
      Manual cross-posting takes 10 minutes per platform once you have the JD written.
      For automation, the only real free option is Google Jobs auto-indexing your careers
      page (works for everyone). Paid tools (Recruitee, Workable&rsquo;s
      multi-poster) are $89+/month. See{" "}
      <a href="/guides/free-job-posting-playbook-2026">free job posting playbook</a>{" "}
      for the manual workflow.
    </p>

    <h2 id="operations">Operations + writing</h2>

    <h3>How do I create a candidate database for free?</h3>
    <p>
      Google Sheet with: name, contact info, source, skills tags, last-contacted date,
      reach-out cadence. Filter and sort in-place. Works for 100–500 candidates; above
      that, search performance degrades. Detailed template in our{" "}
      <a href="/guides/recruiting-metrics-on-a-free-spreadsheet">
        recruiting metrics on a free spreadsheet
      </a>{" "}
      guide.
    </p>

    <h3>What free tools help create job descriptions that attract quality candidates?</h3>
    <p>
      Two things move the needle: (1) <strong>specificity</strong> — &ldquo;has shipped a
      Stripe integration&rdquo; beats &ldquo;3+ years payments experience&rdquo;; and (2){" "}
      <strong>salary range up top</strong> — filters out the 60% who don&rsquo;t fit
      compensation-wise, before they apply. Tools to help: ChatGPT free for first drafts,
      Textio free trial for inclusivity scoring, our keyword scorer to verify the JD
      surfaces the skills you actually want.
    </p>

    <h3>How do I customize my resume for each application?</h3>
    <p>
      15 minutes per application is the sweet spot. Workflow: paste resume + JD into our{" "}
      <a href="/tools/resume-keyword-match-scorer">keyword scorer</a> to find gaps,
      then ask ChatGPT/Claude to rewrite bullets surfacing missed terms (without
      fabricating skills), then re-score. Aim for 70%+ match. Full guide:{" "}
      <a href="/guides/tailor-your-resume-to-job-postings-for-free">
        tailor your resume to job postings
      </a>.
    </p>
  </>
);

export const cta = {
  label: "The unlimited free keyword scorer",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "What's the single highest-ROI free recruiting tool?",
    a: "A spreadsheet. Either as a candidate database, source-quality tracker, or job-application log — disciplined logging beats any fancy tool. Most paid recruiting analytics tools are spreadsheets with prettier UI.",
  },
  {
    q: "Is there a free tool that does everything?",
    a: "No, and beware anyone who claims their free tool replaces a full ATS. The honest free stack is 4-6 tools stitched together — see our free recruiting tool stack guide.",
  },
  {
    q: "How do I know when free tools aren't enough anymore?",
    a: "Three signals: (1) you're spending 2+ hours/week on stitching, (2) you've hit free-tier ceilings on 2 or more tools, (3) candidates are dropping off mid-process due to slow handoffs. Run our true cost calculator to quantify.",
  },
];
