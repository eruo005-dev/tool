/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Your GitHub profile is part of your resume in 2026. For developers without a
      traditional CS degree, it&rsquo;s often the most important part. This guide
      walks the practical playbook for building a portfolio hiring managers actually
      want to interview.
    </p>
  </>
);

export const toc = [
  { id: "what-employers-want", label: "What hiring managers look at" },
  { id: "no-degree", label: "Getting hired without a degree" },
  { id: "monetize", label: "Making money from code on GitHub" },
  { id: "freelance", label: "Finding freelance work via GitHub" },
  { id: "job-opportunities", label: "Finding job opportunities through GitHub" },
];

export const body = (
  <>
    <h2 id="what-employers-want">What hiring managers actually look at</h2>
    <p>
      Score yourself with our{" "}
      <a href="/tools/github-profile-scorecard">profile scorecard</a> for the
      structured 90-second review experience. The 8 criteria that matter most:
    </p>
    <ol>
      <li>
        <strong>Pinned repos.</strong> 4-6 of them, all production-quality. The
        first thing visitors see.
      </li>
      <li>
        <strong>READMEs.</strong> Each pinned repo with a clear README — what, why,
        how to run, screenshots if visual.
      </li>
      <li>
        <strong>Project quality signals.</strong> Tests, CI, docs, demo links. Looks
        production-ready vs course-project.
      </li>
      <li>
        <strong>Recent commit activity.</strong> Last 12 months matters most.
        Consistent &gt; burst.
      </li>
      <li>
        <strong>Language depth.</strong> Going deep on 1-2 beats surface across 10.
      </li>
      <li>
        <strong>OSS contributions.</strong> PRs to projects other than your own.
      </li>
      <li>
        <strong>Bio + name + photo + contact info.</strong> Real, professional.
      </li>
      <li>
        <strong>Stars + followers.</strong> Vanity but real signal at high counts.
      </li>
    </ol>

    <h2 id="no-degree">Can I really get hired through GitHub without a degree?</h2>
    <p>
      Yes, increasingly common. The hiring market in 2026 routinely interviews
      candidates with strong GitHub portfolios but no traditional CS degree. The
      portfolio bar is what hiring managers can see in 90 seconds.
    </p>
    <p>
      The sequence:
    </p>
    <ol>
      <li>
        <strong>Build 4-6 production-quality pinned repos.</strong> Real projects,
        not tutorials. Test coverage, README, deploy demo if applicable.
      </li>
      <li>
        <strong>Make 2-3 substantive OSS contributions.</strong> PRs to projects
        you actually use. Demonstrates you can navigate someone else&rsquo;s code.
      </li>
      <li>
        <strong>Write 6 technical posts</strong> (your blog, dev.to, Medium). Topics
        from your build experience. Demonstrates ability to communicate.
      </li>
      <li>
        <strong>Apply with the GitHub link prominent.</strong> Not buried at the
        bottom of the resume.
      </li>
      <li>
        <strong>Network in OSS communities.</strong> Discord, Slack, communities
        around the libraries you use. Most non-traditional hires come from there,
        not cold applications.
      </li>
    </ol>
    <p>
      Bias to be aware of: some big-tech FAANG-tier companies still pattern-match
      hard on degree. Most companies in 2026 don&rsquo;t. You&rsquo;ll have plenty
      of options without a degree as long as the portfolio is strong.
    </p>

    <h2 id="monetize">How do I make money from code I put on GitHub?</h2>
    <p>
      Five paths that work for indie devs in 2026:
    </p>
    <ol>
      <li>
        <strong>GitHub Sponsors.</strong> If you maintain a popular OSS project,
        users + companies sponsor monthly. Most maintainers get $0-2K/month;
        a few popular projects clear $10K+. Enable on your profile.
      </li>
      <li>
        <strong>Open-core SaaS.</strong> Open-source the engine, charge for hosted/
        enterprise tier. Posthog, Sentry, dbt, GitLab all started as OSS projects
        on GitHub.
      </li>
      <li>
        <strong>Pro features for individuals.</strong> Plugin marketplaces (VS Code
        extensions, Figma plugins, Stripe Apps), template libraries, paid Notion
        templates.
      </li>
      <li>
        <strong>Productize the knowledge.</strong> Blog → newsletter → course → book.
        Your GitHub establishes you have actually built things; the products
        monetize the audience.
      </li>
      <li>
        <strong>Consulting.</strong> Open-source visibility leads to consulting
        opportunities. Common path: maintain a popular library, get hired for
        contract work in that domain.
      </li>
    </ol>

    <h2 id="freelance">How do I find freelance work using my GitHub profile?</h2>
    <p>
      Make your profile recruiter-discoverable:
    </p>
    <ul>
      <li>Real name + photo.</li>
      <li>Location + timezone in bio.</li>
      <li>&ldquo;Available for freelance&rdquo; or &ldquo;Open to work&rdquo; note.</li>
      <li>Link to your portfolio site (or the GitHub Pages site of your portfolio repo).</li>
      <li>Pin client-relevant work — if you do React contracts, pin React projects.</li>
    </ul>
    <p>
      Distribution paths:
    </p>
    <ul>
      <li>
        <strong>Freelance platforms (Upwork, Toptal, Contra, Codementor):</strong>{" "}
        list GitHub on your profile. Recruiters check it during screening.
      </li>
      <li>
        <strong>OSS-adjacent referrals.</strong> Maintainers of popular libraries
        often get hired for contract work. Sustained contributions to a popular
        project compound visibility.
      </li>
      <li>
        <strong>Direct cold outreach.</strong> Email companies whose stack you know
        well; mention GitHub work that&rsquo;s relevant. ~5-10% reply rate at
        smaller companies.
      </li>
      <li>
        <strong>Niche Discord / Slack communities.</strong> Some have #hiring or
        #freelance channels.
      </li>
    </ul>

    <h2 id="job-opportunities">How do I find job opportunities through GitHub directly?</h2>
    <p>
      GitHub itself doesn&rsquo;t host a major job board. The opportunities flow
      indirectly:
    </p>
    <ul>
      <li>
        <strong>Recruiters search GitHub.</strong> If your profile is searchable
        (real name, location, public bio), you&rsquo;ll get InMail / DM. Quality
        varies; some companies do this well, some spam.
      </li>
      <li>
        <strong>OSS maintainer paths.</strong> Companies hire maintainers of
        projects they depend on (Stripe, Cloudflare, Anthropic, GitHub itself
        all do this).
      </li>
      <li>
        <strong>Talent sourcing platforms.</strong> Hired, Wellfound, Triplebyte
        link to your GitHub during the matching process.
      </li>
      <li>
        <strong>Networking through PR conversations.</strong> Long-running OSS
        relationships sometimes turn into hiring conversations 1-2 years later.
      </li>
    </ul>
    <p>
      The general principle: be findable, build in public, sustain over months
      not weeks. The compounding pays off slowly and reliably.
    </p>
  </>
);

export const cta = {
  label: "Score your profile with the scorecard",
  targetSlug: "github-profile-scorecard",
};

export const faq = [
  {
    q: "How do I build a GitHub portfolio that impresses employers?",
    a: "Six things matter most: 4-6 production-quality pinned repos (not course projects), each with clear README + live demo if visual, depth on 1-2 languages (not surface across 10), 1-2 substantive OSS PRs, real bio + photo + contact, consistent commit cadence over last 12 months. Use our scorecard for the 90-second hiring-manager view.",
  },
  {
    q: "Can I really get hired through GitHub without a degree?",
    a: "Yes — increasingly common in 2026. Build 4-6 production-quality pinned repos, make 2-3 substantive OSS contributions, write technical posts, apply with GitHub link prominent, network in OSS communities. Some big-tech FAANG-tier still pattern-matches hard on degree; most other companies don't.",
  },
  {
    q: "How do I make money from code I put on GitHub?",
    a: "Five paths: GitHub Sponsors (most $0-2K/mo, popular ones $10K+), open-core SaaS (Posthog/Sentry/dbt model), pro features for individuals (plugin marketplaces, paid templates), productize knowledge (blog → newsletter → course → book), consulting (OSS visibility → contract work).",
  },
  {
    q: "How do I find freelance work using my GitHub profile?",
    a: "Make profile recruiter-discoverable: real name + photo + location + 'available for freelance' note + portfolio site + pinned client-relevant work. Distribution paths: freelance platforms (Upwork, Toptal, Contra), OSS-adjacent referrals, cold outreach to relevant-stack companies, niche Discord/Slack #hiring channels.",
  },
  {
    q: "How do I find job opportunities through GitHub directly?",
    a: "GitHub doesn't host a major job board; opportunities flow indirectly. Recruiters search GitHub for talent (be findable). Companies hire maintainers of projects they depend on. Talent platforms (Hired, Wellfound, Triplebyte) link your GitHub. Networking through PR conversations sometimes turns into hiring 1-2 years later.",
  },
];
