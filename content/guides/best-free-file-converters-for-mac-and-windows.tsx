/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      The &ldquo;best free file converter&rdquo; question has different answers
      depending on what you&rsquo;re converting, how often, and how sensitive the
      content is. This guide is the cross-platform breakdown — what to install on
      Mac vs Windows, what comes built-in, and which browser-only tools cover
      everything else without an installer.
    </p>
  </>
);

export const toc = [
  { id: "browser", label: "Browser-only (no install)" },
  { id: "mac", label: "Mac built-in options" },
  { id: "windows", label: "Windows built-in options" },
  { id: "desktop", label: "Cross-platform desktop tools" },
  { id: "business", label: "Business document converters" },
  { id: "review", label: "Which tools are actually worth it?" },
];

export const body = (
  <>
    <h2 id="browser">Browser-only converters (no install needed, work on any OS)</h2>
    <p>
      The fastest path for one-off conversions on any machine. Every tool below
      runs locally in your browser — files never upload anywhere. Coverage:
    </p>
    <ul>
      <li><strong>PDF:</strong> see our <a href="/tools/pdf-to-text">PDF tools index</a> — 14+ PDF converters and editors.</li>
      <li><strong>Images:</strong> <a href="/tools/image-format-converter">PNG/JPG/WEBP</a>, <a href="/tools/heic-to-jpg">HEIC</a>, <a href="/tools/svg-to-png">SVG</a>, GIF, AVIF.</li>
      <li><strong>Data:</strong> <a href="/tools/json-to-csv">JSON ↔ CSV</a>, <a href="/tools/xml-to-csv">XML to CSV</a>, <a href="/tools/csv-to-excel-xml">CSV to Excel</a>, YAML.</li>
      <li><strong>Text:</strong> Markdown ↔ HTML, Base64, case conversion.</li>
      <li><strong>OCR:</strong> <a href="/tools/pdf-ocr-to-text">scanned/handwritten PDF to text</a>.</li>
    </ul>
    <p>
      For 80% of casual conversions, browser-only is the answer — no install, no
      account, no upload, works on Mac/Windows/Linux/ChromeOS identically.
    </p>

    <h2 id="mac">Mac built-in options (no install required)</h2>
    <p>
      macOS ships with surprisingly capable conversion built-in:
    </p>
    <ul>
      <li>
        <strong>Preview app:</strong> opens almost every image and PDF format. Save
        As lets you convert between PNG/JPG/HEIC/PDF/TIFF. The hidden trick:
        select multiple images in Finder, right-click, Quick Actions → Convert
        Image lets you batch-convert without opening anything.
      </li>
      <li>
        <strong>Quick Actions menu:</strong> right-click any file → Quick Actions.
        Built-in actions include &ldquo;Create PDF&rdquo; (any file type),
        &ldquo;Convert Image&rdquo; (multiple images at once), &ldquo;Encode Selected
        Video Files&rdquo; (transcode video).
      </li>
      <li>
        <strong>Automator + Shortcuts:</strong> the macOS automation framework
        builds custom file converters in 5 minutes. Drag-and-drop interface, no
        coding. Works for batches, scheduled folders, etc.
      </li>
      <li>
        <strong>Pages / Numbers / Keynote → File → Export:</strong> export to PDF,
        Word, Excel, PowerPoint, EPUB, plain text. No third-party tool needed for
        Office format conversions if you have iWork (free with macOS).
      </li>
      <li>
        <strong>Terminal:</strong> macOS includes <code>sips</code> (image
        processing), <code>iconutil</code> (icns), and you can install Pandoc
        (homebrew) for document conversion. Power-user territory.
      </li>
    </ul>

    <h2 id="windows">Windows built-in options</h2>
    <p>
      Windows is less generous out of the box than macOS, but the basics are there:
    </p>
    <ul>
      <li>
        <strong>Microsoft Print to PDF:</strong> built into Windows since 10.
        Print → Microsoft Print to PDF turns any printable document into a PDF.
        Works from any application.
      </li>
      <li>
        <strong>Photos app:</strong> opens HEIC, PNG, JPG, GIF, WEBP, BMP. Save As
        for basic format conversion.
      </li>
      <li>
        <strong>Snipping Tool / Snip &amp; Sketch:</strong> screenshots saved as
        PNG; rich annotation. Save as JPG for size reduction.
      </li>
      <li>
        <strong>Office:</strong> Word, Excel, PowerPoint all support Save As to
        PDF, XPS, plain text, and many other formats. Free Office Online does the
        same in browser.
      </li>
      <li>
        <strong>PowerShell:</strong> built-in scripting. <code>ImageMagick</code>{" "}
        (free, separate install via winget) plus PowerShell loops handles batch
        conversion at scale.
      </li>
      <li>
        <strong>WSL2:</strong> for power users — full Linux subsystem with{" "}
        <code>pandoc</code>, <code>imagemagick</code>, <code>ffmpeg</code>,
        whatever you need.
      </li>
    </ul>

    <h2 id="desktop">Cross-platform desktop tools (the power-user picks)</h2>
    <ul>
      <li>
        <strong>Pandoc</strong> (free, open-source). The universal document
        converter. Markdown ↔ HTML ↔ DOCX ↔ EPUB ↔ LaTeX ↔ many more. CLI-driven
        but well-documented. The right tool for batch document conversion.
      </li>
      <li>
        <strong>FFmpeg</strong> (free, open-source). Universal video and audio
        converter. Steep learning curve; can do almost anything. The de-facto
        standard for video conversion.
      </li>
      <li>
        <strong>ImageMagick</strong> (free, open-source). Universal image
        converter and manipulator. Same shape as FFmpeg — CLI, complex, but
        capable. <code>convert input.png output.jpg</code> — that&rsquo;s it.
      </li>
      <li>
        <strong>Calibre</strong> (free, open-source). Best-in-class for
        ebook conversion (EPUB ↔ MOBI ↔ AZW3 ↔ PDF) — see our{" "}
        <a href="/guides/ebook-and-3d-file-conversion">ebook + 3D conversion guide</a>{" "}
        for the workflow.
      </li>
      <li>
        <strong>LibreOffice</strong> (free, open-source). The Microsoft Office
        alternative. Headless mode (<code>libreoffice --headless --convert-to
        pdf *.docx</code>) batch-converts hundreds of files. Quality near Office.
      </li>
    </ul>

    <h2 id="business">Best file converter for business documents</h2>
    <p>
      For professional documents (contracts, reports, financial statements):
    </p>
    <ul>
      <li>
        <strong>Microsoft Word + Excel + PowerPoint:</strong> the safest choice for
        round-tripping Office formats. Free Office Online handles most cases.
      </li>
      <li>
        <strong>Adobe Acrobat Pro</strong> ($20/month). Best PDF round-tripping
        especially when preserving complex layouts (forms, tables, signatures).
      </li>
      <li>
        <strong>LibreOffice</strong> for batch conversion of Office formats —
        handles 95% of layouts identically to Microsoft Office, free, can run
        headlessly.
      </li>
      <li>
        <strong>Pandoc</strong> for Markdown-based workflows — engineering teams,
        technical writers, anyone using Git for docs. Best for converting
        clean structured content.
      </li>
      <li>
        <strong>Browser-only on this site:</strong> for everyday tasks (CSV ↔
        Excel, PDF text extraction, image format swap), the privacy-friendly
        path.
      </li>
    </ul>

    <h2 id="review">Which file converter tools are actually worth it?</h2>
    <p>
      The honest review:
    </p>
    <ul>
      <li>
        <strong>Worth it:</strong> Pandoc, FFmpeg, ImageMagick, Calibre,
        LibreOffice — all free, all best-in-class for their domains. Adobe
        Acrobat Pro for professional PDF workflows ($20/month). Browser-only
        converters for occasional tasks.
      </li>
      <li>
        <strong>Skip:</strong> the dozens of $5/month &ldquo;all-in-one converter&rdquo;
        SaaS apps. Most are wrappers around the free tools above with worse UX
        and worse privacy. The exception: a few like CloudConvert offer real
        value at scale, but for individual users the free options cover the
        ground.
      </li>
      <li>
        <strong>Be skeptical of:</strong> &ldquo;AI-powered file converter&rdquo;
        marketing. The underlying tech is the same; the AI buzzword usually adds
        cost without adding capability. The exception is OCR, where modern AI
        models genuinely outperform Tesseract on degraded inputs.
      </li>
    </ul>
  </>
);

export const cta = {
  label: "Try our XML to CSV converter (no install)",
  targetSlug: "xml-to-csv",
};

export const faq = [
  {
    q: "What's the best free file format converter for Mac?",
    a: "macOS has surprisingly capable built-in tools: Preview for image/PDF conversion, Quick Actions in Finder for batch image conversion, Pages/Numbers/Keynote for Office formats, Automator for custom workflows. For anything else, browser-only converters work without installing anything.",
  },
  {
    q: "What's the best free file format converter for Windows?",
    a: "Microsoft Print to PDF is built-in; Office (or free Office Online) handles document formats; Photos for images; PowerShell + ImageMagick for batch. For everything else, browser-only converters or installing Pandoc/FFmpeg/Calibre via winget cover the gaps.",
  },
  {
    q: "How do I convert files on Mac without extra software?",
    a: "Preview app: Save As converts between image/PDF formats. Finder Quick Actions: select files → right-click → Convert Image works for batches. Pages/Numbers/Keynote: File → Export to PDF/Word/Excel/EPUB/text. Automator: drag-and-drop builder for custom converters. Terminal: sips for image processing, iconutil for icns.",
  },
  {
    q: "Are paid file converter tools worth it?",
    a: "Adobe Acrobat Pro ($20/mo) for professional PDF workflows is worth it. Pandoc, FFmpeg, ImageMagick, Calibre, LibreOffice are all free and best-in-class — paid alternatives rarely beat them. Skip $5/mo 'all-in-one converter' SaaS apps; most are wrappers around these free tools with worse privacy.",
  },
];
