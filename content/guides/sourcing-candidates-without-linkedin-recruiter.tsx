/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      LinkedIn Recruiter starts at $170/seat/month — and that&rsquo;s the &ldquo;Lite&rdquo;
      tier. For a small team or solo recruiter, that&rsquo;s the difference between hiring
      one person yourself vs hiring with an actual sourcing tool. The Reddit consensus
      across <a href="https://www.reddit.com/r/recruiting/" rel="noreferrer">r/recruiting</a>{" "}
      is that you can replicate ~70% of what Recruiter does with free tools — IF you know
      the workarounds.
    </p>
    <p>
      Here&rsquo;s the actual playbook used by independent recruiters and small in-house
      teams. Covers sourcing on free LinkedIn, finding hiring managers without InMail,
      surfacing candidates from GitHub / Stack Overflow / Dribbble, and the social-media
      tactics that actually work.
    </p>
  </>
);

export const toc = [
  { id: "linkedin-free", label: "Sourcing on free LinkedIn" },
  { id: "boolean", label: "Google Boolean searches" },
  { id: "github", label: "GitHub for engineering roles" },
  { id: "design", label: "Dribbble + Behance for design" },
  { id: "hiring-mgrs", label: "Finding hiring managers" },
  { id: "social", label: "Social media + community sourcing" },
];

export const body = (
  <>
    <h2 id="linkedin-free">Sourcing on free LinkedIn (without Recruiter)</h2>
    <p>
      Free LinkedIn has soft caps on commercial use of search (~100 searches/month before
      the &ldquo;you&rsquo;ve hit your search limit&rdquo; wall). Inside that limit, the
      free filters that matter:
    </p>
    <ul>
      <li>
        <strong>Title + location + company size:</strong> the three filters that survive
        the free tier. &ldquo;Senior frontend engineer, San Francisco, 11–50&rdquo;
        narrows fast.
      </li>
      <li>
        <strong>Years-of-experience:</strong> filter as &ldquo;3rd-degree connections&rdquo;
        + &ldquo;current company&rdquo; rather than years explicitly (that filter is
        gated). Most senior engineers have 3+ companies in profile.
      </li>
      <li>
        <strong>School + skills:</strong> still free, surprisingly under-used.
      </li>
      <li>
        <strong>&ldquo;Open to work&rdquo; banner:</strong> visible to everyone, indicates
        active job seekers.
      </li>
    </ul>
    <p>
      Then send a connect request with a personalized note. The accept rate sweet spot is
      a 1–2 sentence note referencing one specific thing in their profile (a post, a
      project, a company). Generic &ldquo;hey, I&rsquo;m a recruiter&rdquo; gets ~5%
      acceptance. Specific gets 25–35%.
    </p>

    <h2 id="boolean">Google Boolean searches (the LinkedIn workaround)</h2>
    <p>
      Public LinkedIn profiles are indexed by Google. You can search them outside
      LinkedIn&rsquo;s gated free-tier limits:
    </p>
    <pre><code>{`site:linkedin.com/in/ "react developer" "remote" -intern
site:linkedin.com/in/ ("data scientist" OR "ML engineer") "python" "boston"`}</code></pre>
    <p>
      The same logic works for Stack Overflow, GitHub, Behance, and any site with
      indexable user profiles. Boolean search is the most underrated sourcing skill —
      worth an hour of practice.
    </p>

    <h2 id="github">GitHub for engineering roles</h2>
    <p>
      Public commits are public. GitHub&rsquo;s Advanced Search lets you find candidates
      by language, location (where listed), and commit recency:
    </p>
    <pre><code>{`location:Berlin language:Rust followers:>100
language:Go location:NYC repos:>10`}</code></pre>
    <p>
      What &ldquo;good signal&rdquo; looks like on GitHub: consistent recent commits
      (last 12 months), ownership of repos vs only forks, README quality on personal
      projects, and a real bio with company / location. Total commit count is a weaker
      signal — quality &gt; quantity.
    </p>
    <p>
      Reach out via the email on their profile, or open an issue on one of their public
      repos with a polite intro (controversial but effective; some maintainers find it
      annoying).
    </p>

    <h2 id="design">Dribbble + Behance for design roles</h2>
    <p>
      Dribbble and Behance both have free portfolio search. Filters by location, role,
      and availability are free (Dribbble flags &ldquo;available for hire&rdquo;).
      Behance shows project recency. Both expose contact info or messaging without
      paid tiers. Outreach approach: reference one specific project — designers care
      about being seen as creative humans, not roles.
    </p>

    <h2 id="hiring-mgrs">Finding hiring managers (the bypass-the-recruiter move)</h2>
    <p>
      For job seekers reaching out for opportunities directly, finding the hiring manager
      means skipping the application black hole. Free workflow:
    </p>
    <ol>
      <li>
        Find the company on LinkedIn → People → search title (e.g.{" "}
        &ldquo;VP Engineering&rdquo;, &ldquo;Director of Marketing&rdquo;).
      </li>
      <li>
        Cross-reference with the org chart you can infer from the team page on the
        company website.
      </li>
      <li>
        Find their email pattern: most companies use{" "}
        <code>firstname@</code>, <code>firstname.lastname@</code>, or{" "}
        <code>flastname@</code> + the company domain. Free tools like Hunter.io give 25
        free searches/month. Apollo.io free tier gives 60.
      </li>
      <li>
        Verify the email with NeverBounce free tier or just send a short, polite intro —
        bounced emails are a non-event.
      </li>
    </ol>
    <p>
      Same playbook works for recruiters cold-reaching candidates: find the candidate, find
      their email, send a short specific message.
    </p>

    <h2 id="social">Social media + community sourcing</h2>
    <p>
      Where actual candidates hang out (free, no premium accounts needed):
    </p>
    <ul>
      <li>
        <strong>Slack communities:</strong> Reactiflux (frontend), Designer Hangout
        (design), Locally Optimistic (analytics), Rands Leadership (eng managers). Most
        have #jobs channels with employer-friendly rules.
      </li>
      <li>
        <strong>Discord servers:</strong> Programming Discord, GameDev League, niche
        per-language servers. Younger, more junior skew, but high signal for entry-level
        sourcing.
      </li>
      <li>
        <strong>Twitter / X:</strong> #hiring searches, individual replies on tech-leader
        posts. Slow burn but high quality when it works.
      </li>
      <li>
        <strong>Reddit:</strong> r/forhire, r/jobsearch, niche subs (r/REMOTEjobs,
        r/cscareerquestions monthly hiring threads). Read the rules — most subs ban
        cold-DM recruiters.
      </li>
      <li>
        <strong>Newsletter sponsorships:</strong> not free, but cheap ($50–500). A
        single &ldquo;we&rsquo;re hiring&rdquo; in a relevant niche newsletter
        outperforms LinkedIn posts.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Track sourced candidates (free pipeline tool)",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "How many searches per month does free LinkedIn allow before locking me out?",
    a: "Roughly 100 searches per calendar month for free accounts; the limit is opaque and triggers a 'commercial use limit reached' wall that resets monthly. Sales Navigator (paid, but cheaper than Recruiter) lifts it.",
  },
  {
    q: "Is reaching out to a candidate on GitHub annoying?",
    a: "Sometimes. The norm: open an issue or contact via email. Don't open a pull request as an outreach mechanism. Don't message about a job in a code review. Most engineers don't mind a polite, specific email about a real opportunity.",
  },
  {
    q: "Can I find anyone's email for free?",
    a: "For most professionals at companies with public domains, yes — Hunter.io and Apollo.io free tiers give 25–60 lookups/month, enough for targeted sourcing. Personal Gmail/Outlook addresses for individuals not at a public domain are harder.",
  },
  {
    q: "Does cold outreach actually work without LinkedIn Recruiter?",
    a: "Yes — independent recruiters do this full time. The trick is volume × specificity: one personalized message to 50 candidates beats 500 generic InMails on Recruiter.",
  },
];
