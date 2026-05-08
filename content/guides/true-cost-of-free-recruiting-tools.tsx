/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Free&rdquo; recruiting tools have three hidden costs the marketing copy
      doesn&rsquo;t mention: time spent stitching tools together, candidates lost to
      clunky workflows, and the gap between free-tier limits and what you actually need.
      This guide walks through each, then shows you when those costs cross over the price
      of a paid ATS.
    </p>
    <p>
      Run our{" "}
      <a href="/tools/free-recruiting-tool-true-cost-calculator">true cost calculator</a>{" "}
      with your numbers as you read.
    </p>
  </>
);

export const toc = [
  { id: "stitching", label: "Hidden cost #1: stitching time" },
  { id: "loss", label: "Hidden cost #2: candidates lost to UX" },
  { id: "ceiling", label: "Hidden cost #3: hitting free-tier ceilings" },
  { id: "math", label: "When does paid pay for itself?" },
  { id: "exception", label: "When free still wins" },
];

export const body = (
  <>
    <h2 id="stitching">Hidden cost #1: stitching time</h2>
    <p>
      A typical free recruiting stack has 4–6 separate tools: pipeline tracker, screening
      tool, scheduling, email, job posting, metrics. They don&rsquo;t talk to each other.
      The integration work falls on the recruiter:
    </p>
    <ul>
      <li>Forwarding the Indeed application email to the Trello board (5 min).</li>
      <li>Copy-pasting candidate info from Trello into a Calendly invite (3 min).</li>
      <li>Updating the metrics spreadsheet from Trello manually (10 min/week).</li>
      <li>Following up on Calendly bookings via Gmail templates (15 min/week).</li>
      <li>Re-posting the same JD on 8 boards manually (30 min/post).</li>
    </ul>
    <p>
      Conservatively that&rsquo;s 1–3 hours/week of pure stitching. At a $60/hr fully-loaded
      cost, that&rsquo;s $3,000–9,000/year — well above the cost of a paid ATS like
      Workable Starter ($2,268/year).
    </p>

    <h2 id="loss">Hidden cost #2: candidates lost to UX</h2>
    <p>
      Industry-wide, candidate-experience research consistently shows a 5–15% drop-off
      attributable to clunky processes:
    </p>
    <ul>
      <li>
        <strong>The slow-response gap:</strong> SHRM 2024 found that candidates who don&rsquo;t hear back
        within 7 days are 40% more likely to accept a competing offer. Free stacks tend to slow down at the
        Trello → email → schedule handoff.
      </li>
      <li>
        <strong>The scheduling-link mismatch:</strong> sending a Calendly link with one event type
        when the candidate needs to book a panel = back-and-forth × 3 days = candidate ghosts.
      </li>
      <li>
        <strong>The form abandonment:</strong> Google Forms is functional but ugly; candidates abandon at
        ~25% on the apply step compared to ~10% on a polished branded apply page.
      </li>
    </ul>
    <p>
      A 10% candidate-loss rate on 200 applicants/year = 20 lost candidates. If even 5% of
      those would&rsquo;ve been viable hires (1 person), and a delayed hire costs ~2 weeks
      of revenue per role, the math gets ugly fast.
    </p>

    <h2 id="ceiling">Hidden cost #3: free-tier ceilings</h2>
    <p>
      Every free tool has a ceiling. The pattern:
    </p>
    <ul>
      <li>Trello free: 10 boards. Above 5 reqs you&rsquo;re shuffling.</li>
      <li>Calendly free: 1 event type. Solo recruiters fine; team interviews painful.</li>
      <li>Zoho Recruit free: 1 active job, 1 user, 100 candidates. Solo only.</li>
      <li>Hunter.io free: 25 email lookups/month. Hits ceiling on day 12 of a search.</li>
      <li>Teal free: 5 active applications tracked. Useless for a real search.</li>
    </ul>
    <p>
      The ceiling cost shows up as either: (1) you start splitting workload across tools
      (more stitching), or (2) you upgrade just one tool to paid because you hit its
      ceiling first — and now you&rsquo;re on a hybrid free/paid stack with worst-of-both
      ergonomics.
    </p>

    <h2 id="math">When does paid pay for itself?</h2>
    <p>
      The breakeven is approximately:
    </p>
    <p>
      <strong>Annual paid ATS cost &lt; (stitching hours × hourly rate × 52) + (lost
      candidates × value per candidate)</strong>
    </p>
    <p>
      For typical small teams, that&rsquo;s around <strong>8–12 hires per year</strong>{" "}
      depending on hiring-manager hourly rate. Plug your own numbers into the calculator
      to see your specific breakeven.
    </p>
    <p>
      Common scenarios:
    </p>
    <ul>
      <li>
        <strong>Solo recruiter, 4–6 hires/year:</strong> free stack wins by ~$2k/year.
        Stitching cost is real but small; loss-rate cost is small at low volume.
      </li>
      <li>
        <strong>Small team, 10–15 hires/year:</strong> tossup. Workable Starter or
        SmartRecruiters mid-tier starts to look good. Run the numbers.
      </li>
      <li>
        <strong>Growing team, 20+ hires/year:</strong> paid almost always wins. Stitching
        time scales linearly; loss rate compounds; free-tier ceilings start to bite hard.
      </li>
    </ul>

    <h2 id="exception">When free still wins (and when it&rsquo;s honest)</h2>
    <p>
      Free stacks legitimately beat paid in three cases:
    </p>
    <ul>
      <li>
        <strong>Very low volume.</strong> 1–3 hires/year, no plans to grow. The
        stitching cost is small enough that paid feels like overkill.
      </li>
      <li>
        <strong>Non-recurring hiring.</strong> One-time annual hire, otherwise no
        recruiting overhead. Subscription doesn&rsquo;t make sense for a one-shot.
      </li>
      <li>
        <strong>Recruiter-as-hiring-manager.</strong> Founder doing all the hiring
        themselves; their time isn&rsquo;t marginal in the same way. The hidden cost is
        opportunity cost on whatever else they could be doing — which sometimes IS still
        below the paid-tool cost.
      </li>
    </ul>
    <p>
      Outside those cases, paid wins on the math more often than the free-tools-evangelist
      crowd admits. The honest version: &ldquo;free for solo, low-volume, founder-driven
      hiring; paid above that.&rdquo;
    </p>
  </>
);

export const cta = {
  label: "Calculate your team's true cost",
  targetSlug: "free-recruiting-tool-true-cost-calculator",
};

export const faq = [
  {
    q: "What's the typical breakeven hire count for paid vs free?",
    a: "Around 8-12 hires/year for most small teams, but it shifts based on hiring-manager hourly rate (higher rate → paid pays for itself sooner) and how aggressive you measure candidate loss.",
  },
  {
    q: "Aren't 'lost candidates' a soft cost?",
    a: "Yes — and that's why they're easy to ignore until you measure. The honest move is to assume some loss exists (5-15% per industry data), price it conservatively, and re-run the math. Pretending zero loss is the optimistic mistake.",
  },
  {
    q: "Should I migrate from free to paid mid-year?",
    a: "Switching costs are real (8-20 hours of data migration, training, configuration). Time the switch around a hiring slowdown, not a hot reqs week. Most teams that should migrate wait too long because the migration feels expensive in the moment.",
  },
  {
    q: "What about the new AI-recruiting startups offering free tiers?",
    a: "Most aren't actually free past the trial — they're 'free with seat cap' or 'free until <some volume>'. Read the pricing page carefully, and treat any free-tier feature that's listed as 'beta' or 'subject to change' as effectively a 12-month bet.",
  },
];
