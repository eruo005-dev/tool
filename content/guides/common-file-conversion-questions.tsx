/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      Quick answers to the file conversion questions that show up over and
      over in r/learnprogramming, r/techsupport, r/SoftwareRecs, and the
      various office-app subs. Each links to a deeper guide where the answer
      needs more space.
    </p>
  </>
);

export const toc = [
  { id: "office-text", label: "Office documents to plain text" },
  { id: "metadata", label: "Metadata + privacy" },
  { id: "graphics", label: "Graphics format choices" },
  { id: "speed", label: "Speed + size questions" },
  { id: "rare", label: "Rare formats + edge cases" },
];

export const body = (
  <>
    <h2 id="office-text">Office documents to plain text</h2>

    <h3>What&rsquo;s the best way to convert Office documents to plain text?</h3>
    <p>
      Three quick options:
    </p>
    <ol>
      <li>
        <strong>Word / Google Docs:</strong> File → Save As → Plain Text (.txt).
        Loses all formatting; preserves text content.
      </li>
      <li>
        <strong>Pandoc CLI:</strong> <code>pandoc -o output.txt input.docx</code>.
        Best for batch — preserves headings as Markdown-style markers if you
        use <code>--to=markdown</code> instead.
      </li>
      <li>
        <strong>For sensitive content:</strong> use LibreOffice headless
        (<code>libreoffice --headless --convert-to txt *.docx</code>), no
        cloud round-trip.
      </li>
    </ol>
    <p>
      Strip-formatting tip: paste the formatted text into a plain-text editor
      first, then re-paste into the destination. Removes all hidden styles,
      colors, fonts. Works for transferring text between web apps that have
      been fighting your formatting.
    </p>

    <h2 id="metadata">Metadata + privacy</h2>

    <h3>How do I convert files without losing metadata?</h3>
    <p>
      Format-by-format. JPEG/HEIC/TIFF: most converters preserve EXIF on
      simple format changes — verify the output. PDF: preserved across
      PDF↔PDF, lost on conversion to images. DOCX: preserved on DOCX↔ODT,
      lost on PDF export unless explicitly enabled. Plain text + CSV + JSON
      have no metadata support — embed in content if needed. See our{" "}
      <a href="/guides/converting-files-without-losing-quality">quality preservation guide</a>{" "}
      for the full breakdown.
    </p>

    <h3>How do I strip metadata from a PDF before sharing?</h3>
    <p>
      Use our <a href="/tools/pdf-metadata-remover">PDF metadata remover</a>.
      Browser-only, removes title / author / subject / keywords / creation
      date / producer fields. Good for any document you&rsquo;re publishing
      where the metadata reveals something you don&rsquo;t want shared
      (internal author names, draft history, machine names).
    </p>

    <h3>How do I see what metadata is in a PDF?</h3>
    <p>
      Use our <a href="/tools/pdf-metadata-viewer">PDF metadata viewer</a>.
      Browser-only, shows all standard PDF metadata fields plus XMP if
      present. Useful before sharing — you&rsquo;ll see exactly what would
      leak.
    </p>

    <h2 id="graphics">Graphics format choices</h2>

    <h3>What&rsquo;s the best file converter for graphics?</h3>
    <p>
      Depends on the conversion. PNG/JPG/WebP/AVIF: our{" "}
      <a href="/tools/image-format-converter">image format converter</a>{" "}
      handles all of them in browser. HEIC: <a href="/tools/heic-to-jpg">HEIC
      to JPG</a>. SVG to raster: <a href="/tools/svg-to-png">SVG to PNG</a>{" "}
      with resolution slider. For batch image work: ImageMagick CLI. For
      pro photo editing: Photoshop or GIMP.
    </p>

    <h3>What&rsquo;s the difference between PNG, JPG, and SVG?</h3>
    <p>
      JPG: lossy compression for photos. PNG: lossless with transparency, for
      screenshots and line art. SVG: vector format, infinite resolution, for
      logos and icons. JPG/PNG are pixel-based; SVG is math-based. Detailed
      comparison in our{" "}
      <a href="/guides/file-formats-you-actually-need-to-know">file formats
      guide</a>.
    </p>

    <h2 id="speed">Speed + size questions</h2>

    <h3>How do I convert files faster?</h3>
    <p>
      Five tips: keep the conversion tab in foreground, close other tabs,
      use lower-quality settings if pristine output isn&rsquo;t needed,
      process in batches with re-used engine (FFmpeg, Pandoc), skip
      unnecessary intermediate steps. Detailed breakdown in our{" "}
      <a href="/guides/file-converter-troubleshooting-guide">troubleshooting
      guide</a>.
    </p>

    <h3>Does file size matter for conversion speed?</h3>
    <p>
      Yes — but it&rsquo;s linear or worse. Browser tabs cap at 2-4 GB
      memory. Files over 500 MB push browser-only tools to limits. Switch
      to desktop tools (FFmpeg, ImageMagick, Pandoc, LibreOffice headless)
      for gigabyte-scale files.
    </p>

    <h3>Why do some file conversions take so long?</h3>
    <p>
      Five factors: file size, source format complexity (multi-column PDFs
      slower than text-only), conversion type (lossless reformat is fast,
      reflow + restructure is slow), browser-side vs cloud (cloud has GPUs),
      OCR is always slow at 5-15 seconds per page. See the{" "}
      <a href="/guides/file-converter-troubleshooting-guide">troubleshooting
      guide</a> for the full diagnostic flow.
    </p>

    <h2 id="rare">Rare formats + edge cases</h2>

    <h3>Can you convert encrypted files?</h3>
    <p>
      With the password / key, yes. Without it, no — encryption is designed
      to prevent reading without the key. DRM-protected media (Kindle KFX,
      Audible AAX) is illegal to circumvent in most jurisdictions. Lost own
      passwords sometimes recoverable via vendor support (Microsoft account
      recovery, Adobe). Otherwise plan to live without or reconstruct.
    </p>

    <h3>Can I convert between rare file formats?</h3>
    <p>
      Almost always, with patience. Check if the format has a published spec
      (most do — ISO, RFC, vendor whitepapers). Search GitHub for parsers.
      For binary formats, format research sites like Format Wiki sometimes
      have field-by-field breakdowns. Last resort: hire a freelancer
      specialized in data-format work — $100-500 per file. Detailed in our{" "}
      <a href="/guides/how-file-converters-actually-work">behind-the-scenes
      guide</a>.
    </p>

    <h3>What file converter myths should I ignore?</h3>
    <p>
      Multiple conversions don&rsquo;t always damage quality (only lossy
      chains do). PDFs don&rsquo;t always lose quality on edit. AI-powered
      converters are mostly marketing — exception is OCR. Free CLI tools
      often outperform paid SaaS on speed. Larger output files don&rsquo;t
      mean higher quality. Full myth-busting in our{" "}
      <a href="/guides/how-file-converters-actually-work">behind-the-scenes
      guide</a>.
    </p>
  </>
);

export const cta = {
  label: "OCR a scanned PDF (free, browser-side)",
  targetSlug: "pdf-ocr-to-text",
};

export const faq = [
  {
    q: "What's the best way to convert Office documents to plain text?",
    a: "Word/Google Docs: File → Save As → Plain Text. Pandoc CLI for batch. LibreOffice headless for sensitive content (no cloud). Quick tip: paste formatted text into a plain-text editor first, then re-paste into destination — strips hidden styles when copying between web apps.",
  },
  {
    q: "How do I convert files without losing metadata?",
    a: "JPEG/HEIC/TIFF: most converters preserve EXIF on format changes. PDF: preserved across PDF↔PDF, lost on conversion to images. DOCX: preserved on DOCX↔ODT, lost on PDF export unless explicitly enabled. Plain text + CSV + JSON: no metadata — embed in content if needed.",
  },
  {
    q: "What's the best file converter for graphics?",
    a: "Our image format converter for PNG/JPG/WebP/AVIF, HEIC to JPG for iPhone photos, SVG to PNG with resolution slider for vector-to-raster. For batch image work: ImageMagick CLI. For pro photo editing: Photoshop or GIMP.",
  },
  {
    q: "What file formats does my converter actually support?",
    a: "Read the docs carefully — 'PDF' alone is vague vs 'PDF v1.4-2.0 with embedded fonts and forms.' Test with your actual file before committing. Look for explicit limitations — trustworthy tools disclose them. Always verify output quality, not just success/failure.",
  },
];
