/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The job-search vertical we shipped in Wave 43 covers the strategic questions
      (which tools to use, ATS reality, comparison of Jobscan/Teal/Huntr). This
      bolt-on guide is the tactical AI-prompt playbook — the specific prompts that
      get higher-quality output for cover letters, company research, application
      tailoring, and the hybrid human-AI workflow that actually wins.
    </p>
  </>
);

export const toc = [
  { id: "cover-letter", label: "Cover letter prompts that work" },
  { id: "company-research", label: "AI company research before interviews" },
  { id: "boolean-search", label: "Boolean search prompts for job matching" },
  { id: "hybrid", label: "Combining human touch with AI" },
  { id: "time-savings", label: "Real time-savings from AI" },
  { id: "disclosure", label: "Should you tell employers you used AI?" },
];

export const body = (
  <>
    <h2 id="cover-letter">Can AI write your cover letter? (Yes, with the right prompt.)</h2>
    <p>
      The wrong way: &ldquo;Write a cover letter for [job].&rdquo; You get
      generic boilerplate.
    </p>
    <p>
      The right way:
    </p>
    <pre><code>{`Write a 250-word cover letter for [role] at [company].

About me: [one paragraph from your resume + LinkedIn].
About them: [paste their About / careers page paragraph].
About this role: [paste 3 specific JD bullets].

Make ONE specific connection between my background and their
mission, in the opening line. Use plain language — no
"passionate about leveraging" filler. Include one concrete
metric from my background. End with a clear next step.`}</code></pre>
    <p>
      Why this works: it forces specificity (real names, real metrics, real
      mission), constrains length (cover letters &gt; 300 words don&rsquo;t get
      read), and prohibits the AI tells (&ldquo;passionate,&rdquo;
      &ldquo;leverage,&rdquo; &ldquo;synergistic&rdquo;).
    </p>
    <p>
      Always edit the output. AI cover letters read 80% right and 20% wrong. The
      20% is what makes the difference — fix the awkward phrasing, replace
      generic adjectives, add a specific anecdote.
    </p>

    <h2 id="company-research">AI company research before interviews</h2>
    <p>
      The 200-word company brief that pays off:
    </p>
    <pre><code>{`Brief me on [company] in 200 words.

Cover:
1. What they do + how they make money
2. Recent funding or major milestones (last 12 months)
3. Engineering culture signals from public posts /
   Glassdoor / their blog
4. 3 challenges that might be relevant to a [your role]

Don't speculate beyond what's publicly visible. Cite specific
sources.`}</code></pre>
    <p>
      Run before interview prep. Saves 30 minutes of unstructured Googling.
    </p>
    <p>
      For deeper interview prep, the question variant:
    </p>
    <pre><code>{`Given [company]'s situation [paste brief above], what 3
likely interview questions would [role] candidates face?
Suggest a 2-sentence answer framework for each.`}</code></pre>

    <h2 id="boolean-search">Boolean search prompts recruiters swear by</h2>
    <p>
      For job seekers using Boolean searches to find companies hiring in your
      stack:
    </p>
    <pre><code>{`Generate Google Boolean searches to find companies hiring
[your role] with [your specific skills], excluding obvious
non-matches (consultancies, recruiters, internships if not
seeking).

Return 5 search queries with explanations of what each
prioritizes.`}</code></pre>
    <p>
      Example output the model might generate:
    </p>
    <pre><code>{`site:lever.co OR site:greenhouse.io "Senior React developer"
  "remote" -intern -agency

site:linkedin.com/jobs "AI engineer" "Python" "PyTorch"
  "$150,000.." -recruiter -staffing`}</code></pre>
    <p>
      Iterate the queries based on what they find. Most hiring-manager-blog
      posts about Boolean searches recycle the same 5 patterns; AI generates
      variants tuned to your specific situation.
    </p>

    <h2 id="hybrid">Combining human touch with AI in your job search</h2>
    <p>
      The teams who win their job searches in 2026 aren&rsquo;t the ones who
      auto-apply via AI. They&rsquo;re the ones who use AI to free up time for
      the high-leverage human work:
    </p>
    <ul>
      <li>
        <strong>AI does:</strong> first-draft cover letters, company research
        briefs, resume keyword scanning, mock interview prep, salary research
        prompts, follow-up templates.
      </li>
      <li>
        <strong>You do:</strong> network conversations, hand-personalize the
        cover letter intro, ask for referrals, do thoughtful applications to
        roles that genuinely fit, write the actual interview answers, build
        relationships post-interview.
      </li>
    </ul>
    <p>
      The trap to avoid: using AI to apply to more jobs less personally.
      Auto-apply tools (LazyApply, Sonara, Massive) tank reply rates because
      nothing is tailored. Use the AI hours to apply to fewer jobs more deeply.
    </p>

    <h2 id="time-savings">Real time savings from AI on job applications</h2>
    <p>
      Honest accounting:
    </p>
    <ul>
      <li>
        <strong>Cover letter:</strong> traditional 30-45 min per app → with AI
        + edit, 8-12 min. Savings: ~20 min/app.
      </li>
      <li>
        <strong>Company research:</strong> 30 min unstructured Googling → 10
        min with AI brief. Savings: ~20 min/app.
      </li>
      <li>
        <strong>Resume tailoring:</strong> 15-30 min hand-tailoring → 8-12 min
        with our <a href="/tools/resume-keyword-match-scorer">keyword scorer</a>{" "}
        + AI bullet rewrite. Savings: ~10 min/app.
      </li>
      <li>
        <strong>Total per application:</strong> ~50 min saved. Over a
        12-application week: 10 hours saved.
      </li>
    </ul>
    <p>
      Reinvest those 10 hours into networking + writing better post-interview
      thank-yous + reaching out to people in your stack. Networking still
      drives 60-70% of hires per multiple recruiter studies.
    </p>

    <h2 id="disclosure">Should you tell employers you used AI to apply?</h2>
    <p>
      Practical guidance:
    </p>
    <ul>
      <li>
        <strong>Cover letters / resume / application copy.</strong> Don&rsquo;t
        proactively disclose. Edited human output is what you&rsquo;re sending
        — same as if you used a thesaurus or a writer friend. The standard is
        that you own the words you submit.
      </li>
      <li>
        <strong>Coding tests.</strong> Disclose if asked. Some companies
        explicitly forbid AI use during take-homes; others don&rsquo;t care.
        Read instructions; ask if unclear.
      </li>
      <li>
        <strong>Interview answers.</strong> Don&rsquo;t use AI live. If asked
        how you prep, &ldquo;I use AI for first-draft research and company
        briefs&rdquo; is a fine answer in 2026.
      </li>
      <li>
        <strong>Take-home assessments.</strong> Same as coding tests — read
        instructions. Default: don&rsquo;t use AI without disclosing if
        you&rsquo;re unsure.
      </li>
    </ul>
    <p>
      The general rule: AI as research assistant + first-draft generator + tool
      for boring parts is broadly accepted. AI as substitute for your skills /
      judgment / interview presence is broadly not.
    </p>
  </>
);

export const cta = {
  label: "Score your resume against any JD (free)",
  targetSlug: "resume-keyword-match-scorer",
};

export const faq = [
  {
    q: "Can AI really write your cover letter for you?",
    a: "Yes with the right prompt — including specific company info, JD bullets, and constraints (250-word limit, no filler, one concrete metric). Always edit; AI output is 80% right and 20% wrong, and the 20% is where it shows. Generic prompts produce generic output that recruiters detect.",
  },
  {
    q: "How can I use AI to research companies before interviews?",
    a: "Standard 200-word brief prompt: cover what they do + how they make money, recent funding/milestones, engineering culture signals, 3 challenges relevant to your role. Cite sources. Run before interview prep. Saves 20-30 min/interview vs unstructured Googling.",
  },
  {
    q: "What's the best AI Boolean search prompt for job hunting?",
    a: "Ask AI to generate 5 Google Boolean queries targeting specific job sites (Lever, Greenhouse, LinkedIn) with your role + skills, excluding obvious non-matches (consultancies, recruiters, etc.). Iterate based on results. Better than recycled blog patterns because tuned to your specific situation.",
  },
  {
    q: "How do I combine human touch with AI in my job search?",
    a: "AI: first-draft cover letters, company briefs, keyword scanning, mock interview prep, salary research, follow-up templates. You: network conversations, hand-personalize intros, ask for referrals, write actual interview answers, build relationships. Use AI to free time for human work, not replace it.",
  },
  {
    q: "How much time can AI really save on job applications?",
    a: "~50 minutes per application: 20 min on cover letters, 20 min on company research, 10 min on resume tailoring. Over 12 apps/week: 10 hours saved. Reinvest in networking — still drives 60-70% of hires per recruiter studies.",
  },
  {
    q: "Should I tell employers I used AI to apply?",
    a: "Cover letters/resume: no, you own the words you submit. Coding tests: read instructions; some forbid AI use, ask if unclear. Interview answers: don't use live; mentioning 'I use AI for research and first drafts' is fine. Take-homes: read instructions; default to disclosure if unsure.",
  },
];
