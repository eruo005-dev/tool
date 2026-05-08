/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;What gaming PC do I need?&rdquo; is the wrong question. The right question
      is &ldquo;what specs do I need for the games I actually play, at the resolution
      and refresh rate I&rsquo;ll use them at?&rdquo;
    </p>
    <p>
      This guide is the practical decision flow: figuring out your real use case,
      avoiding common spec mistakes, and using our{" "}
      <a href="/tools/gaming-pc-spec-recommender">spec recommender</a> to anchor your
      build.
    </p>
  </>
);

export const toc = [
  { id: "use-case", label: "Identify your real use case" },
  { id: "common-mistakes", label: "Common spec mistakes" },
  { id: "components", label: "Component priority order" },
  { id: "future-proofing", label: "Future-proofing reality check" },
];

export const body = (
  <>
    <h2 id="use-case">Identify your real use case</h2>
    <p>
      Before picking parts, answer:
    </p>
    <ol>
      <li>
        <strong>Primary game type.</strong> Esports (CS, Valorant, Apex, OW)
        prioritizes high FPS at lower settings. AAA single-player (Cyberpunk, Witcher)
        prioritizes visual quality. Strategy / sim games (Cities Skylines, Civ) are
        CPU-bound. Different games push different hardware.
      </li>
      <li>
        <strong>Resolution + refresh rate of your monitor.</strong> 1080p 144 Hz needs
        very different hardware than 4K 60 Hz or 1440p 240 Hz. The monitor is part of
        your spec — don&rsquo;t spec a 4K-capable GPU for a 1080p panel.
      </li>
      <li>
        <strong><a href="/learn/stream">Streaming</a> / content creation.</strong> Adds CPU + RAM requirements.
        Your &ldquo;just gaming&rdquo; spec is wrong if you&rsquo;ll also be running
        OBS + Discord + browser + chat tools.
      </li>
      <li>
        <strong>VR.</strong> Adds GPU requirements. VR demands consistent 90+ FPS at
        higher-than-monitor resolutions. Underspec&rsquo;d GPUs cause motion sickness.
      </li>
      <li>
        <strong>Years of expected use.</strong> 3-year build vs 5-year build vs hand-
        me-down spec different parts. 5-year builds need overhead on everything that&rsquo;s
        hard to upgrade later (CPU, motherboard, PSU, case).
      </li>
    </ol>
    <p>
      Run our <a href="/tools/gaming-pc-spec-recommender">spec recommender</a> with
      your dominant use case for a tier + budget anchor.
    </p>

    <h2 id="common-mistakes">Common gaming PC spec mistakes</h2>
    <ul>
      <li>
        <strong>Top-tier GPU, mediocre CPU.</strong> Bottlenecks the GPU at higher
        framerates. Esports especially: a $1200 GPU with a $200 CPU runs 1080p
        worse than a balanced mid-range build.
      </li>
      <li>
        <strong>Not enough RAM.</strong> 16 GB is the new minimum in 2026. 32 GB is
        the comfort zone. Modern AAA games + Discord + browser + Steam easily exceed 16.
      </li>
      <li>
        <strong>Cheap PSU.</strong> Budget PSUs damage other parts when they fail.
        Stick to Tier A or B brands (Corsair RM, Seasonic Focus, EVGA Gold). Save
        money on the GPU one tier down before saving money on the PSU.
      </li>
      <li>
        <strong>SATA SSD instead of NVMe.</strong> NVMe is now standard pricing-wise;
        SATA is a 5-year-old recommendation. Game load times are dramatically better
        on NVMe.
      </li>
      <li>
        <strong>No or inadequate cooling.</strong> Modern CPUs throttle aggressively.
        Stock coolers on i7/Ryzen 7+ class CPUs are inadequate for sustained gaming.
        Budget for a good air cooler ($35-60) or AIO ($100-150).
      </li>
      <li>
        <strong>Wrong RAM speed.</strong> DDR5 at JEDEC default (4800) is 30% slower
        than DDR5-6000 with EXPO. Many builds run RAM slow because builders forgot to
        enable XMP/EXPO.
      </li>
      <li>
        <strong>Buying for the future at the expense of today.</strong> &ldquo;I&rsquo;ll
        get the 4090 because I might do 4K someday.&rdquo; Buy what you need now for
        the resolution you have. GPUs depreciate fast.
      </li>
    </ul>

    <h2 id="components">Component priority order</h2>
    <p>
      Where to spend the marginal dollar, in order:
    </p>
    <ol>
      <li>
        <strong>GPU.</strong> Single biggest determinant of gaming performance.
        Pick the GPU first based on resolution + game type, then build around it.
      </li>
      <li>
        <strong>CPU.</strong> Within reason — the &ldquo;balanced&rdquo; CPU for your
        GPU class. AMD Ryzen 5 / 7 7000-series or Intel i5/i7 14th gen are the
        sensible defaults. Avoid mismatched extremes.
      </li>
      <li>
        <strong>RAM.</strong> 32 GB DDR5-6000 is the comfortable default for 1440p+
        gaming + streaming. 16 GB only if you&rsquo;re strictly esports-1080p budget.
      </li>
      <li>
        <strong>Storage.</strong> 1-2 TB NVMe Gen 4. Add a SATA SSD or HDD only if
        your library exceeds 2 TB.
      </li>
      <li>
        <strong>PSU.</strong> Tier A/B brand, 100-200 W headroom over your part list&rsquo;s
        peak draw. 750W Gold for mid-range; 850W for high-end; 1000W for halo.
      </li>
      <li>
        <strong>Cooling.</strong> Good air cooler ($35-60) for everything up to mid-
        range. AIO ($100-150) for i7/Ryzen 7+ class or if you&rsquo;ll stress the
        CPU heavily.
      </li>
      <li>
        <strong>Case.</strong> Decent airflow case (Fractal North, Lian Li Lancool,
        NZXT H7 Flow). Don&rsquo;t go ultra-cheap — bad cases ruin thermals.
      </li>
      <li>
        <strong>Motherboard.</strong> Spend just enough for the features you need.
        Anything beyond &ldquo;has the right number of M.2 slots and supports your
        CPU&rdquo; is mostly luxury at gaming use cases.
      </li>
    </ol>

    <h2 id="future-proofing">Future-proofing reality check</h2>
    <p>
      The honest math:
    </p>
    <ul>
      <li>
        <strong>GPU:</strong> depreciates ~30% per generation. Buy what you need for
        2-3 years; plan to replace.
      </li>
      <li>
        <strong>CPU:</strong> 5-7 year viable. Pick a platform with at least one upgrade
        path (AMD AM5 has guaranteed support through 2027+; Intel sockets shift more).
      </li>
      <li>
        <strong>RAM:</strong> 32 GB is the new comfortable. 64 GB is overkill for pure
        gaming today; will be useful in 5+ years.
      </li>
      <li>
        <strong>PSU + Case:</strong> 7-10 year viable. Spending up here is the cleanest
        future-proofing because PSU + case carry through multiple generations of
        rebuilds.
      </li>
    </ul>
    <p>
      Optimizing for the future at the expense of today usually loses on net:
      tomorrow&rsquo;s GPU options will be better than today&rsquo;s top tier, and
      you&rsquo;ll be locked into 2026-era parts. Buy what you need now.
    </p>
  </>
);

export const cta = {
  label: "Get a tier recommendation for your use case",
  targetSlug: "gaming-pc-spec-recommender",
};

export const faq = [
  {
    q: "How do I know what gaming PC specs I need?",
    a: "Identify your dominant use case (esports, AAA, streaming, VR), then your monitor's resolution + refresh rate. Use our spec recommender to get a tier + budget anchor. Most spec mistakes come from optimizing for the wrong axis — top-tier GPU with mediocre CPU, not enough RAM, cheap PSU, etc.",
  },
  {
    q: "What questions should I ask before buying a gaming PC?",
    a: "Six: (1) primary use case, (2) target resolution + refresh rate, (3) future-upgrade priorities, (4) thermal environment, (5) total budget including peripherals + games, (6) DIY or hire. The answer to #1 + #2 drives 80% of the spec.",
  },
  {
    q: "What are the most common gaming PC spec mistakes?",
    a: "Top-tier GPU with mediocre CPU (bottlenecks at high FPS), insufficient RAM (16 GB is now minimum), cheap PSU (damages other parts on failure), SATA instead of NVMe, inadequate CPU cooling, RAM running at default JEDEC instead of XMP/EXPO speed, over-buying for hypothetical future use cases.",
  },
  {
    q: "How much should I spend on each component?",
    a: "Priority order: GPU first (biggest impact on gaming perf) → balanced CPU → 32 GB DDR5 RAM → 1-2 TB NVMe → tier A/B PSU with headroom → adequate cooling → decent airflow case → just-enough motherboard. Don't go ultra-cheap on PSU or case (long lifespan parts that affect everything).",
  },
];
