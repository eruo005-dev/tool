/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The rent-vs-buy decision for gaming PCs is mostly determined by use frequency.
      Daily users buy; occasional event users rent; everyone in between has a real
      choice. This guide is the framework + the math.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "The decision framework" },
  { id: "math", label: "The math" },
  { id: "scenarios", label: "Common scenarios" },
];

export const body = (
  <>
    <h2 id="framework">The rent-vs-buy decision framework</h2>
    <p>
      Five factors:
    </p>
    <ol>
      <li>
        <strong>Use frequency.</strong> Daily &gt; weekly &gt; monthly &gt;
        occasional. Beyond ~weekly use, ownership wins. Below ~6 events/year,
        rental wins.
      </li>
      <li>
        <strong>Tenure.</strong> If you&rsquo;re going to need a PC for &gt; 18
        months, ownership beats monthly rental. Below 12 months, monthly rental
        wins on cash flow.
      </li>
      <li>
        <strong>Cash flow.</strong> Can you afford $1500-3000 upfront? If not,
        monthly rental or rent-to-own spreads the cost.
      </li>
      <li>
        <strong>Living situation.</strong> Settled vs nomadic. Frequent moves push
        toward rental or laptop. Stable housing supports ownership.
      </li>
      <li>
        <strong>Tech aesthetics.</strong> Want to upgrade every 2 years for the
        latest GPU? Owning + reselling beats long-term renting on cost. Want
        consistent maintenance-free performance? Subscription is the
        psychologically simpler path.
      </li>
    </ol>

    <h2 id="math">The math</h2>
    <p>
      Use our <a href="/tools/pc-rental-vs-buy-calculator">rent vs buy calculator</a>{" "}
      with your numbers. Quick benchmarks:
    </p>
    <ul>
      <li>
        <strong>Daily user, $2200 PC, 5-year life, 35% resale:</strong> annualized
        ownership ~$340/year. Equivalent monthly rental at $150/month would cost
        $1800/year — ownership wins by 5×.
      </li>
      <li>
        <strong>Weekly event user (200 hours/year):</strong> annualized ownership
        ~$340/year, ~$1.70/hour. Event rental at $180 × 50 events = $9000/year.
        Ownership wins decisively.
      </li>
      <li>
        <strong>Monthly event user (60 hours/year, 12 events):</strong> ownership
        ~$340/year. Event rental $180 × 12 = $2160/year. Ownership wins by 6×.
      </li>
      <li>
        <strong>Occasional event user (24 hours/year, 6 events):</strong> ownership
        $340/year. Event rental $180 × 6 = $1080/year. Ownership still wins.
      </li>
      <li>
        <strong>One-event-per-year user:</strong> rental wins. Don&rsquo;t buy a
        PC for one weekend.
      </li>
    </ul>
    <p>
      The breakeven for typical inputs is around 2-3 events/year for event
      rentals. Below that, rent. Above, buy.
    </p>

    <h2 id="scenarios">Common scenarios</h2>

    <h3>College student, dorm, 4 years</h3>
    <p>
      Daily use → buy. Pick a mid-tier 1440p build ($1500). Sells in 4 years for
      ~$700. Net cost ~$200/year. Far cheaper than 4 years of monthly rentals or
      cloud gaming.
    </p>

    <h3>Frequent traveler, gaming on the road</h3>
    <p>
      A gaming laptop or cloud gaming subscription beats either renting or buying
      a desktop. The desktop math doesn&rsquo;t work for nomadic situations.
    </p>

    <h3>Esports team, training scrims</h3>
    <p>
      Buy. Daily-use math is overwhelming. Plus the latency control of local
      hardware matters for competitive play.
    </p>

    <h3>Casual gamer, modest gaming 2-3 hours/week</h3>
    <p>
      Cloud gaming wins. $10-20/month vs $340/year of ownership. The cost cross-
      over for low-frequency casual users is firmly on the cloud-gaming side.
    </p>

    <h3>Convention or tournament organizer</h3>
    <p>
      Rental. You need 4-20 machines for one weekend a year. Event-rental
      services exist exactly for this case.
    </p>

    <h3>Content creator, <a href="/learn/stream">streaming</a> + gaming</h3>
    <p>
      Buy. Streaming-tier specs are expensive but the daily-use math holds. Plus
      content creators benefit from owning their full chain (capture cards, audio
      interfaces, peripherals tuned to the build).
    </p>
  </>
);

export const cta = {
  label: "Run the rent vs buy calculator",
  targetSlug: "pc-rental-vs-buy-calculator",
};

export const faq = [
  {
    q: "Gaming PC rental vs purchase — which makes sense?",
    a: "Daily users buy. Occasional event users (1-2 events/year) rent. Everyone in between depends on event frequency, rental rates, and cash-flow situation. Use our calculator with your numbers. Breakeven for typical inputs is around 2-3 events/year — below that rent, above buy.",
  },
  {
    q: "Should I buy or rent a gaming PC for events?",
    a: "Buy if you'll attend 6+ events/year (annualized ownership beats event-rental cost). Rent if 1-2 events/year. Between 2 and 6, depends on rental rates in your region. Use our calculator with your numbers — breakeven varies by purchase price, useful life, and rental rates.",
  },
  {
    q: "Is gaming PC ownership worth it for casual gamers?",
    a: "For 2-3 hours/week of casual gaming: cloud gaming wins decisively ($10-20/month vs $340/year of ownership). For daily users: buy. Cloud gaming has bandwidth and game-support limitations but for casual usage it's often the rational choice.",
  },
  {
    q: "What's the breakeven for renting vs owning a gaming PC?",
    a: "For typical inputs ($2200 PC, 5-year life, 35% resale, $180 per 4-hour event rental): around 2-3 events/year. Below that, rent. Above, ownership wins by an increasing margin. Run our calculator with your specific purchase price and rental rates for your exact breakeven.",
  },
];
