/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Three tools dominate the &ldquo;help me job search&rdquo; market in 2026: Jobscan
      ($50/mo), Teal ($9–35/mo), and Huntr ($30/mo). Each does something the others
      don&rsquo;t, and each has a free tier that&rsquo;s genuinely useful — until it isn&rsquo;t.
      This is the head-to-head: what each does, where the free tiers cap out, and which
      to pay for if you&rsquo;re going to pay for one.
    </p>
    <p>
      We&rsquo;ve used all three for live job searches. The conclusion is more nuanced
      than &ldquo;X wins&rdquo; — they target different problems.
    </p>
  </>
);

export const toc = [
  { id: "quick", label: "Quick verdict" },
  { id: "jobscan", label: "Jobscan" },
  { id: "teal", label: "Teal" },
  { id: "huntr", label: "Huntr" },
  { id: "free-tiers", label: "Free tiers head-to-head" },
  { id: "stack", label: "Best free combination" },
];

export const body = (
  <>
    <h2 id="quick">Quick verdict</h2>
    <p>
      <strong>Jobscan</strong> = best for resume-vs-JD scoring (one job at a time).{" "}
      <strong>Teal</strong> = best for managing your active applications + AI resume
      tailoring.{" "}
      <strong>Huntr</strong> = best for kanban-style job-search organization.
    </p>
    <p>
      If you&rsquo;re paying for one: <strong>Teal Pro</strong> is the highest-leverage
      pick because the AI resume tailoring saves the most hours. If you&rsquo;re using
      free tiers only: combine Teal free (5 apps tracked) + our{" "}
      <a href="/tools/resume-keyword-match-scorer">unlimited keyword scorer</a> to cover
      both jobs. See the &ldquo;Best free combination&rdquo; section below.
    </p>

    <h2 id="jobscan">Jobscan</h2>
    <p>
      <strong>What it is:</strong> a resume-vs-JD scoring engine. Paste your resume + a
      JD, get a percentage match score with skill, title, and education breakdowns.
    </p>
    <p>
      <strong>Strengths:</strong>
    </p>
    <ul>
      <li>The most rigorous keyword + skill matching of the three (uses skill ontologies, not just frequency).</li>
      <li>Title-match scoring catches mismatches (e.g. &ldquo;Software Engineer&rdquo; in resume vs &ldquo;Senior Software Engineer&rdquo; in JD).</li>
      <li>Coverage of which sections to fix (Experience vs Education vs Skills).</li>
    </ul>
    <p>
      <strong>Weaknesses:</strong>
    </p>
    <ul>
      <li>$50/month — the most expensive of the three.</li>
      <li>Free tier: 5 scans total, ever (not per month). Practically forces a paid sub.</li>
      <li>Doesn&rsquo;t track applications or help you tailor — only scores.</li>
    </ul>

    <h2 id="teal">Teal HQ</h2>
    <p>
      <strong>What it is:</strong> a job-search workspace — track applications, AI-tailor
      resumes, save jobs from job boards via Chrome extension.
    </p>
    <p>
      <strong>Strengths:</strong>
    </p>
    <ul>
      <li>Best AI resume tailoring of the three. Generates JD-targeted bullets that need light editing.</li>
      <li>Chrome extension that captures jobs from LinkedIn / Indeed / etc. with one click.</li>
      <li>Pricing flexibility: $9 weekly, $29 monthly, $79 quarterly (try-before-commit friendly).</li>
    </ul>
    <p>
      <strong>Weaknesses:</strong>
    </p>
    <ul>
      <li>Free tier limits: 5 active jobs tracked, limited resume builder, no AI features.</li>
      <li>Resume builder UI gets in the way — most users export to Word/Google Docs anyway.</li>
      <li>Match-score feature is less accurate than Jobscan&rsquo;s.</li>
    </ul>

    <h2 id="huntr">Huntr</h2>
    <p>
      <strong>What it is:</strong> a job-search kanban board — visualize applications by
      stage, attach contacts and notes, browser-extension-clip jobs.
    </p>
    <p>
      <strong>Strengths:</strong>
    </p>
    <ul>
      <li>Best UI of the three for visual learners (kanban + cards + drag-and-drop).</li>
      <li>Contact tracking per company (the recruiter, the hiring manager, the friend who referred).</li>
      <li>Free tier is the most generous: 40 active applications.</li>
    </ul>
    <p>
      <strong>Weaknesses:</strong>
    </p>
    <ul>
      <li>No AI resume tailoring — would need to use Teal or ChatGPT separately.</li>
      <li>$30/month for Pro is expensive for what is essentially Trello-with-a-Chrome-extension.</li>
      <li>40 active app limit on free hits real quickly during an aggressive search.</li>
    </ul>

    <h2 id="free-tiers">Free tiers head-to-head</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Jobscan free</th>
          <th>Teal free</th>
          <th>Huntr free</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Match scoring</td>
          <td>5 lifetime scans</td>
          <td>Limited</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Resume builder</td>
          <td>None</td>
          <td>Yes (limited)</td>
          <td>None</td>
        </tr>
        <tr>
          <td>AI resume tailoring</td>
          <td>None</td>
          <td>Paid only</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Application tracking cap</td>
          <td>N/A</td>
          <td>5 active</td>
          <td>40 active</td>
        </tr>
        <tr>
          <td>Chrome extension</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Contacts per company</td>
          <td>None</td>
          <td>None</td>
          <td>Yes (free)</td>
        </tr>
      </tbody>
    </table>

    <h2 id="stack">The best free combination (no $ paid)</h2>
    <p>
      Pick one based on what you do most:
    </p>
    <ul>
      <li>
        <strong>If you&rsquo;re scoring resumes against many JDs:</strong>{" "}
        <a href="/tools/resume-keyword-match-scorer">our unlimited keyword scorer</a>{" "}
        (no scan cap) + Jobscan&rsquo;s 5 free scans for final validation.
      </li>
      <li>
        <strong>If you&rsquo;re tracking many applications:</strong> Huntr free (40 apps)
        OR a spreadsheet (unlimited).
      </li>
      <li>
        <strong>If you want AI tailoring without paying:</strong> ChatGPT or Claude free
        with a structured prompt (we have the prompt in our{" "}
        <a href="/guides/free-job-search-tool-stack-2026">free job-search stack</a>{" "}
        guide).
      </li>
    </ul>
    <p>
      The combination outperforms any single paid tool for most job seekers. Pay for one
      only if you&rsquo;re hitting a specific wall — tracking &gt;40 applications =
      Huntr Pro; tailoring 20+ resumes/week = Teal Pro; need rigorous JD scoring on every
      application = Jobscan Premium.
    </p>
  </>
);

export const cta = {
  label: "Score your resume free (unlimited scans)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "Is Jobscan worth $50/month?",
    a: "If you're applying to 30+ jobs/month and want rigorous keyword + title matching on each, yes. For lower volume our free keyword scorer covers the core function.",
  },
  {
    q: "Teal vs Huntr — which is better?",
    a: "Different jobs. Teal does AI resume tailoring (the bigger time-saver); Huntr does visual application tracking. Use Teal if you tailor a lot, Huntr if you track a lot.",
  },
  {
    q: "Can ChatGPT replace Teal's AI resume builder?",
    a: "Mostly yes, with the right prompt. Paste the JD and resume, ask for tailored bullets in a structured format. Teal's UX is more polished; ChatGPT free has no rate limit on text generation.",
  },
  {
    q: "What's the cheapest paid option of the three?",
    a: "Teal at $9/week (try-and-cancel friendly) is the lowest entry price. Huntr is $30/month with no weekly option. Jobscan is $50/month minimum.",
  },
];
