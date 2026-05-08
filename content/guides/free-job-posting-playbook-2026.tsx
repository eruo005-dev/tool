/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Where can I post jobs for free that actually get applicants?&rdquo; is the
      most common small-business question on{" "}
      <a href="https://www.reddit.com/r/smallbusiness/" rel="noreferrer">r/smallbusiness</a>{" "}
      and <a href="https://www.reddit.com/r/Recruitment/" rel="noreferrer">r/Recruitment</a>.
      The truthful answer: free job posts work, but only if you optimize them — Indeed
      free listings show below sponsored ones, LinkedIn free caps you at 1 active job, and
      Facebook Jobs was sunsetted in 2023.
    </p>
    <p>
      This is the playbook: which free boards still produce, how to write a posting that
      ranks despite paying $0, and the multi-platform distribution trick that turns one
      job description into 12 placements.
    </p>
  </>
);

export const toc = [
  { id: "boards", label: "Free job boards that still work" },
  { id: "facebook", label: "Facebook job posting in 2026" },
  { id: "multi-post", label: "Multi-platform posting" },
  { id: "writing", label: "Job descriptions that filter" },
  { id: "tracking", label: "Tracking source quality" },
];

export const body = (
  <>
    <h2 id="boards">Free job boards that still work in 2026</h2>
    <p>
      Effectiveness varies by role type. Engineering / design / remote roles get
      organic traffic from niche boards; local hourly roles need broad-aggregator reach.
    </p>
    <ul>
      <li>
        <strong>Indeed (free organic):</strong> still the highest-volume aggregator. Free
        listings appear below sponsored ones — typically page 2–3 results. Workaround: add
        a $1/day sponsored budget for the first 72 hours, then drop back to free.
      </li>
      <li>
        <strong>LinkedIn (free, 1 active job):</strong> works for white-collar roles.
        Limit: only 1 free posting at a time per account; 50 applicants then it stops
        being shown.
      </li>
      <li>
        <strong>Google Jobs:</strong> indexes any company careers page with{" "}
        <code>JobPosting</code> structured data. If your site has it, you&rsquo;re in
        Google's free job aggregator automatically. Most small-business sites don&rsquo;t —
        adding the <a href="/learn/json-ld">JSON-LD</a> takes 20 minutes.
      </li>
      <li>
        <strong>Wellfound (formerly AngelList Talent):</strong> startup-focused, free for
        employers up to certain volume. Best for early-stage companies.
      </li>
      <li>
        <strong>Hacker News &ldquo;Who is hiring&rdquo; thread:</strong> first weekday of
        the month at ~9 AM ET. Free, ~10K developer eyeballs. Plain-text post, no
        applications, candidates email you directly.
      </li>
      <li>
        <strong>Reddit role-specific subs:</strong> r/forhire allows employer posts with
        flair; some niche subs (r/REMOTEjobs, r/cscareerquestions hiring threads) have
        their own rules — read sidebar before posting.
      </li>
      <li>
        <strong>Slack communities:</strong> niche communities (Reactiflux #jobs, Designer
        Hangout #jobs, Locally Optimistic for analytics) have active job channels free for
        employers to post.
      </li>
    </ul>

    <h2 id="facebook">Did Facebook Jobs come back? (No.)</h2>
    <p>
      Meta sunsetted Facebook Jobs in February 2023. Posts in groups and Marketplace still
      reach candidates (especially for hourly / local / restaurant / retail roles) but
      it&rsquo;s no longer a structured job-board surface. The replacements:
    </p>
    <ul>
      <li>
        <strong>Facebook Marketplace &gt; Jobs:</strong> available in some regions for
        local hourly roles. Limited targeting.
      </li>
      <li>
        <strong>Facebook Groups:</strong> local job groups (search &ldquo;[your city]
        jobs&rdquo;) accept employer posts; rules vary by admin.
      </li>
      <li>
        <strong>Instagram Story / Reels:</strong> if you have an audience already, posting
        a hiring announcement reaches followers. Doesn&rsquo;t work cold.
      </li>
    </ul>

    <h2 id="multi-post">Posting on 12 platforms in one afternoon</h2>
    <p>
      One job description → many placements. The workflow:
    </p>
    <ol>
      <li>Write the description once (next section covers what to write).</li>
      <li>Post on Indeed free first — that's your canonical link.</li>
      <li>Cross-post the same description on LinkedIn, Wellfound, niche Slack/Discord channels, your own careers page.</li>
      <li>For each placement, link <em>back</em> to the application form on your careers page (not Indeed) so you control the funnel and capture source data.</li>
      <li>Set a UTM parameter per placement: <code>?utm_source=indeed</code>, <code>?utm_source=linkedin</code>, etc. Now you know which boards actually produce hires.</li>
    </ol>
    <p>
      That&rsquo;s 60–90 minutes for a dozen placements with source attribution. Paid
      multi-poster tools (Recruitee, Workable&rsquo;s job board feature) automate this for
      $89+/month — worth it above ~10 active reqs, overkill below.
    </p>

    <h2 id="writing">Writing job descriptions that filter (not attract everyone)</h2>
    <p>
      The mistake every small-business posting makes: optimizing for &ldquo;more
      applicants.&rdquo; You don&rsquo;t want more — you want the right ones. Filtering
      mechanics:
    </p>
    <ul>
      <li>
        <strong>Salary range up top.</strong> Skips the entire population that doesn&rsquo;t
        fit. Saves you 30 hours of screening for someone who&rsquo;d turn down the offer
        anyway.
      </li>
      <li>
        <strong>Specific concrete requirements.</strong> &ldquo;Has shipped a Stripe
        integration to production&rdquo; beats &ldquo;3+ years of payments experience.&rdquo;
        The first filters; the second doesn't.
      </li>
      <li>
        <strong>Genuine company specifics.</strong> One paragraph on why the company is
        worth working at — not generic &ldquo;we move fast&rdquo; copy. Self-selects for
        people who care.
      </li>
      <li>
        <strong>One screening question on the form.</strong> Even a &ldquo;in 2 sentences,
        why are you a fit?&rdquo; question filters out the 60% of spray-applies. Costs
        candidates 90 seconds; saves you hours.
      </li>
    </ul>

    <h2 id="tracking">Tracking source quality (which board produces hires)</h2>
    <p>
      Posting on 12 boards is wasted effort if you can&rsquo;t tell which ones produce
      good candidates. The minimum viable tracking:
    </p>
    <ul>
      <li>UTM parameters on every link (covered above).</li>
      <li>Source field on your application form (free text or dropdown).</li>
      <li>Pipeline tracker with a source column — see our{" "}
        <a href="/tools/recruiting-pipeline-tracker">recruiting pipeline tracker</a>{" "}
        which has source per candidate built in.</li>
      <li>Monthly review: which sources made the offer stage? Which made it to hire?</li>
    </ul>
    <p>
      After 30 days you'll see clear signal: 1–2 sources produce 60% of viable candidates.
      Stop posting on the rest. Most small companies waste hours on &ldquo;all 12 boards&rdquo;
      forever; the data tells you to focus.
    </p>
  </>
);

export const cta = {
  label: "Track applicants by source (free pipeline tracker)",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "Can I really hire without paying any job board?",
    a: "Yes for most small businesses. Indeed free + LinkedIn free + Google Jobs (via JobPosting structured data on your careers page) + 2 niche placements covers most needs. Below ~5 hires/year, paid placement is hard to justify.",
  },
  {
    q: "Is Facebook Marketplace good for posting jobs?",
    a: "For local hourly roles only. Restaurant, retail, hospitality — yes, applicants are there. Software engineering, anything remote — no, the audience doesn't match.",
  },
  {
    q: "How do I get my Indeed free posting to rank?",
    a: "You can't push it above sponsored, but you can pay $1/day for the first 72 hours to capture initial momentum, then drop to free. Most applicants come in week 1 anyway.",
  },
  {
    q: "Will Google Jobs index a free posting?",
    a: "Yes — Google Jobs indexes any structured-data JobPosting on a public careers page, regardless of whether you also paid to post on Indeed/LinkedIn. The placement is independent.",
  },
];
