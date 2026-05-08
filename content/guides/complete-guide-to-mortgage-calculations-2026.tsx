export const intro = (
  <>
    <p>
      Most mortgage calculators tell you a monthly number and stop. This guide goes the
      other direction &mdash; it&rsquo;s a complete reference for every calculation that
      matters when you&rsquo;re buying, refinancing, or accelerating payoff on a home loan.
      Every formula is included with a worked example, every fee is broken out, and every
      common mistake is flagged.
    </p>
    <p>
      It&rsquo;s organized so you can read it end-to-end (it takes ~15 minutes) or jump to
      the section you need. If you&rsquo;re house-hunting, start with affordability and
      PITI. If you already have a mortgage, skip to amortization, prepayment, and
      refinance break-even. If you&rsquo;re a first-time buyer, read the whole thing once.
    </p>
  </>
);

export const toc = [
  { id: "piti", label: "PITI: the four real components" },
  { id: "amortization", label: "Amortization formula and math" },
  { id: "apr", label: "APR vs interest rate vs APY" },
  { id: "affordability", label: "Affordability: 28/36 and beyond" },
  { id: "down-payment", label: "Down payment: 20% myth + reality" },
  { id: "pmi", label: "PMI math and how to drop it" },
  { id: "closing-costs", label: "Closing costs by category" },
  { id: "prepayment", label: "Prepayment: where extra dollars hit hardest" },
  { id: "refinance", label: "Refinance break-even formula" },
  { id: "escrow", label: "Escrow accounts: how they work" },
  { id: "fixed-vs-arm", label: "Fixed vs ARM: when ARMs make sense" },
  { id: "fifteen-vs-thirty", label: "15-year vs 30-year: the real comparison" },
  { id: "tax-deduction", label: "Mortgage interest deduction (US)" },
  { id: "mistakes", label: "Top 10 mistakes" },
];

export const body = (
  <>
    <h2 id="piti">PITI: the four real components of a mortgage payment</h2>
    <p>
      Every mortgage calculator that only shows &ldquo;principal and interest&rdquo;
      under-states your real monthly cost by 25-40%. The actual line item your lender
      collects each month is PITI: <strong>P</strong>rincipal,{" "}
      <strong>I</strong>nterest, <strong>T</strong>axes, <strong>I</strong>nsurance.
      Sometimes plus PMI and HOA on top.
    </p>
    <ul>
      <li>
        <strong>Principal</strong>: the portion of your payment that reduces the loan
        balance. Starts small (year 1: ~14% of payment), grows to ~99% by year 30.
      </li>
      <li>
        <strong>Interest</strong>: the lender&rsquo;s fee. Year 1 of a 30-year loan at 6.5%:
        ~86% of your payment is interest. The amortization curve is heavily front-loaded,
        which has major implications for prepayment timing (covered below).
      </li>
      <li>
        <strong>Taxes</strong>: property tax, paid via escrow. Varies by locality &mdash;
        0.3-0.5% of home value annually in low-tax states (Hawaii, Alabama), 2-2.5% in
        high-tax states (New Jersey, Illinois, Texas&rsquo;s no-state-income-tax trade-off).
      </li>
      <li>
        <strong>Insurance</strong>: homeowners insurance, also escrowed. Typically
        $1,200-$2,500/year for a $400K home. More for coastal/wildfire areas.
      </li>
    </ul>
    <p>
      Worked example: $400,000 home, 20% down ($80,000), $320,000 loan, 6.5% rate, 30
      years, 1.2% property tax, $1,500/year insurance:
    </p>
    <ul>
      <li>P&amp;I (formula below): $2,022/month</li>
      <li>Property tax: $400/month ($4,800/year &divide; 12)</li>
      <li>Insurance: $125/month ($1,500/year &divide; 12)</li>
      <li><strong>Total PITI: $2,547/month</strong></li>
    </ul>
    <p>
      The advertised P&amp;I number ($2,022) is 21% lower than the real monthly cost
      ($2,547). Always budget against PITI. Run the numbers yourself in the{" "}
      <a href="/tools/mortgage-calculator">mortgage calculator</a>.
    </p>

    <h2 id="amortization">The amortization formula</h2>
    <p>
      The monthly principal-and-interest payment on a fixed-rate mortgage uses a single
      formula. Memorize this:
    </p>
    <pre>{`M = P × [r(1 + r)^n] / [(1 + r)^n − 1]`}</pre>
    <p>
      Where: M = monthly payment, P = loan principal, r = monthly interest rate (annual
      rate &divide; 12), n = total number of monthly payments (years &times; 12). Worked
      example with $320,000, 6.5% rate, 30 years:
    </p>
    <ul>
      <li>r = 0.065 / 12 = 0.005417</li>
      <li>n = 360</li>
      <li>(1.005417)^360 = 7.026</li>
      <li>M = 320,000 &times; (0.005417 &times; 7.026) / (7.026 - 1)</li>
      <li>M = 320,000 &times; 0.038059 / 6.026</li>
      <li>M = $2,022.62/month</li>
    </ul>
    <p>
      In Excel or Google Sheets:{" "}
      <code>=PMT(0.065/12, 360, -320000)</code> &rarr; -2022.62. The negative-loan-amount
      convention is because PMT treats inflows as positive.
    </p>
    <p>
      <strong>Each month&rsquo;s split between interest and principal:</strong>
    </p>
    <ul>
      <li>Interest this month = remaining balance &times; monthly rate</li>
      <li>Principal this month = monthly payment &minus; interest this month</li>
      <li>New balance = old balance &minus; principal this month</li>
    </ul>
    <p>
      Month 1: interest = 320,000 &times; 0.005417 = $1,733.44; principal = 2,022.62 -
      1,733.44 = $289.18. Month 360 (last): interest is pennies, principal is the entire
      payment. The shift happens gradually; the crossover (where principal exceeds
      interest in a single payment) is around month 230 of a 360-month loan at 6.5%.
    </p>

    <h2 id="apr">APR vs interest rate vs APY</h2>
    <p>
      Three terms get confused constantly. Lender quotes use rate; comparison should use
      APR; savings accounts use APY.
    </p>
    <ul>
      <li>
        <strong>Interest rate</strong>: the bare percentage on your loan agreement. Used
        to calculate your monthly P&amp;I.
      </li>
      <li>
        <strong>APR (Annual Percentage Rate)</strong>: the rate plus most lender fees,
        amortized over the loan term. Federal law (TILA, Regulation Z) requires
        disclosure. Always compare APR-to-APR across lenders, never raw rate. The gap
        between rate and APR is usually 0.1-0.8% on mortgage loans.
      </li>
      <li>
        <strong>APY (Annual Percentage Yield)</strong>: the effective annual return when
        compounding is folded in. Relevant for savings accounts, not loans. See the{" "}
        <a href="/learn/apy">APY glossary entry</a>.
      </li>
    </ul>
    <p>
      Example: Lender A quotes 6.0% rate with $4,000 in fees on a $300K loan. Lender B
      quotes 6.5% rate with no fees. APR comparison:
    </p>
    <ul>
      <li>Lender A: 6.0% rate + amortized $4,000 fees = ~6.18% APR</li>
      <li>Lender B: 6.5% rate + $0 fees = 6.5% APR</li>
    </ul>
    <p>
      Lender A wins on APR despite the higher fees, because $4,000 amortized over 30
      years is less impactful than 0.5% rate for the full term. But if you only stay 5
      years, Lender B&rsquo;s no-fees structure is cheaper. Always compute APR for your
      actual time horizon.
    </p>

    <h2 id="affordability">Affordability: 28/36 rule and beyond</h2>
    <p>
      The classic affordability metric uses two ratios:
    </p>
    <ul>
      <li>
        <strong>Front-end ratio (28%)</strong>: PITI &le; 28% of gross monthly income.
        On $100K gross ($8,333/month), that&rsquo;s $2,333/month PITI ceiling.
      </li>
      <li>
        <strong>Back-end ratio (36%)</strong>: PITI + all other debt (car loan, student
        loans, credit cards, child support) &le; 36% of gross. On $100K gross, that&rsquo;s
        $3,000/month total debt ceiling.
      </li>
    </ul>
    <p>
      Lenders may approve up to 43% back-end (the Qualified Mortgage rule from
      Dodd-Frank). Many financial planners argue 28/36 is already too aggressive and
      recommend 25/30 or 20/30 for buffer against job loss, rate shock on ARMs, or
      unexpected major expenses. Read the supporting page on{" "}
      <a href="/learn/how-much-house-can-i-afford">how much house can I afford</a> for
      the framework. The{" "}
      <a href="/tools/mortgage-affordability-calculator">mortgage affordability calculator</a>{" "}
      runs the math.
    </p>

    <h2 id="down-payment">Down payment: the 20% myth + reality</h2>
    <p>
      The &ldquo;20% down&rdquo; rule isn&rsquo;t legally required &mdash; it&rsquo;s
      the threshold below which Private Mortgage Insurance (PMI) kicks in on conventional
      loans. Reality:
    </p>
    <ul>
      <li>
        Conventional with PMI: as little as 3% down (Fannie Mae HomeReady, Freddie Mac
        Home Possible). PMI runs 0.3-1.5% of loan annually.
      </li>
      <li>
        FHA: 3.5% down with credit 580+. Mortgage Insurance Premium (MIP) is permanent
        (entire loan life) for loans after 2013, can&rsquo;t be cancelled by reaching
        20% equity.
      </li>
      <li>VA: 0% down for eligible veterans. No PMI/MIP. Funding fee 1.25-3.3%.</li>
      <li>
        USDA: 0% down for eligible rural properties. Income caps apply; 0.35% annual fee.
      </li>
      <li>
        Conventional 20%+: no PMI. Lower interest rate (typically 0.125-0.25% better).
        Faster equity build.
      </li>
    </ul>
    <p>
      For most buyers, 5-15% down is the sweet spot: more accessible than 20%, avoids
      FHA&rsquo;s permanent MIP, and the PMI cost (compared to the opportunity cost of
      sitting on cash that could be invested) often makes financial sense at current
      rates. Run your specific scenario in the{" "}
      <a href="/tools/down-payment-calculator">down payment calculator</a>.
    </p>

    <h2 id="pmi">PMI math and how to drop it</h2>
    <p>
      Private Mortgage Insurance protects the lender (not you) if you default with less
      than 20% equity. Cost: 0.3-1.5% of original loan annually, paid monthly.
      $300K loan at 0.5% PMI = $1,500/year = $125/month.
    </p>
    <p>
      <strong>How to drop PMI</strong>:
    </p>
    <ul>
      <li>
        <strong>Auto-cancellation at 78% LTV</strong>: federal law requires PMI removal
        when loan-to-value ratio reaches 78%, based on the original purchase price (not
        current market value). On a $300K home with 10% down ($270K loan), that&rsquo;s
        when you&rsquo;ve paid down to $234K balance.
      </li>
      <li>
        <strong>Request cancellation at 80% LTV</strong>: you can request earlier removal
        once you reach 80% LTV. May require a current appraisal ($400-600 cost) if
        market value has appreciated.
      </li>
      <li>
        <strong>Refinance to drop it</strong>: if home value rose enough to put you at
        20%+ equity, refinance into a new conventional loan with no PMI.
      </li>
    </ul>

    <h2 id="closing-costs">Closing costs by category</h2>
    <p>
      Closing typically runs 2-5% of loan amount. Breakdown for a $300K loan:
    </p>
    <ul>
      <li><strong>Origination fee</strong>: 0.5-1% of loan, $1,500-3,000.</li>
      <li><strong>Discount points (optional)</strong>: 1 point = 1% of loan upfront for ~0.25% rate reduction. $3,000 buys 0.25% rate down.</li>
      <li><strong>Appraisal</strong>: $500-800 for a single-family home.</li>
      <li><strong>Credit report</strong>: $30-50.</li>
      <li><strong>Title insurance</strong>: $1,000-2,500 (lender&rsquo;s + owner&rsquo;s policy).</li>
      <li><strong>Recording fees and transfer taxes</strong>: state/county-specific. NJ, NY, DC are high (1-2% of price). Many states minimal.</li>
      <li><strong>Prepaid items</strong>: 1-2 months property tax + 12 months homeowners insurance + prepaid interest from closing date to first payment. Easily $3,000-5,000.</li>
      <li><strong>Inspection (separate from closing but pre-purchase)</strong>: $400-600 typical, more for old homes.</li>
    </ul>
    <p>
      Total cash to close on a $300K loan: typically $9,000-15,000 on top of the down
      payment. Use the <a href="/tools/closing-cost-estimator">closing cost estimator</a>{" "}
      for state-specific numbers.
    </p>

    <h2 id="prepayment">Prepayment: where extra dollars hit hardest</h2>
    <p>
      Because the amortization curve is front-loaded, the timing of extra principal
      payments matters enormously. On a $300K loan at 6.5% over 30 years:
    </p>
    <ul>
      <li>Extra $200/month for years 1-7 only (then stop): saves ~$72,000 in interest, payoff in 25 years.</li>
      <li>Extra $200/month for years 23-30 only: saves ~$3,500 in interest, payoff in 29.5 years.</li>
      <li>Extra $200/month for full 30 years: saves ~$95,000 in interest, payoff in 24 years.</li>
    </ul>
    <p>
      The first 7 years contribute most of the lifetime savings. Why? Because each extra
      principal dollar in year 1 skips 30 years of compounding interest charges; the
      same dollar in year 25 only skips 5 years.
    </p>
    <p>
      <strong>Practical tactics</strong>:
    </p>
    <ul>
      <li>
        <strong>Bi-weekly payments</strong>: half the monthly payment every 2 weeks. Adds
        one full extra payment per year (26 half-payments = 13 full payments). Saves
        ~$50K and ~5 years on a typical 30-year loan. Most lenders require enrollment;
        watch for fees.
      </li>
      <li>
        <strong>Round up</strong>: $2,022 payment becomes $2,100. The extra $78/month
        compounds.
      </li>
      <li>
        <strong>Lump sum from windfalls</strong>: bonuses, tax refunds, inheritance.
        $5,000 toward principal in year 2 vs year 20: saves $11,000 vs $400 in
        lifetime interest.
      </li>
    </ul>
    <p>
      <strong>Opportunity cost check</strong>: extra principal yields a guaranteed return
      equal to your loan rate (after-tax adjusted). At 6.5% rate, that&rsquo;s ~5.5%
      after-tax for most filers. Compare to your investment alternatives. Stocks at
      historical 7% real return beat extra principal at most rates; safe assets (savings,
      CDs) at 4-5% don&rsquo;t. Run the comparison in the{" "}
      <a href="/tools/compound-interest-calculator">compound interest calculator</a>.
    </p>

    <h2 id="refinance">Refinance break-even formula</h2>
    <p>
      Refinancing makes sense when total savings exceed total costs over your remaining
      time horizon. Formula:
    </p>
    <pre>{`Break-even months = Closing costs / Monthly savings`}</pre>
    <p>
      Example: refinance from 7.5% to 6.0% on $250K remaining balance. Old payment
      $1,748, new payment $1,499. Savings = $249/month. Closing costs = $5,000.
      Break-even = 5000 / 249 = 20 months. If you&rsquo;ll stay in the home longer than
      20 months, refi makes sense.
    </p>
    <p>
      <strong>Watch for</strong>:
    </p>
    <ul>
      <li>
        Term reset trap: refinancing from a 22-years-remaining 30-year into a fresh
        30-year erases your accumulated payoff progress. Keep the new term &le; the
        years remaining on the old loan.
      </li>
      <li>
        No-cost refi marketing: lender pays closing costs but bumps your rate by 0.25-0.5%.
        Only worth it if you&rsquo;ll stay short enough that the rate bump costs less than
        the avoided closing costs.
      </li>
      <li>
        Rate-lock timing: lock for 30-60 days during the application process. Shop 3-5
        lenders the same week (FICO counts mortgage rate-shop pulls inside 14 days as one
        inquiry).
      </li>
    </ul>

    <h2 id="escrow">Escrow accounts: how they work</h2>
    <p>
      Most lenders escrow property tax and insurance. They collect 1/12th of the annual
      total each month with your mortgage payment, hold the balance in a non-interest
      account (in most states), and pay the bills when due. RESPA limits the cushion to 2
      months of payments.
    </p>
    <p>
      <strong>Escrow shortage</strong>: when property tax or insurance goes up
      mid-year, the lender catches up by raising your monthly payment. Common surprise
      for first-time buyers in years 2-3 as tax assessments adjust. <strong>Escrow
      surplus</strong>: opposite case &mdash; lender refunds excess.
    </p>
    <p>
      Some lenders offer escrow waivers (you pay tax/insurance directly). Usually
      requires 20%+ equity and adds 0.125-0.25% to your rate. Worth it only if you can
      reliably manage the lump-sum tax bill yourself and want to earn interest on the
      cushion.
    </p>

    <h2 id="fixed-vs-arm">Fixed vs ARM: when ARMs make sense</h2>
    <p>
      Fixed: rate locked for full term. Predictable. Default choice for owner-occupied
      long-term homes. Adjustable Rate Mortgage (ARM): rate fixed for initial period
      (5/1, 7/1, 10/1 ARM), then adjusts annually based on an index plus margin.
    </p>
    <p>
      ARMs can make sense when:
    </p>
    <ul>
      <li>You&rsquo;re confident you&rsquo;ll sell or refinance before the adjustment.</li>
      <li>
        Initial rate is meaningfully lower than fixed (typically 0.5-1% lower for 5/1 or
        7/1 ARMs vs 30-year fixed).
      </li>
      <li>
        You can stomach the worst-case adjusted payment if you&rsquo;re wrong (most
        ARMs cap individual adjustments at 2% and lifetime adjustments at 5-6% above
        the start rate).
      </li>
    </ul>
    <p>
      ARMs are riskier in rising-rate environments (which 2022-2025 was) and got a bad
      reputation from the 2008 crisis &mdash; though that was driven by aggressive
      teaser-rate ARMs to subprime borrowers, not the product itself.
    </p>

    <h2 id="fifteen-vs-thirty">15-year vs 30-year: the real comparison</h2>
    <p>
      Comparison on $300K loan with 6.5% (30-year) vs 5.75% (15-year, typically 0.5-0.75%
      below 30-year):
    </p>
    <ul>
      <li>30-year: $1,896/month, total interest $383K, total paid $683K.</li>
      <li>15-year: $2,491/month, total interest $148K, total paid $448K.</li>
      <li>Difference: 31% higher payment, 61% less interest, $235K saved.</li>
    </ul>
    <p>
      The 15-year wins on total cost. The 30-year wins on flexibility (lower required
      payment leaves cash flow for other goals). Hybrid strategy: take the 30-year for
      flexibility, but voluntarily pay 15-year-equivalent. You preserve the option to drop
      back to 30-year payment if life happens. Read the supporting analysis at{" "}
      <a href="/learn/15-vs-30-year-mortgage">15-year vs 30-year mortgage</a>.
    </p>

    <h2 id="tax-deduction">Mortgage interest deduction (US)</h2>
    <p>
      Federal income tax allows itemizing mortgage interest on loans up to $750K
      (post-2017 TCJA; $1M for older loans). Itemizing only beats the standard
      deduction if your itemized total (mortgage interest + state/local taxes capped at
      $10K + charitable + medical above 7.5% AGI) exceeds the standard deduction
      ($14,600 single / $29,200 married for 2024).
    </p>
    <p>
      Reality: most mortgage holders today take the standard deduction because the 2017
      TCJA doubled it. Even on a $400K mortgage at 6.5%, year-1 interest is ~$26K. Plus
      $10K SALT cap = $36K itemized for a married couple. That&rsquo;s only $7K above
      the standard deduction &mdash; saving roughly $1,500/year at 22% bracket. Not the
      huge deduction it was pre-TCJA.
    </p>

    <h2 id="mistakes">Top 10 mortgage mistakes</h2>
    <ol>
      <li>
        Treating P&amp;I as the &ldquo;real&rdquo; payment instead of PITI (the actual
        check is 25-40% larger).
      </li>
      <li>
        Comparing rates without comparing APR (lender with lower rate may have higher
        APR after fees).
      </li>
      <li>
        Stretching to 28% PITI ratio with no buffer (job loss + rate adjustment can blow
        through margin).
      </li>
      <li>
        Maxing out lender pre-approval (just because you CAN qualify doesn&rsquo;t mean
        you should buy that much house).
      </li>
      <li>
        Skipping the 15-year analysis (most buyers never run it; some could afford it
        easily).
      </li>
      <li>
        Refinancing without computing break-even (no-cost refis can backfire on long-term
        stays).
      </li>
      <li>
        Resetting to a fresh 30-year on every refi (erases payoff progress).
      </li>
      <li>
        Not appealing inflated property tax assessments (50%+ of disputes win something).
      </li>
      <li>
        Forgetting closing costs at offer time (2-5% of loan beyond down payment is
        often a surprise).
      </li>
      <li>
        Getting an ARM during rising-rate cycles for marginal initial savings.
      </li>
    </ol>

    <h2>Putting it all together</h2>
    <p>
      Mortgage math is intimidating because the dollar amounts are large, but the
      formulas are straightforward and stable. The two equations to memorize: monthly
      P&amp;I (amortization) and break-even months for refinance. Everything else is
      bookkeeping.
    </p>
    <p>
      The most expensive mistakes are not formula errors &mdash; they&rsquo;re scope
      errors: budgeting against P&amp;I instead of PITI, comparing rates instead of APR,
      stretching to lender max instead of conservative ratio, never modeling 15-year
      alternative. Run your scenarios in the{" "}
      <a href="/tools/mortgage-calculator">mortgage calculator</a>, the{" "}
      <a href="/tools/mortgage-affordability-calculator">affordability calculator</a>,
      and the <a href="/tools/refinance-calculator">refinance calculator</a> before
      signing anything. Twenty minutes of math saves five-figure dollar mistakes over
      30 years.
    </p>
  </>
);

export const cta = {
  label: "Run your numbers in the free mortgage calculator",
  targetSlug: "mortgage-calculator",
};

export const faq = [
  {
    q: "What's the most accurate mortgage formula to use?",
    a: "The standard amortization formula M = P × [r(1+r)^n] / [(1+r)^n − 1] gives the exact monthly principal-and-interest payment for any fixed-rate mortgage. Excel's PMT function uses the same math. P is principal, r is monthly rate (annual / 12), n is number of monthly payments (years × 12). Add 1/12 of annual property tax + 1/12 of annual insurance to get total PITI.",
  },
  {
    q: "How much should I budget for closing costs?",
    a: "2-5% of loan amount is typical. On a $300K loan: $6,000-$15,000. High-tax states (NJ, NY, DC) skew higher due to transfer taxes; low-tax states (TX, FL) skew lower. Closing includes origination ($1,500-3,000), title insurance ($1,000-2,500), appraisal ($500-800), prepaid taxes and insurance ($3,000-5,000), recording fees, and lender admin fees. Always check the Loan Estimate (LE) — it's binding within tolerance ranges.",
  },
  {
    q: "When does refinancing actually save money?",
    a: "When new-rate savings exceed closing costs over your remaining time horizon. Formula: break-even months = closing costs / monthly savings. Example: $5,000 closing + $250/month saved = 20 months break-even. Stay longer than 20 months → refi wins. Common rule of thumb: 0.75-1% rate drop and 3+ years stay typically makes refi worth it. Always avoid resetting term back to 30 years on refi (erases payoff progress).",
  },
  {
    q: "How do I drop PMI on my mortgage?",
    a: "Three paths: (1) Pay down to 78% loan-to-value (LTV) — federal law requires automatic cancellation at this point based on original purchase price. (2) Request cancellation at 80% LTV — may require new appraisal ($400-600). (3) Refinance into a new conventional loan if home value rose enough that 20%+ equity now exists. FHA loans have permanent MIP and require refinance to drop. VA and USDA don't have PMI/MIP at all.",
  },
];
