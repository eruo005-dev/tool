/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Can AI predict stocks?&rdquo; gets asked weekly on r/investing,
      r/dividends, and the various FinTech subs. The marketing answer is yes; the honest
      answer is &ldquo;no, but it&rsquo;s useful for things adjacent to that.&rdquo;
      This guide is the practitioner take on what AI actually does well in personal
      investing — and where to be skeptical.
    </p>
  </>
);

export const toc = [
  { id: "predictions", label: "Can AI predict dividends + growth?" },
  { id: "portfolio", label: "AI for portfolio analysis" },
  { id: "dividends", label: "Sustainable dividend strategy with AI" },
  { id: "growth-passive", label: "Balancing growth + passive income" },
  { id: "tools", label: "AI tools that are actually useful" },
];

export const body = (
  <>
    <h2 id="predictions">Can AI really predict stock dividends and growth?</h2>
    <p>
      Short answer: <strong>no, not in any way that beats indexing</strong>. Long answer:
      AI is excellent at <em>summarizing</em> historical data and <em>spotting patterns</em>{" "}
      in disclosed information, which is useful, but the actual stock-picking research
      shows that even institutional algorithmic trading rarely outperforms benchmarks
      after fees over 10+ year horizons.
    </p>
    <p>
      What AI is good at in this space:
    </p>
    <ul>
      <li>
        <strong>Reading 10-Ks faster than you.</strong> Paste a quarterly report and ask
        for &ldquo;5 things that changed vs last year, 3 risk factors mentioned, and any
        unusual language.&rdquo; Saves 30 minutes per filing.
      </li>
      <li>
        <strong>Comparing dividend histories across multiple stocks.</strong> &ldquo;For
        these 12 tickers, summarize: dividend yield, 5-year payout ratio trend, last
        cut, debt-to-equity.&rdquo; AI is great at structuring data; you still pick the
        thesis.
      </li>
      <li>
        <strong>Generating watchlists from criteria.</strong> &ldquo;Find S&amp;P 500
        stocks with: dividend &gt; 3%, payout ratio &lt; 60%, EPS growth &gt; 5% over 5
        years.&rdquo; You still verify with primary data; AI accelerates the screening.
      </li>
    </ul>
    <p>
      What AI is bad at:
    </p>
    <ul>
      <li>
        <strong>Predicting price movements.</strong> Markets price in public information.
        AI doesn&rsquo;t have non-public information. Past data alone doesn&rsquo;t
        forecast future prices reliably — that&rsquo;s why even quant funds with much
        more sophisticated models than ChatGPT struggle to beat the S&amp;P after fees.
      </li>
      <li>
        <strong>Predicting dividend cuts.</strong> The signals (payout ratio creep,
        deteriorating cash flow) are visible in financials and AI can summarize them — but
        whether the company will actually cut depends on management decisions AI
        can&rsquo;t predict.
      </li>
      <li>
        <strong>Anything claiming &ldquo;backtested with AI.&rdquo;</strong> Backtests are
        almost always overfit to past data. AI doesn&rsquo;t fix this.
      </li>
    </ul>

    <h2 id="portfolio">Using AI for portfolio analysis</h2>
    <p>
      The legitimate, high-leverage use cases:
    </p>
    <ol>
      <li>
        <strong>Asset allocation review.</strong> Paste your holdings + percentages. Ask:
        &ldquo;Categorize by sector, geography, market cap, and asset class. Identify any
        concentration risk &gt; 20% in one sector. Compare to a target like 60/40 or
        Bogleheads 3-fund.&rdquo; You&rsquo;ll find the over-weighted positions in 30
        seconds vs an hour of manual work.
      </li>
      <li>
        <strong>Tax-loss harvesting candidates.</strong> &ldquo;From this list of
        unrealized losses, identify which positions could be replaced with similar funds
        without violating the 30-day wash-sale rule.&rdquo; Useful in December.
      </li>
      <li>
        <strong>Re-balancing math.</strong> &ldquo;If I want my allocation to be X/Y/Z
        and currently holds A/B/C totaling $D, what trades do I need to make?&rdquo;
        Faster than spreadsheet math.
      </li>
      <li>
        <strong>Fee comparison.</strong> Paste fund tickers. &ldquo;Compare expense
        ratios, recent total returns, and underlying holding overlap.&rdquo; Surfaces
        cases where a 0.85% expense ratio fund is mostly the same as a 0.04% fund.
      </li>
    </ol>
    <p>
      The pattern: AI accelerates structured analysis of your existing data. It
      doesn&rsquo;t generate alpha.
    </p>

    <h2 id="dividends">Building a sustainable dividend growth strategy with AI</h2>
    <p>
      The dividend-growth investing playbook hasn&rsquo;t fundamentally changed; AI just
      compresses the time. The standard checklist:
    </p>
    <ul>
      <li>
        <strong>Dividend yield 2–5%.</strong> Above 5% is often a yield trap. Below 2%
        starves your passive income for years.
      </li>
      <li>
        <strong>Payout ratio &lt; 60%.</strong> Above 80% is precarious; the company
        is paying out almost everything it earns.
      </li>
      <li>
        <strong>5+ years of consecutive dividend increases.</strong> Filters out
        companies that pay out of vibes vs structural cash flow.
      </li>
      <li>
        <strong>Free cash flow growth.</strong> Dividends come from cash, not earnings.
      </li>
      <li>
        <strong>Reasonable debt levels.</strong> Highly leveraged dividend payers cut
        first when rates rise.
      </li>
    </ul>
    <p>
      AI prompt that runs this in 30 seconds:
    </p>
    <pre><code>{`For each of these tickers [list 10-20 tickers], summarize
in a table: current yield, payout ratio, years of consecutive
increases, 5y FCF growth %, debt-to-equity. Flag any where
payout ratio > 70% or where the dividend was cut in the last
10 years.`}</code></pre>
    <p>
      Verify the AI&rsquo;s numbers against primary source (the company&rsquo;s 10-K or
      a data provider like Macrotrends / Schwab) before acting. AI hallucinates
      financial numbers more often than people realize.
    </p>

    <h2 id="growth-passive">Building dividend income while scaling a business</h2>
    <p>
      The recurring small-business owner question: how do you build passive dividend
      income while also reinvesting everything in your business? The honest framework:
    </p>
    <ol>
      <li>
        <strong>Pay yourself a baseline salary first.</strong> Below ~$50K total comp,
        diverting cash to dividend stocks is usually a mistake — your business has
        higher returns on retained capital.
      </li>
      <li>
        <strong>Set aside 5-10% of net profit into an after-tax brokerage.</strong>{" "}
        Doesn&rsquo;t starve the business; meaningful over 10 years.
      </li>
      <li>
        <strong>For the dividend portion: a low-fee dividend ETF (VYM, SCHD, or
        equivalent) outperforms most stock picks.</strong> Your time is better spent on
        the business than on individual security selection.
      </li>
      <li>
        <strong>Use AI to keep the portfolio review under 30 minutes per quarter.</strong>{" "}
        Allocation review, dividend-cut alerts, rebalance math. Don&rsquo;t turn investing
        into a hobby that competes with the business.
      </li>
    </ol>
    <p>
      The trap: spending 5 hours a week on dividend research while the business has
      $500K/year of upside left on the table. Scale the business first; let the dividend
      portfolio compound on autopilot.
    </p>

    <h2 id="tools">AI tools that are actually useful for investing</h2>
    <ul>
      <li>
        <strong>ChatGPT / Claude / Gemini for analysis.</strong> Free tiers are sufficient
        for the workflows above. Paid tiers add upload size and reasoning depth.
      </li>
      <li>
        <strong>Perplexity for current data.</strong> When you need yields and ratios as
        of today, not as of training cutoff. Verify against primary source.
      </li>
      <li>
        <strong>Open-source backtest libraries (zipline, vectorbt).</strong> If you want
        to test strategies, real backtest tooling beats &ldquo;ChatGPT, what would have
        happened if&rdquo; — which doesn&rsquo;t work because the model can&rsquo;t
        actually run the backtest, just narrate.
      </li>
      <li>
        <strong>Avoid:</strong> AI &ldquo;stock picker&rdquo; subscription apps, social
        sentiment aggregators marketed as predictive, anything with &ldquo;quant&rdquo;
        in the marketing copy aimed at retail.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Try the compound interest calculator",
  targetSlug: "compound-interest-calculator",
};

export const faq = [
  {
    q: "Can AI really predict stock dividends and growth?",
    a: "No — not in any way that beats indexing after fees. AI is good at summarizing financial filings, comparing dividend histories across stocks, and generating watchlists from criteria. It can't predict price movements or dividend cuts because the predictive signals aren't in the data AI has access to.",
  },
  {
    q: "How can I use AI to analyze my investment portfolio?",
    a: "Asset allocation review (concentration risk, sector breakdown), tax-loss harvesting candidates, rebalancing math, fee/overlap comparison across similar funds. AI accelerates structured analysis of your existing holdings — it doesn't generate alpha.",
  },
  {
    q: "Can AI help me build a sustainable dividend growth strategy?",
    a: "It speeds up screening: paste 20 tickers, get yield/payout-ratio/FCF-growth/debt-to-equity in a table, flag the ones above safe thresholds. The strategy itself (yield 2-5%, payout <60%, 5y of increases, FCF growth) hasn't changed. Always verify AI's numbers against primary source — financial hallucinations are common.",
  },
  {
    q: "How can I build dividend income while scaling my business?",
    a: "Pay yourself baseline salary first (below ~$50K, your business has higher returns on retained capital). Then 5-10% of net profit into after-tax brokerage. Use a low-fee dividend ETF (VYM, SCHD) rather than picking stocks. Use AI to keep portfolio review under 30 min/quarter — don't let investing become a hobby competing with the business.",
  },
];
