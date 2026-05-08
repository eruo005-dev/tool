/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Is my content inventory worth anything?&rdquo; comes up most often when
      someone is thinking about selling, getting acquired, or filing taxes. The honest
      answer: yes, but the value depends entirely on which lens you&rsquo;re using.
      Tax accountants, insurance brokers, and content-site brokers will give you wildly
      different numbers for the same library.
    </p>
    <p>
      This guide explains the three valuation lenses, when each applies, and how to
      assemble a defensible estimate. Pair it with our{" "}
      <a href="/tools/content-inventory-value-estimator">content inventory value
      estimator</a> for the math.
    </p>
  </>
);

export const toc = [
  { id: "lenses", label: "The three valuation lenses" },
  { id: "replacement", label: "Replacement cost" },
  { id: "traffic", label: "Traffic-driven value" },
  { id: "revenue", label: "Revenue-driven value" },
  { id: "monetization", label: "Monetizing existing content" },
];

export const body = (
  <>
    <h2 id="lenses">The three valuation lenses</h2>
    <p>
      Every &ldquo;how much is my content worth?&rdquo; conversation reduces to one of
      three lenses, and the right answer depends on who&rsquo;s asking:
    </p>
    <ol>
      <li>
        <strong>Replacement cost.</strong> What would it cost to recreate this content?
        Used for: insurance scheduling, founder transitions, internal accounting.
      </li>
      <li>
        <strong>Traffic-driven value.</strong> What&rsquo;s the SEO value of the existing
        organic traffic? Used for: domain auctions, content-site brokering, comparing
        against ad-buy alternatives.
      </li>
      <li>
        <strong>Revenue-driven value.</strong> What&rsquo;s the direct contribution to
        revenue? Used for: strategic acquisitions, financing, M&amp;A.
      </li>
    </ol>
    <p>
      Mature deals reference all three. If you only have one number, you&rsquo;re leaving
      money on the table or being asked to take less than you deserve.
    </p>

    <h2 id="replacement">Lens 1: replacement cost</h2>
    <p>
      The simplest model. Three inputs:
    </p>
    <ul>
      <li>
        <strong>Number of pieces.</strong> Articles, videos, podcasts, courses — count
        only meaningful pieces (a 200-word doodle isn&rsquo;t equivalent to a 2000-word
        guide).
      </li>
      <li>
        <strong>Hours per piece.</strong> Research + draft + edit + publish. Typical
        ranges: 2–4 hours for a short blog post, 6–12 for a deep guide, 20+ for a
        researched longform.
      </li>
      <li>
        <strong>Loaded hourly rate.</strong> What you&rsquo;d pay a freelance writer or
        consultant to recreate it. Range: $50–$150/hour for solid content writers in
        2026; $100–$250/hour for subject-matter experts.
      </li>
    </ul>
    <p>
      Example: 120 articles × 4 hours × $75/hour = $36,000 replacement cost.
    </p>
    <p>
      When to use it: tax filings (cost-method), insurance, internal P&amp;L. The
      number is conservative — most acquirers will pay more than this for a portfolio
      with traction.
    </p>

    <h2 id="traffic">Lens 2: traffic-driven value</h2>
    <p>
      Treats your content library as a forward annuity of organic clicks. Inputs:
    </p>
    <ul>
      <li>
        <strong>Monthly organic traffic.</strong> From Google Search Console or GA4
        — last 90-day average. Don&rsquo;t cherry-pick a peak month.
      </li>
      <li>
        <strong>Average CPC.</strong> What you&rsquo;d pay to buy this traffic on Google
        Ads for the same keywords. Pull from Ahrefs / Semrush / Google Ads keyword
        planner. Varies wildly by niche — finance is $5+, lifestyle is $0.30.
      </li>
      <li>
        <strong>Multiplier.</strong> Content sites trade at 2–4× annualized revenue
        on platforms like Empire Flippers and Motion Invest. Use 2.5× as a default;
        higher for growing niches, lower for declining or AI-disrupted ones.
      </li>
    </ul>
    <p>
      Math: monthly_traffic × 12 × CPC × multiplier. Example: 8000 monthly visits × 12
      × $1.20 × 2.5 = $288,000 traffic-driven value.
    </p>
    <p>
      When to use it: domain auctions, content-site sales (Empire Flippers, Flippa),
      comparing &ldquo;build vs acquire&rdquo; for SEO traffic.
    </p>

    <h2 id="revenue">Lens 3: revenue-driven value</h2>
    <p>
      For content that drives direct revenue — leads, conversions, paid memberships:
    </p>
    <ul>
      <li>
        <strong>Conversion rate.</strong> Visitor → paying customer. Pull from analytics
        + CRM. Typical SaaS / DTC: 1–3%. Content-heavy lead-gen: 0.5–1.5%.
      </li>
      <li>
        <strong>Customer LTV.</strong> Lifetime, not first-year. SaaS: $200–$5000+.
        Affiliate / lead-gen: $50–$300.
      </li>
      <li>
        <strong>Multiplier.</strong> 2–4× as above.
      </li>
    </ul>
    <p>
      Math: monthly_traffic × 12 × conv_rate × LTV × multiplier. Example: 8000 × 12 ×
      0.015 × $120 × 2.5 = $43,200.
    </p>
    <p>
      When to use it: strategic acquisitions where the buyer cares about your customer
      pipeline more than your traffic. M&amp;A discussions. Revenue-share partnerships.
    </p>
    <p>
      Note: revenue-driven valuations are usually <em>lower</em> than traffic-driven
      valuations for the same site, because most content sites have low conversion
      rates. Don&rsquo;t use revenue-driven if traffic-driven is materially higher —
      it understates the asset value.
    </p>

    <h2 id="monetization">Monetizing existing content (the underused move)</h2>
    <p>
      Before selling or valuing for tax purposes, ask: have you actually monetized
      this inventory? Most people haven&rsquo;t. The options:
    </p>
    <ul>
      <li>
        <strong>Ezoic / Mediavine / AdThrive display ads.</strong> Once you hit minimum
        traffic thresholds (Mediavine 50K sessions/month, AdThrive 100K), display ads
        on a content site at $20–$40 RPM is real money.
      </li>
      <li>
        <strong>Affiliate links.</strong> Amazon Associates is the easy entry; better
        margins on niche programs (Impact, ShareASale, direct deals). 1–5% conversion ×
        commission rate × visits.
      </li>
      <li>
        <strong>Sponsored placements.</strong> Banners, sponsored articles. Niche-
        dependent — finance, B2B, software all pay; entertainment is harder.
      </li>
      <li>
        <strong>Email list build.</strong> Even unmonetized, an engaged email list adds
        2–5× to a content site&rsquo;s sale value.
      </li>
      <li>
        <strong>Productize the content.</strong> Compile your top guides into a
        Gumroad ebook ($19), a video course ($99), or a paid newsletter. Often
        outperforms display ads per visitor.
      </li>
    </ul>
    <p>
      The takeaway: a content library generating $0/month sells for less than the same
      library generating $500/month, even though the underlying content is identical.
      Monetize before you appraise.
    </p>
  </>
);

export const cta = {
  label: "Estimate your content&rsquo;s value (free)",
  targetSlug: "content-inventory-value-estimator",
};

export const faq = [
  {
    q: "How do I value my digital assets and content?",
    a: "Three lenses, depending on audience: replacement cost (for tax/insurance), traffic-driven value (for domain auctions, broker sales), revenue-driven value (for strategic acquisitions). Mature deals reference all three. Use our content inventory value estimator to compute all three at once.",
  },
  {
    q: "Is my content inventory worth anything?",
    a: "Yes — even unmonetized content has replacement value (what it'd cost to recreate). Monetized content with traffic adds traffic-driven value. Content tied to revenue has revenue-driven value. Most content owners undervalue their inventory because they only think in one lens.",
  },
  {
    q: "What multiplier do content sites trade at?",
    a: "Content sites trade at 2-4× annualized revenue on Empire Flippers, Motion Invest, and Flippa. Use 2.5× as default. Higher (3-4×) for growing niches; lower (1.5-2×) for declining or AI-disrupted niches. Always benchmark against recent comparable sales on the marketplace.",
  },
  {
    q: "How do I monetize existing content I haven't monetized yet?",
    a: "Display ads (Mediavine at 50K sessions/mo, AdThrive at 100K), affiliate links (Amazon Associates entry-level; niche programs better), sponsored content for B2B/finance/software niches, email list build (multiplies sale value 2-5×), or productize as ebook/course/paid newsletter. Even modest monetization significantly increases sale value.",
  },
];
