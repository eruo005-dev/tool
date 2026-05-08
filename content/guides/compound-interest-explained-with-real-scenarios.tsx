export const intro = (
  <>
    <p>
      Albert Einstein didn&rsquo;t actually call compound interest the eighth wonder of
      the world (the quote is apocryphal), but the math is real and it&rsquo;s the single
      most important concept in personal finance. Most explanations of it are either too
      vague (&ldquo;your money makes money!&rdquo;) or too math-heavy (full
      Black-Scholes-style derivations). This guide is in the middle: the core math,
      worked through with specific numbers, plus 12 real scenarios you actually
      encounter.
    </p>
    <p>
      Use this as a reference. Numbers are based on standard assumptions documented in
      each section &mdash; modify in the <a href="/tools/compound-interest-calculator">
      compound interest calculator</a> for your specific situation.
    </p>
  </>
);

export const toc = [
  { id: "definition", label: "Compound vs simple interest" },
  { id: "formula", label: "The formula and how to use it" },
  { id: "rule-of-72", label: "Rule of 72 and useful shortcuts" },
  { id: "scenarios", label: "12 real-world scenarios" },
  { id: "real-vs-nominal", label: "Real vs nominal returns (inflation)" },
  { id: "tax-impact", label: "Account types: tax-advantaged vs taxable" },
  { id: "starting-early", label: "Starting age: the 25 vs 35 difference" },
  { id: "lump-sum-vs-monthly", label: "Lump sum vs monthly contributions" },
  { id: "fees", label: "How fees compound against you" },
  { id: "sequence-risk", label: "Sequence of returns near retirement" },
  { id: "frequency", label: "Monthly vs daily vs continuous compounding" },
  { id: "real-world-products", label: "Where to actually get compound returns" },
];

export const body = (
  <>
    <h2 id="definition">Compound vs simple interest</h2>
    <p>
      <strong>Simple interest</strong>: interest paid only on the original principal.
      Loan of $1,000 at 5% simple interest, paid annually: $50/year forever (or until
      principal is repaid). Used in a few specific contexts (auto loans in some states,
      bonds with simple-interest coupons), but rare for savings.
    </p>
    <p>
      <strong>Compound interest</strong>: interest paid on principal PLUS accumulated
      interest. $1,000 at 5% compounded annually:
    </p>
    <ul>
      <li>Year 1: balance $1,050 ($50 interest)</li>
      <li>Year 2: balance $1,102.50 ($52.50 interest &mdash; on $1,050)</li>
      <li>Year 3: balance $1,157.63 ($55.13 interest &mdash; on $1,102.50)</li>
      <li>Year 30: balance $4,321.94</li>
    </ul>
    <p>
      Same 5% rate, same starting amount, same time. Compound triples simple. The
      difference is the &ldquo;interest on interest&rdquo; that grows over time.
    </p>

    <h2 id="formula">The formula and how to use it</h2>
    <p>For a single deposit (no recurring contributions):</p>
    <pre>{`A = P × (1 + r/n)^(n × t)`}</pre>
    <p>
      Where: A = ending amount, P = principal, r = annual rate (decimal), n =
      compounding periods per year, t = years.
    </p>
    <p>
      <strong>Worked example</strong>: $10,000 at 7% compounded monthly for 10 years:
    </p>
    <ul>
      <li>r/n = 0.07 / 12 = 0.005833</li>
      <li>n &times; t = 12 &times; 10 = 120</li>
      <li>(1.005833)^120 = 2.0097</li>
      <li>A = 10,000 &times; 2.0097 = $20,097</li>
    </ul>
    <p>
      Doubled in 10 years at 7%. Spreadsheet: <code>=FV(0.07/12, 120, 0, -10000)</code>.
    </p>
    <p>
      For ongoing monthly contributions (the real-world case for most retirement
      saving):
    </p>
    <pre>{`FV = P × (1 + r)^n + PMT × [((1 + r)^n − 1) / r]`}</pre>
    <p>
      Where r and n are now monthly (annual rate &divide; 12, years &times; 12), PMT is
      monthly contribution. Spreadsheet:{" "}
      <code>=FV(annual_rate/12, years*12, -monthly_contribution, -starting_balance)</code>.
    </p>

    <h2 id="rule-of-72">Rule of 72 and useful shortcuts</h2>
    <p>
      The Rule of 72: divide 72 by your annual rate to get years to double. Useful for
      mental math. Examples:
    </p>
    <ul>
      <li>3% &rarr; 24 years to double (high-yield savings)</li>
      <li>5% &rarr; 14.4 years (long-term bond fund)</li>
      <li>7% &rarr; 10.3 years (real return of stock market)</li>
      <li>10% &rarr; 7.2 years (nominal stock market historical)</li>
      <li>15% &rarr; 4.8 years (extraordinary year, Warren Buffett territory)</li>
    </ul>
    <p>
      <strong>Variants</strong>: Rule of 114 = years to TRIPLE. Rule of 144 = years to
      QUADRUPLE. Rule of 70 is the more accurate version (used by economists for
      population doubling); the difference is small for typical rates.
    </p>
    <p>
      <strong>Mental math chain</strong>: $10K at 7% becomes $20K in 10 years, $40K in
      20 years, $80K in 30 years, $160K in 40 years. Each doubling adds the largest
      absolute dollar amount &mdash; year 40 adds $80K, year 10 adds only $10K. This is
      why time-in-market matters more than timing-the-market.
    </p>

    <h2 id="scenarios">12 real-world scenarios</h2>
    <p>All scenarios assume 7% annual real return unless noted. 7% is the post-inflation historical S&amp;P 500 return.</p>

    <h3>1. Maxing Roth IRA from age 25</h3>
    <p>
      $7,000/year for 40 years (age 25 to 65) at 7%: balance at 65 = $1,558,000. All
      tax-free in retirement. Total contributed: $280,000. Growth: $1,278,000.
    </p>

    <h3>2. Maxing Roth IRA from age 35 (10-year delay)</h3>
    <p>
      $7,000/year for 30 years at 7%: balance at 65 = $735,000. Half the previous result
      from waiting 10 years. The 10 lost years cost $823,000.
    </p>

    <h3>3. Starting at 22, 9-year head start through age 30</h3>
    <p>
      $7,000/year from 22 to 30 (9 years), then NOTHING after. At 7% to age 65: balance
      at 65 = $608,000. Compare to scenario #2 (start at 35, contribute for 30 years
      straight): $735,000. The 9 years of contributions at 22-30 ($63K total) almost
      match 30 years of contributions starting at 35 ($210K total). Time wins.
    </p>

    <h3>4. $200/month into S&amp;P 500 from age 22 to 65</h3>
    <p>
      $2,400/year &times; 43 years at 7%: balance at 65 = $716,000. Total contributed:
      $103,000. Growth: $613,000. Six dollars of growth for every dollar contributed.
    </p>

    <h3>5. 401(k) at standard match (3% you + 3% employer)</h3>
    <p>
      $50,000 salary &times; 6% combined = $3,000/year from age 22 to 65 at 7%: $895,000.
      Doubling to $6,000 ($50K salary &times; 12%): $1,791,000. Match alone produces
      $448,000 over a career &mdash; that&rsquo;s why &ldquo;always capture the
      match&rdquo; is the universal advice.
    </p>

    <h3>6. Saving for a home down payment in 5 years</h3>
    <p>
      $1,000/month at 4% (high-yield savings) for 60 months: $66,250. Same at 7% (more
      aggressive) for 60 months: $71,890. Worth the $5,640 extra return? Probably no
      &mdash; 5 years is too short for stock-market volatility risk. Stick with high-yield
      savings or short-term Treasuries for 1-5 year goals.
    </p>

    <h3>7. 529 college savings from birth</h3>
    <p>
      $300/month from year 0 to year 18 at 6% (more conservative due to shorter horizon):
      total contributed $64,800, balance at 18: $115,000. Worth roughly 1.5 years of
      private-school tuition at typical 2026 rates, or ~3 years of in-state public
      tuition.
    </p>

    <h3>8. The cost of waiting 1 year at 30 vs 50</h3>
    <p>
      Same $10,000 invested at 30 vs at 50, both reaching age 65. At 30: 35 years at 7%
      = $107,000. At 50: 15 years at 7% = $27,600. Cost of 20-year delay on $10K: $79,400
      foregone. Cost of 1-year delay (skipping a single contribution at 30): roughly
      $7,000 in foregone growth.
    </p>

    <h3>9. The 1% expense ratio drag</h3>
    <p>
      $1,000/month for 30 years at 7% net: $1,222,000. At 6% net (because of 1% expense
      ratio): $1,005,000. The expense ratio costs $217,000 over 30 years &mdash; about
      18% of the gross return. This is why low-cost index funds (0.03-0.10%) matter so
      much.
    </p>

    <h3>10. Inflation impact on a $1M nest egg</h3>
    <p>
      $1,000,000 at age 65 looks great in 2026 dollars. In 2056 dollars (assuming 3%
      inflation), $1M of 2026 purchasing power requires $2,427,000. Always project in
      real terms (using ~7% real instead of 10% nominal) to know your purchasing power
      target. The <a href="/learn/nominal-vs-real-returns">nominal vs real returns
      glossary entry</a> has more.
    </p>

    <h3>11. Pay off mortgage early or invest?</h3>
    <p>
      $200/month extra principal on a 6.5% mortgage for 30 years: saves ~$95,000 in
      interest, mortgage paid off in year 24. Same $200/month invested at 7% real
      return: balance at 30 years = $245,000. Math says invest. Behavioral counter:
      paying off mortgage gives psychological certainty + reduced monthly burden in
      retirement. Most financial advisors say invest if mortgage rate is below 5%, pay
      off if above 6%. The 5-6% rate range is judgment call. Run yours in the{" "}
      <a href="/tools/mortgage-payoff-accelerator">mortgage payoff accelerator</a>.
    </p>

    <h3>12. The cost of cashing out 401(k) early</h3>
    <p>
      $50,000 cashed out at age 30 to pay debts. Lost growth at 7% over 35 years to
      retirement: $533,000. Plus immediate costs: 22% federal income tax ($11,000) + 10%
      early withdrawal penalty ($5,000) + state income tax (varies, often $2,000-5,000)
      = $18,000+ in immediate hits. Effective cost of $50K cash-out at 30: $551,000+
      over a lifetime. Borrow elsewhere; never tap retirement for current debt.
    </p>

    <h2 id="real-vs-nominal">Real vs nominal returns (inflation)</h2>
    <p>
      <strong>Nominal return</strong>: the headline number, before inflation.
      &ldquo;The S&amp;P 500 returned 10% historically.&rdquo;
    </p>
    <p>
      <strong>Real return</strong>: after subtracting inflation. &ldquo;The S&amp;P 500
      returned 7% historically in real terms.&rdquo;
    </p>
    <p>
      The 3% gap is exactly the historical inflation rate (1928-2024 average). For
      retirement projections in today&rsquo;s purchasing power, ALWAYS use real returns.
      Otherwise the projection lies to you.
    </p>
    <p>
      <strong>How big is the lie?</strong> $1,000,000 in 30-year-future dollars at 3%
      inflation = $412,000 in today&rsquo;s purchasing power. Less than half. The
      &ldquo;you&rsquo;ll be a millionaire&rdquo; projection sounds great until you
      realize half of it is just inflation.
    </p>

    <h2 id="tax-impact">Account types: tax-advantaged vs taxable</h2>
    <p>
      Same gross compound returns, very different net results based on account type.
      $1,000/month at 7% for 30 years:
    </p>
    <ul>
      <li>
        <strong>Roth IRA / Roth 401(k)</strong>: $1,222,000. All withdrawable tax-free.
      </li>
      <li>
        <strong>Traditional 401(k) / Traditional IRA</strong>: $1,222,000 nominal.
        After 22% retirement-bracket tax: $953,000 spendable.
      </li>
      <li>
        <strong>Taxable brokerage</strong>: ~$1,050,000 (annual dividend tax + capital
        gains on rebalancing eats ~14%). After capital gains tax on remaining unrealized
        gains: ~$890,000 spendable.
      </li>
      <li>
        <strong>HSA (US, if eligible)</strong>: $1,222,000. Tax-free contributions,
        growth, and qualified-medical withdrawals. The best account in the US tax code.
      </li>
    </ul>
    <p>
      The Roth and HSA results are 10-25% higher than taxable for identical
      contributions and returns. This is why financial planners prioritize tax-advantaged
      accounts.
    </p>

    <h2 id="starting-early">Starting age: the 25 vs 35 difference</h2>
    <p>
      Two siblings, same plan, different start ages:
    </p>
    <ul>
      <li>
        <strong>Sibling A starts 25</strong>: $500/month for 40 years at 7% &rarr;
        $1,316,000 at 65.
      </li>
      <li>
        <strong>Sibling B starts 35</strong>: $500/month for 30 years at 7% &rarr;
        $612,000 at 65.
      </li>
      <li>
        <strong>Difference</strong>: Sibling A contributed $60,000 more total ($240K vs
        $180K) but ended with $704,000 more. The 10 extra years contributed $60K of
        deposits and ~$644K of compounding-on-the-early-deposits.
      </li>
    </ul>
    <p>
      <strong>Practical implication</strong>: the cost of waiting is much higher than it
      feels in your 20s. Even small amounts ($100-200/month) starting at 22-25 outperform
      large amounts ($800-1,000/month) starting at 35-40.
    </p>

    <h2 id="lump-sum-vs-monthly">Lump sum vs monthly contributions</h2>
    <p>
      Mathematically: lump-sum investing wins about 2/3 of the time. The market trends
      up, so being invested earlier captures more growth. Dollar-cost averaging (DCA)
      reduces the risk of buying at a peak.
    </p>
    <p>
      Vanguard&rsquo;s research: lump-sum produces ~2.4% higher 10-year returns on
      average than DCA over 12 months. Cost of waiting (DCA) over 12 months: holding cash
      that earns 4% in money market while market returns 7% real = 3% drag for half a
      year on average = ~1.5% cost.
    </p>
    <p>
      <strong>Practical guidance</strong>: for new monthly contributions from paycheck,
      you&rsquo;re effectively DCA&rsquo;ing already; that&rsquo;s fine. For windfalls
      (inheritance, bonus, settlement), consider lump-sum unless emotional uncertainty
      pushes you to DCA over 6-12 months. The math says lump-sum; the behavior says
      whichever lets you actually do it.
    </p>

    <h2 id="fees">How fees compound against you</h2>
    <p>
      A 1% fee doesn&rsquo;t mean &ldquo;1% less return.&rdquo; It means 1% less
      compounding every year, which is multiplicative over decades.
    </p>
    <p>
      Same scenario at three fee levels, $1,000/month for 30 years at 7% gross:
    </p>
    <ul>
      <li>0.05% expense (Vanguard VTSAX): $1,206,000</li>
      <li>1% expense (typical actively-managed fund): $1,005,000</li>
      <li>2% expense (some 401(k) target-date funds): $828,000</li>
    </ul>
    <p>
      The 1% fee costs $201,000 over 30 years. The 2% fee costs $378,000. Always check
      expense ratios; switch to low-cost index funds in your 401(k) if available.
    </p>

    <h2 id="sequence-risk">Sequence of returns near retirement</h2>
    <p>
      Two retirees with identical 30-year average returns can have wildly different
      outcomes based on the ORDER of returns &mdash; especially in years 1-5 of
      retirement.
    </p>
    <p>
      <strong>Retiree A</strong>: retired 2000 with $1M, withdraws $40K/year (4% rule).
      Faced 2000-2002 tech bust (-49%). Portfolio dropped to ~$500K while still
      withdrawing. By 2010 (peak of stress): ~$280K. Even with strong 2010-2020 returns,
      hard to recover.
    </p>
    <p>
      <strong>Retiree B</strong>: retired 2010 with $1M, same plan. Faced 2010-2020 bull
      market first. Portfolio at $1.7M by 2020 even with withdrawals.
    </p>
    <p>
      Same average return over 30 years; very different outcomes. This is sequence-of-
      returns risk and is why retirement planning increasingly uses Monte Carlo simulation
      (running 1000+ historical scenarios) instead of single average-return projections.
      For accumulators (not yet retired), sequence risk is much less important &mdash;
      bad years early are fine because you&rsquo;re still buying low.
    </p>

    <h2 id="frequency">Monthly vs daily vs continuous compounding</h2>
    <p>
      Compounding frequency matters less than rate or time. At 7% APR:
    </p>
    <ul>
      <li>Annual compounding: effective annual rate 7.00%</li>
      <li>Monthly: 7.23%</li>
      <li>Daily: 7.25%</li>
      <li>Continuous: 7.25% (mathematical limit, e^0.07 - 1)</li>
    </ul>
    <p>
      Over 30 years on $100K, monthly vs daily is ~$5K difference. Most retirement
      accounts compound continuously (every transaction); savings accounts compound
      daily; bonds typically semi-annually. For practical projections, monthly compounding
      is close enough &mdash; don&rsquo;t obsess over the frequency.
    </p>

    <h2 id="real-world-products">Where to actually get compound returns</h2>
    <p>
      <strong>Stocks (S&amp;P 500 index fund)</strong>: ~10% nominal, ~7% real
      historical. Best long-horizon vehicle. Low-cost: VTSAX, FXAIX, SWPPX, or any major
      brokerage&rsquo;s S&amp;P 500 index fund (0.02-0.04% expense).
    </p>
    <p>
      <strong>Bonds (Treasury or aggregate bond fund)</strong>: 3-5% nominal historically.
      Less volatile; lower long-term return. Best for short-to-medium horizon (1-10
      years) or as portfolio diversifier near retirement.
    </p>
    <p>
      <strong>High-yield savings</strong>: 4-5% in 2026. Insured (FDIC up to $250K).
      Best for emergency funds and 1-5 year goals.
    </p>
    <p>
      <strong>I-bonds (US Treasury inflation-protected)</strong>: variable rate tied to
      inflation. ~5% in high-inflation periods. $10K/year purchase limit per person.
      Best for inflation hedge in long-term holdings.
    </p>
    <p>
      <strong>CDs</strong>: 4-5% in 2026 for 1-5 year terms. Better than savings if you
      can lock up the money; less flexible.
    </p>
    <p>
      <strong>Real estate (REITs in account, or direct ownership)</strong>: ~9-10%
      nominal historically. Diversifier; less liquid (direct ownership) or volatile
      (REITs). Most retail investors get sufficient real-estate exposure via target-date
      fund REIT allocation.
    </p>

    <h2>The 80/20 takeaway</h2>
    <p>
      Compound interest math is simple: future value depends on rate, time, and amount.
      Time matters most by far &mdash; starting at 25 vs 35 typically produces 2&times;
      the final balance even with the same monthly contribution. Use real returns (7%
      after inflation), not nominal (10%), to project today&rsquo;s purchasing power.
      Use tax-advantaged accounts (Roth, HSA, traditional 401(k) with match) before
      taxable. Use low-cost index funds (0.05% expense, not 1%+).
    </p>
    <p>
      Run your specific numbers in the <a href="/tools/compound-interest-calculator">
      compound interest calculator</a>; check the supporting{" "}
      <a href="/learn/rule-of-72">Rule of 72 glossary entry</a> for mental shortcuts;
      and read the <a href="/learn/compound-interest">compound interest glossary</a> for
      the short-form definition. The single most valuable financial action most people
      can take is starting a Roth IRA or 401(k) match in their 20s and never stopping;
      compound math handles the rest.
    </p>
  </>
);

export const cta = {
  label: "Run any compound interest scenario in seconds",
  targetSlug: "compound-interest-calculator",
};

export const faq = [
  {
    q: "How much will $100/month grow to over 30 years?",
    a: "At 7% real return: $1,200/year for 30 years = $122,000 ending balance, of which $36,000 is contributions and $86,000 is growth. At 10% nominal: $228,000. The 'gap' is inflation — purchase power-wise, those numbers look identical. Always project in real terms (~7%) to know what you can actually buy in retirement. Increase contributions whenever possible; doubling to $200/month roughly doubles the result to $244K real / $456K nominal.",
  },
  {
    q: "Why do small differences in return rate matter so much over 30 years?",
    a: "Compounding multiplies the difference exponentially. $1,000/month for 30 years at 6% = $1,005,000; at 7% = $1,222,000; at 8% = $1,490,000. Just 1% extra return = $217K-$268K more. Over 40 years the gap explodes: $1,000/month at 6% = $1,953,000; at 8% = $3,490,000. This is why expense ratios (1% drag) and tax efficiency (capital gains drag) matter so much — they're effectively negative returns that compound against you for decades.",
  },
  {
    q: "Should I focus on saving more or earning higher returns?",
    a: "Both, but the leverage shifts based on time horizon. Early career (under 30): saving rate matters most because you have little capital to compound on. Going from 5% saving to 15% triples your contributions. Mid-career (30-50): balance — you have enough capital that 1% extra return matters AND you have enough income to contribute meaningfully. Late career (50+): return rate matters most because you're not adding much new capital but compounding works on a large base. Always before optimization: max your tax-advantaged accounts (Roth IRA, 401(k) match, HSA) since they give 'free returns' from tax savings.",
  },
  {
    q: "What's the mathematically optimal contribution strategy?",
    a: "Contribute to capture 401(k) match first (instant 50-100% return). Then pay off any debt above ~7% interest (guaranteed return equal to debt rate). Then max Roth IRA ($7,000/year — flexibility + tax-free growth). Then HSA if eligible ($4,300 single / $8,550 family — triple tax benefits). Then max remaining 401(k) ceiling ($23,500 total). Then taxable brokerage. Within each account, pick low-cost index funds (0.05% expense range, not 1%+). Increase contributions automatically with each raise. The math doesn't care about market timing — start when you can, contribute monthly, never stop.",
  },
];
