/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The single biggest privacy concern with online file converters is also the
      easiest to fix: most &ldquo;free&rdquo; converters upload your file to a
      server, process it there, and email or download the result. Your contract,
      tax document, scanned passport, or financial PDF lives on someone
      else&rsquo;s machine — sometimes for hours, sometimes forever, depending on
      their privacy policy.
    </p>
    <p>
      The browser-only alternative does the same conversion locally without ever
      sending the file anywhere. Every converter on this site runs that way. This
      guide explains what to look for, when online vs local matters, and the
      situations where free + paid converters differ in ways most reviews miss.
    </p>
  </>
);

export const toc = [
  { id: "why", label: "Why local conversion matters" },
  { id: "test", label: "How to test if a converter is actually local" },
  { id: "online-vs-desktop", label: "Online vs desktop converters" },
  { id: "free-vs-paid", label: "Free vs paid: what's the real difference?" },
  { id: "tools", label: "Browser-only converters by file type" },
];

export const body = (
  <>
    <h2 id="why">Why local conversion matters</h2>
    <p>
      Three categories of risk with cloud-based file converters:
    </p>
    <ul>
      <li>
        <strong>Active retention.</strong> Many free converters explicitly retain
        your file for 24 hours, 7 days, or longer to &ldquo;improve their
        service.&rdquo; Your draft NDA, tax return, or medical scan sits on their
        infrastructure during that window.
      </li>
      <li>
        <strong>Passive logging.</strong> Even when a vendor promises to delete
        files, server access logs typically capture filenames, sizes, and
        timestamps for 30–90 days. A breach exposes that metadata even if the
        files themselves are gone.
      </li>
      <li>
        <strong>Subprocessor exposure.</strong> The cheap online converter you
        use is often a thin wrapper around AWS Lambda or Cloudflare Workers.
        Their privacy policy is typically less strict than the converter&rsquo;s
        marketing copy.
      </li>
    </ul>
    <p>
      For day-to-day non-sensitive conversions (a meme, a public document, a
      generic image), online is fine. For anything you wouldn&rsquo;t hand to a
      stranger, local conversion is the right default.
    </p>

    <h2 id="test">How to test if a converter is actually local</h2>
    <p>
      Marketing copy lies. The actual test takes 30 seconds:
    </p>
    <ol>
      <li>
        Open browser DevTools (F12 on Windows, Cmd+Opt+I on Mac).
      </li>
      <li>Go to the Network tab.</li>
      <li>Clear the network log.</li>
      <li>Run the conversion.</li>
      <li>
        Watch the network tab during the conversion. If you see your file going
        to a server (look for POST requests with multipart/form-data or large
        request bodies), the converter is online. If you only see static asset
        loads (JS, CSS, fonts), it&rsquo;s local.
      </li>
    </ol>
    <p>
      For our tools, this test will show zero file uploads — every converter on
      this site is browser-only. We mention this not as a brag but because it&rsquo;s
      the wedge: when you compare us against the cloud-based alternatives, the
      privacy difference is structural, not marketing.
    </p>

    <h2 id="online-vs-desktop">Online vs desktop converters: which to use when</h2>
    <p>
      Three categories, three answers:
    </p>
    <ul>
      <li>
        <strong>Online cloud converter (file uploaded):</strong> fastest for huge
        files because their servers are bigger than your laptop. Worst for
        privacy. Use only for non-sensitive content.
      </li>
      <li>
        <strong>Online browser-only converter:</strong> the sweet spot for most
        people. No install required, conversion happens locally, file never leaves
        your device. Slower than cloud servers for very large files, but fine for
        anything under ~50 MB.
      </li>
      <li>
        <strong>Desktop application:</strong> right answer for power users with
        repeated batch conversions, very large files (gigabytes), or air-gapped
        environments. Pandoc, FFmpeg, ImageMagick command-line tools are free
        and battle-tested. Higher learning curve.
      </li>
    </ul>
    <p>
      For most everyday conversion needs the browser-only category covers it.
      Desktop becomes worth installing when you&rsquo;re doing the same
      conversion 50+ times a week.
    </p>

    <h2 id="free-vs-paid">Free vs paid file converters: what&rsquo;s the real difference?</h2>
    <p>
      The honest breakdown of paid converter offerings vs free:
    </p>
    <ul>
      <li>
        <strong>Batch processing limits.</strong> Free converters often cap at 1
        file at a time or 5 files per session. Paid removes the cap. Real
        difference if you batch convert; not relevant otherwise.
      </li>
      <li>
        <strong>File size limits.</strong> Free typically capped at 50–100 MB.
        Paid handles gigabytes. Most users never hit the cap.
      </li>
      <li>
        <strong>OCR accuracy.</strong> Paid OCR services use GPU-accelerated
        models with proprietary training data. Free OCR (Tesseract) hits ~85-95%
        on clean print, 50-70% on messy handwriting. For high-volume professional
        OCR (legal, healthcare), paid is meaningfully better.
      </li>
      <li>
        <strong>Format preservation.</strong> Paid converters often preserve
        complex layouts (multi-column PDFs, tables) better than free. For simple
        documents the difference is negligible.
      </li>
      <li>
        <strong>Customer support.</strong> Paid means there&rsquo;s a human you
        can email. Most free tools you&rsquo;re on your own.
      </li>
      <li>
        <strong>Privacy.</strong> Counter-intuitively, paid is usually NOT more
        private — many paid converters retain files for &ldquo;quality
        improvement.&rdquo; Read the privacy policy specifically; don&rsquo;t
        assume.
      </li>
    </ul>
    <p>
      For most personal and small-business needs, free browser-only converters do
      the job. Paid is worth it specifically for: high-volume batch work, very
      large files, professional OCR, or when you need vendor support.
    </p>

    <h2 id="tools">Browser-only converters by file type (on this site)</h2>
    <p>The full inventory of browser-only conversion tools — every one runs locally:</p>
    <ul>
      <li>
        <strong>PDF:</strong>{" "}
        <a href="/tools/pdf-to-text">PDF to text</a>,{" "}
        <a href="/tools/pdf-ocr-to-text">PDF OCR (scanned + handwritten)</a>,{" "}
        <a href="/tools/pdf-to-jpg">PDF to JPG</a>,{" "}
        <a href="/tools/jpg-to-pdf">JPG to PDF</a>,{" "}
        <a href="/tools/merge-pdf">merge PDFs</a>,{" "}
        <a href="/tools/pdf-split">split PDF</a>,{" "}
        <a href="/tools/pdf-to-long-image">PDF to long image</a>,{" "}
        <a href="/tools/pdf-watermark">add watermark</a>,{" "}
        <a href="/tools/pdf-organizer">reorder pages</a>,{" "}
        <a href="/tools/pdf-page-numbers">add page numbers</a>,{" "}
        <a href="/tools/pdf-crop">crop pages</a>,{" "}
        <a href="/tools/pdf-page-range-extractor">extract page ranges</a>,{" "}
        <a href="/tools/pdf-metadata-viewer">metadata viewer</a>,{" "}
        <a href="/tools/pdf-metadata-remover">metadata remover</a>.
      </li>
      <li>
        <strong>Images:</strong>{" "}
        <a href="/tools/image-format-converter">PNG/JPG/WEBP converter</a>,{" "}
        <a href="/tools/image-resizer">image resizer</a>,{" "}
        <a href="/tools/image-compressor">compressor</a>,{" "}
        <a href="/tools/image-cropper">cropper</a>,{" "}
        <a href="/tools/svg-to-png">SVG to PNG</a>,{" "}
        <a href="/tools/heic-to-jpg">HEIC to JPG</a>,{" "}
        <a href="/tools/webp-to-jpg">WEBP to JPG</a>,{" "}
        <a href="/tools/color-extractor">color palette extractor</a>,{" "}
        <a href="/tools/gif-maker">GIF maker</a>.
      </li>
      <li>
        <strong>Data:</strong>{" "}
        <a href="/tools/json-to-csv">JSON to CSV</a>,{" "}
        <a href="/tools/csv-to-json">CSV to JSON</a>,{" "}
        <a href="/tools/xml-to-csv">XML to CSV</a>,{" "}
        <a href="/tools/csv-to-excel-xml">CSV to Excel</a>,{" "}
        <a href="/tools/yaml-json-converter">YAML ↔ JSON</a>.
      </li>
      <li>
        <strong>Text + markup:</strong>{" "}
        <a href="/tools/html-to-markdown">HTML to Markdown</a>,{" "}
        <a href="/tools/markdown-to-html">Markdown to HTML</a>,{" "}
        <a href="/tools/case-converter">case converter</a>,{" "}
        <a href="/tools/base64-encoder-decoder">Base64 encode/decode</a>.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "OCR a PDF browser-side (no upload)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "How can I convert files locally without uploading to the cloud?",
    a: "Use a browser-only converter — it runs JavaScript in your browser to do the conversion locally. The file never leaves your device. Test by opening DevTools → Network tab while converting; if you see no upload requests, it's local. Every converter on this site runs this way.",
  },
  {
    q: "Is it safe to convert files online?",
    a: "Cloud-based online converters upload your file to a server. Risk depends on the converter's retention policy, server logs, and subprocessor handling. For non-sensitive content (memes, public docs, generic images), online is fine. For anything you wouldn't hand to a stranger, use a browser-only or desktop converter.",
  },
  {
    q: "Should I use online or desktop file converters?",
    a: "Browser-only online converters are the sweet spot for most users — no install, runs locally, files don't leave your device. Cloud servers are fastest for huge files but worst for privacy. Desktop apps (Pandoc, FFmpeg, ImageMagick) are right for batch power users and air-gapped environments.",
  },
  {
    q: "What's the real difference between free and paid file converters?",
    a: "Paid removes batch + size caps, has better OCR accuracy and layout preservation, and offers customer support. Counter-intuitively, paid is NOT necessarily more private — many retain files for 'quality improvement.' Read the privacy policy. For everyday personal use, free browser-only works fine.",
  },
];
