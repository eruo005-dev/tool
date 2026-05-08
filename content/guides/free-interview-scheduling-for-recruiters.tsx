/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The mechanic is mundane: finding a time when 3+ humans are free, sending the invite,
      handling the reschedule, sending the reminder. Paid scheduling tools (GoodTime,
      Calendly Pro, x.ai before they pivoted) make team interviews cheap; free tools have
      gaps that cost you 2–3 candidate hours per week if you don&rsquo;t know the
      workarounds.
    </p>
    <p>
      This guide covers the free tools that actually work for recruiting workflows —
      specifically the team-interview case (multiple interviewers, multiple rounds,
      buffer time). Solo screen-call scheduling is easy; team coordination is where free
      tiers get painful.
    </p>
  </>
);

export const toc = [
  { id: "calendly", label: "Calendly free for recruiting" },
  { id: "team", label: "Team / panel interviews on free tools" },
  { id: "google", label: "Google Calendar appointment slots" },
  { id: "alternatives", label: "Cal.com self-hosted + Doodle" },
  { id: "templates", label: "Email templates that cut reschedules" },
];

export const body = (
  <>
    <h2 id="calendly">Calendly free for recruiting</h2>
    <p>
      Calendly free covers solo recruiter screening calls cleanly. The features
      you&rsquo;ll wish you had on free tier:
    </p>
    <ul>
      <li>
        <strong>1 event type only.</strong> Can&rsquo;t separate &ldquo;30-min phone
        screen&rdquo; from &ldquo;60-min technical&rdquo; without paying. Workaround: bake
        the type into the event name and rotate it (rename when switching modes).
      </li>
      <li>
        <strong>No round-robin.</strong> Multi-recruiter teams can&rsquo;t share one
        scheduling link. Workaround: each recruiter publishes their own link and the
        coordinator picks one when responding.
      </li>
      <li>
        <strong>No buffer time.</strong> Back-to-back interviews kill you. Workaround:
        manually break your availability windows (9–9:50, 10–10:50, etc.).
      </li>
      <li>
        <strong>No multi-stage links.</strong> Can&rsquo;t schedule phone → onsite in one
        flow. Workaround: send separate links per stage; tag the bookings in your{" "}
        <a href="/tools/recruiting-pipeline-tracker">pipeline tracker</a>.
      </li>
    </ul>
    <p>
      Verdict: usable for solo recruiters at low volume. Above ~5 candidates/week the
      workarounds get tiring.
    </p>

    <h2 id="team">Team / panel interviews on free tools</h2>
    <p>
      Coordinating 3 interviewers + 1 candidate across 4 calendars is the hardest
      free-tool case. The realistic options:
    </p>
    <ul>
      <li>
        <strong>Google Calendar &ldquo;Find a time&rdquo;:</strong> add all interviewers
        as required attendees, view free-busy across all of them, pick an open block.
        Free if everyone is on Google Workspace.
      </li>
      <li>
        <strong>Microsoft Outlook Scheduling Assistant:</strong> same concept for
        Microsoft 365 organizations.
      </li>
      <li>
        <strong>Doodle Free:</strong> poll-based — send 5 time options, recipients vote.
        Slow (multi-day back-and-forth) but works across organizations and free email
        accounts.
      </li>
      <li>
        <strong>Cal.com self-hosted:</strong> open-source Calendly alternative; if you
        host it yourself, you get round-robin, buffer time, and multi-event types for
        free. Requires a developer to set up.
      </li>
    </ul>
    <p>
      The team-interview hack that doesn&rsquo;t cost anything: <strong>three named time
      blocks</strong> in the candidate-facing email. &ldquo;Are any of these 30-min slots
      open for you next week? Tue 10 AM, Wed 2 PM, Thu 11 AM ET.&rdquo; Skip the
      poll-tool round-trip entirely. Most candidates pick one in the first reply.
    </p>

    <h2 id="google">Google Calendar appointment slots</h2>
    <p>
      Lesser-known: Google Calendar has built-in &ldquo;appointment schedules&rdquo;
      (formerly &ldquo;appointment slots&rdquo;) on free Google Workspace personal accounts
      since 2023. Lets you publish a public booking page like Calendly. Limits:
    </p>
    <ul>
      <li>One appointment schedule at a time on the personal-Google free tier.</li>
      <li>Doesn&rsquo;t handle round-robin natively.</li>
      <li>Less polished than Calendly's UX but functional.</li>
    </ul>
    <p>
      For a solo recruiter who already has Gmail, this might be enough — no separate
      account needed.
    </p>

    <h2 id="alternatives">Cal.com self-hosted + Doodle (the free Calendly alternatives)</h2>
    <p>
      <strong>Cal.com</strong> is the open-source-and-self-hostable Calendly competitor.
      Their cloud free tier limits to 1 event type (same as Calendly free), but the
      self-hosted version gives you all features for free if you can run it. Requires:
    </p>
    <ul>
      <li>A server (Vercel free, Railway free trial, or your own VPS).</li>
      <li>A database (Postgres — Supabase free tier works).</li>
      <li>Email sending (Resend free tier, or transactional Gmail).</li>
    </ul>
    <p>
      Setup takes 2–3 hours for a developer; zero ongoing cost; gets you round-robin +
      buffer + multi-event-types. Worth it if you have technical help available; not
      worth it if you&rsquo;d be the maintainer.
    </p>
    <p>
      <strong>Doodle</strong> is poll-based and surprisingly underused for recruiting.
      Free tier handles the multi-person scheduling case Calendly free doesn&rsquo;t.
      The downside: slower than direct booking because everyone has to vote first.
    </p>

    <h2 id="templates">Email templates that cut reschedules</h2>
    <p>
      The cheapest scheduling improvement isn&rsquo;t a tool — it&rsquo;s an email
      template that reduces &ldquo;sorry, can we move it?&rdquo; messages. Templates that
      work:
    </p>
    <ul>
      <li>
        <strong>Confirmation 24 hours out:</strong> &ldquo;Quick reminder: we&rsquo;re
        meeting tomorrow at [time]. Here&rsquo;s the [video link]. If anything&rsquo;s
        come up, reply now and we&rsquo;ll find another time.&rdquo;
      </li>
      <li>
        <strong>Reschedule offer baked in:</strong> include 2–3 alternative times in every
        confirmation. Lower mental cost for the candidate to reply with one.
      </li>
      <li>
        <strong>Day-of nudge:</strong> 1 hour before, &ldquo;See you in 1 hour at [link].&rdquo;
        Reduces no-shows by ~30% per published recruiter data.
      </li>
    </ul>
    <p>
      Use Gmail templates (free, in settings) or text expander tools (TextBlaze free) to
      avoid retyping these.
    </p>
  </>
);

export const cta = {
  label: "Track interview rounds in our free pipeline tool",
  targetSlug: "recruiting-pipeline-tracker",
};

export const faq = [
  {
    q: "Can I use Calendly free for hiring?",
    a: "Yes for solo recruiter screening calls. The 1-event-type limit and lack of buffer time hurt above 5 candidates/week — that's when paid Calendly or Cal.com self-hosted starts to be worth it.",
  },
  {
    q: "How do I schedule a 4-person panel interview without paid tools?",
    a: "Google Calendar 'Find a time' across all 4 calendars (works inside one Workspace org), or send 3 candidate-facing time options manually. Doodle works for cross-org scheduling but slows things down with the poll step.",
  },
  {
    q: "Is Cal.com really free?",
    a: "The cloud version has the same 1-event-type free limit as Calendly. The self-hosted version is free for everything but requires you to run it on your own server — about 2-3 hours of setup if you have a developer.",
  },
  {
    q: "What reduces interview no-shows the most?",
    a: "A 1-hour-out reminder email — most published recruiter data shows 25-35% no-show reduction. Calendly free has built-in confirmation but no day-of reminder — write a Gmail template instead.",
  },
];
