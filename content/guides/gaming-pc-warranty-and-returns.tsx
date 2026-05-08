/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Warranty terms separate good gaming PC purchases from expensive learning
      experiences. The fine print on labor vs parts coverage, transit damage, and
      return policies is where pre-built and custom-built PCs differ most. This
      guide walks the practical map.
    </p>
  </>
);

export const toc = [
  { id: "warranty-types", label: "Types of warranty coverage" },
  { id: "professional", label: "Professional builder warranties" },
  { id: "returns", label: "Return policies" },
  { id: "rma", label: "RMA process" },
];

export const body = (
  <>
    <h2 id="warranty-types">Types of warranty coverage</h2>
    <ul>
      <li>
        <strong>Labor warranty:</strong> covers the assembly itself. If the builder
        miswired something or installed a part incorrectly, they fix it free. Length:
        30 days to 24 months depending on builder.
      </li>
      <li>
        <strong>Parts warranty:</strong> manufacturer warranty on each component,
        typically 1-3 years (motherboard 3, CPU 3, GPU 2-3, RAM lifetime, PSU 5-10
        depending on tier).
      </li>
      <li>
        <strong>System warranty:</strong> some pre-built integrators (Origin PC,
        Maingear) offer a unified warranty covering the whole system. Higher cost,
        cleaner experience for the customer.
      </li>
      <li>
        <strong>Transit damage:</strong> if shipped, who covers damage in
        transit? Some builders insure shipping; others don&rsquo;t. Critical question
        for online builders.
      </li>
    </ul>

    <h2 id="professional">Professional builder warranties</h2>
    <ul>
      <li>
        <strong>Micro Center PC Build Service:</strong> 12-month labor warranty on
        the build. Parts pass through to manufacturer warranties.
      </li>
      <li>
        <strong>NZXT BLD:</strong> 2-year labor warranty + system-level support.
      </li>
      <li>
        <strong>Origin PC + Maingear + Falcon Northwest:</strong> 1-3 year
        comprehensive warranties on labor + extended on parts. Most premium-tier
        coverage.
      </li>
      <li>
        <strong>Local PC shops:</strong> 30-day to 12-month labor warranty typical.
        Verify in writing — some shops verbally offer warranties they don&rsquo;t
        document.
      </li>
      <li>
        <strong>iBuyPower / CyberPower / Skytech:</strong> 1-year limited warranty.
        RMA process can be slow. Budget pre-builts skew toward shorter warranty + slower
        repair.
      </li>
    </ul>

    <h2 id="returns">Return policies</h2>
    <p>
      What&rsquo;s typical:
    </p>
    <ul>
      <li>
        <strong>Online retailers (Amazon, Best Buy):</strong> 30-day return window
        on most pre-built gaming PCs. Confirm before purchase.
      </li>
      <li>
        <strong>Custom-built (Origin PC, NZXT BLD):</strong> 14-30 day return.
        Restocking fee sometimes applies (10-20%).
      </li>
      <li>
        <strong>Local PC shops:</strong> often no return for custom builds. Once
        assembled with your parts, they can&rsquo;t resell. Verify before booking.
      </li>
      <li>
        <strong>iBuyPower / CyberPower:</strong> 30-day return policies but
        restocking fees of 15-20% common.
      </li>
    </ul>
    <p>
      Edge cases that affect return rights:
    </p>
    <ul>
      <li>
        <strong>OS activated:</strong> some retailers refuse returns once Windows
        has been activated. Confirm before powering on.
      </li>
      <li>
        <strong>Custom configuration:</strong> made-to-order builds typically have
        stricter return terms than off-the-shelf.
      </li>
      <li>
        <strong>Damage / use:</strong> obvious — non-returnable if damaged or showing
        heavy use.
      </li>
    </ul>

    <h2 id="rma">RMA process for failed parts</h2>
    <p>
      When a part fails under warranty, the steps:
    </p>
    <ol>
      <li>
        <strong>Diagnose first.</strong> Confirm which part failed. Reddit r/buildapc
        + manufacturer forums help with diagnostics.
      </li>
      <li>
        <strong>Contact the integrator (if you bought a built system).</strong>{" "}
        Some handle the RMA for you; some say &ldquo;contact the manufacturer.&rdquo;
        Reputable builders handle it.
      </li>
      <li>
        <strong>Contact the manufacturer (DIY builds).</strong> Open an RMA ticket
        on their website. Need proof of purchase + serial number.
      </li>
      <li>
        <strong>Ship the part.</strong> Most manufacturers cover return shipping
        on warranty claims; some don&rsquo;t.
      </li>
      <li>
        <strong>Repair / replace turnaround:</strong> 1-4 weeks typical. Some
        manufacturers offer cross-ship (they send replacement before you ship the
        bad one) for premium tiers.
      </li>
      <li>
        <strong>Reinstall.</strong> If you had the integrator do the original build
        and the system warranty is still valid, they may handle reinstall too.
        Otherwise it&rsquo;s on you.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Compare DIY vs hire calculator",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "What warranty do you get with professionally built PCs?",
    a: "Labor warranty (covers assembly): 30 days to 24 months depending on builder. Parts warranty (manufacturer): 1-3 years typical. System warranty (Origin PC, Maingear, Falcon NW): 1-3 years comprehensive. Micro Center: 12-month labor. NZXT BLD: 2-year labor.",
  },
  {
    q: "Can you return a professionally built gaming PC?",
    a: "Sometimes. Online retailers + custom builders typically 14-30 day return windows; restocking fees of 10-20% common for made-to-order. Local PC shops often no return for custom builds. OS activation, custom configuration, and any use can void return rights — confirm before powering on.",
  },
  {
    q: "How does the RMA process work for gaming PCs?",
    a: "Diagnose the failed part, contact integrator (if pre-built) or manufacturer directly. Open RMA with proof of purchase + serial. Ship the part (return shipping often covered for warranty claims). 1-4 week turnaround typical; some premium tiers offer cross-ship. Reinstall is usually on you unless system warranty covers it.",
  },
];
