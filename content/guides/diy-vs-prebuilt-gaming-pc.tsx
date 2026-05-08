/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The DIY-vs-pre-built decision in 2026 is closer than it&rsquo;s been in years.
      Pre-builts have improved. DIY savings have shrunk. The right choice depends on
      your specific values — savings, customization, warranty, and time.
    </p>
  </>
);

export const toc = [
  { id: "comparison", label: "Pre-built vs custom assembled comparison" },
  { id: "savings", label: "Real DIY savings in 2026" },
  { id: "when-prebuilt", label: "When pre-built wins" },
  { id: "when-diy", label: "When DIY wins" },
];

export const body = (
  <>
    <h2 id="comparison">Pre-built vs custom assembled — 2026 reality</h2>
    <p>
      The honest comparison:
    </p>
    <ul>
      <li>
        <strong>Cost:</strong> DIY 5-15% cheaper than custom-built (NZXT BLD style);
        DIY 10-25% cheaper than off-the-shelf pre-built (Best Buy, Amazon). The
        savings narrowed in 2024-2026 because pre-built integrators have streamlined.
      </li>
      <li>
        <strong>Quality of parts:</strong> Mid/budget pre-builts (iBuyPower,
        CyberPower, Skytech) often use cheaper PSU + RAM + cooling than DIY builders
        would pick. Premium pre-builts (NZXT BLD, Origin, Maingear) use parity parts.
      </li>
      <li>
        <strong>Cable management:</strong> Pre-built premium tier wins. NZXT and
        Origin do beautiful cable work. DIY first-time builds usually don&rsquo;t.
      </li>
      <li>
        <strong>Warranty:</strong> Pre-builts have system warranties; DIY has
        per-part warranties. Pre-built single-throat-to-choke is real value if you
        don&rsquo;t want to deal with diagnostics.
      </li>
      <li>
        <strong>Time:</strong> Pre-built arrives in a box, ready to plug in. DIY
        takes 6-12 hours first time.
      </li>
      <li>
        <strong>Customization:</strong> DIY wins. Specific case, specific RGB, specific
        cooling solution. Pre-builts compromise on the case (often cheap) and
        sometimes the PSU.
      </li>
      <li>
        <strong>Skill building:</strong> DIY teaches you the system. Pays off in
        upgrades + troubleshooting later.
      </li>
    </ul>

    <h2 id="savings">Real DIY savings in 2026</h2>
    <p>
      For a $2200 mid-tier build:
    </p>
    <ul>
      <li>
        <strong>vs Best Buy / Amazon pre-built (similar specs):</strong> ~$300-450
        cheaper DIY. Pre-built compromises on PSU + case to hit price point.
      </li>
      <li>
        <strong>vs NZXT BLD (parity parts):</strong> ~$200-300 cheaper DIY. Pay the
        delta for the cable management + 2-year warranty + zero time investment.
      </li>
      <li>
        <strong>vs iBuyPower / CyberPower (similar nominal specs):</strong> often a
        wash on TCO once you replace the cheap PSU + add cooling.
      </li>
      <li>
        <strong>vs Origin PC / Maingear (custom):</strong> $500-1200 cheaper DIY.
        You pay them for the boutique aesthetic and warranties.
      </li>
    </ul>

    <h2 id="when-prebuilt">When pre-built wins</h2>
    <ul>
      <li>
        <strong>You don&rsquo;t enjoy building.</strong> Time + DIY savings probably
        don&rsquo;t justify the experience for you.
      </li>
      <li>
        <strong>You want comprehensive warranty support.</strong> Single throat to
        choke when something fails.
      </li>
      <li>
        <strong>You need the PC immediately.</strong> Pre-built ships in days; DIY
        + ship parts + assemble takes 1-2 weeks.
      </li>
      <li>
        <strong>You want the cleanest cable management.</strong> Premium pre-builts
        (NZXT BLD, Origin) outdo first-time DIY builds.
      </li>
      <li>
        <strong>You want financing options.</strong> Pre-built sites typically offer
        financing; PCPartPicker checkout doesn&rsquo;t.
      </li>
      <li>
        <strong>You&rsquo;re buying for someone else (gift, family member).</strong>{" "}
        DIY is hard to gift; pre-builts ship ready.
      </li>
    </ul>

    <h2 id="when-diy">When DIY wins</h2>
    <ul>
      <li>
        <strong>You enjoy the build.</strong> The non-monetary value of doing it
        yourself is real.
      </li>
      <li>
        <strong>You want a specific aesthetic.</strong> Niche cases, custom water
        loops, specific RGB programming.
      </li>
      <li>
        <strong>You want maximum value at every price tier.</strong> DIY consistently
        beats pre-built on parts quality at the same price point.
      </li>
      <li>
        <strong>You&rsquo;ll do upgrades or troubleshooting later.</strong> The skills
        you learn on the build pay off compounding.
      </li>
      <li>
        <strong>You want high-quality PSU + cooling at mid-tier price.</strong>{" "}
        Pre-builts cut these to hit price points; DIY lets you spend appropriately.
      </li>
      <li>
        <strong>You have time more than money.</strong> Most students. The hourly
        math works in DIY&rsquo;s favor.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Compare DIY total cost vs hiring",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "How to choose between DIY and pre-built gaming PCs?",
    a: "Pre-built wins for: not enjoying the build, wanting comprehensive warranty, needing immediate availability, financing needs, gift-buying. DIY wins for: enjoying the project, specific aesthetic preferences, max value at price tier, future-proofing through skill-building, mid-tier builds where pre-builts cut PSU/cooling.",
  },
  {
    q: "How much can I save building a gaming PC vs buying pre-built?",
    a: "vs Best Buy / Amazon (similar specs): $300-450 on a $2200 build. vs NZXT BLD (parity parts): $200-300. vs iBuyPower / CyberPower: often a wash after replacing cheap PSU + cooling. vs Origin PC / Maingear: $500-1200 (premium aesthetic surcharge). Savings narrowed in 2024-2026 vs prior years.",
  },
  {
    q: "Are pre-built gaming PCs worth it in 2026?",
    a: "Often, yes. Pre-built market improved meaningfully. NZXT BLD, Origin PC, Maingear use parity parts to DIY at modest premium. Best Buy / Amazon pre-builts compromise on PSU + case but ship fast. iBuyPower / CyberPower budget tier still cuts corners — buy carefully.",
  },
];
