/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Data conversion sits at the heart of most analytics workflows: an export
      from one system in CSV, the next system wants JSON, the analyst wants it
      in Excel, the engineer wants XML. This guide is the practical playbook
      for getting between formats without losing your data — and which of our
      free tools handles each conversion.
    </p>
  </>
);

export const toc = [
  { id: "csv-to-excel", label: "CSV to Excel: the easiest method" },
  { id: "json-to-csv", label: "JSON to CSV for analysis" },
  { id: "xml-to-csv", label: "XML to CSV step by step" },
  { id: "structure", label: "Preserving structure across formats" },
  { id: "common-issues", label: "Common pitfalls" },
];

export const body = (
  <>
    <h2 id="csv-to-excel">CSV to Excel: the easiest conversion method</h2>
    <p>
      Three options, each tractable:
    </p>
    <ol>
      <li>
        <strong>Just open the CSV in Excel.</strong> Yes — modern Excel handles
        CSV natively. File → Open → select the CSV. Excel detects delimiters
        automatically. The catch: Excel sometimes munges fields it thinks are
        dates or numbers (leading zeros stripped, ZIP codes turned into
        scientific notation). For data integrity, use Power Query (Data → From
        Text/CSV) instead — gives you column-type controls.
      </li>
      <li>
        <strong>Use our <a href="/tools/csv-to-excel-xml">CSV to Excel
        converter</a>.</strong> Paste CSV, download a real Excel file (.xls
        SpreadsheetML 2003 format) that Excel, Google Sheets, and LibreOffice
        all open natively. Browser-only, no upload, preserves number-vs-string
        column types. Best when you want to share an Excel file specifically.
      </li>
      <li>
        <strong>Google Sheets import.</strong> File → Import → Upload CSV.
        Cleaner type detection than Excel for most cases. Free, but goes
        through Google&rsquo;s servers.
      </li>
    </ol>
    <p>
      The hidden gotcha most people hit: Excel auto-converts certain
      strings to dates or numbers. If you have a ZIP code column with leading
      zeros (&ldquo;01234&rdquo;), columns of trade IDs that look like numbers,
      or anything date-like, Excel will silently corrupt them. Always use
      Power Query (Data → From Text/CSV) for production data — it lets you
      lock column types before import.
    </p>

    <h2 id="json-to-csv">JSON to CSV for data analysis</h2>
    <p>
      Use our <a href="/tools/json-to-csv">JSON to CSV converter</a> for the
      basic flat case (an array of objects with simple fields). The trickier
      cases:
    </p>
    <ul>
      <li>
        <strong>Nested objects:</strong> the converter flattens nested fields
        into dotted-path columns (<code>address.city</code>,{" "}
        <code>address.zip</code>). Works for 1–2 levels of nesting; deeper
        nesting gets unwieldy.
      </li>
      <li>
        <strong>Arrays of arrays:</strong> the converter indexes them
        (<code>tags[0]</code>, <code>tags[1]</code>). For variable-length
        arrays, the CSV will have NULL columns for shorter rows. Acceptable
        for most cases; consider unrolling into multiple rows if your downstream
        analysis tool expects normalized data.
      </li>
      <li>
        <strong>Mixed schemas:</strong> if some objects have fields others
        don&rsquo;t, the union of all keys becomes the header set. Empty cells
        for missing fields. This is usually correct.
      </li>
      <li>
        <strong>Very large files:</strong> browser-side conversion is fine up
        to ~100 MB. Above that use a CLI tool like <code>jq</code> + a CSV
        formatter, or Pandas in Python.
      </li>
    </ul>

    <h2 id="xml-to-csv">XML to CSV step-by-step</h2>
    <p>
      Use our <a href="/tools/xml-to-csv">XML to CSV converter</a>. The
      workflow:
    </p>
    <ol>
      <li>
        <strong>Identify the row element.</strong> What&rsquo;s the repeating
        unit in your XML? In a customer export it&rsquo;s usually{" "}
        <code>&lt;customer&gt;</code> or <code>&lt;record&gt;</code>. Our tool
        auto-detects the first repeating child of the root, but you can
        override with a CSS selector.
      </li>
      <li>
        <strong>Paste the XML.</strong> The tool parses with the browser&rsquo;s
        native DOMParser. Errors (mismatched tags, invalid characters) surface
        immediately.
      </li>
      <li>
        <strong>Verify the row + column count.</strong> If the count looks
        wrong (e.g. 1 row when you expected 100), the row selector is probably
        wrong. Set it manually.
      </li>
      <li>
        <strong>Download or copy the CSV.</strong> Done.
      </li>
    </ol>
    <p>
      For deeply nested or hierarchical XML (3+ levels of nested elements with
      arrays inside arrays), CSV isn&rsquo;t the right output format —
      you&rsquo;ll get a wide sparse table. Convert to JSON first, then process
      with a real ETL tool.
    </p>

    <h2 id="structure">Preserving file structure when converting formats</h2>
    <p>
      The general principle: lossy conversions are unidirectional. Once you go
      from a richer format to a flatter one (XML → CSV, JSON → CSV, DOCX →
      plain text), you can&rsquo;t recover the original structure perfectly.
      Plan accordingly:
    </p>
    <ul>
      <li>
        <strong>Keep the original.</strong> Always. Storage is cheap, regret
        is expensive.
      </li>
      <li>
        <strong>Document the conversion choices.</strong> If you flattened
        nested fields with dotted-path names, write down what you did. Six
        months later when you need to reconstruct, you&rsquo;ll thank yourself.
      </li>
      <li>
        <strong>Use intermediate formats wisely.</strong> XML → JSON (rich →
        rich) preserves structure. JSON → CSV (rich → flat) loses it. If you
        need to convert XML → CSV → back to XML, expect data loss.
      </li>
      <li>
        <strong>For multi-step conversions:</strong> do as few steps as
        possible. Each conversion can introduce errors. Direct XML → JSON is
        better than XML → CSV → JSON.
      </li>
    </ul>

    <h2 id="common-issues">Common pitfalls in data conversion</h2>
    <ul>
      <li>
        <strong>Date formatting:</strong> CSV doesn&rsquo;t have a date type.
        Different tools interpret &ldquo;01/02/03&rdquo; differently (Jan 2
        2003 vs Feb 1 2003 vs whatever). Always use ISO 8601
        (<code>2003-01-02</code>) for portability.
      </li>
      <li>
        <strong>Leading zeros:</strong> ZIP codes, IDs, account numbers get
        auto-converted to integers and lose their leading zeros. Quote them as
        strings in CSV (<code>&quot;01234&quot;</code>) or use Power Query in
        Excel.
      </li>
      <li>
        <strong>Encoding:</strong> non-ASCII characters (accents, emoji,
        non-Latin scripts) need UTF-8. Excel CSV import sometimes defaults to
        Windows-1252 — pick &ldquo;Unicode (UTF-8)&rdquo; in the Power Query
        wizard.
      </li>
      <li>
        <strong>Quoted fields with commas:</strong> RFC 4180 says quote them.
        Some bad CSV writers don&rsquo;t. If your converter chokes, the input
        is malformed — clean it before converting.
      </li>
      <li>
        <strong>Excel&rsquo;s row limit:</strong> Excel handles ~1M rows.
        Larger files: split into multiple sheets, or use a real database.
      </li>
      <li>
        <strong>Special characters in column names:</strong> some tools
        don&rsquo;t allow dots, slashes, or spaces. Sanitize column names
        before import to BI tools, databases, or anything programmatic.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Convert XML to CSV (free, browser-only)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "What's the easiest way to convert CSV to Excel?",
    a: "Three options: open CSV directly in Excel (File → Open), use our CSV to Excel converter for a real .xls file, or import via Excel Power Query (Data → From Text/CSV) which gives you column-type control. The Power Query path prevents Excel from auto-corrupting ZIP codes, IDs, and date-like strings.",
  },
  {
    q: "How do I convert JSON to CSV for data analysis?",
    a: "For flat array-of-objects JSON, use our JSON to CSV tool. Nested objects flatten with dotted-path columns; arrays get indexed. For deeply nested or very large (>100 MB) JSON, use jq or Pandas instead. Keep the original JSON — once flattened to CSV, you can't recover the structure.",
  },
  {
    q: "How do I convert XML to CSV step by step?",
    a: "Use our XML to CSV converter. (1) Identify the repeating row element (auto-detected by default), (2) Paste XML, (3) Verify row + column count, (4) Download CSV. For deeply nested XML, convert to JSON first then process with a real ETL tool — CSV isn't the right output for hierarchical data.",
  },
  {
    q: "How do I keep my file structure when converting formats?",
    a: "Always keep the original. Document conversion choices for future-you. Use intermediate formats wisely — XML → JSON preserves structure; JSON → CSV is lossy. Do as few steps as possible — each conversion adds error. For lossy steps (rich → flat), expect that round-tripping back loses data.",
  },
];
