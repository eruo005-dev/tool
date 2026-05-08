/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      With dozens of free converters and hundreds of paid ones, picking the
      right tool for your specific task is harder than it should be. This
      guide is the structured selection framework — five questions to ask,
      what coverage to verify, and the practical decision tree.
    </p>
  </>
);

export const toc = [
  { id: "framework", label: "The 5-question selection framework" },
  { id: "coverage", label: "Verifying format support" },
  { id: "comparison", label: "Comparing converters before choosing" },
  { id: "decision-tree", label: "Decision tree by use case" },
];

export const body = (
  <>
    <h2 id="framework">The 5-question selection framework</h2>

    <h3>1. How sensitive is the content?</h3>
    <p>
      Drives the local-vs-cloud decision. Anything you wouldn&rsquo;t hand to a
      stranger should stay local — use a browser-only converter or a desktop
      app. Public memes and generic content can use cloud freely.
    </p>

    <h3>2. How often will I do this conversion?</h3>
    <p>
      One-off: any tool works; pick the fastest path. Weekly: invest 30 minutes
      in setting up a desktop tool or browser bookmark. Daily / batch: invest
      an hour in proper automation (CLI scripts, Automator, scheduled tasks).
    </p>

    <h3>3. What&rsquo;s the file complexity?</h3>
    <p>
      Simple file (plain text, basic image, small PDF): any tool will work.
      Complex file (multi-column PDF, scientific paper, 3D model with
      materials, scanned handwriting): you need a specialist tool. Generic
      converters will produce garbage.
    </p>

    <h3>4. What output fidelity do I need?</h3>
    <p>
      &ldquo;Read-only&rdquo; — just need the content extracted: free tools
      are fine. &ldquo;Editable&rdquo; — need to modify after conversion: pay
      attention to layout fidelity. &ldquo;Production&rdquo; — going to a
      paying customer, regulator, or final publication: pay for Adobe Acrobat
      Pro or specialized tools.
    </p>

    <h3>5. What&rsquo;s my budget?</h3>
    <p>
      Most needs are covered for free. Pay only when (a) the converter handles
      a specific complex case the free tools can&rsquo;t, (b) the volume
      justifies a subscription, or (c) regulatory / professional requirements
      mandate a specific paid tool.
    </p>

    <h2 id="coverage">What file formats does the converter actually support?</h2>
    <p>
      Marketing copy lies. Verify before committing:
    </p>
    <ol>
      <li>
        <strong>Read the supported-formats list carefully.</strong> Not just
        &ldquo;PDF&rdquo; but specifically &ldquo;PDF v1.4-2.0 with embedded
        fonts and forms.&rdquo; The detail matters.
      </li>
      <li>
        <strong>Test with your actual file before committing.</strong> Most
        free tools accept a small file. Run yours through and verify the
        output. If it has obvious problems, find another tool.
      </li>
      <li>
        <strong>Look for explicit limitations.</strong> Tools that disclose
        limits (&ldquo;may not preserve form fields,&rdquo; &ldquo;tables get
        flattened to text&rdquo;) are more trustworthy than tools that claim
        to handle everything perfectly.
      </li>
      <li>
        <strong>Check the output quality, not just success/failure.</strong>{" "}
        A converter can &ldquo;succeed&rdquo; (no error) and produce garbage
        (text in wrong order, missing pages, broken layout). Always verify the
        result.
      </li>
    </ol>

    <h2 id="comparison">Comparing converters before choosing</h2>
    <p>
      The 10-minute comparison protocol:
    </p>
    <ol>
      <li>Pick 2-3 candidate converters.</li>
      <li>Convert the same source file with each.</li>
      <li>Open each output and compare:
        <ul>
          <li>Structural fidelity (are tables / layouts preserved?)</li>
          <li>Text accuracy (any garbled characters, wrong order?)</li>
          <li>Metadata preservation (did EXIF / document properties survive?)</li>
          <li>File size (output should be reasonable for the format)</li>
        </ul>
      </li>
      <li>Pick the best one. Bookmark or install for future use.</li>
    </ol>
    <p>
      Don&rsquo;t commit to a paid converter without doing this comparison
      against the free options. The price doesn&rsquo;t guarantee quality —
      and free tools sometimes outperform paid ones for specific use cases.
    </p>

    <h2 id="decision-tree">Decision tree by use case</h2>

    <h3>Document conversion (PDF, DOCX, ODT, RTF, MD)</h3>
    <ul>
      <li>One-off, simple PDF → DOCX: Microsoft Word File → Open</li>
      <li>One-off, sensitive PDF → text: <a href="/tools/pdf-to-text">our PDF to text</a></li>
      <li>Scanned PDF → text: <a href="/tools/pdf-ocr-to-text">our PDF OCR</a></li>
      <li>Batch document conversion: Pandoc CLI</li>
      <li>Production PDF editing: Adobe Acrobat Pro</li>
    </ul>

    <h3>Image conversion (PNG, JPG, WebP, AVIF, HEIC, SVG)</h3>
    <ul>
      <li>One-off PNG/JPG/WebP: <a href="/tools/image-format-converter">our image format converter</a></li>
      <li>HEIC from iPhone: <a href="/tools/heic-to-jpg">HEIC to JPG</a></li>
      <li>SVG to raster: <a href="/tools/svg-to-png">SVG to PNG</a></li>
      <li>Batch image conversion: macOS Quick Actions, ImageMagick CLI</li>
      <li>Pro photo work: Photoshop or GIMP</li>
    </ul>

    <h3>Data conversion (CSV, JSON, XML, YAML, Excel)</h3>
    <ul>
      <li>JSON to CSV: <a href="/tools/json-to-csv">our JSON to CSV</a></li>
      <li>CSV to JSON: <a href="/tools/csv-to-json">our CSV to JSON</a></li>
      <li>XML to CSV: <a href="/tools/xml-to-csv">our XML to CSV</a></li>
      <li>CSV to Excel: <a href="/tools/csv-to-excel-xml">our CSV to Excel</a></li>
      <li>YAML ↔ JSON: <a href="/tools/yaml-json-converter">our YAML JSON</a></li>
      <li>Big data (Parquet, Avro): pandas / Spark / DuckDB</li>
    </ul>

    <h3>Ebook + 3D + niche</h3>
    <ul>
      <li>Ebook conversion: Calibre (universal)</li>
      <li>3D format conversion: Blender, MeshLab, FreeCAD</li>
      <li>CAD: LibreCAD, FreeCAD, ODA File Converter</li>
      <li>GIS: QGIS</li>
      <li>Audio/video: FFmpeg</li>
    </ul>
  </>
);

export const cta = {
  label: "PDF OCR — handles tricky scans (free)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "How do I choose between different file format converters?",
    a: "5-question framework: (1) how sensitive is the content (drives local vs cloud), (2) how often (drives investment in tools), (3) file complexity (simple vs specialist), (4) output fidelity needed (read-only vs editable vs production), (5) budget. Most needs are covered free; pay only for specific complex cases or volume.",
  },
  {
    q: "What file formats does my converter actually support?",
    a: "Verify carefully: read the supported-formats list (specifics matter — 'PDF v1.4-2.0' vs just 'PDF'), test with your actual file before committing, look for explicit limitations (trustworthy tools disclose them), check output quality not just success/failure. Free tools that succeed and produce garbage are common.",
  },
  {
    q: "How do I compare file converters before committing?",
    a: "10-minute protocol: pick 2-3 candidates, convert the same file with each, compare structural fidelity, text accuracy, metadata preservation, file size. Don't commit to paid without checking against free first — price doesn't guarantee quality.",
  },
  {
    q: "What's the right converter for [specific format pair]?",
    a: "Quick decision tree: documents (Word File → Open for simple, Pandoc for batch), images (browser-only converters here for one-offs, ImageMagick for batch), data (JSON/CSV/XML/YAML/Excel converters here), ebooks (Calibre), 3D (Blender/MeshLab), audio/video (FFmpeg).",
  },
];
