/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;Why does my file look worse after converting?&rdquo; is the
      universal frustration. The good news: most quality loss is preventable
      once you understand which conversion steps are lossy and which aren&rsquo;t.
      This guide is the practical breakdown — what each conversion type does to
      your file, when quality loss is inevitable, and how to minimize it.
    </p>
  </>
);

export const toc = [
  { id: "lossy-vs-lossless", label: "Lossy vs lossless conversions" },
  { id: "image-quality", label: "Preserving image quality" },
  { id: "metadata", label: "Keeping metadata across conversions" },
  { id: "compression", label: "Does compression affect conversion?" },
  { id: "multi-stage", label: "Multi-stage conversion damage" },
  { id: "structure", label: "Preserving structure (tables, lists)" },
];

export const body = (
  <>
    <h2 id="lossy-vs-lossless">Lossy vs lossless: the most important distinction</h2>
    <p>
      Every conversion is one of two types:
    </p>
    <ul>
      <li>
        <strong>Lossless:</strong> the original can be perfectly reconstructed
        from the output. Examples: PNG to BMP, WAV to FLAC, plain text to plain
        text. No quality concern; convert freely.
      </li>
      <li>
        <strong>Lossy:</strong> some information is permanently discarded.
        Examples: PNG to JPG, WAV to MP3, complex PDF to plain text. Quality
        degrades; only convert when you accept the loss.
      </li>
    </ul>
    <p>
      The trap: many lossy conversions LOOK lossless at default settings.
      Converting a PNG to JPG at 100% quality still throws away color
      information you can&rsquo;t see — but a third converter that re-saves
      the same JPG will compound the loss. Quality degrades incrementally
      with each save.
    </p>

    <h2 id="image-quality">Preserving image quality during conversion</h2>
    <p>
      The hierarchy of image format quality:
    </p>
    <ul>
      <li>
        <strong>Lossless formats (no quality loss):</strong> PNG, BMP, TIFF,
        WebP-lossless, AVIF-lossless. Use for screenshots, illustrations, line
        art, anything with sharp edges.
      </li>
      <li>
        <strong>Lossy formats:</strong> JPG (oldest), WebP-lossy, AVIF-lossy,
        HEIC. Better compression for photos. Quality settings 85–95% are
        usually visually indistinguishable from the source.
      </li>
      <li>
        <strong>Vector:</strong> SVG, PDF (sometimes). Infinite resolution.
        Use for logos, icons, anything you need to scale.
      </li>
    </ul>
    <p>
      The conversion rules:
    </p>
    <ul>
      <li>
        <strong>Lossless ↔ lossless:</strong> safe. PNG ↔ BMP ↔ TIFF: no quality
        change, just file size differences.
      </li>
      <li>
        <strong>Lossless → lossy:</strong> quality loss baked in. PNG → JPG at
        90% is fine for one save. PNG → JPG → re-save → re-save accumulates
        artifacts.
      </li>
      <li>
        <strong>Lossy → lossless:</strong> file gets bigger but you don&rsquo;t
        recover quality. JPG → PNG keeps the JPG artifacts forever.
      </li>
      <li>
        <strong>Vector → raster:</strong> set the right output resolution. SVG
        → PNG at 96 DPI vs 300 DPI is a huge quality difference. Use{" "}
        <a href="/tools/svg-to-png">our SVG to PNG tool</a> with the resolution
        slider.
      </li>
      <li>
        <strong>Raster → vector:</strong> brittle. Auto-tracing tools work for
        clean line art, fail on photos. Better to find the original vector or
        recreate.
      </li>
    </ul>

    <h2 id="metadata">Keeping metadata across conversions</h2>
    <p>
      Metadata = the data <em>about</em> the file: author, creation date, GPS
      coordinates, camera model, document properties. Every format handles it
      differently:
    </p>
    <ul>
      <li>
        <strong>JPEG, HEIC, TIFF:</strong> embed EXIF metadata (camera, GPS,
        date, exposure). Most converters preserve EXIF on simple format
        changes; check the output if you need it. <a
        href="/tools/pdf-metadata-viewer">Our PDF metadata viewer</a> shows what
        survived a conversion.
      </li>
      <li>
        <strong>PDF:</strong> embeds title, author, subject, keywords. Preserved
        across most PDF→PDF operations; lost when you convert PDF → image
        formats. Use{" "}
        <a href="/tools/pdf-metadata-remover">our metadata remover</a> if you
        want to strip metadata before sharing.
      </li>
      <li>
        <strong>DOCX, ODT:</strong> embed author, last-modified-by,
        revision history. Preserved across DOCX ↔ ODT round-trips; lost on
        export to PDF unless you explicitly include document properties.
      </li>
      <li>
        <strong>Plain text + CSV + JSON:</strong> no built-in metadata. Anything
        you need to preserve goes in the file content itself (a header
        comment, a metadata.json sidecar).
      </li>
    </ul>
    <p>
      <strong>The privacy angle:</strong> metadata often contains things you
      didn&rsquo;t intend to share — GPS coordinates from your home, the
      Word document&rsquo;s revision history showing who edited what.
      Always strip metadata before sharing sensitive files publicly.
    </p>

    <h2 id="compression">Does compression affect format conversion?</h2>
    <p>
      Three different things people mean by &ldquo;compression&rdquo;:
    </p>
    <ul>
      <li>
        <strong>Lossless compression</strong> (ZIP, gzip, PNG&rsquo;s internal
        compression, FLAC). Doesn&rsquo;t affect quality; just file size.
        Convert freely.
      </li>
      <li>
        <strong>Lossy compression</strong> (JPG quality slider, MP3 bitrate,
        H.264 CRF). Quality degrades with more aggressive compression. Save at
        the highest quality you can afford to.
      </li>
      <li>
        <strong>Pre-compression archives</strong> (RAR, 7z, ZIP). The
        underlying files are unchanged; the archive is just a container. Always
        unzip before converting.
      </li>
    </ul>
    <p>
      Common pitfalls: converting a heavily-compressed JPG to PNG and expecting
      better quality (you don&rsquo;t recover what was thrown away);
      double-zipping (zipping a ZIP makes the file bigger, not smaller).
    </p>

    <h2 id="multi-stage">Does converting files multiple times damage quality?</h2>
    <p>
      Depends on the chain:
    </p>
    <ul>
      <li>
        <strong>All lossless:</strong> no damage no matter how many times.
        PNG → BMP → TIFF → PNG is identical to the original.
      </li>
      <li>
        <strong>One lossy step:</strong> quality reduced once, stable
        thereafter if you stay in lossless formats. PNG → JPG → BMP → PNG
        keeps the JPG&rsquo;s loss but doesn&rsquo;t add more.
      </li>
      <li>
        <strong>Multiple lossy steps:</strong> generation loss compounds. PNG
        → JPG → JPG (re-saved) → JPG accumulates artifacts. Even at 95%
        quality each step, 10 generations of re-saves visibly degrade.
      </li>
      <li>
        <strong>Mixed lossy formats:</strong> the worst case. PNG → JPG → WebP
        → AVIF compounds different lossy algorithms&rsquo; artifacts in
        unpredictable ways. Pick one lossy target and stay there, or stay
        lossless throughout.
      </li>
    </ul>
    <p>
      The practical rule: keep your master files in a lossless format. Export
      to lossy formats only when needed for distribution. Never re-edit a
      lossy file — go back to the lossless master, edit, re-export.
    </p>

    <h2 id="structure">Preserving structure: tables, lists, hierarchy</h2>
    <p>
      Format conversions across very different structures lose the most:
    </p>
    <ul>
      <li>
        <strong>Tables in PDF → plain text:</strong> rows become lines, columns
        become spaces. Original alignment is lost. Workaround: convert to
        Markdown (preserves table syntax) or use ABBYY/Acrobat Pro for higher
        fidelity.
      </li>
      <li>
        <strong>Headings + lists in HTML → plain text:</strong> hierarchy
        signals are lost. Markdown is the better intermediate.
      </li>
      <li>
        <strong>Multi-column documents → linear text:</strong> columns
        interleave. Free tools rarely handle this well.
      </li>
      <li>
        <strong>Spreadsheet formulas → CSV:</strong> formulas evaluate to
        their cached values; the formula logic is lost. Save as XLSX to
        preserve formulas; CSV is values-only.
      </li>
    </ul>
    <p>
      The honest take: if structure preservation matters, plan to manually
      verify and clean up after conversion. Free converters get you 80%
      there; the last 20% is human work.
    </p>
  </>
);

export const cta = {
  label: "Strip PDF metadata before sharing",
  targetSlug: "pdf-metadata-remover",
};

export const faq = [
  {
    q: "Why does converting files sometimes lose quality?",
    a: "Lossy conversions (PNG to JPG, WAV to MP3, complex PDF to plain text) discard information permanently. Even 'high quality' settings lose data — it just isn't visible. Quality degrades incrementally with each lossy save. Lossless conversions (PNG to BMP, FLAC to WAV) don't lose anything. Know which type you're doing.",
  },
  {
    q: "How do I convert files without losing metadata?",
    a: "JPG/HEIC/TIFF: most converters preserve EXIF on simple format changes. PDF: preserved across PDF↔PDF, lost converting to image formats. DOCX: preserved on DOCX↔ODT, lost on PDF export unless explicitly enabled. Plain text + CSV + JSON: no metadata support — embed in content if needed. Always check the output to verify.",
  },
  {
    q: "Does file compression affect format conversion?",
    a: "Lossless compression (ZIP, PNG internal, FLAC): no impact on quality. Lossy compression (JPG, MP3, H.264): quality degrades with more aggressive settings. Pre-compression archives (ZIP, RAR): unzip first then convert — converting compressed archives doesn't process the underlying files.",
  },
  {
    q: "Does converting files multiple times damage quality?",
    a: "Lossless chains: no damage no matter how many times. Single lossy step then lossless: stable after the first lossy save. Multiple lossy steps: generation loss compounds — visible after 10+ JPG re-saves at high quality, faster at lower quality. Keep masters in lossless format; export to lossy only for distribution.",
  },
  {
    q: "How do I keep file structure when converting formats?",
    a: "Tables and multi-column layouts lose structure on most free converters — use ABBYY FineReader or Adobe Acrobat Pro for high-fidelity. Use Markdown as an intermediate for HTML→text — preserves hierarchy. For spreadsheet formulas, save as XLSX (CSV is values-only). Plan to manually clean up after — free tools get 80% there.",
  },
];
