/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Buying a gaming PC — pre-built, hired-build, or custom — is a $1000-3000
      decision most people make every 4-7 years. The questions to ask up front
      separate good purchases from regret. This guide is the full pre-purchase
      checklist.
    </p>
  </>
);

export const toc = [
  { id: "questions", label: "12 questions to ask before buying" },
  { id: "specs", label: "Specs questions" },
  { id: "warranty", label: "Warranty + support questions" },
  { id: "comparing", label: "Comparing pre-built options" },
];

export const body = (
  <>
    <h2 id="questions">12 questions to ask before buying a gaming PC</h2>
    <ol>
      <li>
        <strong>What&rsquo;s my primary use case?</strong> Esports / AAA / <a href="/learn/stream">streaming</a> /
        VR drive different specs. (See our{" "}
        <a href="/tools/gaming-pc-spec-recommender">spec recommender</a>.)
      </li>
      <li>
        <strong>What resolution + refresh rate is my monitor?</strong> The PC spec
        should match the panel.
      </li>
      <li>
        <strong>What&rsquo;s the actual total budget?</strong> Including peripherals,
        OS license, monitor if needed, games, surge protector. The PC alone is 60-80%
        of the all-in.
      </li>
      <li>
        <strong>How long do I want this to last?</strong> 3-year vs 5-year vs 7-year
        builds need different parts.
      </li>
      <li>
        <strong>Will I upgrade later?</strong> AM5 + DDR5 platform has guaranteed
        upgrade path through 2027+. Some Intel sockets are dead-end.
      </li>
      <li>
        <strong>What&rsquo;s the PSU brand + tier?</strong> Cheap PSUs damage other
        parts on failure. Tier A/B (Corsair RM, Seasonic Focus, EVGA Gold) only.
      </li>
      <li>
        <strong>What&rsquo;s the RAM speed + timings, and is XMP/EXPO enabled?</strong>{" "}
        DDR5 at default 4800 is 30% slower than 6000 with EXPO.
      </li>
      <li>
        <strong>What case airflow / thermal design?</strong> Bad cases cause
        thermal throttling. Mesh-front airflow cases are the safer pick.
      </li>
      <li>
        <strong>What&rsquo;s the warranty?</strong> Length, what it covers, and
        whether it&rsquo;s on the integrator or pass-through manufacturer. (See
        warranty guide below.)
      </li>
      <li>
        <strong>Is OS install + driver install included?</strong> Should be for any
        professional build.
      </li>
      <li>
        <strong>What&rsquo;s the return policy?</strong> 14-day, 30-day, or none?
      </li>
      <li>
        <strong>What&rsquo;s the upgrade path?</strong> Can I add storage easily? Will
        the PSU support a future GPU upgrade? Are there spare M.2 slots?
      </li>
    </ol>

    <h2 id="specs">Specs questions in detail</h2>
    <ul>
      <li>
        <strong>CPU + GPU pairing.</strong> Are they balanced for the resolution?
        Top-tier GPU on a budget CPU bottlenecks at high FPS.
      </li>
      <li>
        <strong>RAM capacity + speed + dual-channel.</strong> 32 GB DDR5-6000 in dual-
        channel slots is the modern default.
      </li>
      <li>
        <strong>Storage tier.</strong> NVMe Gen 4 (PCIe 4.0) for the OS + games.
        SATA SSD only for cold storage; HDD only if your library is huge.
      </li>
      <li>
        <strong>PSU wattage + efficiency rating.</strong> Calculate parts wattage with
        a 100-200W headroom. Gold rating minimum; Platinum nice but rarely worth the
        premium.
      </li>
      <li>
        <strong>Cooling.</strong> Stock cooler is fine for Ryzen 5 / i5; inadequate
        for Ryzen 7+ / i7+. Better air cooler ($35-60) or AIO ($100-150).
      </li>
    </ul>

    <h2 id="warranty">Warranty + support questions</h2>
    <ul>
      <li>
        <strong>How long is the labor warranty?</strong> 12 months minimum; 24 for
        premium builders.
      </li>
      <li>
        <strong>Are parts warranties pass-through?</strong> Each part typically has
        its own manufacturer warranty (1-3 years). Confirm the integrator helps with
        RMAs.
      </li>
      <li>
        <strong>What&rsquo;s their RMA / repair turnaround?</strong> Some send loaner
        units; most don&rsquo;t.
      </li>
      <li>
        <strong>Where is repair done?</strong> Shipped back to them, on-site, or
        local repair authorized?
      </li>
      <li>
        <strong>Do they cover transit damage?</strong> For shipped pre-builts, who
        owns transit risk?
      </li>
    </ul>

    <h2 id="comparing">Comparing pre-built options</h2>
    <p>
      Side-by-side checklist for comparing $1500-3000 pre-builts:
    </p>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Why it matters</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CPU model + thermal headroom</td><td>Bottleneck risk</td></tr>
        <tr><td>GPU model + warranty length</td><td>Largest cost item; longest-life part</td></tr>
        <tr><td>RAM brand + speed + capacity</td><td>30% perf swing on this</td></tr>
        <tr><td>Storage type + capacity</td><td>NVMe Gen 4 vs SATA is huge</td></tr>
        <tr><td>PSU brand + wattage + rating</td><td>System reliability</td></tr>
        <tr><td>Case airflow design</td><td>Thermal headroom for upgrades</td></tr>
        <tr><td>Cooling solution</td><td>Adequate for the CPU class?</td></tr>
        <tr><td>Labor warranty</td><td>12 months minimum</td></tr>
        <tr><td>OS license type</td><td>Retail vs OEM affects portability</td></tr>
        <tr><td>Return window</td><td>14-30 days standard</td></tr>
      </tbody>
    </table>
    <p>
      Print the table; fill in for each candidate; pick the option that wins on
      most criteria, not just price.
    </p>
  </>
);

export const cta = {
  label: "Get a tier recommendation for your use case",
  targetSlug: "gaming-pc-spec-recommender",
};

export const faq = [
  {
    q: "What questions should I ask before buying a gaming PC?",
    a: "Twelve in total: primary use case, monitor resolution + refresh rate, total budget all-in, expected lifespan, upgrade plans, PSU brand/tier, RAM speed + XMP/EXPO enabled, case airflow, warranty length + scope, OS install included, return policy, upgrade path. Cover all 12 before any purchase.",
  },
  {
    q: "How do I evaluate gaming PC pre-built options?",
    a: "Side-by-side compare: CPU + thermal headroom, GPU + warranty, RAM brand/speed/capacity, storage type, PSU brand + wattage, case airflow, cooling adequacy, labor warranty, OS license type, return window. Don't pick on price alone — picks on most criteria, especially PSU and warranty (long-tail risk).",
  },
];
