/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Building your first gaming PC is achievable in 6-12 hours. The difficulty is
      lower than YouTube makes it look but higher than the marketing suggests. This
      guide walks the realistic build process plus the tools, mistakes to avoid,
      and where to ask for help when something doesn&rsquo;t boot first try.
    </p>
  </>
);

export const toc = [
  { id: "tools", label: "Tools you need" },
  { id: "process", label: "The build process" },
  { id: "hard-parts", label: "Hardest parts to install" },
  { id: "first-boot", label: "First boot troubleshooting" },
  { id: "common-mistakes", label: "Common beginner mistakes" },
];

export const body = (
  <>
    <h2 id="tools">Tools you need to build a gaming PC</h2>
    <ul>
      <li>
        <strong>Magnetic Phillips screwdriver (#2).</strong> The only screwdriver
        you need 95% of the time.
      </li>
      <li>
        <strong>Anti-static mat or wrist strap (optional).</strong> ESD damage is
        rare in modern parts but standing on carpet without grounding raises risk.
        $10 cheap insurance.
      </li>
      <li>
        <strong>Zip ties or velcro.</strong> For cable management. Reusable velcro
        ties are nicer than zip ties.
      </li>
      <li>
        <strong>Flashlight or phone torch.</strong> Cases are dark inside.
      </li>
      <li>
        <strong>Thermal paste (sometimes).</strong> Most coolers come with paste
        pre-applied. Air cooler with no included paste = buy a $10 tube.
      </li>
      <li>
        <strong>Bootable USB drive (8 GB+).</strong> For Windows install. Make
        before starting via Microsoft&rsquo;s Media Creation Tool.
      </li>
      <li>
        <strong>Optional: small parts tray</strong> for screws. Saves the
        &ldquo;where did that screw go&rdquo; moment.
      </li>
    </ul>

    <h2 id="process">The build process — order of operations</h2>
    <p>
      Realistic time: 4-8 hours for first build (research + build + boot + OS),
      2-3 hours experienced.
    </p>
    <ol>
      <li>
        <strong>Read the motherboard manual front to back.</strong> 30 minutes well
        spent. Tells you which RAM slots, which PCIe slot, where to plug power.
      </li>
      <li>
        <strong>Install CPU into motherboard (out of case).</strong> Most delicate
        moment. Match the triangle markers; lower gently, don&rsquo;t force.
      </li>
      <li>
        <strong>Install RAM into the manual&rsquo;s recommended slots.</strong>{" "}
        Usually slots A2 + B2 for dual-channel. Push firmly until clips lock.
      </li>
      <li>
        <strong>Install M.2 NVMe drive.</strong> Slot is on the motherboard. Tiny
        screw holds it down.
      </li>
      <li>
        <strong>Install CPU cooler.</strong> Apply thermal paste (pea-sized) if not
        pre-applied. Tighten in cross pattern. Plug fan header to CPU_FAN.
      </li>
      <li>
        <strong>Mount motherboard in case.</strong> Match standoff pattern from case
        to motherboard. Don&rsquo;t skip standoffs — direct contact with the case
        causes shorts.
      </li>
      <li>
        <strong>Install PSU.</strong> Fan facing down (out of case bottom) on most
        modern cases.
      </li>
      <li>
        <strong>Connect power cables.</strong> 24-pin to motherboard, EPS (8-pin
        CPU) to top of motherboard, PCIe (8-pin or 6+2) to GPU.
      </li>
      <li>
        <strong>Connect front-panel I/O.</strong> Power switch, LED, USB. Tiny
        connectors that frustrate everyone the first time. Manual shows the
        pinout.
      </li>
      <li>
        <strong>Install GPU last.</strong> Top PCIe x16 slot. Push down firmly until
        clip clicks. Connect PCIe power cable.
      </li>
      <li>
        <strong>Cable manage.</strong> Route through case channels, zip-tie behind
        the motherboard tray.
      </li>
      <li>
        <strong>First boot.</strong> Plug monitor into GPU (NOT motherboard). Power
        on. If POST screen appears, success. If not, see troubleshooting below.
      </li>
      <li>
        <strong>BIOS update + XMP/EXPO enable.</strong> Critical step. Without
        EXPO, RAM runs 30% slower than rated.
      </li>
      <li>
        <strong>Install Windows from USB.</strong> 15 minutes. Skip the Microsoft
        account if you can (offline install is more flexible).
      </li>
      <li>
        <strong>Install drivers.</strong> Chipset (motherboard manufacturer&rsquo;s
        site) → GPU (NVIDIA / AMD site) → Windows updates.
      </li>
      <li>
        <strong>Stress test.</strong> 30 min OCCT or Prime95 (CPU); 30 min Furmark
        or 3DMark Time Spy stress (GPU). Verify thermals and stability.
      </li>
    </ol>

    <h2 id="hard-parts">Hardest parts to install</h2>
    <ul>
      <li>
        <strong>CPU into socket.</strong> Bent pins are the costliest mistake.
        Triple-check alignment.
      </li>
      <li>
        <strong>Front-panel I/O connectors.</strong> Tiny pins, easy to mis-align.
        Manual is the only sanity. Aftermarket adapters (NZXT Front-IO Cable Comb)
        help.
      </li>
      <li>
        <strong>EPS cable through the case.</strong> Often the cable barely reaches
        — you have to route it carefully through the case&rsquo;s cable channel.
      </li>
      <li>
        <strong>Cable management to look clean.</strong> Functionally optional but
        emotionally painful when it looks messy.
      </li>
      <li>
        <strong>AIO cooler radiator mounting.</strong> Aligning the radiator + fans
        + screws while not over-tightening is the second-most fiddly task.
      </li>
    </ul>

    <h2 id="first-boot">First boot troubleshooting</h2>
    <p>
      If the system doesn&rsquo;t POST first try:
    </p>
    <ol>
      <li><strong>Monitor plugged into GPU?</strong> #1 mistake. Move from motherboard port to GPU port.</li>
      <li><strong>RAM in correct slots?</strong> Check the manual. Usually A2 + B2 for dual-channel.</li>
      <li><strong>EPS (CPU power) cable connected?</strong> Top of the motherboard, often forgotten.</li>
      <li><strong>24-pin fully seated?</strong> Push firmly until both clips click.</li>
      <li><strong>GPU PCIe power connected?</strong> Required for any GPU above the 6500-tier.</li>
      <li><strong>Reseat RAM, CPU cooler, GPU.</strong> Often a connection issue.</li>
      <li><strong>Check the motherboard&rsquo;s LED debug indicator.</strong> Most modern boards have one. Tells you which subsystem is failing.</li>
      <li><strong>Post on r/buildapc.</strong> If you&rsquo;re stuck after the above, the community helps fast. Include build photos + spec list.</li>
    </ol>

    <h2 id="common-mistakes">Common beginner mistakes to avoid</h2>
    <ul>
      <li><strong>Forgetting to enable XMP/EXPO in BIOS.</strong> Most common silent issue.</li>
      <li><strong>Plugging monitor into motherboard.</strong> #1 first-boot black-screen cause.</li>
      <li><strong>Inadequate PSU.</strong> Underspec&rsquo;d PSU eventually fails under load.</li>
      <li><strong>Bent CPU pins.</strong> Slow down at this step.</li>
      <li><strong>Skipping standoffs.</strong> Causes motherboard shorts.</li>
      <li><strong>Over-tightening anything.</strong> Cracks PCBs. Tighten until snug, no more.</li>
      <li><strong>Wrong RAM slots.</strong> Read the manual.</li>
      <li><strong>Skipping stress test.</strong> Failures show up on first hour of game; stress test earlier.</li>
    </ul>
  </>
);

export const cta = {
  label: "Spec recommendations by use case",
  targetSlug: "gaming-pc-spec-recommender",
};

export const faq = [
  {
    q: "What tools do I need to build a gaming PC?",
    a: "Magnetic #2 Phillips screwdriver (95% of screws), zip ties or velcro for cable management, flashlight, anti-static mat (optional, $10 cheap insurance), bootable USB drive for Windows install. Most coolers include thermal paste. That's it — no specialized tools needed.",
  },
  {
    q: "Which parts are hardest to install when building a gaming PC?",
    a: "CPU into socket (bent pins are costly), front-panel I/O connectors (tiny pins, manual is only sanity), EPS cable routing through case, AIO cooler radiator mounting, cable management to look clean. The functional parts are mostly easy; aesthetics + tiny connectors are where time goes.",
  },
  {
    q: "How to avoid mistakes when building your first gaming PC?",
    a: "Top 5: read motherboard manual front-to-back first (30 min well spent), don't force CPU into socket (bent pins), check RAM slot positions before pushing, don't skip case standoffs (shorts the board), enable XMP/EXPO in BIOS (without this RAM runs 30% slower).",
  },
  {
    q: "What if my PC doesn't boot first try?",
    a: "Sequence: monitor plugged into GPU not motherboard? RAM in correct slots? EPS (CPU power) connected? 24-pin fully seated? GPU PCIe power connected? Reseat RAM/CPU/GPU. Check motherboard LED debug indicator. Post on r/buildapc with photos if still stuck — community helps fast.",
  },
];
