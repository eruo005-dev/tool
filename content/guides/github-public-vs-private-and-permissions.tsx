/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Is GitHub safe for client work?&rdquo; comes up weekly in
      r/freelance and r/cscareerquestions. The answer depends on what you mean by
      safe — visibility, IP protection, security, or compliance. This guide walks
      each.
    </p>
  </>
);

export const toc = [
  { id: "private-vs-public", label: "Private vs public repos" },
  { id: "client-projects", label: "GitHub for client projects" },
  { id: "stolen-code", label: "Code theft + IP protection" },
  { id: "permissions", label: "Permissions + production safety" },
  { id: "license", label: "Using others&rsquo; code legally" },
  { id: "hacked", label: "What if GitHub gets hacked?" },
  { id: "api-keys", label: "Stopping API key leaks" },
];

export const body = (
  <>
    <h2 id="private-vs-public">Private vs public repos</h2>
    <ul>
      <li>
        <strong>Public:</strong> anyone can read. You control who can write. Free for
        unlimited repos. Visible to search engines.
      </li>
      <li>
        <strong>Private:</strong> only invited collaborators can read or write. Free
        for unlimited repos (since 2019). Not visible to search engines or
        non-collaborators.
      </li>
    </ul>
    <p>
      The default is private for new repos. Make sure you check before pushing
      anything sensitive.
    </p>

    <h2 id="client-projects">Is GitHub safe for client projects?</h2>
    <p>
      For most freelance + agency work: yes, with sensible setup.
    </p>
    <ul>
      <li>
        <strong>Use private repos for client work.</strong> Add the client as a
        collaborator if they want access; otherwise keep it to your team.
      </li>
      <li>
        <strong>Don&rsquo;t commit secrets.</strong> Use environment variables;
        configure the client&rsquo;s secrets via GitHub Actions secrets or their
        cloud provider&rsquo;s secret manager.
      </li>
      <li>
        <strong>Sign NDAs first.</strong> If client requires it, GitHub Enterprise
        Cloud or Enterprise Server has the compliance features (SAML SSO, audit
        logs, longer retention).
      </li>
      <li>
        <strong>Transfer the repo at project end.</strong> GitHub has a built-in
        repo transfer flow. Move it to the client&rsquo;s org when the engagement
        ends.
      </li>
    </ul>
    <p>
      For HIPAA / FedRAMP / similarly regulated work: GitHub Enterprise Cloud is
      compliant. Confirm specific requirements with the client&rsquo;s compliance team
      before committing.
    </p>

    <h2 id="stolen-code">How would I know if my code was stolen on GitHub?</h2>
    <p>
      Practical detection:
    </p>
    <ul>
      <li>
        <strong>GitHub code search.</strong> Search distinctive strings from your
        code. Catches direct copy-paste theft.
      </li>
      <li>
        <strong>Sourcegraph public search.</strong> Same idea, different index.
        Sometimes catches what GitHub search doesn&rsquo;t.
      </li>
      <li>
        <strong>Distinctive variable names + comments.</strong> Add unusual
        identifiers to your code. Plagiarism detection becomes trivial.
      </li>
      <li>
        <strong>License signal.</strong> If your repo is MIT/Apache, &ldquo;stealing&rdquo;
        is mostly attribution failure. Add a clear LICENSE file.
      </li>
    </ul>
    <p>
      For genuinely critical IP: don&rsquo;t put it on GitHub at all. Use a
      private repo with strict access controls, or self-host on GitLab/Gitea.
    </p>

    <h2 id="permissions">GitHub permissions + production safety</h2>
    <p>
      The branch protection rules that prevent breaking production:
    </p>
    <ul>
      <li>
        <strong>Required reviews.</strong> Block merge to main without N approvals.
      </li>
      <li>
        <strong>Required status checks.</strong> Block merge until CI passes.
      </li>
      <li>
        <strong>No force-push.</strong> Prevents history rewriting on main.
      </li>
      <li>
        <strong>Restrict who can push.</strong> Limit deploy-related branches to
        specific roles.
      </li>
      <li>
        <strong>Code owners.</strong> Require specific people to approve changes
        to specific paths (e.g. infra dirs require infra-team approval).
      </li>
    </ul>
    <p>
      Set these on day 1 for any team repo. Teams that skip them eventually have
      a &ldquo;why did this break production?&rdquo; incident that traces to a
      missing protection rule.
    </p>

    <h2 id="license">Can I download someone else&rsquo;s code and use it legally?</h2>
    <p>
      Depends on the license:
    </p>
    <ul>
      <li>
        <strong>MIT, Apache 2.0, BSD:</strong> permissive. You can use, modify,
        distribute, even commercially. Must include attribution.
      </li>
      <li>
        <strong>GPL, AGPL:</strong> copyleft. If you distribute software using
        GPL code, your software must also be GPL. AGPL extends this to
        network-served software.
      </li>
      <li>
        <strong>No license:</strong> default copyright applies. You can&rsquo;t
        legally use it without permission, even if it&rsquo;s public on GitHub.
      </li>
      <li>
        <strong>&ldquo;Source available&rdquo; (BSL, Elastic License):</strong>{" "}
        somewhere in between. Read the specific terms — usually allows internal
        use but restricts hosting as a competing service.
      </li>
    </ul>

    <h2 id="hacked">What happens to my code if GitHub gets hacked?</h2>
    <p>
      GitHub has had security incidents but no full-database breach to date. The
      practical risks:
    </p>
    <ul>
      <li>
        <strong>Account compromise.</strong> Most common. Mitigate with 2FA + a
        password manager.
      </li>
      <li>
        <strong>Token leakage.</strong> Personal Access Tokens accidentally
        committed to public repos. GitHub Secret Scanning catches most of these
        automatically.
      </li>
      <li>
        <strong>Provider-wide breach.</strong> Hypothetical. The realistic mitigation
        is keeping local clones (you have them anyway) and not relying on GitHub
        as your only backup.
      </li>
    </ul>
    <p>
      For genuinely critical code: mirror to a second provider (GitLab, Bitbucket,
      self-hosted Gitea) on a periodic schedule. Never have a single point of failure.
    </p>

    <h2 id="api-keys">Stopping API keys from getting leaked</h2>
    <p>
      Standard practices:
    </p>
    <ul>
      <li>
        <strong>Never commit secrets.</strong> Use .env files (gitignored), GitHub
        Actions secrets, or cloud secret managers.
      </li>
      <li>
        <strong>GitHub Secret Scanning.</strong> Free, scans for known token
        patterns (AWS, Stripe, etc.). Auto-rotates some tokens via partner
        integrations.
      </li>
      <li>
        <strong>Pre-commit hooks.</strong> Tools like git-secrets or trufflehog
        prevent committing tokens locally.
      </li>
      <li>
        <strong>Rotate tokens regularly.</strong> Even with prevention, assume some
        will leak. Short token lifetimes limit damage.
      </li>
      <li>
        <strong>If a token leaks:</strong> rotate immediately, audit access logs,
        force-push removal won&rsquo;t help (Git history persists in clones —
        consider it permanently exposed).
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Score your GitHub profile (free)",
  targetSlug: "github-profile-scorecard",
};

export const faq = [
  {
    q: "Is GitHub safe for client projects?",
    a: "Yes with sensible setup: use private repos, don't commit secrets, sign NDAs first, transfer repo at project end. For HIPAA/FedRAMP/regulated work: GitHub Enterprise Cloud is compliant — confirm specific client requirements before committing.",
  },
  {
    q: "What's the real difference between public and private repos?",
    a: "Public: anyone can read, you control writes, visible to search engines. Private: only invited collaborators can read or write, not search-indexed. Both free for unlimited repos. Default for new repos is private — verify before pushing anything sensitive.",
  },
  {
    q: "How do I stop my API keys from getting stolen on GitHub?",
    a: "Never commit secrets — use .env (gitignored) + GitHub Actions secrets or cloud secret managers. Enable GitHub Secret Scanning (free, auto-detects tokens). Use pre-commit hooks (git-secrets, trufflehog). Rotate tokens regularly. If a token leaks: rotate immediately; force-push won't help (Git history persists in clones).",
  },
  {
    q: "Can I download someone else's code on GitHub and use it legally?",
    a: "Depends on license. MIT/Apache/BSD: yes with attribution. GPL/AGPL: yes but your software must also be GPL/AGPL. No license: default copyright applies, you legally can't use without permission. Source-available (BSL, Elastic): read terms — usually allows internal use but restricts competing hosting.",
  },
  {
    q: "What happens to my code if GitHub gets hacked?",
    a: "GitHub has had incidents but no full-database breach to date. Realistic risks: account compromise (mitigate with 2FA), token leakage (Secret Scanning catches most), provider-wide breach (keep local clones, mirror to second provider for critical code). Never single-point-of-failure.",
  },
  {
    q: "How do I set up GitHub permissions so my team can't break production?",
    a: "Branch protection rules: required reviews (block merge without N approvals), required status checks (CI must pass), no force-push, restrict who can push to deploy branches, code owners (require specific approvers for specific paths). Set these on day 1 — teams that skip eventually have a 'why did this break' incident.",
  },
];
