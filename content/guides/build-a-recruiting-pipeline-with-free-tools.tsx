/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Building a working recruiting pipeline with zero subscription cost is a
      45-minute setup. The Reddit thread for &ldquo;how do you organize hiring without
      a real ATS&rdquo; gets answers ranging from &ldquo;literally just emails&rdquo;
      to &ldquo;I built a Notion empire with 12 databases.&rdquo; Both are wrong for
      different reasons. Here&rsquo;s the practical middle.
    </p>
    <p>
      This guide is the step-by-step build: which tools, how to wire them, what to
      automate, and the screening-questions trick that filters out the bottom 60% of
      applications before you waste a minute.
    </p>
  </>
);

export const toc = [
  { id: "stages", label: "Define your stages" },
  { id: "tools", label: "Wire up the tools" },
  { id: "screening", label: "Screening questions" },
  { id: "remote", label: "Remote / distributed teams" },
  { id: "outreach", label: "Outreach + follow-up automation" },
];

export const body = (
  <>
    <h2 id="stages">Step 1: define your hiring stages</h2>
    <p>
      Standard 6-stage funnel that most small teams use:
    </p>
    <ol>
      <li><strong>Sourced / Applied</strong> — candidate is in the system but not contacted.</li>
      <li><strong>Phone screen</strong> — recruiter or hiring manager 30-min call.</li>
      <li><strong>Interview</strong> — technical / panel / multi-round.</li>
      <li><strong>Offer</strong> — offer extended; awaiting decision.</li>
      <li><strong>Hired</strong> — terminal positive.</li>
      <li><strong>Rejected</strong> — terminal negative.</li>
    </ol>
    <p>
      Resist the urge to add 4 sub-stages. Most pipeline pain comes from over-stage-ing
      (every recruiting tool encourages this because it makes the dashboards look fancier).
      6 stages is enough to see what&rsquo;s working.
    </p>

    <h2 id="tools">Step 2: wire up the tools</h2>
    <p>
      The minimum viable free pipeline:
    </p>
    <ul>
      <li>
        <strong>Pipeline tracker:</strong>{" "}
        <a href="/tools/recruiting-pipeline-tracker">our recruiting pipeline tracker</a>{" "}
        with the 6 stages above. Or Trello with the same column structure.
      </li>
      <li>
        <strong>Application form:</strong> Tally free (unlimited responses, way better than
        Google Forms for application use cases) or a simple page on your website with the
        application going to a shared inbox.
      </li>
      <li>
        <strong>Inbox:</strong> Gmail, with a shared label like &ldquo;hiring&rdquo;
        across the team.
      </li>
      <li>
        <strong>Calendar:</strong> Calendly free for screen calls; Google Calendar for
        team coordination.
      </li>
      <li>
        <strong>Notes / candidate context:</strong> the notes field in the pipeline
        tracker, or a single Google Doc per role with all interview-round notes.
      </li>
    </ul>
    <p>
      Setup time: 30–45 minutes. Ongoing maintenance: ~10 min/week if you stay disciplined
      about logging.
    </p>

    <h2 id="screening">Step 3: screening questions that reduce applications</h2>
    <p>
      The least-talked-about hack in small-business hiring: <strong>add 1–3 screening
      questions to your application form</strong>. They filter out spray-applications and
      give you faster signal:
    </p>
    <ul>
      <li>
        <strong>&ldquo;In 2–3 sentences, why are you interested in this specific role?&rdquo;</strong> —
        kills generic apps. People who haven&rsquo;t read the JD won&rsquo;t bother.
      </li>
      <li>
        <strong>One concrete experience question.</strong> &ldquo;Describe one project
        where you used [key skill from JD]&rdquo; — separates real experience from
        keyword-padded resumes.
      </li>
      <li>
        <strong>Salary expectations + location.</strong> Filters out compensation /
        geography mismatches before you spend time on phone screen.
      </li>
    </ul>
    <p>
      Tally and Google Forms both let you add these. Time cost to the candidate: 90
      seconds. Time saved for you: 5–10 hours/month at typical volumes.
    </p>

    <h2 id="remote">Step 4: remote / distributed hiring teams</h2>
    <p>
      Coordinating multiple interviewers across time zones is where free tools strain.
      Practical setup:
    </p>
    <ul>
      <li>
        <strong>Shared pipeline:</strong> if multiple recruiters need to see the same
        board, our localStorage tracker won&rsquo;t cut it. Use Trello with team access,
        or a shared Google Sheet — both free for small teams.
      </li>
      <li>
        <strong>Slack channel per role:</strong> #hiring-eng-2026, etc. Pin the JD,
        pipeline link, and current shortlist. Reduces the &ldquo;status update?&rdquo;
        emails.
      </li>
      <li>
        <strong>Async interview feedback:</strong> shared Google Doc per candidate with
        sections for each interviewer&rsquo;s notes. Replaces Greenhouse&rsquo;s
        scorecard feature for free.
      </li>
      <li>
        <strong>Time-zone-aware Calendly:</strong> free Calendly handles candidate time
        zones; you set your availability in your local zone.
      </li>
    </ul>

    <h2 id="outreach">Step 5: outreach + follow-up automation</h2>
    <p>
      Free tools that automate the boring parts:
    </p>
    <ul>
      <li>
        <strong>Gmail templates:</strong> for &ldquo;thanks for applying&rdquo;,
        &ldquo;here&rsquo;s a calendar link&rdquo;, and rejection emails. Settings →
        General → Templates.
      </li>
      <li>
        <strong>Boomerang free / Mixmax free:</strong> schedule send for follow-ups.
      </li>
      <li>
        <strong>Apps Script for stage emails:</strong> 20 lines of Google Apps Script can
        send a candidate-status email when their row in the spreadsheet changes stage.
        Free on Google Workspace.
      </li>
      <li>
        <strong>Calendly auto-confirmation:</strong> built-in, free. Add a 1-hour-before
        reminder via your Google Calendar (manual setting, free).
      </li>
    </ul>
    <p>
      The follow-up patterns that move candidates through the pipeline:
    </p>
    <ul>
      <li>Confirm the application within 48 hours.</li>
      <li>Schedule the screen within 5 days.</li>
      <li>Decision after onsite within 5 days.</li>
      <li>Reject within 7 days of the latest stage.</li>
    </ul>
    <p>
      Most candidate ghosting happens because someone broke one of these timelines. Free
      tools can&rsquo;t enforce them — discipline does. Good news: discipline is free.
    </p>
  </>
);

export const cta = {
  label: "Start your free pipeline now",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "How long does it take to set up a free recruiting pipeline?",
    a: "30-45 minutes for the initial setup (pipeline tool + application form + Calendly + inbox label). Then ~10 min/week of maintenance.",
  },
  {
    q: "Do screening questions actually reduce candidate volume?",
    a: "Yes — typically 30-50% fewer applications when you add 1-3 short questions, and the remaining applications are higher quality. Time saved on screening calls more than makes up for the slightly lower top-of-funnel volume.",
  },
  {
    q: "Can a free pipeline handle remote / distributed teams?",
    a: "For small teams (2-3 recruiters), yes — Trello free + Slack channel + shared Google Doc covers the coordination needs. Above that you'll want real-time collaboration features, which is when paid ATSes start to be worth it.",
  },
  {
    q: "What's the most common mistake building a free pipeline?",
    a: "Adding too many stages. 6 standard stages (Sourced, Phone, Interview, Offer, Hired, Rejected) is enough; every additional sub-stage adds maintenance overhead and rarely produces better insight at small scale.",
  },
];
