/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Where to find someone to build your gaming PC depends on whether you have a
      Micro Center nearby, what your budget is, and whether you want same-day vs
      shipping turnaround. Each path has tradeoffs.
    </p>
  </>
);

export const toc = [
  { id: "in-store", label: "In-store options (same-day)" },
  { id: "online", label: "Online builders + ship" },
  { id: "local", label: "Local PC shops" },
  { id: "freelance", label: "Independent / freelance builders" },
  { id: "find-near-me", label: "Finding builders near you" },
];

export const body = (
  <>
    <h2 id="in-store">In-store options (same-day)</h2>
    <ul>
      <li>
        <strong>Micro Center PC Build Service.</strong> ~$150 + parts. Need to live
        within driving distance of a Micro Center store (mostly US tech-heavy metros).
        Best price-quality combo. 12-month labor warranty.
      </li>
      <li>
        <strong>Best Buy Geek Squad.</strong> ~$199 + parts. Less polished than Micro
        Center for builds. Better fit for upgrades or repair.
      </li>
      <li>
        <strong>Local PC repair shops.</strong> $80-300. Quality varies wildly. Check
        Google reviews before committing.
      </li>
    </ul>

    <h2 id="online">Online builders + ship</h2>
    <ul>
      <li>
        <strong>NZXT BLD.</strong> ~$299-399 service fee. 2-year labor warranty. Clean
        cable management. 1-2 week build + ship turnaround.
      </li>
      <li>
        <strong>Origin PC + Maingear + Falcon Northwest.</strong> $300-800 service
        depending on tier. Boutique aesthetic options. 2-3 week turnaround.
      </li>
      <li>
        <strong>Skytech / iBuyPower / CyberPower.</strong> Lower-cost online builders.
        Cheaper service fees but parts often skew toward bargain SKUs (cheap PSU, OEM
        RAM). Best as pre-builts; use carefully if you supply parts.
      </li>
      <li>
        <strong>Build Redux + Periphio.</strong> Newer market entrants with strong
        reviews. Worth comparing.
      </li>
    </ul>

    <h2 id="local">Local PC shops</h2>
    <p>
      Quality varies. The vetting process:
    </p>
    <ol>
      <li>Search Google Maps for &ldquo;PC builder near me&rdquo;.</li>
      <li>Filter by 4.0+ stars with 50+ reviews.</li>
      <li>Read recent reviews — specifically about gaming PC builds, not laptop repair.</li>
      <li>Call to ask: warranty, OS install, stress test methodology, BIOS XMP/EXPO.</li>
      <li>Compare against Micro Center / online options before committing.</li>
    </ol>

    <h2 id="freelance">Independent / freelance builders</h2>
    <p>
      Some Reddit communities have vetted independent builders:
    </p>
    <ul>
      <li><strong>r/buildapcsales</strong> — flair shows builders who&rsquo;ve done verified work.</li>
      <li><strong>r/bapcsalescanada / regional buildapc subs</strong> for non-US.</li>
      <li><strong>Local Discord servers</strong> for gaming or PC building.</li>
    </ul>
    <p>
      Independents range from $80-250. Vet thoroughly: ask for build photos, ask
      about warranty terms, ask references. Pay only after acceptance — never
      upfront.
    </p>

    <h2 id="find-near-me">Finding builders near you</h2>
    <p>
      Quick search strategies:
    </p>
    <ul>
      <li><strong>Google:</strong> &ldquo;custom PC builder + [your city]&rdquo;.</li>
      <li><strong>Yelp:</strong> &ldquo;computer repair&rdquo; with &ldquo;custom build&rdquo; in reviews.</li>
      <li><strong>Reddit r/[your city] subs</strong> — ask for recommendations.</li>
      <li><strong>Local Facebook groups</strong> for PC enthusiasts.</li>
      <li><strong>Microcenter.com store locator</strong> — if there&rsquo;s one within an hour&rsquo;s drive, it&rsquo;s usually your best option.</li>
    </ul>
  </>
);

export const cta = {
  label: "Calculate hire vs DIY for your numbers",
  targetSlug: "pc-build-vs-hire-calculator",
};

export const faq = [
  {
    q: "Where can I hire someone to build my gaming PC?",
    a: "Best options ranked: Micro Center ($150 + parts) if nearby, online builders like NZXT BLD ($299-399 + ship), local PC shops ($80-300, vet by Google reviews), independent builders found via r/buildapcsales or local Discord ($80-250, vet thoroughly).",
  },
  {
    q: "Do computer stores offer PC building services?",
    a: "Yes. Micro Center has the best parts-included pricing at ~$150. Best Buy Geek Squad ~$199. Independent local PC repair shops typically $80-300. Quality varies — Micro Center is the predictable choice; local shops require Google review vetting.",
  },
  {
    q: "Can you get a gaming PC built locally near me?",
    a: "Most US metros have at least one capable PC builder. Search Google Maps for 'custom PC builder near me', filter to 4.0+ stars with 50+ reviews, read recent reviews specifically about gaming PC builds (not laptop repair). Call to verify warranty + OS install before committing.",
  },
  {
    q: "Online vs in-store PC building services — which is better?",
    a: "In-store (Micro Center): faster, ~$150, 12-month warranty, predictable quality. Online (NZXT BLD, Origin, Maingear): polished aesthetic, $299-800, 1-3 week ship time, 2-year warranties. Local shops: variable. Pick by what's accessible and what you value (speed vs aesthetic vs warranty length).",
  },
];
