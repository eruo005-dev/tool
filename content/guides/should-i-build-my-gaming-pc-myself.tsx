/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The DIY-vs-hire question for gaming PCs comes up constantly on r/buildapc and
      r/buildapcforme. Most answers reflexively recommend DIY because &ldquo;it&rsquo;s
      easy.&rdquo; The honest answer: it depends on your time value, mistake risk
      tolerance, and how much you&rsquo;d enjoy the build.
    </p>
    <p>
      This guide is the structured comparison: how hard building actually is in 2026,
      what could go wrong, and the inputs that flip the math one way or the other.
      Pair with our <a href="/tools/pc-build-vs-hire-calculator">build-vs-hire calculator</a>{" "}
      for your specific numbers.
    </p>
  </>
);

export const toc = [
  { id: "how-hard", label: "Is it really hard to build?" },
  { id: "what-could-go-wrong", label: "What could go wrong" },
  { id: "savings", label: "How much can you save with DIY?" },
  { id: "decision", label: "Decision factors that aren't price" },
];

export const body = (
  <>
    <h2 id="how-hard">Is it really hard to build a gaming PC yourself?</h2>
    <p>
      Easier than the marketing makes it sound, harder than the YouTube tutorials
      suggest. The honest difficulty profile:
    </p>
    <ul>
      <li>
        <strong>Mechanical assembly:</strong> easy. Modern parts are keyed; you
        physically can&rsquo;t plug most things in wrong. CPU sockets are still the
        riskiest moment — bent pins from heavy hands ruin a $300 part.
      </li>
      <li>
        <strong>Cable management:</strong> medium. Looks clean takes practice. Doesn&rsquo;t
        affect performance — purely aesthetic. First builds always look messy.
      </li>
      <li>
        <strong>BIOS + first boot:</strong> medium. Sometimes the system POSTs first try.
        Sometimes it doesn&rsquo;t and you spend an hour with the QR-coded LED
        debugger. Common first-boot issues: RAM in the wrong slots, monitor plugged
        into motherboard instead of GPU, EPS power cable not seated.
      </li>
      <li>
        <strong>Thermal management:</strong> low difficulty for most builds. Modern AIO
        coolers and CPU coolers are mostly idiot-proof at stock settings. Custom water
        loops are an order of magnitude harder.
      </li>
      <li>
        <strong>OS install + drivers:</strong> easy. Windows 11 install from USB takes
        15 minutes; chipset + GPU drivers add another 15.
      </li>
    </ul>
    <p>
      Total realistic time investment for a first-time builder: 6–12 hours from
      open-box to OS-installed-and-driver-updated. Experienced builders do it in 2–3
      hours.
    </p>

    <h2 id="what-could-go-wrong">What could go wrong (and how often)</h2>
    <p>
      The mistake probability for first-time builders averages 15–25% per multiple
      r/buildapc post-mortem threads. The most common mistakes:
    </p>
    <ul>
      <li>
        <strong>Bent CPU pins (~5%).</strong> Costly. Either replace the CPU or attempt
        bend-back with a needle (sometimes works, sometimes doesn&rsquo;t).
      </li>
      <li>
        <strong>RAM in wrong slots (~10%).</strong> Cheap fix once diagnosed (re-seat in
        the dual-channel slots indicated by the manual), but causes a panicked first
        boot.
      </li>
      <li>
        <strong>Monitor in motherboard port instead of GPU (~10%).</strong> Black screen
        on first boot. Free fix.
      </li>
      <li>
        <strong>Unplugged EPS / 24-pin power (~5%).</strong> Free fix.
      </li>
      <li>
        <strong>Forgotten standoffs causing motherboard short (~3%).</strong> Bad. Can
        damage the motherboard. Always count standoffs against your case template.
      </li>
      <li>
        <strong>Wrong RAM speed in BIOS (~15%).</strong> Free fix once you enable EXPO/XMP
        in BIOS. RAM at default JEDEC speeds is 30% slower than rated; many builders
        run their RAM slow without realizing it.
      </li>
      <li>
        <strong>Inadequate PSU (~5%).</strong> Sometimes the system runs but power-spikes
        the PSU under load, causing crashes. Diagnostic: stress test before celebrating.
      </li>
    </ul>
    <p>
      Most of these are recoverable with troubleshooting time. The expensive mistakes
      (bent pins, motherboard short) are the ones to insure against.
    </p>

    <h2 id="savings">How much can you save with DIY?</h2>
    <p>
      Compared to a custom-built PC from a service like NZXT BLD or Origin PC: 5–15%
      savings on parts cost. Compared to a Best Buy or Amazon pre-built that&rsquo;s
      already-built-and-shipped: 10–25%. Compared to an iBuyPower or CyberPower
      bargain pre-built: usually a wash — those use cheap PSU/RAM/cooling that you
      wouldn&rsquo;t buy yourself.
    </p>
    <p>
      The bigger savings vs hiring local assembly: typically $80–$300 service fee
      vs your time. If your hourly value is $40 and you spend 8 hours, the math is
      $320 of your time vs $150 service fee + warranty value. Run the
      <a href="/tools/pc-build-vs-hire-calculator">build-vs-hire calculator</a> for
      your specific numbers.
    </p>

    <h2 id="decision">Decision factors that aren&rsquo;t price</h2>
    <ul>
      <li>
        <strong>Skill building.</strong> First DIY build teaches you the system in a
        way no amount of reading does. Future upgrades and troubleshooting become
        easier.
      </li>
      <li>
        <strong>Customization.</strong> DIY lets you pick exactly the case, fans,
        RGB, cable look you want. Pre-builts compromise on case quality and PSU.
      </li>
      <li>
        <strong>Warranty preferences.</strong> Pre-built warranty covers the whole
        system. DIY warranty is per-part and on you for assembly issues. Important
        if you&rsquo;re anxious about reliability.
      </li>
      <li>
        <strong>Time + risk tolerance.</strong> If you&rsquo;d enjoy the project
        and have a free Saturday, DIY. If you&rsquo;d rather be playing games this
        weekend, hire it out or pre-build.
      </li>
      <li>
        <strong>Local resources.</strong> Live near a Micro Center? They build for
        ~$150 with a warranty. Live somewhere remote? Pre-built shipped is your
        practical path.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Build vs hire calculator (free)",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Should I build my gaming PC myself or hire someone?",
    a: "Run the calculator with realistic mistake probabilities (15-25% for first-time builders). For experienced builders, DIY almost always wins. For first-time builders, it depends on hourly value and time tolerance. Non-monetary factors (skill building, customization satisfaction) push toward DIY. Convenience pushes toward hire.",
  },
  {
    q: "Is it really hard to build a gaming PC yourself?",
    a: "Easier than marketing suggests, harder than YouTube tutorials show. Mechanical assembly is easy (parts are keyed). BIOS first-boot can take an hour. Cable management takes practice. Realistic time: 6-12 hours first build, 2-3 hours experienced. Total skill bar is low for the assembly; debugging when things don't post-first-try is the harder part.",
  },
  {
    q: "What could go wrong when building a gaming PC?",
    a: "Most common mistakes (with frequencies): bent CPU pins (5%, expensive), RAM in wrong slots (10%, free fix), monitor in motherboard port (10%, free fix), unplugged EPS power (5%, free), missing standoffs causing short (3%, expensive), wrong RAM speed in BIOS (15%, free fix), inadequate PSU (5%). Most are recoverable; bent pins + motherboard short are the costly ones.",
  },
  {
    q: "How much can you save building a gaming PC yourself?",
    a: "5-15% savings vs custom-built from NZXT BLD / Origin PC. 10-25% vs pre-built from Best Buy / Amazon. Roughly a wash vs iBuyPower / CyberPower (those use cheap parts you wouldn't buy). The bigger savings vs local assembly is typically $80-300 service fee vs your time — run our calculator for your specific numbers.",
  },
];
