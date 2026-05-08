/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The AI consulting market in 2026 is a mess. Every consulting shop slapped &ldquo;AI&rdquo;
      onto their service page in 2023, and most of them learned the technology last week. The
      cost of picking wrong is high — typical engagements run $30K–$200K and lock you into a
      direction for 6–12 months. This guide is the buyer-side checklist: how to vet, what to
      ask, and the red flags that show up before you sign.
    </p>
    <p>
      Run our{" "}
      <a href="/tools/ai-consulting-roi-calculator">AI consulting ROI calculator</a> in
      parallel — it gives you a defensible payback estimate before any vendor walks in.
    </p>
  </>
);

export const toc = [
  { id: "qualities", label: "Qualities of a good AI consultant" },
  { id: "questions", label: "Questions to ask before signing" },
  { id: "credentials", label: "Verifying credentials" },
  { id: "red-flags", label: "Red flags" },
  { id: "diligence", label: "Due-diligence checklist" },
];

export const body = (
  <>
    <h2 id="qualities">What to look for in an AI strategy partner</h2>
    <p>
      Five non-negotiable qualities, in priority order:
    </p>
    <ol>
      <li>
        <strong>Industry depth, not just AI depth.</strong> The hardest part of an AI
        engagement isn&rsquo;t the model — it&rsquo;s mapping your specific business
        process to where AI actually helps. A firm that&rsquo;s shipped in your sector (or
        an adjacent one with similar workflows) will read your situation in week one. A
        generalist firm spends week one asking what your business does.
      </li>
      <li>
        <strong>Demonstrated production deployments.</strong> Slides about &ldquo;AI
        readiness&rdquo; are easy. Live systems serving real users are not. Ask for two
        case studies where the AI is in production today, with measurable outcomes you can
        verify (or at least sense-check).
      </li>
      <li>
        <strong>Honest cost framing.</strong> A consultant who says &ldquo;we&rsquo;ll
        figure it out as we go&rdquo; is a consultant who hasn&rsquo;t scoped the
        problem. Look for fixed-fee engagements with clear milestones, or T&amp;M
        arrangements with hard ceilings.
      </li>
      <li>
        <strong>Build-vs-buy honesty.</strong> Good firms recommend buying off-the-shelf
        tools when those exist. Bad firms always recommend custom builds (their billable
        hours go up). If the consultant hasn&rsquo;t mentioned at least one off-the-shelf
        alternative during scoping, that&rsquo;s a signal.
      </li>
      <li>
        <strong>Knowledge transfer in the contract.</strong> The exit plan matters more
        than the entry plan. Make sure the engagement scope includes documentation,
        runbooks, and at least one internal team member trained to maintain what was
        built.
      </li>
    </ol>

    <h2 id="questions">Questions to ask before hiring</h2>
    <p>
      Use these in your discovery calls. Their answers separate firms by 50%:
    </p>
    <ul>
      <li>
        <strong>&ldquo;Walk me through a project where the AI didn&rsquo;t work — what
        happened and how did you handle it?&rdquo;</strong> If they don&rsquo;t have an
        answer, they haven&rsquo;t shipped enough to have failure stories. Run.
      </li>
      <li>
        <strong>&ldquo;What&rsquo;s your stance on building custom models vs using
        off-the-shelf APIs?&rdquo;</strong> Right answer: &ldquo;default to off-the-shelf;
        custom only when there&rsquo;s a specific accuracy or cost reason.&rdquo; Wrong
        answer: a 20-minute pitch for proprietary IP.
      </li>
      <li>
        <strong>&ldquo;How do you handle our data?&rdquo;</strong> They should know off
        the top of their head: where it&rsquo;s stored, who can access it, retention
        policy, opt-out from training. If their first response is &ldquo;let me get our
        legal team to send the DPA,&rdquo; the security posture is afterthought.
      </li>
      <li>
        <strong>&ldquo;What does success look like at 6 months?&rdquo;</strong> Vague
        answers are a no. Look for specific KPIs they&rsquo;re willing to attach to
        contract milestones.
      </li>
      <li>
        <strong>&ldquo;Can I talk to two of your customers without you on the call?&rdquo;</strong>{" "}
        Real firms say yes immediately. Firms with manufactured testimonials hesitate or
        offer to &ldquo;facilitate.&rdquo;
      </li>
      <li>
        <strong>&ldquo;What are the three things that could derail this project?&rdquo;</strong>{" "}
        Forces them to surface real risks. If they say &ldquo;nothing, we&rsquo;ve got
        this,&rdquo; they&rsquo;re selling, not consulting.
      </li>
      <li>
        <strong>&ldquo;If we wanted to leave the engagement after the first phase, what
        would the handoff look like?&rdquo;</strong> Tests their honesty about
        switching costs.
      </li>
    </ul>

    <h2 id="credentials">Verifying credentials</h2>
    <p>
      A list of credentials means nothing without verification. The 6-step check:
    </p>
    <ol>
      <li>
        <strong>LinkedIn for the actual people on the project.</strong> Not the founders
        — the engineers and consultants who will be in your slack. How many years in AI?
        Where did they work before? Are any of the listed engineers ex-Big-Tech AI teams,
        or ex-research-lab? Or are they all generic IT consultants who pivoted?
      </li>
      <li>
        <strong>Conference talks + published writing.</strong> Real practitioners write
        and speak. Search the firm&rsquo;s name + senior engineers&rsquo; names + recent
        AI conferences (NeurIPS, MLSys, applied tracks at QCon / GOTO). Output that&rsquo;s
        open-source contributions, not press releases.
      </li>
      <li>
        <strong>Customer references off-deck.</strong> Insist on talking to two customers
        the consultant didn&rsquo;t hand-pick. Ask for a recent customer who declined to
        renew (every firm has them; the question is how they handle it).
      </li>
      <li>
        <strong>Engagement-level metrics.</strong> &ldquo;How many of your AI engagements
        in the last 24 months delivered the contracted scope on budget?&rdquo; Real firms
        will give you a number; firms that say &ldquo;all of them&rdquo; are lying.
      </li>
      <li>
        <strong>Industry-specific certifications.</strong> SOC 2 Type II if you handle
        financial / customer data; HIPAA if healthcare; FedRAMP if government. Ask for
        the audit reports, not just the badge on the website.
      </li>
      <li>
        <strong>Crunchbase + financial signals.</strong> Funding stage, recent layoff
        announcements, glassdoor sentiment. A firm in distress will deliver compromised
        work — even when the individual engineers are good.
      </li>
    </ol>

    <h2 id="red-flags">Red flags (walk away signals)</h2>
    <ul>
      <li>
        <strong>Vague pricing.</strong> &ldquo;We&rsquo;ll scope it after a discovery&rdquo;
        is fine. &ldquo;We&rsquo;ll figure out scope and pricing as we go&rdquo; is a
        billing trap.
      </li>
      <li>
        <strong>Buzzword density.</strong> If &ldquo;agentic,&rdquo; &ldquo;orchestrated,&rdquo;
        &ldquo;multi-modal,&rdquo; and &ldquo;reasoning&rdquo; appear in the first 10
        minutes without any specific examples tied to your business, they&rsquo;re reading
        from the deck.
      </li>
      <li>
        <strong>One-person-show pitches.</strong> A senior engineer who pitches alone may
        end up sub-contracting the actual work to junior offshore developers. Ask who will
        be hands-on-keyboard.
      </li>
      <li>
        <strong>Silence on data privacy.</strong> If the topic doesn&rsquo;t come up
        organically by the second call, it won&rsquo;t come up in the engagement until
        something breaks.
      </li>
      <li>
        <strong>Free pilot offer.</strong> Free pilots usually mean: (a) the firm needs
        case studies, (b) they&rsquo;re going to upsell aggressively, or (c) you&rsquo;re
        a logo on their website. A small paid pilot is better — clearer alignment.
      </li>
      <li>
        <strong>Resistance to talking to past customers.</strong> Even if framed
        professionally (&ldquo;our clients are confidential&rdquo;), this is a yellow
        flag. Most B2B clients are happy to do a 15-minute reference call if asked.
      </li>
      <li>
        <strong>Senior staff don&rsquo;t use the technology.</strong> If the partner-level
        consultant you&rsquo;re negotiating with can&rsquo;t articulate when GPT-5 vs
        Claude vs Gemini matters for a specific task, the firm&rsquo;s leadership is at
        the wrong level for AI work.
      </li>
    </ul>

    <h2 id="diligence">Due-diligence checklist</h2>
    <p>Before signing, you should have:</p>
    <ul>
      <li>2 reference calls completed off-deck</li>
      <li>Verified the named engineers actually work at the firm (LinkedIn)</li>
      <li>Reviewed at least 2 of their public case studies for plausibility</li>
      <li>Confirmed pricing model + ceiling + change-order process in writing</li>
      <li>Signed DPA covering data handling, retention, and training opt-out</li>
      <li>Identified at least one internal team member to receive the knowledge transfer</li>
      <li>Run the{" "}
        <a href="/tools/ai-consulting-roi-calculator">ROI calculator</a> with your inputs
        — confirmed payback &lt; 18 months</li>
      <li>Confirmed exit / handoff terms (what you keep, what you can run independently)</li>
    </ul>
    <p>
      If anything on that list is missing, push the start date until it&rsquo;s in
      writing. The 2-week delay costs less than a 6-month engagement going sideways.
    </p>
  </>
);

export const cta = {
  label: "Calculate the ROI before signing",
  targetSlug: "ai-consulting-roi-calculator",
};

export const faq = [
  {
    q: "How do I verify an AI consultant's credentials?",
    a: "Six steps: check LinkedIn for the actual project engineers (not just founders), look for conference talks + open-source writing, demand off-deck customer references, ask for engagement-level success metrics ('what % of your last 10 projects delivered on budget?'), confirm relevant compliance certs with audit reports (not just badges), and check Crunchbase / Glassdoor for financial-distress signals.",
  },
  {
    q: "What questions should I ask an AI consulting firm before hiring?",
    a: "Seven hardball questions: (1) walk me through a project that didn't work, (2) when do you recommend off-the-shelf vs custom, (3) how do you handle our data, (4) what does success look like at 6 months with specific KPIs, (5) can I talk to 2 customers without you on the call, (6) what 3 things could derail this project, (7) what does early-exit handoff look like.",
  },
  {
    q: "What are the biggest red flags when choosing an AI consultant?",
    a: "Vague pricing, buzzword density without specifics, one-person-show pitches that hide who actually delivers, silence on data privacy, free-pilot offers (usually upsell traps), resistance to past-customer references, and senior consultants who can't articulate technical tradeoffs (GPT vs Claude vs Gemini, fine-tuning vs RAG, etc.).",
  },
  {
    q: "How do I know if an AI consultant actually knows what they're doing?",
    a: "Ask them to walk through a real failure. Practitioners always have stories about projects that hit walls — model accuracy plateaus, training data issues, latency surprises, vendor outages. People who only have success stories haven't shipped enough to be trusted with your project.",
  },
];
