export const intro = (
  <>
    <p>
      A complete regex reference: every operator, the difference between flavors
      (ECMAScript, PCRE, Python, Go RE2), and 30 patterns that cover ~95% of real-world
      matching tasks. Each pattern is shown with input, output, and a flavor compatibility
      note. Use this as a working reference &mdash; bookmark it, search-in-page for what
      you need, copy and adapt.
    </p>
    <p>
      Most regex tutorials over-explain syntax and under-explain the engine differences
      that bite you in production. This guide goes the other way: short syntax recap,
      long pattern library, and explicit flavor warnings.
    </p>
  </>
);

export const toc = [
  { id: "core-syntax", label: "Core syntax recap" },
  { id: "anchors", label: "Anchors and boundaries" },
  { id: "quantifiers", label: "Quantifiers (greedy, lazy, possessive)" },
  { id: "character-classes", label: "Character classes and shortcuts" },
  { id: "groups", label: "Groups, captures, backreferences" },
  { id: "lookaround", label: "Lookahead and lookbehind" },
  { id: "flavors", label: "Engine differences (ECMAScript, PCRE, Python, Go)" },
  { id: "patterns-validation", label: "Common patterns: validation" },
  { id: "patterns-extraction", label: "Common patterns: extraction" },
  { id: "patterns-replacement", label: "Common patterns: replacement" },
  { id: "redos", label: "Catastrophic backtracking and ReDoS" },
  { id: "performance", label: "Performance tips" },
  { id: "antipatterns", label: "Don't do these" },
];

export const body = (
  <>
    <h2 id="core-syntax">Core syntax recap (in 90 seconds)</h2>
    <ul>
      <li><code>.</code> &mdash; any character except newline (use <code>s</code> flag for &ldquo;dotall&rdquo; mode where dot matches newlines too).</li>
      <li><code>\d</code> &mdash; digit. Equivalent to <code>[0-9]</code> in most flavors. Unicode-aware in Python, ECMAScript with <code>u</code> flag.</li>
      <li><code>\w</code> &mdash; word character. <code>[a-zA-Z0-9_]</code> in most flavors.</li>
      <li><code>\s</code> &mdash; whitespace (space, tab, newline, etc.).</li>
      <li><code>\D \W \S</code> &mdash; uppercase = negated.</li>
      <li><code>[abc]</code> &mdash; character class: a, b, or c. <code>[a-z]</code> &mdash; range. <code>[^abc]</code> &mdash; negation.</li>
      <li><code>|</code> &mdash; alternation: <code>cat|dog</code> matches cat OR dog.</li>
      <li><code>?</code> &mdash; 0 or 1 occurrences. <code>*</code> &mdash; 0 or more. <code>+</code> &mdash; 1 or more.</li>
      <li><code>{`{n}`}</code> &mdash; exactly n. <code>{`{n,}`}</code> &mdash; n or more. <code>{`{n,m}`}</code> &mdash; between n and m.</li>
    </ul>

    <h2 id="anchors">Anchors and boundaries</h2>
    <ul>
      <li><code>^</code> &mdash; start of string. With <code>m</code> flag, start of line.</li>
      <li><code>$</code> &mdash; end of string. With <code>m</code> flag, end of line.</li>
      <li><code>\b</code> &mdash; word boundary (between <code>\w</code> and <code>\W</code>). <code>\bcat\b</code> matches &ldquo;cat&rdquo; but not &ldquo;catalog&rdquo;.</li>
      <li><code>\B</code> &mdash; non-word boundary. <code>\Bcat\B</code> matches &ldquo;concatenate&rdquo; but not &ldquo;cat box&rdquo;.</li>
      <li><code>\A</code> &mdash; absolute start of string (Python, PCRE). Not in ECMAScript.</li>
      <li><code>\Z</code> / <code>\z</code> &mdash; absolute end of string (Python, PCRE). Not in ECMAScript.</li>
    </ul>
    <p>
      <strong>Most common gotcha</strong>: <code>^</code> and <code>$</code> default to
      string start/end, not line start/end. To match line by line, add the multiline
      <code> m</code> flag: <code>/^foo$/m</code>.
    </p>

    <h2 id="quantifiers">Quantifiers: greedy vs lazy vs possessive</h2>
    <p>
      Three quantifier strategies in modern regex engines (not all flavors support all
      three):
    </p>
    <ul>
      <li>
        <strong>Greedy (default)</strong>: match as much as possible, then back off.
        <code>.*</code> on &ldquo;abc&rdquo; matches &ldquo;abc&rdquo;.
      </li>
      <li>
        <strong>Lazy / reluctant</strong>: <code>.*?</code>, <code>.+?</code>. Match as
        little as possible. Useful for &ldquo;match between delimiters&rdquo; patterns.
      </li>
      <li>
        <strong>Possessive</strong>: <code>.*+</code>, <code>.++</code>. Like greedy but
        never give back. Fail-fast on no-match. Available in PCRE, Java, Ruby; NOT in
        ECMAScript or Python.
      </li>
    </ul>
    <p>
      Worked example on <code>&lt;b&gt;hello&lt;/b&gt; &lt;b&gt;world&lt;/b&gt;</code>:
    </p>
    <ul>
      <li>Greedy <code>&lt;b&gt;.*&lt;/b&gt;</code> &rarr; matches the entire string (one big match).</li>
      <li>Lazy <code>&lt;b&gt;.*?&lt;/b&gt;</code> &rarr; matches each <code>&lt;b&gt;...&lt;/b&gt;</code> separately.</li>
    </ul>

    <h2 id="character-classes">Character classes and shortcuts</h2>
    <ul>
      <li><code>[abc]</code> &mdash; one of a, b, or c.</li>
      <li><code>[a-zA-Z0-9]</code> &mdash; alphanumeric ASCII.</li>
      <li><code>[^abc]</code> &mdash; NOT a, b, or c (one char).</li>
      <li><code>[\d.-]</code> &mdash; digit, dot, or hyphen. Inside <code>[]</code>, most metacharacters lose special meaning. <code>-</code> goes at start/end to be literal.</li>
      <li><code>\p{`{Letter}`}</code> &mdash; Unicode property class: any letter (Greek, Cyrillic, etc.). Requires <code>u</code> flag in ECMAScript.</li>
      <li><code>\p{`{Number}`}</code> &mdash; any Unicode digit (Arabic, Devanagari, etc.).</li>
    </ul>

    <h2 id="groups">Groups, captures, backreferences</h2>
    <ul>
      <li><code>(abc)</code> &mdash; capturing group. Accessible as <code>$1</code> in replace, <code>match[1]</code> in code.</li>
      <li><code>(?:abc)</code> &mdash; non-capturing group. Same grouping behavior, no capture overhead.</li>
      <li><code>(?&lt;name&gt;abc)</code> &mdash; named capture. Accessible as <code>match.groups.name</code>.</li>
      <li><code>\1 \2 ...</code> &mdash; backreference to captured group. <code>(a)\1</code> matches &ldquo;aa&rdquo;.</li>
      <li><code>\k&lt;name&gt;</code> &mdash; backreference by name.</li>
    </ul>
    <p>
      Worked example: extract user and domain from email. Pattern:{" "}
      <code>(?&lt;user&gt;\w+)@(?&lt;domain&gt;[\w.-]+)</code>. On
      &ldquo;hello@example.com&rdquo;:
      <code>match.groups.user === &quot;hello&quot;</code>,{" "}
      <code>match.groups.domain === &quot;example.com&quot;</code>.
    </p>

    <h2 id="lookaround">Lookahead and lookbehind</h2>
    <p>
      Zero-width assertions: they check whether a position has certain context, but
      don&rsquo;t consume characters.
    </p>
    <ul>
      <li><code>(?=...)</code> &mdash; positive lookahead. <code>foo(?=bar)</code> matches &ldquo;foo&rdquo; only if followed by &ldquo;bar&rdquo;.</li>
      <li><code>(?!...)</code> &mdash; negative lookahead. <code>foo(?!bar)</code> matches &ldquo;foo&rdquo; not followed by &ldquo;bar&rdquo;.</li>
      <li><code>(?&lt;=...)</code> &mdash; positive lookbehind. <code>(?&lt;=foo)bar</code> matches &ldquo;bar&rdquo; preceded by &ldquo;foo&rdquo;.</li>
      <li><code>(?&lt;!...)</code> &mdash; negative lookbehind. <code>(?&lt;!foo)bar</code> matches &ldquo;bar&rdquo; NOT preceded by &ldquo;foo&rdquo;.</li>
    </ul>
    <p>
      <strong>Flavor support</strong>: Python <code>re</code> requires fixed-width
      lookbehind; <code>regex</code> module supports variable-width. ECMAScript supports
      both as of ES2018. Go RE2 has no lookaround at all (linear-time guarantee).
    </p>

    <h2 id="flavors">Engine differences (ECMAScript, PCRE, Python, Go)</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>ECMAScript</th>
          <th>PCRE / Perl</th>
          <th>Python re</th>
          <th>Go RE2</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Lookbehind</td><td>ES2018+ (any width)</td><td>Yes (any)</td><td>Fixed-width only</td><td>NO</td></tr>
        <tr><td>Possessive quantifiers</td><td>NO</td><td>Yes</td><td>NO</td><td>NO</td></tr>
        <tr><td>Recursion / subroutines</td><td>NO</td><td>Yes</td><td>NO</td><td>NO</td></tr>
        <tr><td>Named groups</td><td><code>(?&lt;name&gt;)</code></td><td><code>(?P&lt;name&gt;)</code> or <code>(?&lt;name&gt;)</code></td><td><code>(?P&lt;name&gt;)</code></td><td><code>(?P&lt;name&gt;)</code></td></tr>
        <tr><td>Backtracking</td><td>Yes</td><td>Yes</td><td>Yes</td><td>NO (linear time)</td></tr>
        <tr><td>Unicode property classes</td><td>With <code>u</code> flag</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
      </tbody>
    </table>
    <p>
      <strong>Practical implication</strong>: a pattern that works in regex101.com&rsquo;s
      PCRE mode may fail in your JavaScript code. Always test in the engine you&rsquo;ll
      deploy to. The <a href="/tools/regex-tester">browser regex tester</a> uses
      ECMAScript exactly as your production code will.
    </p>

    <h2 id="patterns-validation">Common patterns: validation</h2>
    <p>Each pattern is in ECMAScript flavor unless noted. Translate as needed.</p>

    <h3>Email (pragmatic)</h3>
    <pre>{`/^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$/`}</pre>
    <p>
      Don&rsquo;t try to match RFC 5321 &mdash; the full spec regex is 6,425 characters.
      The above accepts ~99.9% of real emails and rejects most invalid input. For
      bullet-proof validation, send a confirmation email instead.
    </p>

    <h3>URL (HTTP/HTTPS)</h3>
    <pre>{`/^https?:\\/\\/[\\w.-]+(?::\\d+)?(?:\\/[^\\s]*)?$/`}</pre>

    <h3>US phone number</h3>
    <pre>{`/^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/`}</pre>
    <p>Matches: (415) 555-1234, 415-555-1234, 415.555.1234, 4155551234.</p>

    <h3>IPv4 address</h3>
    <pre>{`/^(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$/`}</pre>

    <h3>Strong password (8+ chars, mixed case, digit, special)</h3>
    <pre>{`/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$/`}</pre>
    <p>
      Better approach: skip composition rules entirely, require length 12+, and check
      against breach databases (HIBP). Modern security guidance has moved away from
      composition requirements.
    </p>

    <h3>ISO 8601 date (YYYY-MM-DD)</h3>
    <pre>{`/^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/`}</pre>

    <h3>Hex color</h3>
    <pre>{`/^#?(?:[0-9a-f]{3}|[0-9a-f]{6})$/i`}</pre>

    <h3>Slug (URL-safe identifier)</h3>
    <pre>{`/^[a-z0-9]+(?:-[a-z0-9]+)*$/`}</pre>

    <h2 id="patterns-extraction">Common patterns: extraction</h2>

    <h3>Match between delimiters (lazy)</h3>
    <pre>{`/<title>(.*?)<\\/title>/`}</pre>
    <p>
      Caveat: don&rsquo;t parse HTML with regex for anything beyond the simplest cases.
      Use <code>DOMParser</code> instead.
    </p>

    <h3>All numbers in a string</h3>
    <pre>{`/-?\\d+(?:\\.\\d+)?/g`}</pre>

    <h3>Quoted strings (handles escaped quotes)</h3>
    <pre>{`/"((?:[^"\\\\]|\\\\.)*)"/g`}</pre>

    <h3>Hashtags from a tweet</h3>
    <pre>{`/#[\\w_]+/g`}</pre>

    <h3>Markdown link</h3>
    <pre>{`/\\[([^\\]]+)\\]\\(([^)]+)\\)/g`}</pre>
    <p>Captures: $1 = link text, $2 = URL.</p>

    <h3>CSV row (simple, no embedded commas)</h3>
    <pre>{`/[^,\\n]+/g`}</pre>
    <p>For real CSV with quoted fields and embedded commas, use a CSV parser library.</p>

    <h2 id="patterns-replacement">Common patterns: replacement</h2>

    <h3>Strip HTML tags</h3>
    <pre>{`text.replace(/<[^>]+>/g, '')`}</pre>

    <h3>Collapse multiple spaces</h3>
    <pre>{`text.replace(/\\s+/g, ' ').trim()`}</pre>

    <h3>Convert camelCase to snake_case</h3>
    <pre>{`text.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()`}</pre>

    <h3>Mask email middle</h3>
    <pre>{`email.replace(/^(.{2}).*?(@.*)$/, '$1***$2')`}</pre>
    <p>Output: <code>he***@example.com</code></p>

    <h3>Convert phone to E.164</h3>
    <pre>{`text.replace(/[^\\d]/g, '').replace(/^/, '+1')`}</pre>

    <h2 id="redos">Catastrophic backtracking and ReDoS</h2>
    <p>
      Regular Expression Denial of Service (ReDoS) is a real attack class. Vulnerable
      patterns have nested quantifiers that produce exponential paths on adversarial
      input. The classic example:
    </p>
    <pre>{`/^(a+)+$/`}</pre>
    <p>
      On input &ldquo;aaaaaaaaaaaaaaaaaaa!&rdquo; (no matching <code>$</code>), the regex
      engine tries every possible split of <code>a</code> characters between the inner
      and outer quantifier. Time grows as 2^n. 30 a&rsquo;s = 1 billion paths = 30+ second
      hang.
    </p>
    <p>
      Common ReDoS patterns to audit:
    </p>
    <ul>
      <li><code>(a+)+</code>, <code>(a*)*</code> &mdash; nested quantifiers on overlapping classes.</li>
      <li><code>(a|aa)+</code> &mdash; alternation with overlap.</li>
      <li>
        Email regex <code>^([a-zA-Z0-9._-]+)+@</code> &mdash; nested group with permissive
        inner quantifier.
      </li>
    </ul>
    <p>
      <strong>Defenses</strong>: (1) Use Go RE2 or RE2-compatible engines (Cloudflare,
      Google&rsquo;s open-source RE2 library) for untrusted input &mdash; linear time
      guarantee. (2) Add timeouts when running user-supplied patterns. (3) Use static
      analysis tools (rxxr2, safe-regex) to flag risky patterns. (4) Avoid nested
      quantifiers; prefer atomic groups <code>(?&gt;...)</code> or possessive quantifiers
      where supported.
    </p>

    <h2 id="performance">Performance tips</h2>
    <ul>
      <li>
        <strong>Anchor your patterns</strong>: <code>^abc</code> is dramatically faster
        than <code>abc</code> on long input where matches start at position 0.
      </li>
      <li>
        <strong>Prefer character classes to alternation</strong>: <code>[abc]</code> is
        faster than <code>a|b|c</code>.
      </li>
      <li>
        <strong>Compile once, reuse many times</strong>: in Python <code>re.compile()</code>{" "}
        and Java <code>Pattern.compile()</code>, save the compiled pattern for hot loops.
        ECMAScript engines cache regex literals automatically.
      </li>
      <li>
        <strong>Use non-capturing groups</strong> <code>(?:...)</code>{" "}
        when you don&rsquo;t need the capture &mdash; saves memory.
      </li>
      <li>
        <strong>Profile before optimizing</strong>: most regex performance issues are
        catastrophic backtracking, not micro-optimization. Use a regex profiler.
      </li>
    </ul>

    <h2 id="antipatterns">Don&rsquo;t do these</h2>
    <ul>
      <li>
        <strong>Parse HTML with regex.</strong> HTML is recursive; regex isn&rsquo;t.
        Use <code>DOMParser</code>, BeautifulSoup, jsoup, or html.parser.
      </li>
      <li>
        <strong>Parse JSON with regex.</strong> Use <code>JSON.parse</code> or your
        language&rsquo;s equivalent.
      </li>
      <li>
        <strong>Match RFC 5321 emails with one regex.</strong> The proper regex is 6,425
        chars; nobody actually uses it. Validate format with a pragmatic pattern, then
        send a confirmation email.
      </li>
      <li>
        <strong>Validate SQL identifiers with permissive regex.</strong> Use parameterized
        queries; don&rsquo;t hand-roll SQL injection prevention.
      </li>
      <li>
        <strong>Match balanced delimiters with regex.</strong> Recursion is required;
        most regex engines don&rsquo;t support it. Use a stack-based parser.
      </li>
      <li>
        <strong>Trust user-supplied regex without timeouts.</strong> ReDoS will hang your
        process.
      </li>
    </ul>

    <h2>The 80/20 takeaway</h2>
    <p>
      Master 6 things and you can handle ~95% of real-world regex tasks: character
      classes, quantifiers (greedy and lazy), anchors, capture groups, alternation,
      backreferences. The rest (lookaround, possessive quantifiers, atomic groups) is
      situational. Test in the exact engine you&rsquo;ll deploy to (the{" "}
      <a href="/tools/regex-tester">regex tester</a> uses ECMAScript). Audit any pattern
      that handles untrusted input for ReDoS. And always have a non-regex fallback ready
      &mdash; HTML parsers, JSON parsers, real CSV libraries &mdash; for cases regex
      can&rsquo;t handle correctly.
    </p>
  </>
);

export const cta = {
  label: "Test regex patterns instantly in the browser-based regex tester",
  targetSlug: "regex-tester",
};

export const faq = [
  {
    q: "What's the difference between regex flavors?",
    a: "Major engines: ECMAScript (browsers, Node.js), PCRE (PHP, Perl), Python re, Go RE2, Java's java.util.regex, Ruby. Differences include lookbehind support (Go RE2 has none), recursion (only PCRE/Perl), Unicode handling, possessive quantifiers (PCRE/Java/Ruby only). Same pattern can match in one flavor and fail in another. Always test in the exact engine you'll deploy to.",
  },
  {
    q: "Why is my regex pattern hanging or timing out?",
    a: "Likely catastrophic backtracking — a ReDoS pattern. Common culprits: nested quantifiers like (a+)+, alternation with overlap like (a|aa)+, permissive nested groups like ([a-z]+)+. Time grows exponentially with input length. Defenses: (1) rewrite the pattern to remove nested quantifiers, (2) use Go RE2 or RE2-compatible engines for untrusted input (linear-time guaranteed), (3) add execution timeouts, (4) run static analyzers like safe-regex to flag risky patterns.",
  },
  {
    q: "How do I write a regex for emails properly?",
    a: "Don't try for RFC 5321 perfection — the canonical regex is 6,425 characters. Use a pragmatic pattern like /^[\\w.+-]+@[\\w-]+\\.[\\w.-]+$/ that catches ~99.9% of real emails and rejects most invalid input. For high-stakes validation (signup forms): pragmatic regex first to filter typos, then send a confirmation email — only the inbox owner can click the link, which proves both syntactic AND deliverable validity. Don't combine validation regex with deliverability checks; separate concerns.",
  },
  {
    q: "What's the fastest regex engine?",
    a: "Go RE2 is the fastest for guaranteed worst-case performance (linear time, no catastrophic backtracking). It's used by Cloudflare, Google, and many search engines. Trade-off: no lookbehind, no recursion. For features-rich speed: PCRE2 with JIT compilation is fastest. ECMAScript engines (V8 in Node/Chrome) are fast for most patterns due to heavy optimization but vulnerable to ReDoS on adversarial input. Python re is consistently the slowest of major engines; the third-party 'regex' module is meaningfully faster.",
  },
];
