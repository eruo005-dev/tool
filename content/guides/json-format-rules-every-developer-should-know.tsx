export const intro = (
  <>
    <p>
      JSON is the lingua franca of web APIs &mdash; and almost every developer learns it
      by osmosis from copy-pasted examples rather than the spec. That works until it
      doesn&rsquo;t: a trailing comma, a single quote, or an unescaped backslash breaks a
      production payload at 2 AM, and the parser error message is unhelpful.
    </p>
    <p>
      This is a complete reference for the rules of strict JSON (RFC 8259), the relaxed
      variants you&rsquo;ll encounter (JSON5, JSONC), the encoding edges that catch
      people, and the patterns for handling huge documents, schemas, and security risks.
      It&rsquo;s organized as a working reference &mdash; jump to what you need.
    </p>
  </>
);

export const toc = [
  { id: "spec", label: "RFC 8259: the strict spec" },
  { id: "syntax-rules", label: "The 6 hard rules" },
  { id: "string-escaping", label: "String escaping rules" },
  { id: "numbers", label: "Number representation gotchas" },
  { id: "json5-jsonc", label: "JSON5 and JSONC: when to use each" },
  { id: "common-errors", label: "Top 10 parser errors and fixes" },
  { id: "schema", label: "JSON Schema: validation beyond syntax" },
  { id: "large-files", label: "Handling huge JSON (streaming)" },
  { id: "encoding", label: "UTF-8, BOMs, and binary data" },
  { id: "security", label: "Security: prototype pollution, DoS, JSONP" },
  { id: "performance", label: "Performance tips" },
  { id: "anti-patterns", label: "Anti-patterns and footguns" },
];

export const body = (
  <>
    <h2 id="spec">RFC 8259: the strict spec</h2>
    <p>
      JSON was originally specified by Douglas Crockford in 2002 (RFC 4627), updated to
      RFC 7159 in 2014, and finalized as RFC 8259 in 2017 (also published as ECMA-404
      and ISO/IEC 21778). RFC 8259 is the current authoritative spec; if your tool
      claims &ldquo;JSON support&rdquo; without specifying a variant, it should mean
      RFC 8259. The spec is short &mdash; about 16 pages including examples &mdash;
      and worth reading once.
    </p>
    <p>
      Strict JSON is intentionally minimal. There are exactly six value types: object,
      array, string, number, boolean, null. No comments. No trailing commas. No
      unquoted keys. No single-quoted strings. No <code>undefined</code>. No date type.
      No binary type. No comments (yes, this is worth saying twice). The minimalism is a
      feature: it makes JSON safe to parse with simple parsers in every language.
    </p>

    <h2 id="syntax-rules">The 6 hard rules</h2>
    <ol>
      <li>
        <strong>Keys must be strings, double-quoted.</strong> <code>{`{"name": "alice"}`}</code>{" "}
        is valid; <code>{`{name: "alice"}`}</code> and <code>{`{'name': 'alice'}`}</code> are not.
      </li>
      <li>
        <strong>No trailing commas.</strong> <code>{`{"a": 1, "b": 2,}`}</code> is invalid.{" "}
        <code>{`[1, 2, 3,]`}</code> is invalid. The most common parser-error cause among
        humans copy-pasting JSON.
      </li>
      <li>
        <strong>No comments.</strong> Neither <code>// line</code> nor <code>{`/* block */`}</code>{" "}
        are allowed in strict JSON. If you need comments, use JSON5/JSONC or convention
        like a <code>__comment</code> key.
      </li>
      <li>
        <strong>Strings use double quotes only.</strong>{" "}
        <code>{`{"name": 'alice'}`}</code> is invalid. ECMAScript and Python both allow
        single-quoted strings in source code, which makes this a frequent paste-mistake.
      </li>
      <li>
        <strong>Strings must escape certain characters.</strong> Within double quotes,
        you must escape: <code>{`"`}</code> as <code>{`\\"`}</code>, <code>\</code> as{" "}
        <code>{`\\\\`}</code>, control chars (0-31) as <code>{`\\uXXXX`}</code> or named
        escapes. Forward slashes <em>may</em> be escaped (<code>{`\\/`}</code>) but
        don&rsquo;t need to be.
      </li>
      <li>
        <strong>Numbers follow specific format.</strong> Decimal only (no hex, octal).
        No leading zeros except <code>0.x</code>. No <code>+</code> sign. <code>NaN</code>{" "}
        and <code>Infinity</code> are NOT allowed (a major gotcha for JavaScript output).
      </li>
    </ol>

    <h2 id="string-escaping">String escaping rules</h2>
    <p>
      The full list of escapes inside a JSON string:
    </p>
    <ul>
      <li><code>{`\\"`}</code> &rarr; <code>{`"`}</code></li>
      <li><code>{`\\\\`}</code> &rarr; <code>\</code></li>
      <li><code>{`\\/`}</code> &rarr; <code>/</code> (optional)</li>
      <li><code>{`\\b`}</code> &rarr; backspace (U+0008)</li>
      <li><code>{`\\f`}</code> &rarr; form feed (U+000C)</li>
      <li><code>{`\\n`}</code> &rarr; newline (U+000A)</li>
      <li><code>{`\\r`}</code> &rarr; carriage return (U+000D)</li>
      <li><code>{`\\t`}</code> &rarr; tab (U+0009)</li>
      <li><code>{`\\uXXXX`}</code> &rarr; any Unicode code point as 4 hex digits</li>
    </ul>
    <p>
      <strong>Code points above U+FFFF</strong>: use a UTF-16 surrogate pair. The
      laughing-with-tears emoji (U+1F602) is encoded as{" "}
      <code>{`\\uD83D\\uDE02`}</code>. Most parsers handle this transparently.
    </p>
    <p>
      <strong>Single quotes don&rsquo;t need escaping</strong> &mdash; they have no
      special meaning in JSON strings. <code>{`"don't"`}</code> is valid;{" "}
      <code>{`"don\\'t"`}</code> is also valid (the escape is unnecessary but not
      forbidden).
    </p>

    <h2 id="numbers">Number representation gotchas</h2>
    <p>
      JSON numbers are 64-bit floats by spec (IEEE 754 doubles). Implications:
    </p>
    <ul>
      <li>
        <strong>Integer precision loss above 2^53</strong>. JavaScript&rsquo;s{" "}
        <code>Number.MAX_SAFE_INTEGER</code> is 9007199254740991. A 64-bit ID like
        <code> 12345678901234567890</code> rounds to the nearest representable double.
        Workaround: send big IDs as JSON strings (<code>&quot;12345678901234567890&quot;</code>),
        not numbers.
      </li>
      <li>
        <strong>Floating-point classics</strong>. <code>0.1 + 0.2</code> serializes as
        <code> 0.30000000000000004</code>. Money should be in cents (integer) or
        explicitly serialized as a string with fixed precision.
      </li>
      <li>
        <strong>NaN and Infinity are NOT valid JSON</strong>. JavaScript&rsquo;s
        <code> JSON.stringify(NaN)</code> returns <code>&quot;null&quot;</code>. If
        you need to transmit special floats, use a string sentinel like
        <code> &quot;Infinity&quot;</code> and parse on the receiving side.
      </li>
      <li>
        <strong>No leading + or trailing decimal</strong>. <code>+1</code> is invalid;
        write <code>1</code>. <code>1.</code> is invalid; write <code>1.0</code> or
        just <code>1</code>.
      </li>
    </ul>

    <h2 id="json5-jsonc">JSON5 and JSONC: when to use each</h2>
    <p>
      Two relaxed variants are common in tooling but never in APIs:
    </p>
    <ul>
      <li>
        <strong>JSONC (JSON with Comments)</strong>: JSON + <code>// line</code> and
        <code> {`/* block */`}</code> comments. Used by VS Code settings, tsconfig.json,
        ESLint configs. Simple to support; most JSON parsers can be extended to strip
        comments before parsing.
      </li>
      <li>
        <strong>JSON5</strong>: JSONC plus unquoted keys, single quotes, trailing commas,
        hex numbers, leading/trailing decimals, and a few more conveniences. Used by
        some Babel configs, RollupJS, and config files where humans hand-edit. The
        spec is at json5.org. Use the <code>json5</code> npm package or equivalent.
      </li>
    </ul>
    <p>
      Rule of thumb: <strong>API payloads always use strict JSON</strong>. <strong>Hand-
      edited config files</strong> can use JSONC (most tools support it) or JSON5 (if you
      want the convenience). Never assume a parser handles JSON5 unless documented.
    </p>

    <h2 id="common-errors">Top 10 parser errors and fixes</h2>
    <ol>
      <li>
        <strong>&ldquo;Unexpected token X in JSON at position N&rdquo;</strong>. Look at
        position N in your input. Almost always: trailing comma, single quote, unquoted
        key, or unescaped character in a string. Use the <a href="/tools/json-formatter">
          JSON formatter</a> &mdash; it points at the exact offending character.
      </li>
      <li>
        <strong>&ldquo;Unexpected end of JSON input&rdquo;</strong>. Truncated input.
        Check the source: copied incomplete payload, network response cut off, file write
        not flushed.
      </li>
      <li>
        <strong>&ldquo;Unterminated string&rdquo;</strong>. Missing closing quote, or an
        unescaped backslash creating a broken escape sequence. Check for{" "}
        <code>\</code> followed by a character that doesn&rsquo;t form a valid escape.
      </li>
      <li>
        <strong>&ldquo;Duplicate keys&rdquo;</strong>. RFC 8259 doesn&rsquo;t require
        rejection but recommends behavior is implementation-defined. Most parsers keep the
        last value silently. Don&rsquo;t produce JSON with duplicate keys; if you receive
        it, that&rsquo;s a bug at the source.
      </li>
      <li>
        <strong>BOM (Byte Order Mark) at start</strong>. Some Windows tools save UTF-8
        with BOM (the bytes <code>EF BB BF</code> at the start). RFC 8259 forbids it.
        Strip it before parsing: <code>{`text.replace(/^\\uFEFF/, '')`}</code>.
      </li>
      <li>
        <strong>Single-quoted strings</strong>. Convert to double quotes. Not just the
        outer quotes &mdash; any <code>{`"`}</code> inside the string must be escaped.
      </li>
      <li>
        <strong>Comments left in</strong>. Strip them before parsing as strict JSON, or
        switch to a JSONC-aware parser. Don&rsquo;t use regex to strip; comments inside
        strings will be matched incorrectly.
      </li>
      <li>
        <strong>Trailing commas</strong>. Strip them: regex <code>{`/,(\\s*[}\\]])/g`}</code> &rarr;{" "}
        <code>{`$1`}</code>. Be careful: this same regex inside a string would corrupt
        data. Use a JSON5 parser if you can.
      </li>
      <li>
        <strong>Wrong content-type</strong>. Server sends JSON with{" "}
        <code>Content-Type: text/html</code>. Browsers try to parse as HTML and fail.
        Check the headers; most fetch errors that look like &ldquo;invalid JSON&rdquo;
        are content-type bugs.
      </li>
      <li>
        <strong>NaN / Infinity in output</strong>. Code that produces these (uninitialized
        floats, division by zero) crashes downstream parsers. Sanitize before
        serializing: replace with null or a string sentinel.
      </li>
    </ol>

    <h2 id="schema">JSON Schema: validation beyond syntax</h2>
    <p>
      <code>JSON.parse</code> only catches SYNTAX errors. A valid JSON document can still
      have wrong shape: missing required fields, fields of the wrong type, values out of
      range. JSON Schema is the standard way to declare expected shape and validate
      programmatically.
    </p>
    <p>Example schema for a user object:</p>
    <pre>{`{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["id", "email"],
  "properties": {
    "id": { "type": "integer", "minimum": 1 },
    "email": { "type": "string", "format": "email" },
    "name": { "type": "string", "maxLength": 100 },
    "age": { "type": "integer", "minimum": 0, "maximum": 150 }
  },
  "additionalProperties": false
}`}</pre>
    <p>
      <strong>Validators by language</strong>: Ajv (JavaScript/TypeScript &mdash; fastest
      and most popular), jsonschema (Python), NJsonSchema (.NET), justify (Java),
      json_schemer (Ruby). All implement the same Draft 2020-12 spec; switching between
      languages is mostly mechanical.
    </p>
    <p>
      <strong>OpenAPI relationship</strong>: OpenAPI 3.x uses JSON Schema for request /
      response shapes. Generate types and validators from your OpenAPI spec; never
      hand-write both.
    </p>
    <p>
      <strong>Alternatives in TypeScript</strong>: Zod, io-ts, yup, valibot. Define schema
      in TypeScript code (gets type inference), validate at runtime, no separate schema
      file. Better DX for TS-heavy codebases; less interoperable with non-TS consumers.
    </p>

    <h2 id="large-files">Handling huge JSON (streaming)</h2>
    <p>
      <code>JSON.parse</code> loads the entire document into memory. For files over
      ~100MB, this becomes prohibitive. Streaming parsers process one token at a time:
    </p>
    <ul>
      <li>
        <strong>jq</strong> (CLI): handles 100GB JSON files routinely.{" "}
        <code>jq .users[] huge.json</code> emits each user as it&rsquo;s parsed.
      </li>
      <li>
        <strong>Python ijson</strong>: <code>for item in ijson.items(file, &quot;users.item&quot;)</code>{" "}
        iterates without loading the document.
      </li>
      <li>
        <strong>Node JSONStream</strong>:{" "}
        <code>fs.createReadStream(...).pipe(JSONStream.parse(&apos;users.*&apos;)).on(&apos;data&apos;, ...)</code>.
      </li>
      <li>
        <strong>Go encoding/json Decoder</strong>: token-stream API for memory-efficient
        parsing.
      </li>
    </ul>
    <p>
      <strong>NDJSON / JSONL</strong>: an alternative format where each line is a
      separate JSON object. Trivial to stream (read line by line, parse each).
      Standard for log aggregation, ML training data, and large data exports. File
      extension <code>.ndjson</code> or <code>.jsonl</code>.
    </p>

    <h2 id="encoding">UTF-8, BOMs, and binary data</h2>
    <p>
      RFC 8259 requires UTF-8 encoding (with optional UTF-16 / UTF-32 in older RFC 7159).
      Network JSON should always be UTF-8 without BOM.
    </p>
    <p>
      <strong>Binary data</strong> doesn&rsquo;t fit natively. Conventions:
    </p>
    <ul>
      <li>
        <strong>Base64-encode</strong>: most common. Adds 33% size overhead. See the{" "}
        <a href="/tools/base64-encoder-decoder">Base64 encoder</a>.
      </li>
      <li><strong>Hex-encode</strong>: simpler but 100% size overhead.</li>
      <li>
        <strong>Out-of-band</strong>: send a URL or signed reference; client fetches the
        binary separately. Best for files over ~10KB.
      </li>
    </ul>

    <h2 id="security">Security: prototype pollution, DoS, JSONP</h2>
    <p>
      <strong>Prototype pollution</strong>: untrusted JSON with keys like
      <code> __proto__</code>, <code>constructor</code>, <code>prototype</code> can
      modify the JavaScript Object prototype if you blindly merge into objects. Mitigate
      with safe-merge libraries (Lodash 4.17.21+ is safe), or use Object.create(null) for
      destination objects.
    </p>
    <p>
      <strong>Parser DoS</strong>: very deep nesting (10,000+ levels) can blow the stack
      in some parsers. Limit input size and depth. Most modern parsers default to
      reasonable limits.
    </p>
    <p>
      <strong>JSON hijacking (historical)</strong>: a security issue with top-level JSON
      arrays in old browsers. Modern browsers fixed this. Don&rsquo;t worry about it
      unless supporting IE 5/6.
    </p>
    <p>
      <strong>JSONP</strong>: JSON wrapped in a callback function for cross-origin loading
      via <code>&lt;script&gt;</code>. Largely obsolete due to CORS support in all modern
      browsers. JSONP runs arbitrary JavaScript &mdash; if the data source is
      compromised, you have an XSS. Avoid for new code; use CORS or fetch with proper
      Access-Control-Allow-Origin headers.
    </p>

    <h2 id="performance">Performance tips</h2>
    <ul>
      <li>
        <strong>Avoid double-parsing</strong>. <code>JSON.parse(JSON.parse(s))</code>{" "}
        happens when someone serialized JSON, then JSON-encoded the result as a string.
        Parse once. Better fix: stop double-encoding upstream.
      </li>
      <li>
        <strong>Consider message size</strong>. JSON over HTTP is gzip/brotli compressed
        in transit. Field-name length matters less than the spec implies. But for stored
        JSON (databases, files): shorter field names compound. Compromise: readable in
        APIs, abbreviated in hot-path internal storage.
      </li>
      <li>
        <strong>Streaming for files over 10MB</strong>. <code>JSON.parse</code> on a 100MB
        string takes 5-15 seconds and may freeze the browser tab.
      </li>
      <li>
        <strong>Use protobuf or CBOR for binary-heavy or high-frequency payloads</strong>.
        Both are 2-5x smaller and faster than JSON. Trade-off: not human-readable, requires
        schema.
      </li>
    </ul>

    <h2 id="anti-patterns">Anti-patterns and footguns</h2>
    <ul>
      <li>
        <strong>Stringly-typed dates</strong>. JSON has no Date type, so dates become
        strings. Multiple formats compete: ISO 8601 (<code>2026-01-15T12:00:00Z</code>{" "}
        &mdash; preferred), Unix timestamp (number of seconds), JavaScript Date string
        format. Pick one in your API contract; don&rsquo;t mix. ISO 8601 is the
        interoperable choice.
      </li>
      <li>
        <strong>Money as floats</strong>. Use integer cents or string-encoded decimals.
        Floats lose precision; <code>0.1 + 0.2 = 0.30000000000000004</code>.
      </li>
      <li>
        <strong>Big integers as numbers</strong>. IDs over 2^53 lose precision. Send as
        strings.
      </li>
      <li>
        <strong>Comments in JSON files served as JSON content-type</strong>. Strip them
        before serving, or change content-type to <code>application/jsonc</code> (not
        widely recognized) or convention <code>application/x-jsonc</code>.
      </li>
      <li>
        <strong>Mutating during iteration</strong>. Some parsers (Python json) return
        plain dicts; others return ordered dicts; behavior varies. Don&rsquo;t mutate
        what you&rsquo;re iterating; iterate a copy.
      </li>
      <li>
        <strong>Trusting key order</strong>. RFC 8259 says objects are
        &ldquo;unordered.&rdquo; Most parsers preserve insertion order in practice (V8,
        Python 3.7+, Go); some don&rsquo;t. Don&rsquo;t depend on order for correctness.
      </li>
    </ul>

    <h2>The 80/20 takeaway</h2>
    <p>
      The six rules cover almost all parse errors you&rsquo;ll encounter. The schema
      validation pattern (Ajv, Zod, JSON Schema) catches the rest at the contract level
      so bugs surface early. For huge documents, switch to streaming parsers or NDJSON.
      For binary data, Base64-encode or send out-of-band. Always validate untrusted JSON
      before merging into objects (prototype pollution).
    </p>
    <p>
      Use the <a href="/tools/json-formatter">JSON formatter</a> for one-off
      pretty-printing and validation; <code>jq</code> for command-line workflows; Ajv or
      Zod for runtime validation. Read RFC 8259 once. Bookmark this page. Most JSON
      headaches go away.
    </p>
  </>
);

export const cta = {
  label: "Format and validate JSON instantly in the browser",
  targetSlug: "json-formatter",
};

export const faq = [
  {
    q: "Why does my JSON parser say 'Unexpected token'?",
    a: "Five common causes, in order of frequency: (1) Trailing comma after the last item in an object or array — strict JSON forbids it. (2) Single-quoted strings instead of double-quoted. (3) Unquoted keys (valid in JavaScript object literals; invalid in JSON). (4) Unescaped backslash inside a string creating a broken escape sequence. (5) Comments — strict JSON has no comments. The 'position N' in the error message points at the exact character; paste your JSON into a formatter to see line:column.",
  },
  {
    q: "What's the difference between JSON, JSON5, and JSONC?",
    a: "JSON (RFC 8259) is the strict standard used in APIs: no comments, no trailing commas, double-quoted keys only. JSONC (JSON with Comments) adds // and /* */ comments and trailing commas; used by VS Code settings and tsconfig.json. JSON5 is JSONC plus unquoted keys, single-quoted strings, hex numbers, and a few other conveniences; used in some build tool configs. Rule of thumb: APIs always strict JSON; hand-edited config files can use JSONC or JSON5. Never assume a parser supports JSON5 unless documented.",
  },
  {
    q: "How do I handle JSON files larger than 100MB?",
    a: "JSON.parse and equivalent loaders read the entire document into memory — typically 2-5x the file size for object representation. For files >100MB, use streaming parsers: jq (CLI, handles 100GB easily), Python ijson, Node JSONStream, Go encoding/json Decoder. Alternative format: NDJSON (newline-delimited JSON) where each line is a separate JSON object — trivial to stream by reading line-by-line. NDJSON is standard for log aggregation, ML training data, and large data exports.",
  },
  {
    q: "Why does my JSON have wrong numbers (precision loss)?",
    a: "JSON numbers are IEEE 754 64-bit floats per spec. JavaScript's Number.MAX_SAFE_INTEGER is 2^53 - 1 = 9007199254740991. Bigger integers (long IDs from databases, blockchain transaction IDs, Twitter snowflake IDs) round to the nearest representable float — silent data corruption. Fix: send big integers as JSON strings, parse as BigInt or library-specific big-integer types on the receiving side. Money has the same problem: 0.1 + 0.2 = 0.30000000000000004. Store money as integer cents (or smaller units), or as strings with fixed precision; never as floats.",
  },
];
