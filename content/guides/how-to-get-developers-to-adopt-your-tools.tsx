/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Building a great dev tool is hard. Getting developers to actually adopt it is
      harder — and most dev tools fail at this stage rather than the build stage.
      Adoption is a different skill from engineering, and the two-thirds of dev tools
      that die quietly post-launch share patterns that are mostly preventable.
    </p>
    <p>
      This guide is the practical adoption playbook: what good adoption looks like,
      the strategies that work, the patterns that don&rsquo;t, and the specific angle
      of building tools that reduce developer burnout — which has become a real wedge
      in 2026.
    </p>
  </>
);

export const toc = [
  { id: "what-good-looks-like", label: "What good adoption looks like" },
  { id: "strategies", label: "Adoption strategies that work" },
  { id: "anti-patterns", label: "What doesn&rsquo;t work" },
  { id: "burnout", label: "Tools that reduce developer burnout" },
  { id: "what-makes-good", label: "What makes a good developer tool, again" },
];

export const body = (
  <>
    <h2 id="what-good-looks-like">What good adoption looks like</h2>
    <p>
      The single most useful adoption metric for new dev tools: <strong>30-day
      retention of trial users</strong>. Specifically, what percentage of people who
      installed your tool in their first week are still using it 30 days later?
    </p>
    <ul>
      <li>&lt;10%: tool isn&rsquo;t solving the problem people thought it would solve.</li>
      <li>10–25%: there&rsquo;s a real signal but the workflow has friction.</li>
      <li>25–50%: solid adoption; usually means a meaningful subset of users found product-market fit.</li>
      <li>50%+: rare; usually indicates strong PMF for the user segment that retained.</li>
    </ul>
    <p>
      Other lagging indicators (GitHub stars, HN front page, Twitter mentions) feel
      good but don&rsquo;t predict revenue or sustained usage. Star counts inflate fast
      from one HN hit; sustained usage doesn&rsquo;t.
    </p>

    <h2 id="strategies">Adoption strategies that work</h2>
    <ol>
      <li>
        <strong>Solve a problem that&rsquo;s already a complaint.</strong> Tools that
        target pain users are publicly complaining about adopt faster than tools that
        introduce a new workflow. Search Reddit / HN / Twitter for the language people
        use to complain — that becomes your landing page copy.
      </li>
      <li>
        <strong>Make the first 5 minutes magical.</strong> The single biggest leverage
        point. If install + first useful output takes &gt; 5 minutes, you&rsquo;re leaking
        users. Cut every step. Make the demo work without configuration.
      </li>
      <li>
        <strong>Distribute where developers already are.</strong> GitHub trending, HN
        Show HN, niche Slacks, Discord servers, niche newsletters (Pointer, TLDR
        Newsletter, dev.to top picks). Generic tech press rarely moves a needle for
        dev tools.
      </li>
      <li>
        <strong>Write technical content that teaches.</strong> Posts that solve a
        related problem and casually mention your tool in passing convert better than
        explicit launch posts. Sentry&rsquo;s blog, Stripe&rsquo;s engineering blog,
        Cloudflare&rsquo;s blog — all use this pattern.
      </li>
      <li>
        <strong>Build for one persona deeply, expand later.</strong>
        &ldquo;Tool for everyone&rdquo; converts no one. &ldquo;Tool for backend
        engineers at YC-stage startups using Postgres&rdquo; converts that audience.
        Expand only after you&rsquo;ve nailed one persona.
      </li>
      <li>
        <strong>Make the tool a primitive others can build on.</strong> If your tool
        has a clean API that other devs can wrap or extend, the user base compounds.
        Vercel, Sentry, Posthog all benefit from this multiplier.
      </li>
      <li>
        <strong>Public roadmap + responsive issue tracker.</strong> Devs trust tools
        whose maintainers actually respond. Closing issues quickly (even with
        &ldquo;won&rsquo;t fix&rdquo; explanations) builds trust faster than ignoring
        them.
      </li>
    </ol>

    <h2 id="anti-patterns">What doesn&rsquo;t work for adoption</h2>
    <ul>
      <li>
        <strong>Begging on Twitter.</strong> &ldquo;Please RT my new tool!&rdquo; gets
        polite ignores. The same effort spent writing a useful technical thread + the
        tool mention at the end converts.
      </li>
      <li>
        <strong>Paid ads to dev audience.</strong> Devs are unusually ad-blind. Targeted
        Twitter / Reddit / newsletter sponsorships sometimes work; banner ads
        almost never.
      </li>
      <li>
        <strong>Cold-emailing engineering leaders.</strong> Very low conversion. They
        get hundreds of these. The exception: a 200-word email referencing one specific
        thing they&rsquo;ve published, with a tightly-relevant tool, gets some
        responses.
      </li>
      <li>
        <strong>Influencer-style marketing.</strong> Devs distrust hype. A tool with 5
        slick promo videos and zero technical depth signals badly.
      </li>
      <li>
        <strong>&ldquo;Disrupting&rdquo; an established competitor without a clear
        wedge.</strong> &ldquo;We&rsquo;re building a better X&rdquo; without specifying
        the wedge gets dismissed. Specificity (&ldquo;we&rsquo;re building X
        specifically for Y, optimized for Z&rdquo;) gets attention.
      </li>
    </ul>

    <h2 id="burnout">Tools that reduce developer burnout</h2>
    <p>
      Developer burnout is a real and growing problem in 2026. Tools that explicitly
      target burnout reduction have a fresh opening:
    </p>
    <ul>
      <li>
        <strong>On-call experience tools.</strong> Smarter routing, fewer
        false-positive pages, better post-mortems. Tools like Pagerduty Insights,
        Incident.io are starting; the space has room.
      </li>
      <li>
        <strong>Better local dev environments.</strong> &ldquo;It works on my
        machine&rdquo; debugging burns hours. Tools that compress this loop are
        valuable. Devcontainers, Coder, Gitpod hint at the direction.
      </li>
      <li>
        <strong>Code review fatigue tools.</strong> Tools that summarize PR diffs,
        auto-approve safe changes, route review work fairly. Graphite has elements;
        room for more.
      </li>
      <li>
        <strong>Async-first communication tools for engineering teams.</strong> Reducing
        synchronous interrupts. Linear is the obvious example; the space is wider.
      </li>
      <li>
        <strong>Tools that auto-document or auto-summarize.</strong> Cuts down the
        &ldquo;catch up after vacation&rdquo; tax that drives burnout in fast-moving
        teams.
      </li>
    </ul>

    <h2 id="what-makes-good">What makes a good developer tool</h2>
    <p>
      Tying it together: tools that adopt well share a profile. They solve one
      well-defined problem deeply, install in &lt; 5 minutes, integrate where developers
      already work, ship machine-readable output for composability, and feel
      respectful of users&rsquo; time. The CLI DX checklist (16 items) formalizes
      this — see our <a href="/tools/cli-dx-checklist">checklist tool</a>.
    </p>
  </>
);

export const cta = {
  label: "Run the CLI DX checklist on your tool",
  targetSlug: "cli-dx-checklist",
};

export const faq = [
  {
    q: "How do I get developers to adopt my tools?",
    a: "Solve a problem already complained about (use their language on your landing page), make the first 5 minutes magical, distribute where developers are (GitHub, HN, niche Slacks, dev newsletters), write technical content that teaches (with the tool in passing), build deep for one persona before expanding, expose a clean API for compounding adoption, run a responsive issue tracker.",
  },
  {
    q: "What makes a good developer tool?",
    a: "Solves one well-defined problem deeply, installs in <5 minutes, integrates with where developers already work, ships machine-readable output for composability, respects users' time. Bad tools are broad-and-shallow; good tools are narrow-and-deep with clear extensibility.",
  },
  {
    q: "How can I build tools that reduce developer burnout?",
    a: "Categories with real demand in 2026: on-call experience improvement (smarter routing, fewer false pages), local dev environments (compress 'works on my machine' debugging), code review fatigue tools (summarize, auto-approve safe diffs), async-first team communication, auto-documentation tools that reduce catch-up tax.",
  },
  {
    q: "What adoption metrics matter for new developer tools?",
    a: "30-day retention of trial users is the single most predictive metric. <10% means the tool isn't solving the perceived problem; 10-25% has signal but workflow friction; 25-50% is solid PMF for some user segment; 50%+ is rare and indicates strong PMF. GitHub stars and HN front-page visits feel good but don't predict sustained usage.",
  },
];
