/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      GitHub Pages is free static hosting tied to your repository. For many small
      projects + portfolios it&rsquo;s the right choice. For others (dynamic content,
      auth, large files) you need traditional web hosting. This guide walks the
      tradeoffs, plus what GitHub costs once you outgrow free tiers.
    </p>
  </>
);

export const toc = [
  { id: "pages-vs-hosting", label: "GitHub Pages vs traditional hosting" },
  { id: "cost", label: "How much does GitHub cost?" },
  { id: "non-code", label: "Using GitHub for non-code documents" },
  { id: "replace-slack", label: "Can GitHub replace Slack?" },
];

export const body = (
  <>
    <h2 id="pages-vs-hosting">GitHub Pages vs web hosting</h2>
    <p>
      GitHub Pages strengths:
    </p>
    <ul>
      <li>Free for public repos (and private with paid GitHub plans).</li>
      <li>Auto-deploys on push to your designated branch.</li>
      <li>Custom domain support via CNAME.</li>
      <li>HTTPS by default.</li>
      <li>1 GB storage, 100 GB/month bandwidth soft limits.</li>
    </ul>
    <p>
      Limitations:
    </p>
    <ul>
      <li>Static only — no server-side code (no databases, no auth, no APIs).</li>
      <li>Build timeout (10 minutes per Pages build).</li>
      <li>No log access for debugging.</li>
      <li>Some build step constraints (Jekyll natively; other generators via GitHub Actions).</li>
    </ul>
    <p>
      When to use GitHub Pages: docs sites, project landing pages, simple
      portfolios, static blogs (Jekyll/Hugo/Astro/Next-static-export). Best for
      content sites with no backend.
    </p>
    <p>
      When you need traditional hosting (Vercel, Netlify, AWS, your own server):
      dynamic content, server-rendered pages, auth flows, databases, APIs, file
      uploads. The Vercel/Netlify free tiers are also generous and cover more
      use cases than Pages.
    </p>

    <h2 id="cost">How much does GitHub cost?</h2>
    <ul>
      <li>
        <strong>Free tier:</strong> unlimited public + private repos. 2000 GitHub
        Actions minutes/month for personal accounts; 3000 for orgs. 500 MB Packages
        storage. Codespaces 60 hours/month (2-core).
      </li>
      <li>
        <strong>Pro ($4/month):</strong> more Actions minutes (3000), more Codespaces
        hours, advanced features (codeowners, draft PRs, required reviews).
      </li>
      <li>
        <strong>Team ($4/seat/month):</strong> for organizations — adds team
        permissions + tooling.
      </li>
      <li>
        <strong>Enterprise ($21/seat/month):</strong> SAML SSO, audit log API,
        Enterprise Cloud-only features.
      </li>
    </ul>
    <p>
      For solo devs + small teams: free tier covers most use cases. The
      surprise bill source is GitHub Actions minutes — see our{" "}
      <a href="/tools/github-actions-cost-estimator">Actions cost estimator</a>.
    </p>

    <h2 id="non-code">Using GitHub for non-code documents</h2>
    <p>
      Yes — increasingly common for technical writing, design docs, structured
      content. Strengths:
    </p>
    <ul>
      <li>
        <strong>Version control on Markdown / text.</strong> See exactly what changed
        between versions. Diff view is great for prose review.
      </li>
      <li>
        <strong>PR-based review process.</strong> Same tooling as code review for
        documentation changes.
      </li>
      <li>
        <strong>Branching for drafts.</strong> Keep work-in-progress separate from
        published content.
      </li>
      <li>
        <strong>Free hosting via Pages.</strong> Convert Markdown to a published site
        with one config file.
      </li>
    </ul>
    <p>
      Weaknesses for non-code use:
    </p>
    <ul>
      <li>Binary files (Figma, Sketch, Word docs) don&rsquo;t diff well.</li>
      <li>Non-technical collaborators struggle with the Git workflow.</li>
      <li>Image-heavy content bloats repos (use Git LFS for large media).</li>
    </ul>
    <p>
      Best fit: documentation, technical writing, blogs, structured content,
      design specs. Worst fit: visual design files, large binaries, fast-iterating
      with non-technical people.
    </p>

    <h2 id="replace-slack">Can GitHub replace Slack?</h2>
    <p>
      For most teams, no. GitHub Discussions, Issues, and Pull Request comments
      handle async, structured conversation around code. Slack handles synchronous,
      free-form team chat. Different tools for different jobs.
    </p>
    <p>
      What GitHub <em>can</em> replace from your Slack workflow:
    </p>
    <ul>
      <li>Code-related discussions (move to PR comments + Issues).</li>
      <li>Async questions about specific repos (move to Discussions).</li>
      <li>Status updates on shipped features (move to release notes + Discussions).</li>
    </ul>
    <p>
      What GitHub <em>can&rsquo;t</em> replace:
    </p>
    <ul>
      <li>Synchronous team chat (water-cooler, quick questions, hallway conversations).</li>
      <li>Voice/video calls.</li>
      <li>Cross-team announcements.</li>
      <li>Non-engineering team coordination.</li>
    </ul>
    <p>
      The realistic move is consolidating engineering-specific Slack channels into
      GitHub — not eliminating Slack entirely. You&rsquo;ll still want one for the
      synchronous + cross-team needs.
    </p>
  </>
);

export const cta = {
  label: "Estimate GitHub Actions costs",
  targetSlug: "github-actions-cost-estimator",
};

export const faq = [
  {
    q: "What's the difference between GitHub Pages and web hosting?",
    a: "GitHub Pages: free static hosting, auto-deploy on push, HTTPS, custom domains. Best for docs sites, portfolios, simple static blogs. Limits: no server-side code, 10-min build timeout, no logs. Traditional hosting (Vercel, Netlify, AWS): dynamic content, server-rendering, auth, databases, APIs.",
  },
  {
    q: "How much does GitHub actually cost?",
    a: "Free tier: unlimited public + private repos, 2000 Actions minutes/mo personal (3000 org), 500 MB Packages, 60 Codespaces hours. Pro $4/mo: more capacity. Team $4/seat: org features. Enterprise $21/seat: SAML SSO, audit logs. Surprise bills usually come from Actions overage.",
  },
  {
    q: "Can I use GitHub to manage non-code documents?",
    a: "Yes — version control, PR review, branching all work for Markdown/text. Best for docs, technical writing, blogs, design specs. Weak for binary files (Figma, Word) that don't diff well, and for non-technical collaborators who struggle with Git.",
  },
  {
    q: "Can GitHub replace Slack for team communication?",
    a: "For most teams, no. GitHub handles async structured conversation around code (Discussions, Issues, PR comments). Slack handles synchronous free-form team chat. Realistic move: consolidate engineering-specific Slack channels into GitHub, keep Slack for the rest.",
  },
];
