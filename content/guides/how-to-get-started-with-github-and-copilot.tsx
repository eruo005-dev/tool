/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Getting started with GitHub feels overwhelming because the platform does many
      things — version control, hosting, collaboration, CI/CD, project management.
      For your first project, you only need a fraction of it. This guide walks through
      the practical first-week setup, including GitHub Copilot if you&rsquo;re adding
      it.
    </p>
  </>
);

export const toc = [
  { id: "first-project", label: "Your first project on GitHub" },
  { id: "copilot-setup", label: "Setting up Copilot" },
  { id: "team-onboarding", label: "Onboarding a team" },
  { id: "learning-curve", label: "Realistic learning curve" },
];

export const body = (
  <>
    <h2 id="first-project">Your first project on GitHub</h2>
    <p>
      The minimum-viable workflow:
    </p>
    <ol>
      <li>
        <strong>Sign up</strong> at github.com (free).
      </li>
      <li>
        <strong>Click &ldquo;New repository.&rdquo;</strong> Pick a name. Decide
        public or private (public is fine for learning, private if it contains
        anything sensitive).
      </li>
      <li>
        <strong>Initialize with README + .gitignore.</strong> Pick the .gitignore
        template matching your language (Node, Python, etc.).
      </li>
      <li>
        <strong>Clone to your machine.</strong> Copy the HTTPS URL, run{" "}
        <code>git clone &lt;url&gt;</code> in your terminal.
      </li>
      <li>
        <strong>Add files, commit, push.</strong>
        <pre><code>{`git add .
git commit -m "Initial commit"
git push`}</code></pre>
      </li>
      <li>
        <strong>Refresh GitHub.</strong> Your code is now hosted.
      </li>
    </ol>
    <p>
      That&rsquo;s the entire first day. Everything else (branches, PRs, Actions,
      issues) you&rsquo;ll add as you need it.
    </p>

    <h2 id="copilot-setup">Setting up GitHub Copilot</h2>
    <ol>
      <li>Sign up at <code>github.com/features/copilot</code>. 30-day free trial.</li>
      <li>Install the extension in your IDE — VSCode, JetBrains, Neovim, Cursor all support.</li>
      <li>Sign in to the extension with your GitHub account.</li>
      <li>Open any code file. Type a function comment. Copilot suggests the body. Tab to accept; Esc to dismiss.</li>
    </ol>
    <p>
      Time investment: 10 minutes for setup. 1-2 weeks for your acceptance habits to
      stabilize (which suggestions you take vs reject). Most people see meaningful
      productivity gains by week 2.
    </p>

    <h2 id="team-onboarding">Onboarding a team to GitHub</h2>
    <p>
      For a 5-15 person team:
    </p>
    <ul>
      <li>
        <strong>Day 1:</strong> create the org, add team members, set up repository
        permissions.
      </li>
      <li>
        <strong>Day 2-3:</strong> 30-minute walkthrough on creating branches, opening
        PRs, code review etiquette. Most teams have someone already familiar — let
        them lead.
      </li>
      <li>
        <strong>Week 2:</strong> introduce GitHub Actions for tests + lint. Use
        existing workflow templates; don&rsquo;t custom-build initially.
      </li>
      <li>
        <strong>Month 2:</strong> introduce GitHub Issues + Projects for tracking
        work (if you want to consolidate from Jira/Linear). Optional.
      </li>
    </ul>
    <p>
      Don&rsquo;t try to teach everything at once. The Git Bible is a mistake; learn
      by doing.
    </p>

    <h2 id="learning-curve">Realistic learning curve</h2>
    <ul>
      <li><strong>Week 1:</strong> commit + push + clone. Comfortable with the basics.</li>
      <li><strong>Week 2:</strong> branches + pull requests. The collaboration mental model clicks.</li>
      <li><strong>Month 1:</strong> code review etiquette, .gitignore, basic Actions.</li>
      <li><strong>Month 3:</strong> rebases, cherry-picks, conflict resolution, Issues + Projects.</li>
      <li><strong>Year 1:</strong> comfortable enough that GitHub feels like infrastructure rather than a tool to learn.</li>
    </ul>
    <p>
      For Copilot specifically: 1-2 weeks until your acceptance habits stabilize.
      6 months until you internalize what kinds of prompts produce useful suggestions.
    </p>
  </>
);

export const cta = {
  label: "Score your GitHub profile (free)",
  targetSlug: "github-profile-scorecard",
};

export const faq = [
  {
    q: "How do I actually use GitHub for my first project?",
    a: "Sign up, create a repo with README + .gitignore, clone to your machine, add code, commit, push. That's day 1 — everything else (branches, PRs, Actions) you'll learn as you need it.",
  },
  {
    q: "How long does it take to learn GitHub?",
    a: "Week 1: basics (commit/push/clone). Week 2: branches + PRs. Month 1: code review + Actions. Month 3: advanced operations. Year 1: feels like infrastructure rather than a tool to learn.",
  },
  {
    q: "How do I get started with GitHub Copilot?",
    a: "Sign up at github.com/features/copilot for 30-day free trial. Install extension in your IDE (VSCode, JetBrains, Neovim, Cursor). Sign in. Type a function comment, see suggestion. 10 minutes setup; 1-2 weeks for acceptance habits to stabilize.",
  },
  {
    q: "What's the easiest way to learn GitHub for my team?",
    a: "Day 1: org + permissions. Day 2-3: 30-min walkthrough on branches + PRs (let an experienced team member lead). Week 2: introduce Actions for tests/lint with templates. Month 2: optional Issues + Projects. Don't try to teach everything at once.",
  },
];
