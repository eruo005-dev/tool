/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Professional PC building services range from a $150 Micro Center bench-build to
      $800 boutique custom-loop systems. Knowing what each tier includes and what to
      expect is the difference between a fair price and overpaying for what amounts
      to 2 hours of labor.
    </p>
    <p>
      This guide is the practical breakdown: what&rsquo;s included, what to ask
      before booking, costs by retailer, and how to vet builders you can&rsquo;t
      walk into.
    </p>
  </>
);

export const toc = [
  { id: "whats-included", label: "What&rsquo;s included in PC assembly" },
  { id: "service-types", label: "Online vs in-store vs local shop" },
  { id: "costs", label: "Specific retailer pricing" },
  { id: "ask-before", label: "Questions to ask before booking" },
  { id: "vetting", label: "Vetting builders + warranty" },
];

export const body = (
  <>
    <h2 id="whats-included">What&rsquo;s included in a professional PC building service</h2>
    <p>
      Standard scope (the typical $100-300 tier):
    </p>
    <ul>
      <li>Component installation (CPU, cooler, RAM, GPU, storage, PSU)</li>
      <li>Cable routing + basic cable management</li>
      <li>BIOS update to current version</li>
      <li>OS install (Windows 11) — sometimes you bring the license, sometimes included</li>
      <li>Chipset + GPU driver install</li>
      <li>Basic stress test (10–30 minutes load)</li>
      <li>1–4 hour build time</li>
      <li>30-day–12-month labor warranty (varies by builder)</li>
    </ul>
    <p>
      Premium scope ($300-800 tier) adds:
    </p>
    <ul>
      <li>Custom cable extensions / sleeved PSU cables</li>
      <li>BIOS overclocking validation (XMP/EXPO + light CPU OC if requested)</li>
      <li>Premium cable routing (every cable hidden, no visible zip ties)</li>
      <li>Extended stress test (1–4 hours under multiple workload types)</li>
      <li>12–24 month labor warranty</li>
      <li>Sometimes: custom paint, art, or themed lighting</li>
    </ul>

    <h2 id="service-types">Online vs in-store vs local shop</h2>
    <ul>
      <li>
        <strong>Big-box in-store (Micro Center, Best Buy):</strong> ~$150-200. Predictable
        quality, OS install included, 12-month labor warranty typical. Bring your parts;
        leave with a working PC same-day. The default for anyone with a Micro Center
        nearby.
      </li>
      <li>
        <strong>Local PC shop:</strong> $80-300. Quality varies widely. Best for
        unusual case form factors or custom requests. Read Google reviews before
        committing — quality at small shops ranges from excellent to abysmal.
      </li>
      <li>
        <strong>Online builder + ship (NZXT BLD, Origin PC, Maingear, BLD by NZXT):</strong>{" "}
        $300-800 over parts cost. Standardized quality, clean cable management,
        long warranties (1-2 years on labor). Slower turnaround (1-3 weeks). Best for
        people not near a Micro Center or who want a polished aesthetic.
      </li>
      <li>
        <strong>Custom builders (boutique):</strong> $500-2000 above parts. Custom water
        loops, premium aesthetics, paint jobs, RGB programming. Best for halo builds
        where the look matters as much as the spec.
      </li>
      <li>
        <strong>Independent builders (r/buildapcsales, local listings):</strong>{" "}
        $100-250 typical. Quality entirely depends on the individual; vet thoroughly.
      </li>
    </ul>

    <h2 id="costs">Specific retailer pricing (2025-2026)</h2>
    <ul>
      <li>
        <strong>Micro Center PC Build Service:</strong> ~$150 + parts. OS install,
        BIOS update, driver install, 24-hour stress test, 12-month labor warranty.
        Need parts purchased from Micro Center for best price.
      </li>
      <li>
        <strong>Best Buy Geek Squad PC Setup:</strong> ~$199 + parts. Less polished than
        Micro Center for builds; better for upgrades + troubleshooting.
      </li>
      <li>
        <strong>NZXT BLD:</strong> $399 service fee, $299 if you buy parts through them.
        Online + ships. 2-year labor warranty. Known for clean cable management.
      </li>
      <li>
        <strong>Origin PC + Maingear:</strong> $300-800 service fee depending on tier.
        Custom paint and aesthetic options. Slower turnaround.
      </li>
      <li>
        <strong>Local PC repair shops:</strong> $80-300. Quality varies; verify with
        Google reviews + ask about warranty terms.
      </li>
    </ul>

    <h2 id="ask-before">Questions to ask before booking PC assembly</h2>
    <ol>
      <li>
        <strong>What&rsquo;s the warranty on labor?</strong> Should be at least 12
        months for any reputable builder. 24+ for premium.
      </li>
      <li>
        <strong>Is OS install + driver install included?</strong> Some places charge
        extra. Confirm before dropping off parts.
      </li>
      <li>
        <strong>Do you stress test? For how long?</strong> 10-minute &ldquo;passed&rdquo; isn&rsquo;t
        enough. Ask for 30+ min Prime95 + Furmark or AIDA64.
      </li>
      <li>
        <strong>Will you enable XMP / EXPO in BIOS?</strong> Without this your RAM runs
        30% slower than rated. Many low-tier builders skip this step.
      </li>
      <li>
        <strong>Can I bring my own parts?</strong> Most yes; some require parts purchase
        through them. Verify upfront.
      </li>
      <li>
        <strong>Turnaround time?</strong> Same-day at Micro Center; 3-7 days at most
        local shops; 1-3 weeks for online builders.
      </li>
      <li>
        <strong>Can I watch the build?</strong> Some shops allow this (especially for
        learning). Some don&rsquo;t for liability reasons. Worth asking if you want
        the experience.
      </li>
      <li>
        <strong>What happens if a part is DOA?</strong> Will they help RMA, or is that
        on you?
      </li>
    </ol>

    <h2 id="vetting">Vetting builders + warranty terms</h2>
    <p>
      Red flags:
    </p>
    <ul>
      <li>
        <strong>No labor warranty.</strong> Some local shops do this. Walk away.
      </li>
      <li>
        <strong>Extreme rush job (under 1 hour).</strong> Quality stress testing
        takes longer than the build.
      </li>
      <li>
        <strong>No OS install or driver install.</strong> Adding it later is fine if
        you&rsquo;re comfortable; for the &ldquo;leave with a working PC&rdquo;
        promise, it should be included.
      </li>
      <li>
        <strong>Unwilling to discuss specific stress-test methodology.</strong>{" "}
        &ldquo;We test it&rdquo; isn&rsquo;t an answer.
      </li>
      <li>
        <strong>Dramatic pricing variation</strong> from the local market. Suspiciously
        cheap = corner-cutting; suspiciously expensive = padding.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Compare DIY cost vs hiring (calculator)",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "What's included in professional PC building services?",
    a: "Standard ($100-300): assembly, cable routing, BIOS update, OS install, driver install, basic stress test, 30-day to 12-month labor warranty. Premium ($300-800): custom cable extensions, BIOS OC validation, premium cable routing, extended stress tests, 12-24 month warranty.",
  },
  {
    q: "How much does Micro Center charge for PC assembly?",
    a: "~$150 + parts when you buy parts from Micro Center. Includes OS install, BIOS update, driver install, 24-hour stress test, 12-month labor warranty. Same-day turnaround typical. The default choice for most US builders within driving distance.",
  },
  {
    q: "What questions should I ask before booking PC assembly?",
    a: "Warranty length on labor (12+ months minimum), is OS + driver install included, stress-test duration + methodology, will they enable XMP/EXPO in BIOS, can I bring my own parts, turnaround time, can I watch the build, what happens if a part is DOA. Specific answers to all 8 = reputable builder.",
  },
  {
    q: "Online vs in-store PC assembly — which is better?",
    a: "In-store (Micro Center / Best Buy): predictable quality, ~$150, same-day. Local PC shop: variable quality, $80-300, vet via Google reviews. Online + ship (NZXT BLD, Origin, Maingear): polished aesthetic, $300-800, 1-3 week turnaround, 1-2 year warranties. Pick by what's available locally.",
  },
];
