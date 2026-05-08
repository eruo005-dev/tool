/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Quick answers to the recurring gaming-PC build/hire/rent questions on
      r/buildapc, r/buildapcforme, r/SuggestALaptop, and similar communities. Each
      links to a deeper guide where the answer needs more space.
    </p>
  </>
);

export const toc = [
  { id: "timing", label: "Timing + speed" },
  { id: "watching", label: "Watching the build" },
  { id: "hardest", label: "Hardest parts" },
  { id: "experience", label: "Experience needed" },
  { id: "vetting", label: "Vetting builders" },
];

export const body = (
  <>
    <h2 id="timing">How long does it take to professionally build a gaming PC?</h2>
    <p>
      Build time itself: 1-3 hours. Total turnaround:
    </p>
    <ul>
      <li>
        <strong>Micro Center same-day:</strong> drop off in morning, pickup
        afternoon. Includes stress test.
      </li>
      <li>
        <strong>Local PC shops:</strong> 1-3 business days. Some same-day.
      </li>
      <li>
        <strong>Online builders + ship:</strong> 1-3 weeks total (build queue +
        assembly + shipping). NZXT BLD typically 1-2 weeks; Origin / Maingear 2-3.
      </li>
      <li>
        <strong>Premium custom builds (water loops, custom paint):</strong> 2-6
        weeks.
      </li>
    </ul>
    <p>
      Speed-up factors: pre-paid orders skip queue, parts already in builder&rsquo;s
      inventory skip ordering wait, simple builds beat complex ones.
    </p>

    <h2 id="watching">Can I watch someone build my gaming PC?</h2>
    <p>
      Depends on the shop. Some allow it (educational + builds trust); some
      don&rsquo;t for liability reasons. Worth asking if the experience matters
      to you.
    </p>
    <p>
      Alternatives: ask the shop to take photos during the build, watch a YouTube
      build video for the same parts (most popular CPUs/cases have multiple),
      or take an &ldquo;intro to PC building&rdquo; class at Micro Center if
      offered locally.
    </p>

    <h2 id="hardest">Which parts are hardest to install?</h2>
    <p>
      Top 5 difficulty rankings for first-time builders:
    </p>
    <ol>
      <li>
        <strong>CPU into socket.</strong> Bent pins are the costliest mistake.
      </li>
      <li>
        <strong>Front-panel I/O connectors.</strong> Tiny pins, fiddly. Manual is
        the only sanity.
      </li>
      <li>
        <strong>AIO radiator + fans into case.</strong> Aligning radiator + fans +
        screws while not over-tightening.
      </li>
      <li>
        <strong>EPS cable routing.</strong> Cable barely reaches; route through
        case channels carefully.
      </li>
      <li>
        <strong>Cable management to look clean.</strong> Functionally optional but
        emotionally painful when messy.
      </li>
    </ol>
    <p>
      For details on each, see our{" "}
      <a href="/guides/gaming-pc-building-guide-for-beginners">beginners&rsquo;
      build guide</a>.
    </p>

    <h2 id="experience">Do I need experience to build a gaming PC myself?</h2>
    <p>
      No. First-time builders successfully complete builds every day. The skills:
    </p>
    <ul>
      <li>Basic mechanical aptitude (using a screwdriver).</li>
      <li>Patience (read the manual, don&rsquo;t force anything).</li>
      <li>Willingness to troubleshoot when first-boot fails.</li>
      <li>Comfortable Googling error states + reading Reddit threads.</li>
    </ul>
    <p>
      What you don&rsquo;t need: prior PC building experience, electronics
      background, soldering skills, computer-engineering education. The build
      process is mechanical assembly + plugging cables, not engineering.
    </p>
    <p>
      Honest first-build outcomes: ~75% post first try, ~25% need 30 minutes of
      troubleshooting (usually wrong RAM slot, monitor in motherboard port, or EPS
      not connected). Almost everyone gets there same-day.
    </p>

    <h2 id="vetting">How to verify a PC builder&rsquo;s expertise?</h2>
    <p>
      Five vetting steps:
    </p>
    <ol>
      <li>
        <strong>Google reviews.</strong> 4.0+ stars, 50+ reviews, recent reviews
        (last 12 months).
      </li>
      <li>
        <strong>Specific build photos.</strong> Ask for examples of recent builds.
        Quality of cable management is visible. Bad cable management = bad
        attention to detail.
      </li>
      <li>
        <strong>Stress-test methodology.</strong> &ldquo;We test it&rdquo; isn&rsquo;t
        an answer. Should specify Prime95 + Furmark + duration.
      </li>
      <li>
        <strong>BIOS handling.</strong> Will they enable XMP/EXPO? Will they update
        BIOS to current? Should be standard.
      </li>
      <li>
        <strong>Warranty in writing.</strong> Email or printed receipt. Verbal
        warranties get conveniently forgotten.
      </li>
    </ol>
  </>
);

export const cta = {
  label: "Build vs hire calculator (free)",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "How long does it take to professionally build a gaming PC?",
    a: "Build itself: 1-3 hours. Total turnaround: Micro Center same-day; local shops 1-3 days; online builders + ship 1-3 weeks; premium custom builds (water loops, paint) 2-6 weeks. Pre-paid orders skip queue.",
  },
  {
    q: "Can I watch someone build my gaming PC?",
    a: "Depends on the shop. Some allow it (educational, builds trust). Some don't for liability reasons. Alternatives: ask for build photos, watch YouTube build videos for same parts, take a Micro Center building class if offered locally.",
  },
  {
    q: "Which gaming PC parts are hardest to install?",
    a: "CPU into socket (bent pins are costly), front-panel I/O connectors (tiny pins), AIO radiator mounting, EPS cable routing through case, cable management to look clean. Mechanical difficulty is mostly about patience + reading manuals; emotional difficulty is in cable management.",
  },
  {
    q: "Do I need experience to build a gaming PC?",
    a: "No. ~75% of first-time builders post first try; ~25% need 30 min of troubleshooting (usually wrong RAM slot, monitor in motherboard port, or EPS not connected). Almost everyone gets there same-day. Skills needed: basic screwdriver use, patience, willingness to Google.",
  },
  {
    q: "How to verify a PC builder's expertise?",
    a: "Five steps: Google reviews 4.0+ with 50+ recent reviews, ask for specific build photos (cable management visible), specific stress-test methodology (Prime95 + Furmark + duration), BIOS handling (XMP/EXPO enable, BIOS update), warranty in writing (email or printed).",
  },
];
