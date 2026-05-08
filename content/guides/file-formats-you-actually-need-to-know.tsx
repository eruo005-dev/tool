/* eslint-disable react/no-unescaped-entities */

export const intro = (
  <>
    <p>
      &ldquo;What file formats do I actually need to know about?&rdquo; gets
      asked weekly on r/learnprogramming and r/computerscience. The honest
      answer: maybe 20 formats cover 95% of everyday usage. The rest are
      historical curiosities or domain-specific.
    </p>
    <p>
      This guide is the practical taxonomy: the formats you&rsquo;ll actually
      encounter, what they&rsquo;re for, and the real differences between
      similar-looking ones (PNG vs JPG vs SVG, for example).
    </p>
  </>
);

export const toc = [
  { id: "documents", label: "Document formats" },
  { id: "images", label: "Image formats: PNG, JPG, SVG, WebP, AVIF" },
  { id: "data", label: "Data formats: CSV, JSON, XML, YAML" },
  { id: "audio-video", label: "Audio + video formats" },
  { id: "archives", label: "Archive + compression formats" },
  { id: "rare", label: "Converting between rare file formats" },
];

export const body = (
  <>
    <h2 id="documents">Document formats</h2>
    <ul>
      <li>
        <strong>PDF (Portable Document Format):</strong> visual-fidelity-first.
        Looks the same on every device. Hard to edit. Default for sharing
        finished documents.
      </li>
      <li>
        <strong>DOCX (Microsoft Word):</strong> editable rich text + layout.
        Works in Word, Google Docs, LibreOffice, Pages. The default for
        collaborative drafting.
      </li>
      <li>
        <strong>ODT (OpenDocument Text):</strong> open-source DOCX equivalent.
        Used by LibreOffice. Round-trips with DOCX with minor formatting drift.
      </li>
      <li>
        <strong>RTF (Rich Text Format):</strong> simpler than DOCX, plain-ish
        text with basic formatting. Mostly historical; useful for compatibility
        with old or specialized software.
      </li>
      <li>
        <strong>TXT (plain text):</strong> just characters, no formatting. The
        universal lowest-common-denominator format.
      </li>
      <li>
        <strong>MD (Markdown):</strong> plain text with structural conventions
        (# for headings, * for bold, etc.). The format engineers and technical
        writers prefer.
      </li>
      <li>
        <strong>EPUB:</strong> reflowable ebook format. Used by Kindle (via
        conversion to AZW3), iBooks, Adobe Digital Editions. Better than PDF
        for reading on small screens.
      </li>
    </ul>

    <h2 id="images">Image formats: PNG, JPG, SVG, WebP, AVIF (the differences explained)</h2>
    <p>
      Each image format optimizes for something different:
    </p>
    <ul>
      <li>
        <strong>JPG / JPEG:</strong> lossy compression for photos. 30+ years
        old; universal compatibility. Use for: photos, photo-realistic
        images, anywhere you need maximum compatibility.
      </li>
      <li>
        <strong>PNG:</strong> lossless. Supports transparency. Use for:
        screenshots, line art, logos with transparency, anything with sharp
        edges.
      </li>
      <li>
        <strong>GIF:</strong> animated images, lossless palette compression
        (256 colors max). Mostly replaced by video formats and WebP/AVIF for
        animation. Still ubiquitous because of compatibility.
      </li>
      <li>
        <strong>SVG (Scalable Vector Graphics):</strong> vector format. Defined
        by math, not pixels — infinite resolution. Use for logos, icons,
        anything that needs to scale.
      </li>
      <li>
        <strong>WebP:</strong> Google&rsquo;s modern format. Both lossy + lossless
        modes. 25–35% smaller than JPG/PNG at similar quality. Wide browser
        support. Use for web images.
      </li>
      <li>
        <strong>AVIF:</strong> newer than WebP, even better compression.
        Browser support reaching parity. Use for cutting-edge web; fallback to
        WebP for older browsers.
      </li>
      <li>
        <strong>HEIC / HEIF:</strong> Apple&rsquo;s default for iPhone photos.
        Better compression than JPG. Compatibility outside Apple ecosystem is
        spotty — convert to JPG before sharing widely. Use{" "}
        <a href="/tools/heic-to-jpg">our HEIC to JPG tool</a>.
      </li>
      <li>
        <strong>BMP:</strong> uncompressed bitmap. Huge files. Mostly
        historical / Windows-specific.
      </li>
      <li>
        <strong>TIFF:</strong> high-quality lossless image. Used in publishing,
        scanning, professional photography. Big files.
      </li>
    </ul>
    <p>
      Quick conversions on this site: <a
      href="/tools/image-format-converter">PNG/JPG/WebP converter</a>,{" "}
      <a href="/tools/svg-to-png">SVG to PNG</a>,{" "}
      <a href="/tools/heic-to-jpg">HEIC to JPG</a>,{" "}
      <a href="/tools/webp-to-jpg">WebP to JPG</a>.
    </p>

    <h2 id="data">Data formats: CSV, JSON, XML, YAML</h2>
    <ul>
      <li>
        <strong>CSV (comma-separated values):</strong> oldest, simplest,
        spreadsheet-native. Each row is a line; columns separated by commas.
        Works with Excel, R, Python pandas, anything. Limitation: no nested
        data.
      </li>
      <li>
        <strong>JSON (JavaScript Object Notation):</strong> nested data
        structure. Web API default. Hierarchical objects + arrays. Most
        modern data exchange.
      </li>
      <li>
        <strong>XML (eXtensible Markup Language):</strong> hierarchical with
        attributes. Older than JSON; common in enterprise systems, SOAP APIs,
        document formats (DOCX, ODT internally are zipped XML). More verbose
        than JSON but more expressive (attributes, namespaces).
      </li>
      <li>
        <strong>YAML (YAML Ain&rsquo;t Markup Language):</strong> human-friendly
        nested data. Used for configs (Kubernetes, Ansible, GitHub Actions).
        Indentation-sensitive — easy to break with whitespace.
      </li>
      <li>
        <strong>TOML:</strong> simpler than YAML for configs. Used by Cargo
        (Rust), Poetry (Python).
      </li>
      <li>
        <strong>Parquet, Avro, ORC:</strong> columnar binary formats for big
        data. Smaller and faster than CSV/JSON for analytics workloads. Used
        with Spark, BigQuery, Snowflake. Not human-readable.
      </li>
    </ul>
    <p>
      Conversions on this site:{" "}
      <a href="/tools/json-to-csv">JSON to CSV</a>,{" "}
      <a href="/tools/csv-to-json">CSV to JSON</a>,{" "}
      <a href="/tools/xml-to-csv">XML to CSV</a>,{" "}
      <a href="/tools/yaml-json-converter">YAML ↔ JSON</a>,{" "}
      <a href="/tools/csv-to-excel-xml">CSV to Excel</a>.
    </p>

    <h2 id="audio-video">Audio + video formats</h2>
    <p>
      Quick reference:
    </p>
    <ul>
      <li>
        <strong>Audio lossless:</strong> WAV (uncompressed), FLAC (compressed
        lossless), ALAC (Apple lossless).
      </li>
      <li>
        <strong>Audio lossy:</strong> MP3 (universal), AAC (newer, better
        compression), OGG (open-source), Opus (best compression).
      </li>
      <li>
        <strong>Video lossy:</strong> H.264/MP4 (universal default), H.265/HEVC
        (better compression but patent-encumbered), VP9 (Google&rsquo;s
        royalty-free), AV1 (newest royalty-free, best compression).
      </li>
      <li>
        <strong>Video containers:</strong> MP4, MOV, MKV, WebM, AVI. The
        container holds the codec — same H.264 video can be in MP4, MOV, or
        MKV.
      </li>
    </ul>
    <p>
      Audio/video conversion on this site is intentionally limited — proper
      transcoding needs FFmpeg, which is too heavy for browser-only.
    </p>

    <h2 id="archives">Archive + compression formats</h2>
    <ul>
      <li>
        <strong>ZIP:</strong> universal, every OS supports. Combines lossless
        compression + multiple files in one archive.
      </li>
      <li>
        <strong>7z:</strong> better compression than ZIP. Requires 7-Zip or
        compatible.
      </li>
      <li>
        <strong>RAR:</strong> proprietary. Was popular for piracy; declining.
      </li>
      <li>
        <strong>TAR:</strong> Unix archive (just bundles, no compression).
        Combined with gzip → .tar.gz, with bzip2 → .tar.bz2, with xz →
        .tar.xz.
      </li>
      <li>
        <strong>Single-file compression:</strong> gz, bz2, xz — compress one
        file at a time. Combined with TAR for archives of multiple files.
      </li>
    </ul>

    <h2 id="rare">Converting between rare file formats</h2>
    <p>
      For unusual or domain-specific formats:
    </p>
    <ul>
      <li>
        <strong>3D printing (STL, OBJ, 3MF, STEP):</strong> see our{" "}
        <a href="/guides/ebook-and-3d-file-conversion">ebook + 3D conversion guide</a>.
      </li>
      <li>
        <strong>CAD (DWG, DXF):</strong> AutoCAD&rsquo;s DWG is proprietary;
        DXF is more open. Free tools: LibreCAD, FreeCAD, ODA File Converter.
      </li>
      <li>
        <strong>GIS (Shapefile, GeoJSON, KML):</strong> QGIS handles them all,
        free + open-source.
      </li>
      <li>
        <strong>DAW project files (.als, .flp, .logicx):</strong> proprietary,
        no clean cross-DAW conversion. Export stems as WAV/AIFF.
      </li>
      <li>
        <strong>E-reader formats (AZW3, MOBI, KFX):</strong> Calibre is the
        universal converter. KFX (Kindle&rsquo;s newest) is partially supported.
      </li>
      <li>
        <strong>Genealogy (GEDCOM):</strong> universal genealogy format. Most
        genealogy software imports / exports it.
      </li>
    </ul>
    <p>
      For truly rare formats, the workflow is: search GitHub for an
      open-source converter (often exists), or extract the underlying data
      via a library (most rare formats are zipped XML or binary with a
      published spec).
    </p>
  </>
);

export const cta = {
  label: "PNG/JPG/WebP image converter (free)",
  targetSlug: "image-format-converter",
};

export const faq = [
  {
    q: "What file formats do I actually need to know about?",
    a: "About 20 formats cover 95% of everyday use: PDF/DOCX/ODT/RTF/TXT/MD/EPUB for documents, JPG/PNG/GIF/SVG/WebP/AVIF/HEIC/TIFF for images, CSV/JSON/XML/YAML for data, MP3/AAC/MP4/H.264 for audio/video, ZIP/TAR.GZ for archives. Everything else is domain-specific.",
  },
  {
    q: "What's the difference between PNG, JPG, and SVG?",
    a: "JPG: lossy compression for photos. PNG: lossless with transparency, for screenshots and line art. SVG: vector format, infinite resolution, for logos and icons. JPG/PNG are pixel-based; SVG is math-based. Use JPG for photos, PNG for sharp-edged content, SVG for anything that needs to scale.",
  },
  {
    q: "Can I convert between rare file formats?",
    a: "Yes for most cases. 3D printing (STL/OBJ/3MF) — see our 3D conversion guide. CAD (DWG/DXF) — LibreCAD/FreeCAD. GIS (Shapefile/GeoJSON/KML) — QGIS. E-reader (AZW3/MOBI) — Calibre. Genealogy (GEDCOM) — most genealogy software. For truly obscure formats, search GitHub — open-source converters often exist.",
  },
  {
    q: "What's the best file converter for graphics?",
    a: "For PNG/JPG/WebP/AVIF: our image format converter handles all of them browser-side. For HEIC: HEIC to JPG. For SVG to raster: SVG to PNG with resolution slider. For batch image conversion: macOS Quick Actions, Windows ImageMagick, or cross-platform GIMP for advanced work.",
  },
];
